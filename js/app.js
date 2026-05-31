"use strict";

// ---------- helpers ----------
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const LEARNED_KEY = "km3_learned_v1";

function loadLearned() {
  try {
    return new Set(JSON.parse(localStorage.getItem(LEARNED_KEY)) || []);
  } catch {
    return new Set();
  }
}
function saveLearned(set) {
  localStorage.setItem(LEARNED_KEY, JSON.stringify(Array.from(set)));
}
let learned = loadLearned();

// ---------- mode switching ----------
const VIEWS = { exam: "#view-exam", cards: "#view-cards", test: "#view-test" };

function switchMode(mode) {
  $$(".mode-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.mode === mode));
  Object.entries(VIEWS).forEach(([m, sel]) => $(sel).classList.toggle("hidden", m !== mode));
  if (mode === "cards") renderCard();
}

$$(".mode-btn").forEach((btn) => btn.addEventListener("click", () => switchMode(btn.dataset.mode)));

// =====================================================
//  EXAM MODE — 8 random questions
// =====================================================
const EXAM_SIZE = 8;
let examSet = [];
let examIdx = 0;
let examRepeat = [];

function startExam() {
  examSet = shuffle(QUESTIONS).slice(0, EXAM_SIZE);
  examIdx = 0;
  examRepeat = [];
  $("#exam-intro").classList.add("hidden");
  $("#exam-result").classList.add("hidden");
  $("#exam-run").classList.remove("hidden");
  renderExamQuestion();
}

function renderExamQuestion() {
  const item = examSet[examIdx];
  $("#exam-progress").textContent = `Вопрос ${examIdx + 1} / ${EXAM_SIZE}`;
  $("#exam-unit").textContent = item.unit;
  $("#exam-question").textContent = item.q;
  $("#exam-answer").textContent = item.answer;
  $("#exam-answer-box").classList.add("hidden");
  $("#exam-reveal").classList.remove("hidden");
  $("#exam-rate").classList.add("hidden");
}

function revealExam() {
  $("#exam-answer-box").classList.remove("hidden");
  $("#exam-reveal").classList.add("hidden");
  $("#exam-rate").classList.remove("hidden");
}

function rateExam(rate) {
  if (rate === "repeat") examRepeat.push(examSet[examIdx]);
  examIdx++;
  if (examIdx >= EXAM_SIZE) finishExam();
  else renderExamQuestion();
}

function finishExam() {
  $("#exam-run").classList.add("hidden");
  $("#exam-result").classList.remove("hidden");
  const known = EXAM_SIZE - examRepeat.length;
  $("#exam-score").textContent = `${known} / ${EXAM_SIZE}`;
  let verdict;
  if (known === EXAM_SIZE) verdict = "Отлично! Готов к КМ3. 🎉";
  else if (known >= 6) verdict = "Хорошо, но пара тем требует повторения.";
  else if (known >= 4) verdict = "Неплохо. Повтори отмеченные вопросы.";
  else verdict = "Стоит ещё позаниматься в режиме «Карточки».";
  $("#exam-verdict").textContent = verdict;

  const box = $("#exam-repeat-list");
  if (examRepeat.length) {
    const items = examRepeat.map((q) => `<li>${escapeHtml(q.q)}</li>`).join("");
    box.innerHTML = `<h3>Повторить:</h3><ul>${items}</ul>`;
  } else {
    box.innerHTML = "";
  }
}

function escapeHtml(s) {
  return s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

$("#exam-start").addEventListener("click", startExam);
$("#exam-again").addEventListener("click", startExam);
$("#exam-reveal").addEventListener("click", revealExam);
$$('#exam-rate [data-rate]').forEach((b) => b.addEventListener("click", () => rateExam(b.dataset.rate)));

// =====================================================
//  FLASHCARDS MODE — all 45, filter by unit
// =====================================================
let cardList = QUESTIONS.slice();
let cardIdx = 0;

function buildUnitFilter() {
  const units = Array.from(new Set(QUESTIONS.map((q) => q.unit)));
  const sel = $("#unit-filter");
  sel.innerHTML =
    `<option value="all">Все темы (45)</option>` +
    units.map((u) => `<option value="${escapeHtml(u)}">${escapeHtml(u)}</option>`).join("");
  sel.addEventListener("change", () => {
    const v = sel.value;
    cardList = v === "all" ? QUESTIONS.slice() : QUESTIONS.filter((q) => q.unit === v);
    cardIdx = 0;
    renderCard();
  });
}

function renderCard() {
  if (!cardList.length) return;
  const item = cardList[cardIdx];
  const box = $("#card-box");
  $("#card-unit").textContent = item.unit;
  $("#card-question").textContent = item.q;
  $("#card-answer").textContent = item.answer;
  $("#card-answer-box").classList.add("hidden");
  $("#cards-counter").textContent = `${cardIdx + 1} / ${cardList.length}`;
  box.classList.toggle("learned", learned.has(item.id));
  const btn = $("#card-known");
  btn.textContent = learned.has(item.id) ? "Снять отметку" : "Отметить «выучено»";
}

function flipCard() {
  $("#card-answer-box").classList.toggle("hidden");
}
function nextCard() {
  cardIdx = (cardIdx + 1) % cardList.length;
  renderCard();
}
function prevCard() {
  cardIdx = (cardIdx - 1 + cardList.length) % cardList.length;
  renderCard();
}
function toggleKnown() {
  const id = cardList[cardIdx].id;
  if (learned.has(id)) learned.delete(id);
  else learned.add(id);
  saveLearned(learned);
  renderCard();
}
function resetProgress() {
  learned = new Set();
  saveLearned(learned);
  renderCard();
}

$("#card-flip").addEventListener("click", flipCard);
$("#card-next").addEventListener("click", nextCard);
$("#card-prev").addEventListener("click", prevCard);
$("#card-known").addEventListener("click", toggleKnown);
$("#cards-reset").addEventListener("click", resetProgress);

// =====================================================
//  MCQ TEST MODE
// =====================================================
let testSet = [];
let testIdx = 0;
let testScore = 0;
let testAnswered = false;

function startTest() {
  testSet = shuffle(MCQ);
  testIdx = 0;
  testScore = 0;
  $("#test-intro").classList.add("hidden");
  $("#test-result").classList.add("hidden");
  $("#test-run").classList.remove("hidden");
  renderTestQuestion();
}

function renderTestQuestion() {
  testAnswered = false;
  const item = testSet[testIdx];
  $("#test-progress").textContent = `Вопрос ${testIdx + 1} / ${testSet.length} · Счёт: ${testScore}`;
  $("#test-unit").textContent = item.unit;
  $("#test-question").textContent = item.q;
  $("#test-explain").classList.add("hidden");
  $("#test-next").classList.add("hidden");

  const opts = $("#test-options");
  opts.innerHTML = "";
  item.options.forEach((text, i) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.textContent = text;
    b.addEventListener("click", () => answerTest(i));
    opts.appendChild(b);
  });
}

function answerTest(choice) {
  if (testAnswered) return;
  testAnswered = true;
  const item = testSet[testIdx];
  const buttons = $$("#test-options .option");
  buttons.forEach((b, i) => {
    b.disabled = true;
    if (i === item.correct) b.classList.add("correct");
    else if (i === choice) b.classList.add("wrong");
  });
  if (choice === item.correct) testScore++;
  const exp = $("#test-explain");
  const right = item.options[item.correct];
  exp.innerHTML =
    (choice === item.correct ? "✔ Верно. " : "✘ Неверно. Правильный ответ: <b>" + escapeHtml(right) + "</b>. ") +
    escapeHtml(item.why);
  exp.classList.remove("hidden");
  $("#test-progress").textContent = `Вопрос ${testIdx + 1} / ${testSet.length} · Счёт: ${testScore}`;
  $("#test-next").classList.remove("hidden");
  $("#test-next").textContent = testIdx + 1 >= testSet.length ? "Показать результат" : "Дальше →";
}

function nextTest() {
  testIdx++;
  if (testIdx >= testSet.length) finishTest();
  else renderTestQuestion();
}

function finishTest() {
  $("#test-run").classList.add("hidden");
  $("#test-result").classList.remove("hidden");
  const total = testSet.length;
  const pct = Math.round((testScore / total) * 100);
  $("#test-score").textContent = `${testScore} / ${total} (${pct}%)`;
  let verdict;
  if (pct >= 90) verdict = "Превосходно! Терминология усвоена. 🎉";
  else if (pct >= 70) verdict = "Хорошо. Подтяни темы, где ошибся.";
  else if (pct >= 50) verdict = "Средне. Повтори карточки и пройди ещё раз.";
  else verdict = "Нужно ещё поработать с материалом.";
  $("#test-verdict").textContent = verdict;
}

$("#test-start").addEventListener("click", startTest);
$("#test-again").addEventListener("click", startTest);
$("#test-next").addEventListener("click", nextTest);

// ---------- init ----------
buildUnitFilter();
renderCard();
