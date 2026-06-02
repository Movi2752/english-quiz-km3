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
  razbor: "#view-razbor",
  cloze: "#view-cloze",
  match: "#view-match",
  defs: "#view-defs",
  test: "#view-test",
};

function switchMode(mode) {
  $$(".mode-btn").forEach((b) => b.classList.toggle("is-active", b.dataset.mode === mode));
  Object.entries(VIEWS).forEach(([m, sel]) => $(sel).classList.toggle("hidden", m !== mode));
  if (mode === "cards") renderCard();
  if (mode === "razbor") showRazborIntro();
  if (mode === "cloze") showClozeIntro();
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

// =====================================================
//  CLOZE MODE — fill the hidden key terms in real answers
// =====================================================
const CLOZE_SIZE = 8;
let clozeSet = [];
let clozeIdx = 0;
let clozeChecked = false;
let clozeRightTotal = 0;
let clozeBlankTotal = 0;

// questions whose answers contain at least one <b>key term</b>
const CLOZE_POOL = QUESTIONS.filter((q) => /<b>[^<]+<\/b>/i.test(q.answer));

function buildClozeUnitFilter() {
  const units = Array.from(new Set(CLOZE_POOL.map((q) => q.unit)));
  const sel = $("#cloze-unit");
  sel.innerHTML =
    `<option value="all">Все темы</option>` +
    units.map((u) => `<option value="${escapeHtml(u)}">${escapeHtml(u)}</option>`).join("");
}

function showClozeIntro() {
  $("#cloze-intro").classList.remove("hidden");
  $("#cloze-run").classList.add("hidden");
  $("#cloze-result").classList.add("hidden");
}

function normalizeCloze(s) {
  return s.toLowerCase().replace(/\s+/g, " ").replace(/[.,;:!?"'`()]/g, "").trim();
}

function startCloze() {
  const filter = $("#cloze-unit").value;
  const pool = filter === "all" ? CLOZE_POOL.slice() : CLOZE_POOL.filter((q) => q.unit === filter);
  clozeSet = shuffle(pool).slice(0, Math.min(CLOZE_SIZE, pool.length));
  clozeIdx = 0;
  clozeRightTotal = 0;
  clozeBlankTotal = 0;
  $("#cloze-intro").classList.add("hidden");
  $("#cloze-result").classList.add("hidden");
  $("#cloze-run").classList.remove("hidden");
  renderClozeQuestion();
}

function renderClozeQuestion() {
  clozeChecked = false;
  const item = clozeSet[clozeIdx];
  $("#cloze-progress").textContent = `Ответ ${clozeIdx + 1} / ${clozeSet.length}`;
  $("#cloze-unit-label").textContent = item.unit;
  $("#cloze-question").textContent = item.q;

  const box = $("#cloze-answer");
  box.innerHTML = item.answer;
  box.querySelectorAll("b").forEach((b) => {
    const answer = b.textContent;
    const input = document.createElement("input");
    input.type = "text";
    input.className = "cloze-blank";
    input.dataset.answer = answer;
    input.size = Math.max(answer.length, 4);
    input.autocomplete = "off";
    input.spellcheck = false;
    input.setAttribute("aria-label", "пропуск");
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !clozeChecked) checkCloze();
    });
    b.replaceWith(input);
  });

  $("#cloze-feedback").classList.add("hidden");
  $("#cloze-check").classList.remove("hidden");
  $("#cloze-reveal").classList.remove("hidden");
  $("#cloze-next").classList.add("hidden");

  const first = box.querySelector(".cloze-blank");
  if (first) first.focus();
}

function checkCloze() {
  if (clozeChecked) return;
  clozeChecked = true;
  const inputs = $$("#cloze-answer .cloze-blank");
  let right = 0;
  inputs.forEach((inp) => {
    inp.disabled = true;
    const ok = normalizeCloze(inp.value) === normalizeCloze(inp.dataset.answer);
    inp.classList.add(ok ? "correct" : "wrong");
    if (!ok) inp.value = inp.dataset.answer;
    if (ok) right++;
  });
  clozeRightTotal += right;
  clozeBlankTotal += inputs.length;

  const fb = $("#cloze-feedback");
  const pct = Math.round((right / inputs.length) * 100);
  fb.innerHTML = `Угадано <b>${right}</b> из <b>${inputs.length}</b> (${pct}%). Красным показан верный термин.`;
  fb.classList.remove("hidden");

  $("#cloze-check").classList.add("hidden");
  $("#cloze-reveal").classList.add("hidden");
  $("#cloze-next").classList.remove("hidden");
  $("#cloze-next").textContent = clozeIdx + 1 >= clozeSet.length ? "Показать результат" : "Дальше →";
}

