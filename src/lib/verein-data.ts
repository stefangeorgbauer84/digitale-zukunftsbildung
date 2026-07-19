export const VEREIN = {
  name: 'Verein zur Entwicklung der digitalen Zukunftsbildung',
  kurzname: 'Digitale Zukunftsbildung',
  zvr: '1781551798',
  gruendungsjahr: 2022,
  adresse: {
    strasse: 'Johann-Roithner-Straße 131',
    ort: '4050 Traun',
    land: 'Österreich',
  },
  kontakt: {
    email: 'info@digitale-zukunftsbildung.eu',
    telefon: '+43 650 215 8715',
    linkedin: 'https://linkedin.com/company/verein-zur-entwicklung-der-digitalen-zukunftsbildung',
  },
  vorstand: [
    {
      name: 'Dr. Stefan Bauer',
      rolle: 'Obmann',
      beschreibung:
        'Bildungswissenschafter & Gründer des Vereins. Entwickelt Skills-UP! als praxisnahes Finanzbildungsprogramm für österreichische Schulen.',
    },
  ],
  mission:
    'Wir bringen echte Finanzkompetenz zu Jugendlichen ab 15 Jahren — praxisnah, digital und sofort einsetzbar.',
  programme: [
    {
      id: 'skillsup',
      name: 'Skills-UP!',
      beschreibung:
        'Finanzbildungsprogramm für AHS, BHS und PTS. 12+ Module, 10+ Praxissimulationen, lehrplankonform.',
      url: '/',
      schularten: ['AHS', 'HAK', 'HTL', 'HLW', 'BAfEP', 'PTS', 'Berufsschule'] as string[],
    },
    {
      id: 'aktiengame',
      name: 'Aktiengame',
      beschreibung:
        'Praxissimulation Börsenhandel — gamifiziert, DSGVO-sicher, sofort einsetzbar.',
      url: '/aktiengame',
      schularten: ['AHS', 'HAK', 'HTL', 'HLW', 'BAfEP'] as string[],
    },
  ],
  auszeichnungen: [
    {
      titel: 'Top-3 MEGA Bildungsmillion 2025',
      organisation: 'MEGA Bildungsstiftung',
      jahr: 2025,
    },
    {
      titel: 'Nationale Finanzbildungsstrategie',
      organisation: 'Bundesministerium für Finanzen',
      jahr: 2024,
    },
    {
      titel: 'Gütesiegel Lern-Apps',
      organisation: 'Österreichisches Institut für angewandte Telekommunikation',
      jahr: 2024,
    },
  ],
  reichweite: {
    schuelerInnen: 1830,
    schulen: 24,
    bundeslaender: 7,
  },
} as const
