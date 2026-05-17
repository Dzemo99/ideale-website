# Briefing: Ideale Gebäudereinigung — Hauptseite Relaunch

> Kopiere dieses Dokument als `CLAUDE.md` in den Projektordner. Starte Claude Code und schreibe: `lies CLAUDE.md und arbeite alles ab`

---

## 0. Auftrag

Baue die bestehende Shopify-Website `ideale-gebaeudereinigung.de` komplett neu als **Astro + Tailwind Site auf Netlify**. Uebernimm Design, Struktur, Texte und Bilder von der aktuellen Shopify-Seite. Die neue Site muss SEO-optimiert sein fuer regionale Google Ads.

**Wichtig:** Dies ist die HAUPTSEITE, nicht die Frankfurt-Subdomain. Die Frankfurt-Site existiert schon separat.

---

## 1. Geschaeftsdaten

| Feld | Wert |
|---|---|
| Firma | Ideale Gebaeudereinigung |
| Inhaber | Jamal Jaafar |
| Domain | ideale-gebaeudereinigung.de |
| Anschrift | Kasseler Landstrasse 80a, 37081 Goettingen |
| Telefon | 0551 50316976 |
| WhatsApp | +49 160 95854323 |
| E-Mail | info@ideale-gebaeudereinigung.de |
| USt-IdNr. | DE361832333 |
| Versicherung | Betriebshaftpflicht 5 Mio. EUR |
| GTM-ID | GTM-MQWKFKRP |
| Claim | Ideale in Rekordzeit |

---

## 2. Tech-Stack

- **Framework:** Astro (neueste Version via `npm create astro@latest`)
- **Styling:** Tailwind CSS
- **TypeScript:** strict
- **Sitemap:** @astrojs/sitemap
- **Forms:** Netlify Forms
- **Hosting:** Netlify (Git-Deploy via GitHub)
- **Repo:** github.com/Dzemo99/ideale-website (private)
- **Kein React, kein Vue** — reines Astro mit minimalem JS

---

## 3. Design — Uebernehmen von Shopify

