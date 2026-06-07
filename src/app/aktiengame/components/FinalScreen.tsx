'use client'

import { useState } from 'react'
import type { Asset, GameState } from '../types'
import {
  calculatePortfolioValue,
  calcDiversificationScore,
  calcRiskScore,
  calcReflectionScore,
} from '../lib/gameEngine'

function ChevronDownIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
}
function ChevronUpIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
}
function RotateCcwIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-5"/></svg>
}
function CopyIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
}
function CheckIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
}

interface FinalScreenProps {
  state: GameState
  assets: Asset[]
  onRestart: () => void
}

// Wealth curve over rounds (improvement 9)
function WealthCurve({ wealthHistory, startCapital }: { wealthHistory: number[]; startCapital: number }) {
  if (wealthHistory.length < 2) return null
  const min = Math.min(...wealthHistory, startCapital) * 0.98
  const max = Math.max(...wealthHistory, startCapital) * 1.02
  const range = max - min || 1
  const HEIGHT = 80
  const WIDTH = 100

  const points = wealthHistory.map((w, i) => {
    const x = (i / (wealthHistory.length - 1)) * WIDTH
    const y = HEIGHT - ((w - min) / range) * HEIGHT
    return `${x},${y}`
  })

  const isPositive = wealthHistory[wealthHistory.length - 1] >= startCapital

  return (
    <div className="bg-gray-50 rounded-xl p-4">
      <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Vermögensverlauf</div>
      <svg viewBox={`0 0 ${WIDTH} ${HEIGHT}`} className="w-full h-20" preserveAspectRatio="none">
        {/* Baseline at startCapital */}
        <line
          x1="0"
          y1={HEIGHT - ((startCapital - min) / range) * HEIGHT}
          x2={WIDTH}
          y2={HEIGHT - ((startCapital - min) / range) * HEIGHT}
          stroke="#E9ECEF"
          strokeWidth="0.5"
          strokeDasharray="2,2"
        />
        <polyline
          points={points.join(' ')}
          fill="none"
          stroke={isPositive ? '#2A8A76' : '#ef4444'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {wealthHistory.map((w, i) => {
          const x = (i / (wealthHistory.length - 1)) * WIDTH
          const y = HEIGHT - ((w - min) / range) * HEIGHT
          return <circle key={i} cx={x} cy={y} r="1.5" fill={isPositive ? '#2A8A76' : '#ef4444'} />
        })}
      </svg>
      <div className="flex justify-between text-xs text-text-muted mt-1">
        <span>Start</span>
        <span>Ende</span>
      </div>
    </div>
  )
}

export default function FinalScreen({ state, assets, onRestart }: FinalScreenProps) {
  const [openReflections, setOpenReflections] = useState(false)
  const [copied, setCopied] = useState(false)

  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performance = ((totalWealth - state.startCapital) / state.startCapital) * 100

  const diversiScore = calcDiversificationScore(state.positions, assets, state.currentPrices)
  const riskScore = calcRiskScore(state.positions, assets, state.currentPrices)
  const reflectionScore = calcReflectionScore(state.reflections, state.totalRounds)

  // Best/worst position
  const positionsWithGain = state.positions.map((pos) => {
    const currentValue = pos.quantity * (state.currentPrices[pos.assetId] ?? 0)
    const costBasis = pos.quantity * pos.avgBuyPrice
    const gain = currentValue - costBasis
    const gainPct = costBasis > 0 ? (gain / costBasis) * 100 : 0
    const asset = assets.find((a) => a.id === pos.assetId)
    return { pos, gain, gainPct, asset }
  })

  const bestPos = [...positionsWithGain].sort((a, b) => b.gainPct - a.gainPct)[0]

  const ampelColor = diversiScore > 70 ? 'bg-status-teal' : diversiScore >= 40 ? 'bg-status-orange' : 'bg-red-500'
  const ampelLabel = diversiScore > 70 ? 'Gut diversifiziert' : diversiScore >= 40 ? 'Mäßig diversifiziert' : 'Kaum diversifiziert'

  const shareText = `Beim Aktiengame der Digitalen Zukunftsbildung habe ich ${performance >= 0 ? '+' : ''}${performance.toFixed(1)}% erreicht! 📈 digitale-zukunftsbildung.eu/aktiengame`

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // Portfolio allocation bars (improvement 8)
  const totalPortValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const allocations = assets.map((asset) => {
    const pos = state.positions.find((p) => p.assetId === asset.id)
    if (!pos) return null
    const value = pos.quantity * (state.currentPrices[asset.id] ?? asset.price)
    const pct = totalPortValue > 0 ? (value / (totalPortValue + state.cash)) * 100 : 0
    return { asset, value, pct }
  }).filter(Boolean) as { asset: Asset; value: number; pct: number }[]

  const cashPct = totalPortValue > 0 || state.cash > 0
    ? (state.cash / (totalPortValue + state.cash)) * 100
    : 100

  return (
    <div className="space-y-6">
      {/* Result hero */}
      <div className="bg-white rounded-2xl shadow-card p-8 text-center">
        <div className="text-sm font-semibold text-text-muted mb-1">Spielergebnis für {state.playerName}</div>
        <div className="flex items-center justify-center gap-4 flex-wrap my-4">
          <div className="text-center">
            <div className="text-xs text-text-muted">Startkapital</div>
            <div className="text-2xl font-bold text-text-secondary">{state.startCapital.toLocaleString('de-AT')} €</div>
          </div>
          <div className="text-3xl text-text-muted">→</div>
          <div className="text-center">
            <div className="text-xs text-text-muted">Endvermögen</div>
            <div className="text-2xl font-bold text-primary-dark">{totalWealth.toFixed(0)} €</div>
          </div>
        </div>
        <div className={`text-5xl font-bold ${performance >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
          {performance >= 0 ? '+' : ''}{performance.toFixed(1)} %
        </div>
      </div>

      {/* Wealth curve (improvement 9) */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <WealthCurve wealthHistory={state.wealthHistory} startCapital={state.startCapital} />
      </div>

      {/* Ampel */}
      <div className="bg-white rounded-2xl shadow-card p-5 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full ${ampelColor} flex-shrink-0`} />
        <div>
          <div className="font-semibold text-text-primary">{ampelLabel}</div>
          <div className="text-sm text-text-muted">Diversifikations-Score: {diversiScore}/100</div>
        </div>
      </div>

      {/* Score cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ScoreCard label="Diversifikation" score={diversiScore} description="Wie gut war dein Portfolio verteilt?" />
        <ScoreCard label="Risikobewusstsein" score={100 - riskScore} description="Niedrigerer Risiko-Score = bewussterer Umgang" />
        <ScoreCard label="Reflexion" score={reflectionScore} description="Wie oft hast du deine Entscheidungen hinterfragt?" />
      </div>

      {/* Portfolio allocation bars (improvement 8) */}
      {allocations.length > 0 && (
        <div className="bg-white rounded-2xl shadow-card p-5">
          <div className="text-sm font-semibold text-text-primary mb-3">Portfolio-Verteilung am Spielende</div>
          <div className="space-y-2">
            {allocations.map(({ asset, pct }) => (
              <div key={asset.id}>
                <div className="flex justify-between text-xs text-text-muted mb-1">
                  <span>{asset.name}</span>
                  <span>{pct.toFixed(1)} %</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-primary-medium transition-all"
                    style={{ width: `${Math.min(100, pct)}%` }}
                  />
                </div>
              </div>
            ))}
            <div>
              <div className="flex justify-between text-xs text-text-muted mb-1">
                <span>Cash</span>
                <span>{cashPct.toFixed(1)} %</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div
                  className="h-2 rounded-full bg-gray-400 transition-all"
                  style={{ width: `${Math.min(100, cashPct)}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Best position */}
      {bestPos && (
        <div className="bg-white rounded-2xl shadow-card p-5">
          <div className="text-xs font-semibold text-primary-medium uppercase tracking-wide mb-1">Beste Position</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-semibold text-text-primary">{bestPos.asset?.name}</div>
              <div className="text-sm text-text-muted">{bestPos.pos.quantity} Anteile</div>
            </div>
            <div className={`text-xl font-bold ${bestPos.gain >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
              {bestPos.gain >= 0 ? '+' : ''}{bestPos.gainPct.toFixed(1)}%
            </div>
          </div>
        </div>
      )}

      {/* Reflections accordion */}
      {state.reflections.length > 0 && (
        <div className="bg-white rounded-2xl shadow-card overflow-hidden">
          <button
            onClick={() => setOpenReflections(!openReflections)}
            className="w-full flex items-center justify-between p-5 text-left"
          >
            <span className="font-semibold text-text-primary">Deine Reflexionsantworten</span>
            {openReflections ? <ChevronUpIcon /> : <ChevronDownIcon />}
          </button>
          {openReflections && (
            <div className="px-5 pb-5 space-y-4 border-t border-gray-100">
              {state.reflections.map((r, i) => (
                <div key={i}>
                  <div className="text-xs text-text-muted mb-0.5">Runde {r.round}</div>
                  <div className="text-sm font-medium text-text-primary mb-1">{r.question}</div>
                  <div className="text-sm text-text-secondary italic bg-gray-50 rounded-lg px-3 py-2">
                    {r.answer.trim() || '(keine Antwort)'}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Share with real copy button (improvement 3) */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <div className="text-sm font-semibold text-text-primary mb-2">Ergebnis teilen</div>
        <div className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-text-secondary mb-3">
          {shareText}
        </div>
        <button
          onClick={handleCopy}
          className={`flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${
            copied
              ? 'bg-status-teal-light text-status-teal'
              : 'bg-gray-100 text-text-secondary hover:bg-gray-200'
          }`}
        >
          {copied ? <CheckIcon /> : <CopyIcon />}
          {copied ? 'Kopiert!' : 'Text kopieren'}
        </button>
      </div>

      {/* Restart */}
      <div className="flex justify-center">
        <button
          onClick={onRestart}
          className="flex items-center gap-2 bg-primary-dark text-white font-semibold px-8 py-3 rounded-xl hover:bg-primary-medium transition-colors"
        >
          <RotateCcwIcon />
          Nochmal spielen
        </button>
      </div>
    </div>
  )
}

function ScoreCard({ label, score, description }: { label: string; score: number; description: string }) {
  const color = score > 70 ? 'bg-status-teal' : score >= 40 ? 'bg-status-orange' : 'bg-red-400'
  return (
    <div className="bg-white rounded-2xl shadow-card p-5">
      <div className="flex justify-between items-baseline mb-2">
        <span className="font-semibold text-text-primary text-sm">{label}</span>
        <span className="font-bold text-lg text-primary-dark">{score}</span>
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2 mb-2">
        <div className={`h-2 rounded-full ${color} transition-all`} style={{ width: `${score}%` }} />
      </div>
      <p className="text-xs text-text-muted">{description}</p>
    </div>
  )
}
