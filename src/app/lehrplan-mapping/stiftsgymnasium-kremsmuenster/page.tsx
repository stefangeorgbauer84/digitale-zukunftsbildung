import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

// Schulspezifische Seite: bewusst nicht in Sitemap und Navigation, noindex.
// Quelle: CLAUDE-COWORK/CLAUDE-OUTPUTS/skillsup/lehrplan-mapping-ahs-kremsmuenster-2026-10-15.md

const URL = 'https://www.digitale-zukunftsbildung.eu/lehrplan-mapping/stiftsgymnasium-kremsmuenster'

export const metadata: Metadata = {
  title: 'Lehrplanmapping Stiftsgymnasium Kremsmünster | Skills-UP!',
  description: 'Wo Skills-UP! im AHS-Lehrplan des Stiftsgymnasiums Kremsmünster passt: nach Fach, Klasse und Lehrplanpunkt, mit Einsatzplan entlang der Stundentafel 2026/27.',
  alternates: { canonical: URL },
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Lehrplanmapping für das Stiftsgymnasium Kremsmünster',
    description: 'Skills-UP! im AHS-Lehrplan: Fach für Fach, Klasse für Klasse.',
    url: URL,
    type: 'website',
  },
}

type Grad = 'voll' | 'teil' | 'ansatz' | 'nein'

const GRAD: Record<Grad, { zeichen: string; label: string; bg: string; fg: string }> = {
  voll: { zeichen: '●', label: 'weitgehend', bg: '#e6f4f1', fg: '#1E6B5B' },
  teil: { zeichen: '◐', label: 'teilweise', bg: '#ede9f7', fg: '#4a2d8a' },
  ansatz: { zeichen: '◔', label: 'Ansatz', bg: '#fdf0e6', fg: '#8A4210' },
  nein: { zeichen: '○', label: 'fehlt', bg: '#f1f1f4', fg: '#55556a' },
}

type Zeile = { wo: string; punkt: string; skillsup: string; grad: Grad }
type Block = { id: string; titel: string; hinweis?: string; zeilen: Zeile[] }

