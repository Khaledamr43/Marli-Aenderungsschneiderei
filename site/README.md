# Marli — Änderungsschneiderei & Second-Hand

Einseitige Portfolio-Website für die Änderungsschneiderei Marli in Kolbermoor.
Gebaut mit [Astro](https://astro.build) und reinem CSS — kein CMS, keine
Formulare, kein E-Commerce.

## Loslegen

Voraussetzung: **Node.js 20 oder neuer**.

```bash
cd site
npm install     # einmalig — lädt Astro und die Schriften
npm run dev     # startet den Entwicklungsserver
```

Danach im Browser **http://localhost:4321** öffnen. Änderungen an Dateien
erscheinen sofort, ohne Neuladen.

| Befehl            | Wirkung                                     |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Entwicklungsserver auf Port 4321            |
| `npm run build`   | Fertige Seite nach `dist/` bauen            |
| `npm run preview` | Gebaute Seite lokal ansehen                 |
| `npm run check`   | Astro/TypeScript-Prüfung                    |

## Aufbau

```
site/
├── src/
│   ├── styles/
│   │   ├── tokens.css       ← Farben, Abstände, Radien (Hell + Dunkel)
│   │   ├── typography.css   ← die 14 Typo-Stufen
│   │   └── global.css       ← Reset, Raster, Hilfsklassen
│   ├── layouts/Base.astro   ← <html>, Schriften, Modus-Skript
│   ├── components/          ← Nav, Hero, Sektionen …
│   ├── data/                ← Inhalte (Arbeiten, Second-Hand, Stimmen)
│   └── pages/index.astro    ← die eine Seite
└── public/                  ← Fotos, Favicon
```

## Design-Fundament

Alles kommt aus der Figma-Datei `7M8XMZZXIaeyXrhyWZEzxT`, Seite
**Design System**. Die Kette dort lautet Variablen → Styles → Ebenen; im
Code entspricht das CSS-Custom-Properties → Utility-Klassen → Komponenten.

**Wichtigste Regel:** niemals eine Farbe oder Schriftgröße direkt in eine
Komponente schreiben. Immer `var(--color-…)` bzw. eine `.t-…`-Klasse
benutzen — sonst bricht der Dunkelmodus.

Der Modus hängt an `data-theme` auf `<html>` (`hell` / `dunkel`), wird im
`localStorage` gemerkt und beim ersten Laden aus der Systemeinstellung
übernommen.

## Noch offen

- [ ] Echte Fotos — alle Bildflächen sind bisher Verlaufs-Platzhalter
- [ ] Exakte Verlaufsstopps der `Foto/*`-Styles aus Figma übernehmen
- [ ] Telefonnummer und E-Mail sind Platzhalter (nur die Adresse stimmt)
- [ ] Breakpoint zwischen 390 und 1440 px endgültig festlegen (derzeit 900 px)
- [ ] Impressum & Datenschutz
