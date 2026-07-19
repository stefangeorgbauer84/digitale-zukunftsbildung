import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Aktuelles | Skills-UP! Finanzbildung Österreich',
  description: 'News, Bildungspolitik und Tipps rund um Finanzbildung in österreichischen Schulen. Aktuelle Beiträge vom Team der Digitalen Zukunftsbildung.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/aktuelles' },
  openGraph: {
    title: 'Aktuelles – Skills-UP! Finanzbildung Österreich',
    description: 'News, Bildungspolitik und Praxistipps rund um Finanzbildung in österreichischen Schulen.',
    url: 'https://www.digitale-zukunftsbildung.eu/aktuelles',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aktuelles – Skills-UP! Finanzbildung Österreich',
    description: 'News und Tipps rund um Finanzbildung in österreichischen Schulen.',
  },
}

const posts = [
  {
    slug: 'finanzbildung-pflichtfach-2027',
    date: 'März 2025',
    category: 'Bildungspolitik',
    title: 'Finanzbildung wird Pflichtfach 2027 — was das für österreichische Schulen bedeutet.',
    excerpt: 'Ab dem Schuljahr 2027/28 ist Finanzbildung im österreichischen Lehrplan verankert. Welche Schultypen betroffen sind und wie Schulen jetzt die Weichen stellen können.',
    readingTime: '6 Min. Lesedauer',
    highlight: true,
  },
  {
    slug: 'finanzbildung-berufsschule',
    date: 'April 2025',
    category: 'Praxis',
    title: 'Duale Ausbildung und Finanzbildung — warum gerade Lehrlinge das Programm brauchen.',
    excerpt: 'Lehrlinge verdienen ab dem ersten Ausbildungstag echtes Geld. Aber wer erklärt ihnen den Lohnzettel, die Sozialversicherung oder was ein Kollektivvertrag ist?',
    readingTime: '5 Min. Lesedauer',
    highlight: false,
  },
  {
    slug: 'finanzbildung-10-minuten-unterricht',
    date: 'Mai 2025',
    category: 'Praxistipp',
    title: 'Finanzbildung in 10 Minuten Unterricht — 3 Formate, die wirklich funktionieren.',
    excerpt: 'Keine Zeit für lange Einheiten? Diese drei Formate bringen echte Finanzbildung in kurze Unterrichtsblöcke — ohne Vorbereitung, ohne Fachkenntnisse.',
    readingTime: '4 Min. Lesedauer',
    highlight: false,
  },
  {
    slug: 'finanzbildung-kosten-schule',
    date: 'Juni 2025',
    category: 'Kosten & Förderung',
    title: 'Was kostet Skills-UP! für Schulen? Kosten, Modelle und Fördermöglichkeiten.',
    excerpt: 'Transparente Antwort auf die häufigste Frage — inklusive kostenlosem Einstieg, Förderoptionen durch WKÖ und Bildungsstiftungen, und Vergleich mit anderen Angeboten.',
    readingTime: '5 Min. Lesedauer',
    highlight: false,
  },
]

export default function AktuellesPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Aktuelles
            </h1>
            <p className="font-body text-white/60 text-lg">
              News, Bildungspolitik und Praxistipps rund um Finanzbildung an österreichischen Schulen.
            </p>
          </div>
        </section>

        {/* Posts */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-purple-200 transition-colors shadow-sm hover:shadow-md">
                  <Link href={`/aktuelles/${post.slug}`} className="block p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-body font-700 uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: '#f3f1f9', color: '#4a2d8a' }}>
                        {post.category}
                      </span>
                      <span className="text-xs font-body text-gray-400">{post.date}</span>
                      <span className="text-xs font-body text-gray-400">· {post.readingTime}</span>
                    </div>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3 leading-tight" style={{ color: '#1a1040' }}>
                      {post.title}
                    </h2>
                    <p className="font-body text-gray-600 leading-relaxed mb-5">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-sm font-body font-700" style={{ color: '#4a2d8a' }}>
                      Weiterlesen
                      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
