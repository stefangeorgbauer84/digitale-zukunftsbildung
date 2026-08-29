import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Inflation einfach erklärt: Unterrichtsmaterial für Lehrkräfte | Skills-UP!',
  description:
    'Inflation im Unterricht erklären — ohne Vorbereitung: die einfachste Definition, österreichische Alltagsbeispiele (VPI, Warenkorb) und 3 fertige Stundenideen für 10, 15 und 50 Minuten.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/blog/inflation-einfach-erklaert-unterrichtsmaterial' },
  openGraph: {
    title: 'Inflation einfach erklärt — Unterrichtsmaterial für Lehrkräfte',
    description:
      'Die einfachste Inflation-Erklärung für den Unterricht, Alltagsbeispiele aus Österreich und 3 fertige Stundenideen — für 10, 15 und 50 Minuten.',
    url: 'https://www.digitale-zukunftsbildung.eu/blog/inflation-einfach-erklaert-unterrichtsmaterial',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inflation einfach erklärt — Unterrichtsmaterial für Lehrkräfte',
    description: 'Einfachste Erklärung, österreichische Beispiele und 3 fertige Stundenideen für den Unterricht.',
  },
}

// Statisches, hartkodiertes JSON-LD ohne User-Input — gleiches Muster wie /aktuelles-Artikel.
const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Inflation einfach erklärt — fertiges Unterrichtsmaterial für Ihre Klasse',
  description:
    'Die einfachste Inflation-Erklärung für den Unterricht, österreichische Alltagsbeispiele und drei fertige Stundenideen für 10, 15 und 50 Minuten.',
  author: { '@type': 'Organization', name: 'Digitale Zukunftsbildung' },
  publisher: {
    '@type': 'Organization',
    name: 'Digitale Zukunftsbildung',
    url: 'https://www.digitale-zukunftsbildung.eu',
  },
  datePublished: '2026-08-29',
  dateModified: '2026-08-29',
  inLanguage: 'de-AT',
  url: 'https://www.digitale-zukunftsbildung.eu/blog/inflation-einfach-erklaert-unterrichtsmaterial',
  mainEntityOfPage: 'https://www.digitale-zukunftsbildung.eu/blog/inflation-einfach-erklaert-unterrichtsmaterial',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Materialien & Tipps', item: 'https://www.digitale-zukunftsbildung.eu/blog' },
      { '@type': 'ListItem', position: 3, name: 'Inflation einfach erklärt', item: 'https://www.digitale-zukunftsbildung.eu/blog/inflation-einfach-erklaert-unterrichtsmaterial' },
    ],
  },
}

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>{children}</h2>
)
const P = ({ children }: { children: React.ReactNode }) => (
  <p className="font-body text-gray-700 leading-relaxed mb-6">{children}</p>
)

