// Inhalte der Wirkungsmessung Skills-UP!, angewandt auf die Modelle des Kompetenzzentrums
// für Nonprofit-Organisationen und Social Entrepreneurship der WU Wien.
// Spec und Quellen: CLAUDE-COWORK/CLAUDE-OUTPUTS/digitale-zukunftsbildung/wirkungsmessung-2026-11-04/spec.md
// Plattformzahlen: Abfrage kennzahlen_quartal.sql, Stand 04.11.2026.

export type Beleg = 'gemessen' | 'verein' | 'geplant' | 'hypothese'

export const BELEG: Record<Beleg, { label: string; erklaerung: string; bg: string; fg: string; rand: string }> = {
  gemessen: {
    label: 'gemessen',
    erklaerung: 'aus den Plattformdaten von Skills-UP!, Stand 4. November 2026',
    bg: '#E6F4F1',
    fg: '#1E6B5B',
    rand: 'solid',
  },
  verein: {
    label: 'Vereinsangabe',
    erklaerung: 'eigene Erhebung oder Zählung des Vereins, extern noch nicht geprüft',
    bg: '#EDE9F7',
    fg: '#4a2d8a',
    rand: 'solid',
  },
  geplant: {
    label: 'geplant',
    erklaerung: 'Ziel oder vorgesehene Messung, noch nicht umgesetzt',
    bg: '#FDF0E6',
    fg: '#8A4210',
    rand: 'solid',
  },
  hypothese: {
    label: 'Hypothese',
    erklaerung: 'erwartete Wirkung im Wirkungsmodell, noch nicht gemessen',
    bg: '#F1F3F5',
    fg: '#495057',
    rand: 'dashed',
  },
}

export const STAND = '4. November 2026'

/* ------------------------------------------------------------------ */
/* 1. Wirkungskette                                                     */
/* ------------------------------------------------------------------ */

export type Kettenglied = {
  id: string
  titel: string
  frage: string
  punkte: { text: string; beleg: Beleg }[]
}

export const KETTE_LEISTUNG: Kettenglied[] = [
  {
    id: 'input',
    titel: 'Input',
    frage: 'Was setzen wir ein?',
    punkte: [
      { text: 'Budget 2026: 100.000 €, davon 66.000 € MEGA Bildungsstiftung, 18.000 € öffentliche Mittel und Marktplatz Lern-Apps, 10.500 € eigene Erlöse, 5.500 € offen', beleg: 'verein' },
      { text: 'Budget seit Projektstart: 227.000 €', beleg: 'verein' },
      { text: 'Kernteam 2 Vollzeitäquivalente, Trainingsteam 4 Personen, technisch-didaktische Unterstützung 2 Personen', beleg: 'verein' },
      { text: 'Zeit der Lehrkräfte und Unterrichtsstunden der Schulen', beleg: 'hypothese' },
    ],
  },
  {
    id: 'aktivitaeten',
    titel: 'Aktivitäten',
    frage: 'Was tun wir?',
    punkte: [
      { text: '15 veröffentlichte Module in sechs Themenbereichen, je etwa 15 Minuten', beleg: 'gemessen' },
      { text: 'Peer-Videos, Simulationen, Modulquiz am Ende jedes Moduls', beleg: 'gemessen' },
      { text: 'Workshops an Berufsschulen und in Lehrbetrieben, drei je Berufsschule', beleg: 'verein' },
      { text: 'Lehrkraft-Dashboard mit Klassen, Lernpfaden und Fristen', beleg: 'gemessen' },
      { text: 'Fortbildung von Lehrkräften und Lehrauftrag an einer Pädagogischen Hochschule', beleg: 'verein' },
    ],
  },
  {
    id: 'output',
    titel: 'Output',
    frage: 'Wie viel und wen erreichen wir?',
    punkte: [
      { text: '264 registrierte Lernende auf der Plattform, 128 im 4. Quartal aktiv', beleg: 'gemessen' },
      { text: '40 Lernende mit bestandenem Modulquiz im 4. Quartal', beleg: 'gemessen' },
      { text: '443 Lehrlinge seit 2022 direkt in Workshops begleitet, davon 240 im Jahr 2026', beleg: 'verein' },
      { text: '1.387 vergebene Lizenzen über den Marktplatz Lern-Apps', beleg: 'verein' },
      { text: '24 eingebundene Lehrkräfte an 4 Berufsschulen, 12 Workshops', beleg: 'verein' },
    ],
  },
]

