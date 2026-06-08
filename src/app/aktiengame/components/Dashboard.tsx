'use client'

import { useState, useCallback } from 'react'
import type { Asset, GameState } from '../types'

function TrendingUpIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
}
function ZapIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
}
function TrendingDownIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>
}
function DollarSignIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
}
function BarChart2Icon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>
}
function InfoIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
}

import Image from 'next/image'
import { calculatePortfolioValue, roundToYear, START_YEAR } from '../lib/gameEngine'
import TradeModal from './TradeModal'
import AssetDetailPanel from './AssetDetailPanel'
import MissionBanner from './MissionBanner'
import PortfolioAnalysis from './PortfolioAnalysis'
import GlossarModal, { GlossarButton } from './GlossarModal'

interface DashboardProps {
  state: GameState
  assets: Asset[]
  onBuy: (assetId: string, qty: number, confidence?: number) => void
  onSell: (assetId: string, qty: number, confidence?: number) => void
  onEndRound: () => void
  onSetTargetPrice: (assetId: string, price: number) => void
}

const RISK_COLORS: Record<string, string> = {
  niedrig: 'bg-status-teal-light text-status-teal',
  mittel: 'bg-status-orange-light text-status-orange',
  hoch: 'bg-red-50 text-red-600',
}

// ---------------------------------------------------------------------------
// News-Ticker headlines per event id
// ---------------------------------------------------------------------------
const EVENT_HEADLINES: Record<string, string[]> = {
  zinsen: [
    'EZB hebt Leitzins um 0,5 % an – Technologiewerte unter Druck',
    'Steigende Zinsen belasten wachstumsorientierte Unternehmen',
    'Anleihen gewinnen an Attraktivität gegenüber Aktien',
    'Kreditkosten steigen: Investitionsbereitschaft sinkt',
    'Bankensektor profitiert von höheren Zinsspannen',
  ],
  'eu-energie': [
    'EU-Kommission beschließt 200-Mrd.-Paket für erneuerbare Energien',
    'GreenEnergy-Aktien nach Förderprogramm im Aufwind',
    'Subventionen für Solar und Wind treiben Sektor nach oben',
    'Nachhaltige Investments mit Rückenwind aus Brüssel',
    'Mobilitätswende beschleunigt sich durch EU-Förderung',
  ],
  lieferketten: [
    'Lieferengpässe lösen sich schneller als erwartet auf',
    'Technologiebranche profitiert von stabilisierten Lieferketten',
    'Produktionskosten sinken – Unternehmen optimistischer',
    'Automobilsektor meldet wieder volle Produktionskapazitäten',
    'Österreichische Industrie meldet Auftragsplus',
  ],
  konjunktur: [
    'Wirtschaftsforscher senken BIP-Prognosen für 2027',
    'Konjunktursorgen belasten zyklische Branchen',
    'Defensive Sektoren zeigen sich krisenresistent',
    'Rückgang der Konsumausgaben trübt Unternehmensaussichten',
    'Analysten empfehlen Portfolioabsicherung bei Abschwung',
  ],
  gesundheit: [
    'Neue Studie bestätigt Wirksamkeit digitaler Diagnostik',
    'HealthCare-Sektor zeigt Stärke in unsicherem Markt',
    'Telemedizin-Nachfrage steigt – Branche wächst',
    'Medizintechnik gilt als defensiver Hafen in volatilen Zeiten',
    'Investoren setzen auf defensive Qualitätswerte im Gesundheitssektor',
  ],
  inflation: [
    'Inflation übersteigt Erwartungen – Kaufkraft sinkt',
    'Verbraucherpreise steigen stärker als prognostiziert',
    'Anleihen unter Druck durch höhere Inflationserwartungen',
    'Sachwerte als Inflationsschutz rücken in den Fokus',
    'ETFs als Stabilitätsanker in inflationärem Umfeld',
  ],
  digitalisierung: [
    'Regierungen investieren Milliarden in digitale Infrastruktur',
    'Technologiebranche meldet Rekordaufträge aus öffentlicher Hand',
    'Digitalisierungsschub befeuert Wachstumswerte',
    'Cloud- und KI-Unternehmen profitieren von staatlichen Programmen',
    'TechPioneer ETF auf Jahreshoch nach Regierungsankündigung',
  ],
  klimaregulierung: [
    'Neue CO₂-Regulierung trifft emissionsintensive Industrien hart',
    'Nachhaltige Unternehmen profitieren von verschärften Klimaregeln',
    'GreenEnergy Europe und Austria ETF mit Kursgewinnen',
    'Traditionelle Energiekonzerne müssen hohe Strafen fürchten',
    'ESG-Kriterien gewinnen als Investitionsentscheidung an Gewicht',
  ],
}