const unterstufe: Block[] = [
  {
    id: 'thema-13',
    titel: 'Übergreifendes Thema 13: Wirtschafts-, Finanz- und Verbraucher/innenbildung',
    hinweis: 'Die sechs Kompetenzziele am Ende der Sekundarstufe I, verbindlich für die Unterstufe.',
    zeilen: [
      { wo: 'Ziel 1', punkt: 'Verantwortungsvoll mit Geld umgehen: Sparen, Veranlagen, Konsum, Einnahmen und Ausgaben, Verschuldungsrisiko, Bankmodalitäten vergleichen', skillsup: 'Finanzplanung, Sparen, Bankkonten (AK-Bankenrechner), Schulden, Investieren; Bank-Simulation, Spar-Rechner, Kredit-Falle', grad: 'voll' },
      { wo: 'Ziel 2', punkt: 'Über Geschäftsfähigkeit und das Wesen von Verträgen informieren', skillsup: 'Geschäftsfähigkeit nur im Glossar (mit 18, § 21 ABGB), mündige Minderjährige und Kontoeröffnung, Kaufverträge über das Taschengeld hinaus; Versicherungs-, Kredit-, Handy- und Mietvertrag', grad: 'teil' },
      { wo: 'Ziel 3', punkt: 'Einkommens- und Vermögensunterschiede, Wohlstand, Verteilungsgerechtigkeit, alternative Konsumformen, Sozialversicherung', skillsup: 'Sozialversicherung (Gehalt, Altersvorsorge, Risiko & Krisen); Verteilungsfragen fehlen', grad: 'ansatz' },
      { wo: 'Ziel 4', punkt: 'Verbraucherrechte nutzen, Funktion von Werbung, Datenschutz, Verbraucherschutzinstitutionen', skillsup: 'Konsumfallen (KSchG, FAGG, Dark Patterns), Finfluencer (Werbekennzeichnung), Phishing; AK, VKI, Schlichtungsstellen; Konsumfallen-Parcours; Datenschutz nur als KSV-Selbstauskunft', grad: 'teil' },
      { wo: 'Ziel 5', punkt: 'Aufgabe von Wirtschaft und Staat, Wirtschaftskreislauf, nachhaltiger Lebensstil', skillsup: 'Wozu Steuern dienen und wohin das Steuergeld fließt (Steuern); Wirtschaftskreislauf und Nachhaltigkeit fehlen', grad: 'ansatz' },
      { wo: 'Ziel 6', punkt: 'Selbstständige und unselbstständige Erwerbstätigkeit, bezahlte und unbezahlte Arbeit, Aufgaben von Unternehmen', skillsup: 'Unselbstständige Arbeit ausführlich (Gehalt & Einkommen); die Unterscheidung selbst fehlt', grad: 'nein' },
    ],
  },
  {
    id: 'gwb-unterstufe',
    titel: 'Geographie und wirtschaftliche Bildung, 1. bis 4. Klasse',
    zeilen: [
      { wo: '1. Kl.', punkt: 'Wünsche und Bedürfnisse formulieren, vergleichen, Umsetzbarkeit prüfen', skillsup: 'Finanzplanung (Bedürfnisse, Wünsche, Sparen; 50/30/20)', grad: 'teil' },
      { wo: '1. Kl.', punkt: 'Wirtschaftskreislauf, verantwortungsbewusster Umgang mit Geld', skillsup: 'Umgang mit Geld: Finanzplanung, Bank-Simulation; Wirtschaftskreislauf fehlt', grad: 'teil' },
      { wo: '1. Kl.', punkt: 'Kriterien für Armut und Reichtum', skillsup: 'nicht vorhanden', grad: 'nein' },
      { wo: '2. Kl.', punkt: 'Reflektierte Entscheidungen bei Bankdienstleistungen, Folgen der Digitalisierung', skillsup: 'Bankkonten (Kontomodelle, Kosten, Online-Banking, Zwei-Faktor), Phishing; Bank-Simulation', grad: 'voll' },
      { wo: '2. Kl.', punkt: 'Angebot und Nachfrage, Märkte, Preisbildung', skillsup: 'Kapitalmarkt in Investieren und Aktienmarkt-Langläufer; Preisbildung nicht erklärt', grad: 'ansatz' },
      { wo: '2. Kl.', punkt: 'Anwendungsbereich „Sparen und Risiko“', skillsup: 'Sparen, Investieren (Risiko, Streuung); Spar-Rechner, Aktienmarkt-Langläufer', grad: 'voll' },
      { wo: '2. Kl.', punkt: 'Berufe und Berufsbilder; Projektideen (Entrepreneurship)', skillsup: 'nicht vorhanden', grad: 'nein' },
      { wo: '3. Kl.', punkt: 'Unbezahlte und bezahlte Arbeit, Arbeitslosigkeit, Einkommen, Sparen, Finanzieren, Versichern, Rechte und Pflichten, Konsumentenschutz', skillsup: 'Gehalt & Einkommen, Risiko & Krisen, Finanzplanung, Sparen, Schulden, Ratenkauf & BNPL, Versicherungen, Konsumfallen mit acht Simulationen; fehlt nur unbezahlte Arbeit', grad: 'voll' },
      { wo: '3. Kl.', punkt: 'Bildungswege, Berufsbilder, selbstständige und unselbstständige Arbeit vergleichen', skillsup: 'nur unselbstständige Arbeit (Gehalt)', grad: 'ansatz' },
      { wo: '3. Kl.', punkt: 'Funktionen von Steuern und Abgaben', skillsup: 'Steuern in Österreich (Lohnsteuer, USt; Geld einnehmen, Verhalten lenken, Last verteilen); Arbeitnehmerveranlagung', grad: 'voll' },
      { wo: '3. Kl.', punkt: 'Preise vergleichen; Preisbildung', skillsup: 'Grundpreis-Station im Konsumfallen-Parcours, Streichpreise; Preisbildung fehlt', grad: 'ansatz' },
      { wo: '3. Kl.', punkt: 'Demographie, gesellschaftliche Diversität und Altersversorgung', skillsup: 'Altersvorsorge (drei Säulen, Pensionskonto, demografischer Druck); Altersvorsorge-Simulator; Diversität fehlt', grad: 'teil' },
      { wo: '3. Kl.', punkt: 'Armut, Reichtum und Einkommensverteilung', skillsup: 'nicht vorhanden', grad: 'nein' },
      { wo: '3. Kl.', punkt: 'Akteure der ökosozialen Marktwirtschaft', skillsup: 'Banken, OeNB, Kollektivvertrag als Ergebnis der Sozialpartner; kein Gesamtbild', grad: 'ansatz' },
      { wo: '3. Kl.', punkt: 'Kenngrößen: BIP, Inflation, Arbeitslosigkeit, Wohlstandsindikatoren', skillsup: 'Inflation (Sparen, Investieren, Bankkonten), Rezession und Arbeitslosigkeit (Risiko & Krisen); Wohlstandsindikatoren fehlen', grad: 'teil' },
      { wo: '4. Kl.', punkt: 'EU-Themen im eigenen Leben: Euro, Verbraucherschutz', skillsup: 'EU-Verbraucherrecht (Konsumfallen), EU-Regeln für Finfluencer, MiCAR (Krypto & Kryptoassets)', grad: 'teil' },
      { wo: '4. Kl.', punkt: 'Das eigene Ich: Zukunftsvorstellungen, finanzielle Rahmenbedingungen', skillsup: 'Altersvorsorge, Finanzplanung; Erste eigene Wohnung, Geldtyp-Test', grad: 'teil' },
    ],
  },
  {
    id: 'dgb',
    titel: 'Digitale Grundbildung, 2. bis 4. Klasse',
    zeilen: [
      { wo: '2. Kl.', punkt: 'Veränderung des Einkaufsverhaltens', skillsup: 'Konsumfallen, Ratenkauf & BNPL; Konsumfallen-Parcours', grad: 'voll' },
      { wo: '2. Kl.', punkt: 'Onlinespiele (pay-to-win)', skillsup: 'Station „Starter-Pack für 0,99 €“ im Konsumfallen-Parcours', grad: 'teil' },
      { wo: '2. Kl.', punkt: 'Geschäftsmodelle von Social Media, Nutzung persönlicher Daten', skillsup: 'Finfluencer (Affiliate, bezahlte Kooperation)', grad: 'teil' },
      { wo: '2. Kl.', punkt: 'Fake News, Manipulation, dahinterliegende Interessen', skillsup: 'Finfluencer, Phishing (KI-Fälschungen); Finfluencer-Check', grad: 'teil' },
      { wo: '2. Kl.', punkt: 'Betrug im Internet, Phishing', skillsup: 'Phishing & Finanzbetrug; Phishing-Postfach', grad: 'voll' },
      { wo: '3. Kl.', punkt: 'Passwort, Zwei-Faktor-Authentifizierung, Schutz vor Schadsoftware', skillsup: 'Phishing, Bankkonten (starke Kundenauthentifizierung)', grad: 'teil' },
      { wo: '3. Kl.', punkt: 'Betroffenenrechte im Datenschutz', skillsup: 'nur KSV-Selbstauskunft (Ratenkauf & BNPL)', grad: 'ansatz' },
      { wo: '4. Kl.', punkt: 'Unternehmensinteressen in Social Media', skillsup: 'Finfluencer; Finfluencer-Check', grad: 'voll' },
      { wo: '4. Kl.', punkt: 'DSGVO und DSG, Gefahren der Datenverknüpfung', skillsup: 'nur am Rand', grad: 'ansatz' },
      { wo: '4. Kl.', punkt: 'Schutz vor Betrug, Konsumentenrecht', skillsup: 'Phishing (Schutz, Rückbuchung), Konsumfallen (KSchG, FAGG, Widerruf)', grad: 'voll' },
    ],
  },
  {
    id: 'mathematik-unterstufe',
    titel: 'Mathematik, Unterstufe',
    zeilen: [
      { wo: '2. Kl.', punkt: 'Prozente in Sachsituationen', skillsup: 'Brutto-Netto, Rabatte, Effektivzins als Anwendung; kein Rechentraining', grad: 'teil' },
      { wo: '3. Kl.', punkt: 'Formeln zu Zinsen und Zinseszinsen', skillsup: 'Altersvorsorge (Zinseszinsformel mit Rechenweg; Start mit 20, 30, 40), Investieren, Spar-Rechner', grad: 'voll' },
      { wo: '3. Kl.', punkt: 'Manipulationen in statistischen Darstellungen erkennen', skillsup: 'Prüffragen zu Budgetgrafiken (Steuern); keine Übung zu verzerrten Diagrammen', grad: 'ansatz' },
      { wo: '3. Kl.', punkt: 'Wahrscheinlichkeit zur Quantifizierung von Sicherheit', skillsup: 'Übungsblatt „Risiken sortieren“ (Schadenshöhe gegen Wahrscheinlichkeit)', grad: 'ansatz' },
    ],
  },
  {
    id: 'bbo',
    titel: 'Bildungs- und Berufsorientierung, 3. und 4. Klasse',
    zeilen: [
      { wo: '3./4. Kl.', punkt: 'Verbindliche Übung, je 32 Jahresstunden, integriert in Pflichtgegenstände', skillsup: 'keine Berufsorientierung, keine Bewerbung', grad: 'nein' },
    ],
  },
]

