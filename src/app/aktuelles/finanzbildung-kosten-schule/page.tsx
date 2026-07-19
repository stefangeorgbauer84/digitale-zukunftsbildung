import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Was kostet Finanzbildung für Schulen? Skills-UP! Kosten & Förderung | Digitale Zukunftsbildung',
  description: 'Was kostet Skills-UP! für Schulen wirklich? Vollständige Kostenübersicht, Förderungsmöglichkeiten durch WKÖ und Bildungsstiftungen, und wie Schulen das Programm kostenlos oder vergünstigt erhalten.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-kosten-schule' },
  openGraph: {
    title: 'Was kostet Finanzbildung für Schulen? Skills-UP! Kosten & Förderung',
    description: 'Transparente Kostenübersicht für Skills-UP!, Förderoptionen und wie Schulen ohne Budget sofort starten können.',
    url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-kosten-schule',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Was kostet Finanzbildung an Schulen? Skills-UP! Preise & Förderung',
    description: 'Transparente Kostenübersicht, Förderoptionen, kostenloser Einstieg.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Was kostet Finanzbildung für Schulen? Skills-UP! Kosten & Förderung',
  description: 'Vollständige Kostenübersicht für Skills-UP! an österreichischen Schulen, inkl. Förderungsmöglichkeiten.',
  author: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  publisher: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  datePublished: '2025-06-01',
  dateModified: '2025-06-01',
  url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-kosten-schule',
  mainEntityOfPage: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-kosten-schule',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Aktuelles', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles' },
      { '@type': 'ListItem', position: 3, name: 'Finanzbildung Kosten Schule', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-kosten-schule' },
    ],
  },
}

const kostenModelle = [
  {
    titel: 'Kostenloser Einstieg',
    preis: '0 €',
    beschreibung: 'Demo-Zugang für eine Klasse, ein Modul, unbegrenzte Zeit.',
    enthalten: [
      '1 Modul vollständig freigeschalten',
      'Bis zu 35 Schülerinnen und Schüler',
      'Demo-Dashboard für Lehrkräfte',
      'Kein Kreditkarte, kein Vertrag',
    ],
    farbe: '#2a8a76',
    cta: 'Demo starten',
    ctaHref: '/demo-anfragen',
  },
  {
    titel: 'Einzelschule',
    preis: 'Auf Anfrage',
    beschreibung: 'Vollzugang für alle Klassen einer Schule, ein Schuljahr.',
    enthalten: [
      'Alle 12+ Module freigeschaltet',
      'Unbegrenzte Schüleranzahl',
      'Vollständiges Lehrer-Dashboard',
      'Onboarding & Support inklusive',
    ],
    farbe: '#4a2d8a',
    cta: 'Preis anfragen',
    ctaHref: '/demo-anfragen',
  },
  {
    titel: 'Schulstufe oder Schulbund',
    preis: 'Rabattiert',
    beschreibung: 'Für mehrere Schulen gemeinsam — Bildungsdirektion, Schulverbund oder Förderpartner.',
    enthalten: [
      'Mengenrabatt ab 3 Schulen',
      'Zentrale Verwaltung & Reporting',
      'Gemeinsame Fortbildung für Lehrkräfte',
      'Förderung durch WKÖ oder Bildungsstiftung möglich',
    ],
    farbe: '#D87228',
    cta: 'Partnerschaft anfragen',
    ctaHref: '/demo-anfragen',
  },
]

