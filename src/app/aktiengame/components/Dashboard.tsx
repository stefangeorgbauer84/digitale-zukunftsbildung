'use client'

import { useState, useCallback } from 'react'
import type { Asset, GameState } from '../types'

function TrendingUpIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
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

import { calculatePortfolioValue } from '../lib/gameEngine'
import TradeModal from './TradeModal'
import AssetDetailPanel from './AssetDetailPanel'

interface DashboardProps {
  state: GameState
  assets: Asset[]
  onBuy: (assetId: string, qty: number) => void
  onSell: (assetId: string, qty: number) => void
  onEndRound: () => void
}

const RISK_COLORS: Record<string, string> = {
  niedrig: 'bg-status-teal-light text-status-teal',
  mittel: 'bg-status-orange-light text-status-orange',
  hoch: 'bg-red-50 text-red-600',
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

export default function Dashboard({ state, assets, onBuy, onSell, onEndRound }: DashboardProps) {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null)
  const [detailAsset, setDetailAsset] = useState<Asset | null>(null)
  const [activeTab, setActiveTab] = useState<'markt' | 'verlauf'>('markt')
  const [flashAssetId, setFlashAssetId] = useState<string | null>(null)
  const [showEndWarning, setShowEndWarning] = useState(false)

  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performance = ((totalWealth - state.startCapital) / state.startCapital) * 100
  const progressPct = ((state.currentRound - 1) / state.totalRounds) * 100

  const thisRoundBuys = state.transactions.filter((t) => t.round === state.currentRound && t.type === 'buy')

  const handleBuyWithFlash = useCallback((assetId: string, qty: number) => {
    onBuy(assetId, qty)
    setFlashAssetId(assetId)
    setTimeout(() => setFlashAssetId(null), 600)
  }, [onBuy])

  const handleSellWithFlash = useCallback((assetId: string, qty: number) => {
    onSell(assetId, qty)
    setFlashAssetId(assetId)
    setTimeout(() => setFlashAssetId(null), 600)
  }, [onSell])

  const handleEndRoundClick = () => {
    // Warn if lots of cash and no buys this round
    if (state.cash > state.startCapital * 0.5 && thisRoundBuys.length === 0) {
      setShowEndWarning(true)
    } else {
      onEndRound()
    }
  }

  return (
    <div className="space-y-6">
      {/* Round indicator */}
      <div className="bg-white rounded-2xl shadow-card p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-semibold text-text-secondary">
            Runde {state.currentRound} von {state.totalRounds}
            <span className="ml-2 text-xs font-normal text-text-muted capitalize">· {state.difficulty}</span>
          </span>
          <span className="text-sm text-text-muted">
            Spieler: <strong>{state.playerName}</strong>
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-primary-dark h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPct}%` }}
          />
        </div>
      </div>

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
                          <div className="font-semibold text-text-primary group-hover:text-primary-dark transition-colors">
                            {asset.name}
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
                          <div className="text-xs text-text-muted">Runde {tx.round} · {tx.quantity} Anteile à {tx.price.toFixed(2)} €</div>
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
          Runde beenden →
        </button>
        <p className="text-xs text-text-muted text-center max-w-sm">
          Dieses Spiel verwendet ausschließlich fiktive Unternehmen und virtuelles Kapital. Es stellt keine Anlageberatung dar.
        </p>
      </div>

      {/* End-round warning dialog (improvement 6) */}
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
          onBuy={(qty) => handleBuyWithFlash(selectedAsset.id, qty)}
          onSell={(qty) => handleSellWithFlash(selectedAsset.id, qty)}
          onClose={() => setSelectedAsset(null)}
        />
      )}

      {/* Asset detail panel */}
      {detailAsset && (
        <AssetDetailPanel
          asset={detailAsset}
          currentPrice={state.currentPrices[detailAsset.id] ?? detailAsset.price}
          priceHistory={state.priceHistory}
          position={state.positions.find((p) => p.assetId === detailAsset.id)}
          onClose={() => setDetailAsset(null)}
          onTrade={() => { setDetailAsset(null); setSelectedAsset(detailAsset) }}
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
