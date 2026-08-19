# Marli — Änderungsschneiderei & Second-Hand

UX/UI-Case-Study und Live-Website für die Änderungsschneiderei Marli in
Kolbermoor: eine einseitige Portfolio-Site, die Arbeiten, Second-Hand-Stücke
und den Standort zeigt.

**Live:** https://khaledamr43.github.io/marli-aenderungsschneiderei/

## Aufbau

```
├── site/            das Astro-Projekt — siehe site/README.md für Setup & Skripte
├── docs/            Case-Study-Artefakte (Research, Scope, Content-Plan)
├── PROJECT_PLAN.md  lebender Projektplan mit Checkliste & Fortschritts-Log
└── AGENTS.md         Arbeitsregeln für Coding-Agents
```

Der vollständige Design-Thinking-Prozess (Discovery → Define → Ideate →
Prototype) ist zusätzlich auf dem
[FigJam-Board](https://www.figma.com/board/25ptTuYTufqCqzFFacyNWD) dokumentiert —
nicht nur die fertigen Screens, sondern die Begründung hinter jeder Entscheidung.

## Entwicklung

```bash
cd site
npm install
npm run dev
```

Details dazu und zur Design-Token-Architektur stehen in
[`site/README.md`](site/README.md).

## Deployment

Push auf `main` löst automatisch `.github/workflows/deploy.yml` aus: Astro-Build
→ Deploy nach GitHub Pages.
