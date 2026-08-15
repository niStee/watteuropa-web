/**
 * watteuropa.org - NFT 2026 Client Scripts
 * High-performance, lightweight vanilla JS for Inlets showcase,
 * multi-language subtitles, interactive video player, and translations.
 */

// Inlets Data (DE, EN, FR, NL, CZ)
const INLETS_DATA = {
  de: {
    lang: 'Deutsch (DE)',
    title: '3. National Freien Tage',
    date: '1. bis 3. Juni 2026',
    scope: 'Europaweit / Weltweit',
    exponat: 'Watt European Exponat 201 DE 3',
    img: 'assets/inlets/inlet-de.jpg',
    pdf: 'assets/pdf/201 DE 3.pdf',
    headline: 'Frei von nationalen Heiligkeitsblasen',
    desc: 'An den Nationalfreien Tagen wollen wir nicht in nationalen Dimensionen denken. Es ist erlaubt und erwünscht, das Konstrukt der nationalen Heiligkeitsblase zu belächeln und einen Gegenpol für mehr europäische und weltweite Gemeinschaftlichkeit zu setzen.'
  },
  en: {
    lang: 'English (EN)',
    title: '3. National Free Days',
    date: '1 - 3 June 2026',
    scope: 'Europe-Wide / Worldwide',
    exponat: 'Watt European Exponat 201 EN 3',
    img: 'assets/inlets/inlet-en.jpg',
    pdf: 'assets/pdf/201 EN 3.pdf',
    headline: 'Breaking through national bubbles',
    desc: 'National Free Days invite us to perceive ourselves free from nationalist constraints for a few days each year. A clear call for shared European values, human rights, and global solidarity.'
  },
  fr: {
    lang: 'Français (FR)',
    title: '3. Fête Anationale',
    date: '1 - 3 Juin 2026',
    scope: 'Dans toute l’Europe / Dans le monde entier',
    exponat: 'Watt European Exponat 201 FR 3',
    img: 'assets/inlets/inlet-fr.jpg',
    pdf: 'assets/pdf/201 FR 3.pdf',
    headline: 'Se libérer des frontières nationales',
    desc: 'Quelques jours par an, dépassons les vanités nationales pour construire une fraternité véritable et faire avancer l’Europe vers le respect mutuel et le droit international.'
  },
  nl: {
    lang: 'Nederlands (NL)',
    title: '3. Dagen van Nationaalvrij Denken',
    date: '1 - 3 Juni 2026',
    scope: 'Europa - Breed / Wereldwijd',
    exponat: 'Watt European Exponat 201 NL 3',
    img: 'assets/inlets/inlet-nl.jpg',
    pdf: 'assets/pdf/201 NL 3.pdf',
    headline: 'Nationaalvrij denken voor meer samenhorigheid',
    desc: 'Als er zoveel nationale feestdagen zijn, laten we dan ook dagen vieren waarop we ons losmaken van de natiestaat om ons als Europese en wereldwijde gemeenschap te begrijpen.'
  },
  cz: {
    lang: 'Čeština (CZ)',
    title: '4. Dny Bez Národnosti',
    date: '1. - 4. Června 2027',
    scope: 'Celoevropsky / Celosvětově',
    exponat: 'Watt European Exponat 201 CZ 4',
    img: 'assets/inlets/inlet-cz.jpg',
    pdf: 'assets/pdf/201 CZ 4.pdf',
    headline: 'Výhled Praha 2027: Dny bez národnosti',
    desc: 'Oznámení pro 4. ročník v Praze 2027 (4 dny). Společný evropský projekt k překonání národních předsudků a posílení mezinárodního práva a lidské sounáležitosti.'
  }
};

