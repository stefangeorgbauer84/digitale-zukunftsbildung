import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'

export const metadata: Metadata = {
  title: 'Finanzbildung in der dualen Ausbildung Österreich | Skills-UP! für Berufsschulen',
  description: 'Warum Finanzbildung in der Berufsschule und der dualen Ausbildung besonders wichtig ist — und wie Lehrkräfte ohne Mehraufwand praktisches Finanzwissen in den Unterricht bringen.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-berufsschule' },
  openGraph: {
    title: 'Finanzbildung duale Ausbildung Österreich: Was Berufsschulen jetzt brauchen',
    description: 'Lehrlinge verdienen ab Tag 1 echtes Geld — aber niemand erklärt ihnen Lohnzettel, Sozialversicherung oder Budgetplanung. Wie Berufsschulen das ändern können.',
    url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-berufsschule',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Finanzbildung duale Ausbildung Österreich — Skills-UP! für Berufsschulen',
    description: 'Lehrlinge verdienen ab Tag 1 Geld — aber niemand erklärt ihnen den Lohnzettel. Was Berufsschulen jetzt tun können.',
  },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Finanzbildung in der dualen Ausbildung Österreich — Was Berufsschulen jetzt brauchen',
  description: 'Warum Finanzbildung in der Berufsschule besonders wichtig ist und wie Lehrkräfte sie ohne Mehraufwand einsetzen können.',
  author: { '@type': 'Organization', name: 'Digitale Zukunftsbildung' },
  publisher: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  datePublished: '2025-04-01',
  dateModified: '2025-04-01',
  url: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-berufsschule',
  mainEntityOfPage: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-berufsschule',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Aktuelles', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles' },
      { '@type': 'ListItem', position: 3, name: 'Finanzbildung Berufsschule', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles/finanzbildung-berufsschule' },
    ],
  },
}

