import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import {
  BookOpen,
  Landmark,
  ShoppingCart,
  ShieldAlert,
  TrendingUp,
  Home,
  Wallet,
  Receipt,
  Car,
  Briefcase,
  PiggyBank,
  CreditCard,
  Building2,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Alle Lernziele | Skills-UP! — Finanzbildung Österreich',
  description:
    'Jedes Modul, jede Simulation, jedes Lernziel von Skills-UP! auf einen Blick — 37 Lernmodule und 12 interaktive Simulationen für Finanzbildung an österreichischen Schulen.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/lernziele' },
  openGraph: {
    title: 'Alle Lernziele auf einen Blick — Skills-UP!',
    description:
      '37 Lernmodule, 12 Simulationen: das vollständige Lernziel-Verzeichnis von Skills-UP! für Finanzbildung an österreichischen Schulen.',
    url: 'https://www.digitale-zukunftsbildung.eu/lernziele',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alle Lernziele auf einen Blick — Skills-UP!',
    description: '37 Lernmodule, 12 Simulationen — das vollständige Lernziel-Verzeichnis von Skills-UP!.',
  },
}

// Static, hardcoded structured data (no user input) — same pattern as /lehrplan-mapping.
const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Alle Lernziele von Skills-UP!',
  description: 'Vollständiges Verzeichnis aller Lernziele aus allen Lernmodulen und Simulationen von Skills-UP!.',
  url: 'https://www.digitale-zukunftsbildung.eu/lernziele',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Lernziele', item: 'https://www.digitale-zukunftsbildung.eu/lernziele' },
    ],
  },
}

type Module = { title: string; objective: string; duration: string }
type Block = { id: string; icon: React.ElementType; title: string; intro: string; modules: Module[] }

