export type Service = {
  slug: string;
  title: string;
  short: string;
  description: string;
  image: string;
  category: 'gewerbe' | 'privat' | 'spezial';
};

export const services: Service[] = [
  {
    slug: 'fassadenreinigung',
    title: 'Fassadenreinigung',
    short: 'Schonende Reinigung für Putz, Klinker und Glasfassaden.',
    description:
      'Professionelle Fassadenreinigung mit modernen Verfahren – von der Niederdruck-Reinigung bis zur Hochdruck-Spezialbehandlung. Wir entfernen Algen, Moos, Flechten, Schmutz und Graffiti substanzschonend.',
    image: '/images/services/fassadenreinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'wintergartenreinigung',
    title: 'Wintergartenreinigung',
    short: 'Glasklare Sicht – innen wie außen, auch an schwierigen Stellen.',
    description:
      'Wir reinigen Wintergärten und Glasdächer streifenfrei. Mit teleskopierbaren Reinigungssystemen und reinem Osmosewasser erreichen wir auch schwer zugängliche Flächen.',
    image: '/images/services/wintergartenreinigung.jpg',
    category: 'privat',
  },
  {
    slug: 'hohe-fensterreinigung',
    title: 'Hohe Fensterreinigung',
    short: 'Fenster in großer Höhe – sicher, professionell, mit Hubsteiger.',
    description:
      'Für hohe Glasfassaden, Treppenhausfenster und Industriebauten. Wir arbeiten mit Hubsteiger, Teleskopstangen und gegebenenfalls Industriekletterern.',
    image: '/images/services/hohe-fensterreinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'lamellenreinigung',
    title: 'Lamellenreinigung',
    short: 'Jalousien und Lamellenvorhänge perfekt sauber.',
    description:
      'Wir reinigen Lamellenvorhänge, Jalousien und Plissees gründlich – auch in Krankenhäusern, Büros und Praxen. Auf Wunsch mit Ultraschall-Reinigung.',
    image: '/images/services/lamellenreinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'sonderreinigung',
    title: 'Sonderreinigung',
    short: 'Wenn Standardreinigung nicht ausreicht.',
    description:
      'Spezialaufträge nach Wasserschaden, Brandschaden, Verschmutzung durch Tiere, Messie-Wohnungen oder grober Bauschmutz – wir packen an, wo andere abwinken.',
    image: '/images/services/sonderreinigung.jpg',
    category: 'spezial',
  },
  {
    slug: 'praxisreinigung',
    title: 'Praxisreinigung',
    short: 'Hygiene-konforme Reinigung für Arzt- und Zahnarztpraxen.',
    description:
      'Praxisreinigung nach RKI-Standards. Unterhaltsreinigung, Desinfektion von Behandlungsräumen, Sanitäranlagen und Wartebereich – diskret und außerhalb der Sprechzeiten.',
    image: '/images/services/praxisreinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'fensterreinigung',
    title: 'Fensterreinigung',
    short: 'Streifenfreie Fenster für Privat und Gewerbe.',
    description:
      'Klassische Fensterreinigung inklusive Rahmen und Fensterbänken. Privat oder regelmäßig im Wartungsvertrag für Büros, Praxen und Geschäfte.',
    image: '/images/services/fensterreinigung.jpg',
    category: 'privat',
  },
  {
    slug: 'sanitaerreinigung',
    title: 'Sanitärreinigung',
    short: 'Tiefenreinigung und Desinfektion von WC und Bad.',
    description:
      'Grundreinigung von Sanitäranlagen mit Entkalkung, Desinfektion und Geruchsneutralisation. Auch für öffentliche WCs, Schwimmbäder und Wellnessbereiche.',
    image: '/images/services/sanitaerreinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'gebaeudereinigung',
    title: 'Gebäudereinigung',
    short: 'Vom Eingangsbereich bis zum Dachboden – alles aus einer Hand.',
    description:
      'Unterhaltsreinigung und Grundreinigung kompletter Gebäude. Wir koordinieren alle Gewerke und sorgen dafür, dass Ihre Immobilie permanent in Top-Zustand bleibt.',
    image: '/images/services/gebaeudereinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'bauendreinigung',
    title: 'Bauendreinigung',
    short: 'Nach dem Bau: bezugsfertig und glänzend übergeben.',
    description:
      'Wir entfernen Bauschmutz, Mörtelreste, Farbspritzer und Staub. Inklusive Fenster, Sanitäranlagen und Bodenpflege – Schlüsselübergabe ohne Sorgen.',
    image: '/images/services/bauendreinigung.jpg',
    category: 'spezial',
  },
  {
    slug: 'kitareinigung',
    title: 'Kitareinigung',
    short: 'Kinderfreundliche Reinigung mit zertifizierten Mitteln.',
    description:
      'Spezialreinigung für Kindertagesstätten mit hautverträglichen Mitteln. Spielzeug, Mobiliar, Sanitärbereiche und Böden – außerhalb der Betreuungszeiten.',
    image: '/images/services/kitareinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'kanzleireinigung',
    title: 'Kanzleireinigung',
    short: 'Diskrete Reinigung für Anwaltskanzleien und Beratungsbüros.',
    description:
      'Vertraulichkeit hat oberste Priorität. Wir arbeiten ausschließlich mit geschultem, langjährigem Personal – auf Wunsch mit Verschwiegenheitserklärung.',
    image: '/images/services/kanzleireinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'treppenhausreinigung',
    title: 'Treppenhausreinigung',
    short: 'Saubere Treppenhäuser für Mehrfamilienhäuser und WEGs.',
    description:
      'Regelmäßige Reinigung von Treppenhäusern, Aufzügen und Eingangsbereichen. Mit Wartungsvertrag zum Festpreis – inklusive Hausbetreuung auf Wunsch.',
    image: '/images/services/treppenhausreinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'bueroreinigung',
    title: 'Büroreinigung',
    short: 'Saubere Büros sorgen für produktive Mitarbeiter.',
    description:
      'Tägliche, wöchentliche oder monatliche Büroreinigung mit Festpreisen. Schreibtische, Sanitäranlagen, Küchen, Konferenzräume – auch außerhalb der Geschäftszeiten.',
    image: '/images/services/bueroreinigung.jpg',
    category: 'gewerbe',
  },
  {
    slug: 'chemiereinigung',
    title: 'Chemie- und Reinraumreinigung',
    short: 'Reinraum-Hygiene nach ISO-Standards.',
    description:
      'Spezialreinigung für Reinräume, Labore und chemische Produktionsstätten nach ISO 14644. Mit geschultem Personal und zertifizierten Reinigungsmitteln.',
    image: '/images/services/chemiereinigung.jpg',
    category: 'spezial',
  },
  {
    slug: 'steinreinigung',
    title: 'Steinreinigung',
    short: 'Naturstein, Marmor und Terrazzo perfekt aufgearbeitet.',
    description:
      'Grundreinigung, Aufschleifen, Polieren und Versiegeln von Steinböden. Marmor, Granit, Schiefer, Terrazzo – wir bringen den ursprünglichen Glanz zurück.',
    image: '/images/services/steinreinigung.jpg',
    category: 'spezial',
  },
  {
    slug: 'winterdienst',
    title: 'Winterdienst',
    short: 'Räum- und Streupflicht sicher erfüllt.',
    description:
      'Winterdienst für Hausverwaltungen, Gewerbe und Privatkunden. Schneeräumen, Streuen und Glättebekämpfung – im Pauschalvertrag mit Erreichbarkeit ab 6 Uhr.',
    image: '/images/services/winterdienst.jpg',
    category: 'spezial',
  },
];