// Video catalog & embeds
const VIDEO_CATALOG = {
  day3: {
    title: 'Tag 3: Abschlusskundgebung & Erläuterung Kunstwerk (Wegberg)',
    desc: 'Vollständige Kundgebung durch Wegberg mit Erläuterung der „Hohen Rösser“ und dem Europäischen Gruß.',
    type: 'youtube',
    src: 'https://www.youtube-nocookie.com/embed/A7CWUPn2YEY'
  },
  tv: {
    title: 'TV Version (Framebuilder Media Edit • 2:30 min)',
    desc: 'Kompakte Fernseh- und Nachrichtenversion der Aktion für Rundfunk und soziale Medien.',
    type: 'youtube',
    src: 'https://www.youtube-nocookie.com/embed/wrHgyR6Z_-I'
  },
  day1: {
    title: 'Tag 1: Political Evolution & Entstehungsgeschichte',
    desc: 'Von der Französischen Revolution bis GRÜN und VIOLETT als moderne europäische Leitkultur.',
    type: 'youtube',
    src: 'https://www.youtube-nocookie.com/embed/bjQgVwqIg44'
  },
  day2: {
    title: 'Tag 2: Schengen², Europäische Netze & Zukunft',
    desc: 'Gemeinschaftliche Infrastruktur, europäische Bahnsysteme und einheitlicher Grenzschutz.',
    type: 'youtube',
    src: 'https://www.youtube-nocookie.com/embed/dTHp3CdKcmM'
  },
  local: {
    title: 'WATT Video Archiv & Statement Rohmaterial',
    desc: 'Originalaufnahme mit zuschaltbaren Untertiteln in 5 Sprachen (DE, EN, FR, NL, CZ).',
    type: 'local',
    src: 'assets/videos/download_videos.mp4'
  }
};

// Transcripts for interactive subtitles viewer
const TRANSCRIPTS = {
  de: [
    { time: '00:12', text: 'Wir haben heute den dritten Tag der national freien Tage und heute ist die Abschlusskundgebung.' },
    { time: '00:18', text: 'Und heute gehen wir durch Wegberg.' },
    { time: '00:25', text: 'Es geht einfach darum, dass man sich vielleicht an wenigen Tagen im Jahr national frei begreift.' },
    { time: '01:11', text: 'Wir haben den Eindruck, dass sich die Länder zu sehr in ihren nationalen Blasen abschotten.' },
    { time: '01:23', text: 'Ich möchte mit diesem Kunstprojekt einen Gegenpol setzen für mehr Gemeinschaftlichkeit.' },
    { time: '02:07', text: 'Kurze Erklärung zu den hohen europäischen Rössern: Die Idee stammt aus 2014 nach der Finanzkrise.' },
    { time: '02:33', text: 'Der Gedanke war, dass die 28 Nationalstaaten runterkommen auf Europa zu einer Gemeinschaftlichkeit.' },
    { time: '03:45', text: 'Der europäische Gruß: Runter mit den nationalen Eitelkeiten und Respekt, Respekt, Respekt vor dir!' },
    { time: '04:11', text: 'Wir möchten Europa anschieben – dass Gesetze eingehalten werden und die UNO Wertigkeit hat.' },
    { time: '05:20', text: 'Ausblick auf 2027: 4 Tage in Prag (Dny Bez Národnosti) für europaweite Gemeinschaftlichkeit.' }
  ],
  en: [
    { time: '00:12', text: 'Today is the third day of the National Free Days, and today is the closing rally.' },
    { time: '00:18', text: 'And today we are walking through Wegberg.' },
    { time: '00:25', text: 'It is simply about perceiving oneself as nationally free for a few days a year.' },
    { time: '01:11', text: 'We feel that nations are isolating themselves in national bubbles.' },
    { time: '01:23', text: 'With this art project, I want to set a counterpoint for greater community worldwide.' },
    { time: '02:07', text: 'Brief explanation of the High Horses: the concept originated in 2014 after the financial crisis.' },
    { time: '02:33', text: 'The idea was for 28 nation states to step down from their high horses towards European unity.' },
    { time: '03:45', text: 'The European Greeting: Down with national vanity – and respect, respect, respect for you!' },
    { time: '04:11', text: 'We want to push Europe forward – upholding the rule of law and international solidarity.' },
    { time: '05:20', text: 'Outlook for 2027: 4 days in Prague (Dny Bez Národnosti) for European and global community.' }
  ],
  fr: [
    { time: '00:12', text: 'Aujourd’hui, nous vivons le troisième jour des Journées Libres de Nation.' },
    { time: '00:18', text: 'Et nous défilons à travers Wegberg.' },
    { time: '00:25', text: 'Il s’agit simplement de se concevoir, quelques jours par an, libéré des frontières nationales.' },
    { time: '01:11', text: 'Les pays s’enferment dans leurs bulles nationalistes.' },
    { time: '01:23', text: 'Cette œuvre d’art pose un contrepoids pour plus de fraternité et de solidarité en Europe.' },
    { time: '02:07', text: 'Explication des «Grands Chevaux» : nés en 2014 pour rapprocher les 28 États nations.' },
    { time: '03:45', text: 'Le Salut Européen : À bas les vanités nationales – et respect, respect, respect pour toi !' },
    { time: '04:11', text: 'Poussons l’Europe ensemble vers le respect du droit international et des institutions communes.' },
    { time: '05:20', text: 'Rendez-vous en 2027 à Prague pour 4 jours de Fête Anationale (1–4 Juin 2027) !' }
  ],
  nl: [
    { time: '00:12', text: 'Vandaag is de derde dag van de Nationaalvrije Dagen en de slotmanifestatie.' },
    { time: '00:18', text: 'We trekken vandaag door Wegberg.' },
    { time: '00:25', text: 'Het gaat erom dat men zich enkele dagen per jaar nationaalvrij beschouwt.' },
    { time: '01:11', text: 'Landen sluiten zich te veel op in hun nationale bubbels.' },
    { time: '01:23', text: 'Dit kunstproject biedt een tegenwicht voor meer gemeenschapszin in Europa en wereldwijd.' },
    { time: '02:07', text: 'De 28 Europese natiestaten moeten van hun hoge paard afkomen richting eenheid.' },
    { time: '03:45', text: 'De Europese groet: Weg met de nationale ijdelheden – en respect, respect, respect voor jou!' },
    { time: '04:11', text: 'Laten we Europa vooruit duwen met respect voor internationaal recht.' },
    { time: '05:20', text: 'Volgend jaar 2027: 4 Dagen van Nationaalvrij Denken in Praag (1–4 juni 2027)!' }
  ],
  cz: [
    { time: '00:12', text: 'Dnes máme třetí den Dnů bez národnosti a koná se závěrečné shromáždění.' },
    { time: '00:18', text: 'Dnes procházíme městem Wegberg.' },
    { time: '00:25', text: 'Jde o to, abychom se alespoň několik dní v roce osvobodili od národních bublin.' },
    { time: '01:11', text: 'Všechny země se uzavírají do svých národních bublin a myslí jen na sebe.' },
    { time: '01:23', text: 'Tímto uměleckým projektem chci vytvořit protiváhu pro více pospolitosti.' },
    { time: '02:07', text: 'Vysvětlení k dílu „Vysocí evropští koně“: 28 států by mělo sesednout z vysokých koní.' },
    { time: '03:45', text: 'Evropský pozdrav: Pryč s národní pýchou – a respekt, respekt, respekt k tobě!' },
    { time: '04:11', text: 'Chceme posunout Evropu kupředu, aby všechny národy táhly jedním směrem.' },
    { time: '05:20', text: 'Výhled na rok 2027: 4. Dny Bez Národnosti v Praze (1.–4. června 2027)!' }
  ]
};