const bloecke: Block[] = [
  {
    id: 'grundlagen',
    icon: BookOpen,
    title: '1. Grundlagen: Geld verstehen',
    intro:
      'Die wichtigsten Finanz-Grundlagen für Lehrlinge: Wie du dein Geld planst, was auf dem Lohnzettel steht, wie du sparst und was du über Schulden wissen musst.',
    modules: [
      { title: 'Finanzplanung', duration: '15 min', objective: 'Du kannst deine Einnahmen und Ausgaben in einem einfachen Monatsbudget erfassen und weißt, wie du fixe von variablen Kosten unterscheidest.' },
      { title: 'Finanzplanung — Vertiefung', duration: '50 min', objective: 'Du erstellst einen vollständigen Wochen-, Monats- und Jahresfinanzplan, kennst den Unterschied zwischen Dauerauftrag und Lastschrift und kannst Sonderzahlungen strategisch einplanen.' },
      { title: 'Gehalt & Einkommen', duration: '15 min', objective: 'Du kannst einen Lohnzettel lesen, verstehst den Unterschied zwischen Brutto und Netto und weißt, welche Abzüge als Lehrling anfallen.' },
      { title: 'Gehalt & Einkommen — Vertiefung', duration: '50 min', objective: 'Du beherrschst die vollständige Brutto-Netto-Berechnung für Lehrlinge, verstehst den Jahreslohnzettel L16, weißt wie die Arbeitnehmerveranlagung funktioniert und kannst deinen Kollektivvertrag nutzen.' },
      { title: 'Sparen & Geldentscheidungen', duration: '15 min', objective: 'Du verstehst den Unterschied zwischen Nominalzins und Realzins, kennst den Zinseszinseffekt und weißt, warum Inflation dein Erspartes auffressen kann.' },
      { title: 'Sparen & Geldentscheidungen — Vertiefung', duration: '50 min', objective: 'Du kennst verschiedene Sparprodukte und ihre Vor- und Nachteile, kannst Zinsen und Realzins berechnen, verstehst ETF-Grundlagen und weißt, wie du systematisch einen Notgroschen aufbaust.' },
      { title: 'Schulden & Geld leihen', duration: '15 min', objective: 'Du kennst die Warnsignale für problematische Schulden, weißt was Inkasso wirklich darf und kennst erste Anlaufstellen bei Schuldenproblemen.' },
      { title: 'Schulden & Geld leihen — Vertiefung', duration: '50 min', objective: 'Du kennst die Schritte von einer unbezahlten Rechnung bis zur Pfändung, verstehst das Mahnverfahren und den Privatkonkurs und weißt, wann und wie du eine staatlich anerkannte Schuldenberatung nutzt.' },
    ],
  },
  {
    id: 'staat',
    icon: Landmark,
    title: '2. Staat & Absicherung',
    intro:
      'Was der Staat mit deinem Geld macht: Steuern, Sozialversicherung, Versicherungen und warum Altersvorsorge auch mit 16 relevant ist.',
    modules: [
      { title: 'Steuern in Österreich', duration: '15 min', objective: 'Du verstehst den Unterschied zwischen Lohnsteuer, Sozialversicherung und Gebühren, kennst die Lohnsteuergrenze 2026 und weißt wann sich die Arbeitnehmerveranlagung lohnt.' },
      { title: 'Steuern in Österreich — Vertiefung', duration: '50 min', objective: 'Du verstehst das österreichische Steuersystem, Einkommensteuer-Tarife und Grenzsteuersatz, weißt wann du eine Steuererklärung einreichen musst und kannst FinanzOnline selbstständig bedienen.' },
      { title: 'Versicherungen verstehen', duration: '15 min', objective: 'Du kennst den Unterschied zwischen Pflicht- und freiwilligen Versicherungen, weißt was Selbstbehalt und Ausschlüsse bedeuten und kannst entscheiden, welche Versicherungen als Lehrling sinnvoll sind.' },
      { title: 'Versicherungen verstehen — Vertiefung', duration: '50 min', objective: 'Du kannst Versicherungsverträge lesen und bewerten, kennst alle relevanten Versicherungen für Lehrlinge und Junge Erwachsene und weißt, wie du Versicherungen sinnvoll vergleichst.' },
      { title: 'Altersvorsorge', duration: '15 min', objective: 'Du kennst das österreichische 3-Säulen-Modell der Altersvorsorge und verstehst, warum früh privat vorzusorgen entscheidend ist.' },
      { title: 'Altersvorsorge — Vertiefung', duration: '50 min', objective: 'Du verstehst das österreichische Pensionssystem vollständig, kennst die demografischen Herausforderungen und kannst eine persönliche Pensionsstrategie entwickeln.' },
      { title: 'Das österreichische Sozialsystem', duration: '15 min', objective: 'Du verstehst warum du Sozialversicherungsbeiträge zahlst, weißt welche Leistungen dir das Sozialsystem im Bedarfsfall bietet und kennst die wichtigsten Anlaufstellen.' },
      { title: 'Nebenjob & Geringfügige Beschäftigung', duration: '15 min', objective: 'Du weißt, ab welcher Grenze ein Nebenjob sozialversicherungspflichtig wird, kennst deine Rechte und Pflichten und kannst einschätzen, wann ein Dienst- oder Werkvertrag gilt.' },
    ],
  },
  {
    id: 'konsumwelt',
    icon: ShoppingCart,
    title: '3. Konsumwelt & Finanzmarkt',
    intro:
      'Wie Werbung und BNPL dich beeinflussen, was Ratenkauf wirklich kostet und was von Kryptowährungen zu halten ist.',
    modules: [
      { title: 'Konsumfallen', duration: '15 min', objective: 'Du erkennst die häufigsten psychologischen Konsumfallen und kennst einfache Strategien, um bewusster Kaufentscheidungen zu treffen.' },
      { title: 'Konsumfallen — Vertiefung', duration: '50 min', objective: 'Du kennst die Psychologie hinter Konsumentscheidungen, verstehst BNPL-Risiken mit Zahlen und entwickelst eine persönliche Anti-Konsum-Strategie.' },
      { title: 'Ratenkauf & BNPL', duration: '15 min', objective: 'Du verstehst, wie Ratenkauf und BNPL wirklich funktionieren, kennst die versteckten Kosten und weißt, wann du ein gesetzliches Rücktrittsrecht hast.' },
      { title: 'Ratenkauf & BNPL — Vertiefung', duration: '50 min', objective: 'Du berechnest Kreditkosten, kennst alle Schutzrechte und die EU-Richtlinie 2023/2225 und kannst entscheiden, wann ein Ratenkauf vertretbar ist.' },
      { title: 'Kryptowährungen & Krypto-Assets', duration: '15 min', objective: 'Du verstehst Grundbegriffe wie Blockchain, Bitcoin und Stablecoins, kennst die wichtigsten Risiken und weißt, dass Krypto in Österreich steuerpflichtig ist.' },
      { title: 'Kryptowährungen & Krypto-Assets — Vertiefung', duration: '50 min', objective: 'Du verstehst wie Blockchain und Bitcoin funktionieren, kennst die EU-Regulierung (MiCA) und österreichische Steuerregeln und kannst Investitionsangebote kritisch prüfen.' },
      { title: 'ETF & Aktien für Einsteiger', duration: '15 min', objective: 'Du verstehst was ein ETF ist und warum er für Einsteiger besser geeignet ist als Einzelaktien, und weißt wie du in Österreich legal und steuerkorrekt ein Depot eröffnest.' },
      { title: 'Handy- & Abo-Verträge', duration: '15 min', objective: 'Du kannst Handy- und Abo-Verträge vergleichen, kennst deine Kündigungsrechte und erkennst Abofallen bevor du drauftrittst.' },
    ],
  },
  {
    id: 'medienkompetenz',
    icon: ShieldAlert,
    title: '4. Medienkompetenz & Krisenprävention',
    intro:
      'Finfluencer kritisch beurteilen, finanzielle Krisen früh erkennen — und wie du dich vor Betrug schützt.',
    modules: [
      { title: 'Finfluencer in Österreich', duration: '15 min', objective: 'Du kannst seriöse Finanzinformationen von problematischer Finfluencer-Werbung unterscheiden und weißt, welche Regulierungen gelten.' },
      { title: 'Finfluencer in Österreich — Vertiefung', duration: '50 min', objective: 'Du verstehst parasoziale Beziehungen und deren Einfluss auf Finanzentscheidungen, kennst ESMA-Leitlinien und FMA-Regulierung und kannst Prebunking-Strategien anwenden.' },
      { title: 'Risiko & Krisen', duration: '15 min', objective: 'Du erkennst finanzielle Risikolagen frühzeitig, kennst die Eskalationskette von Verzug bis Pfändung und weißt, was ein Notgroschen ist.' },
      { title: 'Risiko & Krisen — Vertiefung', duration: '50 min', objective: 'Du kannst ein persönliches Krisenbudget erstellen und weißt, welche österreichischen Stellen dir in einer Krise kostenlos helfen.' },
      { title: 'Phishing & Finanzbetrug — Kompaktkurs', duration: '15 min', objective: 'Du erkennst die sechs wichtigsten Angriffsformen (Phishing, Smishing, Vishing, CEO-Fraud, Rechnungsbetrug, Investment-Scam) und kennst die korrekten Schritte nach einem Vorfall.' },
      { title: 'Phishing & Finanzbetrug — Deep Dive', duration: '50 min', objective: 'Du verstehst alle acht aktuellen Betrugstypen im Detail, erkennst die psychologischen Manipulationsmechanismen und kennst alle österreichischen Meldewege.' },
    ],
  },
  {
    id: 'bank-konto',
    icon: Wallet,
    title: '5. Bank & Konto',
    intro: 'Die Basis für alles: wie ein Bankkonto in Österreich wirklich funktioniert.',
    modules: [
      { title: 'Bankkonto & Girokonto', duration: '15 min', objective: 'Du verstehst, was ein Bankkonto ist, wie Debitkarte, Kreditkarte und Überziehung funktionieren und welche Regeln dir helfen, den Überblick zu behalten.' },
      { title: 'Girokonto & Online-Banking', duration: '15 min', objective: 'Du verstehst wie ein österreichisches Girokonto funktioniert, kannst Überweisungen und Daueraufträge korrekt einrichten und kennst die wichtigsten Gebühren und Fallen.' },
      { title: 'Kreditkarten & Debitkarten', duration: '15 min', objective: 'Du kennst den Unterschied zwischen Debitkarte und Kreditkarte, verstehst die Fallen beim Revolving Credit und weißt, wie du dich vor Kartenbetrug schützt.' },
    ],
  },
]