export const KETTE_WIRKUNG = {
  bruttoIntendiert: {
    titel: 'Intendierte Bruttowirkungen',
    punkte: [
      { text: 'Wissen am Modulende: 89,8 % richtige Antworten im ersten Quizversuch, 4. Quartal (ohne Vortest, also kein Zuwachs belegt)', beleg: 'gemessen' as Beleg },
      { text: 'Lernende fühlen sich sicherer bei Geldentscheidungen (Einstellung)', beleg: 'hypothese' as Beleg },
      { text: 'Lernende budgetieren, sparen auf ein Ziel, vergleichen vor dem Kauf (Verhalten)', beleg: 'verein' as Beleg },
      { text: 'Lehrkräfte unterrichten Finanzbildung regelmäßig und mit weniger Vorbereitung', beleg: 'hypothese' as Beleg },
    ],
  },
  bruttoUnintendiert: {
    titel: 'Unintendierte Bruttowirkungen',
    punkte: [
      { text: 'Geld wird in der Familie zum Gesprächsthema (positiv)', beleg: 'hypothese' as Beleg },
      { text: 'Druck oder Scham bei Lernenden mit Schulden in der Familie (negativ)', beleg: 'hypothese' as Beleg },
      { text: 'Selbstüberschätzung nach dem Modul Investieren oder Krypto (negativ)', beleg: 'hypothese' as Beleg },
    ],
  },
  deadweight: {
    titel: 'Deadweight',
    text: 'Was wäre ohne Skills-UP! ohnehin passiert? Lernende, die das Wissen schon vorher hatten oder es aus Elternhaus, Bank oder dem neuen Pflichtfach ab 2027 bekommen hätten. Wird heute nicht gemessen: es fehlen Vortest und Vergleichsklassen.',
    beleg: 'geplant' as Beleg,
  },
  netto: {
    titel: 'Nettowirkung (Impact)',
    text: 'Der Anteil der Veränderung, der auf Skills-UP! zurückgeht. Rechnung: Zuwachs der Skills-UP!-Klassen minus Zuwachs vergleichbarer Klassen ohne Skills-UP!. Erst mit Vergleichsgruppe belegbar.',
    beleg: 'geplant' as Beleg,
  },
}

/* ------------------------------------------------------------------ */
/* 2. Stakeholder                                                       */
/* ------------------------------------------------------------------ */

export type Stakeholder = {
  kategorie: string
  akteure: string
  wirkung: string
  prioritaet: 1 | 2 | 3
  eigene?: boolean
}

// Reihenfolge entspricht dem Ring im Uhrzeigersinn, beginnend oben links.
export const STAKEHOLDER: Stakeholder[] = [
  { kategorie: 'Begünstigte', akteure: 'Lehrlinge an Berufsschulen und in Lehrbetrieben, Jugendliche ab 15 an AHS, BHS und PTS', wirkung: 'Finanzwissen, Sicherheit und Verhalten im Umgang mit Geld', prioritaet: 1 },
  { kategorie: 'Lehrkräfte', akteure: 'Lehrkräfte an Berufsschulen, AHS, BHS und PTS', wirkung: 'Weniger Vorbereitung, Sicherheit im Thema, Finanzbildung im Jahresplan', prioritaet: 1, eigene: true },
  { kategorie: 'Angehörige der Begünstigten', akteure: 'Eltern und Erziehungsberechtigte, Geschwister', wirkung: 'Geld wird zu Hause besprochen, weniger Konflikte um Geld', prioritaet: 3 },
  { kategorie: 'Mitarbeitende', akteure: 'Kernteam des Vereins, Trainingsteam, technisch-didaktische Unterstützung', wirkung: 'Kompetenzaufbau, Professionalisierung der Wirkungsmessung', prioritaet: 3 },
  { kategorie: 'Lehrbetriebe', akteure: 'Ausbildungsbetriebe wie TGW Logistics, überbetriebliche Lehrwerkstätten', wirkung: 'Finanzbildung wird Teil der Lehrlingsausbildung, weniger Geldsorgen im Betrieb', prioritaet: 2, eigene: true },
  { kategorie: 'Freiwillige', akteure: 'Jugendbeirat mit fünf Jugendlichen aus Wien, Oberösterreich und Kärnten', wirkung: 'Mitsprache, Inhalte in der Sprache der Zielgruppe', prioritaet: 3 },
  { kategorie: 'Geldgebende', akteure: 'MEGA Bildungsstiftung, öffentliche Mittel, Unternehmenspartner', wirkung: 'Belegter Gegenwert für eingesetzte Mittel', prioritaet: 2 },
  { kategorie: 'Staat, Länder, Gemeinden', akteure: 'Bildungsministerium mit Marktplatz Lern-Apps, Bildungsdirektionen, Nationale Finanzbildungsstrategie', wirkung: 'Praxisevidenz für die Strategie, geprüftes Angebot für das Pflichtfach ab 2027', prioritaet: 2 },
  { kategorie: 'Zulieferung', akteure: 'Hosting, Videoplattform, Video- und Grafikproduktion', wirkung: 'Aufträge aus dem Bildungsbereich', prioritaet: 3 },
  { kategorie: 'Kooperationspartner', akteure: 'Berufsschulen, Hochschule Burgenland, FH CAMPUS 02, Pädagogische Hochschule, Schuldnerberatung Burgenland, AK Wien, WKO, 180 Degrees Consulting', wirkung: 'Zugang zu Schulen, Forschung und Fachwissen, Anschluss an Lehrkräftebildung', prioritaet: 2 },
  { kategorie: 'Sozialversicherung', akteure: 'Sozialsystem und Schuldnerberatungen', wirkung: 'Langfristig weniger Überschuldung junger Menschen', prioritaet: 3 },
  { kategorie: 'Allgemeine Bevölkerung', akteure: 'Gesellschaft in Österreich', wirkung: 'Höhere finanzielle Allgemeinbildung im OECD-Vergleich', prioritaet: 3 },
]

