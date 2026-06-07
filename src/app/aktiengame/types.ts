export type RiskLevel = 'niedrig' | 'mittel' | 'hoch'
export type AssetType = 'Aktie' | 'ETF'
export type GamePhase = 'SETUP' | 'PLAYING' | 'ROUND_END' | 'GAME_OVER'
export type Difficulty = 'einsteiger' | 'fortgeschritten' | 'experte'

// Die 5 wählbaren Investoren-Persönlichkeiten
export type PlayerRole =
  | 'sicherheitsdenker'
  | 'wachstumssucher'
  | 'nachhaltigkeitsinvestor'
  | 'diversifizierer'
  | 'spekulant'

export interface RoleDefinition {
  id: PlayerRole
  name: string
  tagline: string
  description: string
  mission: string
  missionShort: string
  favoredSectors: string[]
  favoredRisk: RiskLevel[]
  colorClass: string
  bgClass: string
  borderClass: string
  /** Lernhinweis der in TradeModal angezeigt wird */
  tradeTip: string
  /** Wird in der Auswertung angezeigt */
  bonusLabel: string
}

export interface Asset {
  id: string
  name: string
  symbol: string
  type: AssetType
  sector: string
  risk: RiskLevel
  price: number
  volatility: number
  description: string
  sustainable?: boolean
}

export interface GameEvent {
  id: string
  title: string
  description: string
  explanation: string
  affectedSectors: string[]
  impact: number
}

export interface Position {
  assetId: string
  quantity: number
  avgBuyPrice: number
}

export interface Transaction {
  type: 'buy' | 'sell'
  assetId: string
  quantity: number
  price: number
  round: number
}

export interface ReflectionEntry {
  round: number
  question: string
  answer: string
}

export interface PriceHistory {
  round: number
  prices: Record<string, number>
}

export interface GameState {
  phase: GamePhase
  playerName: string
  totalRounds: number
  currentRound: number
  startCapital: number
  cash: number
  positions: Position[]
  transactions: Transaction[]
  reflections: ReflectionEntry[]
  priceHistory: PriceHistory[]
  currentPrices: Record<string, number>
  currentEvent: GameEvent | null
  roundChanges: Record<string, number>
  difficulty: Difficulty
  wealthHistory: number[]
  role: PlayerRole
  /** Durchschnitts-Konfidenz nach Trades (0 = nicht gesetzt) */
  avgConfidence?: number
  /** Zielpreise je Asset-ID */
  targetPrices?: Record<string, number>
  /** Konfidenz-Ratings für Durchschnitt */
  confidenceRatings?: number[]
}
