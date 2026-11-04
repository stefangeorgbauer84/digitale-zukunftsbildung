'use client'

// Interaktive Teile der Wirkungsseite. Alle Daten kommen als Props vom Server (daten.ts, kennzahlen.json).

import { useEffect, useMemo, useState } from 'react'

const INK = '#1a1040'
const TEXT2 = '#4c5260'

type Beleg = 'gemessen' | 'verein' | 'geplant' | 'hypothese'
const BELEG_STIL: Record<Beleg, { label: string; bg: string; fg: string; rand: string }> = {
  gemessen: { label: 'gemessen', bg: '#E6F4F1', fg: '#1E6B5B', rand: 'solid' },
  verein: { label: 'Vereinsangabe', bg: '#EDE9F7', fg: '#4a2d8a', rand: 'solid' },
  geplant: { label: 'geplant', bg: '#FDF0E6', fg: '#8A4210', rand: 'solid' },
  hypothese: { label: 'Hypothese', bg: '#F1F3F5', fg: '#495057', rand: 'dashed' },
}

export function Chip({ beleg }: { beleg: Beleg }) {
  const b = BELEG_STIL[beleg]
  return (
    <span className="inline-flex items-center text-[11px] font-body font-700 px-2 py-0.5 rounded-full whitespace-nowrap align-middle"
      style={{ background: b.bg, color: b.fg, border: `1px ${b.rand} ${b.fg}40` }}>
      {b.label}
    </span>
  )
}

function fmt(n: number, stellen = 0) {
  return n.toLocaleString('de-DE', { minimumFractionDigits: stellen, maximumFractionDigits: stellen })
}

/* ------------------------------------------------------------------ */
/* Kapitelleiste mit Scrollspy                                          */
/* ------------------------------------------------------------------ */