const oberstufe: Block[] = [
  {
    id: 'gwb-oberstufe',
    titel: 'Geographie und wirtschaftliche Bildung, 5. bis 8. Klasse',
    zeilen: [
      { wo: '5. Kl.', punkt: 'Wirtschaftliche Bedürfnisse, Produktion von Bedürfnissen', skillsup: 'Konsumfallen (Kauftrigger, Influencer, Dark Patterns); Nachhaltigkeit fehlt', grad: 'teil' },
      { wo: '5. Kl.', punkt: 'Markt und Marktversagen, Ungleichheiten', skillsup: 'nicht vorhanden', grad: 'nein' },
      { wo: '6. Kl.', punkt: 'Europäische Bildungs- und Arbeitsmärkte', skillsup: 'nicht vorhanden', grad: 'nein' },
      { wo: '6. Kl.', punkt: 'Wettbewerbspolitik, Binnenmarkt', skillsup: 'Verweis auf Wettbewerbskommission, EU-Verbraucherrecht', grad: 'ansatz' },
      { wo: '7. Kl.', punkt: 'Wirtschafts- und Sozialpolitik, gesamtwirtschaftliche Krisen', skillsup: 'Steuern, Altersvorsorge (Umlageverfahren), Gehalt (Sozialversicherung), Risiko & Krisen (Rezession)', grad: 'teil' },
      { wo: '7. Kl.', punkt: 'Demographische Entwicklung und ihre Folgen', skillsup: 'Altersvorsorge; Altersvorsorge-Simulator', grad: 'teil' },
      { wo: '7. Kl.', punkt: 'Geschäftsidee, Gründung, Einnahmen-Ausgaben-Rechnung', skillsup: 'nur steuerliche Seite (Steuern, Nebenjob-Simulation)', grad: 'ansatz' },
      { wo: '8. Kl.', punkt: 'Globalisierung, Wirtschaftsmodelle, Städte', skillsup: 'nicht vorhanden', grad: 'nein' },
    ],
  },
  {
    id: 'weitere-oberstufe',
    titel: 'Mathematik, Psychologie und Philosophie, Informatik',
    zeilen: [
      { wo: 'M 6. Kl.', punkt: 'Exponentialfunktionen, geometrische Folgen und Reihen', skillsup: 'Sparplanformel (Altersvorsorge), Spar-Rechner, Altersvorsorge-Simulator als Anwendung', grad: 'teil' },
      { wo: 'M 7. Kl.', punkt: 'Differentialrechnung in der Wirtschaft', skillsup: 'nicht vorhanden', grad: 'nein' },
      { wo: 'PP 7. Kl.', punkt: 'Fehler in der Wahrnehmung, Wahrnehmungsbeeinflussung', skillsup: 'Konsumfallen (Zahlungsschmerz, Decoy- und Ankereffekt), Finfluencer, Krypto (FOMO)', grad: 'teil' },
      { wo: 'Inf 5. Kl.', punkt: 'Datensicherheit und Datenschutz', skillsup: 'Phishing & Finanzbetrug; Phishing-Postfach; Datenschutzrecht kaum', grad: 'teil' },
    ],
  },
]

