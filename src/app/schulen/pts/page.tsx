import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'Polytechnische Schule | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für die PTS — erstes Einkommen, Konsumfallen, Sparziele. Direkt einsetzbar in Berufsorientierung und Lebenskunde.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
  </svg>
)

export default function PtsPage() {
  return (
    <SchulPage
      name="Polytechnische Schule"
      kurzname="PTS"
      gradient="linear-gradient(135deg, #78350f 0%, #b45309 60%, #f59e0b 100%)"
      farbe="#b45309"
      farbeHell="#fffbeb"
      schulstufen="9. Schulstufe"
      lehrplanFach="Berufsorientierung · Lebenskunde · Klassenvorstand · Soziales Lernen"
      icon={icon}
      lehrerProblem="Viele meiner Schüler:innen fangen in wenigen Monaten eine Lehre an. Aber sie haben keine Ahnung, was sie mit ihrem ersten Lehrlingsgeld machen sollen — und ich hab kein fertiges Material dafür."
      intro="Die PTS ist die letzte Station vor dem Berufsleben. Genau hier sitzt Skills-UP! perfekt: Die Module treffen Jugendliche in dem Moment, wo Finanzkompetenz plötzlich keine Schulübung mehr ist — sondern echte Lebensrealität, die in Wochen beginnt."
      lehrplanPassung={[
        {
          fach: 'Berufsorientierung (BOK)',
          kontext: '"Welches Gehalt bekomme ich als Lehrling? Was davon bleibt mir?" — Skills-UP! beantwortet diese Fragen mit einer echten Simulation direkt in der Stunde. Berufswahl und Finanzkompetenz zusammen.',
        },
        {
          fach: 'Lebenskunde & Soziales Lernen',
          kontext: 'Eigenverantwortung, Entscheidungen treffen, mit Konsequenzen umgehen — das sind Kernthemen der PTS. Skills-UP! macht genau das mit Geld erlebbar.',
        },
        {
          fach: 'Klassenvorstand',
          kontext: '"Was erwarten dich in der Lehre finanziell?" ist ein perfektes Klassenvorstands-Thema — ohne dass du selbst ein Finanzexperte sein musst. Skills-UP! liefert die Inhalte, du begleitest das Gespräch.',
        },
        {
          fach: 'Deutsch (Bewerbung & Vorbereitung)',
          kontext: 'Gehaltsverhandlung, Lehrvertrag lesen, Bewerbungsunterlagen — Skills-UP! ergänzt die Bewerbungsvorbereitung um die finanzielle Seite des Berufseinstiegs.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Einstieg: Was verdienst du als Lehrling?',
          was: 'Schüler:innen wählen in der App ihren Wunschberuf und sehen sofort das realistische Lehrlingseinkommen im 1. Lehrjahr. Der erste Schock ist meistens lehrreich — und erzeugt sofort echte Diskussion.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Simulation: Erster Monat',
          was: 'Mit dem Lehrlingseinkommen planen Schüler:innen ihren ersten Monat: Handy, Öffis oder Moped, Mittagessen, Freizeitausgaben, eventuell Miete. Die App zeigt, was am Ende des Monats übrig bleibt.',
          zeitMinuten: 20,
        },
        {
          schritt: 'Ratenkauf und die Handy-Falle',
          was: 'Ein kurzes Peer-Video zeigt eine:n Lehrling, der/die sich auf Raten ein neues Handy gekauft hat — und jetzt nicht mehr weiß, wie er/sie die Rechnung bezahlen soll. Das kennen viele.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Sparziel setzen',
          was: 'Führerschein, Urlaub, eigene Wohnung — Schüler:innen definieren ihr persönliches Sparziel und die App berechnet, wie lange sie mit welchem monatlichen Betrag dafür brauchen. Konkret und motivierend.',
          zeitMinuten: 10,
        },
      ]}
      themen={[
        'Lehrlingseinkommen nach Beruf',
        'Was bleibt vom Lehrlingsgeld?',
        'Ersten Monatsplan erstellen',
        'Fixkosten vs. variable Ausgaben',
        'Handy- und Datenverträge',
        'Ratenkauf kritisch sehen',
        'Schuldenfallen früh erkennen',
        'Notgroschen aufbauen',
        'Sparziel Führerschein',
        'Sparziel erste Wohnung',
        'Konsumfallen & Werbung',
        'Onlinekäufe & Retouren',
        'Bankkonto & digitale Zahlung',
        'Finanzielle Eigenverantwortung',
      ]}
      features={[
        {
          titel: 'Lehrlings-Einkommens-Simulation',
          nutzenfuerLehrer: 'Schüler:innen sehen das reale Lehrlingseinkommen für über 50 Lehrberufe — inklusive Abzüge. Das ist sachlich, konkret und startet sofort echte Gespräche über Berufswahl und Lebensplanung. Du brauchst keine Zahlen selbst recherchieren.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
        },
        {
          titel: 'Modul: Erste Wohnung & Eigenständigkeit',
          nutzenfuerLehrer: 'Was kostet eine WG-Zimmer in der Nähe der Berufsschule? Was kostet Wohnen alleine? Skills-UP! macht das konkret und berechenbar — ideal für Schüler:innen, die kurz vor dem Auszug stehen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
        },
        {
          titel: 'Gamification für wenig motivierte Schüler:innen',
          nutzenfuerLehrer: 'PTS-Schüler:innen sind oft schwer zu motivieren — Punkte, Levels und kurze Challenges ändern das. Skills-UP! ist so gestaltet, dass Schüler:innen, die sonst wenig mitmachen, aktiv dabei sind.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
        },
        {
          titel: 'Kurze Einheiten (15–20 Minuten)',
          nutzenfuerLehrer: 'Skills-UP! ist modular aufgebaut — einzelne Einheiten sind 15 bis 20 Minuten kurz. Ideal für die PTS, wo längere Konzentrationsphasen herausfordernd sein können. Du kannst flexibel einsetzen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Ich hab die Simulation mit dem Lehrlingsgeld gestartet, und plötzlich wollten alle wissen: Was verdient man als Elektriker? Und als Friseurin? Das war ein Gespräch über Berufswahl, das ich so nicht geplant hatte — und das war das Beste an der Stunde.',
        person: 'Lehrerin für Berufsorientierung, PTS Niederösterreich',
      }}
    />
  )
}
