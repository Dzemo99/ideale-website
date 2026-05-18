export type PriceModel =
  | {
      type: 'hourly';
      rate: number;
      rateLabel: string;
      productivity: number;
      example: string;
    }
  | {
      type: 'floor';
      rate: number;
      rateLabel: string;
      example: string;
    }
  | {
      type: 'sqm-window';
      rate: number;
      rateLabel: string;
      example: string;
    }
  | {
      type: 'inquiry';
      rateLabel: string;
      reason: string;
    };

export interface Vorteil {
  title: string;
  body: string;
}

export interface ServiceContent {
  lead: string;
  paragraphs: string[];
  leistungen: string[];
  vorteile: Vorteil[];
  zielgruppe: string;
  pricing: PriceModel;
  seoTitle?: string;
  seoDescription?: string;
}

const PRODUCTIVITY = 50;

export const serviceContent: Record<string, ServiceContent> = {
  fassadenreinigung: {
    lead:
      'Algen, Flechten, Schadstoffe und Umwelteinflüsse setzen Fassaden zu. Wir reinigen Putz, Klinker, Beton, Aluminium und Glasfassaden substanzschonend und werterhaltend.',
    paragraphs: [
      'Eine saubere Fassade ist mehr als Optik – sie schützt die Bausubstanz. Algen und Flechten dringen mit der Zeit in die Oberfläche ein und beschleunigen die Verwitterung. Ideale Gebäudereinigung entfernt biologischen Bewuchs und Schadstoffablagerungen mit auf das jeweilige Material abgestimmten Verfahren.',
      'Je nach Fassadenart kommen Niederdruckverfahren, Heißdampf, alkalische Reiniger oder mechanische Bürstenreinigung zum Einsatz. Schwer zugängliche Bereiche reinigen wir per Hubsteiger, Hochseiltechnik oder Teleskop-Reinigungssystem mit Osmosewasser – auf Wunsch inklusive Imprägnierung gegen erneuten Bewuchs.',
    ],
    leistungen: [
      'Algen-, Moos- und Flechtenentfernung',
      'Reinigung von Putz, Klinker, Beton, Aluminium und Glas',
      'Graffiti-Entfernung mit materialschonenden Lösungsmitteln',
      'Hochdruck-, Niederdruck- und Heißdampfverfahren',
      'Hubsteiger und Industrieklettereinsatz',
      'Abschließende Imprägnierung & Schutzbeschichtung auf Wunsch',
    ],
    vorteile: [
      { title: 'Substanzerhalt', body: 'Materialgerechte Verfahren verhindern Beschädigung der Oberfläche.' },
      { title: 'Wertsteigerung', body: 'Eine gepflegte Fassade hebt den Immobilienwert sichtbar.' },
      { title: 'Versichert', body: 'Arbeiten in der Höhe mit 5 Mio. € Betriebshaftpflicht abgesichert.' },
    ],
    zielgruppe: 'Hausverwaltungen, Eigentümergemeinschaften, Gewerbeimmobilien und private Hausbesitzer.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Fassadenreinigung erfordert eine Vor-Ort-Begutachtung: Material, Bewuchsgrad, Höhe und Zugang bestimmen das Verfahren – und damit den Preis.',
    },
  },

  wintergartenreinigung: {
    lead:
      'Glasdach, Seitenflächen, Profile, Lüftungselemente: Wintergärten brauchen Spezial-Equipment für streifenfreie Ergebnisse innen wie außen.',
    paragraphs: [
      'Wintergärten sind ein Schmuckstück – und eine Reinigungs-Herausforderung. Schräge Glasflächen, schwer zugängliche Innenseiten und empfindliche Profile aus Aluminium oder Holz verlangen erfahrenes Personal und passendes Gerät.',
      'Ideale Gebäudereinigung arbeitet mit teleskopierbaren Reinigungssystemen, reinem Osmosewasser und mikrofaserschonenden Pads. So entfernen wir Pollen, Vogelkot, Saharastaub und Kalkflecken ohne Streifen – auch an Stellen, die mit der Hand kaum erreichbar sind.',
    ],
    leistungen: [
      'Glasreinigung innen und außen (streifenfrei mit Osmosewasser)',
      'Pflege von Profilen, Dichtungen und Lüftungselementen',
      'Entfernung von Pollen, Vogelkot, Algen und Kalkablagerungen',
      'Reinigung schräger Dachflächen mit Teleskoptechnik',
      'Auf Wunsch Lotuseffekt-Versiegelung gegen Schmutz',
    ],
    vorteile: [
      { title: 'Streifenfrei garantiert', body: 'Osmosewasser entfernt jede Mineralien-Rückstand – kein Nachpolieren nötig.' },
      { title: 'Materialschonend', body: 'Wir kennen die Sensibilität von Dichtungen, Holzrahmen und beschichtetem Aluminium.' },
      { title: 'Auch unzugängliche Bereiche', body: 'Teleskopstangen erreichen bis 14 m – sicher vom Boden aus.' },
    ],
    zielgruppe: 'Privathaushalte, Hotels, Wellnessbereiche und Gewerbeimmobilien mit Glasanbauten.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Größe, Verschmutzungsgrad und Zugang sind sehr individuell – ein verbindlicher Preis entsteht nach kurzer Besichtigung.',
    },
  },

  'hohe-fensterreinigung': {
    lead:
      'Glasfassaden, Treppenhausfenster und Industriebauten ab 6 m Höhe: Wir reinigen sicher per Hubsteiger, Teleskopstange oder Industrieklettertechnik.',
    paragraphs: [
      'Fenster in großer Höhe sind ein Sicherheitsthema, kein DIY-Job. Ideale Gebäudereinigung verfügt über zertifizierte Höhenarbeiter, Teleskop-Reinigungssysteme bis 22 m und kooperiert für Extremfälle mit Hubsteigerverleihern – inklusive Genehmigungen und Verkehrsabsicherung.',
      'Wir reinigen mit reinem Osmosewasser, das mineralfrei verdunstet und keine Spuren hinterlässt. Der Wartungsvertrag inklusive halbjährlicher Reinigung ist die wirtschaftlichste Lösung – kein Equipment-Wechsel, fester Ansprechpartner, planbare Kosten.',
    ],
    leistungen: [
      'Reinigung bis 22 m Höhe per Teleskopstange',
      'Hubsteigereinsatz für komplexe Glasfassaden',
      'Industrieklettertechnik (FISAT/PSA-zertifiziert)',
      'Osmosewasser-Verfahren ohne Tensidrückstände',
      'Wartungsverträge mit fixen Reinigungsintervallen',
    ],
    vorteile: [
      { title: 'Zertifizierte Höhenarbeiter', body: 'PSA, Schulung und regelmäßige Sicherheitsprüfungen sind Standard.' },
      { title: 'Vollständig versichert', body: '5 Mio. € Betriebshaftpflicht – inklusive Höhenarbeiten.' },
      { title: 'Keine Spuren', body: 'Osmosewasser hinterlässt keine Mineralien – kein Nachputzen.' },
    ],
    zielgruppe: 'Bürotürme, Industriebauten, Schulen, Krankenhäuser und Wohnhochhäuser.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Höhe, Zugang, erforderliches Equipment und Verkehrsabsicherung beeinflussen den Preis erheblich – wir kalkulieren nach Besichtigung.',
    },
  },

  lamellenreinigung: {
    lead:
      'Jalousien, Plissees und Lamellenvorhänge sind Staubmagneten – wir reinigen sie tiefenwirksam vor Ort oder per Ultraschall im Werkstattverfahren.',
    paragraphs: [
      'In Büros, Praxen und Konferenzräumen sammeln Lamellenvorhänge in nur wenigen Monaten Mengen an Staub, Nikotin und Allergenen. Eine Staubwischer-Routine reicht nicht – tiefenwirksame Reinigung erfordert das richtige Verfahren.',
      'Für robuste Vertikallamellen reinigen wir vor Ort mit Spezialgerät. Empfindliche oder stark verschmutzte Plissees und Stoff-Lamellen behandeln wir per Ultraschall im Werkstattverfahren – das löst auch hartnäckige Verfärbungen ohne mechanische Belastung.',
    ],
    leistungen: [
      'Vor-Ort-Reinigung von Vertikallamellen und Jalousien',
      'Ultraschall-Reinigung für Plissees und Stoff-Lamellen',
      'Reinigung im hängenden Zustand (kein Abbau)',
      'Allergikergeeignete Reinigungsmittel auf Wunsch',
      'Auf Wunsch antistatische Versiegelung',
    ],
    vorteile: [
      { title: 'Allergikerfreundlich', body: 'Wir entfernen Hausstaub-Allergene und Nikotin-Rückstände tiefenwirksam.' },
      { title: 'Kein Abbau nötig', body: 'Reinigung im eingehängten Zustand spart Zeit und Kosten.' },
      { title: 'Werkstattverfahren', body: 'Für empfindliche Lamellen Abholung und Rücklieferung möglich.' },
    ],
    zielgruppe: 'Büros, Praxen, Kanzleien, Hotels und Krankenhäuser mit hohem Hygieneanspruch.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Anzahl, Material und Verschmutzungsgrad bestimmen Verfahren und Aufwand – wir nennen den Preis nach kurzer Sichtung.',
    },
  },

  sonderreinigung: {
    lead:
      'Wasserschaden, Brandruß, Messie-Wohnung oder grober Bauschmutz – Sonderreinigung ist Krisenmodus. Wir packen an, wo andere abwinken.',
    paragraphs: [
      'Sonderreinigung beginnt dort, wo Standardverfahren versagen. Nach Wasserschäden trocknen wir nicht nur ab, sondern entfernen Schimmel-Vorstadien und neutralisieren Gerüche. Brandruß erfordert chemische Speziallösungen, weil mechanisches Wischen den Schaden vergrößern würde.',
      'Auch Auflösung von Messie-Wohnungen, Entrümpelung nach Todesfällen oder Reinigung nach starker Verschmutzung durch Tiere gehören zu unserem Repertoire. Diskret, vollständig versichert und mit fachgerechter Entsorgung – auf Wunsch koordinieren wir die Folgegewerke gleich mit.',
    ],
    leistungen: [
      'Reinigung nach Wasser- und Brandschäden',
      'Geruchsneutralisation mit Ozon-Verfahren',
      'Schimmelvorbeugung und Schimmelentfernung',
      'Entrümpelung und Tatortreinigung',
      'Bauschmutzbeseitigung nach Rohbau',
      'Diskrete Abwicklung mit Versicherungsabrechnung',
    ],
    vorteile: [
      { title: 'Kurzfristig verfügbar', body: 'In dringenden Fällen Einsatz innerhalb von 24 Stunden möglich.' },
      { title: 'Versicherungserfahrung', body: 'Wir kennen die Anforderungen an Dokumentation und Kostenaufstellung.' },
      { title: 'Absolute Diskretion', body: 'Insbesondere bei sensiblen Lagen wie Todesfällen oder Verwahrlosung.' },
    ],
    zielgruppe: 'Versicherungen, Hausverwaltungen, Privatpersonen, Behörden und Unternehmen im Notfall.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Jede Sonderreinigung ist anders – Umfang, Gefährdung und Materialien bestimmen den Preis. Wir besichtigen kurzfristig.',
    },
  },

  praxisreinigung: {
    lead:
      'Arzt- und Zahnarztpraxen unterliegen strengen Hygieneanforderungen. Wir reinigen nach RKI-Standards – diskret, außerhalb der Sprechzeiten, mit medizinisch geschultem Personal.',
    paragraphs: [
      'Eine Praxis ist kein gewöhnlicher Arbeitsplatz: Behandlungsräume, Wartebereich, Sanitäranlagen und Empfang haben unterschiedliche Hygieneanforderungen. Ideale Gebäudereinigung arbeitet nach den Empfehlungen des Robert-Koch-Instituts und setzt ausschließlich gelistete Desinfektionsmittel ein.',
      'Unsere Reinigungskräfte sind speziell für die Praxisreinigung geschult – inklusive Hygieneplan-Schulung und Verschwiegenheitserklärung. Reinigung erfolgt außerhalb der Sprechzeiten, dokumentiert und nachvollziehbar. Auf Wunsch übernehmen wir auch die Auffüllung von Spendern und Verbrauchsmaterialien.',
    ],
    leistungen: [
      'Reinigung & Flächendesinfektion nach RKI-Standard',
      'Behandlungsräume, Wartebereich, Sanitär, Empfang',
      'Aufbereitung von Sichtschutz und Türgriffen',
      'Müllentsorgung inklusive medizinischer Abfälle (Kategorie B)',
      'Dokumentation jeder Reinigung auf Wunsch',
      'Reinigung außerhalb der Sprechzeiten',
    ],
    vorteile: [
      { title: 'RKI-konform', body: 'Verfahren und Mittel entsprechen den aktuellen Empfehlungen.' },
      { title: 'Geschultes Personal', body: 'Hygiene-Schulung und Verschwiegenheitserklärung als Standard.' },
      { title: 'Diskret & zuverlässig', body: 'Reinigung nach Praxisschluss – keine Beeinträchtigung des Praxisbetriebs.' },
    ],
    zielgruppe: 'Arzt- und Zahnarztpraxen, MVZ, Physiotherapie, Heilpraktiker, Apotheken.',
    pricing: {
      type: 'hourly',
      rate: 42,
      rateLabel: '42,00 € / Std.',
      productivity: PRODUCTIVITY,
      example: '120 m² Praxis ≈ 2,4 Std. × 42 € = 100,80 € netto pro Reinigung',
    },
  },

  fensterreinigung: {
    lead:
      'Streifenfrei, schnell und mit transparenter Abrechnung pro m² Glasfläche – Fensterreinigung für Büros, Praxen, Privathaushalte und Geschäfte.',
    paragraphs: [
      'Fenster sind die Visitenkarte eines Gebäudes. Verschmutzte Scheiben mindern Tageslichteinfall um bis zu 30 % und sind das Erste, was Kunden und Mitarbeiter sehen. Ideale Gebäudereinigung reinigt klassisch mit Wischer und Tuch oder per Osmosewasser-Verfahren.',
      'Wir reinigen inklusive Rahmen, Fensterbänken und Dichtungen. Bei Wartungsverträgen mit fixem Intervall (z. B. 6 × jährlich für Büros, 2 × jährlich für Wohnungen) profitieren Sie von festen Preisen und einem festen Team, das Ihr Objekt kennt.',
    ],
    leistungen: [
      'Glasreinigung innen und außen (klassisch oder Osmose)',
      'Reinigung von Rahmen, Fensterbänken und Dichtungen',
      'Schaufenster- und Glasflächenreinigung für Einzelhandel',
      'Wartungsverträge mit fixem Intervall',
      'Inklusive Beseitigung von Klebespuren und Aufklebern',
    ],
    vorteile: [
      { title: 'Transparente Abrechnung', body: '2,50 € pro m² Glasfläche – kein Pauschal-Pricing, keine Überraschungen.' },
      { title: 'Streifenfrei garantiert', body: 'Bei Beanstandung Nachbesserung kostenlos.' },
      { title: 'Flexible Intervalle', body: 'Von einmalig bis zu wöchentlich – ganz nach Bedarf.' },
    ],
    zielgruppe: 'Büros, Praxen, Einzelhandel, Privathaushalte, Gastronomie.',
    pricing: {
      type: 'sqm-window',
      rate: 2.5,
      rateLabel: '2,50 € / m² Glasfläche',
      example: '25 m² Glasfläche × 2,50 € = 62,50 € netto pro Reinigung',
    },
  },

  sanitaerreinigung: {
    lead:
      'Entkalkung, Desinfektion, Geruchsneutralisation: Sanitärbereiche brauchen mehr als oberflächliches Wischen – und sind das Erste, woran Kunden Sauberkeit messen.',
    paragraphs: [
      'Kein anderer Bereich entscheidet so schnell über das Sauberkeits-Urteil wie das WC. Kalkflecken, Urinstein und Schimmel im Silikon entstehen schleichend – und sind mit Standardmitteln kaum noch zu entfernen. Ideale Gebäudereinigung führt Grundreinigungen mit professionellen Säurereinigern und Schimmelentfernern durch.',
      'Im laufenden Wartungsvertrag halten wir Sanitärbereiche durchgehend in Top-Zustand: Tägliche oder mehrmals wöchentliche Reinigung, Auffüllung von Verbrauchsmaterial und Desinfektion stark frequentierter Kontaktflächen. Auch öffentliche WCs, Schwimmbäder und Wellnessbereiche zählen zu unseren Stammkunden.',
    ],
    leistungen: [
      'Grundreinigung mit Entkalkung und Schimmelentfernung',
      'Desinfektion aller Kontaktflächen',
      'Geruchsneutralisation und Lüftungsgitter-Reinigung',
      'Auffüllung von Seife, Papier und Hygieneartikeln',
      'Wartungsverträge mit täglicher oder mehrtäglicher Reinigung',
    ],
    vorteile: [
      { title: 'Tiefenwirksam', body: 'Wir lösen auch festsitzenden Urinstein und Schimmel-Vorstadien.' },
      { title: 'Geruchsfrei', body: 'Neutralisation statt Überdeckung mit Duftstoffen.' },
      { title: 'Hygiene-konform', body: 'Verfahren und Mittel sind für sensible Bereiche zugelassen.' },
    ],
    zielgruppe: 'Gastronomie, Hotels, Schwimmbäder, Praxen, Bürogebäude und öffentliche Einrichtungen.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Abhängig von Größe, Verschmutzungsgrad und Intervall – meist Teil eines Unterhaltsreinigungs-Vertrags. Wir kalkulieren nach Besichtigung.',
    },
  },

  gebaeudereinigung: {
    lead:
      'Vom Eingangsbereich bis zum Dachboden – Unterhalts- und Grundreinigung kompletter Gebäude aus einer Hand, mit festem Ansprechpartner und planbaren Kosten.',
    paragraphs: [
      'Wer mehrere Reinigungsdienstleister für ein Gebäude koordiniert, verbrennt Zeit. Ideale Gebäudereinigung übernimmt die komplette Gebäudereinigung – Treppenhaus, Büros, Sanitär, Glas, Außenflächen – aus einer Hand. Ein Vertrag, ein Ansprechpartner, eine Rechnung.',
      'Im Wartungsvertrag fixieren wir Intervalle, Leistungsumfang und Preise. Das Team kennt Ihre Immobilie, hat Schlüssel und Zugang, dokumentiert jeden Einsatz. Bei Bedarf koordinieren wir Sonderreinigungen, Winterdienst oder Fassadenreinigung gleich mit.',
    ],
    leistungen: [
      'Unterhaltsreinigung aller Gebäudebereiche',
      'Grundreinigung und Periodikreinigung',
      'Treppenhaus- und Aufzugreinigung',
      'Sanitär- und Küchenreinigung',
      'Glas- und Außenflächenreinigung',
      'Müllmanagement und Hausmeister-Funktionen',
    ],
    vorteile: [
      { title: 'Single Source', body: 'Ein Anbieter für alle Reinigungsgewerke spart Koordination.' },
      { title: 'Festpreis-Vertrag', body: 'Planbare monatliche Kosten ohne Überraschungen.' },
      { title: 'Festes Team', body: 'Stammpersonal kennt Ihre Immobilie und Ihre Anforderungen.' },
    ],
    zielgruppe: 'Hausverwaltungen, Eigentümergemeinschaften, Bürogebäude und Gewerbeimmobilien.',
    pricing: {
      type: 'hourly',
      rate: 29,
      rateLabel: '29,00 € / Std.',
      productivity: PRODUCTIVITY,
      example: '300 m² Bürofläche ≈ 6,0 Std. × 29 € = 174,00 € netto pro Einsatz',
    },
  },

  bauendreinigung: {
    lead:
      'Nach Bau und Sanierung: Wir entfernen Mörtel, Farbspritzer, Klebebandreste und Staub – damit die Schlüsselübergabe glänzt.',
    paragraphs: [
      'Eine Baustelle hinterlässt Spuren, die mit normalem Wischen nicht weggehen: Mörtelreste auf Fliesen, Farbspritzer auf Fenstern, Bauschutt-Staub in jeder Fuge. Bauendreinigung ist Voraussetzung für die bezugsfertige Übergabe – und mehr Spezialdisziplin als gewöhnliche Reinigung.',
      'Wir reinigen nach DIN 18299 zweistufig: Erst die grobe Bauendreinigung mit Entfernung aller Bauschuttreste, dann die Feinreinigung inklusive Fenster, Sanitäranlagen und Bodenpflege. Auf Wunsch übernehmen wir auch die VDI-konforme Lüftungsreinigung vor Erstinbetriebnahme.',
    ],
    leistungen: [
      'Grobreinigung: Mörtel, Farb- und Klebespritzer, Bauschutt',
      'Feinreinigung: Fenster, Sanitär, Boden, Heizkörper',
      'Reinigung nach DIN 18299',
      'Lüftungs- und Klimaanlagen-Erstreinigung',
      'Bauendreinigung mit Übergabeprotokoll',
    ],
    vorteile: [
      { title: 'Schlüsselfertig sauber', body: 'Ihre Bauherren und Mieter ziehen in eine makellose Immobilie ein.' },
      { title: 'Schnell verfügbar', body: 'Kurzfristige Einsätze auch innerhalb von 48 Stunden möglich.' },
      { title: 'Übergabeprotokoll', body: 'Auf Wunsch dokumentierte Übergabe inklusive Mängelliste.' },
    ],
    zielgruppe: 'Bauunternehmen, Projektentwickler, Architekten, Hausverwaltungen und Bauherren.',
    pricing: {
      type: 'hourly',
      rate: 45,
      rateLabel: '45,00 € / Std.',
      productivity: PRODUCTIVITY,
      example: '200 m² Neubau ≈ 4,0 Std. × 45 € = 180,00 € netto',
    },
  },

  kitareinigung: {
    lead:
      'Kindgerechte Reinigung mit zertifizierten Mitteln – außerhalb der Betreuungszeiten, in vertrauensvoller Zusammenarbeit mit der Kita-Leitung.',
    paragraphs: [
      'In Kitas spielen die Kinder direkt auf dem Boden, fassen jede Oberfläche an und nehmen Spielzeug in den Mund. Reinigungsmittel müssen hautverträglich sein, die Verfahren wirklich tiefenwirksam – und das Personal sensibilisiert.',
      'Ideale Gebäudereinigung reinigt ausschließlich mit gelisteten, hautfreundlichen Mitteln. Spielzeug wird separat aufbereitet, Sanitärbereiche desinfiziert, Böden gründlich gereinigt – alles außerhalb der Betreuungszeiten. Unsere Mitarbeiter sind im Umgang mit dem sensiblen Umfeld geschult und legen Wert auf reibungslose Übergabe.',
    ],
    leistungen: [
      'Reinigung mit hautverträglichen, zertifizierten Mitteln',
      'Aufbereitung von Spielzeug und Spielgeräten',
      'Sanitär-Desinfektion gemäß Infektionsschutzgesetz',
      'Reinigung außerhalb der Betreuungszeiten',
      'Sonderreinigung nach Krankheitsfällen',
    ],
    vorteile: [
      { title: 'Kinderschonend', body: 'Alle Mittel sind hautverträglich und atemwegssicher.' },
      { title: 'Infektionsschutz', body: 'Verfahren entsprechen den Anforderungen des Infektionsschutzgesetzes.' },
      { title: 'Vertrauensvoll', body: 'Stammpersonal mit Führungszeugnis und Hygieneschulung.' },
    ],
    zielgruppe: 'Kindertagesstätten, Krippen, Horte, Tagespflegeeinrichtungen.',
    pricing: {
      type: 'hourly',
      rate: 42,
      rateLabel: '42,00 € / Std.',
      productivity: PRODUCTIVITY,
      example: '250 m² Kita ≈ 5,0 Std. × 42 € = 210,00 € netto pro Reinigung',
    },
  },

  kanzleireinigung: {
    lead:
      'Anwaltskanzleien und Beratungsbüros leben von Diskretion. Wir reinigen mit langjährigem Stammpersonal – auf Wunsch unter Verschwiegenheitserklärung.',
    paragraphs: [
      'In Kanzleien liegen sensible Akten, Mandantenunterlagen und vertrauliche Informationen offen. Das macht Reinigungspersonal zum Sicherheitsfaktor. Ideale Gebäudereinigung arbeitet ausschließlich mit langjährig beschäftigtem Stammpersonal – kein Subunternehmer-Wechsel, kein anonymes Personal.',
      'Auf Wunsch unterschreiben unsere Mitarbeiter eine Verschwiegenheitserklärung. Reinigungen erfolgen außerhalb der Bürozeiten, Schlüsselübergaben sind dokumentiert. Diskretion, Pünktlichkeit und Sorgfalt sind in diesem Umfeld keine Versprechen – sondern Pflicht.',
    ],
    leistungen: [
      'Unterhaltsreinigung der Kanzleiräume',
      'Reinigung von Konferenz- und Besprechungsräumen',
      'Sanitär- und Küchenreinigung',
      'Reinigung außerhalb der Bürozeiten',
      'Personal mit Verschwiegenheitserklärung auf Wunsch',
    ],
    vorteile: [
      { title: 'Stammpersonal', body: 'Keine wechselnden Subunternehmer – immer das gleiche Team.' },
      { title: 'Diskretion vertraglich', body: 'Auf Wunsch NDA und Schweigeerklärung für alle Mitarbeiter.' },
      { title: 'Außerhalb der Bürozeiten', body: 'Keine Beeinträchtigung von Mandantengesprächen.' },
    ],
    zielgruppe: 'Anwaltskanzleien, Steuerberater, Wirtschaftsprüfer, Notariate, Beratungsbüros.',
    pricing: {
      type: 'hourly',
      rate: 29,
      rateLabel: '29,00 € / Std.',
      productivity: PRODUCTIVITY,
      example: '180 m² Kanzlei ≈ 3,6 Std. × 29 € = 104,40 € netto pro Einsatz',
    },
  },

  treppenhausreinigung: {
    lead:
      'Saubere Treppenhäuser, zufriedene Mieter, weniger Beschwerden bei der Hausverwaltung – zum Festpreis pro Etage, im Wartungsvertrag.',
    paragraphs: [
      'Das Treppenhaus ist die Eingangskarte des Mietshauses. Ein vernachlässigtes Treppenhaus zieht Vandalismus an und führt zu Mieterunzufriedenheit. Ideale Gebäudereinigung übernimmt die regelmäßige Reinigung von Treppen, Geländern, Aufzügen und Eingangsbereichen – zum transparenten Festpreis pro Etage.',
      'Wir reinigen wöchentlich, zweiwöchentlich oder monatlich – je nach Vertrag. Im erweiterten Service übernehmen wir auch Postkasten-Pflege, Mülltonnen-Management und kleinere Hausmeister-Aufgaben. Beschwerden der Mieter? Ein Anruf bei uns – wir kümmern uns.',
    ],
    leistungen: [
      'Reinigung von Stufen, Geländern und Handläufen',
      'Aufzugskabinen und Aufzugstüren',
      'Eingangsbereich und Briefkastenanlage',
      'Reinigung von Kellergängen und Gemeinschaftsflächen',
      'Hausmeisterdienste auf Wunsch (Mülltonnen, Glühbirnen, Postkästen)',
    ],
    vorteile: [
      { title: 'Festpreis pro Etage', body: '7 € pro Etage pro Reinigung – transparent kalkulierbar.' },
      { title: 'Weniger Beschwerden', body: 'Zufriedene Mieter halten dem Objekt und der Verwaltung die Treue.' },
      { title: 'Flexible Intervalle', body: 'Wöchentlich, zweiwöchentlich oder monatlich – nach Bedarf.' },
    ],
    zielgruppe: 'Hausverwaltungen, Wohnungseigentümergemeinschaften, Vermieter, Mehrfamilienhaus-Eigentümer.',
    pricing: {
      type: 'floor',
      rate: 7,
      rateLabel: '7,00 € / Etage',
      example: '4 Etagen × 7 € = 28,00 € netto pro Reinigung',
    },
  },

  bueroreinigung: {
    lead:
      'Tägliche, wöchentliche oder monatliche Büroreinigung mit Festpreisen – außerhalb der Geschäftszeiten, mit festem Team und planbaren Kosten.',
    paragraphs: [
      'Ein sauberes Büro steigert die Produktivität messbar: Weniger Krankheitstage, weniger Ablenkung, höhere Mitarbeiterzufriedenheit. Ideale Gebäudereinigung erstellt für jedes Büro einen passgenauen Reinigungsplan – auf Bedarf und Budget abgestimmt.',
      'Reinigung erfolgt vor oder nach den Geschäftszeiten. Schreibtische, Sanitäranlagen, Küchen, Konferenzräume und Gemeinschaftsflächen werden nach Plan abgearbeitet. Auf Wunsch übernehmen wir auch Glasreinigung, Bodenpflege und das Auffüllen von Verbrauchsmaterialien als Vollservice.',
    ],
    leistungen: [
      'Schreibtisch- und Arbeitsplatzreinigung (auf Wunsch)',
      'Sanitäranlagen und Küchen',
      'Konferenz- und Besprechungsräume',
      'Eingangsbereich, Empfang, Gemeinschaftsflächen',
      'Müllentsorgung und Mülltrennung',
      'Reinigung außerhalb der Geschäftszeiten',
    ],
    vorteile: [
      { title: 'Festpreis-Vertrag', body: 'Planbare monatliche Kosten – kein Überraschungs-Pricing.' },
      { title: 'Festes Team', body: 'Stammpersonal kennt Ihre Räume und Ihre Anforderungen.' },
      { title: 'Höhere Produktivität', body: 'Sauberes Arbeitsumfeld reduziert Krankenstand messbar.' },
    ],
    zielgruppe: 'Bürogebäude, Coworking-Spaces, Start-ups, Mittelständler, Konzern-Niederlassungen.',
    pricing: {
      type: 'hourly',
      rate: 29,
      rateLabel: '29,00 € / Std.',
      productivity: PRODUCTIVITY,
      example: '200 m² Büro ≈ 4,0 Std. × 29 € = 116,00 € netto pro Einsatz',
    },
  },

  chemiereinigung: {
    lead:
      'Reinräume, Labore und chemische Produktionsstätten verlangen ISO-konforme Verfahren und zertifiziertes Personal. Wir reinigen nach ISO 14644.',
    paragraphs: [
      'In Reinräumen entscheiden Partikelgrößen über Produktqualität. Eine falsche Reinigungsroutine kann tagelange Produktion ruinieren. Ideale Gebäudereinigung arbeitet in Reinraum-Umgebungen ausschließlich mit Personal, das in ISO-14644-Vorgaben geschult ist und entsprechende Reinraum-Kleidung trägt.',
      'Wir reinigen nach validierten Verfahren mit zertifizierten Reinigungsmitteln und führen Partikel-Messungen vor und nach jeder Reinigung durch. Dokumentation ist GMP-konform – ein Muss für Pharma, Halbleiter und Lebensmitteltechnik.',
    ],
    leistungen: [
      'Reinraum-Reinigung nach ISO 14644-1 (Klasse 5 bis 8)',
      'Sterile und steril-konforme Verfahren',
      'GMP-konforme Dokumentation',
      'Partikel-Messungen vor und nach Reinigung',
      'Schulung des Kunden-Personals auf Wunsch',
    ],
    vorteile: [
      { title: 'ISO-zertifiziert', body: 'Verfahren nach ISO 14644 mit dokumentierter Validierung.' },
      { title: 'GMP-konform', body: 'Pharma-tauglich für Audits und Inspektionen.' },
      { title: 'Reinraum-Personal', body: 'Geschult im Umgang mit Reinraum-Bekleidung und -Hygiene.' },
    ],
    zielgruppe: 'Pharma- und Biotech-Unternehmen, Labore, Halbleiter-Fertigung, Lebensmitteltechnik.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Reinraum-Klasse, Validierungsanforderungen und Dokumentationstiefe variieren stark – wir kalkulieren nach Audit-Besichtigung.',
    },
  },

  steinreinigung: {
    lead:
      'Naturstein, Marmor, Granit, Schiefer, Terrazzo – wir bringen den ursprünglichen Glanz zurück. Grundreinigung, Aufschleifen, Polieren, Versiegeln.',
    paragraphs: [
      'Steinböden gehören zum Edelsten, was eine Immobilie zu bieten hat – aber sie sind empfindlich. Marmor verätzt durch Säurereiniger, Granit verkratzt durch falsches Tuch, Schiefer wird durch alkalische Mittel matt. Steinreinigung ist Spezialhandwerk, kein Routinejob.',
      'Ideale Gebäudereinigung führt Grundreinigungen mit pH-neutralen Spezialreinigern durch. Bei starker Abnutzung schleifen wir auf, polieren mit Diamant-Pads und versiegeln mit hochwertigen Imprägnierungen. Das Ergebnis: Boden in Neubau-Zustand, jahrelang geschützt vor erneuter Verschmutzung.',
    ],
    leistungen: [
      'Grundreinigung mit pH-neutralen Spezialreinigern',
      'Aufschleifen und Polieren mit Diamant-Technik',
      'Versiegelung und Imprägnierung',
      'Fleckenentfernung (Wein, Öl, Rost, Kalk)',
      'Beratung zur Pflege-Routine',
    ],
    vorteile: [
      { title: 'Substanzschonend', body: 'Wir kennen die Empfindlichkeiten jedes Steinmaterials.' },
      { title: 'Wertsteigernd', body: 'Aufbereiteter Steinboden hebt den Immobilienwert sichtbar.' },
      { title: 'Langlebige Versiegelung', body: 'Schutz vor erneuter Verschmutzung – bis zu 5 Jahre Haltbarkeit.' },
    ],
    zielgruppe: 'Hotels, Privatvillen, Restaurants, repräsentative Eingangsbereiche, Museen.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Individuelles Angebot',
      reason: 'Material, Zustand, Größe und gewünschter Endglanz bestimmen Aufwand und Verfahren – wir kalkulieren nach Besichtigung.',
    },
  },

  winterdienst: {
    lead:
      'Räum- und Streupflicht ist Hausverwaltungs-Sache, aber Glatteis-Unfälle sind Anwalts-Sache. Wir übernehmen den Winterdienst zum Pauschalpreis – mit Erreichbarkeit ab 6 Uhr.',
    paragraphs: [
      'Die Räum- und Streupflicht trifft den Eigentümer – Verletzungen durch Glatteis können teuer werden. Ideale Gebäudereinigung übernimmt den kompletten Winterdienst inklusive Dokumentation: Räumen, Streuen, Bereitschaft an Wochenenden und Feiertagen, Kontrolle nach Schneefall.',
      'Im Pauschalvertrag fixieren wir Einsatzbereich und Verfügbarkeit. Wir sind ab 6 Uhr morgens vor Ort, dokumentieren jeden Einsatz mit Zeitstempel und führen ein Streugut-Logbuch. Im Streitfall haben Sie die nötigen Belege – versicherungsrelevant.',
    ],
    leistungen: [
      'Schneeräumen von Gehwegen, Zufahrten, Parkplätzen',
      'Streuen mit umweltverträglichem Streugut',
      'Erreichbarkeit ab 6 Uhr morgens',
      'Wochenend- und Feiertagsdienst inklusive',
      'Dokumentation jedes Einsatzes mit Zeitstempel',
    ],
    vorteile: [
      { title: 'Pauschalpreis', body: 'Planbare Saisonkosten – keine Überraschungs-Rechnungen pro Einsatz.' },
      { title: 'Rechtssicher', body: 'Lückenlose Dokumentation entlastet im Haftungsfall.' },
      { title: 'Frühschicht', body: 'Pünktlich vor dem Berufsverkehr ab 6 Uhr im Einsatz.' },
    ],
    zielgruppe: 'Hausverwaltungen, Gewerbeimmobilien, Eigentümergemeinschaften, Tankstellen, Einzelhandel.',
    pricing: {
      type: 'inquiry',
      rateLabel: 'Saisonpauschale auf Anfrage',
      reason: 'Fläche, Einsatzfrequenz und Bereitschaft bestimmen die Pauschale – wir kalkulieren nach kurzer Vor-Ort-Sichtung.',
    },
  },
};
