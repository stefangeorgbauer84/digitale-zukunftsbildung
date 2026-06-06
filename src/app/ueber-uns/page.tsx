import type { Metadata } from 'next'
import Image from 'next/image'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über uns | Skills-UP! – Finanzbildung für Schulen',
  description: 'Der Verein zur Entwicklung der digitalen Zukunftsbildung steht hinter Skills-UP! — dem Finanzbildungsprogramm für 15- bis 20-Jährige in österreichischen Schulen.',
}

const auszeichnungen = [
  {
    logo: '/fotos/MEGA%20Bildungsstiftung%20Logo.jpeg',
    logoAlt: 'MEGA Bildungsstiftung',
    badge: 'Top-3 Österreich',
    titel: 'MEGA Bildungsmillion 2025',
    beschreibung: 'Unter hunderten eingereichten Bildungsprojekten aus ganz Österreich zählt Skills-UP! zu den drei besten Projekten der MEGA Bildungsmillion 2025.',
    accent: '#6b4db0',
    bg: '#f3f1f9',
  },
  {
    logo: '/fotos/Logo%20Nationale%20Finanzbildungsstrategie.png',
    logoAlt: 'Nationale Finanzbildungsstrategie',
    badge: 'Offiziell anerkannt',
    titel: 'Nationale Finanzbildungsstrategie',
    beschreibung: 'Skills-UP! ist Teil der Nationalen Finanzbildungsstrategie der österreichischen Bundesregierung — koordiniert durch das Bundesministerium für Finanzen.',
    accent: '#2A8A76',
    bg: '#e6f4f1',
  },
  {
    logo: '/fotos/Logo%20G%C3%BCtesiegel%20Lernapps.png',
    logoAlt: 'Gütesiegel Lern-Apps',
    badge: 'Qualitätszertifiziert',
    titel: 'Gütesiegel Qualitäts-Lern-Apps',
    beschreibung: 'Skills-UP! trägt das offizielle Gütesiegel für Qualitäts-Lern-Apps. Geprüft nach pädagogischen, didaktischen und technischen Qualitätskriterien.',
    accent: '#4a2d8a',
    bg: '#f3f1f9',
  },
  {
    logo: '/fotos/Logo%20Wko%20Wirtschaftskammer.png',
    logoAlt: 'WKÖ Wirtschaftskammer',
    badge: 'Zertifiziert',
    titel: 'WKÖ zertifiziert',
    beschreibung: 'Die Wirtschaftskammer Österreich bestätigt die inhaltliche Qualität und Praxisrelevanz von Skills-UP! für den Einsatz an österreichischen Schulen.',
    accent: '#D87228',
    bg: '#fdf0e6',
  },
  {
    logo: '/fotos/Logo%20Hochschule%20Burgenland.jpg',
    logoAlt: 'Hochschule Burgenland',
    badge: 'Wissenschaftlich begleitet',
    titel: 'Hochschule Burgenland',
    beschreibung: 'Die Hochschule Burgenland begleitet Skills-UP! wissenschaftlich und bestätigt den pädagogischen Ansatz und die Wirksamkeit des Programms.',
    accent: '#1a5c4e',
    bg: '#e6f4f1',
  },
]

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteNav />

      {/* ── Hero mit MEGA Award Foto ─────────────────────── */}
      <section className="relative overflow-hidden min-h-[75vh] flex flex-col justify-end">
        {/* Hintergrundfoto */}
        <div className="absolute inset-0">
          <Image
            src="/fotos/Top%203%20MEGA%20Bildungsstiftung.jpg"
            alt="Skills-UP! Top-3 MEGA Bildungsmillion 2025"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(26,16,64,0.35) 0%, rgba(26,16,64,0.55) 50%, rgba(26,16,64,0.88) 100%)' }} />
        </div>

        {/* Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.25) 0%, transparent 70%)' }} />

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-40">
          {/* Award badge */}
          <div className="inline-flex items-center gap-2 glass text-white/90 text-xs font-body font-700 px-4 py-2 rounded-full mb-6 border border-white/20">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#fde68a" stroke="#fde68a" strokeWidth="1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Top-3 MEGA Bildungsmillion 2025
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Wir machen Jugendliche<br />
            <span className="text-primary-light">fit fürs echte Leben.</span>
          </h1>
          <p className="text-white/75 font-body text-xl max-w-2xl leading-relaxed">
            Der Verein zur Entwicklung der digitalen Zukunftsbildung steht hinter Skills-UP! — dem Finanzbildungsprogramm für Österreichs Schulen.
          </p>
        </div>

        {/* Wave */}
        <div className="relative z-10">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Mission & Werte ──────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Unsere Mission
            </div>
            <h2 className="font-heading text-3xl font-bold mb-5" style={{ color: '#1a1040' }}>
              Finanzbildung gehört in die Schule.
            </h2>
            <p className="text-text-muted font-body text-lg leading-relaxed mb-4">
              Jugendliche treffen ab etwa 15 ihre ersten echten Geldentscheidungen: erstes Einkommen, Onlinekäufe, Verträge, Sparziele. Doch wie man mit Geld umgeht, lernt kaum jemand systematisch.
            </p>
            <p className="text-text-muted font-body text-lg leading-relaxed">
              Genau hier setzt unser Verein an: Mit dem Unterrichtsprogramm <strong className="text-primary-dark">Skills-UP!</strong> bringen wir Finanzbildung praxisnah, digital und lehrplankonform in österreichische Klassenzimmer — von der AHS bis zur Berufsschule.
            </p>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-status-teal bg-status-teal-light px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Unsere Werte
            </div>
            <h2 className="font-heading text-3xl font-bold mb-5" style={{ color: '#1a1040' }}>
              Was uns antreibt.
            </h2>
            <ul className="space-y-4">
              {[
                { title: 'Praxis statt Theorie', desc: 'Lohnzettel, Budget, Depot, Gehaltsverhandlung — Schüler:innen lernen durch echtes Erleben in Simulationen.' },
                { title: 'Lehrkräfte entlasten', desc: 'Fertige Module ohne Vorbereitungsaufwand und ein Dashboard, das Korrekturarbeit abnimmt.' },
                { title: 'Österreichischer Kontext', desc: 'FinanzOnline, Kollektivvertrag, FMA, KSV — wir erklären das österreichische Finanzsystem, nicht abstrakte Theorie.' },
                { title: 'Ehrlichkeit statt Hype', desc: 'Krypto, schnelle Gewinne, Finfluencer — wir vermitteln einen realistischen, kritischen Blick statt leerer Versprechen.' },
              ].map((v) => (
                <li key={v.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                  <div className="w-8 h-8 bg-primary-50 rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6b4db0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <div>
                    <p className="font-heading font-700 text-sm text-text-primary">{v.title}</p>
                    <p className="text-sm font-body text-text-muted mt-0.5">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Auszeichnungen & Zertifizierungen ───────────── */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Auszeichnungen & Zertifizierungen
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
              Ausgezeichnet.<br />
              <span style={{ color: '#4a2d8a' }}>Von unabhängigen Stellen bestätigt.</span>
            </h2>
            <p className="text-text-muted font-body text-lg max-w-2xl mx-auto">
              Skills-UP! wurde von österreichischen Bildungsinstitutionen, Bundesministerien und unabhängigen Qualitätsstellen geprüft und ausgezeichnet.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {auszeichnungen.map((a) => (
              <div key={a.titel} className="rounded-3xl p-7 border border-gray-100 hover:shadow-card-hover transition-all flex flex-col gap-5"
                style={{ background: a.bg }}>
                {/* Logo */}
                <div className="h-16 flex items-center">
                  <Image
                    src={a.logo}
                    alt={a.logoAlt}
                    width={160}
                    height={64}
                    className="max-h-14 w-auto object-contain"
                    style={{ maxWidth: '160px' }}
                  />
                </div>
                {/* Badge */}
                <div>
                  <span className="inline-block text-xs font-body font-700 px-3 py-1 rounded-full mb-3"
                    style={{ background: a.accent, color: '#fff' }}>
                    {a.badge}
                  </span>
                  <h3 className="font-heading font-700 text-base leading-tight mb-2" style={{ color: '#1a1040' }}>
                    {a.titel}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {a.beschreibung}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline / Geschichte ────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-status-teal bg-status-teal-light px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Geschichte
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
              Wie alles begann.
            </h2>
            <p className="text-text-muted font-body text-lg max-w-xl mx-auto">
              Von der ersten Idee bis zum ausgezeichneten Unterrichtsprogramm für ganz Österreich.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-card-hover border border-gray-100">
            <Image
              src="/fotos/Wichtig%20Timeline%20Geschichte%20Verein.png"
              alt="Timeline Geschichte Skills-UP! Verein"
              width={1600}
              height={800}
              className="w-full h-auto"
              style={{ display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">Das Team</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" style={{ color: '#1a1040' }}>
              Gegründet von einer Lehrerin und einem Finanzexperten.<br />
              <span style={{ color: '#4a2d8a' }}>Entwickelt für den Schulalltag.</span>
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
              <div className="h-64 overflow-hidden">
                <Image src="/fotos/Marina%20Winkler%20Profilbild.jpeg" alt="Marina Winkler"
                  width={400} height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 20%' }} />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-700 text-base text-text-primary mb-1">Marina Winkler</h3>
                <p className="text-xs font-body text-primary-medium font-700 mb-3">Vereinsleiterin und pädagogische Leiterin</p>
                <p className="text-sm font-body text-text-muted leading-relaxed">
                  Ehemalige Lehrerin mit jahrelanger Erfahrung im österreichischen Schulsystem. Projektleiterin und Hauptansprechperson des Vereins.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
              <div className="h-64 overflow-hidden">
                <Image src="/fotos/stefan-bauer-alt.jpg" alt="Dr. Stefan Bauer"
                  width={400} height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 20%' }} />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-700 text-base text-text-primary mb-1">Dr. Stefan Bauer</h3>
                <p className="text-xs font-body text-primary-medium font-700 mb-3">Vorstand & Finanzbildung</p>
                <p className="text-sm font-body text-text-muted leading-relaxed">
                  Mitglied des Vereinsvorstands. Verbindet wirtschaftliche Expertise mit der Mission, jungen Menschen echte Finanzkompetenz zu vermitteln.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 50%, #2a8a76 100%)' }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Skills-UP! an Ihre Schule bringen?
            </h2>
            <p className="text-white/70 font-body text-lg mb-8">
              Wir richten uns nach Ihrem Schuljahr. Schicken Sie uns eine kurze Nachricht — wir melden uns innerhalb von 24 Stunden.
            </p>
            <p className="text-white/40 text-xs font-body mb-6">Skills-UP! wird vom gemeinnützigen Verein zur Entwicklung der digitalen Zukunftsbildung betrieben. Sitz in Wien.</p>
            <Link href="/#kontakt"
              className="inline-flex items-center gap-2 bg-white text-primary-dark font-body font-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
              Gespräch anfragen
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