/* ------------------------------------------------------------------ */
/* 3. Sieben Schritte                                                   */
/* ------------------------------------------------------------------ */

export type Stand = 'erledigt' | 'entwurf' | 'teilweise' | 'offen'

export const STAND_STIL: Record<Stand, { label: string; bg: string; fg: string }> = {
  erledigt: { label: 'erledigt', bg: '#E6F4F1', fg: '#1E6B5B' },
  entwurf: { label: 'Entwurf', bg: '#EDE9F7', fg: '#4a2d8a' },
  teilweise: { label: 'teilweise', bg: '#FDF0E6', fg: '#8A4210' },
  offen: { label: 'offen', bg: '#F1F3F5', fg: '#495057' },
}

export type Schritt = { nr: string; titel: string; stand: Stand; text: string; optional?: boolean; unter?: boolean }

export const ZWECK =
  'Wir wollen wissen, ob Skills-UP! Jugendliche im Umgang mit Geld tatsächlich stärkt, und das gegenüber Schulen, Geldgebenden und dem Bildungsministerium belegen. Die Messung dient der Steuerung im Quartal, der Strategie bis Ende 2027 und der Kommunikation der Wirkung.'

export const SCHRITTE: Schritt[] = [
  { nr: '1', titel: 'Grundlegende Wirkungslogik', stand: 'entwurf', text: 'Wirkungskette von Input bis Impact für Skills-UP! beschrieben (Abschnitt Wirkungskette).' },
  { nr: '2', titel: 'Stakeholder und Wirkungsbetroffene', stand: 'entwurf', text: 'Zwölf Gruppen benannt, darunter Lehrkräfte und Lehrbetriebe als eigene Gruppen, je mit Priorität.' },
  { nr: '3', titel: 'Hypothetisches Wirkungsmodell', stand: 'entwurf', text: 'Wirkungen je Gruppe als Hypothesen formuliert und in der Wirkungsbox nach Ebene, Zeit und Dimension geordnet.' },
  { nr: '4', titel: 'Priorisierung und Wirkungsziele', stand: 'teilweise', optional: true, text: 'Priorität 1: Lernende und Lehrkräfte. Ziele bis Ende 2027 laut Strategie: mindestens 740 direkt erreichte Lehrlinge, mindestens 42 eingebundene Lehrkräfte und Ausbildungsverantwortliche, Inhalte um 25 % erweitern.' },
  { nr: '5', titel: 'Datenerhebung und Wirkungsmessung', stand: 'teilweise', optional: true, text: 'Plattformdaten laufen automatisch je Quartal. Befragung am Modulende, Vortest und Follow-up fehlen auf der Plattform.' },
  { nr: '5a', titel: 'Untersuchungsdesign', stand: 'offen', optional: true, unter: true, text: 'Vorschlag: Vortest am Modulstart, Nachtest am Modulende, Follow-up nach drei Monaten, Vergleichsklassen, die Skills-UP! erst ein Semester später nutzen.' },
  { nr: '5b', titel: 'Identifikation und tieferes Verständnis', stand: 'teilweise', optional: true, unter: true, text: 'Qualitative Rückmeldungen aus Workshops und Interviews mit Lehrlingen (Vereinsangabe: 312 Rückmeldungen seit 2022).' },
  { nr: '5c', titel: 'Quantifizierung von Breite und Intensität', stand: 'teilweise', optional: true, unter: true, text: 'Kennzahlenbaum mit 21 Plattformkennzahlen je Quartal. Intensität der Wirkung (Vorher-nachher) noch nicht messbar.' },
  { nr: '5d', titel: 'Aufbereitung und Analyse', stand: 'erledigt', optional: true, unter: true, text: 'Automatischer Quartalsbericht als Excel-Datei, am 1. und 7. Jänner, April, Juli und Oktober.' },
  { nr: '6', titel: 'Beurteilung und Bewertung', stand: 'offen', optional: true, text: 'Erst mit Deadweight möglich. Danach Kosten je Wirkung und optional Social Return on Investment.' },
  { nr: '7', titel: 'Verdichtung und Darstellung', stand: 'entwurf', text: 'Diese Seite und der Quartalsbericht.' },
]

