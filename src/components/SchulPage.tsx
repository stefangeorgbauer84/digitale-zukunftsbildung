'use client'

import Link from 'next/link'
import Image from 'next/image'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export interface UnterrichtsEinheit {
  schritt: string
  was: string
  zeitMinuten: number
}

export interface Modul {
  titel: string
  lernziel: string
  dauer: string
  level: 'Einsteiger' | 'Mittel'
  kategorie: string
  icon: React.ReactNode
}

export interface Simulation {
  titel: string
  untertitel: string
  dauer: string
  icon: React.ReactNode
}

export interface SchulPageProps {
  name: string
  kurzname: string
  gradient: string
  farbe: string
  farbeHell: string
  schulstufen: string
  lehrplanFach: string
  lehrerProblem: string
  intro: string
  lehrplanPassung: {
    fach: string
    kontext: string
  }[]
  unterrichtsEinheiten: UnterrichtsEinheit[]
  module: Modul[]            // Passende Lernmodule für diesen Schultyp
  simulationen: Simulation[] // Passende Simulationen für diesen Schultyp
  themen: string[]
  features: {               // Features aus Lehrerperspektive
    titel: string
    nutzenfuerLehrer: string
    icon: React.ReactNode
  }[]
  lehrerZitat: { text: string; person: string }
  lehrerFoto?: string
  icon: React.ReactNode
}

const checkIcon = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const arrowIcon = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

