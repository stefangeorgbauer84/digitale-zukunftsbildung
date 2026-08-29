import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'

export const metadata: Metadata = {
  title: 'Lehrplanmapping Finanzbildung Österreich | Skills-UP! — AHS, HAK, HTL, HLW, PTS',
  description: 'Vollständiges Lehrplanmapping: Welche Skills-UP!-Module passen zu welchem Fach und welcher Schulstufe? Übersicht für AHS, HAK, HTL, HLW, BAfEP, PTS und Berufsschulen.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/lehrplan-mapping' },
  openGraph: {
    title: 'Lehrplanmapping Finanzbildung Österreich — Skills-UP!',
    description: 'Welche Module passen zu welchem Fach? Das vollständige Mapping für alle österreichischen Schultypen — AHS, HAK, HTL, HLW, BAfEP, PTS, Berufsschule.',
    url: 'https://www.digitale-zukunftsbildung.eu/lehrplan-mapping',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lehrplanmapping Finanzbildung Österreich — Skills-UP!',
    description: 'Vollständiges Mapping: Welche Module passen zu AHS, HAK, HTL, HLW, PTS, Berufsschule?',
  },
}

const pageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Lehrplanmapping Finanzbildung Österreich',
  description: 'Vollständiges Lehrplanmapping für Skills-UP!-Module nach Schultyp und Fach.',
  url: 'https://www.digitale-zukunftsbildung.eu/lehrplan-mapping',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Lehrplanmapping', item: 'https://www.digitale-zukunftsbildung.eu/lehrplan-mapping' },
    ],
  },
}

const modulListe = [
  'Geldbiografie & Werte',
  'Haushaltsbudget & Ausgabenkontrolle',
  'Lohnzettel & Sozialversicherung',
  'Konsum & Werbepsychologie',
  'Ratenkauf, BNPL & Schuldenprävention',
  'Sparen & Vermögensaufbau',
  'Investieren & Depot',
  'Krypto-Mythen & digitale Finanztools',
  'Versicherungen',
  'Steuern & Abgaben',
  'Gehaltsverhandlung & Berufseinstieg',
  'Scams & Finanzbetrug erkennen',
]

type Check = '✓' | '○' | '–'

const mapping: { schultyp: string; slug: string; fach: string; checks: Check[] }[] = [
  {
    schultyp: 'AHS-Oberstufe',
    slug: 'ahs',
    fach: 'GWK / PuG / Klassenvorstand',
    checks: ['✓','✓','✓','✓','✓','✓','○','○','○','○','✓','✓'],
  },
  {
    schultyp: 'HAK & HAS',
    slug: 'hak',
    fach: 'BWRLB / PG / GGP',
    checks: ['✓','✓','✓','✓','✓','✓','✓','✓','✓','✓','✓','✓'],
  },
  {
    schultyp: 'HTL',
    slug: 'htl',
    fach: 'AM / Unternehmensführung / KV',
    checks: ['○','✓','✓','○','✓','✓','✓','✓','○','✓','✓','✓'],
  },
  {
    schultyp: 'HLW & Fachschulen',
    slug: 'hlw',
    fach: 'BWK / GGP / Klassenvorstand',
    checks: ['✓','✓','✓','✓','✓','✓','○','○','✓','○','✓','✓'],
  },
  {
    schultyp: 'BAfEP & BASOP',
    slug: 'bafep',
    fach: 'GGP / WK / Klassenvorstand',
    checks: ['✓','✓','✓','✓','✓','✓','○','○','○','○','✓','✓'],
  },
  {
    schultyp: 'PTS',
    slug: 'pts',
    fach: 'Berufsorientierung / Lebenskunde',
    checks: ['✓','✓','✓','✓','✓','○','○','○','○','○','✓','✓'],
  },
  {
    schultyp: 'Berufsschulen',
    slug: 'berufsschule',
    fach: 'Politische Bildung / Klassenvorstand',
    checks: ['○','✓','✓','✓','✓','✓','○','✓','○','✓','✓','✓'],
  },
]

