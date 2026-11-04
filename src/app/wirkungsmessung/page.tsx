import type { Metadata } from 'next'
import { ChevronRight, ChevronDown } from 'lucide-react'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import {
  BELEG, STAND, KETTE_LEISTUNG, KETTE_WIRKUNG, STAKEHOLDER, STAND_STIL, ZWECK, SCHRITTE, VERWENDUNG,
  MODELL, KETTEN_TABELLE, DIMENSION_FARBE, EBENEN, ZEITEN, WIRKUNGSBOX, OEKOLOGISCH_HINWEIS,
  KIRKPATRICK, MESSPLAN, GESCHICHTE, STIMMEN, QUELLEN, KENNZAHLEN, QUARTALE, GESAMT, Q_NAME, KPI_NAMEN, BEFUNDE,
  TRICHTER, BEGRIFFE, VEREIN, BUDGET_GESAMT, ZIELE_2027, fmt, wert, quartalName,
  type Beleg, type Dimension, type KpiStatus, type KpiZelle,
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
  ['befunde', 'Was die Daten zeigen'],
  ['phasen', 'Zwei Datenphasen'],
  ['trichter', 'Vom Konto zum Lernerfolg'],
  ['kette', 'Wirkungskette'],
  ['stakeholder', 'Stakeholder'],
  ['vorgehen', 'Vorgehen in sieben Schritten'],
  ['modell', 'Wirkungsmodell'],
  ['je-gruppe', 'Wirkungskette je Gruppe'],
  ['wirkungsbox', 'Wirkungsbox'],
  ['kennzahlen', 'Kennzahlen je Quartal'],
  ['ziele', 'Ziele bis Ende 2027'],
  ['messplan', 'Messplan'],
  ['begriffe', 'Begriffe'],
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

const KPI_STIL: Record<KpiStatus, React.CSSProperties> = {
  gemessen: { color: '#212529' },
  eingeschränkt: { background: '#FDF0E6', color: '#8A4210' },
  fehlt: { color: '#6C757D' },
}

function zelle(z: KpiZelle | undefined, einheit: string) {
  if (!z || z.wert === null) return 'nicht erfasst'
  const ganz = Number.isInteger(z.wert)
  const s = fmt(z.wert, ganz ? 0 : 1)
  return einheit === 'Anzahl' ? s : `${s} ${einheit}`
}

/** Einfarbiger Balken, Länge kodiert den Wert. Tooltip über title. */
function Balken({ anteil, label, hoehe = 'h-6' }: { anteil: number; label: string; hoehe?: string }) {
  return (
    <div className={`w-full ${hoehe} rounded bg-primary-50`} title={label}>
      <div className="h-full rounded bg-primary-medium" style={{ width: `${Math.max(1.5, Math.min(100, anteil))}%` }} />
    </div>
  )
}

/** Mini-Verlauf über die Quartale, gleiche Skala je Kennzahl. */
function Verlauf({ werte, einheit }: { werte: (number | null)[]; einheit: string }) {
  const max = Math.max(...werte.map((w) => w ?? 0), 0.0001)
  return (
    <div className="flex items-end gap-[2px] h-6 w-16" aria-hidden="true">
      {werte.map((w, i) => (
        <div key={i} className="flex-1 rounded-t-[3px] bg-primary-medium"
          style={{ height: w === null ? '2px' : `${Math.max(8, (w / max) * 100)}%`, opacity: w === null ? 0.25 : 1 }}
          title={w === null ? 'nicht erfasst' : `${fmt(w, Number.isInteger(w) ? 0 : 1)}${einheit === 'Anzahl' ? '' : ' ' + einheit}`} />
      ))}
    </div>
  )
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
              Entwurf, noch nicht veröffentlicht. Stand {STAND}
            </p>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-white mb-5 text-balance">Wirkungsmessung Skills-UP!</h1>
            <p className="font-body text-lg text-white/85 max-w-3xl mb-10">
              Was Skills-UP! bei Jugendlichen, Lehrkräften, Schulen und im Bildungssystem bewirkt, was die Nutzerdaten
              belegen und was nicht. Nach den Modellen der Wirkungsanalyse des Kompetenzzentrums für
              Nonprofit-Organisationen und Social Entrepreneurship der WU Wien.
            </p>
            <div className="grid gap-3 grid-cols-2 lg:grid-cols-4 mb-8">
              {[
                { n: fmt(wert(KPI_NAMEN.nordstern)), t: 'Lernende mit bestandenem Modulquiz', b: 'gemessen' as Beleg, h: 'Nordstern, seit August 2026' },
                { n: fmt(wert(KPI_NAMEN.aktiv)), t: 'aktive Lernende auf der Plattform', b: 'gemessen' as Beleg, h: `von ${fmt(wert(KPI_NAMEN.reg))} registrierten` },
                { n: fmt(VEREIN.lehrlinge), t: 'Lehrlinge direkt in Workshops begleitet', b: 'verein' as Beleg, h: '2022 bis Juni 2026' },
                { n: fmt(VEREIN.lizenzen), t: 'Lizenzen über den Marktplatz Lern-Apps', b: 'verein' as Beleg, h: 'bis Juni 2026' },
              ].map((k) => (
                <div key={k.t} className="bg-white rounded-2xl p-4">
                  <p className="font-heading font-bold text-4xl md:text-5xl text-primary-dark tabular-nums leading-none">{k.n}</p>
                  <p className="font-body text-sm text-gray-900 mt-2 leading-snug">{k.t}</p>
                  <p className="font-body text-xs mt-1" style={{ color: TEXT2 }}>{k.h}</p>
                  <div className="mt-2"><BelegChip beleg={k.b} /></div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {(Object.keys(BELEG) as Beleg[]).map((k) => (
                <p key={k} className="font-body text-xs text-white/85 flex items-center gap-2"><BelegChip beleg={k} /> {BELEG[k].erklaerung}</p>
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
                Plattformzahlen: Stand {STAND}, nur aus Nutzerdaten, ohne Befragung. Die Formel der WU Wien gilt für alle Abschnitte:
                Nettowirkung (Impact) ist die Bruttowirkung (Outcome) minus Deadweight.
              </p>
            </div>
          </div>
        </section>

        {/* Befunde */}
        <Abschnitt
          id="befunde"
          titel="Was die Daten zeigen"
          intro={`Sieben Befunde aus den Nutzerdaten und den Zählungen des Vereins, jeweils mit der Folge für die Steuerung. Die Zahlen rechnen sich bei jedem Datenupdate neu, Stand ${STAND}.`}
        >
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {BEFUNDE.map((b) => (
              <article key={b.titel} className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col">
                <p className="flex items-baseline gap-2 mb-2">
                  <span className="font-heading font-bold text-4xl text-primary-dark tabular-nums leading-none">{b.zahl}</span>
                  <span className="font-body text-sm" style={{ color: TEXT2 }}>{b.einheit}</span>
                </p>
                <h3 className="font-heading font-bold text-lg mb-2 text-balance" style={{ color: INK }}>{b.titel}</h3>
                <p className="font-body text-sm text-gray-900 mb-3">{b.text}</p>
                <p className="font-body text-sm mt-auto rounded-xl p-3 bg-[#E6F4F1] text-[#14463b]"><strong>Folge:</strong> {b.folge}</p>
                <div className="mt-3"><BelegChip beleg={b.beleg} /></div>
              </article>
            ))}
          </div>
        </Abschnitt>

        {/* Zwei Datenphasen */}
        <Abschnitt
          id="phasen"
          titel="Zwei Datenphasen, ein Übergang"
          intro="Bis Juni 2026 hat der Verein die Reichweite selbst gezählt, vor allem Workshops. Seit April 2026 messen die Nutzerdaten der Plattform automatisch je Quartal. Im 2. Quartal 2026 laufen beide nebeneinander. Die beiden Reichweiten werden nicht addiert, weil sich Lehrlinge in Workshops und Konten auf der Plattform überschneiden können."
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
            <figure className="bg-white rounded-2xl border border-gray-200 p-5">
              <figcaption className="mb-4">
                <h3 className="font-heading font-bold text-lg" style={{ color: INK }}>Phase 1: Workshops</h3>
                <p className="font-body text-sm" style={{ color: TEXT2 }}>Direkt begleitete Lehrlinge je Jahr <BelegChip beleg="verein" /></p>
              </figcaption>
              <div className="space-y-2.5">
                {VEREIN.lehrlingeJahr.map((j) => (
                  <div key={j.jahr} className="grid grid-cols-[6.5rem_minmax(0,1fr)_3rem] items-center gap-3">
                    <span className="font-body text-sm text-gray-900">{j.jahr}</span>
                    <Balken anteil={(j.n / 240) * 100} label={`${j.jahr}: ${j.n} Lehrlinge`} />
                    <span className="font-heading font-bold text-base text-right tabular-nums" style={{ color: INK }}>{j.n}</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs mt-4" style={{ color: TEXT2 }}>Summe {VEREIN.lehrlinge} Lehrlinge. Dazu {fmt(VEREIN.lizenzen)} Lizenzen über den Marktplatz Lern-Apps, gesamt etwa {fmt(VEREIN.reichweite)} erreichte junge Menschen bis Juni 2026.</p>
            </figure>
            <figure className="bg-white rounded-2xl border border-gray-200 p-5">
              <figcaption className="mb-4">
                <h3 className="font-heading font-bold text-lg" style={{ color: INK }}>Phase 2: Plattform</h3>
                <p className="font-body text-sm" style={{ color: TEXT2 }}>Aktive Lernende je Quartal <BelegChip beleg="gemessen" /></p>
              </figcaption>
              <div className="space-y-2.5">
                {QUARTALE.map((q) => {
                  const n = wert(KPI_NAMEN.aktiv, q)
                  const max = Math.max(...QUARTALE.map((x) => wert(KPI_NAMEN.aktiv, x)))
                  return (
                    <div key={q} className="grid grid-cols-[6.5rem_minmax(0,1fr)_3rem] items-center gap-3">
                      <span className="font-body text-sm text-gray-900">{quartalName(q).replace('. Quartal', '. Q.')}</span>
                      <Balken anteil={(n / max) * 100} label={`${quartalName(q)}: ${n} aktive Lernende`} />
                      <span className="font-heading font-bold text-base text-right tabular-nums" style={{ color: INK }}>{fmt(n)}</span>
                    </div>
                  )
                })}
              </div>
              <p className="font-body text-xs mt-4" style={{ color: TEXT2 }}>
                {fmt(wert(KPI_NAMEN.aktiv))} verschiedene Lernende waren seit April 2026 aktiv, {fmt(wert(KPI_NAMEN.reg))} sind registriert.
                {KENNZAHLEN.laufend && ` Das ${Q_NAME.replace(' (', ' läuft noch (')}.`}
              </p>
            </figure>
          </div>
          <ol className="mt-4 grid gap-3 md:grid-cols-3 font-body text-sm">
            <li className="bg-white rounded-xl border border-gray-200 p-4"><strong className="text-gray-900">Bis Juni 2026:</strong> Vereinszählung, eingefroren mit Stand Juni 2026.</li>
            <li className="bg-white rounded-xl border border-gray-200 p-4"><strong className="text-gray-900">April bis Juni 2026:</strong> beide Quellen. Quizversuche speichert die Plattform erst ab 12. August.</li>
            <li className="bg-white rounded-xl border border-gray-200 p-4"><strong className="text-gray-900">Ab Juli 2026:</strong> Wirkung auf der Plattform nur noch aus Nutzerdaten. Workshops zählt der Verein weiter getrennt.</li>
          </ol>
        </Abschnitt>

        {/* Trichter */}
        <Abschnitt
          id="trichter"
          titel="Vom Konto zum Lernerfolg"
          intro="Jede Stufe ist eine Teilmenge der vorherigen, jede Person einmal gezählt, seit April 2026. Die Balkenlänge zeigt den Anteil an allen registrierten Lernenden."
        >
          <div className="bg-white rounded-2xl border border-gray-200 p-5 space-y-3">
            {TRICHTER.map((t) => {
              const anteil = (t.n / TRICHTER[0].n) * 100
              return (
                <div key={t.stufe} className="grid gap-1 sm:grid-cols-[12rem_minmax(0,1fr)_7rem] sm:items-center sm:gap-4">
                  <div>
                    <p className="font-heading font-bold text-base" style={{ color: INK }}>{t.stufe}</p>
                    <p className="font-body text-xs" style={{ color: TEXT2 }}>{t.erklaerung}</p>
                  </div>
                  <Balken anteil={anteil} label={`${t.stufe}: ${t.n}`} hoehe="h-7" />
                  <p className="font-body text-sm sm:text-right tabular-nums">
                    <strong className="font-heading text-lg" style={{ color: INK }}>{fmt(t.n)}</strong>{' '}
                    <span style={{ color: TEXT2 }}>{fmt(anteil, 1)} %</span>
                  </p>
                </div>
              )
            })}
          </div>
          <p className="font-body text-sm mt-3" style={{ color: TEXT2 }}>
            Der größte Verlust liegt zwischen Start und Abschluss. Hier wirken Lernpfade, Fristen und kürzere Einstiege am stärksten.
            Getrennt davon: {fmt(wert(KPI_NAMEN.drei))} Lernende haben drei oder mehr Module abgeschlossen. Sie sind keine Teilmenge der
            Stufe Modulquiz, weil Abschlüsse vor dem 12. August 2026 ohne Quiz möglich waren, darum stehen sie nicht im Trichter. <BelegChip beleg="gemessen" />
          </p>
        </Abschnitt>

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
                  <p className="font-body text-[13px] text-gray-900 mb-2">{s.akteure}{s.akteureBeleg && <> <BelegChip beleg={s.akteureBeleg} /></>}</p>
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
          intro="Das schrittweise Vorgehen der WU Wien, mit dem Stand für Skills-UP!. Schritte 4 bis 6 sind im Modell optional, für eine belastbare Aussage zur Nettowirkung brauchen wir sie."
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
                  <span className="font-body text-sm text-gray-900">{s.text}{s.beleg && <> <BelegChip beleg={s.beleg} /></>}</span>
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
          intro={`Alle Kennzahlen aus den Nutzerdaten, nur Konten von Lernenden, außer bei Lehrkräften. Gesamt zählt jede Person einmal, darum ist es nicht die Summe der Quartale. Orange: kleine Fallzahl oder bekannte Datenlücke. Stand ${STAND}.`}
        >
          <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white">
            <table className="min-w-[900px] w-full text-left font-body text-sm">
              <caption className="sr-only">Plattformkennzahlen je Quartal und gesamt</caption>
              <thead className="bg-gray-50 text-gray-900">
                <tr>
                  <th scope="col" className="px-3 py-3 font-heading">Bereich</th>
                  <th scope="col" className="px-3 py-3 font-heading">Kennzahl</th>
                  {QUARTALE.map((q) => (
                    <th key={q} scope="col" className="px-3 py-3 font-heading text-right whitespace-nowrap">{quartalName(q).replace('. Quartal', '. Q.')}</th>
                  ))}
                  <th scope="col" className="px-3 py-3 font-heading text-right bg-primary-50">Gesamt</th>
                  <th scope="col" className="px-3 py-3 font-heading">Verlauf</th>
                  <th scope="col" className="px-3 py-3 font-heading">Hinweis</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {KENNZAHLEN.kpis.map((k, i) => {
                  const neuerBereich = i === 0 || KENNZAHLEN.kpis[i - 1].ast !== k.ast
                  const letzt = k.werte[QUARTALE[QUARTALE.length - 1]]
                  return (
                    <tr key={k.kpi} className={neuerBereich && i > 0 ? 'border-t-2 border-gray-200' : ''}>
                      <td className="px-3 py-2.5 font-bold text-gray-900 whitespace-nowrap">{neuerBereich ? k.ast : ''}</td>
                      <td className="px-3 py-2.5 text-gray-900">{k.kpi.replace('Nordstern: ', '')}{k.kpi.startsWith('Nordstern') && <span className="ml-1.5 text-[11px] font-bold px-1.5 py-0.5 rounded bg-primary-dark text-white">Nordstern</span>}</td>
                      {[...QUARTALE, GESAMT].map((q) => (
                        <td key={q} className={`px-3 py-2.5 text-right tabular-nums whitespace-nowrap ${q === GESAMT ? 'font-bold' : ''}`}
                          style={{ ...KPI_STIL[k.werte[q]?.status ?? 'fehlt'], ...(q === GESAMT && k.werte[q]?.status === 'gemessen' ? { background: '#f3f1f9' } : {}) }}>
                          {zelle(k.werte[q], k.einheit)}
                        </td>
                      ))}
                      <td className="px-3 py-2.5"><Verlauf werte={QUARTALE.map((q) => k.werte[q]?.wert ?? null)} einheit={k.einheit} /></td>
                      <td className="px-3 py-2.5 text-xs" style={{ color: TEXT2 }}>
                        {[...new Set([letzt?.hinweis && `${quartalName(QUARTALE[QUARTALE.length - 1]).replace('. Quartal', '. Q.')}: ${letzt.hinweis}`, k.werte[GESAMT]?.hinweis && `Gesamt: ${k.werte[GESAMT].hinweis}`].filter(Boolean))].join('; ')}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 font-body text-sm max-w-3xl" style={{ color: TEXT2 }}>
            Was die Nutzerdaten nicht zeigen: Alltagsverhalten und gesellschaftliche Wirkung. Dafür steht im Messplan, was sich aus Nutzerdaten
            annähern lässt. Der Quartalsbericht als Excel-Datei entsteht automatisch am Anfang jedes Quartals. <BelegChip beleg="gemessen" />
          </p>
        </Abschnitt>

        {/* Ziele */}
        <Abschnitt
          id="ziele"
          titel="Ziele bis Ende 2027"
          intro="Die Ziele aus der Strategie des Vereins, verglichen mit dem Stand vor Sommer 2026."
        >
          <div className="grid gap-3 md:grid-cols-2">
            {ZIELE_2027.map((z) => {
              const anteil = z.ist !== null && z.soll !== null ? (z.ist / z.soll) * 100 : null
              return (
                <article key={z.ziel} className="bg-white rounded-2xl border border-gray-200 p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-heading font-bold text-base" style={{ color: INK }}>{z.ziel}</h3>
                    <BelegChip beleg={z.beleg} />
                  </div>
                  {anteil !== null && z.ist !== null && z.soll !== null ? (
                    <>
                      <p className="font-body text-sm text-gray-900 mb-2 tabular-nums">
                        <strong className="font-heading text-2xl text-primary-dark">{fmt(z.ist)}</strong> von {fmt(z.soll)}
                        {anteil >= 100 ? <span className="ml-2 font-bold text-[#1E6B5B]">Ziel erreicht</span> : <span className="ml-2" style={{ color: TEXT2 }}>{fmt(anteil)} %</span>}
                      </p>
                      <Balken anteil={anteil} label={`${fmt(z.ist)} von ${fmt(z.soll)}`} />
                    </>
                  ) : (
                    <p className="font-body text-sm text-gray-900">
                      {z.soll !== null && <><strong className="font-heading text-2xl text-primary-dark">{fmt(z.soll)} {z.einheit}</strong>{' '}</>}
                      <span style={{ color: TEXT2 }}>{z.hinweis}</span>
                    </p>
                  )}
                </article>
              )
            })}
          </div>
        </Abschnitt>

        {/* 8 Messplan */}
        <Abschnitt
          id="messplan"
          titel="Messplan"
          intro="Wie wir jede Wirkung messen, nur aus Nutzerdaten der Plattform. Eine Befragung ist bewusst nicht vorgesehen. Die vier Ebenen nach Kirkpatrick zeigen, wie tief die Messung damit reicht."
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

        {/* Begriffe */}
        <Abschnitt id="begriffe" titel="Begriffe" intro="So werden die Zahlen auf dieser Seite gezählt.">
          <dl className="grid gap-3 md:grid-cols-2">
            {BEGRIFFE.map((b) => (
              <div key={b.begriff} className="bg-white rounded-xl border border-gray-200 p-4">
                <dt className="font-heading font-bold text-base" style={{ color: INK }}>{b.begriff}</dt>
                <dd className="font-body text-sm text-gray-900 mt-1">{b.text}</dd>
              </div>
            ))}
          </dl>
        </Abschnitt>

        {/* Vereinsangaben */}
        <Abschnitt
          id="angaben"
          titel="Vereinsangaben"
          intro="Zählungen des Vereins mit Stand vor Sommer 2026. Wo frühere Unterlagen verschiedene Werte nennen, steht hier der höhere. Extern sind sie nicht geprüft."
        >
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { zahl: fmt(VEREIN.lehrlinge), text: 'Lehrlinge 2022 bis Juni 2026 direkt begleitet' },
              { zahl: fmt(VEREIN.lizenzen), text: 'Lizenzen über den Marktplatz Lern-Apps' },
              { zahl: fmt(VEREIN.reichweite), text: 'erreichte junge Menschen, Workshops und Lizenzen zusammen' },
              { zahl: fmt(VEREIN.standorte), text: 'Schulstandorte, die Skills-UP! einsetzen' },
              { zahl: fmt(VEREIN.lehrkraefte), text: `eingebundene Lehrkräfte, davon ${VEREIN.lehrkraefteBerufsschule} an ${VEREIN.berufsschulen} Berufsschulen` },
              { zahl: fmt(VEREIN.workshops), text: `Workshops an ${VEREIN.berufsschulen} Berufsschulen, drei je Schule` },
              { zahl: fmt(VEREIN.rueckmeldungen), text: 'Rückmeldungen seit 2022 von Jugendlichen, Lehrlingen, Lehrkräften und Partnerorganisationen' },
              { zahl: fmt(VEREIN.jugendbeirat), text: 'Jugendliche im ehrenamtlichen Jugendbeirat' },
            ].map((v) => (
              <div key={v.text} className="bg-white rounded-2xl border border-gray-200 p-4">
                <p className="font-heading font-bold text-3xl text-primary-dark tabular-nums">{v.zahl}</p>
                <p className="font-body text-sm text-gray-900 mt-1">{v.text}</p>
                <div className="mt-2"><BelegChip beleg="verein" /></div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <figure className="bg-white rounded-2xl border border-gray-200 p-5">
              <figcaption className="mb-4">
                <h3 className="font-heading font-bold text-lg" style={{ color: INK }}>Budget je Jahr</h3>
                <p className="font-body text-sm" style={{ color: TEXT2 }}>{fmt(BUDGET_GESAMT)} € seit 2022 <BelegChip beleg="verein" /></p>
              </figcaption>
              <div className="space-y-2.5">
                {VEREIN.budgetJahre.map((b) => (
                  <div key={b.jahr} className="grid grid-cols-[3.5rem_minmax(0,1fr)_6rem] items-center gap-3">
                    <span className="font-body text-sm text-gray-900">{b.jahr}</span>
                    <Balken anteil={(b.eur / 100000) * 100} label={`${b.jahr}: ${fmt(b.eur)} €`} />
                    <span className="font-body text-sm text-right tabular-nums text-gray-900">{fmt(b.eur)} €</span>
                  </div>
                ))}
              </div>
            </figure>
            <figure className="bg-white rounded-2xl border border-gray-200 p-5">
              <figcaption className="mb-4">
                <h3 className="font-heading font-bold text-lg" style={{ color: INK }}>Finanzierung 2026</h3>
                <p className="font-body text-sm" style={{ color: TEXT2 }}>{fmt(100000)} € <BelegChip beleg="verein" /></p>
              </figcaption>
              <div className="space-y-2.5">
                {VEREIN.budget2026.map((b) => (
                  <div key={b.quelle} className="grid grid-cols-[minmax(0,10rem)_minmax(0,1fr)_6rem] items-center gap-3">
                    <span className="font-body text-sm text-gray-900">{b.quelle}</span>
                    <Balken anteil={(b.eur / 100000) * 100} label={`${b.quelle}: ${fmt(b.eur)} €`} />
                    <span className="font-body text-sm text-right tabular-nums text-gray-900">{fmt(b.eur)} €</span>
                  </div>
                ))}
              </div>
              <p className="font-body text-xs mt-4" style={{ color: TEXT2 }}>
                Mittel je Person, abgeleitet: {fmt(BUDGET_GESAMT)} € geteilt durch {VEREIN.lehrlinge} direkt begleitete Lehrlinge sind
                {' '}{fmt(Math.round(BUDGET_GESAMT / VEREIN.lehrlinge))} €, geteilt durch {fmt(VEREIN.reichweite)} Zugänge aus Workshops und Lizenzen
                {' '}{fmt(Math.round(BUDGET_GESAMT / VEREIN.reichweite))} € je Zugang. Eine Lizenz ist noch keine Nutzung, die zweite Zahl ist also eine Untergrenze der Kosten je lernender Person. Das Budget enthält auch den Aufbau der Plattform.
              </p>
            </figure>
          </div>

          <figure className="mt-6 bg-white rounded-2xl border border-gray-200 p-6 max-w-3xl">
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
