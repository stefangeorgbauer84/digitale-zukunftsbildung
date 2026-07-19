import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: "Finanzbildung in 10 Minuten Unterricht — So geht's | Skills-UP!",
  description: 'Keine Zeit für lange Vorbereitungen? Diese 3 Formate bringen echte Finanzbildung in 10 bis 15 Minuten Unterricht — ohne Fachkenntnisse, sofort einsetzbar für AHS, HAK, HTL und Berufsschulen.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-10-minuten-unterricht' },
  openGraph: {
    title: 'Finanzbildung in 10 Minuten Unterricht — 3 Formate die wirklich funktionieren',
    description: 'So funktioniert kurze, wirkungsvolle Finanzbildung in der Schule — ohne Vorbereitung, ohne Fachkenntnisse, sofort startbereit.',
    url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-10-minuten-unterricht',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finanzbildung in 10 Minuten — 3 Formate für Lehrkräfte',
    description: 'Kurze, wirkungsvolle Finanzbildung ohne Vorbereitung. Sofort einsetzbar für alle Schultypen.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Finanzbildung in 10 Minuten Unterricht — 3 Formate die wirklich funktionieren',
  description: '3 Formate für kurze, wirkungsvolle Finanzbildung ohne Vorbereitung.',
  author: { '@type': 'Organization', name: 'Digitale Zukunftsbildung' },
  publisher: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  datePublished: '2025-05-01',
  dateModified: '2025-05-01',
  url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-10-minuten-unterricht',
  mainEntityOfPage: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-10-minuten-unterricht',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Aktuelles', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles' },
      { '@type': 'ListItem', position: 3, name: 'Finanzbildung 10 Minuten', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-10-minuten-unterricht' },
    ],
  },
}

const formate = [
  {
    nr: '01',
    titel: 'Die Einstiegs-Frage (5–10 Min.)',
    beschreibung: 'Eine provokante Frage zu Beginn der Stunde, die sofort Diskussion auslöst. Kein Material nötig.',
    beispiele: [
      '"Was kostet es wirklich, ein Auto zu haben — über 10 Jahre gerechnet?"',
      '"Was glaubt ihr: Wie viel zahlt ihr insgesamt für euer erstes Smartphone-Abo in 2 Jahren?"',
      '"Hat jemand schon mal auf TikTok einen Finanztipp gesehen? War der gut oder eine Falle?"',
    ],
    tipp: 'Lehrkräfte müssen die Antwort nicht kennen. Die Diskussion ist der Lerneffekt.',
    farbe: '#4a2d8a',
  },
  {
    nr: '02',
    titel: 'Das Kurzmodul (15 Min.)',
    beschreibung: 'Skills-UP! hat alle Module in einer 15-Minuten-Version. Schülerinnen und Schüler arbeiten digital, selbstständig.',
    beispiele: [
      'Lohnzettel lesen: 3 Lohnzettel, 3 Fehler finden — wer findet alle?',
      'Budgetplanung: Mit 1.200 € Netto auskommen — was passt, was nicht?',
      'Scam erkennen: 5 Screenshots, 5 echte oder gefälschte Angebote bewerten',
    ],
    tipp: 'Kein Login nötig für die Demo. Einfach starten, Klasse mitmachen lassen, Ergebnisse besprechen.',
    farbe: '#2a8a76',
  },
  {
    nr: '03',
    titel: 'Die Rückfrage-Runde (10 Min.)',
    beschreibung: 'Nach einem anderen Unterrichtsblock, in der letzten Viertelstunde: 3 Fragen aus dem Alltag, echte Antworten gesucht.',
    beispiele: [
      '"Was ist der Unterschied zwischen Krankenversicherung und Unfallversicherung?"',
      '"Warum ist ein 0%-Kredit selten wirklich 0%?"',
      '"Wie funktioniert eigentlich ein Kollektivvertrag?"',
    ],
    tipp: 'Lehrkräfte schreiben Antworten der Klasse an die Tafel. Richtig/falsch gemeinsam bewerten. 10 Minuten, keine Vorbereitung.',
    farbe: '#D87228',
  },
]

