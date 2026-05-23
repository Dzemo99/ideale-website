// Daten für die Standortseite Frankfurt am Main (/standorte/frankfurt).
// FAQ aus dem Frankfurt-Repo übernommen, Services auf den Kern für Frankfurt reduziert.

export const frankfurt = {
  slug: 'frankfurt',
  city: 'Frankfurt am Main',
  region: 'Rhein-Main',
  eyebrow: 'Frankfurt · Rhein-Main',
  heroHeadline: 'Gebäudereinigung in Frankfurt am Main',
  heroHighlight: 'verlässlich, versichert, festgepreist.',
  heroLead:
    'Professionelle Reinigung für Unternehmen, Hausverwaltungen und Privatkunden im Großraum Frankfurt. Eigenes Team, klare Festpreise, 5 Mio. EUR Betriebshaftpflicht.',
  serviceArea: [
    'Frankfurt am Main',
    'Offenbach am Main',
    'Mainz',
    'Wiesbaden',
    'Darmstadt',
    'Hanau',
    'Bad Homburg',
    'Rhein-Main-Gebiet',
  ],
} as const;

export type FrankfurtService = {
  slug: string;
  title: string;
  short: string;
  // Optional: lokales Bild, sonst Icon-Fallback in der Card
  image?: string;
};

export const frankfurtServices: FrankfurtService[] = [
  { slug: 'glasreinigung', title: 'Glasreinigung', short: 'Streifenfreie Fenster & Glasfassaden in Frankfurt.', image: '/images/services/fensterreinigung.jpg' },
  { slug: 'fassadenreinigung', title: 'Fassadenreinigung', short: 'Schonende Reinigung jeder Fassadenart im Rhein-Main-Gebiet.', image: '/images/services/fassadenreinigung.jpg' },
  { slug: 'bueroreinigung', title: 'Büroreinigung', short: 'Tägliche Unterhaltsreinigung für Frankfurter Unternehmen.', image: '/images/services/bueroreinigung.jpg' },
  { slug: 'sanitaerreinigung', title: 'Sanitärreinigung', short: 'Hygienisch sauber bis ins Detail.', image: '/images/services/sanitaerreinigung.jpg' },
  { slug: 'bauendreinigung', title: 'Bauendreinigung', short: 'Übergabefertig nach Neubau & Sanierung in Frankfurt.', image: '/images/services/bauendreinigung.jpg' },
  { slug: 'treppenhausreinigung', title: 'Treppenhausreinigung', short: 'Regelmäßig sauber für WEG & Vermieter.', image: '/images/services/treppenhausreinigung.jpg' },
  { slug: 'praxisreinigung', title: 'Praxisreinigung', short: 'Hygiene nach RKI-Standard für Praxen in Frankfurt.', image: '/images/services/praxisreinigung.jpg' },
  { slug: 'wintergartenreinigung', title: 'Wintergartenreinigung', short: 'Glasdächer & Wintergärten – auch von außen.', image: '/images/services/wintergartenreinigung.jpg' },
  { slug: 'kanzleireinigung', title: 'Kanzleireinigung', short: 'Diskrete Reinigung für Kanzleien im Bankenviertel.', image: '/images/services/kanzleireinigung.jpg' },
];

export type FrankfurtFaq = { q: string; a: string };

export const frankfurtFaq: FrankfurtFaq[] = [
  {
    q: 'Wie schnell können Sie in Frankfurt starten?',
    a: 'In der Regel innerhalb von 7–14 Tagen nach Angebotsannahme. Bei Sofortbedarf (z. B. Bauendreinigung mit Termindruck) finden wir oft kurzfristigere Lösungen – rufen Sie uns einfach an, wir prüfen die Verfügbarkeit direkt.',
  },
  {
    q: 'Was kostet eine Reinigung bei Ihnen?',
    a: 'Wir arbeiten ausschließlich mit Festpreisen – keine Stundenabrechnung, keine versteckten Aufschläge. Der Preis hängt von Objektgröße, Reinigungsart und Frequenz ab. Sie erhalten nach einem kostenlosen Vor-Ort-Termin ein verbindliches Angebot.',
  },
  {
    q: 'Sind Sie versichert?',
    a: 'Ja. Wir verfügen über eine Betriebshaftpflichtversicherung mit einer Deckungssumme von 5 Mio. EUR. Den Versicherungsnachweis legen wir auf Wunsch gerne vor Auftragsbeginn vor.',
  },
  {
    q: 'Sind wirklich Festpreise möglich – auch bei langfristigen Aufträgen?',
    a: 'Ja, insbesondere bei Unterhaltsreinigungen (Büro, Treppenhaus, Praxis) vereinbaren wir monatliche Pauschalen. Das gibt Ihnen Planungssicherheit – und uns auch.',
  },
  {
    q: 'Reinigen Sie auch in Offenbach, Mainz, Wiesbaden oder Darmstadt?',
    a: 'Ja. Wir bedienen den gesamten Großraum Frankfurt / Rhein-Main. Für Objekte außerhalb der Frankfurter Stadtgrenze sprechen Sie uns einfach an – wir erstellen Ihnen ein individuelles Angebot.',
  },
  {
    q: 'Welche Reinigungsmittel werden eingesetzt?',
    a: 'Wir verwenden professionelle, gewerbliche Reinigungsmittel – wo möglich umweltverträglich und materialschonend. Spezialanforderungen (Allergiker, sensitive Oberflächen, ökologische Mittel) berücksichtigen wir auf Wunsch gerne.',
  },
  {
    q: 'Beschäftigen Sie Subunternehmer?',
    a: 'Nein. Wir arbeiten ausschließlich mit eigenen, festangestellten Mitarbeitern. Das sichert konstante Qualität, klare Verantwortlichkeiten und ist eine Frage der Fairness gegenüber den Menschen, die für uns arbeiten.',
  },
  {
    q: 'Wie lange gibt es Ideale Gebäudereinigung schon?',
    a: 'Ideale Gebäudereinigung ist ein etabliertes Familienunternehmen mit Hauptsitz in Göttingen. Wir betreuen seit Jahren gewerbliche und private Kunden und expandieren gezielt in den Rhein-Main-Raum.',
  },
];

// Service-Optionen für das Frankfurt-Kontaktformular
export const FRANKFURT_FORM_SERVICES = [
  'Glasreinigung',
  'Fassadenreinigung',
  'Büroreinigung',
  'Sanitärreinigung',
  'Bauendreinigung',
  'Treppenhausreinigung',
  'Praxisreinigung',
  'Wintergartenreinigung',
  'Kanzleireinigung',
  'Sonstiges',
] as const;
