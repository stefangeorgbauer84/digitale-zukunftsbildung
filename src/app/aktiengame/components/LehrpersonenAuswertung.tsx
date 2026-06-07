'use client'

import type { Asset, GameState } from '../types'
import {
  calculatePortfolioValue,
  calcDiversificationScore,
  calcRiskScore,
  calcReflectionScore,
  calcRoleMissionBonus,
  calcGesamtScore,
  PLAYER_ROLES,
} from '../lib/gameEngine'

interface Props {
  state: GameState
  assets: Asset[]
  onClose: () => void
}

function PrintIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
}
function XIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}

const GRADE_CONFIG: Record<string, { label: string; color: string; bg: string; text: string }> = {
  A: { label: 'Ausgezeichnet', color: 'text-status-teal', bg: 'bg-status-teal', text: 'text-white' },
  B: { label: 'Gut', color: 'text-blue-600', bg: 'bg-blue-500', text: 'text-white' },
  C: { label: 'Befriedigend', color: 'text-status-orange', bg: 'bg-status-orange', text: 'text-white' },
  D: { label: 'Genügend', color: 'text-orange-600', bg: 'bg-orange-500', text: 'text-white' },
  E: { label: 'Nicht genügend', color: 'text-red-600', bg: 'bg-red-500', text: 'text-white' },
}

