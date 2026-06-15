import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'Finanzbildung Tourismusschulen Österreich | Skills-UP! – Saisoneinkommen, Trinkgeld, Selbstständigkeit',
  description: 'Skills-UP! für Tourismusschulen (HLT, Hotelfachschule, Tourismusfachschule): Finanzkompetenz für schwankendes Saisoneinkommen, Trinkgeld, Pflichtpraktikum und den Traum vom eigenen Betrieb. Fertige Module, 0 Vorbereitung.',
  alternates: { canonical: 'https://www.digitale-zukunftsbildung.eu/schulen/tourismus' },
  openGraph: {
    title: 'Finanzbildung für Tourismusschulen – Skills-UP! Österreich',
    description: 'Praxisnahe Finanzbildung für Schüler:innen an Tourismusschulen. Saisoneinkommen, Trinkgeld, Selbstständigkeit, Auslandsarbeit. Lehrplankonform, sofort einsetzbar.',
    url: 'https://www.digitale-zukunftsbildung.eu/schulen/tourismus',
  },
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="7" width="18" height="13" rx="2"/>
    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
    <path d="M9 20v-9M15 20v-9"/>
  </svg>
)

const moneyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
const chartIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
const starIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const shieldIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const piggyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.5 3.3 1.5 4.5L5 21h6l1-1 1 1h6l-1.5-4.5C19.5 15.3 20 13.8 20 12c0-1-.3-2-.5-2.5.5-.7 1-2.5.5-4.5z"/></svg>
const globeIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
const sunIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>