export default function LehrplanMappingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <SiteNav />
      <main id="main-content">
        {/* Hero */}
        <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Lehrplanmapping Österreich
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Welches Modul passt<br />in welches Fach?
            </h1>
            <p className="font-body text-white/65 text-xl max-w-2xl mx-auto leading-relaxed mb-8">
              Das vollständige Mapping aller Skills-UP!-Module nach Schultyp, Fach und Schulstufe — für AHS, HAK, HTL, HLW, BAfEP, PTS und Berufsschulen.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Link href="/demo-anfragen"
                className="font-body font-700 text-sm px-6 py-3 rounded-xl text-white transition-all hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                PDF anfordern
              </Link>
              <Link href="/schulen"
                className="font-body font-700 text-sm px-6 py-3 rounded-xl text-white/80 border border-white/20 hover:border-white/40 transition-all">
                Schultyp ansehen
              </Link>
            </div>
          </div>
        </section>

        {/* Legend */}
        <section className="py-6 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 flex flex-wrap items-center gap-6 text-sm font-body text-gray-500">
            <span className="font-700 text-gray-700">Legende:</span>
            <span className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Vollständig lehrplankonform</span>
            <span className="flex items-center gap-2"><span className="text-amber-500 font-bold">○</span> Teilweise anwendbar</span>
            <span className="flex items-center gap-2"><span className="text-gray-400 font-bold">–</span> Nicht vorgesehen</span>
          </div>
        </section>

        {/* Table — desktop */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="hidden lg:block overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
              <table className="w-full text-sm font-body border-collapse">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)' }}>
                    <th className="text-left px-5 py-4 text-white/80 font-700 w-44">Schultyp</th>
                    <th className="text-left px-4 py-4 text-white/80 font-700 w-48">Fach / Kontext</th>
                    {modulListe.map((m) => (
                      <th key={m} className="px-2 py-4 text-white/70 font-600 text-xs text-center w-20">
                        <span style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'inline-block', lineHeight: 1.2 }}>
                          {m}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {mapping.map((row, i) => (
                    <tr key={row.slug} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="px-5 py-4 font-heading font-700 text-sm" style={{ color: '#1a1040' }}>
                        <Link href={`/schulen/${row.slug}`} className="hover:underline" style={{ color: '#4a2d8a' }}>
                          {row.schultyp}
                        </Link>
                      </td>
                      <td className="px-4 py-4 text-gray-500 text-xs leading-snug">{row.fach}</td>
                      {row.checks.map((c, j) => (
                        <td key={j} className="px-2 py-4 text-center text-base">
                          <span className={c === '✓' ? 'text-emerald-600' : c === '○' ? 'text-amber-500' : 'text-gray-300'}>
                            {c}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cards — mobile */}
            <div className="lg:hidden space-y-6">
              {mapping.map((row) => (
                <div key={row.slug} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
                  <div className="px-6 py-4 flex items-center justify-between"
                    style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 100%)' }}>
                    <div>
                      <Link href={`/schulen/${row.slug}`} className="font-heading font-bold text-white text-base hover:underline">
                        {row.schultyp}
                      </Link>
                      <p className="text-white/50 text-xs mt-0.5">{row.fach}</p>
                    </div>
                    <span className="text-white/40 text-sm font-body">
                      {row.checks.filter(c => c === '✓').length} / {modulListe.length} Module
                    </span>
                  </div>
                  <div className="px-6 py-4 grid grid-cols-1 gap-2">
                    {modulListe.map((m, j) => (
                      <div key={m} className="flex items-center gap-3 text-sm">
                        <span className={`shrink-0 text-base font-bold ${row.checks[j] === '✓' ? 'text-emerald-600' : row.checks[j] === '○' ? 'text-amber-500' : 'text-gray-300'}`}>
                          {row.checks[j]}
                        </span>
                        <span className="font-body text-gray-700">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nationale Finanzbildungsstrategie — Kompetenz-Mapping */}
        <section className="py-16 px-6 bg-white border-t border-gray-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-xs font-body font-700 uppercase tracking-widest px-4 py-2 rounded-full mb-5"
                style={{ background: '#f3f1f9', color: '#4a2d8a' }}>
                <svg aria-hidden="true" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
                Nationale Finanzbildungsstrategie
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1a1040' }}>
                Skills-UP! deckt alle vier<br className="hidden md:block" /> Kompetenzbereiche der Strategie ab.
              </h2>
              <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto">
                Die Nationale Finanzbildungsstrategie Österreichs baut auf dem Kompetenzrahmen der OECD/INFE auf —
                mit vier Kernbereichen. Jeder davon ist mit fertigen Skills-UP!-Modulen abgedeckt, dokumentiert und ab dem Pflichtfach 2027 direkt einsetzbar.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                {
                  nr: '01',
                  feld: 'Geld & Zahlungsverkehr',
                  desc: 'Zahlungsformen, Konto und Einkommen verstehen und sicher nutzen.',
                  color: '#4a2d8a', bg: '#f3f1f9',
                  module: ['Lohnzettel & Sozialversicherung', 'Gehaltsverhandlung & Berufseinstieg', 'Geldbiografie & Werte'],
                },
                {
                  nr: '02',
                  feld: 'Planen & Haushalten',
                  desc: 'Budget erstellen, Sparziele setzen und finanzielle Entscheidungen vorausplanen.',
                  color: '#1E6B5B', bg: '#e6f4f1',
                  module: ['Haushaltsbudget & Ausgabenkontrolle', 'Sparen & Vermögensaufbau', 'Steuern & Abgaben'],
                },
                {
                  nr: '03',
                  feld: 'Risiko & Ertrag',
                  desc: 'Chancen und Risiken von Anlage, Kredit und Absicherung realistisch einschätzen.',
                  color: '#6b4db0', bg: '#ede9f7',
                  module: ['Investieren & Depot', 'Krypto-Mythen & digitale Finanztools', 'Versicherungen'],
                },
                {
                  nr: '04',
                  feld: 'Finanzlandschaft & Konsumentenschutz',
                  desc: 'Anbieter, Werbung und Betrugsmaschen durchschauen — Rechte als Konsument:in kennen.',
                  color: '#A84E12', bg: '#fdf0e6',
                  module: ['Ratenkauf, BNPL & Schuldenprävention', 'Konsum & Werbepsychologie', 'Scams & Finanzbetrug erkennen'],
                },
              ].map((k) => (
                <div key={k.nr} className="rounded-2xl p-7 flex flex-col gap-4" style={{ background: k.bg }}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading font-800 text-3xl leading-none mb-2" style={{ color: k.color }}>{k.nr}</p>
                      <h3 className="font-heading font-700 text-lg leading-tight" style={{ color: '#1a1040' }}>{k.feld}</h3>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1.5 text-xs font-body font-700 px-3 py-1.5 rounded-full bg-white"
                      style={{ color: k.color }}>
                      <svg aria-hidden="true" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"/>
                      </svg>
                      abgedeckt
                    </span>
                  </div>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{k.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {k.module.map((m) => (
                      <span key={m} className="text-xs font-body font-600 px-3 py-1.5 rounded-full bg-white text-gray-700 border border-black/5">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WKÖ-Zertifizierung */}
            <div className="rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
              style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #0f3d2d 100%)' }}>
              <div className="shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.12)' }}>
                <svg aria-hidden="true" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fde68a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                </svg>
              </div>
              <div className="flex-1 text-center md:text-left">
                <p className="font-heading font-700 text-white text-lg mb-1">WKÖ-zertifiziert und extern geprüft.</p>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  Die Wirtschaftskammer Österreich bestätigt Qualität und Praxisrelevanz der Inhalte, die Hochschule Burgenland
                  begleitet das Programm wissenschaftlich. Skills-UP! wird im Rahmen der Nationalen Finanzbildungsstrategie unterstützt —
                  Ihre Schule setzt damit auf ein geprüftes, ministeriumsnah verankertes Programm.
                </p>
              </div>
              <Link href="/ueber-uns"
                className="shrink-0 font-body font-700 text-sm px-5 py-3 rounded-xl text-white/90 border border-white/25 hover:bg-white/10 transition-all">
                Alle Auszeichnungen →
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-14 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4" style={{ color: '#1a1040' }}>
              Das vollständige Mapping als PDF.
            </h2>
            <p className="font-body text-gray-600 leading-relaxed mb-8">
              Druckfertig, mit Modulbeschreibungen und Zeitangaben. Für Schulkonferenzen, Direktionen und Bildungsdirektionen. Kostenlos, sofort.
            </p>
            <Link href="/demo-anfragen"
              className="inline-flex items-center gap-2 font-body font-700 text-sm px-7 py-4 rounded-xl text-white transition-all hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
              PDF jetzt anfordern
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
