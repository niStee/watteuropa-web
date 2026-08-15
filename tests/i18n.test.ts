import { describe, expect, test } from "bun:test";
import * as fs from "fs";
import * as path from "path";

const ROOT = path.resolve(__dirname, "..");
const indexPath = path.join(ROOT, "index.html");
const mainJsPath = path.join(ROOT, "main.js");

const REQUIRED_LANGUAGES = ["de", "en", "fr", "nl", "cz"] as const;

function extractTranslationsFromJs(jsContent: string) {
  // Extract UI_TRANSLATIONS object using VM/eval in safe isolation
  const match = jsContent.match(/const UI_TRANSLATIONS = (\{[\s\S]*?\n\};\n)/);
  if (!match) {
    throw new Error("Could not find UI_TRANSLATIONS object in main.js");
  }
  const cleanObjStr = match[1].replace(/;\s*$/, "");
  const fn = new Function(`return ${cleanObjStr};`);
  return fn();
}

function extractTranscriptsFromJs(jsContent: string) {
  const match = jsContent.match(/const TRANSCRIPTS = (\{[\s\S]*?\n\};\n)/);
  if (!match) {
    throw new Error("Could not find TRANSCRIPTS object in main.js");
  }
  const cleanObjStr = match[1].replace(/;\s*$/, "");
  const fn = new Function(`return ${cleanObjStr};`);
  return fn();
}

function extractInletsDataFromJs(jsContent: string) {
  const match = jsContent.match(/const INLETS_DATA = (\{[\s\S]*?\n\};\n)/);
  if (!match) {
    throw new Error("Could not find INLETS_DATA object in main.js");
  }
  const cleanObjStr = match[1].replace(/;\s*$/, "");
  const fn = new Function(`return ${cleanObjStr};`);
  return fn();
}

function extractDataI18nKeysFromHtml(htmlContent: string): string[] {
  const regex = /data-i18n=["']([^"']+)["']/g;
  const keys = new Set<string>();
  let match;
  while ((match = regex.exec(htmlContent)) !== null) {
    keys.add(match[1]);
  }
  return Array.from(keys);
}

describe("i18n Translation Coverage Linter", () => {
  const html = fs.readFileSync(indexPath, "utf-8");
  const js = fs.readFileSync(mainJsPath, "utf-8");

  const translations = extractTranslationsFromJs(js);
  const transcripts = extractTranscriptsFromJs(js);
  const inletsData = extractInletsDataFromJs(js);
  const domI18nKeys = extractDataI18nKeysFromHtml(html);

  test("All 5 required languages exist in UI_TRANSLATIONS dictionary", () => {
    for (const lang of REQUIRED_LANGUAGES) {
      expect(translations[lang]).toBeDefined();
      expect(typeof translations[lang]).toBe("object");
    }
  });

  test("100% DOM Coverage: Every data-i18n key in index.html is translated in all 5 languages", () => {
    const missingPerLang: Record<string, string[]> = {};

    for (const lang of REQUIRED_LANGUAGES) {
      const dict = translations[lang] || {};
      const missingKeys: string[] = [];

      for (const key of domI18nKeys) {
        const val = dict[key];
        if (val === undefined || val === null || (typeof val === "string" && val.trim() === "")) {
          missingKeys.push(key);
        }
      }

      if (missingKeys.length > 0) {
        missingPerLang[lang] = missingKeys;
      }
    }

    expect(missingPerLang).toEqual({});
  });

  test("Dictionary Parity: All keys defined in German exist with non-empty translation in all languages", () => {
    const deKeys = Object.keys(translations.de || {});
    expect(deKeys.length).toBeGreaterThan(30);

    const asymmetries: Record<string, string[]> = {};

    for (const lang of REQUIRED_LANGUAGES) {
      if (lang === "de") continue;
      const dict = translations[lang] || {};
      const missing: string[] = [];

      for (const key of deKeys) {
        if (!dict[key] || dict[key].trim() === "") {
          missing.push(key);
        }
      }

      if (missing.length > 0) {
        asymmetries[lang] = missing;
      }
    }

    expect(asymmetries).toEqual({});
  });

  test("Transcripts Completeness: All 5 languages have speech transcripts with valid timecodes", () => {
    for (const lang of REQUIRED_LANGUAGES) {
      const cues = transcripts[lang];
      expect(Array.isArray(cues)).toBe(true);
      expect(cues.length).toBeGreaterThanOrEqual(8);

      for (const cue of cues) {
        expect(cue.time).toMatch(/^\d{2}:\d{2}$/);
        expect(cue.text.trim().length).toBeGreaterThan(5);
      }
    }
  });

  test("Exponat Inlets Metadata: All 5 languages have complete download & modal data", () => {
    for (const lang of REQUIRED_LANGUAGES) {
      const data = inletsData[lang];
      expect(data).toBeDefined();
      expect(data.title.trim().length).toBeGreaterThan(0);
      expect(data.exponat).toMatch(/201\s+(DE|EN|FR|NL|CZ)\s+\d/);
      expect(data.img).toMatch(/^assets\/inlets\/inlet-/);
      expect(data.pdf).toMatch(/^assets\/pdf\/201\s+/);
      expect(data.desc.trim().length).toBeGreaterThan(10);
    }
  });
});
