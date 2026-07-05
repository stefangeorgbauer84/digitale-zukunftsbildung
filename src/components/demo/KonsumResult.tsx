'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  RefreshCw,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Shield,
  Target,
  ExternalLink,
} from 'lucide-react'
import {
  KONSUMFALLEN,
  type KonsumState,
  getRanking,
  getWeakCategories,
  getCategoryName,
} from '@/lib/konsumfallenSimulation'

interface Props {
  state: KonsumState
  onReset: () => void
  onBack?: () => void
}

const GOLDENE_REGELN = [
  {
    emoji: '⏳',
    title: '48-Stunden-Regel',
    text: 'Kaufe nie sofort bei Zeitdruck. Warte 48 Stunden. Wenn du es dann noch brauchst und es noch verfügbar ist, kauf es.',
  },
  {
    emoji: '🔍',
    title: 'Gesamtkosten berechnen',
    text: 'Nie Monatsrate × Laufzeit vergessen. "Gratis" und "0% Zinsen" immer nachrechnen — Gesamtkosten zählen.',
  },
  {
    emoji: '📋',
    title: 'Kleingedrucktes lesen',
    text: 'AGB vor Vertragsabschluss lesen: Wie kündige ich? Per Post? Welche Frist? Kündigung im Kalender eintragen.',
  },
  {
    emoji: '📊',
    title: 'Preise vergleichen',
    text: 'idealo.at, willhaben.at, Zalando — immer auf 3 Plattformen vergleichen. Streichpreise sind oft gefälscht.',
  },
  {
    emoji: '🎮',
    title: 'Budget für Impulskäufe setzen',
    text: 'Für Gaming, Apps und Impulskäufe ein fixes Monatsbudget (z.B. €10) setzen und nie überschreiten.',
  },
]

const QUIZ_FRAGEN = [
  {
    frage: 'Was bedeutet "monatlich kündbar" bei einem Fitness-Abo in Österreich?',
    optionen: [
      'Du kannst sofort per E-Mail kündigen',
      'Es gibt eine Frist — oft 1 Monat, oft nur per Post',
      'Das Abo endet automatisch',
      'Du musst persönlich erscheinen',
    ],
    richtig: 1,
    erklaerung:
      '"Monatlich kündbar" bedeutet fast immer: 1 Monat Frist + schriftlich per Einschreiben. E-Mail ist oft nicht wirksam!',
  },
  {
    frage: 'Du siehst ein Produkt mit 4,9 ⭐ aus 500 Bewertungen. Woran erkennst du Fake-Reviews?',
    optionen: [
      'An der hohen Anzahl der Bewertungen',
      'Alle Bewertungen vom gleichen Tag/derselben Woche',
      'Am hohen Durchschnitt von 4,9',
      'An der Produktbeschreibung',
    ],
    richtig: 1,
    erklaerung:
      'Echte Bewertungen verteilen sich über Wochen und Monate. Clustering (alle am selben Tag) ist das stärkste Warnsignal für Fakes.',
  },
  {
    frage:
      'Ein Handy kostet "gratis" mit €65/Monat × 24 Monate. Der Tarif ohne Handy kostet €25/Monat. Was zahlst du effektiv für das Handy?',
    optionen: ['€0 — es ist wirklich gratis', '€960', '€1.560', '€999'],
    richtig: 1,
    erklaerung: '(€65 − €25) × 24 = €40 × 24 = €960. Das ist der echte Preis des "gratis" Handys.',
  },
]

