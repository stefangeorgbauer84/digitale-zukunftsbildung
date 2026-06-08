'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { Asset, GameState } from '../types'
import { REFLECTION_QUESTIONS, ROLE_REFLECTION_QUESTIONS, PLAYER_ROLES, calculatePortfolioValue, roundToYear, START_YEAR } from '../lib/gameEngine'
import EventImpactHeatmap from './EventImpactHeatmap'

// ---------------------------------------------------------------------------
// Jährliche Lerneinheiten 2026–2035 (erweitert mit Deep-Dive & Capybara-Tipp)
// ---------------------------------------------------------------------------
interface YearlyLearning {
  year: number
  title: string
  concept: string
  explanation: string
  deepDive: string[]
  tip: string
  capybaraTip: string
  emoji: string
}

const YEARLY_LEARNINGS: YearlyLearning[] = [
  {
    year: 2026,
    emoji: '🏦',
    title: 'Wie funktioniert eine Börse?',
    concept: 'Angebot & Nachfrage',
    explanation:
      'Eine Börse ist ein Marktplatz, auf dem Käufer und Verkäufer zusammenkommen. Der Kurs einer Aktie steigt, wenn mehr Menschen kaufen wollen als verkaufen – und fällt, wenn das Gegenteil der Fall ist. Niemand setzt den Preis fest: Er entsteht durch Millionen von Entscheidungen jeden Tag.',
    deepDive: [
      'Aktien werden in Millisekunden gehandelt – elektronische Handelssysteme führen täglich Milliarden Transaktionen durch.',
      'Der „Bid-Ask-Spread" ist die Differenz zwischen Kauf- und Verkaufspreis. Je liquider ein Markt, desto kleiner dieser Spread.',
      'Marktindizes wie der ATX oder DAX messen die durchschnittliche Entwicklung vieler Aktien gleichzeitig.',
      'Es gibt verschiedene Ordertypen: Marktorder (sofort zum aktuellen Preis) und Limitorder (nur zu einem bestimmten Wunschpreis).',
    ],
    tip: 'Merke: Kurse spiegeln Erwartungen wider – nicht die aktuelle Realität, sondern was die meisten für die Zukunft erwarten.',
    capybaraTip: 'Ich esse auch lieber langsam. Hastige Käufe enden selten gut.',
  },
  {
    year: 2027,
    emoji: '📈',
    title: 'Zinseszins – der mächtigste Effekt im Investieren',
    concept: 'Zinseszins (Compounding)',
    explanation:
      'Wenn dein Geld Rendite erwirtschaftet und diese Rendite wieder investiert wird, wächst dein Kapital exponentiell. Aus 10.000 € werden bei 7 % jährlicher Rendite nach 10 Jahren fast 20.000 € – ohne einen Cent zusätzlich einzuzahlen. Je früher man beginnt, desto stärker wirkt dieser Effekt.',
    deepDive: [
      'Albert Einstein soll den Zinseszins als „achtes Weltwunder" bezeichnet haben.',
      'Wer mit 25 anfängt zu sparen, braucht nur halb so viel einzuzahlen wie jemand, der erst mit 35 beginnt – bei gleichem Ziel.',
      'Dividenden-Reinvestition ist Zinseszins in Aktienform: Dividenden kaufen neue Anteile, die wieder Dividenden zahlen.',
      'Gebühren wirken wie negativer Zinseszins: 1 % Kosten pro Jahr kosten über 30 Jahre bis zu 26 % des Endvermögens.',
    ],
    tip: 'Faustregel: Teile 72 durch die Rendite in Prozent – so viele Jahre dauert es, bis sich dein Kapital verdoppelt. Bei 7 %: ca. 10 Jahre.',
    capybaraTip: 'Ich wachse auch langsam – aber stetig. Geduld zahlt sich aus.',
  },
  {
    year: 2028,
    emoji: '🌊',
    title: 'Marktzyklen – Boom und Krise',
    concept: 'Bullen- und Bärenmärkte',
    explanation:
      'Aktienmärkte verlaufen in Zyklen: Aufschwung (Bullenmarkt), Überhitzung, Korrektur, Abschwung (Bärenmarkt), Erholung. Diese Zyklen dauern selten gleich lang – manche Booms halten ein Jahrzehnt, manche Krisen sind in Monaten vorbei. Wer in der Krise verkauft, realisiert Verluste. Wer hält oder sogar nachkauft, profitiert oft von der Erholung.',
    deepDive: [
      'Ein Bärenmarkt ist offiziell definiert als ein Kursrückgang von mehr als 20 % vom letzten Höchststand.',
      'Die längste Börsenhausse der Geschichte dauerte von 2009 bis 2020 – über 11 Jahre ohne Bärenmarkt.',
      '„Buy the Dip" – in Korrekturen nachkaufen – hat historisch langfristig fast immer funktioniert.',
      'Marktzyklen hängen eng mit dem wirtschaftlichen Konjunkturzyklus zusammen: Aufschwung, Boom, Abschwung, Rezession.',
    ],
    tip: 'Historisch steigen Aktienmärkte langfristig trotz aller Krisen. Das schnellste Bärmarkterholung dauerte nur 33 Tage (Corona-Crash 2020).',
    capybaraTip: 'Wenn das Wasser steigt, schwimme ich einfach. Panik ist keine Strategie.',
  },
  {
    year: 2029,
    emoji: '⚖️',
    title: 'Risiko und Rendite – zwei Seiten einer Medaille',
    concept: 'Risiko-Rendite-Verhältnis',
    explanation:
      'Kein Investment bietet hohe Rendite ohne Risiko. Anleihen und Sparkonten sind sicher, werfen aber kaum Ertrag ab. Aktien schwanken stark, bieten aber langfristig deutlich mehr Wachstum. Das Risiko-Rendite-Verhältnis ist ein Kernprinzip: Wer mehr Risiko trägt, soll dafür langfristig entschädigt werden.',
    deepDive: [
      'Die Standardabweichung misst, wie stark ein Investment schwankt. Hohe Standardabweichung = hohes Risiko.',
      'Der Sharpe-Ratio zeigt, wie viel Rendite man pro Risikoeinheit bekommt. Je höher, desto effizienter das Investment.',
      'Risiko ist nicht gleich Verlust: Es ist die Ungewissheit über die zukünftige Entwicklung – auch nach oben.',
      'Klumpenrisiko entsteht, wenn zu viel Kapital in einem einzigen Bereich steckt – gefährlicher als normales Marktrisiko.',
    ],
    tip: 'Frage dich bei jedem Investment: Wie viel Verlust kann ich verkraften, ohne panisch zu verkaufen? Das bestimmt deinen persönlichen Risikohorizont.',
    capybaraTip: 'Ich spring auch nicht in jedes Gewässer. Erst schauen, dann springen.',
  },
  {
    year: 2030,
    emoji: '🗺️',
    title: 'Diversifikation – nicht alles auf eine Karte',
    concept: 'Portfoliostreuung',
    explanation:
      'Wenn du nur eine Aktie hältst und das Unternehmen Pleite geht, verlierst du alles. Hältst du 20 verschiedene Aktien aus 5 Branchen und 3 Ländern, trifft dich ein Einzelverlust viel schwächer. Diversifikation ist der einzige „Free Lunch" im Investieren – du reduzierst Risiko, ohne automatisch Rendite aufzugeben.',
    deepDive: [
      'Bereits 15–20 verschiedene Aktien aus unterschiedlichen Branchen reduzieren das unsystematische Risiko fast vollständig.',
      'Geografische Diversifikation schützt vor regionalen Krisen: Wenn Europa schwächelt, können Asien oder USA ausgleichen.',
      'Auch Anlageklassen diversifizieren: Aktien, Anleihen, Rohstoffe und Immobilien reagieren oft unterschiedlich auf Ereignisse.',
      'Korrelation ist der Schlüssel: Ideal sind Assets, die sich gegenläufig verhalten – wenn eines fällt, steigt das andere.',
    ],
    tip: 'ETFs sind der einfachste Weg zur Diversifikation: Ein einziger ETF kann Anteile an Tausenden Unternehmen weltweit enthalten.',
    capybaraTip: 'Ich fresse auch nicht nur eine Pflanzensorte. Abwechslung hält gesund.',
  },
  {
    year: 2031,
    emoji: '💡',
    title: 'Behavioral Finance – warum wir irrationale Entscheidungen treffen',
    concept: 'Kognitive Verzerrungen',
    explanation:
      'Menschen sind keine rationalen Investoren. Wir verkaufen in Panik, wenn Kurse fallen (Verlustaversion). Wir halten Verlustpositionen zu lange, weil wir hoffen, sie erholen sich (Sunk-Cost-Fallacy). Wir kaufen was alle kaufen, wenn Kurse steigen (Herdenverhalten). Diese Fehler kosten Rendite – das Wissen darum hilft, sie zu vermeiden.',
    deepDive: [
      'Verlustaversion: Laut Kahneman und Tversky schmerzt ein Verlust von 100 € doppelt so stark wie eine Freude über 100 € Gewinn.',
      'Overconfidence: Die meisten Investoren überschätzen ihre Fähigkeit, den Markt zu schlagen. Studien zeigen: die wenigsten schaffen es.',
      'Recency Bias: Wir gewichten aktuelle Ereignisse stärker. Nach langen Booms erwarten wir weiteres Wachstum – kurz vor der Krise.',
      'Anchoring: Wir klammern uns an einen ersten Preis (z. B. Kaufkurs) und bewerten alles relativ dazu – selbst wenn er irrelevant ist.',
    ],
    tip: 'Strategie vor Emotion: Wer einen Plan hat und ihn durchhält, schlägt meist den, der auf Bauchgefühl reagiert.',
    capybaraTip: 'Meine Herde läuft manchmal in die falsche Richtung. Ich schaue lieber selbst nach.',
  },
  {
    year: 2032,
    emoji: '🌍',
    title: 'Nachhaltiges Investieren – ESG und was dahintersteckt',
    concept: 'ESG (Environment, Social, Governance)',
    explanation:
      'ESG-Kriterien bewerten Unternehmen nicht nur nach Gewinn, sondern auch nach Umweltauswirkungen (E), sozialer Verantwortung (S) und guter Unternehmensführung (G). Nachhaltige Fonds wachsen stark – nicht nur aus ethischen, sondern auch aus wirtschaftlichen Gründen: Unternehmen mit schlechtem ESG-Profil tragen oft höhere Regulierungs- und Reputationsrisiken.',
    deepDive: [
      'Weltweit fließen inzwischen über 30 Billionen USD in nachhaltige Investments – Tendenz stark steigend.',
      'Die EU-Taxonomie klassifiziert Wirtschaftsaktivitäten als „grün" – das beeinflusst, welche Unternehmen in ESG-Fonds aufgenommen werden.',
      'Impact Investing geht weiter als ESG: Kapital wird gezielt eingesetzt, um messbare soziale oder ökologische Wirkung zu erzielen.',
      'Greenwashing ist ein reales Problem: Manche Fonds nutzen ESG-Labels als Marketing, ohne echte Nachhaltigkeitskriterien anzuwenden.',
    ],
    tip: 'Achtung: „Greenwashing" ist real. Schau bei nachhaltigen Fonds auf konkrete Kriterien, nicht nur auf das Label.',
    capybaraTip: 'Ich lebe im Einklang mit der Natur. Wer das ignoriert, zahlt langfristig drauf.',
  },
  {
    year: 2033,
    emoji: '💰',
    title: 'Inflation – die stille Enteignung',
    concept: 'Kaufkraftverlust',
    explanation:
      'Inflation bedeutet, dass Geld über Zeit weniger wert wird. Bei 3 % Inflation pro Jahr kauft dein heutiger 100-€-Schein in 10 Jahren nur noch Waren im Wert von ca. 74 €. Wer sein Erspartes auf dem Sparbuch lässt, verliert real an Kaufkraft. Aktien und Sachwerte gelten deshalb als langfristiger Schutz vor Inflation.',
    deepDive: [
      'Der Verbraucherpreisindex (VPI) misst Inflation anhand eines Warenkorbs typischer Haushaltsausgaben.',
      'Hyperinflation (über 50 % pro Monat) hat historisch ganze Ersparnisse vernichtet – zuletzt in Simbabwe und Venezuela.',
      'Die EZB hat das Ziel, Inflation bei ca. 2 % zu halten – zu wenig gefährdet die Wirtschaft genauso wie zu viel.',
      'Anleihen leiden unter Inflation besonders: Fixe Zinszahlungen verlieren real an Wert, wenn die Preise steigen.',
    ],
    tip: 'Reale Rendite = Nominale Rendite minus Inflation. Bei 7 % Rendite und 3 % Inflation beträgt die reale Rendite ca. 4 %.',
    capybaraTip: 'Ich horte kein Gras. Es wird sowieso irgendwann weniger wert. Investieren statt horten!',
  },
  {
    year: 2034,
    emoji: '🤖',
    title: 'Technologie und Märkte – Disruption als Anlage-Chance',
    concept: 'Technologischer Wandel',
    explanation:
      'Neue Technologien schaffen neue Gewinner und zerstören bestehende Branchen. Kodak verpasste die Digitalkamera, Nokia das Smartphone, Blockbuster das Streaming. Wer früh in Disruption investiert, kann stark profitieren – trägt aber auch das Risiko, auf den falschen Durchbruch zu setzen. ETFs auf Technologieindizes bieten hier eine breite Streuung.',
    deepDive: [
      'Die „Gartner Hype Curve" zeigt: Neue Technologien durchlaufen erst übertriebene Begeisterung, dann Ernüchterung, dann reales Wachstum.',
      'Künstliche Intelligenz, Quantencomputing und Biotech gelten als nächste große Disruptions-Wellen für Aktienmärkte.',
      'Platform-Unternehmen (Google, Amazon, Meta) haben Netzwerkeffekte: Je mehr Nutzer, desto wertvoller die Plattform.',
      'Themen-ETFs (z. B. „Cybersecurity ETF" oder „Clean Energy ETF") bieten Zugang zu Megatrends ohne Einzelaktien-Risiko.',
    ],
    tip: 'Nicht jede neue Technologie überlebt den Hype. Viele Internet-Firmen aus dem Jahr 2000 existieren heute nicht mehr – Amazon schon.',
    capybaraTip: 'Auch ich musste mich an Smartphones gewöhnen. Wer sich nicht anpasst, stirbt aus.',
  },
  {
    year: 2035,
    emoji: '🎯',
    title: 'Langfristiges Denken – der wichtigste Vorteil privater Investoren',
    concept: 'Zeit als Wettbewerbsvorteil',
    explanation:
      'Professionelle Fondsmanager stehen unter Druck, kurzfristige Quartalsziele zu erfüllen. Private Investoren müssen das nicht. Wer 10, 20 oder 30 Jahre investiert bleibt, hat einen strukturellen Vorteil: Er kann Krisen aussitzen, Volatilität ignorieren und vom langfristigen Wachstum profitieren.',
    deepDive: [
      'Studien zeigen: Die meisten aktiv gemanagten Fonds schlagen ihren Vergleichsindex langfristig nicht – nach Kosten schon gar nicht.',
      'Time in the Market schlägt Timing the Market: Wer die 10 besten Börsentage in 20 Jahren verpasst, halbiert seine Rendite.',
      'Das 3-Phasen-Modell: Aufbauphase (viel investieren), Wachstumsphase (halten), Entnahmephase (schrittweise verkaufen).',
      'Ein schriftlicher Investmentplan mit klaren Regeln schützt vor emotionalen Fehlentscheidungen in Krisenzeiten.',
    ],
    tip: 'Warren Buffett: „Der Aktienmarkt ist ein Mechanismus zur Umverteilung von Geld von den Ungeduldigen zu den Geduldigen."',
    capybaraTip: 'Ich bin seit 10 Millionen Jahren fast unverändert. Weil ich nie in Panik geraten bin.',
  },
]

