import type { Metadata } from 'next'
import Link from 'next/link'
import SiteNav from '@/components/SiteNav'
import SiteFooter from '@/components/SiteFooter'
import NewsletterSignup from '@/components/NewsletterSignup'

const URL = 'https://www.digitale-zukunftsbildung.eu/aktuelles/l2bgreen-lernplattform-oeffentlich'
const TITEL = 'L2BGreen macht Lernplattform für grünes Unternehmertum öffentlich zugänglich'
const KURZ = 'Das Erasmus+ Projekt L2BGreen, an dem unser Verein als Partner beteiligt ist, öffnet seine Lernumgebung: Unternehmensfälle zu Nachhaltigkeit, der KI-Lernassistent Gaia und sechs Sprachen.'

const L2B = {
  katalog: 'https://lms.l2bgreen.com/course/section.php?id=154',
  plattform: 'https://lms.l2bgreen.com/',
  website: 'https://www.l2bgreen.com/de/',
  gaia: 'https://www.l2bgreen.com/de/gaia',
  konsortium: 'https://www.l2bgreen.com/de/consortium',
  epale: 'https://epale.ec.europa.eu/en/blog/l2bgreen-learning-sustainability-through-ai',
  webinar: 'https://www.youtube.com/watch?v=tKHgI6rWLoY',
  linkedin: 'https://www.linkedin.com/company/l2bgreen/',
}

export const metadata: Metadata = {
  title: 'L2BGreen: Lernplattform für grünes Unternehmertum ist öffentlich',
  description: KURZ,
  alternates: { canonical: URL },
  openGraph: { title: TITEL, description: KURZ, url: URL, type: 'article' },
  twitter: { card: 'summary_large_image', title: TITEL, description: KURZ },
}

const articleJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NewsArticle',
  headline: TITEL,
  description: KURZ,
  author: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  publisher: { '@type': 'Organization', name: 'Digitale Zukunftsbildung', url: 'https://www.digitale-zukunftsbildung.eu' },
  datePublished: '2026-11-18',
  dateModified: '2026-11-18',
  url: URL,
  mainEntityOfPage: URL,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.digitale-zukunftsbildung.eu' },
      { '@type': 'ListItem', position: 2, name: 'Aktuelles', item: 'https://www.digitale-zukunftsbildung.eu/aktuelles' },
      { '@type': 'ListItem', position: 3, name: 'L2BGreen Lernplattform', item: URL },
    ],
  },
}

const konsortium = [
  'University of Twente / Universiteit Twente, Niederlande, Projektkoordination',
  'Bern University of Applied Sciences / Berner Fachhochschule, Schweiz',
  'Saarland University / Universität des Saarlandes, Deutschland',
  'Graz University of Technology / Technische Universität Graz, Österreich',
  'Enchatted, Griechenland',
  'ZDOPS / Združenje Delodajalcev Obrti in Podjetnikov Slovenije GIZ, Slowenien',
  'Cleantech Estonia / Eesti Rohetehnoloogia Liit MTÜ, Estland',
  'Verein zur Entwicklung der digitalen Zukunftsbildung, Österreich',
  'IEK DELTA / Scholes Delta Voreiou Ellados Anonymi Etaireia, Griechenland',
  'Estonian Business School / Sihtasutus Estonian Business School, Estland',
]

const links = [
  { label: 'L2BGreen-Lernkatalog', href: L2B.katalog, text: 'Alle Business Cases zum Auswählen' },
  { label: 'L2BGreen-Lernplattform', href: L2B.plattform, text: 'Einstieg in die Lernumgebung' },
  { label: 'L2BGreen-Projektwebsite', href: L2B.website, text: 'Projekt, Ergebnisse und Neuigkeiten' },
  { label: 'KI-Lernassistent Gaia', href: L2B.gaia, text: 'So arbeitet Gaia mit Lernenden' },
  { label: 'User-Webinar auf YouTube', href: L2B.webinar, text: 'Gaia und das Learning Management System nutzen' },
  { label: 'EPALE-Beitrag', href: L2B.epale, text: '„L2BGreen: Learning Sustainability Through AI“' },
  { label: 'Konsortium', href: L2B.konsortium, text: 'Alle zehn Partnerorganisationen' },
  { label: 'L2BGreen auf LinkedIn', href: L2B.linkedin, text: 'Laufende Meldungen aus dem Projekt' },
]

const P = 'font-body text-gray-700 leading-relaxed mb-6'
const H2 = 'font-heading text-2xl font-bold mb-4 mt-12'
const A = 'font-bold underline underline-offset-2 hover:opacity-80'

function Ext({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={A} style={{ color: '#4a2d8a' }}>
      {children}
    </a>
  )
}

