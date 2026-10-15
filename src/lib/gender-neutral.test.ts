import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Guard für die gender-neutrale Sprache der Website (Entscheidung 15.10.2026):
 * neutrale Wörter statt Doppelpunkt, Paarform oder generischem Maskulinum.
 * Ausgenommen: namentlich genannte Personen, Firmenrollen (Anbieter, Broker,
 * Partner als Organisation), der DSGVO-Begriff „Verantwortlicher", Lehrlinge,
 * das Fach „Klassenvorstand". Kommentare im Code zählen nicht, sie sind nicht sichtbar.
 */

const ROOT = join(__dirname, '..', '..')

function sourceFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return sourceFiles(path)
    return /\.(ts|tsx)$/.test(name) && !/\.test\.tsx?$/.test(name) ? [path] : []
  })
}

/** Kommentare entfernen; `//` nur nach Leerraum oder am Zeilenanfang, damit URLs bleiben. */
function stripComments(text: string): string {
  return text
    .replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, ' '))
    .replace(/(^|\s)\/\/.*$/gm, (_m, lead: string) => lead)
}

const FORBIDDEN: { name: string; re: RegExp }[] = [
  { name: 'Doppelpunkt-Form', re: /[A-Za-zäöüß]:in(nen)?\b|[a-zäöüß]:innen[a-zäöüß]/ },
  // Zweites Wort muss den Wortstamm wiederholen, sonst trifft es „Bitcoin und Stablecoins".
  { name: 'Paarform', re: /[A-ZÄÖÜ][a-zäöüß-]*?([a-zäöüß]{4})(innen|in) (und|oder) -?[A-Za-zÄÖÜäöüß-]*\1/ },
  { name: 'Schrägstrich-Form', re: /[a-zäöüß]in\/(der|die|den) / },
  { name: 'Schüler', re: /Schüler(in|innen)?\b|Schüler-|Schüler(perspektive|anzahl|fragen)/ },
  { name: 'Lehrer-Komposita', re: /Lehrer-Dashboard|Lehrerhinweise|Lehrerdiskussionen|Lehrerinnen und Lehrer/ },
  { name: 'Lehrer als Reiter', re: /^\s*Lehrer\s*$/m },
  { name: 'Teilnehmer', re: /Teilnehmer/ },
  { name: 'Experte', re: /\bExperte\b|Finanzexperte|Krypto-Experte/ },
  { name: 'Investor', re: /\bInvestor/ },
  { name: 'Einsteiger', re: /\bEinsteiger\b/ },
  { name: 'Spieler', re: /\bSpieler(n|daten)?\b/ },
  { name: 'Einzelstellen', re: /HTL-Absolvent\b|als Student\b|jeden Erwachsenen|für Unternehmer\b|Käufer und Verkäufer|mehr Nutzer\b|Verbraucher mit|Wachsamer Konsument|Influencer bekommt|für Mieter\b|und Trainer\b|wie er seinen|die er later|\blater im\b|Obfrau-StV|Keine Lernende|\bkeiner erklärt\b|\bCreator\b|mit Partner\)|Zwei Arbeitgeber/ },
]

/** Bewusst erlaubt: konkrete Personen. */
const ALLOWED: { file: string; text: string }[] = [
  { file: 'public/llms.txt', text: 'Gründerinnen und Gründer' }, // Marina Winkler und Stefan Bauer
  { file: 'public/llms.txt', text: '**Dr. Stefan Bauer** – Vorstand, Finanzexperte' },
  { file: 'src/app/page.tsx', text: "role: 'Schülerin, 17 Jahre'" }, // Lisa M., konkrete Person
  { file: 'src/app/schulen/hak/page.tsx', text: 'hätte ich selbst als Schülerin' }, // Mag. Petra F. über sich selbst
]

function findings(): string[] {
  const files = [...sourceFiles(join(ROOT, 'src')), join(ROOT, 'public', 'llms.txt')]
  const out: string[] = []
  for (const file of files) {
    const rel = file.slice(ROOT.length + 1)
    let text = stripComments(readFileSync(file, 'utf8'))
    for (const a of ALLOWED) if (a.file === rel) text = text.split(a.text).join('')
    text.split('\n').forEach((line, i) => {
      for (const { name, re } of FORBIDDEN) {
        const m = line.match(re)
        if (m) out.push(`${rel}:${i + 1} [${name}] ${m[0]}`)
      }
    })
  }
  return out
}

describe('gender-neutrale Sprache', () => {
  it('kennt die Muster (Fixtures aus dem Stand vor dem Umbau)', () => {
    const hits = (s: string) => FORBIDDEN.some(({ re }) => re.test(s))
    expect(hits('Lernfortschritt jeder Schüler:in in Echtzeit')).toBe(true)
    expect(hits('Schülerinnen und Schüler arbeiten selbstständig')).toBe(true)
    expect(hits('HTL-Absolventinnen und -Absolventen starten')).toBe(true)
    expect(hits('Wer als Pädagogin oder Pädagoge arbeitet')).toBe(true)
    expect(hits('Die Teilnehmerin/der Teilnehmer hat wenig gestreut')).toBe(true)
    expect(hits("level: 'Einsteiger'")).toBe(true)
    expect(hits('ein Lehrer-Dashboard')).toBe(true)
    expect(hits('Lehrkräfte starten ein Modul, die Jugendlichen arbeiten selbstständig')).toBe(false)
    expect(hits("role: 'Lehrer, HAK Linz'")).toBe(false)
    expect(hits('https://www.digitale-zukunftsbildung.eu')).toBe(false)
    expect(hits('Bitcoin und Stablecoins')).toBe(false)
    expect(hits('Kursgewinnen und Dividenden')).toBe(false)
  })

  it('findet auf der Website keine gegenderten oder männlichen Personenformen', () => {
    expect(findings()).toEqual([])
  })
})
