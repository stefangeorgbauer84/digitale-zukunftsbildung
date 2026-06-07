import type {
  Asset,
  Difficulty,
  GameEvent,
  GameState,
  PlayerRole,
  Position,
  RoleDefinition,
} from '../types'

// ---------------------------------------------------------------------------
// Spieljahr-Basis (Runde 1 = 2026, Runde 2 = 2027, …)
// ---------------------------------------------------------------------------
export const START_YEAR = 2026

export function roundToYear(round: number): number {
  return START_YEAR + round - 1
}

// ---------------------------------------------------------------------------
// Schwierigkeitsgrad-Multiplikatoren
// ---------------------------------------------------------------------------
export const DIFFICULTY_MULTIPLIERS: Record<Difficulty, number> = {
  einsteiger: 0.5,
  fortgeschritten: 1.0,
  experte: 1.8,
}

// ---------------------------------------------------------------------------
// Investoren-Rollen — die 5 wählbaren Persönlichkeiten
// ---------------------------------------------------------------------------
export const PLAYER_ROLES: Record<PlayerRole, RoleDefinition> = {
  sicherheitsdenker: {
    id: 'sicherheitsdenker',
    name: 'Sicherheitsdenker',
    tagline: 'Stabilität vor Rendite',
    description:
      'Du setzt auf ETFs und defensive Werte. Für dich ist Kapitalerhalt wichtiger als maximale Rendite. Du schläfst nachts ruhig, auch wenn die Märkte schwanken.',
    mission:
      'Beende das Spiel mit einem Risiko-Score unter 35 und mindestens 3 verschiedenen Assets im Portfolio.',
    missionShort: 'Risiko-Score < 35 & ≥ 3 Assets',
    favoredSectors: ['Diversifiziert', 'Österreich', 'Gesundheit'],
    favoredRisk: ['niedrig'],
    colorClass: 'text-status-teal',
    bgClass: 'bg-status-teal-light',
    borderClass: 'border-status-teal',
    tradeTip:
      'Als Sicherheitsdenker profitierst du von ETFs: Sie streuen das Risiko automatisch über viele Unternehmen.',
    bonusLabel: 'Sicherheitsstrategie erfüllt (+15 Punkte)',
  },
  wachstumssucher: {
    id: 'wachstumssucher',
    name: 'Wachstumssucher',
    tagline: 'Hohe Chance, hohes Risiko',
    description:
      'Technologie und Innovation faszinieren dich. Du nimmst höhere Schwankungen in Kauf, weil du an langfristiges Wachstum glaubst. Geduld und Nerven sind deine Stärke.',
    mission:
      'Erziele eine Gesamtperformance von über +10 % bis zum Spielende.',
    missionShort: 'Performance > +10 %',
    favoredSectors: ['Technologie', 'Mobilität'],
    favoredRisk: ['hoch', 'mittel'],
    colorClass: 'text-primary-dark',
    bgClass: 'bg-primary-50',
    borderClass: 'border-primary-medium',
    tradeTip:
      'Als Wachstumssucher lohnen sich Wachstumswerte – aber plane Schwankungen ein und verkaufe nicht panisch bei kurzfristigen Verlusten.',
    bonusLabel: 'Wachstumsstrategie erfüllt (+15 Punkte)',
  },
  nachhaltigkeitsinvestor: {
    id: 'nachhaltigkeitsinvestor',
    name: 'Nachhaltigkeitsinvestor',
    tagline: 'Rendite mit Verantwortung',
    description:
      'Für dich müssen Investments einen positiven Beitrag leisten. Du bevorzugst Unternehmen, die ökologisch und sozial verantwortlich handeln – und glaubst, dass Nachhaltigkeit sich langfristig auszahlt.',
    mission:
      'Halte mindestens 50 % deines investierten Kapitals in nachhaltigen Assets (GreenEnergy, Austria ETF).',
    missionShort: '≥ 50 % in nachhaltigen Assets',
    favoredSectors: ['Energie', 'Österreich', 'Diversifiziert'],
    favoredRisk: ['niedrig', 'mittel'],
    colorClass: 'text-green-700',
    bgClass: 'bg-green-50',
    borderClass: 'border-green-500',
    tradeTip:
      'Als Nachhaltigkeitsinvestor achte auf GreenEnergy Europe und den Austria Stability ETF – beide gelten in dieser Simulation als nachhaltigkeitsorientiert.',
    bonusLabel: 'Nachhaltigkeitsstrategie erfüllt (+15 Punkte)',
  },
  diversifizierer: {
    id: 'diversifizierer',
    name: 'Diversifizierer',
    tagline: 'Nicht alles auf eine Karte',
    description:
      'Du weißt: Niemand kann die Zukunft vorhersagen. Deshalb streust du breit über Sektoren, Risikoklassen und Asset-Typen. Dein Ziel ist ein ausgewogenes Portfolio, das verschiedene Szenarien übersteht.',
    mission:
      'Halte am Spielende Anteile an mindestens 4 verschiedenen Assets aus mindestens 3 Sektoren.',
    missionShort: '≥ 4 Assets aus ≥ 3 Sektoren',
    favoredSectors: ['Diversifiziert', 'Technologie', 'Energie', 'Gesundheit', 'Mobilität'],
    favoredRisk: ['niedrig', 'mittel', 'hoch'],
    colorClass: 'text-status-orange',
    bgClass: 'bg-status-orange-light',
    borderClass: 'border-status-orange',
    tradeTip:
      'Als Diversifizierer gilt: Kein einzelnes Asset sollte mehr als 25 % deines Gesamtportfolios ausmachen.',
    bonusLabel: 'Diversifikationsstrategie erfüllt (+15 Punkte)',
  },
  spekulant: {
    id: 'spekulant',
    name: 'Spekulant',
    tagline: 'Mut zur Volatilität',
    description:
      'Du liebst Bewegung an den Märkten. Hohe Schwankungen sind für dich Chancen, keine Gefahren. Du reagierst schnell auf Ereignisse – und lernst dabei viel über Marktpsychologie und Risiko.',
    mission:
      'Führe in diesem Spiel mindestens 8 Transaktionen durch (Käufe + Verkäufe).',
    missionShort: '≥ 8 Transaktionen',
    favoredSectors: ['Technologie', 'Mobilität'],
    favoredRisk: ['hoch'],
    colorClass: 'text-red-600',
    bgClass: 'bg-red-50',
    borderClass: 'border-red-400',
    tradeTip:
      'Als Spekulant: Reagiere auf Marktereignisse – aber reflektiere danach, ob die Entscheidung auf Analyse oder Emotion beruhte.',
    bonusLabel: 'Spekulationsstrategie erfüllt (+15 Punkte)',
  },
}

