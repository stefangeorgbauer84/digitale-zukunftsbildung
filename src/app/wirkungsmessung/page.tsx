import type { Metadata } from 'next'
import { ChevronRight, ChevronDown } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import {
  BELEG, STAND, KETTE_LEISTUNG, KETTE_WIRKUNG, STAKEHOLDER, STAND_STIL, ZWECK, SCHRITTE, VERWENDUNG,
  MODELL, KETTEN_TABELLE, DIMENSION_FARBE, EBENEN, ZEITEN, WIRKUNGSBOX, OEKOLOGISCH_HINWEIS, KPIS,
  KIRKPATRICK, MESSPLAN, VEREINSANGABEN, LIZENZ_HINWEIS, GESCHICHTE, STIMMEN, QUELLEN,
  type Beleg, type Kpi, type Dimension,
} from './daten'

// Noch nicht veröffentlicht: passwortgeschützt (src/middleware.ts), nicht in Sitemap und Navigation, noindex.

const URL = 'https://www.digitale-zukunftsbildung.eu/wirkungsmessung'

export const metadata: Metadata = {
  title: 'Wirkungsmessung Skills-UP! | Digitale Zukunftsbildung',
  description: 'Wirkungskette, Stakeholder, Wirkungsmodell und Kennzahlen von Skills-UP! nach den Modellen der WU Wien.',
  alternates: { canonical: URL },
  robots: { index: false, follow: false },
}

const INK = '#1a1040'
const TEXT2 = '#4c5260'

const INHALT = [
  ['kette', 'Wirkungskette'],
  ['stakeholder', 'Stakeholder'],
  ['vorgehen', 'Vorgehen in sieben Schritten'],
  ['modell', 'Wirkungsmodell'],
  ['je-gruppe', 'Wirkungskette je Gruppe'],
  ['wirkungsbox', 'Wirkungsbox'],
  ['kennzahlen', 'Kennzahlen je Quartal'],
  ['messplan', 'Messplan'],
  ['angaben', 'Vereinsangaben'],
  ['stimmen', 'Stimmen aus dem Verein'],
] as const

function BelegChip({ beleg }: { beleg: Beleg }) {
  const b = BELEG[beleg]
  return (
    <span
      className="inline-flex items-center text-[11px] font-body font-bold px-2 py-0.5 rounded-full whitespace-nowrap align-middle"
      style={{ background: b.bg, color: b.fg, border: `1px ${b.rand} ${b.fg}40` }}
    >
      {b.label}
    </span>
  )
}

function Abschnitt({ id, titel, intro, children }: { id: string; titel: string; intro?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-28 py-14 md:py-16 px-6 border-t border-gray-200 first-of-type:border-t-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-3 text-balance" style={{ color: INK }}>{titel}</h2>
        {intro && <p className="font-body text-base max-w-3xl mb-8" style={{ color: TEXT2 }}>{intro}</p>}
        {children}
      </div>
    </section>
  )
}

function Punktliste({ punkte }: { punkte: { text: string; beleg: Beleg }[] }) {
  return (
    <ul className="space-y-2.5">
      {punkte.map((p, i) => (
        <li key={i} className="font-body text-sm leading-snug text-gray-900">
          {p.text} <BelegChip beleg={p.beleg} />
        </li>
      ))}
    </ul>
  )
}

function Pfeil() {
  return (
    <div aria-hidden="true" className="flex items-center justify-center text-primary-medium lg:py-0 py-1">
      <ChevronRight className="hidden lg:block w-6 h-6" />
      <ChevronDown className="lg:hidden w-6 h-6" />
    </div>
  )
}

function Operator({ zeichen, label }: { zeichen: string; label: string }) {
  return (
    <div className="flex items-center justify-center">
      <span
        className="w-9 h-9 rounded-full bg-white border-2 border-gray-300 flex items-center justify-center font-heading font-bold text-lg"
        style={{ color: INK }}
        aria-label={label}
      >
        {zeichen}
      </span>
    </div>
  )
}

function zahl(wert: number | null, einheit: Kpi['einheit']) {
  if (wert === null) return 'nicht erfasst'
  const s = Number.isInteger(wert) ? wert.toLocaleString('de-AT') : wert.toLocaleString('de-AT', { minimumFractionDigits: 1, maximumFractionDigits: 1 })
  return einheit ? `${s} ${einheit}` : s
}

