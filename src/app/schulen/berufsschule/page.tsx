import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'Berufsschulen & Lehre | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für Berufsschulen und Lehrbetriebe. Lehrlingseinkommen, Ratenkauf, Schuldenprävention und finanzielle Selbstständigkeit. Kurze Module, hohe Relevanz.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

const moneyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
const bookIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
const alertIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const taxIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
const piggyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.5 3.3 1.5 4.5L5 21h6l1-1 1 1h6l-1.5-4.5C19.5 15.3 20 13.8 20 12c0-1-.3-2-.5-2.5.5-.7 1-2.5.5-4.5z"/></svg>
const playIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
const chartIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>

export default function BerufsschulePage() {
  return (
    <SchulPage
      name="Berufsschulen & Lehre"
      kurzname="Lehre"
      gradient="linear-gradient(135deg, #2d1b69 0%, #4a2d8a 60%, #6b4db0 100%)"
      farbe="#4a2d8a"
      farbeHell="#f3f1f9"
      schulstufen="Lehre / 9.–12. Schulstufe"
      lehrplanFach="Politische Bildung · Lebenskunde · Projektunterricht · Marktplatz Lern-Apps"
      icon={icon}
      lehrerProblem="Meine Lehrlinge verdienen schon Geld, aber am Ende des Monats weiß die Hälfte nicht mehr, wo es geblieben ist. Und ich hab kaum Zeit und kein fertiges Material, das das wirklich ändert."
      intro="Lehrlinge stehen nicht kurz vor dem Berufsleben, sie sind bereits mittendrin. Sie verdienen echtes Geld, schließen Verträge ab und treffen täglich finanzielle Entscheidungen. Skills-UP! trifft diese Zielgruppe genau dort: praxisnah, kurz, digital und ohne Vorbereitung für Lehrkräfte. Im Unterschied zur PTS sind Lehrlinge nicht mehr in der Vorbereitung. Sie handeln bereits. Skills-UP! setzt dort an, wo die Fehler schon passieren."
      lehrplanPassung={[
        {
          fach: 'Politische Bildung & Wirtschaftskunde',
          kontext: 'Konsum, Arbeit, Einkommen, soziale Sicherheit. Skills-UP! macht diese Lehrplaninhhalte an konkreten Lehrlings-Szenarien lebendig. Kein Abstraktionsproblem mehr.',
        },
        {
          fach: 'Lebenskunde & Persönlichkeitsbildung',
          kontext: 'Eigenverantwortung, Entscheidungskompetenz, kritisches Denken, das sind Kernziele der Berufsschule. Skills-UP! übt genau das mit echten Geldsituationen.',
        },
        {
          fach: 'Projektunterricht / Projektwochen',
          kontext: '"Mein Finanzplan für das erste Lehrjahr" als Kleingruppenprojekt: strukturiert, digital begleitet, mit messbarem Ergebnis. Ideal für Blockwochen an der Berufsschule.',
        },
        {
          fach: 'Marktplatz Lern-Apps',
          kontext: 'Skills-UP! ist über den offiziellen Marktplatz Lern-Apps verfügbar, das vereinfacht den Zugang für Berufsschulen erheblich. Kein Sonderantrag, keine Zusatzinstallation.',
        },
        {
          fach: 'Betriebliche Ausbildung',
          kontext: 'Lehrbetriebe können Skills-UP! als Teil der betrieblichen Ausbildung einsetzen, als begleitendes Programm zwischen Berufsschulblöcken oder als Onboarding-Baustein.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Wo ist dein Geld geblieben?',
          was: 'Schüler:innen rekonstruieren ihren letzten Monat in der App: Was haben sie eingenommen, was ausgegeben? Kategorisch aufgelistet. Viele sind überrascht. Das ist der Einstieg, und er braucht keine Vorbereitung.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Budget für den nächsten Monat',
          was: 'Auf Basis des eigenen Einkommens erstellen Lehrlinge in der App einen realistischen Monatsplan. Die App zeigt automatisch, ob er aufgeht, und wo die kritischen Stellen sind.',
          zeitMinuten: 20,
        },
        {
          schritt: 'Peer-Video: Die Ratenkauf-Geschichte',
          was: 'Ein Lehrling erzählt, wie er sich ein E-Bike auf Raten gekauft hat, und drei Monate später nicht mehr schlafen konnte. Das ist nicht dramatisiert, das ist authentisch. Und es öffnet das Gespräch über Schulden ohne Moralpredigt.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Notgroschen-Ziel',
          was: 'Schüler:innen legen fest, wie viel sie bis Ende des Lehrjahres ansparen wollen. Die App zeigt den Weg dorthin und schickt optional Erinnerungen. Ein kleiner Abschluss mit großer Wirkung.',
          zeitMinuten: 10,
        },
      ]}
      module={[
        { titel: 'Gehalt & Einkommen', lernziel: 'Lohnzettel lesen, Brutto-Netto mit österreichischen Zahlen berechnen, Kollektivvertrag kennen, und die Negativsteuer (bis €110) via FinanzOnline holen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Einkommen', icon: moneyIcon },
        { titel: 'Steuern in Österreich', lernziel: 'Arbeitnehmerveranlagung selbst durchführen: Was ist die Lohnsteuergrenze? Was ist die Negativsteuer? FinanzOnline in 10 Minuten nutzen.', dauer: '15 oder 50 Min', level: 'Mittel', kategorie: 'Steuern', icon: taxIcon },
        { titel: 'Ratenkauf & BNPL', lernziel: 'Klarna, Afterpay und Ratenkauf mit realen Zahlen durchrechnen: Effektivzins, Mahngebühren, KSV-Eintrag, und Widerrufsrecht als Schutz.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Konsumentenschutz', icon: alertIcon },
        { titel: 'Risiko & Krisen', lernziel: 'Notgroschen aufbauen (3 Monatsgehälter), Eskalationskette von Mahnung bis Pfändung kennen, und wissen, wo man kostenlos Hilfe bekommt.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Krisenmanagement', icon: piggyIcon },
        { titel: 'Schulden & Geld leihen', lernziel: 'Warnsignale für problematische Schulden früh erkennen: Was darf Inkasso wirklich? Welche Schulden sind gefährlich? AK und Schuldnerberatung als Anlaufstelle.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Schuldenprävention', icon: chartIcon },
        { titel: 'Finanzplanung', lernziel: 'Monatlichen Finanzplan für Lehrlinge erstellen: Lehrlingslohn einteilen, Dauerauftrag fürs Sparen einrichten, Fixkosten im Griff behalten.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Budgetplanung', icon: bookIcon },
      ]}
      simulationen={[
        { titel: 'Arbeitnehmerveranlagung', untertitel: 'Steuerausgleich Schritt für Schritt durchführen: Negativsteuer beantragen, Werbungskosten eintragen, mit FinanzOnline-Simulation.', dauer: '15–25 Min', icon: taxIcon },
        { titel: 'Kredit-Falle', untertitel: 'Konsumkredit, Ratenkauf, BNPL. Fallstricke und Gesamtkosten berechnen, VKrG-Rechte als Lehrling kennen.', dauer: '15–20 Min', icon: alertIcon },
        { titel: 'Konsumfallen-Parcours', untertitel: 'FOMO, Dark Patterns, Abo-Fallen und BNPL-Versuchungen erleben, mit Widerrufsrecht nach FAGG als Schutz.', dauer: '15–20 Min', icon: playIcon },
        { titel: 'Nebenjob & Geringfügigkeit', untertitel: 'Geringfügigkeitsgrenze kennen, SV-Pflicht verstehen, Steuerpflicht bei Mehrfachbeschäftigung, mit konkreten Zahlen 2026.', dauer: '15–20 Min', icon: moneyIcon },
      ]}
      themen={[
        'Lehrlingseinkommen verstehen',
        'Budget erstellen & führen',
        'Fixkosten vs. Impulskäufe',
        'Ratenkauf kritisch bewerten',
        'Buy-Now-Pay-Later einschätzen',
        'Schuldenspirale früh stoppen',
        'Notgroschen aufbauen',
        'Sparziele konkret verfolgen',
        'Versicherungen als Lehrling',
        'Handy- und Streaming-Verträge',
        'Onlinekäufe & Rückgaberecht',
        'Digitale Zahlungsmittel',
        'Girokonto & Überziehungsrahmen',
        'Finanzielle Selbstständigkeit',
      ]}
      features={[
        {
          titel: 'Kurze Module (10–20 Min.)',
          nutzenfuerLehrer: 'Berufsschule läuft in Blöcken, Konzentration ist begrenzt. Skills-UP! ist in kurze, selbstständige Einheiten aufgeteilt. Du entscheidest, ob du 20 Minuten oder einen ganzen Block investierst.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
        },
        {
          titel: 'Marktplatz Lern-Apps Zugang',
          nutzenfuerLehrer: 'Skills-UP! ist über den offiziellen Marktplatz Lern-Apps zugänglich. Das bedeutet: kein Datenschutzantrag, keine eigene IT-Installation, kein langer Genehmigungsprozess. Du kannst morgen starten.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
        },
        {
          titel: 'Lehrlings-spezifische Szenarien',
          nutzenfuerLehrer: 'Die Inhalte sind nicht für Schüler:innen allgemein, sie sind auf Lehrlinge zugeschnitten: Lehrlingsentschädigung, Berufsschulalltag, Moped-Finanzierung, WG-Zimmer. Das erkennen Lehrlinge sofort.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
        },
        {
          titel: 'Auch für Lehrbetriebe',
          nutzenfuerLehrer: 'Lehrbetriebe können Skills-UP! als Onboarding-Modul oder als laufende Begleitung zwischen Berufsschulblöcken einsetzen, ein starkes Signal an Lehrlinge: "Wir nehmen eure finanzielle Entwicklung ernst."',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
        },
        {
          titel: 'Gamification & Eigenmotivation',
          nutzenfuerLehrer: 'Lehrlinge, die nach der Schule schon gearbeitet haben, wollen keine Kindererziehung. Skills-UP! funktioniert wie eine gute App. Punkte, Levels, Fortschritt. Eigenmotivation statt Pflichterfüllung.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
        },
        {
          titel: 'Dashboard für Lehrkräfte & Betriebe',
          nutzenfuerLehrer: 'Wer hat welche Module abgeschlossen? Wer zeigt Wissenslücken beim Thema Schulden? Das Dashboard gibt dir und dem Lehrbetrieb einen klaren Überblick, ohne Nachfragen, ohne Aufsätze.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Ich hab Skills-UP! in einer Blockwoche eingesetzt. Am dritten Tag haben Lehrlinge angefangen, sich gegenseitig beim Budget-Tool zu helfen. Ich musste fast nichts tun. Das war das erste Mal seit Jahren, dass ich in einer Berufsschulstunde wirklich ruhig dasitzen konnte.',
        person: 'Lehrer für Politische Bildung, Berufsschule Linz',
      }}
      lehrerFoto="/fotos/lehrer/berufsschule.png"
      gruenderStatement="Lehrlinge verdienen echtes Geld, oft das erste Mal in ihrem Leben. Die meisten haben niemanden, der ihnen erklärt, was man damit macht. Skills-UP! springt genau dort ein: praxisnah, in kurzen Einheiten, und mit Szenarien, die Lehrlinge aus ihrem eigenen Alltag kennen."
    />
  )
}
