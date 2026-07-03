# Casse-Latte Simulator - application de la skill make-interfaces-feel-better

## Fichiers modifiés

- `styles.css`
- `app.js`
- `CHANGELOG_UI_SKILL.md`

## Principes appliqués

### Typography

| Before | After |
| --- | --- |
| Pas de font smoothing global | Ajout de `-webkit-font-smoothing: antialiased` et `-moz-osx-font-smoothing: grayscale` sur `html` |
| Textes courts sans règle d'habillage globale | Ajout de `text-wrap: pretty` sur `body`, textes d'intro, message card et valeurs du rapport |
| Compteurs avec chiffres proportionnels | Ajout de `font-variant-numeric: tabular-nums` sur le compteur de coups et le pourcentage de jauge |

### Surfaces

| Before | After |
| --- | --- |
| Cartes avec bordure dure + ombre unique | Remplacement par des variables `--surface-ring` et `--surface-ring-hover` avec shadow-rings multicouches |
| Stat interne presque aussi arrondi que son panneau parent | Rayon de `.stat` corrigé pour respecter une logique plus concentrique avec le padding du panneau |
| Chips/status avec bordure simple | Remplacement par un ring via `box-shadow` |
| Pas de focus clavier explicite | Ajout de `:focus-visible` sur boutons et zone de jeu |

### Animations

| Before | After |
| --- | --- |
| Entrée d'écran animée en bloc via `.screen--active` | Entrées découpées et staggerées par morceaux : hero, HUD, stats, message, lit, rapport final |
| Changement d'écran instantané côté JS | Ajout d'un état `.screen--exiting` avec sortie courte et douce |
| Boutons sans press feedback homogène | Ajout d'un `scale(0.96)` sur les boutons standards |

### Performance

| Before | After |
| --- | --- |
| Plusieurs transitions écrites en raccourci | Transitions importantes détaillées via `transition-property` |
| Éléments fortement animés sans hint | Ajout limité de `will-change: transform, opacity` sur lit, bulles et débris |
| `transition: all` absent | Vérification conservée : aucune utilisation de `transition: all` |

## Notes

Les changements ont été poussés sur la branche `ui-polish-skill-20260703`.
