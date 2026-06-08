import Link from 'next/link'
import Image from 'next/image'

export default function SiteFooter() {
  return (
    <footer style={{ background: '#080614', paddingBottom: 'max(2rem, env(safe-area-inset-bottom))' }} className="relative overflow-hidden pt-16 px-6">

      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-48 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(107,77,176,0.12) 0%, transparent 70%)' }} />
      <div className="absolute top-0 right-1/4 w-80 h-40 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(42,138,118,0.08) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/8">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image src="/fotos/Logo.png" alt="Skills-UP!" width={40} height={40} className="rounded-xl opacity-90" />
              <div>
                <p className="font-heading font-800 text-white text-base">Skills-UP!</p>
                <p className="font-body text-xs text-white/50">Digitale Zukunftsbildung</p>
              </div>
            </div>
            <p className="text-sm font-body text-white/55 leading-relaxed mb-5 max-w-xs">
              Wir bringen echte Finanzkompetenz zu Jugendlichen ab 15 Jahren, praxisnah, digital und sofort einsetzbar für AHS, HAK, HTL, HLW, BAfEP, BASOP, PTS und Berufsschulen.
            </p>
            <div className="space-y-2">
              <a href="tel:+436502158715"
                className="flex items-center gap-2 text-sm font-body text-white/55 hover:text-white transition-colors group">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-primary-light transition-colors">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.39 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                </svg>
                +43 650 215 8715
              </a>
              <a href="mailto:info@digitale-zukunftsbildung.eu"
                className="flex items-center gap-2 text-sm font-body text-white/55 hover:text-white transition-colors group">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/30 group-hover:text-primary-light transition-colors">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                info@digitale-zukunftsbildung.eu
              </a>
              <a href="https://linkedin.com/company/verein-zur-entwicklung-der-digitalen-zukunftsbildung"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-body text-white/55 hover:text-white transition-colors group">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-white/30 group-hover:text-primary-light transition-colors">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Schulen */}
          <div>
            <p className="font-heading font-700 text-xs uppercase tracking-widest text-white/35 mb-5">Für Schulen</p>
            <ul className="space-y-3">
              {[
                { label: 'Alle Schultypen', href: '/schulen' },
                { label: 'AHS-Oberstufe', href: '/schulen/ahs' },
                { label: 'HAK & HAS', href: '/schulen/hak' },
                { label: 'HTL', href: '/schulen/htl' },
                { label: 'HLW & Fachschulen', href: '/schulen/hlw' },
                { label: 'BAfEP & BASOP', href: '/schulen/bafep' },
                { label: 'PTS', href: '/schulen/pts' },
                { label: 'Berufsschulen', href: '/schulen/berufsschule' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href}
                    className="text-sm font-body text-white/55 hover:text-white transition-colors py-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <p className="font-heading font-700 text-xs uppercase tracking-widest text-white/35 mb-5">Verein</p>
            <ul className="space-y-3 mb-8">
              {[
                { label: 'Über uns', href: '/ueber-uns' },
                { label: 'Kurse & Angebote', href: '/#angebote' },
                { label: 'Kontakt aufnehmen', href: '/#kontakt' },
                { label: 'Impressum', href: '/impressum' },
                { label: 'Datenschutz', href: '/impressum#datenschutz' },
              ].map((l) => (
                <li key={l.label}>
                  <Link href={l.href}
                    className="text-sm font-body text-white/55 hover:text-white transition-colors py-1 inline-block">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-white/10 bg-white/5">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#fde68a" stroke="#fde68a" strokeWidth="0.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              <span className="text-white/50 text-xs font-body">Top-3 MEGA Bildungsmillion 2025</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-body text-white/30 text-center sm:text-left break-words">
            © {new Date().getFullYear()} Verein zur Entwicklung der digitalen Zukunftsbildung · Straußengasse 12/26, 1050 Wien
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-body text-white/25">Zertifiziert von</span>
            <span className="text-xs font-body text-white/40 font-600">Hochschule Burgenland</span>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-xs font-body text-white/40 font-600">WKÖ</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
