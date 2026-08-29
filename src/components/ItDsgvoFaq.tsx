'use client'

import { useState } from 'react'

// Fakten-FAQ für Schul-IT-Kustod:innen und Direktionen — bewusst technisch-konkret.
const items = [
  {
    q: 'Wo werden die Daten gehostet?',
    a: 'Ausschließlich in der EU: Die Anwendung läuft in Frankfurt (Deutschland), die Datenbank in der AWS-Region eu-west-1 (Irland). Es findet keine Datenübermittlung in Drittländer außerhalb der EU statt.',
  },
  {
    q: 'Ist Skills-UP! DSGVO-konform? Gibt es einen AVV?',
    a: 'Ja. Skills-UP! ist vollständig DSGVO-konform aufgebaut: Datenminimierung (nur lernnotwendige Daten), keine Tracking-Cookies, keine Werbung, kein Verkauf von Daten. Für Schulen stellen wir einen fertigen Auftragsverarbeitungsvertrag (AVV) nach Art. 28 DSGVO bereit — einfach anfragen, unterschreiben, fertig.',
  },
  {
    q: 'Müssen Schüler:innen ihre Klarnamen angeben?',
    a: 'Nein. Schüler:innen treten der Klasse über einen anonymen Zugangscode bei und können mit Spitznamen arbeiten. Es werden weder Schüler-E-Mail-Adressen noch Klarnamen benötigt. Die Zuordnung zur echten Person bleibt bei der Lehrkraft — nicht bei uns.',
  },
  {
    q: 'Gibt es Single Sign-On (SSO)?',
    a: 'Der Standard-Zugang funktioniert bewusst ohne Accounts-Verwaltung: Klassencode eingeben, loslegen — kein Passwort-Reset-Support für die Schul-IT. Eine SSO-Anbindung an bestehende Schul-Accounts richten wir bei schulweitem Rollout auf Anfrage ein.',
  },
  {
    q: 'Was muss die Schul-IT installieren oder freigeben?',
    a: 'Nichts. Skills-UP! läuft komplett im Browser (aktuelle Versionen von Chrome, Firefox, Safari, Edge) — keine App-Verteilung, kein MDM-Eintrag, keine lokalen Installationen. Einzige Voraussetzung: Internetzugang. Funktioniert auf Schul-PCs, Tablets und privaten Smartphones.',
  },
  {
    q: 'Werden Nutzungsdaten getrackt oder an Dritte weitergegeben?',
    a: 'Nein. Kein Werbe-Tracking, keine Analyse-Cookies von Drittanbietern, keine Datenweitergabe zu kommerziellen Zwecken. Erhoben wird nur der Lernfortschritt, den die Lehrkraft im Dashboard sieht. Skills-UP! wird von einem gemeinnützigen Verein betrieben — es gibt kein Geschäftsmodell mit Daten.',
  },
]

export default function ItDsgvoFaq() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            id={`itfaq-btn-${i}`}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`itfaq-panel-${i}`}
          >
            <span className="font-heading font-700 text-base text-text-primary leading-snug">{item.q}</span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: open === i ? '#1E6B5B' : '#e6f4f1' }}
            >
              <svg
                aria-hidden="true"
                width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke={open === i ? 'white' : '#1E6B5B'} strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-200"
                style={{ transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </span>
          </button>
          <div
            id={`itfaq-panel-${i}`}
            role="region"
            aria-labelledby={`itfaq-btn-${i}`}
            hidden={open !== i}
            className="px-6 pb-5"
          >
            <p className="text-text-muted font-body text-sm leading-relaxed">{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
