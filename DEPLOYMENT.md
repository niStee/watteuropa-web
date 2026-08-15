# Deployment & CI/CD Leitfaden – watteuropa.org

Dieses Dokument beschreibt die automatisierte Veröffentlichung (CI/CD) der **WATT / Nationalfreie Tage 2026** Web-Plattform auf **United Domains** und **GitHub Pages**.

---

## 🏗️ Architektur & Pipeline-Übersicht

Bei jedem `git push` auf den `main`-Branch führt GitHub Actions die Pipeline [`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml) aus:

```
                  ┌────────────────────────┐
                  │   git push origin main │
                  └───────────┬────────────┘
                              │
                              ▼
                  ┌────────────────────────┐
                  │ 1. Quality Gate (Test) │
                  │  • bun test (8 Tests)  │
                  │  • bun run lint:i18n   │
                  └───────────┬────────────┘
                              │ (100% grün)
                              ▼
            ┌───────────────────────────────────┐
            │  2. United Domains Deployment     │
            │  • FTPS / TLS verschlüsselt       │
            │  • HTML, CSS, JS, Assets, Gen     │
            └───────────────────────────────────┘
```

---

## 🚀 Option 1: Automatisches Deployment auf United Domains Webspace (FTPS)

### 1. Benötigte GitHub Secrets einrichten
Gehen Sie im GitHub-Repository auf:  
👉 `Settings` ➔ `Secrets and variables` ➔ `Actions` ➔ `New repository secret`

Legen Sie folgende Secrets an (Daten aus dem United Domains Kundencenter):

| Secret Name | Beispiel-Wert | Beschreibung |
|---|---|---|
| `UNITED_DOMAINS_HOST` | `ftp.united-domains.de` | FTPS-Serveradresse von United Domains |
| `UNITED_DOMAINS_USER` | `u12345678` | FTP-Benutzername |
| `UNITED_DOMAINS_PASSWORD` | `••••••••••••` | FTP-Passwort |
| `UNITED_DOMAINS_TARGET_DIR` | `/htdocs/` | Zielverzeichnis auf dem Webspace (meist `/htdocs/` oder `/public_html/`) |
| `UNITED_DOMAINS_PORT` | `21` *(optional)* | Port (Standard: 21 für FTPS mit TLS) |

### 2. Automatischer Ablauf
* Sobald die Secrets hinterlegt sind, lädt GitHub Actions bei jedem Commit auf `main` alle geänderten Dateien automatisch per sicherem FTPS hoch.
* Fehlen die Secrets, überspringt die Pipeline den Webspace-Upload sicher mit einem informativen Hinweis und führt die Tests aus.
* Über den Reiter **Actions ➔ CI/CD Pipeline ➔ Run workflow** kann auch jederzeit ein manueller Deploy (inkl. Dry-Run Option) gestartet werden.

---

## 🌐 Option 2: DNS-Direktaufschaltung von watteuropa.org auf GitHub Pages

Alternativ zum klassischen FTP-Webspace kann die Domain `watteuropa.org` direkt über das United Domains DNS-Center auf das weltweite CDN von GitHub Pages geschaltet werden (kostenloses, automatisches Let's-Encrypt SSL-Zertifikat):

### 1. DNS-Einträge im United Domains Domain-Center:
* **A-Records für `watteuropa.org`:**
  * `185.199.108.153`
  * `185.199.109.153`
  * `185.199.110.153`
  * `185.199.111.153`
* **CNAME-Record für `www.watteuropa.org`:**
  * `nistee.github.io.`

### 2. In GitHub Pages aktivieren:
* In `Settings ➔ Pages` unter *Custom domain* `watteuropa.org` eintragen.
* Haken bei *Enforce HTTPS* setzen.

---

## ✅ Checkliste für den finalen Go-Live (Suchmaschinen-Freigabe)

Sobald Josef die Freigabe zur Veröffentlichung erteilt:

1. **Staging-Tag entfernen:**
   * In [`index.html`](index.html) und [`generator/index.html`](generator/index.html) die Zeile:
     ```html
     <meta name="robots" content="noindex, nofollow">
     ```
     entfernen bzw. durch `<meta name="robots" content="index, follow">` ersetzen.
2. **Robots.txt anpassen:**
   * In [`robots.txt`](robots.txt) auf `Disallow:` (leer) bzw. `Allow: /` ändern:
     ```txt
     User-agent: *
     Allow: /
     ```
3. **Commit & Push:**
   * Durch den anschließenden Push auf `main` läuft die CI/CD-Pipeline automatisch durch und stellt die produktive, suchmaschinenoptimierte Version online.
