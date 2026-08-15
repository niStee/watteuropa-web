# watteuropa.org – Nationalfreie Tage 2026 (NFT 2026)

[![CI/CD Pipeline - Test, Lint & Deploy](https://github.com/niStee/watteuropa-web/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/niStee/watteuropa-web/actions/workflows/ci-cd.yml)
[![OpenSSF Scorecard Supply-Chain Security](https://github.com/niStee/watteuropa-web/actions/workflows/scorecard.yml/badge.svg)](https://github.com/niStee/watteuropa-web/actions/workflows/scorecard.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![i18n Coverage](https://img.shields.io/badge/i18n%20Coverage-100%25%20(DE%20%7C%20EN%20%7C%20FR%20%7C%20NL%20%7C%20CZ)-success.svg)](tests/i18n.test.ts)

Offizielle, moderne Web-Landingpage und interaktiver Slogan-Generator für das europäische Kunst- und Gesellschaftsprojekt **WATT** von **Josef Tieber (Ing. HTL)** anlässlich der **3. Nationalfreien Tage (1. bis 3. Juni 2026)**.

---

## 🌟 Projekt-Highlights & Module

### 1. 🌐 Landing Page (`index.html`)
- **Hero & Mission**: Prominente Präsentation der *Nationalfreien Tage 2026 (NFT 2026)* mit dynamischem Sprach-Inlet.
- **5 Sprach-Inlets (DE, EN, FR, NL, CZ)**:
  - Kreisrunde Exponat-Grafiken (*201 DE 3, 201 EN 3, 201 FR 3, 201 NL 3, 201 CZ 4*).
  - Interaktive Lightbox mit hochauflösender Detailansicht und Übersetzungen.
  - Direkte Download-Buttons für druckfertige A4-PDF-Vorlagen.
- **4 Offizielle Video-Dokumentationen (YouTube)**:
  - **Tag 1: Political Evolution** (`bjQgVwqIg44`)
  - **Tag 2: Schengen² & Netze** (`dTHp3CdKcmM`)
  - **Tag 3: Abschlusskundgebung Wegberg** (`A7CWUPn2YEY` • *Standard aktiv*)
  - **TV-Version (Framebuilder Media Edit • 2:30 min)** (`wrHgyR6Z_-I`)
  - **Interaktive Speech Transcripts**: Vollständig synchronisiert in allen 5 Sprachen mit anspringbaren Zeitmarken.
- **Kinetische Skulptur (*HER2a*) & Historische Exponate**: Erklärung der 28 rotierenden Nationalstaaten um den Erdmittelpunkt (Völkerrecht & Europarecht).
- **Ausblick Prag 2027**: Vorankündigung der 4. Ausgabe (*Dny Bez Národnosti*).
- **Rechtliches Modal**: Vollständiges Impressum (§ 5 DDG, § 18 MStV) und DSGVO-Datenschutzerklärung.

### 2. 🎨 Slogan & Circular Inlet Generator (`generator/index.html`)
- **Vektor- & Canvas-Engine**: Erstellung kreisrunder Badges mit gebogenem Text oben/unten, zentralen Zitaten und Exponatnummern.
- **Mehrsprachige Presets**: Vorkonfigurierte Slogans für alle 5 Sprachen (DE, EN, FR, NL, CZ).
- **Farbthemen & Typografie**: WATT Deep Violet, White on Violet, Dark Inverted, Gold/Accent sowie dynamische Schriftarten (Montserrat, Inter, Oswald, Roboto Condensed).
- **Druck & Export**:
  - Hochauflösendes PNG (2048x2048 px, **300 DPI druckfertig**).
  - Vektor-SVG.
  - A4-Druckbogen (2x2 / 3x2 Raster mit Schnittmarken).
  - Standalone-ZIP-Pakete für alle Sprachvarianten.

---

## 🛠️ Technische Struktur

```
watteuropa-web/
├── index.html                  # Semantisches, barrierefreies HTML5 (Landingpage)
├── style.css                   # Modernes Vanilla-CSS-Designsystem (WATT Deep Violet #502379)
├── main.js                     # Vanilla JS (Sprachwechsler, Video-Tabs, Modals, Transkripte)
├── generator/                  # Standalone Slogan & Inlet Generator
│   ├── index.html              # Generator UI
│   ├── style.css               # Generator Design System
│   ├── app.js                  # Generator Controller & Event Engine
│   └── generator-core.js       # Vektor-Mathematik, Presets, SVG/ZIP Exporter
├── assets/
│   ├── img/                    # Logos, Fotos & Kontakt-Grafiken
│   ├── inlets/                 # 5 hochauflösende & optimierte Inlet-Grafiken (DE, EN, FR, NL, CZ)
│   ├── pdf/                    # 5 Original A4-Druck-PDFs
│   └── subtitles/              # WebVTT (.vtt) & SRT (.srt) in 5 Sprachen
├── tests/
│   ├── site.test.ts            # Automatisierte Testsuite (Bun Test)
│   └── i18n.test.ts            # 100% i18n Translation Coverage Linter
├── .github/
│   └── workflows/
│       ├── ci-cd.yml           # CI/CD Test & Automated United Domains FTPS Deploy
│       └── scorecard.yml       # OpenSSF Scorecard Supply-Chain Security
├── CONTRIBUTING.md             # Entwicklungs- & Mitwirkungs-Leitfaden
├── SECURITY.md                 # Sicherheitsrichtlinie & Coordinated Disclosure
├── DEPLOYMENT.md               # United Domains & DNS Deployment-Handbuch
└── LICENSE                     # MIT-Lizenz (Code) & Copyright-Hinweis (Kunstwerke)
```

---

## 🧪 Tests & Quality Gates

Das Projekt verwendet [Bun](https://bun.sh) als Test-Runner und i18n-Linter:

```bash
# Alle Tests ausführen (Struktur, Barrierefreiheit, Assets, Subtitles, Security)
bun test

# 100% i18n Übersetzungs-Coverage Linter ausführen
bun run lint:i18n

# Lokalen Entwicklungsserver starten
bun run dev
```

---

## 🚀 Deployment & CI/CD Pipeline

Das Deployment ist über GitHub Actions automatisiert. Siehe ausführliche Anleitung in **[`DEPLOYMENT.md`](DEPLOYMENT.md)**.

1. **Stufe 1 (Quality Gate):** Jeder Push führt `bun test` und `bun run lint:i18n` aus.
2. **Stufe 2 (United Domains Webspace Upload):** Bei Vorhandensein der GitHub Secrets (`UNITED_DOMAINS_HOST`, `UNITED_DOMAINS_USER`, `UNITED_DOMAINS_PASSWORD`) wird die Website automatisch verschlüsselt per FTPS auf den Webspace hochgeladen.
3. **Alternative (DNS CNAME):** Aufschaltung der Domain `watteuropa.org` direkt auf das weltweite CDN von GitHub Pages.

---

## ⚖️ Lizenz, Urheberrecht & Unabhängigkeit

- **Software & Quellcode (FOSS):**  
  Der gesamte Programmcode (HTML, CSS, JavaScript, Slogan-Generator-Logik, CI/CD-Pipelines und Test-Suiten) steht unter der freien **[MIT-Lizenz](LICENSE)**.

- **Künstlerische Werke, Medien & Exponate (Copyright Josef Tieber):**  
  Alle künstlerischen Inhalte, kinetischen Skulpturen (*Hohe Europäische Rösser HER2a*), grafischen Ausarbeitungen, Exponat-Inlets (*201 DE 3, 201 EN 3, 201 FR 3, 201 NL 3, 201 CZ 4, 105 DE*), Druck-PDFs und Videoaufnahmen unterliegen dem alleinigen **Urheberrecht von Josef Tieber (WATT European Art)** (*All rights reserved / Alle Rechte vorbehalten*).

- **Projekt-Unabhängigkeit:**  
  *WATT / Nationalfreie Tage* ist ein eigenständiges Kunst- und Gesellschaftsprojekt von Josef Tieber und stellt kein offizielles Projekt oder Parteiorgan von Volt Europa dar.
