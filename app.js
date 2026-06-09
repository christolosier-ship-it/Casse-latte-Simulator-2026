const MAX_HITS = 15;

// Ajoutez ou retirez des punchlines ici : le reste de l'app les pioche automatiquement.
const phrases = [
  "Crac ! Le sommier vient de perdre son innocence.",
  "Alerte : va-et-vient non couvert par la garantie.",
  "Le sommier vient de découvrir le cardio horizontal.",
  "Position non homologuée par le fabricant.",
  "Le matelas confirme : ça ne dormait pas.",
  "Le cadre acier s’est fait plier par l’amour et la gravité.",
  "Activité pelvico-sismique détectée.",
  "Le sommier demande un safeword.",
  "La latte survivante refuse de raconter ce qu’elle a vu.",
  "Encore une poussée et le sommier porte plainte.",
  "Le cadre acier vient de se faire démonter sans outillage.",
  "Le lit vient d’atteindre le niveau : accouplement de buffles.",
  "Alerte : frottement non conforme aux normes européennes.",
  "Surcharge dynamique à caractère fortement cochon.",
  "Le lit demande une déclaration d’accident du travail.",
  "La chambre vient de passer en zone humide réglementée.",
  "Le mobilier a cédé, mais pas la passion.",
  "Sommier hors service. Cause : galipette industrielle.",
  "Le fabricant recommande désormais un sommier de bunker.",
  "Des traces de honte ont été retrouvées sous le matelas.",
  "Le sommier vient de prendre une claque de lune de miel.",
  "Le matelas encaisse, les lattes négocient leur départ.",
  "La latte numéro 4 vient de quitter le projet.",
  "Le cadre acier n’était clairement pas prêt.",
  "Le lit demande une pause clope.",
  "La notice parlait de sommeil. Grave erreur.",
  "Rythme détecté : beaucoup trop ambitieux pour du mobilier suédois.",
  "Le sommier accuse une surcharge de cochonnerie.",
  "Le lit vient d’émettre un couinement juridiquement suspect.",
  "Le matelas fait semblant d’aller bien.",
  "La latte vient de dire : pas ce soir.",
  "Le sommier signale une activité non réglementaire.",
  "Le cadre vient de se faire plier façon lendemain de mariage.",
  "La chambre passe en alerte sismique locale.",
  "La latte n°5 hurle qu’elle a une famille.",
  "Le lit n’était pas venu pour souffrir autant.",
  "Le matelas confirme une absence totale de sieste.",
  "Le cadre acier vient de regretter sa carrière.",
  "Le sommier réclame un constat amiable.",
  "La garantie vient de se jeter par la fenêtre.",
  "Le lit vient de comprendre le mot intensité.",
  "Le sommier entre en phase terminale.",
  "La latte centrale vient de voir Dieu.",
  "Le matelas rebondit, la dignité s’effondre.",
  "Alerte rouge : rodéo sous couette en cours.",
  "Le bureau d’étude recommande un lit béton armé.",
  "Le voisinage confirme une activité sismique suspecte.",
  "IKEA refuse toute responsabilité.",
  "Conforama vient de bloquer le numéro.",
  "Le cadre acier a été démonté sans clé Allen.",
  "Le sommier a confondu câlin et essai destructif.",
  "La literie vient de passer en mode chantier naval.",
  "Ça pilonne plus fort qu’un chantier sans casque.",
  "Le lit subit un contrôle technique très intime.",
  "Coefficient de rodéo : indécent.",
  "La couette demande à ne pas être citée dans le rapport.",
  "Le sommier n’est plus un meuble, c’est une victime.",
  "Impact détecté : bassin en surcharge dynamique.",
  "Le lit vient d’encaisser une attaque de type passion.",
  "La latte survivante prépare son témoignage.",
  "Crac critique ! Le sommier vient de lâcher l’affaire.",
  "Le sommier vient d’envoyer un préavis de grincement.",
  "La visserie claque des dents sous la couette.",
  "Le cadre hésite entre résistance et abandon honteux.",
  "Le matelas absorbe le choc comme un vieux videur de boîte.",
  "La latte du fond fait semblant de ne rien voir.",
  "Le lit vient de perdre un boulon et toute crédibilité.",
  "Le sommier annonce une grève illimitée des appuis.",
  "Le parquet vient d’inscrire le score dans le rapport sismique.",
  "La couette couvre les faits, mais pas les dégâts.",
  "Le cadre acier demande une reconversion en banc public."
];

const comboPhrases = [
  "Combo couette x3 !",
  "Rodéo critique !",
  "Galipette bonus !",
  "Coup de bassin super efficace !",
  "Multiplicateur de honte activé.",
  "Secousse parfaitement indécente.",
  "CRAC ancestral !",
  "Le lit vient de débloquer le succès : Nuit de chantier.",
  "La latte est vulnérable aux attaques de type passion.",
  "Le sommier subit un enchaînement non homologué.",
  "Combo lattes brisées : le mobilier panique.",
  "Critique sous couette : la jauge rougit."
];

