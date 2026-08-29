import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import { faqCategories, faqTotalCount } from '@/lib/faq-data'

export const metadata: Metadata = {
  title: 'Finanzbildung FAQ: 100 Fragen & Antworten für Lehrkräfte | Skills-UP!',
  description:
    '100 typische Fragen von Lehrer:innen zur Finanzbildung in Österreich, kompakt beantwortet: Lehrplan & Pflichtfach 2027, Didaktik, Unterrichtsthemen von Budget bis Krypto, Betrugsschutz, Materialien und Skills-UP!.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/faq' },
  openGraph: {
    title: 'Finanzbildung unterrichten: 100 Fragen & Antworten für Lehrkräfte',
    description:
      'Der große FAQ-Wissenshub für Lehrkräfte: Lehrplan, Didaktik, Unterrichtsthemen, Betrugsschutz und Materialien — alle Antworten für den Finanzbildungsunterricht in Österreich.',
    url: 'https://www.digitale-zukunftsbildung.eu/faq',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finanzbildung FAQ: 100 Fragen & Antworten für Lehrkräfte',
    description:
      'Lehrplan, Didaktik, Budget bis Krypto, Betrugsschutz, Materialien: der FAQ-Wissenshub für Finanzbildung an österreichischen Schulen.',
  },
  keywords: [
    'Finanzbildung FAQ',
    'Finanzbildung unterrichten',
    'Finanzbildung Lehrkräfte Fragen',
    'Finanzbildung Schule Österreich',
    'Finanzbildung Lehrplan',
    'Finanzbildung Pflichtfach 2027',
    'Finanzbildung Unterrichtsmaterial',
    'Finanzkompetenz Jugendliche',
  ],
}

// JSON-LD sicher serialisieren: '<' escapen, damit kein '</script>'-Breakout möglich ist
const toJsonLd = (data: object) => JSON.stringify(data).replace(/</g, '\\u003c')

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((cat) =>
    cat.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    }))
  ),
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
    { '@type': 'ListItem', position: 2, name: 'FAQ Finanzbildung', item: 'https://www.digitale-zukunftsbildung.eu/faq' },
  ],
}

export default function FaqPage() {
  let questionNumber = 0

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumbJsonLd) }} />
      <SiteNav />

      <main id="main-content">
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 px-6"
          style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="absolute top-[-20%] right-[-10%] w-[420px] h-[420px] rounded-full animate-float-orb pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.3) 0%, transparent 70%)' }} />
          <div className="max-w-3xl mx-auto relative z-10">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs font-body text-white/40">
                <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">FAQ Finanzbildung</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              {faqTotalCount} Fragen · Für Lehrkräfte
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Finanzbildung unterrichten: {faqTotalCount} Fragen, {faqTotalCount} Antworten.
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed mb-4">
              Vom Lehrplan über Didaktik bis zu Krypto, Betrugsschutz und Materialien: Hier beantworten wir die häufigsten Fragen, die uns Lehrer:innen zur Finanzbildung an österreichischen Schulen stellen.
            </p>
            <p className="font-body text-white/50 text-base leading-relaxed">
              Kompakt, anbieterneutral und ohne Anlageberatung — zum Nachschlagen, Weiterleiten und direkt Einsetzen im Unterricht.
            </p>
          </div>
        </section>

        {/* Inhaltsverzeichnis */}
        <section className="py-12 px-6" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
          <div className="max-w-5xl mx-auto">
            <h2 className="font-heading text-lg font-bold text-text-primary mb-5 text-center">Direkt zum Themenblock springen</h2>
            <nav aria-label="FAQ-Themenblöcke" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {faqCategories.map((cat, i) => (
                <a key={cat.id} href={`#${cat.id}`}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4 py-3.5 hover:shadow-card-hover hover:-translate-y-0.5 transition-all group">
                  <p className="text-[11px] font-body font-700 uppercase tracking-widest text-primary-medium mb-1">
                    Block {i + 1} · {cat.items.length} Fragen
                  </p>
                  <p className="font-heading font-700 text-sm text-text-primary leading-snug group-hover:text-primary-dark transition-colors">
                    {cat.title}
                  </p>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* Fragenblöcke */}
        <section className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto space-y-16">
            {faqCategories.map((cat, i) => (
              <div key={cat.id} id={cat.id} className="scroll-mt-24">
                <div className="mb-7">
                  <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-2">
                    Themenblock {i + 1} von {faqCategories.length}
                  </p>
                  <h2 className="font-heading text-3xl font-bold mb-3" style={{ color: '#1a1040' }}>
                    {cat.title}
                  </h2>
                  <p className="font-body text-text-muted leading-relaxed">{cat.blurb}</p>
                </div>

                <div className="space-y-3">
                  {cat.items.map((item) => {
                    questionNumber += 1
                    return (
                      <details key={item.q} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                        <summary className="cursor-pointer list-none [&::-webkit-details-marker]:hidden px-6 py-5 flex items-start justify-between gap-4">
                          <span className="flex items-start gap-3">
                            <span aria-hidden="true" className="shrink-0 mt-0.5 text-[11px] font-body font-700 text-primary-medium bg-primary-50 rounded-full px-2 py-0.5">
                              {questionNumber}
                            </span>
                            <span className="font-heading font-700 text-base text-text-primary leading-snug">{item.q}</span>
                          </span>
                          <span className="shrink-0 mt-0.5 w-7 h-7 rounded-full flex items-center justify-center bg-primary-50 group-open:bg-primary-dark transition-colors">
                            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none"
                              stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                              className="text-primary-medium group-open:text-white group-open:rotate-180 transition-transform duration-200">
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </span>
                        </summary>
                        <div className="px-6 pb-5 pl-[3.75rem]">
                          <p className="text-text-muted font-body text-sm leading-relaxed">{item.a}</p>
                          {item.link && (
                            <Link href={item.link.href}
                              className="inline-flex items-center gap-1.5 mt-3 text-sm font-body font-700 text-primary-dark hover:text-primary-medium transition-colors">
                              {item.link.label}
                              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                              </svg>
                            </Link>
                          )}
                        </div>
                      </details>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-5">
              <Image src="/capybara-mascot.png" alt="" width={72} height={72} className="drop-shadow-lg" aria-hidden="true" />
            </div>
            <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: '#1a1040' }}>
              Ihre Frage war nicht dabei?
            </h2>
            <p className="font-body text-text-muted text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Wir antworten persönlich — und in der Gratis-Demo sehen Sie in wenigen Minuten, wie Finanzbildung mit Skills-UP! in Ihrer Klasse aussieht.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link href="/demo"
                className="px-7 py-3.5 rounded-xl text-sm font-body font-700 bg-primary-dark text-white hover:bg-primary-medium transition-all active:scale-95">
                Gratis-Demo starten
              </Link>
              <Link href="/demo-anfragen"
                className="px-7 py-3.5 rounded-xl text-sm font-body font-700 text-primary-dark border border-primary-dark/20 bg-white hover:bg-primary-50 transition-all active:scale-95">
                Demo für meine Schule anfragen
              </Link>
            </div>
            <p className="text-sm font-body text-text-muted mt-6">
              Oder direkt:{' '}
              <a href="mailto:info@digitale-zukunftsbildung.eu" className="text-primary-medium font-600 hover:text-primary-dark transition-colors">
                info@digitale-zukunftsbildung.eu
              </a>
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
