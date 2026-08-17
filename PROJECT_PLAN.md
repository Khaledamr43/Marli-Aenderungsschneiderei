# Änderungsschneiderei Website — Project Plan

Goal: a website that showcases the shop's tailoring/alteration work and secondhand clothing, from discovery through launch.

**Working rule:** proceed task by task. Do not start the next task until explicitly told to go to next.

**Documentation rule:** every Define/Ideate/Prototype step is documented visually on the [FigJam board](https://www.figma.com/board/25ptTuYTufqCqzFFacyNWD) — not just the final deliverable, but the reasoning behind each decision. This documentation is the substance of the portfolio case study, not just the final screens.

**Scope decision (15.07.2026):** portfolio one-pager — shows work, products, and location. Photo-first. No e-commerce, no booking/forms, no CTAs, no CMS. Details in `03-SCOPE-SITEMAP.md`.

**Design process (15.07.2026):** design thinking without Empathize — Define → Ideate → Prototype → Build → QA & Test → Deploy & Launch → Case study wrap-up.

## Progress
Restarted from the beginning (15.07.2026) — Khaled asked to redo the project from Discovery rather than resume at Personas. Prior Foundation files/FigJam sections are kept as reference but are being redone.

Current task: **Build — environment/repo setup fully done (17.08.2026).** Astro project in `site/`, Node v26.7.0, Astro 7.2.2, token/typography check page confirmed working in Khaled's own browser (colours + Hell/Dunkel toggle). GitHub CLI installed and authenticated (Khaled logged in as Khaledamr43); repo pushed to https://github.com/Khaledamr43/marli-aenderungsschneiderei, branch `main`. Next up: build the real 8 sections from the hi-fi screens, starting with Nav + Hero. Note: Khaled chose to skip past the open documentation gaps for now (Research, Scope decision, the Define block, Brainstorming/HMW) — plus the "Discovery (redone)" FigJam section (node 17:174) is no longer in the board and would need rebuilding. All of this can be filled in afterwards for the case study.

**Foundation**
- [x] Discovery — new "Step 1 · Discovery (redone)" section on [FigJam board](https://www.figma.com/board/25ptTuYTufqCqzFFacyNWD) (node 17:174)
- [ ] Research — `02-RESEARCH.md` + FigJam
- [ ] Scope decision — `03-SCOPE-SITEMAP.md` + FigJam

**Define**
- [ ] Personas
- [ ] Point of view statements
- [ ] Problem statement
- [ ] How might we

**Ideate**
- [x] Information architecture — built as "Information Architecture" section on the FigJam board (node 33:71); root + nav/6 sections/footer + content cards, matching wireframes
- [x] User flow — built on FigJam board (section "User Flow", node 26:2); redo of `04b-USER-FLOW.md`
- [ ] Brainstorming
- [ ] How might we (refine)
- [x] Low-fidelity wireframes — desktop one-pager in Figma design file `7M8XMZZXIaeyXrhyWZEzxT` ("Khalid's team"); 8 sections matching the user flow

**Prototype**
- [x] High-fidelity prototypes — "UI Screens" page in Figma file `7M8XMZZXIaeyXrhyWZEzxT`: exactly two screens, Desktop (1440) and Mobile (390), each switchable between the **Hell** and **Dunkel** modes (no duplicate dark frames). Built on a three-layer colour system (variables → paint styles → nodes) plus 14 text styles, 12 illustration components and a Theme-Switch component. Photo slots are material-tone gradients with line-art garment illustrations — real photos still to come.
- [x] Design-System-Dokumentation — new "Design System" page in the same Figma file: overview of the variables → styles → layers principle, colour token table with live light/dark swatches, all 14 text styles as specimens, spacing/radii/grid, component inventory, illustration library, contrast table and working rules. German, one 1680px document frame.
- [ ] Coded real product (dev handoff)

**Build**
- [x] Tech stack decision — **Astro + plain CSS** (17.08.2026), code in a **GitHub repo**
- [x] Environment/repo setup — Astro project in `site/`; `tokens.css` (14 Farben, Hell + Dunkel), `typography.css` (14 Stufen), `global.css`, `Base.astro`, `ThemeSwitch.astro`, Prüfseite. Repo live on GitHub: https://github.com/Khaledamr43/marli-aenderungsschneiderei
- [ ] Build pages/components from hi-fi designs
- [ ] Content population (real photos/copy)
- [ ] Responsive implementation

**QA & Test**
- [ ] Usability pass
- [ ] Cross-device/browser testing
- [ ] Accessibility check
- [ ] Performance check

**Deploy & Launch**
- [ ] Hosting/domain setup
- [ ] Go-live
- [ ] Production smoke test

**Case study wrap-up**
- [ ] Consolidate FigJam documentation into final case-study narrative

_Update the checkbox and "Current task" line whenever a task is completed._

## Foundation

### Discovery — done (redone 15.07.2026)
Findings (documented on FigJam, node 17:174):
- Offerings: alterations/tailoring and secondhand are two separate services, not one bundled identity
- Target customers: young/budget-friendly customers, and older customers who'd rather alter a loved garment than discard it
- Site goal: pure online presence/showcase only — no appointment requests, forms, or CTAs (confirms existing scope decision); pricing intentionally left off since nothing sells online
- Brand: color is black; logo, exact name lettering, and tone of voice not yet defined
- Open/to collect: existing photos/before-after shots/staff bio/hours unconfirmed (may need a photo shoot), project timeline, and who maintains the site post-launch — all still undecided

### Research
Reviewed competitor/inspiration sites (tailors, alteration shops, secondhand boutiques) and common search intent.

### Scope decision
Revised to a one-page portfolio site (no e-commerce, no CTAs). Sections: Hero, About Marli, What we do, Work gallery, Secondhand corner, Find us, Footer (+ Impressum/Datenschutz pages).

## Define
Ground the completed research in formal UX artifacts before wireframing.

- **Personas** — 1–2 representative user profiles built from the research findings
- **Point of view statements** — "[user] needs [need] because [insight]," one per persona
- **Problem statement** — the specific design problem this site needs to solve
- **How might we** — reframe the problem statement(s) into open-ended prompts to drive ideation

## Ideate

- **Information architecture** — content mapped per section/page
- **User flow** — path a user takes through the site
- **Brainstorming** — generate solution directions against the HMW prompts from Define
- **How might we (refine)** — narrow brainstormed ideas down to the strongest direction(s)
- **Low-fidelity wireframes** — sketch structure for key sections, validated against the user flow

## Prototype

- **High-fidelity prototypes** — style guide (colors, type, logo usage) applied to wireframes; click-through prototype in Figma. Prioritize the portfolio/gallery: lookbook style, large images, before/after pairs, filterable by garment type.

  **Built 16.08.2026 — visual direction "warm editorial":** canvas `#FAF6F0`, muted `#F1EAE0`, ink `#171310`, secondary ink `#57504A`, brass accent `#7A5426`, hairline `#E2D9CC`, inverse `#171310`/`#F7F2EA`. Headlines Playfair Display, body Inter. All colors, spacing (4–128) and radii live in the "Marli Tokens" variable collection; on top of it sit 12 solid paint styles (Background/*, Ink/*, Accent/*, Border/*, each bound to its variable) and 13 gradient styles (`Foto/*` per material, `Hero/Verlauf`) — nodes reference the styles, so restyling happens in one place. Photo slots additionally carry line-art garment illustrations from 12 components in the canvas section "Illustrationen — Foto-Platzhalter (Komponenten)". The collection has two modes: **Hell** (light) and **Dunkel** (dark: canvas #14110E, surface #262019, ink #F2EBE0, brass #CDA76D, hairline #483D33) — switching a frame's mode reskins the entire page, and both modes pass WCAG AA. `Foto/*` gradients stay mode-independent on purpose, and `bg/inverse`/`ink/inverse` deliberately do not flip so hero and footer keep light text in both modes. Type ramp is 14 named text styles (Display/Hero, Heading/H1–H3, Quote, Eyebrow, Body/Large–Small, Caption, Nav, Label/Strong + mobile variants). Layout: 1200px content column at 1440 (120 margins), 24px margins at 390. Grids: work 4-up → 1-up; second-hand 4×2 → 2-up. A tablet (768) frame existed but was deleted on request (16.08.2026) to keep the file to one desktop + one mobile screen; the intermediate breakpoint still needs to be decided at build time. The nav carries a Theme-Switch component (variants Modus=Hell / Modus=Dunkel) so the light/dark toggle is a real UI element, not just a Figma preview. All text/background pairs pass WCAG AA (lowest ratio 5.6:1). Contact block uses the real address (Rosenheimer Str. 29a, 83059 Kolbermoor); phone, e-mail and opening hours are still placeholders.
- **Coded real product** — handoff point: approved hi-fi designs move into development

## Build
Custom-coded (no WordPress/no-code builder) — this project is also a portfolio piece, so it's built and deployed as real code, not assembled in a drag-and-drop tool.

- **Tech stack decision — done 17.08.2026: Astro + plain CSS, GitHub repo.**
  Astro chosen because the site is static, photo-heavy and has no CMS: it ships effectively zero JavaScript, so the image-heavy one-pager stays fast and scores well on Lighthouse/SEO, while still giving components so the 8 second-hand tiles and 4 work cards aren't copy-pasted markup. Plain CSS (no Tailwind) because the design system already exists as a token layer in Figma — the "Marli Tokens" variables map 1:1 onto CSS custom properties, and the Hell/Dunkel modes become a `[data-theme]` attribute swap on `:root`. Code lives in a public GitHub repo so it can be linked from the portfolio case study and connected to a Vercel/Netlify deploy later.
- **Environment/repo setup — done 17.08.2026.** Astro-Projekt liegt in `site/`. Das Farbsystem aus Figma ist 1:1 als CSS-Custom-Properties portiert (`src/styles/tokens.css`): 14 Farbtokens mit beiden Modi, Abstandsskala 4–128, Radien, Rasterwerte. Der Modus hängt an `data-theme` auf `<html>`, wird im `localStorage` gemerkt und beim ersten Laden aus der Systemeinstellung übernommen; ein Inline-Skript im `<head>` setzt ihn vor dem ersten Paint, damit nichts aufblitzt. Die 14 Text-Styles liegen als `.t-…`-Klassen in `src/styles/typography.css`, Schriften selbst gehostet über Fontsource (kein Google-Fonts-CDN — DSGVO). Der Theme-Switch aus Figma ist als echte Komponente gebaut. `src/pages/index.astro` ist noch eine Prüfseite, die alle Tokens und Typo-Stufen in beiden Modi zeigt; sie wird beim nächsten Schritt durch die echten Sektionen ersetzt. Breakpoint vorläufig 900 px.
- Build pages/components from the hi-fi designs
- Content population — load real photos/copy (photo shoot of finished work)
- Responsive implementation across breakpoints

## QA & Test

- Usability pass on the built site
- Cross-browser/device check
- Accessibility check (contrast, alt text on portfolio images)
- Performance check (load speed, image optimization)

## Deploy & Launch

- Connect domain, hosting setup
- Go-live, production smoke test

## Case study wrap-up

Consolidate all FigJam documentation (Define through Prototype) into the final portfolio case-study narrative — the process story, not just the final screens.

## Post-launch (light — no CMS)
Occasional manual updates (new portfolio pieces, seasonal secondhand stock) via direct code changes, since there's no CMS.