function revealCloze() {
  if (clozeChecked) return;
  clozeChecked = true;
  const inputs = $$("#cloze-answer .cloze-blank");
  inputs.forEach((inp) => {
    inp.disabled = true;
    inp.value = inp.dataset.answer;
    inp.classList.add("revealed");
  });
  $("#cloze-feedback").classList.remove("hidden");
  $("#cloze-feedback").innerHTML = "Ответ показан. Эти пропуски не засчитаны.";
  $("#cloze-check").classList.add("hidden");
  $("#cloze-reveal").classList.add("hidden");
  $("#cloze-next").classList.remove("hidden");
  $("#cloze-next").textContent = clozeIdx + 1 >= clozeSet.length ? "Показать результат" : "Дальше →";
}

function nextCloze() {
  clozeIdx++;
  if (clozeIdx >= clozeSet.length) finishCloze();
  else renderClozeQuestion();
}

function finishCloze() {
  $("#cloze-run").classList.add("hidden");
  $("#cloze-result").classList.remove("hidden");
  const pct = clozeBlankTotal ? Math.round((clozeRightTotal / clozeBlankTotal) * 100) : 0;
  $("#cloze-score").textContent = `${clozeRightTotal} / ${clozeBlankTotal} (${pct}%)`;
  let verdict;
  if (pct >= 90) verdict = "Формулировки в голове! Готов к КМ3. 🎉";
  else if (pct >= 70) verdict = "Сильно. Подтяни пару терминов.";
  else if (pct >= 50) verdict = "Неплохо — прогони карточки и повтори.";
  else verdict = "Сначала поучи ответы в «Карточках», потом сюда.";
  $("#cloze-verdict").textContent = verdict;
}

$("#cloze-start").addEventListener("click", startCloze);
$("#cloze-again").addEventListener("click", startCloze);
$("#cloze-check").addEventListener("click", checkCloze);
$("#cloze-reveal").addEventListener("click", revealCloze);
$("#cloze-next").addEventListener("click", nextCloze);

// =====================================================
//  RAZBOR MODE — assign each property to the right concept
//  Trains the core KM3 skill: structure recall + distinctions.
//  Auto-built from QUESTIONS answers (<li><b>label</b> — property</li>).
// =====================================================
const RAZBOR_QUESTIONS = 6; // questions per round

// Parse one answer into [{label, prop}]; needs >=2 distinct labeled points.
function parseStructured(item) {
  const tmp = document.createElement("div");
  tmp.innerHTML = item.answer;
  const points = [];
  tmp.querySelectorAll("li").forEach((li) => {
    const b = li.querySelector("b");
    if (!b) return;
    const label = b.textContent.trim();
    const prop = li.textContent.replace(label, "").replace(/^[\s—–-]+/, "").trim();
    if (label && prop) points.push({ label, prop });
  });
  const labels = new Set(points.map((p) => p.label));
  return labels.size >= 2 ? { q: item.q, unit: item.unit, points } : null;
}

const RAZBOR_POOL = QUESTIONS.map(parseStructured).filter(Boolean);

let razborSet = [];
let razborQi = 0; // question index
let razborQueue = []; // shuffled points of current question
let razborPi = 0; // point index within question
let razborLabels = []; // unique labels of current question
let razborScore = 0;
let razborTotal = 0;
let razborStreak = 0;
let razborBestStreak = 0;
let razborAnswered = false;

function buildRazborUnitFilter() {
  const units = Array.from(new Set(RAZBOR_POOL.map((r) => r.unit)));
  const sel = $("#razbor-unit");
  sel.innerHTML =
    `<option value="all">Все темы</option>` +
    units.map((u) => `<option value="${escapeHtml(u)}">${escapeHtml(u)}</option>`).join("");
}

function showRazborIntro() {
  $("#razbor-intro").classList.remove("hidden");
  $("#razbor-run").classList.add("hidden");
  $("#razbor-result").classList.add("hidden");
}

