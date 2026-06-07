'use client'

import { useState } from 'react'

function XIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
}
function BookIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
}

export interface GlossarEintrag {
  term: string
  definition: string
  example?: string
  related?: string[]
}

export const GLOSSAR: GlossarEintrag[] = [
  {
    term: 'Aktie',
    definition: 'Ein Anteil an einem Unternehmen. Wer eine Aktie besitzt, ist Miteigentümer und profitiert von Gewinnen (Dividenden) sowie Kurssteigerungen – trägt aber auch das Verlustrisiko.',
    example: 'Du kaufst 5 Anteile der AlpenTech AG für je 48 €. Steigt der Kurs auf 60 €, macht du 60 € Gewinn.',
    related: ['Kurs', 'Dividende', 'Portfolio'],
  },
  {
    term: 'ETF',
    definition: 'Ein Exchange Traded Fund – ein Korb aus vielen Wertpapieren, der an der Börse gehandelt wird. ETFs bilden oft einen Index (z. B. alle größten Unternehmen Europas) nach und streuen das Risiko automatisch.',
    example: 'Der Global Market ETF enthält Anteile an Unternehmen aus über 40 Ländern. Fällt ein Unternehmen, gleichen andere es oft aus.',
    related: ['Diversifikation', 'Risiko', 'Index'],
  },
  {
    term: 'Diversifikation',
    definition: 'Das Verteilen von Investitionen auf verschiedene Anlagen, Sektoren oder Länder. Ziel: Verluste in einem Bereich durch Gewinne in einem anderen abfedern.',
    example: 'Statt alles in eine Technologieaktie zu investieren, kaufst du auch Gesundheits-, Energie- und ETF-Anteile.',
    related: ['Portfolio', 'Risiko', 'ETF'],
  },
  {
    term: 'Rendite',
    definition: 'Der Ertrag einer Investition – ausgedrückt in Prozent des eingesetzten Kapitals. Eine Rendite von +10 % bedeutet: Aus 1.000 € wurden 1.100 €.',
    example: 'Du investierst 5.000 € und hast am Ende 5.600 €. Deine Rendite beträgt +12 %.',
    related: ['Kurs', 'Performance', 'Dividende'],
  },
  {
    term: 'Volatilität',
    definition: 'Das Maß für die Schwankungsintensität eines Wertpapiers. Hohe Volatilität = starke Auf- und Abschwünge. Niedrige Volatilität = ruhige, stabile Kursentwicklung.',
    example: 'Die AlpenTech AG hat eine Volatilität von 12 % – ihr Kurs kann in einer Runde stark steigen oder fallen. Der Austria ETF mit 4 % bleibt ruhiger.',
    related: ['Risiko', 'Aktie'],
  },
  {
    term: 'Risiko',
    definition: 'Die Möglichkeit, dass eine Investition weniger wert wird als erwartet. Höheres Risiko bedeutet höhere Chancen, aber auch höhere Verlustgefahr. Risiko und Rendite hängen eng zusammen.',
    example: 'Hochrisiko-Assets können in einer Runde 20 % gewinnen – aber auch 20 % verlieren.',
    related: ['Volatilität', 'Diversifikation', 'Rendite'],
  },
  {
    term: 'Portfolio',
    definition: 'Die Gesamtheit aller Wertpapiere, die du hältst. Ein gutes Portfolio ist auf verschiedene Anlageklassen, Sektoren und Risikostufen verteilt.',
    example: 'Dein Portfolio besteht aus: 30 % Tech-Aktien, 30 % ETFs, 20 % Gesundheit, 20 % Cash.',
    related: ['Diversifikation', 'Aktie', 'ETF'],
  },
  {
    term: 'Kurs',
    definition: 'Der aktuelle Handelspreis eines Wertpapiers. Er schwankt je nach Angebot und Nachfrage, Unternehmensnachrichten und allgemeiner Marktstimmung.',
    example: 'Der Kurs der Future Mobility AG fällt von 27 € auf 23 €, weil Konjunktursorgen die Automobilbranche belasten.',
    related: ['Aktie', 'Volatilität', 'Rendite'],
  },
  {
    term: 'Dividende',
    definition: 'Ein Teil des Unternehmensgewinns, der an Aktionärinnen und Aktionäre ausgeschüttet wird. In dieser Simulation spielen Dividenden keine Rolle – in der Realität sind sie ein wichtiger Renditebestandteil.',
    example: 'Ein Unternehmen zahlt 2 € Dividende je Aktie. Wer 100 Aktien hält, erhält 200 € – unabhängig vom Kursverlauf.',
    related: ['Aktie', 'Rendite'],
  },
  {
    term: 'Marktkapitalisierung',
    definition: 'Der Gesamtwert aller ausgegebenen Aktien eines Unternehmens. Kurs × Anzahl ausgegebener Aktien = Marktkapitalisierung. Große Unternehmen (Large Caps) gelten oft als stabiler als kleine (Small Caps).',
    example: 'Ein Unternehmen hat 10 Millionen Aktien im Umlauf. Bei einem Kurs von 50 € beträgt die Marktkapitalisierung 500 Millionen Euro.',
    related: ['Aktie', 'Kurs'],
  },
  {
    term: 'Leitzins',
    definition: 'Der Zinssatz, zu dem Geschäftsbanken bei der Zentralbank (z. B. EZB) Geld leihen können. Steigende Leitzinsen erhöhen die Kreditkosten für Unternehmen und machen Anleihen attraktiver als Aktien.',
    example: 'Die EZB erhöht den Leitzins auf 4 %. Technologiefirmen, die oft Kredite für Wachstum brauchen, verlieren an Attraktivität.',
    related: ['Risiko', 'Rendite'],
  },
  {
    term: 'Bull- und Bärenmarkt',
    definition: 'Bullenmarkt (bullish) = steigende Kurse, positive Stimmung. Bärenmarkt (bearish) = fallende Kurse, negative Stimmung. Diese Begriffe beschreiben die allgemeine Marktrichtung.',
    example: 'Nach positiven Wirtschaftsdaten steigen viele Kurse gleichzeitig – das ist ein Bullensignal.',
    related: ['Kurs', 'Volatilität'],
  },
]

