export interface KonsumFalle {
  id: string
  title: string
  category: 'dark-pattern' | 'abo-falle' | 'influencer' | 'bnpl' | 'handy' | 'gaming' | 'supermarkt'
  icon: string
  scenario: string
  trap: string
  correctAction: string
  wrongAction: string
  cost: number
  timePressure: number // 0 = kein Timer, sonst Sekunden
  clues: string[]
  mockupType:
    | 'netflix'
    | 'influencer'
    | 'gaming'
    | 'klarna'
    | 'supermarkt'
    | 'handy'
    | 'flug'
    | 'social'
    | 'bewertung'
    | 'kuendigung'
}

export interface FallenResult {
  falleId: string
  erkannt: boolean
  richtigeEntscheidung: boolean
  kostenvermieden: number
  kategorie: KonsumFalle['category']
}

export interface KonsumState {
  phase: 'intro' | 'parcours' | 'result'
  currentFall: number
  results: FallenResult[]
  totalCostAvoided: number
  totalCostLost: number
  score: number
  timerExpired: boolean // true when timePressure countdown ran out before user decided
}

export type KonsumAction =
  | { type: 'START' }
  | { type: 'DECIDE'; erkannt: boolean; richtigeEntscheidung: boolean }
  | { type: 'TIMER_EXPIRE' }
  | { type: 'RESET' }

