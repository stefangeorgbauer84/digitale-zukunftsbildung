import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import {
  BELEG, STAND, KETTE_LEISTUNG, KETTE_WIRKUNG, STAKEHOLDER, STAND_STIL, ZWECK, SCHRITTE, VERWENDUNG,
  MODELL, KETTEN_TABELLE, DIMENSION_FARBE, EBENEN, ZEITEN, WIRKUNGSBOX, OEKOLOGISCH_HINWEIS,
  KIRKPATRICK, MESSPLAN, GESCHICHTE, STIMMEN, QUELLEN, KENNZAHLEN, QUARTALE, GESAMT, Q_NAME, KPI_NAMEN, BEFUNDE,
  TRICHTER, BEGRIFFE, VEREIN, BUDGET_GESAMT, ZIELE_2027, fmt, wert, quartalName,
  type Beleg, type KpiStatus, type KpiZelle,
} from './daten'
import { Chip, GruppenKette, KapitelNav, KetteInteraktiv, KpiExplorer, StakeholderFilter, WirkungsboxFilter, type KettenStufe } from './interaktiv'

// Noch nicht veröffentlicht: passwortgeschützt (src/middleware.ts), nicht in Sitemap und Navigation, noindex.
// Gestaltung: Corporate Design der Startseite (weißer Grund, zentrierte Abschnittsköpfe, Karten mit shadow-card).

const URL = 'https://www.digitale-zukunftsbildung.eu/wirkungsmessung'

export const metadata: Metadata = {
  title: 'Wirkungsmessung Skills-UP! | Digitale Zukunftsbildung',
  description: 'Wirkungskette, Stakeholder, Wirkungsmodell und Kennzahlen von Skills-UP! nach den Modellen der WU Wien.',
  alternates: { canonical: URL },
  robots: { index: false, follow: false },
}

const INK = '#1a1040'
const TEXT2 = '#4c5260'

const KAPITEL = [
  { id: 'ueberblick', titel: 'Überblick' },
  { id: 'daten', titel: 'Daten' },
  { id: 'modell', titel: 'Wirkungsmodell' },
  { id: 'methode', titel: 'Methode' },
  { id: 'verein', titel: 'Verein' },
]

const KARTE = 'bg-white rounded-[20px] shadow-card border border-primary-medium/10 min-w-0'

function BelegChip({ beleg }: { beleg: Beleg }) {
  return <Chip beleg={beleg} />
}

