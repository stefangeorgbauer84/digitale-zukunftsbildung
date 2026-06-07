'use client'

import type { Asset, GameEvent, GameState } from '../types'

interface Props {
  event: GameEvent
  assets: Asset[]
  state: GameState
}

// Berechnet den visuellen Impact-Wert für ein Asset basierend auf dem Event
function getAssetImpact(asset: Asset, event: GameEvent, roundChanges: Record<string, number>): {
  actual: number     // tatsächliche Veränderung in %
  fromEvent: boolean // wurde Sektor direkt getroffen?
} {
  const actual = (roundChanges[asset.id] ?? 0) * 100
  const fromEvent = event.affectedSectors.includes(asset.sector)
  return { actual, fromEvent }
}

function ImpactBar({ value, fromEvent }: { value: number; fromEvent: boolean }) {
  const abs = Math.min(Math.abs(value), 20) // max 20% für Darstellung
  const pct = (abs / 20) * 100
  const isPositive = value >= 0
  return (
    <div className="flex items-center gap-2">
      <div className="w-16 bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className={`h-1.5 rounded-full transition-all ${isPositive ? 'bg-status-teal' : 'bg-red-400'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`text-xs font-mono font-semibold w-12 ${isPositive ? 'text-status-teal' : 'text-red-500'}`}>
        {value >= 0 ? '+' : ''}{value.toFixed(1)} %
      </span>
      {fromEvent && (
        <span className="text-xs bg-primary-dark/10 text-primary-dark px-1.5 py-0.5 rounded font-medium">
          Ereignis
        </span>
      )}
    </div>
  )
}

// Marktstimmung aus Gesamtveränderung aller Assets
function calcSentiment(roundChanges: Record<string, number>): 'bullish' | 'neutral' | 'bearish' {
  const values = Object.values(roundChanges)
  if (values.length === 0) return 'neutral'
  const avg = values.reduce((s, v) => s + v, 0) / values.length
  if (avg > 0.02) return 'bullish'
  if (avg < -0.02) return 'bearish'
  return 'neutral'
}

const SENTIMENT_CONFIG = {
  bullish: { label: 'Bullish – positive Marktstimmung', color: 'text-status-teal', bg: 'bg-status-teal-light', icon: '↑' },
  neutral: { label: 'Neutral – gemischte Signale', color: 'text-text-secondary', bg: 'bg-gray-100', icon: '→' },
  bearish: { label: 'Bearish – negative Marktstimmung', color: 'text-red-600', bg: 'bg-red-50', icon: '↓' },
}

export default function EventImpactHeatmap({ event, assets, state }: Props) {
  const sentiment = calcSentiment(state.roundChanges)
  const sc = SENTIMENT_CONFIG[sentiment]

  // Assets sortiert nach absoluter Veränderung
  const rows = assets.map((asset) => ({
    asset,
    ...getAssetImpact(asset, event, state.roundChanges),
  })).sort((a, b) => Math.abs(b.actual) - Math.abs(a.actual))

  return (
    <div className="bg-white rounded-2xl shadow-card overflow-hidden">
      {/* Marktstimmungs-Banner */}
      <div className={`px-5 py-3 flex items-center gap-3 ${sc.bg}`}>
        <span className={`text-2xl font-bold ${sc.color}`}>{sc.icon}</span>
        <div>
          <div className={`text-sm font-bold ${sc.color}`}>{sc.label}</div>
          <div className="text-xs text-text-muted">
            Durchschnittliche Marktveränderung diese Runde:{' '}
            <span className={sc.color}>
              {(Object.values(state.roundChanges).reduce((s, v) => s + v, 0) /
                Math.max(1, Object.values(state.roundChanges).length) * 100).toFixed(1)} %
            </span>
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="p-5">
        <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-3">
          Asset-Einfluss im Detail
        </div>
        <div className="space-y-3">
          {rows.map(({ asset, actual, fromEvent }) => {
            const pos = state.positions.find((p) => p.assetId === asset.id)
            return (
              <div key={asset.id} className={`flex items-center gap-3 ${pos ? 'opacity-100' : 'opacity-60'}`}>
                <div className="w-28 flex-shrink-0">
                  <div className="text-xs font-semibold text-text-primary truncate">{asset.name}</div>
                  <div className="text-xs text-text-muted">{asset.sector}</div>
                </div>
                <ImpactBar value={actual} fromEvent={fromEvent} />
                {pos && (
                  <span className="text-xs text-primary-medium font-medium ml-auto">
                    {((actual / 100) * pos.quantity * (state.currentPrices[asset.id] ?? asset.price)).toFixed(0)} €
                  </span>
                )}
              </div>
            )
          })}
        </div>
        <p className="text-xs text-text-muted mt-4 italic">
          „Ereignis"-Markierung = Sektor direkt durch das Marktereignis beeinflusst. Alle anderen Veränderungen kommen aus der simulierten Marktvolatilität.
        </p>
      </div>
    </div>
  )
}
