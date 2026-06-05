import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'Berufsschulen & Lehre | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für Berufsschulen und Lehrbetriebe — Lehrlingseinkommen, Ratenkauf, Schuldenprävention und finanzielle Selbstständigkeit. Kurze Module, hohe Relevanz.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
  </svg>
)

export default function BerufsschulePage() {
  return (
    <SchulPage
      name="Berufsschulen & Lehre"
      kurzname="Lehre"
      gradient="linear-gradient(135deg, #134e4a 0%, #2A8A76 60%, #34d399 100%)"
      farbe="#2A8A76"
      farbeHell="#f0fdfa"
      schulstufen="Lehre / 9.–12. Schulstufe"
      lehrplanFach="Politische Bildung · Lebenskunde · Projektunterricht · Marktplatz Lern-Apps"
      icon={icon}
      lehrerProblem="Meine Lehrlinge verdienen schon Geld — aber am Ende des Monats weiß die Hälfte nicht mehr, wo es geblieben ist. Und ich hab kaum Zeit und kein fertiges Material, das das wirklich ändert."
      intro="Lehrlinge stehen nicht kurz vor dem Berufsleben — sie sind bereits mittendrin. Sie verdienen echtes Geld, schließen Verträge ab und treffen täglich finanzielle Entscheidungen. Skills-UP! trifft diese Zielgruppe genau dort: praxisnah, kurz, digital und ohne Vorbereitung für Lehrkräfte."
      lehrplanPassung={[
        {
          fach: 'Politische Bildung & Wirtschaftskunde',
          kontext: 'Konsum, Arbeit, Einkommen, soziale Sicherheit — Skills-UP! macht diese Lehrplaninhhalte an konkreten Lehrlings-Szenarien lebendig. Kein Abstraktionsproblem mehr.',
        },
        {
          fach: 'Lebenskunde & Persönlichkeitsbildung',
          kontext: 'Eigenverantwortung, Entscheidungskompetenz, kritisches Denken — das sind Kernziele der Berufsschule. Skills-UP! übt genau das mit echten Geldsituationen.',
        },
        {
          fach: 'Projektunterricht / Projektwochen',
          kontext: '"Mein Finanzplan für das erste Lehrjahr" als Kleingruppenprojekt: strukturiert, digital begleitet, mit messbarem Ergebnis. Ideal für Blockwochen an der Berufsschule.',
        },
        {
          fach: 'Marktplatz Lern-Apps',
          kontext: 'Skills-UP! ist über den offiziellen Marktplatz Lern-Apps verfügbar — das vereinfacht den Zugang für Berufsschulen erheblich. Kein Sonderantrag, keine Zusatzinstallation.',
        },
        {
          fach: 'Betriebliche Ausbildung',
          kontext: 'Lehrbetriebe können Skills-UP! als Teil der betrieblichen Ausbildung einsetzen — als begleitendes Programm zwischen Berufsschulblöcken oder als Onboarding-Baustein.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Wo ist dein Geld geblieben?',
          was: 'Schüler:innen rekonstruieren ihren letzten Monat in der App: Was haben sie eingenommen, was ausgegeben? Kategorisch aufgelistet. Viele sind überrascht. Das ist der Einstieg — und er braucht keine Vorbereitung.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Budget für den nächsten Monat',
          was: 'Auf Basis des eigenen Einkommens erstellen Lehrlinge in der App einen realistischen Monatsplan. Die App zeigt automatisch, ob er aufgeht — und wo die kritischen Stellen sind.',
          zeitMinuten: 20,
        },
        {
          schritt: 'Peer-Video: Die Ratenkauf-Geschichte',
          was: 'Ein Lehrling erzählt, wie er sich ein E-Bike auf Raten gekauft hat — und drei Monate später nicht mehr schlafen konnte. Das ist nicht dramatisiert, das ist authentisch. Und es öffnet das Gespräch über Schulden ohne Moralpredigt.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Notgroschen-Ziel',
          was: 'Schüler:innen legen fest, wie viel sie bis Ende des Lehrjahres ansparen wollen. Die App zeigt den Weg dorthin und schickt optional Erinnerungen. Ein kleiner Abschluss mit großer Wirkung.',
          zeitMinuten: 10,
        },
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
          nutzenfuerLehrer: 'Die Inhalte sind nicht für Schüler:innen allgemein — sie sind auf Lehrlinge zugeschnitten: Lehrlingsentschädigung, Berufsschulalltag, Moped-Finanzierung, WG-Zimmer. Das erkennen Lehrlinge sofort.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
        },
        {
          titel: 'Auch für Lehrbetriebe',
          nutzenfuerLehrer: 'Lehrbetriebe können Skills-UP! als Onboarding-Modul oder als laufende Begleitung zwischen Berufsschulblöcken einsetzen — ein starkes Signal an Lehrlinge: "Wir nehmen eure finanzielle Entwicklung ernst."',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>,
        },
        {
          titel: 'Gamification & Eigenmotivation',
          nutzenfuerLehrer: 'Lehrlinge, die nach der Schule schon gearbeitet haben, wollen keine Kindererziehung. Skills-UP! funktioniert wie eine gute App — Punkte, Levels, Fortschritt. Eigenmotivation statt Pflichterfüllung.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
        },
        {
          titel: 'Dashboard für Lehrkräfte & Betriebe',
          nutzenfuerLehrer: 'Wer hat welche Module abgeschlossen? Wer zeigt Wissenslücken beim Thema Schulden? Das Dashboard gibt dir und dem Lehrbetrieb einen klaren Überblick — ohne Nachfragen, ohne Aufsätze.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Ich hab Skills-UP! in einer Blockwoche eingesetzt. Am dritten Tag haben Lehrlinge angefangen, sich gegenseitig beim Budget-Tool zu helfen. Ich musste fast nichts tun. Das war das erste Mal seit Jahren, dass ich in einer Berufsschulstunde wirklich ruhig dasitzen konnte.',
        person: 'Lehrer für Politische Bildung, Berufsschule Linz',
      }}
    />
  )
}
