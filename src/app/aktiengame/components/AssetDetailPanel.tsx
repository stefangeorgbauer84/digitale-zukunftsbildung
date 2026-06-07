'use client'

import type { Asset, GameState, Position } from '../types'

function XIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}

const RISK_LABELS: Record<string, { label: string; desc: string; color: string }> = {
  niedrig: { label: 'Niedrig', desc: 'Stabile Kurse, geringere Gewinnchancen. Geeignet für langfristige Sicherheit.', color: 'text-status-teal bg-status-teal-light' },
  mittel: { label: 'Mittel', desc: 'Moderate Schwankungen mit ausgewogenem Chancen-Risiko-Verhältnis.', color: 'text-status-orange bg-status-orange-light' },
  hoch: { label: 'Hoch', desc: 'Starke Kursschwankungen möglich. Hohes Gewinnpotenzial, aber auch hohes Verlustrisiko.', color: 'text-red-600 bg-red-50' },
}

interface AssetDetailPanelProps {
  asset: Asset
  currentPrice: number
  priceHistory: GameState['priceHistory']
  position: Position | undefined
  onClose: () => void
  onTrade: () => void
}

export default function AssetDetailPanel({
  asset,
  currentPrice,
  priceHistory,
  position,
  onClose,
  onTrade,
}: AssetDetailPanelProps) {
  const risk = RISK_LABELS[asset.risk]

  // Build price series from history
  const prices = [asset.price, ...priceHistory.map((h) => h.prices[asset.id] ?? asset.price)]
  const minP = Math.min(...prices)
  const maxP = Math.max(...prices)
  const range = maxP - minP || 1
  const totalReturn = ((currentPrice - asset.price) / asset.price) * 100

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end md:items-center justify-center p-0 md:p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white w-full md:max-w-md rounded-t-2xl md:rounded-2xl shadow-card-hover max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-text-muted">{asset.symbol}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-text-muted">{asset.type}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${risk.color}`}>{risk.label}</span>
            </div>
            <h3 className="font-heading text-xl font-bold text-primary-dark">{asset.name}</h3>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary p-1">
            <XIcon />
          </button>
        </div>

        <div className="p-6 space-y-5">
          {/* Current price + return */}
          <div className="flex items-end justify-between">
            <div>
              <div className="text-xs text-text-muted">Aktueller Kurs</div>
              <div className="text-3xl font-bold text-text-primary">{currentPrice.toFixed(2)} €</div>
            </div>
            <div className={`text-right ${totalReturn >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
              <div className="text-xs text-text-muted">Seit Spielstart</div>
              <div className="text-xl font-bold">{totalReturn >= 0 ? '+' : ''}{totalReturn.toFixed(1)} %</div>
            </div>
          </div>

          {/* Mini price chart */}
          <div>
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Kursverlauf</div>
            <div className="flex items-end gap-1 h-16 bg-gray-50 rounded-xl px-3 py-2">
              {prices.map((p, i) => {
                const heightPct = ((p - minP) / range) * 100
                const isUp = i > 0 ? p >= prices[i - 1] : true
                return (
                  <div key={i} className="flex-1 flex flex-col justify-end">
                    <div
                      style={{ height: `${Math.max(4, heightPct)}%` }}
                      className={`rounded-sm ${isUp ? 'bg-status-teal' : 'bg-red-400'}`}
                    />
                  </div>
                )
              })}
            </div>
            <div className="flex justify-between text-xs text-text-muted mt-1">
              <span>Start</span>
              <span>Runde {priceHistory.length}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-1">Beschreibung</div>
            <p className="text-sm text-text-secondary">{asset.description}</p>
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-text-muted mb-0.5">Sektor</div>
              <div className="text-sm font-semibold text-text-primary">{asset.sector}</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-text-muted mb-0.5">Startkurs</div>
              <div className="text-sm font-semibold text-text-primary">{asset.price.toFixed(2)} €</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-text-muted mb-0.5">Volatilität</div>
              <div className="text-sm font-semibold text-text-primary">{(asset.volatility * 100).toFixed(0)} %</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3">
              <div className="text-xs text-text-muted mb-0.5">Meine Anteile</div>
              <div className="text-sm font-semibold text-text-primary">{position?.quantity ?? 0}</div>
            </div>
          </div>

          {/* Risk explanation */}
          <div className={`rounded-xl p-4 text-sm ${risk.color}`}>
            <strong>Risikoklasse {risk.label}:</strong> {risk.desc}
          </div>

          {position && (
            <div className="bg-primary-dark/5 rounded-xl p-4">
              <div className="text-xs font-semibold text-primary-dark mb-1">Deine Position</div>
              <div className="text-sm text-text-secondary">
                {position.quantity} Anteile · Ø Kaufpreis {position.avgBuyPrice.toFixed(2)} €
              </div>
              <div className={`text-sm font-semibold mt-1 ${currentPrice >= position.avgBuyPrice ? 'text-status-teal' : 'text-red-500'}`}>
                Aktueller Gewinn/Verlust: {((currentPrice - position.avgBuyPrice) / position.avgBuyPrice * 100).toFixed(1)} %
              </div>
            </div>
          )}

          <button
            onClick={onTrade}
            className="w-full bg-primary-dark text-white font-semibold py-3 rounded-xl hover:bg-primary-medium transition-colors"
          >
            Handeln
          </button>
        </div>
      </div>
    </div>
  )
}
