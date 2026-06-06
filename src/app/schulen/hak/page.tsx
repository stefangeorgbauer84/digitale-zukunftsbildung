import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'HAK & HAS | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für HAK und HAS — persönliche Finanzkompetenz als Ergänzung zu Betriebswirtschaft und Rechnungswesen. Sofort einsetzbar.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2"/>
    <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    <line x1="12" y1="12" x2="12" y2="16"/>
    <line x1="10" y1="14" x2="14" y2="14"/>
  </svg>
)

const bookIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
const chartIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
const moneyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
const taxIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
const alertIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const playIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
const piggyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.5 3.3 1.5 4.5L5 21h6l1-1 1 1h6l-1.5-4.5C19.5 15.3 20 13.8 20 12c0-1-.3-2-.5-2.5.5-.7 1-2.5.5-4.5z"/></svg>

export default function HakPage() {
  return (
    <SchulPage
      name="HAK & HAS"
      kurzname="HAK"
      gradient="linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #3b82f6 100%)"
      farbe="#1d4ed8"
      farbeHell="#eff6ff"
      schulstufen="9.–13. Schulstufe"
      lehrplanFach="Betriebswirtschaft · Rechnungswesen · Volkswirtschaft · Projektunterricht"
      icon={icon}
      lehrerProblem="Meine Schüler:innen können Jahresabschlüsse lesen — aber viele wissen nicht, was nach Abzug auf ihrem eigenen Lohnzettel stehen wird."
      intro="An der HAK gehört wirtschaftliches Denken zum Alltag. Aber der Sprung vom Betrieb zum persönlichen Haushalt fehlt oft. Skills-UP! macht genau diesen Schritt: Die Inhalte aus BWL und RW werden zu echten Alltagsentscheidungen — für Schüler:innen, die das bald selbst erleben werden."
      lehrplanPassung={[
        {
          fach: 'Betriebswirtschaft',
          kontext: 'Haushaltsplanung als Spiegel der Unternehmensplanung: Fixkosten, variable Kosten, Liquidität — dieselben Konzepte, andere Perspektive. Skills-UP! macht BWL-Inhalte persönlich und damit unvergesslich.',
        },
        {
          fach: 'Rechnungswesen',
          kontext: 'Was auf dem Lohnzettel steht, wie Abgaben berechnet werden, was Netto und Brutto bedeuten — das ist Rechnungswesen in der Praxis. Skills-UP! bringt das lebendige Zahlenbeispiel in die Stunde.',
        },
        {
          fach: 'Volkswirtschaft',
          kontext: 'Konsum, Kredit, Zinsen, Inflation — VWL-Theorie trifft in Skills-UP! auf echte Entscheidungen. Schüler:innen verstehen makroökonomische Zusammenhänge durch ihre eigene Lebenssituation.',
        },
        {
          fach: 'Projektunterricht',
          kontext: 'Skills-UP! ist ideal als eigenständiges Projekt: "Mein Finanzplan für die ersten zwei Jahre nach der HAK" — strukturiert, digital begleitet, mit Zertifikat am Ende.',
        },
        {
          fach: 'Entrepreneurship & Business',
          kontext: 'Wer selbst gründen oder selbstständig werden will, braucht Finanzkompetenz. Skills-UP! bereitet HAK-Schüler:innen auf die finanzielle Seite von Unternehmertum vor.',
        },
        {
          fach: 'Kommunikation & Präsentation',
          kontext: 'Schüler:innen präsentieren ihre Finanzpläne, diskutieren Entscheidungen, begründen Strategien — ideal für KoP-Stunden mit realem Inhalt.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Szenario aufmachen',
          was: '"Du bekommst heute deinen ersten Lohnzettel. Brutto 2.100 €. Was bleibt übrig?" — Schüler:innen schätzen erst selbst, bevor sie die Simulation starten. Das erzeugt sofort echte Beteiligung.',
          zeitMinuten: 5,
        },
        {
          schritt: 'Simulation Lohnzettel',
          was: 'Die App rechnet Schritt für Schritt: SV-Beiträge, Lohnsteuer, Nettolohn. Schüler:innen sehen, was von 2.100 € tatsächlich übrig bleibt — und staunen. Das ist in 10 Minuten erarbeitet, ohne Tafel, ohne Excel.',
          zeitMinuten: 15,
        },
        {
          schritt: 'Budget erstellen',
          was: 'Mit dem Nettolohn erstellen Schüler:innen in der App einen persönlichen Monatsplan: Miete, Essen, Transport, Handy, Sparen. Das Dashboard zeigt dir, welche Ausgabentypen die Klasse unterschätzt hat.',
          zeitMinuten: 20,
        },
        {
          schritt: 'Peer-Video & Diskussion',
          was: 'Ein Peer-Video zeigt einen Lehrling, der nach dem ersten Monatsgehalt im Minus war — und warum. Das öffnet die Diskussion über Ratenkauf, Abos und Konsumfallen ohne pädagogischen Zeigefinger.',
          zeitMinuten: 10,
        },
      ]}
      module={[
        { titel: 'Gehalt & Einkommen', lernziel: 'Lohnzettel lesen, Brutto-Netto-Berechnung verstehen, Kollektivvertrag nutzen — und die Negativsteuer via FinanzOnline beantragen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Einkommen', icon: moneyIcon },
        { titel: 'Finanzplanung', lernziel: 'Vollständigen Monats- und Jahresfinanzplan erstellen: Dauerauftrag vs. Lastschrift, Sonderzahlungen einplanen, 50-30-20-Regel anwenden.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Budgetplanung', icon: bookIcon },
        { titel: 'Steuern in Österreich', lernziel: 'Lohnsteuer und Sozialversicherung unterscheiden, Arbeitnehmerveranlagung auf FinanzOnline durchführen — bis zu 5 Jahre rückwirkend.', dauer: '15 oder 50 Min', level: 'Mittel', kategorie: 'Steuern', icon: taxIcon },
        { titel: 'Ratenkauf & BNPL', lernziel: 'Effektivzins berechnen, Klarna & Co. kritisch einschätzen, 14-Tage-Widerrufsrecht kennen — KSV-Eintrag verstehen und vermeiden.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Konsumentenschutz', icon: alertIcon },
        { titel: 'Sparen & Geldentscheidungen', lernziel: 'Zinseszinseffekt und Inflation verstehen — warum das Sparbuch Kaufkraft verliert und wie ETF-Sparpläne funktionieren.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Sparen', icon: piggyIcon },
        { titel: 'Schulden & Geld leihen', lernziel: 'Warnsignale für problematische Schulden erkennen, Inkasso-Rechte kennen und erste Anlaufstellen (AK, Schuldnerberatung) nutzen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Schuldenprävention', icon: chartIcon },
      ]}
      simulationen={[
        { titel: 'Arbeitnehmerveranlagung', untertitel: 'Steuerausgleich selbst durchführen: Werbungskosten, Sonderausgaben, Negativsteuer — mit FinanzOnline-Simulation.', dauer: '15–25 Min', icon: taxIcon },
        { titel: 'Gehaltsverhandlung', untertitel: 'KV-Mindestlohn recherchieren, Argumente formulieren, Einwände parieren — auch als Lehrling verhandelbar.', dauer: '15–20 Min', icon: moneyIcon },
        { titel: 'Kredit-Falle', untertitel: 'Konsumkredit, Ratenkauf, BNPL: Gesamtkosten berechnen, VKrG-Rechte kennen, Schuldenfallen erkennen.', dauer: '15–20 Min', icon: alertIcon },
        { titel: 'Aktienmarkt-Langläufer', untertitel: 'ETF-Sparplan simulieren: Zinseszins über 20 Jahre erleben, Diversifikation verstehen, Rebalancing üben.', dauer: '25–35 Min', icon: chartIcon },
      ]}
      themen={[
        'Lohnzettel lesen & verstehen',
        'Netto vs. Brutto berechnen',
        'Haushaltsbudget erstellen',
        'Fixkosten vs. variable Kosten',
        'Sparen und Investieren',
        'Schuldenprävention',
        'Versicherungen im Überblick',
        'Ratenkauf kritisch bewerten',
        'Konsumverhalten analysieren',
        'Finanzielle Eigenverantwortung',
        'Onlinekäufe und Verträge',
        'Entrepreneurship & Geld',
        'Digitale Finanztools',
        'Langfristige Finanzplanung',
      ]}
      features={[
        {
          titel: 'Lohnzettel-Simulation',
          nutzenfuerLehrer: 'Schüler:innen sehen interaktiv, wie Brutto zu Netto wird: SV-Beiträge, Lohnsteuer, Abzüge. Das ist concretes Rechnungswesen — und du musst keinen einzigen Lohnzettel selbst erklären.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
        },
        {
          titel: 'Haushaltsbudget-Tool',
          nutzenfuerLehrer: 'Schüler:innen erstellen in der App ihren eigenen Monatsplan — mit realen Kategorien und automatischer Auswertung. Du siehst über das Dashboard, welche Ausgaben die Klasse systematisch unterschätzt.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
        },
        {
          titel: 'Fertige BWL-nahe Module',
          nutzenfuerLehrer: 'Die Module bauen auf Konzepten auf, die HAK-Schüler:innen bereits kennen: Kosten, Erträge, Liquidität. Du kannst direkt anknüpfen — ohne Grundlagen neu erklären zu müssen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
        },
        {
          titel: 'Klassenweites Dashboard',
          nutzenfuerLehrer: 'Du siehst auf einen Blick: Wer hat welches Modul abgeschlossen? Welche Themen zeigen Unsicherheit? Das gibt dir echten Einblick ohne Stundenaufsätze oder Tests.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        },
        {
          titel: 'Schuldenprävention-Modul',
          nutzenfuerLehrer: 'Kredit, Ratenkauf, Überziehen — die Simulation zeigt, wie Schulden entstehen und eskalieren. Das ist ein sensibles Thema: Die App übernimmt die sachliche Vermittlung, du begleitest das Gespräch.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>,
        },
        {
          titel: 'Zertifikat & Portfolionachweis',
          nutzenfuerLehrer: 'Schüler:innen erhalten nach Abschluss ein Zertifikat. Das ist dokumentierbar, für Portfolios und Bewerbungen geeignet — und gibt deiner Klasse etwas Handfestes mit.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Ich hab Skills-UP! in meiner Betriebswirtschaftsstunde eingesetzt, nachdem wir Kostenrechnung hatten. Die Schüler:innen haben die Verbindung zu ihrem eigenen Leben sofort gezogen — das hätte ich mit Folien nicht geschafft.',
        person: 'BWL-Lehrer, HAK Burgenland, 11. Schulstufe',
      }}
      lehrerFoto="/fotos/Lehrerinnen%20f%C3%BCr%20Schulseiten/HAK%20Lehrer.png"
    />
  )
}
