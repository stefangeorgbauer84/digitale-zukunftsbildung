'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [consent, setConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, website: honeypot }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-14 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="rounded-3xl p-8 md:p-12 text-center"
          style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>

          <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
            style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
            <svg aria-hidden="true" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Gratis Download
          </div>

          <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-3">
            Lehrplanmapping PDF — kostenlos.
          </h2>
          <p className="font-body text-white/60 text-base mb-8 max-w-xl mx-auto leading-relaxed">
            Welche Skills-UP!-Module passen zu welchem Fach und welcher Schulstufe? Das vollständige Lehrplanmapping für AHS, HAK, HTL, HLW, PTS und Berufsschule — als druckbares PDF, gratis.
          </p>

          {status === 'success' ? (
            <div className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-body font-700 text-sm"
              style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#34d399' }}>
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              Super! Marina schickt dir das PDF innerhalb von 24 Stunden.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                {/* Honeypot */}
                <input
                  type="text"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  tabIndex={-1}
                  aria-hidden="true"
                  style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
                />
                <label htmlFor="newsletter-email" className="sr-only">Deine E-Mail-Adresse</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="deine@schule.at"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-xl text-sm font-body bg-white/10 border border-white/20 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/30"
                />
                <button
                  type="submit"
                  disabled={status === 'loading' || !consent}
                  className="shrink-0 px-6 py-3 rounded-xl text-sm font-body font-700 text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-60"
                  style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}
                >
                  {status === 'loading' ? 'Wird gesendet…' : 'PDF anfordern'}
                </button>
              </div>

              {/* DSGVO consent */}
              <div className="flex items-start gap-2.5 mt-4 text-left">
                <input
                  id="newsletter-consent"
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border-white/30 accent-primary-light cursor-pointer"
                />
                <label htmlFor="newsletter-consent" className="text-xs font-body leading-relaxed text-white/50 cursor-pointer">
                  Ich habe die{' '}
                  <a href="/impressum#datenschutz" target="_blank" rel="noopener noreferrer"
                    className="underline hover:text-white/80">
                    Datenschutzerklärung
                  </a>{' '}
                  gelesen und stimme zu, dass meine E-Mail-Adresse zur Zusendung des PDFs verarbeitet wird.
                </label>
              </div>
            </form>
          )}

          {status === 'error' && (
            <p role="alert" aria-live="assertive" className="mt-3 text-red-300 text-xs font-body">
              Etwas hat nicht geklappt — schreib uns direkt: info@digitale-zukunftsbildung.eu
            </p>
          )}

          <p className="text-white/25 text-xs font-body mt-4">
            Kein Spam. Nur das PDF. Abmeldung jederzeit möglich.
          </p>
        </div>
      </div>
    </section>
  )
}
