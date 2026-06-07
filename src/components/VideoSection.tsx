'use client'

import { useState } from 'react'
import Image from 'next/image'

const VIDEO_ID = '30jc64qu4kQ'
const START_SECOND = 5

interface VideoSectionProps {
  /** Dark gradient variant for school pages, light for homepage */
  variant?: 'dark' | 'light'
  farbe?: string
}

export default function VideoSection({ variant = 'light', farbe = '#4a2d8a' }: VideoSectionProps) {
  const [playing, setPlaying] = useState(false)

  const bg =
    variant === 'dark'
      ? 'linear-gradient(135deg, #0d0820 0%, #1a1040 50%, #0f3d32 100%)'
      : 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)'

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: bg }}>
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.15) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(42,138,118,0.2) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Skills-UP! in Aktion
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
            Sieh selbst, wie es funktioniert.
          </h2>
          <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
            Ein echter Einblick in die Module, Simulationen und das Lehrer-Dashboard — in weniger als 2 Minuten.
          </p>
        </div>

        {/* Video Player */}
        <div className="relative group">
          {/* Glow effect */}
          <div className="absolute -inset-1 rounded-3xl blur-2xl opacity-60 pointer-events-none"
            style={{ background: `linear-gradient(135deg, ${farbe}66 0%, #2a8a7666 100%)` }} />

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10"
            style={{ aspectRatio: '16/9' }}>

            {!playing ? (
              /* ── Thumbnail + Play Button ── */
              <button
                onClick={() => setPlaying(true)}
                className="w-full h-full relative block group/btn focus:outline-none focus-visible:ring-4 focus-visible:ring-white/40"
                aria-label="Skills-UP! Video abspielen"
              >
                {/* YouTube thumbnail */}
                <Image
                  src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                  alt="Skills-UP! Video Vorschau"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/btn:scale-105"
                  unoptimized
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover/btn:bg-black/30 transition-colors duration-300" />

                {/* Gradient overlay bottom */}
                <div className="absolute inset-x-0 bottom-0 h-1/2"
                  style={{ background: 'linear-gradient(to top, rgba(10,5,30,0.8) 0%, transparent 100%)' }} />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Pulse rings */}
                    <div className="absolute inset-0 rounded-full animate-ping opacity-30 scale-150"
                      style={{ background: farbe }} />
                    <div className="absolute inset-0 rounded-full animate-ping opacity-20 scale-125 animation-delay-300"
                      style={{ background: farbe }} />

                    {/* Button */}
                    <div className="relative w-20 h-20 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-200 group-hover/btn:scale-110"
                      style={{ background: `linear-gradient(135deg, #ffffff 0%, #f3f1f9 100%)` }}>
                      <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill={farbe} stroke="none">
                        <polygon points="6 3 20 12 6 21 6 3"/>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="absolute inset-x-0 bottom-0 px-6 py-5 flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{ background: farbe }}>
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="white" stroke="none">
                        <polygon points="6 3 20 12 6 21 6 3"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-white font-body font-700 text-sm leading-none">Skills-UP! Produktvideo</p>
                      <p className="text-white/50 font-body text-xs mt-0.5">Module · Simulationen · Dashboard</p>
                    </div>
                  </div>
                  <span className="text-white/50 font-body text-xs px-3 py-1.5 rounded-full"
                    style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)' }}>
                    HD
                  </span>
                </div>
              </button>
            ) : (
              /* ── Embedded YouTube Player ── */
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?start=${START_SECOND}&autoplay=1&rel=0&modestbranding=1&color=white`}
                title="Skills-UP! Produktvideo"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </div>

        {/* Below video trust chips */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {[
            '12+ Module fertig aufbereitet',
            '10+ Praxissimulationen',
            'Setup in 5 Minuten',
            'Kein IT-Aufwand',
          ].map((t) => (
            <span key={t} className="flex items-center gap-1.5 text-xs font-body font-600 px-4 py-2 rounded-full"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.65)', border: '1px solid rgba(255,255,255,0.12)' }}>
              <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
