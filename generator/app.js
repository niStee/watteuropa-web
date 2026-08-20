// @ts-check
/**
 * WATT Slogan / Circular Inlet Generator - Interactive Controller & UI Engine
 * Developed for Josef Tieber & the WATT European Art Team
 */

import {
  PRESETS,
  COLOR_THEMES,
  DEFAULT_CONFIG,
  generateBadgeSvg,
  generatePrintSheetSvg,
  createZip
} from './generator-core.js';

// Application State
const state = {
  activePresetId: PRESETS[0].id,
  language: 'DE',
  viewMode: 'single', // 'single', 'sheet', 'batch'
  sheetLayout: '2x2', // '2x2', '1x2', '2x3'
  isCheckerboard: false,
  config: { ...DEFAULT_CONFIG }
};

// DOM Elements Cache
const dom = {
  // Tabs & Views
  tabBtnSingle: /** @type {HTMLButtonElement} */ (document.getElementById('tabBtnSingle')),
  tabBtnSheet: /** @type {HTMLButtonElement} */ (document.getElementById('tabBtnSheet')),
  tabBtnBatch: /** @type {HTMLButtonElement} */ (document.getElementById('tabBtnBatch')),
  singleContainer: document.getElementById('singleBadgeContainer'),
  sheetContainer: document.getElementById('printSheetContainer'),
  batchContainer: document.getElementById('batchMatrixContainer'),
  previewCard: document.getElementById('previewCard'),
  selectSheetLayout: /** @type {HTMLSelectElement} */ (document.getElementById('selectSheetLayout')),

  // Language & Presets
  languageSelector: document.getElementById('languageSelector'),
  presetList: document.getElementById('presetList'),

  // Text Inputs
  inputTopArc: /** @type {HTMLInputElement} */ (document.getElementById('inputTopArc')),
  inputSlogan: /** @type {HTMLTextAreaElement} */ (document.getElementById('inputSlogan')),
  inputCenterNumber: /** @type {HTMLInputElement} */ (document.getElementById('inputCenterNumber')),
  inputSubtext: /** @type {HTMLInputElement} */ (document.getElementById('inputSubtext')),
  inputCatalog: /** @type {HTMLInputElement} */ (document.getElementById('inputCatalog')),
  inputBottomArc: /** @type {HTMLInputElement} */ (document.getElementById('inputBottomArc')),
  selectFontFamily: /** @type {HTMLSelectElement} */ (document.getElementById('selectFontFamily')),
  selectSloganWeight: /** @type {HTMLSelectElement} */ (document.getElementById('selectSloganWeight')),
  toggleUppercase: /** @type {HTMLInputElement} */ (document.getElementById('toggleUppercase')),

  // Sliders
  sliderSloganFontSize: /** @type {HTMLInputElement} */ (document.getElementById('sliderSloganFontSize')),
  labelSloganFontSize: document.getElementById('labelSloganFontSize'),
  sliderArcFontSize: /** @type {HTMLInputElement} */ (document.getElementById('sliderArcFontSize')),
  labelArcFontSize: document.getElementById('labelArcFontSize'),
  sliderBorderWidth: /** @type {HTMLInputElement} */ (document.getElementById('sliderBorderWidth')),
  labelBorderWidth: document.getElementById('labelBorderWidth'),

  // Themes & Colors
  themeGrid: document.getElementById('themeGrid'),
  customColorContainer: document.getElementById('customColorContainer'),
  colorBg: /** @type {HTMLInputElement} */ (document.getElementById('colorBg')),
  colorPrimary: /** @type {HTMLInputElement} */ (document.getElementById('colorPrimary')),
  colorAccent: /** @type {HTMLInputElement} */ (document.getElementById('colorAccent')),
  colorBorder: /** @type {HTMLInputElement} */ (document.getElementById('colorBorder')),
  colorCutLine: /** @type {HTMLInputElement} */ (document.getElementById('colorCutLine')),

  // Graphics & Toggles
  selectStarPosition: /** @type {HTMLSelectElement} */ (document.getElementById('selectStarPosition')),
  inputDiameter: /** @type {HTMLInputElement} */ (document.getElementById('inputDiameter')),
  toggleEmblem: /** @type {HTMLInputElement} */ (document.getElementById('toggleEmblem')),
  toggleInnerRings: /** @type {HTMLInputElement} */ (document.getElementById('toggleInnerRings')),
  toggleCutLine: /** @type {HTMLInputElement} */ (document.getElementById('toggleCutLine')),

  // Action & Export Buttons
  btnCopySvg: document.getElementById('btnCopySvg'),
  btnDownloadSvg: document.getElementById('btnDownloadSvg'),
  btnDownloadPng: document.getElementById('btnDownloadPng'),
  btnPrintSheet: document.getElementById('btnPrintSheet'),
  btnQuickPrint: document.getElementById('btnQuickPrint'),
  btnExportBatchZipHeader: document.getElementById('btnExportBatchZipHeader'),
  btnToggleBackground: document.getElementById('btnToggleBackground'),
  btnResetConfig: document.getElementById('btnResetConfig'),
  exportCanvas: /** @type {HTMLCanvasElement} */ (document.getElementById('exportCanvas')),
  toastContainer: document.getElementById('toastContainer'),
  specDimensions: document.getElementById('specDimensions')
};

