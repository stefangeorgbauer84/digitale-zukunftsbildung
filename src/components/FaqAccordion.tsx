'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Für wen sind die Skills-UP! Kurse geeignet?',
    a: 'Unsere Kurse richten sich an Unternehmen, Schulen und Einzelpersonen in Österreich. Kein technisches Vorwissen ist nötig — wir holen alle dort ab, wo sie stehen. Von Einsteigern bis zu Fortgeschrittenen gibt es das passende Format.',
  },
  {
    q: 'Können die Kurse auch als Inhouse-Schulung gebucht werden?',
    a: 'Ja, alle Skills-UP! Formate sind als Inhouse-Schulung buchbar. Wir kommen zu euch ins Unternehmen oder in die Schule und passen die Inhalte auf eure spezifischen Bedürfnisse an. Kontaktiert uns einfach für ein individuelles Angebot.',
  },
  {
    q: 'Sind die Kurse über AMS oder andere Stellen förderbar?',
    a: 'In vielen Fällen ja. Für Unternehmen gibt es Möglichkeiten über die Betriebliche Bildungsförderung (WAFF Wien, etc.), für Einzelpersonen über den AMS Qualifizierungsbonus. Wir helfen euch dabei, die passende Förderung zu finden.',
  },
  {
    q: 'Wie viele Personen können an einem Kurs teilnehmen?',
    a: 'Um echten Lernerfolg zu garantieren, halten wir die Gruppen bewusst klein: maximal 12–15 Personen pro Kursformat. So bleibt Zeit für individuelle Fragen und echte Interaktion statt Frontalvortrag.',
  },
  {
    q: 'Gibt es ein Zertifikat nach dem Kurs?',
    a: 'Ja — alle Teilnehmer:innen erhalten nach erfolgreichem Abschluss ein digitales Skills-UP! Zertifikat, das von der Wirtschaftskammer Österreich (WKÖ) und der Hochschule Burgenland anerkannt ist. Es kann ausgedruckt und im Lebenslauf angegeben werden.',
  },
  {
    q: 'In welcher Sprache werden die Kurse angeboten?',
    a: 'Alle Skills-UP! Kurse werden auf Deutsch angeboten, mit österreichischem Bezug (DSGVO, österreichische Behörden, lokale Plattformen). Auf Anfrage sind auch englischsprachige Formate für internationale Unternehmen möglich.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-heading font-700 text-base text-text-primary leading-snug">{faq.q}</span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: open === i ? '#4a2d8a' : '#f3f1f9' }}
            >
              <svg
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke={open === i ? 'white' : '#6b4db0'} strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200"
                style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-text-muted font-body text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
