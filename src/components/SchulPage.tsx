'use client'

import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export interface UnterrichtsEinheit {
  schritt: string
  was: string
  zeitMinuten: number
}

export interface SchulPageProps {
  name: string
  kurzname: string
  gradient: string
  farbe: string
  farbeHell: string
  schulstufen: string
  lehrplanFach: string        // z.B. "GWK, PuG oder Wahlpflichtfach"
  lehrerProblem: string      // Der eine Satz, der den Lehrer-Schmerz trifft
  intro: string
  lehrplanPassung: {         // Wie passt es konkret in den Lehrplan?
    fach: string
    kontext: string
  }[]
  unterrichtsEinheiten: UnterrichtsEinheit[]  // So läuft eine Stunde
  themen: string[]
  features: {               // Features aus Lehrerperspektive
    titel: string
    nutzenfuerLehrer: string
    icon: React.ReactNode
  }[]
  lehrerZitat: { text: string; person: string }
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
  lehrplanPassung, unterrichtsEinheiten, themen,
  features, lehrerZitat, icon,
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

      {/* ── Lehrer-Zitat ─────────────────────────────────────── */}
      <section className="py-16" style={{ background: farbeHell }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white"
            style={{ background: gradient }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <p className="font-body text-xl leading-relaxed italic mb-6" style={{ color: '#2d1b69' }}>
            &ldquo;{lehrerZitat.text}&rdquo;
          </p>
          <p className="font-body font-700 text-sm" style={{ color: farbe }}>{lehrerZitat.person}</p>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────── */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 50%, #1a5c4e 100%)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="font-heading text-3xl font-bold text-white mb-4">
            Bereit für Skills-UP! an deiner Schule?
          </h3>
          <p className="font-body text-white/70 text-lg mb-8 max-w-xl mx-auto">
            Kein Ausfüllen langer Formulare. Ein kurzes Gespräch genügt — danach weißt du, ob Skills-UP! zu deiner Schule passt.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="/#kontakt"
              className="inline-flex items-center gap-2 font-body font-700 text-base px-8 py-4 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #2a8a76)', boxShadow: '0 8px 32px rgba(107,77,176,0.4)' }}>
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