const finalTitles = [
  "SINISTRE LITERIE CONFIRMÉ",
  "SOMMIER DÉCLARÉ HORS SERVICE",
  "AFFAIRE CLASSÉE : GALIPETTE INDUSTRIELLE",
  "CATASTROPHE SOUS COUETTE",
  "LIT DÉTRUIT PAR USAGE NON CONVENTIONNEL",
  "EFFONDREMENT STRUCTUREL DU DÉSIR",
  "ZONE SINISTRÉE : CHAMBRE À COUCHER"
];

const finalSummaries = [
  "Le lit n’a pas cassé. Il a capitulé.",
  "Le sommier a tenté de résister. Mauvaise stratégie.",
  "Les lattes ont quitté le navire une par une.",
  "Le matelas a survécu, mais il ne sera plus jamais le même.",
  "Le cadre acier a été démonté sans clé Allen.",
  "Les preuves indiquent une activité horizontale fortement motivée.",
  "La notice parlait de sommeil. Personne ne l’a lue.",
  "Le mobilier n’était clairement pas dimensionné pour ce niveau d’enthousiasme."
];

const finalCauses = [
  "Cardio horizontal à intensité non réglementaire.",
  "Surcharge dynamique à caractère fortement cochon.",
  "Galipette prolongée avec option destruction massive.",
  "Utilisation du lit en mode rodéo sous couette.",
  "Va-et-vient hors tolérance constructeur.",
  "Test de résistance non déclaré au fabricant.",
  "Passion mal répartie sur les appuis.",
  "Accouplement de mammouths sur structure légère.",
  "Missionnaire niveau chantier naval."
];

const finalStates = [
  "Cadre acier : plié. Lattes : dispersées. Matelas : témoin muet. Dignité du sommier : introuvable.",
  "Cadre : humilié. Lattes : en fuite. Matelas : nerveux. Visserie : portée disparue.",
  "Lattes survivantes : aucune. Structure : traumatisée. Couette : refuse de témoigner.",
  "Sommier : hors service. Cadre : froissé. Chambre : classée zone à risque sentimental."
];

const finalRecommendations = [
  "Remplacement par sommier renforcé catégorie bunker nuptial.",
  "Installer un lit en béton armé avant la prochaine visite.",
  "Prévoir casque, harnais et plan de prévention avant usage.",
  "Passer sur un sommier catégorie travaux publics.",
  "Remplacer les lattes par des poutrelles IPN.",
  "Prévenir le voisinage avant toute reprise d’activité.",
  "Dormir au sol, c’est plus sûr pour le mobilier."
];

const officialExcuses = [
  "Version officielle : elle dormait. Les lattes contestent cette version.",
  "Version officielle : simple nuit agitée. Hypothèse rejetée par le cadre acier.",
  "Version officielle : défaut de fabrication. Le matelas a ricané.",
  "Version officielle : c’était le chat. Le chat demande un avocat.",
  "Version officielle : usure normale. Les débris ne sont pas convaincus.",
  "Après réexamen du dossier, l’incident serait dû à une simple nuit agitée, hypothèse rejetée par 8 lattes sur 8."
];

const damageLevels = [
  { threshold: 100, label: "Mobilier pulvérisé" },
  { threshold: 80, label: "Sommier en PLS" },
  { threshold: 60, label: "Rodéo sous couette" },
  { threshold: 40, label: "Galipette détectée" },
  { threshold: 20, label: "Couic suspect" },
  { threshold: 0, label: "Lit innocent" }
];

const screens = {
  home: document.querySelector("#home-screen"),
  game: document.querySelector("#game-screen"),
  final: document.querySelector("#final-screen")
};

const startButton = document.querySelector("#start-button");
const restartButton = document.querySelector("#restart-button");
const officialButton = document.querySelector("#official-button");
const resetButton = document.querySelector("#reset-button");
const bedButton = document.querySelector("#bed-button");
const bed = document.querySelector("#bed");
const messageCard = document.querySelector("#message-card");
const speechBubble = document.querySelector("#speech-bubble");
const comboBubble = document.querySelector("#combo-bubble");
const debrisLayer = document.querySelector("#debris-layer");
const hitCount = document.querySelector("#hit-count");
const damagePercent = document.querySelector("#damage-percent");
const damageFill = document.querySelector("#damage-fill");
const damageLabel = document.querySelector("#damage-label");
const finalTitle = document.querySelector("#final-title");
const finalSummary = document.querySelector("#final-summary");
const finalCause = document.querySelector("#final-cause");
const finalState = document.querySelector("#final-state");
const finalRecommendation = document.querySelector("#final-recommendation");
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

function getDamageLabel(progress) {
  return damageLevels.find((level) => progress >= level.threshold).label;
}