/**
 * Shows an accessible, auto-fading toast notification
 */
function showToast(message, duration = 3000) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
    <span>${message}</span>
  `;
  dom.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

/**
 * Initializes Theme selector grid
 */
function initThemes() {
  dom.themeGrid.innerHTML = '';
  Object.values(COLOR_THEMES).forEach(theme => {
    const tile = document.createElement('div');
    tile.className = `theme-tile ${theme.id === state.config.theme ? 'active' : ''}`;
    tile.dataset.themeId = theme.id;
    tile.innerHTML = `
      <div class="theme-swatch" style="background: ${theme.bg}; color: ${theme.primary}; border-color: ${theme.border}">
        W
      </div>
      <div class="theme-name">${theme.name}</div>
    `;
    tile.addEventListener('click', () => selectTheme(theme.id));
    dom.themeGrid.appendChild(tile);
  });
}

/**
 * Selects a Color Theme
 */
function selectTheme(themeId) {
  state.config.theme = themeId;
  document.querySelectorAll('.theme-tile').forEach(tile => {
    const el = /** @type {HTMLElement} */ (tile);
    el.classList.toggle('active', el.dataset.themeId === themeId);
  });

  if (themeId === 'custom') {
    dom.customColorContainer.style.display = 'grid';
  } else {
    dom.customColorContainer.style.display = 'none';
  }

  render();
}

/**
 * Initializes Slogan Presets List
 */
function initPresets() {
  dom.presetList.innerHTML = '';
  PRESETS.forEach(preset => {
    const langData = preset.languages[state.language] || preset.languages.DE;
    const item = document.createElement('div');
    item.className = `preset-item ${preset.id === state.activePresetId ? 'active' : ''}`;
    item.dataset.presetId = preset.id;
    item.innerHTML = `
      <div class="preset-item-title">
        <span>${preset.name}</span>
        <span style="font-size: 0.7rem; opacity: 0.8;">[${state.language}]</span>
      </div>
      <div class="preset-item-sub">
        ${langData.topArc} • ${langData.sloganLines.join(' ')}
      </div>
    `;
    item.addEventListener('click', () => selectPreset(preset.id));
    dom.presetList.appendChild(item);
  });
}

/**
 * Selects a Preset and loads its language data into the form inputs
 */
function selectPreset(presetId) {
  state.activePresetId = presetId;
  const preset = PRESETS.find(p => p.id === presetId);
  if (!preset) return;

  const langData = preset.languages[state.language] || preset.languages.DE;
  
  state.config.topArc = langData.topArc;
  state.config.slogan = langData.sloganLines.join('\n');
  state.config.subtext = langData.subtext;
  state.config.catalog = langData.catalog;
  state.config.bottomArc = langData.bottomArc;
  state.config.centerNumber = langData.centerNumber || '';

  syncFormInputs();
  highlightActivePreset();
  render();
  showToast(`Vorlage "${preset.name}" geladen (${state.language})`);
}

/**
 * Highlights active preset item in the DOM list
 */
function highlightActivePreset() {
  document.querySelectorAll('.preset-item').forEach(item => {
    const el = /** @type {HTMLElement} */ (item);
    el.classList.toggle('active', el.dataset.presetId === state.activePresetId);
  });
}

/**
 * Switches current language (DE, EN, FR, NL, CZ)
 */
function switchLanguage(newLang) {
  state.language = newLang;
  state.config.language = newLang;

  // Update language pills
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const el = /** @type {HTMLElement} */ (btn);
    el.classList.toggle('active', el.dataset.lang === newLang);
  });

  // If a preset is currently active, load translation for that preset
  if (state.activePresetId) {
    const preset = PRESETS.find(p => p.id === state.activePresetId);
    if (preset && preset.languages[newLang]) {
      const l = preset.languages[newLang];
      state.config.topArc = l.topArc;
      state.config.slogan = l.sloganLines.join('\n');
      state.config.subtext = l.subtext;
      state.config.catalog = l.catalog;
      state.config.bottomArc = l.bottomArc;
      state.config.centerNumber = l.centerNumber || '';
      syncFormInputs();
    }
  }

  initPresets();
  render();
  showToast(`Sprache auf ${newLang} umgestellt`);
}

/**
 * Updates DOM Form Inputs to match current state.config
 */
function syncFormInputs() {
  dom.inputTopArc.value = state.config.topArc;
  dom.inputSlogan.value = state.config.slogan;
  dom.inputCenterNumber.value = state.config.centerNumber || '';
  dom.inputSubtext.value = state.config.subtext;
  dom.inputCatalog.value = state.config.catalog;
  dom.inputBottomArc.value = state.config.bottomArc;
  dom.selectFontFamily.value = state.config.fontFamily;
  dom.selectSloganWeight.value = state.config.sloganFontWeight;
  dom.toggleUppercase.checked = state.config.uppercase;

  dom.sliderSloganFontSize.value = String(state.config.sloganFontSize);
  dom.labelSloganFontSize.textContent = `${state.config.sloganFontSize}px`;

  dom.sliderArcFontSize.value = String(state.config.topArcFontSize);
  dom.labelArcFontSize.textContent = `${state.config.topArcFontSize}px`;

  dom.sliderBorderWidth.value = String(state.config.borderWidth);
  dom.labelBorderWidth.textContent = `${state.config.borderWidth}px`;

  dom.selectStarPosition.value = state.config.starPosition;
  dom.inputDiameter.value = String(state.config.diameterMm);
  dom.toggleEmblem.checked = state.config.showWattEmblem;
  dom.toggleInnerRings.checked = state.config.innerRing;
  dom.toggleCutLine.checked = state.config.showCutLine;

  dom.specDimensions.textContent = `Ø ${state.config.diameterMm} mm Einleger`;
}

/**
 * Reads form inputs and updates state.config
 */
function readFormInputs() {
  state.config.topArc = dom.inputTopArc.value;
  state.config.slogan = dom.inputSlogan.value;
  state.config.centerNumber = dom.inputCenterNumber.value;
  state.config.subtext = dom.inputSubtext.value;
  state.config.catalog = dom.inputCatalog.value;
  state.config.bottomArc = dom.inputBottomArc.value;
  state.config.fontFamily = dom.selectFontFamily.value;
  state.config.sloganFontWeight = dom.selectSloganWeight.value;
  state.config.uppercase = dom.toggleUppercase.checked;

  state.config.sloganFontSize = parseInt(dom.sliderSloganFontSize.value, 10);
  dom.labelSloganFontSize.textContent = `${state.config.sloganFontSize}px`;

  state.config.topArcFontSize = parseInt(dom.sliderArcFontSize.value, 10);
  state.config.bottomArcFontSize = Math.round(state.config.topArcFontSize * 0.74);
  dom.labelArcFontSize.textContent = `${state.config.topArcFontSize}px`;

  state.config.borderWidth = parseInt(dom.sliderBorderWidth.value, 10);
  dom.labelBorderWidth.textContent = `${state.config.borderWidth}px`;

  state.config.starPosition = dom.selectStarPosition.value;
  state.config.diameterMm = parseInt(dom.inputDiameter.value, 10);
  state.config.showWattEmblem = dom.toggleEmblem.checked;
  state.config.innerRing = dom.toggleInnerRings.checked;
  state.config.showCutLine = dom.toggleCutLine.checked;

  // Custom Colors
  state.config.customColors = {
    bg: dom.colorBg.value,
    primary: dom.colorPrimary.value,
    secondary: dom.colorPrimary.value,
    accent: dom.colorAccent.value,
    border: dom.colorBorder.value,
    cutLine: dom.colorCutLine.value,
    textMain: dom.colorPrimary.value,
    textSub: dom.colorPrimary.value,
    badgeTag: dom.colorAccent.value
  };

  dom.specDimensions.textContent = `Ø ${state.config.diameterMm} mm Einleger`;
}

/**
 * Switches View Mode ('single', 'sheet', 'batch')
 */
function setViewMode(mode) {
  state.viewMode = mode;
  dom.tabBtnSingle.classList.toggle('active', mode === 'single');
  dom.tabBtnSheet.classList.toggle('active', mode === 'sheet');
  dom.tabBtnBatch.classList.toggle('active', mode === 'batch');

  dom.singleContainer.style.display = mode === 'single' ? 'flex' : 'none';
  dom.sheetContainer.style.display = mode === 'sheet' ? 'block' : 'none';
  dom.batchContainer.style.display = mode === 'batch' ? 'grid' : 'none';
  dom.selectSheetLayout.style.display = mode === 'sheet' ? 'inline-block' : 'none';

  render();
}

/**
 * Main Render Function
 */
function render() {
  if (state.viewMode === 'single') {
    renderSingleBadge();
  } else if (state.viewMode === 'sheet') {
    renderPrintSheet();
  } else if (state.viewMode === 'batch') {
    renderBatchMatrix();
  }
}

/**
 * Renders Single Badge SVG in the live viewport
 */
function renderSingleBadge() {
  const svg = generateBadgeSvg(state.config);
  dom.singleContainer.innerHTML = svg;
}

/**
 * Renders A4 Print Sheet SVG
 */
function renderPrintSheet() {
  const sheetSvg = generatePrintSheetSvg(state.config, {
    layout: state.sheetLayout,
    pageSize: 'A4'
  });
  dom.sheetContainer.innerHTML = sheetSvg;
}

/**
 * Renders Multi-Language Matrix View (5 languages side by side)
 */
function renderBatchMatrix() {
  dom.batchContainer.innerHTML = '';
  const langs = ['DE', 'EN', 'FR', 'NL', 'CZ'];
  const preset = PRESETS.find(p => p.id === state.activePresetId) || PRESETS[0];

  langs.forEach(lang => {
    const langData = preset.languages[lang] || preset.languages.DE;
    const langConfig = {
      ...state.config,
      language: lang,
      topArc: langData.topArc,
      slogan: langData.sloganLines.join('\n'),
      subtext: langData.subtext,
      catalog: langData.catalog,
      bottomArc: langData.bottomArc,
      centerNumber: langData.centerNumber || ''
    };

    const card = document.createElement('div');
    card.className = 'batch-card';

    const flagMap = { DE: '🇩🇪', EN: '🇬🇧', FR: '🇫🇷', NL: '🇳🇱', CZ: '🇨🇿' };
    const langNames = { DE: 'Deutsch', EN: 'English', FR: 'Français', NL: 'Nederlands', CZ: 'Čeština' };

    card.innerHTML = `
      <div class="batch-card-header">
        <div style="font-weight: 700; font-size: 0.85rem; color: var(--volt-deep);">
          ${flagMap[lang]} ${langNames[lang]}
        </div>
        <span class="batch-lang-badge">${lang}</span>
      </div>
      <div class="batch-badge-preview">
        ${generateBadgeSvg(langConfig)}
      </div>
      <div style="font-size: 0.72rem; color: var(--text-muted); text-align: center; line-height: 1.3;">
        <strong>${escapeHtml(langData.topArc)}</strong><br>
        ${escapeHtml(langData.sloganLines.join(' • '))}
      </div>
      <div style="display: flex; gap: 0.4rem; width: 100%; margin-top: 0.25rem;">
        <button class="btn btn-secondary btn-sm" style="flex: 1;" data-action="download-svg" data-lang="${lang}">SVG</button>
        <button class="btn btn-primary btn-sm" style="flex: 1;" data-action="download-png" data-lang="${lang}">PNG</button>
      </div>
    `;

    // Add individual download handlers
    card.querySelector('[data-action="download-svg"]').addEventListener('click', () => {
      downloadSvgFile(langConfig, `WATT-Inlet-${langData.catalog.replace(/\s+/g, '-') || lang}.svg`);
    });

    card.querySelector('[data-action="download-png"]').addEventListener('click', () => {
      downloadPngFile(langConfig, `WATT-Inlet-${langData.catalog.replace(/\s+/g, '-') || lang}.png`);
    });

    dom.batchContainer.appendChild(card);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Downloads SVG File
 */
function downloadSvgFile(config = state.config, filename) {
  const svg = generateBadgeSvg(config);
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || `WATT-Inlet-${config.language || 'DE'}-${Date.now()}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast(`Vektor SVG heruntergeladen: ${a.download}`);
}

