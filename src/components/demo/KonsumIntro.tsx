'use client'

import { useState } from 'react'
import {
  ArrowLeft,
  ShoppingCart,
  AlertTriangle,
  Target,
  BookOpen,
  Users,
  Star,
  ChevronRight,
} from 'lucide-react'

interface Props {
  onStart: () => void
  onBack?: () => void
}

const SELF_ASSESSMENT_OPTIONS = [
  { value: 1, label: 'Totaler Anfänger', emoji: '🎯' },
  { value: 2, label: 'Ich bin vorsichtig', emoji: '🛡️' },
  { value: 3, label: 'Ich erkenne die meisten', emoji: '🔍' },
  { value: 4, label: 'Bin fast untrüglich!', emoji: '🏆' },
]

export function KonsumIntro({ onStart, onBack }: Props) {
  const [selfRating, setSelfRating] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'schueler' | 'lehrer'>('schueler')

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#4a2d8a] via-[#5a3d9a] to-gray-50 flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 pt-5 pb-3">
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
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-xs font-semibold tracking-wide">Skills-UP!</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center px-4 pt-2 pb-8 max-w-lg mx-auto w-full">
        {/* Hero */}
        <div className="text-center mb-6">
          <div className="relative inline-flex items-center justify-center mb-4">
            <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg">
              <span className="text-4xl">🛒</span>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-xl bg-[#C84040] flex items-center justify-center shadow">
              <AlertTriangle size={16} className="text-white" />
            </div>
            <div className="absolute -bottom-1 -left-2 w-7 h-7 rounded-lg bg-[#2A8A76] flex items-center justify-center shadow">
              <span className="text-sm">🔍</span>
            </div>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-1">
            Konsumfallen-Parcours
          </h1>
          <p className="text-white/60 text-sm font-medium">
            10 Szenarien · Echte Fallen · Echter Lerneffekt
          </p>
        </div>

        {/* Statistik */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 mb-5 w-full">
          <p className="text-white/40 text-xs uppercase tracking-wider mb-3 font-sans">
            Wusstest du schon?
          </p>
          <div className="grid grid-cols-3 gap-3">
            <StatBubble
              value="€487"
              label="Durchschnittsösterreicher zahlt pro Jahr für ungewollte Abos"
            />
            <StatBubble value="73%" label="der 16–25-Jährigen waren schon in einer Abo-Falle" />
            <StatBubble
              value="€1,2 Mrd."
              label="Österreicher zahlen jährlich für nicht genutzte Abos"
            />
          </div>
        </div>

        {/* Was erwartet dich */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4 w-full">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-3 font-sans">
            Was dich erwartet
          </p>
          <div className="grid grid-cols-2 gap-2.5">
            <InfoCard
              icon={<Target size={15} className="text-[#4a2d8a]" />}
              title="10 Fallen-Szenarien"
              desc="Netflix, Gaming, Klarna, Influencer & mehr"
            />
            <InfoCard
              icon={<ShoppingCart size={15} className="text-[#D87228]" />}
              title="Realistische Mockups"
              desc="Gefälschte App-Screens wie im echten Leben"
            />
            <InfoCard
              icon={<Star size={15} className="text-[#2A8A76]" />}
              title="Punkte sammeln"
              desc="Jede erkannte Falle = Triumph!"
            />
            <InfoCard
              icon={<BookOpen size={15} className="text-[#C84040]" />}
              title="Sofort-Erklärung"
              desc="Nach jeder Entscheidung: Was war die Falle?"
            />
          </div>
        </div>

        {/* Selbsteinschätzung */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-4 w-full">
          <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-sans">
            Wie gut erkennst du Fallen?
          </p>
          <p className="text-gray-600 text-sm mb-3">Schätze dich ein, bevor du startest:</p>
          <div className="grid grid-cols-2 gap-2">
            {SELF_ASSESSMENT_OPTIONS.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSelfRating(opt.value)}
                className={`p-2.5 rounded-xl border-2 text-left transition-all duration-150 ${
                  selfRating === opt.value
                    ? 'border-[#4a2d8a] bg-[#f3f1f9]'
                    : 'border-gray-200 hover:border-[#9b7ed4]'
                }`}
              >
                <span className="text-xl block mb-0.5">{opt.emoji}</span>
                <span className="text-xs font-semibold text-gray-800">{opt.label}</span>
              </button>
            ))}
          </div>
          {selfRating && (
            <p className="text-[#4a2d8a] text-xs mt-2 text-center font-medium">
              {selfRating <= 2
                ? 'Prima! Die Simulation zeigt dir, worauf du achten musst.'
                : 'Gut! Lass sehen, ob du wirklich so gut bist wie du denkst!'}
            </p>
          )}
        </div>

        {/* Lernziele Tabs */}
        <div className="bg-white rounded-2xl shadow-md p-4 mb-5 w-full">
          <div className="flex gap-1 mb-3">
            <button
              onClick={() => setActiveTab('schueler')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'schueler'
                  ? 'bg-[#4a2d8a] text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              👤 Schüler
            </button>
            <button
              onClick={() => setActiveTab('lehrer')}
              className={`flex-1 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'lehrer'
                  ? 'bg-[#4a2d8a] text-white'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              <Users size={11} className="inline mr-1" />
              Lehrer
            </button>
          </div>

          {activeTab === 'schueler' ? (
            <ul className="space-y-1.5">
              {[
                'Erkenne versteckte Kosten in Verträgen und AGBs',
                'Verstehe, wie Zeitdruck und FOMO dein Kaufverhalten manipulieren',
                'Lerne Fake-Bewertungen und Dark Patterns zu identifizieren',
                'Berechne echte Kosten: Handy, Abos, Ratenkäufe',
                'Schütze deinen Kredit-Score vor BNPL-Fallen',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-xs">
                  <ChevronRight size={12} className="text-[#4a2d8a] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <ul className="space-y-1.5">
              {[
                'Medienkompetenz: Manipulation durch Design und Sprache',
                'Verbraucherschutz: Rechtslage bei Abos und BNPL in Österreich',
                'Mathematik: Kreditkostenberechnung, Gesamtkosten, Preisvergleich',
                'AGB-Lesekompetenz: Kündigungsfristen, Kleingedrucktes',
                'Lehrplan BWL/REWE: Marketingpsychologie und Konsumentenrechte',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-gray-600 text-xs">
                  <BookOpen size={11} className="text-[#2A8A76] shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Spielregeln */}
        <div className="bg-[#fdf0e6] border border-[#D87228]/25 rounded-xl p-3.5 mb-5 w-full">
          <p className="text-[#D87228] font-semibold text-xs mb-2">Spielregeln</p>
          <ul className="space-y-1">
            {[
              'Du siehst eine realistische Situation (App/Website-Mockup)',
              'Du kannst genauer hinsehen oder direkt entscheiden',
              'Nach jeder Entscheidung erfährst du, was die Falle war',
              'Finale Auswertung: Wie viel Geld hast du gespart oder verloren?',
            ].map((rule, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600 text-xs">
                <span className="w-4 h-4 rounded-full bg-[#D87228] text-white text-[10px] flex items-center justify-center shrink-0 font-bold">
                  {i + 1}
                </span>
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <button
          onClick={onStart}
          className="w-full bg-gradient-to-r from-[#4a2d8a] to-[#6b4db0] hover:from-[#5a3d9a] hover:to-[#7b5dc0] text-white font-bold py-4 rounded-2xl text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-[#4a2d8a]/25 active:scale-95"
        >
          <ShoppingCart size={18} />
          Parcours starten — 10 Fallen warten
        </button>
        <p className="text-white/50 text-xs mt-2 text-center">
          Ca. 10 Minuten · Kein echtes Geld · Nur zu Lernzwecken
        </p>
      </div>
    </div>
  )
}

function StatBubble({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <p className="text-white font-bold text-lg leading-none mb-1">{value}</p>
      <p className="text-white/50 text-[10px] leading-tight">{label}</p>
    </div>
  )
}

function InfoCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="bg-gray-50 rounded-xl p-2.5">
      <div className="flex items-center gap-1.5 mb-0.5">
        {icon}
        <span className="text-gray-800 font-semibold text-xs">{title}</span>
      </div>
      <p className="text-gray-400 text-[11px] leading-snug">{desc}</p>
    </div>
  )
}
