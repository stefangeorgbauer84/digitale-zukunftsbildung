'use client'

import Link from 'next/link'

// Aus skillsUP LernzieleOverview.tsx: publizierte Lernziele der 15 Live-Module.
// Je Themenblock ein repräsentatives Lernziel (jeweils das greifbarste).
const LERNZIELE = [
  { modul: 'Finanzplanung', thema: 'Grundlagen', ziel: 'Fixkosten von variablen Kosten unterscheiden und typische Kostenfallen im Alltag erkennen', farbe: '#4a2d8a' },
  { modul: 'Gehalt & Einkommen', thema: 'Grundlagen', ziel: 'Einen Lohnzettel vollständig prüfen: KV-Lohn, SV-Abzüge, Lohnsteuer', farbe: '#4a2d8a' },
  { modul: 'Sparen & Geldentscheidungen', thema: 'Grundlagen', ziel: 'Einen Notgroschen in Höhe von drei Monatsgehältern systematisch aufbauen', farbe: '#4a2d8a' },
  { modul: 'Schulden & Geld leihen', thema: 'Grundlagen', ziel: 'Staatlich anerkannte Schuldenberatungsstellen als kostenlose erste Anlaufstelle benennen', farbe: '#4a2d8a' },
  { modul: 'Steuern in Österreich', thema: 'Staat & Absicherung', ziel: 'Eine Arbeitnehmerveranlagung über FinanzOnline eigenständig durchführen', farbe: '#1a5c4e' },
  { modul: 'Versicherungen verstehen', thema: 'Staat & Absicherung', ziel: 'Begründet entscheiden, welche Versicherungen im eigenen Fall notwendig sind', farbe: '#1a5c4e' },
  { modul: 'Altersvorsorge', thema: 'Staat & Absicherung', ziel: 'Die persönliche Vorsorgelücke berechnen', farbe: '#1a5c4e' },
  { modul: 'Konsumfallen', thema: 'Konsumwelt', ziel: 'Psychologische Kauftrigger wie Anchoring, Scarcity und Present Bias erklären', farbe: '#8a4a2d' },
  { modul: 'Ratenkauf & BNPL', thema: 'Konsumwelt', ziel: 'Versteckte Kosten erkennen und die tatsächlichen Kreditkosten berechnen', farbe: '#8a4a2d' },
  { modul: 'Kryptowährungen', thema: 'Konsumwelt', ziel: 'Krypto-Projekte auf Seriosität und Risiko hin prüfen', farbe: '#8a4a2d' },
  { modul: 'Finfluencer', thema: 'Medienkompetenz', ziel: 'Seriöse Finanzinformationen von bezahlter Werbung unterscheiden', farbe: '#6b2d8a' },
  { modul: 'Phishing & Finanzbetrug', thema: 'Medienkompetenz', ziel: 'Nach einem Sicherheitsvorfall die richtigen Sofortmaßnahmen einleiten', farbe: '#6b2d8a' },
  { modul: 'Bankkonto & Girokonto', thema: 'Bank & Konto', ziel: 'Die tatsächlichen Jahreskosten eines Kontos berechnen', farbe: '#2d6b8a' },
  { modul: 'Investieren', thema: 'Investieren', ziel: 'Die richtige Reihenfolge begründen: teure Schulden weg, Notgroschen anlegen, dann investieren', farbe: '#2a8a76' },
  { modul: 'Risiko & Krisen', thema: 'Medienkompetenz', ziel: 'Ein persönliches Krisenbudget für den Notfall erstellen', farbe: '#6b2d8a' },
]

interface Props {
  anzahl?: number   // wie viele Karten zeigen (default 6)
  offset?: number   // ab welchem Index starten (für Abwechslung je Seite)
  headline?: string
  eyebrow?: string
}

export default function LernzieleTeaser({
  anzahl = 6,
  offset = 0,
  headline = 'Was Jugendliche nach Skills-UP! können.',
  eyebrow = 'Konkrete Lernziele',
}: Props) {
  const items = LERNZIELE.slice(offset, offset + anzahl)

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-body font-700 uppercase tracking-widest text-primary-medium mb-3">{eyebrow}</p>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-3" style={{ color: '#1a1040' }}>
            {headline}
          </h2>
          <p className="font-body text-gray-500 text-sm max-w-lg mx-auto">
            Jedes Modul hat klare, messbare Lernziele: kein Wischiwaschi, sondern was Schüler:innen danach wirklich können.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {items.map((lz) => (
            <div
              key={lz.modul}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-5 hover:shadow-md transition-shadow relative overflow-hidden"
            >
              {/* Farbstreifen links */}
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl" style={{ background: lz.farbe }} />
              <p className="text-xs font-body font-700 uppercase tracking-widest mb-1 pl-3" style={{ color: lz.farbe }}>
                Modul: {lz.modul}
              </p>
              <p className="font-body font-600 text-gray-500 text-xs mb-1 pl-3">Ihre Schüler:innen können danach:</p>
              <p className="font-body text-gray-700 text-sm leading-relaxed pl-3">
                {lz.ziel}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/lernziele"
            className="inline-flex items-center gap-2 font-body font-700 text-sm text-primary-medium hover:text-primary-dark transition-colors"
          >
            Alle Lernziele ansehen
            <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
