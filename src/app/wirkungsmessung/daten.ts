// Inhalte der Wirkungsmessung Skills-UP!, angewandt auf die Modelle des Kompetenzzentrums
// für Nonprofit-Organisationen und Social Entrepreneurship der WU Wien.
// Spec: CLAUDE-COWORK/CLAUDE-OUTPUTS/digitale-zukunftsbildung/wirkungsmessung-2026-11-04/ (spec.md, runde-2-vorgaben.md)
// Plattformzahlen: kennzahlen.json, erzeugt mit `kennzahlen_quartal.py --website` (gleiche SQL wie der Quartalsbericht).
// Vereinsangaben: Stand vor Sommer 2026, bei Widerspruch der höhere Wert (Vorgabe Stefan, 04.11.2026).

import roh from './kennzahlen.json'

export type Beleg = 'gemessen' | 'verein' | 'geplant' | 'hypothese'

export const BELEG: Record<Beleg, { label: string; erklaerung: string; bg: string; fg: string; rand: string }> = {
  gemessen: { label: 'gemessen', erklaerung: 'aus den Nutzerdaten der Plattform, automatisch je Quartal', bg: '#E6F4F1', fg: '#1E6B5B', rand: 'solid' },
  verein: { label: 'Vereinsangabe', erklaerung: 'Zählung des Vereins, Stand Juni 2026, extern nicht geprüft', bg: '#EDE9F7', fg: '#4a2d8a', rand: 'solid' },
  geplant: { label: 'geplant', erklaerung: 'Ziel oder vorgesehene Messung, noch nicht umgesetzt', bg: '#FDF0E6', fg: '#8A4210', rand: 'solid' },
  hypothese: { label: 'Hypothese', erklaerung: 'erwartete Wirkung im Wirkungsmodell, noch nicht gemessen', bg: '#F1F3F5', fg: '#495057', rand: 'dashed' },
}

/* ------------------------------------------------------------------ */
/* Plattformdaten                                                       */
/* ------------------------------------------------------------------ */

export type KpiStatus = 'gemessen' | 'eingeschränkt' | 'fehlt'
export type KpiZelle = { wert: number | null; basis: number | null; status: KpiStatus; hinweis: string }
export type KpiDaten = { ast: string; kpi: string; einheit: string; werte: Record<string, KpiZelle> }

export const KENNZAHLEN = roh as { stand: string; quartale: string[]; laufend: boolean; kpis: KpiDaten[] }
export const QUARTALE = KENNZAHLEN.quartale
export const Q = QUARTALE[QUARTALE.length - 1]
export const Q_VOR = QUARTALE[QUARTALE.length - 2]
export const GESAMT = 'Gesamt'
export const STAND = new Date(KENNZAHLEN.stand).toLocaleDateString('de-AT', { day: 'numeric', month: 'long', year: 'numeric' })

export function kpi(name: string): KpiDaten {
  const k = KENNZAHLEN.kpis.find((x) => x.kpi === name)
  if (!k) throw new Error(`Kennzahl fehlt in kennzahlen.json: ${name}`)
  return k
}

/** Wert einer Kennzahl; bricht den Build ab, wenn er fehlt, statt eine falsche Zahl zu zeigen. */
export function wert(name: string, q: string = GESAMT): number {
  const v = kpi(name).werte[q]?.wert
  if (v === null || v === undefined) throw new Error(`Kein Wert für ${name} in ${q}`)
  return v
}

export function fmt(n: number, stellen = 0) {
  // de-DE: Tausenderpunkt wie im restlichen Auftritt (de-AT setzt ein Leerzeichen)
  return n.toLocaleString('de-DE', { minimumFractionDigits: stellen, maximumFractionDigits: stellen })
}

export function quartalName(q: string) {
  if (q === GESAMT) return 'Gesamt'
  const [jahr, nr] = q.split('-')
  return `${nr.replace('Q', '')}. Quartal ${jahr}`
}

export const Q_NAME = `${quartalName(Q)}${KENNZAHLEN.laufend ? ' (bis ' + new Date(KENNZAHLEN.stand).toLocaleDateString('de-AT', { day: 'numeric', month: 'long' }) + ')' : ''}`

