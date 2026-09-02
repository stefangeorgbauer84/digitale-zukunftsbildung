import type { Metadata } from 'next'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import DemoForm from './DemoForm'
import VorstellungVideo from '@/components/VorstellungVideo'

export const metadata: Metadata = {
  title: 'Demo anfragen – Skills-UP! Finanzbildung für Schulen | Österreich',
  description: 'Jetzt kostenlose Demo von Skills-UP! anfragen. Für AHS, HAK, HTL, HLW, BAfEP, PTS und Berufsschulen in Österreich. Antwort innerhalb von 24 Stunden.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/demo-anfragen' },
  openGraph: {
    title: 'Demo anfragen – Skills-UP! Finanzbildung',
    description: 'Kostenlose Demo für deine Schule. Kein Chatbot, kein Helpdesk — wir antworten innerhalb von 24 Stunden.',
    url: 'https://www.digitale-zukunftsbildung.eu/demo-anfragen',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function DemoAnfragenPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content">
        <section className="min-h-screen pt-24 pb-16 px-6 flex items-start"
          style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-5xl mx-auto w-full">

            {/* Header */}
            <div className="text-center mb-12 pt-8">
              <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
                style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
                <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Kostenlose Demo
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Skills-UP! an deiner Schule starten.
              </h1>
              <p className="font-body text-white/60 text-lg max-w-xl mx-auto">
                Kein Chatbot, kein Helpdesk. Marina antwortet persönlich — innerhalb von 24 Stunden.
              </p>
            </div>

            <div className="grid md:grid-cols-[1fr_360px] gap-8 items-start">

              {/* Form */}
              <div className="rounded-3xl p-8 md:p-10" style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)' }}>
                <DemoForm />
              </div>

              {/* Trust sidebar */}
              <div className="space-y-4">
                {[
                  {
                    icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    title: 'Antwort in 24 Stunden',
                    text: 'Werktags antworten wir garantiert innerhalb eines Tages.',
                  },
                  {
                    icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
                    title: 'Kein Verkaufsgespräch',
                    text: 'Wir zeigen dir das Programm — ohne Druck und ohne Vertrag.',
                  },
                  {
                    icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>,
                    title: 'Für alle 7 Schultypen',
                    text: 'AHS, HAK, HTL, HLW, BAfEP, PTS, Berufsschule — lehrplankonform.',
                  },
                  {
                    icon: <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
                    title: 'DSGVO-konform',
                    text: 'Deine Anfrage wird nur für die Demo-Koordination genutzt.',
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-5 rounded-2xl"
                    style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white/60"
                      style={{ background: 'rgba(155,126,212,0.2)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-heading font-700 text-white text-sm mb-0.5">{item.title}</p>
                      <p className="font-body text-white/50 text-xs leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                ))}

                {/* Award badge */}
                <div className="flex items-center gap-3 p-5 rounded-2xl"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#fde68a" stroke="#fde68a" strokeWidth="0.5">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                  <p className="font-body text-white/50 text-xs">Top-3 MEGA Bildungsmillion 2025 · WKÖ zertifiziert · Gütesiegel Lern-Apps</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vorstellungsvideo 16.2 (Bunny Stream, Two-Click) */}
        <VorstellungVideo />
      </main>
      <SiteFooter />
    </>
  )
}
