import type { Metadata } from 'next'
import Image from 'next/image'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Über uns | Skills-UP! – Digitale Zukunftsbildung',
  description: 'Erfahren Sie mehr über den Verein und unser erfahrenes Team hinter den Skills-UP! Kursen.',
}

export default function UeberUns() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteNav />

      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6"
        style={{ background: 'linear-gradient(135deg, #2d1b69 0%, #4a2d8a 50%, #1a5c4e 100%)' }}>
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full animate-float-orb pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(155,126,212,0.3) 0%, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <p className="text-white/60 text-xs font-body font-700 uppercase tracking-widest mb-4">Über uns</p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Wir machen digitale<br />
            <span className="text-primary-light">Bildung zugänglich.</span>
          </h1>
          <p className="text-white/70 font-body text-xl max-w-2xl leading-relaxed">
            Der Verein zur Entwicklung der digitalen Zukunftsbildung verbindet Leidenschaft fürs Lernen mit echter Praxiserfahrung aus Wirtschaft und Technologie.
          </p>
        </div>
        <div className="relative z-10 mt-10">
          <svg viewBox="0 0 1440 60" className="w-full" preserveAspectRatio="none" style={{ display: 'block' }}>
            <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="#f8f9fa" />
          </svg>
        </div>
      </section>

      {/* Mission & Werte */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest text-primary-medium bg-primary-50 px-4 py-2 rounded-full mb-5">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              Unsere Mission
            </div>
            <h2 className="font-heading text-3xl font-bold mb-5" style={{ color: '#1a1040' }}>
              Digitale Kompetenz ist kein Luxus.
            </h2>
            <p className="text-text-muted font-body text-lg leading-relaxed mb-4">
              Wir leben in einer Welt, die sich schneller verändert als je zuvor. Wer nicht mitkommt, verliert den Anschluss — im Job, im Alltag, im Leben.
            </p>
            <p className="text-text-muted font-body text-lg leading-relaxed">
              Unser Verein setzt genau hier an: Mit dem Kursformat <strong className="text-primary-dark">Skills-UP!</strong> vermitteln wir digitale Kompetenzen, die sofort einsetzbar sind — unabhängig von Alter, Vorwissen oder Berufsfeld.
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
                { title: 'Praxis first', desc: 'Kein theoretisches Bla-Bla. Was wir lehren, funktioniert am nächsten Arbeitstag.' },
                { title: 'Kleine Gruppen', desc: 'Echter Lernerfolg passiert im Gespräch, nicht im Hörsaal mit 200 Leuten.' },
                { title: 'Österreichischer Kontext', desc: 'DSGVO, Finanzamt, österreichische Behörden — wir reden über das, was hier relevant ist.' },
                { title: 'Ehrlichkeit statt Hype', desc: 'KI kann viel, aber nicht alles. Wir erklären beides — klar und ohne Übertreibung.' },
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

      {/* Team */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">Das Team</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" style={{ color: '#1a1040' }}>
              Erfahrene Menschen.<br />Echte Expertise.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Marina Winkler — echtes Foto vorhanden */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all group">
              <div className="h-64 overflow-hidden">
                <Image src="/fotos/Marina%20Winkler%20Profilbild.jpeg" alt="Marina Winkler"
                  width={400} height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ objectPosition: 'center 20%' }} />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-700 text-base text-text-primary mb-1">Marina Winkler</h3>
                <p className="text-xs font-body text-primary-medium font-700 mb-3">Vereinsleitung &amp; Kursleitung</p>
                <p className="text-sm font-body text-text-muted leading-relaxed">
                  Pionierin hinter Skills-UP! mit jahrelanger Erfahrung in Bildung und digitaler Transformation.
                </p>
              </div>
            </div>

            {/* Platzhalter — hier kommen weitere Personen rein */}
            {[
              { name: '[Name eintragen]', rolle: 'Dozent / Digitale Kompetenzen', bio: 'Kurze Bio hier eintragen — Hintergrund, Expertise, Leidenschaft.' },
              { name: '[Name eintragen]', rolle: 'Organisation & Partnerschaften', bio: 'Kurze Bio hier eintragen — Hintergrund, Expertise, Leidenschaft.' },
            ].map((p, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-card">
                <div className="h-64 bg-primary-50 flex items-center justify-center text-primary-light">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className="p-6">
                  <h3 className="font-heading font-700 text-base text-text-primary mb-1">{p.name}</h3>
                  <p className="text-xs font-body text-primary-medium font-700 mb-3">{p.rolle}</p>
                  <p className="text-sm font-body text-text-muted leading-relaxed">{p.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Geschichte */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">Geschichte</p>
          <h2 className="font-heading text-3xl font-bold" style={{ color: '#1a1040' }}>Wie alles begann.</h2>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-card">
          <Image src="/fotos/Wichtig%20Timeline%20Geschichte%20Verein.png"
            alt="Timeline Geschichte Skills-UP! Verein" width={1200} height={600} className="w-full" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #4a2d8a 0%, #6b4db0 50%, #2a8a76 100%)' }}>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Willst du mit uns die digitale Zukunft gestalten?
            </h2>
            <p className="text-white/70 font-body text-lg mb-8">
              Als Kooperationspartner, Förderer oder Kursteilnehmer — wir freuen uns über jede Form der Zusammenarbeit.
            </p>
            <Link href="/#kontakt"
              className="inline-flex items-center gap-2 bg-white text-primary-dark font-body font-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-xl"
            >
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