export function KonsumResult({ state, onReset, onBack }: Props) {
  const ranking = getRanking(state.score)
  const weakCategories = getWeakCategories(state.results)
  const [expandedFalle, setExpandedFalle] = useState<string | null>(null)
  const [quizAnswers, setQuizAnswers] = useState<(number | null)[]>([null, null, null])
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const richtig = state.results.filter((r) => r.richtigeEntscheidung).length
  const quizScore = quizAnswers.filter((a, i) => a === QUIZ_FRAGEN[i].richtig).length

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header */}
      <div className="bg-gradient-to-b from-[#4a2d8a] to-[#6b4db0] px-4 pt-5 pb-8">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-6">
            {onBack ? (
              <button
                onClick={onBack}
                className="flex items-center gap-1.5 text-white/60 hover:text-white/90 text-sm transition-colors"
              >
                <ArrowLeft size={15} />
                Zurück
              </button>
            ) : (
              <div />
            )}
            <span className="text-white/50 text-xs">Skills-UP!</span>
          </div>

          <div className="text-center">
            <div
              className="w-20 h-20 rounded-2xl mx-auto mb-3 flex items-center justify-center text-4xl shadow-lg"
              style={{
                backgroundColor: `${ranking.color}20`,
                border: `2px solid ${ranking.color}40`,
              }}
            >
              {ranking.emoji}
            </div>
            <h1 className="text-2xl font-bold text-white mb-0.5">{ranking.title}</h1>
            <p className="text-white/60 text-sm mb-4">{ranking.description}</p>

            <div className="grid grid-cols-3 gap-3">
              <ScoreCircle value={`${richtig}/10`} label="Erkannt" color="#2A8A76" bg="#2A8A7620" />
              <ScoreCircle
                value={`${state.score}%`}
                label="Score"
                color={ranking.color}
                bg={`${ranking.color}20`}
              />
              <ScoreCircle
                value={`€${state.totalCostAvoided.toFixed(0)}`}
                label="Gespart"
                color="#2A8A76"
                bg="#2A8A7620"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 -mt-4">
        {/* Kosten-Bilanz */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
          <h2 className="font-bold text-base text-gray-800 mb-3">Deine Kosten-Bilanz</h2>
          <div className="grid grid-cols-2 gap-3 mb-3">
            <div className="bg-[#e6f4f1] rounded-xl p-3 text-center">
              <CheckCircle size={18} className="text-[#2A8A76] mx-auto mb-1" />
              <p className="text-[#2A8A76] font-black text-xl">
                €{state.totalCostAvoided.toFixed(2)}
              </p>
              <p className="text-[#1a7a68] text-xs font-medium">Kosten vermieden</p>
            </div>
            <div className="bg-[#fae8e8] rounded-xl p-3 text-center">
              <XCircle size={18} className="text-[#C84040] mx-auto mb-1" />
              <p className="text-[#C84040] font-black text-xl">€{state.totalCostLost.toFixed(2)}</p>
              <p className="text-[#a03030] text-xs font-medium">Kosten entstanden</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 flex items-center justify-between">
            <span className="text-gray-600 text-sm font-medium">Fallen erkannt</span>
            <div className="flex gap-1">
              {state.results.map((r, i) => (
                <div
                  key={i}
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                    r.richtigeEntscheidung ? 'bg-[#2A8A76] text-white' : 'bg-[#C84040] text-white'
                  }`}
                  title={KONSUMFALLEN[i]?.title}
                >
                  {r.richtigeEntscheidung ? '✓' : '✗'}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Schwachstellen */}
        {weakCategories.length > 0 && (
          <div className="bg-white rounded-2xl shadow-md p-4 mb-4 border border-orange-200">
            <div className="flex items-start gap-2 mb-2">
              <Target size={16} className="text-[#D87228] shrink-0 mt-0.5" />
              <div>
                <h2 className="font-bold text-sm text-gray-800">Deine häufigsten Schwächen</h2>
                <p className="text-gray-400 text-xs">Hier hast du öfter nicht erkannt</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {weakCategories.map((cat) => (
                <span
                  key={cat}
                  className="px-2.5 py-1 bg-[#fdf0e6] text-[#D87228] text-xs font-semibold rounded-full"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Alle 10 Fallen */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
          <h2 className="font-bold text-base text-gray-800 mb-3">Alle 10 Fallen im Überblick</h2>
          <div className="space-y-2">
            {KONSUMFALLEN.map((falle, i) => {
              const result = state.results[i]
              const isExpanded = expandedFalle === falle.id
              const erkannt = result?.richtigeEntscheidung ?? false
              return (
                <div
                  key={falle.id}
                  className={`rounded-xl border overflow-hidden ${
                    erkannt ? 'border-[#2A8A76]/30' : 'border-[#C84040]/30'
                  }`}
                >
                  <button
                    onClick={() => setExpandedFalle(isExpanded ? null : falle.id)}
                    className={`w-full flex items-center gap-2.5 p-2.5 text-left transition-colors ${
                      erkannt
                        ? 'bg-[#e6f4f1] hover:bg-[#d0ece7]'
                        : 'bg-[#fae8e8] hover:bg-[#f5d5d5]'
                    }`}
                    aria-expanded={isExpanded}
                  >
                    <span className="text-base shrink-0">{falle.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-800 text-xs leading-snug">
                        {i + 1}. {falle.title}
                      </p>
                      <p className="text-gray-400 text-[10px]">
                        {getCategoryName(falle.category)} · €{falle.cost.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      {erkannt ? (
                        <CheckCircle size={15} className="text-[#2A8A76] shrink-0" />
                      ) : (
                        <XCircle size={15} className="text-[#C84040] shrink-0" />
                      )}
                      {isExpanded ? (
                        <ChevronUp size={14} className="text-gray-400 shrink-0" />
                      ) : (
                        <ChevronDown size={14} className="text-gray-400 shrink-0" />
                      )}
                    </div>
                  </button>
                  {isExpanded && (
                    <div className="bg-white p-3 border-t border-gray-100 space-y-2">
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-0.5">
                          Die Falle
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed">{falle.trap}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-0.5">
                          So schützt du dich
                        </p>
                        <p className="text-gray-600 text-xs leading-relaxed">
                          {falle.correctAction}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* 5 Goldene Regeln */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Shield size={18} className="text-[#4a2d8a]" />
            <h2 className="font-bold text-base text-gray-800">
              5 Goldene Regeln gegen Konsumfallen
            </h2>
          </div>
          <div className="space-y-2.5">
            {GOLDENE_REGELN.map((regel, i) => (
              <div key={i} className="flex items-start gap-3 p-2.5 bg-[#f3f1f9] rounded-xl">
                <span className="text-xl shrink-0">{regel.emoji}</span>
                <div>
                  <p className="font-semibold text-gray-800 text-xs mb-0.5">{regel.title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{regel.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini-Quiz */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={18} className="text-[#D87228]" />
            <h2 className="font-bold text-base text-gray-800">Mini-Quiz: 3 Fragen</h2>
          </div>
          <div className="space-y-4">
            {QUIZ_FRAGEN.map((q, qi) => (
              <div key={qi}>
                <p className="text-gray-800 text-sm font-semibold mb-2">
                  {qi + 1}. {q.frage}
                </p>
                <div className="space-y-1.5">
                  {q.optionen.map((opt, oi) => {
                    const selected = quizAnswers[qi] === oi
                    const isCorrect = oi === q.richtig
                    let style = 'bg-gray-50 border-gray-200 text-gray-600'
                    if (quizSubmitted) {
                      if (isCorrect) style = 'bg-[#e6f4f1] border-[#2A8A76] text-[#1a7a68]'
                      else if (selected && !isCorrect)
                        style = 'bg-[#fae8e8] border-[#C84040] text-[#a03030]'
                    } else if (selected) {
                      style = 'bg-[#f3f1f9] border-[#6b4db0] text-[#4a2d8a]'
                    }
                    return (
                      <button
                        key={oi}
                        disabled={quizSubmitted}
                        onClick={() => {
                          const updated = [...quizAnswers]
                          updated[qi] = oi
                          setQuizAnswers(updated)
                        }}
                        className={`w-full text-left px-3 py-2 rounded-xl border text-xs transition-all ${style} disabled:cursor-default`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>
                {quizSubmitted && (
                  <div className="mt-1.5 bg-gray-50 rounded-lg p-2">
                    <p className="text-gray-400 text-[10px] leading-relaxed">💡 {q.erklaerung}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          {!quizSubmitted ? (
            <button
              onClick={() => setQuizSubmitted(true)}
              disabled={quizAnswers.some((a) => a === null)}
              className="w-full mt-4 bg-[#D87228] text-white font-semibold py-3 rounded-xl text-sm hover:bg-[#c06020] transition disabled:opacity-40 disabled:cursor-not-allowed active:scale-95"
            >
              Quiz auswerten
            </button>
          ) : (
            <div
              className={`mt-4 p-3 rounded-xl text-center ${
                quizScore === 3 ? 'bg-[#e6f4f1]' : quizScore >= 2 ? 'bg-[#fdf0e6]' : 'bg-[#fae8e8]'
              }`}
            >
              <p
                className={`font-bold text-base ${
                  quizScore === 3
                    ? 'text-[#2A8A76]'
                    : quizScore >= 2
                      ? 'text-[#D87228]'
                      : 'text-[#C84040]'
                }`}
              >
                {quizScore}/3 richtig {quizScore === 3 ? '🏆' : quizScore >= 2 ? '👍' : '💡'}
              </p>
              <p className="text-gray-600 text-xs mt-0.5">
                {quizScore === 3
                  ? 'Perfekt! Du bist gut vorbereitet.'
                  : 'Lies die Erklärungen durch — das Wissen schützt dich!'}
              </p>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="space-y-2">
          <button
            onClick={onReset}
            className="w-full flex items-center justify-center gap-2 py-3.5 bg-gradient-to-r from-[#4a2d8a] to-[#6b4db0] text-white font-semibold rounded-xl text-sm hover:from-[#5a3d9a] hover:to-[#7b5dc0] transition active:scale-95 shadow-md"
          >
            <RefreshCw size={16} />
            Nochmal spielen
          </button>
          <a
            href="https://app.skills-up.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl text-sm hover:bg-gray-50 transition active:scale-95"
          >
            <ExternalLink size={15} />
            Zur vollständigen Skills-UP! Plattform
          </a>
          {onBack && (
            <button
              onClick={onBack}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-400 font-medium rounded-xl text-sm hover:bg-gray-50 transition active:scale-95"
            >
              <ArrowLeft size={15} />
              Zurück zur Website
            </button>
          )}
        </div>

        <p className="text-gray-400 text-xs text-center mt-4">
          Teile dein Ergebnis mit Freunden — schütze sie vor Konsumfallen!
        </p>
      </div>
    </div>
  )
}

function ScoreCircle({
  value,
  label,
  color,
  bg,
}: {
  value: string
  label: string
  color: string
  bg: string
}) {
  return (
    <div className="text-center">
      <div
        className="w-16 h-16 rounded-2xl mx-auto mb-1 flex items-center justify-center"
        style={{ backgroundColor: bg, border: `1.5px solid ${color}40` }}
      >
        <p className="font-black text-sm" style={{ color }}>
          {value}
        </p>
      </div>
      <p className="text-white/60 text-[10px]">{label}</p>
    </div>
  )
}