export default function FinanzbildungKostenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs font-body text-white/40">
                <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/aktuelles" className="hover:text-white/70 transition-colors">Aktuelles</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Kosten & Förderung</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Kosten & Förderung · Juni 2025
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Was kostet Skills-UP! für Schulen?
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed">
              Transparente Antwort auf die häufigste Frage von Schulleitungen und Lehrkräften — inklusive Förderoptionen, Gratiseinstieg und einem Vergleich mit anderen Angeboten.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">

            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Finanzbildung hat einen Ruf: teuer, aufwendig, nicht budgetierbar. Das ist oft der Grund, warum Schulen trotz Interesse nichts unternehmen. Deshalb beantworten wir die Kostenfrage direkt und vollständig — ohne Kleingedrucktes.
            </p>

            <h2 className="font-heading text-2xl font-bold mb-6 mt-10" style={{ color: '#1a1040' }}>
              Drei Modelle, ein Einstieg ohne Risiko
            </h2>

            <div className="space-y-6">
              {kostenModelle.map((m) => (
                <div key={m.titel} className="rounded-2xl border overflow-hidden" style={{ borderColor: m.farbe + '30' }}>
                  <div className="flex items-center justify-between p-5 md:p-6" style={{ background: m.farbe + '0a', borderBottom: `1px solid ${m.farbe}20` }}>
                    <div>
                      <p className="font-heading font-bold text-lg" style={{ color: '#1a1040' }}>{m.titel}</p>
                      <p className="font-body text-sm text-gray-500 mt-0.5">{m.beschreibung}</p>
                    </div>
                    <span className="shrink-0 font-heading font-bold text-xl ml-4" style={{ color: m.farbe }}>{m.preis}</span>
                  </div>
                  <div className="p-5 md:p-6 bg-white flex flex-col md:flex-row gap-5">
                    <ul className="flex-1 space-y-2">
                      {m.enthalten.map((e) => (
                        <li key={e} className="flex items-start gap-2 font-body text-sm text-gray-700">
                          <svg className="shrink-0 mt-0.5" aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={m.farbe} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          {e}
                        </li>
                      ))}
                    </ul>
                    <div className="shrink-0 flex items-center">
                      <Link href={m.ctaHref}
                        className="font-body font-bold text-sm px-5 py-3 rounded-xl text-white transition-all hover:opacity-90 whitespace-nowrap"
                        style={{ background: `linear-gradient(135deg, ${m.farbe}, ${m.farbe}cc)` }}>
                        {m.cta}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mb-4 mt-12" style={{ color: '#1a1040' }}>
              Welche Förderungen gibt es?
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Mehrere österreichische Institutionen fördern Finanzbildungsprojekte an Schulen. Skills-UP! ist bereits mit der Wirtschaftskammer Österreich (WKÖ), der Hochschule Burgenland und der MEGA Bildungsstiftung vernetzt — was die Finanzierung in vielen Fällen vereinfacht.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { name: 'WKÖ Wirtschaftskammer', detail: 'Fördert Wirtschaftsbildung an BHS und Berufsschulen direkt — Anfrage über die jeweilige Landeskammer.' },
                { name: 'MEGA Bildungsstiftung', detail: 'Skills-UP! war Top-3 bei der MEGA Bildungsmillion 2025. Stiftungsförderung für gemeinnützige Bildungsprojekte möglich.' },
                { name: 'Hochschule Burgenland', detail: 'Akademische Zertifizierung des Programms. Kooperation ermöglicht günstigere Konditionen für Schulen im Burgenland.' },
                { name: 'Bildungsdirektionen', detail: 'Mehrere Bildungsdirektionen haben bereits Pilotprojekte mitfinanziert. Kontaktiert uns für eine Einschätzung eurer Region.' },
              ].map((f) => (
                <div key={f.name} className="rounded-xl p-4 border border-gray-100 bg-white">
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: '#1a1040' }}>{f.name}</p>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">{f.detail}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mb-4" style={{ color: '#1a1040' }}>
              Was kostet es im Vergleich?
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Zum Vergleich: Ein externer Workshop-Tag zur Finanzbildung kostet in Österreich typischerweise zwischen 800 € und 2.500 € — für eine einzige Schulstunde mit einer einzigen Klasse, ohne Nachbereitung, ohne digitale Materialien, ohne Wiederholbarkeit.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-10">
              Skills-UP! ist ein Jahresprogramm, das jede Klasse, jede Woche, ohne Mehraufwand für Lehrkräfte, nutzen kann. Der Preis pro Unterrichtseinheit liegt damit in einem Bereich, der mit anderen digitalen Lernplattformen vergleichbar ist — bei gleichzeitig deutlich höherem Österreich-Bezug und Lehrplankonformität.
            </p>

            {/* CTA */}
            <div className="not-prose rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-heading text-xl font-bold text-white mb-2">Kostenlos starten — jetzt Demo anfragen.</p>
                  <p className="font-body text-white/60 text-sm leading-relaxed">Wir zeigen euch das Programm live, besprechen Förderoptionen und erstellen ein individuelles Angebot. Unverbindlich, kostenlos.</p>
                </div>
                <Link href="/demo-anfragen"
                  className="shrink-0 font-body font-bold text-sm px-6 py-3 rounded-xl text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                  Demo anfragen
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
