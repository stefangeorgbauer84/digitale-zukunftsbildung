'use client'

import { useState } from 'react'
import type { Asset, Position } from '../types'

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

interface TradeModalProps {
  asset: Asset
  currentPrice: number
  cash: number
  position: Position | undefined
  portfolioValue: number
  onBuy: (qty: number) => void
  onSell: (qty: number) => void
  onClose: () => void
}

const RISK_COLORS: Record<string, string> = {
  niedrig: 'bg-status-teal-light text-status-teal',
  mittel: 'bg-status-orange-light text-status-orange',
  hoch: 'bg-red-50 text-red-600',
}

export default function TradeModal({
  asset,
  currentPrice,
  cash,
  position,
  portfolioValue,
  onBuy,
  onSell,
  onClose,
}: TradeModalProps) {
  const [tab, setTab] = useState<'buy' | 'sell'>('buy')
  const [qty, setQty] = useState(1)

  const totalCost = qty * currentPrice
  const totalRevenue = qty * currentPrice
  const canBuy = totalCost <= cash && qty >= 1
  const canSell = !!position && qty >= 1 && qty <= position.quantity

  const newPortfolioShare =
    portfolioValue > 0
      ? ((qty * currentPrice) / (portfolioValue + qty * currentPrice)) * 100
      : 100

  const showConcentrationWarning = tab === 'buy' && newPortfolioShare > 40

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-card-hover w-full max-w-md">
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-gray-100">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-medium text-text-muted">{asset.symbol}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-text-muted">
                {asset.type}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${RISK_COLORS[asset.risk]}`}>
                Risiko: {asset.risk}
              </span>
            </div>
            <h3 className="font-heading text-lg font-bold text-primary-dark">{asset.name}</h3>
            <p className="text-2xl font-bold text-text-primary mt-1">
              {currentPrice.toFixed(2)} €
            </p>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary p-1">
            <XIcon />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-100">
          {(['buy', 'sell'] as const).map((t) => (
            <button
              key={t}
              onClick={() => { setTab(t); setQty(1) }}
              className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                tab === t
                  ? 'text-primary-dark border-b-2 border-primary-dark'
                  : 'text-text-muted hover:text-text-primary'
              }`}
            >
              {t === 'buy' ? 'Kaufen' : 'Verkaufen'}
            </button>
          ))}
        </div>

        <div className="p-6 space-y-4">
          {/* Qty input */}
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-1">
              Anzahl Anteile
            </label>
            <input
              type="number"
              min={1}
              max={tab === 'sell' ? position?.quantity : undefined}
              value={qty}
              onChange={(e) => setQty(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-medium"
            />
            {tab === 'sell' && position && (
              <p className="text-xs text-text-muted mt-1">
                Du besitzt {position.quantity} Anteile (Ø {position.avgBuyPrice.toFixed(2)} €)
              </p>
            )}
          </div>

          {/* Preview */}
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">
                {tab === 'buy' ? 'Gesamtkosten' : 'Erlös'}
              </span>
              <span className="font-bold text-text-primary">
                {tab === 'buy'
                  ? totalCost.toFixed(2)
                  : totalRevenue.toFixed(2)}{' '}
                €
              </span>
            </div>
            {tab === 'buy' && (
              <div className="flex justify-between text-sm mt-1">
                <span className="text-text-secondary">Verbleibendes Cash</span>
                <span className={`font-semibold ${cash - totalCost < 0 ? 'text-red-500' : 'text-status-teal'}`}>
                  {(cash - totalCost).toFixed(2)} €
                </span>
              </div>
            )}
          </div>

          {/* Warning */}
          {showConcentrationWarning && (
            <div className="bg-status-orange-light border border-status-orange rounded-xl p-3 text-sm text-status-orange">
              <strong>Lernhinweis:</strong> Dieser Kauf würde über 40 % deines Portfolios in einem einzigen Wert konzentrieren. Das erhöht dein Risiko deutlich – Diversifikation schützt vor Verlusten.
            </div>
          )}

          {/* Validation errors */}
          {tab === 'buy' && !canBuy && qty >= 1 && (
            <p className="text-sm text-red-500">Nicht genug Cash für diesen Kauf.</p>
          )}
          {tab === 'sell' && !canSell && (
            <p className="text-sm text-red-500">
              {!position ? 'Du besitzt keine Anteile dieses Assets.' : `Du hast nur ${position.quantity} Anteile.`}
            </p>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-1">
            <button
              onClick={onClose}
              className="flex-1 border border-gray-200 text-text-secondary py-3 rounded-xl text-sm font-semibold hover:bg-gray-50 transition-colors"
            >
              Abbrechen
            </button>
            <button
              onClick={() => {
                if (tab === 'buy' && canBuy) { onBuy(qty); onClose() }
                if (tab === 'sell' && canSell) { onSell(qty); onClose() }
              }}
              disabled={tab === 'buy' ? !canBuy : !canSell}
              className="flex-1 bg-primary-dark text-white py-3 rounded-xl text-sm font-semibold hover:bg-primary-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {tab === 'buy' ? 'Kaufen' : 'Verkaufen'}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
