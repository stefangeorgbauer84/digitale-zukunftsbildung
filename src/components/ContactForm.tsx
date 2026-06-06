'use client'

import { useState } from 'react'

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactForm({ light = false }: { light?: boolean }) {
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', anliegen: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `Anliegen: ${form.anliegen}\n\n${form.message}`,
        }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', anliegen: '', message: '' })
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

      <button
        type="submit"
        disabled={status === 'loading'}
        aria-busy={status === 'loading'}
        className={`w-full py-3.5 rounded-xl text-sm font-body font-700 transition-all active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2 ${
          light
            ? 'bg-white text-primary-dark hover:bg-gray-50'
            : 'bg-primary-dark text-white hover:bg-primary-medium'
        }`}
      >
        {status === 'loading' ? (
          <>
            <svg aria-hidden="true" className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
            </svg>
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
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          Danke! Wir melden uns innerhalb von 24 Stunden.
        </div>
      )}
      {status === 'error' && (
        <div
          role="alert"
          aria-live="assertive"
          className={`rounded-xl p-4 text-sm font-body font-600 flex items-center gap-2 ${light ? 'bg-white/15 text-red-300' : 'bg-red-50 text-red-600'}`}
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
          Etwas hat nicht geklappt. Bitte nochmal versuchen oder schreib uns direkt.
        </div>
      )}
    </form>
  )
}
