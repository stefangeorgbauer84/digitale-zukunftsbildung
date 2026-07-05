'use client'

import { useReducer, useEffect, useState } from 'react'
import { KonsumIntro } from './KonsumIntro'
import { KonsumParcours } from './KonsumParcours'
import { KonsumResult } from './KonsumResult'
import { konsumReducer, INITIAL_KONSUM_STATE, type KonsumState } from '@/lib/konsumfallenSimulation'

const STORAGE_KEY = 'skillsup_konsumfallen_demo_v1'

export function KonsumfallenDemo() {
  const [ready, setReady] = useState(false)
  const [state, dispatch] = useReducer(konsumReducer, INITIAL_KONSUM_STATE)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const saved = JSON.parse(raw) as KonsumState
        if (saved.phase === 'parcours') {
          dispatch({ type: 'START' })
        }
      }
    } catch {}
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch {}
  }, [state, ready])

  if (!ready) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#4a2d8a] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

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
