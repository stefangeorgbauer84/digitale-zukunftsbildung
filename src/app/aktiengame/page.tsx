import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import AktienGame from './components/AktienGame'

export const metadata: Metadata = {
  title: 'Aktiengame – Börsenplanspiel für Schulen & Workshops | Skills-UP! Österreich',
  description:
    'Kostenlose Börsensimulation für Schulen und Workshops: virtuelles Kapital, Aktien, ETFs, Risiko, Diversifikation. Lehrplankonform, sofort spielbar im Browser. Für AHS, HAK, HTL und mehr.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/aktiengame' },
  openGraph: {
    title: 'Aktiengame – Kostenloses Börsenplanspiel für Schulen',
    description: 'Interaktives Börsenplanspiel für Finanzbildung im Unterricht. Virtuelles Kapital, Aktien, ETFs, Risiko. Sofort spielbar.',
    url: 'https://www.digitale-zukunftsbildung.eu/aktiengame',
    type: 'website',
    locale: 'de_AT',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aktiengame – Börsenplanspiel für Schulen | Skills-UP!',
    description: 'Kostenloses Börsenplanspiel für Finanzbildung im Unterricht. Sofort spielbar, lehrplankonform.',
  },
}

const softwareJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Aktiengame – Börsenplanspiel für Schulen',
  applicationCategory: 'EducationalApplication',
  operatingSystem: 'Web Browser',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  description: 'Kostenloses Börsenplanspiel für Finanzbildung im Unterricht. Virtuelles Kapital, Aktien, ETFs, Risiko und Diversifikation. Sofort spielbar, keine Installation.',
  url: 'https://www.digitale-zukunftsbildung.eu/aktiengame',
  provider: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  audience: { '@type': 'Audience', audienceType: 'Schülerinnen und Schüler, Lehrkräfte, Workshops' },
  educationalUse: 'Finanzbildung, Börse, Investieren, Risikomanagement',
  inLanguage: 'de-AT',
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Ist das Aktiengame kostenlos?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja, das Aktiengame ist vollständig kostenlos und läuft direkt im Browser — keine Registrierung, kein Download, keine App notwendig.' },
    },
    {
      '@type': 'Question',
      name: 'Eignet sich das Börsenplanspiel für den Unterricht in der Schule?',
      acceptedAnswer: { '@type': 'Answer', text: 'Ja. Das Aktiengame wurde für den Einsatz in Schulen, Workshops und Projekttagen entwickelt. Es ist lehrplankonform einsetzbar für AHS, HAK, HTL und andere Schultypen in Österreich.' },
    },
    {
      '@type': 'Question',
      name: 'Was ist der Unterschied zwischen dem Aktiengame und Skills-UP!?',
      acceptedAnswer: { '@type': 'Answer', text: 'Das Aktiengame ist eine kostenlose Einzelsimulation zum Thema Börse und Investieren. Skills-UP! ist das vollständige Finanzbildungsprogramm mit 12+ Modulen, Praxissimulationen, Lehrer-Dashboard und Gamification für alle Schultypen.' },
    },
    {
      '@type': 'Question',
      name: 'Brauche ich als Lehrkraft Börsenwissen, um das Spiel einzusetzen?',
      acceptedAnswer: { '@type': 'Answer', text: 'Nein. Das Spiel erklärt alle Konzepte direkt im Spielverlauf. Lehrkräfte starten das Spiel, Schülerinnen und Schüler spielen selbstständig. Am Ende gibt es Reflexionsfragen, die die Diskussion in der Klasse leiten.' },
    },
  ],
}

