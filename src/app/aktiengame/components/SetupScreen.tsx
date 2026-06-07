'use client'

import { useState } from 'react'
import type { Difficulty } from '../types'

interface SetupScreenProps {
  onStart: (playerName: string, totalRounds: number, difficulty: Difficulty) => void
}

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string; description: string; color: string }[] = [
  {
    value: 'einsteiger',
    label: 'Einsteiger',
    description: 'Kleinere Kursschwankungen – ideal zum Kennenlernen der Grundlagen',
    color: 'border-status-teal text-status-teal bg-status-teal-light',
  },
  {
    value: 'fortgeschritten',
    label: 'Fortgeschritten',
    description: 'Realistische Schwankungen – empfohlen für Workshops und Unterricht',
    color: 'border-primary-medium text-primary-dark bg-primary-50',
  },
  {
    value: 'experte',
    label: 'Experte',
    description: 'Starke Volatilität – für erfahrene Spielerinnen und Spieler',
    color: 'border-status-orange text-status-orange bg-status-orange-light',
  },
]

export default function SetupScreen({ onStart }: SetupScreenProps) {
  const [name, setName] = useState('')
  const [rounds, setRounds] = useState(8)
  const [difficulty, setDifficulty] = useState<Difficulty>('fortgeschritten')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) return
    onStart(name.trim(), rounds, difficulty)
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-8 max-w-lg mx-auto">
      <h2 className="font-heading text-2xl font-bold text-primary-dark mb-2">Spiel einrichten</h2>
      <p className="text-text-secondary mb-6 text-sm">
        Du startest mit 10.000 € virtuellem Kapital und handelst über mehrere Runden.
      </p>
      <form onSubmit={handleSubmit} className="space-y-6">
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
          <p className="text-sm font-semibold text-text-primary mb-2">Anzahl Runden</p>
          <div className="flex gap-3">
            {[5, 8, 10].map((r) => (
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
                {r} Runden
              </button>
            ))}
          </div>
          <p className="text-xs text-text-muted mt-2">
            {rounds === 5 ? 'Kurzspiel – ideal für 20 Minuten' : rounds === 8 ? 'Standard – empfohlen für Workshops' : 'Lang – für vertiefte Simulation'}
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
                  difficulty === opt.value
                    ? opt.color
                    : 'border-gray-200 text-text-secondary hover:border-gray-300'
                }`}
              >
                <div className="font-semibold text-sm">{opt.label}</div>
                <div className="text-xs opacity-80 mt-0.5">{opt.description}</div>
              </button>
            ))}
          </div>
        </div>

        <button
          type="submit"
          disabled={!name.trim()}
          className="w-full bg-primary-dark text-white font-semibold py-3 rounded-xl hover:bg-primary-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Spiel starten
        </button>
      </form>
    </div>
  )
}
