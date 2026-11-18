import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'
// Zahlen kommen aus den Berichtsdaten, damit Beitrag und Bericht nie auseinanderlaufen.
import { STAND, VEREIN, KPI_NAMEN, QUARTALE, Q_NAME, GESCHICHTE, fmt, wert } from '@/app/wirkungsmessung/daten'

const URL = 'https://www.digitale-zukunftsbildung.eu/aktuelles/wirkungsbericht-skills-up'
const TITEL = 'Was Skills-UP! bewirkt: unser Wirkungsbericht ist öffentlich'
const KURZ = 'Der Wirkungsbericht zu Skills-UP! zeigt, wie das Programm wirken soll, wie stark die Plattform wächst und was die Nutzungsdaten bisher zeigen.'

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
  { href: '/wirkungsmessung#erreicht', titel: 'Erreicht', text: 'Zwei Phasen, von Workshops zur Plattform.' },
  { href: '/wirkungsmessung#zahlen', titel: 'Zahlen', text: 'Kennzahlen je Quartal zum Erkunden.' },
  { href: '/wirkungsmessung#methode', titel: 'Methode', text: 'Wie wir messen und wie wir zählen.' },
  { href: '/wirkungsmessung#ausblick', titel: 'Ausblick', text: 'Ziele bis Ende 2027 und die nächsten Schritte.' },
]

const P = 'font-body text-gray-700 leading-relaxed mb-6'
const H2 = 'font-heading text-2xl font-bold mb-4 mt-12'
const A = 'font-bold underline underline-offset-2 hover:opacity-80'

export default function WirkungsberichtBeitragPage() {
  const neu = wert(KPI_NAMEN.neu, QUARTALE[QUARTALE.length - 1])
  const davor = QUARTALE.slice(0, -1).reduce((a, q) => a + wert(KPI_NAMEN.neu, q), 0)
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
              Seit November 2026 kann jede und jeder nachlesen, wie Skills-UP! wirken soll, wie stark die Plattform wächst und was die Nutzungsdaten bisher zeigen.
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

            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-8 my-12">
              {[
                { zahl: fmt(VEREIN.standorte), label: 'Schulstandorte', farbe: '#1a1040' },
                { zahl: fmt(VEREIN.lehrlinge), label: 'Lehrlinge direkt in Workshops', farbe: '#4a2d8a' },
                { zahl: fmt(neu), label: `neue Lernende im ${Q_NAME}`, farbe: '#6b4db0' },
              ].map((k) => (
                <div key={k.label} className="border-l-[3px] pl-5" style={{ borderColor: k.farbe }}>
                  <dt className="font-heading text-5xl font-bold leading-none mb-2" style={{ color: '#4a2d8a' }}>{k.zahl}</dt>
                  <dd className="font-body text-sm text-gray-700">{k.label}</dd>
                </div>
              ))}
            </dl>

            <h2 className={H2} style={{ color: '#1a1040' }}>Gemessen wird, was auf der Plattform passiert</h2>
            <p className={P}>
              Die Plattformzahlen stammen ausschließlich aus Nutzungsdaten der Lernplattform, ohne Befragung. Jede Angabe im Bericht trägt einen Beleg: gemessen, vom Verein dokumentiert oder erst geplant. So bleibt sichtbar, was eine Zahl aussagt und was nicht. Die Kennzahlen werden je Quartal aktualisiert, aktueller Stand: {STAND}.
            </p>

            <h2 className={H2} style={{ color: '#1a1040' }}>Was die Zahlen zeigen</h2>
            <div className="space-y-8 mb-10">
              {[
                { farbe: '#1a1040', titel: 'Die Plattform wächst stark', text: `Im ${Q_NAME} kamen ${fmt(neu)} neue Lernende dazu${neu > davor ? ', mehr als in allen Quartalen davor zusammen' : ''}. Insgesamt sind ${fmt(wert(KPI_NAMEN.reg))} Lernende registriert.` },
                { farbe: '#4a2d8a', titel: 'Die meisten Quizabgaben sind sofort bestanden', text: `${fmt(wert(KPI_NAMEN.nordstern))} Lernende haben seit August 2026 ein Modulquiz bestanden. ${fmt(wert(KPI_NAMEN.erstBestanden), 1)} % der ersten Quizabgaben waren sofort bestanden, mit ${fmt(wert(KPI_NAMEN.erstRichtig), 1)} % richtigen Antworten.` },
                { farbe: '#6b4db0', titel: 'Workshops erreichen Lehrlinge direkt', text: `${fmt(VEREIN.lehrlinge)} Lehrlinge haben wir seit 2022 in Workshops begleitet, ${fmt(VEREIN.workshops)} Workshops an ${fmt(VEREIN.berufsschulen)} Berufsschulen. ${fmt(VEREIN.rueckmeldungen)} Rückmeldungen sind seither eingegangen.` },
                { farbe: '#9b7ed4', titel: 'Ein Beispiel: vom Sparziel zum Führerschein', text: `${GESCHICHTE.text} „${GESCHICHTE.zitat}“` },
              ].map((b) => (
                <div key={b.titel} className="border-l-[3px] pl-5" style={{ borderColor: b.farbe }}>
                  <p className="font-heading font-bold text-lg mb-1" style={{ color: '#1a1040' }}>{b.titel}</p>
                  <p className="font-body text-gray-700 leading-relaxed">{b.text}</p>
                </div>
              ))}
            </div>

            <h2 className={H2} style={{ color: '#1a1040' }}>Der Bericht in sechs Kapiteln</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {kapitel.map((k) => (
                <Link key={k.href} href={k.href}
                  className="border-l-[3px] border-primary-medium/40 pl-4 py-1 hover:border-primary-dark transition-colors">
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: '#4a2d8a' }}>{k.titel}</p>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{k.text}</p>
                </Link>
              ))}
            </div>
            <p className={P}>
              Der Bericht lässt sich am Bildschirm erkunden und als PDF speichern. Er ist für Schulen, Bildungsdirektionen, fördernde Stellen und alle gedacht, die wissen wollen, worauf sie sich bei Skills-UP! einlassen.
            </p>

            <div style={{ background: '#1a1040' }}>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-heading text-xl font-bold text-white mb-2">Den ganzen Wirkungsbericht lesen.</p>
                  <p className="font-body text-white/70 text-sm leading-relaxed">Wirkungslogik, Ergebnisse und Kennzahlen, frei zugänglich.</p>
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
