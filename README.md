<div align="center">

# Casse-Latte Simulator

**Un mini jeu mobile-first où quinze impacts suffisent à transformer un lit cartoon en rapport de sinistre conjugal.**

[![Vanilla JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=flat-square&logo=javascript&logoColor=000)](./app.js)
[![No dependencies](https://img.shields.io/badge/Dependencies-None-ff8a2a?style=flat-square)](#stack-technique)
[![PWA](https://img.shields.io/badge/PWA-Offline--ready-ff3f8d?style=flat-square)](./sw.js)
[![Mobile first](https://img.shields.io/badge/UI-Mobile--first-321026?style=flat-square)](./styles.css)

[Présentation](#présentation) · [Fonctionnalités](#fonctionnalités) · [Démarrage](#démarrage-rapide) · [Personnalisation](#personnalisation)

</div>

## Présentation

Casse-Latte Simulator est une mini-application web humoristique dans laquelle l’utilisateur frappe un lit cartoon jusqu’à provoquer son effondrement complet. Chaque impact augmente l’**Indice de Rodéo sous Couette**, déclenche une punchline, secoue le mobilier et peut briser une latte ou faire jaillir des débris.

Après quinze coups, la partie se termine par un faux rapport de sinistre généré aléatoirement avec titre, cause probable, état du matériel et recommandation technique parfaitement douteuse.

Le projet fonctionne entièrement dans le navigateur avec du HTML, du CSS et du JavaScript natifs. Il ne nécessite ni framework, ni dépendance, ni backend, ni étape de compilation.

> [!WARNING]
> Le ton est volontairement graveleux, absurde et « beauf assumé ». Le gag reste centré sur la destruction fictive du mobilier et ne contient aucune scène explicite ni personne réelle identifiée.

## Fonctionnalités

- Partie courte en **15 impacts**.
- Lit cartoon entièrement construit en HTML et CSS.
- Jauge de dégâts avec six niveaux de destruction.
- Plus de 60 punchlines choisies aléatoirement.
- Combos déclenchés par les coups critiques, multiples et lattes brisées.
- Huit lattes qui tombent progressivement.
- Secousses, effondrement final et débris générés dynamiquement.
- Vibrations mobiles lorsque l’API est disponible.
- Effets sonores synthétisés avec la Web Audio API.
- Faux rapport final composé aléatoirement.
- Bouton d’excuse officielle pour réécrire la version des faits.
- Réinitialisation immédiate et parties rejouables.
- Interface responsive et adaptée aux zones sûres des appareils mobiles.
- PWA légère avec cache hors ligne du shell applicatif.
- Compatibilité avec un hébergement statique tel que GitHub Pages.

## Boucle de jeu

```text
Accueil
   ↓
Lancement du rodéo
   ↓
Clic ou toucher sur le lit
   ├── progression de la jauge
   ├── punchline aléatoire
   ├── secousse et son
   ├── combo éventuel
   └── latte ou débris éventuels
   ↓
15 impacts
   ↓
Effondrement du lit
   ↓
Rapport de sinistre aléatoire
```

### Niveaux de dégâts

| Progression | État affiché |
| ---: | --- |
| 0 % | Lit innocent |
| 20 % | Couic suspect |
| 40 % | Galipette détectée |
| 60 % | Rodéo sous couette |
| 80 % | Sommier en PLS |
| 100 % | Mobilier pulvérisé |

## Démarrage rapide

Aucune installation npm n’est nécessaire.

```bash
git clone https://github.com/christolosier-ship-it/Casse-latte-Simulator-2026.git
cd Casse-latte-Simulator-2026
python3 -m http.server 8000
```

Ouvrez ensuite `http://localhost:8000`.

> [!IMPORTANT]
> Le jeu peut fonctionner en ouvrant directement `index.html`, mais un serveur HTTP local est nécessaire pour tester correctement le service worker et le comportement PWA.

## Installation PWA et mode hors ligne

Le service worker précharge les cinq fichiers nécessaires au jeu :

```text
index.html
styles.css
app.js
manifest.webmanifest
sw.js
```

Les requêtes utilisent ensuite une stratégie **cache first** : les ressources déjà présentes dans le cache sont servies immédiatement, sans connexion réseau.

> [!NOTE]
> Le manifest permet un affichage autonome en mode portrait, mais il ne déclare actuellement aucune icône. Selon le navigateur, l’installation peut donc utiliser une icône générique ou ne pas être proposée de manière optimale.

## Architecture

```text
Casse-latte-Simulator-2026/
├── index.html             # Structure des écrans et du lit cartoon
├── styles.css             # Interface, dessin du lit et animations
├── app.js                 # Gameplay, textes, audio et progression
├── manifest.webmanifest   # Métadonnées de la PWA
├── sw.js                  # Cache hors ligne
└── README.md              # Documentation du projet
```

Le code reste volontairement compact :

- `index.html` contient les trois écrans, le HUD et les différentes pièces du lit ;
- `styles.css` transforme ces éléments en illustration animée ;
- `app.js` pilote l’état de la partie, les seuils, les effets et les textes ;
- `sw.js` rend les ressources principales disponibles hors connexion.

## Stack technique

| Technologie | Utilisation |
| --- | --- |
| HTML5 | Structure des écrans et contrôles accessibles |
| CSS3 | Illustration du lit, responsive design et animations |
| JavaScript | État du jeu, événements, génération aléatoire et DOM |
| Web Audio API | Création des sons de casse sans fichier audio |
| Vibration API | Retour haptique sur les appareils compatibles |
| Service Worker | Mise en cache hors ligne |
| Cache API | Stockage du shell applicatif |
| Web App Manifest | Affichage autonome et installation PWA |

## Personnalisation

Les principaux réglages sont regroupés au début de `app.js`.

### Durée de la partie

Modifiez la constante suivante :

```js
const MAX_HITS = 15;
```

### Textes aléatoires

Les banques de textes sont organisées par usage :

| Tableau | Contenu |
| --- | --- |
| `phrases` | Punchlines affichées pendant la partie |
| `comboPhrases` | Messages de combo et coups critiques |
| `finalTitles` | Titres du rapport final |
| `finalSummaries` | Résumés du sinistre |
| `finalCauses` | Causes probables |
| `finalStates` | États du mobilier |
| `finalRecommendations` | Recommandations absurdes |
| `officialExcuses` | Versions officielles alternatives |

Ajoutez ou retirez simplement des chaînes dans le tableau correspondant. Le moteur sélectionne automatiquement un élément au hasard.

### Progression des dégâts

Les libellés et leurs seuils sont définis dans `damageLevels`. Les effets visuels associés aux classes `damage-1` à `damage-5` sont configurés dans `styles.css`.

> [!TIP]
> Après une modification de fichiers mis en cache, changez `CACHE_NAME` dans `sw.js`. Cela force le navigateur à supprimer l’ancien cache et évite qu’une ancienne version du sommier continue de hanter la chambre.

## Déploiement sur GitHub Pages

Le projet est entièrement statique et ne nécessite aucun build :

1. ouvrez **Settings** → **Pages** dans le dépôt ;
2. sélectionnez **Deploy from a branch** ;
3. choisissez la branche de publication et le dossier `/root` ;
4. enregistrez la configuration ;
5. ouvrez l’URL générée une première fois en ligne pour initialiser le cache.

Tous les chemins sont relatifs, ce qui permet de publier l’application directement sous le sous-chemin du dépôt.