const K = {
  reg: 'Lernende registriert (Stand Quartalsende)',
  neu: 'Neue Lernende im Quartal',
  aktiv: 'Aktive Lernende im Quartal',
  aktivAnteil: 'Anteil aktiv an Registrierten',
  wiederkehr: 'Wiederkehr an zwei oder mehr Lerntagen',
  gestartet: 'Lernende mit gestartetem Modul',
  themen: 'Themenbreite (Modul außerhalb Grundlagen)',
  nordstern: 'Nordstern: Lernende mit bestandenem Modulquiz',
  quiz: 'Lernende mit Modulquiz',
  abgeschlossen: 'Lernende mit abgeschlossenem Modul',
  drei: 'Lernende mit drei oder mehr abgeschlossenen Modulen',
  erstBestanden: 'Quiz im ersten Versuch bestanden',
  erstRichtig: 'Erstversuch: Anteil richtiger Antworten',
  median: 'Zeit bis Modulabschluss (Median)',
  klassenAktivAnteil: 'Anteil Klassen mit aktiven Lernenden',
  klassenAktiv: 'Klassen mit aktiven Lernenden',
  fristen: 'Klassen mit Modulfrist (Stand Quartalsende)',
  lernpfad: 'Klassen mit Lernpfad (Stand Quartalsende)',
  groessteKlasse: 'Anteil der größten Klasse an Aktiven',
  lehrkraefte: 'Lehrkräfte registriert (Stand Quartalsende)',
} as const
export const KPI_NAMEN = K

/* ------------------------------------------------------------------ */
/* Vereinsangaben (Stand vor Sommer 2026, höherer Wert bei Widerspruch) */
/* ------------------------------------------------------------------ */

export const VEREIN = {
  lehrlingeJahr: [
    { jahr: '2022', n: 46 },
    { jahr: '2023', n: 53 },
    { jahr: '2024', n: 49 },
    { jahr: '2025', n: 55 },
    { jahr: '2026 bis Juni', n: 240 },
  ],
  lehrlinge: 443,
  lizenzen: 1387,
  reichweite: 1830,
  lehrkraefte: 45,
  lehrkraefteBerufsschule: 24,
  berufsschulen: 4,
  workshops: 12,
  standorte: 42,
  rueckmeldungen: 312,
  jugendbeirat: 5,
  budgetJahre: [
    { jahr: '2022', eur: 20000 },
    { jahr: '2023', eur: 35000 },
    { jahr: '2024', eur: 40000 },
    { jahr: '2025', eur: 37000 },
    { jahr: '2026', eur: 100000 },
  ],
  budget2026: [
    { quelle: 'MEGA Bildungsstiftung', eur: 66000 },
    { quelle: 'Öffentliche Mittel und Marktplatz Lern-Apps', eur: 18000 },
    { quelle: 'Eigene Erlöse', eur: 10500 },
    { quelle: 'Noch offen', eur: 5500 },
  ],
}
export const BUDGET_GESAMT = VEREIN.budgetJahre.reduce((a, b) => a + b.eur, 0)

export const ZIELE_2027 = [
  { ziel: 'Direkt erreichte Lehrlinge', ist: VEREIN.lehrlinge, soll: 740, beleg: 'verein' as Beleg },
  { ziel: 'Eingebundene Lehrkräfte und Ausbildungsverantwortliche', ist: VEREIN.lehrkraefte, soll: 42, beleg: 'verein' as Beleg },
  { ziel: 'Lernende mit bestandenem Modulquiz auf der Plattform', ist: null as number | null, soll: null as number | null, beleg: 'geplant' as Beleg, hinweis: 'Noch kein Ziel festgelegt. Vorschlag: aus dem Nordstern ableiten, sobald zwei volle Quartale vorliegen.' },
  { ziel: 'Inhalte erweitern', ist: null as number | null, soll: 25, einheit: '%', beleg: 'geplant' as Beleg, hinweis: 'Ausgangsbasis: 15 Module. Ziel entspricht etwa vier weiteren Modulen.' },
]

/* ------------------------------------------------------------------ */
/* 1. Wirkungskette                                                     */
/* ------------------------------------------------------------------ */

export type Kettenglied = { id: string; titel: string; frage: string; punkte: { text: string; beleg: Beleg }[] }