export const VERWENDUNG = [
  { titel: 'Kommunikation der Wirkungen', text: 'Berichte an MEGA Bildungsstiftung, Marktplatz Lern-Apps, Schulen und Bildungsdirektionen.' },
  { titel: 'Strategiearbeit anhand der Wirkungen', text: 'Welche Module, Zielgruppen und Bundesländer zuerst ausbauen, Strategie bis Ende 2027.' },
  { titel: 'Steuerung anhand der Wirkungen', text: 'Quartalskennzahlen: wo Lernende abbrechen, welche Klassen aktiv bleiben, welche Inhalte fehlen.' },
]

/* ------------------------------------------------------------------ */
/* 4. Wirkungsmodell                                                    */
/* ------------------------------------------------------------------ */

export const MODELL = {
  input: ['Finanzielle Mittel', 'Zeit und Engagement des Teams', 'Netzwerk zu Schulen und Betrieben', 'Know-how Finanzbildung und Didaktik', 'Digitale Plattform', 'Gütesiegel Lern-Apps', 'Jugendbeirat'],
  aktivitaeten: ['Module und Peer-Videos', 'Simulationen', 'Modulquiz', 'Workshops an Berufsschulen', 'Workshops in Lehrbetrieben', 'Lehrkraft-Dashboard', 'Fortbildung von Lehrkräften', 'Lehrplanmapping je Schulart', 'Mitarbeit in der Nationalen Finanzbildungsstrategie', 'Forschung mit Hochschulen'],
  output: [
    { text: '264 registrierte Lernende', beleg: 'gemessen' as Beleg },
    { text: '128 aktive Lernende im 4. Quartal', beleg: 'gemessen' as Beleg },
    { text: '40 Lernende mit bestandenem Modulquiz im 4. Quartal', beleg: 'gemessen' as Beleg },
    { text: '15 Module, sechs Themenbereiche', beleg: 'gemessen' as Beleg },
    { text: '108 Konten von Lehrkräften', beleg: 'gemessen' as Beleg },
    { text: '443 direkt begleitete Lehrlinge', beleg: 'verein' as Beleg },
    { text: '1.387 Lizenzen Marktplatz Lern-Apps', beleg: 'verein' as Beleg },
    { text: '24 eingebundene Lehrkräfte', beleg: 'verein' as Beleg },
    { text: '4 Berufsschulen, 12 Workshops', beleg: 'verein' as Beleg },
  ],
  wirkungen: [
    { gruppe: 'Lernende', punkte: ['Verstehen Lohnzettel, Budget, Kredit- und Ratenkosten', 'Erkennen Konsumfallen und Phishing', 'Setzen sich ein Sparziel und halten es ein', 'Vergleichen vor dem Kauf', 'Treffen Geldentscheidungen sicherer und mit weniger Stress'] },
    { gruppe: 'Lehrkräfte', punkte: ['Sparen Vorbereitungszeit', 'Fühlen sich sicher im Thema', 'Bauen Finanzbildung fest in den Jahresplan ein', 'Sehen, wo die Klasse steht'] },
    { gruppe: 'Schulen und Lehrbetriebe', punkte: ['Erfüllen das übergreifende Thema Wirtschafts-, Finanz- und Verbraucherbildung', 'Sind vorbereitet auf das Pflichtfach ab 2027', 'Machen Finanzbildung zum Teil der Ausbildung'] },
    { gruppe: 'Eltern und Familien', punkte: ['Sprechen öfter über Geld', 'Erleben weniger Konflikte um Geld'] },
    { gruppe: 'Bildungssystem und Staat', punkte: ['Bekommen Praxisdaten für die Nationale Finanzbildungsstrategie', 'Haben ein geprüftes Angebot im Marktplatz Lern-Apps'] },
    { gruppe: 'Hochschulen und Forschung', punkte: ['Gewinnen Daten zur Wirkung von Peer-Learning', 'Bringen den Ansatz in die Ausbildung künftiger Lehrkräfte'] },
    { gruppe: 'Geldgebende', punkte: ['Sehen belegten Gegenwert je eingesetztem Euro', 'Können Skalierung gezielt fördern'] },
    { gruppe: 'Gesellschaft', punkte: ['Weniger Überschuldung junger Menschen', 'Höhere finanzielle Allgemeinbildung'] },
  ],
}

/* ------------------------------------------------------------------ */
/* 5. Wirkungskette je Stakeholder                                      */
/* ------------------------------------------------------------------ */

export type KettenZeile = {
  stakeholder: string
  input: string[]
  aktivitaeten: string[]
  output: string[]
  brutto: string[]
  deadweight: string[]
  netto: string[]
}

