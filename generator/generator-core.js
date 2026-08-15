/**
 * WATT Slogan / Inlet Generator - Core Logic Module
 * Provides pure functional generator methods for SVG generation,
 * multilingual presets, print sheet layout, and standalone zip packaging.
 */

// WATT European Art Color Themes
export const COLOR_THEMES = {
  purpleOnWhite: {
    id: 'purpleOnWhite',
    name: 'Deep Violet on White',
    bg: '#ffffff',
    primary: '#502379',
    secondary: '#562881',
    accent: '#ffcc00', // Gold
    border: '#502379',
    cutLine: '#b5a4cf',
    textMain: '#502379',
    textSub: '#562881',
    badgeTag: '#502379'
  },
  whiteOnPurple: {
    id: 'whiteOnPurple',
    name: 'White on Deep Violet',
    bg: '#502379',
    primary: '#ffffff',
    secondary: '#f3e8ff',
    accent: '#ffcc00', // Gold
    border: '#ffffff',
    cutLine: '#9475bd',
    textMain: '#ffffff',
    textSub: '#f3e8ff',
    badgeTag: '#ffcc00'
  },
  darkInverted: {
    id: 'darkInverted',
    name: 'Midnight Slate & Violet',
    bg: '#181424',
    primary: '#ffffff',
    secondary: '#c8b6e2',
    accent: '#ffd700',
    border: '#8254b2',
    cutLine: '#4e416d',
    textMain: '#ffffff',
    textSub: '#c8b6e2',
    badgeTag: '#ffd700'
  },
  euGoldBlue: {
    id: 'euGoldBlue',
    name: 'European Union Gold & Blue',
    bg: '#003399',
    primary: '#ffcc00',
    secondary: '#ffffff',
    accent: '#ffcc00',
    border: '#ffcc00',
    cutLine: '#3366cc',
    textMain: '#ffffff',
    textSub: '#ffcc00',
    badgeTag: '#ffcc00'
  },
  monochrome: {
    id: 'monochrome',
    name: 'Monochrome Print / High Contrast',
    bg: '#ffffff',
    primary: '#111111',
    secondary: '#333333',
    accent: '#111111',
    border: '#111111',
    cutLine: '#888888',
    textMain: '#111111',
    textSub: '#333333',
    badgeTag: '#111111'
  },
  custom: {
    id: 'custom',
    name: 'Custom Palette',
    bg: '#ffffff',
    primary: '#502379',
    secondary: '#562881',
    accent: '#ffcc00',
    border: '#502379',
    cutLine: '#b5a4cf',
    textMain: '#502379',
    textSub: '#562881',
    badgeTag: '#502379'
  }
};

