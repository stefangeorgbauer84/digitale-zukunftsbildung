import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'HTL | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für die HTL — Finanzkompetenz für den Berufseinstieg. Gehaltsverhandlung, Sparen, Investieren. Fertige Module, null Vorbereitung.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.07 4.93l-1.41 1.41M5.34 17.66l-1.41 1.41M2 12h2m16 0h2M5.34 6.34L3.93 4.93m14.14 14.14l-1.41-1.41M12 2v2m0 16v2"/>
  </svg>
)

export default function HtlPage() {
  return (
    <SchulPage
      name="HTL"
      kurzname="HTL"
      gradient="linear-gradient(135deg, #134e4a 0%, #0f766e 60%, #14b8a6 100%)"
      farbe="#0f766e"
      farbeHell="#f0fdfa"
      schulstufen="9.–13. Schulstufe"
      lehrplanFach="ITPR · Allgemeinbildung · Projektunterricht · Klassenvorstand"
      icon={icon}
      lehrerProblem="Meine Schüler:innen kriegen nach der HTL 3.500 € brutto — und viele wissen nicht, was das bedeutet. Nicht was übrig bleibt, nicht wie sie damit bauen."
      intro="HTL-Absolvent:innen starten in technische Berufe mit überdurchschnittlichen Gehältern — oft direkt nach der Matura. Skills-UP! bereitet sie darauf vor, diesen Vorteil finanziell klug zu nutzen: klar strukturiert, datenbasiert und ohne Finanzmärchen."
      lehrplanPassung={[
        {
          fach: 'ITPR (Informationsmanagement & Projektentwicklung)',
          kontext: 'Finanzplanung als Projekt: Schüler:innen entwickeln ihren persönlichen Finanzplan für die ersten zwei Jahre nach der HTL — mit realen Zahlen, strukturiert wie ein technisches Projekt.',
        },
        {
          fach: 'Allgemeinbildung (AB)',
          kontext: 'Skills-UP! passt ideal in AB-Stunden: gesellschaftliche Relevanz, persönliche Kompetenz, kein Lehraufwand. Du öffnest die App, die Schüler:innen arbeiten selbstständig.',
        },
        {
          fach: 'Projektunterricht (5. Jahrgang)',
          kontext: '"Mein Finanzstart nach der HTL" als Abschlussprojekt: Schüler:innen kalkulieren Gehalt, Miete, Sparziele, Investitionsmöglichkeiten. Praxisnah, messbar, präsentierbar.',
        },
        {
          fach: 'Klassenvorstand / Abschlussklasse',
          kontext: 'In der Maturavorbereitung vergisst man leicht: Was kommt nach der HTL? Eine Skills-UP!-Einheit zum Thema "Berufseinstieg und Finanzen" ist perfekt für die letzte Klassenvorstandsstunde.',
        },
        {
          fach: 'Mathematik (Anwendung)',
          kontext: 'Zinseszins, Investitionsrechnung, Prozentrechnung — in Skills-UP! haben diese Konzepte echte Bedeutung. Ideal als Anwendungsaufgabe für mathematisch starke Schüler:innen.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Einstieg: Gehaltscheck',
          was: '"Du fängst nach der HTL an, 3.400 € brutto. Was bleibt dir?" — Schüler:innen schätzen zuerst selbst. Dann öffnen sie die Simulation. Die Unterschiede zu den eigenen Schätzungen lösen sofort Diskussionen aus.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Simulation Berufseinstieg',
          was: 'Die App führt Schüler:innen durch ein vollständiges Einstiegsjahr: Gehalt, Wohnung, Auto, Versicherungen, Notgroschen, Altersvorsorge. Du musst kein Finanzexperte sein — die App erklärt alles.',
          zeitMinuten: 20,
        },
        {
          schritt: 'Krypto und Spekulation',
          was: 'Ein eigenes Modul zu Krypto-Versprechen und schnellen Gewinnen — besonders relevant für technikbegeisterte HTL-Schüler:innen. Die Simulation zeigt realistische Szenarien ohne Panikmache.',
          zeitMinuten: 15,
        },
        {
          schritt: 'Finanzplan präsentieren',
          was: 'Optional: Schüler:innen präsentieren ihren persönlichen Finanzplan in Kurzform. Das trainiert Präsentationskompetenz und gibt dir einen direkten Einblick ins Verständnis — ohne schriftliche Prüfung.',
          zeitMinuten: 5,
        },
      ]}
      themen={[
        'Brutto-Netto-Rechnung',
        'Gehaltsverhandlung vorbereiten',
        'Budgetplanung beim Berufseinstieg',
        'Wohnen kalkulieren',
        'Sparen & Vermögensaufbau',
        'Notgroschen aufbauen',
        'Versicherungen & Absicherung',
        'Investieren für Einsteiger',
        'Digitale Finanztools',
        'Krypto-Risiken realistisch einschätzen',
        'Steuer & Abgaben',
        'Langfristige Finanzziele',
        'Auto, Führerschein, Leasing',
        'Altersvorsorge früh verstehen',
      ]}
      features={[
        {
          titel: 'Berufseinstieg-Simulation',
          nutzenfuerLehrer: 'Schüler:innen erleben virtuell ihr erstes Berufsjahr — Gehalt, Miete, Ausgaben, unerwartete Kosten. Das ist realistischer als jedes Fallbeispiel aus dem Lehrbuch, und du hast es in 2 Minuten gestartet.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
        },
        {
          titel: 'Krypto & Spekulations-Modul',
          nutzenfuerLehrer: 'Gerade HTL-Schüler:innen interessieren sich für Blockchain, Krypto und Tech-Investments. Das Modul behandelt das sachlich — Chancen, Risiken, Fakten. Du musst kein Krypto-Experte sein.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
        },
        {
          titel: 'Datenbasiertes Lerndesign',
          nutzenfuerLehrer: 'HTL-Schüler:innen schätzen Logik und Daten. Skills-UP! arbeitet mit realen Zahlen, echten Szenarien und messbaren Ergebnissen — kein Motivationsgeschwätz, keine leeren Versprechen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
        },
        {
          titel: 'Selbstständige Module',
          nutzenfuerLehrer: 'Schüler:innen arbeiten eigenständig und im eigenen Tempo. Das passt perfekt zu technischen Schulen, wo Selbstorganisation ohnehin ein Ziel ist — und spart dir Moderationszeit.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Ich hab die App kurz gezeigt und dann sind die einfach losgelegt. Die haben sich das Gehalts-Modul selbst erarbeitet — und danach wollten sie wissen, wie man am besten spart. Das Gespräch hätte ich so nicht planen können.',
        person: 'Allgemeinbildungs-Lehrer, HTL Steyr, 12. Schulstufe',
      }}
    />
  )
}
