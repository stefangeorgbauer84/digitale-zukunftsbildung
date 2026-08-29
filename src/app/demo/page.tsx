import type { Metadata } from 'next'
import Link from 'next/link'
import KonsumfallenDemoClient from '@/components/demo/KonsumfallenDemoClient'
import ModulVideos from '@/components/ModulVideos'

export const metadata: Metadata = {
  title: 'Konsumfallen-Simulation | Skills-UP! Demo',
  description:
    'Teste gratis die Konsumfallen-Simulation von Skills-UP!: 10 realistische Szenarien mit Netflix-Fallen, Fake-Countdowns, Gaming-Mikrotransaktionen und mehr. Keine Anmeldung nötig.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/demo' },
  openGraph: {
    title: 'Konsumfallen-Parcours — Gratis Demo | Skills-UP!',
    description:
      '10 realistische Fallen: Abos, Influencer, Gaming, Klarna & mehr. Erkennst du sie alle?',
  },
}

export default function DemoPage() {
  return (
    <>
      <KonsumfallenDemoClient />

      {/* Originalvideos aus den Lernmodulen (Bunny Stream, Two-Click) */}
      <ModulVideos />

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
    </>
  )
}
