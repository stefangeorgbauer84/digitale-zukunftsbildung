'use client'

import { useState, useEffect, useCallback } from 'react'
import { ArrowLeft, Eye, CheckCircle, XCircle, Clock, ChevronRight, Info } from 'lucide-react'
import { KONSUMFALLEN, type KonsumState, type KonsumFalle } from '@/lib/konsumfallenSimulation'

interface Props {
  state: KonsumState
  onDecide: (erkannt: boolean, richtigeEntscheidung: boolean) => void
  onBack?: () => void
}

type DecisionPhase = 'viewing' | 'clues' | 'decided'

export function KonsumParcours({ state, onDecide, onBack }: Props) {
  const falle = KONSUMFALLEN[state.currentFall]
  const [phase, setPhase] = useState<DecisionPhase>('viewing')
  const [timer, setTimer] = useState(falle.timePressure)
  const [timerActive, setTimerActive] = useState(falle.timePressure > 0)
  const [decision, setDecision] = useState<'correct' | 'wrong' | null>(null)
  const [lookedCloser, setLookedCloser] = useState(false)

  useEffect(() => {
    setPhase('viewing')
    setTimer(falle.timePressure)
    setTimerActive(falle.timePressure > 0)
    setDecision(null)
    setLookedCloser(false)
  }, [falle.id, falle.timePressure])

  useEffect(() => {
    if (!timerActive || timer <= 0 || phase === 'decided') return
    const id = setInterval(() => {
      setTimer((t) => {
        if (t <= 1) {
          setTimerActive(false)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(id)
  }, [timerActive, timer, phase])

  const handleLookCloser = useCallback(() => {
    setLookedCloser(true)
    setPhase('clues')
    setTimerActive(false)
  }, [])

  const handleDecide = useCallback((accepted: boolean) => {
    const richtig = !accepted
    setDecision(richtig ? 'correct' : 'wrong')
    setPhase('decided')
  }, [])

  const handleNext = useCallback(() => {
    if (decision === null) return
    onDecide(lookedCloser, decision === 'correct')
  }, [decision, lookedCloser, onDecide])

  const progress = (state.currentFall / KONSUMFALLEN.length) * 100

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-lg mx-auto px-4 py-3 flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="text-gray-400 hover:text-gray-700 transition-colors"
              aria-label="Zurück"
            >
              <ArrowLeft size={18} />
            </button>
          )}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-semibold text-gray-500">
                Falle {state.currentFall + 1} von {KONSUMFALLEN.length}
              </span>
              <span className="text-xs text-gray-400">{Math.round(progress)}% abgeschlossen</span>
            </div>
            <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#4a2d8a] to-[#6b4db0] rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          {falle.timePressure > 0 && timerActive && (
            <div
              className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold ${
                timer <= 10
                  ? 'bg-[#C84040] text-white animate-pulse'
                  : 'bg-orange-100 text-[#D87228]'
              }`}
            >
              <Clock size={12} />
              {timer}s
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 max-w-lg mx-auto w-full px-4 py-4 pb-8">
        <div className="flex items-center gap-2 mb-3">
          <CategoryBadge category={falle.category} />
          <span className="text-gray-400 text-xs">Falle {state.currentFall + 1}</span>
        </div>

        <h2 className="text-lg font-bold text-gray-800 mb-1">{falle.title}</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{falle.scenario}</p>

        <div className="mb-4">
          <FalleMockup falle={falle} timerSeconds={timer} timerActive={timerActive} />
        </div>

        {phase === 'clues' && (
          <div className="bg-[#fdf0e6] border border-[#D87228]/30 rounded-2xl p-4 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Eye size={15} className="text-[#D87228]" />
              <p className="text-[#D87228] font-semibold text-sm">Hinweise gefunden:</p>
            </div>
            <ul className="space-y-2">
              {falle.clues.map((clue, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="w-5 h-5 rounded-full bg-[#D87228]/15 text-[#D87228] text-[10px] font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-gray-600 text-xs leading-relaxed">{clue}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {phase === 'decided' && (
          <DecisionResult falle={falle} decision={decision!} onNext={handleNext} />
        )}

        {phase !== 'decided' && (
          <div className="space-y-2">
            {phase === 'viewing' && (
              <button
                onClick={handleLookCloser}
                className="w-full flex items-center justify-center gap-2 py-3 bg-white border-2 border-[#6b4db0] text-[#4a2d8a] font-semibold rounded-xl hover:bg-[#f3f1f9] transition-all active:scale-95 text-sm"
              >
                <Eye size={16} />
                Genauer hinschauen
              </button>
            )}
            <button
              onClick={() => handleDecide(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#2A8A76] text-white font-semibold rounded-xl hover:bg-[#1a7a68] transition-all active:scale-95 text-sm shadow-sm"
            >
              <CheckCircle size={16} />
              Ich lehne ab / kaufe nicht
            </button>
            <button
              onClick={() => handleDecide(true)}
              className="w-full flex items-center justify-center gap-2 py-3 bg-white border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-all active:scale-95 text-sm"
            >
              <XCircle size={15} className="text-[#C84040]" />
              Ich kaufe / akzeptiere
            </button>
          </div>
        )}

        {phase === 'viewing' && (
          <div className="flex items-center gap-1.5 mt-3 justify-center">
            <Info size={12} className="text-gray-400" />
            <p className="text-gray-400 text-xs">
              Tipp: Erst &ldquo;Genauer hinschauen&rdquo; — dann entscheiden
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

function CategoryBadge({ category }: { category: KonsumFalle['category'] }) {
  const styles: Record<KonsumFalle['category'], { bg: string; text: string; label: string }> = {
    'abo-falle': { bg: 'bg-[#fae8e8]', text: 'text-[#C84040]', label: 'Abo-Falle' },
    influencer: { bg: 'bg-[#fdf0e6]', text: 'text-[#D87228]', label: 'Influencer' },
    gaming: { bg: 'bg-[#f3f1f9]', text: 'text-[#6b4db0]', label: 'Gaming' },
    bnpl: { bg: 'bg-[#e6f4f1]', text: 'text-[#2A8A76]', label: 'BNPL' },
    handy: { bg: 'bg-gray-100', text: 'text-gray-600', label: 'Handy' },
    supermarkt: { bg: 'bg-orange-50', text: 'text-orange-600', label: 'Supermarkt' },
    'dark-pattern': { bg: 'bg-[#fae8e8]', text: 'text-[#C84040]', label: 'Dark Pattern' },
  }
  const s = styles[category]
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${s.bg} ${s.text}`}>
      {s.label}
    </span>
  )
}

function DecisionResult({
  falle,
  decision,
  onNext,
}: {
  falle: KonsumFalle
  decision: 'correct' | 'wrong'
  onNext: () => void
}) {
  const isCorrect = decision === 'correct'
  return (
    <div
      className={`rounded-2xl p-4 mb-4 border ${
        isCorrect ? 'bg-[#e6f4f1] border-[#2A8A76]/30' : 'bg-[#fae8e8] border-[#C84040]/30'
      }`}
    >
      <div className="flex items-start gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
            isCorrect ? 'bg-[#2A8A76]' : 'bg-[#C84040]'
          }`}
        >
          {isCorrect ? (
            <CheckCircle size={20} className="text-white" />
          ) : (
            <XCircle size={20} className="text-white" />
          )}
        </div>
        <div>
          <p
            className={`font-bold text-base ${
              isCorrect ? 'text-[#2A8A76]' : 'text-[#C84040]'
            }`}
          >
            {isCorrect ? '🎉 Falle erkannt!' : '😬 Reingefallen!'}
          </p>
          <p className={`text-xs font-medium ${isCorrect ? 'text-[#1a7a68]' : 'text-[#a03030]'}`}>
            {isCorrect
              ? `Du hast €${falle.cost.toFixed(2)} gespart!`
              : `Das kostet dich €${falle.cost.toFixed(2)}`}
          </p>
        </div>
      </div>

      <div className="bg-white/70 rounded-xl p-3 mb-3">
        <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Die Falle</p>
        <p className="text-gray-600 text-xs leading-relaxed">{falle.trap}</p>
      </div>

      <div className="bg-white/70 rounded-xl p-3 mb-4">
        <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Richtig wäre</p>
        <p className="text-gray-600 text-xs leading-relaxed">{falle.correctAction}</p>
      </div>

      <button
        onClick={onNext}
        className="w-full py-3 bg-gradient-to-r from-[#4a2d8a] to-[#6b4db0] text-white font-semibold rounded-xl text-sm flex items-center justify-center gap-2 hover:from-[#5a3d9a] hover:to-[#7b5dc0] transition-all active:scale-95 shadow"
      >
        Weiter
        <ChevronRight size={16} />
      </button>
    </div>
  )
}

// ── Mockup Components ─────────────────────────────────────────────────────────

function FalleMockup({
  falle,
  timerSeconds,
  timerActive,
}: {
  falle: KonsumFalle
  timerSeconds: number
  timerActive: boolean
}) {
  switch (falle.mockupType) {
    case 'netflix':
      return <NetflixMockup />
    case 'influencer':
      return <InfluencerMockup timer={timerSeconds} timerActive={timerActive} />
    case 'gaming':
      return <GamingMockup />
    case 'klarna':
      return <KlarnaMockup />
    case 'supermarkt':
      return <SupermarktMockup />
    case 'handy':
      return <HandyMockup />
    case 'flug':
      return <FlugMockup />
    case 'social':
      return <SocialMockup timer={timerSeconds} timerActive={timerActive} />
    case 'bewertung':
      return <BewertungMockup />
    case 'kuendigung':
      return <KuendigungMockup />
    default:
      return null
  }
}

function NetflixMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-[#141414]">
      <div className="bg-[#141414] px-4 py-3 flex items-center justify-between">
        <span className="text-[#e50914] font-black text-xl tracking-tight">STREAMFLIX</span>
        <div className="flex items-center gap-3">
          <span className="text-white/60 text-xs">Suchen</span>
          <div className="w-7 h-7 rounded-full bg-[#e50914] flex items-center justify-center">
            <span className="text-white text-xs font-bold">M</span>
          </div>
        </div>
      </div>
      <div className="relative bg-gradient-to-b from-[#1a1a2e] to-[#141414] px-4 py-5">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-[#4a2d8a] to-transparent" />
        <p className="text-white/50 text-[10px] mb-1 relative">BELIEBTE SERIE</p>
        <h3 className="text-white font-bold text-xl mb-2 relative">
          Dein Gratis-Monat
          <br />
          endet heute!
        </h3>
        <p className="text-white/70 text-xs mb-3 relative">
          Genieße weiterhin unbegrenztes Streaming
        </p>
        <button className="bg-white text-black px-5 py-2 rounded text-xs font-bold hover:bg-white/90 transition relative">
          Weiter schauen
        </button>
      </div>
      <div className="bg-[#1a1a1a] px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-white/70 text-xs">Standard-Abo</span>
          <span className="text-white font-bold text-sm">€15,99/Monat</span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <span className="text-white/70 text-xs">Nächste Abbuchung</span>
          <span className="text-[#e50914] font-semibold text-xs">Heute, 23:59</span>
        </div>
        <button className="w-full bg-[#e50914] text-white py-2.5 rounded text-xs font-bold hover:bg-[#c50710] transition mb-2">
          Abo bestätigen &amp; weiter schauen
        </button>
        <p className="text-white/20 text-[9px] text-center leading-tight">
          Nach dem kostenlosen Probemonat wird Ihr Konto automatisch mit €15,99/Monat belastet.
          Jederzeit kündbar. Mit Klick auf &ldquo;Bestätigen&rdquo; stimmen Sie den AGB zu.
        </p>
      </div>
    </div>
  )
}

function InfluencerMockup({ timer, timerActive }: { timer: number; timerActive: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-gradient-to-b from-[#ff6b6b] to-[#ee5a24]">
      <div className="bg-black/20 px-4 py-2 flex items-center justify-between">
        <span className="text-white font-black text-sm">SNEAKR.AT</span>
        <span className="text-white/70 text-xs">🛒 0</span>
      </div>
      <div className="px-4 pt-3 pb-2">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-full bg-white/30 flex items-center justify-center text-sm">
            👤
          </div>
          <div>
            <p className="text-white font-bold text-xs">@LucaFinds</p>
            <p className="text-white/60 text-[10px]">1,2 Mio. Follower</p>
          </div>
          <span className="ml-auto bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full">
            #Werbung
          </span>
        </div>
        <p className="text-white/90 text-xs leading-relaxed mb-2">
          &ldquo;Leute, BITTE holt euch das schnell! Exklusiv nur für meine Community — heute
          letzter Tag! 🔥&rdquo;
        </p>
      </div>
      <div className="bg-white mx-3 rounded-xl p-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-2xl shrink-0">
            👟
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800 text-sm">Air Force Premium</p>
            <p className="text-gray-400 text-xs">Exklusiv-Edition · Limited</p>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-[#C84040] font-bold text-base">€99</span>
              <span className="text-gray-400 line-through text-xs">€199</span>
              <span className="bg-[#C84040] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">
                -50%
              </span>
            </div>
          </div>
        </div>
      </div>
      {timerActive && timer > 0 ? (
        <div className="mx-3 mb-3 bg-black/30 rounded-xl p-2.5 flex items-center gap-2">
          <Clock size={14} className="text-white" />
          <span className="text-white text-xs font-medium">Angebot läuft ab in:</span>
          <span
            className={`ml-auto font-black text-base ${
              timer <= 10 ? 'text-yellow-300 animate-pulse' : 'text-white'
            }`}
          >
            00:{String(timer).padStart(2, '0')}
          </span>
        </div>
      ) : (
        <div className="mx-3 mb-3 bg-black/30 rounded-xl p-2.5">
          <p className="text-white/80 text-xs text-center">⏳ Angebot abgelaufen!</p>
        </div>
      )}
      <div className="px-3 pb-3">
        <button className="w-full bg-white text-[#ee5a24] font-black py-3 rounded-xl text-sm hover:bg-white/90 transition active:scale-95">
          JETZT KAUFEN — SOLANGE VORRAT REICHT!
        </button>
        <p className="text-white/30 text-[9px] text-center mt-1">
          *Affiliate-Link — @LucaFinds erhält Provision bei Kauf
        </p>
      </div>
    </div>
  )
}

function GamingMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-[#0f0f23]">
      <div className="bg-[#1c1c3a] px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-xl">
            ⚔️
          </div>
          <div>
            <p className="text-white font-bold text-sm">DragonQuest Arena</p>
            <p className="text-white/40 text-[10px]">⭐⭐⭐⭐⭐ 48.329 Bewertungen · Gratis</p>
          </div>
        </div>
        <button className="bg-[#4a2d8a] text-white text-xs px-3 py-1.5 rounded-lg font-bold">
          Laden
        </button>
      </div>
      <div className="bg-[#252540] px-4 py-1.5 flex items-center gap-1">
        <span className="text-white/30 text-[10px]">📱 In-App-Käufe verfügbar</span>
      </div>
      <div className="p-4">
        <div className="bg-gradient-to-br from-[#1a1a3a] to-[#2a1a4a] rounded-xl border border-purple-500/30 p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-yellow-400 font-black text-sm">⚡ STARTER-PACK</span>
            <span className="bg-[#C84040] text-white text-[10px] px-2 py-0.5 rounded-full font-bold animate-pulse">
              NUR HEUTE
            </span>
          </div>
          <div className="flex items-center gap-3 mb-2">
            <div className="grid grid-cols-3 gap-1">
              {['💎', '⚔️', '🏰', '🐉', '🌟', '💰'].map((emoji, i) => (
                <div
                  key={i}
                  className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-sm"
                >
                  {emoji}
                </div>
              ))}
            </div>
            <div className="flex-1">
              <p className="text-white text-xs leading-snug">
                500 Gems + Legendäres Schwert + Drachenei + 3 Tage VIP
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-white/40 line-through text-xs">€9,99</span>
              <span className="text-green-400 font-black text-xl ml-2">€0,99</span>
            </div>
            <button className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold text-xs px-4 py-2 rounded-lg active:scale-95">
              Kaufen
            </button>
          </div>
        </div>
        <p className="text-white/40 text-[10px] mb-1">Gem-Shop (nach dem Gratis-Pack):</p>
        <div className="grid grid-cols-3 gap-1.5">
          {[
            { gems: '100', price: '€0,99' },
            { gems: '500', price: '€4,99' },
            { gems: '2.500', price: '€24,99' },
          ].map((item) => (
            <div key={item.gems} className="bg-[#1c1c3a] rounded-lg p-1.5 text-center">
              <p className="text-blue-400 font-bold text-xs">{item.gems} 💎</p>
              <p className="text-white/60 text-[10px]">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function KlarnaMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white">
      <div className="bg-[#ffb3c7] px-4 py-2 flex items-center justify-between">
        <span className="font-black text-[#1a1a1a] text-sm">SNEAKSHOP.AT</span>
        <span className="text-[#1a1a1a]/60 text-xs">🛒 1</span>
      </div>
      <div className="px-4 pt-3 pb-2 flex items-center gap-3">
        <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center text-2xl shrink-0">
          👟
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">Nike Air Max 270</p>
          <p className="text-gray-400 text-xs">Größe 42 · Schwarz</p>
          <p className="font-bold text-gray-800 text-base mt-0.5">€149,00</p>
        </div>
      </div>
      <div className="mx-4 mb-3 bg-[#ffb3c7]/20 border border-[#ffb3c7] rounded-xl p-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="font-black text-sm text-[#17120f]">klarna</span>
          <span className="bg-[#17120f] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
            0% Zinsen
          </span>
        </div>
        <p className="text-[#17120f]/80 text-xs font-medium mb-1">Jetzt kaufen, später bezahlen</p>
        <div className="grid grid-cols-3 gap-1 mb-2">
          {[
            { label: 'Heute', amount: '€0,00' },
            { label: '30 Tage', amount: '€49,67' },
            { label: '60 Tage', amount: '€49,67' },
          ].map((step) => (
            <div
              key={step.label}
              className="bg-white rounded-lg p-1.5 text-center border border-pink-100"
            >
              <p className="text-[10px] text-gray-400">{step.label}</p>
              <p className="text-xs font-bold text-gray-800">{step.amount}</p>
            </div>
          ))}
        </div>
        <button className="w-full bg-[#17120f] text-white py-2 rounded-lg text-xs font-bold hover:bg-[#2a2a2a] transition">
          Mit Klarna bezahlen
        </button>
        <p className="text-[#17120f]/30 text-[8px] mt-1 leading-tight">
          Bei nicht fristgerechter Zahlung fallen Mahngebühren bis zu €35,– an. Klarna übermittelt
          Zahlungsausfälle an Kreditauskunfteien (KSV). Mit Klarna stimmen Sie unseren AGB zu.
        </p>
      </div>
      <div className="px-4 pb-3">
        <button className="w-full border border-gray-200 py-2 rounded-xl text-xs text-gray-400 hover:bg-gray-50 transition">
          Alternativ: Sofort per Kreditkarte zahlen
        </button>
      </div>
    </div>
  )
}

function SupermarktMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white">
      <div className="bg-[#d52b1e] px-4 py-2 flex items-center justify-between">
        <span className="text-white font-black text-sm">BILLA</span>
        <span className="text-white/80 text-xs">Milchprodukte</span>
      </div>
      <div className="p-3 space-y-2">
        <p className="text-gray-400 text-[10px] uppercase tracking-wider">Joghurt-Regal</p>
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-2.5 relative">
          <span className="absolute -top-2 -right-1 bg-[#d52b1e] text-white text-[9px] px-2 py-0.5 rounded-full font-bold">
            AUGENHÖHE
          </span>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-xl shrink-0">
              🥛
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-xs">Ja! Natürlich Bio-Joghurt 4er</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[#d52b1e] font-black text-sm">€2,49</span>
                <span className="text-gray-400 line-through text-xs">€2,99</span>
              </div>
              <p className="text-gray-400 text-[10px]">= €0,622 / 100g</p>
            </div>
            <span className="bg-[#d52b1e] text-white text-[10px] px-2 py-1 rounded-lg font-bold shrink-0">
              AKTION!
            </span>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 relative opacity-70">
          <span className="absolute -top-2 -right-1 bg-gray-400 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">
            OBEN
          </span>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl shrink-0">
              🥛
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-xs">Billa-Eigenmarke Joghurt 4er</p>
              <p className="text-[#2A8A76] font-black text-sm">€1,59</p>
              <p className="text-gray-400 text-[10px]">= €0,398 / 100g ✓ GÜNSTIGER</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-2.5 relative opacity-70">
          <span className="absolute -top-2 -right-1 bg-gray-400 text-white text-[9px] px-2 py-0.5 rounded-full font-bold">
            UNTEN
          </span>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-xl shrink-0">
              🥛
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800 text-xs">Joghurt Einzel</p>
              <p className="text-[#2A8A76] font-black text-sm">€0,49/Stk → €1,96 für 4</p>
              <p className="text-gray-400 text-[10px]">= €0,490 / 100g</p>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 rounded-lg p-2">
          <p className="text-blue-700 text-[10px]">
            💡 Österreich: Grundpreisangabe (per 100g/100ml) ist Pflicht — immer vergleichen!
          </p>
        </div>
      </div>
    </div>
  )
}

function HandyMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white">
      <div className="bg-[#e2001a] px-4 py-2 flex items-center justify-between">
        <span className="text-white font-black text-lg">A1</span>
        <span className="text-white/80 text-xs">Tarife &amp; Handys</span>
      </div>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 px-4 py-4 text-center">
        <div className="text-4xl mb-2">📱</div>
        <p className="text-white font-black text-xl">iPhone 16</p>
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="bg-[#e2001a] text-white font-black text-2xl px-3 py-1 rounded-xl">
            GRATIS
          </span>
          <span className="text-white/60 line-through text-sm">€999</span>
        </div>
        <p className="text-white/50 text-xs">mit unbegrenztem Datentarif</p>
      </div>
      <div className="p-4">
        <div className="space-y-2 mb-3">
          <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-600 text-sm">Monatliche Rate</span>
            <span className="font-bold text-gray-800">€65,00</span>
          </div>
          <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-600 text-sm">Vertragslaufzeit</span>
            <span className="font-bold text-gray-800">24 Monate</span>
          </div>
          <div className="flex items-center justify-between py-1.5 border-b border-gray-100">
            <span className="text-gray-600 text-sm">Anschlussgebühr</span>
            <span className="font-bold text-gray-800">€0,00</span>
          </div>
          <div className="flex items-center justify-between py-1.5">
            <span className="text-gray-400 text-[10px]">Gesamtkosten (24 Mon.)</span>
            <span className="text-gray-400 text-[10px]">€1.560,00</span>
          </div>
        </div>
        <div className="bg-gray-50 rounded-lg p-2 mb-3">
          <p className="text-gray-400 text-[10px]">
            Gleicher Tarif ohne Handy: €25/Monat (€600 über 24 Mon.)
          </p>
          <p className="text-gray-400 text-[10px]">
            → Effektiver Handypreis: €1.560 − €600 = <strong>€960</strong>
          </p>
        </div>
        <button className="w-full bg-[#e2001a] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#c0001a] transition active:scale-95">
          Jetzt bestellen — iPhone gratis sichern!
        </button>
      </div>
    </div>
  )
}

function FlugMockup() {
  const [checked, setChecked] = useState(true)

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white">
      <div className="bg-gradient-to-r from-[#003580] to-[#0071c2] px-4 py-2 flex items-center gap-2">
        <span className="text-2xl">✈️</span>
        <span className="text-white font-black text-sm">FlyAustria Booking</span>
      </div>
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-1">
          <span className="font-bold text-gray-800 text-sm">VIE</span>
          <div className="flex-1 border-t border-dashed border-gray-300" />
          <span className="text-xs text-gray-400">2h 15m</span>
          <div className="flex-1 border-t border-dashed border-gray-300" />
          <span className="font-bold text-gray-800 text-sm">BCN</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-400 text-xs">1 Passagier · Economy</span>
          <span className="font-bold text-[#003580] text-base">€89,00</span>
        </div>
      </div>
      <div className="px-4 py-3">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Zusatzleistungen</p>
        <div
          className="flex items-start gap-2.5 bg-[#e8f0fe] border border-[#003580]/20 rounded-xl p-2.5 mb-2 cursor-pointer"
          onClick={() => setChecked(!checked)}
          role="checkbox"
          aria-checked={checked}
          tabIndex={0}
          onKeyDown={(e) => e.key === ' ' && setChecked(!checked)}
        >
          <div
            className={`w-4 h-4 rounded border-2 flex items-center justify-center shrink-0 mt-0.5 ${
              checked ? 'bg-[#003580] border-[#003580]' : 'border-gray-300 bg-white'
            }`}
          >
            {checked && <span className="text-white text-[10px] font-bold">✓</span>}
          </div>
          <div className="flex-1">
            <p className="font-semibold text-gray-800 text-xs">
              ✅ Reiseversicherung Premium — Für Ihre Sicherheit!
            </p>
            <p className="text-gray-400 text-[10px]">
              Umfassender Schutz bei Stornierung, Gepäckverlust & Krankheit
            </p>
          </div>
          <span className="font-bold text-[#003580] text-sm shrink-0">+€18,99</span>
        </div>
        <p className="text-[#C84040] text-[10px] text-center mb-2">
          ↑ Diese Checkbox war bereits angehakt!
        </p>
        <div className="bg-gray-50 rounded-xl p-2.5 flex items-center justify-between">
          <span className="font-semibold text-gray-800 text-sm">Gesamtbetrag</span>
          <span className="font-black text-[#003580] text-base">
            {checked ? '€107,99' : '€89,00'}
          </span>
        </div>
        <button className="w-full mt-2 bg-[#0071c2] text-white py-3 rounded-xl text-sm font-bold hover:bg-[#0056a0] transition active:scale-95">
          Jetzt buchen
        </button>
        <p className="text-gray-400 text-[9px] text-center mt-1">
          Klick auf die Checkbox um Versicherung {checked ? 'abzuwählen' : 'hinzuzufügen'}
        </p>
      </div>
    </div>
  )
}

function SocialMockup({ timer, timerActive }: { timer: number; timerActive: boolean }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white">
      <div className="border-b border-gray-100 px-3 py-2 flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
          <span className="text-white text-[10px] font-black">S</span>
        </div>
        <span className="font-bold text-gray-800 text-xs">SneakrDrop.at</span>
        <span className="ml-auto text-[10px] text-gray-400">Gesponserter Beitrag</span>
      </div>
      <div className="bg-gradient-to-br from-gray-900 to-gray-700 aspect-video flex flex-col items-center justify-center relative">
        <div className="text-5xl mb-2">👟</div>
        <div className="bg-[#C84040] text-white font-black text-sm px-4 py-1 rounded-full mb-1">
          LIMITED EDITION
        </div>
        <p className="text-white text-xs font-medium">Nike Air Max × Collab 2025</p>
        <p className="text-white/60 text-[10px]">Nur 100 Paar weltweit!</p>
        {timerActive && timer > 0 && (
          <div className="absolute bottom-2 right-2 bg-black/70 rounded-lg px-2 py-1 flex items-center gap-1">
            <Clock size={10} className="text-red-400" />
            <span className="text-white text-[10px] font-bold">
              {String(Math.floor(timer / 60)).padStart(2, '0')}:
              {String(timer % 60).padStart(2, '0')}
            </span>
          </div>
        )}
      </div>
      <div className="px-3 py-2">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-lg">❤️</span>
          <span className="text-lg">💬</span>
          <span className="text-lg">↗️</span>
          <span className="ml-auto font-bold text-gray-800 text-base">€189,00</span>
        </div>
        <p className="text-gray-800 text-xs mb-0.5">
          <span className="font-bold">SneakrDrop.at</span> ⚡ NUR HEUTE! Die Collab die alle wollten
          — jetzt LIVE! Nur 100 Paar, wenn weg dann weg 🔥
        </p>
        <p className="text-gray-400 text-[10px]">847 Kommentare · vor 2 Stunden</p>
        <button className="w-full mt-2 bg-[#4a2d8a] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#6b4db0] transition active:scale-95">
          Jetzt kaufen — Bevor es zu spät ist!
        </button>
      </div>
    </div>
  )
}

function BewertungMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white">
      <div className="bg-[#e5002d] px-4 py-2">
        <span className="text-white font-black text-sm">willhaben</span>
      </div>
      <div className="px-4 pt-3 pb-2 flex items-center gap-3 border-b border-gray-100">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-2xl shrink-0">
          🎧
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm">ProSound Wireless Kopfhörer</p>
          <p className="text-gray-400 text-xs">Neu · Versand möglich</p>
          <p className="font-black text-[#e5002d] text-base">€45,00</p>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="text-center">
            <p className="font-black text-3xl text-gray-800">4,9</p>
            <p className="text-yellow-400 text-sm">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-400 text-[10px]">847 Bewertungen</p>
          </div>
          <div className="flex-1 space-y-0.5">
            {[
              { stars: 5, pct: 97 },
              { stars: 4, pct: 3 },
              { stars: 3, pct: 0 },
              { stars: 2, pct: 0 },
              { stars: 1, pct: 0 },
            ].map((row) => (
              <div key={row.stars} className="flex items-center gap-1">
                <span className="text-[9px] text-gray-400 w-3">{row.stars}</span>
                <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full"
                    style={{ width: `${row.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#fae8e8] rounded-lg p-2 mt-2">
          <p className="text-[#C84040] text-[10px] font-semibold">
            ⚠️ 831 von 847 Bewertungen vom selben Tag (15.03.2025)
          </p>
        </div>
      </div>
      <div className="px-4 py-2 space-y-2">
        {[
          { name: 'M. S.', date: '15. März 2025', text: 'Super Produkt! Bin sehr zufrieden.' },
          { name: 'A. K.', date: '15. März 2025', text: 'Tolle Qualität, schnelle Lieferung!' },
          { name: 'L. H.', date: '15. März 2025', text: 'Kann ich nur empfehlen! 5 Sterne.' },
        ].map((r) => (
          <div key={r.name} className="border-b border-gray-100 pb-2">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-semibold text-gray-800 text-xs">{r.name}</span>
              <span className="text-[#C84040] text-[10px] font-medium">{r.date} ⚠️</span>
            </div>
            <p className="text-yellow-400 text-[10px] mb-0.5">⭐⭐⭐⭐⭐</p>
            <p className="text-gray-600 text-xs">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function KuendigungMockup() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-white">
      <div className="bg-gradient-to-r from-[#1a1a2e] to-[#16213e] px-4 py-3 flex items-center gap-2">
        <span className="text-2xl">💪</span>
        <div>
          <span className="text-white font-black text-sm">FitLife Studios</span>
          <p className="text-white/50 text-[10px]">Premium Membership</p>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">Dein Vertrag</p>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Mitgliedschaft</span>
            <span className="font-semibold text-gray-800 text-sm">€39,00/Monat</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 text-sm">Laufzeit</span>
            <span className="font-semibold text-gray-800 text-sm">monatlich kündbar*</span>
          </div>
        </div>
      </div>
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-gray-400 text-xs uppercase tracking-wider mb-2">§ 8 Kündigung (AGB)</p>
        <div className="bg-gray-50 rounded-xl p-2.5 font-mono text-[10px] text-gray-600 leading-relaxed">
          <p>
            *Die Mitgliedschaft ist monatlich kündbar mit einer Kündigungsfrist von einem (1) Monat
            zum Monatsende. Die Kündigung hat{' '}
            <span className="bg-yellow-200 px-0.5 font-bold">schriftlich per Einschreibebrief</span>{' '}
            zu erfolgen. E-Mail oder mündliche Kündigung ist{' '}
            <span className="bg-[#fae8e8] px-0.5 font-bold text-[#C84040]">nicht wirksam.</span>
          </p>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-2.5 mb-2">
          <p className="text-blue-700 text-xs font-semibold">
            📧 E-Mail gesendet an: kuendigung@fitlife.at
          </p>
          <p className="text-blue-600 text-[10px]">
            &ldquo;Hiermit kündige ich meine Mitgliedschaft per Ende des Monats.&rdquo;
          </p>
        </div>
        <div className="bg-[#fae8e8] border border-[#C84040]/30 rounded-xl p-2.5">
          <p className="text-[#C84040] font-semibold text-xs">Kündigung NICHT wirksam!</p>
          <p className="text-[#a03030] text-[10px] leading-snug">
            E-Mail gilt laut AGB nicht. Du hast noch 3 Monate à €39 = <strong>€117</strong> zu
            zahlen.
          </p>
        </div>
      </div>
    </div>
  )
}
