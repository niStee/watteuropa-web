// @ts-check
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

// Video catalog & embeds (4 Official YouTube Videos)
const VIDEO_CATALOG = {
  day3: {
    title: 'Tag 3: Abschlusskundgebung & Erläuterung Kunstwerk (Wegberg)',
    desc: 'Vollständige Kundgebung durch Wegberg mit Erläuterung der „Hohen Rösser“ und dem Europäischen Gruß.',
    src: 'https://www.youtube-nocookie.com/embed/A7CWUPn2YEY',
    poster: 'assets/img/video-posters/day3.jpg'
  },
  tv: {
    title: 'TV Version (Framebuilder Media Edit • 2:30 min)',
    desc: 'Kompakte Fernseh- und Nachrichtenversion der Aktion für Rundfunk und soziale Medien.',
    src: 'https://www.youtube-nocookie.com/embed/wrHgyR6Z_-I',
    poster: 'assets/img/video-posters/tv.jpg'
  },
  day1: {
    title: 'Tag 1: Political Evolution & Entstehungsgeschichte',
    desc: 'Von der Französischen Revolution bis GRÜN und VIOLETT als moderne europäische Leitkultur.',
    src: 'https://www.youtube-nocookie.com/embed/bjQgVwqIg44',
    poster: 'assets/img/video-posters/day1.jpg'
  },
  day2: {
    title: 'Tag 2: Schengen², Europäische Netze & Zukunft',
    desc: 'Gemeinschaftliche Infrastruktur, europäische Bahnsysteme und einheitlicher Grenzschutz.',
    src: 'https://www.youtube-nocookie.com/embed/dTHp3CdKcmM',
    poster: 'assets/img/video-posters/day2.jpg'
  }
};

let isVideoPlayerActive = false;
let currentVideoTab = 'day3';

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

