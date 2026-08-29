import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Finanzbildung Pflichtfach 2027: Das müssen Schulen wissen | Skills-UP!',
  description: 'Ab 2027/28 ist Finanzbildung in Österreich lehrplanmäßig verankert. Wir erklären, was das konkret bedeutet, welche Schultypen betroffen sind und wie Schulen jetzt vorbereitet sein können.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-pflichtfach-2027' },
  openGraph: {
    title: 'Finanzbildung Pflichtfach 2027: Was Schulen jetzt wissen müssen',
    description: 'Ab 2027 ist Finanzbildung im österreichischen Lehrplan verankert. Wir erklären was das für AHS, HAK, HTL und alle anderen Schultypen bedeutet.',
    url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-pflichtfach-2027',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finanzbildung Pflichtfach 2027 – Was Schulen wissen müssen',
    description: 'Ab 2027/28 ist Finanzbildung in Österreich lehrplanmäßig verankert. Alle Infos für Schulen.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Finanzbildung wird Pflichtfach 2027 – Was das für österreichische Schulen bedeutet',
  description: 'Ab 2027/28 ist Finanzbildung in Österreich lehrplanmäßig verankert. Wir erklären, was das konkret bedeutet.',
  author: { '@type': 'Organization', name: 'Digitale Zukunftsbildung' },
  publisher: {
    '@type': 'Organization',
    name: 'Digitale Zukunftsbildung',
    url: 'https://www.digitale-zukunftsbildung.eu',
  },
  datePublished: '2025-03-01',
  dateModified: '2025-03-01',
  url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-pflichtfach-2027',
  mainEntityOfPage: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-pflichtfach-2027',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Aktuelles', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles' },
      { '@type': 'ListItem', position: 3, name: 'Finanzbildung Pflichtfach 2027', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-pflichtfach-2027' },
    ],
  },
}

