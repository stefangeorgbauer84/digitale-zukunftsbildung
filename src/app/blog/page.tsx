import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Materialien & Tipps für Lehrkräfte | Skills-UP! Finanzbildung Blog',
  description:
    'Unterrichtsmaterialien, Erklärungen und Praxistipps für Finanzbildung an österreichischen Schulen: Inflation, Budget, Konsumfallen & mehr — fertig für den Unterricht aufbereitet.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/blog' },
  openGraph: {
    title: 'Materialien & Tipps für Lehrkräfte — Skills-UP! Blog',
    description:
      'Unterrichtsmaterialien und Praxistipps für Finanzbildung an österreichischen Schulen, fertig für den Unterricht aufbereitet.',
    url: 'https://www.digitale-zukunftsbildung.eu/blog',
    type: 'website',
  },
}

// Statisches, hartkodiertes JSON-LD ohne User-Input — gleiches Muster wie alle anderen Seiten.
const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'Materialien & Tipps für Lehrkräfte',
  description: 'Unterrichtsmaterialien und Praxistipps für Finanzbildung an österreichischen Schulen.',
  url: 'https://www.digitale-zukunftsbildung.eu/blog',
  inLanguage: 'de-AT',
  publisher: {
    '@type': 'Organization',
    name: 'Verein zur Entwicklung der digitalen Zukunftsbildung',
    url: 'https://www.digitale-zukunftsbildung.eu',
  },
}

const posts = [
  {
    slug: 'inflation-einfach-erklaert-unterrichtsmaterial',
    date: 'August 2026',
    category: 'Unterrichtsmaterial',
    title: 'Inflation einfach erklärt — fertiges Unterrichtsmaterial für Ihre Klasse.',
    excerpt:
      'Wie Sie Inflation in 10, 15 oder 50 Minuten unterrichten: die einfachste Erklärung, Alltagsbeispiele aus Österreich und drei fertige Stundenideen — ohne Vorbereitung.',
    readingTime: '6 Min. Lesedauer',
  },
]

export default function BlogIndex() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              Für Lehrkräfte
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Materialien &amp; Tipps
            </h1>
            <p className="font-body text-white/60 text-lg max-w-2xl mx-auto">
              Fertige Unterrichtsideen, einfache Erklärungen und Praxismaterial für Finanzbildung an österreichischen Schulen — zum direkten Einsetzen.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-md">
                  <Link href={`/blog/${post.slug}`} className="block p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-body font-700 uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: '#e6f4f1', color: '#1E6B5B' }}>
                        {post.category}
                      </span>
                      <span className="text-xs font-body text-gray-600">{post.date}</span>
                      <span className="text-xs font-body text-gray-600">· {post.readingTime}</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 leading-tight" style={{ color: '#1a1040' }}>
                      {post.title}
                    </h2>
                    <p className="font-body text-gray-600 leading-relaxed mb-5">{post.excerpt}</p>
                    <span className="inline-flex items-center gap-2 text-sm font-body font-700" style={{ color: '#4a2d8a' }}>
                      Weiterlesen
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </Link>
                </article>
              ))}
            </div>

            {/* Weitere Ressourcen */}
            <div className="mt-10 rounded-2xl p-6 md:p-8"
              style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)', border: '1px solid rgba(74,45,138,0.1)' }}>
              <p className="font-heading font-700 text-base mb-4" style={{ color: '#1a1040' }}>
                Mehr für den Unterricht
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  { href: '/faq', label: '100 Fragen & Antworten (FAQ)' },
                  { href: '/lehrplan-mapping', label: 'Lehrplanmapping' },
                  { href: '/lernziele', label: 'Alle Lernziele' },
                  { href: '/aktuelles', label: 'Aktuelles & Bildungspolitik' },
                  { href: '/demo', label: 'Gratis Demo starten' },
                ].map((l) => (
                  <Link key={l.href} href={l.href}
                    className="text-sm font-body font-600 px-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-700 hover:border-primary-medium hover:text-primary-dark transition-colors">
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
