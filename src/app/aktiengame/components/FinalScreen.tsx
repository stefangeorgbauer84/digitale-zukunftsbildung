'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Asset, GameState, PlayerRole } from '../types'
import {
  calculatePortfolioValue,
  calcDiversificationScore,
  calcRiskScore,
  calcReflectionScore,
  calcRoleMissionBonus,
  calcGesamtScore,
  calcAchievements,
  PLAYER_ROLES,
  roundToYear,
  START_YEAR,
} from '../lib/gameEngine'
import LehrpersonenAuswertung from './LehrpersonenAuswertung'

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

// Wealth curve over rounds
function WealthCurve({ wealthHistory, startCapital, totalRounds }: { wealthHistory: number[]; startCapital: number; totalRounds: number }) {
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
        <span>{START_YEAR}</span>
        <span>{START_YEAR + totalRounds - 1}</span>
      </div>
    </div>
  )
}

const GRADE_CONFIG: Record<string, { label: string; ring: string; text: string; bg: string }> = {
  A: { label: 'Ausgezeichnet', ring: 'ring-status-teal', text: 'text-status-teal', bg: 'bg-status-teal-light' },
  B: { label: 'Gut', ring: 'ring-blue-400', text: 'text-blue-600', bg: 'bg-blue-50' },
  C: { label: 'Befriedigend', ring: 'ring-status-orange', text: 'text-status-orange', bg: 'bg-status-orange-light' },
  D: { label: 'Genügend', ring: 'ring-orange-400', text: 'text-orange-600', bg: 'bg-orange-50' },
  E: { label: 'Nicht genügend', ring: 'ring-red-400', text: 'text-red-600', bg: 'bg-red-50' },
}

// Benchmark comparison
const BENCHMARKS = {
  performance: 12,
  diversifikation: 58,
  reflexion: 65,
}

function BenchmarkBar({ label, ownValue, benchmark }: { label: string; ownValue: number; benchmark: number }) {
  const isBetter = ownValue >= benchmark
  const maxVal = Math.max(ownValue, benchmark, 1)
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-text-muted">
        <span>{label}</span>
        <span className={isBetter ? 'text-status-teal font-semibold' : 'text-status-orange font-semibold'}>
          Du: {ownValue.toFixed(0)} {isBetter ? '↑' : '↓'} Ø: {benchmark}
        </span>
      </div>
      <div className="relative h-4 bg-gray-100 rounded-full overflow-hidden">
        {/* Benchmark line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gray-400 z-10"
          style={{ left: `${(benchmark / 100) * 100}%` }}
        />
        {/* Own bar */}
        <div
          className={`h-full rounded-full transition-all ${isBetter ? 'bg-status-teal' : 'bg-status-orange'}`}
          style={{ width: `${Math.min(100, (ownValue / 100) * 100)}%` }}
        />
      </div>
      <div className="flex justify-between text-xs text-text-muted">
        <span>0</span>
        <span>100</span>
      </div>
    </div>
  )
}

