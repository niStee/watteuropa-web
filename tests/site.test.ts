import { describe, expect, test } from "bun:test";
import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const indexPath = path.join(ROOT, "index.html");
const stylePath = path.join(ROOT, "style.css");
const mainJsPath = path.join(ROOT, "main.js");
const readmePath = path.join(ROOT, "README.md");

describe("watteuropa.org - NFT 2026 Landing Page Test Suite", () => {
  test("Core deliverables exist", () => {
    expect(fs.existsSync(indexPath)).toBe(true);
    expect(fs.existsSync(stylePath)).toBe(true);
    expect(fs.existsSync(mainJsPath)).toBe(true);
    expect(fs.existsSync(readmePath)).toBe(true);
  });

  test("HTML semantic structure, accessibility & SEO metadata", () => {
    const html = fs.readFileSync(indexPath, "utf-8");

    // Semantic elements
    expect(html).toContain("<!DOCTYPE html>");
    expect(html).toContain('<html lang="de"');
    expect(html).toContain("<meta charset=\"UTF-8\">");
    expect(html).toContain('name="viewport"');
    expect(html).toContain("<title>");
    expect(html).toContain('name="description"');
    expect(html).toContain('name="theme-color"');
    expect(html).toContain('property="og:title"');
    expect(html).toContain('property="og:image"');

    // Accessibility attributes
    expect(html).toContain('aria-label="Hauptnavigation"');
    expect(html).toContain('role="tablist"');
    expect(html).toContain('role="dialog"');
    expect(html).toContain('aria-modal="true"');

    // Branding & Title
    expect(html).toContain("NATIONALFREIE TAGE 2026");
    expect(html).toContain("WATT");
  });

  test("Required content sections exist", () => {
    const html = fs.readFileSync(indexPath, "utf-8");

    // 1. Hero / Header
    expect(html).toContain('id="hero"');
    expect(html).toContain("Europäischer Gruß");
    expect(html).toContain("Runter mit den nationalen Eitelkeiten und Respekt, Respekt, Respekt vor dir!");

    // 2. Inlets in 5 Languages
    expect(html).toContain('id="inlets"');
    expect(html).toContain("inlet-de");
    expect(html).toContain("inlet-en");
    expect(html).toContain("inlet-fr");
    expect(html).toContain("inlet-nl");
    expect(html).toContain("inlet-cz");

    // 3. Video showcase with 4 official YouTube embeds & interactive transcript
    expect(html).toContain('id="videos"');
    expect(html).toContain("youtube-nocookie.com/embed/A7CWUPn2YEY"); // Day 3 Demo Wegberg
    expect(html).toContain("youtube-nocookie.com/embed/bjQgVwqIg44"); // Day 1
    expect(html).toContain("youtube-nocookie.com/embed/dTHp3CdKcmM"); // Day 2
    expect(html).toContain("youtube-nocookie.com/embed/wrHgyR6Z_-I"); // TV Version

    // Interactive speech transcript
    expect(html).toContain('id="transcriptLines"');

    // 4. About WATT & Josef Tieber
    expect(html).toContain('id="about"');
    expect(html).toContain("Hohe Europäische Rösser");
    expect(html).toContain("Political Evolution");
    expect(html).toContain("Schengen²");

    // 5. Community Participation & Outlook 2027 Prague
    expect(html).toContain('id="mitmachen"');
    expect(html).toContain("Prag 2027");
    expect(html).toContain("Dny Bez Národnosti");

    // 6. Impressum & Contact (DDG & DSGVO Compliance)
    expect(html).toContain('id="impressum"');
    expect(html).toContain("Josef Tieber");
    expect(html).toContain("Jakob-Hoogen-Str. 68");
    expect(html).toContain("41844 Wegberg");
    expect(html).toContain("info@club-der-bunten.de");
    expect(html).toContain("DE 240 640 602");
    expect(html).toContain("§ 5 DDG");
    expect(html).toContain('id="legalModal"');
    expect(html).toContain('id="legalContentImpressum"');
    expect(html).toContain('id="legalContentDatenschutz"');
  });

  test("Asset verification on disk & valid sizes", () => {
    const requiredAssets = [
      "assets/img/watt-logo.png",
      "assets/inlets/inlet-de.jpg",
      "assets/inlets/inlet-en.jpg",
      "assets/inlets/inlet-fr.jpg",
      "assets/inlets/inlet-nl.jpg",
      "assets/inlets/inlet-cz.jpg",
      "assets/pdf/201 DE 3.pdf",
      "assets/pdf/201 EN 3.pdf",
      "assets/pdf/201 FR 3.pdf",
      "assets/pdf/201 NL 3.pdf",
      "assets/pdf/201 CZ 4.pdf",
      "assets/subtitles/subtitles_de.vtt",
      "assets/subtitles/subtitles_en.vtt",
      "assets/subtitles/subtitles_fr.vtt",
      "assets/subtitles/subtitles_nl.vtt",
      "assets/subtitles/subtitles_cz.vtt",
    ];

    for (const asset of requiredAssets) {
      const fullPath = path.join(ROOT, asset);
      expect(fs.existsSync(fullPath)).toBe(true);
      const stat = fs.statSync(fullPath);
      expect(stat.size).toBeGreaterThan(50); // Ensure not empty
    }
  });

  test("WebVTT subtitle files contain valid syntax and timing", () => {
    const langs = ["de", "en", "fr", "nl", "cz"];
    for (const lang of langs) {
      const vttPath = path.join(ROOT, `assets/subtitles/subtitles_${lang}.vtt`);
      expect(fs.existsSync(vttPath)).toBe(true);
      const content = fs.readFileSync(vttPath, "utf-8");
      expect(content.startsWith("WEBVTT")).toBe(true);
      expect(content).toContain("-->");
    }
  });

  test("CSS Design System & Brand tokens", () => {
    const css = fs.readFileSync(stylePath, "utf-8");

    // Purple brand tokens
    expect(css).toContain("#502379");
    expect(css).toContain("--color-primary");

    // Responsive design rules
    expect(css).toContain("@media (max-width: 992px)");
    expect(css).toContain("@media (max-width: 768px)");
    expect(css).toContain("display: grid");
    expect(css).toContain("display: flex");
  });

  test("JavaScript functionality & interactive modules", () => {
    const js = fs.readFileSync(mainJsPath, "utf-8");

    // Modal / Lightbox for inlets
    expect(js).toContain("openInletModal");
    expect(js).toContain("closeInletModal");
    // Video switcher
    expect(js).toContain("switchVideoTab");
    // Language switcher / translations
    expect(js).toContain("switchLanguage");
    expect(js).toContain("switchSubtitle");

    // All 5 languages mapped in data dictionaries
    expect(js).toContain("de:");
    expect(js).toContain("en:");
    expect(js).toContain("fr:");
    expect(js).toContain("nl:");
    expect(js).toContain("cz:");

    // Verify key section translations exist in dictionary
    expect(js).toContain("her2aTitle");
    expect(js).toContain("whyTitle");
    expect(js).toContain("polyTitle");
    expect(js).toContain("schengenTitle");
    expect(js).toContain("partTitle");
    expect(js).toContain("pragueTitle");
    expect(js).toContain("footerTagline");
  });

  test("Security: No hardcoded secrets, passwords or credentials", () => {
    const allFiles = [indexPath, stylePath, mainJsPath, readmePath];
    const sensitivePatterns = [
      /password\s*[:=]\s*['"][a-zA-Z0-9_\-!@#$%^&*]{4,}['"]/i,
      /api[_-]?key\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i,
      /secret\s*[:=]\s*['"][a-zA-Z0-9_\-]{8,}['"]/i,
      /auth[_-]?token\s*[:=]\s*['"][a-zA-Z0-9_\-]{16,}['"]/i,
      /UNITED_DOMAINS_PASSWORD\s*[:=]\s*['"][^'"]+['"]/i,
    ];

    for (const file of allFiles) {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, "utf-8");
        for (const pattern of sensitivePatterns) {
          expect(pattern.test(content)).toBe(false);
        }
      }
    }
  });
});
