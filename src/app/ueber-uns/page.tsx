import type { Metadata } from 'next'
import Image from 'next/image'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über uns | Skills-UP! – Finanzbildung für Schulen',
  description: 'Skills-UP! erreicht heute über 1.200 Schüler:innen in österreichischen Schulen. Lern das Team, die Geschichte und die didaktischen Prinzipien hinter dem Bildungsprogramm kennen.',
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
    logo: '/fotos/logo-finanzbildungsstrategie.png',
    logoAlt: 'Nationale Finanzbildungsstrategie',
    badge: 'Offiziell anerkannt',
    titel: 'Nationale Finanzbildungsstrategie',
    beschreibung: 'Skills-UP! ist Teil der Nationalen Finanzbildungsstrategie der österreichischen Bundesregierung. Koordiniert wird sie durch das Bundesministerium für Finanzen.',
    accent: '#2A8A76',
    bg: '#e6f4f1',
  },
  {
    logo: '/fotos/logo-guetesiegel.png',
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
        <div className="relative z-10 max-w-5xl mx-auto px-6 pb-16 pt-28 md:pt-40">
          {/* Award badge */}
          <div className="inline-flex items-center gap-2 glass text-white/90 text-xs font-body font-700 px-4 py-2 rounded-full mb-6 border border-white/20">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#fde68a" stroke="#fde68a" strokeWidth="1">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
            </svg>
            Top-3 MEGA Bildungsmillion 2025
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Wir machen Jugendliche<br />
            <span className="text-primary-light">fit fürs echte Leben.</span>
          </h1>
          <p className="text-white/75 font-body text-xl max-w-2xl leading-relaxed">
            Skills-UP! erreicht heute Schüler:innen in mehreren Schulen österreichweit — und wächst. Gegründet 2021, ausgezeichnet 2025.
          </p>
        </div>

        {/* Wave */}
        <div className="relative z-10">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ── Meilensteine / Stats ────────────────────────── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                zahl: '1.200+',
                label: 'Schüler:innen',
                sub: 'Aktiv mit Skills-UP! lernend',
                color: '#4a2d8a', bg: '#f3f1f9',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
              {
                zahl: '9+',
                label: 'Schulen & Partner',
                sub: 'In mehreren Bundesländern aktiv',
                color: '#2a8a76', bg: '#e6f4f1',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
              },
              {
                zahl: '12+',
                label: 'Lernmodule',
                sub: 'Lehrplankonform, sofort einsetzbar',
                color: '#D87228', bg: '#fdf0e6',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>,
              },
              {
                zahl: '↑ 3×',
                label: 'Wachstum',
                sub: 'Seit Launch 2021 — Tendenz steigend',
                color: '#6b4db0', bg: '#ede9f7',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
              },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-6 flex flex-col gap-3" style={{ background: s.bg }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-white"
                  style={{ background: s.color }}>
                  {s.icon}
                </div>
                <div>
                  <p className="font-heading text-3xl font-bold leading-none mb-1" style={{ color: s.color }}>{s.zahl}</p>
                  <p className="font-heading font-700 text-sm text-text-primary leading-tight">{s.label}</p>
                  <p className="font-body text-xs text-text-muted mt-1 leading-snug">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs font-body text-text-muted mt-6">
            Schüler:innen-Zahlen und Schulen werden laufend aktualisiert — aktueller Stand auf Anfrage.
          </p>
        </div>
      </section>

      {/* ── Was uns antreibt (das Warum) ────────────────── */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              Was uns antreibt
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6" style={{ color: '#1a1040' }}>
              Die Idee entstand im Lockdown.
            </h2>
            <p className="text-text-muted font-body text-lg leading-relaxed mb-4">
              Marina Winkler unterrichtete über Teach for Austria und erlebte hautnah, wie wenig Jugendliche über Finanzen wussten. Nicht aus Desinteresse, sondern weil es niemand je erklärt hatte.
            </p>
            <p className="text-text-muted font-body text-lg leading-relaxed mb-4">
              Gleichzeitig sah sie, wie überlastet Lehrkräfte waren. Kein Vorbereitungsaufwand, kein passendes Material, keine Zeit. Das Problem war systemisch.
            </p>
            <p className="text-text-muted font-body text-lg leading-relaxed">
              Zusammen mit Stefan Bauer entstand die Idee für <strong className="text-primary-dark">Skills-UP!</strong>: Ein Programm, das an jeder österreichischen Schule funktioniert. Ohne Mehraufwand für Lehrkräfte, mit Inhalten, die wirklich ankommen.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl blur-3xl scale-110 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(107,77,176,0.15) 0%, transparent 70%)' }} />
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <Image
                src="/fotos/Marina%20Winkler%20Profilbild.jpeg"
                alt="Marina Winkler – Gründerin Skills-UP!"
                width={560}
                height={420}
                className="w-full object-cover"
                style={{ objectPosition: 'center 20%', height: '420px' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6"
                style={{ background: 'linear-gradient(to top, rgba(26,16,64,0.85) 0%, transparent 100%)' }}>
                <p className="font-heading font-700 text-white text-base">Marina Winkler</p>
                <p className="font-body text-white/70 text-sm">Obfrau & Gründerin, Skills-UP!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Unsere Werte ────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Didaktische Prinzipien
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" style={{ color: '#1a1040' }}>
              So lernen Jugendliche wirklich.
            </h2>
            <p className="text-text-muted font-body text-lg max-w-xl mx-auto mt-4">
              Vier Grundsätze, die hinter jedem Modul, jeder Simulation und jeder Designentscheidung von Skills-UP! stehen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
                color: '#4a2d8a', bg: '#f3f1f9',
                title: 'Praxis statt Theorie',
                desc: 'Lohnzettel, Budget, Depot, Gehaltsverhandlung: Schüler:innen lernen durch echtes Erleben in Simulationen, nicht durch Definitionen.',
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                color: '#2a8a76', bg: '#e6f4f1',
                title: 'Lehrkräfte entlasten',
                desc: 'Fertige Module ohne Vorbereitungsaufwand und ein Dashboard, das Korrekturarbeit abnimmt. Mehr Zeit für das, was zählt.',
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
                color: '#D87228', bg: '#fdf0e6',
                title: 'Österreichischer Kontext',
                desc: 'FinanzOnline, Kollektivvertrag, FMA, KSV: wir erklären das österreichische Finanzsystem mit echten Beispielen aus dem Leben.',
              },
              {
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
                color: '#6b4db0', bg: '#ede9f7',
                title: 'Ehrlichkeit statt Hype',
                desc: 'Krypto, schnelle Gewinne, Finfluencer: wir vermitteln einen realistischen, kritischen Blick statt leerer Versprechen.',
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110"
                  style={{ background: v.color }}>
                  {v.icon}
                </div>
                <h3 className="font-heading font-700 text-base mb-2" style={{ color: v.color }}>{v.title}</h3>
                <p className="text-sm font-body text-text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Auszeichnungen & Zertifizierungen ───────────── */}
      <section className="py-14 md:py-24 bg-white border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              Auszeichnungen & Zertifizierungen
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
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
                <div className="h-24 flex items-center w-full">
                  <Image
                    src={a.logo}
                    alt={a.logoAlt}
                    width={260}
                    height={96}
                    className="max-h-24 w-auto object-contain"
                    style={{ maxWidth: '260px' }}
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
      <section className="py-14 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-status-teal bg-status-teal-light px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              Geschichte
            </div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
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
              className="w-full h-auto hidden md:block"
              style={{ display: 'block' }}
            />
            <div className="md:hidden p-6 space-y-4 bg-white">
              <p className="font-heading font-700 text-base" style={{ color: '#1a1040' }}>Unsere Geschichte auf einen Blick</p>
              <ul className="space-y-3 font-body text-sm text-text-muted">
                <li className="flex gap-3"><span className="font-700 text-primary-medium shrink-0">2021</span>Idee und Vereinsgründung während des Lockdowns</li>
                <li className="flex gap-3"><span className="font-700 text-primary-medium shrink-0">2022</span>Entwicklung der ersten Lernmodule</li>
                <li className="flex gap-3"><span className="font-700 text-primary-medium shrink-0">2023</span>Pilotprogramme an österreichischen Schulen</li>
                <li className="flex gap-3"><span className="font-700 text-primary-medium shrink-0">2024</span>Top-3 MEGA Bildungsmillion, WKÖ-Zertifizierung</li>
                <li className="flex gap-3"><span className="font-700 text-primary-medium shrink-0">2025</span>Hochschule Burgenland Kooperation &amp; bundesweiter Rollout</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">Das Team</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" style={{ color: '#1a1040' }}>
              Aus der Praxis. Für die Praxis.<br />
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
                <p className="text-xs font-body text-primary-medium font-700 mb-3">Obfrau, Pädagogische Leitung &amp; Finanzbildungsexpertin</p>
                <p className="text-sm font-body text-text-muted leading-relaxed">
                  Bildungsexpertin mit Fokus auf Finanzkompetenz, digitalem Lernen und Chancengerechtigkeit. 15 Jahre Erfahrung, von der Bank über internationale Programme bis zum selbst entwickelten Lernprogramm für Jugendliche.
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
              Wir richten uns nach Ihrem Schuljahr. Schicken Sie uns eine kurze Nachricht. Wir melden uns innerhalb von 24 Stunden.
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