// ---------------------------------------------------------------------------
// News Ticker
// ---------------------------------------------------------------------------
function NewsTicker({ event }: { event: GameState['currentEvent'] }) {
  if (!event) return null
  const headlines = EVENT_HEADLINES[event.id] ?? [`Marktereignis: ${event.title}`]
  const text = headlines.join('   ·   ') + '   ·   '

  return (
    <div className="bg-primary-dark text-white text-xs overflow-hidden py-2 px-0">
      <div
        className="whitespace-nowrap"
        style={{
          display: 'inline-block',
          animation: 'ticker-scroll 28s linear infinite',
          paddingLeft: '100%',
        }}
      >
        📰 {text}📰 {text}
      </div>
      <style>{`
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

// ---------------------------------------------------------------------------
// Portfolio Donut (SVG stroke-dasharray)
// ---------------------------------------------------------------------------
const DONUT_COLORS = [
  '#4a2d8a', '#6b4db0', '#2A8A76', '#D87228', '#3b82f6', '#ef4444', '#6b7280',
]

function PortfolioDonut({ state, assets }: { state: GameState; assets: Asset[] }) {
  const totalWealth = state.cash + calculatePortfolioValue(state.positions, state.currentPrices)
  if (totalWealth === 0) return null

  // Group by sector
  const sectorMap: Record<string, number> = {}
  for (const pos of state.positions) {
    const asset = assets.find((a) => a.id === pos.assetId)
    if (!asset) continue
    const val = pos.quantity * (state.currentPrices[pos.assetId] ?? 0)
    sectorMap[asset.sector] = (sectorMap[asset.sector] ?? 0) + val
  }
  sectorMap['Cash'] = state.cash

  const entries = Object.entries(sectorMap).filter(([, v]) => v > 0)
  const total = entries.reduce((s, [, v]) => s + v, 0)

  const R = 40
  const circumference = 2 * Math.PI * R
  let offset = 0
  const segments = entries.map(([label, value], i) => {
    const pct = value / total
    const dash = pct * circumference
    const gap = circumference - dash
    const seg = { label, pct, dash, gap, offset, color: DONUT_COLORS[i % DONUT_COLORS.length] }
    offset += dash
    return seg
  })

  return (
    <div className="bg-white rounded-2xl shadow-card p-5">
      <div className="text-sm font-semibold text-text-primary mb-4">Portfolio-Zusammensetzung</div>
      <div className="flex items-center gap-6 flex-wrap">
        <svg width="120" height="120" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r={R} fill="none" stroke="#f3f4f6" strokeWidth="18" />
          {segments.map((seg, i) => (
            <circle
              key={i}
              cx="50"
              cy="50"
              r={R}
              fill="none"
              stroke={seg.color}
              strokeWidth="18"
              strokeDasharray={`${seg.dash} ${seg.gap}`}
              strokeDashoffset={-seg.offset}
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            />
          ))}
        </svg>
        <div className="flex flex-col gap-1.5">
          {segments.map((seg, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <div className="w-3 h-3 rounded-sm flex-shrink-0" style={{ backgroundColor: seg.color }} />
              <span className="text-text-secondary">{seg.label}</span>
              <span className="font-semibold text-text-primary ml-auto pl-2">{(seg.pct * 100).toFixed(1)}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Mini sparkline from price history for one asset (CSS bars)
function Sparkline({ assetId, priceHistory, initialPrice }: { assetId: string; priceHistory: GameState['priceHistory']; initialPrice: number }) {
  const points = [initialPrice, ...priceHistory.map((h) => h.prices[assetId] ?? initialPrice)]
  if (points.length < 2) return <div className="w-16 h-6" />
  const min = Math.min(...points)
  const max = Math.max(...points)
  const range = max - min || 1
  const barWidth = Math.max(2, Math.floor(56 / points.length) - 1)
  return (
    <div className="flex items-end gap-px w-14 h-6">
      {points.map((p, i) => {
        const height = Math.max(2, Math.round(((p - min) / range) * 20))
        const isUp = i > 0 && p >= points[i - 1]
        return (
          <div
            key={i}
            style={{ height: `${height}px`, width: `${barWidth}px` }}
            className={`rounded-sm flex-shrink-0 ${isUp ? 'bg-status-teal' : 'bg-red-400'}`}
          />
        )
      })}
    </div>
  )
}

// Quick-Invest strategies
interface QuickStrategy {
  id: string
  label: string
  emoji: string
  description: string
  color: string
  border: string
  selectAssets: (assets: Asset[]) => Asset[]
}

const QUICK_STRATEGIES: QuickStrategy[] = [
  {
    id: 'sicher',
    label: 'Sicher & Stabil',
    emoji: '🛡️',
    description: 'Niedrig-Risiko Assets',
    color: 'text-status-teal',
    border: 'border-status-teal/30 hover:border-status-teal',
    selectAssets: (assets) => assets.filter((a) => a.risk === 'niedrig'),
  },
  {
    id: 'tech',
    label: 'Technologie',
    emoji: '💻',
    description: 'Tech-Sektor',
    color: 'text-blue-600',
    border: 'border-blue-300/40 hover:border-blue-400',
    selectAssets: (assets) => assets.filter((a) => a.sector === 'Technologie'),
  },
  {
    id: 'nachhaltig',
    label: 'Nachhaltig',
    emoji: '🌱',
    description: 'ESG-konforme Anlagen',
    color: 'text-green-600',
    border: 'border-green-300/40 hover:border-green-500',
    selectAssets: (assets) => assets.filter((a) => a.sustainable),
  },
  {
    id: 'etf',
    label: 'Nur ETFs',
    emoji: '📊',
    description: 'Breit gestreut',
    color: 'text-status-orange',
    border: 'border-status-orange/30 hover:border-status-orange',
    selectAssets: (assets) => assets.filter((a) => a.type === 'ETF'),
  },
  {
    id: 'wachstum',
    label: 'Wachstum',
    emoji: '🚀',
    description: 'Hohe Chance, hohes Risiko',
    color: 'text-red-500',
    border: 'border-red-300/40 hover:border-red-400',
    selectAssets: (assets) => assets.filter((a) => a.risk === 'hoch'),
  },
  {
    id: 'alles',
    label: 'Alles je 1',
    emoji: '🎯',
    description: 'Maximal diversifiziert',
    color: 'text-primary-dark',
    border: 'border-primary-light/30 hover:border-primary-medium',
    selectAssets: (assets) => assets,
  },
]

function QuickInvestBar({
  assets,
  cash,
  currentPrices,
  onBuyMultiple,
}: {
  assets: Asset[]
  cash: number
  currentPrices: Record<string, number>
  onBuyMultiple: (buys: { assetId: string; qty: number }[]) => void
}) {
  const [feedback, setFeedback] = useState<string | null>(null)

  const handleStrategy = (strategy: QuickStrategy) => {
    const targets = strategy.selectAssets(assets)
    const buys: { assetId: string; qty: number }[] = []
    let remaining = cash

    for (const asset of targets) {
      const price = currentPrices[asset.id] ?? asset.price
      if (remaining >= price) {
        buys.push({ assetId: asset.id, qty: 1 })
        remaining -= price
      }
    }

    if (buys.length === 0) {
      setFeedback('Nicht genug Cash für diese Strategie.')
      setTimeout(() => setFeedback(null), 2500)
      return
    }

    onBuyMultiple(buys)
    const names = buys.map((b) => assets.find((a) => a.id === b.assetId)?.symbol ?? b.assetId).join(', ')
    setFeedback(`Gekauft: ${names}`)
    setTimeout(() => setFeedback(null), 2500)
  }

  return (
    <div className="bg-white rounded-2xl shadow-card p-4">
      <div className="flex items-center gap-2 mb-3">
        <span className="text-primary-dark"><ZapIcon /></span>
        <span className="text-sm font-semibold text-text-primary">Schnell investieren</span>
        <span className="text-xs text-text-muted ml-1">— je 1 Anteil pro Asset</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {QUICK_STRATEGIES.map((s) => {
          const targets = s.selectAssets(assets)
          const totalCost = targets.reduce((sum, a) => sum + (currentPrices[a.id] ?? a.price), 0)
          const canAfford = cash >= Math.min(...targets.map((a) => currentPrices[a.id] ?? a.price))
          return (
            <button
              key={s.id}
              onClick={() => handleStrategy(s)}
              disabled={!canAfford || targets.length === 0}
              title={`${s.description} · ca. ${totalCost.toFixed(0)} € gesamt`}
              className={`flex items-center gap-1.5 border rounded-xl px-3 py-2 text-xs font-semibold transition-all
                ${canAfford ? `${s.border} ${s.color} bg-white hover:shadow-sm` : 'border-gray-100 text-text-muted bg-gray-50 cursor-not-allowed'}`}
            >
              <span>{s.emoji}</span>
              <span>{s.label}</span>
              <span className="font-normal opacity-60">~{totalCost.toFixed(0)} €</span>
            </button>
          )
        })}
      </div>
      {feedback && (
        <div className="mt-2 text-xs text-status-teal font-medium animate-pulse">{feedback}</div>
      )}
    </div>
  )
}

export default function Dashboard({ state, assets, onBuy, onSell, onEndRound, onSetTargetPrice }: DashboardProps) {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [detailAsset, setDetailAsset] = useState<Asset | null>(null)
  const [activeTab, setActiveTab] = useState<'markt' | 'verlauf'>('markt')
  const [flashAssetId, setFlashAssetId] = useState<string | null>(null)
  const [showEndWarning, setShowEndWarning] = useState(false)
  const [showGlossar, setShowGlossar] = useState(false)

  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performance = ((totalWealth - state.startCapital) / state.startCapital) * 100
  const progressPct = ((state.currentRound - 1) / state.totalRounds) * 100

  const thisRoundBuys = state.transactions.filter((t) => t.round === state.currentRound && t.type === 'buy')

  const handleBuyWithFlash = useCallback((assetId: string, qty: number, confidence = 0) => {
    onBuy(assetId, qty, confidence)
    setFlashAssetId(assetId)
    setTimeout(() => setFlashAssetId(null), 600)
  }, [onBuy])

  const handleSellWithFlash = useCallback((assetId: string, qty: number, confidence = 0) => {
    onSell(assetId, qty, confidence)
    setFlashAssetId(assetId)
    setTimeout(() => setFlashAssetId(null), 600)
  }, [onSell])

  const handleBuyMultiple = useCallback((buys: { assetId: string; qty: number }[]) => {
    for (const { assetId, qty } of buys) {
      onBuy(assetId, qty)
    }
    if (buys.length > 0) {
      setFlashAssetId(buys[buys.length - 1].assetId)
      setTimeout(() => setFlashAssetId(null), 800)
    }
  }, [onBuy])

  const handleEndRoundClick = () => {
    if (state.cash > state.startCapital * 0.5 && thisRoundBuys.length === 0) {
      setShowEndWarning(true)
    } else {
      onEndRound()
    }
  }

  const targetPrices = state.targetPrices ?? {}

  return (
    <div className="space-y-6">
      {/* Mission Banner */}
      <MissionBanner state={state} assets={assets} />

      {/* Round indicator */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="flex items-center justify-between p-4 pb-3">
          <div className="flex items-center gap-2.5">
            <Image src="/fotos/Logo.png" alt="Skills-UP!" width={28} height={28} className="rounded-md flex-shrink-0" />
            <span className="text-sm font-semibold text-text-secondary">
              Jahr {roundToYear(state.currentRound)}
              <span className="ml-2 text-xs font-normal text-text-muted">
                · {state.currentRound}/{state.totalRounds} · {START_YEAR}–{START_YEAR + state.totalRounds - 1}
              </span>
              <span className="ml-2 text-xs font-normal text-text-muted capitalize">· {state.difficulty}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <GlossarButton onClick={() => setShowGlossar(true)} />
            <span className="text-sm text-text-muted hidden sm:block">
              <strong>{state.playerName}</strong>
            </span>
          </div>
        </div>
        <div className="px-4 pb-4">
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-primary-dark h-2 rounded-full transition-all duration-500"
              style={{ width: `${progressPct}%` }}
            />
          </div>
        </div>
        {/* News Ticker */}
        <NewsTicker event={state.currentEvent} />
      </div>

      {/* Live-Sektoranalyse */}
      <PortfolioAnalysis state={state} assets={assets} />

      {/* Portfolio Donut */}
      <PortfolioDonut state={state} assets={assets} />

      {/* Schnell investieren */}
      <QuickInvestBar
        assets={assets}
        cash={state.cash}
        currentPrices={state.currentPrices}
        onBuyMultiple={handleBuyMultiple}
      />

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Gesamtvermögen" value={`${totalWealth.toFixed(0)} €`} icon={<DollarSignIcon />} color="text-primary-dark" />
        <StatCard label="Cash" value={`${state.cash.toFixed(0)} €`} icon={<BarChart2Icon />} color="text-status-teal" />
        <StatCard label="Investiert" value={`${portfolioValue.toFixed(0)} €`} icon={<TrendingUpIcon />} color="text-status-orange" />
        <StatCard
          label="Performance"
          value={`${performance >= 0 ? '+' : ''}${performance.toFixed(1)} %`}
          icon={performance >= 0 ? <TrendingUpIcon /> : <TrendingDownIcon />}
          color={performance >= 0 ? 'text-status-teal' : 'text-red-500'}
        />
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="flex border-b border-gray-100">
          {(['markt', 'verlauf'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                activeTab === tab
                  ? 'text-primary-dark border-b-2 border-primary-dark'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {tab === 'markt' ? 'Marktübersicht' : 'Transaktionen'}
            </button>
          ))}
        </div>

        {activeTab === 'markt' && (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-3 text-text-muted font-medium">Asset</th>
                  <th className="text-left px-4 py-3 text-text-muted font-medium hidden md:table-cell">Risiko</th>
                  <th className="text-right px-4 py-3 text-text-muted font-medium">Kurs</th>
                  <th className="text-right px-4 py-3 text-text-muted font-medium">±%</th>
                  <th className="text-right px-4 py-3 text-text-muted font-medium hidden lg:table-cell">Verlauf</th>
                  <th className="text-right px-4 py-3 text-text-muted font-medium">Anteile</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {assets.map((asset) => {
                  const price = state.currentPrices[asset.id] ?? asset.price
                  const change = state.roundChanges[asset.id] ?? 0
                  const pos = state.positions.find((p) => p.assetId === asset.id)
                  const isFlashing = flashAssetId === asset.id
                  const target = targetPrices[asset.id]
                  const targetHit = target != null && price >= target
                  return (
                    <tr
                      key={asset.id}
                      className={`transition-colors ${isFlashing ? 'bg-status-teal-light' : 'hover:bg-gray-50'}`}
                    >
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setDetailAsset(asset)}
                          className="text-left group"
                        >
                          <div className="font-semibold text-text-primary group-hover:text-primary-dark transition-colors flex items-center gap-1">
                            {asset.name}
                            {targetHit && <span title="Zielkurs erreicht!">🎯</span>}
                          </div>
                          <div className="text-xs text-text-muted flex items-center gap-1">
                            {asset.symbol} · {asset.type}
                            <span className="text-primary-light"><InfoIcon /></span>
                          </div>
                        </button>
                      </td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${RISK_COLORS[asset.risk]}`}>
                          {asset.risk}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-right font-mono font-semibold">
                        {price.toFixed(2)} €
                        {target != null && (
                          <div className="text-xs text-text-muted font-normal">Ziel: {target.toFixed(2)} €</div>
                        )}
                      </td>
                      <td className={`px-4 py-3 text-right font-mono text-sm font-semibold ${change >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
                        {change >= 0 ? '+' : ''}{(change * 100).toFixed(1)}%
                      </td>
                      <td className="px-4 py-3 hidden lg:table-cell">
                        <div className="flex justify-end">
                          <Sparkline assetId={asset.id} priceHistory={state.priceHistory} initialPrice={asset.price} />
                        </div>
                      </td>
                      <td className="px-4 py-3 text-right text-text-secondary">
                        {pos ? pos.quantity : '—'}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => setSelectedAsset(asset)}
                          className="bg-primary-dark text-white text-xs px-3 py-1.5 rounded-lg hover:bg-primary-medium transition-colors"
                        >
                          Handeln
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'verlauf' && (
          <div className="p-4">
            {state.transactions.length === 0 ? (
              <p className="text-center text-text-muted py-8 text-sm">Noch keine Transaktionen in diesem Spiel.</p>
            ) : (
              <div className="space-y-2">
                {[...state.transactions].reverse().map((tx, i) => {
                  const asset = assets.find((a) => a.id === tx.assetId)
                  return (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                      <div className="flex items-center gap-3">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded ${tx.type === 'buy' ? 'bg-status-teal-light text-status-teal' : 'bg-red-50 text-red-500'}`}>
                          {tx.type === 'buy' ? 'KAUF' : 'VERKAUF'}
                        </span>
                        <div>
                          <div className="text-sm font-semibold text-text-primary">{asset?.name ?? tx.assetId}</div>
                          <div className="text-xs text-text-muted">Jahr {roundToYear(tx.round)} · {tx.quantity} Anteile à {tx.price.toFixed(2)} €</div>
                        </div>
                      </div>
                      <div className={`font-semibold text-sm ${tx.type === 'buy' ? 'text-red-500' : 'text-status-teal'}`}>
                        {tx.type === 'buy' ? '−' : '+'}{(tx.quantity * tx.price).toFixed(0)} €
                      </div>
                    </div>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* End round */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={handleEndRoundClick}
          className="w-full md:w-auto bg-primary-dark text-white font-semibold px-12 py-4 rounded-xl hover:bg-primary-medium transition-colors text-lg"
        >
          Jahr {roundToYear(state.currentRound)} abschließen →
        </button>
        <p className="text-xs text-text-muted text-center max-w-sm">
          Dieses Spiel verwendet ausschließlich fiktive Unternehmen und virtuelles Kapital. Es stellt keine Anlageberatung dar.
        </p>
      </div>

      {/* End-round warning dialog */}
      {showEndWarning && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-card-hover w-full max-w-sm p-6 space-y-4">
            <h3 className="font-heading text-lg font-bold text-primary-dark">Du hast noch viel Cash</h3>
            <p className="text-sm text-text-secondary">
              Du hast diese Runde noch nichts gekauft und mehr als die Hälfte deines Kapitals liegt als Cash.
              Unangelegtes Geld kann sich im Lauf der Zeit weniger entwickeln als ein investiertes Portfolio.
            </p>
            <p className="text-xs text-text-muted italic">
              Lernhinweis: Das nennt man „Cash drag" – zu viel Bargeld reduziert oft die langfristige Rendite.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setShowEndWarning(false)}
                className="flex-1 border border-gray-200 text-text-secondary py-2.5 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
              >
                Zurück
              </button>
              <button
                onClick={() => { setShowEndWarning(false); onEndRound() }}
                className="flex-1 bg-primary-dark text-white py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-medium transition-colors"
              >
                Trotzdem beenden
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trade modal */}
      {selectedAsset && (
        <TradeModal
          asset={selectedAsset}
          currentPrice={state.currentPrices[selectedAsset.id] ?? selectedAsset.price}
          cash={state.cash}
          position={state.positions.find((p) => p.assetId === selectedAsset.id)}
          portfolioValue={portfolioValue}
          playerRole={state.role}
          onBuy={(qty, confidence) => handleBuyWithFlash(selectedAsset.id, qty, confidence)}
          onSell={(qty, confidence) => handleSellWithFlash(selectedAsset.id, qty, confidence)}
          onClose={() => setSelectedAsset(null)}
        />
      )}

      {/* Glossar */}
      {showGlossar && <GlossarModal onClose={() => setShowGlossar(false)} />}

      {/* Asset detail panel */}
      {detailAsset && (
        <AssetDetailPanel
          asset={detailAsset}
          currentPrice={state.currentPrices[detailAsset.id] ?? detailAsset.price}
          priceHistory={state.priceHistory}
          position={state.positions.find((p) => p.assetId === detailAsset.id)}
          onClose={() => setDetailAsset(null)}
          onTrade={() => { setDetailAsset(null); setSelectedAsset(detailAsset) }}
          targetPrice={targetPrices[detailAsset.id]}
          onSetTargetPrice={(price) => onSetTargetPrice(detailAsset.id, price)}
        />
      )}
    </div>
  )
}

function StatCard({ label, value, icon, color }: { label: string; value: string; icon: React.ReactNode; color: string }) {
  return (
    <div className="bg-white rounded-2xl shadow-card p-4">
      <div className={`mb-2 ${color}`}>{icon}</div>
      <div className="text-xs text-text-muted mb-0.5">{label}</div>
      <div className={`font-bold text-lg ${color}`}>{value}</div>
    </div>
  )
}
