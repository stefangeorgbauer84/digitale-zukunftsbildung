'use client'

import Link from 'next/link'

const LERNZIELE = [
  {
    emoji: '🛒',
    text: 'Abo-Fallen, Dark Patterns und Fake-Countdowns erkennen',
  },
  {
    emoji: '📱',
    text: 'Wie Gaming-Apps und Influencer-Links dich zu Ausgaben verleiten',
  },
  {
    emoji: '💳',
    text: '"0% Zinsen" und "Gratis"-Handy: echte Gesamtkosten berechnen',
  },
  {
    emoji: '📋',
    text: 'Kleingedrucktes lesen: Kündigungsfristen, AGB und BNPL-Risiken',
  },
]

const FALLEN_PREVIEWS = [
  { icon: '📺', label: 'Abo-Falle', color: '#C84040' },
  { icon: '⏱️', label: 'Fake-Countdown', color: '#D87228' },
  { icon: '🎮', label: 'Gaming-Trap', color: '#6b4db0' },
  { icon: '💳', label: 'Klarna BNPL', color: '#2A8A76' },
  { icon: '📱', label: 'Gratis-Handy', color: '#C84040' },
  { icon: '☑️', label: 'Dark Pattern', color: '#D87228' },
]

export default function KonsumfallenCTA() {
  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #2a1040 0%, #1a1a2e 40%, #0f1a15 100%)',
      }}
    >
      {/* Dekorative Orbs */}
      <div
        className="absolute top-[-80px] left-[-80px] w-96 h-96 rounded-full pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(circle, #C84040 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-60px] right-[-60px] w-72 h-72 rounded-full pointer-events-none opacity-15"
        style={{ background: 'radial-gradient(circle, #2A8A76 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border whitespace-nowrap"
            style={{
              background: 'rgba(200,64,64,0.2)',
              color: '#f09090',
              borderColor: 'rgba(200,64,64,0.35)',
            }}
          >
            🛒 Skills-UP! Konsumfallen-Parcours · Gratis Demo
          </span>
        </div>

        <div className="grid md:grid-cols-[1fr_340px] gap-12 items-center">
          {/* Left: Text & Lernziele */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              10 Fallen — erkennst du
              <br />
              <span style={{ color: '#7ed4c8' }}>alle bevor es zu spät ist?</span>
            </h2>
            <p className="text-white/70 text-base leading-relaxed mb-8">
              Der Konsumfallen-Parcours simuliert 10 realistische Situationen: Netflix-Abofallen,
              Fake-Countdowns, Gaming-Mikrotransaktionen, Klarna-Fallen und mehr. Kostenlos,
              ohne Anmeldung — direkt im Browser.
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
                Was Schüler:innen lernen
              </p>
              {LERNZIELE.map((z) => (
                <div key={z.text} className="flex items-start gap-3">
                  <span className="text-lg flex-shrink-0 mt-0.5">{z.emoji}</span>
                  <span className="text-white/80 text-sm leading-relaxed">{z.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-white/40">
              {[
                'Kein Account nötig',
                'Läuft im Browser',
                'Keine Kosten',
                '10 Szenarien',
                'Auswertung & Mini-Quiz',
              ].map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Preview Card + CTA */}
          <div className="flex flex-col items-center gap-5">
            {/* Simulated parcours preview */}
            <div
              className="w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              style={{ background: 'rgba(255,255,255,0.04)', backdropFilter: 'blur(8px)' }}
            >
              <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between">
                <span className="text-white/60 text-xs font-mono">Konsumfallen-Parcours</span>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-bold"
                  style={{ background: 'rgba(200,64,64,0.3)', color: '#f09090' }}
                >
                  10 Fallen
                </span>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {FALLEN_PREVIEWS.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl p-2.5 text-center border border-white/10"
                      style={{ background: `${item.color}15` }}
                    >
                      <p className="text-xl mb-0.5">{item.icon}</p>
                      <p className="text-[10px] font-semibold" style={{ color: item.color }}>
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 pt-3 space-y-1.5">
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 text-xs">Ø Kosten vermieden</span>
                    <span className="text-emerald-400 font-bold text-sm font-mono">+ €486</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/40 text-xs">Dauer</span>
                    <span className="text-white/70 text-sm">ca. 10 Min.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/demo"
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-base transition-all hover:scale-[1.02] hover:shadow-2xl"
              style={{
                background: 'linear-gradient(135deg, #C84040 0%, #4a2d8a 100%)',
                color: '#fff',
              }}
            >
              <span className="text-xl">🛒</span>
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
