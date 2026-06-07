import type { Metadata } from 'next'
import AktienGame from './components/AktienGame'

export const metadata: Metadata = {
  title: 'Aktiengame | Spielerische Finanzbildung für Schule und Workshops',
  description:
    'Das Aktiengame des Vereins zur Entwicklung der digitalen Zukunftsbildung vermittelt Finanzwissen spielerisch: virtuelles Kapital, simulierte Aktien, ETFs, Risiko, Diversifikation und Reflexion.',
  openGraph: {
    title: 'Aktiengame',
    description: 'Ein interaktives Börsenplanspiel für Finanzbildung, Schule und Workshops.',
    type: 'website',
    locale: 'de_AT',
  },
}

export default function AktienGamePage() {
  return (
    <main>
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
    </main>
  )
}
