# Casse-Latte Simulator

Mini application web statique, mobile-first, en HTML/CSS/JavaScript vanilla. Le but est simple : cliquer sur un lit cartoon jusqu'à transformer son sommier en dossier d'assurance absurde.

## Fonctionnalités

- Écran d'accueil avec lancement de partie.
- Lit cartoon dessiné en HTML/CSS, sans image bitmap ni dépendance externe.
- Compteur de coups et jauge **Indice de Rodéo Sommier**.
- Punchlines centralisées dans `app.js` pour modification rapide.
- Secousses, bulles flottantes, lattes qui tombent, débris CSS et effondrement final.
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

## Modifier les phrases

Les phrases humoristiques sont dans le tableau `phrases` de `app.js`. Ajoutez une chaîne au tableau, rechargez la page, et le simulateur la tirera au hasard.

## Déploiement GitHub Pages

1. Poussez ces fichiers sur une branche GitHub.
2. Activez GitHub Pages sur la branche souhaitée.
3. Choisissez la racine du dépôt comme dossier de publication.

Aucun build n'est nécessaire.
