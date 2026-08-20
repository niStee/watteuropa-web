# watteuropa.org – Nationalfreie Tage 2026 (NFT 2026)

<p align="left">
  <a href="https://nistee.github.io/watteuropa-web/"><img src="https://img.shields.io/badge/Live_Prototype-watteuropa.org-502379?style=flat&logo=safari&logoColor=white" alt="Live Prototype"></a>
  <a href="https://github.com/niStee/watteuropa-web/releases"><img src="https://img.shields.io/github/v/release/niStee/watteuropa-web?style=flat&logo=github&color=blue" alt="Latest Release"></a>
  <a href="https://github.com/niStee/watteuropa-web/actions/workflows/ci-cd.yml"><img src="https://github.com/niStee/watteuropa-web/actions/workflows/ci-cd.yml/badge.svg?branch=main" alt="CI/CD Pipeline"></a>
  <a href="https://scorecard.dev/viewer/?uri=github.com/niStee/watteuropa-web"><img src="https://api.scorecard.dev/projects/github.com/niStee/watteuropa-web/badge" alt="OpenSSF Scorecard"></a>
  <a href="https://bun.sh"><img src="https://img.shields.io/badge/Runtime-Bun%20v1.3+-fbf0df?style=flat&logo=bun&logoColor=black" alt="Bun Runtime"></a>
  <a href="tests/i18n.test.ts"><img src="https://img.shields.io/badge/i18n-100%25%20(DE%20%7C%20EN%20%7C%20FR%20%7C%20NL%20%7C%20CZ)-success.svg?style=flat" alt="i18n Coverage"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Code_License-MIT-blue.svg?style=flat" alt="Code License: MIT"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Artworks-%C2%A9_Josef_Tieber-502379.svg?style=flat" alt="Artworks Copyright"></a>
  <a href="DEPLOYMENT.md"><img src="https://img.shields.io/badge/Deploy-United_Domains-ff6600.svg?style=flat&logo=serverfault&logoColor=white" alt="United Domains Deploy"></a>
</p>

Offizielle, moderne Web-Landingpage und interaktiver Slogan-Generator für das europäische Kunst- und Gesellschaftsprojekt **WATT** von **Josef Tieber (Ing. HTL)** anlässlich der **3. Nationalfreien Tage (1. bis 3. Juni 2026)**.

---

## 🌟 Projekt-Highlights & Module

### 1. 🌐 Landing Page (`index.html`)
- **Hero & Mission**: Prominente Präsentation der *Nationalfreien Tage 2026 (NFT 2026)* mit dynamischem Sprach-Inlet.
- **5 Sprach-Inlets (DE, EN, FR, NL, CZ)**:
  - Kreisrunde Exponat-Grafiken (*201 DE 3, 201 EN 3, 201 FR 3, 201 NL 3, 201 CZ 4*).
  - Interaktive Lightbox mit hochauflösender Detailansicht und Übersetzungen.
  - Direkte Download-Buttons für druckfertige A4-PDF-Vorlagen.
- **4 Offizielle Video-Dokumentationen (YouTube • 2-Click Poster-Fassade)**:
  - **Datenschutz & Minimal-Traffic**: Initial werden nur lokale, optimierte Poster-Bilder geladen (spart >95% initialen Traffic und blockiert Google-Tracking vor Interaktion).
  - **Tag 1: Political Evolution** (`bjQgVwqIg44`)
  - **Tag 2: Schengen² & Netze** (`dTHp3CdKcmM`)
  - **Tag 3: Abschlusskundgebung Wegberg** (`A7CWUPn2YEY` • *Standard aktiv*)
  - **TV-Version (Framebuilder Media Edit • 2:30 min)** (`wrHgyR6Z_-I`)
  - **Interaktive Speech Transcripts**: Vollständig synchronisiert in allen 5 Sprachen mit anspringbaren Zeitmarken.
- **Lokales Font-Self-Hosting (Zero-External-Network)**: Alle Schriftarten (Inter, Outfit, Montserrat, Oswald, Roboto Condensed, Cinzel) liegen als schlanke, Latin-subsettete `.woff2`-Dateien im Repository.
- **Kinetische Skulptur (*HER2a*) & Historische Exponate**: Erklärung der 28 rotierenden Nationalstaaten um den Erdmittelpunkt (Völkerrecht & Europarecht).
- **Ausblick Prag 2027**: Vorankündigung der 4. Ausgabe (*Dny Bez Národnosti*).
- **Rechtliches Modal**: Vollständiges Impressum (§ 5 DDG, § 18 MStV) und DSGVO-Datenschutzerklärung.

### 2. 🎨 Slogan & Circular Inlet Generator (`generator/index.html`)
- **Vektor- & Canvas-Engine**: Erstellung kreisrunder Badges mit gebogenem Text oben/unten, zentralen Zitaten und Exponatnummern.
- **Mehrsprachige Presets**: Vorkonfigurierte Slogans für alle 5 Sprachen (DE, EN, FR, NL, CZ).
- **Farbthemen & Typografie**: WATT Deep Violet, White on Violet, Dark Inverted, Gold/Accent sowie dynamische Schriftarten (Montserrat, Inter, Oswald, Roboto Condensed).
- **Druck & Export**:
  - Hochauflösendes PNG (2048x2048 px, **300 DPI druckfertig** mit `document.fonts.ready` Race-Condition-Schutz).
  - Vektor-SVG.
  - A4-Druckbogen (2x2 / 3x2 Raster mit Schnittmarken).
  - Standalone-ZIP-Pakete für alle Sprachvarianten.