// ---------------------------------------------------------------------------
// Assets — 8 fiktive Wertpapiere (inkl. 2 neue aus Iteration 2)
// ---------------------------------------------------------------------------
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
    sustainable: true,
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
    sustainable: true,
  },
  // Neu in Iteration 2
  {
    id: 'techpioneer',
    name: 'TechPioneer ETF',
    symbol: 'TPE',
    type: 'ETF',
    sector: 'Technologie',
    risk: 'mittel',
    price: 112,
    volatility: 0.08,
    description:
      'Diversifizierter ETF auf europäische Technologie- und Digitalunternehmen. Breiter als Einzelaktien, aber technikfokussiert.',
    sustainable: true,
  },
  {
    id: 'bondsecure',
    name: 'Bond Secure AT',
    symbol: 'BSA',
    type: 'ETF',
    sector: 'Anleihen',
    risk: 'niedrig',
    price: 100,
    volatility: 0.02,
    description:
      'Fiktiver Anleihen-ETF auf österreichische Staatsanleihen. Sehr stabil, kaum Wachstum – ideal zur Absicherung.',
  },
]

// ---------------------------------------------------------------------------
// Ereignisse — 8 Szenarien (inkl. 3 neue aus Iteration 2)
// ---------------------------------------------------------------------------
export const EVENTS: GameEvent[] = [
  {
    id: 'zinsen',
    title: 'Zinsen steigen',
    description: 'Die EZB erhöht die Leitzinsen um 0,5 Prozentpunkte.',
    explanation:
      'Steigende Zinsen machen Kredite teurer. Technologiefirmen, die oft auf Fremdkapital angewiesen sind, leiden besonders. Anleihen werden attraktiver, Aktien weniger.',
    affectedSectors: ['Technologie', 'Mobilität'],
    impact: -0.06,
  },
  {
    id: 'eu-energie',
    title: 'EU-Förderung Erneuerbare',
    description: 'Die EU beschließt ein 200-Milliarden-Paket für grüne Energie.',
    explanation:
      'Staatliche Förderungen steigern direkt die Umsätze von Unternehmen in der Energiewende. Investoren reagieren positiv auf sichere Zukunftsperspektiven.',
    affectedSectors: ['Energie', 'Mobilität'],
    impact: 0.08,
  },
  {
    id: 'lieferketten',
    title: 'Lieferketten entspannen sich',
    description: 'Globale Lieferengpässe lösen sich schneller als erwartet auf.',
    explanation:
      'Wenn Rohstoffe und Bauteile wieder frei fließen, sinken die Produktionskosten. Das nützt Industrie- und Technologieunternehmen gleichermaßen.',
    affectedSectors: ['Technologie', 'Mobilität', 'Österreich'],
    impact: 0.05,
  },
  {
    id: 'konjunktur',
    title: 'Konjunktursorgen',
    description: 'Wirtschaftsforschungsinstitute senken ihre Wachstumsprognosen.',
    explanation:
      'Bei schwächerem Wirtschaftswachstum sinken Unternehmensgewinne. Defensive Sektoren wie Gesundheit sind weniger betroffen als zyklische Branchen.',
    affectedSectors: ['Technologie', 'Mobilität', 'Diversifiziert'],
    impact: -0.05,
  },
  {
    id: 'gesundheit',
    title: 'Gesundheitssektor stabil',
    description: 'Neue Studiendaten belegen den Nutzen digitaler Gesundheitslösungen.',
    explanation:
      'Positive Studienergebnisse stärken das Vertrauen in Medizintechnikunternehmen. Der Sektor gilt als krisenfest, weil Menschen immer medizinische Versorgung brauchen.',
    affectedSectors: ['Gesundheit'],
    impact: 0.07,
  },
  // Neu in Iteration 2
  {
    id: 'inflation',
    title: 'Inflation überraschend hoch',
    description: 'Die Inflation steigt stärker als erwartet – Kaufkraft sinkt.',
    explanation:
      'Hohe Inflation belastet Unternehmen mit hohen Kosten und Verbraucher mit weniger Kaufkraft. Sachwerte und Rohstoffe gelten oft als Schutz vor Inflation – ETFs können stabilisierend wirken.',
    affectedSectors: ['Diversifiziert', 'Anleihen', 'Österreich'],
    impact: -0.04,
  },
  {
    id: 'digitalisierung',
    title: 'Digitalisierungsschub',
    description: 'Regierungen investieren massiv in digitale Infrastruktur.',
    explanation:
      'Öffentliche Investitionen in Digitalisierung stärken Technologieunternehmen direkt. Aufträge, Fördermittel und steigende Nachfrage nach IT-Dienstleistungen kurbeln die Branche an.',
    affectedSectors: ['Technologie'],
    impact: 0.1,
  },
  {
    id: 'klimaregulierung',
    title: 'Neue Klimaregulierung',
    description: 'Strengere CO₂-Regeln treffen emissionsintensive Branchen hart.',
    explanation:
      'Klimaregulierungen erhöhen Kosten für traditionelle Industrien, während nachhaltige Unternehmen profitieren. Das ist ein Beispiel dafür, wie politische Entscheidungen ganze Sektoren umformen können.',
    affectedSectors: ['Energie', 'Österreich'],
    impact: 0.06,
  },
]