export default function Finanzbildung10MinutenPage() {
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
                <li className="text-white/60">Finanzbildung 10 Minuten</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Praxistipp · Mai 2025
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Finanzbildung in 10 Minuten Unterricht — 3 Formate, die wirklich funktionieren.
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed">
              Keine Zeit für lange Einheiten? Kein Problem. Diese drei Formate bringen echte Finanzbildung in kurze Unterrichtsblöcke — ohne Vorbereitung, ohne Fachkenntnisse, sofort einsetzbar.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">

            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Das häufigste Argument gegen Finanzbildung im Unterricht: „Dafür haben wir keine Zeit.“ Lehrpläne sind voll, Schulstunden kurz, Vorbereitungszeit Mangelware. Was viele Lehrkräfte aber unterschätzen: Finanzbildung muss nicht in langen Einheiten stattfinden. Manchmal reichen 10 Minuten — wenn das Format stimmt.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-10">
              Hier sind drei Formate, die erfahrene Lehrkräfte tatsächlich einsetzen — ohne großen Aufwand, mit echtem Lerneffekt.
            </p>

            <div className="space-y-10">
              {formate.map((f) => (
                <div key={f.nr} className="rounded-3xl overflow-hidden border border-gray-100">
                  <div className="p-6 md:p-8" style={{ background: f.farbe + '08', borderBottom: `2px solid ${f.farbe}20` }}>
                    <div className="flex items-start gap-4 mb-4">
                      <span className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-heading font-bold text-white text-sm"
                        style={{ background: f.farbe }}>
                        {f.nr}
                      </span>
                      <div>
                        <h2 className="font-heading text-xl font-bold leading-tight" style={{ color: '#1a1040' }}>{f.titel}</h2>
                        <p className="font-body text-gray-600 text-sm mt-1 leading-relaxed">{f.beschreibung}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 bg-white">
                    <p className="text-xs font-body font-700 uppercase tracking-widest mb-3" style={{ color: f.farbe }}>Beispiele</p>
                    <ul className="space-y-2 mb-5">
                      {f.beispiele.map((b) => (
                        <li key={b} className="flex items-start gap-2 font-body text-sm text-gray-700 leading-relaxed">
                          <svg className="shrink-0 mt-0.5" aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={f.farbe} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl p-4 font-body text-sm leading-relaxed" style={{ background: f.farbe + '0d', color: '#374151' }}>
                      <strong style={{ color: f.farbe }}>Tipp:</strong> {f.tipp}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl font-bold mt-12 mb-4" style={{ color: '#1a1040' }}>
              Das Prinzip dahinter: Anknüpfen, nicht belehren
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Alle drei Formate haben eines gemeinsam: Sie holen Jugendliche dort ab, wo sie bereits sind. Handy-Abo, erster Lohnzettel, Krypto-Hype auf TikTok — das sind keine abstrakten Lernziele, sondern echte Momente aus dem Leben 15- bis 20-Jähriger in Österreich. Finanzbildung, die daran anknüpft, bleibt.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-10">
              Lehrkräfte müssen dafür keine Finanzexpertinnen oder -experten sein. Das Programm übernimmt den fachlichen Teil. Die Lehrkraft moderiert, stellt Fragen, lässt diskutieren — das reicht.
            </p>

            <div className="not-prose rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-heading text-xl font-bold text-white mb-2">Module für alle drei Formate — fertig aufbereitet.</p>
                  <p className="font-body text-white/60 text-sm leading-relaxed">Skills-UP! liefert alle Materialien für Kurzmodule, Einstiegsfragen und Rückfragerunden. Sofort, ohne Vorbereitung.</p>
                </div>
                <div className="flex gap-3 shrink-0 flex-wrap justify-center">
                  <Link href="/schulen"
                    className="font-body font-700 text-sm px-5 py-3 rounded-xl text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                    Schultyp auswählen
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
