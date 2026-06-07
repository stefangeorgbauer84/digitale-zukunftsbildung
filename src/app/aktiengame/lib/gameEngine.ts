import type { Asset, Difficulty, GameEvent, GameState, Position } from '../types'

export const DIFFICULTY_MULTIPLIERS: Record<Difficulty, number> = {
  einsteiger: 0.5,
  fortgeschritten: 1.0,
  experte: 1.8,
}

export const SEED_ASSETS: Asset[] = [
  {
    id: 'alpentech',
    name: 'AlpenTech AG',
    symbol: 'ATG',
    type: 'Aktie',
    sector: 'Technologie',
    risk: 'hoch',
    price: 48,
    volatility: 0.12,
    description: 'Österreichisches Technologieunternehmen mit Fokus auf KI und Cloud-Lösungen.',
  },
  {
    id: 'greenenergy',
    name: 'GreenEnergy Europe',
    symbol: 'GEE',
    type: 'Aktie',
    sector: 'Energie',
    risk: 'mittel',
    price: 32,
    volatility: 0.09,
    description: 'Europäischer Anbieter von erneuerbaren Energien – Solar, Wind und Wasserkraft.',
  },
  {
    id: 'globaletf',
    name: 'Global Market ETF',
    symbol: 'GME',
    type: 'ETF',
    sector: 'Diversifiziert',
    risk: 'niedrig',
    price: 95,
    volatility: 0.05,
    description: 'Breit gestreuter ETF über globale Aktien aus über 40 Ländern.',
  },
  {
    id: 'healthcare',
    name: 'HealthCare Plus',
    symbol: 'HCP',
    type: 'Aktie',
    sector: 'Gesundheit',
    risk: 'mittel',
    price: 61,
    volatility: 0.07,
    description: 'Medizintechnikunternehmen mit Produkten für Diagnostik und Telemedizin.',
  },
  {
    id: 'futuremobility',
    name: 'Future Mobility AG',
    symbol: 'FMA',
    type: 'Aktie',
    sector: 'Mobilität',
    risk: 'hoch',
    price: 27,
    volatility: 0.14,
    description: 'Hersteller von Elektrofahrzeugen und Ladelösungen im DACH-Raum.',
  },
  {
    id: 'austriaetf',
    name: 'Austria Stability ETF',
    symbol: 'ASE',
    type: 'ETF',
    sector: 'Österreich',
    risk: 'niedrig',
    price: 78,
    volatility: 0.04,
    description: 'ETF auf österreichische Bluechip-Unternehmen – stabil, dividendenstark.',
  },
]

export const EVENTS: GameEvent[] = [
  {
    id: 'zinsen',
    title: 'Zinsen steigen',
    description: 'Die EZB erhöht die Leitzinsen um 0,5 Prozentpunkte.',
    explanation: 'Steigende Zinsen machen Kredite teurer. Technologiefirmen, die oft auf Fremdkapital angewiesen sind, leiden besonders. Anleihen werden attraktiver, Aktien weniger.',
    affectedSectors: ['Technologie', 'Mobilität'],
    impact: -0.06,
  },
  {
    id: 'eu-energie',
    title: 'EU-Förderung Erneuerbare',
    description: 'Die EU beschließt ein 200-Milliarden-Paket für grüne Energie.',
    explanation: 'Staatliche Förderungen steigern direkt die Umsätze von Unternehmen in der Energiewende. Investoren reagieren positiv auf sichere Zukunftsperspektiven.',
    affectedSectors: ['Energie', 'Mobilität'],
    impact: 0.08,
  },
  {
    id: 'lieferketten',
    title: 'Lieferketten entspannen sich',
    description: 'Globale Lieferengpässe lösen sich schneller als erwartet auf.',
    explanation: 'Wenn Rohstoffe und Bauteile wieder frei fließen, sinken die Produktionskosten. Das nützt Industrie- und Technologieunternehmen gleichermaßen.',
    affectedSectors: ['Technologie', 'Mobilität', 'Österreich'],
    impact: 0.05,
  },
  {
    id: 'konjunktur',
    title: 'Konjunktursorgen',
    description: 'Wirtschaftsforschungsinstitute senken ihre Wachstumsprognosen.',
    explanation: 'Bei schwächerem Wirtschaftswachstum sinken Unternehmensgewinne. Defensive Sektoren wie Gesundheit sind weniger betroffen als zyklische Branchen.',
    affectedSectors: ['Technologie', 'Mobilität', 'Diversifiziert'],
    impact: -0.05,
  },
  {
    id: 'gesundheit',
    title: 'Gesundheitssektor stabil',
    description: 'Neue Studiendaten belegen den Nutzen digitaler Gesundheitslösungen.',
    explanation: 'Positive Studienergebnisse stärken das Vertrauen in Medizintechnikunternehmen. Der Sektor gilt als krisenfest, weil Menschen immer medizinische Versorgung brauchen.',
    affectedSectors: ['Gesundheit'],
    impact: 0.07,
  },
]

