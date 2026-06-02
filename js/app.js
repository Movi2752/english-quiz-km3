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
const VIEWS = {
  exam: "#view-exam",
  cards: "#view-cards",
  match: "#view-match",
  defs: "#view-defs",
  test: "#view-test",
};

function switchMode(mode) {
  $$(".mode-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.mode === mode));
  Object.entries(VIEWS).forEach(([m, sel]) => $(sel).classList.toggle("hidden", m !== mode));
  if (mode === "cards") renderCard();
  if (mode === "match") showMatchIntro();
  if (mode === "defs") showDefsIntro();
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
  $("#exam-answer").innerHTML = item.answer;
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
  $("#card-answer").innerHTML = item.answer;
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

// =====================================================
//  MATCH MODE — pair English term with Russian translation
// =====================================================
const MATCH_PAIRS = 8; // pairs per round
const MATCH_BEST_KEY = "km3_match_best_v1";

let matchSelected = null; // { el, key, side }
let matchRemaining = 0;
let matchMoves = 0;
let matchTimer = null;
let matchSeconds = 0;
let matchLock = false;

function unitLabel(u) {
  return `Unit ${u}`;
}

function buildMatchUnitFilter() {
  const units = Array.from(new Set(TERMS.map((t) => t.unit))).sort((a, b) => a - b);
  const sel = $("#match-unit");
  sel.innerHTML =
    `<option value="all">Все темы</option>` +
    units.map((u) => `<option value="${u}">${unitLabel(u)}</option>`).join("");
}

function loadMatchBest() {
  try {
    return JSON.parse(localStorage.getItem(MATCH_BEST_KEY)) || {};
  } catch {
    return {};
  }
}
function saveMatchBest(map) {
  localStorage.setItem(MATCH_BEST_KEY, JSON.stringify(map));
}

function showMatchIntro() {
  $("#match-intro").classList.remove("hidden");
  $("#match-run").classList.add("hidden");
  $("#match-done").classList.add("hidden");
  const best = loadMatchBest()[$("#match-unit").value];
  $("#match-best").textContent = best ? `Лучшее время: ${formatTime(best)}` : "";
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

function startMatch() {
  const filter = $("#match-unit").value;
  const pool = filter === "all" ? TERMS.slice() : TERMS.filter((t) => String(t.unit) === filter);
  const chosen = shuffle(pool).slice(0, Math.min(MATCH_PAIRS, pool.length));

  matchRemaining = chosen.length;
  matchMoves = 0;
  matchSeconds = 0;
  matchSelected = null;
  matchLock = false;

  $("#match-intro").classList.add("hidden");
  $("#match-done").classList.add("hidden");
  $("#match-run").classList.remove("hidden");

  const leftCards = chosen.map((t, i) => ({ key: i, side: "en", text: t.en }));
  const rightCards = chosen.map((t, i) => ({ key: i, side: "ru", text: t.ru }));
  const cells = shuffle(leftCards.concat(rightCards));

  const grid = $("#match-grid");
  grid.innerHTML = "";
  cells.forEach((c) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = `match-cell ${c.side}`;
    b.textContent = c.text;
    b.dataset.key = c.key;
    b.dataset.side = c.side;
    b.addEventListener("click", () => onMatchClick(b));
    grid.appendChild(b);
  });

  updateMatchStatus();
  clearInterval(matchTimer);
  matchTimer = setInterval(() => {
    matchSeconds++;
    updateMatchStatus();
  }, 1000);
}

function updateMatchStatus() {
  $("#match-progress").textContent = `Осталось пар: ${matchRemaining}`;
  $("#match-stats").textContent = `⏱ ${formatTime(matchSeconds)} · ходов: ${matchMoves}`;
}

function onMatchClick(el) {
  if (matchLock) return;
  if (el.classList.contains("done") || el === matchSelected?.el) return;

  if (!matchSelected) {
    matchSelected = { el, key: el.dataset.key, side: el.dataset.side };
    el.classList.add("selected");
    return;
  }

  // second pick
  matchMoves++;
  const first = matchSelected;
  const sameKey = first.key === el.dataset.key;
  const diffSide = first.side !== el.dataset.side;

  if (sameKey && diffSide) {
    el.classList.add("done");
    first.el.classList.remove("selected");
    first.el.classList.add("done");
    matchSelected = null;
    matchRemaining--;
    updateMatchStatus();
    if (matchRemaining === 0) finishMatch();
  } else {
    matchLock = true;
    el.classList.add("wrong");
    first.el.classList.add("wrong");
    setTimeout(() => {
      el.classList.remove("wrong");
      first.el.classList.remove("wrong", "selected");
      matchSelected = null;
      matchLock = false;
    }, 650);
    updateMatchStatus();
  }
}

function finishMatch() {
  clearInterval(matchTimer);
  const filter = $("#match-unit").value;
  const best = loadMatchBest();
  const prev = best[filter];
  const isRecord = !prev || matchSeconds < prev;
  if (isRecord) {
    best[filter] = matchSeconds;
    saveMatchBest(best);
  }
  $("#match-run").classList.add("hidden");
  $("#match-done").classList.remove("hidden");
  $("#match-result").textContent = `${formatTime(matchSeconds)} · ${matchMoves} ходов`;
  $("#match-verdict").textContent = isRecord ? "Новый рекорд! 🏆" : `Рекорд: ${formatTime(best[filter])}`;
}

$("#match-start").addEventListener("click", startMatch);
$("#match-again").addEventListener("click", startMatch);
$("#match-unit").addEventListener("change", showMatchIntro);

// =====================================================
//  DEFINITION QUIZ — read English definition, pick the term
// =====================================================
const DEFS_SIZE = 12;
let defsSet = [];
let defsIdx = 0;
let defsScore = 0;
let defsStreak = 0;
let defsBestStreak = 0;
let defsAnswered = false;

function showDefsIntro() {
  $("#defs-intro").classList.remove("hidden");
  $("#defs-run").classList.add("hidden");
  $("#defs-result").classList.add("hidden");
}

function startDefs() {
  defsSet = shuffle(DEFS).slice(0, DEFS_SIZE);
  defsIdx = 0;
  defsScore = 0;
  defsStreak = 0;
  defsBestStreak = 0;
  $("#defs-intro").classList.add("hidden");
  $("#defs-result").classList.add("hidden");
  $("#defs-run").classList.remove("hidden");
  renderDefsQuestion();
}

function renderDefsQuestion() {
  defsAnswered = false;
  const item = defsSet[defsIdx];
  $("#defs-progress").textContent = `Вопрос ${defsIdx + 1} / ${defsSet.length} · Счёт: ${defsScore}`;
  $("#defs-streak").textContent = `🔥 Серия: ${defsStreak}`;
  $("#defs-question").textContent = item.def;
  $("#defs-explain").classList.add("hidden");
  $("#defs-next").classList.add("hidden");

  const distractors = shuffle(DEFS.filter((d) => d.term !== item.term)).slice(0, 3).map((d) => d.term);
  const options = shuffle([item.term, ...distractors]);

  const box = $("#defs-options");
  box.innerHTML = "";
  options.forEach((term) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.textContent = term;
    b.addEventListener("click", () => answerDefs(term, b));
    box.appendChild(b);
  });
}

function answerDefs(choice, btn) {
  if (defsAnswered) return;
  defsAnswered = true;
  const item = defsSet[defsIdx];
  const correct = choice === item.term;
  $$("#defs-options .option").forEach((b) => {
    b.disabled = true;
    if (b.textContent === item.term) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });
  if (correct) {
    defsScore++;
    defsStreak++;
    defsBestStreak = Math.max(defsBestStreak, defsStreak);
  } else {
    defsStreak = 0;
  }
  const exp = $("#defs-explain");
  exp.innerHTML = correct
    ? "✔ Верно."
    : `✘ Неверно. Правильный термин: <b>${escapeHtml(item.term)}</b>.`;
  exp.classList.remove("hidden");
  $("#defs-progress").textContent = `Вопрос ${defsIdx + 1} / ${defsSet.length} · Счёт: ${defsScore}`;
  $("#defs-streak").textContent = `🔥 Серия: ${defsStreak}`;
  $("#defs-next").classList.remove("hidden");
  $("#defs-next").textContent = defsIdx + 1 >= defsSet.length ? "Показать результат" : "Дальше →";
}

function nextDefs() {
  defsIdx++;
  if (defsIdx >= defsSet.length) finishDefs();
  else renderDefsQuestion();
}

function finishDefs() {
  $("#defs-run").classList.add("hidden");
  $("#defs-result").classList.remove("hidden");
  const total = defsSet.length;
  const pct = Math.round((defsScore / total) * 100);
  $("#defs-score").textContent = `${defsScore} / ${total} (${pct}%)`;
  let verdict = `Лучшая серия: ${defsBestStreak}. `;
  if (pct >= 90) verdict += "Термины знаешь отлично! 🎉";
  else if (pct >= 70) verdict += "Хорошо, но пара терминов хромает.";
  else if (pct >= 50) verdict += "Средне — повтори глоссарий.";
  else verdict += "Нужно подучить определения.";
  $("#defs-verdict").textContent = verdict;
}

$("#defs-start").addEventListener("click", startDefs);
$("#defs-again").addEventListener("click", startDefs);
$("#defs-next").addEventListener("click", nextDefs);

// ---------- init ----------
buildUnitFilter();
buildMatchUnitFilter();
renderCard();