interface GlossarModalProps {
  onClose: () => void
  initialTerm?: string
}

export default function GlossarModal({ onClose, initialTerm }: GlossarModalProps) {
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<GlossarEintrag | null>(
    initialTerm ? (GLOSSAR.find((g) => g.term === initialTerm) ?? null) : null
  )

  const filtered = GLOSSAR.filter(
    (e) =>
      e.term.toLowerCase().includes(search.toLowerCase()) ||
      e.definition.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl shadow-card-hover w-full max-w-2xl max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-center gap-2">
            <span className="text-primary-dark"><BookIcon /></span>
            <h2 className="font-heading font-bold text-primary-dark text-lg">Finanz-Glossar</h2>
          </div>
          <button onClick={onClose} className="text-text-muted hover:text-text-primary"><XIcon /></button>
        </div>

        <div className="flex flex-1 min-h-0">
          {/* Sidebar */}
          <div className="w-48 flex-shrink-0 border-r border-gray-100 flex flex-col">
            <div className="p-3 border-b border-gray-100">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Suchen…"
                className="w-full text-xs border border-gray-200 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-medium"
              />
            </div>
            <div className="overflow-y-auto flex-1">
              {filtered.map((entry) => (
                <button
                  key={entry.term}
                  onClick={() => setSelected(entry)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors border-b border-gray-50 last:border-0 ${
                    selected?.term === entry.term
                      ? 'bg-primary-50 text-primary-dark font-semibold'
                      : 'text-text-secondary hover:bg-gray-50'
                  }`}
                >
                  {entry.term}
                </button>
              ))}
              {filtered.length === 0 && (
                <p className="text-xs text-text-muted p-4 text-center">Kein Eintrag gefunden.</p>
              )}
            </div>
          </div>

          {/* Detail */}
          <div className="flex-1 overflow-y-auto p-6">
            {selected ? (
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-primary-dark">{selected.term}</h3>
                <p className="text-text-secondary leading-relaxed">{selected.definition}</p>
                {selected.example && (
                  <div className="bg-primary-50 rounded-xl p-4">
                    <div className="text-xs font-semibold text-primary-dark uppercase tracking-wide mb-1">Beispiel</div>
                    <p className="text-sm text-text-secondary italic">{selected.example}</p>
                  </div>
                )}
                {selected.related && selected.related.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-text-muted uppercase tracking-wide mb-2">Verwandte Begriffe</div>
                    <div className="flex flex-wrap gap-2">
                      {selected.related.map((term) => (
                        <button
                          key={term}
                          onClick={() => setSelected(GLOSSAR.find((g) => g.term === term) ?? null)}
                          className="text-xs bg-gray-100 hover:bg-primary-50 text-text-secondary hover:text-primary-dark px-3 py-1.5 rounded-full transition-colors font-medium"
                        >
                          {term}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <span className="text-4xl mb-3">📖</span>
                <p className="text-text-muted text-sm">Wähle einen Begriff aus der Liste.</p>
                <p className="text-text-muted text-xs mt-1">{GLOSSAR.length} Einträge verfügbar</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

// Kleiner Glossar-Trigger-Button für die Navigationsleiste
export function GlossarButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 text-xs text-text-muted hover:text-primary-dark border border-gray-200 hover:border-primary-light px-3 py-1.5 rounded-full transition-colors"
    >
      <BookIcon />
      Glossar
    </button>
  )
}
