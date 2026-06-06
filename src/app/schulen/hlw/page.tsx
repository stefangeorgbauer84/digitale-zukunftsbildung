import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'HLW & Fachschulen | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für HLW, HLT und wirtschaftliche Fachschulen — Finanzbildung trifft Alltag, Konsum und Lebensführung. Sofort im Unterricht einsetzbar.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
  </svg>
)

const bookIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
const alertIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const shieldIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const homeIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
const playIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
const chartIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>

export default function HlwPage() {
  return (
    <SchulPage
      name="HLW & Fachschulen"
      kurzname="HLW"
      gradient="linear-gradient(135deg, #14532d 0%, #15803d 60%, #22c55e 100%)"
      farbe="#15803d"
      farbeHell="#f0fdf4"
      schulstufen="9.–13. Schulstufe"
      lehrplanFach="Ernährung & Haushalt · Wirtschaft · Projektunterricht · BOBI"
      icon={icon}
      lehrerProblem="Ich unterrichte Haushaltsführung, Ernährung und Konsum — aber wenn ich frage, wie sie ihr Budget planen, schauen mich viele Schüler:innen ratlos an."
      intro="HLW und wirtschaftliche Fachschulen haben Alltagskompetenz im Blut. Skills-UP! ergänzt diese Stärke um das, was Schüler:innen direkt nach der Schule brauchen: eine klare Vorstellung davon, wie sie mit Geld umgehen — im Haushalt, beim Einkauf und bei größeren Entscheidungen."
      lehrplanPassung={[
        {
          fach: 'Haushaltswirtschaft & Ernährung',
          kontext: 'Lebensmittelbudget, Haushaltsplanung, Preis-Leistungs-Vergleich — Skills-UP! vertieft diese Themen mit interaktiven Budgetsimulationen und realen Konsumentscheidungen.',
        },
        {
          fach: 'Wirtschaft und Recht',
          kontext: 'Verträge, Konsumentenschutz, Ratenkauf, Gewährleistung — Skills-UP! macht diese rechtlich-wirtschaftlichen Themen durch erlebbare Szenarien greifbar.',
        },
        {
          fach: 'BOBI (Berufsorientierung & Bildungsinfo)',
          kontext: 'Was kommt nach der HLW? Welches Einkommen ist realistisch? Skills-UP! verbindet Berufsorientierung mit finanzieller Lebensplanung.',
        },
        {
          fach: 'Tourismus (HLT)',
          kontext: 'Saisonarbeit, Trinkgeld, unregelmäßiges Einkommen — für HLT-Schüler:innen gibt es spezifische Finanzszenarien rund um Tourismus und Dienstleistung.',
        },
        {
          fach: 'Projektunterricht',
          kontext: '"Nachhaltig wirtschaften — mein Familienbudget im Öko-Check" als Jahresprojekt: Skills-UP! liefert die Datengrundlage, Methoden und digitale Auswertung.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Einstieg: Supermarkt-Falle',
          was: 'Simulierter Wocheneinkauf: Schüler:innen kaufen für eine Person mit 200 € Budget ein — mit versteckten Sonderangeboten, Impulsprodukten und saisonalen Preisschwankungen. Das ist Konsumerziehung zum Anfassen.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Haushaltsbudget erstellen',
          was: 'Auf Basis eines realistischen HLW-Einstiegsgehalts erstellen Schüler:innen ihren ersten Monatsplan: Miete, Lebensmittel, Transport, Kleidung, Freizeit, Sparen. Die App führt sie durch alle Kategorien.',
          zeitMinuten: 25,
        },
        {
          schritt: 'Nachhaltig konsumieren — was kostet das?',
          was: 'Das Modul vergleicht konventionelle und nachhaltige Konsumentscheidungen — nicht moralisch, sondern finanziell. Was kostet Bio langfristig? Was kostet Fast Fashion wirklich? Ideal für HLW-Profil.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Reflexion',
          was: 'Schüler:innen dokumentieren drei Entscheidungen, die sie nach dieser Stunde anders treffen würden. Das geht direkt in die App — du siehst die Antworten im Dashboard.',
          zeitMinuten: 5,
        },
      ]}
      module={[
        { titel: 'Finanzplanung', lernziel: 'Haushaltsbudget erstellen: Fixkosten vs. variable Kosten, 50-30-20-Regel, Sonderzahlungen einplanen — die 5 häufigsten Budgetfehler vermeiden.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Budgetplanung', icon: bookIcon },
        { titel: 'Konsumfallen', lernziel: 'Psychologische Kauftrigger (FOMO, Anchoring, Scarcity) erkennen — und verstehen, wie Werbung und Dark Patterns Kaufentscheidungen steuern.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Konsumpsychologie', icon: alertIcon },
        { titel: 'Ratenkauf & BNPL', lernziel: 'Klarna, Afterpay und Co. kritisch bewerten: Effektivzins berechnen, Widerrufsrecht kennen, KSV-Eintrag verstehen und vermeiden.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Konsumentenschutz', icon: alertIcon },
        { titel: 'Versicherungen verstehen', lernziel: 'Haushaltsversicherung, Haftpflicht, Kfz-Pflicht — was braucht man wirklich? Selbstbehalt und Prämien sinnvoll vergleichen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Versicherungen', icon: shieldIcon },
        { titel: 'Schulden & Geld leihen', lernziel: 'Warnsignale für problematische Schulden früh erkennen, Inkasso-Rechte kennen — AK und Schuldnerberatung als kostenlose Hilfe.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Schuldenprävention', icon: chartIcon },
        { titel: 'Risiko & Krisen', lernziel: 'Notgroschen aufbauen, Eskalationskette von Verzug bis Pfändung kennen — Krisenbudget für unerwartete Ausgaben.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Krisenmanagement', icon: chartIcon },
      ]}
      simulationen={[
        { titel: 'Konsumfallen-Parcours', untertitel: 'FOMO, Dark Patterns, künstliche Knappheit und Abo-Fallen erleben — Konsumentenschutz nach FAGG kennenlernen.', dauer: '15–20 Min', icon: playIcon },
        { titel: 'Versicherungs-Entscheider', untertitel: 'Interaktive Szenarien: Haushaltsversicherung, Haftpflicht, Kfz — welche Versicherung braucht man wirklich?', dauer: '15–20 Min', icon: shieldIcon },
        { titel: 'Erste eigene Wohnung', untertitel: 'Kaution, Provision, Betriebskosten, Mietvertrag prüfen — alle Kosten einer Wohnung realistisch kalkulieren.', dauer: '20–30 Min', icon: homeIcon },
        { titel: 'Kredit-Falle', untertitel: 'Konsumkredit, Ratenkauf, BNPL: Fallstricke erkennen, Gesamtkosten berechnen, VKrG-Rechte nutzen.', dauer: '15–20 Min', icon: alertIcon },
      ]}
      themen={[
        'Haushaltsbudget planen',
        'Konsum & Lebensmittel',
        'Nachhaltig wirtschaften',
        'Konsumfallen & Werbung',
        'Verträge & Konsumentenschutz',
        'Ratenkauf & Abos',
        'Schuldenfallen erkennen',
        'Sparziele formulieren',
        'Finanzielle Lebensplanung',
        'Tourismus & Saisoneinkommen',
        'Digitale Zahlungsmittel',
        'Bewusste Kaufentscheidungen',
        'Energiekosten & Haushalt',
        'Versicherungen im Alltag',
      ]}
      features={[
        {
          titel: 'Konsum-Simulationen',
          nutzenfuerLehrer: 'Schüler:innen treffen im geschützten Raum reale Konsumentscheidungen — Supermarkt, Online-Shop, Mietvertrag — und sehen sofort die finanziellen Konsequenzen. Kein Theorievortrag nötig.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
        },
        {
          titel: 'Haushalts-Budget-Modul',
          nutzenfuerLehrer: 'Schüler:innen planen ihren Monatshaushalt mit realen Kategorien und einem realistischen Einstiegslohn. Das Ergebnis ist direkt sichtbar — ideal als Grundlage für eine Unterrichtsdiskussion.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        },
        {
          titel: 'Nachhaltigkeits-Modul',
          nutzenfuerLehrer: 'Das Modul verbindet finanzielle und ökologische Entscheidungen — ohne zu moralisieren. Perfekt für HLW-Profil: Was kostet Bio wirklich? Zahlt sich Energiesparen aus? Die App liefert die Zahlen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>,
        },
        {
          titel: 'Peer-Videos mit Alltagsbezug',
          nutzenfuerLehrer: 'Gleichaltrige sprechen über Erfahrungen mit Werbung, Ratenkauf oder dem ersten eigenen Haushalt. Das trifft HLW-Schüler:innen direkt in ihrer Lebenswelt — und erzeugt echte Diskussionen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Ich hatte das Thema Haushaltsführung schon tausendmal unterrichtet. Mit Skills-UP! war es das erste Mal, dass Schüler:innen danach sagten: Das hat mich persönlich betroffen.',
        person: 'Lehrerin für Haushaltswirtschaft, HLW Graz',
      }}
      lehrerFoto="/fotos/Lehrerinnen%20f%C3%BCr%20Schulseiten/HLW%20Lehrerin.png"
    />
  )
}
