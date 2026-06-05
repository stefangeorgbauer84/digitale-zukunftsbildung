import Image from 'next/image'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import ContactForm from '@/components/ContactForm'
import BackToTop from '@/components/BackToTop'
import FaqAccordion from '@/components/FaqAccordion'

/* ── Partner / Award logos ─────────────────────────────── */
const partnerLogos = [
  { src: '/fotos/Logo%20Hochschule%20Burgenland.jpg', alt: 'Hochschule Burgenland' },
  { src: '/fotos/Logo%20Wko%20Wirtschaftskammer.png', alt: 'WKÖ Wirtschaftskammer' },
  { src: '/fotos/MEGA%20Bildungsstiftung%20Logo.jpeg', alt: 'MEGA Bildungsstiftung' },
  { src: '/fotos/Logo%20Nationale%20Finanzbildungsstrategie.png', alt: 'Nationale Finanzbildungsstrategie' },
  { src: '/fotos/Logo%20G%C3%BCtesiegel%20Lernapps.png', alt: 'Gütesiegel Lern-Apps' },
  { src: '/fotos/Logo%20Ovos.jpeg', alt: 'Ovos' },
  { src: '/fotos/TGW%20Future%20Wings.png', alt: 'TGW Future Wings' },
  { src: '/fotos/TGW%20Logistics%20Logo.png', alt: 'TGW Logistics' },
  { src: '/fotos/Bildungsdirketion%20Burgenland.jpg', alt: 'Bildungsdirektion Burgenland' },
]

/* ── Program previews ───────────────────────────────────── */
const programPics = [
  { src: '/fotos/Einblick%20ins%20Programm%201.png', alt: 'Interaktive Gruppenübung im Skills-UP! Kurs' },
  { src: '/fotos/Einblick%20ins%20Programm%202.png', alt: 'Teilnehmerinnen beim digitalen Lernpfad' },
  { src: '/fotos/Einblick%20ins%20Programm%203.png', alt: 'KI-Simulation im Skills-UP! Workshop' },
  { src: '/fotos/Einblick%20ins%20Programm%204.png', alt: 'Gruppenarbeit zu digitalen Werkzeugen' },
  { src: '/fotos/Einblick%20ins%20Programm%205.png', alt: 'Präsentation im Skills-UP! Training' },
  { src: '/fotos/Workshops.png', alt: 'Skills-UP! Workshop für Schulen und Lehrkräfte' },
]

/* ── Programm-Bausteine ─────────────────────────────────── */
const angebote = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 100%)',
    title: '12+ Module Finanzwissen',
    tag: '15 oder 50 Min',
    zielgruppe: 'Kurz- & Langversion',
    maxPersonen: 'Lehrplankonform',
    foerderbar: true,
    text: 'Von Geldbiografie und Lohnabrechnung über Budgetplanung bis zu Schuldenprävention und Krypto-Mythen. Jedes Modul in zwei Längen — flexibel einsetzbar.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #1a5c4e 0%, #2a8a76 100%)',
    title: '10+ Praxissimulationen',
    tag: 'Das Herzstück',
    zielgruppe: 'Risikofrei & interaktiv',
    maxPersonen: 'Lernen durch Tun',
    foerderbar: true,
    text: 'Virtuelles Depot eröffnen, Kontoüberweisung, Budgetplanung, Gehaltsverhandlung, Ratenkauf-Falle, Scam erkennen, Krypto-Mythen, Versicherungen, Notgroschen-Aufbau. Echte österreichische Szenarien in geschützter Umgebung.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    gradient: 'linear-gradient(135deg, #92400e 0%, #d87228 100%)',
    title: 'Dashboard & Gamification',
    tag: 'Für Lehrkräfte',
    zielgruppe: 'Alle Klassen im Blick',
    maxPersonen: 'Punkte, Quizzes, Badges',
    foerderbar: true,
    text: 'Fortschritt, Noten und Deadlines aller Klassen auf einen Blick — ideal für Elterngespräche. Gamification hält Schüler:innen motiviert.',
  },
]

/* ── Trust facts ─────────────────────────────────────────── */
const trustFacts = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    accent: '#6b4db0',
    bg: '#f3f1f9',
    headline: 'Top-3 Österreich',
    detail: 'MEGA Bildungsmillion 2025 unter hunderten Einreichungen',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
    accent: '#2a8a76',
    bg: '#e6f4f1',
    headline: 'WKÖ zertifiziert',
    detail: 'Hochschule Burgenland bestätigt Qualität und Praxisrelevanz',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    accent: '#4a2d8a',
    bg: '#f3f1f9',
    headline: '15 bis 20 Jahre',
    detail: 'Für AHS, BHS (HAK, HTL, HLW, BAfEP, BASOP) und PTS konzipiert',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    accent: '#2A8A76',
    bg: '#e6f4f1',
    headline: 'DSGVO-konform',
    detail: 'Aus Österreich, für Österreich — keine Daten ins Ausland',
  },
]