export const KONSUMFALLEN: KonsumFalle[] = [
  {
    id: 'netflix-abo',
    title: 'Gratis-Monat Abo-Falle',
    category: 'abo-falle',
    icon: '📺',
    scenario:
      'Du hast vor einem Monat einen Gratis-Probemonat bei einem Streamingdienst gestartet. Keine E-Mail, keine Erinnerung — aber heute bucht er automatisch €15,99 von deinem Konto ab.',
    trap: 'Der "Gratis-Monat" verlängert sich automatisch. Der Kleinstdruck beim Anmelden lautete: "Nach 30 Tagen automatisch €15,99/Monat — jederzeit kündbar." Kündbar ja, aber du musst aktiv werden — der Dienst nicht.',
    correctAction:
      'Beim Gratis-Angebot sofort im Kalender erinnern lassen, wann die Testphase endet. Zahlungsmethode prüfen. Im Zweifel: erst nach 2 Wochen anmelden, damit genug Zeit zum Kündigen bleibt.',
    wrongAction:
      'Die Anmeldung gedankenlos abschließen und vergessen, dass eine Kreditkarte hinterlegt wurde.',
    cost: 15.99,
    timePressure: 0,
    clues: [
      '"Nach 30 Tagen €15,99/Monat" im Kleinstdruck unter dem Anmeldebutton',
      'Kreditkarte wird bei Anmeldung verlangt — nicht erst nach dem Gratis-Monat',
      'Keine automatische Kündigung — du musst selbst aktiv werden',
    ],
    mockupType: 'netflix',
  },
  {
    id: 'influencer-sale',
    title: 'Fake-Countdown "Nur heute 50% off!"',
    category: 'influencer',
    icon: '⏱️',
    scenario:
      'Dein Lieblings-TikTok-Creator postet einen "exklusiven" Deal: Sneaker um 50% reduziert — "NUR HEUTE, 23:59 Uhr ist Schluss!" Ein Countdown läuft. Originalpreis: €199, jetzt €99.',
    trap: 'Der Countdown startet bei jedem Website-Besuch neu. Der "Originalpreis" von €199 war nie der echte Preis — das Modell wurde noch nie teurer als €99 verkauft. Influencer bekommt Provision für jeden Kauf.',
    correctAction:
      'Preis auf anderen Plattformen vergleichen (idealo.at, willhaben). Countdown-Timer in neuem Browser-Tab öffnen — wenn er neustartet, ist er fake. Gesetz: Preisangabenverordnung verlangt echten Vorpreis.',
    wrongAction: 'Aus FOMO sofort kaufen ohne Preisvergleich, weil der "Timer" Druck macht.',
    cost: 99,
    timePressure: 30,
    clues: [
      'Countdown startet immer wieder von vorne (teste: Seite neu laden)',
      'Influencer-Link enthält Affiliate-Code — Creator verdient an jedem Kauf',
      '"Originalpreis €199" lässt sich nirgendwo verifizieren',
    ],
    mockupType: 'influencer',
  },
  {
    id: 'gaming-starter',
    title: '"Starter-Pack" für €0,99',
    category: 'gaming',
    icon: '🎮',
    scenario:
      'Ein neues Mobile-Game im AppStore: "Starter-Pack — Nur heute €0,99!" Du kaufst, spielst und merkst: Um weiterzukommen, brauchst du Gems. 500 Gems = €4,99. Du spielst jeden Tag...',
    trap: 'Das Spiel ist um Mikrotransaktionen herum designed (Pay-to-Win). Der "Starter-Pack" ist ein Haken. Durchschnittliche Ausgaben in Gratis-Games mit In-App-Käufen: €30–200/Monat bei regelmäßigen Spielern.',
    correctAction:
      'Vor dem Download: AppStore-Eintrag zeigt "In-App-Käufe" an. Reviews nach "Pay-to-Win" durchsuchen. Budget für In-App-Käufe fix setzen (z.B. €5/Monat) und nie überschreiten.',
    wrongAction:
      'Starter-Pack kaufen und dann Schritt für Schritt immer mehr kaufen, weil man schon investiert hat ("Sunk Cost Fallacy").',
    cost: 156,
    timePressure: 0,
    clues: [
      '"In-App-Käufe" im AppStore-Eintrag sichtbar — bedeutet: Game verdient an Käufen',
      'Gratis-Spiele mit zu perfektem Design sind meist Pay-to-Win',
      '"Nur heute"-Starter-Pack erscheint für neue Spieler immer',
    ],
    mockupType: 'gaming',
  },
  {
    id: 'klarna-bnpl',
    title: 'Klarna "0% Zinsen" — Ratenkauf-Falle',
    category: 'bnpl',
    icon: '💳',
    scenario:
      'Neue Sneakers auf einem Onlineshop: €149. Klarna bietet "Jetzt kaufen, später zahlen — 0% Zinsen, 3 Raten." Du denkst: günstig! Du kaufst. Drei Monate später vergisst du eine Zahlung...',
    trap: 'Bei Zahlungsverzug: Mahngebühren €15–35, danach Inkasso. Klarna meldet Zahlungsausfälle an Kreditauskunfteien. Einmal Eintrag = schlechterer Kredit-Score für Jahre. In Deutschland/Österreich zunehmend reguliert, aber Fallen bestehen.',
    correctAction:
      'BNPL nur wenn du das Geld sofort hättest. Sofort Dauerauftrag einrichten. AGB lesen: Was passiert bei Verzug? Kreditauskunft-Auswirkungen prüfen.',
    wrongAction:
      'Kaufen weil "0% Zinsen" verlockend klingt, ohne zu bedenken dass Zahlungsdisziplin nötig ist.',
    cost: 49,
    timePressure: 0,
    clues: [
      'Kleindruck: "Bei Zahlungsverzug fallen Mahngebühren an"',
      '"0% Zinsen" gilt nur bei pünktlicher Zahlung — danach teuer',
      'Klarna prüft Bonität — das hinterlässt eine Spur',
    ],
    mockupType: 'klarna',
  },
  {
    id: 'supermarkt-tricks',
    title: 'Supermarkt-Psychologie-Fallen',
    category: 'supermarkt',
    icon: '🛒',
    scenario:
      'Im Supermarkt: "AKTION! Joghurt 4er-Pack €2,49 statt €2,99." Du greifst zu. Beim Regal daneben: Einzeljoghurt €0,49. Oben im Regal: Hausmarke €1,59 für 4er.',
    trap: '"Sonderangebot" ist teurer als Hausmarke. Produkte auf Augenhöhe = teuerste. Sonderangebote sind oft höher als güntiger Normalpreis woanders. Der "Streichpreis" war der kurz erhöhte Preis von letzter Woche.',
    correctAction:
      'Preise pro 100g/100ml vergleichen (Pflicht auf österreichischen Preisschildern). Hausmarken probieren. Einkaufsliste machen und nicht hungrig einkaufen.',
    wrongAction: 'Jedes "Sonderangebot" als echten Rabatt akzeptieren und in Augenhöhe greifen.',
    cost: 18,
    timePressure: 0,
    clues: [
      'Preis pro 100g auf Preisschild prüfen — nicht Gesamtpreis',
      'Hausmarke liegt meist unten oder oben, nie auf Augenhöhe',
      '"Streichpreis" wurde legal nur 1 Woche vorher kurz erhöht',
    ],
    mockupType: 'supermarkt',
  },
  {
    id: 'handy-gratis',
    title: 'iPhone "gratis" mit Vertrag',
    category: 'handy',
    icon: '📱',
    scenario:
      'A1-Shop: "iPhone 16 GRATIS — nur mit 2-Jahres-Vertrag um €65/Monat!" Das klingt super — du bekommst ein iPhone im Wert von €999 geschenkt. Du unterschreibst.',
    trap: '2 Jahre × €65 = €1.560 Gesamtkosten. Gleicher Tarif ohne Handy: €25/Monat = €600. Du zahlst €960 für das "Gratis"-Handy — das ist fast €1.000 für ein Gerät im Wert von €999. Kein echtes Angebot.',
    correctAction:
      'Immer Gesamtkosten berechnen: (Monatsrate × Laufzeit) + Anschlusspreis. Dann: Was kostet Tarif ohne Handy? Differenz = echter Handypreis. Oft günstiger: SIM-only + Handy gebraucht (willhaben.at).',
    wrongAction: 'Sich vom Wort "gratis" verführen lassen ohne Gesamtkosten zu rechnen.',
    cost: 360,
    timePressure: 0,
    clues: [
      'Monatspreis × 24 Monate = Gesamtkosten — rechne das immer durch',
      'Gleicher Tarif ohne Handy prüfen (A1-Website: SIM-only Tarife)',
      '"Gratis" bedeutet im Vertragswesen fast nie wirklich gratis',
    ],
    mockupType: 'handy',
  },
  {
    id: 'checkbox-reise',
    title: 'Vorausgewählte Reiseversicherung',
    category: 'dark-pattern',
    icon: '☑️',
    scenario:
      'Du buchst einen Flug Wien–Barcelona für €89. Im letzten Buchungsschritt, direkt vor "Jetzt kaufen": Eine Checkbox ist schon angehakt: "Reiseversicherung Premium €18,99 — für Ihre Sicherheit!"',
    trap: 'Dark Pattern: Die Checkbox ist vorangehakt. Wer nicht aufpasst und nicht abhakt, zahlt automatisch €18,99 extra. Gesamtpreis steigt auf €107,99 — die meisten merken es erst auf der Rechnung.',
    correctAction:
      'Jeden Buchungsschritt langsam durchlesen. Alle vorausgewählten Optionen bewusst prüfen. Im letzten Schritt Gesamtbetrag mit Ausgangsspreis vergleichen.',
    wrongAction: 'Durch die Buchungsschritte klicken ohne zu lesen.',
    cost: 18.99,
    timePressure: 0,
    clues: [
      'Checkbox ist bereits angehakt — du musst aktiv ABWÄHLEN',
      'Gesamtpreis im letzten Schritt sorgfältig mit Startpreis vergleichen',
      'Reiseversicherungen bei spezialisierten Anbietern oft günstiger',
    ],
    mockupType: 'flug',
  },
  {
    id: 'fomo-sneaker',
    title: '"Limited Edition" FOMO-Falle',
    category: 'influencer',
    icon: '👟',
    scenario:
      '"NUR 100 PAAR! Nike Air Max Limited Edition — Nur auf unserer Website, nie wieder erhältlich!" Instagram-Werbung. €189. Du kaufst sofort aus Angst, leer auszugehen.',
    trap: 'Zwei Monate später: Das gleiche Modell ist regulär bei Intersport, Zalando und Sport Scheck um €129 erhältlich. Die "100 Paar" waren die erste Produktionscharge — mehr kamen nach.',
    correctAction:
      'FOMO ist eine Marketing-Emotion, keine Realität. Warte 48 Stunden. Wenn das Produkt weg ist, war es wirklich limitiert. Wenn nicht — Preisentwicklung verfolgen. "Limitiert" ist fast immer Marketing.',
    wrongAction: 'Aus Angst sofort kaufen ohne zu warten oder zu vergleichen.',
    cost: 60,
    timePressure: 45,
    clues: [
      '"Limited" ist kein Rechtsbegriff — beliebig oft verwendbar',
      'Preis auf idealo.at, Zalando, Kleider Bauer vergleichen',
      '48-Stunden-Regel: Wenn du es morgen noch willst, kauf es dann',
    ],
    mockupType: 'social',
  },
  {
    id: 'fake-bewertungen',
    title: 'Fake-Bewertungen erkennen',
    category: 'dark-pattern',
    icon: '⭐',
    scenario:
      'Auf willhaben.at oder einem Onlineshop: Ein Produkt mit 4,9 Sternen aus 847 Bewertungen. Supergünstig. Du willst es kaufen.',
    trap: 'Alle 847 Bewertungen stammen vom selben Tag (oder derselben Woche). Texte sind generisch: "Super Produkt! Sehr zufrieden!" Keine negativen Reviews. Das sind eingekaufte Fake-Bewertungen.',
    correctAction:
      'Bewertungsdaten prüfen: Wann wurden die Bewertungen geschrieben? Verteilung: Nur 5 Sterne = verdächtig. Echte Produkte haben auch 1-3 Sterne. Auf Fakespot.com oder ReviewMeta.com prüfen.',
    wrongAction: 'Bewertungsanzahl und -durchschnitt vertrauen ohne Qualität zu prüfen.',
    cost: 45,
    timePressure: 0,
    clues: [
      'Alle Bewertungen vom gleichen Tag oder derselben Woche — Warnsignal',
      'Nur 5-Sterne-Bewertungen ohne einzige negative Review — unrealistisch',
      'Bewertungstexte sind nichtssagend und könnten für jedes Produkt stehen',
    ],
    mockupType: 'bewertung',
  },
  {
    id: 'kuendigungsfrist',
    title: '"Monatlich kündbar" — Kleingedrucktes',
    category: 'abo-falle',
    icon: '📄',
    scenario:
      'Du hast ein Fitnessstudio-Abo ("monatlich kündbar!") für €39/Monat abgeschlossen. Du willst kündigen. Du schickst eine E-Mail. Nächsten Monat: wieder €39 abgebucht.',
    trap: '"Monatlich kündbar" bedeutet 1 Monat Kündigungsfrist + nur schriftlich per Einschreibebrief. Deine E-Mail war ungültig. Du hättest bis zum 15. des Vormonats per Post kündigen müssen. 3 Monate extra = €117.',
    correctAction:
      'AGB VOR Vertragsabschluss lesen: Wie kündige ich? Per Post? Per E-Mail? Welche Frist? Kündigungsfrist im Kalender eintragen. Im Zweifelsfall: Einschreibebrief + Papierkopie aufheben.',
    wrongAction: 'Annehmen, dass "monatlich kündbar" bedeutet: E-Mail genügt und sofort wirksam.',
    cost: 117,
    timePressure: 0,
    clues: [
      'AGB: "Kündigung nur schriftlich per Post, Einschreiben"',
      '"Monatlich kündbar" ≠ sofort kündbar — Frist läuft ab Eingang',
      'Fitness-Studios sind berüchtigt für schwierige Kündigungen in Österreich',
    ],
    mockupType: 'kuendigung',
  },
]

