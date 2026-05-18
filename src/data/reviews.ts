export interface Review {
  name: string;
  role: string;
  stars: number;
  body: string;
}

export const reviews: Review[] = [
  {
    name: 'Filialleitung',
    role: 'Automobilgruppe, Göttingen',
    stars: 5,
    body: 'Hervorragender Service im Autohaus. Die Reinigungszeiten werden exakt eingehalten, das Team arbeitet absolut diskret und makellos. Für uns im Premium-Segment der perfekte Partner.',
  },
  {
    name: 'M. Weber',
    role: 'Immobilienverwaltung',
    stars: 5,
    body: 'Zuverlässigkeit wird hier großgeschrieben. Seit dem Wechsel zu Ideale Gebäudereinigung haben wir keine Mieterbeschwerden mehr bezüglich der Treppenhäuser. Klare Empfehlung für Hausverwaltungen!',
  },
  {
    name: 'Projektleitung',
    role: 'Industrie- & Gewerbebau',
    stars: 5,
    body: 'Kurzfristige Sonderreinigung nach Umbau war innerhalb von 24 Stunden erledigt. Professionelle Abwicklung, faires Angebot und makelloses Ergebnis.',
  },
];
