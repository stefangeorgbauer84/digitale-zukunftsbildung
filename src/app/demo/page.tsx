import type { Metadata } from 'next'
import KonsumfallenDemoClient from '@/components/demo/KonsumfallenDemoClient'

export const metadata: Metadata = {
  title: 'Konsumfallen-Simulation | Skills-UP! Demo',
  description:
    'Teste gratis die Konsumfallen-Simulation von Skills-UP!: 10 realistische Szenarien mit Netflix-Fallen, Fake-Countdowns, Gaming-Mikrotransaktionen und mehr. Keine Anmeldung nötig.',
  openGraph: {
    title: 'Konsumfallen-Parcours — Gratis Demo | Skills-UP!',
    description:
      '10 realistische Fallen: Abos, Influencer, Gaming, Klarna & mehr. Erkennst du sie alle?',
  },
}

export default function DemoPage() {
  return <KonsumfallenDemoClient />
}