// ---------------------------------------------------------------------------
// Reflexionsfragen — rollenspezifische Sätze eingebaut
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Rollen-spezifische Reflexionsfragen (nach Runde 3+)
// ---------------------------------------------------------------------------
export const ROLE_REFLECTION_QUESTIONS: Record<PlayerRole, string> = {
  sicherheitsdenker:
    'Hast du das Gefühl, dass deine sicherheitsorientierte Strategie aufgegangen ist? Was war die ruhigste Entscheidung, die du getroffen hast?',
  wachstumssucher:
    'Hast du Wachstumswerte konsequent gehalten, auch wenn sie zwischenzeitlich gefallen sind? Was war psychologisch die schwierigste Runde?',
  nachhaltigkeitsinvestor:
    'Hast du deine Nachhaltigkeitsstrategie konsequent umgesetzt? Wo war die Versuchung größer, auf reine Rendite zu setzen?',
  diversifizierer:
    'Wie gut hast du dein Portfolio tatsächlich diversifiziert? Gab es Sektoren, die du vernachlässigt hast – und warum?',
  spekulant:
    'Welche deiner schnellen Entscheidungen war rückblickend die richtige? Welche bereust du? Was trennst du Emotion von Analyse?',
}

// ---------------------------------------------------------------------------
// Kursberechnung
// ---------------------------------------------------------------------------
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