export const KETTEN_TABELLE: KettenZeile[] = [
  {
    stakeholder: 'Lernende (Lehrlinge, Jugendliche ab 15)',
    input: ['Zeit: etwa 15 Minuten je Modul', 'Unterrichtsstunden', 'Smartphone oder Schulgerät'],
    aktivitaeten: ['Module mit Peer-Videos', 'Simulationen wie erste Wohnung, Konto, Gehaltsverhandlung', 'Modulquiz', 'Workshops'],
    output: ['Anzahl aktiver Lernender je Quartal', 'Anzahl abgeschlossener Module', 'Anzahl bestandener Modulquiz', 'Anzahl Workshop-Teilnahmen'],
    brutto: ['Wissenszuwachs zu Budget, Lohnzettel, Kredit', 'Mehr Sicherheit bei Geldentscheidungen', 'Sparziel gesetzt und erreicht', 'Unintendiert: Gespräche zu Hause über Geld'],
    deadweight: ['Anteil der Lernenden, die die Fragen schon im Vortest richtig beantworten', 'Zuwachs in Vergleichsklassen ohne Skills-UP!'],
    netto: ['Auf Skills-UP! zurückführbarer Wissenszuwachs', 'Auf Skills-UP! zurückführbare Änderung im Sparverhalten'],
  },
  {
    stakeholder: 'Lehrkräfte',
    input: ['Zeit zum Anlegen einer Klasse', 'Unterrichtsstunden', 'Fortbildungszeit'],
    aktivitaeten: ['Lehrkraft-Dashboard', 'Lernpfade und Fristen', 'Unterrichtsmaterial', 'Fortbildung'],
    output: ['Anzahl Lehrkräfte mit aktiver Klasse', 'Anzahl Klassen mit Lernpfad oder Frist', 'Anzahl Fortbildungen'],
    brutto: ['Weniger Vorbereitungszeit', 'Mehr Sicherheit im Thema', 'Finanzbildung fest im Jahresplan'],
    deadweight: ['Lehrkräfte, die Finanzbildung ohnehin unterrichten würden, ab 2027 auch wegen des Pflichtfachs'],
    netto: ['Zusätzliche Unterrichtsstunden Finanzbildung durch Skills-UP!'],
  },
  {
    stakeholder: 'Schulen und Lehrbetriebe',
    input: ['Lizenz- oder Workshopkosten', 'Räume und Geräte'],
    aktivitaeten: ['Workshops vor Ort, drei je Berufsschule', 'Plattformzugang', 'Lehrplanmapping'],
    output: ['Anzahl Schulen mit aktiven Klassen', 'Anzahl Workshops', 'Anzahl Lehrbetriebe'],
    brutto: ['Finanzbildung als fester Teil von Unterricht und Ausbildung', 'Lehrplan Thema Wirtschafts-, Finanz- und Verbraucherbildung abgedeckt'],
    deadweight: ['Andere Angebote, die die Schule sonst genutzt hätte, etwa Bankworkshops oder Schuldnerberatung'],
    netto: ['Schulen und Betriebe, die Finanzbildung nur wegen Skills-UP! dauerhaft verankern'],
  },
  {
    stakeholder: 'Bildungssystem und Staat',
    input: ['Öffentliche Mittel und Marktplatz Lern-Apps', 'Prüfung für das Gütesiegel'],
    aktivitaeten: ['Mitarbeit in der Nationalen Finanzbildungsstrategie', 'Angebot im Marktplatz Lern-Apps'],
    output: ['Anzahl vergebener Lizenzen', 'Anzahl eingebrachter Empfehlungen'],
    brutto: ['Praxisevidenz für die Strategie', 'Geprüftes Angebot für das Pflichtfach ab 2027'],
    deadweight: ['Hoch: Marktplatz und Strategie bestehen auch ohne Skills-UP!'],
    netto: ['Empfehlungen und Unterrichtspraxis, die nachweislich auf Daten von Skills-UP! beruhen'],
  },
]

/* ------------------------------------------------------------------ */
/* 6. Wirkungsbox                                                       */
/* ------------------------------------------------------------------ */

export type Dimension = 'ökonomisch' | 'sozial' | 'politisch' | 'ökologisch' | 'kulturell' | 'psychisch'

export const DIMENSION_FARBE: Record<Dimension, string> = {
  ökonomisch: '#1E6B5B',
  sozial: '#4a2d8a',
  politisch: '#8A4210',
  ökologisch: '#495057',
  kulturell: '#6b4db0',
  psychisch: '#9b3b3b',
}

export type BoxZelle = { text: string; dim: Dimension }[]