const einsatzplan = [
  { klasse: '1.', fach: 'GWB', thema: 'Umgang mit Geld, Bedürfnisse', einsatz: 'Bank-Simulation, Auszüge aus Finanzplanung' },
  { klasse: '2.', fach: 'Digitale Grundbildung', thema: 'Einkaufsverhalten, pay-to-win, Phishing', einsatz: 'Konsumfallen-Parcours, Phishing-Postfach' },
  { klasse: '2.', fach: 'GWB', thema: 'Bankdienstleistungen, Sparen und Risiko', einsatz: 'Bankkonten, Spar-Rechner' },
  { klasse: '3.', fach: 'GWB', thema: 'Einkommen, Sparen, Finanzieren, Versichern, Konsumentenschutz, Steuern, Altersversorgung', einsatz: 'Kernjahr: Gehalt, Finanzplanung, Sparen, Schulden, Versicherungen, Konsumfallen, Steuern, Altersvorsorge', kern: true },
  { klasse: '3.', fach: 'Mathematik', thema: 'Zinsen und Zinseszinsen', einsatz: 'Zinseszinsformel aus Altersvorsorge, Spar-Rechner zum Überprüfen' },
  { klasse: '4.', fach: 'Digitale Grundbildung', thema: 'Social Media, Betrugsschutz, Konsumentenrecht', einsatz: 'Finfluencer, Finfluencer-Check, Phishing' },
  { klasse: '4.', fach: 'GWB', thema: 'Das eigene Ich, EU-Verbraucherschutz', einsatz: 'Erste eigene Wohnung, Geldtyp-Test, Altersvorsorge' },
  { klasse: '6.', fach: 'Mathematik', thema: 'Exponentialfunktion, geometrische Reihen', einsatz: 'Spar-Rechner, Altersvorsorge-Simulator als Anwendungsaufgabe' },
  { klasse: '7.', fach: 'GWB', thema: 'Wirtschafts- und Sozialpolitik, Demographie', einsatz: 'Steuern, Altersvorsorge, Risiko & Krisen' },
  { klasse: '7./8.', fach: 'GWB, ab Inkrafttreten des neuen Lehrplans (unbestätigt)', thema: 'angekündigt: Anlage, Kryptoassets, Verträge, Versicherung, Arbeitnehmerveranlagung', einsatz: 'Investieren, Krypto & Kryptoassets, Altersvorsorge, Versicherungen, Steuern, Erste eigene Wohnung' },
  { klasse: '7.', fach: 'Psychologie und Philosophie', thema: 'Wahrnehmungsbeeinflussung', einsatz: 'Konsumfallen, Übungsblatt „Gleich viel Geld, anderes Gefühl“' },
]