// ---------------------------------------------------------------------------
// Portfolio-Wert
// ---------------------------------------------------------------------------
export function calculatePortfolioValue(
  positions: Position[],
  prices: Record<string, number>
): number {
  return positions.reduce((sum, pos) => {
    const price = prices[pos.assetId] ?? 0
    return sum + pos.quantity * price
  }, 0)
}

// ---------------------------------------------------------------------------
// Scoring-Funktionen
// ---------------------------------------------------------------------------

/** Diversifikations-Score 0–100 */
export function calcDiversificationScore(
  positions: Position[],
  assets: Asset[],
  prices: Record<string, number>
): number {
  const totalValue = calculatePortfolioValue(positions, prices)
  if (totalValue === 0 || positions.length === 0) return 0
  const holdingCount = positions.length
  const maxHoldings = assets.length
  const hhi = positions.reduce((sum, pos) => {
    const weight = (pos.quantity * (prices[pos.assetId] ?? 0)) / totalValue
    return sum + weight * weight
  }, 0)
  const countScore = (holdingCount / maxHoldings) * 50
  const concentrationScore = (1 - hhi) * 50
  return Math.min(100, Math.round(countScore + concentrationScore))
}

/** Risiko-Score 0–100 (höher = riskanter) */
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

/** Reflexions-Score 0–100 */
export function calcReflectionScore(
  reflections: { answer: string }[],
  totalRounds: number
): number {
  const answered = reflections.filter((r) => r.answer.trim().length > 10).length
  return Math.min(100, Math.round((answered / totalRounds) * 100))
}

/** Rollen-Mission erfüllt? Gibt 0 oder 15 Bonus-Punkte zurück */
export function calcRoleMissionBonus(
  state: GameState,
  assets: Asset[]
): { fulfilled: boolean; bonusPoints: number; reason: string } {
  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performance = ((totalWealth - state.startCapital) / state.startCapital) * 100
  const riskScore = calcRiskScore(state.positions, assets, state.currentPrices)

  switch (state.role) {
    case 'sicherheitsdenker': {
      // Risiko-Score < 35 UND mind. 3 Assets
      const ok = riskScore < 35 && state.positions.length >= 3
      return {
        fulfilled: ok,
        bonusPoints: ok ? 15 : 0,
        reason: ok
          ? `Risiko-Score ${riskScore} < 35 und ${state.positions.length} Assets im Portfolio`
          : `Risiko-Score ${riskScore} (Ziel: unter 35) und ${state.positions.length} Assets (Ziel: mind. 3)`,
      }
    }
    case 'wachstumssucher': {
      const ok = performance > 10
      return {
        fulfilled: ok,
        bonusPoints: ok ? 15 : 0,
        reason: ok
          ? `Performance von +${performance.toFixed(1)} % erreicht`
          : `Performance ${performance.toFixed(1)} % (Ziel: > +10 %)`,
      }
    }
    case 'nachhaltigkeitsinvestor': {
      // Mind. 50 % des investierten Kapitals in nachhaltigen Assets
      const sustainableIds = assets.filter((a) => a.sustainable).map((a) => a.id)
      const sustainableValue = state.positions
        .filter((p) => sustainableIds.includes(p.assetId))
        .reduce((sum, p) => sum + p.quantity * (state.currentPrices[p.assetId] ?? 0), 0)
      const ok = portfolioValue > 0 && sustainableValue / portfolioValue >= 0.5
      const pct = portfolioValue > 0 ? Math.round((sustainableValue / portfolioValue) * 100) : 0
      return {
        fulfilled: ok,
        bonusPoints: ok ? 15 : 0,
        reason: ok
          ? `${pct} % des investierten Kapitals in nachhaltigen Assets`
          : `${pct} % in nachhaltigen Assets (Ziel: mind. 50 %)`,
      }
    }
    case 'diversifizierer': {
      // Mind. 4 verschiedene Assets aus mind. 3 Sektoren
      const sectors = new Set(
        state.positions.map((p) => assets.find((a) => a.id === p.assetId)?.sector ?? '')
      )
      const ok = state.positions.length >= 4 && sectors.size >= 3
      return {
        fulfilled: ok,
        bonusPoints: ok ? 15 : 0,
        reason: ok
          ? `${state.positions.length} Assets aus ${sectors.size} Sektoren`
          : `${state.positions.length} Assets aus ${sectors.size} Sektoren (Ziel: ≥ 4 Assets, ≥ 3 Sektoren)`,
      }
    }
    case 'spekulant': {
      const ok = state.transactions.length >= 8
      return {
        fulfilled: ok,
        bonusPoints: ok ? 15 : 0,
        reason: ok
          ? `${state.transactions.length} Transaktionen durchgeführt`
          : `${state.transactions.length} Transaktionen (Ziel: mind. 8)`,
      }
    }
  }
}

