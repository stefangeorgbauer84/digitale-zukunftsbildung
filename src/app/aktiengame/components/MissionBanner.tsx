'use client'

import type { Asset, GameState } from '../types'
import { PLAYER_ROLES, calcMissionProgress, calcRoleMissionBonus } from '../lib/gameEngine'

interface MissionBannerProps {
  state: GameState
  assets: Asset[]
}

function RoleIconSmall({ role }: { role: GameState['role'] }) {
  if (role === 'sicherheitsdenker') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
  if (role === 'wachstumssucher') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
    </svg>
  )
  if (role === 'nachhaltigkeitsinvestor') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 8C8 10 5.9 16.17 3.82 19.11"/><path d="M19 3c0 0-2 10-14 10"/>
    </svg>
  )
  if (role === 'diversifizierer') return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}

export default function MissionBanner({ state, assets }: MissionBannerProps) {
  const def = PLAYER_ROLES[state.role]
  const progress = calcMissionProgress(state, assets)
  const { fulfilled } = calcRoleMissionBonus(state, assets)

  return (
    <div className={`rounded-2xl border-2 p-4 ${def.bgClass} ${def.borderClass}`}>
      <div className="flex items-start gap-3">
        <div className={`mt-0.5 flex-shrink-0 ${def.colorClass}`}>
          <RoleIconSmall role={state.role} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-0.5">
            <div className="flex items-center gap-2">
              <span className={`text-xs font-bold uppercase tracking-wide ${def.colorClass}`}>
                {def.name}
              </span>
              {fulfilled && (
                <span className="text-xs bg-status-teal text-white px-2 py-0.5 rounded-full font-semibold">
                  ✓ Mission erfüllt
                </span>
              )}
            </div>
            <span className={`text-xs font-semibold ${def.colorClass}`}>{progress} %</span>
          </div>
          <p className="text-xs text-text-secondary mb-2">{def.missionShort}</p>
          {/* Fortschrittsbalken */}
          <div className="w-full bg-white/60 rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                fulfilled ? 'bg-status-teal' : 'bg-primary-medium'
              }`}
              style={{ width: `${Math.min(100, progress)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
