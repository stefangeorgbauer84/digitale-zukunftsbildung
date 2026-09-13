import type { Metadata } from 'next'
import Link from 'next/link'
import KonsumfallenDemoClient from '@/components/demo/KonsumfallenDemoClient'
import ModulVideos from '@/components/ModulVideos'
import BunnyVideoSektion, { type BunnyVideo } from '@/components/BunnyVideoSektion'

export const metadata: Metadata = {
  title: 'Konsumfallen-Simulation | Skills-UP! Demo',
  description:
    'Teste gratis die Konsumfallen-Simulation von Skills-UP!: 10 realistische Szenarien mit Netflix-Fallen, Fake-Countdowns, Gaming-Mikrotransaktionen und mehr. Keine Anmeldung nötig.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/demo' },
  openGraph: {
    title: 'Konsumfallen-Parcours — Gratis Demo | Skills-UP!',
    description:
      '10 realistische Fallen: Abos, Influencer, Gaming, Klarna & mehr. Erkennst du sie alle?',
    images: ['/fotos/skillsUP-1.jpg'],
  },
  twitter: { card: 'summary_large_image' },
}

export default function DemoPage() {
  return (
    <>
      <KonsumfallenDemoClient />

      {/* Originalvideos aus den Lernmodulen (Bunny Stream, Two-Click) */}
      <ModulVideos />

      {/* ── Willkommensvideo für Lehrkräfte ───────────────── */}
      <BunnyVideoSektion
        eyebrow="Für Lehrkräfte"
        headline="So funktioniert Skills-UP! in deiner Klasse."
        lead="Kein Installationsaufwand, kein Vorbereitungsaufwand — einfach einloggen und loslegen. Hier siehst du, wie es geht."
        variante="hell"
        videos={[{
          guid: '507846d7-3838-4e35-96e6-cb18f6d1b3d2',
          badge: 'Für Lehrkräfte',
          titel: 'Willkommen bei Skills-UP!',
          beschreibung: 'Wie Lehrkräfte Skills-UP! in ihrem Unterricht einsetzen — schnell, einfach, ohne Vorbereitung.',
          sekunden: 23,
          akzent: '#4a2d8a',
          poster: '/willkommen/vertrieb.jpg',
        } satisfies BunnyVideo]}
      />

      {/* CTA */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a1040' }}>
            So arbeitet deine Klasse mit Skills-UP!.
          </h2>
          <p className="font-body text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto">
            Simulation ausprobiert, Videos gesehen? Dann hol dir den vollen Zugang für deine Schule —
            kostenlos testen, ohne Installation, Antwort innerhalb von 24 Stunden.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="/demo-anfragen"
              className="inline-flex items-center gap-2 font-body font-700 text-sm px-7 py-4 rounded-xl text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
              Vollzugang für meine Schule anfragen
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
            <Link href="/"
              className="inline-flex items-center gap-2 font-body font-700 text-sm px-7 py-4 rounded-xl border border-gray-200 text-gray-700 hover:border-gray-300 transition-all">
              Zurück zur Website
            </Link>
          </div>
        </div>
      </section>

      {/* ── Marktplatz Lernapps CTA ───────────────────────── */}
      <section className="py-10 px-6" style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-white/70 text-xs font-700 uppercase tracking-widest mb-1">Österreichischer Marktplatz Lernapps</p>
            <p className="font-heading text-white text-xl font-bold leading-snug">Skills-UP! für das Schuljahr 2026/27 auswählen</p>
            <p className="font-body text-white/65 text-sm mt-1">Direkt über den offiziellen Marktplatz Lernapps buchen</p>
          </div>
          <a
            href="https://www.marktplatz-lernapps.at/product-detail?product=859"
            target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 font-body font-700 text-sm px-6 py-3 rounded-xl bg-white text-[#4a2d8a] hover:bg-white/90 transition-all whitespace-nowrap">
            Jetzt auswählen
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>
      </section>

      {/* ── Video: Skills-UP! für deine Klasse ───────────── */}
      <BunnyVideoSektion
        eyebrow="Für deine Klasse"
        headline="Was Jugendliche über Skills-UP! sagen."
        lead="Echte Schülerinnen und Schüler, echte Reaktionen — so erlebt die Klasse Skills-UP!."
        variante="dunkel"
        videos={[{
          guid: 'a214e3cf-15b9-4aa2-979b-7b84d18ded51',
          badge: 'Für deine Klasse',
          titel: 'Skills-UP! aus Schülerperspektive',
          beschreibung: 'Wie Jugendliche über Skills-UP! und Finanzbildung sprechen.',
          sekunden: 54,
          akzent: '#2a8a76',
          poster: '/willkommen/vertrieb.jpg',
        } satisfies BunnyVideo]}
      />
    </>
  )
}
