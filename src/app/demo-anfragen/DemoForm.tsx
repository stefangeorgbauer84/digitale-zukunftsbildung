'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

const schultypen = [
  'AHS-Oberstufe',
  'HAK & HAS',
  'HTL',
  'HLW & Fachschule',
  'BAfEP & BASOP',
  'Polytechnische Schule (PTS)',
  'Berufsschule',
  'Unternehmen / Lehrlingsprogramm',
  'Sonstiges',
]

export default function DemoForm() {
  const [schultyp, setSchultyp] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nachricht, setNachricht] = useState('')
  const [honeypot, setHoneypot] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!consent) return
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message: `Demo-Anfrage${schultyp ? ` — Schultyp: ${schultyp}` : ''}\n\n${nachricht}`,
          website: honeypot,
          consent: true,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = "w-full px-4 py-3 rounded-xl text-sm font-body bg-white/10 border border-white/20 text-white placeholder:text-white/35 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"

  if (status === 'success') {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
          style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)' }}>
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <h2 className="font-heading text-2xl font-bold text-white mb-3">Danke, {name.split(' ')[0]}!</h2>
        <p className="font-body text-white/60 text-base leading-relaxed">
          Wir haben deine Anfrage erhalten. Marina meldet sich innerhalb von 24 Stunden bei dir.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Friction-Killer Microcopy */}
      <div className="flex flex-wrap gap-2 -mt-1">
        {['⚡ In 10 Sekunden startklar', '🖥️ Keine Installation', '💳 Keine Kreditkarte nötig'].map((t) => (
          <span key={t} className="text-xs font-body font-600 px-3 py-1.5 rounded-full"
            style={{ background: 'rgba(52,211,153,0.12)', color: '#a7f3d0', border: '1px solid rgba(52,211,153,0.25)' }}>
            {t}
          </span>
        ))}
      </div>

      {/* Honeypot */}
      <input
        type="text"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      />

      {/* Schultyp */}
      <div>
        <label className="block text-xs font-body font-700 text-white/60 uppercase tracking-widest mb-2">
          Schultyp <span className="font-400 normal-case tracking-normal opacity-60">(optional)</span>
        </label>
        <select
          value={schultyp}
          onChange={(e) => setSchultyp(e.target.value)}
          className={inputClass}
          style={{ appearance: 'none' }}
        >
          <option value="" disabled>Bitte auswählen…</option>
          {schultypen.map((s) => (
            <option key={s} value={s} style={{ background: '#1a1040', color: '#fff' }}>{s}</option>
          ))}
        </select>
      </div>

      {/* Name */}
      <div>
        <label className="block text-xs font-body font-700 text-white/60 uppercase tracking-widest mb-2">
          Dein Name *
        </label>
        <input
          type="text"
          required
          placeholder="Mag. Muster"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-body font-700 text-white/60 uppercase tracking-widest mb-2">
          E-Mail-Adresse *
        </label>
        <input
          type="email"
          required
          placeholder="marina@meineschule.at"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
        />
      </div>

      {/* Nachricht */}
      <div>
        <label className="block text-xs font-body font-700 text-white/60 uppercase tracking-widest mb-2">
          Kurze Nachricht <span className="font-400 normal-case tracking-normal opacity-60">(optional)</span>
        </label>
        <textarea
          rows={3}
          placeholder="z.B. Anzahl der Klassen, gewünschter Starttermin, Fragen zum Programm…"
          value={nachricht}
          onChange={(e) => setNachricht(e.target.value)}
          className={`${inputClass} resize-none`}
        />
      </div>

      {/* Consent */}
      <label className="flex items-start gap-3 cursor-pointer group">
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 shrink-0 w-4 h-4 accent-purple-400"
        />
        <span className="text-xs font-body text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
          Ich stimme zu, dass meine Daten zur Beantwortung dieser Demo-Anfrage gespeichert und verarbeitet werden.{' '}
          <a href="/impressum#datenschutz" className="underline hover:text-white/80 transition-colors">Datenschutzerklärung</a>
        </span>
      </label>

      {status === 'error' && (
        <p className="text-red-300 text-xs font-body">
          Etwas hat nicht geklappt. Schreib uns direkt: info@digitale-zukunftsbildung.eu
        </p>
      )}

      <button
        type="submit"
        disabled={!consent || status === 'loading'}
        className="w-full py-4 rounded-xl font-body font-700 text-base text-white transition-all hover:opacity-90 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}
      >
        {status === 'loading' ? 'Wird gesendet…' : 'Demo kostenlos anfragen →'}
      </button>
    </form>
  )
}
