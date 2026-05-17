export type City = {
  name: string;
  slug: string;
  state: string;
};

export const cities: City[] = [
  { name: 'Hannover', slug: 'hannover', state: 'Niedersachsen' },
  { name: 'Frankfurt am Main', slug: 'frankfurt-am-main', state: 'Hessen' },
  { name: 'Göttingen', slug: 'goettingen', state: 'Niedersachsen' },
  { name: 'Dortmund', slug: 'dortmund', state: 'Nordrhein-Westfalen' },
  { name: 'Kassel', slug: 'kassel', state: 'Hessen' },
  { name: 'Northeim', slug: 'northeim', state: 'Niedersachsen' },
  { name: 'Minden', slug: 'minden', state: 'Nordrhein-Westfalen' },
  { name: 'Nordhausen', slug: 'nordhausen', state: 'Thüringen' },
  { name: 'Heiligenstadt (Eichsfeld)', slug: 'heiligenstadt', state: 'Thüringen' },
  { name: 'Eschwege', slug: 'eschwege', state: 'Hessen' },
  { name: 'Leipzig', slug: 'leipzig', state: 'Sachsen' },
  { name: 'Halle (Saale)', slug: 'halle', state: 'Sachsen-Anhalt' },
  { name: 'Berlin', slug: 'berlin', state: 'Berlin' },
  { name: 'Braunschweig', slug: 'braunschweig', state: 'Niedersachsen' },
  { name: 'Salzgitter', slug: 'salzgitter', state: 'Niedersachsen' },
  { name: 'Essen', slug: 'essen', state: 'Nordrhein-Westfalen' },
  { name: 'Köln', slug: 'koeln', state: 'Nordrhein-Westfalen' },
  { name: 'Düsseldorf', slug: 'duesseldorf', state: 'Nordrhein-Westfalen' },
];
