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

export default function BafepPage() {
  return (
    <SchulPage
      name="BAfEP & BASOP"
      kurzname="BAfEP"
      gradient="linear-gradient(135deg, #831843 0%, #be185d 60%, #ec4899 100%)"
      farbe="#be185d"
      farbeHell="#fdf2f8"
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
    />
  )
}
