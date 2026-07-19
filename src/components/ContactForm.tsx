'use client'

import { useState } from 'react'
import { CheckCircle, XCircle, Loader2 } from 'lucide-react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm({ light = false }: { light?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [form, setForm] = useState({ name: '', email: '', anliegen: '', message: '', website: '' })
  const [consent, setConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Anliegen: ${form.anliegen}\n\n${form.message}`,
          website: form.website,
        }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setErrorMsg(typeof data?.error === 'string' ? data.error : '')
        setStatus('error')
        return
      }
      setStatus('success')
      setForm({ name: '', email: '', anliegen: '', message: '', website: '' })
      setConsent(false)
    } catch {
      setStatus('error')
    }
  }

  const inputCls = light
    ? 'w-full px-4 py-3 rounded-xl text-sm font-body bg-white/15 border border-white/25 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40 focus:border-transparent'
    : 'w-full px-4 py-3 rounded-xl text-sm font-body bg-white border border-gray-200 text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-medium focus:border-transparent'

  const selectCls = `${inputCls} appearance-none`
  const labelCls = `block text-sm font-body font-600 mb-1.5 ${light ? 'text-white/80' : 'text-text-secondary'}`
  const requiredMark = <span aria-hidden="true" className={light ? 'text-white/50' : 'text-red-400'}> *</span>

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <p className={`text-xs font-body mb-2 ${light ? 'text-white/50' : 'text-text-muted'}`}>
        Alle Felder sind Pflichtfelder.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelCls}>Name{requiredMark}</label>
          <input id="name" type="text" required value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputCls} placeholder="Dein Name" />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>E-Mail{requiredMark}</label>
          <input id="email" type="email" required value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputCls} placeholder="deine@email.at" />
        </div>
      </div>

      <div>
        <label htmlFor="anliegen" className={labelCls}>Worum geht es?{requiredMark}</label>
        <select id="anliegen" required value={form.anliegen}
          onChange={(e) => setForm({ ...form, anliegen: e.target.value })}
          className={selectCls}
          style={light ? { color: form.anliegen ? 'white' : 'rgba(255,255,255,0.4)' } : {}}
        >
          <option value="" disabled>Bitte auswählen…</option>
          <option value="Schule anmelden">Skills-UP! für meine Schule / Klasse</option>
          <option value="Lehrplanintegration">Fragen zur Lehrplanintegration</option>
          <option value="Schulleitung Rollout">Schulweiter Rollout / Schulleitung</option>
          <option value="Kooperation">Kooperation / Partnerschaft</option>
          <option value="Lehrbetrieb">Anfrage Lehrbetrieb / Berufsschule</option>
          <option value="Sonstiges">Sonstiges</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelCls}>Nachricht{requiredMark}</label>
        <textarea id="message" required rows={4} value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputCls} resize-none`} placeholder="Wie kann Skills-UP! helfen?" />
      </div>

      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}
      />

      {/* DSGVO consent checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-gray-300 accent-primary-dark cursor-pointer"
        />
        <label htmlFor="consent" className={`text-xs font-body leading-relaxed cursor-pointer ${light ? 'text-white/60' : 'text-text-muted'}`}>
          Ich habe die{' '}
          <a href="/impressum#datenschutz" target="_blank" rel="noopener noreferrer"
            className="underline hover:opacity-80">
            Datenschutzerklärung
          </a>{' '}
          gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'loading' || !consent}
        aria-busy={status === 'loading'}
        className={`w-full py-3.5 rounded-xl text-sm font-body font-700 transition-all active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2 ${
          light
            ? 'bg-white text-primary-dark hover:bg-gray-50'
            : 'bg-primary-dark text-white hover:bg-primary-medium'
        }`}
      >
        {status === 'loading' ? (
          <>
            <Loader2 size={16} aria-hidden="true" className="animate-spin" />
            Wird gesendet…
          </>
        ) : 'Nachricht senden'}
      </button>

      {status === 'success' && (
        <div
          role="alert"
          aria-live="polite"
          className={`rounded-xl p-4 text-sm font-body font-600 flex items-center gap-2 ${light ? 'bg-white/15 text-emerald-300' : 'bg-status-teal-light text-status-teal'}`}
        >
          <CheckCircle size={16} aria-hidden="true" />
          Danke! Wir melden uns innerhalb von 24 Stunden.
        </div>
      )}
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className={`rounded-xl p-4 text-sm font-body font-600 flex items-center gap-2 ${light ? 'bg-white/15 text-red-300' : 'bg-red-50 text-red-600'}`}
        >
          <XCircle size={16} aria-hidden="true" />
          {errorMsg || 'Etwas hat nicht geklappt. Bitte nochmal versuchen oder schreib uns direkt.'}
        </div>
      )}
    </form>
  )
}
