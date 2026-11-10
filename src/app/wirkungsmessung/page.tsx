import type { Metadata } from 'next'
import Image from 'next/image'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import {
  BELEG, STAND, KETTE_LEISTUNG, KETTE_WIRKUNG, STAKEHOLDER, STAND_STIL, ZWECK, SCHRITTE, VERWENDUNG,
  MODELL, KETTEN_TABELLE, DIMENSION_FARBE, EBENEN, ZEITEN, WIRKUNGSBOX, OEKOLOGISCH_HINWEIS,
  KIRKPATRICK, MESSPLAN, GESCHICHTE, STIMMEN, QUELLEN, KENNZAHLEN, QUARTALE, GESAMT, Q_NAME, KPI_NAMEN, BEFUNDE,
  TRICHTER, BEGRIFFE, VEREIN, ZIELE_2027, AUSGANGSLAGE, fmt, wert, quartalName,
  type Beleg, type KpiStatus, type KpiZelle,
} from './daten'
import { Chip, GruppenKette, KapitelNav, KetteInteraktiv, KpiExplorer, PdfKnopf, StakeholderFilter, WirkungsboxFilter, type KettenStufe } from './interaktiv'

// Wirkungsbericht Skills-UP!, öffentlich seit 10.11.2026 (vorher passwortgeschützt), in Sitemap und Footer.
// Aufbau: runde-4-berichtsstruktur.md (strategisch oben, Zahlen unten). Druckfassung über @media print und print:-Klassen.

const URL = 'https://www.digitale-zukunftsbildung.eu/wirkungsmessung'

export const metadata: Metadata = {
  title: 'Wirkungsbericht Skills-UP! | Digitale Zukunftsbildung',
  description: 'Wirkungslogik, Ergebnisse und Kennzahlen von Skills-UP! nach den Modellen der WU Wien.',
  alternates: { canonical: URL },
  openGraph: {
    title: 'Wirkungsbericht Skills-UP!',
    description: 'Wie Skills-UP! junge Menschen im Umgang mit Geld stärkt: Wirkungslogik, Ergebnisse und Kennzahlen.',
    url: URL,
    type: 'article',
  },
}

const INK = '#1a1040'
const TEXT2 = '#4c5260'
const KARTE = 'bg-white rounded-[20px] shadow-card border border-primary-medium/10 min-w-0 break-inside-avoid'

const KAPITEL = [
  { id: 'ansatz', titel: 'Ansatz', text: 'Warum es Skills-UP! gibt und wie es arbeitet.' },
  { id: 'wirkungslogik', titel: 'Wirkungslogik', text: 'Von Input bis Impact, für jede betroffene Gruppe.' },
  { id: 'erreicht', titel: 'Erreicht', text: 'Zwei Phasen, sieben Befunde, der Weg zum Lernerfolg.' },
  { id: 'zahlen', titel: 'Zahlen', text: 'Alle Kennzahlen je Quartal zum Erkunden.' },
  { id: 'methode', titel: 'Methode', text: 'Wie wir messen und wie wir zählen.' },
  { id: 'ausblick', titel: 'Ausblick', text: 'Ziele bis Ende 2027 und die nächsten Schritte.' },
]

const PERSON: Record<string, { foto: string; position: string }> = {
  'Dr. Stefan Bauer': { foto: '/fotos/skillsUP-10.jpg', position: '50% 30%' },
  'Marina Winkler, MA': { foto: '/fotos/skillsUP-8.jpg', position: '50% 30%' },
}

function BelegChip({ beleg }: { beleg: Beleg }) {
  return <Chip beleg={beleg} />
}

function Capybara({ className }: { className: string }) {
  return (
    <Image src="/capybara-mascot.png" alt="" aria-hidden="true" width={540} height={675}
      className={`pointer-events-none select-none absolute opacity-[0.06] ${className}`} />
  )
}

/** Kapitel im Stil der Startseite: Pille, große Überschrift, gedämpfte Einleitung. Im Druck auf neuer Seite. */
function Kapitel({ id, nr, titel, intro, children, getoent = false }: { id: string; nr: number; titel: string; intro: string; children: React.ReactNode; getoent?: boolean }) {
  return (
    <section id={id} className={`kapitel relative overflow-hidden scroll-mt-32 py-20 md:py-28 px-6 ${getoent ? 'bg-[#fcfbfe]' : 'bg-white'}`}>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
            Kapitel {nr}
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5 text-balance" style={{ color: INK }}>{titel}</h2>
          <p className="text-text-muted text-lg font-body">{intro}</p>
        </div>
        <div className="space-y-24 md:space-y-32">{children}</div>
      </div>
    </section>
  )
}

function Teil({ id, titel, intro, children }: { id: string; titel: string; intro?: string; children: React.ReactNode }) {
  return (
    <div id={id} className="scroll-mt-36">
      <div className="max-w-3xl mb-10">
        <h3 className="font-heading text-2xl md:text-3xl font-bold mb-3 text-balance" style={{ color: INK }}>{titel}</h3>
        {intro && <p className="font-body text-base md:text-lg" style={{ color: TEXT2 }}>{intro}</p>}
      </div>
      {children}
    </div>
  )
}