// UI Translations dictionary
const UI_TRANSLATIONS = {
  de: {
    heroTitle: 'NATIONALFREIE TAGE 2026',
    heroSub: 'Raus aus den nationalen Heiligkeitsblasen – hinein in eine grenzenlose europäische und weltweite Gemeinschaft.',
    greetingTitle: 'Europäischer Gruß',
    greetingQuote: '«Runter mit den nationalen Eitelkeiten und Respekt, Respekt, Respekt vor dir!»',
    inletsTitle: 'Die 5 Sprach-Inlets',
    inletsDesc: 'Die offiziellen kreisrunden Exponat-Inlets in 5 Sprachen als Vorlage zum Drucken und Mitmachen.',
    videosTitle: 'Video-Dokumentation & Demonstration',
    videosDesc: 'Erleben Sie die 3. Nationalfreien Tage in Wegberg, die Ansprachen und das kinetische Kunstwerk.'
  },
  en: {
    heroTitle: 'NATIONAL FREE DAYS 2026',
    heroSub: 'Breaking free from nationalist bubbles – stepping forward into European and global unity.',
    greetingTitle: 'European Greeting',
    greetingQuote: '“Down with national vanity – and respect, respect, respect for you!”',
    inletsTitle: 'The 5 Language Inlets',
    inletsDesc: 'The official circular exhibit inlets in 5 languages ready for printing and community sharing.',
    videosTitle: 'Video Showcase & Documentation',
    videosDesc: 'Explore the 3rd National Free Days in Wegberg, speeches, and the kinetic art installation.'
  },
  fr: {
    heroTitle: 'JOURNÉES LIBRES DE NATION 2026',
    heroSub: 'Dépassons les bulles nationalistes pour construire une fraternité européenne et mondiale.',
    greetingTitle: 'Salut Européen',
    greetingQuote: '«À bas les vanités nationales – et respect, respect, respect pour toi !»',
    inletsTitle: 'Les 5 Inlets Linguistiques',
    inletsDesc: 'Les visuels circulaires officiels en 5 langues prêts à l’impression et au partage.',
    videosTitle: 'Documentaire Vidéo & Manifestation',
    videosDesc: 'Découvrez la 3e édition à Wegberg, les prises de parole et la sculpture cinétique.'
  },
  nl: {
    heroTitle: 'NATIONAALVRIJE DAGEN 2026',
    heroSub: 'Weg uit de nationale bubbels – naar een grenzeloze Europese en wereldwijde gemeenschap.',
    greetingTitle: 'Europese Groet',
    greetingQuote: '„Weg met de nationale ijdelheden – en respect, respect, respect voor jou!”',
    inletsTitle: 'De 5 Taal-Inlets',
    inletsDesc: 'De officiële cirkelvormige expositie-inlets in 5 talen om af te drukken en te delen.',
    videosTitle: 'Video Showcase & Documentatie',
    videosDesc: 'Bekijk de 3e Nationaalvrije Dagen in Wegberg, toespraken en het kinetische kunstwerk.'
  },
  cz: {
    heroTitle: 'DNY BEZ NÁRODNOSTI 2026',
    heroSub: 'Vymanit se z národních bublin – vstříc evropské a celosvětové pospolitosti.',
    greetingTitle: 'Evropský Pozdrav',
    greetingQuote: '„Pryč s národní pýchou – a respekt, respekt, respekt k tobě!“',
    inletsTitle: '5 Jazykových Inletů',
    inletsDesc: 'Oficiální kruhové exponáty v 5 jazycích připravené k tisku a účasti.',
    videosTitle: 'Video Dokumentace & Shromáždění',
    videosDesc: 'Zažijte 3. Dny bez národnosti ve Wegbergu, projevy a kinetickou instalaci.'
  }
};