const befunde = [
  { titel: 'Der Schwerpunkt liegt in der Unterstufe.', text: 'Finanzbildung ist im geltenden AHS-Lehrplan vor allem in GWB, Digitaler Grundbildung und im übergreifenden Thema 13 verankert. Der stärkste Punkt steht in GWB der 3. Klasse: Einkommen, Sparen, Finanzieren, Versichern und Konsumentenschutz.' },
  { titel: 'Thema 13 ist nur in der Unterstufe verbindlich.', text: 'Laut Lehrplan gelten die Kompetenzziele der übergreifenden Themen „explizit nur für die Unterstufe“. In der Oberstufe sind sie Orientierung.' },
  { titel: 'Geldanlage steht in der Oberstufe nur beim WRG.', text: '„Anlageformen nach Risiko und Chance bewerten“ (GWB, 8. Klasse) ist im Lehrplan dem Wirtschaftskundlichen Realgymnasium vorbehalten. Für Kremsmünster ist der Punkt nicht verbindlich, mit Skills-UP! aber weitgehend abbildbar.' },
  { titel: 'Der neue Oberstufenlehrplan würde das ändern.', text: 'Angekündigt ist Finanzbildung in GWB der 7. und 8. Klasse, laut Presseberichten ab 2027/28 mit Anlage, Kryptoassets, Verträgen, Versicherung und Arbeitnehmerveranlagung. Der Entwurf liegt uns nicht vor, die Angaben sind daher unbestätigt.' },
]