/* ── How it works ───────────────────────────────────────── */
const steps = [
  { step: '01', title: 'Im Browser starten', desc: 'Kein IT-Aufwand, keine Installation. Skills-UP! läuft direkt im Browser, DSGVO-sicher und EU-rechtskonform. Schulweites Rollout in Minuten.', color: '#9b7ed4' },
  { step: '02', title: 'Erleben statt zuhören', desc: 'Schüler:innen durchlaufen Module und Praxissimulationen: Depot eröffnen, Gehalt verhandeln, Budget planen. Microlearning, Peer-Videos und Gamification halten die Motivation hoch.', color: '#2a8a76' },
  { step: '03', title: 'Fortschritt im Dashboard', desc: 'Lehrkräfte sehen Fortschritt, Noten und Deadlines aller Klassen auf einen Blick — ideal für Elterngespräche und ohne zusätzliche Korrekturarbeit.', color: '#D87228' },
]

export default function HomePage() {
  const platformFeatures = [
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>),
      gradient: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 100%)', bg: '#f3f1f9', accent: '#4a2d8a',
      title: 'Dual-Modus Lernen', badge: 'Flexibel',
      desc: 'Action-Modus (15 min) für unterwegs, Deep-Dive (50 min) für intensive Sessions. Jedes Modul in beiden Varianten verfügbar.',
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>),
      gradient: 'linear-gradient(135deg, #1a5c4e 0%, #2a8a76 100%)', bg: '#e6f4f1', accent: '#1a5c4e',
      title: 'Peer-Videos', badge: 'Jugendnah',
      desc: 'Gleichaltrige erklären Gleichaltrigen — authentisch und auf Augenhöhe. Das trifft die Lebenswelt der Schüler:innen besser als jeder Frontalvortrag.',
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>),
      gradient: 'linear-gradient(135deg, #1a5c4e 0%, #2a8a76 100%)', bg: '#e6f4f1', accent: '#1a5c4e',
      title: 'Microlearning', badge: 'Kurz & effektiv',
      desc: 'Kurze Lerneinheiten statt langer Vorträge. Jedes Thema in 15 Minuten erfassbar — perfekt für eine Unterrichtsstunde oder zwischendurch.',
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>),
      gradient: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 100%)', bg: '#f3f1f9', accent: '#4a2d8a',
      title: 'Gamification', badge: 'Motivierend',
      desc: 'Punkte, Quizzes und Badges halten die Motivation hoch — auch bei Schüler:innen, die sonst schwer zu erreichen sind. Lernen wird zum Wettbewerb.',
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>),
      gradient: 'linear-gradient(135deg, #b85e20 0%, #D87228 100%)', bg: '#fdf0e6', accent: '#D87228',
      title: 'Lehrer-Dashboard', badge: 'Für Lehrkräfte',
      desc: 'Fortschritt, Noten und Deadlines aller Klassen auf einen Blick. Ideal für Elterngespräche — und ohne zusätzliche Korrekturarbeit.',
    },
    {
      icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>),
      gradient: 'linear-gradient(135deg, #1a5c4e 0%, #2a8a76 100%)', bg: '#e6f4f1', accent: '#2a8a76',
      title: 'DSGVO-konform', badge: 'Datensicher',
      desc: 'Im Browser gestartet, keine Installation nötig. EU-rechtssicher und datenschutzkonform — kein IT-Aufwand für die Schule.',
    },
  ]

  const modulThemen = [
    { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>), color: '#4a2d8a', bg: '#f3f1f9', title: 'Persönlichkeitsbildung', subtitle: 'Finanzielle Glaubenssätze & Geldbiografie', topics: ['Finanzielle Glaubenssätze erkennen', 'Eigene Geldbiografie reflektieren', 'Persönliche Finanzziele definieren'] },
    { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>), color: '#6b4db0', bg: '#ede9f7', title: 'Basiswissen', subtitle: 'Alltagsbegriffe aus dem echten Leben', topics: ['Nettolohn berechnen & verstehen', 'Steuern & Sozialversicherung', 'Inflation und Lohnabrechnung'] },
    { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>), color: '#2a8a76', bg: '#e6f4f1', title: 'Praxis & Planung', subtitle: 'Persönliches Finanzmanagement', topics: ['Haushaltsbudget & Notgroschen', 'Virtuelles Depot eröffnen', 'Kurz- & langfristige Ziele setzen'] },
    { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>), color: '#D87228', bg: '#fdf0e6', title: 'Schutzwissen', subtitle: 'Schuldenprävention & Konsumkritik', topics: ['Ratenkauf & Buy-Now-Pay-Later', 'Krypto-Mythen, Scams & Impulskäufe', 'Schulden vermeiden durch Strategie'] },
    { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>), color: '#4a2d8a', bg: '#f3f1f9', title: 'Investieren & Vorsorge', subtitle: 'Aktien, ETFs & Altersvorsorge', topics: ['Aktien, ETFs & Zinseszins', 'Krypto realistisch einschätzen', 'Altersvorsorge & 3-Säulen-Modell'] },
    { icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>), color: '#2a8a76', bg: '#e6f4f1', title: 'Versicherungen & Risiko', subtitle: 'Pflicht, Krisenvorsorge & Prämien', topics: ['Pflicht- vs. freiwillige Versicherung', 'Notgroschen & Krisenvorsorge', 'Selbstbehalt und Prämien verstehen'] },
  ]

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteNav dark />
      <div id="main-content" />

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <header className="relative overflow-hidden min-h-screen flex flex-col">
        {/* Mesh gradient */}
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 25%, #6b4db0 55%, #1a5c4e 85%, #0d4036 100%)',
            backgroundSize: '200% 200%',
          }}
        />
        {/* Orbs */}
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.35) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[10%] left-[-8%] w-[500px] h-[500px] rounded-full animate-float-orb-reverse pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(42,138,118,0.3) 0%, transparent 70%)' }} />
        <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%)', animationDelay: '4s' }} />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto px-6 pt-28 pb-16 text-center">
          {/* Award badge */}
          <div className="inline-flex items-center gap-2 glass text-white/90 text-xs font-body font-700 px-4 py-2 rounded-full mb-8 border border-white/20">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#fde68a" stroke="#fde68a" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span>Top-3 MEGA Bildungsmillion 2025</span>
            <span className="w-px h-3 bg-white/30" />
            <span className="text-white/60">Hochschule Burgenland &amp; WKÖ zertifiziert</span>
          </div>

          {/* Maskottchen + Logo */}
          <div className="mb-6 flex flex-col items-center gap-3 relative">
            <div className="absolute inset-0 blur-3xl scale-125 pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.4) 0%, transparent 70%)' }} />
            <Image src="/capybara-mascot.png" alt="Skills-UP! Maskottchen" width={140} height={140}
              className="relative drop-shadow-2xl" priority />
            <Image src="/fotos/Logo.png" alt="Skills-UP! Digitale Zukunftsbildung" width={80} height={80}
              className="relative drop-shadow-xl rounded-2xl opacity-90" priority />
          </div>

          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Finanzbildung,<br />
            <span className="text-primary-light">die wirklich ankommt.</span>
          </h1>

          <p className="text-white/75 text-xl max-w-2xl mx-auto mb-4 font-body leading-relaxed">
            Das Unterrichtsprogramm für 15- bis 20-Jährige — mit 12+ Modulen, über 10 Praxissimulationen und Gamification. Für AHS, BHS (HAK, HTL, HLW, BAfEP, BASOP) und PTS.
          </p>
          <p className="text-white/50 text-base max-w-xl mx-auto mb-12 font-body">
            Fertig aufbereitet, lehrplankonform und sofort startbereit. Kein IT-Aufwand, DSGVO-sicher.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href="#angebote"
              className="inline-flex items-center justify-center gap-2 font-body font-700 text-lg px-8 py-4 rounded-xl shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 text-white"
              style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #6b4db0 50%, #2a8a76 100%)', boxShadow: '0 8px 32px rgba(107,77,176,0.5)' }}
            >
              Programm entdecken
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
            <a href="#kontakt"
              className="glass inline-flex items-center justify-center gap-2 text-white font-body font-600 text-lg px-8 py-4 rounded-xl hover:bg-white/15 transition-all duration-200 border border-white/20"
            >
              Schule anmelden
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/55 text-sm font-body">
            {[
              '12+ interaktive Module',
              '10+ Praxissimulationen',
              'Lehrplankonform',
              'DSGVO-konform aus Österreich',
            ].map((t) => (
              <div key={t} className="flex items-center gap-1.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="relative z-10 flex justify-center pb-6">
          <div className="animate-bounce-down flex flex-col items-center gap-1 text-white/40">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>

        {/* Wave */}
        <div className="relative z-10">
          <svg viewBox="0 0 1440 100" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#f8f9fa" />
                <stop offset="100%" stopColor="#f3f1f9" />
              </linearGradient>
            </defs>
            <path d="M0,50 C240,100 480,0 720,50 C960,100 1200,10 1440,50 L1440,100 L0,100 Z" fill="url(#waveGrad)" />
          </svg>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          TRUST FACTS
      ══════════════════════════════════════════════════ */}
      <section className="py-14 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {trustFacts.map((f) => (
              <div key={f.headline} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: f.bg }}>
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: f.accent, color: '#fff' }}>
                  {f.icon}
                </div>
                <div>
                  <p className="font-heading font-700 text-sm leading-tight mb-1" style={{ color: f.accent }}>{f.headline}</p>
                  <p className="text-xs font-body text-text-muted leading-snug">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTNER LOGO MARQUEE
      ══════════════════════════════════════════════════ */}
      <section id="partner" className="py-14 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-8 text-center">
          <p className="text-xs font-body font-700 uppercase tracking-widest text-text-muted">
            Unsere Partner &amp; Auszeichnungen
          </p>
        </div>
        <div className="relative marquee-track">
          <div className="flex animate-marquee gap-24 items-center">
            {[...partnerLogos, ...partnerLogos].map((logo, i) => (
              <div key={`${logo.alt}-${i}`} className="shrink-0 flex items-center justify-center h-28 px-6">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={240}
                  height={96}
                  className="partner-logo"
                  style={{ height: '96px', width: 'auto', objectFit: 'contain' }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          SCHULTYPEN ABSPRUNG
      ══════════════════════════════════════════════════ */}
      <section id="schulen" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-4 py-2 rounded-full mb-5"
              style={{ background: '#ede9f8', color: '#4a2d8a' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              9. bis 12. Schulstufe
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
              Finanzbildung für<br />
              <span style={{ color: '#4a2d8a' }}>jede Schulform.</span>
            </h2>
            <p className="font-body text-text-muted text-lg max-w-2xl mx-auto mb-4">
              Skills-UP! ist für Jugendliche ab 15 Jahren konzipiert und sofort einsetzbar — für AHS, HAK, HTL, HLW, BAfEP, BASOP, PTS und Berufsschulen.
            </p>
            <Link href="/schulen" className="inline-flex items-center gap-2 font-body font-700 text-sm px-5 py-2.5 rounded-xl transition-all hover:scale-105"
              style={{ background: '#4a2d8a', color: '#fff' }}>
              Alle Schultypen entdecken
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { slug: 'ahs', label: 'AHS-Oberstufe', sub: '9.–12. Schulstufe', farbe: '#4a2d8a', bg: '#ede9f8',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
              { slug: 'hak', label: 'HAK & HAS', sub: 'Wirtschaft & Finanzen', farbe: '#6b4db0', bg: '#ede9f7',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg> },
              { slug: 'htl', label: 'HTL', sub: 'Technik & Beruf', farbe: '#2a8a76', bg: '#e6f4f1',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M5.34 17.66l-1.41 1.41M2 12h2m16 0h2M5.34 6.34L3.93 4.93m14.14 14.14l-1.41-1.41M12 2v2m0 16v2"/></svg> },
              { slug: 'hlw', label: 'HLW & Fachschulen', sub: 'Alltag & Lebensführung', farbe: '#1a5c4e', bg: '#e6f4f1',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
              { slug: 'bafep', label: 'BAfEP & BASOP', sub: 'Pädagogik', farbe: '#4a2d8a', bg: '#f3f1f9',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg> },
              { slug: 'pts', label: 'PTS', sub: '9. Schulstufe', farbe: '#D87228', bg: '#fdf0e6',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg> },
              { slug: 'berufsschule', label: 'Berufsschulen', sub: 'Lehre & Ausbildung', farbe: '#2A8A76', bg: '#e6f4f1',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg> },
              { slug: null, label: 'Alle Schultypen', sub: 'Übersicht & Vergleich', farbe: '#ffffff', bg: 'linear-gradient(135deg, #4a2d8a, #2A8A76)',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg> },
            ].map((s) => (
              <Link key={s.slug ?? 'alle'} href={s.slug ? `/schulen/${s.slug}` : '/schulen'}
                className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card flex flex-col gap-3"
                style={{ background: s.slug ? s.bg : s.bg }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: s.slug ? s.farbe : 'rgba(255,255,255,0.25)', color: s.slug ? '#fff' : '#fff' }}>
                  {s.icon}
                </div>
                <div>
                  <p className="font-heading font-700 text-sm leading-tight mb-0.5"
                    style={{ color: s.slug ? '#1a1040' : '#fff' }}>{s.label}</p>
                  <p className="font-body text-xs"
                    style={{ color: s.slug ? s.farbe : 'rgba(255,255,255,0.7)' }}>{s.sub}</p>
                </div>
                <div className="flex items-center gap-1 text-xs font-body font-700 group-hover:gap-2 transition-all mt-auto"
                  style={{ color: s.slug ? s.farbe : 'rgba(255,255,255,0.9)' }}>
                  Mehr
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ANGEBOTE
      ══════════════════════════════════════════════════ */}
      <section id="angebote" className="py-28 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
            Das Skills-UP! Programm
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
            Drei Bausteine, die <span className="text-status-teal">wirken.</span>
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto font-body">
            Skills-UP! verbindet fundiertes Finanzwissen mit echtem Erleben — alles fertig aufbereitet, lehrplankonform und ohne Vorbereitungsaufwand für Lehrkräfte.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {angebote.map((a) => (
            <div key={a.title} className="card-gradient group flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110 text-white"
                  style={{ background: a.gradient }}>
                  {a.icon}
                </div>
                {a.foerderbar && (
                  <span className="text-xs font-body font-700 px-2 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100">
                    Sofort startbereit
                  </span>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-body font-700 bg-primary-50 text-primary-medium">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  {a.tag}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-body font-700 bg-gray-50 text-text-muted">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
                  {a.maxPersonen}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-2" style={{ color: '#1a1040' }}>{a.title}</h3>
              <p className="text-xs font-body text-primary-medium font-600 mb-3">{a.zielgruppe}</p>
              <p className="text-text-muted text-sm font-body leading-relaxed flex-1">{a.text}</p>
              <a href="#kontakt" className="mt-6 inline-flex items-center gap-1.5 text-sm font-body font-700 text-primary-medium hover:text-primary-dark transition-colors">
                Anfragen
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PLATFORM FEATURES
      ══════════════════════════════════════════════════ */}
      <section id="plattform" className="py-28" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              Was Skills-UP! einzigartig macht
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
              So funktioniert<br /><span className="text-primary-medium">das Programm.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-2xl mx-auto font-body">
              Skills-UP! kombiniert bewährte Didaktik mit moderner Lerntechnologie — Peer-Videos, Microlearning und Gamification, damit Finanzwissen wirklich hängen bleibt.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platformFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: f.gradient }}>
                    {f.icon}
                  </div>
                  <div>
                    <span className="inline-block text-xs font-body font-700 px-2 py-0.5 rounded-full mb-1" style={{ background: f.bg, color: f.accent }}>{f.badge}</span>
                    <h3 className="font-heading font-700 text-base" style={{ color: '#1a1040' }}>{f.title}</h3>
                  </div>
                </div>
                <p className="text-text-muted text-sm font-body leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          MODUL-THEMEN
      ══════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-status-teal bg-status-teal-light px-4 py-2 rounded-full mb-5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
            12+ Module für fundiertes Finanzwissen
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-5" style={{ color: '#1a1040' }}>
            Was Schüler:innen lernen.
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto font-body">
            Sechs Themenbereiche, aufgebaut auf dem, was junge Menschen ab 15 für echte Finanzentscheidungen wirklich brauchen.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modulThemen.map((m) => (
            <div key={m.title} className="rounded-2xl p-6 border border-gray-100 hover:shadow-card-hover transition-all group" style={{ background: m.bg }}>
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: m.color, color: '#fff' }}>
                  {m.icon}
                </div>
                <div>
                  <h3 className="font-heading font-700 text-base leading-tight" style={{ color: m.color }}>{m.title}</h3>
                  {'subtitle' in m && <p className="font-body text-xs text-text-muted mt-0.5">{(m as typeof m & { subtitle: string }).subtitle}</p>}
                </div>
              </div>
              <ul className="space-y-2">
                {m.topics.map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm font-body text-text-secondary">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={m.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          WAS DU DANACH KANNST
      ══════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #0f3d2d 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-white/50 text-xs font-body font-700 uppercase tracking-widest mb-4">Lernziele</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Was Schüler:innen danach<br /><span className="text-primary-light">wirklich können.</span>
              </h2>
              <p className="text-white/60 font-body text-lg mb-8 leading-relaxed">
                Finanzbildung, die nicht im Klassenzimmer bleibt — sondern bei der ersten Lohnabrechnung, beim ersten Onlinekauf und beim ersten Sparziel ankommt.
              </p>
              <div className="relative">
                <div className="absolute inset-0 blur-3xl scale-110 pointer-events-none"
                  style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.3) 0%, transparent 70%)' }} />
                <Image src="/capybara-mascot.png" alt="Skills-UP! Maskottchen" width={180} height={180}
                  className="relative drop-shadow-2xl" />
              </div>
            </div>
            <ul className="space-y-4">
              {[
                { text: 'Den eigenen Lohnzettel lesen und Brutto-Netto verstehen', color: '#9b7ed4' },
                { text: 'Ein realistisches Haushaltsbudget erstellen und einhalten', color: '#2a8a76' },
                { text: 'Ratenkauf, BNPL und Konsumfallen kritisch durchschauen', color: '#D87228' },
                { text: 'Krypto-Mythen und Scams als solche erkennen', color: '#4a2d8a' },
                { text: 'Ein erstes Sparziel setzen und einen Notgroschen aufbauen', color: '#6b4db0' },
                { text: 'Versicherungen einschätzen und Schuldenfallen vermeiden', color: '#1a5c4e' },
              ].map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: item.color + '25' }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  </span>
                  <span className="text-white/75 font-body text-sm leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PROGRAMM EINBLICK (Photo Gallery)
      ══════════════════════════════════════════════════ */}
      <section className="py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <div className="text-center">
            <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">Live-Einblick</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" style={{ color: '#1a1040' }}>
              So sehen unsere Kurse aus.
            </h2>
          </div>
        </div>
        <div className="relative">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide px-6 pb-4">
          {programPics.map((pic) => (
            <div key={pic.src} className="shrink-0 w-72 h-48 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow">
              <Image src={pic.src} alt={pic.alt} width={288} height={192} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:hidden"
            style={{ background: 'linear-gradient(to left, rgba(243,241,249,0.9) 0%, transparent 100%)' }}>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-primary-medium text-xs font-body font-600 flex items-center gap-1">
              <span>mehr</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          HOW IT WORKS — dark section
      ══════════════════════════════════════════════════ */}
      <section className="py-28" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 50%, #1a3d34 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-white/50 border border-white/15 px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              So funktioniert Skills-UP!
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5">
              In 3 Schritten zur<br /><span className="text-primary-light">echten Kompetenz.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-primary-medium/40 via-status-teal/40 to-transparent" />
            {steps.map((s) => (
              <div key={s.step} className="glass-dark rounded-2xl p-8 text-center group">
                <div className="font-heading text-5xl font-bold mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: s.color }}>
                  {s.step}
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-3">{s.title}</h3>
                <p className="text-white/60 text-sm font-body leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          AWARD HIGHLIGHT
      ══════════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-status-teal bg-status-teal-light px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>
              Ausgezeichnet
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-5" style={{ color: '#1a1040' }}>
              Top-3 Projekt der<br />MEGA Bildungsmillion 2025.
            </h2>
            <p className="text-text-muted font-body text-lg leading-relaxed mb-6">
              Skills-UP! wurde unter hunderten Einreichungen als eines der besten Bildungsprojekte Österreichs ausgezeichnet. Das bestätigt: Unser Ansatz funktioniert.
            </p>
            <div className="flex flex-wrap gap-3">
              {['WKÖ zertifiziert', 'Hochschule Burgenland', 'DSGVO-konform', 'Made in Austria'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-xs font-body font-700 bg-primary-50 text-primary-dark">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/fotos/Top%203%20MEGA%20Bildungsstiftung.jpg"
              alt="Top-3 MEGA Bildungsstiftung Award"
              width={600}
              height={288}
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ZIELGRUPPEN
      ══════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Für wen ist Skills-UP!?
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold" style={{ color: '#1a1040' }}>
            Maßgeschneidert für jede Zielgruppe.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              emoji: '👩‍🏫',
              title: 'Lehrkräfte',
              color: '#4a2d8a', bg: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 100%)',
              points: [
                'Fertige Module, Aufgaben und Übungsblätter',
                'Kein Vorbereitungsaufwand, sofort startbereit',
                'Dashboard mit Fortschritt aller Klassen',
                'Lehrplankonform für Wirtschaft, Recht, Mathematik',
              ],
              cta: 'Als Lehrkraft anfragen',
            },
            {
              emoji: '🧑‍🎓',
              title: 'Schüler:innen',
              color: '#1a5c4e', bg: 'linear-gradient(135deg, #1a5c4e 0%, #2a8a76 100%)',
              points: [
                'Über 10 Praxissimulationen aus dem echten Leben',
                'Peer-Videos auf Augenhöhe, jugendnah',
                'Gamification mit Punkten, Quizzes und Badges',
                'Finanzwissen, das im Alltag wirklich ankommt',
              ],
              cta: 'Mehr für Schüler:innen',
            },
            {
              emoji: '🏫',
              title: 'Schulleitung',
              color: '#D87228', bg: 'linear-gradient(135deg, #b85e20 0%, #D87228 100%)',
              points: [
                'Schulweites Rollout in Minuten',
                'Kein IT-Aufwand, im Browser gestartet',
                'DSGVO-konform und EU-rechtssicher',
                'Für AHS, BHS (HAK, HTL, HLW, BAfEP, BASOP) & PTS',
              ],
              cta: 'Für die Schule anfragen',
            },
          ].map((z) => (
            <div key={z.title} className="rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
              <div className="px-8 pt-8 pb-6 text-white" style={{ background: z.bg }}>
                <div className="text-4xl mb-3">{z.emoji}</div>
                <h3 className="font-heading text-xl font-bold leading-tight">{z.title}</h3>
              </div>
              <div className="bg-white px-8 py-6">
                <ul className="space-y-3 mb-6">
                  {z.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm font-body text-text-secondary">
                      <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={z.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      {p}
                    </li>
                  ))}
                </ul>
                <a href="#kontakt" className="inline-flex items-center gap-1.5 text-sm font-body font-700 transition-colors hover:opacity-80" style={{ color: z.color }}>
                  {z.cta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FÖRDERUNG
      ══════════════════════════════════════════════════ */}
      <section className="py-16" style={{ background: 'linear-gradient(135deg, #f0fdf4 0%, #e6f4f1 100%)' }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #065f46 0%, #059669 100%)' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-heading text-xl font-bold mb-2" style={{ color: '#1a5c4e' }}>Gefördert durch starke Partner</h3>
              <p className="text-text-muted font-body text-sm leading-relaxed">
                Skills-UP! wird von der <strong>MEGA Bildungsstiftung</strong> und im Rahmen der <strong>Nationalen Finanzbildungsstrategie</strong> unterstützt.
                Sprecht uns an — wir finden gemeinsam ein leistbares Modell für eure Schule.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 justify-center md:justify-end shrink-0">
              {['MEGA Bildungsstiftung', 'Finanzbildungsstrategie', 'Für Schulen leistbar'].map((f) => (
                <span key={f} className="px-3 py-1.5 rounded-full text-xs font-body font-700 bg-emerald-50 text-emerald-700 border border-emerald-100">{f}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          TESTIMONIALS
      ══════════════════════════════════════════════════ */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-status-teal bg-status-teal-light px-4 py-2 rounded-full mb-5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            Was Teilnehmerinnen sagen
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold" style={{ color: '#1a1040' }}>
            Echtes Feedback. Keine Hochglanzbroschüre.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: 'Aufgrund von Skills-UP! hab ich es endlich geschafft, für den Führerschein zu sparen. Zum ersten Mal hab ich verstanden, wo mein Geld eigentlich hingeht.',
              name: 'Lisa M.',
              role: 'Schülerin, 17 Jahre',
              initials: 'LM',
              color: '#4a2d8a',
            },
            {
              quote: 'Endlich Material, das ich ohne Vorbereitung sofort einsetzen kann. Die Simulationen nehmen mir die Erklärarbeit ab — und im Dashboard sehe ich auf einen Blick, wo meine Klasse steht.',
              name: 'Mag. Eva R.',
              role: 'Lehrerin, BHS Burgenland',
              initials: 'ER',
              color: '#2a8a76',
            },
            {
              quote: 'Die Gehaltsverhandlungs-Simulation war ein Augenöffner. Meine Schüler:innen reden jetzt über Kollektivvertrag und Nettolohn — Themen, die vorher kein Thema waren.',
              name: 'Mag. Thomas K.',
              role: 'Lehrer, HAK Linz',
              initials: 'TK',
              color: '#4a2d8a',
            },
          ].map((t) => (
            <div key={t.name} className="bg-white rounded-2xl p-7 shadow-card border border-gray-100 flex flex-col">
              <svg className="mb-4" width="28" height="20" viewBox="0 0 28 20" fill={t.color} opacity="0.2">
                <path d="M0 20V12C0 5.373 3.82 1.507 11.46 0l1.54 2.4C9.547 3.227 7.667 5.053 7 8h5V20H0zm16 0V12C16 5.373 19.82 1.507 27.46 0L29 2.4C25.547 3.227 23.667 5.053 23 8h5V20H16z"/>
              </svg>
              <p className="text-text-secondary font-body text-sm leading-relaxed flex-1 italic">{t.quote}</p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-gray-100">
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-body font-700 shrink-0"
                  style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="font-heading font-700 text-sm text-text-primary">{t.name}</p>
                  <p className="text-xs font-body text-text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          FAQ
      ══════════════════════════════════════════════════ */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-white px-4 py-2 rounded-full mb-5 shadow-sm">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Häufige Fragen
            </div>
            <h2 className="font-heading text-4xl font-bold" style={{ color: '#1a1040' }}>
              Du hast Fragen. Wir haben Antworten.
            </h2>
          </div>
          <FaqAccordion />
          <p className="text-center text-sm font-body text-text-muted mt-8">
            Weitere Fragen?{' '}
            <a href="#kontakt" className="text-primary-medium font-600 hover:text-primary-dark transition-colors">
              Schreib uns direkt.
            </a>
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          ÜBER UNS TEASER — with team photo
      ══════════════════════════════════════════════════ */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-14 shadow-card grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">Das Team</p>
              <h2 className="font-heading text-3xl font-bold mb-5" style={{ color: '#1a1040' }}>
                Menschen hinter Skills-UP!
              </h2>
              <p className="text-text-muted font-body text-lg leading-relaxed mb-6">
                Unser Team kommt aus der Praxis — aus Bildung, Wirtschaft und Finanzpädagogik. Wir wissen, was Jugendliche für echte Finanzentscheidungen brauchen, und was Lehrkräften den Alltag erleichtert.
              </p>
              <Link href="/ueber-uns"
                className="inline-flex items-center gap-2 text-sm font-body font-700 text-primary-dark hover:text-primary-medium transition-colors">
                Das gesamte Team kennenlernen
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/fotos/Marina%20Winkler%20Profilbild.jpeg"
                alt="Marina Winkler – Skills-UP! Team"
                width={600}
                height={288}
                className="w-full h-72 object-cover"
                style={{ objectPosition: 'center 20%' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          PARTNER GRID — full detail
      ══════════════════════════════════════════════════ */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">Netzwerk</p>
          <h2 className="font-heading text-3xl font-bold" style={{ color: '#1a1040' }}>Starke Partner an unserer Seite.</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {partnerLogos.map((logo) => (
            <div key={logo.alt} className="bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all flex items-center justify-center h-40 group">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={220}
                height={100}
                className="partner-logo"
                style={{ maxHeight: '100px', width: 'auto', objectFit: 'contain' }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CTA + CONTACT
      ══════════════════════════════════════════════════ */}
      <section id="kontakt" className="py-28 relative overflow-hidden">
        <div className="absolute inset-0 animate-gradient-shift"
          style={{ background: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 45%, #2a8a76 100%)', backgroundSize: '200% 200%' }} />
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.07) 0%, transparent 70%)' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(42,138,118,0.3) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-6">
              <Image src="/capybara-mascot.png" alt="Skills-UP! Maskottchen" width={100} height={100}
                className="drop-shadow-2xl" />
            </div>
            <p className="text-white/60 text-xs font-body font-700 uppercase tracking-widest mb-4">Kontakt</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Bereit für den<br />nächsten Schritt?
            </h2>
            <p className="text-white/70 font-body text-lg mb-8 leading-relaxed">
              Skills-UP! an Ihrer Schule einsetzen? Fragen zum Programm, zum Rollout oder einer Kooperation? Wir melden uns innerhalb von 24 Stunden.
            </p>
            <div className="space-y-4 mb-8">
              {[
                'Unverbindliche Beratung für Ihre Schule',
                'Schulweites Rollout in Minuten, kein IT-Aufwand',
                'Schnelle Antwort in unter 24 Stunden',
              ].map((t) => (
                <div key={t} className="flex items-center gap-3 text-white/80 font-body text-sm">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {t}
                </div>
              ))}
            </div>
            <a href="mailto:kontakt@digitale-zukunftsbildung.eu"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white font-body text-sm transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
              kontakt@digitale-zukunftsbildung.eu
            </a>
          </div>

          <div className="glass rounded-3xl p-8">
            <ContactForm light />
          </div>
        </div>
      </section>

      <SiteFooter />
      <BackToTop />
    </div>
  )
}