export default function SchulPage({
  name, kurzname, gradient, farbe, farbeHell,
  schulstufen, lehrplanFach, lehrerProblem, intro,
  lehrplanPassung, unterrichtsEinheiten, module, simulationen, themen,
  features, lehrerZitat, lehrerFoto, icon,
}: SchulPageProps) {

  const totalMinuten = unterrichtsEinheiten.reduce((s, e) => s + e.zeitMinuten, 0)

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteNav />

      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-32 pb-0" style={{ background: gradient }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[-5%] w-[400px] h-[400px] rounded-full animate-float-orb-reverse pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)' }} />

        <div className="max-w-6xl mx-auto px-6 relative z-10 pb-20">
          {/* Breadcrumb */}
          <div className="flex items-center gap-3 mb-8">
            <Link href="/schulen" className="text-white/60 hover:text-white/90 text-sm font-body flex items-center gap-1.5 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"/>
              </svg>
              Alle Schultypen
            </Link>
            <span className="text-white/30">/</span>
            <span className="text-white/70 text-sm font-body font-600">{kurzname}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                  style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
                  {icon}
                </div>
                <div>
                  <p className="text-white/50 text-xs font-body font-700 uppercase tracking-widest">{schulstufen}</p>
                  <p className="text-white/70 text-xs font-body mt-0.5">{lehrplanFach}</p>
                </div>
              </div>

              {/* Capybara Maskottchen */}
              <div className="flex items-center gap-3 mb-5">
                <div className="relative">
                  <div className="absolute inset-0 blur-2xl scale-150 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.5) 0%, transparent 70%)' }} />
                  <Image src="/capybara-mascot.png" alt="Skills-UP! Maskottchen" width={72} height={72}
                    className="relative drop-shadow-2xl" />
                </div>
                <Image src="/fotos/Logo.png" alt="Skills-UP!" width={44} height={44}
                  className="relative drop-shadow-xl rounded-xl opacity-90" />
              </div>

              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Skills-UP! für<br />{name}
              </h1>
              <p className="text-white/50 font-body text-base italic mb-5 leading-relaxed border-l-2 border-white/20 pl-4">
                &ldquo;{lehrerProblem}&rdquo;
              </p>
              <p className="text-white/75 font-body text-lg leading-relaxed mb-8">{intro}</p>

              <div className="flex flex-wrap gap-3">
                <a href="/#kontakt"
                  className="inline-flex items-center gap-2 font-body font-700 text-sm px-6 py-3 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
                  style={{ background: 'rgba(255,255,255,0.25)', border: '1px solid rgba(255,255,255,0.35)' }}>
                  Schule anmelden
                  {arrowIcon}
                </a>
                <a href="#unterricht"
                  className="inline-flex items-center gap-2 font-body font-600 text-sm px-6 py-3 rounded-xl text-white/80 hover:text-white transition-all"
                  style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
                  So funktioniert&apos;s
                </a>
              </div>
            </div>

            {/* Quick Wins für Lehrkräfte */}
            <div className="glass rounded-2xl p-6 border border-white/20">
              <p className="text-white/60 text-xs font-body font-700 uppercase tracking-widest mb-5">Was Lehrkräfte sofort haben</p>
              <ul className="space-y-4">
                {[
                  { text: '0 Minuten Vorbereitung pro Einheit', detail: 'Fertige Module, Aufgaben und Simulationen — alles startklar.' },
                  { text: 'Schüler:innen-Dashboard live im Blick', detail: 'Wer ist wo? Wer braucht Unterstützung? Ein Klick genügt.' },
                  { text: 'Passt in bestehende Stunden', detail: lehrplanFach + ' — kein Extra-Fach nötig.' },
                  { text: 'Schüler:innen machen freiwillig weiter', detail: 'Gamification und Peer-Videos erzeugen echte Eigenmotivation.' },
                  { text: 'DSGVO-konform, kein IT-Aufwand', detail: 'Kein Antrag, keine Installation, kein Elternbrief zur Datenweitergabe.' },
                ].map((item) => (
                  <li key={item.text} className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0">{checkIcon}</span>
                    <div>
                      <p className="text-white font-body font-600 text-sm leading-tight">{item.text}</p>
                      <p className="text-white/55 font-body text-xs mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative z-10">
          <svg viewBox="0 0 1440 80" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,20 1440,40 L1440,80 L0,80 Z" fill="#f8f9fa" />
          </svg>
        </div>
      </section>

      {/* ── Lehrer-Testimonial ───────────────────────────────── */}
      {(lehrerFoto || lehrerZitat) && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-8">
              <p className="text-xs font-body font-700 uppercase tracking-widest" style={{ color: farbe }}>
                Stimmen aus der Praxis
              </p>
            </div>

            <div className="rounded-3xl shadow-card-hover overflow-hidden border border-gray-100">
              <div className="grid md:grid-cols-[300px_1fr]">
                {/* Foto */}
                <div className="relative min-h-[360px] md:min-h-0" style={{ background: gradient }}>
                  {lehrerFoto && (
                    <Image
                      src={lehrerFoto}
                      alt={lehrerZitat.person}
                      fill
                      className="object-cover object-top"
                    />
                  )}
                  <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)' }} />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-body font-700 px-3 py-1.5 rounded-full"
                      style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', color: '#fff', border: '1px solid rgba(255,255,255,0.3)' }}>
                      {name}
                    </span>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-8 md:p-10 flex flex-col justify-center" style={{ background: farbeHell }}>
                  <svg width="40" height="30" viewBox="0 0 48 36" fill="none" className="mb-4 opacity-25" style={{ color: farbe }}>
                    <path d="M0 36V21.6C0 9.6 6.4 2.4 19.2 0l2.4 4.8C14.4 6.4 10.4 10.4 10.4 16.8H19.2V36H0ZM28.8 36V21.6C28.8 9.6 35.2 2.4 48 0l2.4 4.8C43.2 6.4 39.2 10.4 39.2 16.8H48V36H28.8Z" fill="currentColor"/>
                  </svg>
                  <p className="font-body text-lg md:text-xl leading-relaxed italic mb-6" style={{ color: '#2d1b69' }}>
                    &ldquo;{lehrerZitat.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-0.5 rounded-full shrink-0" style={{ background: farbe }} />
                    <div>
                      <p className="font-body font-700 text-sm leading-tight" style={{ color: farbe }}>
                        {lehrerZitat.person}
                      </p>
                      <p className="font-body text-xs text-text-muted mt-0.5">Skills-UP! Piloteinsatz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Trust Stats ─────────────────────────────────────── */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>, accent: '#6b4db0', bg: '#f3f1f9', headline: 'Top-3 Österreich', detail: 'MEGA Bildungsmillion 2025' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>, accent: '#2a8a76', bg: '#e6f4f1', headline: 'WKÖ zertifiziert', detail: 'Hochschule Burgenland bestätigt Qualität' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>, accent: '#4a2d8a', bg: '#f3f1f9', headline: 'Gütesiegel', detail: 'Qualitäts-Lern-Apps zertifiziert' },
              { icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>, accent: '#2A8A76', bg: '#e6f4f1', headline: 'DSGVO-konform', detail: 'Aus Österreich, für Österreich' },
            ].map((f) => (
              <div key={f.headline} className="rounded-2xl p-5 flex items-start gap-4" style={{ background: f.bg }}>
                <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: f.accent, color: '#fff' }}>
                  {f.icon}
                </div>
                <div>
                  <p className="font-heading font-700 text-sm leading-tight" style={{ color: f.accent }}>{f.headline}</p>
                  <p className="font-body text-xs text-text-muted mt-0.5 leading-snug">{f.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Awards Strip ────────────────────────────────────── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-2" style={{ color: '#6b4db0' }}>Ausgezeichnet &amp; zertifiziert</p>
            <h2 className="font-heading text-2xl md:text-3xl font-bold" style={{ color: '#1a1040' }}>
              Von unabhängigen Stellen geprüft und empfohlen.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center gap-4 shadow-card hover:shadow-card-hover transition-all border-2" style={{ borderColor: '#4a2d8a' }}>
              <div className="h-16 flex items-center justify-center">
                <Image src="/fotos/Logo%20G%C3%BCtesiegel%20Lernapps.png" alt="Gütesiegel Qualitäts-Lern-Apps" width={180} height={64} className="max-h-14 w-auto object-contain" />
              </div>
              <div>
                <span className="inline-block text-xs font-body font-700 px-3 py-1 rounded-full mb-2" style={{ background: '#4a2d8a', color: '#fff' }}>Qualitätszertifiziert</span>
                <p className="font-body text-sm text-text-muted leading-relaxed">Gütesiegel für digitale Qualitäts-Lern-Apps. Geprüft nach pädagogischen und technischen Qualitätskriterien.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center gap-4 shadow-card hover:shadow-card-hover transition-all">
              <div className="h-16 flex items-center justify-center">
                <Image src="/fotos/Logo%20Nationale%20Finanzbildungsstrategie.png" alt="Nationale Finanzbildungsstrategie" width={180} height={64} className="max-h-14 w-auto object-contain" />
              </div>
              <div>
                <span className="inline-block text-xs font-body font-700 px-3 py-1 rounded-full mb-2" style={{ background: '#2A8A76', color: '#fff' }}>Bundesministerium</span>
                <p className="font-body text-sm text-text-muted leading-relaxed">Teil der Nationalen Finanzbildungsstrategie der österreichischen Bundesregierung.</p>
              </div>
            </div>
            <div className="bg-white rounded-3xl p-6 flex flex-col items-center text-center gap-4 shadow-card hover:shadow-card-hover transition-all">
              <div className="h-16 flex items-center justify-center">
                <Image src="/fotos/MEGA%20Bildungsstiftung%20Logo.jpeg" alt="MEGA Bildungsstiftung" width={180} height={64} className="max-h-14 w-auto object-contain" />
              </div>
              <div>
                <span className="inline-block text-xs font-body font-700 px-3 py-1 rounded-full mb-2" style={{ background: '#D87228', color: '#fff' }}>Top-3 Österreich</span>
                <p className="font-body text-sm text-text-muted leading-relaxed">Top-3 Projekt der MEGA Bildungsmillion 2025 — aus hunderten Einreichungen österreichweit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partner-Logo-Marquee ─────────────────────────────── */}
      <section className="py-12 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
          <p className="text-xs font-body font-700 uppercase tracking-widest text-text-muted">Partner &amp; Kooperationen</p>
        </div>
        <div className="relative marquee-track">
          <div className="flex animate-marquee gap-20 items-center">
            {[
              { src: '/fotos/Logo%20Hochschule%20Burgenland.jpg', alt: 'Hochschule Burgenland' },
              { src: '/fotos/Logo%20Wko%20Wirtschaftskammer.png', alt: 'WKÖ Wirtschaftskammer' },
              { src: '/fotos/MEGA%20Bildungsstiftung%20Logo.jpeg', alt: 'MEGA Bildungsstiftung' },
              { src: '/fotos/Logo%20Nationale%20Finanzbildungsstrategie.png', alt: 'Nationale Finanzbildungsstrategie' },
              { src: '/fotos/Logo%20G%C3%BCtesiegel%20Lernapps.png', alt: 'Gütesiegel Lern-Apps', highlight: true },
              { src: '/fotos/Logo%20Ovos.jpeg', alt: 'Ovos' },
              { src: '/fotos/TGW%20Future%20Wings.png', alt: 'TGW Future Wings' },
              { src: '/fotos/TGW%20Logistics%20Logo.png', alt: 'TGW Logistics' },
              { src: '/fotos/Bildungsdirketion%20Burgenland.jpg', alt: 'Bildungsdirektion Burgenland' },
            ].flatMap((logo, _, arr) => [logo, ...arr]).slice(0, 18).map((logo, i) => (
              <div key={i}
                className="shrink-0 flex items-center justify-center px-5 rounded-2xl"
                style={{
                  height: '80px',
                  background: logo.alt === 'Gütesiegel Lern-Apps' ? '#f3f1f9' : 'transparent',
                  padding: logo.alt === 'Gütesiegel Lern-Apps' ? '10px 20px' : '0 20px',
                }}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={logo.alt === 'Gütesiegel Lern-Apps' ? 60 : 80}
                  style={{
                    height: logo.alt === 'Gütesiegel Lern-Apps' ? '60px' : '80px',
                    width: 'auto',
                    objectFit: 'contain',
                    filter: 'grayscale(20%)',
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lehrplan-Passung ────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-2" style={{ color: farbe }}>Lehrplan</p>
            <h2 className="font-heading text-2xl font-bold" style={{ color: '#1a1040' }}>
              Wo passt Skills-UP! konkret rein?
            </h2>
            <p className="font-body text-text-muted text-sm mt-2 max-w-lg mx-auto">
              Kein extra Fach nötig. Skills-UP! ergänzt bestehende Stunden und Themen, die du ohnehin unterrichtest.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lehrplanPassung.map((lp) => (
              <div key={lp.fach} className="bg-white rounded-2xl p-5 border-l-4 shadow-sm"
                style={{ borderColor: farbe }}>
                <p className="font-heading font-700 text-sm mb-1.5" style={{ color: farbe }}>{lp.fach}</p>
                <p className="font-body text-sm text-text-muted leading-relaxed">{lp.kontext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── So läuft eine Unterrichtsstunde ─────────────────── */}
      <section id="unterricht" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-2" style={{ color: farbe }}>Praxisbeispiel</p>
            <h2 className="font-heading text-3xl font-bold mb-3" style={{ color: '#1a1040' }}>
              Eine Einheit mit Skills-UP! — konkret.
            </h2>
            <p className="font-body text-text-muted max-w-lg mx-auto">
              So sieht eine typische Unterrichtsstunde aus. Gesamtdauer: {totalMinuten} Minuten. Deine Vorbereitung: 0 Minuten.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-[28px] top-10 bottom-10 w-px" style={{ background: `linear-gradient(to bottom, ${farbe}, ${farbe}44)` }} />
            <div className="space-y-6">
              {unterrichtsEinheiten.map((e, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-white shadow-md"
                    style={{ background: i === 0 ? gradient : i === unterrichtsEinheiten.length - 1 ? gradient : `${farbe}22` }}>
                    <span className="font-heading font-800 text-lg leading-none" style={{ color: i === 0 || i === unterrichtsEinheiten.length - 1 ? '#fff' : farbe }}>
                      {e.zeitMinuten}
                    </span>
                    <span className="text-[9px] font-body" style={{ color: i === 0 || i === unterrichtsEinheiten.length - 1 ? 'rgba(255,255,255,0.7)' : `${farbe}99` }}>
                      min
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-2xl p-5 flex-1">
                    <p className="font-heading font-700 text-sm mb-1" style={{ color: '#1a1040' }}>{e.schritt}</p>
                    <p className="font-body text-sm text-text-muted leading-relaxed">{e.was}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Module & Simulationen ────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-2" style={{ color: farbe }}>Inhalte der Plattform</p>
            <h2 className="font-heading text-3xl font-bold mb-3" style={{ color: '#1a1040' }}>
              Module &amp; Simulationen für {name}
            </h2>
            <p className="font-body text-text-muted text-sm max-w-md mx-auto">
              Alle Inhalte sind fertig aufbereitet — Lernmodule mit Quiz, Checklisten und Reflexion, plus interaktive Simulationen mit österreichischen Alltagsszenarien.
            </p>
          </div>

          {/* Module */}
          <div className="mb-14">
            <p className="font-heading font-700 text-sm uppercase tracking-widest mb-5" style={{ color: farbe }}>
              Lernmodule — je 15 oder 50 Minuten
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {module.map((m) => (
                <div key={m.titel} className="rounded-2xl border border-gray-100 p-5 hover:border-gray-200 hover:shadow-sm transition-all bg-white">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ background: gradient }}>
                      {m.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-xs font-body font-700 px-2 py-0.5 rounded-full"
                          style={{ background: farbeHell, color: farbe }}>
                          {m.dauer}
                        </span>
                        <span className="text-xs font-body text-text-muted">{m.level}</span>
                      </div>
                      <p className="font-heading font-700 text-sm leading-tight" style={{ color: '#1a1040' }}>{m.titel}</p>
                    </div>
                  </div>
                  <p className="font-body text-xs text-text-muted leading-relaxed">{m.lernziel}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Simulationen */}
          <div>
            <p className="font-heading font-700 text-sm uppercase tracking-widest mb-5" style={{ color: farbe }}>
              Interaktive Simulationen — österreichische Alltagsszenarien
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {simulationen.map((s) => (
                <div key={s.titel} className="flex items-start gap-4 p-5 rounded-2xl border-2 transition-all"
                  style={{ borderColor: `${farbe}22`, background: farbeHell }}>
                  <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white"
                    style={{ background: farbe }}>
                    {s.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-heading font-700 text-sm" style={{ color: '#1a1040' }}>{s.titel}</p>
                      <span className="text-xs font-body text-text-muted">{s.dauer}</span>
                    </div>
                    <p className="font-body text-xs leading-relaxed" style={{ color: farbe, opacity: 0.8 }}>{s.untertitel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Themen ──────────────────────────────────────────── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-2" style={{ color: farbe }}>Inhalte</p>
            <h2 className="font-heading text-2xl font-bold mb-3" style={{ color: '#1a1040' }}>
              Diese Themen deckt Skills-UP! ab.
            </h2>
            <p className="font-body text-text-muted text-sm max-w-md mx-auto">
              Alle Module sind fertig aufbereitet. Du wählst, welche du wann einsetzen möchtest.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {themen.map((t, i) => (
              <span key={t} className="font-body font-600 text-sm px-4 py-2.5 rounded-full border-2"
                style={{
                  borderColor: farbe,
                  color: i % 3 === 0 ? '#fff' : farbe,
                  background: i % 3 === 0 ? farbe : (i % 3 === 1 ? farbeHell : 'white'),
                }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features aus Lehrerperspektive ──────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-700 uppercase tracking-widest mb-2" style={{ color: farbe }}>Werkzeuge</p>
            <h2 className="font-heading text-3xl font-bold" style={{ color: '#1a1040' }}>
              Was Skills-UP! dir als Lehrkraft gibt.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div key={f.titel} className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white"
                  style={{ background: gradient }}>
                  {f.icon}
                </div>
                <div>
                  <p className="font-heading font-700 text-base mb-1.5" style={{ color: '#1a1040' }}>{f.titel}</p>
                  <p className="font-body text-sm text-text-muted leading-relaxed">{f.nutzenfuerLehrer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 50%, #1a5c4e 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          {/* Capybara im CTA */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 blur-3xl scale-150 pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.4) 0%, transparent 70%)' }} />
              <Image src="/capybara-mascot.png" alt="Skills-UP! Maskottchen" width={100} height={100}
                className="relative drop-shadow-2xl" />
            </div>
          </div>
          <h3 className="font-heading text-3xl font-bold text-white mb-4">
            Bereit für Skills-UP! an deiner Schule?
          </h3>
          <p className="font-body text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Kein Ausfüllen langer Formulare. Ein kurzes Gespräch genügt — danach weißt du, ob Skills-UP! zu deiner Schule passt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="/#kontakt"
              className="inline-flex items-center gap-2 font-body font-700 text-base px-8 py-4 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)', boxShadow: '0 8px 32px rgba(107,77,176,0.4)' }}>
              Jetzt Kontakt aufnehmen
              {arrowIcon}
            </a>
            <Link href="/schulen"
              className="inline-flex items-center gap-2 font-body font-600 text-base px-8 py-4 rounded-xl text-white/80 hover:text-white transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}>
              Andere Schultypen
            </Link>
          </div>

          {/* Andere Schultypen mini-nav */}
          <div className="border-t border-white/10 pt-10">
            <p className="text-white/40 text-xs font-body uppercase tracking-widest mb-5">Andere Schulformen</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { slug: 'ahs', label: 'AHS' },
                { slug: 'hak', label: 'HAK & HAS' },
                { slug: 'htl', label: 'HTL' },
                { slug: 'hlw', label: 'HLW' },
                { slug: 'bafep', label: 'BAfEP & BASOP' },
                { slug: 'pts', label: 'PTS' },
                { slug: 'berufsschule', label: 'Berufsschule' },
              ].map((s) => (
                <Link key={s.slug} href={`/schulen/${s.slug}`}
                  className="text-white/60 hover:text-white text-sm font-body font-600 px-4 py-2 rounded-xl hover:bg-white/10 transition-all">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