export const KETTE_LEISTUNG: Kettenglied[] = [
  {
    id: 'input',
    titel: 'Input',
    frage: 'Was setzen wir ein?',
    punkte: [
      { text: `Budget 2026: ${fmt(100000)} €, davon ${fmt(66000)} € MEGA Bildungsstiftung, ${fmt(18000)} € öffentliche Mittel und Marktplatz Lern-Apps, ${fmt(10500)} € eigene Erlöse, ${fmt(5500)} € offen`, beleg: 'verein' },
      { text: `Budget seit Projektstart 2022: ${fmt(BUDGET_GESAMT)} €`, beleg: 'verein' },
      { text: `Kernteam 2 Vollzeitäquivalente, Trainingsteam 4 Personen, technisch-didaktische Unterstützung 2 Personen, ${VEREIN.jugendbeirat} Jugendliche im ehrenamtlichen Jugendbeirat`, beleg: 'verein' },
      { text: 'Zeit der Lehrkräfte und Unterrichtsstunden der Schulen', beleg: 'hypothese' },
    ],
  },
  {
    id: 'aktivitaeten',
    titel: 'Aktivitäten',
    frage: 'Was tun wir?',
    punkte: [
      { text: `15 veröffentlichte Module in sechs Themenbereichen, Median bis zum Abschluss ${fmt(wert(K.median), 1)} Minuten`, beleg: 'gemessen' },
      { text: 'Peer-Videos, Simulationen, Modulquiz am Ende jedes Moduls', beleg: 'gemessen' },
      { text: `Workshops an Berufsschulen und in Lehrbetrieben: ${VEREIN.workshops} Workshops an ${VEREIN.berufsschulen} Berufsschulen, drei je Schule`, beleg: 'verein' },
      { text: 'Lehrkraft-Dashboard mit Klassen, Lernpfaden und Fristen', beleg: 'gemessen' },
      { text: 'Fortbildung von Lehrkräften und Lehrauftrag an der PH Burgenland', beleg: 'verein' },
    ],
  },
  {
    id: 'output',
    titel: 'Output',
    frage: 'Wie viel und wen erreichen wir?',
    punkte: [
      { text: `${fmt(wert(K.reg))} registrierte Lernende auf der Plattform, ${fmt(wert(K.aktiv))} davon aktiv`, beleg: 'gemessen' },
      { text: `${fmt(wert(K.nordstern))} Lernende mit bestandenem Modulquiz`, beleg: 'gemessen' },
      { text: `${VEREIN.lehrlinge} Lehrlinge 2022 bis Juni 2026 direkt in Workshops begleitet`, beleg: 'verein' },
      { text: `${fmt(VEREIN.lizenzen)} vergebene Lizenzen über den Marktplatz Lern-Apps, ${VEREIN.standorte} Schulstandorte`, beleg: 'verein' },
      { text: `${VEREIN.lehrkraefte} eingebundene Lehrkräfte, davon ${VEREIN.lehrkraefteBerufsschule} an ${VEREIN.berufsschulen} Berufsschulen`, beleg: 'verein' },
    ],
  },
]

