'use client'

import { useState } from 'react'
import Image from 'next/image'

export type BunnyVideo = {
  guid: string
  badge: string
  titel: string
  beschreibung: string
  sekunden: number
  /** Farbe des Play-Dreiecks */
  akzent: string
  /** Bunny liefert kein Standbild (private Library → 403), darum ein Frame aus dem Master */
  poster: string
}

type Props = {
  eyebrow: string
  headline: string
  lead: string
  videos: BunnyVideo[]
  variante?: 'hell' | 'dunkel'
  /** Optionaler Hinweis unter dem Raster, z.B. wenn das Video einen anderen Bestellweg nennt */
  fussnote?: string
}

const BIBLIOTHEK = '722507'

const embed = (guid: string) => `https://iframe.mediadelivery.net/embed/${BIBLIOTHEK}/${guid}`

const laufzeit = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

// Statisches JSON-LD aus hartkodierten Videodaten (kein User-Input). `<` wird trotzdem
// escaped: JSON.stringify tut das nicht, ein `</script>` im Text würde das Tag schließen.
const jsonLdScript = (v: BunnyVideo) =>
  JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: `${v.titel} — ${v.badge}`,
    description: v.beschreibung,
    thumbnailUrl: `https://www.digitale-zukunftsbildung.eu${v.poster}`,
    uploadDate: '2026-09-01',
    duration: `PT${v.sekunden}S`,
    embedUrl: embed(v.guid),
    publisher: {
      '@type': 'Organization',
      name: 'Verein zur Entwicklung der digitalen Zukunftsbildung',
      url: 'https://www.digitale-zukunftsbildung.eu',
    },
    inLanguage: 'de-AT',
  }).replace(/</g, '\\u003c')