export function KapitelNav({ kapitel }: { kapitel: { id: string; titel: string }[] }) {
  const [aktiv, setAktiv] = useState(kapitel[0]?.id)
  useEffect(() => {
    const beobachter = new IntersectionObserver(
      (eintraege) => {
        const sichtbar = eintraege.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (sichtbar[0]) setAktiv(sichtbar[0].target.id)
      },
      { rootMargin: '-30% 0px -60% 0px' },
    )
    kapitel.forEach((k) => {
      const el = document.getElementById(k.id)
      if (el) beobachter.observe(el)
    })
    return () => beobachter.disconnect()
  }, [kapitel])
  return (
    <nav aria-label="Kapitel" className="sticky top-[72px] z-30 bg-white/90 backdrop-blur border-b border-gray-100">
      <ol className="max-w-7xl mx-auto px-6 flex gap-1 overflow-x-auto no-scrollbar py-2.5">
        {kapitel.map((k, i) => (
          <li key={k.id} className="shrink-0">
            <a href={`#${k.id}`} aria-current={aktiv === k.id ? 'true' : undefined}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 font-body text-sm font-700 transition-colors ${aktiv === k.id ? 'bg-primary-dark text-white' : 'text-primary-dark hover:bg-primary-50'}`}>
              <span className={`w-5 h-5 rounded-full text-[11px] flex items-center justify-center ${aktiv === k.id ? 'bg-white text-primary-dark' : 'bg-primary-50'}`}>{i + 1}</span>
              {k.titel}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

/* ------------------------------------------------------------------ */
/* Wirkungskette zum Durchklicken                                       */
/* ------------------------------------------------------------------ */

export type KettenStufe = { id: string; titel: string; frage: string; ton: 'leistung' | 'wirkung' | 'abzug' | 'netto'; punkte: { text: string; beleg: Beleg }[]; text?: string }

const TON: Record<KettenStufe['ton'], { bg: string; fg: string; ring: string }> = {
  leistung: { bg: '#2d1b69', fg: '#ffffff', ring: '#2d1b69' },
  wirkung: { bg: '#6b4db0', fg: '#ffffff', ring: '#6b4db0' },
  abzug: { bg: '#B23A3A', fg: '#ffffff', ring: '#B23A3A' },
  netto: { bg: '#1E6B5B', fg: '#ffffff', ring: '#1E6B5B' },
}

export function KetteInteraktiv({ stufen }: { stufen: KettenStufe[] }) {
  const [i, setI] = useState(0)
  const s = stufen[i]
  return (
    <div>
      <div className="relative">
        <div aria-hidden="true" className="absolute left-6 right-6 top-6 h-0.5 bg-primary-100 hidden md:block" />
        <ol role="tablist" aria-label="Stufen der Wirkungskette" className="relative grid grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-2">
          {stufen.map((x, j) => {
            const t = TON[x.ton]
            const an = j === i
            return (
              <li key={x.id} className="flex flex-col items-center text-center">
                <button role="tab" aria-selected={an} aria-controls="kette-panel" onClick={() => setI(j)}
                  onKeyDown={(e) => {
                    if (e.key === 'ArrowRight') setI((j + 1) % stufen.length)
                    if (e.key === 'ArrowLeft') setI((j - 1 + stufen.length) % stufen.length)
                  }}
                  className="group flex flex-col items-center gap-2 focus-visible:outline-none">
                  <span className="w-12 h-12 rounded-full flex items-center justify-center font-heading font-700 text-lg transition-transform group-hover:scale-110"
                    style={an ? { background: t.bg, color: t.fg, boxShadow: `0 0 0 6px ${t.ring}22` } : { background: '#fff', color: t.ring, border: `2px solid ${t.ring}` }}>
                    {j === 4 ? '−' : j === 5 ? '=' : j + 1}
                  </span>
                  <span className={`font-heading font-700 text-sm leading-tight ${an ? '' : 'opacity-70'}`} style={{ color: INK }}>{x.titel}</span>
                </button>
              </li>
            )
          })}
        </ol>
        <div className="hidden md:grid grid-cols-6 gap-x-2 mt-3 font-body text-[11px] font-700 uppercase tracking-widest text-center" style={{ color: TEXT2 }}>
          <span className="col-span-3 border-t-2 border-primary-dark/30 pt-2">Leistung: messen wir heute</span>
          <span className="col-span-3 border-t-2 border-[#1E6B5B]/40 pt-2">Wirkung: was sich verändert</span>
        </div>
      </div>
      <div id="kette-panel" role="tabpanel" className="mt-8 rounded-[20px] p-6 md:p-8 shadow-card border border-primary-medium/10 bg-white">
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
          <h3 className="font-heading font-700 text-2xl" style={{ color: TON[s.ton].ring }}>{s.titel}</h3>
          <p className="font-body text-sm" style={{ color: TEXT2 }}>{s.frage}</p>
        </div>
        {s.text && <p className="font-body text-base text-gray-900 mb-4 max-w-3xl">{s.text}</p>}
        {s.punkte.length > 0 && (
          <ul className="grid gap-3 md:grid-cols-2">
            {s.punkte.map((p) => (
              <li key={p.text} className="font-body text-sm text-gray-900 rounded-xl bg-primary-50/60 px-4 py-3">
                {p.text} <Chip beleg={p.beleg} />
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between mt-6">
          <button onClick={() => setI(Math.max(0, i - 1))} disabled={i === 0}
            className="font-body text-sm font-700 text-primary-dark disabled:opacity-30 rounded-full px-4 py-2 hover:bg-primary-50">Zurück</button>
          <button onClick={() => setI(Math.min(stufen.length - 1, i + 1))} disabled={i === stufen.length - 1}
            className="font-body text-sm font-700 text-white bg-primary-dark disabled:opacity-30 rounded-full px-5 py-2">Nächste Stufe</button>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Kennzahlen-Explorer                                                  */
/* ------------------------------------------------------------------ */

type KpiStatus = 'gemessen' | 'eingeschränkt' | 'fehlt'
type KpiZelle = { wert: number | null; basis: number | null; status: KpiStatus; hinweis: string }
export type KpiDaten = { ast: string; kpi: string; einheit: string; definition?: string; werte: Record<string, KpiZelle> }

function quartalKurz(q: string) {
  const [j, n] = q.split('-')
  return `${n.replace('Q', '')}. Q. ${j}`
}
function zelle(z: KpiZelle | undefined, einheit: string) {
  if (!z || z.wert === null) return 'nicht erfasst'
  const s = fmt(z.wert, Number.isInteger(z.wert) ? 0 : 1)
  return einheit === 'Anzahl' ? s : `${s} ${einheit}`
}

export function KpiExplorer({ kpis, quartale }: { kpis: KpiDaten[]; quartale: string[] }) {
  const bereiche = useMemo(() => [...new Set(kpis.map((k) => k.ast))], [kpis])
  const [bereich, setBereich] = useState(bereiche[0])
  const imBereich = kpis.filter((k) => k.ast === bereich)
  const [name, setName] = useState<string>(imBereich[0]?.kpi ?? '')
  const k = kpis.find((x) => x.kpi === name && x.ast === bereich) ?? imBereich[0]
  const [hover, setHover] = useState<number | null>(null)

  const werte = quartale.map((q) => k.werte[q]?.wert ?? null)
  const max = Math.max(...werte.map((w) => w ?? 0), 0.0001)
  const W = 560, H = 240, PAD = 28, BAND = (W - PAD * 2) / quartale.length, BREITE = Math.min(84, BAND * 0.55)
  const gesamt = k.werte['Gesamt']

  return (
    <div className="rounded-[20px] shadow-card border border-primary-medium/10 bg-white overflow-hidden">
      <div role="tablist" aria-label="Bereich" className="flex gap-1 overflow-x-auto no-scrollbar border-b border-gray-100 px-4 pt-4">
        {bereiche.map((b) => (
          <button key={b} role="tab" aria-selected={b === bereich}
            onClick={() => { setBereich(b); setName(kpis.find((x) => x.ast === b)?.kpi ?? '') }}
            className={`shrink-0 font-body text-sm font-700 px-4 py-2.5 rounded-t-xl border-b-2 transition-colors ${b === bereich ? 'border-primary-dark text-primary-dark bg-primary-50' : 'border-transparent hover:bg-gray-50'}`}
            style={b === bereich ? undefined : { color: TEXT2 }}>
            {b}
          </button>
        ))}
      </div>
      <div className="grid lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)]">
        <ul className="p-3 lg:border-r border-gray-100 max-h-[26rem] overflow-y-auto">
          {imBereich.map((x) => (
            <li key={x.kpi}>
              <button onClick={() => setName(x.kpi)} aria-pressed={x.kpi === k.kpi}
                className={`w-full text-left rounded-xl px-3 py-2.5 font-body text-sm transition-colors flex items-center justify-between gap-3 ${x.kpi === k.kpi ? 'bg-primary-dark text-white' : 'text-gray-900 hover:bg-primary-50'}`}>
                <span>{x.kpi.replace('Nordstern: ', '')}</span>
                <span className={`tabular-nums font-700 ${x.kpi === k.kpi ? 'text-white' : 'text-primary-dark'}`}>{zelle(x.werte['Gesamt'], x.einheit)}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="p-6 md:p-8 min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-2">
            <div>
              {k.kpi.startsWith('Nordstern') && <span className="inline-block text-[11px] font-body font-700 uppercase tracking-widest text-white bg-primary-dark rounded-full px-3 py-1 mb-2">Nordstern</span>}
              <h3 className="font-heading font-700 text-2xl" style={{ color: INK }}>{k.kpi.replace('Nordstern: ', '')}</h3>
              <p className="font-body text-sm mt-1 max-w-xl" style={{ color: TEXT2 }}>{k.definition}</p>
            </div>
            <div className="text-right">
              <p className="font-heading font-700 text-4xl text-primary-dark tabular-nums leading-none">{zelle(gesamt, k.einheit)}</p>
              <p className="font-body text-xs mt-1" style={{ color: TEXT2 }}>gesamt seit April 2026</p>
              {gesamt?.status === 'eingeschränkt' && <p className="font-body text-xs mt-1 text-[#8A4210]">{gesamt.hinweis}</p>}
            </div>
          </div>
          <div className="relative mt-4">
            <svg viewBox={`0 0 ${W} ${H + 36}`} className="w-full h-auto" role="img"
              aria-label={`${k.kpi}: ${quartale.map((q, i) => `${quartalKurz(q)} ${zelle(k.werte[q], k.einheit)}`).join(', ')}`}>
              <defs>
                <pattern id="schraffur" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <rect width="6" height="6" fill="#9b7ed4" />
                  <line x1="0" y1="0" x2="0" y2="6" stroke="#ffffff" strokeWidth="2.5" />
                </pattern>
              </defs>
              {[0.25, 0.5, 0.75, 1].map((f) => (
                <line key={f} x1={PAD} x2={W - PAD} y1={H - (H - 30) * f} y2={H - (H - 30) * f} stroke="#E9ECEF" strokeWidth="1" />
              ))}
              <line x1={PAD} x2={W - PAD} y1={H} y2={H} stroke="#ADB5BD" strokeWidth="1" />
              {quartale.map((q, i) => {
                const z = k.werte[q]
                const w = z?.wert ?? null
                const x = PAD + BAND * i + (BAND - BREITE) / 2
                const h = w === null ? 0 : Math.max(4, ((H - 30) * w) / max)
                const ein = z?.status === 'eingeschränkt'
                return (
                  <g key={q} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)} tabIndex={0}>
                    <rect x={PAD + BAND * i} y={0} width={BAND} height={H} fill="transparent" />
                    {w === null ? (
                      <text x={x + BREITE / 2} y={H - 8} textAnchor="middle" fontSize="15" fill="#6C757D">nicht erfasst</text>
                    ) : (
                      <rect x={x} y={H - h} width={BREITE} height={h} rx="4" fill={ein ? 'url(#schraffur)' : '#6b4db0'} opacity={hover === null || hover === i ? 1 : 0.45} />
                    )}
                    {w !== null && (
                      <text x={x + BREITE / 2} y={H - h - 8} textAnchor="middle" fontSize="18" fontWeight="700" fill={INK}>{zelle(z, k.einheit)}</text>
                    )}
                    <text x={x + BREITE / 2} y={H + 22} textAnchor="middle" fontSize="16" fill={TEXT2}>{quartalKurz(q)}</text>
                  </g>
                )
              })}
            </svg>
            {hover !== null && k.werte[quartale[hover]] && (
              <div className="absolute top-0 right-0 rounded-xl bg-[#1a1040] text-white px-4 py-3 font-body text-xs shadow-card max-w-[15rem] pointer-events-none">
                <p className="font-700 text-sm">{quartalKurz(quartale[hover])}: {zelle(k.werte[quartale[hover]], k.einheit)}</p>
                {k.werte[quartale[hover]].basis !== null && <p className="text-white/80">Basis: {fmt(k.werte[quartale[hover]].basis ?? 0)}</p>}
                <p className="text-white/80">{k.werte[quartale[hover]].status}{k.werte[quartale[hover]].hinweis ? `: ${k.werte[quartale[hover]].hinweis}` : ''}</p>
              </div>
            )}
          </div>
          <p className="font-body text-xs mt-2 flex flex-wrap items-center gap-x-4 gap-y-1" style={{ color: TEXT2 }}>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm bg-primary-medium" /> gemessen</span>
            <span className="inline-flex items-center gap-1.5"><span className="w-3 h-3 rounded-sm" style={{ background: 'repeating-linear-gradient(45deg,#9b7ed4 0 3px,#fff 3px 5px)' }} /> eingeschränkt: kleine Fallzahl oder Datenlücke</span>
          </p>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Stakeholder mit Prioritätsfilter                                     */
/* ------------------------------------------------------------------ */

export type StakeholderDaten = { kategorie: string; akteure: string; wirkung: string; prioritaet: 1 | 2 | 3; eigene?: boolean; akteureBeleg?: Beleg }

export function StakeholderFilter({ gruppen }: { gruppen: StakeholderDaten[] }) {
  const [prio, setPrio] = useState<0 | 1 | 2 | 3>(0)
  const pos = [
    'lg:col-start-1 lg:row-start-1', 'lg:col-start-2 lg:row-start-1', 'lg:col-start-3 lg:row-start-1', 'lg:col-start-4 lg:row-start-1',
    'lg:col-start-4 lg:row-start-2', 'lg:col-start-4 lg:row-start-3',
    'lg:col-start-4 lg:row-start-4', 'lg:col-start-3 lg:row-start-4', 'lg:col-start-2 lg:row-start-4', 'lg:col-start-1 lg:row-start-4',
    'lg:col-start-1 lg:row-start-3', 'lg:col-start-1 lg:row-start-2',
  ]
  return (
    <div>
      <div role="group" aria-label="Nach Priorität filtern" className="flex flex-wrap justify-center gap-2 mb-8">
        {([0, 1, 2, 3] as const).map((p) => (
          <button key={p} onClick={() => setPrio(p)} aria-pressed={prio === p}
            className={`font-body text-sm font-700 rounded-full px-4 py-2 transition-colors ${prio === p ? 'bg-primary-dark text-white' : 'bg-primary-50 text-primary-dark hover:bg-primary-100'}`}>
            {p === 0 ? 'Alle zwölf Gruppen' : `Priorität ${p}`}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-4">
        {gruppen.map((s, i) => {
          const aus = prio !== 0 && s.prioritaet !== prio
          return (
            <article key={s.kategorie}
              className={`${pos[i]} rounded-[20px] p-5 bg-white transition-all duration-300 ${aus ? 'opacity-25 scale-[0.97]' : 'shadow-card'} ${s.eigene ? 'border-2 border-dashed border-primary-medium/60' : s.prioritaet === 1 ? 'ring-2 ring-primary-dark' : 'border border-primary-medium/10'}`}>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-heading font-700 text-base leading-tight" style={{ color: INK }}>{s.kategorie}</h3>
                <span className="font-body text-[11px] font-700 whitespace-nowrap rounded-full px-2 py-0.5 bg-primary-50 text-primary-dark">P{s.prioritaet}</span>
              </div>
              <p className="font-body text-[13px] text-gray-900 mb-2 leading-snug">{s.akteure}{s.akteureBeleg && <> <Chip beleg={s.akteureBeleg} /></>}</p>
              <p className="font-body text-xs leading-snug" style={{ color: TEXT2 }}>{s.wirkung} <Chip beleg="hypothese" /></p>
              {s.eigene && <p className="font-body text-[11px] mt-2 text-primary-medium font-700">eigene Gruppe für Skills-UP!</p>}
            </article>
          )
        })}
        <div className="hidden lg:flex lg:col-start-2 lg:col-span-2 lg:row-start-2 lg:row-span-2 items-center justify-center">
          <div className="relative w-64 h-64 rounded-full flex flex-col items-center justify-center text-center p-8 bg-primary-50">
            <div aria-hidden="true" className="absolute inset-4 rounded-full border-2 border-dashed border-primary-light/60" />
            <p className="font-heading font-700 text-3xl text-primary-dark">Skills-UP!</p>
            <p className="font-body text-sm mt-1" style={{ color: TEXT2 }}>Programm des Vereins zur Entwicklung der digitalen Zukunftsbildung</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Wirkungskette je Gruppe als Tabs                                     */
/* ------------------------------------------------------------------ */

export type KettenZeile = { stakeholder: string; input: string[]; aktivitaeten: string[]; output: string[]; brutto: string[]; deadweight: string[]; netto: string[] }

export function GruppenKette({ zeilen }: { zeilen: KettenZeile[] }) {
  const [i, setI] = useState(0)
  const z = zeilen[i]
  const spalten: { titel: string; werte: string[]; farbe: string; grund: string }[] = [
    { titel: 'Input', werte: z.input, farbe: '#2d1b69', grund: '#f3f1f9' },
    { titel: 'Aktivitäten', werte: z.aktivitaeten, farbe: '#4a2d8a', grund: '#f3f1f9' },
    { titel: 'Output', werte: z.output, farbe: '#6b4db0', grund: '#f3f1f9' },
    { titel: 'Bruttowirkung', werte: z.brutto, farbe: '#2A8A76', grund: '#E6F4F1' },
    { titel: 'Deadweight', werte: z.deadweight, farbe: '#B23A3A', grund: '#FDF1F1' },
    { titel: 'Nettowirkung', werte: z.netto, farbe: '#1E6B5B', grund: '#E6F4F1' },
  ]
  return (
    <div>
      <div role="tablist" aria-label="Gruppe" className="flex flex-wrap justify-center gap-2 mb-8">
        {zeilen.map((x, j) => (
          <button key={x.stakeholder} role="tab" aria-selected={j === i} onClick={() => setI(j)}
            className={`font-body text-sm font-700 rounded-full px-4 py-2 transition-colors ${j === i ? 'bg-primary-dark text-white' : 'bg-primary-50 text-primary-dark hover:bg-primary-100'}`}>
            {x.stakeholder}
          </button>
        ))}
      </div>
      <ol role="tabpanel" className="grid gap-3 md:grid-cols-3 xl:grid-cols-6">
        {spalten.map((s, j) => (
          <li key={s.titel} className="rounded-[20px] p-5 relative" style={{ background: s.grund }}>
            <p className="font-body text-[11px] font-700 uppercase tracking-widest mb-1" style={{ color: s.farbe }}>{j + 1}. {s.titel}</p>
            <ul className="space-y-2 mt-3">
              {s.werte.map((w) => <li key={w} className="font-body text-sm text-gray-900 leading-snug">{w}</li>)}
            </ul>
          </li>
        ))}
      </ol>
      <p className="font-body text-sm text-center mt-6" style={{ color: TEXT2 }}>Output messen wir heute, Bruttowirkung teilweise, Deadweight und Nettowirkung noch nicht.</p>
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Wirkungsbox mit Dimensionsfilter                                     */
/* ------------------------------------------------------------------ */

type Dimension = 'ökonomisch' | 'sozial' | 'politisch' | 'ökologisch' | 'kulturell' | 'psychisch'

export function WirkungsboxFilter({ ebenen, zeiten, box, farben, hinweis }: {
  ebenen: readonly string[]; zeiten: readonly string[]; box: { text: string; dim: Dimension }[][][]; farben: Record<Dimension, string>; hinweis: string
}) {
  const [dim, setDim] = useState<Dimension | null>(null)
  const dims = Object.keys(farben) as Dimension[]
  return (
    <div>
      <div role="group" aria-label="Nach Dimension filtern" className="flex flex-wrap justify-center gap-2 mb-8">
        <button onClick={() => setDim(null)} aria-pressed={dim === null}
          className={`font-body text-sm font-700 rounded-full px-4 py-2 ${dim === null ? 'bg-primary-dark text-white' : 'bg-primary-50 text-primary-dark'}`}>Alle Dimensionen</button>
        {dims.map((d) => (
          <button key={d} onClick={() => setDim(d)} aria-pressed={dim === d}
            className="font-body text-sm font-700 rounded-full px-4 py-2 border-2 transition-colors"
            style={dim === d ? { background: farben[d], color: '#fff', borderColor: farben[d] } : { color: farben[d], borderColor: `${farben[d]}40` }}>
            {d}
          </button>
        ))}
      </div>
      <div className="overflow-x-auto pb-2">
        <div className="min-w-[760px] grid grid-cols-[10rem_repeat(3,minmax(0,1fr))] gap-3">
          <div />
          {zeiten.map((z, i) => (
            <div key={z} className="font-heading font-700 text-base text-primary-dark px-2 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-primary-50 text-xs flex items-center justify-center">{i + 1}</span>{z}
            </div>
          ))}
          {ebenen.map((e, r) => (
            <div key={e} className="contents">
              <div className="font-heading font-700 text-sm text-primary-dark flex items-center pr-2">{e}</div>
              {box[r].map((zelle, c) => (
                <ul key={c} className="rounded-[20px] bg-white shadow-card border border-primary-medium/10 p-4 space-y-2.5 min-h-[7rem]">
                  {zelle.map((x) => {
                    const aus = dim !== null && x.dim !== dim
                    return (
                      <li key={x.text} className={`font-body text-[13px] leading-snug transition-opacity ${aus ? 'opacity-20' : ''}`}>
                        <span className="inline-block w-2 h-2 rounded-full mr-2 align-middle" style={{ background: farben[x.dim] }} aria-hidden="true" />
                        <span className="text-gray-900">{x.text}</span>{' '}
                        <span className="text-[11px] font-700" style={{ color: farben[x.dim] }}>{x.dim}</span>
                      </li>
                    )
                  })}
                </ul>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 font-body text-sm text-center" style={{ color: TEXT2 }}>{dim === 'ökologisch' ? hinweis : 'Impact (Nettowirkung) ist Outcome (Bruttowirkung) minus Deadweight.'}</p>
    </div>
  )
}
