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

const moneyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
const bookIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
const alertIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const piggyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.5 3.3 1.5 4.5L5 21h6l1-1 1 1h6l-1.5-4.5C19.5 15.3 20 13.8 20 12c0-1-.3-2-.5-2.5.5-.7 1-2.5.5-4.5z"/></svg>
const playIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
const homeIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>

export default function PtsPage() {
  return (
    <SchulPage
      name="Polytechnische Schule"
      kurzname="PTS"
      gradient="linear-gradient(135deg, #061a15 0%, #1a5c4e 60%, #2A8A76 100%)"
      farbe="#1a5c4e"
      farbeHell="#e6f4f1"
      schulstufen="9. Schulstufe"
      lehrplanFach="Berufsorientierung · Lebenskunde · Klassenvorstand · Soziales Lernen"
      icon={icon}
      lehrerProblem="Viele meiner Schüler:innen fangen in wenigen Monaten eine Lehre an. Aber sie haben keine Ahnung, was sie mit ihrem ersten Lehrlingsgeld machen sollen — und ich hab kein fertiges Material dafür."
      intro="Die PTS ist die letzte Station vor dem Berufsleben. Genau hier sitzt Skills-UP! perfekt: Die Module treffen Jugendliche in dem Moment, wo Finanzkompetenz plötzlich keine Schulübung mehr ist — sondern echte Lebensrealität, die in Wochen beginnt. Der Unterschied zur Berufsschule: PTS-Schüler:innen stehen noch davor. Skills-UP! gibt ihnen einen Vorsprung — bevor das erste Lehrlingsgeld ankommt."
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
      module={[
        { titel: 'Gehalt & Einkommen', lernziel: 'Lohnzettel lesen, Brutto-Netto verstehen — und mit der Negativsteuer bis zu €110 vom Finanzamt zurückbekommen. Für Lehrlinge direkt relevant.', dauer: '15 Min', level: 'Einsteiger', kategorie: 'Einkommen', icon: moneyIcon },
        { titel: 'Finanzplanung', lernziel: 'Ersten Monatsplan erstellen: Lehrlingslohn, Fixkosten, Freizeit, Sparen. Die 50-30-20-Regel und "Pay yourself first" als einfache Strategie.', dauer: '15 Min', level: 'Einsteiger', kategorie: 'Budgetplanung', icon: bookIcon },
        { titel: 'Ratenkauf & BNPL', lernziel: 'Klarna und Co. mit echten Zahlen bewerten: Effektivzins, Mahngebühren, KSV-Eintrag — und das 14-Tage-Widerrufsrecht als Schutz kennen.', dauer: '15 Min', level: 'Einsteiger', kategorie: 'Konsumentenschutz', icon: alertIcon },
        { titel: 'Konsumfallen', lernziel: 'FOMO, Ankerpreise und Flash-Sales erkennen — 24-Stunden-Regel als einfachste Gegenstrategie für Impulskäufe.', dauer: '15 Min', level: 'Einsteiger', kategorie: 'Konsumpsychologie', icon: alertIcon },
        { titel: 'Sparen & Geldentscheidungen', lernziel: 'Zinseszins verstehen und Sparziel berechnen: Führerschein, Moped, erste Wohnung — wie lange dauert das beim aktuellen Lehrlingslohn?', dauer: '15 Min', level: 'Einsteiger', kategorie: 'Sparziele', icon: piggyIcon },
        { titel: 'Risiko & Krisen', lernziel: 'Notgroschen aufbauen: Was ist ein Notgroschen? Warum braucht man ihn? Wie baut man ihn realistisch mit einem Lehrlingslohn auf?', dauer: '15 Min', level: 'Einsteiger', kategorie: 'Krisenvorsorge', icon: piggyIcon },
      ]}
      simulationen={[
        { titel: 'Gehaltsverhandlung', untertitel: 'KV-Mindestlohn für 50+ Lehrberufe recherchieren, Argumente formulieren — dein Gehalt als Lehrling ist verhandelbar.', dauer: '15–20 Min', icon: moneyIcon },
        { titel: 'Konsumfallen-Parcours', untertitel: 'FOMO, Dark Patterns, Abo-Fallen und BNPL-Versuchungen — in 15 Minuten erkennen was vorher unsichtbar war.', dauer: '15–20 Min', icon: playIcon },
        { titel: 'Bank-Simulation', untertitel: 'Girokonto eröffnen, Dauerauftrag einrichten, erste Überweisung — Bankalltag in der Simulation.', dauer: '20–30 Min', icon: homeIcon },
        { titel: 'Erste eigene Wohnung', untertitel: 'Was kostet Wohnen wirklich? Kaution, Provision, Betriebskosten — alles mit realen Zahlen durchsimuliert.', dauer: '20–30 Min', icon: homeIcon },
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
      lehrerFoto="/fotos/lehrer/pts.png"
      gruenderStatement="Schüler:innen der PTS stehen kurz vor ihrer Berufswahl und dem ersten echten Einkommen. Skills-UP! gibt ihnen das Handwerkszeug, das kein Beruf automatisch mitliefert: wie man mit Geld wirklich umgeht — und welche Entscheidungen man lieber nicht bereuen möchte."
    />
  )
}