export function calcScore(results: FallenResult[]): number {
  if (results.length === 0) return 0
  const richtig = results.filter((r) => r.richtigeEntscheidung).length
  const erkannt = results.filter((r) => r.erkannt && r.richtigeEntscheidung).length
  // 80% for correct decision, 20% bonus for also identifying the trap mechanism
  const baseScore = (richtig / results.length) * 80
  const bonusScore = (erkannt / results.length) * 20
  return Math.round(baseScore + bonusScore)
}

export function getRanking(score: number): {
  title: string
  emoji: string
  description: string
  color: string
} {
  if (score >= 80)
    return {
      title: 'Finanz-Detektiv',
      emoji: '🔍',
      description: 'Ausgezeichnet! Du erkennst Fallen fast immer. Gib dein Wissen weiter!',
      color: '#2A8A76',
    }
  if (score >= 50)
    return {
      title: 'Wachsamer Konsument',
      emoji: '🛡️',
      description: 'Gut! Du erkennst viele Fallen, aber einige erwischen dich noch.',
      color: '#D87228',
    }
  return {
    title: 'Noch Lernbedarf',
    emoji: '📚',
    description:
      'Einige Fallen haben dich erwischt — genau dafür ist diese Übung da. Lies die Tipps und probier es nochmal!',
    color: '#C84040',
  }
}

