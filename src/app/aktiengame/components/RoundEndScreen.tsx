'use client'

import { useState } from 'react'
import type { Asset, GameState } from '../types'
import { REFLECTION_QUESTIONS, ROLE_REFLECTION_QUESTIONS, calculatePortfolioValue } from '../lib/gameEngine'

function ChevronDownIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
}
function ChevronUpIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
}

// Expandable learning hint box
function LernHinweis({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-primary-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-primary-50 text-left"
      >
        <span className="text-sm font-semibold text-primary-dark">{title}</span>
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {open && (
        <div className="px-4 py-3 text-sm text-text-secondary bg-white">
          {children}
        </div>
      )}
    </div>
  )
}

interface RoundEndScreenProps {
  state: GameState
  assets: Asset[]
  onReflectionSubmit: (answer: string) => void
  onNextRound: () => void
}

export default function RoundEndScreen({ state, assets, onReflectionSubmit, onNextRound }: RoundEndScreenProps) {
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Ab Runde 3 abwechselnd rollenspezifische Fragen einstreuen
  const isRoleQuestion = state.currentRound >= 3 && state.currentRound % 3 === 0
  const question = isRoleQuestion
    ? ROLE_REFLECTION_QUESTIONS[state.role]
    : REFLECTION_QUESTIONS[(state.currentRound - 1) % REFLECTION_QUESTIONS.length]

  const prevPrices = state.priceHistory[state.priceHistory.length - 2]?.prices ?? state.currentPrices
  const currentPortfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const prevPortfolioValue = calculatePortfolioValue(state.positions, prevPrices)
  const portfolioChange = currentPortfolioValue - prevPortfolioValue

  const isLastRound = state.currentRound >= state.totalRounds

  const handleSubmit = () => {
    onReflectionSubmit(answer)
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      {/* Event card */}
      {state.currentEvent && (
        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-primary-medium">
          <div className="text-xs font-semibold text-primary-medium uppercase tracking-wide mb-1">
            Marktereignis Runde {state.currentRound}
          </div>
          <h3 className="font-heading text-xl font-bold text-primary-dark mb-2">
            {state.currentEvent.title}
          </h3>
          <p className="text-text-secondary mb-4">{state.currentEvent.description}</p>
          <div className="bg-primary-dark/5 rounded-xl p-4 text-sm text-text-secondary mb-4">
            <strong className="text-primary-dark">Was bedeutet das?</strong>{' '}
            {state.currentEvent.explanation}
          </div>

          {/* Expandable learning hints (improvement 10) */}
          <div className="space-y-2">
            <LernHinweis title="Was sind Leitzinsen?">
              Der Leitzins ist der Zinssatz, zu dem sich Banken bei der Zentralbank (EZB) Geld leihen können. Steigt er, werden Kredite teurer – das belastet Unternehmen, die viel auf Pump finanzieren, besonders stark.
            </LernHinweis>
            <LernHinweis title="Warum reagieren Aktienmärkte auf Nachrichten?">
              Aktienkurse spiegeln die Erwartungen der Investorinnen und Investoren wider. Wenn eine Nachricht die zukünftigen Gewinne eines Unternehmens wahrscheinlicher oder unwahrscheinlicher macht, reagieren die Kurse sofort – oft noch bevor die eigentlichen Zahlen bekannt sind.
            </LernHinweis>
            <LernHinweis title="Was ist der Unterschied zwischen Sektor und Einzelaktie?">
              Ein Sektor umfasst viele Unternehmen der gleichen Branche (z. B. Technologie). Eine Einzelaktie ist ein Anteil an genau einem Unternehmen. Ereignisse können ganze Sektoren treffen – oder nur bestimmte Firmen darin.
            </LernHinweis>
          </div>
        </div>
      )}

      {/* Price changes table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-heading font-bold text-primary-dark">Kursentwicklung diese Runde</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-text-muted font-medium">Asset</th>
                <th className="text-right px-4 py-3 text-text-muted font-medium">Vorher</th>
                <th className="text-right px-4 py-3 text-text-muted font-medium">Nachher</th>
                <th className="text-right px-4 py-3 text-text-muted font-medium">Veränderung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {assets.map((asset) => {
                const prev = prevPrices[asset.id] ?? asset.price
                const curr = state.currentPrices[asset.id] ?? asset.price
                const pct = ((curr - prev) / prev) * 100
                const owned = state.positions.find((p) => p.assetId === asset.id)
                return (
                  <tr key={asset.id} className={owned ? 'bg-primary-50/30' : ''}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-text-primary flex items-center gap-1">
                        {asset.name}
                        {owned && <span className="text-xs bg-primary-100 text-primary-dark px-1.5 py-0.5 rounded font-normal">im Portfolio</span>}
                      </div>
                      <div className="text-xs text-text-muted">{asset.symbol}</div>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-text-secondary">{prev.toFixed(2)} €</td>
                    <td className="px-4 py-3 text-right font-mono font-semibold">{curr.toFixed(2)} €</td>
                    <td className={`px-4 py-3 text-right font-mono font-bold ${pct >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
                      {pct >= 0 ? '+' : ''}{pct.toFixed(1)}%
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio change */}
      <div className="bg-white rounded-2xl shadow-card p-5 flex items-center justify-between">
        <span className="text-text-secondary font-medium">Portfolio-Wertveränderung diese Runde</span>
        <span className={`text-xl font-bold ${portfolioChange >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
          {portfolioChange >= 0 ? '+' : ''}{portfolioChange.toFixed(2)} €
        </span>
      </div>

      {/* Reflection */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-xs font-semibold text-primary-medium uppercase tracking-wide">
            Reflexionsfrage
          </div>
          {isRoleQuestion && (
            <span className="text-xs bg-primary-dark text-white px-2 py-0.5 rounded-full">
              Rollenfrage
            </span>
          )}
        </div>
        <p className="font-semibold text-text-primary mb-3">{question}</p>
        {!submitted ? (
          <>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Deine Gedanken (optional) …"
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none"
            />
            <button
              onClick={handleSubmit}
              className="mt-3 text-sm text-primary-medium underline underline-offset-2 hover:text-primary-dark"
            >
              Antwort speichern
            </button>
          </>
        ) : (
          <div className="bg-gray-50 rounded-xl p-3 text-sm text-text-secondary italic">
            {answer.trim() || '(keine Antwort)'}
          </div>
        )}
      </div>

      {/* Next */}
      <div className="flex justify-center">
        <button
          onClick={onNextRound}
          className="bg-primary-dark text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary-medium transition-colors text-lg"
        >
          {isLastRound ? 'Zur Auswertung →' : 'Nächste Runde →'}
        </button>
      </div>
    </div>
  )
}
