'use client'

import Link from 'next/link'

const LERNZIELE = [
  {
    emoji: '📈',
    text: 'Wie Aktienkurse entstehen und was Marktpreise beeinflusst',
  },
  {
    emoji: '🎯',
    text: 'Was Diversifikation bedeutet und warum Streuung Risiko senkt',
  },
  {
    emoji: '🧠',
    text: 'Wie Zinseszins, Inflation und Rendite zusammenhängen',
  },
  {
    emoji: '💡',
    text: 'Warum Emotionen beim Investieren oft schlechte Ratgeber sind',
  },
]

export default function AktiengameCTA() {
  return (
    <section className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0f0a2a 0%, #1a1040 40%, #1a3d35 100%)' }}>
      {/* Dekorative Orbs */}
      <div className="absolute top-[-80px] right-[-80px] w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #6b4db0 0%, transparent 70%)' }} />
      <div className="absolute bottom-[-60px] left-[-60px] w-72 h-72 rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #2A8A76 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border"
            style={{ background: 'rgba(107,77,176,0.25)', color: '#c4b0f0', borderColor: 'rgba(107,77,176,0.4)' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            Skills-UP! Investment Spiel · Beispiel-Simulation
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
          {/* Left: Text & Lernziele */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              10 Jahre Börse spielen —<br />
              <span style={{ color: '#7ed4c8' }}>ohne echtes Geld zu riskieren.</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Das Skills-UP! Aktiengame simuliert die Jahre 2026 bis 2035. Schüler:innen
              investieren virtuell 10.000 €, erleben echte Marktereignisse und bekommen
              nach jedem Jahr eine Lerneinheit zu einem Finanzkonzept.
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Was Schüler:innen lernen</p>
              {LERNZIELE.map((z) => (
                <div key={z.text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{z.emoji}</span>
                  <span className="text-white/80 text-sm leading-relaxed">{z.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-white/40">
              {['Kein Account nötig', 'Läuft im Browser', 'Keine Kosten', '5 · 7 · 10 Jahre wählbar', 'Druckbarer Lehrerauswertungsbogen'].map((t) => (
                <span key={t} className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.05)' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Preview Card + CTA */}
          <div className="flex flex-col items-center gap-5">
            {/* Simulated game preview */}
            <div className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)' }}>
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-white/60 text-xs font-mono">Jahr 2026 · Runde 1/10</span>
                <span className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: 'rgba(42,138,118,0.3)', color: '#7ed4c8' }}>▲ Bullish</span>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { name: 'AlpenTech AG', change: '+8.3%', positive: true },
                  { name: 'GreenEnergy ETF', change: '+4.1%', positive: true },
                  { name: 'Austria Stability ETF', change: '+1.2%', positive: true },
                  { name: 'Future Mobility AG', change: '-3.7%', positive: false },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <span className="text-white/70 text-sm">{item.name}</span>
                    <span className={`text-sm font-bold font-mono ${item.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {item.change}
                    </span>
                  </div>
                ))}
                <div className="pt-2 border-t border-white/10 flex justify-between items-center">
                  <span className="text-white/40 text-xs">Gesamtvermögen</span>
                  <span className="text-white font-bold text-sm">11.240 €</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/aktiengame"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-base transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #4a2d8a 0%, #2A8A76 100%)', color: '#fff' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Jetzt kostenlos ausprobieren
            </Link>
            <p className="text-white/35 text-xs text-center">
              Sofort spielbar · keine Anmeldung · im Browser
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