type SimGoals = { icon: React.ElementType; title: string; schueler: string[]; lehrer: string[] }

const simulationen: SimGoals[] = [
  {
    icon: TrendingUp,
    title: 'Aktien-Simulation',
    schueler: [
      'Was eine Aktie ist und warum Unternehmen sie ausgeben',
      'Der Unterschied zwischen Kursgewinn und Dividende',
      'Wie Zinseszins langfristig wirkt',
      'Warum Diversifikation wichtig ist',
      'Wie Finanzkrisen Kurse beeinflussen',
    ],
    lehrer: [
      'Aktienmarkt-Grundlagen und Börsenmechanismen (AT: Wiener Börse)',
      'Risikobewertung und Risikotoleranz — Verhaltensökonomie',
      'Steuerliche Behandlung von Kursgewinnen und Dividenden (KESt 27,5 %)',
      'Lehrplanbezug: Wirtschaft & Recht, Finanzbildung, BIST 8',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Versicherungs-Simulation',
    schueler: [
      'Was eine Selbstbeteiligung ist und warum es sie gibt',
      'Unterschied zwischen Haftpflicht-, Kasko- und Rechtsschutzversicherung',
      'Welche Versicherungen in Österreich gesetzlich verpflichtend sind',
      'Wie man Prämien und Leistungen sinnvoll vergleicht',
    ],
    lehrer: [
      'Versicherungspflicht AT: KFZ-Haftpflicht, Sozialversicherung (ASVG)',
      'Risikomanagement-Grundlagen: Selbstbehalt, Prämie, versichertes Risiko',
      'Lehrplanbezug: Wirtschaft & Recht, Finanzbildung, Konsumentenschutz',
    ],
  },
  {
    icon: PiggyBank,
    title: 'Pensions-Simulation',
    schueler: [
      'Warum früh sparen drastisch mehr Geld bedeutet',
      'Das österreichische Drei-Säulen-Pensionssystem',
      'Was ASVG, Betriebliche Vorsorge und private Vorsorge bedeuten',
      'Den eigenen Vorsorgebedarf grob berechnen',
    ],
    lehrer: [
      'Zinseszins-Effekt: exponentielles vs. lineares Wachstum',
      'ASVG-Pensionskonto: Umlageverfahren, Beitragsjahre',
      'Betriebliche Vorsorge (BMSVG 2003): Pflichtbeitrag, MV-Kasse',
      'Drei-Säulen-Modell als Unterrichtsstruktur',
    ],
  },
  {
    icon: Briefcase,
    title: 'Gehaltsverhandlungs-Simulation',
    schueler: [
      'Was der Kollektivvertrag ist und warum er für dein Gehalt gilt',
      'Wie du dich auf ein Gehaltsgespräch vorbereitest',
      'Welche Argumente wirklich überzeugen — und welche schaden',
      'Wie du mit Einwänden deiner Vorgesetzten umgehst',
    ],
    lehrer: [
      'Kollektivvertrag Einzelhandel AT — Mindestgehälter und Gehaltsbestandteile',
      'Verhandlungstaktiken: BATNA, Ankern, Stufenmodell',
      'Österreichisches Arbeitsrecht bei Gehaltsverhandlungen',
      'Lehrplanbezug: Wirtschaft & Recht / Betriebswirtschaft',
    ],
  },
  {
    icon: Receipt,
    title: 'Steuer-Simulation',
    schueler: [
      'Was Bruttolohn, Nettolohn, SV und Lohnsteuer bedeuten',
      'Welche Ausgaben du als Lehrling von der Steuer absetzen kannst',
      'Eine Arbeitnehmerveranlagung über FinanzOnline einreichen',
      'Warum eine Steuererklärung oft Geld zurückbringt',
    ],
    lehrer: [
      'Brutto-Netto-Rechnung für Lehrlinge (real, AT-Werte)',
      'Sozialversicherung vs. Lohnsteuer vs. Arbeitnehmerveranlagung',
      'Praxishandlung: FinanzOnline-Formular ausfüllen (simuliert)',
      'Lehrplanbezug: § 5 Abs. 1 des Lehrplans für Finanzbildung',
    ],
  },
  {
    icon: Car,
    title: 'Auto-Simulation',
    schueler: [
      'Die Gesamtkosten eines Autos über 5 Jahre berechnen — nicht nur den Kaufpreis',
      'Unterschied zwischen Kauf, Kredit und Leasing',
      'Österreichische Spezifika: NoVA, §57a-Pickerl, Vignette, Pendlerpauschale',
      'Wertverlust und Finanzierungskosten in die Entscheidung einbeziehen',
    ],
    lehrer: [
      'Gesamtkostenrechnung (Total Cost of Ownership) am Alltagsbeispiel',
      'Vergleich Kauf bar vs. Kredit vs. Leasing',
      'Österreichische Kfz-Steuer: NoVA, §57a, Kennzeichenkosten',
      'Finanzierungskosten: Annuität, Effektivzins, Gesamtbelastung',
    ],
  },
  {
    icon: Briefcase,
    title: 'Nebenjob-Simulation',
    schueler: [
      'Was die Geringfügigkeitsgrenze ist und warum sie existiert',
      'Unterschied zwischen angestellt und selbstständig beim Nebenjob',
      'Was Mitversicherung bedeutet und wann du sie verlierst',
      'Welche Konsequenzen bei Überschreiten der Grenze drohen',
    ],
    lehrer: [
      'ASVG §5 – Geringfügige Beschäftigung, Beitragspflicht',
      'Gewerberecht – Bagatellgrenze WKO',
      'SV-Nachzahlung und rückwirkende Versicherungspflicht',
    ],
  },
  {
    icon: Home,
    title: 'Wohnungs-Simulation',
    schueler: [
      'Wie viel eine erste eigene Wohnung wirklich kostet (Kaution, Provision, Ausstattung)',
      'Unterschied Kaltmiete, Warmmiete und Betriebskosten',
      'Was das MRG (Mietrechtsgesetz) für Mieter bedeutet',
      'Ein realistisches Wohnbudget planen',
    ],
    lehrer: [
      'Mietrecht AT: MRG, Betriebskostenabrechnung, Kautionsrecht',
      'Bestellerprinzip 2023: Maklerprovision, Auswirkungen auf den Wohnungsmarkt',
      'Lehrplanbezug: Wirtschaft & Recht, WKO-Lernfelder Kaufmännisch',
    ],
  },
  {
    icon: PiggyBank,
    title: 'Sparen-Simulation',
    schueler: [
      'Unterschied zwischen Tagesgeld, Festgeld und Sparbuch',
      'Wie Zinsen und Zinseszins funktionieren',
      'Was Inflation mit deinem Erspartem macht',
      'Wann ein Notfallpuffer sinnvoll ist',
    ],
    lehrer: [
      'Realzins vs. Nominalzins — österreichische Statistik',
      'Finanzielle Resilienz: Notfallpuffer, Liquiditätsplanung',
      'Vergleich Sparmöglichkeiten AT: Bausparvertrag, Wertpapiersparpläne',
    ],
  },
  {
    icon: CreditCard,
    title: 'Kredit-Simulation',
    schueler: [
      'Unterschied zwischen Nominalzins und Effektivzins',
      'Was eine Balloon-Rate ist und wie sie zur Falle wird',
      'Wie versteckte Gebühren den „günstigen" Kredit teuer machen',
      'Wann Sparen die klügere Entscheidung ist',
    ],
    lehrer: [
      'Kreditkosten konkret berechnen (Annuität, Zinseszins)',
      'Kritische Analyse von Finanzierungsangeboten',
      'Risikobewertung: KSV, Bonität, Überschuldung',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'Konsumfallen-Simulation',
    schueler: [
      'Versteckte Kosten in Verträgen und AGBs erkennen',
      'Wie Zeitdruck und FOMO das Kaufverhalten manipulieren',
      'Fake-Bewertungen und Dark Patterns identifizieren',
      'Den Kredit-Score vor BNPL-Fallen schützen',
    ],
    lehrer: [
      'Medienkompetenz: Manipulation durch Design und Sprache',
      'Verbraucherschutz: Rechtslage bei Abos und BNPL in Österreich',
      'Lehrplan BWL/REWE: Marketingpsychologie und Konsumentenrechte',
    ],
  },
]

const bankZiele = [
  'Erste Überweisung an eine andere Person oder ein Unternehmen tätigen',
  'Einen automatischen Dauerauftrag für regelmäßige Zahlungen einrichten',
  'Ein konkretes Sparziel mit Betrag und Deadline definieren',
  'Geld aufs Sparkonto einzahlen und Rücklagen aufbauen',
  'Ein monatliches Ausgabenlimit festlegen',
  'Den Kontoauszug öffnen und die eigenen Buchungen überblicken',
  'Einen Finanz-Check durchführen und die finanzielle Gesundheit bewerten',
  'Die Karte sperren — die wichtigste Sicherheitsfunktion bei Verlust oder Diebstahl',
]

const chips = [
  { href: '#grundlagen', label: 'Grundlagen' },
  { href: '#staat', label: 'Staat & Absicherung' },
  { href: '#konsumwelt', label: 'Konsumwelt' },
  { href: '#medienkompetenz', label: 'Medienkompetenz' },
  { href: '#bank-konto', label: 'Bank & Konto' },
  { href: '#simulationen', label: 'Simulationen' },
]

const gesamtModule = bloecke.reduce((sum, b) => sum + b.modules.length, 0)
const gesamtSimZiele = simulationen.reduce((sum, s) => sum + s.schueler.length + s.lehrer.length, 0)

export default function LernzielePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section
          className="relative overflow-hidden pt-32 pb-20 px-6"
          style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none animate-float-orb"
            style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.25) 0%, transparent 70%)' }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none animate-float-orb-reverse"
            style={{ background: 'radial-gradient(circle, rgba(42,138,118,0.2) 0%, transparent 70%)' }} />

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <GraduationCap size={14} aria-hidden="true" />
              Vollständiges Lernziel-Verzeichnis
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Jedes Modul.<br />Jede Simulation.<br />Jedes Lernziel.
            </h1>
            <p className="font-body text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Skills-UP! macht Finanzbildung greifbar — hier siehst du transparent, was Schüler:innen in jedem
              Modul und jeder interaktiven Simulation tatsächlich lernen.
            </p>

            <div className="flex justify-center gap-8 md:gap-14 flex-wrap mb-10">
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-800 text-white">{gesamtModule}</p>
                <p className="font-body text-xs uppercase tracking-widest text-white/50 mt-1">Lernmodule</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-800 text-white">{simulationen.length + 1}</p>
                <p className="font-body text-xs uppercase tracking-widest text-white/50 mt-1">Simulationen</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl md:text-4xl font-800 text-white">{gesamtSimZiele + bankZiele.length}+</p>
                <p className="font-body text-xs uppercase tracking-widest text-white/50 mt-1">Lernziele in Simulationen</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/demo-anfragen"
                className="font-body font-700 text-sm px-6 py-3 rounded-xl text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                Gratis Demo anfragen
              </Link>
              <Link href="/lehrplan-mapping"
                className="font-body font-700 text-sm px-6 py-3 rounded-xl text-white/80 border border-white/20 hover:border-white/40 transition-all">
                Zum Lehrplanmapping
              </Link>
            </div>
          </div>
        </section>

        {/* Quick-nav chips */}
        <section className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 py-3 px-6">
          <div className="max-w-7xl mx-auto flex gap-2 overflow-x-auto no-scrollbar">
            {chips.map((c) => (
              <a key={c.href} href={c.href}
                className="shrink-0 px-4 py-2 rounded-xl text-sm font-body font-600 text-text-secondary bg-primary-50 hover:bg-primary-100 hover:text-primary-dark transition-colors whitespace-nowrap">
                {c.label}
              </a>
            ))}
          </div>
        </section>

        {/* Kapitel-Blöcke */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1040' }}>
                Die Lernmodule
              </h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Jedes Thema gibt es als 15-minütige Kurzversion und — für den vertiefenden Unterricht — als
                50-minütige Vertiefung.
              </p>
            </div>

            <div className="space-y-16">
              {bloecke.map((block) => {
                const Icon = block.icon
                return (
                  <div key={block.id} id={block.id} className="scroll-mt-32">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white"
                        style={{ background: 'linear-gradient(135deg, #4a2d8a, #6b4db0)' }}>
                        <Icon size={22} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl md:text-2xl font-bold" style={{ color: '#1a1040' }}>
                          {block.title}
                        </h3>
                        <p className="font-body text-gray-500 text-sm mt-1 max-w-2xl">{block.intro}</p>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {block.modules.map((m) => (
                        <div key={m.title + m.duration} className="card-gradient !p-5 flex flex-col">
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-heading font-700 text-sm" style={{ color: '#1a1040' }}>
                              {m.title}
                            </span>
                            <span className="shrink-0 text-[11px] font-body font-700 px-2 py-1 rounded-full bg-status-teal-light text-status-teal">
                              {m.duration}
                            </span>
                          </div>
                          <p className="font-body text-sm text-gray-600 leading-relaxed">{m.objective}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Simulationen */}
        <section id="simulationen" className="py-16 px-6 bg-white scroll-mt-32">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1040' }}>
                Die Simulationen
              </h2>
              <p className="font-body text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Statt nur zu lesen, entscheiden Schüler:innen selbst — in 11 interaktiven Simulationen mit
                jeweils eigenen Lernzielen für Schüler:innen und für Lehrpersonen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {simulationen.map((sim) => {
                const Icon = sim.icon
                return (
                  <div key={sim.title} className="rounded-2xl border border-gray-100 shadow-card overflow-hidden">
                    <div className="flex items-center gap-3 px-6 py-4"
                      style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)' }}>
                      <Icon size={18} aria-hidden="true" className="text-white/80 shrink-0" />
                      <p className="font-heading font-700 text-white text-base">{sim.title}</p>
                    </div>
                    <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
                      <div className="p-5">
                        <p className="text-[11px] font-body font-700 uppercase tracking-widest text-primary-dark mb-3">
                          Für Schüler:innen
                        </p>
                        <ul className="space-y-2">
                          {sim.schueler.map((z) => (
                            <li key={z} className="flex items-start gap-2 text-sm font-body text-gray-600 leading-snug">
                              <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary-medium" />
                              {z}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5 bg-gray-50">
                        <p className="text-[11px] font-body font-700 uppercase tracking-widest text-status-teal mb-3">
                          Für Lehrpersonen
                        </p>
                        <ul className="space-y-2">
                          {sim.lehrer.map((z) => (
                            <li key={z} className="flex items-start gap-2 text-sm font-body text-gray-600 leading-snug">
                              <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-status-teal" />
                              {z}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Bank-Simulation */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-card" style={{ background: '#0d1b35' }}>
              <div className="flex items-center gap-3 px-6 py-5 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(123,108,244,0.2)' }}>
                  <Building2 size={20} aria-hidden="true" className="text-[#7b6cf4]" />
                </div>
                <div>
                  <p className="font-heading font-700 text-white text-lg">Bank-Simulation</p>
                  <p className="font-body text-white/50 text-sm">Ein eigenes Girokonto von Grund auf bedienen lernen</p>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-3 p-6">
                {bankZiele.map((z) => (
                  <div key={z} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                    <CheckCircle2 size={16} aria-hidden="true" className="text-[#00d4a0] shrink-0 mt-0.5" />
                    <span className="font-body text-sm text-white/75 leading-snug">{z}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a1040' }}>
              Passt das zu deinem Unterricht?
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Sieh dir an, welche Module zu welchem Schultyp und Fach passen — oder frag direkt eine
              kostenlose Demo für deine Klasse an.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/demo-anfragen"
                className="inline-flex items-center gap-2 font-body font-700 text-sm px-7 py-4 rounded-xl text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                Gratis Demo anfragen
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link href="/schulen"
                className="inline-flex items-center gap-2 font-body font-700 text-sm px-7 py-4 rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 transition-all">
                Für deinen Schultyp ansehen
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