export const EBENEN = ['Mikroebene (einzelne Person)', 'Mesoebene (Schule, Betrieb, Verein)', 'Makroebene (Gesellschaft)'] as const
export const ZEITEN = ['kurzfristig', 'mittelfristig', 'langfristig'] as const

export const WIRKUNGSBOX: BoxZelle[][] = [
  [
    [
      { text: 'Versteht Lohnzettel, Budget und Ratenkosten', dim: 'ökonomisch' },
      { text: 'Traut sich zu, über Geld zu reden', dim: 'psychisch' },
    ],
    [
      { text: 'Hält ein Sparziel ein, vergleicht vor dem Kauf', dim: 'ökonomisch' },
      { text: 'Weniger Geldstress', dim: 'psychisch' },
    ],
    [
      { text: 'Keine Überschuldung, Vorsorge begonnen', dim: 'ökonomisch' },
      { text: 'Finanzielle Selbstwirksamkeit', dim: 'psychisch' },
    ],
  ],
  [
    [
      { text: 'Klasse angelegt, Modul im Unterricht eingesetzt', dim: 'sozial' },
      { text: 'Workshop im Jahresplan des Betriebs', dim: 'kulturell' },
    ],
    [
      { text: 'Lehrkräfte setzen Skills-UP! jedes Jahr ein', dim: 'sozial' },
      { text: 'Finanzbildung gehört zur Lehrlingsausbildung', dim: 'kulturell' },
    ],
    [
      { text: 'Schulen erfüllen das Pflichtfach mit geprüftem Angebot', dim: 'sozial' },
      { text: 'Verein trägt sich ohne Förderung', dim: 'ökonomisch' },
    ],
  ],
  [
    [{ text: 'Praxisdaten fließen in die Nationale Finanzbildungsstrategie', dim: 'politisch' }],
    [
      { text: 'Finanzbildung im Lehrplan der Berufsschulen', dim: 'politisch' },
      { text: 'Geld ist unter Jugendlichen kein Tabu', dim: 'kulturell' },
    ],
    [
      { text: 'Höhere Financial Literacy im OECD-Vergleich', dim: 'sozial' },
      { text: 'Weniger Privatkonkurse junger Menschen', dim: 'ökonomisch' },
    ],
  ],
]

export const OEKOLOGISCH_HINWEIS =
  'Ökologisch: keine eigene Wirkung erwartet. Das Modul Konsumfallen kann nachhaltigen Konsum fördern, das ist nicht Ziel und wird nicht gemessen.'

/* ------------------------------------------------------------------ */
/* 7. Kennzahlen je Quartal                                             */
/* ------------------------------------------------------------------ */

export type Stufe = 'Output' | 'Outcome' | 'Output Meso'

// null = nicht erfasst. „eingeschraenkt“ markiert kleine Fallzahl oder Datenlücke.
export type Kpi = {
  stufe: Stufe
  name: string
  einheit: '' | '%' | 'min' | 'Punkte'
  q2: number | null
  q3: number | null
  q4: number | null
  eingeschraenkt?: ('q2' | 'q3' | 'q4')[]
  hinweis?: string
}