export default function BunnyVideoSektion({
  eyebrow,
  headline,
  lead,
  videos,
  variante = 'hell',
  fussnote,
}: Props) {
  // Ein gemeinsamer Consent für alle Videos der Sektion (DSGVO Two-Click)
  const [consentGiven, setConsentGiven] = useState(false)
  const [consentAskedFor, setConsentAskedFor] = useState<string | null>(null)
  const [playing, setPlaying] = useState<Record<string, boolean>>({})

  const play = (guid: string) => setPlaying((p) => ({ ...p, [guid]: true }))

  const dunkel = variante === 'dunkel'
  const ueberschriftId = `videosektion-${videos[0]?.guid ?? 'leer'}`

  return (
    <section
      className={dunkel ? 'py-16 md:py-20 px-6' : 'py-16 md:py-20 px-6'}
      aria-labelledby={ueberschriftId}
      style={{
        background: dunkel
          ? 'linear-gradient(135deg, #150c33 0%, #1a1040 60%, #12463b 100%)'
          : 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)',
      }}
    >
      {videos.map((v) => (
        <script
          key={v.guid}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdScript(v) }}
        />
      ))}

      <div className="max-w-5xl mx-auto">
        {/* Kopf */}
        <div className="text-center mb-10">
          <div
            className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-4 py-2 rounded-full mb-5"
            style={
              dunkel
                ? {
                    background: 'rgba(255,255,255,0.1)',
                    color: 'rgba(255,255,255,0.75)',
                    border: '1px solid rgba(255,255,255,0.18)',
                  }
                : { background: '#ffffff', color: '#4a2d8a' }
            }
          >
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
            {eyebrow}
          </div>
          <h2
            id={ueberschriftId}
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            style={{ color: dunkel ? '#ffffff' : '#1a1040' }}
          >
            {headline}
          </h2>
          <p
            className="font-body text-lg max-w-2xl mx-auto"
            style={{ color: dunkel ? 'rgba(255,255,255,0.7)' : undefined }}
          >
            <span className={dunkel ? '' : 'text-text-secondary'}>{lead}</span>
          </p>
        </div>

        {/* Karten — eine einzelne Karte bleibt schmal, zwei stehen nebeneinander */}
        <div
          className={
            videos.length === 1
              ? 'max-w-3xl mx-auto'
              : 'grid grid-cols-1 md:grid-cols-2 gap-7'
          }
        >
          {videos.map((v) => (
            <div key={v.guid} className="flex flex-col">
              <div
                className="relative rounded-2xl overflow-hidden shadow-card bg-gray-900"
                style={{ aspectRatio: '16/9' }}
              >
                {playing[v.guid] ? (
                  <iframe
                    src={`${embed(v.guid)}?autoplay=true`}
                    title={`${v.titel} — ${v.badge}`}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                ) : consentAskedFor === v.guid && !consentGiven ? (
                  /* ── DSGVO Consent Overlay (Two-Click) ── */
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center"
                    style={{ background: 'rgba(10,5,30,0.94)' }}
                  >
                    <p className="text-white/80 font-body text-xs leading-relaxed">
                      Beim Abspielen werden Daten (IP-Adresse, Geräteinformationen) an{' '}
                      <strong className="text-white">bunny.net</strong> (BunnyWay d.o.o.,
                      EU/Slowenien) übertragen.
                    </p>
                    <button
                      onClick={() => {
                        setConsentGiven(true)
                        setConsentAskedFor(null)
                        play(v.guid)
                      }}
                      className="px-5 py-2.5 rounded-xl text-sm font-body font-700 text-white transition-all hover:opacity-90 active:scale-95"
                      style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}
                    >
                      Video laden und abspielen
                    </button>
                    <p className="text-white/50 font-body text-[11px]">
                      Mehr in der{' '}
                      <a href="/impressum#datenschutz" className="underline hover:text-white">
                        Datenschutzerklärung
                      </a>
                    </p>
                  </div>
                ) : (
                  <button
                    onClick={() => (consentGiven ? play(v.guid) : setConsentAskedFor(v.guid))}
                    className="group absolute inset-0 w-full h-full block text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-medium"
                    aria-label={`Video abspielen: ${v.titel} — ${v.badge}, ${laufzeit(v.sekunden)}`}
                  >
                    <Image
                      src={v.poster}
                      alt=""
                      aria-hidden="true"
                      fill
                      sizes={videos.length === 1 ? '(min-width: 768px) 768px, 100vw' : '(min-width: 768px) 50vw, 100vw'}
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    {/* Sonniger Aussendreh — ohne Abdunklung verlieren Knopf und
                        Beschriftung ihren Kontrast. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-black/35"
                    />

                    {/* Zielgruppen-Badge */}
                    <span
                      className="absolute top-4 left-4 text-[11px] font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                      style={{ background: 'rgba(10,5,30,0.55)', border: '1px solid rgba(255,255,255,0.3)', backdropFilter: 'blur(8px)' }}
                    >
                      {v.badge}
                    </span>

                    {/* Laufzeit */}
                    <span
                      className="absolute top-4 right-4 text-[11px] font-body font-700 px-2.5 py-1.5 rounded-full text-white tabular-nums"
                      style={{ background: 'rgba(10,5,30,0.55)', backdropFilter: 'blur(8px)' }}
                    >
                      {laufzeit(v.sekunden)}
                    </span>

                    {/* Play */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="relative w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110">
                        {/* Halo ausserhalb des Kreises — innen laege weiss auf weiss. */}
                        <span aria-hidden="true" className="absolute -inset-3 rounded-full border border-white/40" />
                        {/* Optisch zentriert: das Dreieck wirkt sonst links lastig. */}
                        <svg aria-hidden="true" className="ml-0.5" width="22" height="22" viewBox="0 0 24 24" fill={v.akzent} stroke="none">
                          <polygon points="6 3 20 12 6 21 6 3" />
                        </svg>
                      </span>
                    </span>

                    {/* Sprecher:innen-Leiste */}
                    <span className="absolute inset-x-0 bottom-0 px-4 py-4">
                      <span className="block font-body font-700 text-white text-sm leading-tight">
                        Marina Winkler &amp; Stefan Bauer
                      </span>
                      <span className="block font-body text-white/80 text-xs mt-0.5">
                        Untertitel fest im Bild
                      </span>
                    </span>
                  </button>
                )}
              </div>

              <div className="pt-4 px-1">
                <h3
                  className="font-heading font-700 text-lg leading-snug mb-1.5"
                  style={{ color: dunkel ? '#ffffff' : '#1a1040' }}
                >
                  {v.titel}
                </h3>
                <p
                  className="font-body text-sm leading-relaxed"
                  style={{ color: dunkel ? 'rgba(255,255,255,0.7)' : undefined }}
                >
                  <span className={dunkel ? '' : 'text-text-secondary'}>{v.beschreibung}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {fussnote ? (
          <p
            className="font-body text-xs text-center mt-7 max-w-2xl mx-auto"
            style={{ color: dunkel ? 'rgba(255,255,255,0.55)' : undefined }}
          >
            <span className={dunkel ? '' : 'text-text-muted'}>{fussnote}</span>
          </p>
        ) : null}
      </div>
    </section>
  )
}
