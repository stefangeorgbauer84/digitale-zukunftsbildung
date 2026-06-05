import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Impressum | Verein zur Entwicklung der digitalen Zukunftsbildung',
  description: 'Impressum und Datenschutzerklärung des Vereins zur Entwicklung der digitalen Zukunftsbildung.',
}

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="border-b border-gray-100 pb-8 last:border-0">
    <h2 className="font-heading font-700 text-lg mb-3" style={{ color: '#1a1040' }}>{title}</h2>
    <div className="font-body text-base text-text-muted leading-relaxed space-y-1">{children}</div>
  </div>
)

const Sub = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h3 className="font-heading font-700 text-base mb-1.5" style={{ color: '#1a1040' }}>{title}</h3>
    <div className="font-body text-sm text-text-muted leading-relaxed">{children}</div>
  </div>
)

export default function Impressum() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-16 px-6"
        style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 60%, #1a5c4e 100%)' }}>
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.25) 0%, transparent 70%)' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <p className="text-white/50 text-xs font-body font-700 uppercase tracking-widest mb-3">Rechtliches</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">Impressum</h1>
          <p className="text-white/60 font-body text-base">
            Verein zur Entwicklung der digitalen Zukunftsbildung · Wien, Österreich
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#datenschutz"
              className="text-white/70 hover:text-white text-sm font-body font-600 flex items-center gap-1.5 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
              Zur Datenschutzerklärung
            </a>
          </div>
        </div>
        <div className="relative z-10 mt-10">
          <svg viewBox="0 0 1440 40" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,20 C360,40 720,0 1080,20 C1260,30 1380,10 1440,20 L1440,40 L0,40 Z" fill="white" />
          </svg>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Impressum */}
        <div className="space-y-8 mb-16">
          <div>
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-6" style={{ color: '#4a2d8a' }}>
              Angaben gemäß § 5 E-Commerce-Gesetz (ECG), § 25 Mediengesetz und § 14 UGB
            </p>
          </div>

          <Section title="Medieninhaber & Herausgeber">
            <p><strong className="text-text-primary">Verein zur Entwicklung der digitalen Zukunftsbildung</strong></p>
            <p>Organisationsform: gemeinnütziger Verein</p>
          </Section>

          <Section title="Anschrift">
            <p>Straußengasse 12/26</p>
            <p>1050 Wien, Österreich</p>
          </Section>

          <Section title="Kontakt">
            <p>
              Telefon:{' '}
              <a href="tel:+436502158715" className="hover:underline" style={{ color: '#4a2d8a' }}>
                +43 650 215 8715
              </a>
            </p>
            <p>
              E-Mail:{' '}
              <a href="mailto:marina@digitale-zukunftsbildung.eu" className="hover:underline" style={{ color: '#4a2d8a' }}>
                marina@digitale-zukunftsbildung.eu
              </a>
            </p>
            <p>
              Web:{' '}
              <a href="https://www.digitale-zukunftsbildung.eu" target="_blank" rel="noopener noreferrer"
                className="hover:underline" style={{ color: '#4a2d8a' }}>
                www.digitale-zukunftsbildung.eu
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a href="https://linkedin.com/company/verein-zur-entwicklung-der-digitalen-zukunftsbildung"
                target="_blank" rel="noopener noreferrer" className="hover:underline" style={{ color: '#4a2d8a' }}>
                linkedin.com/company/verein-zur-entwicklung-der-digitalen-zukunftsbildung
              </a>
            </p>
          </Section>

          <Section title="Vertretungsberechtigte Personen (Vorstand)">
            <p>Marina Winkler, BA MA – Projektleiterin &amp; Hauptansprechperson</p>
            <p>Dr. Stefan Bauer</p>
          </Section>

          <Section title="Vereinsregister">
            <p>ZVR-Zahl (Zentrales Vereinsregister): wird nachgereicht</p>
          </Section>

          <Section title="Haftungsausschluss">
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte
              externer Links. Für den Inhalt verlinkter Seiten sind ausschließlich deren Betreiber:innen
              verantwortlich. Alle Angaben auf dieser Website erfolgen ohne Gewähr; eine Haftung für
              Schäden, die sich aus der Nutzung der veröffentlichten Inhalte ergeben, ist ausgeschlossen.
            </p>
          </Section>

          <Section title="Urheberrecht">
            <p>
              Texte, Grafiken und sonstige Inhalte dieser Website unterliegen dem österreichischen
              Urheberrecht. Jede Verwertung außerhalb der engen Grenzen des Urheberrechts bedarf der
              vorherigen schriftlichen Zustimmung des Vereins zur Entwicklung der digitalen Zukunftsbildung.
            </p>
          </Section>
        </div>

        {/* Datenschutz */}
        <div id="datenschutz" className="scroll-mt-24">
          <div className="rounded-2xl p-8 mb-10"
            style={{ background: 'linear-gradient(135deg, #ede9f8, #e6f4f1)' }}>
            <h2 className="font-heading text-2xl font-bold mb-2" style={{ color: '#1a1040' }}>
              Datenschutzerklärung
            </h2>
            <p className="font-body text-sm" style={{ color: '#4a2d8a' }}>
              Gemäß DSGVO (EU) 2016/679 und österreichischem Datenschutzgesetz (DSG)
            </p>
          </div>

          <div className="space-y-8">
            <Sub title="Verantwortlicher">
              <p>
                Verein zur Entwicklung der digitalen Zukunftsbildung<br />
                Straußengasse 12/26, 1050 Wien, Österreich<br />
                E-Mail: marina@digitale-zukunftsbildung.eu
              </p>
            </Sub>

            <Sub title="Welche Daten wir verarbeiten">
              <p>
                Wir erheben nur jene personenbezogenen Daten, die du uns im Rahmen des Kontaktformulars
                freiwillig mitteilst: Name, E-Mail-Adresse und Nachrichteninhalt. Diese Daten werden
                ausschließlich zur Beantwortung deiner Anfrage verwendet und danach gelöscht.
              </p>
            </Sub>

            <Sub title="E-Mail-Versand">
              <p>
                Nachrichten aus dem Kontaktformular werden über den Dienst Resend (Resend Inc., USA)
                versendet. Resend verarbeitet die von dir übermittelten Daten als Auftragsverarbeiter
                gemäß Art. 28 DSGVO. Weitere Informationen:{' '}
                <a href="https://resend.com/privacy" target="_blank" rel="noopener noreferrer"
                  className="hover:underline" style={{ color: '#4a2d8a' }}>resend.com/privacy</a>
              </p>
            </Sub>

            <Sub title="Hosting">
              <p>
                Diese Website wird über Vercel (Vercel Inc., USA) gehostet. Vercel kann dabei technische
                Zugriffsdaten kurzzeitig speichern. Weitere Informationen:{' '}
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer"
                  className="hover:underline" style={{ color: '#4a2d8a' }}>vercel.com/legal/privacy-policy</a>
              </p>
            </Sub>

            <Sub title="Cookies">
              <p>
                Diese Website verwendet keine Tracking-Cookies und kein Analytics. Es werden
                ausschließlich technisch notwendige Cookies gesetzt, die für den Betrieb der
                Website erforderlich sind.
              </p>
            </Sub>

            <Sub title="Deine Rechte">
              <p>
                Du hast das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
                Verarbeitung deiner personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit.
                Anfragen bitte per E-Mail an:{' '}
                <a href="mailto:marina@digitale-zukunftsbildung.eu" className="hover:underline"
                  style={{ color: '#4a2d8a' }}>marina@digitale-zukunftsbildung.eu</a>
              </p>
              <p className="mt-2">
                Beschwerden kannst du an die österreichische Datenschutzbehörde richten:{' '}
                <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer"
                  className="hover:underline" style={{ color: '#4a2d8a' }}>www.dsb.gv.at</a>
              </p>
            </Sub>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-gray-100">
          <Link href="/" className="inline-flex items-center gap-2 font-body font-600 text-sm transition-colors"
            style={{ color: '#4a2d8a' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
            Zurück zur Startseite
          </Link>
        </div>
      </div>

      <SiteFooter />
    </div>
  )
}