export default function FinalScreen({ state, assets, onRestart }: FinalScreenProps) {
  const [openReflections, setOpenReflections] = useState(false)
  const [copied, setCopied] = useState(false)
  const [showLehrpersonen, setShowLehrpersonen] = useState(false)

  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performance = ((totalWealth - state.startCapital) / state.startCapital) * 100

  const diversiScore = calcDiversificationScore(state.positions, assets, state.currentPrices)
  const riskScore = calcRiskScore(state.positions, assets, state.currentPrices)
  const reflectionScore = calcReflectionScore(state.reflections, state.totalRounds)
  const { fulfilled: missionFulfilled, reason: missionReason } = calcRoleMissionBonus(state, assets)
  const roleDef = PLAYER_ROLES[state.role]
  const { score: gesamtScore, grade, breakdown } = calcGesamtScore(state, assets)
  const gradeCfg = GRADE_CONFIG[grade]

  const achievements = calcAchievements(state, assets)
  const earnedAchievements = achievements.filter((a) => a.earned)

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

  // Improved copy text (Feature 10)
  const avgConf = state.avgConfidence ?? 0
  const achievementNames = earnedAchievements.map((a) => `${a.emoji} ${a.name}`).join(', ') || 'keine'
  const copyText = [
    '🎮 Skills-UP! Aktiengame – Mein Ergebnis',
    `📅 Zeitraum: ${START_YEAR}–${START_YEAR + state.totalRounds - 1} (${state.totalRounds} Jahre)`,
    `👤 Spieler: ${state.playerName} · Rolle: ${roleDef.name}`,
    `💰 Startkapital: 10.000 € → Endvermögen: ${totalWealth.toFixed(0)} €`,
    `📈 Performance: ${performance >= 0 ? '+' : ''}${performance.toFixed(1)}% · Note: ${grade}`,
    `🏅 Achievements: ${achievementNames}`,
    '🌐 digitale-zukunftsbildung.vercel.app/aktiengame',
  ].join('\n')

  const handleCopy = () => {
    navigator.clipboard.writeText(copyText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  // Portfolio allocation bars
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

  // Other roles for role switch section (Feature 9)
  const otherRoles = (Object.keys(PLAYER_ROLES) as PlayerRole[]).filter((r) => r !== state.role).slice(0, 3)

  return (
    <div className="space-y-6">
      {/* Result hero */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        {/* Header mit Logo + Capybara */}
        <div className="bg-primary-dark px-6 pt-5 pb-0 flex items-end justify-between">
          <div className="pb-5">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/fotos/Logo.png" alt="Skills-UP!" width={28} height={28} className="rounded-md" />
              <span className="text-xs font-bold uppercase tracking-widest text-white/50">Skills-UP! Investment Spiel</span>
            </div>
            <div className="text-white/70 text-sm">{START_YEAR}–{START_YEAR + state.totalRounds - 1} · {state.playerName}</div>
          </div>
          <Image
            src="/capybara-mascot.png"
            alt="Capy"
            width={80}
            height={80}
            className="object-contain flex-shrink-0"
            style={{ marginBottom: '-2px' }}
          />
        </div>
        {/* Zahlen */}
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-4 flex-wrap mb-4">
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
      </div>

      {/* Gesamtscore + Schulnote */}
      <div className={`bg-white rounded-2xl shadow-card p-5 flex items-center gap-5 ring-2 ${gradeCfg.ring}`}>
        <div className={`w-16 h-16 rounded-2xl ${gradeCfg.bg} flex flex-col items-center justify-center flex-shrink-0`}>
          <span className={`text-3xl font-bold ${gradeCfg.text}`}>{grade}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className={`text-2xl font-bold ${gradeCfg.text}`}>{gesamtScore} / 100</span>
            <span className="text-sm text-text-muted">Gesamtpunktzahl</span>
          </div>
          <div className={`text-sm font-semibold ${gradeCfg.text}`}>{gradeCfg.label}</div>
          <div className="text-xs text-text-muted mt-1">
            Performance 40 % · Diversifikation 20 % · Reflexion 20 % · Rolle 15 % · Risiko 5 %
          </div>
        </div>
        <button
          onClick={() => setShowLehrpersonen(true)}
          className="flex-shrink-0 text-xs border border-primary-light text-primary-dark hover:bg-primary-50 px-3 py-2 rounded-lg transition-colors font-medium"
        >
          Lehrpersonen-Auswertung
        </button>
      </div>

      {/* Achievements (Feature 2) */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <div className="text-sm font-semibold text-text-primary mb-3">
          Achievements — {earnedAchievements.length}/{achievements.length} freigeschaltet
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className={`rounded-xl p-3 border transition-all ${
                ach.earned
                  ? 'border-primary-medium bg-primary-50'
                  : 'border-gray-100 bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-2xl mb-1">{ach.emoji}</div>
              <div className={`text-xs font-bold ${ach.earned ? 'text-primary-dark' : 'text-text-muted'}`}>
                {ach.name}
              </div>
              <div className="text-xs text-text-muted mt-0.5">{ach.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Benchmark Vergleich (Feature 5) */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <div className="text-sm font-semibold text-text-primary mb-4">Vergleich mit typischen Spielern</div>
        <div className="space-y-4">
          <BenchmarkBar
            label="Performance"
            ownValue={Math.max(0, Math.min(100, performance + 20))}
            benchmark={BENCHMARKS.performance + 20}
          />
          <BenchmarkBar
            label="Diversifikation"
            ownValue={diversiScore}
            benchmark={BENCHMARKS.diversifikation}
          />
          <BenchmarkBar
            label="Reflexion"
            ownValue={reflectionScore}
            benchmark={BENCHMARKS.reflexion}
          />
        </div>
        <p className="text-xs text-text-muted mt-3">Ø-Werte basieren auf aggregierten Spielerdaten.</p>
      </div>

      {/* Konfidenz (Feature 6) */}
      {avgConf > 0 && (
        <div className="bg-white rounded-2xl shadow-card p-5 flex items-center gap-4">
          <div className="text-3xl">
            {avgConf >= 2.5 ? '💪' : avgConf >= 1.5 ? '🙂' : '😬'}
          </div>
          <div>
            <div className="text-sm font-semibold text-text-primary">Durchschnittliche Entscheidungssicherheit</div>
            <div className="text-xs text-text-muted">
              Ø {avgConf.toFixed(1)} / 3 · {avgConf >= 2.5 ? 'Du hast sehr sicher entschieden.' : avgConf >= 1.5 ? 'Mittlere Entscheidungssicherheit.' : 'Du warst oft unsicher – das ist normal beim Investieren!'}
            </div>
          </div>
        </div>
      )}

      {/* Wealth curve */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <WealthCurve wealthHistory={state.wealthHistory} startCapital={state.startCapital} totalRounds={state.totalRounds} />
      </div>

      {/* Ampel */}
      <div className="bg-white rounded-2xl shadow-card p-5 flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full ${ampelColor} flex-shrink-0`} />
        <div>
          <div className="font-semibold text-text-primary">{ampelLabel}</div>
          <div className="text-sm text-text-muted">Diversifikations-Score: {diversiScore}/100</div>
        </div>
      </div>

      {/* Rollen-Auswertung */}
      <div className={`rounded-2xl shadow-card p-5 border-2 ${roleDef.bgClass} ${roleDef.borderClass}`}>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${roleDef.colorClass}`}>
              Deine Rolle: {roleDef.name}
            </div>
            <p className="text-sm font-semibold text-text-primary mb-1">{roleDef.mission}</p>
            <p className={`text-sm ${missionFulfilled ? 'text-status-teal' : 'text-text-muted'}`}>
              {missionReason}
            </p>
          </div>
          <div className={`flex-shrink-0 text-center px-3 py-2 rounded-xl ${missionFulfilled ? 'bg-status-teal text-white' : 'bg-white/60 text-text-muted'}`}>
            <div className="text-xl font-bold">{missionFulfilled ? '+15' : '0'}</div>
            <div className="text-xs">Bonus</div>
          </div>
        </div>
      </div>

      {/* Score cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <ScoreCard label="Diversifikation" score={diversiScore} description="Wie gut war dein Portfolio verteilt?" />
        <ScoreCard label="Risikobewusstsein" score={100 - riskScore} description="Niedrigerer Risiko-Score = bewussterer Umgang" />
        <ScoreCard label="Reflexion" score={reflectionScore} description="Wie oft hast du deine Entscheidungen hinterfragt?" />
      </div>

      {/* Portfolio allocation bars */}
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
                  <div className="text-xs text-text-muted mb-0.5">Jahr {roundToYear(r.round)}</div>
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

      {/* Andere Rolle ausprobieren (Feature 9) */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <div className="text-sm font-semibold text-text-primary mb-3">Andere Rolle ausprobieren</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {otherRoles.map((roleId) => {
            const role = PLAYER_ROLES[roleId]
            return (
              <div
                key={roleId}
                className={`rounded-xl border-2 p-4 ${role.bgClass} ${role.borderClass}`}
              >
                <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${role.colorClass}`}>
                  {role.name}
                </div>
                <p className="text-xs text-text-muted mb-3">{role.tagline}</p>
                <button
                  onClick={onRestart}
                  className={`w-full text-xs font-semibold py-2 rounded-lg border ${role.borderClass} ${role.colorClass} hover:opacity-80 transition-opacity bg-white/60`}
                >
                  Neu starten als {role.name}
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* Ergebnis kopieren (Feature 10) */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <div className="text-sm font-semibold text-text-primary mb-2">Ergebnis kopieren</div>
        <div className="bg-gray-50 rounded-xl px-4 py-3 text-sm text-text-secondary mb-3 whitespace-pre-line font-mono text-xs">
          {copyText}
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
          {copied ? 'Kopiert!' : 'Ergebnis kopieren'}
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

      {/* Lehrpersonen-Modal */}
      {showLehrpersonen && (
        <LehrpersonenAuswertung
          state={state}
          assets={assets}
          onClose={() => setShowLehrpersonen(false)}
        />
      )}
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
