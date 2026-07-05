'use client'

import { useReducer, useEffect } from 'react'
import { KonsumIntro } from './KonsumIntro'
import { KonsumParcours } from './KonsumParcours'
import { KonsumResult } from './KonsumResult'
import { konsumReducer, INITIAL_KONSUM_STATE, type KonsumState } from '@/lib/konsumfallenSimulation'

const STORAGE_KEY = 'skillsup_konsumfallen_demo_v1'

export function KonsumfallenDemo() {
  const [state, dispatch] = useReducer(konsumReducer, INITIAL_KONSUM_STATE, () => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw) as KonsumState
        if (saved.phase === 'parcours') return { ...INITIAL_KONSUM_STATE, phase: 'parcours' as const }
      }
    } catch {}
    return INITIAL_KONSUM_STATE
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state])

  if (state.phase === 'intro') {
    return <KonsumIntro onStart={() => dispatch({ type: 'START' })} />
  }

  if (state.phase === 'result') {
    return (
      <KonsumResult
        state={state}
        onReset={() => {
          localStorage.removeItem(STORAGE_KEY)
          dispatch({ type: 'RESET' })
        }}
      />
    )
  }

  return (
    <KonsumParcours
      state={state}
      onDecide={(erkannt, richtigeEntscheidung) =>
        dispatch({ type: 'DECIDE', erkannt, richtigeEntscheidung })
      }
    />
  )
}
