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

const moneyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
const chartIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
const starIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const shieldIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const piggyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.5 3.3 1.5 4.5L5 21h6l1-1 1 1h6l-1.5-4.5C19.5 15.3 20 13.8 20 12c0-1-.3-2-.5-2.5.5-.7 1-2.5.5-4.5z"/></svg>
const carIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>

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
      module={[
        { titel: 'Gehalt & Einkommen', lernziel: 'Brutto-Netto-Berechnung meistern, Kollektivvertrag für den Technikbereich kennen, Lohnzettel prüfen und Negativsteuer zurückholen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Einkommen', icon: moneyIcon },
        { titel: 'Sparen & Geldentscheidungen', lernziel: 'Zinseszinseffekt und Inflation: warum früh Investieren entscheidend ist — ETF-Sparplan als konkretes Werkzeug.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Investieren', icon: piggyIcon },
        { titel: 'Kryptowährungen & Krypto-Assets', lernziel: 'Blockchain, Bitcoin und Stablecoins technisch verstehen — und gleichzeitig Risiken, Steuerpflicht und MiCA-Regulierung in Österreich kennen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Tech & Finanzen', icon: chartIcon },
        { titel: 'Altersvorsorge', lernziel: '3-Säulen-Modell kennen, Pensionslücke berechnen, ETF-Sparplan vs. staatliche Pension vergleichen — je früher, desto mehr.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Vorsorge', icon: starIcon },
        { titel: 'Versicherungen verstehen', lernziel: 'Pflicht- von freiwilligen Versicherungen unterscheiden: Was braucht man beim Berufseinstieg wirklich? Selbstbehalt und Prämien verstehen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Versicherungen', icon: shieldIcon },
        { titel: 'Risiko & Krisen', lernziel: 'Notgroschen aufbauen (3 Monatsgehälter), Eskalationskette von Verzug bis Pfändung kennen — Krisenbudget für den Ernstfall erstellen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Krisenmanagement', icon: chartIcon },
      ]}
      simulationen={[
        { titel: 'Gehaltsverhandlung', untertitel: 'Marktwert recherchieren, KV-Grenzen kennen, Argumente formulieren — dein Gehalt als HTL-Absolvent ist verhandelbar.', dauer: '15–20 Min', icon: moneyIcon },
        { titel: 'Aktienmarkt-Langläufer', untertitel: 'Simulation eines 20-Jahres-Portfolios: ETF-Sparplan, Zinseszins und Marktvolatilität hautnah erleben.', dauer: '25–35 Min', icon: chartIcon },
        { titel: 'Krypto-Handel', untertitel: 'Bitcoin/ETH kaufen und verkaufen, Wallet-Verwaltung, Portfoliorisiko einschätzen — MiCA-Regulierung und FMA-Warnliste kennenlernen.', dauer: '30–45 Min', icon: starIcon },
        { titel: 'Auto-Kauf-Kalkulator', untertitel: 'Gesamtkosten eines Fahrzeugs berechnen: Kaufpreis, Versicherung, Steuer, Service, Wertverlust — Kauf vs. Leasing vs. Kredit.', dauer: '15–20 Min', icon: carIcon },
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
      lehrerFoto="/fotos/lehrer/htl.png"
    />
  )
}