/** Kapitelkopf im Stil der Startseite: Pille, große Überschrift, gedämpfte Einleitung. */
function Kapitel({ id, nr, titel, intro, children }: { id: string; nr: number; titel: string; intro: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-32 py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto">
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

/** Unterabschnitt innerhalb eines Kapitels. */
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

function Balken({ anteil, label, hoehe = 'h-3' }: { anteil: number; label: string; hoehe?: string }) {
  return (
    <div className={`w-full ${hoehe} rounded-full bg-primary-50`} title={label}>
      <div className="h-full rounded-full bg-primary-medium" style={{ width: `${Math.max(2, Math.min(100, anteil))}%` }} />
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
  const s = fmt(z.wert, Number.isInteger(z.wert) ? 0 : 1)
  return einheit === 'Anzahl' ? s : `${s} ${einheit}`
}

const qKurz = (q: string) => quartalName(q).replace('. Quartal', '. Q.')
const FINANZ_FARBEN = ['#4a2d8a', '#6b4db0', '#9b7ed4', '#dcd3f0']

export default function WirkungsmessungPage() {
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

  return (
    <>
      <SiteNav />
      <main id="main-content" className="bg-white">
        {/* Hero */}
        <section className="pt-36 md:pt-44 pb-16 md:pb-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              <span className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-status-teal bg-status-teal-light px-4 py-2 rounded-full mb-6">
                Entwurf, noch nicht veröffentlicht
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-balance" style={{ color: INK }}>
                Wirkungsmessung <span className="text-primary-medium">Skills-UP!</span>
              </h1>
              <p className="text-text-muted text-lg md:text-xl font-body max-w-3xl mx-auto">
                Was Skills-UP! bei Jugendlichen, Lehrkräften, Schulen und im Bildungssystem bewirkt, was die Nutzerdaten belegen
                und was nicht. Nach den Modellen der Wirkungsanalyse der WU Wien. Stand {STAND}.
              </p>
            </div>
            <div className="mt-16 grid gap-6 grid-cols-2 lg:grid-cols-4">
              {[
                { n: fmt(wert(KPI_NAMEN.nordstern)), t: 'Lernende mit bestandenem Modulquiz', h: 'Nordstern, seit August 2026', b: 'gemessen' as Beleg },
                { n: fmt(wert(KPI_NAMEN.aktiv)), t: 'aktive Lernende auf der Plattform', h: `von ${fmt(wert(KPI_NAMEN.reg))} registrierten`, b: 'gemessen' as Beleg },
                { n: fmt(VEREIN.lehrlinge), t: 'Lehrlinge direkt in Workshops begleitet', h: '2022 bis Juni 2026', b: 'verein' as Beleg },
                { n: fmt(VEREIN.lizenzen), t: 'Lizenzen über den Marktplatz Lern-Apps', h: 'bis Juni 2026', b: 'verein' as Beleg },
              ].map((k) => (
                <div key={k.t} className={`${KARTE} p-6 md:p-8`}>
                  <p className="font-heading font-bold text-4xl md:text-6xl text-primary-dark tabular-nums leading-none">{k.n}</p>
                  <p className="font-body text-sm md:text-base text-gray-900 mt-3 leading-snug">{k.t}</p>
                  <p className="font-body text-xs mt-1 mb-3" style={{ color: TEXT2 }}>{k.h}</p>
                  <BelegChip beleg={k.b} />
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2">
              {(Object.keys(BELEG) as Beleg[]).map((k) => (
                <p key={k} className="font-body text-xs flex items-center gap-2" style={{ color: TEXT2 }}><BelegChip beleg={k} /> {BELEG[k].erklaerung}</p>
              ))}
            </div>
          </div>
        </section>

        <KapitelNav kapitel={KAPITEL} />

        {/* 1 Überblick */}
        <Kapitel id="ueberblick" nr={1} titel="Was die Daten zeigen" intro="Sieben Befunde aus den Nutzerdaten und den Zählungen des Vereins, jeweils mit der Folge für die Steuerung. Die Zahlen rechnen sich bei jedem Datenupdate neu.">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {BEFUNDE.map((b, i) => (
              <article key={b.titel} className={`${KARTE} p-7 flex flex-col ${i === 0 ? 'xl:col-span-2' : ''}`}>
                <p className="flex items-baseline gap-2 mb-3">
                  <span className="font-heading font-bold text-5xl text-primary-dark tabular-nums leading-none">{b.zahl}</span>
                  <span className="font-body text-sm" style={{ color: TEXT2 }}>{b.einheit}</span>
                </p>
                <h3 className="font-heading font-bold text-xl mb-2 text-balance" style={{ color: INK }}>{b.titel}</h3>
                <p className="font-body text-sm text-gray-900 mb-5 leading-relaxed">{b.text}</p>
                <p className="font-body text-sm mt-auto rounded-2xl p-4 bg-status-teal-light text-[#14463b] leading-relaxed"><strong>Folge:</strong> {b.folge}</p>
                <div className="mt-4"><BelegChip beleg={b.beleg} /></div>
              </article>
            ))}
            <article className="rounded-[20px] p-7 bg-primary-50 flex flex-col justify-center">
              <h3 className="font-heading font-bold text-xl mb-2" style={{ color: INK }}>Zweck der Messung</h3>
              <p className="font-body text-sm text-gray-900 leading-relaxed">{ZWECK}</p>
            </article>
          </div>
        </Kapitel>

        {/* 2 Daten */}
        <Kapitel id="daten" nr={2} titel="Die Zahlen im Detail" intro="Woher die Zahlen kommen, wie viele Lernende bis zum Lernerfolg kommen und wie sich jede Kennzahl je Quartal entwickelt.">
          <Teil id="phasen" titel="Zwei Datenphasen, ein Übergang"
            intro="Bis Juni 2026 hat der Verein die Reichweite selbst gezählt, vor allem Workshops. Seit April 2026 messen die Nutzerdaten der Plattform automatisch. Beide Reichweiten werden nicht addiert, weil sich Lehrlinge aus Workshops und Konten auf der Plattform überschneiden können.">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,4fr)]">
              <figure className={`${KARTE} p-7`}>
                <figcaption className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <p className="font-body text-xs font-700 uppercase tracking-widest text-primary-medium">Phase 1, 2022 bis Juni 2026</p>
                    <h4 className="font-heading font-bold text-xl mt-1" style={{ color: INK }}>Workshops: direkt begleitete Lehrlinge</h4>
                  </div>
                  <BelegChip beleg="verein" />
                </figcaption>
                <div className="flex items-end gap-3 h-48" role="img" aria-label={VEREIN.lehrlingeJahr.map((j) => `${j.jahr}: ${j.n}`).join(', ')}>
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
                <p className="font-body text-sm mt-5" style={{ color: TEXT2 }}>Summe {VEREIN.lehrlinge} Lehrlinge. Dazu {fmt(VEREIN.lizenzen)} Lizenzen, gesamt {fmt(VEREIN.reichweite)} Zugänge bis Juni 2026.</p>
              </figure>
              <figure className={`${KARTE} p-7`}>
                <figcaption className="flex items-start justify-between gap-3 mb-6">
                  <div>
                    <p className="font-body text-xs font-700 uppercase tracking-widest text-status-teal">Phase 2, ab April 2026</p>
                    <h4 className="font-heading font-bold text-xl mt-1" style={{ color: INK }}>Plattform: aktive Lernende</h4>
                  </div>
                  <BelegChip beleg="gemessen" />
                </figcaption>
                <div className="flex items-end gap-3 h-48" role="img" aria-label={QUARTALE.map((q) => `${quartalName(q)}: ${wert(KPI_NAMEN.aktiv, q)}`).join(', ')}>
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
                <p className="font-body text-sm mt-5" style={{ color: TEXT2 }}>
                  {fmt(wert(KPI_NAMEN.aktiv))} verschiedene Lernende waren seit April aktiv, {fmt(wert(KPI_NAMEN.reg))} sind registriert.
                  {KENNZAHLEN.laufend && ` Das ${Q_NAME.replace(' (', ' läuft noch (')}.`}
                </p>
              </figure>
            </div>
            <ol className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                ['Bis Juni 2026', 'Vereinszählung, eingefroren mit Stand Juni 2026.'],
                ['April bis Juni 2026', 'Beide Quellen. Quizversuche speichert die Plattform erst ab 12. August.'],
                ['Ab Juli 2026', 'Wirkung auf der Plattform nur aus Nutzerdaten. Workshops zählt der Verein weiter getrennt.'],
              ].map(([t, x], i) => (
                <li key={t} className="flex gap-4">
                  <span className="shrink-0 w-9 h-9 rounded-full bg-primary-50 text-primary-dark font-heading font-bold flex items-center justify-center">{i + 1}</span>
                  <p className="font-body text-sm text-gray-900 pt-1.5"><strong>{t}:</strong> {x}</p>
                </li>
              ))}
            </ol>
          </Teil>

          <Teil id="trichter" titel="Vom Konto zum Lernerfolg"
            intro="Jede Stufe ist eine Teilmenge der vorherigen, jede Person einmal gezählt. Zwischen den Stufen steht, wie viele den nächsten Schritt schaffen.">
            <div>
              {TRICHTER.map((t, i) => {
                const anteil = (t.n / TRICHTER[0].n) * 100
                const uebergang = i > 0 ? (t.n / TRICHTER[i - 1].n) * 100 : null
                return (
                  <div key={t.stufe}>
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

          <Teil id="kennzahlen" titel="Kennzahlen-Explorer"
            intro={`Alle ${KENNZAHLEN.kpis.length} Kennzahlen aus den Nutzerdaten. Bereich wählen, Kennzahl anklicken, über die Säulen fahren für Basis und Hinweis. Gesamt zählt jede Person einmal.`}>
            <KpiExplorer kpis={KENNZAHLEN.kpis} quartale={QUARTALE} />
            <details className="mt-6 group">
              <summary className="cursor-pointer list-none inline-flex items-center gap-2 font-body text-sm font-700 text-primary-dark hover:text-primary-medium">
                <span className="transition-transform group-open:rotate-90" aria-hidden="true">›</span> Alle Kennzahlen als Tabelle
              </summary>
              <div className="mt-4 overflow-x-auto rounded-[20px] border border-gray-100">
                <table className="min-w-[860px] w-full text-left font-body text-sm">
                  <caption className="sr-only">Plattformkennzahlen je Quartal und gesamt</caption>
                  <thead className="text-gray-900 border-b border-gray-100">
                    <tr>
                      <th scope="col" className="px-4 py-3 font-heading">Bereich</th>
                      <th scope="col" className="px-4 py-3 font-heading">Kennzahl</th>
                      {QUARTALE.map((q) => <th key={q} scope="col" className="px-4 py-3 font-heading text-right whitespace-nowrap">{qKurz(q)}</th>)}
                      <th scope="col" className="px-4 py-3 font-heading text-right bg-primary-50">Gesamt</th>
                      <th scope="col" className="px-4 py-3 font-heading">Hinweis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {KENNZAHLEN.kpis.map((k, i) => {
                      const neu = i === 0 || KENNZAHLEN.kpis[i - 1].ast !== k.ast
                      const letzt = k.werte[QUARTALE[QUARTALE.length - 1]]
                      return (
                        <tr key={k.kpi}>
                          <td className="px-4 py-2.5 font-700 text-gray-900 whitespace-nowrap">{neu ? k.ast : ''}</td>
                          <td className="px-4 py-2.5 text-gray-900">{k.kpi.replace('Nordstern: ', '')}</td>
                          {[...QUARTALE, GESAMT].map((q) => (
                            <td key={q} className={`px-4 py-2.5 text-right tabular-nums whitespace-nowrap ${q === GESAMT ? 'font-700' : ''}`} style={KPI_STIL[k.werte[q]?.status ?? 'fehlt']}>
                              {zelle(k.werte[q], k.einheit)}
                            </td>
                          ))}
                          <td className="px-4 py-2.5 text-xs" style={{ color: TEXT2 }}>
                            {[...new Set([letzt?.hinweis && `${qKurz(QUARTALE[QUARTALE.length - 1])}: ${letzt.hinweis}`, k.werte[GESAMT]?.hinweis && `Gesamt: ${k.werte[GESAMT].hinweis}`].filter(Boolean))].join('; ')}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </details>
          </Teil>

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
        </Kapitel>

        {/* 3 Wirkungsmodell */}
        <div className="bg-[#fcfbfe]">
          <Kapitel id="modell" nr={3} titel="Das Wirkungsmodell" intro="Die Modelle der WU Wien angewandt auf Skills-UP!: von Input bis Impact, für jede betroffene Gruppe, nach Ebene, Zeit und Dimension.">
            <Teil id="kette" titel="Wirkungskette" intro="Sechs Stufen. Die ersten drei messen die Leistung, die letzten drei die Wirkung. Nettowirkung ist Bruttowirkung minus Deadweight. Stufe anklicken.">
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

            <Teil id="stakeholder" titel="Stakeholder und Wirkungsbetroffene" intro="Zehn Gruppen aus dem Modell der WU Wien, dazu Lehrkräfte und Lehrbetriebe als eigene Gruppen. Priorität 1 messen wir zuerst.">
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
                  <div key={g.gruppe} className="rounded-[20px] p-6 bg-white border border-primary-medium/10">
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
        </div>

        {/* 4 Methode */}
        <Kapitel id="methode" nr={4} titel="Wie wir messen" intro="Das Vorgehen in sieben Schritten, was wir aus Nutzerdaten messen und wie die Begriffe gezählt werden.">
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
                <div key={v.titel} className="rounded-[20px] p-6 bg-primary-50">
                  <h4 className="font-heading font-bold text-base mb-1" style={{ color: INK }}>{v.titel}</h4>
                  <p className="font-body text-sm text-gray-900">{v.text}</p>
                </div>
              ))}
            </div>
          </Teil>

          <Teil id="messplan" titel="Messplan aus Nutzerdaten" intro="Eine Befragung ist bewusst nicht vorgesehen. Die vier Ebenen nach Kirkpatrick zeigen, wie tief die Messung damit reicht.">
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
              <table className="min-w-[900px] w-full text-left font-body text-sm">
                <thead className="border-b border-gray-100 text-gray-900">
                  <tr>{['Wirkung', 'Indikator', 'Methode', 'Zeitpunkt', 'Quelle', 'Status'].map((t) => <th key={t} scope="col" className="px-4 py-3 font-heading">{t}</th>)}</tr>
                </thead>
                <tbody className="divide-y divide-gray-100 align-top">
                  {MESSPLAN.map((m) => (
                    <tr key={m.wirkung}>
                      <th scope="row" className="px-4 py-3 font-700 text-gray-900">{m.wirkung}</th>
                      <td className="px-4 py-3">{m.indikator}</td>
                      <td className="px-4 py-3">{m.methode}</td>
                      <td className="px-4 py-3 whitespace-nowrap">{m.zeitpunkt}</td>
                      <td className="px-4 py-3">{m.quelle}</td>
                      <td className="px-4 py-3"><BelegChip beleg={m.beleg} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Teil>

          <Teil id="begriffe" titel="Begriffe" intro="So werden die Zahlen auf dieser Seite gezählt.">
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

        {/* 5 Verein */}
        <div className="bg-[#fcfbfe]">
          <Kapitel id="verein" nr={5} titel="Was der Verein einbringt" intro="Zählungen des Vereins mit Stand vor Sommer 2026. Wo frühere Unterlagen verschiedene Werte nennen, steht hier der höhere. Extern sind sie nicht geprüft.">
            <Teil id="angaben" titel="Vereinsangaben">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { zahl: fmt(VEREIN.lehrlinge), text: 'Lehrlinge 2022 bis Juni 2026 direkt begleitet' },
                  { zahl: fmt(VEREIN.lizenzen), text: 'Lizenzen über den Marktplatz Lern-Apps' },
                  { zahl: fmt(VEREIN.reichweite), text: 'Zugänge aus Workshops und Lizenzen zusammen' },
                  { zahl: fmt(VEREIN.standorte), text: 'Schulstandorte, die Skills-UP! einsetzen' },
                  { zahl: fmt(VEREIN.lehrkraefte), text: `eingebundene Lehrkräfte, davon ${VEREIN.lehrkraefteBerufsschule} an ${VEREIN.berufsschulen} Berufsschulen` },
                  { zahl: fmt(VEREIN.workshops), text: `Workshops an ${VEREIN.berufsschulen} Berufsschulen, drei je Schule` },
                  { zahl: fmt(VEREIN.rueckmeldungen), text: 'Rückmeldungen seit 2022 von Jugendlichen, Lehrlingen, Lehrkräften und Partnerorganisationen' },
                  { zahl: fmt(VEREIN.jugendbeirat), text: 'Jugendliche im ehrenamtlichen Jugendbeirat, seit 2024' },
                ].map((v) => (
                  <div key={v.text} className={`${KARTE} p-6`}>
                    <p className="font-heading font-bold text-4xl text-primary-dark tabular-nums">{v.zahl}</p>
                    <p className="font-body text-sm text-gray-900 mt-2">{v.text}</p>
                    <div className="mt-3"><BelegChip beleg="verein" /></div>
                  </div>
                ))}
              </div>
            </Teil>

            <Teil id="budget" titel="Budget und Finanzierung">
              <div className="grid gap-6 lg:grid-cols-2">
                <figure className={`${KARTE} p-7`}>
                  <figcaption className="flex items-start justify-between gap-3 mb-6">
                    <h4 className="font-heading font-bold text-lg" style={{ color: INK }}>Budget je Jahr, {fmt(BUDGET_GESAMT)} € seit 2022</h4>
                    <BelegChip beleg="verein" />
                  </figcaption>
                  <div className="flex items-end gap-3 h-44" role="img" aria-label={VEREIN.budgetJahre.map((b) => `${b.jahr}: ${fmt(b.eur)} Euro`).join(', ')}>
                    {VEREIN.budgetJahre.map((b) => (
                      <div key={b.jahr} className="flex-1 h-full flex flex-col justify-end items-center gap-2" title={`${b.jahr}: ${fmt(b.eur)} €`}>
                        <span className="font-body text-xs font-700 tabular-nums" style={{ color: INK }}>{fmt(b.eur)} €</span>
                        <div className="w-full max-w-[3.5rem] rounded-t-lg bg-primary-medium" style={{ height: `${(b.eur / 100000) * 100}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-2 border-t border-gray-200 pt-2">
                    {VEREIN.budgetJahre.map((b) => <span key={b.jahr} className="flex-1 text-center font-body text-xs" style={{ color: TEXT2 }}>{b.jahr}</span>)}
                  </div>
                </figure>
                <figure className={`${KARTE} p-7`}>
                  <figcaption className="flex items-start justify-between gap-3 mb-6">
                    <h4 className="font-heading font-bold text-lg" style={{ color: INK }}>Finanzierung 2026, {fmt(100000)} €</h4>
                    <BelegChip beleg="verein" />
                  </figcaption>
                  <div className="flex h-10 rounded-full overflow-hidden gap-[2px]" role="img" aria-label={VEREIN.budget2026.map((b) => `${b.quelle}: ${fmt(b.eur)} Euro`).join(', ')}>
                    {VEREIN.budget2026.map((b, i) => (
                      <div key={b.quelle} title={`${b.quelle}: ${fmt(b.eur)} €`} style={{ width: `${b.eur / 1000}%`, background: FINANZ_FARBEN[i] }} />
                    ))}
                  </div>
                  <ul className="mt-5 space-y-2">
                    {VEREIN.budget2026.map((b, i) => (
                      <li key={b.quelle} className="flex items-center gap-3 font-body text-sm text-gray-900">
                        <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: FINANZ_FARBEN[i] }} aria-hidden="true" />
                        <span className="flex-1">{b.quelle}</span>
                        <span className="tabular-nums font-700">{fmt(b.eur)} €</span>
                        <span className="tabular-nums w-14 text-right" style={{ color: TEXT2 }}>{fmt(b.eur / 1000, 1)} %</span>
                      </li>
                    ))}
                  </ul>
                  <p className="font-body text-xs mt-5" style={{ color: TEXT2 }}>
                    Mittel je Person, abgeleitet: {fmt(BUDGET_GESAMT)} € geteilt durch {VEREIN.lehrlinge} direkt begleitete Lehrlinge sind
                    {' '}{fmt(Math.round(BUDGET_GESAMT / VEREIN.lehrlinge))} €, geteilt durch {fmt(VEREIN.reichweite)} Zugänge aus Workshops und Lizenzen
                    {' '}{fmt(Math.round(BUDGET_GESAMT / VEREIN.reichweite))} € je Zugang. Eine Lizenz ist noch keine Nutzung, die zweite Zahl ist also eine Untergrenze der Kosten je lernender Person. Das Budget enthält auch den Aufbau der Plattform.
                  </p>
                </figure>
              </div>
            </Teil>

            <Teil id="stimmen" titel="Stimmen aus dem Verein" intro="Episodische Evidenz: warum es Skills-UP! gibt und was die beiden Verantwortlichen in der Arbeit mit Jugendlichen, Lehrkräften und Schulen erleben.">
              <div className="grid gap-6 md:grid-cols-2">
                <figure className="rounded-[20px] p-8 bg-primary-dark text-white md:row-span-2 flex flex-col">
                  <p className="font-body text-xs font-700 uppercase tracking-widest text-primary-light mb-4">{GESCHICHTE.titel}</p>
                  <p className="font-body text-base text-white/90 mb-6">{GESCHICHTE.text}</p>
                  <blockquote className="font-heading text-2xl leading-snug flex-1">„{GESCHICHTE.zitat}“</blockquote>
                  <figcaption className="mt-6 font-body text-sm text-white/80">Lehrling bei TGW Logistics</figcaption>
                </figure>
                {STIMMEN.map((s) => (
                  <figure key={s.text} className={`${KARTE} p-7 flex flex-col`}>
                    <blockquote className="font-body text-base italic flex-1 leading-relaxed" style={{ color: INK }}>„{s.text}“</blockquote>
                    <figcaption className="mt-4 font-body text-sm" style={{ color: TEXT2 }}>
                      <span className="font-700" style={{ color: INK }}>{s.person}</span>, {s.rolle} <BelegChip beleg="verein" />
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Teil>

            <div>
              <h3 className="font-heading font-bold text-lg mb-3" style={{ color: INK }}>Quellen</h3>
              <ul className="font-body text-sm space-y-2 max-w-4xl" style={{ color: TEXT2 }}>
                {QUELLEN.map((q) => <li key={q}>{q}</li>)}
              </ul>
            </div>
          </Kapitel>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
