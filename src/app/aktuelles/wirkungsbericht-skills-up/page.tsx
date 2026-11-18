import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'
// Zahlen kommen aus den Berichtsdaten, damit Beitrag und Bericht nie auseinanderlaufen.
import { BEFUNDE, STAND, VEREIN, KENNZAHLEN, fmt } from '@/app/wirkungsmessung/daten'

const URL = 'https://www.digitale-zukunftsbildung.eu/aktuelles/wirkungsbericht-skills-up'
const TITEL = 'Was Skills-UP! bewirkt: unser Wirkungsbericht ist öffentlich'
const KURZ = 'Wirkungslogik, sieben Befunde und alle Kennzahlen je Quartal: Der Wirkungsbericht zu Skills-UP! zeigt offen, was gelingt und was noch fehlt.'

export const metadata: Metadata = {
  title: 'Wirkungsbericht Skills-UP! ist öffentlich | Digitale Zukunftsbildung',
  description: KURZ,
  alternates: { canonical: URL },
  openGraph: { title: TITEL, description: KURZ, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITEL, description: KURZ },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: TITEL,
  description: KURZ,
  author: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  publisher: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  url: URL,
  mainEntityOfPage: URL,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Aktuelles', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles' },
      { '@type': 'ListItem', position: 3, name: 'Wirkungsbericht Skills-UP!', item: URL },
    ],
  },
}

const kapitel = [
  { href: '/wirkungsmessung#ansatz', titel: 'Ansatz', text: 'Warum es Skills-UP! gibt und wie es arbeitet.' },
  { href: '/wirkungsmessung#wirkungslogik', titel: 'Wirkungslogik', text: 'Von Input bis Impact, für jede betroffene Gruppe.' },
  { href: '/wirkungsmessung#erreicht', titel: 'Erreicht', text: 'Zwei Phasen, sieben Befunde, der Weg zum Lernerfolg.' },
  { href: '/wirkungsmessung#zahlen', titel: 'Zahlen', text: 'Alle Kennzahlen je Quartal zum Erkunden.' },
  { href: '/wirkungsmessung#methode', titel: 'Methode', text: 'Wie wir messen und wie wir zählen.' },
]

const P = 'font-body text-gray-700 leading-relaxed mb-6'
const H2 = 'font-heading text-2xl font-bold mb-4 mt-12'
const A = 'font-bold underline underline-offset-2 hover:opacity-80'

export default function WirkungsberichtBeitragPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteNav />
      <main id="main-content">
        <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs font-body text-white/40">
                <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/aktuelles" className="hover:text-white/70 transition-colors">Aktuelles</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Wirkungsbericht</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Wirkung · November 2026
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {TITEL}
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed">
              Seit November 2026 kann jede und jeder nachlesen, wie Skills-UP! wirken soll, was die Nutzungsdaten zeigen und wo wir noch nachbessern müssen.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className={P}>
              Ein Bildungsprogramm soll etwas verändern. Ob es das tut, lässt sich nicht behaupten, nur belegen. Deshalb haben wir für Skills-UP! einen{' '}
              <Link href="/wirkungsmessung" className={A} style={{ color: '#4a2d8a' }}>Wirkungsbericht</Link>{' '}
              erstellt und veröffentlicht. Er folgt den Modellen der Wirkungsanalyse der WU Wien und beschreibt den Weg von den eingesetzten Mitteln bis zur Wirkung bei Jugendlichen, Lehrkräften und Lehrbetrieben.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { zahl: fmt(VEREIN.reichweite), label: 'junge Menschen erreicht' },
                { zahl: fmt(VEREIN.lehrlinge), label: 'Lehrlinge direkt in Workshops' },
                { zahl: String(KENNZAHLEN.kpis.length), label: 'Kennzahlen je Quartal' },
              ].map((k) => (
                <div key={k.label} className="rounded-2xl p-5 text-center" style={{ background: '#f3f1f9' }}>
                  <p className="font-heading text-4xl font-bold leading-none mb-2" style={{ color: '#4a2d8a' }}>{k.zahl}</p>
                  <p className="font-body text-sm text-gray-700">{k.label}</p>
                </div>
              ))}
            </div>

            <h2 className={H2} style={{ color: '#1a1040' }}>Gemessen wird, was auf der Plattform passiert</h2>
            <p className={P}>
              Die Plattformzahlen stammen ausschließlich aus Nutzungsdaten der Lernplattform, ohne Befragung. Jede Angabe im Bericht trägt einen Beleg: gemessen, vom Verein dokumentiert oder erst geplant. So bleibt sichtbar, was eine Zahl aussagt und was nicht. Die Kennzahlen werden je Quartal aktualisiert, aktueller Stand: {STAND}.
            </p>

            <h2 className={H2} style={{ color: '#1a1040' }}>Sieben Befunde, auch die unbequemen</h2>
            <p className={P}>
              Der Bericht zeigt nicht nur Erfolge. Zu jedem Befund steht, was daraus folgt:
            </p>
            <div className="space-y-4 mb-10">
              {BEFUNDE.map((b) => (
                <div key={b.titel} className="rounded-2xl p-5 border border-gray-100 bg-white">
                  <p className="font-heading font-bold text-base mb-1" style={{ color: '#1a1040' }}>
                    {b.titel}
                    <span className="font-body font-normal text-sm text-gray-600"> · {b.zahl} {b.einheit}</span>
                  </p>
                  <p className="font-body text-sm text-gray-700 leading-relaxed mb-2">{b.text}</p>
                  <p className="font-body text-sm leading-relaxed" style={{ color: '#1E6B5B' }}><strong>Was daraus folgt:</strong> {b.folge}</p>
                </div>
              ))}
            </div>

            <h2 className={H2} style={{ color: '#1a1040' }}>Der Bericht in fünf Kapiteln</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {kapitel.map((k) => (
                <Link key={k.href} href={k.href}
                  className="rounded-xl p-4 border border-gray-100 bg-white hover:border-purple-200 hover:shadow-md transition-all">
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: '#4a2d8a' }}>{k.titel}</p>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{k.text}</p>
                </Link>
              ))}
            </div>
            <p className={P}>
              Der Bericht lässt sich am Bildschirm erkunden und als PDF speichern. Er ist für Schulen, Bildungsdirektionen, fördernde Stellen und alle gedacht, die wissen wollen, worauf sie sich bei Skills-UP! einlassen.
            </p>

            <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-heading text-xl font-bold text-white mb-2">Den ganzen Wirkungsbericht lesen.</p>
                  <p className="font-body text-white/70 text-sm leading-relaxed">Wirkungslogik, Befunde und alle Kennzahlen, frei zugänglich.</p>
                </div>
                <Link href="/wirkungsmessung"
                  className="shrink-0 font-body font-bold text-sm px-6 py-3 rounded-xl text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                  Zum Wirkungsbericht
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
      <NewsletterSignup />
      <SiteFooter />
    </>
  )
}
