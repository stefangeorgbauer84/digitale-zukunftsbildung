import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'BAfEP & BASOP | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für BAfEP und BASOP — Finanzkompetenz als persönliche Stärke und als pädagogisches Werkzeug für zukünftige Multiplikator:innen.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)

const bookIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
const alertIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const shieldIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const chartIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
const playIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
const homeIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>

export default function BafepPage() {
  return (
    <SchulPage
      name="BAfEP & BASOP"
      kurzname="BAfEP"
      gradient="linear-gradient(135deg, #2d1b69 0%, #6b4db0 60%, #9b7ed4 100%)"
      farbe="#6b4db0"
      farbeHell="#f3f1f9"
      schulstufen="9.–13. Schulstufe"
      lehrplanFach="Persönlichkeitsbildung · Pädagogik · Praktikum · Projektarbeit"
      icon={icon}
      lehrerProblem="Ich bilde Erzieher:innen und Sozialpädagog:innen aus. Geld ist in ihrem späteren Berufsfeld ständig ein Thema — aber in der Ausbildung kommt Finanzkompetenz kaum vor."
      intro="BAfEP und BASOP bilden Menschen aus, die später mit Kindern, Jugendlichen und Familien arbeiten. Skills-UP! ist hier doppelt wirksam: Schüler:innen stärken ihre eigene Finanzkompetenz — und lernen gleichzeitig, wie man über Geld spricht und Finanzkompetenz weitervermittelt."
      lehrplanPassung={[
        {
          fach: 'Persönlichkeitsbildung & Selbstkompetenz',
          kontext: 'Die eigene Geldbiografie, finanzielle Glaubenssätze, Konsumgewohnheiten — Skills-UP! bietet Anlässe für tiefe Selbstreflexion, die in der Pädagogik-Ausbildung oft fehlen.',
        },
        {
          fach: 'Pädagogik & Didaktik',
          kontext: 'Wie erkläre ich einem Kind, was ein Budget ist? Wie spreche ich mit Eltern über Geldprobleme? Skills-UP! gibt Schüler:innen methodische Werkzeuge für diese Gespräche.',
        },
        {
          fach: 'Praktikum & Berufsfeld',
          kontext: 'Im Praktikum erleben BAfEP-Schüler:innen, wie sehr Geld im Alltag von Familien eine Rolle spielt. Skills-UP! gibt ihnen Hintergrundwissen und Gesprächskompetenz für genau diese Situationen.',
        },
        {
          fach: 'Projektarbeit & Abschlussarbeiten',
          kontext: '"Finanzbildung im Kindergarten — wie man Kindern Geldverständnis beibringt" ist ein starkes Abschlussthema. Skills-UP! liefert die inhaltliche Basis und Praxismethoden.',
        },
        {
          fach: 'Sozialkunde & Gesellschaft (BASOP)',
          kontext: 'Armut, soziale Ungleichheit, Schulden als gesellschaftliche Themen — Skills-UP! verbindet persönliche Finanzkompetenz mit sozialer Reflexion.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Geldbiografie',
          was: '"Was war deine erste Erinnerung an Geld?" — Schüler:innen reflektieren kurz in der App, dann teilen sie in Kleingruppen. Du moderierst. Kein Wissen nötig, nur ein offenes Setting.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Modul: Konsumdruck bei Jugendlichen',
          was: 'Wie wirkt Werbung? Was löst Social Media bei Kaufentscheidungen aus? Schüler:innen erleben das in der Simulation — und reflektieren dann aus pädagogischer Perspektive: Wie würden sie das mit Jugendlichen besprechen?',
          zeitMinuten: 20,
        },
        {
          schritt: 'Methodenwerkzeug: Finanzbildung mit Kindern',
          was: 'Skills-UP! zeigt einfache Methoden, wie man mit Kindern über Geld spricht — Rollenspiele, Geschichten, Alltagssituationen. Schüler:innen erproben diese Methoden direkt im Unterricht.',
          zeitMinuten: 15,
        },
        {
          schritt: 'Fallarbeit: Familie mit Geldproblemen',
          was: 'Ein Fallbeispiel aus dem Berufsalltag: Eine Familie kommt zur Beratung, Geldprobleme spielen eine Rolle. Wie reagierst du? Schüler:innen erarbeiten in Gruppen Gesprächsstrategien.',
          zeitMinuten: 5,
        },
      ]}
      module={[
        { titel: 'Konsumfallen', lernziel: 'FOMO, Present Bias, Dark Patterns verstehen — und als pädagogische Fachkraft wissen, wie Konsumpsychologie auf Jugendliche wirkt.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Pädagogik & Konsum', icon: alertIcon },
        { titel: 'Schulden & Geld leihen', lernziel: 'Soziale Folgen von Schulden verstehen: Inkasso, Eskalationskette, Schuldnerberatung — Gesprächsgrundlage für Familien- und Sozialarbeit.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Soziale Kompetenz', icon: chartIcon },
        { titel: 'Finanzplanung', lernziel: 'Persönliches Monatsbudget erstellen — und die Methode kennenlernen, um sie später einfach mit Kindern, Jugendlichen oder Familien zu üben.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Lebenskompetenz', icon: bookIcon },
        { titel: 'Finfluencer in Österreich', lernziel: 'Parasoziale Beziehungen und Medienmanipulation verstehen — FMA-Regulierung und Prebunking als Medienkompetenz für die Arbeit mit Jugendlichen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Medienkompetenz', icon: shieldIcon },
        { titel: 'Risiko & Krisen', lernziel: 'Notgroschen, Krisenbudget, Eskalationskette — finanzielle Risikolagen frühzeitig erkennen und geeignete Stellen kennen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Krisenmanagement', icon: chartIcon },
        { titel: 'Ratenkauf & BNPL', lernziel: 'BNPL-Risiken mit echten Zahlen verstehen: warum Jugendliche besonders gefährdet sind und wie man das Thema pädagogisch aufgreift.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Konsumentenschutz', icon: alertIcon },
      ]}
      simulationen={[
        { titel: 'Konsumfallen-Parcours', untertitel: 'FOMO, künstliche Knappheit, Abo-Fallen — als Pädagogin selbst erleben, was Jugendliche täglich erleben.', dauer: '15–20 Min', icon: playIcon },
        { titel: 'Bank-Simulation', untertitel: 'Girokonto eröffnen, Dauerauftrag einrichten, Überweisung — Grundlagen die man später einfach erklären kann.', dauer: '20–30 Min', icon: homeIcon },
        { titel: 'Kredit-Falle', untertitel: 'Konsumkredit und BNPL-Szenarien durchspielen — ideale Grundlage für Elterngespräche über Schulden.', dauer: '15–20 Min', icon: alertIcon },
        { titel: 'Versicherungs-Entscheider', untertitel: 'Welche Versicherungen braucht man wirklich? Szenarien die man auch mit Familien besprechen kann.', dauer: '15–20 Min', icon: shieldIcon },
      ]}
      themen={[
        'Eigene Geldbiografie reflektieren',
        'Finanzielle Glaubenssätze',
        'Konsumdruck bei Jugendlichen',
        'Schuldenprävention',
        'Soziale Folgen finanzieller Unsicherheit',
        'Armut & gesellschaftliche Ungleichheit',
        'Finanzkompetenz mit Kindern',
        'Gesprächsführung über Geld',
        'Pädagogische Methoden',
        'Elternarbeit & Finanzen',
        'Budgetplanung im Alltag',
        'Digitale Zahlungsmittel',
        'Verträge & erste Einkommen',
        'Sparziele formulieren',
      ]}
      features={[
        {
          titel: 'Reflexions-Module',
          nutzenfuerLehrer: 'Skills-UP! bietet strukturierte Reflexionsaufgaben: eigene Geldbiografie, finanzielle Überzeugungen, Konsumgewohnheiten. Das ist ideal für Persönlichkeitsbildungs-Stunden — du musst die Fragen nicht selbst entwickeln.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
        },
        {
          titel: 'Pädagogisches Methodenmodul',
          nutzenfuerLehrer: 'Ein eigener Bereich zeigt, wie man Finanzkompetenz an Kinder und Jugendliche vermittelt — mit einfachen Methoden, Geschichten und Spielen. Das ist Fachdidaktik für einen Bereich, der sonst kaum Materialien hat.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>,
        },
        {
          titel: 'Peer-Videos — echte Gespräche',
          nutzenfuerLehrer: 'Gleichaltrige sprechen über ihre Erfahrungen mit Geld, Schulden, Konsumdruck — offen und authentisch. Ideal für BAfEP, weil diese Offenheit im pädagogischen Kontext besonders wertvoll ist.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
        },
        {
          titel: 'Dashboard für Lernbegleitung',
          nutzenfuerLehrer: 'Du siehst, wo Schüler:innen stehen — inhaltlich und persönlich. Das ist in einem Ausbildungskontext wichtig: Du erkennst früh, wenn jemand selbst Unsicherheiten hat, die er later im Beruf mitbringt.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Eine Schülerin hat nach der Geldbiografie-Einheit gesagt: Jetzt verstehe ich, warum manche Familien im Kindergarten so schwer über Geld reden können. Das war ein Moment, den ich mit keiner Unterlagematerialien erreicht hätte.',
        person: 'Pädagogik-Lehrerin, BAfEP Wien',
      }}
      lehrerFoto="/fotos/lehrer/bafep.png"
      gruenderStatement="Wer als Pädagogin oder Pädagoge arbeitet, prägt früh das Verhältnis von Kindern zu Geld und Konsum. Deshalb ist Finanzbildung an der BAfEP keine nette Ergänzung — sie ist eine professionelle Notwendigkeit. Skills-UP! liefert dafür das Fundament."
    />
  )
}