export const REFLECTION_QUESTIONS: string[] = [
  'Warum hast du dich für diese Käufe entschieden? Was hat dich geleitet?',
  'Hättest du anders reagiert, wenn dein echtes Geld auf dem Spiel stehen würde?',
  'Was bedeutet Risiko für dich – und wie hast du es heute bewertet?',
  'Wie hat das Ereignis deine Entscheidung beeinflusst? Hast du impulsiv reagiert?',
  'Welche Aktie bereust du gekauft – oder nicht gekauft – zu haben? Warum?',
  'Was ist Diversifikation – und hast du sie in deinem Portfolio umgesetzt?',
  'Wie unterscheiden sich ETFs von Einzelaktien? Was bevorzugst du, und warum?',
  'Würdest du jetzt anders investieren als zu Beginn? Was hast du gelernt?',
  'Welche Emotion hat dich bei einer Entscheidung am stärksten beeinflusst?',
  'Was nimmst du aus diesem Spiel für echte Finanzentscheidungen mit?',
]

export function calculateNewPrices(
  currentPrices: Record<string, number>,
  assets: Asset[],
  event: GameEvent,
  difficulty: Difficulty = 'fortgeschritten'
): Record<string, number> {
  const diffMult = DIFFICULTY_MULTIPLIERS[difficulty]
  const newPrices: Record<string, number> = {}
  for (const asset of assets) {
    const current = currentPrices[asset.id] ?? asset.price
    const randomFactor = (Math.random() - 0.5) * 2 * asset.volatility * diffMult
    const riskMultiplier = asset.risk === 'hoch' ? 1.3 : asset.risk === 'mittel' ? 1.0 : 0.7
    const eventImpact = event.affectedSectors.includes(asset.sector) ? event.impact : 0
    const totalChange = randomFactor * riskMultiplier + eventImpact
    newPrices[asset.id] = Math.max(1, current * (1 + totalChange))
  }
  return newPrices
}

export function calculatePortfolioValue(
  positions: Position[],
  prices: Record<string, number>
): number {
  return positions.reduce((sum, pos) => {
    const price = prices[pos.assetId] ?? 0
    return sum + pos.quantity * price
  }, 0)
}

export function calcDiversificationScore(
  positions: Position[],
  assets: Asset[],
  prices: Record<string, number>
): number {
  const totalValue = calculatePortfolioValue(positions, prices)
  if (totalValue === 0 || positions.length === 0) return 0

  // Score based on number of holdings and concentration
  const holdingCount = positions.length
  const maxHoldings = assets.length

  // Herfindahl-Hirschman Index inversion
  const hhi = positions.reduce((sum, pos) => {
    const weight = (pos.quantity * (prices[pos.assetId] ?? 0)) / totalValue
    return sum + weight * weight
  }, 0)

  const countScore = (holdingCount / maxHoldings) * 50
  const concentrationScore = (1 - hhi) * 50

  return Math.min(100, Math.round(countScore + concentrationScore))
}

export function calcRiskScore(
  positions: Position[],
  assets: Asset[],
  prices: Record<string, number>
): number {
  const totalValue = calculatePortfolioValue(positions, prices)
  if (totalValue === 0 || positions.length === 0) return 0

  const riskWeights: Record<string, number> = { niedrig: 20, mittel: 60, hoch: 100 }

  const weightedRisk = positions.reduce((sum, pos) => {
    const asset = assets.find((a) => a.id === pos.assetId)
    if (!asset) return sum
    const weight = (pos.quantity * (prices[pos.assetId] ?? 0)) / totalValue
    return sum + weight * riskWeights[asset.risk]
  }, 0)

  return Math.min(100, Math.round(weightedRisk))
}

export function calcReflectionScore(
  reflections: { answer: string }[],
  totalRounds: number
): number {
  const answered = reflections.filter((r) => r.answer.trim().length > 10).length
  return Math.min(100, Math.round((answered / totalRounds) * 100))
}

export function createInitialState(
  playerName: string,
  totalRounds: number,
  difficulty: Difficulty = 'fortgeschritten'
): GameState {
  const initialPrices: Record<string, number> = {}
  for (const asset of SEED_ASSETS) {
    initialPrices[asset.id] = asset.price
  }

  return {
    phase: 'PLAYING',
    playerName,
    totalRounds,
    currentRound: 1,
    startCapital: 10000,
    cash: 10000,
    positions: [],
    transactions: [],
    reflections: [],
    priceHistory: [{ round: 0, prices: initialPrices }],
    currentPrices: initialPrices,
    currentEvent: null,
    roundChanges: {},
    difficulty,
    wealthHistory: [10000],
  }
}

export function getRandomEvent(usedEventIds: string[]): GameEvent {
  const available = EVENTS.filter((e) => !usedEventIds.includes(e.id))
  const pool = available.length > 0 ? available : EVENTS
  return pool[Math.floor(Math.random() * pool.length)]
}