export const KPIS: Kpi[] = [
  { stufe: 'Output', name: 'Lernende registriert (Stand Quartalsende)', einheit: '', q2: 35, q3: 78, q4: 264 },
  { stufe: 'Output', name: 'Neue Lernende im Quartal', einheit: '', q2: 35, q3: 43, q4: 186 },
  { stufe: 'Output', name: 'Aktive Lernende im Quartal', einheit: '', q2: 23, q3: 33, q4: 128 },
  { stufe: 'Output', name: 'Anteil aktiv an Registrierten', einheit: '%', q2: 65.7, q3: 42.3, q4: 48.5 },
  { stufe: 'Output', name: 'Wiederkehr an zwei oder mehr Lerntagen', einheit: '%', q2: 4.3, q3: 15.2, q4: 1.6 },
  { stufe: 'Output', name: 'Gestartete Module je startender Person', einheit: '', q2: 2.1, q3: 2.9, q4: 1.1 },
  { stufe: 'Output', name: 'Themenbreite (Modul außerhalb Grundlagen)', einheit: '%', q2: 26.1, q3: 61.3, q4: 17.3 },
  { stufe: 'Outcome', name: 'Lernende mit bestandenem Modulquiz', einheit: '', q2: null, q3: 5, q4: 40, eingeschraenkt: ['q3'], hinweis: 'Quizversuche gespeichert ab 12. August 2026' },
  { stufe: 'Outcome', name: 'Lernende mit Modulquiz', einheit: '', q2: null, q3: 5, q4: 41, eingeschraenkt: ['q3'] },
  { stufe: 'Outcome', name: 'Abschlussquote je Modulstart', einheit: '%', q2: 75.0, q3: 32.6, q4: 29.8, eingeschraenkt: ['q2', 'q3'], hinweis: 'bis August war ein Abschluss ohne Quiz möglich' },
  { stufe: 'Outcome', name: 'Quiz im ersten Versuch bestanden', einheit: '%', q2: null, q3: 60.0, q4: 90.7, eingeschraenkt: ['q3'] },
  { stufe: 'Outcome', name: 'Erstversuch: Anteil richtiger Antworten', einheit: '%', q2: null, q3: 80.0, q4: 89.8, eingeschraenkt: ['q3'], hinweis: 'ohne Vortest kein Beleg für Lernzuwachs' },
  { stufe: 'Outcome', name: 'Verbesserung bei Wiederholung', einheit: 'Punkte', q2: null, q3: 40, q4: 60, eingeschraenkt: ['q3', 'q4'], hinweis: 'nur 2 bzw. 3 Wiederholungen' },
  { stufe: 'Outcome', name: 'Simulationsmissionen bestanden', einheit: '%', q2: null, q3: 80.0, q4: 100, eingeschraenkt: ['q3', 'q4'], hinweis: '15 bzw. 3 Missionen' },
  { stufe: 'Outcome', name: 'Zeit bis Modulabschluss (Median)', einheit: 'min', q2: 1.0, q3: 20.6, q4: 19.9, eingeschraenkt: ['q2', 'q3'] },
  { stufe: 'Output Meso', name: 'Konten von Lehrkräften (Stand Quartalsende)', einheit: '', q2: 7, q3: 22, q4: 108, eingeschraenkt: ['q2', 'q3', 'q4'], hinweis: 'Testkonten nicht markiert' },
  { stufe: 'Output Meso', name: 'Klassen mit aktiven Lernenden', einheit: '', q2: 2, q3: 4, q4: 10 },
  { stufe: 'Output Meso', name: 'Anteil Klassen mit aktiven Lernenden', einheit: '%', q2: 40.0, q3: 21.1, q4: 6.0, eingeschraenkt: ['q2', 'q3'] },
  { stufe: 'Output Meso', name: 'Klassen mit Modulfrist (Stand Quartalsende)', einheit: '', q2: 0, q3: 1, q4: 5 },
  { stufe: 'Output Meso', name: 'Klassen mit Lernpfad (Stand Quartalsende)', einheit: '', q2: 3, q3: 3, q4: 3 },
  { stufe: 'Output Meso', name: 'Anteil der größten Klasse an Aktiven', einheit: '%', q2: 94.4, q3: 73.1, q4: 39.7, eingeschraenkt: ['q2'] },
]

/* ------------------------------------------------------------------ */
/* 8. Messplan und Kirkpatrick                                          */
/* ------------------------------------------------------------------ */

export const KIRKPATRICK = [
  { ebene: 'Ebene 1: Reaktion', was: 'Zufriedenheit, wahrgenommene Nützlichkeit', methode: 'Kurze Befragung am Modulende', stand: 'In Workshops erhoben, auf der Plattform noch nicht', beleg: 'verein' as Beleg },
  { ebene: 'Ebene 2: Lernen', was: 'Wissenszuwachs', methode: 'Modulquiz, künftig mit Vortest', stand: 'Quiz gemessen seit 12. August 2026, Vortest fehlt', beleg: 'gemessen' as Beleg },
  { ebene: 'Ebene 3: Verhalten', was: 'Verhaltensänderung im Alltag', methode: 'Follow-up nach drei Monaten', stand: '90 % Verhaltensänderung bei 443 Lehrlingen, Methodenpapier und externe Publikation ausstehend', beleg: 'verein' as Beleg },
  { ebene: 'Ebene 4: Ergebnisse', was: 'Wirkung in der Gesellschaft', methode: 'Langzeitstudie', stand: 'Langzeitstudie mit FH CAMPUS 02 laut Verein gestartet', beleg: 'verein' as Beleg },
]

