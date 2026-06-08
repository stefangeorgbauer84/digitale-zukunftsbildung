'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Difficulty, PlayerRole } from '../types'
import { PLAYER_ROLES } from '../lib/gameEngine'

interface SetupScreenProps {
  onStart: (playerName: string, totalRounds: number, difficulty: Difficulty, role: PlayerRole) => void
}

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string; hint: string; color: string }[] = [
  { value: 'einsteiger', label: 'Einsteiger', hint: 'Kleine Schwankungen – zum Kennenlernen', color: 'border-status-teal text-status-teal bg-status-teal-light' },
  { value: 'fortgeschritten', label: 'Fortgeschritten', hint: 'Realistisch – für Workshops empfohlen', color: 'border-primary-medium text-primary-dark bg-primary-50' },
  { value: 'experte', label: 'Experte', hint: 'Starke Volatilität – für Erfahrene', color: 'border-status-orange text-status-orange bg-status-orange-light' },
]

const ROLE_ORDER: PlayerRole[] = [
  'sicherheitsdenker',
  'wachstumssucher',
  'nachhaltigkeitsinvestor',
  'diversifizierer',
  'spekulant',
]

function RoleIcon({ role }: { role: PlayerRole }) {
  if (role === 'sicherheitsdenker') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
  if (role === 'wachstumssucher') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  )
  if (role === 'nachhaltigkeitsinvestor') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.11"/><path d="M19 3c0 0-2 10-14 10"/>
    </svg>
  )
  if (role === 'diversifizierer') return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
  // spekulant
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const [name, setName] = useState('')
  const [rounds, setRounds] = useState(10)
  const [difficulty, setDifficulty] = useState<Difficulty>('fortgeschritten')
  const [role, setRole] = useState<PlayerRole>('diversifizierer')
  const [step, setStep] = useState<1 | 2>(1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    onStart(name.trim(), rounds, difficulty, role)
  }

  const selectedRole = PLAYER_ROLES[role]

  return (
    <div className="bg-white rounded-2xl shadow-card max-w-xl mx-auto overflow-hidden">
      {/* Hero header mit Logo + Capybara */}
      <div className="bg-primary-dark px-6 pt-6 pb-0 flex items-end justify-between">
        <div className="flex flex-col gap-3 pb-4">
          <div className="flex items-center gap-3">
            <Image src="/fotos/Logo.png" alt="Skills-UP!" width={36} height={36} className="rounded-lg" />
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/50">Skills-UP!</div>
              <div className="text-white font-heading font-bold text-lg leading-tight">Investment Spiel</div>
            </div>
          </div>
          <div className="flex gap-2">
            {[1, 2].map((s) => (
              <div
                key={s}
                className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                  s === step ? 'bg-white text-primary-dark' : s < step ? 'bg-white/40 text-white' : 'bg-white/20 text-white/60'
                }`}
              >
                {s}
              </div>
            ))}
          </div>
        </div>
        {/* Capybara Maskottchen */}
        <div className="relative flex-shrink-0">
          <Image
            src="/capybara-mascot.png"
            alt="Capybara Maskottchen"
            width={100}
            height={100}
            className="object-contain drop-shadow-lg"
            style={{ marginBottom: '-2px' }}
          />
        </div>
      </div>

      <div className="p-6">
        {step === 1 && (
          <div className="space-y-5">
            <p className="text-text-secondary text-sm">
              Du startest mit 10.000 € virtuellem Kapital und investierst über mehrere Jahre ab 2026.
            </p>

            <div>
              <label htmlFor="nickname" className="block text-sm font-semibold text-text-primary mb-1">
                Dein Nickname
              </label>
              <input
                id="nickname"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="z. B. InvestorMax"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-medium"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-text-primary mb-2">Simulationszeitraum</p>
              <div className="flex gap-3">
                {([5, 7, 10] as const).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRounds(r)}
                    className={`flex-1 py-3 rounded-xl font-semibold text-sm border transition-colors ${
                      rounds === r
                        ? 'bg-primary-dark text-white border-primary-dark'
                        : 'border-gray-200 text-text-secondary hover:border-primary-medium'
                    }`}
                  >
                    {r} Jahre
                  </button>
                ))}
              </div>
              <p className="text-xs text-text-muted mt-2">
                {rounds === 5
                  ? '2026–2030 · ~20 Minuten · Kurzspiel'
                  : rounds === 7
                  ? '2026–2032 · ~30 Minuten · Standard für Workshops'
                  : '2026–2035 · ~45 Minuten · Vollständige Dekaden-Simulation'}
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-text-primary mb-2">Schwierigkeitsgrad</p>
              <div className="flex flex-col gap-2">
                {DIFFICULTY_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => setDifficulty(opt.value)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                      difficulty === opt.value ? opt.color : 'border-gray-200 text-text-secondary hover:border-gray-300'
                    }`}
                  >
                    <span className="font-semibold text-sm">{opt.label}</span>
                    <span className="text-xs opacity-80 ml-2">{opt.hint}</span>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              disabled={!name.trim()}
              onClick={() => setStep(2)}
              className="w-full bg-primary-dark text-white font-semibold py-3 rounded-xl hover:bg-primary-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Weiter → Investoren-Persönlichkeit wählen
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-sm text-text-secondary">
              Wähle deine Investoren-Persönlichkeit. Sie gibt dir eine Missions-Aufgabe und spezifische Lernhinweise.
            </p>

            <div className="grid grid-cols-1 gap-2">
              {ROLE_ORDER.map((r) => {
                const def = PLAYER_ROLES[r]
                const isSelected = role === r
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRole(r)}
                    className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                      isSelected
                        ? `${def.bgClass} ${def.borderClass}`
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 flex-shrink-0 ${isSelected ? def.colorClass : 'text-text-muted'}`}>
                        <RoleIcon role={r} />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`font-semibold text-sm ${isSelected ? def.colorClass : 'text-text-primary'}`}>
                            {def.name}
                          </span>
                          <span className="text-xs text-text-muted italic">{def.tagline}</span>
                        </div>
                        {isSelected && (
                          <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                            {def.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Mission preview */}
            <div className={`rounded-xl p-4 ${selectedRole.bgClass} border ${selectedRole.borderClass}`}>
              <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${selectedRole.colorClass}`}>
                Deine Mission
              </div>
              <p className="text-sm text-text-secondary">{selectedRole.mission}</p>
            </div>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex-1 border border-gray-200 text-text-secondary py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                ← Zurück
              </button>
              <button
                type="submit"
                className="flex-1 bg-primary-dark text-white font-semibold py-3 rounded-xl hover:bg-primary-medium transition-colors"
              >
                Spiel starten
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