### Farbschema (wie die aktuelle Site + Frankfurt-Verbesserungen)
- Primaer: Sehr dunkles Grau/Schwarz (#0a0a0a) fuer Hero und Hauptsections
- Text auf dunkel: Weiss (#ffffff), Subtexte weiches Grau (#a1a1aa)
- Akzent: Smaragdgruen (#10b981) fuer CTAs, Buttons, Highlights
- Helle Sections: Sehr helles Grau (#f9fafb) mit dunkler Schrift
- Gold: (#C8A24B) nur sparsam fuer Premium-Touch
- Cookie-Banner im gleichen dunklen Schema

### Typografie
- Sauberer Sans-Serif-Font, nicht Inter/Roboto/Arial
- Headlines: eng (-tracking-tight), gross, bold
- Body: entspanntes Line-Height, gut lesbar

### Design-Regeln
- Grosszuegiger Whitespace (py-24 bis py-32 fuer Sections)
- Dunkler Hero mit subtilen Mesh-Gradients oder Radial-Glow
- Service-Cards dunkel mit sanftem Hover (translate-y-1)
- Mobile-First, grosse Touch-Targets
- Abgerundete Ecken (rounded-2xl) fuer Karten und Formulare

---

## 4. Seitenstruktur — Seiten die gebaut werden muessen

### 4.1 Startseite (index.astro)

Sections in dieser Reihenfolge:

1. **Header/Navigation** — Sticky, Logo "IG Ideale Gebaeudereinigung", Links: Start, Privat, Gewerbe, Leistungen (Dropdown mit allen Services), Ablauf, Bewertungen, FAQ, Kontakt. Rechts: Telefonnummer + "Angebot anfragen" CTA-Button.

2. **Hero** — Dunkler Hintergrund mit Glow-Effekt. Split-Layout:
   - Links: Ueberschrift "Sauberkeit in Ihrem Ort – schnell, gruendlich, fair", Subtext, 2 CTAs (Sofort-Angebot, Leistungen ansehen), Trust-Badges (100% Qualitaet, 24/7, Deutschlandweit)
   - Rechts: Glassmorphism Schnellanfrage-Formular (Name, Email, Telefon, Nachricht, Submit)
   - **Headline darf NICHT vom Formular ueberlappt werden** — sauberes Grid mit Gap

3. **Ueber Uns Section** — "Wir sind Sauberkeit. Wir sind Ideale. Wir sind Zukunft." Langer Text von der aktuellen Site uebernehmen. Stats: 100% Qualitaetskontrolle, 24/7 Verfuegbarkeit, Deutschlandweit.

4. **Services Section** — "Umfangreiche Reinigungsloesungen fuer jeden Bedarf". Alle 17 Services als Cards mit echten Fotos. Services siehe Abschnitt 5.

5. **Warum Ideale Section** — 3 Punkte: Schnell & Zuverlaessig, Gruendlich & Professionell, Fair & Transparent. Icons + kurze Texte.

6. **Anfrage-Rechner** — Interaktive Section:
   - Objektname (Text)
   - Quadratmeter (Zahl-Input)
   - Raeume (optional, Zahl)
   - WC/Sanitaer (optional, Zahl)
   - Intervall (Dropdown: einmalig, woechentlich, 2x woechentlich, monatlich)
   - Kontaktdaten: Name, Telefon, Email
   - Netlify Forms name="hauptseite-rechner"

7. **CTA Section** — "Bereit fuer eine Ideale Reinigung?" + "Angebot anfragen" Button

8. **Footer** — 3 Spalten: Service (Leistungen, Anfrage, Einsatzgebiete, Referenzen), Info (Ueber uns, FAQ, Kontakt, Datenschutz), Kontakt (Email, Telefon, Adresse, 24/7). Copyright.

9. **Floating WhatsApp + Telefon** — Sticky unten rechts, WhatsApp-Button gruen (#25D366), Telefon-Badge darueber.

10. **Cookie-Banner** — Consent Mode v2, gleich wie Frankfurt-Site.

### 4.2 Unterseiten

Erstelle folgende Seiten als eigenstaendige .astro Files:

- `/privat` — Reinigung fuer Privat und mehr (Privatkundeninfo)
- `/gewerbe` — Reinigung fuer Gewerbe (Gewerbekundeninfo)
- `/ablauf` — "So laeufts ab" Prozesserklaerung in 4-5 Schritten
- `/bewertungen` — Kundenbewertungen (Platzhalter mit TODO-Kommentar fuer echte Bewertungen)
- `/faq` — Haeufig gestellte Fragen (8-10 Fragen mit details/summary)
- `/kontakt` — Kontaktformular (ausfuehrlicher als Schnellanfrage), Adresse, Karte-Platzhalter
- `/impressum` — Pflichtangaben nach §5 TMG (gleich wie Frankfurt)
- `/datenschutz` — DSGVO-konform (gleich wie Frankfurt)
- `/danke` — Dankesseite nach Formular-Submit

### 4.3 Einsatzgebiete-Seite

Erstelle `/einsatzgebiete` mit einer Liste aller Staedte:
Hannover, Frankfurt am Main, Goettingen, Dortmund, Kassel, Northeim, Minden, Nordhausen, Heiligenstadt (Eichsfeld), Eschwege, Leipzig, Halle (Saale), Berlin, Braunschweig, Salzgitter, Essen, Koeln, Duesseldorf

**SEO-Wichtig:** Fuer jede Stadt spaeter eigene Landingpages moeglich (Phase 2), aktuell nur eine Uebersichtsseite.

---

## 5. Alle 17 Services

Jeder Service braucht eine Card auf der Startseite mit Foto. Lade die Bilder von den Shopify-CDN-URLs herunter und speichere sie lokal in public/images/services/:

```
1.  Fassadenreinigung        — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/IMG_1906.jpg
2.  Wintergartenreinigung    — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/IMG_1292.jpg
3.  Hohe Fensterreinigung    — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/IMG_1973.jpg
4.  Lamellenreinigung        — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/IMG_1715.jpg
5.  Sonderreinigung          — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/61585d9e-85f5-4af6-a963-d73ea6bbd835.jpg
6.  Praxisreinigung          — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/3a3779df-2c2c-4b3c-87bd-2a67d19d0d0a.jpg
7.  Fensterreinigung         — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/b4a817de-b5b1-45e8-ab28-ed7639405a20.jpg
8.  Sanitaerreinigung        — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/IMG_2513_1.jpg
9.  Gebaeudereinigung        — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/2bd5535147e137cd1e4066b41be73f46.jpg
10. Bauendreinigung          — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/image_7.jpg
11. Kitareinigung            — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/kita-reinigung-berlin.jpg
12. Kanzleireinigung         — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/kanzleireinigung1.jpg
13. Treppenhausreinigung     — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/Reinigung-des-Treppenhauses-mit-Wischmopp.webp
14. Bueroreinigung           — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/Bueroreinigung-Hannover-von-Fiduz-Schreibtisch-1200x800_jpeg.webp
15. Chemiereinigung          — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/20240316_cws-cleanrooms-reinraum_584_foto_mario-andreya_1_jpg.webp
16. Steinreinigung           — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/steinreinigung-steine-reinigen-versiegeln-scaled.jpg
17. Winterdienst             — https://cdn.shopify.com/s/files/1/0836/2360/8663/files/Bild_Winterdienst.jpg
```

Lade diese Bilder mit curl/wget herunter in public/images/services/ mit sprechenden Dateinamen (fassadenreinigung.jpg, wintergartenreinigung.jpg, etc.). Nutze normale img-Tags, NICHT die Astro Image-Komponente (die komprimiert zu stark).

---

## 6. 301-Redirect-Map (Shopify → Neue Site)

In `netlify.toml` muessen diese Redirects stehen damit keine SEO-Rankings verloren gehen:

```toml
[[redirects]]
  from = "/pages/kontakt"
  to = "/kontakt"
  status = 301

[[redirects]]
  from = "/pages/reinigung-fur-privat-und-mehr"
  to = "/privat"
  status = 301

[[redirects]]
  from = "/pages/reinigung-fur-Gewerbe"
  to = "/gewerbe"
  status = 301

[[redirects]]
  from = "/pages/ablauf"
  to = "/ablauf"
  status = 301

[[redirects]]
  from = "/pages/bewertung"
  to = "/bewertungen"
  status = 301

[[redirects]]
  from = "/pages/faq"
  to = "/faq"
  status = 301

[[redirects]]
  from = "/pages/fensterreinigung"
  to = "/#services"
  status = 301

[[redirects]]
  from = "/collections/*"
  to = "/"
  status = 301

[[redirects]]
  from = "/products/*"
  to = "/"
  status = 301
```

---

## 7. Tracking-Setup

Gleich wie Frankfurt-Site:

- GTM Container: GTM-MQWKFKRP (direkt einsetzen, nicht als Platzhalter)
- Consent Mode v2 VOR dem GTM-Script
- Cookie-Banner mit "Alle akzeptieren", "Nur notwendige", "Einstellungen"
- dataLayer Events: phone_click, whatsapp_click, form_submit, scroll_depth
- Conversion-Werte: Phone 50 EUR, WhatsApp 40 EUR, Form 80 EUR
- GA4 und Google Ads IDs als Platzhalter in .env.example

---

## 8. SEO-Setup

- Schema.org: LocalBusiness (CleaningService), FAQPage, Service schemas
- Meta-Tags pro Seite: title, description, canonical, og:tags
- Startseite Title: "Ideale Gebaeudereinigung — Professionelle Reinigung deutschlandweit | Goettingen"
- Sitemap via @astrojs/sitemap
- robots.txt
- Hreflang de

---

## 9. Netlify-Konfiguration

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

Plus die 301-Redirects aus Abschnitt 6.

---

## 10. Impressum & Datenschutz

Gleiche Struktur wie Frankfurt-Site. Pflichtangaben:
- Jamal Jaafar, Kasseler Landstrasse 80a, 37081 Goettingen
- Telefon: 0551 50316976
- Email: info@ideale-gebaeudereinigung.de
- USt-IdNr.: DE361832333
- Hinweis: Datenschutz muss vor Go-Live rechtlich geprueft werden (TODO-Kommentar im Code)

---

## 11. Tasks-Reihenfolge

1. Astro + Tailwind + Sitemap initialisieren
2. Tailwind Config mit Brand-Tokens, global.css, Fonts lokal
3. Git init, .gitignore, .nvmrc, README
4. Data-Files: site.ts, services.ts (alle 17!), faq.ts
5. Layout: BaseLayout mit Meta/SEO/Schema.org/GTM/ConsentMode
6. UI-Komponenten: Button, CallButton, WhatsAppButton, ServiceCard
7. Layout-Komponenten: Header (mit Dropdown-Navigation!), Footer, CookieBanner
8. Tracking: GTM, ConsentMode, tracking.ts Helpers
9. Bilder von Shopify-CDN herunterladen nach public/images/services/
10. Hero Section (Split-Layout, Formular rechts, KEIN Ueberlappen)
11. Ueber-Uns Section, Stats
12. Services Section (alle 17 Cards mit echten Fotos)
13. Warum-Ideale Section
14. Anfrage-Rechner Section
15. CTA Section
16. Floating WhatsApp + Telefon
17. Startseite (index.astro) zusammenbauen
18. Unterseiten: privat, gewerbe, ablauf, bewertungen, faq, kontakt, einsatzgebiete
19. Impressum + Datenschutz + Danke + 404
20. netlify.toml mit 301-Redirects
21. npm run build — 0 Errors
22. Git commit + push zu origin main

Am Ende: Zusammenfassung was fertig ist + TODO-Liste fuer Dzemo.

---

## 12. Wichtige Regeln

1. Keine erfundenen Daten — Platzhalter mit TODO-Kommentar wo noetig
2. Tracking-IDs nicht hardcoden ausser GTM-MQWKFKRP (der ist fix)
3. Mobile-First immer
4. Bilder als normale img-Tags, NICHT Astro Image (komprimiert zu stark)
5. Eine h1 pro Seite
6. Accessibility: WCAG AA Kontraste, aria-labels, Focus-States
7. Performance: Bilder lazy-load ausser Hero, Fonts font-display:swap
8. Conventional Commits (feat:, fix:, chore:)
9. Hero-Headline darf NIEMALS vom Formular ueberlappt werden

**Ende des Briefings.**