function DimChip({ dim }: { dim: Dimension }) {
  return (
    <span className="inline-block text-[11px] font-body font-bold px-1.5 py-0.5 rounded align-middle"
      style={{ color: DIMENSION_FARBE[dim], background: `${DIMENSION_FARBE[dim]}14` }}>
      {dim}
    </span>
  )
}

export default function WirkungsmessungPage() {
  const leistung = KETTE_LEISTUNG
  const w = KETTE_WIRKUNG
  return (
    <>
      <SiteNav />
      <main id="main-content" className="bg-[#FAF9FC]">
        {/* Hero */}
        <section className="pt-32 pb-14 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-6xl mx-auto">
            <p className="inline-flex items-center gap-2 font-body text-sm font-bold text-white bg-white/10 border border-white/20 rounded-full px-3 py-1 mb-6">
              Entwurf, noch nicht veröffentlicht
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5 text-balance">Wirkungsmessung Skills-UP!</h1>
            <p className="font-body text-lg text-white/85 max-w-3xl mb-8">
              Was Skills-UP! bei Jugendlichen, Lehrkräften, Schulen und im Bildungssystem bewirkt, wie wir das messen und wo
              die Belege noch fehlen. Angewandt auf die Modelle der Wirkungsanalyse des Kompetenzzentrums für
              Nonprofit-Organisationen und Social Entrepreneurship der WU Wien.
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl">
              {(Object.keys(BELEG) as Beleg[]).map((k) => (
                <div key={k} className="bg-white rounded-xl p-3">
                  <BelegChip beleg={k} />
                  <p className="font-body text-xs mt-2" style={{ color: TEXT2 }}>{BELEG[k].erklaerung}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Inhalt und Zweck */}
        <section className="px-6 py-10 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
            <nav aria-label="Inhalt">
              <h2 className="font-heading font-bold text-lg mb-3" style={{ color: INK }}>Inhalt</h2>
              <ol className="font-body text-sm space-y-1.5 list-decimal list-inside" style={{ color: TEXT2 }}>
                {INHALT.map(([id, t]) => (
                  <li key={id}><a href={`#${id}`} className="text-primary-medium hover:underline underline-offset-2">{t}</a></li>
                ))}
              </ol>
            </nav>
            <div>
              <h2 className="font-heading font-bold text-lg mb-3" style={{ color: INK }}>Zweck der Wirkungsanalyse</h2>
              <p className="font-body text-base text-gray-900 mb-4">{ZWECK}</p>
              <p className="font-body text-sm" style={{ color: TEXT2 }}>
                Plattformzahlen: Stand {STAND}. Die Formel der WU Wien gilt für alle Abschnitte:
                Nettowirkung (Impact) ist die Bruttowirkung (Outcome) minus Deadweight.
              </p>
            </div>
          </div>
        </section>

        {/* 1 Wirkungskette */}
        <Abschnitt
          id="kette"
          titel="Wirkungskette Skills-UP!"
          intro="Oben die leistungsorientierte Erfolgsmessung: was wir einsetzen, tun und erreichen. Unten die wirkungsorientierte Erfolgsmessung: was sich dadurch verändert, abzüglich dessen, was ohnehin passiert wäre."
        >
          <p className="font-body text-sm font-bold mb-2" style={{ color: INK }}>Leistungsorientierte Erfolgsmessung</p>
          <div className="grid gap-2 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
            {leistung.map((g, i) => (
              <div key={g.id} className="contents">
                <article className="rounded-2xl p-5 text-white" style={{ background: INK }}>
                  <h3 className="font-heading font-bold text-lg">{g.titel}</h3>
                  <p className="font-body text-xs text-white/70 mb-3">{g.frage}</p>
                  <ul className="space-y-2">
                    {g.punkte.map((p, j) => (
                      <li key={j} className="font-body text-[13px] leading-snug text-white/95">
                        {p.text} <BelegChip beleg={p.beleg} />
                      </li>
                    ))}
                  </ul>
                </article>
                {i < leistung.length - 1 && <Pfeil />}
              </div>
            ))}
          </div>

          <div aria-hidden="true" className="flex justify-center py-2 text-primary-medium"><ChevronDown className="w-7 h-7" /></div>

          <p className="font-body text-sm font-bold mb-2" style={{ color: INK }}>Wirkungsorientierte Erfolgsmessung</p>
          <div className="grid gap-2 lg:grid-cols-[minmax(0,1.4fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] lg:items-stretch">
            <div className="grid gap-2 sm:grid-cols-2">
              <article className="rounded-2xl p-4 border-2 border-primary-medium bg-white">
                <h3 className="font-heading font-bold text-base" style={{ color: INK }}>{w.bruttoIntendiert.titel}</h3>
                <p className="font-body text-xs mb-3" style={{ color: TEXT2 }}>Outcome</p>
                <Punktliste punkte={w.bruttoIntendiert.punkte} />
              </article>
              <article className="rounded-2xl p-4 border-2 border-dashed border-primary-medium/60 bg-white">
                <h3 className="font-heading font-bold text-base" style={{ color: INK }}>{w.bruttoUnintendiert.titel}</h3>
                <p className="font-body text-xs mb-3" style={{ color: TEXT2 }}>positiv und negativ</p>
                <Punktliste punkte={w.bruttoUnintendiert.punkte} />
              </article>
            </div>
            <Operator zeichen="−" label="minus" />
            <article className="rounded-2xl p-5 text-white" style={{ background: '#B23A3A' }}>
              <h3 className="font-heading font-bold text-lg">{w.deadweight.titel}</h3>
              <p className="font-body text-sm leading-snug mt-2 mb-3 text-white/95">{w.deadweight.text}</p>
              <span className="inline-flex text-[11px] font-body font-bold px-2 py-0.5 rounded-full bg-white" style={{ color: '#8A2A2A' }}>
                Messung {BELEG[w.deadweight.beleg].label}
              </span>
            </article>
            <Operator zeichen="=" label="ergibt" />
            <article className="rounded-2xl p-5 text-white" style={{ background: '#1E6B5B' }}>
              <h3 className="font-heading font-bold text-lg">{w.netto.titel}</h3>
              <p className="font-body text-sm leading-snug mt-2 mb-3 text-white/95">{w.netto.text}</p>
              <span className="inline-flex text-[11px] font-body font-bold px-2 py-0.5 rounded-full bg-white" style={{ color: '#1E6B5B' }}>
                Messung {BELEG[w.netto.beleg].label}
              </span>
            </article>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <p className="font-body text-sm bg-white rounded-xl border border-gray-200 p-4" style={{ color: TEXT2 }}>
              <strong className="text-gray-900">Gesellschaftlicher Wert:</strong> die Summe der intendierten und unintendierten Bruttowirkungen.
              Er lässt sich teilweise schon heute zeigen.
            </p>
            <p className="font-body text-sm bg-white rounded-xl border border-gray-200 p-4" style={{ color: TEXT2 }}>
              <strong className="text-gray-900">Gesellschaftlicher Mehrwert:</strong> die Summe der Nettowirkungen. Er braucht den Vergleich
              mit Klassen ohne Skills-UP! und ist heute noch nicht belegt.
            </p>
          </div>
        </Abschnitt>

        {/* 2 Stakeholder */}
        <Abschnitt
          id="stakeholder"
          titel="Stakeholder und Wirkungsbetroffene"
          intro="Zehn Gruppen aus dem Modell der WU Wien, dazu Lehrkräfte und Lehrbetriebe als eigene Gruppen an den beiden freien Plätzen. Wirkungen werden für jede Gruppe getrennt betrachtet. Priorität 1 messen wir zuerst."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
            {STAKEHOLDER.map((s, i) => {
              // Ring um die Mitte: oben 4, rechts 2, unten 4, links 2
              const pos = [
                'lg:col-start-1 lg:row-start-1', 'lg:col-start-2 lg:row-start-1', 'lg:col-start-3 lg:row-start-1', 'lg:col-start-4 lg:row-start-1',
                'lg:col-start-4 lg:row-start-2', 'lg:col-start-4 lg:row-start-3',
                'lg:col-start-4 lg:row-start-4', 'lg:col-start-3 lg:row-start-4', 'lg:col-start-2 lg:row-start-4', 'lg:col-start-1 lg:row-start-4',
                'lg:col-start-1 lg:row-start-3', 'lg:col-start-1 lg:row-start-2',
              ][i]
              const ring = s.prioritaet === 1 ? 'border-primary-dark border-2' : s.prioritaet === 2 ? 'border-primary-medium/60 border-2' : 'border-gray-200 border'
              return (
                <article key={s.kategorie} className={`${pos} bg-white rounded-2xl p-4 ${ring} ${s.eigene ? 'border-dashed' : ''}`}>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-heading font-bold text-base leading-tight" style={{ color: INK }}>{s.kategorie}</h3>
                    <span className="font-body text-[11px] font-bold whitespace-nowrap rounded-full px-2 py-0.5 bg-primary-50 text-primary-dark">Priorität {s.prioritaet}</span>
                  </div>
                  <p className="font-body text-[13px] text-gray-900 mb-2">{s.akteure}</p>
                  <p className="font-body text-xs" style={{ color: TEXT2 }}>{s.wirkung} <BelegChip beleg="hypothese" /></p>
                  {s.eigene && <p className="font-body text-[11px] mt-2 text-primary-medium font-bold">eigene Gruppe für Skills-UP!</p>}
                </article>
              )
            })}
            <div className="hidden lg:flex lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2 items-center justify-center">
              <div className="w-72 h-72 rounded-full flex flex-col items-center justify-center text-center p-8"
                style={{ background: 'radial-gradient(circle, #2d1b69 0%, #1a1040 100%)' }}>
                <p className="font-heading font-bold text-3xl text-white">Skills-UP!</p>
                <p className="font-body text-sm text-white/80 mt-1">Programm des Vereins zur Entwicklung der digitalen Zukunftsbildung</p>
              </div>
            </div>
          </div>
        </Abschnitt>

        {/* 3 Vorgehen */}
        <Abschnitt
          id="vorgehen"
          titel="Wirkungsanalyse in sieben Schritten"
          intro="Das schrittweise Vorgehen der WU Wien, mit dem Stand für Skills-UP! am 4. November 2026. Schritte 4 bis 6 sind im Modell optional, für eine belastbare Aussage zur Nettowirkung brauchen wir sie."
        >
          <div className="rounded-2xl text-white p-4 mb-3 font-body text-sm" style={{ background: INK }}>
            <strong className="font-heading text-base">Definition des Zwecks.</strong> {ZWECK}
          </div>
          <ol className="space-y-2">
            {SCHRITTE.map((s) => {
              const st = STAND_STIL[s.stand]
              return (
                <li key={s.nr}
                  className={`grid gap-3 md:grid-cols-[4.5rem_minmax(0,16rem)_minmax(0,1fr)_7rem] md:items-center rounded-xl p-4 border ${s.optional ? 'bg-primary-50 border-primary-100' : 'bg-white border-gray-200'} ${s.unter ? 'md:ml-10' : ''}`}>
                  <span className="font-body text-xs font-bold" style={{ color: TEXT2 }}>Schritt {s.nr}</span>
                  <span className="font-heading font-bold text-base" style={{ color: INK }}>{s.titel}</span>
                  <span className="font-body text-sm text-gray-900">{s.text}</span>
                  <span className="justify-self-start md:justify-self-end font-body text-xs font-bold px-2.5 py-1 rounded-full" style={{ background: st.bg, color: st.fg }}>{st.label}</span>
                </li>
              )
            })}
          </ol>
          <div className="grid gap-3 md:grid-cols-3 mt-3">
            {VERWENDUNG.map((v) => (
              <div key={v.titel} className="rounded-2xl p-4 text-white" style={{ background: '#2d1b69' }}>
                <h3 className="font-heading font-bold text-base mb-1">{v.titel}</h3>
                <p className="font-body text-sm text-white/85">{v.text}</p>
              </div>
            ))}
          </div>
        </Abschnitt>

        {/* 4 Wirkungsmodell */}
        <Abschnitt
          id="modell"
          titel="Wirkungsmodell Skills-UP!"
          intro="Vom Input über Aktivitäten und Output zu den erwarteten Wirkungen je Gruppe. Die Wirkungen sind Hypothesen, bis der Messplan sie belegt."
        >
          <div className="rounded-2xl overflow-hidden border border-gray-200">
            {[
              { titel: 'Input', farbe: '#1E6B5B', inhalt: MODELL.input.map((t) => <span key={t} className="chip">{t}</span>) },
              { titel: 'Aktivitäten', farbe: '#2d6b8a', inhalt: MODELL.aktivitaeten.map((t) => <span key={t} className="chip">{t}</span>) },
              { titel: 'Output', farbe: '#2d1b69', inhalt: MODELL.output.map((o) => <span key={o.text} className="chip">{o.text} <BelegChip beleg={o.beleg} /></span>) },
            ].map((band) => (
              <div key={band.titel} className="grid md:grid-cols-[9rem_minmax(0,1fr)]" style={{ background: band.farbe }}>
                <h3 className="font-heading font-bold text-lg text-white px-4 pt-4 md:py-4">{band.titel}</h3>
                <div className="flex flex-wrap gap-2 p-4 [&_.chip]:bg-white [&_.chip]:rounded-lg [&_.chip]:px-2.5 [&_.chip]:py-1.5 [&_.chip]:font-body [&_.chip]:text-[13px] [&_.chip]:text-gray-900">
                  {band.inhalt}
                </div>
              </div>
            ))}
            <div className="grid md:grid-cols-[9rem_minmax(0,1fr)]" style={{ background: INK }}>
              <h3 className="font-heading font-bold text-lg text-white px-4 pt-4 md:py-4">Wirkungen</h3>
              <div className="grid gap-3 p-4 sm:grid-cols-2 xl:grid-cols-4">
                {MODELL.wirkungen.map((g) => (
                  <div key={g.gruppe} className="bg-white rounded-xl p-3.5">
                    <h4 className="font-heading font-bold text-base mb-2" style={{ color: INK }}>{g.gruppe}</h4>
                    <ul className="list-disc pl-4 space-y-1 font-body text-[13px] text-gray-900">
                      {g.punkte.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Abschnitt>

        {/* 5 Wirkungskette je Gruppe */}
        <Abschnitt
          id="je-gruppe"
          titel="Wirkungskette je Gruppe"
          intro="Für die vier wichtigsten Gruppen: was eingesetzt wird, was wir tun, was wir zählen, was sich verändert, was ohnehin passiert wäre und was davon auf Skills-UP! zurückgeht. Output messen wir heute, Outcome teilweise, Deadweight und Impact noch nicht."
        >
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-[1100px] w-full text-left font-body text-[13px] align-top">
              <thead>
                <tr className="text-gray-900">
                  {[
                    ['Gruppe', '#F1F3F5'], ['Input', '#E7F0F6'], ['Aktivitäten', '#CFE3EF'], ['Output', '#B6D6E8'],
                    ['Bruttowirkung (Outcome)', '#9FD0C3'], ['Deadweight', '#F4B4B4'], ['Nettowirkung (Impact)', '#7EC2B0'],
                  ].map(([t, bg]) => (
                    <th key={t} scope="col" className="px-3 py-3 font-heading font-bold text-sm" style={{ background: bg }}>{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {KETTEN_TABELLE.map((z) => (
                  <tr key={z.stakeholder} className="align-top">
                    <th scope="row" className="px-3 py-3 font-heading font-bold text-sm bg-gray-50" style={{ color: INK }}>{z.stakeholder}</th>
                    {[z.input, z.aktivitaeten, z.output, z.brutto, z.deadweight, z.netto].map((spalte, i) => (
                      <td key={i} className={`px-3 py-3 ${i === 4 ? 'bg-[#FDF1F1]' : ''}`}>
                        <ul className="space-y-1.5">{spalte.map((t) => <li key={t}>{t}</li>)}</ul>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Abschnitt>

        {/* 6 Wirkungsbox */}
        <Abschnitt
          id="wirkungsbox"
          titel="Wirkungsbox"
          intro="Welche Wirkungen entstehen, wo sie strukturell entstehen und wann. Jede Wirkung trägt ihre Dimension. Alle Einträge sind Hypothesen."
        >
          <div className="overflow-x-auto">
            <div className="min-w-[760px] grid grid-cols-[11rem_repeat(3,minmax(0,1fr))] gap-2">
              <div />
              {ZEITEN.map((z) => (
                <div key={z} className="rounded-xl text-white font-heading font-bold text-base px-4 py-2.5" style={{ background: '#2d6b8a' }}>{z}</div>
              ))}
              {EBENEN.map((e, r) => (
                <div key={e} className="contents">
                  <div className="rounded-xl text-white font-heading font-bold text-sm px-4 py-3 flex items-center" style={{ background: '#1E6B5B' }}>{e}</div>
                  {WIRKUNGSBOX[r].map((zelle, c) => (
                    <ul key={c} className="rounded-xl bg-white border border-gray-200 p-3 space-y-2">
                      {zelle.map((x) => (
                        <li key={x.text} className="font-body text-[13px] text-gray-900 leading-snug">{x.text} <DimChip dim={x.dim} /></li>
                      ))}
                    </ul>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-xs" style={{ color: TEXT2 }}>
            <span className="font-bold">Dimensionen:</span>
            {(Object.keys(DIMENSION_FARBE) as Dimension[]).map((d) => <DimChip key={d} dim={d} />)}
          </div>
          <p className="mt-3 font-body text-sm" style={{ color: TEXT2 }}>{OEKOLOGISCH_HINWEIS}</p>
          <p className="mt-4 font-heading font-bold text-base" style={{ color: INK }}>Impact (Nettowirkung) ist Outcome (Bruttowirkung) minus Deadweight.</p>
        </Abschnitt>

        {/* 7 Kennzahlen */}
        <Abschnitt
          id="kennzahlen"
          titel="Kennzahlen je Quartal"
          intro="Die Plattformkennzahlen aus dem Kennzahlenbaum, jeder Stufe der Wirkungskette zugeordnet. Nur Konten von Lernenden, außer bei Lehrkräften. Orange markiert eine kleine Fallzahl oder Datenlücke. Q4 2026 läuft bis 31. Dezember, Stand 4. November."
        >
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-[760px] w-full text-left font-body text-sm">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th scope="col" className="px-3 py-3 font-heading">Stufe</th>
                  <th scope="col" className="px-3 py-3 font-heading">Kennzahl</th>
                  <th scope="col" className="px-3 py-3 font-heading text-right">Q2 2026</th>
                  <th scope="col" className="px-3 py-3 font-heading text-right">Q3 2026</th>
                  <th scope="col" className="px-3 py-3 font-heading text-right">Q4 2026</th>
                  <th scope="col" className="px-3 py-3 font-heading">Hinweis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {KPIS.map((k) => (
                  <tr key={k.name}>
                    <td className="px-3 py-2.5 whitespace-nowrap">
                      <span className="text-[11px] font-bold px-2 py-0.5 rounded-full"
                        style={k.stufe === 'Outcome' ? { background: '#E6F4F1', color: '#1E6B5B' } : { background: '#EDE9F7', color: '#4a2d8a' }}>
                        {k.stufe === 'Output Meso' ? 'Output Lehrkräfte' : k.stufe}
                      </span>
                    </td>
                    <td className="px-3 py-2.5 text-gray-900">{k.name}</td>
                    {(['q2', 'q3', 'q4'] as const).map((q) => (
                      <td key={q} className="px-3 py-2.5 text-right tabular-nums whitespace-nowrap"
                        style={k[q] === null ? { color: '#6C757D' } : k.eingeschraenkt?.includes(q) ? { background: '#FDF0E6', color: '#8A4210' } : { color: '#212529' }}>
                        {zahl(k[q], k.einheit)}
                      </td>
                    ))}
                    <td className="px-3 py-2.5 text-xs" style={{ color: TEXT2 }}>{k.hinweis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-body text-sm max-w-3xl" style={{ color: TEXT2 }}>
            Was fehlt: Kennzahlen für Verhalten und Impact. Sie entstehen erst mit dem Messplan unten. Ein Quartalsbericht mit allen
            Werten entsteht automatisch am Anfang jedes Quartals. <BelegChip beleg="gemessen" />
          </p>
        </Abschnitt>

        {/* 8 Messplan */}
        <Abschnitt
          id="messplan"
          titel="Messplan"
          intro="Wie wir jede Wirkung künftig messen. Die vier Ebenen nach Kirkpatrick zeigen, wie tief die Messung heute reicht."
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4 mb-8">
            {KIRKPATRICK.map((k) => (
              <article key={k.ebene} className="bg-white rounded-2xl border border-gray-200 p-4">
                <h3 className="font-heading font-bold text-base mb-1" style={{ color: INK }}>{k.ebene}</h3>
                <p className="font-body text-sm text-gray-900">{k.was}</p>
                <p className="font-body text-xs mt-2" style={{ color: TEXT2 }}>Methode: {k.methode}</p>
                <p className="font-body text-xs mt-2 text-gray-900">{k.stand} <BelegChip beleg={k.beleg} /></p>
              </article>
            ))}
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-[900px] w-full text-left font-body text-sm">
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  {['Wirkung', 'Indikator', 'Methode', 'Zeitpunkt', 'Quelle', 'Status'].map((t) => (
                    <th key={t} scope="col" className="px-3 py-3 font-heading">{t}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 align-top">
                {MESSPLAN.map((m) => (
                  <tr key={m.wirkung}>
                    <th scope="row" className="px-3 py-2.5 font-bold text-gray-900">{m.wirkung}</th>
                    <td className="px-3 py-2.5">{m.indikator}</td>
                    <td className="px-3 py-2.5">{m.methode}</td>
                    <td className="px-3 py-2.5 whitespace-nowrap">{m.zeitpunkt}</td>
                    <td className="px-3 py-2.5">{m.quelle}</td>
                    <td className="px-3 py-2.5"><BelegChip beleg={m.beleg} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Abschnitt>

        {/* Vereinsangaben */}
        <Abschnitt
          id="angaben"
          titel="Vereinsangaben"
          intro="Zahlen aus der eigenen Erhebung des Vereins, Stand Juni 2026. Sie sind extern noch nicht geprüft und werden vor der Veröffentlichung bestätigt."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {VEREINSANGABEN.map((v) => (
              <div key={v.zahl} className="bg-white rounded-2xl border border-gray-200 p-4">
                <p className="font-heading font-bold text-3xl text-primary-dark tabular-nums">{v.zahl}</p>
                <p className="font-body text-sm text-gray-900 mt-1">{v.text} <BelegChip beleg="verein" /></p>
              </div>
            ))}
          </div>
          <p className="mt-4 font-body text-sm max-w-3xl bg-[#FDF0E6] text-[#5c2f0b] rounded-xl p-4">{LIZENZ_HINWEIS}</p>
          <figure className="mt-8 bg-white rounded-2xl border border-gray-200 p-6 max-w-3xl">
            <h3 className="font-heading font-bold text-lg mb-2" style={{ color: INK }}>{GESCHICHTE.titel}</h3>
            <p className="font-body text-sm text-gray-900 mb-3">{GESCHICHTE.text}</p>
            <blockquote className="font-body text-base italic border-l-4 border-primary-medium pl-4" style={{ color: INK }}>
              „{GESCHICHTE.zitat}“
            </blockquote>
            <figcaption className="mt-3"><BelegChip beleg={GESCHICHTE.beleg} /></figcaption>
          </figure>
        </Abschnitt>

        {/* Episodische Evidenz */}
        <Abschnitt
          id="stimmen"
          titel="Stimmen aus dem Verein"
          intro="Episodische Evidenz: warum es Skills-UP! gibt und was die beiden Verantwortlichen in der Arbeit mit Jugendlichen, Lehrkräften und Schulen erleben."
        >
          <div className="grid gap-4 md:grid-cols-2">
            {STIMMEN.map((s) => (
              <figure key={s.text} className="bg-white rounded-2xl border border-gray-200 p-6 flex flex-col">
                <blockquote className="font-body text-base italic border-l-4 border-primary-medium pl-4 flex-1" style={{ color: INK }}>
                  „{s.text}“
                </blockquote>
                <figcaption className="mt-4 font-body text-sm" style={{ color: TEXT2 }}>
                  <span className="font-bold" style={{ color: INK }}>{s.person}</span>, {s.rolle} <BelegChip beleg="verein" />
                </figcaption>
              </figure>
            ))}
          </div>
        </Abschnitt>

        <section className="px-6 py-12 border-t border-gray-200 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-heading font-bold text-lg mb-3" style={{ color: INK }}>Quellen</h2>
            <ul className="font-body text-sm space-y-2 max-w-4xl" style={{ color: TEXT2 }}>
              {QUELLEN.map((q) => <li key={q}>{q}</li>)}
            </ul>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