function getYearlyLearning(round: number): YearlyLearning | null {
  const year = START_YEAR + round - 1
  return YEARLY_LEARNINGS.find((l) => l.year === year) ?? null
}

function ChevronDownIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
}
function ChevronUpIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg>
}

// Expandable learning hint box
function LernHinweis({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-primary-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 bg-primary-50 text-left"
      >
        <span className="text-sm font-semibold text-primary-dark">{title}</span>
        {open ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </button>
      {open && (
        <div className="px-4 py-3 text-sm text-text-secondary bg-white">
          {children}
        </div>
      )}
    </div>
  )
}

// Rollenspezifischer Tipp für die nächste Runde basierend auf aktuellem Spielstand
function getNextRoundTip(state: GameState, assets: Asset[]): string | null {
  const portfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const total = portfolioValue + state.cash
  const cashPct = total > 0 ? (state.cash / total) * 100 : 100
  const posCount = state.positions.length

  switch (state.role) {
    case 'sicherheitsdenker':
      if (cashPct > 50) return `Du hast noch ${cashPct.toFixed(0)} % Cash. Als Sicherheitsdenker könntest du einen defensiven ETF in Betracht ziehen, um dein Kapital arbeiten zu lassen.`
      if (posCount < 3) return `Du hast erst ${posCount} Position(en). Deine Mission fordert mindestens 3 verschiedene Assets – streue breiter.`
      return `Dein Portfolio wirkt solide. Überprüfe, ob du zu viel in einem einzelnen Asset hast – auch bei niedrigem Risiko gilt: Streuung schützt.`
    case 'wachstumssucher':
      if (cashPct > 40) return `${cashPct.toFixed(0)} % Cash generiert keine Rendite. Als Wachstumssucher solltest du Wachstumswerte konsequenter aufbauen.`
      return `Halte Wachstumswerte auch bei Kursrückgängen – kurzfristige Verluste gehören zur Strategie. Überprüfe: Hast du Technologie und Mobilität abgedeckt?`
    case 'nachhaltigkeitsinvestor':
      if (posCount === 0) return `Noch keine Positionen. Als Nachhaltigkeitsinvestor sind GreenEnergy Europe und der Austria Stability ETF ideal.`
      return `Prüfe, ob mindestens 50 % deines investierten Kapitals in nachhaltigen Assets liegen – das ist deine Missions-Bedingung.`
    case 'diversifizierer':
      if (posCount < 4) return `Du hast ${posCount} Position(en). Deine Mission verlangt mindestens 4 Assets aus 3 verschiedenen Sektoren. Erkunde neue Branchen.`
      return `Gut gestreut! Stelle sicher, dass kein einzelnes Asset mehr als 30 % deines Portfolios ausmacht.`
    case 'spekulant':
      return `Du hast bisher ${state.transactions.length} Transaktionen. Ziel: mindestens 8. Reagiere aktiv auf Ereignisse – aber reflektiere nach jeder Entscheidung.`
  }
}

interface RoundEndScreenProps {
  state: GameState
  assets: Asset[]
  onReflectionSubmit: (answer: string) => void
  onNextRound: () => void
}

export default function RoundEndScreen({ state, assets, onReflectionSubmit, onNextRound }: RoundEndScreenProps) {
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // Ab Runde 3 abwechselnd rollenspezifische Fragen einstreuen
  const isRoleQuestion = state.currentRound >= 3 && state.currentRound % 3 === 0
  const question = isRoleQuestion
    ? ROLE_REFLECTION_QUESTIONS[state.role]
    : REFLECTION_QUESTIONS[(state.currentRound - 1) % REFLECTION_QUESTIONS.length]

  const prevPrices = state.priceHistory[state.priceHistory.length - 2]?.prices ?? state.currentPrices
  const currentPortfolioValue = calculatePortfolioValue(state.positions, state.currentPrices)
  const prevPortfolioValue = calculatePortfolioValue(state.positions, prevPrices)
  const portfolioChange = currentPortfolioValue - prevPortfolioValue

  const isLastRound = state.currentRound >= state.totalRounds

  // Jahres-Zusammenfassung Daten
  const totalWealth = state.cash + currentPortfolioValue
  const wealthChangePct = ((totalWealth - state.startCapital) / state.startCapital) * 100
  const cashPct = totalWealth > 0 ? (state.cash / totalWealth) * 100 : 100
  const roundTxCount = state.transactions.filter((t) => t.round === state.currentRound).length

  // Bestes und schlechtestes Asset dieser Runde
  const assetChanges = assets.map((asset) => {
    const prev = prevPrices[asset.id] ?? asset.price
    const curr = state.currentPrices[asset.id] ?? asset.price
    return { asset, pct: ((curr - prev) / prev) * 100 }
  })
  const bestAsset = [...assetChanges].sort((a, b) => b.pct - a.pct)[0]
  const worstAsset = [...assetChanges].sort((a, b) => a.pct - b.pct)[0]

  const handleSubmit = () => {
    onReflectionSubmit(answer)
    setSubmitted(true)
  }

  return (
    <div className="space-y-6">
      {/* Jahres-Zusammenfassung Card */}
      <div className="bg-white rounded-2xl shadow-card p-5">
        <div className="text-sm font-bold text-primary-dark mb-3">
          Jahr {roundToYear(state.currentRound)} im Überblick
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <div className="bg-status-teal-light rounded-xl p-3">
            <div className="text-xs text-text-muted mb-0.5">Bestes Asset</div>
            <div className="text-sm font-bold text-status-teal truncate">{bestAsset?.asset.name}</div>
            <div className="text-xs font-semibold text-status-teal">+{bestAsset?.pct.toFixed(1)}%</div>
          </div>
          <div className="bg-red-50 rounded-xl p-3">
            <div className="text-xs text-text-muted mb-0.5">Schwächstes Asset</div>
            <div className="text-sm font-bold text-red-500 truncate">{worstAsset?.asset.name}</div>
            <div className="text-xs font-semibold text-red-500">{worstAsset?.pct.toFixed(1)}%</div>
          </div>
          <div className={`rounded-xl p-3 ${portfolioChange >= 0 ? 'bg-status-teal-light' : 'bg-red-50'}`}>
            <div className="text-xs text-text-muted mb-0.5">Portfolio ±</div>
            <div className={`text-sm font-bold ${portfolioChange >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
              {portfolioChange >= 0 ? '+' : ''}{portfolioChange.toFixed(0)} €
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-xs text-text-muted mb-0.5">Transaktionen</div>
            <div className="text-sm font-bold text-text-primary">{roundTxCount}</div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="text-xs text-text-muted mb-0.5">Cash-Anteil</div>
            <div className="text-sm font-bold text-text-primary">{cashPct.toFixed(1)}%</div>
          </div>
          <div className={`rounded-xl p-3 ${wealthChangePct >= 0 ? 'bg-primary-50' : 'bg-red-50'}`}>
            <div className="text-xs text-text-muted mb-0.5">Gesamt-Performance</div>
            <div className={`text-sm font-bold ${wealthChangePct >= 0 ? 'text-primary-dark' : 'text-red-500'}`}>
              {wealthChangePct >= 0 ? '+' : ''}{wealthChangePct.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>

      {/* Event card */}
      {state.currentEvent && (
        <div className="bg-white rounded-2xl shadow-card p-6 border-l-4 border-primary-medium">
          <div className="text-xs font-semibold text-primary-medium uppercase tracking-wide mb-1">
            Marktereignis {roundToYear(state.currentRound)}
          </div>
          <h3 className="font-heading text-xl font-bold text-primary-dark mb-2">
            {state.currentEvent.title}
          </h3>
          <p className="text-text-secondary mb-4">{state.currentEvent.description}</p>
          <div className="bg-primary-dark/5 rounded-xl p-4 text-sm text-text-secondary mb-4">
            <strong className="text-primary-dark">Was bedeutet das?</strong>{' '}
            {state.currentEvent.explanation}
          </div>

          {/* Expandable learning hints (improvement 10) */}
          <div className="space-y-2">
            <LernHinweis title="Was sind Leitzinsen?">
              Der Leitzins ist der Zinssatz, zu dem sich Banken bei der Zentralbank (EZB) Geld leihen können. Steigt er, werden Kredite teurer – das belastet Unternehmen, die viel auf Pump finanzieren, besonders stark.
            </LernHinweis>
            <LernHinweis title="Warum reagieren Aktienmärkte auf Nachrichten?">
              Aktienkurse spiegeln die Erwartungen der Investorinnen und Investoren wider. Wenn eine Nachricht die zukünftigen Gewinne eines Unternehmens wahrscheinlicher oder unwahrscheinlicher macht, reagieren die Kurse sofort – oft noch bevor die eigentlichen Zahlen bekannt sind.
            </LernHinweis>
            <LernHinweis title="Was ist der Unterschied zwischen Sektor und Einzelaktie?">
              Ein Sektor umfasst viele Unternehmen der gleichen Branche (z. B. Technologie). Eine Einzelaktie ist ein Anteil an genau einem Unternehmen. Ereignisse können ganze Sektoren treffen – oder nur bestimmte Firmen darin.
            </LernHinweis>
          </div>
        </div>
      )}

      {/* Jährliches Learning */}
      {(() => {
        const learning = getYearlyLearning(state.currentRound)
        if (!learning) return null
        return (
          <div className="bg-white rounded-2xl shadow-card overflow-hidden border border-primary-100">
            {/* Header mit Logo */}
            <div className="bg-primary-dark px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{learning.emoji}</span>
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <Image src="/fotos/Logo.png" alt="Skills-UP!" width={18} height={18} className="rounded opacity-70" />
                    <span className="text-xs font-semibold text-white/50 uppercase tracking-wide">
                      Skills-UP! Lerneinheit {learning.year}
                    </span>
                  </div>
                  <div className="text-white font-heading font-bold text-base leading-tight">
                    {learning.title}
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 space-y-5">
              {/* Konzept-Badge */}
              <div className="inline-block bg-primary-50 text-primary-dark text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                Konzept: {learning.concept}
              </div>

              {/* Erklärung */}
              <p className="text-sm text-text-secondary leading-relaxed">
                {learning.explanation}
              </p>

              {/* Deep Dive */}
              <div>
                <div className="text-xs font-bold text-text-muted uppercase tracking-wide mb-3">Tiefer eintauchen</div>
                <ul className="space-y-2">
                  {learning.deepDive.map((point, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-text-secondary">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary-50 text-primary-dark text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Merksatz */}
              <div className="bg-status-teal-light border-l-4 border-status-teal rounded-r-xl px-4 py-3">
                <div className="text-xs font-bold text-status-teal uppercase tracking-wide mb-0.5">Merksatz</div>
                <p className="text-sm text-text-secondary italic">{learning.tip}</p>
              </div>

              {/* Capybara-Tipp */}
              <div className="flex items-center gap-4 bg-amber-50 border border-amber-100 rounded-xl p-4">
                <Image
                  src="/capybara-mascot.png"
                  alt="Capy sagt"
                  width={52}
                  height={52}
                  className="object-contain flex-shrink-0"
                />
                <div>
                  <div className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">Capy sagt:</div>
                  <p className="text-sm text-amber-800 italic">&ldquo;{learning.capybaraTip}&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        )
      })()}

      {/* Ereignis-Heatmap + Marktstimmung */}
      {state.currentEvent && (
        <EventImpactHeatmap event={state.currentEvent} assets={assets} state={state} />
      )}

      {/* Didaktische Strategie-Empfehlung für nächste Runde */}
      {!isLastRound && state.currentEvent && (() => {
        const roleDef = PLAYER_ROLES[state.role]
        const nextRoundTip = getNextRoundTip(state, assets)
        return nextRoundTip ? (
          <div className={`rounded-2xl p-4 border ${roleDef.bgClass} ${roleDef.borderClass}`}>
            <div className={`text-xs font-bold uppercase tracking-wide mb-1 ${roleDef.colorClass}`}>
              Strategietipp für {roundToYear(state.currentRound + 1)} — {roleDef.name}
            </div>
            <p className="text-sm text-text-secondary">{nextRoundTip}</p>
          </div>
        ) : null
      })()}

      {/* Price changes table */}
      <div className="bg-white rounded-2xl shadow-card overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <h3 className="font-heading font-bold text-primary-dark">Kursentwicklung {roundToYear(state.currentRound)}</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-left px-4 py-3 text-text-muted font-medium">Asset</th>
                <th className="text-right px-4 py-3 text-text-muted font-medium">Vorher</th>
                <th className="text-right px-4 py-3 text-text-muted font-medium">Nachher</th>
                <th className="text-right px-4 py-3 text-text-muted font-medium">Veränderung</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {assets.map((asset) => {
                const prev = prevPrices[asset.id] ?? asset.price
                const curr = state.currentPrices[asset.id] ?? asset.price
                const pct = ((curr - prev) / prev) * 100
                const owned = state.positions.find((p) => p.assetId === asset.id)
                return (
                  <tr key={asset.id} className={owned ? 'bg-primary-50/30' : ''}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-text-primary flex items-center gap-1">
                        {asset.name}
                        {owned && <span className="text-xs bg-primary-100 text-primary-dark px-1.5 py-0.5 rounded font-normal">im Portfolio</span>}
                      </div>
                      <div className="text-xs text-text-muted">{asset.symbol}</div>
                    </td>
                    <td className="px-4 py-3 text-right font-mono text-text-secondary">{prev.toFixed(2)} €</td>
                    <td className="px-4 py-3 text-right font-mono font-semibold">{curr.toFixed(2)} €</td>
                    <td className={`px-4 py-3 text-right font-mono font-bold ${pct >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
                      {pct >= 0 ? '+' : ''}{pct.toFixed(1)}%
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Portfolio change */}
      <div className="bg-white rounded-2xl shadow-card p-5 flex items-center justify-between">
        <span className="text-text-secondary font-medium">Portfolio-Wertveränderung diese Runde</span>
        <span className={`text-xl font-bold ${portfolioChange >= 0 ? 'text-status-teal' : 'text-red-500'}`}>
          {portfolioChange >= 0 ? '+' : ''}{portfolioChange.toFixed(2)} €
        </span>
      </div>

      {/* Reflection */}
      <div className="bg-white rounded-2xl shadow-card p-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="text-xs font-semibold text-primary-medium uppercase tracking-wide">
            Reflexionsfrage
          </div>
          {isRoleQuestion && (
            <span className="text-xs bg-primary-dark text-white px-2 py-0.5 rounded-full">
              Rollenfrage
            </span>
          )}
        </div>
        <p className="font-semibold text-text-primary mb-3">{question}</p>
        {!submitted ? (
          <>
            <textarea
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              placeholder="Deine Gedanken (optional) …"
              rows={3}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary-medium resize-none"
            />
            <button
              onClick={handleSubmit}
              className="mt-3 text-sm text-primary-medium underline underline-offset-2 hover:text-primary-dark"
            >
              Antwort speichern
            </button>
          </>
        ) : (
          <div className="bg-gray-50 rounded-xl p-3 text-sm text-text-secondary italic">
            {answer.trim() || '(keine Antwort)'}
          </div>
        )}
      </div>

      {/* Next */}
      <div className="flex justify-center">
        <button
          onClick={onNextRound}
          className="bg-primary-dark text-white font-semibold px-10 py-4 rounded-xl hover:bg-primary-medium transition-colors text-lg"
        >
          {isLastRound ? 'Zur Auswertung →' : `Weiter zu ${roundToYear(state.currentRound + 1)} →`}
        </button>
      </div>
    </div>
  )
}
