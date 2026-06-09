const MAX_HITS = 15;

// Ajoutez ou retirez des punchlines ici : le reste de l'app les pioche automatiquement.
const phrases = [
  "Crac ! Une latte vient de demander sa mutation.",
  "Le cadre acier n’était pas prêt.",
  "Alerte : rythme incompatible avec mobilier grand public.",
  "Le sommier signale une activité non réglementaire.",
  "La latte n°4 quitte le projet.",
  "Coefficient de rodéo : indécent.",
  "Le voisinage confirme une activité sismique.",
  "IKEA refuse toute responsabilité.",
  "Le lit est officiellement en PLS.",
  "Dernière latte survivante localisée sous le matelas.",
  "Impact détecté : position non homologuée.",
  "Surcharge dynamique confirmée.",
  "Le bureau d’étude recommande un lit béton armé.",
  "Le sommier vient d’appeler son syndicat.",
  "Bilan provisoire : dignité perdue, latte aussi.",
  "Le matelas demande un congé pour traumatisme meuble.",
  "Niveau beaufométrique : clignotant orange fluo.",
  "La visserie entame une carrière de confettis.",
  "Contrôle technique literie : recalé avec panache.",
  "Le parquet note l’événement sur l’échelle de Richter."
];

const finalSummaries = [
  "15 coups, 8 lattes en burn-out, un sommier qui parle désormais en grincements : le dossier part en assurance beauf premium.",
  "Le lit a tenu comme un héros de brocante avant de s’éparpiller façon meuble en kit contrarié.",
  "Diagnostic final : rodéo sommier massif, cadre émotionnellement froissé, voisinage moyennement convaincu par l’excuse du trampoline.",
  "La literie est déclarée zone sinistrée. Merci d’envoyer fleurs, tournevis et excuses au service après-vente."
];

const screens = {
  home: document.querySelector("#home-screen"),
  game: document.querySelector("#game-screen"),
  final: document.querySelector("#final-screen")
};

const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const resetButton = document.querySelector("#reset-button");
const bedButton = document.querySelector("#bed-button");
const bed = document.querySelector("#bed");
const messageCard = document.querySelector("#message-card");
const speechBubble = document.querySelector("#speech-bubble");
const debrisLayer = document.querySelector("#debris-layer");
const hitCount = document.querySelector("#hit-count");
const damagePercent = document.querySelector("#damage-percent");
const damageFill = document.querySelector("#damage-fill");
const finalSummary = document.querySelector("#final-summary");
const slats = [...document.querySelectorAll(".slat")];

let hits = 0;
let brokenSlats = 0;
let audioContext;

function showScreen(screenName) {
  Object.values(screens).forEach((screen) => screen.classList.remove("screen--active"));
  screens[screenName].classList.add("screen--active");
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function updateHud() {
  const progress = Math.min(100, Math.round((hits / MAX_HITS) * 100));
  hitCount.textContent = hits;
  damagePercent.textContent = `${progress}%`;
  damageFill.style.width = `${progress}%`;
}

function updateDamageClass() {
  const damageLevel = Math.min(5, Math.floor((hits / MAX_HITS) * 6));
  bed.classList.remove("damage-1", "damage-2", "damage-3", "damage-4", "damage-5");

  if (damageLevel > 0) {
    bed.classList.add(`damage-${damageLevel}`);
  }
}

function shakeBed() {
  bed.classList.remove("is-shaking");
  void bed.offsetWidth;
  bed.classList.add("is-shaking");
}

function showPhrase(phrase) {
  messageCard.textContent = phrase;
  speechBubble.textContent = phrase;
  speechBubble.classList.remove("is-visible");
  void speechBubble.offsetWidth;
  speechBubble.classList.add("is-visible");
}

function breakNextSlat() {
  if (brokenSlats >= slats.length) {
    return;
  }

  const slat = slats[brokenSlats];
  const direction = brokenSlats % 2 === 0 ? 1 : -1;
  slat.style.setProperty("--fall-rotation", `${direction * (58 + brokenSlats * 7)}deg`);
  slat.classList.add("is-broken");
  brokenSlats += 1;
}

function spawnDebris() {
  const pieces = hits % 3 === 0 ? 10 : 5;

  for (let index = 0; index < pieces; index += 1) {
    const debris = document.createElement("span");
    debris.className = "debris";
    debris.style.background = index % 2 === 0 ? "#ffe27a" : "#b66c35";
    debris.style.setProperty("--dx", `${Math.random() * 12 - 6}rem`);
    debris.style.setProperty("--dy", `${Math.random() * -8 - 2}rem`);
    debris.style.setProperty("--spin", `${Math.random() * 520 - 260}deg`);
    debrisLayer.append(debris);
    debris.addEventListener("animationend", () => debris.remove(), { once: true });
  }
}

function playCrunch() {
  if (!window.AudioContext && !window.webkitAudioContext) {
    return;
  }

  audioContext ||= new (window.AudioContext || window.webkitAudioContext)();

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(130 + Math.random() * 80, now);
  oscillator.frequency.exponentialRampToValueAtTime(45, now + 0.08);
  gain.gain.setValueAtTime(0.05, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.1);
}

function finishGame() {
  bedButton.disabled = true;
  bed.classList.add("is-collapsed");
  finalSummary.textContent = randomItem(finalSummaries);

  window.setTimeout(() => {
    showScreen("final");
  }, 850);
}

function handleBedHit() {
  if (hits >= MAX_HITS) {
    return;
  }

  hits += 1;
  showPhrase(randomItem(phrases));
  updateHud();
  updateDamageClass();
  shakeBed();
  playCrunch();

  if (hits === 1 || hits % 2 === 0) {
    breakNextSlat();
  }

  if (hits % 2 === 0 || hits > 11) {
    spawnDebris();
  }

  if (hits >= MAX_HITS) {
    finishGame();
  }
}

function resetGame({ goToGame = true } = {}) {
  hits = 0;
  brokenSlats = 0;
  bedButton.disabled = false;
  messageCard.textContent = "Le sommier attend son destin avec une inquiétude palpable.";
  speechBubble.textContent = "";
  bed.className = "bed";
  slats.forEach((slat) => {
    slat.classList.remove("is-broken");
    slat.style.removeProperty("--fall-rotation");
  });
  debrisLayer.replaceChildren();
  updateHud();

  if (goToGame) {
    showScreen("game");
  }
}

startButton.addEventListener("click", () => resetGame());
restartButton.addEventListener("click", () => resetGame());
resetButton.addEventListener("click", () => resetGame());
bedButton.addEventListener("click", handleBedHit);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch(() => {
      // L'app reste pleinement jouable même si le cache PWA est indisponible.
    });
  });
}

updateHud();