export default function FinanzbildungPflichtfach2027() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
                <li className="text-white/60">Finanzbildung Pflichtfach 2027</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Bildungspolitik · März 2025
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Finanzbildung wird Pflichtfach 2027 — was das für österreichische Schulen bedeutet.
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed">
              Ab dem Schuljahr 2027/28 ist Finanzbildung im österreichischen Lehrplan verankert. Was das konkret bedeutet, welche Schultypen betroffen sind und wie Schulen jetzt die Weichen stellen können.
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate max-w-none">

            <div className="not-prose bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-10">
              <div className="flex gap-4 items-start">
                <svg className="shrink-0 mt-0.5" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#b45309" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <p className="font-body text-amber-800 text-sm leading-relaxed m-0">
                  <strong>Wichtiger Hinweis:</strong> Die genauen Lehrplanänderungen werden noch durch das BMBWF finalisiert. Dieser Artikel fasst den aktuellen Stand der Nationalen Finanzbildungsstrategie sowie die bereits angekündigten Curricula-Überarbeitungen zusammen.
                </p>
              </div>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a1040' }}>Was genau ändert sich ab 2027?</h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Österreich hat sich im Rahmen der <strong>Nationalen Finanzbildungsstrategie</strong> verpflichtet, Finanzbildung als fächerübergreifendes Thema in alle weiterführenden Schulen zu integrieren. Das bedeutet konkret: Ab dem Schuljahr 2027/28 sollen Schülerinnen und Schüler aller Schultypen strukturiert auf finanzielle Alltagsentscheidungen vorbereitet werden.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Finanzbildung wird dabei nicht als eigenes Fach eingeführt, sondern in bestehende Fächer wie <em>Wirtschaft und Recht</em>, <em>Geographie und Wirtschaftskunde</em>, <em>Ethik</em> und <em>Berufsvorbereitung</em> integriert. Für Lehrkräfte bedeutet das: Mehr Pflichtinhalte in denselben Unterrichtsstunden.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>Welche Schultypen sind betroffen?</h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Die Lehrplanverankerung betrifft alle weiterführenden Schulformen ab der 9. Schulstufe:
            </p>
            <ul className="font-body text-gray-700 leading-relaxed mb-6 space-y-2">
              {[
                'AHS-Oberstufe (9.–12. Schulstufe)',
                'HAK, HAS und berufsbildende höhere Schulen',
                'HTL (technische und gewerbliche Schulen)',
                'HLW (Landwirtschaft und Wirtschaft)',
                'BAfEP und BASOP (Pädagogik und Soziales)',
                'Polytechnische Schule (PTS)',
                'Berufsschulen im dualen System',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="shrink-0 mt-1" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a2d8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>Was konkret unterrichtet werden soll</h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Die Nationale Finanzbildungsstrategie definiert sieben Kernkompetenzen, die Schülerinnen und Schüler bis zum Ende ihrer Schullaufbahn erwerben sollen:
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Haushaltsbudget & Ausgabenkontrolle', desc: 'Einnahmen und Ausgaben planen, Budgetfallen erkennen' },
                { title: 'Lohnabrechnung verstehen', desc: 'Brutto vs. netto, Sozialversicherung, Dienstnehmerrechte' },
                { title: 'Sparen und Investieren', desc: 'Zinsen, Anlageformen, Risiko und Rendite' },
                { title: 'Schulden und Kredit', desc: 'Konsumkredite, Fallen erkennen, Entschuldung' },
                { title: 'Digitale Finanztools', desc: 'Online-Banking, Finanz-Apps, Betrugsschutz' },
                { title: 'Krypto und Spekulation', desc: 'Mythen vs. Fakten, Risiken einschätzen' },
                { title: 'Altersvorsorge', desc: 'Pensionssystem Österreich, private Vorsorge' },
              ].map((c) => (
                <div key={c.title} className="rounded-xl p-4 border border-gray-100 bg-gray-50">
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: '#1a1040' }}>{c.title}</p>
                  <p className="font-body text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>Die Herausforderung für Lehrkräfte</h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Das ehrgeizige Ziel stellt Lehrerinnen und Lehrer vor eine reale Herausforderung: Finanzbildung soll fächerübergreifend unterrichtet werden, aber kaum ein Lehramt-Studium hat bisher praxisnahe Finanzbildung als Pflichtinhalt. Eine Umfrage des OECD INFE (International Network on Financial Education) zeigt, dass nur 23 % der österreichischen Lehrkräfte sich sicher fühlen, Finanzthemen kompetent zu unterrichten.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Hinzu kommt: Unterrichtsmaterialien, die wirklich praxisnah, aktuell und für Jugendliche verständlich aufbereitet sind, fehlen an den meisten Schulen noch. Viele Lehrkräfte greifen auf veraltete Schulbuch-Kapitel zurück, die weder digitale Finanztools noch aktuelle Themen wie Buy-now-pay-later oder Kryptowährungen abdecken.
            </p>

            <div className="not-prose rounded-2xl p-8 mb-8" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
              <p className="font-heading text-lg font-bold mb-3" style={{ color: '#1a1040' }}>
                „Fertig. Sofort.“
              </p>
              <p className="font-body text-gray-700 text-sm leading-relaxed mb-4">
                Genau hier setzt Skills-UP! an. Alle Module sind lehrplankonform, didaktisch aufbereitet und können ohne Vorbereitungsaufwand eingesetzt werden. Lehrkräfte laden das Programm im Lehrer-Dashboard und unterrichten sofort.
              </p>
              <Link href="/schulen"
                className="inline-flex items-center gap-2 font-body font-700 text-sm px-5 py-3 rounded-xl text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                Schultyp auswählen
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>Was Schulen jetzt tun können</h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              2027 klingt weit entfernt, aber Pilotprogramme, Lehrerdiskussionen und erste Curricula-Überarbeitungen laufen bereits jetzt. Schulen, die früh starten, haben mehrere Vorteile:
            </p>
            <ul className="font-body text-gray-700 leading-relaxed mb-6 space-y-3">
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-1" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a2d8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Förderungen:</strong> MEGA Bildungsstiftung und Finanzbildungsstrategie fördern Pilotschulen bevorzugt. Wer jetzt einsteigt, sichert sich bessere Konditionen.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-1" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a2d8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Erfahrung aufbauen:</strong> Lehrkräfte brauchen Zeit, um Finanzbildungsformate in den eigenen Unterrichtsstil zu integrieren.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="shrink-0 mt-1" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4a2d8a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <span><strong>Eltern und Öffentlichkeit:</strong> Schulen, die Finanzbildung aktiv kommunizieren, stärken ihr Profil bei Eltern und in der Region.</span>
              </li>
            </ul>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>Fazit</h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Die Lehrplanverankerung von Finanzbildung ist ein richtiger und überfälliger Schritt. Österreich liegt im OECD-Vergleich bei Financial Literacy im Mittelfeld — ein strukturiertes Pflichtangebot kann das ändern.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-8">
              Für Schulen bedeutet das aber auch: Die Zeit für eine unverbindliche „Wir machen das irgendwann mal“ ist vorbei. Wer 2027 nicht ins Schwimmen kommen möchte, braucht jetzt ein verlässliches Programm — eins, das ohne großen Aufwand von Lehrkräften jedes Fachs eingesetzt werden kann.
            </p>

            {/* CTA */}
            <div className="not-prose rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-heading text-xl font-bold text-white mb-2">Skills-UP! ist jetzt einsetzbar.</p>
                  <p className="font-body text-white/60 text-sm leading-relaxed">12 Module, lehrplankonform, DSGVO-sicher. Demo anfordern und in 48 Stunden starten.</p>
                </div>
                <div className="flex gap-3 shrink-0 flex-wrap justify-center">
                  <Link href="/schulen"
                    className="font-body font-700 text-sm px-5 py-3 rounded-xl text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                    Schultyp ansehen
                  </Link>
                  <Link href="/#kontakt"
                    className="font-body font-700 text-sm px-5 py-3 rounded-xl text-white/80 border border-white/20 hover:border-white/40 transition-all">
                    Demo anfragen
                  </Link>
                </div>
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
