'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Für welche Schulen ist Skills-UP! geeignet?',
    a: 'Skills-UP! ist das Finanzbildungsprogramm für 15- bis 20-Jährige und eignet sich für AHS-Oberstufe, BHS (HAK, HTL, HLW, BAfEP, BASOP) sowie PTS und Berufsschulen. Die Inhalte sind lehrplankonform und lassen sich in Wirtschaft, Recht, Mathematik, Soziales oder im Klassenvorstand einsetzen.',
  },
  {
    q: 'Wie viel Vorbereitung brauchen Lehrkräfte?',
    a: 'Keine. Alle Module, Aufgaben und Übungsblätter sind fertig aufbereitet und sofort startbereit. Lehrkräfte öffnen Skills-UP! im Browser, starten ein Modul oder eine Simulation — und die Schüler:innen arbeiten selbstständig. Das Dashboard zeigt den Fortschritt aller Klassen auf einen Blick.',
  },
  {
    q: 'Was sind die Praxissimulationen genau?',
    a: 'Über 10 interaktive Szenarien aus dem echten Leben: virtuelles Depot eröffnen, Kontoüberweisung, Budgetplanung, Gehaltsverhandlung, Ratenkauf-Falle, Scam erkennen, Krypto-Mythen, Versicherungen und Notgroschen-Aufbau. Alles risikofrei in geschützter Umgebung — Lernen durch echtes Tun.',
  },
  {
    q: 'Muss etwas installiert werden? Ist es DSGVO-konform?',
    a: 'Nein, es muss nichts installiert werden. Skills-UP! läuft direkt im Browser, ist EU-rechtssicher und vollständig DSGVO-konform. Kein IT-Aufwand für die Schule — ein schulweites Rollout ist in wenigen Minuten möglich.',
  },
  {
    q: 'Wie ist das Programm didaktisch aufgebaut?',
    a: 'Skills-UP! kombiniert Microlearning (kurze Lerneinheiten), jugendnahe Peer-Videos, Gamification (Punkte, Quizzes, Badges) und ein Lehrer-Dashboard. Jedes der 12+ Module gibt es in einer Kurzversion (15 Minuten) und einer Langversion (50 Minuten) — flexibel für jede Unterrichtssituation.',
  },
  {
    q: 'Ist Skills-UP! ausgezeichnet oder zertifiziert?',
    a: 'Ja. Skills-UP! wurde als Top-3-Projekt der MEGA Bildungsmillion 2025 ausgezeichnet und von der Hochschule Burgenland sowie der WKÖ in Qualität und Praxisrelevanz bestätigt. Das Programm wird im Rahmen der Nationalen Finanzbildungsstrategie unterstützt.',
  },
]

export default function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            id={`faq-btn-${i}`}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 group"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span className="font-heading font-700 text-base text-text-primary leading-snug">{faq.q}</span>
            <span
              className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200"
              style={{ background: open === i ? '#4a2d8a' : '#f3f1f9' }}
            >
              <svg
                aria-hidden="true"
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
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              className="px-6 pb-5"
            >
              <p className="text-text-muted font-body text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