/** Missions-Fortschritt 0–100 % (für Progressbar im Dashboard) */
export function calcMissionProgress(state: GameState, assets: Asset[]): number {
  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performance = ((totalWealth - state.startCapital) / state.startCapital) * 100
  const riskScore = calcRiskScore(state.positions, assets, state.currentPrices)

  switch (state.role) {
    case 'sicherheitsdenker': {
      const riskProgress = Math.max(0, Math.min(100, ((70 - riskScore) / 70) * 60))
      const assetProgress = Math.min(100, (state.positions.length / 3) * 40)
      return Math.round(riskProgress + assetProgress)
    }
    case 'wachstumssucher':
      return Math.min(100, Math.max(0, Math.round((performance / 10) * 100)))
    case 'nachhaltigkeitsinvestor': {
      const sustainableIds = assets.filter((a) => a.sustainable).map((a) => a.id)
      const sustainableValue = state.positions
        .filter((p) => sustainableIds.includes(p.assetId))
        .reduce((sum, p) => sum + p.quantity * (state.currentPrices[p.assetId] ?? 0), 0)
      return portfolioValue > 0
        ? Math.min(100, Math.round((sustainableValue / portfolioValue) * 200))
        : 0
    }
    case 'diversifizierer': {
      const sectors = new Set(
        state.positions.map((p) => assets.find((a) => a.id === p.assetId)?.sector ?? '')
      )
      const assetProgress = Math.min(100, (state.positions.length / 4) * 50)
      const sectorProgress = Math.min(100, (sectors.size / 3) * 50)
      return Math.round(assetProgress + sectorProgress)
    }
    case 'spekulant':
      return Math.min(100, Math.round((state.transactions.length / 8) * 100))
  }
}

/**
 * Gewichteter Gesamtscore 0–100 mit Schulnote
 * Performance 40 % | Diversifikation 20 % | Reflexion 20 % | Rolle 15 % | Risikobewusstsein 5 %
 */
export function calcGesamtScore(
  state: GameState,
  assets: Asset[]
): { score: number; grade: 'A' | 'B' | 'C' | 'D' | 'E'; breakdown: Record<string, number> } {
  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const totalWealth = state.cash + portfolioValue
  const performancePct = ((totalWealth - state.startCapital) / state.startCapital) * 100

  // Performance: -20 % → 0 Punkte, +20 % → 100 Punkte, linear
  const perfScore = Math.min(100, Math.max(0, Math.round(((performancePct + 20) / 40) * 100)))
  const diversiScore = calcDiversificationScore(state.positions, assets, state.currentPrices)
  const reflScore = calcReflectionScore(state.reflections, state.totalRounds)
  const { fulfilled } = calcRoleMissionBonus(state, assets)
  const roleScore = fulfilled ? 100 : 0
  const riskScore = 100 - calcRiskScore(state.positions, assets, state.currentPrices)

  const score = Math.round(
    perfScore * 0.4 +
    diversiScore * 0.2 +
    reflScore * 0.2 +
    roleScore * 0.15 +
    riskScore * 0.05
  )

  const grade =
    score >= 87 ? 'A' :
    score >= 72 ? 'B' :
    score >= 57 ? 'C' :
    score >= 42 ? 'D' : 'E'

  return {
    score,
    grade,
    breakdown: { perfScore, diversiScore, reflScore, roleScore, riskScore },
  }
}

// ---------------------------------------------------------------------------
// Initialzustand
// ---------------------------------------------------------------------------
export function createInitialState(
  playerName: string,
  totalRounds: number,
  difficulty: Difficulty = 'fortgeschritten',
  role: PlayerRole = 'diversifizierer'
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
    role,
  }
}

// ---------------------------------------------------------------------------
// Zufälliges Ereignis (ohne Wiederholung bis alle verbraucht)
// ---------------------------------------------------------------------------
export function getRandomEvent(usedEventIds: string[]): GameEvent {
  const available = EVENTS.filter((e) => !usedEventIds.includes(e.id))
  const pool = available.length > 0 ? available : EVENTS
  return pool[Math.floor(Math.random() * pool.length)]
}
