'use client'

import { useState } from 'react'
import Image from 'next/image'

type ModulVideo = {
  guid: string
  titel: string
  label: string
  beschreibung: string
  embed: string
  thumb: string
}

const videos: ModulVideo[] = [
  {
    guid: '2cac44fc-1bfb-4f6e-9978-06b565fb1bc4',
    titel: 'Keine Rechtschreibfehler, also echt?',
    label: 'Aus dem Modul: Phishing & Finanzbetrug',
    beschreibung: 'Woran du Fälschungen heute nicht mehr erkennst. Und warum auch die Nummer deiner Mutter nichts beweist.',
    embed: 'https://iframe.mediadelivery.net/embed/722507/2cac44fc-1bfb-4f6e-9978-06b565fb1bc4',
    thumb: 'https://vz-b03180be-aa5.b-cdn.net/2cac44fc-1bfb-4f6e-9978-06b565fb1bc4/thumbnail.jpg',
  },
  {
    guid: '46e991c1-ab24-491b-a38d-f22435207b24',
    titel: 'Aktie und ETF in 30 Sekunden',
    label: 'Aus dem Modul: Investieren',
    beschreibung: 'Mini-Anteil an einem Unternehmen gegen einen Korb aus über tausend Firmen. Und warum ein Sparplan schon ab 25 Euro läuft.',
    embed: 'https://iframe.mediadelivery.net/embed/722507/46e991c1-ab24-491b-a38d-f22435207b24',
    thumb: 'https://vz-b03180be-aa5.b-cdn.net/46e991c1-ab24-491b-a38d-f22435207b24/thumbnail.jpg',
  },
  {
    guid: '3c7e5d59-531e-497f-b808-1b98466bd434',
    titel: 'Fünf Wörter für 100.000 Euro',
    label: 'Aus dem Modul: Altersvorsorge',
    beschreibung: 'Broker, Welt-Index, 25 Euro, Dauerauftrag. Mehr braucht ein Sparplan nicht.',
    embed: 'https://iframe.mediadelivery.net/embed/722507/3c7e5d59-531e-497f-b808-1b98466bd434',
    thumb: 'https://vz-b03180be-aa5.b-cdn.net/3c7e5d59-531e-497f-b808-1b98466bd434/thumbnail.jpg',
  },
]

// Statisches JSON-LD aus hartkodierten Videodaten — kein User-Input.
const videoJsonLd = (v: ModulVideo) => ({
  '@context': 'https://schema.org',
  '@type': 'VideoObject',
  name: v.titel,
  description: v.beschreibung,
  thumbnailUrl: v.thumb,
  uploadDate: '2026-08-29',
  embedUrl: v.embed,
  publisher: {
    '@type': 'Organization',
    name: 'Verein zur Entwicklung der digitalen Zukunftsbildung',
    url: 'https://www.digitale-zukunftsbildung.eu',
  },
  inLanguage: 'de-AT',
})

export default function ModulVideos() {
  // Ein gemeinsamer Consent für alle drei Videos (DSGVO Two-Click)
  const [consentGiven, setConsentGiven] = useState(false)
  const [consentAskedFor, setConsentAskedFor] = useState<string | null>(null)
  const [playing, setPlaying] = useState<Record<string, boolean>>({})

  const play = (guid: string) => setPlaying((p) => ({ ...p, [guid]: true }))

  return (
    <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
      {videos.map((v) => (
        <script
          key={v.guid}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd(v)) }}
        />
      ))}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-4 py-2 rounded-full mb-5 bg-white shadow-sm"
            style={{ color: '#4a2d8a' }}>
            <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            Direkt aus der Plattform
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1040' }}>
            Reinschauen: Originalvideos aus den Modulen.
          </h2>
          <p className="font-body text-text-muted text-lg max-w-2xl mx-auto">
            So klingen die Skills-UP!-Videos wirklich — drei Clips aus den Lernmodulen, ungekürzt und im Original-Ton der Plattform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((v) => (
            <div key={v.guid} className="flex flex-col">
              <div className="relative rounded-2xl overflow-hidden shadow-card bg-black" style={{ aspectRatio: '16/9' }}>
                {playing[v.guid] ? (
                  <iframe
                    src={`${v.embed}?autoplay=true`}
                    title={v.titel}
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                  />
                ) : consentAskedFor === v.guid && !consentGiven ? (
                  /* ── DSGVO Consent Overlay (Two-Click) ── */
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-5 text-center"
                    style={{ background: 'rgba(10,5,30,0.94)' }}>
                    <p className="text-white/80 font-body text-xs leading-relaxed">
                      Beim Abspielen werden Daten (IP-Adresse, Geräteinformationen) an{' '}
                      <strong className="text-white">bunny.net</strong> (BunnyWay d.o.o., EU/Slowenien) übertragen.
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
                    <p className="text-white/40 font-body text-[11px]">
                      Mehr in der{' '}
                      <a href="/impressum#datenschutz" className="underline hover:text-white/70">Datenschutzerklärung</a>
                    </p>
                  </div>
                ) : (
                  /* ── Thumbnail + Play ── */
                  <button
                    onClick={() => (consentGiven ? play(v.guid) : setConsentAskedFor(v.guid))}
                    className="group absolute inset-0 w-full h-full block focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-medium/60"
                    aria-label={`Video abspielen: ${v.titel}`}
                  >
                    {/* Next-Image-Optimizer fetcht serverseitig ohne Referer und bekommt vom Bunny-CDN 403 → unoptimized */}
                    <Image
                      src={v.thumb}
                      alt={`Vorschaubild: ${v.titel}`}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-transform duration-200 group-hover:scale-110 bg-white">
                        <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="#4a2d8a" stroke="none">
                          <polygon points="6 3 20 12 6 21 6 3"/>
                        </svg>
                      </div>
                    </div>
                  </button>
                )}
              </div>

              <div className="pt-4 px-1">
                <span className="inline-block text-[11px] font-body font-700 px-2.5 py-1 rounded-full mb-2"
                  style={{ background: '#ede9f8', color: '#4a2d8a' }}>
                  {v.label}
                </span>
                <h3 className="font-heading font-700 text-base leading-snug mb-1.5" style={{ color: '#1a1040' }}>
                  {v.titel}
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">{v.beschreibung}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
