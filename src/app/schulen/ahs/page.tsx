import type { Metadata } from 'next'
import SchulPage from '@/components/SchulPage'

export const metadata: Metadata = {
  title: 'AHS-Oberstufe | Skills-UP! Finanzbildung',
  description: 'Skills-UP! für die AHS-Oberstufe — fertige Module für GWK, PuG oder Wahlpflichtfach. Null Vorbereitung, echte Finanzkompetenz.',
}

const icon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>
)

const bookIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
const chartIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
const shieldIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const alertIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
const starIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const playIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>
const homeIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
const piggyIcon = <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8.5 3.3 1.5 4.5L5 21h6l1-1 1 1h6l-1.5-4.5C19.5 15.3 20 13.8 20 12c0-1-.3-2-.5-2.5.5-.7 1-2.5.5-4.5z"/></svg>

export default function AhsPage() {
  return (
    <SchulPage
      name="AHS-Oberstufe"
      kurzname="AHS"
      gradient="linear-gradient(135deg, #2d1b69 0%, #4a2d8a 60%, #6b4db0 100%)"
      farbe="#4a2d8a"
      farbeHell="#ede9f8"
      schulstufen="9.–12. Schulstufe"
      lehrplanFach="GWK · PuG · Wahlpflichtfach · Projektunterricht"
      icon={icon}
      lehrerProblem="Ich bringe meinen Schüler:innen Demokratie, Geschichte und Wirtschaft bei — aber niemand erklärt ihnen, wie sie nächsten Monat ihr Geld einteilen sollen."
      intro="Die AHS bildet hervorragend — aber Finanzkompetenz ist keine Selbstverständlichkeit im Lehrplan. Skills-UP! schließt diese Lücke, ohne dass du ein neues Fach erfinden musst. Die Module passen in GWK, PuG oder als Wahlpflichtfach — du entscheidest."
      lehrplanPassung={[
        {
          fach: 'GWK (Geographie, Wirtschaft, Kultur)',
          kontext: 'Konsum, Wirtschaftssysteme, Geldwirtschaft — Skills-UP! macht diese Themen mit persönlichen Finanzentscheidungen der Schüler:innen greifbar: Budgetplanung, Ratenkauf, Investieren.',
        },
        {
          fach: 'PuG (Politische Bildung und Geschichte)',
          kontext: 'Soziale Ungleichheit, Verschuldung, Konsumdruck — Skills-UP! gibt Schüler:innen Werkzeuge, um gesellschaftliche Zusammenhänge auch finanziell zu verstehen.',
        },
        {
          fach: 'Wahlpflichtfach oder Projektunterricht',
          kontext: 'Skills-UP! eignet sich perfekt als eigenständiges Wahlpflichtfach "Finanzkompetenz" oder als begleitendes Projekt über ein Semester.',
        },
        {
          fach: 'Klassenvorstand / Lebenskunde',
          kontext: 'Erste Wohnung, erstes Konto, Nebenjob — für Klassenstunden, die wirklich relevant sind, ist Skills-UP! sofort einsetzbar.',
        },
        {
          fach: 'Mathematik (Anwendungsbezug)',
          kontext: 'Zinseszins, Prozentrechnung, Statistik: Skills-UP! bietet reale Beispiele, die Mathe-Inhalte mit Alltagssituationen verbinden.',
        },
        {
          fach: 'VWA-Vorbereitung',
          kontext: 'Schüler:innen mit wirtschaftlichen oder sozialen VWA-Themen profitieren von der inhaltlichen Tiefe, die Skills-UP! zu Finanzen und Gesellschaft bietet.',
        },
      ]}
      unterrichtsEinheiten={[
        {
          schritt: 'Einstieg mit Simulation',
          was: 'Du startest die Stunde — Schüler:innen öffnen die App und starten direkt eine kurze Simulation. Kein Erklärvideo von dir nötig. Das Szenario heute: "Du bekommst dein erstes Gehalt. Was jetzt?"',
          zeitMinuten: 10,
        },
        {
          schritt: 'Selbstständige Bearbeitung',
          was: 'Schüler:innen durchlaufen interaktive Module, Quizze und Entscheidungsszenarien. Du gehst durch die Klasse, das Dashboard zeigt dir live, wer wo steht.',
          zeitMinuten: 25,
        },
        {
          schritt: 'Peer-Video und Diskussion',
          was: 'Ein kurzes Peer-Video zeigt, wie ein Gleichaltriger dieselbe Entscheidung getroffen hat — und was dabei schiefgelaufen ist. Das löst echte Diskussionen aus, ohne dass du moderieren musst.',
          zeitMinuten: 10,
        },
        {
          schritt: 'Reflexion und Abschluss',
          was: 'Jede Schüler:in beantwortet eine Reflexionsfrage in der App. Du siehst die Antworten im Dashboard — idealer Einstieg für die nächste Stunde.',
          zeitMinuten: 5,
        },
      ]}
      module={[
        { titel: 'Finfluencer in Österreich', lernziel: 'Seriöse Finanzinformationen von problematischer Werbung unterscheiden — FMA, WAG 2018 und parasoziale Beziehungen verstehen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Medienkompetenz', icon: shieldIcon },
        { titel: 'Konsumfallen', lernziel: 'FOMO, Anchoring und Present Bias als psychologische Kauftrigger erkennen — und die 24-Stunden-Regel als einfache Gegenmaßnahme einsetzen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Konsumpsychologie', icon: alertIcon },
        { titel: 'Sparen & Geldentscheidungen', lernziel: 'Nominalzins vs. Realzins verstehen, Zinseszinseffekt berechnen und begreifen, warum Inflation Erspartes auffressen kann.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Sparen', icon: piggyIcon },
        { titel: 'Kryptowährungen & Krypto-Assets', lernziel: 'Blockchain-Grundlagen, Bitcoin-Risiken und österreichische Steuerpflicht kennen — MiCA-Regulierung und FMA-Warnliste verstehen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Investieren', icon: chartIcon },
        { titel: 'Finanzplanung', lernziel: 'Erstes Monatsbudget erstellen: Fixkosten vs. variable Kosten, 50-30-20-Regel und "Pay yourself first" als Sparstrategie.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Budgetplanung', icon: bookIcon },
        { titel: 'Altersvorsorge', lernziel: 'Das österreichische 3-Säulen-Modell kennen und verstehen, warum früh privat vorzusorgen entscheidend ist — Zinseszins und Pensionslücke berechnen.', dauer: '15 oder 50 Min', level: 'Einsteiger', kategorie: 'Vorsorge', icon: starIcon },
      ]}
      simulationen={[
        { titel: 'Konsumfallen-Parcours', untertitel: 'Erkenne FOMO, Dark Patterns, künstliche Knappheit und Abo-Fallen — mit 14-Tage-Widerrufsrecht nach FAGG.', dauer: '15–20 Min', icon: playIcon },
        { titel: 'Aktienmarkt-Langläufer', untertitel: 'Simulation eines 20-Jahres-Portfolios: ETF-Auswahl, Sparplan-Rechner, Marktvolatilität, Zinseszins erleben.', dauer: '25–35 Min', icon: chartIcon },
        { titel: 'Bank-Simulation', untertitel: 'Girokonto vs. Sparkonto, Überweisung, Dauerauftrag, Kartenzahlung — Bankalltag erleben.', dauer: '20–30 Min', icon: homeIcon },
        { titel: 'Krypto-Handel', untertitel: 'Simulierter Krypto-Markt: Bitcoin/ETH kaufen/verkaufen, Portfoliorisiko einschätzen, MiCA-Regulierung verstehen.', dauer: '30–45 Min', icon: alertIcon },
      ]}
      themen={[
        'Budgetplanung im Alltag',
        'Konsumverhalten reflektieren',
        'Sparziele setzen',
        'Krypto-Mythen entlarven',
        'Online-Scams erkennen',
        'Erstes Bankkonto & Apps',
        'Nebenjob & Lohnzettel',
        'Abos und Vertragswerke',
        'Ratenkauf kritisch sehen',
        'Buy-Now-Pay-Later',
        'Finanzielle Selbstständigkeit',
        'Studium & erstes Wohnen planen',
        'Versicherungen verstehen',
        'Sparen vs. Investieren',
      ]}
      features={[
        {
          titel: 'Lehrer-Dashboard',
          nutzenfuerLehrer: 'Du siehst auf einen Blick: Wer hat welches Modul abgeschlossen? Wer ist beim Thema Ratenkauf besonders unsicher? Das Dashboard zeigt Lernfortschritt in Echtzeit — ohne dass du selbst etwas nachverfolgen musst.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>,
        },
        {
          titel: 'Fertige Module & Aufgaben',
          nutzenfuerLehrer: 'Jedes Modul ist komplett fertig: Einstieg, Inhalt, Übungen, Reflexion. Du musst nichts vorbereiten, nichts ausdrucken, nichts erklären. Stunde öffnen, App starten, loslegen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
        },
        {
          titel: 'Simulationen',
          nutzenfuerLehrer: 'Schüler:innen treffen echte Entscheidungen in sicherer Umgebung — und erleben die Konsequenzen. Das erzeugt Lernerlebnisse, die du mit Frontalunterricht nicht erreichst. Und du musst dabei nichts erklären.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>,
        },
        {
          titel: 'Gamification & Punktesystem',
          nutzenfuerLehrer: 'Schüler:innen sammeln Punkte, vergleichen sich mit der Klasse und machen Module freiwillig weiter — auch zuhause. Das ist kein Trick, das ist gutes Lerndesign. Und es spart dir Motivationsarbeit.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
        },
        {
          titel: 'Peer-Videos',
          nutzenfuerLehrer: 'Gleichaltrige erklären Gleichaltrigen — das funktioniert besser als jeder Erwachsene. Die Videos sind kurz, authentisch und lösen Diskussionen aus. Du moderierst, du erklärst nicht.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.54C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>,
        },
        {
          titel: 'Zertifikat für Schüler:innen',
          nutzenfuerLehrer: 'Nach Abschluss erhalten Schüler:innen ein Zertifikat — das motiviert und gibt dir etwas Dokumentierbares für Zeugnisbemerkungen, Portfolios oder Bewerbungsunterlagen.',
          icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>,
        },
      ]}
      lehrerZitat={{
        text: 'Ich hab die Stunde mit einer kurzen Erklärung eröffnet — dann haben die Schüler:innen 30 Minuten selbstständig gearbeitet. Am Ende wollten viele weitermachen. So eine Stunde hatte ich schon lange nicht mehr.',
        person: 'GWK-Lehrerin, AHS Wien, nach dem ersten Piloteinsatz',
      }}
      lehrerFoto="/fotos/lehrer/ahs.png"
    />
  )
}