let currentLang = 'de';
let currentSubLang = 'de';

/**
 * Open Inlet Modal with High-Res Image & Details
 */
function openInletModal(langKey) {
  const data = INLETS_DATA[langKey];
  if (!data) return;

  const modal = document.getElementById('inletModal');
  const imgEl = document.getElementById('modalInletImg');
  const titleEl = document.getElementById('modalInletTitle');
  const tagEl = document.getElementById('modalInletTag');
  const descEl = document.getElementById('modalInletDesc');
  const expEl = document.getElementById('modalInletExponat');
  const pdfBtn = document.getElementById('modalPdfDownloadBtn');

  if (imgEl) {
    imgEl.src = data.img;
    imgEl.alt = `${data.title} - ${data.lang}`;
  }
  if (titleEl) titleEl.textContent = data.title;
  if (tagEl) tagEl.textContent = `${data.date} • ${data.scope}`;
  if (descEl) descEl.textContent = data.desc;
  if (expEl) expEl.textContent = data.exponat;
  if (pdfBtn) {
    pdfBtn.href = data.pdf;
    pdfBtn.setAttribute('download', `WATT-Inlet-${langKey.toUpperCase()}.pdf`);
  }

  if (modal) {
    modal.classList.add('is-active');
    document.body.style.overflow = 'hidden';
  }
}

/**
 * Close Inlet Modal
 */
function closeInletModal() {
  const modal = document.getElementById('inletModal');
  if (modal) {
    modal.classList.remove('is-active');
    document.body.style.overflow = '';
  }
}

/**
 * Switch Video Tab in Player Section
 */