// Multilingual Slogan Presets from NFT 2026 / WATT Art / Exponat Archives
export const PRESETS = [
  {
    id: 'nft2026_days',
    name: 'NFT 2026 - 3. National Free Days (Side A)',
    languages: {
      DE: {
        topArc: '3. NATIONAL FREIEN TAGE',
        sloganLines: ['1. bis 3. JUNI', '2026'],
        subtext: 'EUROPAWEIT • WELTWEIT',
        catalog: 'Watt European Exponat 201 DE 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: '3.'
      },
      EN: {
        topArc: '3. NATIONAL FREE DAYS',
        sloganLines: ['1. - 3. JUNE', '2026'],
        subtext: 'EUROPE-WIDE • WORLDWIDE',
        catalog: 'Watt European Exponat 201 EN 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: '3.'
      },
      FR: {
        topArc: '3e FÊTE NATIONALE LIBRE',
        sloganLines: ['1. - 3. JUIN', '2026'],
        subtext: "DANS TOUTE L'EUROPE • DANS LE MONDE ENTIER",
        catalog: 'Watt European Exponat 201 FR 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: '3e'
      },
      NL: {
        topArc: '3e DAGEN VAN NATIONAALVRIJ DENKEN',
        sloganLines: ['1. - 3. JUNI', '2026'],
        subtext: 'EUROPA-BREED • WERELDWIJD',
        catalog: 'Watt European Exponat 201 NL 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: '3e'
      },
      CZ: {
        topArc: '3. DNY BEZ NÁRODNOSTÍ',
        sloganLines: ['1. - 4. ČERVNA', '2027'],
        subtext: 'CELOEVROPSKY • CELOSVĚTOVĚ',
        catalog: 'Watt European Exponat 201 CZ 4',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: '3.'
      }
    }
  },
  {
    id: 'nft2026_campaign',
    name: 'NFT 2026 - Europaweit / Weltweit (Side B)',
    languages: {
      DE: {
        topArc: 'NATIONAL FREIE TAGE 2026',
        sloganLines: ['2026', 'EUROPAWEIT', 'WELTWEIT'],
        subtext: 'GEMEINSCHAFT ERLEBEN',
        catalog: 'Watt European Exponat 201 DE 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      EN: {
        topArc: 'NATIONAL FREE DAYS 2026',
        sloganLines: ['2026', 'EUROPE-WIDE', 'WORLDWIDE'],
        subtext: 'EXPERIENCE COMMUNITY',
        catalog: 'Watt European Exponat 201 EN 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      FR: {
        topArc: 'JOURNÉES SANS FRONTIÈRES 2026',
        sloganLines: ['2026', "DANS TOUTE L'EUROPE", 'DANS LE MONDE'],
        subtext: 'EXPÉRIENCE COMMUNE',
        catalog: 'Watt European Exponat 201 FR 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      NL: {
        topArc: 'NATIONAALVRIJE DAGEN 2026',
        sloganLines: ['2026', 'EUROPA-BREED', 'WERELDWIJD'],
        subtext: 'GEMEENSCHAP ERVAREN',
        catalog: 'Watt European Exponat 201 NL 3',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      CZ: {
        topArc: 'DNY BEZ NÁRODNOSTÍ 2027',
        sloganLines: ['2027', 'CELOEVROPSKY', 'CELOSVĚTOVĚ'],
        subtext: 'SPOLEČNÝ PROŽITEK',
        catalog: 'Watt European Exponat 201 CZ 4',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      }
    }
  },
  {
    id: 'schengen2',
    name: 'Exponat 105 - Schengen²',
    languages: {
      DE: {
        topArc: 'SCHENGEN ²',
        sloganLines: ['EIN', 'EINZIGER', 'EU', 'GRENZSCHUTZ'],
        subtext: 'FREIHEIT NACH INNEN • SCHUTZ NACH AUSSEN',
        catalog: 'Watt European Exponat | 105 DE np',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      EN: {
        topArc: 'SCHENGEN ²',
        sloganLines: ['A SINGLE', 'EU', 'BORDER', 'PROTECTION'],
        subtext: 'FREEDOM WITHIN • SECURITY TOGETHER',
        catalog: 'Watt European Exponat | 105 EN np',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      FR: {
        topArc: 'SCHENGEN ²',
        sloganLines: ['UNE SEULE', 'PROTECTION DES', 'FRONTIÈRES', 'DE L’UE'],
        subtext: 'LIBERTÉ INTÉRIEURE • PROTECTION COMMUNE',
        catalog: 'Watt European Exponat | 105 FR np',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      NL: {
        topArc: 'SCHENGEN ²',
        sloganLines: ['ÉÉN ENKELE', 'EU', 'GRENS', 'BEWAKING'],
        subtext: 'INTERNE VRIJHEID • GEZAMENLIJKE BESCHERMING',
        catalog: 'Watt European Exponat | 105 NL np',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      CZ: {
        topArc: 'SCHENGEN ²',
        sloganLines: ['JEDNOTNÁ', 'OCHRANA', 'HRANIC', 'EVROPSKÉ UNIE'],
        subtext: 'VNITŘNÍ SVOBODA • SPOLEČNÁ OCHRANA',
        catalog: 'Watt European Exponat | 105 CZ np',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      }
    }
  },
  {
    id: 'community',
    name: 'Exponat 202 - Gemeinschaft statt Abschottung',
    languages: {
      DE: {
        topArc: 'GEMEINSCHAFT STATT ABSCHOTTUNG',
        sloganLines: ['FÜR EIN', 'VEREINTES', 'EUROPA'],
        subtext: 'SOLIDARITÄT & ZUSAMMENHALT',
        catalog: 'Watt European Exponat 202 DE',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      EN: {
        topArc: 'COMMUNITY OVER ISOLATION',
        sloganLines: ['FOR A', 'UNITED', 'EUROPE'],
        subtext: 'SOLIDARITY & TOGETHERNESS',
        catalog: 'Watt European Exponat 202 EN',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      FR: {
        topArc: 'COMMUNAUTÉ AU LIEU DU REPLI',
        sloganLines: ['POUR UNE', 'EUROPE', 'UNIE'],
        subtext: 'SOLIDARITÉ & COHÉSION',
        catalog: 'Watt European Exponat 202 FR',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      NL: {
        topArc: 'GEMEENSCHAP IN PLAATS VAN AFZONDERING',
        sloganLines: ['VOOR EEN', 'VERENIGD', 'EUROPA'],
        subtext: 'SOLIDARITEIT & EENDRACHT',
        catalog: 'Watt European Exponat 202 NL',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      CZ: {
        topArc: 'SPOLEČENSTVÍ MÍSTO IZOLACE',
        sloganLines: ['PRO', 'SJEDNOCENOU', 'EVROPU'],
        subtext: 'SOLIDARITA A SOUDRŽNOST',
        catalog: 'Watt European Exponat 202 CZ',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      }
    }
  },
  {
    id: 'freedom',
    name: 'Exponat 203 - Freiheit, Vielfalt, Europa',
    languages: {
      DE: {
        topArc: 'FREIHEIT • VIELFALT • EUROPA',
        sloganLines: ['ZUKUNFT', 'GEMEINSAM', 'GESTALTEN'],
        subtext: 'DEMOKRATIE VERBINDET UNS',
        catalog: 'Watt European Exponat 203 DE',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      EN: {
        topArc: 'FREEDOM • DIVERSITY • EUROPE',
        sloganLines: ['SHAPING', 'THE FUTURE', 'TOGETHER'],
        subtext: 'DEMOCRACY UNITES US',
        catalog: 'Watt European Exponat 203 EN',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      FR: {
        topArc: 'LIBERTÉ • DIVERSITÉ • EUROPE',
        sloganLines: ['CONSTRUIRE', 'L’AVENIR', 'ENSEMBLE'],
        subtext: 'LA DÉMOCRATIE NOUS UNIT',
        catalog: 'Watt European Exponat 203 FR',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      NL: {
        topArc: 'VRIJHEID • DIVERSITEIT • EUROPA',
        sloganLines: ['SAMEN', 'BOUWEN AAN', 'DE TOEKOMST'],
        subtext: 'DEMOCRATIE VERBINDT ONS',
        catalog: 'Watt European Exponat 203 NL',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      },
      CZ: {
        topArc: 'SVOBODA • ROZMANITOST • EVROPA',
        sloganLines: ['SPOLEČNĚ', 'TVOŘIT', 'BUDOUCNOST'],
        subtext: 'DEMOKRACIE NÁS SPOJUJE',
        catalog: 'Watt European Exponat 203 CZ',
        bottomArc: 'www.watteuropa.org',
        centerNumber: ''
      }
    }
  },
  {
    id: 'horses',
    name: 'Exponat 204 - Hohe Europäische Rösser',
    languages: {
      DE: {
        topArc: 'HOHE EUROPÄISCHE RÖSSER',
        sloganLines: ['RUNTERKOMMEN', 'AUF', 'AUGENHÖHE'],
        subtext: '28 NATIONEN • EINE GEMEINSCHAFT',
        catalog: 'Watt European Exponat 204 DE',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      EN: {
        topArc: 'HIGH EUROPEAN HORSES',
        sloganLines: ['COMING DOWN', 'TO EYE', 'LEVEL'],
        subtext: '28 NATIONS • ONE COMMUNITY',
        catalog: 'Watt European Exponat 204 EN',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      FR: {
        topArc: 'LES GRANDS CHEVAUX D’EUROPE',
        sloganLines: ['REDESCENDRE', 'À HAUTEUR', 'D’HOMME'],
        subtext: '28 NATIONS • UNE COMMUNAUTÉ',
        catalog: 'Watt European Exponat 204 FR',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      NL: {
        topArc: 'HOGE EUROPESE PAARDEN',
        sloganLines: ['AFDALEN', 'NAAR', 'OOGHOOGTE'],
        subtext: '28 NATIES • ÉÉN GEMEENSCHAP',
        catalog: 'Watt European Exponat 204 NL',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      },
      CZ: {
        topArc: 'VYSOKÉ EVROPSKÉ KONĚ',
        sloganLines: ['SESTOUPIT', 'NA ÚROVEŇ', 'OČÍ'],
        subtext: '28 NÁRODŮ • JEDNO SPOLEČENSTVÍ',
        catalog: 'Watt European Exponat 204 CZ',
        bottomArc: 'WATT ART • FUTURE FOR EUROPE',
        centerNumber: ''
      }
    }
  }
];

// Default generator configuration
export const DEFAULT_CONFIG = {
  diameterMm: 95, // standard badge / inlet diameter in mm
  topArc: '3. NATIONAL FREIEN TAGE',
  slogan: '1. bis 3. JUNI\n2026',
  subtext: 'EUROPAWEIT • WELTWEIT',
  catalog: 'Watt European Exponat 201 DE 3',
  bottomArc: 'WATT ART • FUTURE FOR EUROPE',
  centerNumber: '3.',
  language: 'DE',
  theme: 'purpleOnWhite',
  fontFamily: 'Montserrat',
  // Typography sizes (relative to 1000px coordinate system)
  topArcFontSize: 38,
  topArcLetterSpacing: 4,
  sloganFontSize: 58,
  sloganLineHeight: 1.15,
  sloganFontWeight: '800',
  subtextFontSize: 24,
  catalogFontSize: 20,
  bottomArcFontSize: 28,
  bottomArcLetterSpacing: 4,
  centerNumberFontSize: 72,
  uppercase: true,
  // Graphic elements
  showCutLine: true,
  cutLineMarginMm: 3,
  borderWidth: 8,
  showStarRing: true,
  starCount: 12,
  starSize: 14,
  starPosition: 'top', // 'top', 'bottom', 'full', 'sides', 'none'
  starColor: '#ffcc00',
  innerRing: true,
  showWattEmblem: true,
  emblemStyle: 'monogram', // 'monogram', 'stars', 'circle', 'none'
  customColors: {
    bg: '#ffffff',
    primary: '#502379',
    secondary: '#562881',
    accent: '#ffcc00',
    border: '#502379',
    cutLine: '#b5a4cf',
    textMain: '#502379',
    textSub: '#562881',
    badgeTag: '#502379'
  }
};

/**
 * Generates an SVG 5-pointed star path centered at (cx, cy)
 */
export function generateStarPath(cx, cy, rOuter, rInner) {
  let path = '';
  const points = 5;
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 === 0 ? rOuter : rInner;
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    path += (i === 0 ? 'M ' : ' L ') + x.toFixed(2) + ' ' + y.toFixed(2);
  }
  path += ' Z';
  return path;
}

/**
 * Generates arc path coordinates for SVG textPath.
 * In a standard SVG 1000x1000 coordinate space with center at (500, 500):
 * - Top arc goes clockwise from left to right along top hemisphere
 * - Bottom arc goes clockwise from right to left along bottom hemisphere so text reads upright
 */
export function generateArcPath(type, radius = 380, center = 500) {
  if (type === 'top') {
    const xStart = center - radius;
    const yStart = center;
    const xEnd = center + radius;
    const yEnd = center;
    return `M ${xStart.toFixed(1)} ${yStart.toFixed(1)} A ${radius.toFixed(1)} ${radius.toFixed(1)} 0 0 1 ${xEnd.toFixed(1)} ${yEnd.toFixed(1)}`;
  } else {
    const xStart = center - radius;
    const yStart = center;
    const xEnd = center + radius;
    const yEnd = center;
    return `M ${xStart.toFixed(1)} ${yStart.toFixed(1)} A ${radius.toFixed(1)} ${radius.toFixed(1)} 0 0 0 ${xEnd.toFixed(1)} ${yEnd.toFixed(1)}`;
  }
}

/**
 * Resolves color palette based on config
 */
export function resolveColors(config) {
  const themeKey = config.theme || 'purpleOnWhite';
  if (themeKey === 'custom' && config.customColors) {
    return { ...COLOR_THEMES.custom, ...config.customColors };
  }
  return COLOR_THEMES[themeKey] || COLOR_THEMES.purpleOnWhite;
}

/**
 * Escapes XML strings for safe SVG generation
 */
export function escapeXml(unsafe) {
  if (unsafe === undefined || unsafe === null) return '';
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Core SVG Generator: Produces high-resolution, standalone SVG string for circular badge / inlet.
 * Dimension: 1000x1000 viewport with high-precision vector elements.
 */
export function generateBadgeSvg(userConfig = {}) {
  const cfg = { ...DEFAULT_CONFIG, ...userConfig };
  const colors = resolveColors(cfg);
  const width = 1000;
  const height = 1000;
  const cx = 500;
  const cy = 500;

  // Geometry
  const outerBadgeRadius = 450;
  const innerRingRadius = 430;
  const cutLineRadius = 475;
  const topArcRadius = 380;
  const bottomArcRadius = 385;
  const starRadius = 405;

  const topText = cfg.uppercase ? (cfg.topArc || '').toUpperCase() : (cfg.topArc || '');
  const bottomText = cfg.uppercase ? (cfg.bottomArc || '').toUpperCase() : (cfg.bottomArc || '');
  const subtextText = cfg.uppercase ? (cfg.subtext || '').toUpperCase() : (cfg.subtext || '');
  const catalogText = cfg.catalog || '';

  // Process multi-line center slogan
  const rawSlogan = cfg.slogan || '';
  const rawLines = typeof rawSlogan === 'string' ? rawSlogan.split('\n') : (Array.isArray(rawSlogan) ? rawSlogan : []);
  const sloganLines = rawLines.map(l => (cfg.uppercase ? l.toUpperCase() : l).trim()).filter(Boolean);

  // Top Arc Path and Bottom Arc Path definitions
  const topArcPathD = generateArcPath('top', topArcRadius, cx);
  const bottomArcPathD = generateArcPath('bottom', bottomArcRadius, cx);

  // Generate Star Elements
  let starsSvg = '';
  if (cfg.showStarRing) {
    const starCount = cfg.starCount || 12;
    const starColor = cfg.starColor || colors.accent;
    const rOut = cfg.starSize || 14;
    const rIn = rOut * 0.42;

    if (cfg.starPosition === 'full') {
      for (let i = 0; i < starCount; i++) {
        const angle = (i * 2 * Math.PI) / starCount - Math.PI / 2;
        const sx = cx + starRadius * Math.cos(angle);
        const sy = cy + starRadius * Math.sin(angle);
        starsSvg += `  <path d="${generateStarPath(sx, sy, rOut, rIn)}" fill="${starColor}" />\n`;
      }
    } else if (cfg.starPosition === 'top') {
      const count = Math.min(starCount, 7);
      const spanAngle = Math.PI * 0.45;
      const startAngle = -Math.PI / 2 - spanAngle / 2;
      for (let i = 0; i < count; i++) {
        const angle = startAngle + (i / (count - 1 || 1)) * spanAngle;
        const sx = cx + (innerRingRadius - 16) * Math.cos(angle);
        const sy = cy + (innerRingRadius - 16) * Math.sin(angle);
        starsSvg += `  <path d="${generateStarPath(sx, sy, rOut, rIn)}" fill="${starColor}" />\n`;
      }
    } else if (cfg.starPosition === 'sides') {
      const angles = [Math.PI, 0];
      angles.forEach(ang => {
        const sx = cx + (topArcRadius + 10) * Math.cos(ang);
        const sy = cy + (topArcRadius + 10) * Math.sin(ang);
        starsSvg += `  <path d="${generateStarPath(sx, sy, rOut * 1.2, rIn * 1.2)}" fill="${starColor}" />\n`;
      });
    }
  }

  // Calculate Center Text Layout
  let centerTextSvg = '';
  const hasCenterNumber = Boolean(cfg.centerNumber && cfg.centerNumber.trim());
  const centerFontSize = cfg.sloganFontSize || 58;
  const lineHeightPx = centerFontSize * (cfg.sloganLineHeight || 1.15);
  const totalSloganHeight = sloganLines.length * lineHeightPx;
  
  let currentY = cy - (totalSloganHeight / 2) + (centerFontSize * 0.35);
  if (hasCenterNumber) {
    currentY += 15;
  }
  if (subtextText) {
    currentY -= 15;
  }
  if (catalogText) {
    currentY -= 12;
  }

  // Center Number (e.g. "3.")
  if (hasCenterNumber) {
    const numY = currentY - (centerFontSize * 0.9) - 10;
    centerTextSvg += `  <text x="${cx}" y="${numY.toFixed(1)}" font-family="${escapeXml(cfg.fontFamily)}, sans-serif" font-size="${cfg.centerNumberFontSize || 72}" font-weight="900" fill="${colors.accent}" text-anchor="middle" letter-spacing="2">${escapeXml(cfg.centerNumber)}</text>\n`;
  }

  // Main Slogan lines
  sloganLines.forEach((line, index) => {
    const yPos = currentY + (index * lineHeightPx);
    centerTextSvg += `  <text x="${cx}" y="${yPos.toFixed(1)}" font-family="${escapeXml(cfg.fontFamily)}, sans-serif" font-size="${centerFontSize}" font-weight="${escapeXml(cfg.sloganFontWeight || '800')}" fill="${colors.textMain}" text-anchor="middle" letter-spacing="1.5">${escapeXml(line)}</text>\n`;
  });

  // Subtext / Dates (below slogan)
  let subtextY = currentY + (sloganLines.length * lineHeightPx) + 14;
  if (subtextText) {
    centerTextSvg += `  <text x="${cx}" y="${subtextY.toFixed(1)}" font-family="${escapeXml(cfg.fontFamily)}, sans-serif" font-size="${cfg.subtextFontSize || 24}" font-weight="600" fill="${colors.textSub}" text-anchor="middle" letter-spacing="2">${escapeXml(subtextText)}</text>\n`;
    subtextY += 28;
  }

  // Catalog / Exponat tag
  if (catalogText) {
    const catalogY = subtextY + 14;
    centerTextSvg += `  <line x1="${cx - 140}" y1="${catalogY - 14}" x2="${cx + 140}" y2="${catalogY - 14}" stroke="${colors.secondary}" stroke-width="1.5" stroke-opacity="0.5" />\n`;
    centerTextSvg += `  <text x="${cx}" y="${catalogY.toFixed(1)}" font-family="${escapeXml(cfg.fontFamily)}, sans-serif" font-size="${cfg.catalogFontSize || 20}" font-weight="500" fill="${colors.badgeTag}" text-anchor="middle" letter-spacing="1.2">${escapeXml(catalogText)}</text>\n`;
  }

  // WATT Monogram / Emblem in center or top divider
  let emblemSvg = '';
  if (cfg.showWattEmblem) {
    const emblemY = cy - 255;
    emblemSvg = `
  <!-- WATT European Art Emblem / Crest -->
  <g transform="translate(${cx}, ${emblemY}) scale(0.85)">
    <circle cx="0" cy="0" r="28" fill="${colors.primary}" stroke="${colors.accent}" stroke-width="2.5" />
    <text x="0" y="7" font-family="${escapeXml(cfg.fontFamily)}, sans-serif" font-size="16" font-weight="900" fill="${colors.bg === '#ffffff' ? '#ffffff' : colors.accent}" text-anchor="middle" letter-spacing="1">WATT</text>
  </g>\n`;
  }

  // Cut-line guide (dotted outer circle for print cutting)
  let cutLineSvg = '';
  if (cfg.showCutLine) {
    cutLineSvg = `
  <!-- Print Cut Guide (Dotted) -->
  <circle cx="${cx}" cy="${cy}" r="${cutLineRadius}" fill="none" stroke="${colors.cutLine}" stroke-width="1.8" stroke-dasharray="8 6" opacity="0.85" />
  <!-- Crop crosshairs -->
  <line x1="${cx - 490}" y1="${cy}" x2="${cx - 460}" y2="${cy}" stroke="${colors.cutLine}" stroke-width="1" />
  <line x1="${cx + 460}" y1="${cy}" x2="${cx + 490}" y2="${cy}" stroke="${colors.cutLine}" stroke-width="1" />
  <line x1="${cx}" y1="${cy - 490}" x2="${cx}" y2="${cy - 460}" stroke="${colors.cutLine}" stroke-width="1" />
  <line x1="${cx}" y1="${cy + 460}" x2="${cx}" y2="${cy + 490}" stroke="${colors.cutLine}" stroke-width="1" />\n`;
  }

  // Inner ring decoration
  let innerRingSvg = '';
  if (cfg.innerRing) {
    innerRingSvg = `
  <!-- Inner Decorative Rings -->
  <circle cx="${cx}" cy="${cy}" r="${innerRingRadius}" fill="none" stroke="${colors.secondary}" stroke-width="2.5" stroke-opacity="0.4" />
  <circle cx="${cx}" cy="${cy}" r="${innerRingRadius - 80}" fill="none" stroke="${colors.border}" stroke-width="1.5" stroke-opacity="0.3" />\n`;
  }

  // Assemble full standalone SVG
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <!-- Arc Paths for Circular Typography -->
    <path id="topArcPath" d="${topArcPathD}" fill="none" />
    <path id="bottomArcPath" d="${bottomArcPathD}" fill="none" />
    <!-- Filter for subtle drop shadow -->
    <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="8" flood-color="#000000" flood-opacity="0.15"/>
    </filter>
  </defs>

  <!-- Background Layer -->
  <rect width="${width}" height="${height}" fill="transparent" />

  ${cutLineSvg}

  <!-- Main Badge Circle -->
  <circle cx="${cx}" cy="${cy}" r="${outerBadgeRadius}" fill="${colors.bg}" stroke="${colors.border}" stroke-width="${cfg.borderWidth || 8}" />

  ${innerRingSvg}
  ${starsSvg}
  ${emblemSvg}

  <!-- Top Arc Text (Title / Event / Theme) -->
  <text font-family="${escapeXml(cfg.fontFamily)}, sans-serif" font-size="${cfg.topArcFontSize || 38}" font-weight="800" fill="${colors.textMain}" letter-spacing="${cfg.topArcLetterSpacing || 4}">
    <textPath href="#topArcPath" startOffset="50%" text-anchor="middle">
      ${escapeXml(topText)}
    </textPath>
  </text>

  <!-- Center Slogan & Information Block -->
  <g id="centerTextBlock">
${centerTextSvg}  </g>

  <!-- Bottom Arc Text (URL / Subtext) -->
  <text font-family="${escapeXml(cfg.fontFamily)}, sans-serif" font-size="${cfg.bottomArcFontSize || 28}" font-weight="700" fill="${colors.textSub}" letter-spacing="${cfg.bottomArcLetterSpacing || 4}">
    <textPath href="#bottomArcPath" startOffset="50%" text-anchor="middle">
      ${escapeXml(bottomText)}
    </textPath>
  </text>
</svg>`;

  return svg;
}

/**
 * Generates an A4 Print Sheet SVG with a grid of badges (e.g. 2, 4, or 6 per page).
 */
export function generatePrintSheetSvg(config = {}, sheetConfig = { layout: '2x2', pageSize: 'A4' }) {
  const badgeSvg = generateBadgeSvg(config);
  const svgContentMatch = badgeSvg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  const innerBadgeContent = svgContentMatch ? svgContentMatch[1] : '';

  const sheetWidth = 2100;
  const sheetHeight = 2970;

  let cols = 2;
  let rows = 2;
  let scale = 0.92;

  if (sheetConfig.layout === '1x2') {
    cols = 1;
    rows = 2;
    scale = 1.25;
  } else if (sheetConfig.layout === '2x3') {
    cols = 2;
    rows = 3;
    scale = 0.72;
  }

  const colWidth = sheetWidth / cols;
  const rowHeight = sheetHeight / rows;

  let badgesSvg = '';
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const posX = c * colWidth + colWidth / 2;
      const posY = r * rowHeight + rowHeight / 2;
      const badgeId = `badge_${r}_${c}`;

      badgesSvg += `
    <!-- Badge at Row ${r + 1}, Col ${c + 1} -->
    <g transform="translate(${posX - 500 * scale}, ${posY - 500 * scale}) scale(${scale})">
      ${innerBadgeContent.replace(/id="(topArcPath|bottomArcPath|badgeShadow)"/g, `id="$1_${badgeId}"`).replace(/href="#(topArcPath|bottomArcPath)"/g, `href="#$1_${badgeId}"`)}
    </g>
    <!-- Alignment / Cut Guide Marks for Sheet -->
    <circle cx="${posX}" cy="${posY}" r="${500 * scale + 20}" fill="none" stroke="#cccccc" stroke-width="1.5" stroke-dasharray="6 6" />
    <text x="${posX}" y="${posY + 500 * scale + 45}" font-family="sans-serif" font-size="22" font-weight="600" fill="#888888" text-anchor="middle">WATT Inlet • Ø ${(config.diameterMm || 95)}mm • ${config.language || 'DE'}</text>\n`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${sheetWidth} ${sheetHeight}" width="100%" height="100%">
  <!-- A4 Page White Background -->
  <rect width="${sheetWidth}" height="${sheetHeight}" fill="#ffffff" />

  <!-- Sheet Header / Metadata for Print Shop -->
  <g transform="translate(100, 100)">
    <text x="0" y="0" font-family="sans-serif" font-size="34" font-weight="bold" fill="#502379">WATT European Art • Slogan &amp; Inlet Print Sheet</text>
    <text x="0" y="32" font-family="sans-serif" font-size="22" fill="#666666">Exponat: ${escapeXml(config.catalog || 'NFT 2026')} | Language: ${config.language || 'DE'} | Format: A4 (300 DPI Ready)</text>
  </g>

  <!-- Sheet Border & Safe Margins -->
  <rect x="60" y="60" width="${sheetWidth - 120}" height="${sheetHeight - 120}" fill="none" stroke="#dddddd" stroke-width="2" stroke-dasharray="10 10" />

  ${badgesSvg}
</svg>`;
}

/**
 * Pure JavaScript ZIP archive generator (PKZIP 2.0 format)
 */
export function createZip(files = []) {
  const crcTable = new Uint32Array(256);
  for (let i = 0; i < 256; i++) {
    let c = i;
    for (let k = 0; k < 8; k++) {
      c = (c & 1) ? (0xEDB88320 ^ (c >>> 1)) : (c >>> 1);
    }
    crcTable[i] = c >>> 0;
  }

  function crc32(buffer) {
    let crc = 0xFFFFFFFF;
    for (let i = 0; i < buffer.length; i++) {
      crc = (crc >>> 8) ^ crcTable[(crc ^ buffer[i]) & 0xFF];
    }
    return (crc ^ 0xFFFFFFFF) >>> 0;
  }

  const localHeaders = [];
  const centralHeaders = [];
  let offset = 0;

  for (const file of files) {
    const nameBytes = new TextEncoder().encode(file.name);
    let dataBytes;
    if (typeof file.content === 'string') {
      dataBytes = new TextEncoder().encode(file.content);
    } else if (file.content instanceof Uint8Array) {
      dataBytes = file.content;
    } else if (file.content instanceof ArrayBuffer) {
      dataBytes = new Uint8Array(file.content);
    } else {
      dataBytes = new Uint8Array(0);
    }

    const uncompressedSize = dataBytes.length;
    const compressedSize = dataBytes.length;
    const checksum = crc32(dataBytes);

    // Local file header (30 bytes + filename + data)
    const localHeader = new Uint8Array(30 + nameBytes.length + dataBytes.length);
    const view = new DataView(localHeader.buffer);

    view.setUint32(0, 0x04034b50, true);
    view.setUint16(4, 20, true);
    view.setUint16(6, 0, true);
    view.setUint16(8, 0, true);
    view.setUint16(10, 0, true);
    view.setUint16(12, 0, true);
    view.setUint32(14, checksum, true);
    view.setUint32(18, compressedSize, true);
    view.setUint32(22, uncompressedSize, true);
    view.setUint16(26, nameBytes.length, true);
    view.setUint16(28, 0, true);

    localHeader.set(nameBytes, 30);
    localHeader.set(dataBytes, 30 + nameBytes.length);
    localHeaders.push(localHeader);

    // Central directory header (46 bytes + filename)
    const centralHeader = new Uint8Array(46 + nameBytes.length);
    const cView = new DataView(centralHeader.buffer);

    cView.setUint32(0, 0x02014b50, true);
    cView.setUint16(4, 20, true);
    cView.setUint16(6, 20, true);
    cView.setUint16(8, 0, true);
    cView.setUint16(10, 0, true);
    cView.setUint16(12, 0, true);
    cView.setUint16(14, 0, true);
    cView.setUint32(16, checksum, true);
    cView.setUint32(20, compressedSize, true);
    cView.setUint32(24, uncompressedSize, true);
    cView.setUint16(28, nameBytes.length, true);
    cView.setUint16(30, 0, true);
    cView.setUint16(32, 0, true);
    cView.setUint16(34, 0, true);
    cView.setUint16(36, 0, true);
    cView.setUint32(38, 0, true);
    cView.setUint32(42, offset, true);

    centralHeader.set(nameBytes, 46);
    centralHeaders.push(centralHeader);

    offset += localHeader.length;
  }

  const centralDirOffset = offset;
  let centralDirSize = 0;
  for (const ch of centralHeaders) {
    centralDirSize += ch.length;
  }

  // End of central directory record (22 bytes)
  const eocd = new Uint8Array(22);
  const eView = new DataView(eocd.buffer);
  eView.setUint32(0, 0x06054b50, true);
  eView.setUint16(4, 0, true);
  eView.setUint16(6, 0, true);
  eView.setUint16(8, files.length, true);
  eView.setUint16(10, files.length, true);
  eView.setUint32(12, centralDirSize, true);
  eView.setUint32(16, centralDirOffset, true);
  eView.setUint16(20, 0, true);

  const totalLength = offset + centralDirSize + 22;
  const zipBuffer = new Uint8Array(totalLength);
  let pos = 0;

  for (const lh of localHeaders) {
    zipBuffer.set(lh, pos);
    pos += lh.length;
  }
  for (const ch of centralHeaders) {
    zipBuffer.set(ch, pos);
    pos += ch.length;
  }
  zipBuffer.set(eocd, pos);

  return zipBuffer;
}
