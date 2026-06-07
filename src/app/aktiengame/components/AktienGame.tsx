'use client'

import { useEffect, useState } from 'react'
import type { Difficulty, GameState, PlayerRole } from '../types'
import {
  SEED_ASSETS,
  REFLECTION_QUESTIONS,
  calculateNewPrices,
  calculatePortfolioValue,
  createInitialState,
  getRandomEvent,
} from '../lib/gameEngine'
import SetupScreen from './SetupScreen'
import Dashboard from './Dashboard'
import RoundEndScreen from './RoundEndScreen'
import FinalScreen from './FinalScreen'

const STORAGE_KEY = 'aktiengame_state'

function loadState(): GameState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    return JSON.parse(raw) as GameState
  } catch {
    return null
  }
}

function saveState(state: GameState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch {
    // ignore
  }
}

export default function AktienGame() {
  const [state, setState] = useState<GameState | null>(null)
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    const saved = loadState()
    if (saved && saved.phase !== 'SETUP') {
      // Migrate old saves that lack new fields
      if (!saved.difficulty) saved.difficulty = 'fortgeschritten'
      if (!saved.wealthHistory) saved.wealthHistory = [saved.startCapital]
      if (!saved.role) saved.role = 'diversifizierer'
      setState(saved)
    }
    setHydrated(true)
  }, [])

  const updateState = (newState: GameState) => {
    setState(newState)
    saveState(newState)
  }

  const handleStart = (playerName: string, totalRounds: number, difficulty: Difficulty, role: PlayerRole) => {
    const initial = createInitialState(playerName, totalRounds, difficulty, role)
    updateState(initial)
  }

  const handleBuy = (assetId: string, qty: number) => {
    if (!state) return
    const price = state.currentPrices[assetId] ?? 0
    const cost = price * qty
    if (cost > state.cash) return

    const existingPos = state.positions.find((p) => p.assetId === assetId)
    let newPositions = state.positions.filter((p) => p.assetId !== assetId)

    if (existingPos) {
      const totalQty = existingPos.quantity + qty
      const avgPrice = (existingPos.avgBuyPrice * existingPos.quantity + price * qty) / totalQty
      newPositions = [...newPositions, { assetId, quantity: totalQty, avgBuyPrice: avgPrice }]
    } else {
      newPositions = [...newPositions, { assetId, quantity: qty, avgBuyPrice: price }]
    }

    updateState({
      ...state,
      cash: state.cash - cost,
      positions: newPositions,
      transactions: [
        ...state.transactions,
        { type: 'buy', assetId, quantity: qty, price, round: state.currentRound },
      ],
    })
  }

  const handleSell = (assetId: string, qty: number) => {
    if (!state) return
    const price = state.currentPrices[assetId] ?? 0
    const pos = state.positions.find((p) => p.assetId === assetId)
    if (!pos || pos.quantity < qty) return

    let newPositions = state.positions.filter((p) => p.assetId !== assetId)
    if (pos.quantity > qty) {
      newPositions = [...newPositions, { ...pos, quantity: pos.quantity - qty }]
    }

    updateState({
      ...state,
      cash: state.cash + price * qty,
      positions: newPositions,
      transactions: [
        ...state.transactions,
        { type: 'sell', assetId, quantity: qty, price, round: state.currentRound },
      ],
    })
  }

  const handleEndRound = () => {
    if (!state) return
    const usedIds = state.priceHistory
      .map((_, i) => state.currentEvent?.id)
      .filter(Boolean) as string[]
    const event = getRandomEvent(usedIds)
    const newPrices = calculateNewPrices(state.currentPrices, SEED_ASSETS, event, state.difficulty)

    const roundChanges: Record<string, number> = {}
    for (const asset of SEED_ASSETS) {
      const prev = state.currentPrices[asset.id] ?? asset.price
      const curr = newPrices[asset.id] ?? asset.price
      roundChanges[asset.id] = (curr - prev) / prev
    }

    // Track wealth after this round
    const newPortfolioValue = calculatePortfolioValue(state.positions, newPrices)
    const newWealth = state.cash + newPortfolioValue

    updateState({
      ...state,
      phase: 'ROUND_END',
      currentEvent: event,
      currentPrices: newPrices,
      roundChanges,
      priceHistory: [
        ...state.priceHistory,
        { round: state.currentRound, prices: newPrices },
      ],
      wealthHistory: [...(state.wealthHistory ?? [state.startCapital]), newWealth],
    })
  }

  const handleReflectionSubmit = (answer: string) => {
    if (!state) return
    const question = REFLECTION_QUESTIONS[(state.currentRound - 1) % REFLECTION_QUESTIONS.length] ?? ''
    updateState({
      ...state,
      reflections: [
        ...state.reflections,
        { round: state.currentRound, question, answer },
      ],
    })
  }

  const handleNextRound = () => {
    if (!state) return
    if (state.currentRound >= state.totalRounds) {
      updateState({ ...state, phase: 'GAME_OVER' })
    } else {
      updateState({
        ...state,
        phase: 'PLAYING',
        currentRound: state.currentRound + 1,
        currentEvent: null,
        roundChanges: {},
      })
    }
  }

  const handleRestart = () => {
    localStorage.removeItem(STORAGE_KEY)
    setState(null)
  }

  if (!hydrated) return null

  if (!state || state.phase === 'SETUP') {
    return <SetupScreen onStart={handleStart} />
  }

  if (state.phase === 'PLAYING') {
    return (
      <Dashboard
        state={state}
        assets={SEED_ASSETS}
        onBuy={handleBuy}
        onSell={handleSell}
        onEndRound={handleEndRound}
      />
    )
  }

  if (state.phase === 'ROUND_END') {
    return (
      <RoundEndScreen
        state={state}
        assets={SEED_ASSETS}
        onReflectionSubmit={handleReflectionSubmit}
        onNextRound={handleNextRound}
      />
    )
  }

  return (
    <FinalScreen
      state={state}
      assets={SEED_ASSETS}
      onRestart={handleRestart}
    />
  )
}