export default function L2BGreenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <SiteNav />
      <main id="main-content">
        <section className="pt-32 pb-16 px-6" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 text-xs font-body text-white/40">
                <li><Link href="/" className="hover:text-white/70 transition-colors">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/aktuelles" className="hover:text-white/70 transition-colors">Aktuelles</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">L2BGreen</li>
              </ol>
            </nav>
            <div className="inline-flex items-center gap-2 text-xs font-body font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)', border: '1px solid rgba(255,255,255,0.15)' }}>
              Vereinsprojekt · 18. November 2026
            </div>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {TITEL}
            </h1>
            <p className="font-body text-white/70 text-xl leading-relaxed">
              Unser Verein ist Partner im europäischen Erasmus+ Projekt L2BGreen (Learning to Be Green). Die Lernumgebung des Projekts steht jetzt allen offen.
            </p>
          </div>
        </section>

        <article className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <p className={P}>
              Wien, 18. November 2026. Nachhaltige Entscheidungen in Unternehmen sind selten einfach. Wirtschaftliche Ziele müssen häufig mit ökologischer Verantwortung, gesellschaftlichen Auswirkungen, den Interessen unterschiedlicher Stakeholder und langfristigen Folgen abgewogen werden. Genau hier setzt das europäische Erasmus+ Projekt <Ext href={L2B.website}>L2BGreen (Learning to Be Green)</Ext> an und bringt reale Fragestellungen aus Nachhaltigkeit und Unternehmertum direkt in den Lernprozess.
            </p>
            <p className={P}>
              Das Projekt hat nun einen wichtigen Meilenstein erreicht: Die <Ext href={L2B.plattform}>L2BGreen-Lernumgebung</Ext> ist öffentlich zugänglich und kann von Lernenden, Lehrenden, unternehmerisch Tätigen sowie Fachkräften in ganz Europa genutzt werden. Sie verbindet praxisnahe Unternehmensfälle, interaktive Lernmaterialien und künstliche Intelligenz. Ziel ist es, Nachhaltigkeit nicht nur theoretisch zu vermitteln, sondern als konkrete Entscheidungsaufgabe erfahrbar zu machen.
            </p>

            <h2 className={H2} style={{ color: '#1a1040' }}>Gaia: ein KI-Lernassistent, der Fragen stellt</h2>
            <p className={P}>
              Ein zentraler Bestandteil dieser Lernerfahrung ist <Ext href={L2B.gaia}>Gaia</Ext>, der im Rahmen von L2BGreen entwickelte dialogbasierte KI-Lernassistent. Gaia begleitet Lernende bei der Bearbeitung konkreter Nachhaltigkeits- und Entrepreneurship-Fälle. Anstatt lediglich Antworten vorzugeben, stellt Gaia Fragen, reagiert auf Argumente und gibt Feedback. Dadurch werden Lernende dazu angeregt, unterschiedliche Stakeholder zu berücksichtigen, Zielkonflikte zu erkennen und eigene, nachvollziehbar begründete Lösungen für komplexe Situationen zu entwickeln.
            </p>

            <h2 className={H2} style={{ color: '#1a1040' }}>Ein Katalog praxisnaher Business Cases</h2>
            <p className={P}>
              Über die L2BGreen-Lernplattform steht ein <Ext href={L2B.katalog}>Katalog praxisnaher Business Cases</Ext> zur Verfügung. Die Themen reichen von nachhaltigen Geschäftsmodellen, Green Economy und Innovation über nachhaltiges Marketing und Greenwashing bis hin zu finanziellen Entscheidungen und verantwortungsvoller Unternehmensführung. Wer die Plattform nutzt, kann jene Fälle auswählen, die für die eigenen Interessen, das Studium oder die berufliche Tätigkeit besonders relevant sind, und diese im eigenen Tempo bearbeiten.
            </p>

            <blockquote className="rounded-2xl p-6 md:p-8 mb-6" style={{ background: 'linear-gradient(135deg, #f3f1f9 0%, #e6f4f1 100%)' }}>
              <p className="font-body text-gray-800 text-lg leading-relaxed mb-4">
                „L2BGreen ist ein wichtiger Schritt, um Bildung im Bereich Green Entrepreneurship in Europa offener, praxisnäher und inklusiver zu gestalten. Mit der öffentlich zugänglichen Version der Plattform möchten wir Lernenden, Lehrenden […] sowie Fach- und Führungskräften einen Raum bieten, in dem sie Nachhaltigkeit nicht nur als theoretisches Konzept kennenlernen, sondern konkret auf ihr Studium, ihre berufliche Tätigkeit und alltägliche Entscheidungen übertragen können.“
              </p>
              <footer className="font-body text-sm text-gray-600">
                <strong style={{ color: '#1a1040' }}>Pantelis Papadopoulos</strong>, Projektkoordinator von L2BGreen und Associate Professor an der University of Twente
              </footer>
            </blockquote>

            <h2 className={H2} style={{ color: '#1a1040' }}>Für Unterricht, Workshops und Selbststudium</h2>
            <p className={P}>
              Die Plattform ist für unterschiedliche Lernkontexte konzipiert. Lehrende und alle, die Trainings leiten, können einzelne Fälle in Lehrveranstaltungen oder Workshops integrieren. Studierende, erwachsene Lernende, unternehmerisch Tätige sowie Fachkräfte können die Inhalte auch selbstständig nutzen. Vorkenntnisse zu L2BGreen sind für den Einstieg nicht erforderlich.
            </p>
            <p className={P}>
              Ein weiterer Schwerpunkt des Projekts liegt auf dem europäischen und mehrsprachigen Ansatz. Die Lernplattform ist in sechs Sprachen verfügbar: Niederländisch, Englisch, Estnisch, Deutsch, Griechisch und Slowenisch. Damit kann L2BGreen in unterschiedlichen europäischen Bildungs- und Weiterbildungskontexten eingesetzt werden, etwa in der beruflichen Bildung, an Hochschulen, in Entrepreneurship-Programmen, in der beruflichen Weiterbildung und im lebenslangen Lernen.
            </p>
            <p className={P}>
              Für den Einstieg steht außerdem ein <Ext href={L2B.webinar}>praktisches Video</Ext> zur Verfügung, das die Nutzung des Learning Management Systems und die Arbeit mit Gaia erklärt. Ein aktueller <Ext href={L2B.epale}>Beitrag auf der europäischen Plattform EPALE</Ext> gibt zusätzliche Einblicke in den Lernansatz und zeigt, wie L2BGreen realitätsnahe Business Cases mit künstlicher Intelligenz verbindet.
            </p>

            <h2 className={H2} style={{ color: '#1a1040' }}>Über das L2BGreen-Konsortium</h2>
            <p className={P}>
              Das <Ext href={L2B.konsortium}>L2BGreen-Konsortium</Ext> vereint Universitäten, Fachhochschulen, Berufsbildungsorganisationen, Technologiepartner, Entrepreneurship-Organisationen sowie Fachleute für Nachhaltigkeit aus ganz Europa. Folgende Organisationen sind am Projekt beteiligt:
            </p>
            <ul className="font-body text-gray-700 leading-relaxed mb-6 space-y-2 list-disc pl-5">
              {konsortium.map((k) => (
                <li key={k}>
                  {k.startsWith('Verein zur Entwicklung')
                    ? <><Link href="/ueber-uns" className={A} style={{ color: '#4a2d8a' }}>Verein zur Entwicklung der digitalen Zukunftsbildung</Link>, Österreich</>
                    : k}
                </li>
              ))}
            </ul>
            <p className={P}>
              L2BGreen wird im Rahmen des Erasmus+ Programms von der Europäischen Union gefördert und läuft vom 1. April 2024 bis zum 31. März 2027. Das Projekt unterstützt die grüne und digitale Transformation Europas, indem Bildungsangebote zu Green Entrepreneurship leichter zugänglich, interaktiver und stärker mit realen Herausforderungen aus Wirtschaft und Gesellschaft verknüpft werden.
            </p>

            <h2 className={H2} style={{ color: '#1a1040' }}>Links und weiterführende Informationen</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                  className="rounded-xl p-4 border border-gray-100 bg-white hover:border-purple-200 hover:shadow-md transition-all">
                  <p className="font-heading font-bold text-sm mb-1" style={{ color: '#4a2d8a' }}>{l.label}</p>
                  <p className="font-body text-sm text-gray-600 leading-relaxed">{l.text}</p>
                </a>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1040 0%, #2d1b69 60%, #1a5c4e 100%)' }}>
              <div className="p-8 md:p-10 flex flex-col md:flex-row items-center gap-6">
                <div className="flex-1">
                  <p className="font-heading text-xl font-bold text-white mb-2">Gleich ausprobieren: ein Business Case mit Gaia.</p>
                  <p className="font-body text-white/70 text-sm leading-relaxed">Der Lernkatalog ist offen, auf Deutsch verfügbar und braucht keine Vorkenntnisse.</p>
                </div>
                <a href={L2B.katalog} target="_blank" rel="noopener noreferrer"
                  className="shrink-0 font-body font-bold text-sm px-6 py-3 rounded-xl text-white transition-all hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #4a2d8a, #2a8a76)' }}>
                  Zum Lernkatalog
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>
      <NewsletterSignup />
      <SiteFooter />
    </>
  )
}