function switchVideoTab(tabKey) {
  const videoData = VIDEO_CATALOG[tabKey];
  if (!videoData) return;

  // Update tab button styles
  const buttons = document.querySelectorAll('.video-tab-btn');
  buttons.forEach(btn => {
    if (btn.dataset.tab === tabKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update title & description
  const titleEl = document.getElementById('currentVideoTitle');
  const descEl = document.getElementById('currentVideoDesc');
  if (titleEl) titleEl.textContent = videoData.title;
  if (descEl) descEl.textContent = videoData.desc;

  // Swap player elements
  const iframeEl = document.getElementById('ytPlayerIframe');
  const localVideoEl = document.getElementById('localVideoPlayer');

  if (videoData.type === 'youtube') {
    if (localVideoEl) {
      localVideoEl.style.display = 'none';
      localVideoEl.pause();
    }
    if (iframeEl) {
      iframeEl.style.display = 'block';
      iframeEl.src = videoData.src;
    }
  } else {
    if (iframeEl) {
      iframeEl.style.display = 'none';
      iframeEl.src = '';
    }
    if (localVideoEl) {
      localVideoEl.style.display = 'block';
      localVideoEl.src = videoData.src;
      localVideoEl.load();
    }
  }
}

/**
 * Switch Subtitle Language for Local Video & Transcript
 */
function switchSubtitle(langCode) {
  currentSubLang = langCode;

  // Update subtitle buttons
  const subBtns = document.querySelectorAll('.sub-btn');
  subBtns.forEach(btn => {
    if (btn.dataset.sub === langCode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update transcript view
  renderTranscript(langCode);

  // Update video text track if active
  const videoEl = document.getElementById('localVideoPlayer');
  if (videoEl && videoEl.textTracks) {
    for (let i = 0; i < videoEl.textTracks.length; i++) {
      const track = videoEl.textTracks[i];
      if (track.language === langCode) {
        track.mode = 'showing';
      } else {
        track.mode = 'disabled';
      }
    }
  }
}

/**
 * Render Interactive Transcript Lines
 */
function renderTranscript(langCode) {
  const container = document.getElementById('transcriptLines');
  if (!container) return;

  const lines = TRANSCRIPTS[langCode] || TRANSCRIPTS.de;
  container.innerHTML = lines.map(line => `
    <div class="transcript-line" onclick="seekVideo('${line.time}')" role="button" tabindex="0">
      <span class="transcript-time">${line.time}</span>
      <span class="transcript-text">${line.text}</span>
    </div>
  `).join('');
}

/**
 * Seek HTML5 video to given MM:SS timestamp
 */
function seekVideo(timeStr) {
  const parts = timeStr.split(':');
  if (parts.length === 2) {
    const seconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
    const videoEl = document.getElementById('localVideoPlayer');
    if (videoEl && videoEl.style.display !== 'none') {
      videoEl.currentTime = seconds;
      videoEl.play();
    }
  }
}

/**
 * Switch Global Site Interface Language
 */
function switchLanguage(langCode) {
  currentLang = langCode;

  // Update top language buttons
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => {
    if (btn.dataset.lang === langCode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const t = UI_TRANSLATIONS[langCode];
  if (!t) return;

  const heroTitleEl = document.getElementById('heroTitleText');
  const heroSubEl = document.getElementById('heroSubtitleText');
  const greetingQuoteEl = document.getElementById('greetingQuoteText');
  const inletsTitleEl = document.getElementById('inletsSectionTitle');
  const inletsDescEl = document.getElementById('inletsSectionDesc');
  const videosTitleEl = document.getElementById('videosSectionTitle');
  const videosDescEl = document.getElementById('videosSectionDesc');

  if (heroTitleEl) heroTitleEl.innerHTML = `${t.heroTitle.split(' ')[0]} <span class="highlight">${t.heroTitle.split(' ').slice(1).join(' ')}</span>`;
  if (heroSubEl) heroSubEl.textContent = t.heroSub;
  if (greetingQuoteEl) greetingQuoteEl.textContent = t.greetingQuote;
  if (inletsTitleEl) inletsTitleEl.textContent = t.inletsTitle;
  if (inletsDescEl) inletsDescEl.textContent = t.inletsDesc;
  if (videosTitleEl) videosTitleEl.textContent = t.videosTitle;
  if (videosDescEl) videosDescEl.textContent = t.videosDesc;

  // Also synchronize subtitles with site language
  switchSubtitle(langCode);
}

/**
 * Initialize on DOM Content Loaded
 */
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mainNav = document.getElementById('mainNav');
  if (menuBtn && mainNav) {
    menuBtn.addEventListener('click', () => {
      mainNav.classList.toggle('is-open');
    });
  }

  // Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('is-scrolled');
    } else {
      header?.classList.remove('is-scrolled');
    }
  });

  // Close modal on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeInletModal();
    }
  });

  // Close modal on background click
  const modalBackdrop = document.getElementById('inletModal');
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeInletModal();
    }
  });

  // Initial render of transcript
  renderTranscript('de');
});

// Export functions to global scope for HTML inline handlers
window.openInletModal = openInletModal;
window.closeInletModal = closeInletModal;
window.switchVideoTab = switchVideoTab;
window.switchSubtitle = switchSubtitle;
window.switchLanguage = switchLanguage;
window.seekVideo = seekVideo;