function startRazbor() {
  const filter = $("#razbor-unit").value;
  const pool = filter === "all" ? RAZBOR_POOL.slice() : RAZBOR_POOL.filter((r) => r.unit === filter);
  razborSet = shuffle(pool).slice(0, Math.min(RAZBOR_QUESTIONS, pool.length));
  razborQi = 0;
  razborScore = 0;
  razborTotal = 0;
  razborStreak = 0;
  razborBestStreak = 0;
  $("#razbor-intro").classList.add("hidden");
  $("#razbor-result").classList.add("hidden");
  $("#razbor-run").classList.remove("hidden");
  loadRazborQuestion();
}

function loadRazborQuestion() {
  const item = razborSet[razborQi];
  razborQueue = shuffle(item.points);
  razborPi = 0;
  razborLabels = Array.from(new Set(item.points.map((p) => p.label)));
  renderRazborProp();
}

function renderRazborProp() {
  razborAnswered = false;
  const item = razborSet[razborQi];
  const point = razborQueue[razborPi];
  $("#razbor-progress").textContent =
    `Вопрос ${razborQi + 1}/${razborSet.length} · признак ${razborPi + 1}/${razborQueue.length}`;
  $("#razbor-streak").textContent = `🔥 Серия: ${razborStreak}`;
  $("#razbor-context").textContent = item.q;
  $("#razbor-prop").innerHTML = `<p class="q-text">${escapeHtml(point.prop)}</p>`;
  $("#razbor-explain").classList.add("hidden");
  $("#razbor-next").classList.add("hidden");

  const box = $("#razbor-options");
  box.innerHTML = "";
  shuffle(razborLabels).forEach((label) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "option";
    b.textContent = label;
    b.addEventListener("click", () => answerRazbor(label, b));
    box.appendChild(b);
  });
}

function answerRazbor(choice, btn) {
  if (razborAnswered) return;
  razborAnswered = true;
  const point = razborQueue[razborPi];
  const correct = choice === point.label;
  $$("#razbor-options .option").forEach((b) => {
    b.disabled = true;
    if (b.textContent === point.label) b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });
  razborTotal++;
  if (correct) {
    razborScore++;
    razborStreak++;
    razborBestStreak = Math.max(razborBestStreak, razborStreak);
  } else {
    razborStreak = 0;
  }
  const exp = $("#razbor-explain");
  exp.innerHTML = correct
    ? `✔ Верно — <b>${escapeHtml(point.label)}</b>.`
    : `✘ Это <b>${escapeHtml(point.label)}</b>.`;
  exp.classList.remove("hidden");
  $("#razbor-streak").textContent = `🔥 Серия: ${razborStreak}`;

  const lastPoint = razborPi + 1 >= razborQueue.length;
  const lastQuestion = razborQi + 1 >= razborSet.length;
  $("#razbor-next").classList.remove("hidden");
  $("#razbor-next").textContent = lastPoint && lastQuestion ? "Показать результат" : "Дальше →";
}

function nextRazbor() {
  razborPi++;
  if (razborPi >= razborQueue.length) {
    razborQi++;
    if (razborQi >= razborSet.length) {
      finishRazbor();
      return;
    }
    loadRazborQuestion();
  } else {
    renderRazborProp();
  }
}

function finishRazbor() {
  $("#razbor-run").classList.add("hidden");
  $("#razbor-result").classList.remove("hidden");
  const pct = razborTotal ? Math.round((razborScore / razborTotal) * 100) : 0;
  $("#razbor-score").textContent = `${razborScore} / ${razborTotal} (${pct}%)`;
  let verdict = `Лучшая серия: ${razborBestStreak}. `;
  if (pct >= 90) verdict += "Структуру ответов держишь чётко! 🎉";
  else if (pct >= 70) verdict += "Хорошо — пара различий ещё путается.";
  else if (pct >= 50) verdict += "Средне. Прогони «Карточки» и вернись.";
  else verdict += "Сначала разбери ответы в «Карточках».";
  $("#razbor-verdict").textContent = verdict;
}

$("#razbor-start").addEventListener("click", startRazbor);
$("#razbor-again").addEventListener("click", startRazbor);
$("#razbor-next").addEventListener("click", nextRazbor);

// ---------- init ----------
buildUnitFilter();
buildMatchUnitFilter();
buildClozeUnitFilter();
buildRazborUnitFilter();
renderCard();