export default function InflationUnterrichtsmaterial() {
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
                <li><Link href="/blog" className="hover:text-white/70 transition-colors">Materialien &amp; Tipps</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Inflation einfach erklärt</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              Unterrichtsmaterial · August 2026 · 6 Min. Lesedauer
            </div>

            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Inflation einfach erklärt — fertiges Unterrichtsmaterial für Ihre Klasse.
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed">
              Inflation betrifft jede:n Schüler:in beim nächsten Einkauf — und ist trotzdem eines der am schlechtesten verstandenen Finanzkonzepte. Hier finden Sie die einfachste Erklärung, österreichische Alltagsbeispiele und drei fertige Stundenideen.
            </p>
          </div>
        </section>

        {/* Article body */}
        <article className="py-16 px-6 bg-white">
          <div className="max-w-3xl mx-auto">

            <H2>Was ist Inflation? Die einfachste Erklärung für den Unterricht</H2>
            <P>
              Die kürzeste Definition, die im Unterricht funktioniert: <strong>Inflation bedeutet, dass dasselbe Geld
              über die Zeit weniger kaufen kann.</strong> Der Zehner in der Geldbörse bleibt ein Zehner — aber was man
              dafür bekommt, wird weniger. Nicht das Geld verschwindet, seine Kaufkraft schrumpft.
            </P>
            <P>
              Gemessen wird das in Österreich über den <strong>Verbraucherpreisindex (VPI)</strong> der Statistik Austria:
              Ein fixer „Warenkorb“ aus hunderten Gütern und Dienstleistungen — von Lebensmitteln über Miete bis zum
              Kinoticket — wird laufend neu bepreist. Steigt der Warenkorbpreis binnen eines Jahres um zwei Prozent,
              beträgt die Inflationsrate zwei Prozent. Die Europäische Zentralbank strebt mittelfristig genau diese
              zwei Prozent an — ein bisschen Inflation ist gewollt, zu viel wird zum Problem.
            </P>

            <div className="rounded-2xl p-6 mb-8" style={{ background: '#f3f1f9', border: '1px solid rgba(74,45,138,0.12)' }}>
              <p className="font-body text-sm leading-relaxed m-0" style={{ color: '#4a2d8a' }}>
                <strong>Merksatz für die Tafel:</strong> „Inflation heißt nicht, dass du weniger Geld hast.
                Es heißt, dass dein Geld weniger kann.“
              </p>
            </div>

            <H2>Inflation greifbar machen: Alltagsbeispiele, die in Österreich funktionieren</H2>
            <P>
              Abstrakte Prozentsätze bleiben nicht hängen — die Preise aus dem eigenen Alltag schon.
              Diese drei Zugänge haben sich im Unterricht bewährt:
            </P>
            <ul className="font-body text-gray-700 leading-relaxed mb-6 space-y-3">
              {[
                ['Der Snack-Index:', 'Was kostete die Leberkäsesemmel, der Kebab oder das Lieblingsgetränk vor fünf Jahren — und was heute? Schüler:innen recherchieren oder fragen zu Hause nach. Die eigene Preiserfahrung schlägt jede Statistik.'],
                ['Das Taschengeld-Experiment:', '20 Euro Taschengeld heute vs. 20 Euro in zehn Jahren bei 2 % Inflation: Was kann man sich dann noch davon leisten? Die Rechnung ist einfach und der Effekt verblüfft.'],
                ['Das Sparbuch-Paradox:', '1.000 Euro liegen fünf Jahre unverzinst am Konto. Bei laufender Inflation sind sie danach nominal gleich viel — real aber spürbar weniger wert. Die Kernfrage für die Diskussion: Ist Nichtstun mit Geld wirklich „sicher“?'],
              ].map(([fett, rest]) => (
                <li key={fett} className="flex items-start gap-3">
                  <svg className="shrink-0 mt-1" aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1E6B5B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  <span><strong>{fett}</strong> {rest}</span>
                </li>
              ))}
            </ul>
            <P>
              Aktuelle österreichische Inflationswerte finden Sie tagesaktuell bei der Statistik Austria —
              ideal als Rechercheauftrag für die Klasse, statt veralteter Zahlen am Arbeitsblatt.
            </P>

            <H2>Drei fertige Unterrichtsideen: 10, 15 oder 50 Minuten</H2>

            <div className="space-y-4 mb-8">
              {[
                {
                  zeit: '10 Min',
                  titel: 'Der Preis-Schätz-Opener',
                  text: 'Drei Alltagsprodukte an die Wand projizieren, Klasse schätzt die Preise von vor zehn Jahren. Auflösung, kurze Diskussion: Warum steigen Preise überhaupt? Perfekt als Stundeneinstieg oder für den Stundenrest — null Vorbereitung.',
                },
                {
                  zeit: '15 Min',
                  titel: 'Skills-UP!-Modul „Sparen & Geldentscheidungen“',
                  text: 'Das fertige 15-Minuten-Modul erklärt Nominalzins vs. Realzins und zeigt, warum Inflation Erspartes „auffrisst“. Schüler:innen arbeiten selbstständig im Browser, das Quiz sichert das Verständnis. Sie starten es mit einem Klick.',
                },
                {
                  zeit: '50 Min',
                  titel: 'Warenkorb-Projekt: Die Klasse baut ihren eigenen VPI',
                  text: 'Gruppen definieren einen „Jugend-Warenkorb“ (Handytarif, Öffi-Ticket, Streaming, Snacks), recherchieren aktuelle Preise und vergleichen mit Werten von früher. Abschluss: Welche Preise stiegen am stärksten — und wen trifft das am meisten? Deckt Recherche-, Rechen- und Diskussionskompetenz in einer Stunde ab.',
                },
              ].map((idee) => (
                <div key={idee.zeit} className="rounded-2xl border border-gray-100 p-6 shadow-sm bg-white flex gap-5">
                  <span className="shrink-0 h-fit text-xs font-body font-700 px-3 py-1.5 rounded-full bg-status-teal-light text-status-teal whitespace-nowrap">
                    {idee.zeit}
                  </span>
                  <div>
                    <h3 className="font-heading font-700 text-lg mb-2" style={{ color: '#1a1040' }}>{idee.titel}</h3>
                    <p className="font-body text-gray-600 text-sm leading-relaxed m-0">{idee.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <H2>Häufige Schülerfragen — und Antworten, die sitzen</H2>
            <P>
              <strong>„Warum druckt der Staat nicht einfach mehr Geld?“</strong> — Weil mehr Geld bei gleich vielen
              Waren die Preise erst recht treibt: Wenn alle mehr zahlen können, verlangen alle mehr. Das historische
              Extrembeispiel Hyperinflation (etwa Österreich in den 1920ern) macht das eindrucksvoll greifbar.
            </P>
            <P>
              <strong>„Ist Inflation immer schlecht?“</strong> — Nein. Leichte, stabile Inflation gilt als gesund,
              weil sie Konsum und Investitionen am Laufen hält. Problematisch wird es, wenn Preise schneller steigen
              als Löhne — dann verlieren vor allem Menschen mit wenig Einkommen.
            </P>
            <P>
              <strong>„Was kann ich dagegen tun?“</strong> — Die ehrliche Antwort: Inflation selbst kann niemand
              abstellen. Aber man kann sein Geld so organisieren, dass sie weniger schadet — Preise vergleichen,
              nicht alles unverzinst liegen lassen, langfristig denken. Genau hier setzen die Skills-UP!-Module an.
            </P>

            <H2>Material &amp; Vertiefung</H2>
            <P>
              Inflation ist in Skills-UP! kein Einzelthema, sondern zieht sich durch mehrere Module:
              <em> Sparen &amp; Geldentscheidungen</em> (Realzins, Zinseszins), <em>Haushaltsbudget</em> (steigende
              Fixkosten) und die <em>Sparen-Simulation</em> (was Inflation mit Erspartem macht). Alles lehrplankonform
              dokumentiert und ohne Vorbereitung einsetzbar.
            </P>

            <div className="rounded-2xl p-8 text-center text-white mb-4"
              style={{ background: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 50%, #2a8a76 100%)' }}>
              <h3 className="font-heading text-2xl font-bold mb-3">Inflation nächste Woche unterrichten?</h3>
              <p className="font-body text-white/75 mb-6 max-w-xl mx-auto">
                Testen Sie die Skills-UP!-Module und Simulationen kostenlos — im Browser, ohne Installation, ohne Vorbereitung.
              </p>
              <div className="flex justify-center gap-3 flex-wrap">
                <Link href="/demo"
                  className="inline-flex items-center gap-2 bg-white font-body font-700 text-sm px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-all"
                  style={{ color: '#4a2d8a' }}>
                  Gratis Demo starten
                </Link>
                <Link href="/lehrplan-mapping"
                  className="inline-flex items-center gap-2 font-body font-700 text-sm px-6 py-3.5 rounded-xl text-white border border-white/30 hover:bg-white/10 transition-all">
                  Zum Lehrplanmapping
                </Link>
              </div>
            </div>
          </div>
        </article>

        <NewsletterSignup />
      </main>
      <SiteFooter />
    </>
  )
}
