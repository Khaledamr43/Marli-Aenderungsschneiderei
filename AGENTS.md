# Repo-Hinweise für Coding-Agents

## Aufbau
- `site/` — das Astro-Projekt, alles Code. Siehe [`site/README.md`](site/README.md) für
  Setup, Skripte und die Design-Token-Kette.
- `docs/` — Case-Study-Artefakte (Research, Scope, Content-Plan). Siehe [`docs/README.md`](docs/README.md).
- `PROJECT_PLAN.md` — der lebende Projektplan mit Checkliste und Fortschritts-Log. Bei
  jedem abgeschlossenen Schritt aktualisieren, nicht nur den Code ändern.
- Prozessdokumentation (Reasoning, nicht nur Ergebnisse) liegt primär auf dem
  [FigJam-Board](https://www.figma.com/board/25ptTuYTufqCqzFFacyNWD).

## Arbeitsregeln
- **Niemals eine Farbe oder Schriftgröße direkt in eine Komponente schreiben** — immer
  `var(--color-…)` aus `tokens.css` bzw. eine `.t-…`-Klasse aus `typography.css`
  benutzen, sonst bricht der Dunkelmodus.
- **Keine root-relativen `href`/`url()`-Pfade** (`/foo`, `url("/bar.webp")`). Die Seite
  läuft unter `base: '/marli-aenderungsschneiderei/'` (GitHub Pages), also immer
  `import.meta.env.BASE_URL` verwenden — auch in `<style>`-Blöcken via
  `define:vars`. Vor jedem Deploy `npm run build` laufen lassen und in `dist/index.html`
  prüfen, dass generierte Pfade den Base-Präfix tragen.
- Vor dem Commit: `npm run check` (0 Fehler Pflicht) und `npm run build` in `site/`.
- Task-für-Task vorgehen, nicht vorauseilen — siehe "Working rule" in `PROJECT_PLAN.md`.
