# Casse-Latte Simulator

Mini application web statique, mobile-first, en HTML/CSS/JavaScript vanilla. Le principe : cliquer sur un lit cartoon jusqu'à transformer le sommier, les lattes et le cadre acier en faux rapport de sinistre honteux.

L'ambiance V2 est volontairement plus frontale, graveleuse et beauf assumée, mais le gag reste centré sur le mobilier martyrisé : aucun contenu pornographique explicite, aucune personne réelle nommée.

## Fonctionnalités

- Écran d'accueil “rodéo sommier” avec ton plus salé.
- Lit cartoon dessiné en HTML/CSS, sans image bitmap ni dépendance externe.
- Compteur de coups, jauge **Indice de Rodéo sous Couette** et libellés de destruction : `Lit innocent`, `Couic suspect`, `Galipette détectée`, `Rodéo sous couette`, `Sommier en PLS`, `Mobilier pulvérisé`.
- Plus de 60 punchlines centralisées dans `app.js`.
- Phrases de combo tous les coups critiques, à certains multiples et quand une latte casse.
- Secousses renforcées, bulle flottante, lattes qui tombent, débris CSS, vibrations mobiles optionnelles et effondrement final.
- Faux rapport final de sinistre avec cause probable, état du matériel, recommandation et bouton d'excuse officielle.
- Sons courts générés avec Web Audio API, sans fichier audio.
- PWA simple avec `manifest.webmanifest` et service worker `sw.js`.
- Compatible avec un hébergement GitHub Pages.

## Lancer en local

Servez le dossier avec n'importe quel serveur statique :

```bash
python3 -m http.server 8000
```

Puis ouvrez <http://localhost:8000>.

> L'ouverture directe de `index.html` fonctionne pour le jeu, mais le service worker nécessite généralement un contexte HTTP(S) ou localhost.

## Modifier les textes et punchlines

Tous les textes aléatoires de gameplay sont dans `app.js` :

- `phrases` : punchlines affichées à chaque tap/clic sur le lit.
- `comboPhrases` : messages spéciaux pour les combos, lattes cassées et coups critiques.
- `finalTitles` : titres aléatoires du rapport final.
- `finalSummaries` : résumé principal du sinistre.
- `finalCauses` : cause probable du carnage mobilier.
- `finalStates` : état du cadre, des lattes, du matelas et de la visserie.
- `finalRecommendations` : recommandations absurdes après destruction.
- `officialExcuses` : excuses affichées par le bouton “Version officielle : elle dormait”.

Ajoutez simplement une chaîne dans le tableau souhaité, rechargez la page, et le simulateur la tirera au hasard.

## Assets et dépendances

Aucun framework, aucune dépendance externe, aucun backend et aucune base de données ne sont utilisés. L'app n'intègre aucun PNG, JPG, WebP, GIF ni fichier audio : le lit, les débris et les effets sont faits en HTML/CSS, et le petit son de casse est généré à la volée avec Web Audio API.

## Déploiement GitHub Pages

1. Poussez ces fichiers sur une branche GitHub.
2. Activez GitHub Pages sur la branche souhaitée.
3. Choisissez la racine du dépôt comme dossier de publication.

Aucun build n'est nécessaire.
