// Stammdaten des Vereins laut Vereinsregisterauszug vom 17.11.2026.
// Einzige Quelle für Anschrift und Registerdaten: Impressum, Datenschutz, Footer und JSON-LD lesen von hier.
export const VEREIN = {
  name: 'Verein zur Entwicklung der digitalen Zukunftsbildung',
  kurzname: 'Digitale Zukunftsbildung',
  zvr: '1093499022',
  sitz: 'Wien',
  entstehung: '13.12.2021',
  behoerde: 'Landespolizeidirektion Wien, Referat Vereins-, Versammlungs- und Medienrechtsangelegenheiten',
  adresse: {
    strasse: 'Maderstraße 1/2',
    plz: '1040',
    ort: 'Wien',
    land: 'Österreich',
    zeile: 'Maderstraße 1/2, 1040 Wien',
  },
  // Die Anschrift liegt im Education Lab.
  standort: { name: 'Education Lab', url: 'https://www.edlab.at' },
  vorstand: {
    obfrau: 'Marina Winkler, MA',
    stellvertretung: 'Dr. Stefan Bauer',
    funktionsperiode: '26.02.2025 bis 25.02.2027',
  },
} as const

export const VEREIN_POSTAL_ADDRESS = {
  '@type': 'PostalAddress',
  streetAddress: VEREIN.adresse.strasse,
  addressLocality: VEREIN.adresse.ort,
  postalCode: VEREIN.adresse.plz,
  addressCountry: 'AT',
} as const