// UI Translations dictionary covering entire page (DE, EN, FR, NL, CZ)
const UI_TRANSLATIONS = {
  de: {
    nav_nft: 'NFT 2026',
    nav_inlets: 'Inlets (5 Sprachen)',
    nav_gen: '🎨 Slogan Generator',
    nav_videos: 'Videos',
    nav_about: 'Über WATT & HER2a',
    nav_participate: 'Mitmachen',
    nav_contact: 'Kontakt',
    nav_print_btn: 'Inlets drucken',

    heroTitle: 'NATIONALFREIE TAGE 2026',
    heroSub: 'Raus aus den nationalen Heiligkeitsblasen – hinein in eine grenzenlose europäische und weltweite Gemeinschaft.',
    heroDate: '1. bis 3. Juni 2026 • Wegberg / Europaweit',
    greetingTitle: 'Europäischer Gruß',
    greetingQuote: '«Runter mit den nationalen Eitelkeiten und Respekt, Respekt, Respekt vor dir!»',

    gen_badge: 'Digitales Werkzeug',
    gen_title: 'WATT Slogan & Circular Inlet Generator',
    gen_desc: 'Erstellen Sie eigene kreisrunde WATT-Inlets in allen 5 Sprachen (DE, EN, FR, NL, CZ). Mit Live-Vorschau, Bogentext, Vektor-SVG, hochauflösendem 300 DPI PNG-Export und fertigen A4-Druckbögen zum Ausschneiden.',
    gen_btn: '🎨 Generator starten',

    inletsBadge: 'Offizielle Exponate',
    inletsTitle: 'Die 5 Sprach-Inlets',
    inletsDesc: 'Entdecken Sie die kreisrunden Exponat-Inlets in Deutsch, Englisch, Französisch, Niederländisch und Tschechisch. Zum Ansehen, Teilen und als druckfertige PDF-Vorlagen.',

    videosBadge: 'Demonstration & Kundgebung',
    videosTitle: 'Video-Dokumentation & Demonstration',
    videosDesc: 'Verfolgen Sie die Abschlusskundgebung in Wegberg, die Ansprachen von Josef Tieber und die Vorführung des kinetischen Kunstwerks „Hohe Europäische Rösser“.',
    videoTabDay3: 'Tag 3: Abschlusskundgebung Wegberg',
    videoTabTv: 'TV Version (2:30 min)',
    videoTabDay1: 'Tag 1: Political Evolution',
    videoTabDay2: 'Tag 2: Schengen² & Zukunft',
    transcriptTitle: 'Interaktives Rede-Transkript (Klicken zum Anspringen)',
    transcriptSub: 'Synchronisiert in 5 Sprachen',

    aboutBadge: 'Konzept & Philosophie',
    aboutTitle: 'Über WATT & das Kunstwerk „Hohe Rösser“',
    aboutDesc: 'Wie aus der europäischen Finanzkrise 2014 eine künstlerische Bewegung für mehr Gemeinschaftlichkeit und gegen nationalistische Abschottung entstand.',
    her2aTitle: 'Kinetisches Exponat „Hohe Europäische Rösser“ (HER2a)',
    her2aP1: 'Die Idee zum Kunstwerk entstand 2014. Josef Tieber beobachtete, wie sich europäische Nationalstaaten zunehmend von der gemeinsamen Idee abwandten und auf „hohe Rösser“ stiegen.',
    her2aF1Title: '28 Europäische Nationalstaaten',
    her2aF1Desc: 'Kinetisch montiert auf Edelstahlblech-Fahrwerken, die um eine starre Mittelachse rotieren.',
    her2aF2Title: 'Starre Mittelachse & Erdmittelpunkt',
    her2aF2Desc: 'Weist symbolisch auf unumstößliche Weltordnung, Völkerrecht, Europarecht und gemeinsame Menschenwürde hin.',
    her2aF3Title: 'Runter von den hohen Rössern',
    her2aF3Desc: 'Je weiter die Staaten herabsteigen und sich dem Zentrum nähern, desto kraftvoller und stabiler können sie gemeinsam ziehen.',
    her2aP2: 'Statt die Geschichte rückwärts zu drehen, soll Europa kraftvoll angeschoben werden – hin zu gemeinsamen Institutionen und echter europäischer Souveränität.',
    whyTitle: 'Warum Nationalfreie Tage?',
    whyP1: '„Wenn man die Liste der Nationalfeiertage durchsieht, gibt es unzählige Feiertage für Unabhängigkeit und heroische Nation. Diese Denkstrukturen aus dem 19. Jahrhundert sind heute überlebt.“',
    whyP2: 'Die Nationalfreien Tage schaffen einen bewussten Raum im Kalender, um sich von nationaler Denke und Heiligkeitsblasen frei zu machen, ohne sich gegenseitig zu dämonisieren.',
    whyQuote: '„Jeder einzelne Mensch ist ungeheuer wertvoll und in seiner Würde unantastbar. Wir stehen zum Frieden – für alle Menschen weltweit.“',

    polyBadge: 'Historisches Exponat',
    polyTitle: 'Political Evolution',
    polyDesc: 'Von der Französischen Revolution über liberale und ökologische Bewegungen (GRÜN) bis hin zu VIOLETT als zeitgemäße, übernationale europäische Leitkultur des 21. Jahrhunderts.',
    schengenBadge: 'Infrastruktur & Recht',
    schengenTitle: 'Schengen² & Gemeinsame Netze',
    schengenDesc: 'Ein einziger, verlässlicher EU-Außengrenzschutz kombiniert mit nahtloser Koordination: vom gesamteuropäischen Bahn-Ticketing bis zum gemeinsamen Schutz universeller Grundrechte.',

    partBadge: 'Jeder kann mitmachen',
    partTitle: 'Aktiv werden für die Nationalfreien Tage',
    partDesc: 'Das Projekt lebt vom Mitmachen. Werden Sie Teil der Bewegung und setzen Sie ein sichtbares Zeichen für mehr Zusammenhalt.',
    act1Title: '1. Inlets drucken & teilen',
    act1Desc: 'Laden Sie die 5 Sprach-Inlets als hochwertige PDF-Druckvorlagen herunter und hängen Sie sie in Ihrem Schaufenster, Büro oder Verein auf.',
    act1Btn: 'Zu den Downloads',
    act2Title: '2. Europäischen Gruß leben',
    act2Desc: '„Runter mit den nationalen Eitelkeiten und Respekt vor dir!“ Verwenden Sie den Gruß als Zeichen der Offenheit und Verbundenheit.',
    act2Btn: 'Mehr zum Gruß',
    act3Title: '3. Lokale Aktionen starten',
    act3Desc: 'Veranstalten Sie eigene Diskussionsabende, Kunstaktionen oder Treffen zur Überwindung nationaler Vorurteile in Ihrer Stadt.',
    act3Btn: 'Kontakt aufnehmen',
    act4Title: '4. Prag 2027 vorbereiten',
    act4Desc: 'Merken Sie sich die 4. Ausgabe vor: 1. bis 4. Juni 2027 in Prag (4 Dny Bez Národnosti) – ein großes internationales Gemeinschaftsevent.',
    act4Btn: 'Ausblick 2027',

    pragueBadge: 'Ausblick 2027',
    pragueTitle: '4. Nationalfreie Tage in Prag',
    pragueDesc: 'Nach dem erfolgreichen 3-Tage-Event 2026 in Wegberg weitet sich das Projekt aus: 4 Tage vom 1. bis 4. Juni 2027 in Prag. Gemeinsam mit europäischen Partnern für eine grenzenlose Zukunft.',
    pragueBtn: '📄 Tschechisches Inlet (PDF) herunterladen',
    pragueCardTitle: '4. DNY BEZ NÁRODNOSTI',
    pragueCardDate: '1. - 4. ČERVNA 2027 • PRAHA',
    pragueCardSub: 'Celoevropsky & Celosvětově • Watt European Exponat 201 CZ 4',
    pragueViewBtn: 'Inlet ansehen',

    btnPreview: 'Vorschau',
    btnPrint: 'PDF Druck',

    stat1Num: '3 Tage',
    stat1Lbl: 'Nationalfrei denken',
    stat2Num: '5 Sprachen',
    stat2Lbl: 'DE • EN • FR • NL • CZ',
    stat3Num: '28 Staaten',
    stat3Lbl: 'Im Exponat HER2a',
    stat4Num: '2027',
    stat4Lbl: 'Prag (4 Tage)',
    heroZoom: '🔍 Klicken zum Vergrößern (Exponat 201 DE 3)',
    modalDownloadBtn: '📥 Druckfertiges PDF (A4) herunterladen',
    modalCloseBtn: 'Schließen',

    footerTagline: 'Future for Europe • Kunst- und Gesellschaftsprojekt für die Überwindung nationaler Grenzen und für weltweite Solidarität.',
    footerNavTitle: 'Navigation',
    footerContactTitle: 'Impressum & Kontakt',
    footerBottomCopy: '© 2026 WATT European Art • Josef Tieber • watteuropa.org'
  },
  en: {
    nav_nft: 'NFT 2026',
    nav_inlets: 'Inlets (5 Languages)',
    nav_gen: '🎨 Slogan Generator',
    nav_videos: 'Videos',
    nav_about: 'About WATT & HER2a',
    nav_participate: 'Participate',
    nav_contact: 'Contact',
    nav_print_btn: 'Print Inlets',

    heroTitle: 'NATIONAL FREE DAYS 2026',
    heroSub: 'Breaking free from nationalist bubbles – stepping forward into European and global unity.',
    heroDate: '1 - 3 June 2026 • Wegberg / Europe-Wide',
    greetingTitle: 'European Greeting',
    greetingQuote: '“Down with national vanity – and respect, respect, respect for you!”',

    gen_badge: 'Digital Tool',
    gen_title: 'WATT Slogan & Circular Inlet Generator',
    gen_desc: 'Create custom circular WATT badge inlets in all 5 languages (DE, EN, FR, NL, CZ). With live preview, curved text, vector SVG, 300 DPI PNG export, and A4 print sheets.',
    gen_btn: '🎨 Launch Generator',

    inletsBadge: 'Official Exhibits',
    inletsTitle: 'The 5 Language Inlets',
    inletsDesc: 'Explore the circular exhibit inlets in German, English, French, Dutch, and Czech. View, share, and download print-ready PDFs.',

    videosBadge: 'Demonstration & Rally',
    videosTitle: 'Video Showcase & Documentation',
    videosDesc: 'Watch the closing rally in Wegberg, speeches by Josef Tieber, and the demonstration of the kinetic artwork “High European Horses”.',
    videoTabDay3: 'Day 3: Closing Rally Wegberg',
    videoTabTv: 'TV Version (2:30 min)',
    videoTabDay1: 'Day 1: Political Evolution',
    videoTabDay2: 'Day 2: Schengen² & Future',
    transcriptTitle: 'Interactive Speech Transcript (Click to seek)',
    transcriptSub: 'Synchronized in 5 languages',

    aboutBadge: 'Concept & Philosophy',
    aboutTitle: 'About WATT & the Artwork “High Horses”',
    aboutDesc: 'How the 2014 European financial crisis gave rise to an artistic movement for greater solidarity and against nationalist isolation.',
    her2aTitle: 'Kinetic Installation “High European Horses” (HER2a)',
    her2aP1: 'The concept originated in 2014. Josef Tieber observed European nation-states drifting away from shared unity, mounting their metaphorical high horses.',
    her2aF1Title: '28 European Nation-States',
    her2aF1Desc: 'Kinetically mounted on stainless steel chassis rotating around a rigid central axis.',
    her2aF2Title: 'Rigid Central Axis & Earth Center',
    her2aF2Desc: 'Symbolically points toward immutable global order, international law, European treaties, and human dignity.',
    her2aF3Title: 'Dismounting the High Horses',
    her2aF3Desc: 'The more states descend and approach the center, the more powerfully and stably they pull together.',
    her2aP2: 'Instead of turning back the clock, Europe must be propelled forward toward shared democratic institutions and genuine sovereignty.',
    whyTitle: 'Why Nation-Free Days?',
    whyP1: '“Looking through the calendar of national holidays, there are countless days celebrating independence and nationalist heroism. These 19th-century mindsets are obsolete today.”',
    whyP2: 'Nation-Free Days create a conscious pause in the calendar to free oneself from national bubbles and dogma, without demonizing one another.',
    whyQuote: '“Every single human being is immensely valuable and inviolable in dignity. We stand for peace — for all people worldwide.”',

    polyBadge: 'Historical Exhibit',
    polyTitle: 'Political Evolution',
    polyDesc: 'From the French Revolution through liberal and ecological movements (GREEN) to VIOLET as a contemporary, supranational European guiding culture.',
    schengenBadge: 'Infrastructure & Law',
    schengenTitle: 'Schengen² & Shared Networks',
    schengenDesc: 'A single, reliable EU external border protection combined with seamless integration: from pan-European train ticketing to universal fundamental rights protection.',

    partBadge: 'Everyone Can Join',
    partTitle: 'Get Active for Nation-Free Days',
    partDesc: 'This project thrives on participation. Join the movement and make a visible statement for unity.',
    act1Title: '1. Print & Share Inlets',
    act1Desc: 'Download the 5 language inlets as high-res print PDFs and display them in your window, office, or community space.',
    act1Btn: 'View Downloads',
    act2Title: '2. Practice the European Greeting',
    act2Desc: '“Down with national vanity – and respect for you!” Use the greeting as an expression of openness and connection.',
    act2Btn: 'Learn More',
    act3Title: '3. Launch Local Events',
    act3Desc: 'Host discussion evenings, art performances, or meetings to dismantle nationalist prejudices in your hometown.',
    act3Btn: 'Get in Touch',
    act4Title: '4. Prepare for Prague 2027',
    act4Desc: 'Save the date for the 4th edition: June 1–4, 2027 in Prague (4 Dny Bez Národnosti) — a major international community festival.',
    act4Btn: 'Outlook 2027',

    pragueBadge: 'Outlook 2027',
    pragueTitle: '4th Nation-Free Days in Prague',
    pragueDesc: 'Following the 2026 3-day event in Wegberg, the initiative expands: 4 days from June 1–4, 2027 in Prague with European partners for a borderless future.',
    pragueBtn: '📄 Download Czech Inlet (PDF)',
    pragueCardTitle: '4. DNY BEZ NÁRODNOSTI',
    pragueCardDate: '1. - 4. ČERVNA 2027 • PRAHA',
    pragueCardSub: 'Celoevropsky & Celosvětově • Watt European Exponat 201 CZ 4',
    pragueViewBtn: 'View Inlet',

    btnPreview: 'Preview',
    btnPrint: 'PDF Print',

    stat1Num: '3 Days',
    stat1Lbl: 'Thinking nation-free',
    stat2Num: '5 Languages',
    stat2Lbl: 'DE • EN • FR • NL • CZ',
    stat3Num: '28 States',
    stat3Lbl: 'In Exhibit HER2a',
    stat4Num: '2027',
    stat4Lbl: 'Prague (4 Days)',
    heroZoom: '🔍 Click to zoom in (Exhibit 201 EN 3)',
    modalDownloadBtn: '📥 Download print-ready PDF (A4)',
    modalCloseBtn: 'Close',

    footerTagline: 'Future for Europe • Art and social project dedicated to transcending national borders and fostering worldwide solidarity.',
    footerNavTitle: 'Navigation',
    footerContactTitle: 'Legal & Contact',
    footerBottomCopy: '© 2026 WATT European Art • Josef Tieber • watteuropa.org'
  },
  fr: {
    nav_nft: 'NFT 2026',
    nav_inlets: 'Inlets (5 langues)',
    nav_gen: '🎨 Générateur de Slogans',
    nav_videos: 'Vidéos',
    nav_about: 'À propos de WATT & HER2a',
    nav_participate: 'Participer',
    nav_contact: 'Contact',
    nav_print_btn: 'Imprimer Inlets',

    heroTitle: 'JOURNÉES SANS FRONTIÈRES 2026',
    heroSub: 'Dépassons les bulles nationalistes pour construire une fraternité européenne et mondiale.',
    heroDate: '1 - 3 Juin 2026 • Wegberg / Dans toute l’Europe',
    greetingTitle: 'Salut Européen',
    greetingQuote: '«À bas les vanités nationales – et respect, respect, respect pour toi !»',

    gen_badge: 'Outil Numérique',
    gen_title: 'Générateur de Slogans & Badges WATT',
    gen_desc: 'Créez vos propres visuels circulaires WATT en 5 langues. Avec aperçu en direct, texte incurvé, export SVG vectoriel, PNG 300 DPI et planches A4 à découper.',
    gen_btn: '🎨 Ouvrir le générateur',

    inletsBadge: 'Expositions Officielles',
    inletsTitle: 'Les 5 Inlets Linguistiques',
    inletsDesc: 'Découvrez les visuels circulaires en allemand, anglais, français, néerlandais et tchèque. Prêts pour affichage et impression PDF.',

    videosBadge: 'Manifestation & Rassemblement',
    videosTitle: 'Documentaire Vidéo & Manifestation',
    videosDesc: 'Découvrez la 3e édition à Wegberg, les prises de parole de Josef Tieber et la sculpture cinétique «Grands Chevaux Européens».',
    videoTabDay3: 'Jour 3: Rassemblement Wegberg',
    videoTabTv: 'Version TV (2:30 min)',
    videoTabDay1: 'Jour 1: Political Evolution',
    videoTabDay2: 'Jour 2: Schengen² & Avenir',
    transcriptTitle: 'Transcription Interactive du Discours',
    transcriptSub: 'Synchronisée en 5 langues',

    aboutBadge: 'Concept & Philosophie',
    aboutTitle: 'À propos de WATT et de l’œuvre «Grands Chevaux»',
    aboutDesc: 'Comment la crise financière européenne de 2014 a fait naître un mouvement artistique pour la solidarité et contre le repli nationaliste.',
    her2aTitle: 'Sculpture Cinétique «Grands Chevaux Européens» (HER2a)',
    her2aP1: 'L’idée est née en 2014. Josef Tieber a constaté le repli des États-nations européens sur leurs grands chevaux au détriment de l’unité.',
    her2aF1Title: '28 États-Nations Européens',
    her2aF1Desc: 'Montés de manière cinétique sur des châssis en acier inoxydable tournant autour d’un axe central rigide.',
    her2aF2Title: 'Axe Central Rigide & Centre Terrestre',
    her2aF2Desc: 'Rappelle symboliquement l’ordre mondial immuable, le droit international, le droit européen et la dignité humaine.',
    her2aF3Title: 'Descendre de ses Grands Chevaux',
    her2aF3Desc: 'Plus les États descendent et s’approchent du centre, plus ils avancent ensemble avec force et stabilité.',
    her2aP2: 'Au lieu de revenir en arrière, l’Europe doit être propulsée vers l’avant, vers des institutions partagées et une véritable souveraineté.',
    whyTitle: 'Pourquoi des Journées sans frontières nationales ?',
    whyP1: '«Quand on regarde les fêtes nationales, il y a d’innombrables jours célébrant l’indépendance et le nationalisme guerrier. Ces schémas du XIXe siècle sont aujourd’hui dépassés.»',
    whyP2: 'Les Journées créent un espace conscient dans l’année pour s’affranchir des dogmes nationaux, dans un esprit de fraternité sans exclusion.',
    whyQuote: '«Chaque être humain a une valeur immense et sa dignité est inviolable. Nous défendons la paix — pour tous les êtres humains dans le monde.»',

    polyBadge: 'Exposition Historique',
    polyTitle: 'Political Evolution',
    polyDesc: 'De la Révolution française aux mouvements écologiques (VERT) jusqu’au VIOLET comme culture directrice européenne supranationale du 21e siècle.',
    schengenBadge: 'Infrastructure & Droit',
    schengenTitle: 'Schengen² & Réseaux Communs',
    schengenDesc: 'Une protection unique et fiable des frontières extérieures de l’UE combinée à une intégration harmonieuse : du train européen aux droits fondamentaux.',

    partBadge: 'Tout le monde peut participer',
    partTitle: 'Agir pour les Journées sans frontières',
    partDesc: 'Ce projet vit grâce à votre participation. Rejoignez le mouvement pour faire vivre la solidarité européenne et mondiale.',
    act1Title: '1. Imprimer & Partager',
    act1Desc: 'Téléchargez les visuels en PDF haute résolution et affichez-les dans vos vitrines, bureaux ou associations.',
    act1Btn: 'Voir les téléchargements',
    act2Title: '2. Adopter le Salut Européen',
    act2Desc: '«À bas les vanités nationales et respect pour toi !» Utilisez ce salut comme un symbole d’ouverture et de fraternité.',
    act2Btn: 'En savoir plus',
    act3Title: '3. Organiser des Actions Locales',
    act3Desc: 'Organisez des soirées d’échange, des interventions artistiques ou des rencontres citoyennes dans votre ville.',
    act3Btn: 'Nous contacter',
    act4Title: '4. Préparer Prague 2027',
    act4Desc: 'Notez la date de la 4e édition : 1er au 4 juin 2027 à Prague (4 Dny Bez Národnosti) — un grand rassemblement européen.',
    act4Btn: 'Perspectives 2027',

    pragueBadge: 'Perspectives 2027',
    pragueTitle: '4es Journées sans frontières à Prague',
    pragueDesc: 'Après l’édition 2026 à Wegberg, le projet s’étend : 4 jours du 1er au 4 juin 2027 à Prague avec des partenaires européens pour un avenir sans frontières.',
    pragueBtn: '📄 Télécharger l’inlet tchèque (PDF)',
    pragueCardTitle: '4. DNY BEZ NÁRODNOSTI',
    pragueCardDate: '1. - 4. ČERVNA 2027 • PRAHA',
    pragueCardSub: 'Celoevropsky & Celosvětově • Watt European Exponat 201 CZ 4',
    pragueViewBtn: 'Voir l’inlet',

    btnPreview: 'Aperçu',
    btnPrint: 'PDF Imprimer',

    stat1Num: '3 Jours',
    stat1Lbl: 'Esprit sans frontières',
    stat2Num: '5 Langues',
    stat2Lbl: 'DE • EN • FR • NL • CZ',
    stat3Num: '28 États',
    stat3Lbl: 'Dans l’œuvre HER2a',
    stat4Num: '2027',
    stat4Lbl: 'Prague (4 Jours)',
    heroZoom: '🔍 Cliquez pour agrandir (Exposition 201 FR 3)',
    modalDownloadBtn: '📥 Télécharger le PDF prêt à imprimer (A4)',
    modalCloseBtn: 'Fermer',

    footerTagline: 'Future for Europe • Projet artistique et citoyen pour surmonter les frontières nationales et bâtir une solidarité mondiale.',
    footerNavTitle: 'Navigation',
    footerContactTitle: 'Mentions Légales & Contact',
    footerBottomCopy: '© 2026 WATT European Art • Josef Tieber • watteuropa.org'
  },
  nl: {
    nav_nft: 'NFT 2026',
    nav_inlets: 'Inlets (5 talen)',
    nav_gen: '🎨 Slogan Generator',
    nav_videos: 'Video\'s',
    nav_about: 'Over WATT & HER2a',
    nav_participate: 'Meedoen',
    nav_contact: 'Contact',
    nav_print_btn: 'Inlets printen',

    heroTitle: 'NATIONAALVRIJE DAGEN 2026',
    heroSub: 'Weg uit de nationale bubbels – naar een grenzeloze Europese en wereldwijde gemeenschap.',
    heroDate: '1 - 3 Juni 2026 • Wegberg / Europa-Breed',
    greetingTitle: 'Europese Groet',
    greetingQuote: '„Weg met de nationale ijdelheden – en respect, respect, respect voor jou!”',

    gen_badge: 'Digitaal Instrument',
    gen_title: 'WATT Slogan & Circular Inlet Generator',
    gen_desc: 'Maak uw eigen ronde WATT-inlets in alle 5 talen. Met live preview, gebogen tekst, vector-SVG, 300 DPI PNG-export en A4-printvellen om uit te knippen.',
    gen_btn: '🎨 Start Generator',

    inletsBadge: 'Officiële Exponaten',
    inletsTitle: 'De 5 Taal-Inlets',
    inletsDesc: 'Ontdek de cirkelvormige expositie-inlets in het Duits, Engels, Frans, Nederlands en Tsjechisch. Om te bekijken, te delen en af te drukken.',

    videosBadge: 'Demonstratie & Manifestatie',
    videosTitle: 'Video Showcase & Documentatie',
    videosDesc: 'Bekijk de slotmanifestatie in Wegberg, toespraken van Josef Tieber en de demonstratie van het kinetische kunstwerk „Hoge Europese Paarden”.',
    videoTabDay3: 'Dag 3: Slotmanifestatie Wegberg',
    videoTabTv: 'TV Versie (2:30 min)',
    videoTabDay1: 'Dag 1: Political Evolution',
    videoTabDay2: 'Dag 2: Schengen² & Toekomst',
    transcriptTitle: 'Interactief Spraaktranscript (Klik om te springen)',
    transcriptSub: 'Gesynchroniseerd in 5 talen',

    aboutBadge: 'Concept & Filosofie',
    aboutTitle: 'Over WATT & het kunstwerk „Hoge Paarden”',
    aboutDesc: 'Hoe uit de Europese financiële crisis van 2014 een artistieke beweging voor meer saamhorigheid en tegen nationalistische isolatie ontstond.',
    her2aTitle: 'Kinetisch Kunstwerk „Hoge Europese Paarden” (HER2a)',
    her2aP1: 'Het idee ontstond in 2014. Josef Tieber zag hoe Europese natiestaten zich steeds meer afkeerden van het gezamenlijke ideaal en op hun hoge paard klommen.',
    her2aF1Title: '28 Europese Natiestaten',
    her2aF1Desc: 'Kinetisch gemonteerd op roestvrijstalen chassis die rond een vaste centrale as draaien.',
    her2aF2Title: 'Vaste Centrale As & Aardmiddelpunt',
    her2aF2Desc: 'Verwijst symbolisch naar onwankelbare wereldorde, internationaal recht, Europees recht en universele menselijke waardigheid.',
    her2aF3Title: 'Afkomen van de Hoge Paarden',
    her2aF3Desc: 'Hoe verder de staten afdalen en het centrum naderen, des te krachtiger en stabieler kunnen ze samen trekken.',
    her2aP2: 'In plaats van de klok terug te draaien, moet Europa krachtig vooruit worden gestuwd naar gezamenlijke instellingen en soevereiniteit.',
    whyTitle: 'Waarom Nationaalvrije Dagen?',
    whyP1: '„Als je de lijst met nationale feestdagen bekijkt, zijn er talloze dagen voor onafhankelijkheid en nationalistische heldenmoed. Deze denkpatronen uit de 19e eeuw zijn achterhaald.”',
    whyP2: 'De Nationaalvrije Dagen creëren een bewust moment om afstand te nemen van nationalistische dogma\'s en samenhorigheid te vieren.',
    whyQuote: '„Ieder mens is immens waardevol en onaantastbaar in zijn waardigheid. Wij staan voor vrede — voor alle mensen wereldwijd.”',

    polyBadge: 'Historisch Exponaat',
    polyTitle: 'Political Evolution',
    polyDesc: 'Van de Franse Revolutie via liberale en ecologische bewegingen (GROEN) naar PAARS/VIOLET als eigentijdse, supranationale Europese leidcultuur.',
    schengenBadge: 'Infrastructuur & Recht',
    schengenTitle: 'Schengen² & Gezamenlijke Netwerken',
    schengenDesc: 'Eén betrouwbare gezamenlijke EU-buitengrensbewaking gecombineerd met naadloze integratie: van pan-Europese treintickets tot de bescherming van grondrechten.',

    partBadge: 'Iedereen kan meedoen',
    partTitle: 'Kom in actie voor de Nationaalvrije Dagen',
    partDesc: 'Het project leeft dankzij uw deelname. Word deel van de beweging en geef een krachtig signaal voor verbondenheid.',
    act1Title: '1. Inlets Printen & Delen',
    act1Desc: 'Download de 5 taal-inlets als hoogwaardige PDF-printbestanden en hang ze op in uw etalage of kantoor.',
    act1Btn: 'Naar downloads',
    act2Title: '2. Leef de Europese Groet',
    act2Desc: '„Weg met nationale ijdelheid en respect voor jou!” Gebruik de groet als teken van openheid en verbondenheid.',
    act2Btn: 'Meer over de groet',
    act3Title: '3. Start Lokale Acties',
    act3Desc: 'Organiseer discussieavonden, kunstacties of bijeenkomsten om nationale vooroordelen in uw stad te doorbreken.',
    act3Btn: 'Contact opnemen',
    act4Title: '4. Bereid Praag 2027 voor',
    act4Desc: 'Noteer alvast de 4e editie: 1 t/m 4 juni 2027 in Praag (4 Dny Bez Národnosti) — een groot internationaal evenement.',
    act4Btn: 'Vooruitblik 2027',

    pragueBadge: 'Vooruitblik 2027',
    pragueTitle: '4e Nationaalvrije Dagen in Praag',
    pragueDesc: 'Na de 3-daagse editie van 2026 in Wegberg breidt het project uit: 4 dagen van 1 t/m 4 juni 2027 in Praag met Europese partners voor een grenzeloze toekomst.',
    pragueBtn: '📄 Download Tsjechische Inlet (PDF)',
    pragueCardTitle: '4. DNY BEZ NÁRODNOSTI',
    pragueCardDate: '1. - 4. ČERVNA 2027 • PRAHA',
    pragueCardSub: 'Celoevropsky & Celosvětově • Watt European Exponat 201 CZ 4',
    pragueViewBtn: 'Inlet bekijken',

    btnPreview: 'Voorbeeld',
    btnPrint: 'PDF Afdrukken',

    stat1Num: '3 Dagen',
    stat1Lbl: 'Nationaalvrij denken',
    stat2Num: '5 Talen',
    stat2Lbl: 'DE • EN • FR • NL • CZ',
    stat3Num: '28 Staten',
    stat3Lbl: 'In het kunstwerk HER2a',
    stat4Num: '2027',
    stat4Lbl: 'Praag (4 Dagen)',
    heroZoom: '🔍 Klik om te vergroten (Expositie 201 NL 3)',
    modalDownloadBtn: '📥 Download kant-en-klaar PDF (A4)',
    modalCloseBtn: 'Sluiten',

    footerTagline: 'Future for Europe • Kunst- en maatschappelijk project voor het overwinnen van nationale grenzen en wereldwijde solidariteit.',
    footerNavTitle: 'Navigatie',
    footerContactTitle: 'Colofon & Contact',
    footerBottomCopy: '© 2026 WATT European Art • Josef Tieber • watteuropa.org'
  },
  cz: {
    nav_nft: 'NFT 2026',
    nav_inlets: 'Inlety (5 jazyků)',
    nav_gen: '🎨 Generátor Sloganů',
    nav_videos: 'Videa',
    nav_about: 'O WATT a HER2a',
    nav_participate: 'Zapojit se',
    nav_contact: 'Kontakt',
    nav_print_btn: 'Tisknout inlety',

    heroTitle: 'DNY BEZ NÁRODNOSTI 2026',
    heroSub: 'Vymanit se z národních bublin – vstříc evropské a celosvětové pospolitosti.',
    heroDate: '1. - 3. Června 2026 • Wegberg / Celoevropsky',
    greetingTitle: 'Evropský Pozdrav',
    greetingQuote: '„Pryč s národní pýchou – a respekt, respekt, respekt k tobě!“',

    gen_badge: 'Digitální Nástroj',
    gen_title: 'WATT Generátor Sloganů a Odznaků',
    gen_desc: 'Vytvářejte vlastní kruhové inlety WATT v 5 jazycích (DE, EN, FR, NL, CZ). S živým náhledem, zakřiveným textem, vektorovým SVG, exportem 300 DPI PNG a tiskovými archy A4.',
    gen_btn: '🎨 Spustit generátor',

    inletsBadge: 'Oficiální Exponáty',
    inletsTitle: '5 Jazykových Inletů',
    inletsDesc: 'Objevte kruhové exponáty v němčině, angličtině, francouzštině, nizozemštině a češtině. K prohlížení, sdílení i tisku.',

    videosBadge: 'Demonstrace a Shromáždění',
    videosTitle: 'Video Dokumentace & Shromáždění',
    videosDesc: 'Sledujte závěrečné shromáždění ve Wegbergu, projevy Josefa Tiebera a ukázku kinetického díla „Vysocí Evropští Koně“.',
    videoTabDay3: 'Den 3: Shromáždění Wegberg',
    videoTabTv: 'Verze TV (2:30 min)',
    videoTabDay1: 'Den 1: Political Evolution',
    videoTabDay2: 'Den 2: Schengen² a Budoucnost',
    transcriptTitle: 'Interaktivní Přepis Projevu',
    transcriptSub: 'Synchronizováno v 5 jazycích',

    aboutBadge: 'Koncept a Filozofie',
    aboutTitle: 'O WATT a uměleckém díle „Vysocí Koně“',
    aboutDesc: 'Jak z evropské finanční krize v roce 2014 vzniklo umělecké hnutí za větší pospolitost a proti nacionalistickému uzavírání.',
    her2aTitle: 'Kinetická Instalace „Vysocí Evropští Koně“ (HER2a)',
    her2aP1: 'Myšlenka vznikla v roce 2014. Josef Tieber sledoval, jak se evropské národní státy vzdalují společné jednotě a nasedají na své vysoké koně.',
    her2aF1Title: '28 Evropských Národních Států',
    her2aF1Desc: 'Kineticky upevněno na nerezových podvozcích rotujících kolem pevné středové osy.',
    her2aF2Title: 'Pevná Středová Osa & Střed Země',
    her2aF2Desc: 'Symbolizuje neměnný světový řád, mezinárodní právo, evropské právo a lidskou důstojnost.',
    her2aF3Title: 'Sesednout z Vysokých Koní',
    her2aF3Desc: 'Čím více státy sestoupí a přiblíží se ke středu, tím silněji a stabilněji táhnou za jeden provaz.',
    her2aP2: 'Místo vracení dějin zpět musíme Evropu posunout kupředu ke společným institucím a skutečné suverenitě.',
    whyTitle: 'Proč Dny bez národnosti?',
    whyP1: '„Při pohledu na kalendář státních svátků vidíme nespočet dní oslavujících nezávislost a národní hrdinství. Tyto vzorce myšlení z 19. století jsou dnes překonané.“',
    whyP2: 'Dny bez národnosti vytvářejí vědomý prostor v kalendáři pro osvobození od národních dogmat a oslavu sounáležitosti bez vzájemného démonizování.',
    whyQuote: '„Každá lidská bytost je nesmírně cenná a její důstojnost je nedotknutelná. Stojíme za mírem – pro všechny lidi na celém světě.“',

    polyBadge: 'Historický Exponát',
    polyTitle: 'Political Evolution',
    polyDesc: 'Od Velké francouzské revoluce přes liberální a ekologická hnutí (ZELENÁ) až po FIALOVOU jako moderní, nadnárodní evropskou vůdčí kulturu 21. století.',
    schengenBadge: 'Infrastruktura & Právo',
    schengenTitle: 'Schengen² & Společné Sítě',
    schengenDesc: 'Jednotná, spolehlivá ochrana vnějších hranic EU spojená s bezproblémovou integrací: od celoevropského vlakového jízdného až po ochranu základních lidských práv.',

    partBadge: 'Každý se může zapojit',
    partTitle: 'Zapojte se do Dnů bez národnosti',
    partDesc: 'Projekt žije díky vaší účasti. Staňte se součástí hnutí a vyšlete jasný signál sounáležitosti.',
    act1Title: '1. Tisknout a Sdílet Inlety',
    act1Desc: 'Stáhněte si inlety v 5 jazycích ve vysoké kvalitě PDF a vystavte je ve své výloze, kanceláři nebo klubu.',
    act1Btn: 'Přejít ke stažení',
    act2Title: '2. Šířit Evropský Pozdrav',
    act2Desc: '„Pryč s národní pýchou a respekt k tobě!“ Používejte tento pozdrav jako symbol otevřenosti a propojení.',
    act2Btn: 'Více o pozdravu',
    act3Title: '3. Zahájit Místní Akce',
    act3Desc: 'Pořádejte diskusní večery, umělecké akce nebo setkání k překonání národních předsudků ve vašem městě.',
    act3Btn: 'Kontaktovat nás',
    act4Title: '4. Připravit Prahu 2027',
    act4Desc: 'Poznamenejte si 4. ročník: 1. až 4. června 2027 v Praze (4 Dny Bez Národnosti) – velké mezinárodní setkání.',
    act4Btn: 'Výhled 2027',

    pragueBadge: 'Výhled 2027',
    pragueTitle: '4. Dny bez národnosti v Praze',
    pragueDesc: 'Po úspěšné 3denní akci v roce 2026 ve Wegbergu se projekt rozšiřuje: 4 dny od 1. do 4. června 2027 v Praze společně s evropskými partnery pro budoucnost bez hranic.',
    pragueBtn: '📄 Stáhnout český inlet (PDF)',
    pragueCardTitle: '4. DNY BEZ NÁRODNOSTI',
    pragueCardDate: '1. - 4. ČERVNA 2027 • PRAHA',
    pragueCardSub: 'Celoevropsky & Celosvětově • Watt European Exponat 201 CZ 4',
    pragueViewBtn: 'Zobrazit inlet',

    btnPreview: 'Náhled',
    btnPrint: 'PDF Tisk',

    stat1Num: '3 Dny',
    stat1Lbl: 'Myslet bez národnosti',
    stat2Num: '5 Jazyků',
    stat2Lbl: 'DE • EN • FR • NL • CZ',
    stat3Num: '28 Států',
    stat3Lbl: 'V exponátu HER2a',
    stat4Num: '2027',
    stat4Lbl: 'Praha (4 Dny)',
    heroZoom: '🔍 Klikněte pro zvětšení (Exponát 201 CZ 4)',
    modalDownloadBtn: '📥 Stáhnout tiskové PDF (A4)',
    modalCloseBtn: 'Zavřít',

    footerTagline: 'Future for Europe • Umělecký a společenský projekt k překonání národních hranic a posílení celosvětové solidarity.',
    footerNavTitle: 'Navigace',
    footerContactTitle: 'Tiráž & Kontakt',
    footerBottomCopy: '© 2026 WATT European Art • Josef Tieber • watteuropa.org'
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
  const imgEl = /** @type {HTMLImageElement | null} */ (document.getElementById('modalInletImg'));
  const titleEl = document.getElementById('modalInletTitle');
  const tagEl = document.getElementById('modalInletTag');
  const descEl = document.getElementById('modalInletDesc');
  const expEl = document.getElementById('modalInletExponat');
  const pdfBtn = /** @type {HTMLAnchorElement | null} */ (document.getElementById('modalPdfDownloadBtn'));

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
 * Play Current Video (2-Click Facade Activation)
 */
function playCurrentVideo() {
  const videoData = VIDEO_CATALOG[currentVideoTab];
  if (!videoData) return;

  const wrap = document.getElementById('videoAspectWrap');
  if (!wrap) return;

  isVideoPlayerActive = true;
  wrap.innerHTML = `
    <iframe
      id="ytPlayerIframe"
      src="${videoData.src}?autoplay=1&rel=0"
      title="${videoData.title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen>
    </iframe>
  `;
}

/**
 * Switch Video Tab in Player Section (4 Official YouTube Videos)
 */
function switchVideoTab(tabKey) {
  const videoData = VIDEO_CATALOG[tabKey];
  if (!videoData) return;

  currentVideoTab = tabKey;

  // Update tab button styles
  const buttons = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('.video-tab-btn'));
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

  // Update video display (Active iframe or Facade poster)
  if (isVideoPlayerActive) {
    const iframeEl = /** @type {HTMLIFrameElement | null} */ (document.getElementById('ytPlayerIframe'));
    if (iframeEl) {
      iframeEl.src = `${videoData.src}?autoplay=1&rel=0`;
      iframeEl.title = videoData.title;
    }
  } else {
    const facadeEl = document.getElementById('videoFacade');
    const facadeBtn = document.getElementById('btnPlayVideo');
    const facadeTitle = document.getElementById('facadeTitle');
    if (facadeEl) {
      facadeEl.style.backgroundImage = `url('${videoData.poster}')`;
    }
    if (facadeBtn) {
      facadeBtn.setAttribute('aria-label', `Video abspielen: ${videoData.title}`);
    }
    if (facadeTitle) {
      facadeTitle.textContent = videoData.title;
    }
  }
}

/**
 * Switch Subtitle Language for Local Video & Transcript
 */
function switchSubtitle(langCode) {
  currentSubLang = langCode;

  // Update subtitle buttons
  const subBtns = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('.sub-btn'));
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
  const videoEl = /** @type {HTMLVideoElement | null} */ (document.getElementById('localVideoPlayer'));
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
    const videoEl = /** @type {HTMLVideoElement | null} */ (document.getElementById('localVideoPlayer'));
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
  const langBtns = /** @type {NodeListOf<HTMLElement>} */ (document.querySelectorAll('.lang-btn'));
  langBtns.forEach(btn => {
    if (btn.dataset.lang === langCode) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const t = UI_TRANSLATIONS[langCode];
  if (!t) return;

  // Dynamically update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key]) {
      if (key === 'heroTitle') {
        const parts = t.heroTitle.split(' ');
        el.innerHTML = `${parts[0]} <span class="highlight">${parts.slice(1).join(' ')}</span>`;
      } else {
        el.textContent = t[key];
      }
    }
  });

  // Explicit ID fallbacks for dynamic elements
  const heroTitleEl = document.getElementById('heroTitleText');
  const heroSubEl = document.getElementById('heroSubtitleText');
  const greetingQuoteEl = document.getElementById('greetingQuoteText');
  const inletsTitleEl = document.getElementById('inletsSectionTitle');
  const inletsDescEl = document.getElementById('inletsSectionDesc');
  const videosTitleEl = document.getElementById('videosSectionTitle');
  const videosDescEl = document.getElementById('videosSectionDesc');

  if (heroTitleEl && t.heroTitle) heroTitleEl.innerHTML = `${t.heroTitle.split(' ')[0]} <span class="highlight">${t.heroTitle.split(' ').slice(1).join(' ')}</span>`;
  if (heroSubEl && t.heroSub) heroSubEl.textContent = t.heroSub;
  if (greetingQuoteEl && t.greetingQuote) greetingQuoteEl.textContent = t.greetingQuote;
  if (inletsTitleEl && t.inletsTitle) inletsTitleEl.textContent = t.inletsTitle;
  if (inletsDescEl && t.inletsDesc) inletsDescEl.textContent = t.inletsDesc;
  if (videosTitleEl && t.videosTitle) videosTitleEl.textContent = t.videosTitle;
  if (videosDescEl && t.videosDesc) videosDescEl.textContent = t.videosDesc;

  // Dynamically swap Hero inlet image & modal action to match selected language
  const heroInletImg = /** @type {HTMLImageElement | null} */ (document.getElementById('heroInletImg'));
  const heroInletStage = document.getElementById('heroInletStage');
  if (heroInletImg && heroInletStage) {
    const inletThumbMap = {
      de: 'assets/inlets/inlet-de-thumb.jpg',
      en: 'assets/inlets/inlet-en-thumb.jpg',
      fr: 'assets/inlets/inlet-fr-thumb.jpg',
      nl: 'assets/inlets/inlet-nl-thumb.jpg',
      cz: 'assets/inlets/inlet-cz-thumb.jpg'
    };
    const inletAltMap = {
      de: 'Nationalfreie Tage 2026 German Inlet 201 DE 3',
      en: 'National Free Days 2026 English Inlet 201 EN 3',
      fr: 'Fête Anationale 2026 French Inlet 201 FR 3',
      nl: 'Nationaalvrije Dagen 2026 Dutch Inlet 201 NL 3',
      cz: 'Dny Bez Národnosti 2026 Czech Inlet 201 CZ 4'
    };
    if (inletThumbMap[langCode]) {
      heroInletImg.src = inletThumbMap[langCode];
      heroInletImg.alt = inletAltMap[langCode] || '';
      heroInletStage.onclick = () => openInletModal(langCode);
    }
  }

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
      closeLegalModal();
    }
  });

  // Close modals on background click
  const modalBackdrop = document.getElementById('inletModal');
  modalBackdrop?.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeInletModal();
    }
  });

  const legalModalBackdrop = document.getElementById('legalModal');
  legalModalBackdrop?.addEventListener('click', (e) => {
    if (e.target === legalModalBackdrop) {
      closeLegalModal();
    }
  });

  // Initial render of transcript
  renderTranscript('de');
});