export default function AktienGamePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <SiteNav />
    <main style={{ paddingTop: '4rem' }}>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-medium to-[#2A8A76] min-h-[60vh] flex items-center">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full animate-float-orb blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/5 rounded-full animate-float-orb-reverse blur-2xl" />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-white text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Skills-UP! Beispiel-Simulation
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Aktiengame</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10">
            Das spielerische Börsenplanspiel für Finanzbildung, Schule und Workshops
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#spiel"
              className="bg-white text-primary-dark font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              Spiel starten
            </a>
            <a
              href="#mehr"
              className="border border-white text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              Mehr erfahren
            </a>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <section id="mehr" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-heading text-3xl font-bold text-primary-dark text-center mb-4">
          Was lernst du beim Aktiengame?
        </h2>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-12">
          Das Spiel verbindet praktisches Handeln mit Reflexion. Du triffst echte
          Entscheidungen – mit virtuellem Geld, aber echten Konsequenzen.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              title: 'Schülerinnen und Schüler',
              text: 'Finanzwissen spielerisch erfahren – ohne Angst vor Verlusten. Idealer Einstieg ins Thema Börse.',
            },
            {
              title: 'Lehrkräfte und Trainer',
              text: 'Einsetzbar in Workshops, Unterricht oder Projekttagen. Kein technisches Setup nötig.',
            },
            {
              title: 'Erwachsene und Interessierte',
              text: 'Grundlagen zu Aktien, ETFs, Diversifikation und Risiko verständlich und praxisnah lernen.',
            },
          ].map((c) => (
            <div key={c.title} className="bg-white rounded-2xl shadow-card p-6">
              <h3 className="font-heading font-bold text-primary-dark mb-2">{c.title}</h3>
              <p className="text-text-secondary text-sm">{c.text}</p>
            </div>
          ))}
        </div>

        <h2 className="font-heading text-2xl font-bold text-primary-dark text-center mb-8">
          So funktioniert das Spiel
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            { step: '1', text: 'Nickname wählen und Rundenanzahl festlegen' },
            { step: '2', text: 'Aktien und ETFs kaufen oder verkaufen' },
            { step: '3', text: 'Runde beenden, Marktereignis erleben' },
            { step: '4', text: 'Reflexionsfrage beantworten und weiterlernen' },
          ].map((s) => (
            <div key={s.step} className="bg-primary-dark/5 rounded-2xl p-5 text-center">
              <div className="w-10 h-10 bg-primary-dark text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                {s.step}
              </div>
              <p className="text-sm text-text-secondary">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="bg-gray-50 border border-gray-200 rounded-2xl px-6 py-5">
          <p className="text-sm text-text-muted text-center">
            <strong>Hinweis:</strong> Dieses Aktiengame dient ausschließlich Bildungszwecken. Es
            handelt sich um eine Simulation mit virtuellem Geld und fiktiven Unternehmen. Keine
            der dargestellten Informationen stellt eine Anlageberatung oder Empfehlung dar.
          </p>
        </div>
      </section>

      {/* Das Spiel */}
      <section id="spiel" className="max-w-5xl mx-auto px-6 pb-24">
        <h2 className="font-heading text-3xl font-bold text-primary-dark text-center mb-8">
          Spiel starten
        </h2>
        <AktienGame />
      </section>
      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h2 className="font-heading text-2xl font-bold text-center mb-8" style={{ color: '#1a1040' }}>
          Häufige Fragen zum Aktiengame
        </h2>
        <div className="space-y-4">
          {[
            {
              q: 'Ist das Aktiengame kostenlos?',
              a: 'Ja, vollständig kostenlos. Kein Download, keine App, keine Registrierung. Einfach im Browser starten.',
            },
            {
              q: 'Eignet es sich für den Schulunterricht in Österreich?',
              a: 'Ja. Das Spiel ist für AHS, HAK, HTL, HLW und Berufsschulen einsetzbar. Keine technischen Vorkenntnisse nötig.',
            },
            {
              q: 'Was ist der Unterschied zu Skills-UP!?',
              a: 'Das Aktiengame ist eine kostenlose Einzelsimulation. Skills-UP! ist das vollständige Programm mit 12+ Modulen, Lehrer-Dashboard und Praxissimulationen für alle Schultypen.',
            },
            {
              q: 'Brauche ich als Lehrkraft Börsenwissen?',
              a: 'Nein. Das Spiel erklärt alles im Spielverlauf selbst. Starten, spielen lassen, gemeinsam reflektieren — das reicht.',
            },
          ].map((item, i) => (
            <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <p className="font-heading font-bold text-sm mb-2" style={{ color: '#1a1040' }}>{item.q}</p>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Interne Verlinkung zu Skills-UP! */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="text-xs font-body font-700 uppercase tracking-widest text-white/40 mb-3">Das vollständige Programm</p>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                Mehr als Börse — Skills-UP! deckt alle Finanzthemen ab.
              </h2>
              <p className="font-body text-white/60 text-sm leading-relaxed mb-6">
                12+ Module, Lohnzettel bis Krypto, Lehrer-Dashboard, lehrplankonform für AHS, HAK, HTL, HLW, PTS und Berufsschulen.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/schulen"
                  className="font-body font-700 text-sm px-5 py-3 rounded-xl text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                  Schultyp auswählen
                </Link>
                <Link href="/lehrplan-mapping"
                  className="font-body font-700 text-sm px-5 py-3 rounded-xl text-white/70 border border-white/20 hover:border-white/40 transition-all">
                  Lehrplanmapping ansehen
                </Link>
              </div>
            </div>
            <div className="shrink-0 hidden md:grid grid-cols-2 gap-3">
              {['12+ Module', '10+ Simulationen', 'Lehrer-Dashboard', 'DSGVO-konform'].map((f) => (
                <div key={f} className="px-4 py-3 rounded-xl text-center text-xs font-body font-700 text-white/70"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)' }}>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
      <SiteFooter />
    </div>
  )
}
