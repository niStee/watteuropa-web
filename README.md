# watteuropa.org – Nationalfreie Tage 2026 (NFT 2026)

Offizielle, moderne Web-Landingpage für das europäische Kunst- und Gesellschaftsprojekt **WATT** von **Josef Tieber** anlässlich der **3. Nationalfreien Tage (1. bis 3. Juni 2026)**.

---

## 🌟 Projekt-Highlights & Features

1. **Hero & Mission**:
   - Prominente Präsentation der *3. Nationalfreien Tage 2026 (NFT 2026)*.
   - Europäischer Gruß: *«Runter mit den nationalen Eitelkeiten und Respekt, Respekt, Respekt vor dir!»*
   - Ziel: Ausbruch aus nationalen Heiligkeitsblasen für mehr europäische und weltweite Gemeinschaftlichkeit.

2. **5 Sprach-Inlets (DE, EN, FR, NL, CZ)**:
   - Kreisrunde Exponat-Grafiken (Exponate 201 DE 3, 201 EN 3, 201 FR 3, 201 NL 3, 201 CZ 4).
   - Interaktive Lightbox / Popover mit hochauflösender Bildansicht und Übersetzungen.
   - Direkte Download-Buttons für druckfertige A4-PDF-Vorlagen.

3. **Video-Dokumentation & Multi-Language Untertitel**:
   - Tab-basierter Video-Player mit datenschutzfreundlichen YouTube-Embeds (`youtube-nocookie.com`):
     - **Tag 3: Abschlusskundgebung & Demonstration in Wegberg** (`A7CWUPn2YEY`)
     - **TV-Version (Framebuilder Media Edit • 2:30 min)** (`wrHgyR6Z_-I`)
     - **Tag 1: Political Evolution** (`bjQgVwqIg44`)
     - **Tag 2: Schengen² & Netze** (`dTHp3CdKcmM`)
     - **WATT Archiv-Player**: Lokaler HTML5-Player mit WebVTT-Untertiteln in allen 5 Sprachen (DE, EN, FR, NL, CZ).
   - **Interaktives Transkript**: Anklickbare Zeitmarken zum synchronisierten Anspringen im Video.

4. **Über WATT & das Kinetische Kunstwerk (HER2a)**:
   - Kinetische Skulptur *Hohe Europäische Rösser 2a*: 28 Nationalstaaten rotieren um die starre Mittelachse des Erdmittelpunkts (Symbol für Völkerrecht, Europarecht und gemeinsame Menschenwürde).
   - Historische Exponate: *Political Evolution* (von der Französischen Revolution bis Violett) & *Schengen²* (einheitlicher EU-Grenzschutz).

5. **Ausblick Prag 2027**:
   - Vorankündigung der 4. Ausgabe in Prag (1.–4. Juni 2027) mit tschechischem Exponat-Inlet (*4. Dny Bez Národnosti*).

6. **Impressum & Kontakt**:
   - Josef Tieber, Ing. (HTL), Jakob-Hoogen-Str. 68, D-41844 Wegberg.

---

## 🛠️ Technische Struktur

```
watteuropa-web/
├── index.html                  # Semantisches, barrierefreies HTML5
├── style.css                   # Modernes Vanilla-CSS-Designsystem (Volt/WATT Lila #502379)
├── main.js                     # Leichtgewichtiges Vanilla JS (Tabs, Modals, Untertitel)
├── assets/
│   ├── img/                    # Logos & Kontakt-Grafiken
│   ├── inlets/                 # 5 hochauflösende & optimierte Inlet-Grafiken (DE, EN, FR, NL, CZ)
│   ├── pdf/                    # 5 Original A4-Druck-PDFs
│   ├── subtitles/              # WebVTT (.vtt) & SRT (.srt) in 5 Sprachen
│   └── videos/                 # MP4-Videomaterial & Poster
├── tests/
│   └── site.test.ts            # Automatisierte Testsuite (Bun Test)
└── README.md                   # Dokumentation & Deployment-Anleitung
```

---

## 🧪 Tests & i18n Coverage Linter

Das Projekt verfügt über eine vollständige automatisierte Test- und Linter-Suite:

```bash
# Alle Tests & Linter ausführen
bun test

# Spezifischer i18n Übersetzungs-Coverage Linter
bun run lint:i18n
```

Die Tests überprüfen:
- **100% i18n DOM Coverage:** Jedes `data-i18n`-Attribut in `index.html` muss in allen 5 Sprachen (DE, EN, FR, NL, CZ) existieren.
- **Wörterbuch-Parität & Symmetrie:** Keine fehlenden oder leeren Übersetzungen zwischen den Sprachen.
- **Vollständigkeit der Transkripte:** Valide Zeitmarken und Texte für alle 5 Sprachversionen.
- **Gültigkeit der CSS-Variablen & Responsive Breakpoints**
- **Physische Existenz aller Assets (PDF, Bild, Audio)**
- **Sicherheitsprüfung:** Keine versehentlich committeten Passwörter oder API-Keys.

---

## 💻 Lokale Entwicklung

Starten eines lokalen Entwicklungsservers:

```bash
# Mit Bun:
bun --serve .

# Oder mit Python 3:
python3 -m http.server 8080
```

Anschließend im Browser unter `http://localhost:8080` aufrufen.

---

## 🚀 Deployment-Anleitung

### 1. United Domains (Webspace / FTP / SFTP)

1. **Dateien übertragen**:
   Laden Sie den gesamten Inhalt des Ordners `watteuropa-web/` (`index.html`, `style.css`, `main.js`, `assets/`) in das Hauptverzeichnis Ihres United Domains Webspace (`public_html` oder `htdocs`) hoch.
   
   *SFTP / FTP Beispiel:*
   ```bash
   rsync -avz --exclude '.git' --exclude 'tests' ./ sftp-user@hosting.united-domains.de:/public_html/
   ```

2. **Domain-Routing bei United Domains**:
   - Loggen Sie sich in Ihr [United Domains Domain-Portfolio](https://www.united-domains.de/) ein.
   - Navigieren Sie zu `watteuropa.org` → **Webspace-Zuordnung** oder **DNS-Einstellungen**.
   - Verweisen Sie den Webspace-Pfad auf das Verzeichnis mit der `index.html`.
   - Falls extern gehostet:
     - **A-Record** für `@` auf die Server-IP setzen.
     - **CNAME-Record** für `www` auf die Zieladresse setzen.

3. **Sicherheitshinweis**:
   Hosting- und FTP-Passwörter gehören niemals in Git-Repositories. Nutzen Sie Umgebungsvariablen oder den KWallet/Schlüsselbund.

### 2. Netlify / Vercel (Static CDN)

1. Neues Projekt aus dem Git-Repository importieren.
2. Build-Kommando: *leer lassen* (da reines statisches HTML/CSS/JS).
3. Publish directory: `./`
4. Custom Domain `watteuropa.org` verknüpfen und DNS CNAME/A-Einträge hinterlegen.

### 3. GitHub Pages / GitLab Pages

- In den Repository-Einstellungen unter **Pages** die Quelle auf Branch `main` und Root `/` stellen.
