# Contributing to WATT Europa Web & Slogan Generator

Thank you for your interest in contributing to the **WATT European Art / Nationalfreie Tage (NFT 2026)** web platform and Slogan Generator!

This document outlines the guidelines and workflow for proposing changes, reporting bugs, improving translations, and submitting code.

---

## 🏛️ Project Scope & Licensing Notice

Before contributing, please note the distinction between code and artistic assets:

1. **Software & Web Code (MIT License):**  
   All source code (HTML, Vanilla CSS, JavaScript, test suites, generator logic, and CI/CD pipelines) is open source under the [MIT License](LICENSE).
2. **Artistic Works & Media (© Copyright Josef Tieber):**  
   All artistic designs, kinetic sculptures (*HER2a*), inlet graphics (*201 DE/EN/FR/NL/CZ, 105 DE*), print PDFs, and video recordings belong exclusively to Josef Tieber.

By submitting a Pull Request, you agree that your code contributions are licensed under the repository's MIT License.

---

## 🛠️ Development Setup & Workflow

This project is built with standard web technologies (HTML5, Vanilla CSS, modern ES modules) and uses [Bun](https://bun.sh) as the package manager and test runner.

### 1. Prerequisites

- [Bun](https://bun.sh) >= 1.2
- A modern web browser (Firefox, Chromium/Chrome, Safari)

### 2. Quickstart

```bash
# Clone the repository
git clone https://github.com/niStee/watteuropa-web.git
cd watteuropa-web

# Install dependencies (optional dev tooling)
bun install

# Start local development server
bun run dev
```

Visit `http://localhost:8080` in your browser.

---

## 🧪 Testing & Quality Gates

Every change must pass the automated test suite and the i18n translation coverage linter before being merged.

```bash
# Run all tests (structure, accessibility, DOM, security checks)
bun test

# Run i18n translation coverage linter
bun run lint:i18n
```

### Adding New Language Strings
When adding new UI text to `index.html`:
1. Add the `data-i18n="yourKey"` attribute to the HTML element.
2. Provide the translation in all 5 supported languages (**DE, EN, FR, NL, CZ**) in `main.js` inside `UI_TRANSLATIONS`.
3. Verify 100% coverage by running `bun run lint:i18n`.

---

## 📦 Pull Request Process

1. **Fork or Branch**: Create a feature branch from `main` (e.g. `feat/new-slogan-preset` or `fix/subtitle-sync`).
2. **Follow Coding Standards**:
   - Write clean, semantic HTML5 and Vanilla CSS without external framework bloat.
   - Ensure all interactive elements have unique, descriptive IDs or accessibility labels.
   - Respect user privacy: **zero tracking cookies, zero invasive analytics**.
3. **Commit Messages**: Use [Conventional Commits](https://www.conventionalcommits.org/):
   - `feat: add new feature`
   - `fix: resolve issue`
   - `docs: update documentation`
   - `test: add test cases`
   - `ci: pipeline adjustments`
4. **Verify Locally**: Ensure `bun test` and `bun run lint:i18n` are 100% green.
5. **Open Pull Request**: Submit your PR targeting `main`. GitHub Actions will automatically run the quality gate tests and OpenSSF Scorecard security analysis.

---

## 🐛 Reporting Bugs & Feedback

- **Bug Reports**: Open an issue on GitHub detailing the expected behavior, actual behavior, browser version, and steps to reproduce.
- **Security Issues**: Please follow the coordinated disclosure policy in [SECURITY.md](SECURITY.md) instead of creating public issues.

Thank you for helping build an open, accessible, and united European art project!