/**
 * Rasterizes SVG to High-Resolution Canvas and triggers PNG download (300 DPI ready, 2048x2048)
 */
function downloadPngFile(config = state.config, filename) {
  const svg = generateBadgeSvg(config);
  const blob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const img = new Image();

  img.onload = () => {
    const canvas = dom.exportCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = 2048;
    canvas.height = 2048;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, 2048, 2048);
    URL.revokeObjectURL(url);

    canvas.toBlob((pngBlob) => {
      if (!pngBlob) return;
      const pngUrl = URL.createObjectURL(pngBlob);
      const a = document.createElement('a');
      a.href = pngUrl;
      a.download = filename || `WATT-Inlet-300DPI-${config.language || 'DE'}-${Date.now()}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(pngUrl);
      showToast(`High-Res PNG (2048×2048, 300 DPI) heruntergeladen`);
    }, 'image/png');
  };

  img.src = url;
}

/**
 * Copies raw SVG markup to clipboard
 */
async function copySvgToClipboard() {
  const svg = generateBadgeSvg(state.config);
  try {
    await navigator.clipboard.writeText(svg);
    showToast('SVG Markup erfolgreich in die Zwischenablage kopiert!');
  } catch (err) {
    // Fallback for older browsers or restricted permissions
    const ta = document.createElement('textarea');
    ta.value = svg;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast('SVG Markup in die Zwischenablage kopiert!');
  }
}

/**
 * Exports all 5 languages as SVG and PNG in a single ZIP file with zero dependencies
 */
async function exportBatchZip() {
  showToast('Erstelle Batch ZIP für alle 5 Sprachen...', 4000);
  const langs = ['DE', 'EN', 'FR', 'NL', 'CZ'];
  const preset = PRESETS.find(p => p.id === state.activePresetId) || PRESETS[0];
  const files = [];

  // Add README text in zip
  files.push({
    name: 'README-WATT-INLETS.txt',
    content: `WATT European Art • Slogan & Inlet Generator Export
Exponat: ${preset.name}
Erstellt für: Josef Tieber & WATT European Art Team
Auflösung PNG: 2048x2048 px (300 DPI Print Ready)
Formate: Vektor SVG + Raster PNG
Enthaltene Sprachen: DE, EN, FR, NL, CZ`
  });

  // Also include the A4 Print Sheet SVG in the ZIP
  const sheetSvg = generatePrintSheetSvg(state.config, { layout: '2x2', pageSize: 'A4' });
  files.push({
    name: 'A4-Print-Sheet-4x-Inlets.svg',
    content: sheetSvg
  });

  for (const lang of langs) {
    const langData = preset.languages[lang] || preset.languages.DE;
    const langConfig = {
      ...state.config,
      language: lang,
      topArc: langData.topArc,
      slogan: langData.sloganLines.join('\n'),
      subtext: langData.subtext,
      catalog: langData.catalog,
      bottomArc: langData.bottomArc,
      centerNumber: langData.centerNumber || ''
    };

    const svgString = generateBadgeSvg(langConfig);
    const cleanCatalog = (langData.catalog || `Exponat-${lang}`).replace(/[^a-zA-Z0-9_-]/g, '_');
    
    // Add SVG
    files.push({
      name: `${lang}_${cleanCatalog}.svg`,
      content: svgString
    });

    // Render PNG into Uint8Array
    try {
      const pngBytes = await renderSvgToPngBytes(svgString, 2048, 2048);
      if (pngBytes) {
        files.push({
          name: `${lang}_${cleanCatalog}_300DPI.png`,
          content: pngBytes
        });
      }
    } catch (e) {
      console.error(`PNG rasterization error for ${lang}:`, e);
    }
  }

  // Package all files into ZIP
  const zipBytes = createZip(files);
  const zipBlob = new Blob([zipBytes], { type: 'application/zip' });
  const zipUrl = URL.createObjectURL(zipBlob);
  const a = document.createElement('a');
  a.href = zipUrl;
  a.download = `WATT-Inlets-All-5-Languages-${Date.now()}.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(zipUrl);

  showToast('Batch ZIP (SVGs + PNGs für alle 5 Sprachen) erfolgreich heruntergeladen!');
}

/**
 * Helper: Renders SVG string to PNG Uint8Array bytes via Canvas
 */
async function renderSvgToPngBytes(svgString, width = 2048, height = 2048) {
  if (typeof document !== 'undefined' && document.fonts && document.fonts.ready) {
    try {
      await document.fonts.ready;
    } catch (_) {
      // ignore font readiness error
    }
  }

  return new Promise((resolve, reject) => {
    const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();

    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);
      URL.revokeObjectURL(url);

      canvas.toBlob(pngBlob => {
        if (!pngBlob) {
          resolve(null);
          return;
        }
        const reader = new FileReader();
        reader.onload = () => {
          resolve(new Uint8Array(/** @type {ArrayBuffer} */ (reader.result)));
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(pngBlob);
      }, 'image/png');
    };

    img.onerror = (e) => {
      URL.revokeObjectURL(url);
      reject(e);
    };

    img.src = url;
  });
}

/**
 * Event Listeners Binding
 */
function bindEvents() {
  // Language selector
  dom.languageSelector?.addEventListener('click', (e) => {
    const target = /** @type {HTMLElement} */ (e.target);
    const btn = /** @type {HTMLElement | null} */ (target?.closest('.lang-btn'));
    if (btn && btn.dataset.lang) {
      switchLanguage(btn.dataset.lang);
    }
  });

  // View Mode Tabs
  dom.tabBtnSingle?.addEventListener('click', () => setViewMode('single'));
  dom.tabBtnSheet?.addEventListener('click', () => setViewMode('sheet'));
  dom.tabBtnBatch?.addEventListener('click', () => setViewMode('batch'));

  // Sheet layout dropdown
  dom.selectSheetLayout?.addEventListener('change', (e) => {
    const target = /** @type {HTMLSelectElement} */ (e.target);
    state.sheetLayout = target.value;
    render();
  });

  // Live Input Changes
  const liveInputs = [
    dom.inputTopArc,
    dom.inputSlogan,
    dom.inputCenterNumber,
    dom.inputSubtext,
    dom.inputCatalog,
    dom.inputBottomArc,
    dom.selectFontFamily,
    dom.selectSloganWeight,
    dom.toggleUppercase,
    dom.sliderSloganFontSize,
    dom.sliderArcFontSize,
    dom.sliderBorderWidth,
    dom.selectStarPosition,
    dom.inputDiameter,
    dom.toggleEmblem,
    dom.toggleInnerRings,
    dom.toggleCutLine,
    dom.colorBg,
    dom.colorPrimary,
    dom.colorAccent,
    dom.colorBorder,
    dom.colorCutLine
  ];

  liveInputs.forEach(input => {
    input.addEventListener('input', () => {
      readFormInputs();
      render();
    });
  });

  // Action Buttons
  dom.btnCopySvg.addEventListener('click', copySvgToClipboard);
  dom.btnDownloadSvg.addEventListener('click', () => downloadSvgFile());
  dom.btnDownloadPng.addEventListener('click', () => downloadPngFile());
  
  dom.btnPrintSheet.addEventListener('click', () => {
    setViewMode('sheet');
    setTimeout(() => window.print(), 200);
  });

  dom.btnQuickPrint.addEventListener('click', () => {
    setViewMode('sheet');
    setTimeout(() => window.print(), 200);
  });

  dom.btnExportBatchZipHeader.addEventListener('click', exportBatchZip);

  // Background Checkerboard toggle
  dom.btnToggleBackground.addEventListener('click', () => {
    state.isCheckerboard = !state.isCheckerboard;
    dom.previewCard.classList.toggle('checkerboard', state.isCheckerboard);
    showToast(state.isCheckerboard ? 'Schachbrett-Hintergrund aktiviert' : 'Weißer Hintergrund aktiviert');
  });

  // Reset Button
  dom.btnResetConfig.addEventListener('click', () => {
    state.config = { ...DEFAULT_CONFIG };
    state.activePresetId = PRESETS[0].id;
    state.language = 'DE';
    selectPreset(PRESETS[0].id);
    selectTheme('purpleOnWhite');
    showToast('Konfiguration auf Standardwerte zurückgesetzt');
  });
}

/**
 * Application Bootstrap
 */
function init() {
  initThemes();
  initPresets();
  syncFormInputs();
  bindEvents();
  render();
  console.log('WATT Slogan / Inlet Generator initialized successfully.');
}

// Launch on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
