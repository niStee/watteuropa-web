# AGENTS.md — watteuropa-web

> Parent: [~/AGENTS.md](../../AGENTS.md) — environment-wide context (LiteLLM proxy, git identity, toolchains).
> Primary Repo: `niStee/watteuropa-web` on GitHub (public) · EU Mirror: `niStee/watteuropa-web` on Codeberg (private)
> Security Policy: [SECURITY.md](file:///home/nils/Projects/watteuropa-web/SECURITY.md) · Code License: MIT · Media License: © Josef Tieber

Official web landing page and interactive circular slogan/inlet generator for **WATT European Art • Nationalfreie Tage (NFT 2026)** by **Josef Tieber (Ing. HTL)**.

## Project Overview

- **Landing Page (`index.html`)**: Multilingual presentation of NFT 2026, 5 circular exhibit inlets (DE, EN, FR, NL, CZ), 4 official YouTube videos with synchronized interactive speech transcripts, kinetic sculpture *HER2a* explanation, and legal Impressum/DSGVO modal.
- **Slogan & Inlet Generator (`generator/`)**: Standalone browser-based vector tool to design, customize, and export circular badges, A4 print sheets (2x2 / 3x2), SVG, and 300 DPI high-resolution PNGs with multilingual presets.
- **Hosting Targets**: United Domains Webspace (via automated FTPS GitHub Actions) and GitHub Pages (`https://nistee.github.io/watteuropa-web/`).

---

## Technical Stack & Constraints

- **Runtime & Toolchain**: [Bun](https://bun.sh) (exclusive JS/TS test runner & linter; no npm/yarn).
- **Core Technologies**: Semantic HTML5, Vanilla CSS (CSS variables, fluid typography, zero Tailwind), ES Modules (no frontend framework build steps).
- **Privacy & GDPR**: **Zero tracking cookies, zero third-party analytics**. Privacy-First architecture. YouTube embeds use `youtube-nocookie.com`.
- **Licensing Separation**:
  - **Code (FOSS)**: [MIT License](LICENSE) (Nils Steenebruegge).
  - **Artistic Works & Media**: © Copyright 2026 Josef Tieber (WATT European Art). All rights reserved.
  - **Independence**: Independent artistic project by Josef Tieber; not an official organ of Volt Europa.

---

## Commands & Quality Gates

Always run checks before committing:

```bash
# Run full automated test suite (DOM structure, security, assets, subtitles)
bun test

# Run i18n translation coverage linter (enforces 100% parity across DE, EN, FR, NL, CZ)
bun run lint:i18n

# Start local development server
bun run dev
```

---

## CI/CD & Security (OpenSSF Scorecard)

- **CI/CD Workflow ([`.github/workflows/ci-cd.yml`](.github/workflows/ci-cd.yml))**:
  - Quality Gate: `bun test` + `bun run lint:i18n`.
  - Deployment: Automated FTPS upload to United Domains when secrets (`UNITED_DOMAINS_HOST`, `UNITED_DOMAINS_USER`, `UNITED_DOMAINS_PASSWORD`) are configured.
- **OpenSSF Scorecard ([`.github/workflows/scorecard.yml`](.github/workflows/scorecard.yml))**:
  - All actions pinned by immutable full commit SHAs.
  - Strict least-privilege token permissions (`permissions: read-all`).
  - Automated weekly security analysis + SARIF upload to GitHub Code Scanning.

---

## Governance & Documentation

- [`README.md`](README.md): User and deployer guide.
- [`DEPLOYMENT.md`](DEPLOYMENT.md): Detailed United Domains and DNS CNAME setup instructions.
- [`CONTRIBUTING.md`](CONTRIBUTING.md): FOSS contribution guidelines and Conventional Commits.
- [`SECURITY.md`](SECURITY.md): Vulnerability reporting policy.
- [`LICENSE`](LICENSE): MIT License for code + Copyright notice for artworks.