---

## 🛠️ Technische Struktur

```
watteuropa-web/
├── index.html                  # Semantisches, barrierefreies HTML5 (Landingpage)
├── style.css                   # Modernes Vanilla-CSS-Designsystem (WATT Deep Violet #502379)
├── main.js                     # Vanilla JS mit strikten JSDoc-Typen (@ts-check)
├── tsconfig.json               # Zero-Build TypeScript Configuration (checkJs: true, noEmit: true)
├── generator/                  # Standalone Slogan & Inlet Generator
│   ├── index.html              # Generator UI
│   ├── style.css               # Generator Design System
│   ├── app.js                  # Generator Controller mit JSDoc-Typen
│   └── generator-core.js       # Vektor-Mathematik, Presets, SVG/ZIP Exporter
├── assets/
│   ├── fonts/                  # Lokale WOFF2-Fonts (Inter, Outfit, Montserrat, Oswald, etc.)
│   ├── img/                    # Logos, Fotos & Kontakt-Grafiken
│   │   └── video-posters/      # Lokale Thumbnails für 2-Click YouTube Facade
│   ├── inlets/                 # 5 hochauflösende & optimierte Inlet-Grafiken (DE, EN, FR, NL, CZ)
│   ├── pdf/                    # 5 Original A4-Druck-PDFs
│   └── subtitles/              # WebVTT (.vtt) & SRT (.srt) in 5 Sprachen
├── tests/
│   ├── site.test.ts            # Automatisierte Testsuite (Bun Test)
│   └── i18n.test.ts            # 100% i18n Translation Coverage Linter
├── .github/
│   └── workflows/
│       ├── ci-cd.yml           # CI/CD Test & Automated United Domains FTPS Deploy
│       ├── a11y.yml            # W3C HTML5/CSS & axe-core WCAG 2.1 AA Accessibility Validation
│       └── scorecard.yml       # OpenSSF Scorecard Supply-Chain Security
├── CONTRIBUTING.md             # Entwicklungs- & Mitwirkungs-Leitfaden
├── SECURITY.md                 # Sicherheitsrichtlinie & Coordinated Disclosure
├── DEPLOYMENT.md               # United Domains & DNS Deployment-Handbuch
└── LICENSE                     # MIT-Lizenz (Code) & Copyright-Hinweis (Kunstwerke)
```

---

## 🧪 Tests & Quality Gates

Das Projekt verwendet [Bun](https://bun.sh) als Test-Runner, i18n-Linter und TypeScript-Typechecker sowie automatisierte W3C/A11y-Audits in CI:

```bash
# Alle Tests ausführen (Struktur, Barrierefreiheit, Assets, Subtitles, Security & TypeScript Typecheck)
bun test

# Strikten Zero-Build TypeScript Typecheck separat ausführen
bun run typecheck

# 100% i18n Übersetzungs-Coverage Linter ausführen
bun run lint:i18n

# Lokalen Entwicklungsserver starten
bun run dev
```

### Automatisierte CI/CD Quality Gates (`.github/workflows/`)
1. **Quality Gate (`ci-cd.yml`):** Jeder Push führt `bun run test` (inkl. `tsc --noEmit`) und `bun run lint:i18n` aus.
2. **Barrierefreiheit & Validierung (`a11y.yml`):**
   * **W3C HTML5 & CSS Validator**: Validiert strikte W3C-Standards auf `index.html` und `generator/index.html`.
   * **Axe-Core Accessibility Audit**: Prüft WCAG 2.1 AA Konformität automatisiert auf Chromium Headless.
3. **Deployment (United Domains Webspace):** Bei Vorhandensein der GitHub Secrets (`UNITED_DOMAINS_HOST`, `UNITED_DOMAINS_USER`, `UNITED_DOMAINS_PASSWORD`) wird die Website automatisch per FTPS hochgeladen.
4. **Alternative (DNS CNAME):** Aufschaltung der Domain `watteuropa.org` direkt auf das weltweite CDN von GitHub Pages.

---

## ⚖️ Lizenz, Urheberrecht & Unabhängigkeit

- **Software & Quellcode (FOSS):**  
  Der gesamte Programmcode (HTML, CSS, JavaScript, Slogan-Generator-Logik, CI/CD-Pipelines und Test-Suiten) steht unter der freien **[MIT-Lizenz](LICENSE)**.

- **Künstlerische Werke, Medien & Exponate (Copyright Josef Tieber):**  
  Alle künstlerischen Inhalte, kinetischen Skulpturen (*Hohe Europäische Rösser HER2a*), grafischen Ausarbeitungen, Exponat-Inlets (*201 DE 3, 201 EN 3, 201 FR 3, 201 NL 3, 201 CZ 4, 105 DE*), Druck-PDFs und Videoaufnahmen unterliegen dem alleinigen **Urheberrecht von Josef Tieber (WATT European Art)** (*All rights reserved / Alle Rechte vorbehalten*).

- **Projekt-Unabhängigkeit:**  
  *WATT / Nationalfreie Tage* ist ein eigenständiges Kunst- und Gesellschaftsprojekt von Josef Tieber und stellt kein offizielles Projekt oder Parteiorgan von Volt Europa dar.