export function getCategoryName(cat: KonsumFalle['category']): string {
  const names: Record<KonsumFalle['category'], string> = {
    'dark-pattern': 'Dark Patterns',
    'abo-falle': 'Abo-Fallen',
    influencer: 'Influencer-Marketing',
    bnpl: 'Buy Now Pay Later',
    handy: 'Handyverträge',
    gaming: 'Gaming & Apps',
    supermarkt: 'Supermarkt-Tricks',
  }
  return names[cat]
}

export function getWeakCategories(results: FallenResult[]): string[] {
  const cats: Record<string, { total: number; wrong: number }> = {}
  for (const r of results) {
    if (!cats[r.kategorie]) cats[r.kategorie] = { total: 0, wrong: 0 }
    cats[r.kategorie].total++
    if (!r.richtigeEntscheidung) cats[r.kategorie].wrong++
  }
  return Object.entries(cats)
    .filter(([, v]) => v.wrong > 0)
    .sort((a, b) => b[1].wrong - a[1].wrong)
    .map(([k]) => getCategoryName(k as KonsumFalle['category']))
}

export const INITIAL_KONSUM_STATE: KonsumState = {
  phase: 'intro',
  currentFall: 0,
  results: [],
  totalCostAvoided: 0,
  totalCostLost: 0,
  score: 0,
  timerExpired: false,
}