export const MESSPLAN = [
  { wirkung: 'Finanzwissen steigt', indikator: 'Differenz Vortest und Nachtest je Modul', methode: 'Drei Vortestfragen am Modulstart, Modulquiz am Ende', zeitpunkt: 'jedes Modul', quelle: 'Plattform', beleg: 'geplant' as Beleg },
  { wirkung: 'Mehr Sicherheit bei Geldentscheidungen', indikator: 'Selbsteinschätzung auf einer Skala von 1 bis 5, vorher und nachher', methode: 'Eine Frage am Modulstart und am Modulende', zeitpunkt: 'jedes Modul', quelle: 'Plattform', beleg: 'geplant' as Beleg },
  { wirkung: 'Modul ist nützlich', indikator: 'Anteil mit Bewertung 4 oder 5', methode: 'Eine Frage am Modulende', zeitpunkt: 'jedes Modul', quelle: 'Plattform', beleg: 'geplant' as Beleg },
  { wirkung: 'Verhalten ändert sich', indikator: 'Anteil mit Budget, Sparziel oder Preisvergleich', methode: 'Follow-up-Befragung, Orientierung am OECD/INFE Financial Literacy Framework', zeitpunkt: 'drei Monate nach dem Modul', quelle: 'Plattform oder Klasse', beleg: 'geplant' as Beleg },
  { wirkung: 'Wissen bleibt', indikator: 'Richtige Antworten bei drei wiederholten Quizfragen', methode: 'Wiederholungsfragen', zeitpunkt: 'vier Wochen nach dem Modul', quelle: 'Plattform', beleg: 'geplant' as Beleg },
  { wirkung: 'Deadweight', indikator: 'Zuwachs in Vergleichsklassen ohne Skills-UP!', methode: 'Wartekontrollgruppe: Klassen starten ein Semester später', zeitpunkt: 'je Schuljahr', quelle: 'Partnerschulen', beleg: 'geplant' as Beleg },
  { wirkung: 'Lehrkräfte bleiben dabei', indikator: 'Anteil der Lehrkräfte mit aktiver Klasse im Folgejahr', methode: 'Plattformdaten', zeitpunkt: 'je Schuljahr', quelle: 'Plattform', beleg: 'gemessen' as Beleg },
  { wirkung: 'Lernende bleiben dran', indikator: 'Aktive, Wiederkehr, Abschlussquote, Lernende mit bestandenem Modulquiz', methode: 'Quartalsbericht', zeitpunkt: 'je Quartal', quelle: 'Plattform', beleg: 'gemessen' as Beleg },
  { wirkung: 'Weiterempfehlung', indikator: 'Lehrkräfte, die Skills-UP! weiterempfehlen', methode: 'Eine Frage je Klasse', zeitpunkt: 'Schuljahresende', quelle: 'Lehrkräfte', beleg: 'geplant' as Beleg },
]

/* ------------------------------------------------------------------ */
/* Vereinsangaben, die vor Veröffentlichung bestätigt werden müssen     */
/* ------------------------------------------------------------------ */

export const VEREINSANGABEN = [
  { zahl: '443', text: 'Lehrlinge seit 2022 direkt begleitet: 46 (2022), 53 (2023), 49 (2024), 55 (2025), 240 (2026)' },
  { zahl: '1.387', text: 'vergebene Lizenzen über den Marktplatz Lern-Apps' },
  { zahl: '24', text: 'eingebundene Lehrkräfte an 4 Berufsschulen, je drei Workshops' },
  { zahl: '90 %', text: 'Verhaltensänderung nach drei Monaten bei 443 Lehrlingen' },
  { zahl: '227.000 €', text: 'Budget seit Projektstart, 100.000 € im Jahr 2026' },
  { zahl: '512 €', text: 'Budget je direkt begleitetem Lehrling seit Start (abgeleitet: 227.000 € geteilt durch 443)' },
]

export const LIZENZ_HINWEIS =
  'Eine Lizenz ist ein vergebener Zugang, ein registriertes Konto ist eine angelegte Person, aktive Lernende haben im Quartal tatsächlich gelernt. Für die Wirkung zählt die letzte Zahl. Wie die 1.387 Lizenzen und die 264 Konten zusammenhängen, ist vor der Veröffentlichung zu klären.'

export const GESCHICHTE = {
  titel: 'Wie aus Wissen Handlung wird',
  text: 'Eine junge Frau in der Lehre bei TGW Logistics wollte den Führerschein machen. Im Workshop lernte sie, fixe Kosten von spontanen Ausgaben zu trennen und ein Sparziel zu setzen. Einige Monate später hatte sie das Geld beisammen.',
  zitat: 'Durch Skills-UP! habe ich gelernt, mir mein Geld besser einzuteilen und wirklich auf meinen Führerschein hinzusparen.',
  beleg: 'verein' as Beleg,
}

export const QUELLEN = [
  'Grünhaus, C. & Rauscher, O. (2021): Impact und Wirkungsanalyse in Nonprofit Organisationen, Unternehmen und Organisationen mit gesellschaftlichem Mehrwert. Working Paper, NPO & SE Kompetenzzentrum der WU Wien.',
  'Grünhaus, C. & Rauscher, O. (2020): Ein Tool, das helfen könnte: Die Wirkungsbox. In: Burmester, M., Friedemann, J., Funk, C. S. & Kühnert, S. (Hg.): Die Wirkungsdebatte in der Quartiersarbeit. Wiesbaden: Springer VS, S. 135 bis 153.',
  'Kirkpatrick, J. D. & Kirkpatrick, W. K. (2016): Kirkpatrick’s Four Levels of Training Evaluation. ATD Press.',
  'OECD (2023): OECD/INFE 2023 International Survey of Adult Financial Literacy. OECD Publishing, Paris.',
]