function pulseElement(element, className = "is-pulsing") {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

function updateHud() {
  const progress = Math.min(100, Math.round((hits / MAX_HITS) * 100));
  hitCount.textContent = hits;
  damagePercent.textContent = `${progress}%`;
  damageFill.style.width = `${progress}%`;
  damageLabel.textContent = getDamageLabel(progress);
}

function updateDamageClass() {
  const damageLevel = Math.min(5, Math.floor((hits / MAX_HITS) * 6));
  bed.classList.remove("damage-1", "damage-2", "damage-3", "damage-4", "damage-5", "is-critical");
  bedButton.classList.toggle("damage-critical", hits >= 10);

  if (damageLevel > 0) {
    bed.classList.add(`damage-${damageLevel}`);
  }

  if (hits >= 10) {
    bed.classList.add("is-critical");
  }
}

function shakeBed() {
  bed.classList.remove("is-shaking", "is-critical-hit");
  void bed.offsetWidth;
  bed.classList.add("is-shaking");

  if (hits >= 10 || hits % 5 === 0) {
    bed.classList.add("is-critical-hit");
  }
}

function showPhrase(phrase) {
  messageCard.textContent = phrase;
  speechBubble.textContent = phrase;
  speechBubble.classList.remove("is-visible");
  void speechBubble.offsetWidth;
  speechBubble.classList.add("is-visible");
}

function showCombo(phrase) {
  comboBubble.textContent = phrase;
  comboBubble.classList.remove("is-visible");
  void comboBubble.offsetWidth;
  comboBubble.classList.add("is-visible");
  pulseElement(messageCard, "is-combo");
}

function vibrate(pattern) {
  if ("vibrate" in navigator) {
    navigator.vibrate(pattern);
  }
}

function breakNextSlat() {
  if (brokenSlats >= slats.length) {
    return false;
  }

  const slat = slats[brokenSlats];
  const direction = brokenSlats % 2 === 0 ? 1 : -1;
  slat.style.setProperty("--fall-rotation", `${direction * (58 + brokenSlats * 7)}deg`);
  slat.classList.add("is-broken");
  brokenSlats += 1;
  return true;
}

function spawnDebris({ critical = false } = {}) {
  const pieces = critical ? 18 : hits > 11 ? 14 : hits % 3 === 0 ? 10 : 6;

  for (let index = 0; index < pieces; index += 1) {
    const debris = document.createElement("span");
    debris.className = "debris";
    debris.style.background = index % 3 === 0 ? "#ff334f" : index % 2 === 0 ? "#ffe27a" : "#b66c35";
    debris.style.setProperty("--dx", `${Math.random() * 15 - 7.5}rem`);
    debris.style.setProperty("--dy", `${Math.random() * -10 - 2}rem`);
    debris.style.setProperty("--spin", `${Math.random() * 720 - 360}deg`);
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

  oscillator.type = hits >= 10 ? "sawtooth" : "square";
  oscillator.frequency.setValueAtTime(150 + Math.random() * 100, now);
  oscillator.frequency.exponentialRampToValueAtTime(38, now + 0.1);
  gain.gain.setValueAtTime(hits >= 10 ? 0.075 : 0.05, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
  oscillator.connect(gain).connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.12);
}

function fillFinalReport() {
  finalTitle.textContent = randomItem(finalTitles);
  finalSummary.textContent = randomItem(finalSummaries);
  finalCause.textContent = randomItem(finalCauses);
  finalState.textContent = randomItem(finalStates);
  finalRecommendation.textContent = randomItem(finalRecommendations);
}

function finishGame() {
  bedButton.disabled = true;
  bed.classList.add("is-collapsed");
  fillFinalReport();

  window.setTimeout(() => {
    showScreen("final");
  }, 850);
}

function handleBedHit() {
  if (hits >= MAX_HITS) {
    return;
  }

  hits += 1;
  const slatBroke = hits === 1 || hits % 2 === 0 ? breakNextSlat() : false;
  const isCombo = slatBroke || hits % 3 === 0 || hits % 5 === 0;
  const isCritical = hits >= 10 || hits % 5 === 0;

  showPhrase(randomItem(phrases));
  updateHud();
  updateDamageClass();
  shakeBed();
  playCrunch();
  vibrate(slatBroke || isCritical ? [30, 40, 60] : 20);

  if (isCombo) {
    showCombo(randomItem(comboPhrases));
  }

  if (slatBroke || hits % 2 === 0 || hits > 11) {
    spawnDebris({ critical: isCritical });
  }

  if (isCritical) {
    pulseElement(messageCard, "is-critical-message");
    pulseElement(damageFill, "is-critical-gauge");
  }

  if (hits >= MAX_HITS) {
    finishGame();
  }
}

function resetGame({ goToGame = true } = {}) {
  hits = 0;
  brokenSlats = 0;
  bedButton.disabled = false;
  bedButton.classList.remove("damage-critical");
  messageCard.textContent = "Le sommier sent que la soirée va dépasser la notice constructeur.";
  messageCard.classList.remove("is-combo", "is-critical-message");
  speechBubble.textContent = "";
  comboBubble.textContent = "";
  comboBubble.classList.remove("is-visible");
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
officialButton.addEventListener("click", () => {
  finalSummary.textContent = randomItem(officialExcuses);
});
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