export const KETTE_WIRKUNG = {
  bruttoIntendiert: {
    titel: 'Intendierte Bruttowirkungen',
    punkte: [
      { text: `Wissen am Modulende: ${fmt(wert(K.erstRichtig), 1)} % richtige Antworten im ersten Quizversuch (ohne Quizfragen am Modulstart, also kein Zuwachs belegt)`, beleg: 'gemessen' as Beleg },
      { text: 'Bessere Entscheidungen in Simulationen wie erste Wohnung, Konto, Gehaltsverhandlung', beleg: 'gemessen' as Beleg },
      { text: 'Lernende budgetieren, sparen auf ein Ziel, vergleichen vor dem Kauf (Alltagsverhalten, aus Nutzerdaten nicht messbar)', beleg: 'hypothese' as Beleg },
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
    text: 'Was wäre ohne Skills-UP! ohnehin passiert? Lernende, die das Wissen schon vorher hatten oder es aus Elternhaus, Bank oder an Handelsakademien ab 2027 aus dem neuen Pflichtfach bekommen hätten. Wird heute nicht gemessen: es fehlen Quizfragen am Modulstart und Vergleichsklassen.',
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
  akteureBeleg?: Beleg
}

// Reihenfolge entspricht dem Ring im Uhrzeigersinn, beginnend oben links.
export const STAKEHOLDER: Stakeholder[] = [
  { kategorie: 'Begünstigte', akteure: 'Lehrlinge an Berufsschulen und in Lehrbetrieben, Jugendliche ab 15 an AHS, BHS und PTS', wirkung: 'Finanzwissen, Sicherheit und Verhalten im Umgang mit Geld', prioritaet: 1 },
  { kategorie: 'Lehrkräfte', akteure: 'Lehrkräfte an Berufsschulen, AHS, BHS und PTS', wirkung: 'Weniger Vorbereitung, Sicherheit im Thema, Finanzbildung im Jahresplan', prioritaet: 1, eigene: true },
  { kategorie: 'Angehörige der Begünstigten', akteure: 'Eltern und Erziehungsberechtigte, Geschwister', wirkung: 'Geld wird zu Hause besprochen, weniger Konflikte um Geld', prioritaet: 3 },
  { kategorie: 'Mitarbeitende', akteure: 'Kernteam des Vereins, Trainingsteam, technisch-didaktische Unterstützung', wirkung: 'Kompetenzaufbau, Professionalisierung der Wirkungsmessung', prioritaet: 3 },
  { kategorie: 'Lehrbetriebe', akteure: 'Ausbildungsbetriebe wie TGW Logistics, überbetriebliche Lehrwerkstätten', wirkung: 'Finanzbildung wird Teil der Lehrlingsausbildung, weniger Geldsorgen im Betrieb', prioritaet: 2, eigene: true },
  { kategorie: 'Freiwillige', akteure: 'Jugendbeirat mit fünf Jugendlichen aus Wien, Oberösterreich und Kärnten, seit 2024', akteureBeleg: 'verein', wirkung: 'Mitsprache, Inhalte in der Sprache der Zielgruppe', prioritaet: 3 },
  { kategorie: 'Geldgebende', akteure: 'MEGA Bildungsstiftung, öffentliche Mittel, Unternehmenspartner', wirkung: 'Belegter Gegenwert für eingesetzte Mittel', prioritaet: 2 },
  { kategorie: 'Staat, Länder, Gemeinden', akteure: 'Bildungsministerium mit Marktplatz Lern-Apps, Bildungsdirektionen, Nationale Finanzbildungsstrategie', wirkung: 'Praxisevidenz für die Strategie, geprüftes Angebot für das Pflichtfach an Handelsakademien ab 2027', prioritaet: 2 },
  { kategorie: 'Zulieferung', akteure: 'Hosting, Videoplattform, Video- und Grafikproduktion', wirkung: 'Aufträge aus dem Bildungsbereich', prioritaet: 3 },
  { kategorie: 'Kooperationspartner', akteure: 'Berufsschulen, Hochschule Burgenland, FH CAMPUS 02, PH Burgenland, Schuldnerberatung Burgenland, AK Wien, WKO, 180 Degrees Consulting', wirkung: 'Zugang zu Schulen, Forschung und Fachwissen, Anschluss an Lehrkräftebildung', prioritaet: 2 },
  { kategorie: 'Sozialversicherung', akteure: 'Österreichische Gesundheitskasse, Pensionsversicherung, Arbeitslosenversicherung über das AMS', wirkung: 'Langfristig weniger Folgekosten von Überschuldung junger Menschen', prioritaet: 3 },
  { kategorie: 'Allgemeine Bevölkerung', akteure: 'Jugendliche und junge Erwachsene in Österreich, die Skills-UP! nicht selbst nutzen', wirkung: 'Höhere finanzielle Allgemeinbildung im OECD-Vergleich', prioritaet: 3 },
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

export type Schritt = { nr: string; titel: string; stand: Stand; text: string; optional?: boolean; unter?: boolean; beleg?: Beleg }

export const ZWECK =
  'Wir wollen wissen, ob Skills-UP! Jugendliche im Umgang mit Geld tatsächlich stärkt, und das gegenüber Schulen, Geldgebenden und dem Bildungsministerium belegen. Die Messung dient der Steuerung im Quartal, der Strategie bis Ende 2027 und der Kommunikation der Wirkung.'

export const SCHRITTE: Schritt[] = [
  { nr: '1', titel: 'Grundlegende Wirkungslogik', stand: 'entwurf', text: 'Wirkungskette von Input bis Impact für Skills-UP! beschrieben (Abschnitt Wirkungskette).' },
  { nr: '2', titel: 'Stakeholder und Wirkungsbetroffene', stand: 'entwurf', text: 'Zwölf Gruppen benannt, darunter Lehrkräfte und Lehrbetriebe als eigene Gruppen, je mit Priorität.' },
  { nr: '3', titel: 'Hypothetisches Wirkungsmodell', stand: 'entwurf', text: 'Wirkungen je Gruppe als Hypothesen formuliert und in der Wirkungsbox nach Ebene, Zeit und Dimension geordnet.' },
  { nr: '4', titel: 'Priorisierung und Wirkungsziele', stand: 'teilweise', optional: true, beleg: 'geplant', text: 'Priorität 1: Lernende und Lehrkräfte. Ziele bis Ende 2027 laut Strategie: mindestens 740 direkt erreichte Lehrlinge, mindestens 42 eingebundene Lehrkräfte und Ausbildungsverantwortliche, Inhalte um 25 % erweitern.' },
  { nr: '5', titel: 'Datenerhebung und Wirkungsmessung', stand: 'teilweise', optional: true, text: 'Gemessen wird nur aus Nutzerdaten der Plattform, ohne Befragung (Entscheidung vom 4. November 2026). Die Quartalskennzahlen laufen automatisch. Es fehlen Quizfragen am Modulstart und Vergleichsklassen.' },
  { nr: '5a', titel: 'Untersuchungsdesign', stand: 'offen', optional: true, unter: true, text: 'Vorschlag aus Nutzerdaten: drei Quizfragen am Modulstart, Modulquiz am Ende, dieselben Fragen nach vier Wochen erneut, Vergleichsklassen, die Skills-UP! erst ein Semester später nutzen.' },
  { nr: '5b', titel: 'Identifikation und tieferes Verständnis', stand: 'teilweise', optional: true, unter: true, beleg: 'verein', text: 'Qualitative Rückmeldungen aus Workshops: 312 Rückmeldungen seit 2022 von Jugendlichen, Lehrlingen, Lehrkräften und Partnerorganisationen.' },
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
    { text: `${fmt(wert(K.reg))} registrierte Lernende`, beleg: 'gemessen' as Beleg },
    { text: `${fmt(wert(K.aktiv))} aktive Lernende`, beleg: 'gemessen' as Beleg },
    { text: `${fmt(wert(K.nordstern))} Lernende mit bestandenem Modulquiz`, beleg: 'gemessen' as Beleg },
    { text: '15 Module, sechs Themenbereiche', beleg: 'gemessen' as Beleg },
    { text: `${fmt(wert(K.lehrkraefte))} Konten von Lehrkräften`, beleg: 'gemessen' as Beleg },
    { text: `${VEREIN.lehrlinge} direkt begleitete Lehrlinge`, beleg: 'verein' as Beleg },
    { text: `${fmt(VEREIN.lizenzen)} Lizenzen Marktplatz Lern-Apps`, beleg: 'verein' as Beleg },
    { text: `${VEREIN.standorte} Schulstandorte`, beleg: 'verein' as Beleg },
    { text: `${VEREIN.lehrkraefte} eingebundene Lehrkräfte`, beleg: 'verein' as Beleg },
    { text: `${VEREIN.berufsschulen} Berufsschulen, ${VEREIN.workshops} Workshops`, beleg: 'verein' as Beleg },
  ],
  wirkungen: [
    { gruppe: 'Lernende', punkte: ['Verstehen Lohnzettel, Budget, Kredit- und Ratenkosten', 'Erkennen Konsumfallen und Phishing', 'Setzen sich ein Sparziel und halten es ein', 'Vergleichen vor dem Kauf', 'Treffen Geldentscheidungen sicherer und mit weniger Stress'] },
    { gruppe: 'Lehrkräfte', punkte: ['Sparen Vorbereitungszeit', 'Fühlen sich sicher im Thema', 'Bauen Finanzbildung fest in den Jahresplan ein', 'Sehen, wo die Klasse steht'] },
    { gruppe: 'Schulen und Lehrbetriebe', punkte: ['Erfüllen das übergreifende Thema Wirtschafts-, Finanz- und Verbraucherbildung', 'Handelsakademien sind vorbereitet auf das Pflichtfach ab 2027', 'Machen Finanzbildung zum Teil der Ausbildung'] },
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
    input: [`Zeit: Median ${fmt(wert(K.median), 1)} Minuten bis zum Modulabschluss`, 'Unterrichtsstunden', 'Smartphone oder Schulgerät'],
    aktivitaeten: ['Module mit Peer-Videos', 'Simulationen wie erste Wohnung, Konto, Gehaltsverhandlung', 'Modulquiz', 'Workshops'],
    output: ['Anzahl aktiver Lernender je Quartal', 'Anzahl abgeschlossener Module', 'Anzahl bestandener Modulquiz', 'Anzahl Workshop-Teilnahmen'],
    brutto: ['Wissenszuwachs zu Budget, Lohnzettel, Kredit', 'Bessere Entscheidungen in den Simulationen', 'Mehr Sicherheit bei Geldentscheidungen (ohne Befragung nicht messbar)', 'Unintendiert: Gespräche zu Hause über Geld'],
    deadweight: ['Anteil der Lernenden, die die Fragen schon am Modulstart richtig beantworten', 'Zuwachs in Vergleichsklassen ohne Skills-UP!'],
    netto: ['Auf Skills-UP! zurückführbarer Wissenszuwachs', 'Auf Skills-UP! zurückführbar bessere Entscheidungen in den Simulationen'],
  },
  {
    stakeholder: 'Lehrkräfte',
    input: ['Zeit zum Anlegen einer Klasse', 'Unterrichtsstunden', 'Fortbildungszeit'],
    aktivitaeten: ['Lehrkraft-Dashboard', 'Lernpfade und Fristen', 'Unterrichtsmaterial', 'Fortbildung'],
    output: ['Anzahl Lehrkräfte mit aktiver Klasse', 'Anzahl Klassen mit Lernpfad oder Frist', 'Anzahl Fortbildungen'],
    brutto: ['Weniger Vorbereitungszeit', 'Mehr Sicherheit im Thema', 'Finanzbildung fest im Jahresplan'],
    deadweight: ['Lehrkräfte, die Finanzbildung ohnehin unterrichten würden, an Handelsakademien ab 2027 auch wegen des Pflichtfachs'],
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
    brutto: ['Praxisevidenz für die Strategie', 'Geprüftes Angebot für das Pflichtfach an Handelsakademien ab 2027'],
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
      { text: 'Handelsakademien erfüllen das Pflichtfach mit geprüftem Angebot', dim: 'sozial' },
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
/* Befunde: was die Daten zeigen und was daraus folgt                   */
/* ------------------------------------------------------------------ */

export type Befund = { titel: string; zahl: string; einheit: string; text: string; folge: string; beleg: Beleg }

function befunde(): Befund[] {
  const neuQ = wert(K.neu, Q)
  const neuVorher = QUARTALE.slice(0, -1).reduce((a, q) => a + wert(K.neu, q), 0)
  const wk = wert(K.wiederkehr, Q)
  const tbQ = wert(K.themen, Q)
  const tbVor = wert(K.themen, Q_VOR)
  const klassen = kpi(K.klassenAktivAnteil).werte[Q].basis ?? 0
  const gk = QUARTALE.map((q) => wert(K.groessteKlasse, q))
  return [
    {
      titel: 'Die Reichweite wächst stark',
      zahl: fmt(neuQ), einheit: 'neue Lernende',
      text: `Im ${Q_NAME} kamen ${fmt(neuQ)} neue Lernende auf die Plattform, ${neuQ > neuVorher ? 'mehr als in allen Quartalen davor zusammen' : 'nach'} (${fmt(neuVorher)} seit April 2026).`,
      folge: 'Wachstum allein ist noch keine Wirkung. Entscheidend ist, wie viele davon lernen und bestehen.',
      beleg: 'gemessen',
    },
    {
      titel: 'Gelernt wird, aber meist nur einmal',
      zahl: fmt(wk, 1), einheit: '% kommen wieder',
      text: `${fmt(wert(K.aktiv))} von ${fmt(wert(K.reg))} registrierten Lernenden waren aktiv. Im ${Q_NAME} lernten aber nur ${fmt(wk, 1)} % der Aktiven an mehr als einem Tag.`,
      folge: `Wiederholung entsteht über den Unterricht: Lernpfade und Modulfristen. Erst ${fmt(wert(K.fristen, Q))} Klassen haben eine Modulfrist, ${fmt(wert(K.lernpfad, Q))} einen Lernpfad.`,
      beleg: 'gemessen',
    },
    {
      titel: 'Das Modulquiz wird fast immer bestanden',
      zahl: fmt(wert(K.erstBestanden), 1), einheit: '% im ersten Versuch',
      text: `${fmt(wert(K.nordstern))} Lernende haben seit August 2026 ein Modulquiz bestanden, ${fmt(wert(K.erstBestanden), 1)} % schon im ersten Versuch, mit ${fmt(wert(K.erstRichtig), 1)} % richtigen Antworten.`,
      folge: 'So hohe Werte unterscheiden kaum zwischen viel und wenig Wissen. Lernzuwachs wird erst mit drei Quizfragen am Modulstart sichtbar, und das Quiz braucht schwerere Fragen.',
      beleg: 'gemessen',
    },
    {
      titel: 'Neue Klassen bleiben bei den Grundlagen',
      zahl: fmt(tbQ, 1), einheit: '% gehen weiter',
      text: `Im ${Q_NAME} starteten ${fmt(tbQ, 1)} % der Lernenden ein Modul außerhalb der Grundlagen, im ${quartalName(Q_VOR)} waren es ${fmt(tbVor, 1)} %. ${fmt(wert(K.drei))} Lernende haben drei oder mehr Module abgeschlossen.`,
      folge: 'Nach dem Grundlagenmodul das nächste passende Thema direkt vorschlagen, für Lernende und für Lehrkräfte.',
      beleg: 'gemessen',
    },
    {
      titel: 'Viele Klassen sind angelegt, wenige aktiv',
      zahl: fmt(wert(K.klassenAktivAnteil, Q), 1), einheit: '% der Klassen aktiv',
      text: `Von ${fmt(klassen)} angelegten Klassen hatten im ${Q_NAME} ${fmt(wert(K.klassenAktiv, Q))} aktive Lernende. Lehrkräfte legen also Klassen an, setzen sie aber oft noch nicht ein.`,
      folge: 'Lehrkräfte nach dem Anlegen einer Klasse beim ersten Einsatz begleiten, etwa mit einer fertigen ersten Stunde.',
      beleg: 'gemessen',
    },
    {
      titel: 'Eine Lizenz ist noch keine Nutzung',
      zahl: fmt(VEREIN.lizenzen), einheit: 'Lizenzen',
      text: `Bis Juni 2026 wurden ${fmt(VEREIN.lizenzen)} Lizenzen über den Marktplatz Lern-Apps vergeben. Auf der Plattform sind heute ${fmt(wert(K.reg))} Lernende registriert.`,
      folge: 'Für die Wirkung zählt, wer lernt. Der Abgleich von Lizenzen und Konten gehört in den nächsten Quartalsbericht.',
      beleg: 'verein',
    },
    {
      titel: 'Die Zahlen hängen weniger an einer Klasse',
      zahl: fmt(gk[gk.length - 1], 1), einheit: '% in der größten Klasse',
      text: `Die größte Klasse stellte im ${quartalName(QUARTALE[0])} ${fmt(gk[0], 1)} % der Aktiven, im ${Q_NAME} noch ${fmt(gk[gk.length - 1], 1)} %.`,
      folge: 'Die Wirkung ist breiter verteilt. Aussagen werden belastbarer, wenn mehr Schulen dazukommen.',
      beleg: 'gemessen',
    },
  ]
}
export const BEFUNDE = befunde()

export const TRICHTER = [
  { stufe: 'Registriert', n: wert(K.reg), erklaerung: 'Konto als Lernende angelegt' },
  { stufe: 'Modul gestartet', n: wert(K.gestartet), erklaerung: 'mindestens ein Modul begonnen' },
  { stufe: 'Modul abgeschlossen', n: wert(K.abgeschlossen), erklaerung: 'mindestens ein Modul bestanden' },
  { stufe: 'Modulquiz bestanden', n: wert(K.nordstern), erklaerung: 'Nordstern, Quizversuche ab 12. August 2026' },
  { stufe: 'Drei oder mehr Module', n: wert(K.drei), erklaerung: 'mindestens drei Module bestanden' },
]

export const BEGRIFFE = [
  { begriff: 'Lizenz', text: 'Ein über den Marktplatz Lern-Apps vergebener Zugang für eine Schule. Zählt der Verein.' },
  { begriff: 'Registriert', text: 'Eine Person hat ein Konto mit der Rolle Lernende angelegt. Lehrkräfte und Testkonten zählen nicht mit.' },
  { begriff: 'Aktiv', text: 'Mindestens ein Modulstart, Modulabschluss, Quiz oder eine Simulationsmission im Zeitraum.' },
  { begriff: 'Abgeschlossen', text: 'Modul bestanden. Bis 12. August 2026 auch ohne Quiz möglich, darum in frühen Quartalen eingeschränkt.' },
  { begriff: 'Nordstern', text: 'Personen mit bestandenem Modulquiz im Zeitraum, jede Person einmal. Die Hauptkennzahl der Wirkung auf der Plattform.' },
  { begriff: 'Gesamt', text: 'Ganzer Zeitraum seit April 2026, jede Person einmal gezählt. Nicht die Summe der Quartale.' },
  { begriff: 'Eingeschränkt', text: 'Weniger als 20 Fälle oder eine bekannte Datenlücke. Der Wert gilt, die Aussage ist vorsichtig zu lesen.' },
]

/* ------------------------------------------------------------------ */
/* Messplan und Kirkpatrick                                             */
/* ------------------------------------------------------------------ */

export const KIRKPATRICK = [
  { ebene: 'Ebene 1: Reaktion', was: 'Zufriedenheit, wahrgenommene Nützlichkeit', methode: 'Auf der Plattform keine: eine Befragung ist bewusst nicht vorgesehen', stand: 'In Workshops über Übungen, Reflexion und Feedback, 312 Rückmeldungen seit 2022', beleg: 'verein' as Beleg },
  { ebene: 'Ebene 2: Lernen', was: 'Wissen und Wissenszuwachs', methode: 'Modulquiz, künftig mit Quizfragen am Modulstart', stand: 'Wissen am Modulende gemessen seit 12. August 2026, Zuwachs noch nicht', beleg: 'gemessen' as Beleg },
  { ebene: 'Ebene 3: Verhalten', was: 'Verhaltensänderung im Alltag', methode: 'Angenähert über Entscheidungen in Simulationen', stand: 'Simulationsergebnisse gemessen, Alltagsverhalten aus Nutzerdaten nicht messbar', beleg: 'gemessen' as Beleg },
  { ebene: 'Ebene 4: Ergebnisse', was: 'Wirkung in der Gesellschaft', methode: 'Nicht aus Nutzerdaten messbar, nur über Forschung mit Hochschulen', stand: 'Nicht gemessen', beleg: 'hypothese' as Beleg },
]

export const MESSPLAN = [
  { wirkung: 'Finanzwissen steigt', indikator: 'Differenz zwischen Quizfragen am Modulstart und Modulquiz', methode: 'Drei Quizfragen am Modulstart, Modulquiz am Ende', zeitpunkt: 'jedes Modul', quelle: 'Plattform', beleg: 'geplant' as Beleg },
  { wirkung: 'Wissen bleibt', indikator: 'Richtige Antworten bei denselben Fragen vier Wochen später', methode: 'Wiederholungsfragen im nächsten Modul', zeitpunkt: 'nach vier Wochen', quelle: 'Plattform', beleg: 'geplant' as Beleg },
  { wirkung: 'Entscheidungen werden besser', indikator: 'Anteil bestandener Simulationsmissionen', methode: 'Simulationsdaten im Quartalsbericht', zeitpunkt: 'je Quartal', quelle: 'Plattform', beleg: 'gemessen' as Beleg },
  { wirkung: 'Lernende bleiben dran', indikator: 'Aktive, Wiederkehr, Abschlussquote, Lernende mit bestandenem Modulquiz', methode: 'Quartalsbericht', zeitpunkt: 'je Quartal', quelle: 'Plattform', beleg: 'gemessen' as Beleg },
  { wirkung: 'Lernende vertiefen', indikator: 'Anteil mit einem Modul außerhalb der Grundlagen', methode: 'Quartalsbericht', zeitpunkt: 'je Quartal', quelle: 'Plattform', beleg: 'gemessen' as Beleg },
  { wirkung: 'Deadweight', indikator: 'Zuwachs in Vergleichsklassen ohne Skills-UP!', methode: 'Wartekontrollgruppe mit denselben Quizfragen: Klassen starten ein Semester später', zeitpunkt: 'je Schuljahr', quelle: 'Plattform und Partnerschulen', beleg: 'geplant' as Beleg },
  { wirkung: 'Lehrkräfte setzen gezielt ein', indikator: 'Klassen mit Modulfrist oder Lernpfad', methode: 'Quartalsbericht', zeitpunkt: 'je Quartal', quelle: 'Plattform', beleg: 'gemessen' as Beleg },
  { wirkung: 'Lehrkräfte bleiben dabei', indikator: 'Anteil der Lehrkräfte mit aktiver Klasse im Folgejahr', methode: 'Plattformdaten', zeitpunkt: 'je Schuljahr, erstmals im Herbst 2027', quelle: 'Plattform', beleg: 'geplant' as Beleg },
]

export const GESCHICHTE = {
  titel: 'Wie aus Wissen Handlung wird',
  text: 'Eine junge Frau in der Lehre bei TGW Logistics wollte den Führerschein machen. Im Workshop lernte sie, fixe Kosten von spontanen Ausgaben zu trennen und ein Sparziel zu setzen. Einige Monate später hatte sie das Geld beisammen.',
  zitat: 'Durch Skills-UP! habe ich gelernt, mir mein Geld besser einzuteilen und wirklich auf meinen Führerschein hinzusparen.',
  beleg: 'verein' as Beleg,
}

// Episodische Evidenz: Zitate von Stefan Bauer und Marina Winkler, wortgleich aus der Startseite,
// den Schulseiten und dem Hearing vom 25.06.2026 (Gedankenstriche durch Satzzeichen ersetzt).
export const STIMMEN = [
  { text: 'Junge Menschen treffen heute echte Geldentscheidungen, oft ohne jemanden, der ihnen erklärt wie. Das wollten wir ändern.', person: 'Dr. Stefan Bauer', rolle: 'Gründer Skills-UP!' },
  { text: 'Die erste Idee für Skills-UP! entstand während des Lockdowns, als ich über Teach for Austria unterrichtete und hautnah sah, wie wenig Jugendliche über Finanzen wussten.', person: 'Marina Winkler, MA', rolle: 'Obfrau, Pädagogische Leitung' },
  { text: 'Lehrlinge erklären Lehrlingen. Keine Bank, keine Lehrkräfte: echte Peers, in ihrer Sprache. Das wirkt, weil Vertrauen der entscheidende Lernfaktor ist.', person: 'Marina Winkler, MA', rolle: 'Obfrau, Pädagogische Leitung' },
  { text: 'Lehrlinge verdienen echtes Geld, oft das erste Mal in ihrem Leben. Die meisten haben niemanden, der ihnen erklärt, was man damit macht. Skills-UP! springt genau dort ein: praxisnah, in kurzen Einheiten, und mit Szenarien, die Lehrlinge aus ihrem eigenen Alltag kennen.', person: 'Dr. Stefan Bauer', rolle: 'Gründer Skills-UP!' },
  { text: 'Zusammen haben wir dieses Projekt ins Leben gerufen, um es irgendwann abzuschaffen, weil Finanzbildung so selbstverständlich sein soll wie das ABC.', person: 'Marina Winkler, MA', rolle: 'Obfrau, Pädagogische Leitung' },
]

export const QUELLEN = [
  'Grünhaus, C. & Rauscher, O. (2021): Impact und Wirkungsanalyse in Nonprofit Organisationen, Unternehmen und Organisationen mit gesellschaftlichem Mehrwert. Working Paper, NPO & SE Kompetenzzentrum der WU Wien.',
  'Grünhaus, C. & Rauscher, O. (2020): Ein Tool, das helfen könnte: Die Wirkungsbox. In: Burmester, M., Friedemann, J., Funk, C. S. & Kühnert, S. (Hg.): Die Wirkungsdebatte in der Quartiersarbeit. Wiesbaden: Springer VS, S. 135 bis 153.',
  'Kirkpatrick, J. D. & Kirkpatrick, W. K. (2016): Kirkpatrick’s Four Levels of Training Evaluation. ATD Press.',
  'Plattformdaten Skills-UP!: eigene Auswertung der Nutzerdaten, nur Summen, keine Personen.',
]