export default function LehrpersonenAuswertung({ state, assets, onClose }: Props) {
  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performance = ((totalWealth - state.startCapital) / state.startCapital) * 100
  const diversiScore = calcDiversificationScore(state.positions, assets, state.currentPrices)
  const riskScore = calcRiskScore(state.positions, assets, state.currentPrices)
  const reflScore = calcReflectionScore(state.reflections, state.totalRounds)
  const { fulfilled: missionFulfilled } = calcRoleMissionBonus(state, assets)
  const { score, grade, breakdown } = calcGesamtScore(state, assets)
  const roleDef = PLAYER_ROLES[state.role]
  const gradeCfg = GRADE_CONFIG[grade]

  const SCORE_ROWS = [
    { label: 'Performance (40 %)', value: breakdown.perfScore, weight: 0.4 },
    { label: 'Diversifikation (20 %)', value: breakdown.diversiScore, weight: 0.2 },
    { label: 'Reflexion (20 %)', value: breakdown.reflScore, weight: 0.2 },
    { label: `Rollenbonus – ${roleDef.name} (15 %)`, value: breakdown.roleScore, weight: 0.15 },
    { label: 'Risikobewusstsein (5 %)', value: breakdown.riskScore, weight: 0.05 },
  ]

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-card-hover w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white flex items-center justify-between px-6 py-4 border-b border-gray-100 z-10">
          <h2 className="font-heading font-bold text-primary-dark text-lg">Lehrpersonen-Auswertung</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 text-sm text-text-secondary border border-gray-200 px-3 py-1.5 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <PrintIcon />
              Drucken
            </button>
            <button onClick={onClose} className="text-text-muted hover:text-text-primary"><XIcon /></button>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Spieler-Info */}
          <div className="bg-gray-50 rounded-xl p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div><div className="text-xs text-text-muted">Spieler</div><div className="font-semibold">{state.playerName}</div></div>
            <div><div className="text-xs text-text-muted">Rolle</div><div className="font-semibold">{roleDef.name}</div></div>
            <div><div className="text-xs text-text-muted">Schwierigkeit</div><div className="font-semibold capitalize">{state.difficulty}</div></div>
            <div><div className="text-xs text-text-muted">Runden</div><div className="font-semibold">{state.totalRounds}</div></div>
          </div>

          {/* Gesamtnote */}
          <div className="flex items-center gap-6 bg-white border-2 border-gray-100 rounded-2xl p-5">
            <div className={`w-20 h-20 rounded-2xl ${gradeCfg.bg} flex items-center justify-center flex-shrink-0`}>
              <span className={`text-4xl font-bold ${gradeCfg.text}`}>{grade}</span>
            </div>
            <div>
              <div className="text-xs text-text-muted uppercase tracking-wide mb-0.5">Gesamtbewertung</div>
              <div className="text-3xl font-bold text-primary-dark">{score} / 100</div>
              <div className={`text-sm font-semibold mt-0.5 ${gradeCfg.color}`}>{gradeCfg.label}</div>
            </div>
          </div>

          {/* Score-Aufschlüsselung */}
          <div>
            <h3 className="font-semibold text-text-primary mb-3 text-sm">Score-Aufschlüsselung</h3>
            <div className="space-y-2">
              {SCORE_ROWS.map((row) => (
                <div key={row.label}>
                  <div className="flex justify-between text-xs text-text-muted mb-1">
                    <span>{row.label}</span>
                    <span className="font-semibold text-text-primary">{row.value} Pkt → {Math.round(row.value * row.weight)} gewichtet</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-1.5">
                    <div className="h-1.5 rounded-full bg-primary-medium" style={{ width: `${row.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kennzahlen */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { label: 'Startkapital', value: `${state.startCapital.toLocaleString('de-AT')} €` },
              { label: 'Endvermögen', value: `${totalWealth.toFixed(0)} €` },
              { label: 'Performance', value: `${performance >= 0 ? '+' : ''}${performance.toFixed(1)} %`, highlight: true },
              { label: 'Transaktionen', value: state.transactions.length.toString() },
              { label: 'Assets gehalten', value: state.positions.length.toString() },
              { label: 'Mission erfüllt', value: missionFulfilled ? 'Ja ✓' : 'Nein' },
            ].map((item) => (
              <div key={item.label} className="bg-gray-50 rounded-xl p-3">
                <div className="text-xs text-text-muted">{item.label}</div>
                <div className={`font-bold text-sm mt-0.5 ${item.highlight ? (performance >= 0 ? 'text-status-teal' : 'text-red-500') : 'text-text-primary'}`}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          {/* Reflexionsantworten */}
          <div>
            <h3 className="font-semibold text-text-primary mb-3 text-sm">
              Reflexionsantworten ({state.reflections.filter(r => r.answer.trim()).length} von {state.reflections.length} beantwortet)
            </h3>
            {state.reflections.length === 0 ? (
              <p className="text-sm text-text-muted italic">Keine Reflexionsfragen beantwortet.</p>
            ) : (
              <div className="space-y-3">
                {state.reflections.map((r, i) => (
                  <div key={i} className="border border-gray-100 rounded-xl p-4">
                    <div className="text-xs text-text-muted mb-1">Runde {r.round}</div>
                    <div className="text-sm font-medium text-text-primary mb-2">{r.question}</div>
                    <div className="text-sm text-text-secondary bg-gray-50 rounded-lg px-3 py-2 italic">
                      {r.answer.trim() || <span className="text-text-muted">(keine Antwort gegeben)</span>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Didaktische Hinweise für Nachbesprechung */}
          <div className="bg-primary-50 border border-primary-100 rounded-xl p-5">
            <h3 className="font-semibold text-primary-dark mb-3 text-sm">Hinweise für die Nachbesprechung</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              {performance < 0 && (
                <li>• <strong>Negative Performance:</strong> Diskutieren Sie, welche Entscheidungen zum Verlust geführt haben. Lag es an einzelnen Assets, am Timing oder am Ereigniseinfluss?</li>
              )}
              {diversiScore < 40 && (
                <li>• <strong>Geringe Diversifikation:</strong> Die Teilnehmerin/der Teilnehmer hat wenig gestreut. Fragen Sie: Warum? War es Absicht (Spekulant) oder fehlte das Verständnis für Klumpenrisiko?</li>
              )}
              {state.reflections.filter(r => r.answer.trim().length > 10).length < state.totalRounds / 2 && (
                <li>• <strong>Wenig Reflexion:</strong> Nur {state.reflections.filter(r => r.answer.trim().length > 10).length} Fragen beantwortet. Ermutigen Sie in der nächsten Runde zum Schreiben – auch kurze Antworten helfen.</li>
              )}
              {state.transactions.length < 3 && (
                <li>• <strong>Wenig Aktivität:</strong> Sehr wenige Transaktionen. Lag es an Unsicherheit, fehlender Zeit oder bewusster Strategie?</li>
              )}
              {missionFulfilled && (
                <li>• <strong>Mission erfüllt ({roleDef.name}):</strong> Gratulieren Sie! Diskutieren Sie, welche Entscheidungen zur Zielerfüllung beigetragen haben.</li>
              )}
              <li>• <strong>Allgemein:</strong> Vergleichen Sie Performance mit Risiko-Score – hohe Rendite mit sehr hohem Risiko ist anders zu bewerten als moderate Rendite mit bedachtem Risikomanagement.</li>
            </ul>
          </div>

          <p className="text-xs text-text-muted text-center">
            Dieses Aktiengame dient ausschließlich Bildungszwecken. Alle Unternehmen und Kursverläufe sind fiktiv. Keine Anlageberatung.
          </p>
        </div>
      </div>
    </div>
  )
}
