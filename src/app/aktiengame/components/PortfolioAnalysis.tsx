'use client'

import type { Asset, GameState } from '../types'
import { calculatePortfolioValue } from '../lib/gameEngine'

interface Props {
  state: GameState
  assets: Asset[]
}

// Sektor-Farben
const SECTOR_COLORS: Record<string, string> = {
  Technologie:    'bg-blue-500',
  Energie:        'bg-green-500',
  Diversifiziert: 'bg-violet-400',
  Gesundheit:     'bg-teal-500',
  Mobilität:      'bg-orange-400',
  Österreich:     'bg-red-400',
  Anleihen:       'bg-gray-400',
  Cash:           'bg-gray-200',
}

const SECTOR_TEXT: Record<string, string> = {
  Technologie:    'text-blue-700',
  Energie:        'text-green-700',
  Diversifiziert: 'text-violet-700',
  Gesundheit:     'text-teal-700',
  Mobilität:      'text-orange-700',
  Österreich:     'text-red-700',
  Anleihen:       'text-gray-600',
  Cash:           'text-gray-500',
}

export default function PortfolioAnalysis({ state, assets }: Props) {
  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const total = portfolioValue + state.cash
  if (total === 0) return null

  // Sektorgewichtung berechnen
  const sectorMap: Record<string, number> = {}
  for (const pos of state.positions) {
    const asset = assets.find((a) => a.id === pos.assetId)
    if (!asset) continue
    const value = pos.quantity * (state.currentPrices[pos.assetId] ?? asset.price)
    sectorMap[asset.sector] = (sectorMap[asset.sector] ?? 0) + value
  }
  // Cash als eigener Sektor
  sectorMap['Cash'] = state.cash

  const segments = Object.entries(sectorMap)
    .map(([sector, value]) => ({ sector, value, pct: (value / total) * 100 }))
    .filter((s) => s.pct > 0.5)
    .sort((a, b) => b.value - a.value)

  // Risikometer-Farbe: basierend auf Anteil Hochrisiko-Assets
  const highRiskValue = state.positions
    .filter((p) => assets.find((a) => a.id === p.assetId)?.risk === 'hoch')
    .reduce((sum, p) => sum + p.quantity * (state.currentPrices[p.assetId] ?? 0), 0)
  const highRiskPct = portfolioValue > 0 ? (highRiskValue / total) * 100 : 0
  const riskColor = highRiskPct > 40 ? 'bg-red-500' : highRiskPct > 20 ? 'bg-status-orange' : 'bg-status-teal'
  const riskLabel = highRiskPct > 40 ? 'Hohes Risiko' : highRiskPct > 20 ? 'Mittleres Risiko' : 'Niedriges Risiko'

  // Tagesgewinn (Gewinn/Verlust in dieser Runde)
  const prevPrices = state.priceHistory[state.priceHistory.length - 2]?.prices
  const roundPnL = prevPrices
    ? state.positions.reduce((sum, pos) => {
        const prev = prevPrices[pos.assetId] ?? 0
        const curr = state.currentPrices[pos.assetId] ?? 0
        return sum + pos.quantity * (curr - prev)
      }, 0)
    : 0

  return (
    <div className="bg-white rounded-2xl shadow-card p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-bold text-primary-dark text-sm">Portfolio-Analyse</h3>
        <div className="flex items-center gap-2">
          <div className={`w-2.5 h-2.5 rounded-full ${riskColor}`} />
          <span className="text-xs text-text-muted">{riskLabel}</span>
        </div>
      </div>

      {/* Sektorbalken (gestapelt) */}
      {segments.length > 0 ? (
        <>
          <div className="flex h-4 rounded-full overflow-hidden gap-px">
            {segments.map(({ sector, pct }) => (
              <div
                key={sector}
                className={`${SECTOR_COLORS[sector] ?? 'bg-gray-300'} flex-shrink-0 transition-all duration-500`}
                style={{ width: `${pct}%` }}
                title={`${sector}: ${pct.toFixed(1)} %`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {segments.map(({ sector, pct }) => (
              <div key={sector} className="flex items-center gap-1.5">
                <div className={`w-2 h-2 rounded-full ${SECTOR_COLORS[sector] ?? 'bg-gray-300'}`} />
                <span className={`text-xs font-medium ${SECTOR_TEXT[sector] ?? 'text-text-muted'}`}>
                  {sector} {pct.toFixed(0)} %
                </span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-xs text-text-muted italic">Noch keine Positionen – kaufe erste Assets.</p>
      )}

      {/* Runden-PnL */}
      {prevPrices && (
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <span className="text-xs text-text-muted">Gewinn/Verlust letzte Runde</span>
          <span className={`text-sm font-bold ${roundPnL >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
            {roundPnL >= 0 ? '+' : ''}{roundPnL.toFixed(0)} €
          </span>
        </div>
      )}
    </div>
  )
}