/** Zitatband zwischen den Kapiteln, Foto am Rand. */
function Zitat({ text, person, rolle, dunkel = false }: { text: string; person: string; rolle: string; dunkel?: boolean }) {
  const p = PERSON[person]
  return (
    <aside className={`zitat relative overflow-hidden px-6 py-16 md:py-20 break-inside-avoid ${dunkel ? 'text-white' : ''}`}
      style={{ background: dunkel ? 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' : '#f3f1f9' }}>
      <Capybara className={`-right-10 -bottom-24 w-72 ${dunkel ? 'opacity-[0.08]' : ''}`} />
      <figure className={`relative max-w-5xl mx-auto grid gap-8 items-center ${p ? 'md:grid-cols-[9rem_minmax(0,1fr)]' : ''}`}>
        {p && (
          <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden ring-4 ring-white shadow-card mx-auto md:mx-0">
            <Image src={p.foto} alt={person} fill sizes="144px" className="object-cover" style={{ objectPosition: p.position }} />
          </div>
        )}
        <div>
          <span aria-hidden="true" className="block font-heading text-7xl leading-[0.6] h-10 text-primary-light">„</span>
          <blockquote className="font-heading text-2xl md:text-3xl leading-snug text-balance" style={{ color: dunkel ? '#fff' : INK }}>{text}“</blockquote>
          <figcaption className={`mt-5 font-body text-sm ${dunkel ? 'text-white/80' : ''}`} style={dunkel ? undefined : { color: TEXT2 }}>
            <strong className={dunkel ? 'text-white' : ''} style={dunkel ? undefined : { color: INK }}>{person}</strong>, {rolle}
          </figcaption>
        </div>
      </figure>
    </aside>
  )
}

const KPI_STIL: Record<KpiStatus, React.CSSProperties> = {
  gemessen: { color: '#212529' },
  eingeschränkt: { background: '#FDF0E6', color: '#8A4210' },
  fehlt: { color: '#6C757D' },
}

function zelle(z: KpiZelle | undefined, einheit: string) {
  if (!z || z.wert === null) return 'nicht erfasst'
  const s = fmt(z.wert, Number.isInteger(z.wert) ? 0 : 1)
  return einheit === 'Anzahl' ? s : `${s} ${einheit}`
}

const qKurz = (q: string) => quartalName(q).replace('. Quartal', '. Q.')

function Balken({ anteil, label }: { anteil: number; label: string }) {
  return (
    <div className="w-full h-3 rounded-full bg-primary-50" title={label}>
      <div className="h-full rounded-full bg-primary-medium" style={{ width: `${Math.max(2, Math.min(100, anteil))}%` }} />
    </div>
  )
}

function KennzahlenTabelle() {
  return (
    <div className="overflow-x-auto rounded-[20px] border border-gray-100">
      <table className="min-w-[860px] print:min-w-0 w-full text-left font-body text-sm print:text-[10px]">
        <caption className="sr-only">Plattformkennzahlen je Quartal und gesamt</caption>
        <thead className="text-gray-900 border-b border-gray-100">
          <tr>
            <th scope="col" className="px-4 py-3 print:px-2 print:py-1 font-heading">Bereich</th>
            <th scope="col" className="px-4 py-3 print:px-2 print:py-1 font-heading">Kennzahl</th>
            {QUARTALE.map((q) => <th key={q} scope="col" className="px-4 py-3 print:px-2 print:py-1 font-heading text-right whitespace-nowrap">{qKurz(q)}</th>)}
            <th scope="col" className="px-4 py-3 print:px-2 print:py-1 font-heading text-right bg-primary-50">Gesamt</th>
            <th scope="col" className="px-4 py-3 print:px-2 print:py-1 font-heading">Hinweis</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {KENNZAHLEN.kpis.map((k, i) => {
            const neu = i === 0 || KENNZAHLEN.kpis[i - 1].ast !== k.ast
            const letzt = k.werte[QUARTALE[QUARTALE.length - 1]]
            return (
              <tr key={k.kpi}>
                <td className="px-4 py-2.5 print:px-2 print:py-1 font-700 text-gray-900 whitespace-nowrap">{neu ? k.ast : ''}</td>
                <td className="px-4 py-2.5 print:px-2 print:py-1 text-gray-900">{k.kpi.replace('Nordstern: ', '')}</td>
                {[...QUARTALE, GESAMT].map((q) => (
                  <td key={q} className={`px-4 py-2.5 print:px-2 print:py-1 text-right tabular-nums whitespace-nowrap ${q === GESAMT ? 'font-700' : ''}`} style={KPI_STIL[k.werte[q]?.status ?? 'fehlt']}>
                    {zelle(k.werte[q], k.einheit)}
                  </td>
                ))}
                <td className="px-4 py-2.5 print:px-2 print:py-1 text-xs print:text-[9px]" style={{ color: TEXT2 }}>
                  {[...new Set([letzt?.hinweis && `${qKurz(QUARTALE[QUARTALE.length - 1])}: ${letzt.hinweis}`, k.werte[GESAMT]?.hinweis && `Gesamt: ${k.werte[GESAMT].hinweis}`].filter(Boolean))].join('; ')}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

const DRUCK_CSS = `
@media print {
  @page { size: A4; margin: 14mm 12mm 16mm; }
  html { scroll-behavior: auto !important; }
  html, body { background: #fff !important; }
  * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; }
  body > header, header.fixed, footer { display: none !important; }
  .kapitel { break-before: page; padding-top: 0 !important; padding-bottom: 8mm !important; }
  .kapitel .space-y-24 > * + *, .kapitel .space-y-32 > * + * { margin-top: 10mm !important; }
  .zitat { padding-top: 8mm !important; padding-bottom: 8mm !important; }
  .willkommen { break-after: page; padding-top: 0 !important; }
  .shadow-card { box-shadow: none !important; }
  article, figure, li, tr, dl > div { break-inside: avoid; }
  h2, h3, h4 { break-after: avoid; }
  /* A4 ist schmaler als der md-Breakpoint: Spalten und Größen für den Druck fest setzen */
  html { font-size: 10.5px !important; }
  .sm\\:grid-cols-2, .md\\:grid-cols-2, .lg\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; }
  .md\\:grid-cols-3, .lg\\:grid-cols-3, .xl\\:grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)) !important; }
  .lg\\:grid-cols-4, .xl\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)) !important; }
  .md\\:grid-cols-\\[9rem_minmax\\(0\\2c 1fr\\)\\] { grid-template-columns: 7rem minmax(0, 1fr) !important; }
  .lg\\:grid-cols-\\[minmax\\(0\\2c 7fr\\)_minmax\\(0\\2c 5fr\\)\\] { grid-template-columns: 7fr 5fr !important; }
  .md\\:grid-cols-\\[minmax\\(0\\2c 1fr\\)_minmax\\(0\\2c 2fr\\)\\] { grid-template-columns: 1fr 2fr !important; }
  .md\\:grid-cols-\\[minmax\\(0\\2c 1fr\\)_auto\\] { grid-template-columns: 1fr auto !important; }
  .kapitel .mb-16 { margin-bottom: 6mm !important; }
  .kapitel .mb-10 { margin-bottom: 4mm !important; }
  .willkommen .mt-20 { margin-top: 8mm !important; }
  .p-7, .p-8, .md\\:p-8 { padding: 4mm !important; }
}
`

export default function WirkungsberichtPage() {
  const w = KETTE_WIRKUNG
  const stufen: KettenStufe[] = [
    ...KETTE_LEISTUNG.map((g) => ({ id: g.id, titel: g.titel, frage: g.frage, ton: 'leistung' as const, punkte: g.punkte })),
    {
      id: 'brutto', titel: 'Bruttowirkung', frage: 'Was verändert sich (Outcome)?', ton: 'wirkung',
      punkte: [...w.bruttoIntendiert.punkte, ...w.bruttoUnintendiert.punkte.map((p) => ({ ...p, text: `Unintendiert: ${p.text}` }))],
    },
    { id: 'deadweight', titel: 'Deadweight', frage: 'Was wäre ohnehin passiert?', ton: 'abzug', punkte: [], text: w.deadweight.text },
    { id: 'netto', titel: 'Nettowirkung', frage: 'Was geht auf Skills-UP! zurück (Impact)?', ton: 'netto', punkte: [], text: w.netto.text },
  ]
  const maxAktiv = Math.max(...QUARTALE.map((q) => wert(KPI_NAMEN.aktiv, q)))
  const naechsteSchritte = [
    ...MESSPLAN.filter((m) => m.beleg === 'geplant').map((m) => ({ titel: m.wirkung, text: `${m.methode}, ${m.zeitpunkt}.` })),
    { titel: 'Lizenzen und Konten abgleichen', text: 'Wie viele vergebene Lizenzen tatsächlich zu lernenden Personen führen, im nächsten Quartalsbericht.' },
    { titel: 'Saubere Nenner', text: 'Test- und Workshopkonten markieren, Schule als Auswahl statt Freitext.' },
  ]

  return (
    <>
      <style>{DRUCK_CSS}</style>
      <SiteNav />
      <main id="main-content" className="bg-white">
        {/* Willkommen */}
        <section id="willkommen" className="willkommen relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-24 px-6 bg-white">
          <Capybara className="-right-16 top-24 w-[26rem] hidden md:block" />
          <div className="relative max-w-7xl mx-auto">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Image src="/fotos/Logo.png" alt="Skills-UP!" width={72} height={72} className="rounded-2xl shadow-card" />
                </div>
                <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-balance" style={{ color: INK }}>
                  Willkommen beim Wirkungsbericht von <span className="text-primary-medium">Skills-UP!</span>
                </h1>
                <p className="text-text-muted text-lg md:text-xl font-body mb-6">
                  Wir wollen wissen, ob Skills-UP! junge Menschen im Umgang mit Geld tatsächlich stärkt. Dieser Bericht zeigt, wie
                  unsere Arbeit wirken soll, was wir bisher erreicht haben, was die Nutzerdaten belegen und wo die Belege noch fehlen.
                </p>
                <p className="font-body text-base text-gray-900 mb-8">
                  Aufgebaut nach den Modellen der Wirkungsanalyse des Kompetenzzentrums für Nonprofit-Organisationen und Social
                  Entrepreneurship der WU Wien. Stand {STAND}.
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <PdfKnopf />
                  <a href="#ansatz" className="print:hidden inline-flex items-center gap-2 text-sm font-body font-700 text-primary-dark hover:text-primary-medium">Zum Bericht</a>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {(['Marina Winkler, MA', 'Dr. Stefan Bauer'] as const).map((n, i) => (
                  <figure key={n} className={`${i === 1 ? 'mt-12' : ''}`}>
                    <div className="relative aspect-[3/4] rounded-[20px] overflow-hidden shadow-card">
                      <Image src={PERSON[n].foto} alt={n} fill sizes="(min-width: 1024px) 240px, 45vw" className="object-cover" style={{ objectPosition: '50% 25%' }} />
                    </div>
                    <figcaption className="mt-3 font-body text-sm">
                      <strong style={{ color: INK }}>{n}</strong>
                      <span className="block text-xs" style={{ color: TEXT2 }}>{STIMMEN.find((s) => s.person === n)?.rolle}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            {/* Auf einen Blick */}
            <div className="mt-20">
              <h2 className="font-heading font-bold text-2xl mb-6 text-center" style={{ color: INK }}>Auf einen Blick</h2>
              <div className="grid gap-6 grid-cols-2 lg:grid-cols-4">
                {[
                  { n: fmt(VEREIN.lehrlinge), t: 'Lehrlinge direkt in Workshops begleitet', h: '2022 bis Juni 2026', b: 'verein' as Beleg },
                  { n: fmt(VEREIN.lizenzen), t: 'Lizenzen über den Marktplatz Lern-Apps', h: 'bis Juni 2026', b: 'verein' as Beleg },
                  { n: fmt(wert(KPI_NAMEN.aktiv)), t: 'aktive Lernende auf der Plattform', h: `seit April 2026, von ${fmt(wert(KPI_NAMEN.reg))} registrierten`, b: 'gemessen' as Beleg },
                  { n: fmt(wert(KPI_NAMEN.nordstern)), t: 'Lernende mit bestandenem Modulquiz', h: 'Nordstern, seit August 2026', b: 'gemessen' as Beleg },
                ].map((k) => (
                  <div key={k.t} className={`${KARTE} p-6 md:p-8`}>
                    <p className="font-heading font-bold text-4xl md:text-6xl text-primary-dark tabular-nums leading-none">{k.n}</p>
                    <p className="font-body text-sm md:text-base text-gray-900 mt-3 leading-snug">{k.t}</p>
                    <p className="font-body text-xs mt-1 mb-3" style={{ color: TEXT2 }}>{k.h}</p>
                    <BelegChip beleg={k.b} />
                  </div>
                ))}
              </div>
            </div>

            {/* Inhalt */}
            <nav aria-label="Inhalt des Berichts" className="mt-20">
              <h2 className="font-heading font-bold text-2xl mb-6 text-center" style={{ color: INK }}>Inhalt</h2>
              <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {KAPITEL.map((k, i) => (
                  <li key={k.id}>
                    <a href={`#${k.id}`} className="group flex gap-4 rounded-[20px] p-5 border border-primary-medium/10 hover:bg-primary-50 transition-colors h-full">
                      <span className="shrink-0 w-10 h-10 rounded-xl bg-primary-dark text-white font-heading font-bold flex items-center justify-center">{i + 1}</span>
                      <span>
                        <span className="block font-heading font-bold text-lg" style={{ color: INK }}>{k.titel}</span>
                        <span className="block font-body text-sm" style={{ color: TEXT2 }}>{k.text}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
              <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2">
                {(Object.keys(BELEG) as Beleg[]).map((k) => (
                  <p key={k} className="font-body text-xs flex items-center gap-2" style={{ color: TEXT2 }}><BelegChip beleg={k} /> {BELEG[k].erklaerung}</p>
                ))}
              </div>
            </nav>
          </div>
        </section>

        <KapitelNav kapitel={KAPITEL} />

        {/* 1 Ansatz */}
        <Kapitel id="ansatz" nr={1} titel="Ausgangslage und Ansatz" intro="Wofür es Skills-UP! gibt, wen es erreichen will und auf welchen drei Wegen.">
          <div className="grid gap-10 lg:grid-cols-2 items-start">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: INK }}>Das Problem</h3>
              <p className="font-body text-lg text-gray-900 leading-relaxed">{AUSGANGSLAGE.problem}</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: INK }}>Unser Ansatz</h3>
              <p className="font-body text-lg text-gray-900 leading-relaxed">{AUSGANGSLAGE.ansatz}</p>
            </div>
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8" style={{ color: INK }}>Drei Wege zur Wirkung</h3>
            <ol className="grid gap-6 md:grid-cols-3">
              {AUSGANGSLAGE.saeulen.map((s, i) => (
                <li key={s.titel} className={`${KARTE} p-7`}>
                  <span className="w-11 h-11 rounded-2xl bg-primary-dark text-white font-heading font-bold text-lg flex items-center justify-center mb-5">{i + 1}</span>
                  <h4 className="font-heading font-bold text-xl mb-2" style={{ color: INK }}>{s.titel}</h4>
                  <p className="font-body text-sm text-gray-900 leading-relaxed">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="rounded-[20px] bg-primary-50 p-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] items-center">
            <div>
              <h3 className="font-heading font-bold text-xl" style={{ color: INK }}>Für wen und wozu</h3>
              <p className="font-body text-sm mt-1" style={{ color: TEXT2 }}>{ZWECK}</p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {AUSGANGSLAGE.zielgruppen.map((z) => <li key={z} className="font-body text-sm font-700 text-primary-dark bg-white rounded-full px-4 py-2">{z}</li>)}
            </ul>
          </div>
        </Kapitel>

        <Zitat {...STIMMEN[0]} />

        {/* 2 Wirkungslogik */}
        <Kapitel id="wirkungslogik" nr={2} titel="Unsere Wirkungslogik" getoent
          intro="Die Modelle der WU Wien angewandt auf Skills-UP!: von Input bis Impact, für jede betroffene Gruppe, nach Ebene, Zeit und Dimension.">
          <Teil id="kette" titel="Wirkungskette" intro="Sechs Stufen. Die ersten drei beschreiben die Leistung, die letzten drei die Wirkung. Nettowirkung ist Bruttowirkung minus Deadweight. Stufe anklicken.">
            <KetteInteraktiv stufen={stufen} />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <p className="font-body text-sm rounded-[20px] bg-primary-50 p-6" style={{ color: TEXT2 }}>
                <strong className="text-gray-900">Gesellschaftlicher Wert:</strong> die Summe der Bruttowirkungen. Er lässt sich teilweise schon heute zeigen.
              </p>
              <p className="font-body text-sm rounded-[20px] bg-status-teal-light p-6" style={{ color: TEXT2 }}>
                <strong className="text-gray-900">Gesellschaftlicher Mehrwert:</strong> die Summe der Nettowirkungen. Er braucht den Vergleich mit Klassen ohne Skills-UP! und ist noch nicht belegt.
              </p>
            </div>
          </Teil>

          <Teil id="stakeholder" titel="Wer betroffen ist" intro="Zehn Gruppen aus dem Modell der WU Wien, dazu Lehrkräfte und Lehrbetriebe als eigene Gruppen. Priorität 1 messen wir zuerst.">
            <StakeholderFilter gruppen={STAKEHOLDER} />
          </Teil>

          <Teil id="wirkungsmodell" titel="Wirkungsmodell" intro="Was wir einsetzen und tun, was dabei herauskommt und welche Wirkungen wir je Gruppe erwarten.">
            <div className="grid gap-6 lg:grid-cols-3">
              {[
                { titel: 'Input', farbe: '#1E6B5B', inhalt: MODELL.input.map((t) => ({ text: t, beleg: null as Beleg | null })) },
                { titel: 'Aktivitäten', farbe: '#4a2d8a', inhalt: MODELL.aktivitaeten.map((t) => ({ text: t, beleg: null as Beleg | null })) },
                { titel: 'Output', farbe: '#6b4db0', inhalt: MODELL.output.map((o) => ({ text: o.text, beleg: o.beleg as Beleg | null })) },
              ].map((b) => (
                <div key={b.titel} className={`${KARTE} p-7`}>
                  <h4 className="font-heading font-bold text-lg mb-4" style={{ color: b.farbe }}>{b.titel}</h4>
                  <ul className="flex flex-wrap gap-2">
                    {b.inhalt.map((x) => (
                      <li key={x.text} className="font-body text-[13px] text-gray-900 rounded-full px-3 py-1.5" style={{ background: `${b.farbe}10` }}>
                        {x.text}{x.beleg && <> <BelegChip beleg={x.beleg} /></>}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {MODELL.wirkungen.map((g) => (
                <div key={g.gruppe} className="rounded-[20px] p-6 bg-white border border-primary-medium/10 break-inside-avoid">
                  <h4 className="font-heading font-bold text-base mb-3" style={{ color: INK }}>{g.gruppe}</h4>
                  <ul className="space-y-2 font-body text-[13px] text-gray-900">
                    {g.punkte.map((p) => <li key={p} className="flex gap-2"><span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary-light shrink-0" aria-hidden="true" />{p}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </Teil>

          <Teil id="je-gruppe" titel="Wirkungskette je Gruppe" intro="Für die vier wichtigsten Gruppen, Stufe für Stufe. Gruppe wählen.">
            <GruppenKette zeilen={KETTEN_TABELLE} />
          </Teil>

          <Teil id="wirkungsbox" titel="Wirkungsbox" intro="Welche Wirkungen entstehen, wo sie strukturell entstehen und wann. Dimension wählen, um sie hervorzuheben. Alle Einträge sind Hypothesen.">
            <WirkungsboxFilter ebenen={EBENEN} zeiten={ZEITEN} box={WIRKUNGSBOX} farben={DIMENSION_FARBE} hinweis={OEKOLOGISCH_HINWEIS} />
          </Teil>
        </Kapitel>

        <Zitat {...STIMMEN[2]} dunkel />

        {/* 3 Erreicht */}
        <Kapitel id="erreicht" nr={3} titel="Was wir erreicht haben"
          intro="Zuerst haben wir vor allem Lehrlinge in Workshops begleitet. Heute lernen auf der Plattform vor allem Jugendliche an Schulen, die über den Marktplatz Lern-Apps kommen. Beide Phasen zeigen wir getrennt.">
          <Teil id="phasen" titel="Zwei Phasen, zwei Zielgruppen"
            intro="Die Reichweiten werden nicht addiert, weil sich Workshops, Lizenzen und Konten auf der Plattform überschneiden können.">
            <div className="grid gap-6 lg:grid-cols-2">
              <figure className={`${KARTE} p-7`}>
                <figcaption className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <p className="font-body text-xs font-700 uppercase tracking-widest text-primary-medium">Phase 1, 2022 bis Juni 2026</p>
                    <h4 className="font-heading font-bold text-xl mt-1" style={{ color: INK }}>Lehrlinge in Workshops</h4>
                  </div>
                  <BelegChip beleg="verein" />
                </figcaption>
                <div className="flex items-end gap-3 h-44" role="img" aria-label={VEREIN.lehrlingeJahr.map((j) => `${j.jahr}: ${j.n}`).join(', ')}>
                  {VEREIN.lehrlingeJahr.map((j) => (
                    <div key={j.jahr} className="flex-1 h-full flex flex-col justify-end items-center gap-2" title={`${j.jahr}: ${j.n} Lehrlinge`}>
                      <span className="font-heading font-bold text-base tabular-nums" style={{ color: INK }}>{j.n}</span>
                      <div className="w-full max-w-[3.5rem] rounded-t-lg bg-primary-medium" style={{ height: `${(j.n / 240) * 100}%` }} />
                    </div>
                  ))}
                </div>
                <div className="flex gap-3 mt-2 border-t border-gray-200 pt-2">
                  {VEREIN.lehrlingeJahr.map((j) => <span key={j.jahr} className="flex-1 text-center font-body text-xs" style={{ color: TEXT2 }}>{j.jahr}</span>)}
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    [fmt(VEREIN.lehrlinge), 'Lehrlinge direkt begleitet'],
                    [fmt(VEREIN.lehrkraefte), `Lehrkräfte eingebunden, ${VEREIN.lehrkraefteBerufsschule} an ${VEREIN.berufsschulen} Berufsschulen`],
                    [fmt(VEREIN.workshops), 'Workshops, drei je Berufsschule'],
                    [fmt(VEREIN.rueckmeldungen), 'Rückmeldungen seit 2022'],
                  ].map(([z, t]) => (
                    <div key={t}>
                      <dt className="font-heading font-bold text-2xl text-primary-dark tabular-nums">{z}</dt>
                      <dd className="font-body text-xs" style={{ color: TEXT2 }}>{t}</dd>
                    </div>
                  ))}
                </dl>
              </figure>
              <figure className={`${KARTE} p-7`}>
                <figcaption className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <p className="font-body text-xs font-700 uppercase tracking-widest text-status-teal">Phase 2, ab April 2026</p>
                    <h4 className="font-heading font-bold text-xl mt-1" style={{ color: INK }}>Lernende an Schulen auf der Plattform</h4>
                  </div>
                  <BelegChip beleg="gemessen" />
                </figcaption>
                <div className="flex items-end gap-3 h-44" role="img" aria-label={QUARTALE.map((q) => `${quartalName(q)}: ${wert(KPI_NAMEN.aktiv, q)} aktive Lernende`).join(', ')}>
                  {QUARTALE.map((q) => {
                    const n = wert(KPI_NAMEN.aktiv, q)
                    return (
                      <div key={q} className="flex-1 h-full flex flex-col justify-end items-center gap-2" title={`${quartalName(q)}: ${n} aktive Lernende`}>
                        <span className="font-heading font-bold text-base tabular-nums" style={{ color: INK }}>{fmt(n)}</span>
                        <div className="w-full max-w-[3.5rem] rounded-t-lg bg-status-teal" style={{ height: `${(n / maxAktiv) * 100}%` }} />
                      </div>
                    )
                  })}
                </div>
                <div className="flex gap-3 mt-2 border-t border-gray-200 pt-2">
                  {QUARTALE.map((q) => <span key={q} className="flex-1 text-center font-body text-xs" style={{ color: TEXT2 }}>{qKurz(q)}</span>)}
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-4">
                  {[
                    [fmt(wert(KPI_NAMEN.reg)), 'Lernende registriert'],
                    [fmt(wert(KPI_NAMEN.aktiv)), 'davon aktiv seit April'],
                    [fmt(VEREIN.lizenzen), 'Lizenzen über den Marktplatz Lern-Apps (Vereinsangabe)'],
                    [fmt(VEREIN.standorte), 'Schulstandorte (Vereinsangabe)'],
                  ].map(([z, t]) => (
                    <div key={t}>
                      <dt className="font-heading font-bold text-2xl text-status-teal tabular-nums">{z}</dt>
                      <dd className="font-body text-xs" style={{ color: TEXT2 }}>{t}</dd>
                    </div>
                  ))}
                </dl>
                {KENNZAHLEN.laufend && <p className="font-body text-xs mt-5" style={{ color: TEXT2 }}>Das {Q_NAME.replace(' (', ' läuft noch (')}.</p>}
              </figure>
            </div>
          </Teil>

          <Teil id="befunde" titel="Sieben Befunde" intro="Was die Daten zeigen und was daraus für die Steuerung folgt. Die Zahlen rechnen sich bei jedem Datenupdate neu.">
            <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {BEFUNDE.map((b, i) => (
                <li key={b.titel} className={`${KARTE} p-7 flex flex-col`}>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <p className="flex items-baseline gap-2">
                      <span className="font-heading font-bold text-5xl text-primary-dark tabular-nums leading-none">{b.zahl}</span>
                      <span className="font-body text-sm" style={{ color: TEXT2 }}>{b.einheit}</span>
                    </p>
                    <span className="shrink-0 w-8 h-8 rounded-full bg-primary-50 text-primary-dark font-heading font-bold text-sm flex items-center justify-center">{i + 1}</span>
                  </div>
                  <h4 className="font-heading font-bold text-xl mb-2 text-balance" style={{ color: INK }}>{b.titel}</h4>
                  <p className="font-body text-sm text-gray-900 mb-5 leading-relaxed">{b.text}</p>
                  <p className="font-body text-sm mt-auto rounded-2xl p-4 bg-status-teal-light text-[#14463b] leading-relaxed"><strong>Folge:</strong> {b.folge}</p>
                  <div className="mt-4"><BelegChip beleg={b.beleg} /></div>
                </li>
              ))}
              <li className="relative overflow-hidden rounded-[20px] p-7 bg-primary-dark text-white flex flex-col justify-end min-h-[16rem] break-inside-avoid">
                <Capybara className="-right-8 -top-6 w-48 opacity-[0.12]" />
                <Image src="/fotos/Logo.png" alt="" width={48} height={48} className="relative rounded-xl mb-4" />
                <p className="relative font-heading font-bold text-2xl leading-snug">Wirkung zählt ab der Nutzung, nicht ab der Lizenz.</p>
              </li>
            </ol>
          </Teil>

          <Teil id="trichter" titel="Vom Konto zum Lernerfolg"
            intro="Jede Stufe ist eine Teilmenge der vorherigen, jede Person einmal gezählt. Zwischen den Stufen steht, wie viele den nächsten Schritt schaffen.">
            <div>
              {TRICHTER.map((t, i) => {
                const anteil = (t.n / TRICHTER[0].n) * 100
                const uebergang = i > 0 ? (t.n / TRICHTER[i - 1].n) * 100 : null
                return (
                  <div key={t.stufe} className="break-inside-avoid">
                    {uebergang !== null && (
                      <p className="font-body text-xs font-700 text-center my-3" style={{ color: TEXT2 }}>
                        <span className="inline-block rounded-full bg-gray-100 px-3 py-1">{fmt(uebergang, 1)} % schaffen den nächsten Schritt</span>
                      </p>
                    )}
                    <div className="mx-auto rounded-[20px] text-white px-6 py-5 flex flex-wrap items-center justify-between gap-3"
                      style={{ width: `${Math.max(38, anteil)}%`, minWidth: 'min(100%, 20rem)', background: ['#1a1040', '#2d1b69', '#4a2d8a', '#6b4db0'][i] ?? '#6b4db0' }}
                      title={`${t.stufe}: ${t.n} (${fmt(anteil, 1)} % aller Registrierten)`}>
                      <div>
                        <p className="font-heading font-bold text-lg leading-tight">{t.stufe}</p>
                        <p className="font-body text-xs text-white/75">{t.erklaerung}</p>
                      </div>
                      <p className="font-body text-sm tabular-nums"><strong className="font-heading text-3xl">{fmt(t.n)}</strong> <span className="text-white/75">{fmt(anteil, 1)} %</span></p>
                    </div>
                  </div>
                )
              })}
            </div>
            <p className="font-body text-sm mt-8 max-w-3xl mx-auto text-center" style={{ color: TEXT2 }}>
              Der größte Verlust liegt zwischen Start und Abschluss. Getrennt davon haben {fmt(wert(KPI_NAMEN.drei))} Lernende drei oder mehr Module
              abgeschlossen. Sie sind keine Teilmenge der Stufe Modulquiz, weil Abschlüsse vor dem 12. August 2026 ohne Quiz möglich waren. <BelegChip beleg="gemessen" />
            </p>
          </Teil>
        </Kapitel>

        <Zitat text={GESCHICHTE.zitat} person="Lehrling bei TGW Logistics" rolle="hat im Workshop ein Sparziel gesetzt und den Führerschein angespart" />

        {/* 4 Zahlen */}
        <Kapitel id="zahlen" nr={4} titel="Die Zahlen im Detail" getoent
          intro={`Alle ${KENNZAHLEN.kpis.length} Kennzahlen aus den Nutzerdaten der Plattform, je Quartal und gesamt. Gesamt zählt jede Person einmal, nicht die Summe der Quartale.`}>
          <Teil id="explorer" titel="Kennzahlen-Explorer" intro="Bereich wählen, Kennzahl anklicken, über die Säulen fahren für Basis und Hinweis.">
            <KpiExplorer kpis={KENNZAHLEN.kpis} quartale={QUARTALE} />
            <details className="mt-6 group print:hidden">
              <summary className="cursor-pointer list-none inline-flex items-center gap-2 font-body text-sm font-700 text-primary-dark hover:text-primary-medium">
                <span className="transition-transform group-open:rotate-90" aria-hidden="true">›</span> Alle Kennzahlen als Tabelle
              </summary>
              <div className="mt-4"><KennzahlenTabelle /></div>
            </details>
            <div className="hidden print:block"><KennzahlenTabelle /></div>
          </Teil>
        </Kapitel>

        <Zitat {...STIMMEN[3]} />

        {/* 5 Methode */}
        <Kapitel id="methode" nr={5} titel="Wie wir messen" intro="Das Vorgehen in sieben Schritten, was wir aus Nutzerdaten messen und wie die Begriffe gezählt werden. Eine Befragung ist bewusst nicht vorgesehen.">
          <Teil id="vorgehen" titel="Wirkungsanalyse in sieben Schritten" intro="Das Vorgehen der WU Wien mit dem Stand für Skills-UP!. Schritte 4 bis 6 sind im Modell optional, für eine Aussage zur Nettowirkung brauchen wir sie.">
            <ol className="relative border-l-2 border-primary-100 ml-4 space-y-6">
              {SCHRITTE.map((s) => {
                const st = STAND_STIL[s.stand]
                return (
                  <li key={s.nr} className={`relative pl-8 ${s.unter ? 'md:ml-10' : ''}`}>
                    <span className="absolute -left-[13px] top-1 w-6 h-6 rounded-full border-2 border-white" style={{ background: st.fg }} aria-hidden="true" />
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <span className="font-body text-xs font-700 uppercase tracking-widest" style={{ color: TEXT2 }}>Schritt {s.nr}{s.optional ? ', optional' : ''}</span>
                      <span className="font-body text-xs font-700 px-2.5 py-0.5 rounded-full" style={{ background: st.bg, color: st.fg }}>{st.label}</span>
                    </div>
                    <h4 className="font-heading font-bold text-lg" style={{ color: INK }}>{s.titel}</h4>
                    <p className="font-body text-sm text-gray-900 max-w-3xl">{s.text}{s.beleg && <> <BelegChip beleg={s.beleg} /></>}</p>
                  </li>
                )
              })}
            </ol>
            <div className="grid gap-6 md:grid-cols-3 mt-12">
              {VERWENDUNG.map((v) => (
                <div key={v.titel} className="rounded-[20px] p-6 bg-primary-50 break-inside-avoid">
                  <h4 className="font-heading font-bold text-base mb-1" style={{ color: INK }}>{v.titel}</h4>
                  <p className="font-body text-sm text-gray-900">{v.text}</p>
                </div>
              ))}
            </div>
          </Teil>

          <Teil id="messplan" titel="Messplan aus Nutzerdaten" intro="Die vier Ebenen nach Kirkpatrick zeigen, wie tief die Messung aus Nutzerdaten reicht.">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-10">
              {KIRKPATRICK.map((k, i) => (
                <article key={k.ebene} className={`${KARTE} p-6`}>
                  <div className="flex items-center gap-2 mb-3" aria-hidden="true">
                    {[0, 1, 2, 3].map((j) => <span key={j} className={`h-1.5 flex-1 rounded-full ${j <= i ? 'bg-primary-medium' : 'bg-primary-50'}`} />)}
                  </div>
                  <h4 className="font-heading font-bold text-base mb-1" style={{ color: INK }}>{k.ebene}</h4>
                  <p className="font-body text-sm text-gray-900">{k.was}</p>
                  <p className="font-body text-xs mt-3" style={{ color: TEXT2 }}>{k.methode}</p>
                  <p className="font-body text-xs mt-3 text-gray-900">{k.stand} <BelegChip beleg={k.beleg} /></p>
                </article>
              ))}
            </div>
            <div className="overflow-x-auto rounded-[20px] border border-gray-100">
              <table className="min-w-[900px] print:min-w-0 w-full text-left font-body text-sm print:text-[10px]">
                <thead className="border-b border-gray-100 text-gray-900">
                  <tr>{['Wirkung', 'Indikator', 'Methode', 'Zeitpunkt', 'Quelle', 'Status'].map((t) => <th key={t} scope="col" className="px-4 py-3 print:px-2 font-heading">{t}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-gray-100 align-top">
                  {MESSPLAN.map((m) => (
                    <tr key={m.wirkung}>
                      <th scope="row" className="px-4 py-3 print:px-2 font-700 text-gray-900">{m.wirkung}</th>
                      <td className="px-4 py-3 print:px-2">{m.indikator}</td>
                      <td className="px-4 py-3 print:px-2">{m.methode}</td>
                      <td className="px-4 py-3 print:px-2">{m.zeitpunkt}</td>
                      <td className="px-4 py-3 print:px-2">{m.quelle}</td>
                      <td className="px-4 py-3 print:px-2"><BelegChip beleg={m.beleg} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Teil>

          <Teil id="begriffe" titel="Begriffe" intro="So werden die Zahlen in diesem Bericht gezählt.">
            <dl className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {BEGRIFFE.map((b) => (
                <div key={b.begriff} className="border-t-2 border-primary-100 pt-4">
                  <dt className="font-heading font-bold text-lg" style={{ color: INK }}>{b.begriff}</dt>
                  <dd className="font-body text-sm text-gray-900 mt-1">{b.text}</dd>
                </div>
              ))}
            </dl>
          </Teil>
        </Kapitel>

        <Zitat {...STIMMEN[1]} dunkel />

        {/* 6 Ausblick */}
        <Kapitel id="ausblick" nr={6} titel="Ausblick" getoent intro="Wohin wir bis Ende 2027 wollen und was wir als Nächstes messen.">
          <Teil id="ziele" titel="Ziele bis Ende 2027" intro="Die Ziele aus der Strategie des Vereins, verglichen mit dem Stand vor Sommer 2026.">
            <div className="grid gap-6 md:grid-cols-2">
              {ZIELE_2027.map((z) => {
                const anteil = z.ist !== null && z.soll !== null ? (z.ist / z.soll) * 100 : null
                return (
                  <article key={z.ziel} className={`${KARTE} p-7`}>
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <h4 lang="de" className="font-heading font-bold text-lg min-w-0 hyphens-auto break-words" style={{ color: INK }}>{z.ziel}</h4>
                      <BelegChip beleg={z.beleg} />
                    </div>
                    {anteil !== null && z.ist !== null && z.soll !== null ? (
                      <>
                        <p className="font-body text-sm text-gray-900 mb-3 tabular-nums">
                          <strong className="font-heading text-4xl text-primary-dark">{fmt(z.ist)}</strong> von {fmt(z.soll)}
                          {anteil >= 100 ? <span className="ml-2 font-700 text-status-teal">Ziel erreicht</span> : <span className="ml-2" style={{ color: TEXT2 }}>{fmt(anteil)} %</span>}
                        </p>
                        <Balken anteil={anteil} label={`${fmt(z.ist)} von ${fmt(z.soll)}`} />
                      </>
                    ) : (
                      <p className="font-body text-sm text-gray-900">
                        {z.soll !== null && <><strong className="font-heading text-4xl text-primary-dark">{fmt(z.soll)} {z.einheit}</strong>{' '}</>}
                        <span style={{ color: TEXT2 }}>{z.hinweis}</span>
                      </p>
                    )}
                  </article>
                )
              })}
            </div>
          </Teil>

          <Teil id="naechste-schritte" titel="Nächste Schritte der Messung" intro="Was wir einführen, damit aus Hinweisen Belege werden, alles aus Nutzerdaten.">
            <ol className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {naechsteSchritte.map((n, i) => (
                <li key={n.titel} className={`${KARTE} p-6`}>
                  <span className="font-heading font-bold text-sm text-primary-medium">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="font-heading font-bold text-base mt-1 mb-2" style={{ color: INK }}>{n.titel}</h4>
                  <p className="font-body text-sm text-gray-900">{n.text}</p>
                </li>
              ))}
            </ol>
          </Teil>

          <div className="relative overflow-hidden rounded-[28px] p-8 md:p-12 text-white grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] items-center break-inside-avoid"
            style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
            <Capybara className="right-4 -bottom-20 w-64 opacity-[0.1]" />
            <figure className="relative">
              <blockquote className="font-heading text-2xl md:text-4xl leading-snug text-balance">„{STIMMEN[4].text}“</blockquote>
              <figcaption className="mt-5 font-body text-sm text-white/80"><strong className="text-white">{STIMMEN[4].person}</strong>, {STIMMEN[4].rolle}</figcaption>
            </figure>
            <div className="relative flex flex-col items-start md:items-center gap-4">
              <Image src="/fotos/Logo.png" alt="Skills-UP!" width={96} height={96} className="rounded-2xl" />
              <PdfKnopf hell />
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg mb-3" style={{ color: INK }}>Quellen</h3>
            <ul className="font-body text-sm space-y-2 max-w-4xl" style={{ color: TEXT2 }}>
              {QUELLEN.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </div>
        </Kapitel>
      </main>
      <SiteFooter />
    </>
  )
}
