import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Für Schulen | Skills-UP! – Finanzbildung für die 9. bis 12. Schulstufe',
  description: 'Skills-UP! ist das Finanzbildungsprogramm für AHS, HAK, HTL, HLW, BAfEP, BASOP, PTS und Berufsschulen. Sofort einsetzbar, digital, praxisnah.',
}

const schultypen = [
  {
    slug: 'ahs',
    name: 'AHS-Oberstufe',
    kurzname: 'AHS',
    farbe: '#4a2d8a',
    farbeHell: '#ede9f8',
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 60%, #6b4db0 100%)',
    schulstufen: '9.–12. Schulstufe',
    fokus: 'Allgemeinbildung & Persönlichkeit',
    teaser: 'Finanzielle Selbstständigkeit, Konsumreflexion und Vorbereitung auf Studium, Beruf und eigenes Leben.',
    highlights: ['Budgetplanung', 'Konsumverhalten', 'Sparziele', 'Krypto-Mythen'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </svg>
    ),
  },
  {
    slug: 'hak',
    name: 'HAK & HAS',
    kurzname: 'HAK',
    farbe: '#4a2d8a',
    farbeHell: '#f3f1f9',
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 60%, #6b4db0 100%)',
    schulstufen: '9.–13. Schulstufe',
    fokus: 'Wirtschaft & persönliche Finanzen',
    teaser: 'Betriebswirtschaftliche Inhalte als persönliche Finanzbildung erleben, vom Lohnzettel bis zum Haushaltsbudget.',
    highlights: ['Lohnabrechnung', 'Haushaltsbudget', 'Investieren', 'Schuldenprävention'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2"/>
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        <line x1="12" y1="12" x2="12" y2="16"/>
        <line x1="10" y1="14" x2="14" y2="14"/>
      </svg>
    ),
  },
  {
    slug: 'htl',
    name: 'HTL',
    kurzname: 'HTL',
    farbe: '#0f766e',
    farbeHell: '#f0fdfa',
    gradient: 'linear-gradient(135deg, #134e4a 0%, #0f766e 60%, #14b8a6 100%)',
    schulstufen: '9.–13. Schulstufe',
    fokus: 'Technik & Berufseinstieg',
    teaser: 'Technische Karrierechancen finanziell klug nutzen, von der Gehaltsverhandlung bis zum Vermögensaufbau.',
    highlights: ['Gehaltsverhandlung', 'Sparen & Investieren', 'Digitale Finanztools', 'Versicherungen'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
  },
  {
    slug: 'hlw',
    name: 'HLW & Fachschulen',
    kurzname: 'HLW',
    farbe: '#15803d',
    farbeHell: '#f0fdf4',
    gradient: 'linear-gradient(135deg, #14532d 0%, #15803d 60%, #22c55e 100%)',
    schulstufen: '9.–13. Schulstufe',
    fokus: 'Alltag, Konsum & Lebensführung',
    teaser: 'Finanzbildung trifft Alltag: Konsum, Haushalt, nachhaltige Lebensführung und bewusste Geldentscheidungen.',
    highlights: ['Konsum & Haushalt', 'Nachhaltig wirtschaften', 'Schuldenfallen', 'Sparziele'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    slug: 'bafep',
    name: 'BAfEP & BASOP',
    kurzname: 'BAfEP',
    farbe: '#be185d',
    farbeHell: '#fdf2f8',
    gradient: 'linear-gradient(135deg, #831843 0%, #be185d 60%, #ec4899 100%)',
    schulstufen: '9.–13. Schulstufe',
    fokus: 'Pädagogik & Multiplikator:innen',
    teaser: 'Eigene Finanzkompetenz stärken und Finanzbildung als Multiplikator:innen weitertragen, in Schule, Familie und Beruf.',
    highlights: ['Geldbiografie', 'Konsumdruck', 'Pädagogische Methoden', 'Soziale Folgen'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    slug: 'pts',
    name: 'Polytechnische Schule',
    kurzname: 'PTS',
    farbe: '#b45309',
    farbeHell: '#fffbeb',
    gradient: 'linear-gradient(135deg, #78350f 0%, #b45309 60%, #f59e0b 100%)',
    schulstufen: '9. Schulstufe',
    fokus: 'Berufsorientierung & Übergang',
    teaser: 'An der Schwelle zwischen Schule und Beruf: erstes Einkommen verstehen, Konsumfallen erkennen, Ziele setzen.',
    highlights: ['Erstes Einkommen', 'Berufsorientierung', 'Konsumfallen', 'Sparziele'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    ),
  },
  {
    slug: 'berufsschule',
    name: 'Berufsschulen & Lehre',
    kurzname: 'Lehre',
    farbe: '#2A8A76',
    farbeHell: '#f0fdfa',
    gradient: 'linear-gradient(135deg, #134e4a 0%, #2A8A76 60%, #34d399 100%)',
    schulstufen: 'Lehre / 9.–12. Schulstufe',
    fokus: 'Reale Geldentscheidungen',
    teaser: 'Lehrlinge stehen mitten im Finanzleben. Skills-UP! begleitet sie beim Umgang mit Einkommen, Verträgen und echten Entscheidungen.',
    highlights: ['Lehrlingseinkommen', 'Ratenkauf', 'Notgroschen', 'Schuldenprävention'],
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
]

const schulstufen = [
  { stufe: '9. Schulstufe', themen: 'Orientierung, erstes eigenes Geld, Berufsentscheidung, Konsumverhalten' },
  { stufe: '10. Schulstufe', themen: 'Budget, Sparziele, Verträge, digitale Finanzentscheidungen' },
  { stufe: '11. Schulstufe', themen: 'Einkommen, Versicherungen, Investieren, Schuldenprävention' },
  { stufe: '12. Schulstufe', themen: 'Berufseinstieg, Studium, Selbstständigkeit, langfristige Finanzplanung' },
]

export default function SchulenUebersicht() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-0"
        style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 50%, #1a5c4e 100%)' }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.35) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] rounded-full animate-float-orb-reverse pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(42,138,118,0.3) 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center pb-20">
          <div className="inline-flex items-center gap-2 glass text-white/80 text-xs font-body font-700 px-4 py-2 rounded-full mb-8 border border-white/20">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
            <span>9. bis 12. Schulstufe · Österreich</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Finanzbildung für<br />
            <span className="text-primary-light">jede Schulform.</span>
          </h1>
          <p className="text-white/70 font-body text-xl max-w-2xl mx-auto mb-6 leading-relaxed">
            Skills-UP! unterstützt Schulen dabei, Jugendliche ab 15 Jahren auf reale Finanzentscheidungen vorzubereiten. Praxisnah, digital und sofort einsetzbar.
          </p>
          <p className="text-white/50 font-body text-base max-w-xl mx-auto mb-12">
            Ob AHS, HAK, HTL, HLW, BAfEP, BASOP, PTS oder Berufsschule, für jede Zielgruppe gibt es passende Inhalte.
          </p>

          {/* Quick jump chips */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {schultypen.map((s) => (
              <Link key={s.slug} href={`/schulen/${s.slug}`}
                className="glass border border-white/25 text-white/90 text-sm font-body font-600 px-4 py-2 rounded-full hover:bg-white/15 transition-all hover:scale-105">
                {s.kurzname}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" fill="#f8f9fa" />
          </svg>
        </div>
      </section>

      {/* Schultypen Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-3" style={{ color: '#6b4db0' }}>Zielgruppen</p>
            <h2 className="font-heading text-4xl font-bold mb-4" style={{ color: '#1a1040' }}>
              Wähle deinen Schultyp.
            </h2>
            <p className="font-body text-text-muted text-lg max-w-xl mx-auto">
              Jede Schulform hat eigene Schwerpunkte. Hier findest du, was Skills-UP! konkret für deine Schule bedeutet.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {schultypen.map((s) => (
              <Link key={s.slug} href={`/schulen/${s.slug}`}
                className="group bg-white rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col">
                {/* Top strip */}
                <div className="h-2 w-full" style={{ background: s.gradient }} />
                <div className="p-7 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                      style={{ background: s.gradient }}>
                      {s.icon}
                    </div>
                    <div>
                      <p className="font-heading font-700 text-lg leading-tight mb-0.5" style={{ color: '#1a1040' }}>{s.name}</p>
                      <p className="text-xs font-body font-600 uppercase tracking-wider" style={{ color: s.farbe }}>{s.schulstufen}</p>
                    </div>
                  </div>

                  <p className="font-body text-text-secondary text-sm leading-relaxed mb-5 flex-1">{s.teaser}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.highlights.map((h) => (
                      <span key={h} className="text-xs font-body font-600 px-3 py-1 rounded-full"
                        style={{ background: s.farbeHell, color: s.farbe }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-sm font-body font-700 group-hover:gap-3 transition-all"
                    style={{ color: s.farbe }}>
                    Mehr erfahren
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Schulstufen Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-3" style={{ color: '#2A8A76' }}>Jahrgangsstufen</p>
            <h2 className="font-heading text-3xl font-bold mb-4" style={{ color: '#1a1040' }}>
              Warum die 9. bis 12. Schulstufe entscheidend ist.
            </h2>
            <p className="font-body text-text-muted max-w-xl mx-auto">
              Ab etwa 15 Jahren verändert sich die Lebensrealität junger Menschen grundlegend. Sie treffen zunehmend eigene finanzielle Entscheidungen.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #4a2d8a, #2A8A76)' }} />
            <div className="space-y-8 pl-16">
              {schulstufen.map((s, i) => (
                <div key={s.stufe} className="relative">
                  <div className="absolute -left-10 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-heading font-700 shadow-md"
                    style={{ background: `linear-gradient(135deg, #4a2d8a, #2A8A76)`, left: '-2.5rem' }}>
                    {i + 9}
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5">
                    <p className="font-heading font-700 text-base mb-1" style={{ color: '#1a1040' }}>{s.stufe}</p>
                    <p className="font-body text-sm text-text-muted">{s.themen}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Für Lehrkräfte & Schulleitungen */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 50%, #1a5c4e 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
                title: 'Für Lehrkräfte',
                punkte: ['Fertige Module und Aufgaben', 'Interaktives Dashboard', 'Keine Vorbereitung nötig', 'Simulationen und Peer-Videos', 'Gamification inklusive'],
              },
              {
                icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
                title: 'Für Schulleitungen',
                punkte: ['Schulweites Rollout möglich', 'DSGVO-konform aus Österreich', 'Kein IT-Aufwand', 'Lehrplankonform integrierbar', 'Zertifikat für Schüler:innen'],
              },
            ].map((block) => (
              <div key={block.title} className="glass rounded-2xl p-8 border border-white/20">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
                  style={{ background: 'rgba(255,255,255,0.15)' }}>
                  {block.icon}
                </div>
                <h3 className="font-heading text-xl font-700 text-white mb-5">{block.title}</h3>
                <ul className="space-y-3">
                  {block.punkte.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-white/80 font-body text-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/#kontakt"
              className="inline-flex items-center gap-2 font-body font-700 text-base px-8 py-4 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2a8a76)', boxShadow: '0 8px 32px rgba(107,77,176,0.4)' }}>
              Jetzt Kontakt aufnehmen
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