export function konsumReducer(state: KonsumState, action: KonsumAction): KonsumState {
  switch (action.type) {
    case 'START':
      return { ...INITIAL_KONSUM_STATE, phase: 'parcours' }

    case 'TIMER_EXPIRE':
      return { ...state, timerExpired: true }

    case 'DECIDE': {
      const falle = KONSUMFALLEN[state.currentFall]
      const newResult: FallenResult = {
        falleId: falle.id,
        erkannt: action.erkannt,
        richtigeEntscheidung: action.richtigeEntscheidung,
        kostenvermieden: action.richtigeEntscheidung ? falle.cost : 0,
        kategorie: falle.category,
      }
      const newResults = [...state.results, newResult]
      const newAvoided = state.totalCostAvoided + (action.richtigeEntscheidung ? falle.cost : 0)
      const newLost = state.totalCostLost + (action.richtigeEntscheidung ? 0 : falle.cost)
      const isLast = state.currentFall >= KONSUMFALLEN.length - 1

      if (isLast) {
        const score = calcScore(newResults)
        return {
          ...state,
          results: newResults,
          totalCostAvoided: newAvoided,
          totalCostLost: newLost,
          score,
          phase: 'result',
          timerExpired: false,
        }
      }

      return {
        ...state,
        results: newResults,
        totalCostAvoided: newAvoided,
        totalCostLost: newLost,
        currentFall: state.currentFall + 1,
        timerExpired: false,
      }
    }

    case 'RESET':
      return INITIAL_KONSUM_STATE

    default:
      return state
  }
}