export default function FinanzbildungBerufsschulePage() {
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
                <li className="text-white/60">Finanzbildung Berufsschule</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Praxis · April 2025
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Duale Ausbildung und Finanzbildung — warum gerade Lehrlinge das Programm brauchen.
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed">
              Lehrlinge verdienen ab dem ersten Ausbildungstag echtes Geld. Aber wer erklärt ihnen den Lohnzettel, die Sozialversicherung oder was ein Kollektivvertrag ist? Berufsschulen haben hier eine einmalige Chance.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a1040' }}>
              Der blinde Fleck im dualen System
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Das österreichische duale Ausbildungssystem gilt international als Vorbild. Rund 200 anerkannte Lehrberufe, 40 % der Schulabgänger wählen diesen Weg, Betriebe investieren erheblich in die fachliche Ausbildung. Was dabei fast vollständig fehlt: persönliche Finanzbildung.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Ein 15-jähriger Lehrling in einer Kfz-Werkstatt lernt in den ersten Wochen, wie man einen Ölwechsel durchführt. Dass er gleichzeitig monatlich ein Lehrlingsentgelt bekommt — und wie er damit umgeht — bleibt sich selbst überlassen. Die Berufsschule hat selten Zeit und Material, das aufzufangen.
            </p>

            <div className="bg-purple-50 border border-purple-100 rounded-2xl p-6 mb-8">
              <p className="font-heading font-bold text-sm mb-2" style={{ color: '#4a2d8a' }}>Zahlen, die aufhorchen lassen</p>
              <ul className="space-y-2 font-body text-sm text-gray-700">
                {[
                  'Österreichs Jugendliche im OECD Financial Literacy Test: nur 498 Punkte (OECD-Schnitt: 505)',
                  '1 von 3 Jugendlichen hat Schulden, bevor sie den ersten Job haben (Statistik Austria)',
                  'Nur 12 % der Lehrlinge wissen, was AMS-Beiträge sind oder wie sie berechnet werden',
                  'Ratenkauf und BNPL werden von Jugendlichen am häufigsten falsch eingeschätzt',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span style={{ color: '#4a2d8a' }} className="shrink-0 mt-0.5">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>
              Warum Berufsschulen die ideale Plattform sind
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Berufsschulen haben etwas, das andere Schulformen nicht haben: Lehrlinge, die bereits im Arbeitsverhältnis stehen. Finanzbildung ist für sie kein abstraktes Zukunftsthema, sondern sofort anwendbar. Wenn jemand in der Schule lernt, wie er seinen Lohnzettel liest, und am nächsten Tag die erste Abrechnung vom Betrieb bekommt, entsteht ein Lerneffekt, der sitzt.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Die Herausforderung: Berufsschulen haben wenig Unterrichtszeit — oft nur ein paar Wochen im Jahr, in denen Lehrlinge überhaupt in der Schule sind. Das schafft Druck. Es braucht Material, das in 15 oder 50 Minuten funktioniert, ohne dass Lehrkräfte stundenlang vorbereiten müssen.
            </p>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>
              Module, die für Lehrlinge passen
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-4">
              Skills-UP! hat Module, die gezielt auf die Lebenssituation von Lehrlingen ausgerichtet sind:
            </p>
            <div className="not-prose grid sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: 'Lohnzettel verstehen', desc: 'Brutto, netto, Sozialversicherungsbeiträge, Lohnsteuer — erklärt am realen Lehrlingslohnzettel' },
                { title: 'Budgetplanung', desc: 'Einnahmen und Ausgaben realistisch planen, typische Fallen von Lehrlingen im 1. Lehrjahr' },
                { title: 'Ratenkauf & BNPL', desc: 'Wie Ratenkauf wirklich funktioniert, was BNPL kostet, Schuldfallen erkennen' },
                { title: 'Krypto & Scams', desc: 'Warum Jugendliche besonders oft Ziel von Finanzbetrug sind und wie man Scams erkennt' },
                { title: 'Notgroschen aufbauen', desc: 'Warum ein Notgroschen wichtig ist, wie man ihn mit kleinem Lehrlingsgehalt aufbaut' },
                { title: 'Gehaltsverhandlung', desc: 'Kollektivvertrag, Lohnstufen, wie man beim Übergang in die Vollbeschäftigung verhandelt' },
              ].map((c) => (
                <div key={c.title} className="rounded-xl p-4 border border-gray-100 bg-gray-50">
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: '#1a1040' }}>{c.title}</p>
                  <p className="font-body text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 mt-10" style={{ color: '#1a1040' }}>
              Was Lehrkräfte an Berufsschulen konkret brauchen
            </h2>
            <p className="font-body text-gray-700 leading-relaxed mb-6">
              Berufsschullehrkräfte sind Spezialisten in ihrem Fachbereich, nicht in Finanzbildung. Ein gutes Finanzbildungsprogramm für Berufsschulen muss deshalb ohne Fachkenntnisse der Lehrkraft funktionieren. Alle Inhalte, Erklärungen, Übungsaufgaben und Korrekturen müssen im System enthalten sein.
            </p>
            <p className="font-body text-gray-700 leading-relaxed mb-8">
              Skills-UP! ist genau so aufgebaut: Lehrkräfte starten ein Modul, die Schülerinnen und Schüler arbeiten selbstständig oder in Gruppen, das Dashboard zeigt den Fortschritt. Kein Vorbereitungsaufwand, keine Notwendigkeit, Finanzexpertin oder Finanzexperte zu sein.
            </p>

            <div className="not-prose rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-heading text-xl font-bold text-white mb-2">Für Berufsschulen: Demo anfordern</p>
                  <p className="font-body text-white/60 text-sm leading-relaxed">Skills-UP! hat spezifische Module für Berufsschulen und das duale System. Jetzt Demo anfragen — kostenlos und unverbindlich.</p>
                </div>
                <div className="flex gap-3 shrink-0 flex-wrap justify-center">
                  <Link href="/schulen/berufsschule"
                    className="font-body font-700 text-sm px-5 py-3 rounded-xl text-white transition-all hover:opacity-90"
                    style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                    Berufsschule ansehen
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