const luecken = [
  'Geschäftsfähigkeit Minderjähriger als eigenes Thema (was darf ich mit 13, 14, 18?)',
  'Berufsorientierung und Bildungswege (BBO, GWB 2. und 3. Klasse)',
  'Selbstständige Arbeit, Geschäftsidee, Einnahmen-Ausgaben-Rechnung',
  'Armut, Reichtum, Einkommensverteilung, Wohlstandsindikatoren',
  'Wirtschaftskreislauf und Preisbildung durch Angebot und Nachfrage',
  'Nachhaltigkeit als Leitkonzept des GWB-Lehrplans',
  'Datenschutz und Betroffenenrechte in der Tiefe',
]

function GradBadge({ grad }: { grad: Grad }) {
  const g = GRAD[grad]
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-body font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
      style={{ background: g.bg, color: g.fg }}>
      <span aria-hidden="true">{g.zeichen}</span>{g.label}
    </span>
  )
}

function BlockTabelle({ block }: { block: Block }) {
  const zaehl = (g: Grad) => block.zeilen.filter((z) => z.grad === g).length
  return (
    <details id={block.id} className="group bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      <summary className="cursor-pointer list-none px-5 md:px-6 py-4 flex flex-wrap items-center justify-between gap-3">
        <span className="font-heading font-bold text-base md:text-lg" style={{ color: '#1a1040' }}>{block.titel}</span>
        <span className="flex items-center gap-3 text-xs font-body text-[#4c5260]">
          <span>{zaehl('voll')} weitgehend · {zaehl('teil')} teilweise · {block.zeilen.length} Punkte</span>
          <span aria-hidden="true" className="transition-transform group-open:rotate-180">▾</span>
        </span>
      </summary>
      {block.hinweis && <p className="px-5 md:px-6 pb-3 font-body text-sm text-[#4c5260]">{block.hinweis}</p>}
      <ul className="border-t border-gray-100 divide-y divide-gray-100">
        {block.zeilen.map((z, i) => (
          <li key={i} className="px-5 md:px-6 py-4 grid gap-2 md:grid-cols-[5.5rem_minmax(0,1fr)_minmax(0,1fr)_7.5rem] md:gap-5 md:items-start">
            <span className="font-body text-xs font-bold uppercase tracking-wide text-[#5a5f6b] md:pt-0.5">{z.wo}</span>
            <span className="font-body text-sm text-gray-900">{z.punkt}</span>
            <span className="font-body text-sm text-[#4c5260]"><span className="md:hidden font-bold text-gray-700">Skills-UP!: </span>{z.skillsup}</span>
            <span><GradBadge grad={z.grad} /></span>
          </li>
        ))}
      </ul>
    </details>
  )
}