/**
 * Open Legal Modal (Impressum / Datenschutz)
 */
function openLegalModal(tab = 'impressum') {
  const modal = document.getElementById('legalModal');
  if (!modal) return;
  modal.style.display = 'flex';
  setTimeout(() => {
    modal.classList.add('is-active');
  }, 10);
  document.body.style.overflow = 'hidden';
  switchLegalTab(tab);
}

/**
 * Close Legal Modal
 */
function closeLegalModal() {
  const modal = document.getElementById('legalModal');
  if (!modal) return;
  modal.classList.remove('is-active');
  setTimeout(() => {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }, 250);
}

/**
 * Switch Legal Modal Tab (impressum / datenschutz)
 */
function switchLegalTab(tabName) {
  const tabImp = document.getElementById('legalTabImpressum');
  const tabDat = document.getElementById('legalTabDatenschutz');
  const paneImp = document.getElementById('legalContentImpressum');
  const paneDat = document.getElementById('legalContentDatenschutz');

  if (!tabImp || !tabDat || !paneImp || !paneDat) return;

  if (tabName === 'datenschutz') {
    tabImp.classList.remove('is-active');
    tabDat.classList.add('is-active');
    paneImp.style.display = 'none';
    paneDat.style.display = 'block';
  } else {
    tabImp.classList.add('is-active');
    tabDat.classList.remove('is-active');
    paneImp.style.display = 'block';
    paneDat.style.display = 'none';
  }
}

// Export functions to global scope for HTML inline handlers
window.openInletModal = openInletModal;
window.closeInletModal = closeInletModal;
window.openLegalModal = openLegalModal;
window.closeLegalModal = closeLegalModal;
window.switchLegalTab = switchLegalTab;
window.switchVideoTab = switchVideoTab;
window.switchSubtitle = switchSubtitle;
window.playCurrentVideo = playCurrentVideo;
window.switchLanguage = switchLanguage;
window.seekVideo = seekVideo;