export default function TourismusPage() {
  return (
    <SchulPage
      name="Tourismusschulen"
      kurzname="Tourismus"
      gradient="linear-gradient(135deg, #2d1b69 0%, #4a2d8a 60%, #6b4db0 100%)"
      farbe="#4a2d8a"
      farbeHell="#f3f1f9"
      schulstufen="9.–13. Schulstufe"
      lehrplanFach="Betriebswirtschaft · Rechnungswesen & Controlling · Tourismusmarketing · Persönlichkeitsbildung · Pflichtpraktikum"
      icon={icon}
      lehrerProblem="Meine Schüler:innen lernen, wie man einen Betrieb kalkuliert. Aber wenn das erste Trinkgeld da ist und die Saison im April endet, wissen viele nicht, wie sie ihr eigenes Geld über den Sommer bringen."
      intro="An Tourismusschulen lernen Schüler:innen Betriebswirtschaft, Rechnungswesen und Kalkulation für den Betrieb. Skills-UP! überträgt genau dieses Denken auf das eigene Leben: schwankendes Saisoneinkommen planen, Trinkgeld klug nutzen, Rücklagen für die Zwischensaison bilden und den Weg in die Selbstständigkeit finanziell vorbereiten."
      lehrplanPassung={[
        {
          fach: 'Betriebswirtschaft (BW)',
          kontext: 'Schüler:innen kalkulieren bereits Deckungsbeiträge und Kosten für den Betrieb. Skills-UP! macht den Transfer: Dieselben Werkzeuge auf das eigene Haushaltsbudget angewendet. Vom Betriebsergebnis zur persönlichen Bilanz.',
        },
        {
          fach: 'Rechnungswesen & Controlling (RWC)',
          kontext: 'Einnahmen-Ausgaben-Rechnung kennen sie aus dem Unterricht. Hier planen sie ihre eigene Liquidität über eine Saison: Wann kommt Geld rein, wann ist Flaute, wie viel muss zurückgelegt werden?',
        },
        {
          fach: 'Tourismusmarketing & Unternehmensführung',
          kontext: 'Viele träumen vom eigenen Lokal, B&B oder Reisebüro. Skills-UP! verbindet die Geschäftsidee mit der privaten Finanzplanung: Was braucht es an Eigenkapital, und wie sieht das eigene Budget währenddessen aus?',
        },
        {
          fach: 'Persönlichkeitsbildung & soziale Kompetenz',
          kontext: 'Finanzielle Selbstorganisation ist gelebte Persönlichkeitsbildung. Skills-UP! passt ideal in diese Stunden: Umgang mit Geld, Konsumdruck und Verantwortung für das eigene Leben.',
        },
        {
          fach: 'Pflichtpraktikum (Begleitung)',
          kontext: 'Das Pflichtpraktikum ist oft das erste echte Einkommen, samt Trinkgeld. Eine Skills-UP!-Einheit davor klärt: Was bleibt netto, was ist mit Trinkgeld, wie teile ich mir das Geld über die Praktikumszeit ein?',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Einstieg: Die Saison-Rechnung',
          was: '"Du verdienst von Juni bis September gut, samt Trinkgeld. Dann ist drei Monate Flaute. Wie viel darfst du im Sommer wirklich ausgeben?". Schüler:innen schätzen zuerst, dann zeigt die Simulation die Realität. Das löst sofort Diskussionen aus.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Simulation Saisoneinkommen',
          was: 'Die App führt durch eine komplette Tourismus-Saison: Grundlohn nach Gastgewerbe-KV, Trinkgeld, Überstunden, dann die einkommensschwache Zwischensaison. Schüler:innen erleben, warum Rücklagen hier überlebenswichtig sind.',
          zeitMinuten: 20,
        },
        {
          schritt: 'Trinkgeld & Auslandsarbeit',
          was: 'Ein eigenes Modul zu Trinkgeld in Österreich und zur Saison im Ausland (Hotel, Kreuzfahrt, Skigebiet). Was ist beim Trinkgeld steuerlich zu beachten, was bei Arbeit über die Grenze? Die App erklärt alles, du musst kein Experte sein.',
          zeitMinuten: 15,
        },
        {
          schritt: 'Eigener Betrieb: erster Finanzplan',
          was: 'Optional: Schüler:innen skizzieren in Kurzform die Finanzen einer eigenen Geschäftsidee und vergleichen sie mit dem privaten Budget. Das trainiert genau das unternehmerische Denken, das an Tourismusschulen ohnehin Ziel ist.',
          zeitMinuten: 5,
        },
      ]}
      module={[
        { titel: 'Saisoneinkommen & Budget', lernziel: 'Schwankendes Einkommen über das Jahr planen, Gastgewerbe-KV verstehen, Rücklagen für die Zwischensaison berechnen. Liquidität wie im Betrieb, nur fürs eigene Leben.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Einkommen', icon: sunIcon },
        { titel: 'Trinkgeld & Zusatzeinkommen', lernziel: 'Trinkgeld richtig einordnen: steuerliche Behandlung in Österreich, faire Aufteilung im Team, und warum man es nicht als Dauereinkommen verplanen sollte.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Einkommen', icon: moneyIcon },
        { titel: 'Sparen & Rücklagen', lernziel: 'Zinseszins, Inflation und der Notgroschen für die Off-Season. Warum Tourismusbeschäftigte größere Reserven brauchen und wie ein Sparplan trotz schwankendem Einkommen funktioniert.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Vorsorge', icon: piggyIcon },
        { titel: 'Arbeiten im Ausland', lernziel: 'Saison im Ausland, Kreuzfahrt oder Hotelkette: Währung, Lebenshaltungskosten, Steuer und Sozialversicherung über die Grenze realistisch einschätzen.', dauer: '15 oder 50 Min', level: 'Mittel', kategorie: 'Karriere', icon: globeIcon },
        { titel: 'Selbstständigkeit & eigener Betrieb', lernziel: 'Vom Traum zum Plan: Eigenkapital, laufende Kosten, Privatentnahme. Wie hängt das Betriebsergebnis mit dem eigenen Lebensunterhalt zusammen?', dauer: '15 oder 50 Min', level: 'Mittel', kategorie: 'Unternehmertum', icon: chartIcon },
        { titel: 'Versicherungen & Absicherung', lernziel: 'Welche Versicherungen brauchen Beschäftigte mit Saisonverträgen wirklich? Arbeitslosengeld in der Zwischensaison, Selbstbehalt und Prämien verstehen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Versicherungen', icon: shieldIcon },
      ]}
      simulationen={[
        { titel: 'Saison-Budget-Planer', untertitel: 'Einkommen über eine ganze Saison verteilen, Trinkgeld einplanen und Rücklagen für die Flaute bilden. Liquiditätsplanung fürs eigene Leben.', dauer: '20–25 Min', icon: sunIcon },
        { titel: 'Gehaltsverhandlung Gastgewerbe', untertitel: 'Gastgewerbe-KV kennen, Trinkgeld nicht gegen den Grundlohn ausspielen lassen, den eigenen Marktwert nach dem Abschluss richtig einschätzen.', dauer: '15–20 Min', icon: moneyIcon },
        { titel: 'Auslands-Saison kalkulieren', untertitel: 'Job im Ausland annehmen: Verdienst, Lebenshaltungskosten und was am Ende der Saison wirklich übrig bleibt. Mit Währung und Steuer.', dauer: '25–30 Min', icon: globeIcon },
        { titel: 'Eigener Betrieb: Startkalkulation', untertitel: 'Lokal, Café oder kleines B&B eröffnen: Eigenkapital, Anlaufkosten und die Frage, wovon man in den ersten Monaten privat lebt.', dauer: '30–40 Min', icon: chartIcon },
      ]}
      themen={[
        'Saisoneinkommen planen',
        'Trinkgeld richtig einordnen',
        'Rücklagen für die Zwischensaison',
        'Gastgewerbe-Kollektivvertrag',
        'Liquidität wie im Betrieb',
        'Budget bei schwankendem Einkommen',
        'Arbeiten im Ausland',
        'Pflichtpraktikum & erstes Geld',
        'Selbstständigkeit vorbereiten',
        'Eigenkapital & Anlaufkosten',
        'Versicherungen & Absicherung',
        'Arbeitslosengeld zwischen Saisonen',
        'Sparen trotz Unregelmäßigkeit',
        'Konsum & bewusste Entscheidungen',
      ]}
      features={[
        {
          titel: 'Saison-Einkommen-Simulation',
          nutzenfuerLehrer: 'Schüler:innen erleben virtuell eine komplette Tourismus-Saison samt Flaute danach. Das ist realistischer als jedes Lehrbuchbeispiel und macht sofort klar, warum Rücklagen in dieser Branche kein Luxus sind. Gestartet in 2 Minuten.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41m11.32-11.32l1.41-1.41"/></svg>,
        },
        {
          titel: 'BWL trifft eigenes Leben',
          nutzenfuerLehrer: 'Deine Schüler:innen können bereits kalkulieren und Einnahmen-Ausgaben-Rechnungen lesen. Skills-UP! überträgt dieses Wissen direkt aufs Privatleben. Du baust auf dem auf, was im BW- und RW-Unterricht ohnehin gelehrt wird.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
        },
        {
          titel: 'Auslands- & Selbstständigkeits-Module',
          nutzenfuerLehrer: 'Viele Tourismusschüler:innen wollen ins Ausland oder später einen eigenen Betrieb. Eigene Module behandeln genau diese Wege sachlich: Chancen, Kosten, Risiken. Du musst weder Steuerberater noch Auswanderungsexperte sein.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>,
        },
        {
          titel: 'Selbstständige Module',
          nutzenfuerLehrer: 'Schüler:innen arbeiten eigenständig und im eigenen Tempo, gerade in der Praktikumsvorbereitung oder in Randstunden ideal. Das spart dir Moderationszeit und passt zur Eigenverantwortung, die an Tourismusschulen ohnehin Ziel ist.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Wir rechnen im Unterricht ständig Betriebsergebnisse. Aber als ich gefragt habe, wer von einem Sommer-Trinkgeld auch im November noch was hat, war es still. Nach der Saison-Simulation kam eine Schülerin und meinte, sie habe zum ersten Mal verstanden, warum ihre Mutter im Gastgewerbe immer vom Zurücklegen redet.',
        person: 'Lehrkraft Betriebswirtschaft, Tourismusschule Salzburg, 11. Schulstufe',
      }}
      gruenderStatement="Tourismusschüler:innen lernen, einen Betrieb zu führen, bevor viele von ihnen ihr eigenes Geld führen. Genau dieser Branche fehlt oft die private Finanzbildung: schwankendes Einkommen, Trinkgeld, Saisonarbeit. Skills-UP! schließt diese Lücke und baut dabei auf dem betriebswirtschaftlichen Denken auf, das die Schule ohnehin vermittelt."
      lernpfad={[
        {
          stufe: 'Grundlagen',
          badge: 'Level 1',
          icon: sunIcon,
          module: ['Saisoneinkommen & Budget', 'Trinkgeld & Zusatzeinkommen'],
          zeitMinuten: 50,
          ergebnis: 'Gastgewerbe-KV kennen, Trinkgeld richtig einordnen und ein Monatsbudget trotz schwankendem Einkommen aufstellen.',
        },
        {
          stufe: 'Aufbau',
          badge: 'Level 2',
          icon: piggyIcon,
          module: ['Sparen & Rücklagen', 'Versicherungen & Absicherung'],
          zeitMinuten: 70,
          ergebnis: 'Rücklagen für die Zwischensaison berechnen, einen Sparplan trotz Unregelmäßigkeit aufbauen und sich richtig absichern.',
        },
        {
          stufe: 'Weitblick',
          badge: 'Level 3',
          icon: chartIcon,
          module: ['Arbeiten im Ausland', 'Selbstständigkeit & eigener Betrieb'],
          zeitMinuten: 70,
          ergebnis: 'Eine Auslands-Saison realistisch durchrechnen und die Finanzen einer eigenen Geschäftsidee grob planen.',
        },
      ]}
      highlightSimulation={{
        titel: 'Saison-Budget-Planer',
        untertitel: 'Eine volle Tourismus-Saison verdienen, das Trinkgeld einplanen und genug zurücklegen, um durch die Flaute zu kommen.',
        dauer: '20–25 Min',
        icon: sunIcon,
        szenario: 'Sommersaison im Hotel am See. Vier Monate gutes Einkommen plus Trinkgeld. Aber im Oktober ist Schluss, und bis zur Wintersaison sind es drei Monate. Die große Frage: Wie viel vom Sommergeld darfst du wirklich ausgeben?',
        schritte: [
          { label: 'Saison-Einkommen erfassen', beschreibung: 'Die App rechnet Grundlohn nach Gastgewerbe-KV plus Trinkgeld und Überstunden über die vier Monate zusammen.' },
          { label: 'Off-Season einplanen', beschreibung: 'Schüler:innen sehen die drei einkommensschwachen Monate danach und wie viel Geld pro Monat dann fehlt.' },
          { label: 'Rücklage festlegen', beschreibung: 'Wie viel muss aus jedem Saison-Monat zurückgelegt werden, damit die Flaute gedeckt ist? Die App zeigt den Effekt sofort.' },
          { label: 'Entscheidung treffen', beschreibung: 'Am Ende steht ein realistischer Ausgabenrahmen für den Sommer, der den ganzen Jahresverlauf berücksichtigt.' },
        ],
        ergebnis: 'Schüler:innen verstehen, dass ein gutes Saisongehalt kein Monatsgehalt ist, und können ihr Einkommen über das ganze Jahr verteilen, bevor sie zum ersten Mal in der Saison stehen.',
        mockUI: [
          { zeile: 'Mein Saison-Budget', typ: 'label' },
          { zeile: 'Saison-Einkommen (4 Monate)|9.200,00 €', typ: 'wert' },
          { zeile: 'davon Trinkgeld|1.400,00 €', typ: 'wert' },
          { zeile: 'divider', typ: 'divider' },
          { zeile: 'Off-Season (3 Monate)', typ: 'label' },
          { zeile: 'Fixkosten pro Monat|− 950,00 €', typ: 'wert' },
          { zeile: 'Bedarf Zwischensaison|− 2.850,00 €', typ: 'wert' },
          { zeile: 'divider', typ: 'divider' },
          { zeile: 'Verfügbar pro Saison-Monat|1.587,00 €', typ: 'highlight' },
          { zeile: 'Rücklage-Anteil|31 %|31%', typ: 'bar' },
        ],
      }}
      faqs={[
        { q: 'In welchen Fächern der Tourismusschule ist Skills-UP! einsetzbar?', a: 'Betriebswirtschaft, Rechnungswesen und Controlling, Tourismusmarketing, Persönlichkeitsbildung oder in der Begleitung zum Pflichtpraktikum. Die Module sind flexibel, 15 oder 50 Minuten, ohne Vorbereitungsaufwand für die Lehrkraft.' },
        { q: 'Warum braucht es eigene Finanzbildung für den Tourismus?', a: 'Weil das Einkommen in dieser Branche anders funktioniert: Saisonarbeit, Trinkgeld, Off-Season und oft Arbeit im Ausland. Schüler:innen lernen zwar, einen Betrieb zu kalkulieren, aber selten, wie sie ihr eigenes schwankendes Einkommen über das Jahr managen. Genau das deckt Skills-UP! ab.' },
        { q: 'Baut das auf dem betriebswirtschaftlichen Unterricht auf?', a: 'Ja. Schüler:innen können bereits kalkulieren und Einnahmen-Ausgaben-Rechnungen lesen. Skills-UP! überträgt dieses Denken direkt auf die private Finanzplanung, vom Betriebsergebnis zur eigenen Liquidität.' },
        { q: 'Wie viel technisches Setup ist nötig?', a: 'Keines. Skills-UP! läuft im Browser, ist DSGVO-konform und braucht keine Installation, kein IT-Ticket und keinen Admin-Zugang. Start in unter 2 Minuten.' },
      ]}
      verwandteSchultypen={[
        { slug: 'hlw', label: 'HLW & Fachschulen', teaser: 'Alltag, Konsum und Lebensführung als praktische Finanzbildung.' },
        { slug: 'hak', label: 'HAK & HAS', teaser: 'Betriebswirtschaft persönlich gemacht, vom Lohnzettel bis zum Investieren.' },
        { slug: 'berufsschule', label: 'Berufsschule & Lehre', teaser: 'Duale Ausbildung im Gastgewerbe: Finanzbildung mit echtem Gehalt ab Tag 1.' },
      ]}
      testimonials={[
        {
          text: 'Im Tourismus ist das Einkommen ein Auf und Ab. Die Saison-Simulation hat meinen Schüler:innen das erste Mal greifbar gemacht, warum man nicht das ganze Sommergeld verleben darf. Das ist Lebensvorbereitung, nicht nur Unterricht.',
          person: 'Mag. Birgit H.',
          rolle: 'Lehrerin Rechnungswesen & Controlling',
          schule: 'Tourismusschule Tirol',
        },
        {
          text: 'Viele meiner Schüler:innen wollen später ein eigenes Lokal. Mit dem Selbstständigkeits-Modul haben sie zum ersten Mal verstanden, dass Betriebsergebnis und Privatentnahme zwei verschiedene Dinge sind. Kein Aufwand für mich, volle Konzentration bei ihnen.',
          person: 'Mag. Thomas R.',
          rolle: 'Lehrer Betriebswirtschaft',
        },
      ]}
    />
  )
}