export default function KremsmuensterMappingPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-14 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Brotkrümel" className="font-body text-sm text-white/60 mb-6">
              <Link href="/lehrplan-mapping" className="hover:text-white underline-offset-2 hover:underline">Lehrplanmapping</Link>
              <span aria-hidden="true"> / </span>
              <span className="text-white/85">Stiftsgymnasium Kremsmünster</span>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Erstellt für das Kollegium · Stand 15. Oktober 2026
            </div>
            <h1 className="font-heading text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Skills-UP! im Lehrplan des Stiftsgymnasiums Kremsmünster
            </h1>
            <p className="font-body text-white/75 text-lg max-w-3xl leading-relaxed">
              Wo die Plattform im AHS-Lehrplan passt, Fach für Fach und Klasse für Klasse, abgeglichen mit Ihrer Stundentafel 2026/27.
              Grundlage ist der geltende Lehrplan im RIS und der aktuelle Stand aller 15 Module und 17 Simulationen.
            </p>
          </div>
        </section>

        {/* Kennzahlen */}
        <section className="py-10 px-6 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-3">
            {[
              { zahl: '23 von 38', text: 'finanz- und verbraucherbezogenen Lehrplanpunkten der Unterstufe ganz oder teilweise abgedeckt' },
              { zahl: '3. Klasse', text: 'GWB ist das Kernjahr: acht Module mit Simulation zu einem einzigen Lehrplanpunkt' },
              { zahl: '6 von 12', text: 'Punkten der Oberstufe teilweise abgedeckt, als Ergänzung in GWB, Mathematik und Psychologie' },
            ].map((k) => (
              <div key={k.zahl} className="rounded-2xl p-5" style={{ background: '#f3f1f9' }}>
                <p className="font-heading font-bold text-2xl mb-1" style={{ color: '#4a2d8a' }}>{k.zahl}</p>
                <p className="font-body text-sm text-gray-700 leading-snug">{k.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Befunde */}
        <section className="py-14 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: '#1a1040' }}>Die vier wichtigsten Befunde</h2>
            <ol className="grid gap-4 md:grid-cols-2">
              {befunde.map((b, i) => (
                <li key={b.titel} className="bg-white rounded-2xl border border-gray-200 p-6">
                  <p className="font-heading font-bold text-2xl mb-2" style={{ color: '#1E6B5B' }}>0{i + 1}</p>
                  <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#1a1040' }}>{b.titel}</h3>
                  <p className="font-body text-sm text-gray-700 leading-relaxed">{b.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Einsatzplan */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a1040' }}>Einsatzplan entlang Ihrer Stundentafel</h2>
            <p className="font-body text-gray-700 mb-8 leading-relaxed">
              Nur Stellen, die Skills-UP! weitgehend oder teilweise abdeckt. Ganze Module passen ab der 3. Klasse; in der 1. und 2. Klasse eignen sich einzelne Simulationen mit Anleitung durch die Lehrkraft. Das ist eine Einschätzung aus der Zielgruppe der Plattform (14 bis 19 Jahre), im Unterricht der Unterstufe noch nicht erprobt.
            </p>
            <ul className="space-y-3">
              {einsatzplan.map((e, i) => (
                <li key={i} className="rounded-2xl border p-5 grid gap-2 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:gap-5"
                  style={{ borderColor: e.kern ? '#2A8A76' : '#e5e7eb', background: e.kern ? '#e6f4f1' : '#ffffff' }}>
                  <span className="font-heading font-bold text-xl" style={{ color: '#4a2d8a' }}>{e.klasse} Kl.</span>
                  <div>
                    <p className="font-body text-xs font-bold uppercase tracking-wide text-[#4c5260] mb-1">{e.fach}</p>
                    <p className="font-body text-sm text-gray-900 mb-1">{e.thema}</p>
                    <p className="font-body text-sm text-gray-700"><span className="font-bold">Skills-UP!: </span>{e.einsatz}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Detail */}
        <section className="py-14 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a1040' }}>Lehrplanpunkt für Lehrplanpunkt</h2>
            <p className="font-body text-gray-700 mb-5 leading-relaxed">Zum Aufklappen. Jede Zeile nennt Fach und Klasse, den Lehrplanpunkt, das passende Material auf Skills-UP! und den Grad der Abdeckung.</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {(Object.keys(GRAD) as Grad[]).map((g) => <GradBadge key={g} grad={g} />)}
            </div>
            <dl className="grid gap-1 mb-8 -mt-5 font-body text-sm text-[#4c5260] sm:grid-cols-2">
              <div><dt className="inline font-bold">weitgehend: </dt><dd className="inline">Kompetenz und Kern des Anwendungsbereichs mit Modul, Simulation oder Übungsblatt hinterlegt</dd></div>
              <div><dt className="inline font-bold">teilweise: </dt><dd className="inline">wesentliche Teile vorhanden, einzelne Stichworte fehlen</dd></div>
              <div><dt className="inline font-bold">Ansatz: </dt><dd className="inline">Thema kommt am Rand vor, trägt die Kompetenz aber nicht</dd></div>
              <div><dt className="inline font-bold">fehlt: </dt><dd className="inline">nicht abgedeckt</dd></div>
            </dl>

            <h3 className="font-heading font-bold text-xl mb-4" style={{ color: '#4a2d8a' }}>Unterstufe</h3>
            <div className="space-y-3 mb-10">
              {unterstufe.map((b) => <BlockTabelle key={b.id} block={b} />)}
            </div>

            <h3 className="font-heading font-bold text-xl mb-4" style={{ color: '#4a2d8a' }}>Oberstufe</h3>
            <div className="space-y-3">
              {oberstufe.map((b) => <BlockTabelle key={b.id} block={b} />)}
            </div>
            <p className="font-body text-sm text-[#4c5260] mt-5 leading-relaxed">
              Der Wahlpflichtgegenstand GWB nennt ausdrücklich Planspiele, Simulationen und Finanzkrisen für die persönliche Lebensplanung. Dazu passen Aktienmarkt-Langläufer und das Klassenspiel Cryptogame. Laut Website bietet Ihre Schule derzeit die Wahlpflichtfächer Informatik, Italienisch und Spanisch an; ob GWB dazukommen kann, wissen Sie besser als wir.
            </p>
          </div>
        </section>

        {/* Luecken */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a1040' }}>Was Skills-UP! nicht abdeckt</h2>
            <p className="font-body text-gray-700 mb-6 leading-relaxed">Skills-UP! ist stark beim eigenen Geld und schwach bei Beruf, Unternehmen und Volkswirtschaft. Für diese Lehrplanpunkte brauchen Sie weiterhin anderes Material.</p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {luecken.map((l) => (
                <li key={l} className="flex gap-3 rounded-xl p-4" style={{ background: '#f1f1f4' }}>
                  <span aria-hidden="true" className="font-bold" style={{ color: '#55556a' }}>○</span>
                  <span className="font-body text-sm text-gray-800">{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6" style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
          <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <p className="font-heading font-bold text-white text-xl mb-2">Selbst ausprobieren</p>
              <p className="font-body text-white/85 text-sm mb-5 leading-relaxed">Kostenlose Testlizenz für Lehrkräfte: Module und Simulationen aus dem Einsatzplan direkt ansehen.</p>
              <a href="https://skillsup.digitale-zukunftsbildung.eu/auth/register?invite=72CD73C3" target="_blank" rel="noopener noreferrer"
                className="inline-flex font-body font-bold text-sm px-5 py-3 rounded-xl bg-white text-[#4a2d8a] hover:bg-white/90 transition-all">
                Testlizenz anlegen
              </a>
            </div>
            <div className="rounded-2xl p-6" style={{ background: 'rgba(255,255,255,0.1)' }}>
              <p className="font-heading font-bold text-white text-xl mb-2">Für die Klassen bestellen</p>
              <p className="font-body text-white/85 text-sm mb-5 leading-relaxed">Über den Marktplatz Lernapps, 13 Euro pro Schülerin und Schüler aus dem Lernapps-Budget der Schule. Bestellfrist 25. Oktober.</p>
              <a href="https://www.marktplatz-lernapps.at/product-detail?product=859" target="_blank" rel="noopener noreferrer"
                className="inline-flex font-body font-bold text-sm px-5 py-3 rounded-xl bg-white text-[#4a2d8a] hover:bg-white/90 transition-all">
                Zum Marktplatz Lernapps
              </a>
            </div>
          </div>
        </section>

        {/* Grundlage */}
        <section className="py-10 px-6 bg-white">
          <div className="max-w-4xl mx-auto font-body text-xs text-[#4c5260] leading-relaxed space-y-2">
            <p className="font-bold text-gray-700">Grundlage und Grenzen</p>
            <p>Lehrplan der allgemeinbildenden höheren Schulen, Anlage A, tagesaktuelle Fassung im RIS (gültig ab 1. September 2026, zuletzt geändert durch BGBl. II Nr. 204/2024). Stundentafel 2026/27 und Fachseiten von der Website der Schule. Skills-UP!: Volltext aller 15 Module, Simulationen und 32 Übungsblätter, Stand 15. Oktober 2026.</p>
            <p>Schulautonome Lehrplaninhalte sind nicht veröffentlicht und daher nicht berücksichtigt. Angaben zum künftigen Oberstufenlehrplan stammen aus Presseberichten und sind unbestätigt. Die Einstufung ist eine fachliche Bewertung; ob eine Klasse eine Kompetenz erreicht, hängt vom Unterricht ab.</p>
            <p>Fragen oder Ergänzungen: <a href="mailto:info@digitale-zukunftsbildung.eu" className="underline" style={{ color: '#4a2d8a' }}>info@digitale-zukunftsbildung.eu</a></p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
