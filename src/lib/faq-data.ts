// 100 typische Fragen von Lehrkräften zur Finanzbildung — Datenquelle für /faq
// Antworten bewusst anbieterneutral (keine Banken-/Produktnamen) und ohne Anlageempfehlungen.

export type FaqItem = {
  q: string
  a: string
  link?: { href: string; label: string }
}

export type FaqCategory = {
  id: string
  title: string
  blurb: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    id: 'grundlagen',
    title: 'Grundlagen: Warum Finanzbildung?',
    blurb: 'Was Finanzbildung ist, warum sie in die Schule gehört und was passiert, wenn sie fehlt.',
    items: [
      {
        q: 'Was versteht man unter Finanzbildung eigentlich genau?',
        a: 'Finanzbildung ist die Fähigkeit, informierte Entscheidungen über das eigene Geld zu treffen: Einnahmen und Ausgaben planen, Sparen und Kredite verstehen, Risiken einschätzen und für die Zukunft vorsorgen. Nach dem Verständnis der OECD gehören dazu Wissen, Verhalten und Einstellungen — es geht also um mehr als Zinsrechnung, nämlich um mündiges Handeln im Finanzalltag.',
      },
      {
        q: 'Warum ist Finanzbildung in der Schule so wichtig?',
        a: 'Jugendliche treffen früher Finanzentscheidungen, als viele denken: erstes Konto, Handyvertrag, Onlinekäufe, Lehrlingseinkommen. Ob sie darauf vorbereitet werden, hängt heute stark vom Elternhaus ab. Die Schule ist der einzige Ort, an dem alle Jugendlichen unabhängig von ihrer Herkunft dieselbe Chance auf Finanzkompetenz bekommen.',
      },
      {
        q: 'Wie steht es um die Finanzkompetenz österreichischer Jugendlicher?',
        a: 'Erhebungen, etwa der OECD, zeigen wiederholt Lücken bei Kernkonzepten wie Zinseszins, Inflation und Risikostreuung — bei gleichzeitig hoher Selbsteinschätzung. Genau diese Kombination ist riskant: Wer sich sicher fühlt, aber Grundlagen nicht beherrscht, trifft teure Fehlentscheidungen.',
      },
      {
        q: 'Welche Folgen hat fehlende Finanzbildung konkret?',
        a: 'Schuldnerberatungen berichten seit Jahren, dass junge Erwachsene überproportional von Überschuldung betroffen sind — häufige Auslöser sind Handyverträge, Ratenkäufe, Onlineshopping und das erste eigene Auto. Dazu kommen Anfälligkeit für Betrug, teure Impulsentscheidungen und fehlende Vorsorge.',
      },
      {
        q: 'Trifft fehlende Finanzbildung alle Jugendlichen gleich?',
        a: 'Nein. Finanzwissen wird stark über das Elternhaus weitergegeben — Jugendliche aus einkommensschwächeren Familien haben seltener Zugang zu Finanzgesprächen und Vorbildern. Schulische Finanzbildung ist deshalb auch eine Frage der Chancengerechtigkeit.',
      },
      {
        q: 'Was ist die Nationale Finanzbildungsstrategie Österreichs?',
        a: 'Österreich hat 2021 eine Nationale Finanzbildungsstrategie beschlossen, koordiniert vom Finanzministerium und entwickelt mit der OECD. Ziel ist, Finanzbildungsangebote zu bündeln, Qualität zu sichern und alle Bevölkerungsgruppen zu erreichen — mit Schulen als zentralem Hebel. Skills-UP! wird im Rahmen dieser Strategie unterstützt.',
      },
      {
        q: 'Ersetzt schulische Finanzbildung das Elternhaus?',
        a: 'Nein — sie ergänzt es. Eltern prägen Geldgewohnheiten früh und informell. Die Schule bietet zusätzlich strukturiertes, werbefreies und fachlich geprüftes Wissen, das zu Hause nicht überall vorhanden ist. Beides zusammen wirkt am besten.',
      },
      {
        q: 'Was ist der Unterschied zwischen Finanzbildung und Wirtschaftsbildung?',
        a: 'Wirtschaftsbildung ist der breitere Begriff: Märkte, Unternehmen, Volkswirtschaft, Wirtschaftspolitik. Finanzbildung fokussiert auf persönliche Geldentscheidungen — Budget, Sparen, Kredit, Vorsorge, Konsumentenschutz. Beide überschneiden sich und profitieren voneinander.',
      },
      {
        q: 'Ist Finanzbildung nicht verdeckte Werbung für Finanzanbieter?',
        a: 'Diese Sorge ist berechtigt — und genau deshalb ist Anbieterneutralität das wichtigste Qualitätskriterium. Gute Finanzbildung erklärt Konzepte und Kategorien statt Produkte, nennt keine Markennamen und verfolgt kein Verkaufsinteresse. Skills-UP! ist als gemeinnütziges Vereinsprojekt bewusst werbefrei aufgebaut.',
      },
      {
        q: 'Ab welchem Alter ist Finanzbildung sinnvoll?',
        a: 'Grundverständnis für Geld beginnt schon in der Volksschule, etwa über Taschengeld. Richtig entscheidungsnah wird es zwischen 15 und 20: erstes Konto, Lehrlingseinkommen, eigene Verträge, erste Investitionsfragen. Genau in dieser Phase setzt Skills-UP! an, weil Gelerntes sofort angewendet wird.',
      },
    ],
  },
  {
    id: 'lehrplan',
    title: 'Lehrplan, Fächer & Schulrecht',
    blurb: 'Wo Finanzbildung im österreichischen Lehrplan verankert ist — und was sich 2027 ändert.',
    items: [
      {
        q: 'Wo ist Finanzbildung im österreichischen Lehrplan verankert?',
        a: 'In der Sekundarstufe I vor allem im Fach Geographie und wirtschaftliche Bildung (GW), das mit dem Lehrplan 2023 deutlich stärker auf Wirtschafts- und Finanzthemen ausgerichtet wurde. In der Sekundarstufe II je nach Schultyp in GW, Betriebswirtschaft, Rechnungswesen oder politischer Bildung. Zusätzlich gilt das Unterrichtsprinzip Wirtschafts- und Verbraucher:innenbildung für alle Fächer.',
        link: { href: '/lehrplan-mapping', label: 'Zum Lehrplanmapping' },
      },
      {
        q: 'Stimmt es, dass Finanzbildung ab 2027 Pflicht wird?',
        a: 'Ja — ab dem Schuljahr 2027/28 ist Finanzbildung im österreichischen Lehrplan verankert. Schulen, die jetzt Erfahrungen sammeln, sind beim Start klar im Vorteil: eingespielte Materialien, geschulte Lehrkräfte und erprobte Abläufe.',
        link: { href: '/aktuelles/finanzbildung-pflichtfach-2027', label: 'Alle Details zum Pflichtfach 2027' },
      },
      {
        q: 'In welchen Fächern kann ich Finanzbildung heute schon unterrichten?',
        a: 'In GW (Wirtschaftskompetenzen), Mathematik (Zins- und Prozentrechnung), Betriebswirtschaft und Rechnungswesen an BHS, Deutsch (Verträge und AGB lesen), Ethik und Religion (Konsum und Werte), Digitaler Grundbildung (Onlinebanking, Betrug im Netz) — und in der Klassenvorstandsstunde.',
      },
      {
        q: 'Wie setze ich Finanzbildung fächerübergreifend um?',
        a: 'Ein bewährtes Modell ist das gemeinsame Projekt: Mathematik rechnet Kreditkosten nach, Deutsch analysiert Werbeversprechen, GW plant das Monatsbudget, Digitale Grundbildung prüft Fake-Shops. Digitale Simulationen eignen sich als verbindende Klammer, weil sie mehrere Kompetenzen gleichzeitig ansprechen.',
      },
      {
        q: 'Gibt es Kompetenzmodelle für Finanzbildung?',
        a: 'Ja. International maßgeblich ist der Kompetenzrahmen der OECD/INFE, der Wissen, Verhalten und Einstellungen altersgestuft beschreibt. Die Lernziele von Skills-UP! orientieren sich an diesem Rahmen und sind öffentlich einsehbar.',
        link: { href: '/lernziele', label: 'Alle Skills-UP!-Lernziele ansehen' },
      },
      {
        q: 'Ist Finanzbildung matura- bzw. prüfungsrelevant?',
        a: 'Je nach Schultyp: An HAK und anderen BHS sind Betriebswirtschaft und Rechnungswesen prüfungsrelevant, an der AHS läuft Finanzbildung über GW ein. Finanzthemen eignen sich außerdem gut für vorwissenschaftliche Arbeiten und Diplomarbeiten — von Inflationsanalysen bis Konsumverhalten.',
      },
      {
        q: 'Was ist das Unterrichtsprinzip Wirtschafts- und Verbraucher:innenbildung?',
        a: 'Ein per Grundsatzerlass verankertes Unterrichtsprinzip, das Wirtschafts- und Konsumkompetenz als Aufgabe aller Fächer und Schulstufen definiert. Es ist die formale Grundlage, auf die sich jede Lehrkraft berufen kann, die Finanzthemen in den eigenen Unterricht holt — unabhängig vom Fach.',
      },
      {
        q: 'Können wir schulautonome Stunden für Finanzbildung nutzen?',
        a: 'Ja. Schulautonome Schwerpunktsetzungen, Wahlpflichtfächer oder unverbindliche Übungen sind ein bewährter Weg, Finanzbildung sichtbar im Stundenplan zu verankern, bevor sie 2027/28 flächendeckend kommt. Die Entscheidung liegt bei den schulischen Gremien.',
      },
      {
        q: 'Wie sieht Finanzbildung an Berufsschulen aus?',
        a: 'Lehrlinge verdienen bereits eigenes Geld — Finanzbildung ist hier keine Zukunftsvorbereitung, sondern akute Gegenwart: Lehrlingseinkommen einteilen, erste Fixkosten, erstes Auto, erste Kreditversuchung. Anknüpfungspunkte bieten politische Bildung und der Fachunterricht.',
        link: { href: '/aktuelles/finanzbildung-berufsschule', label: 'Artikel: Finanzbildung an Berufsschulen' },
      },
      {
        q: 'Wer entscheidet an der Schule, welches Finanzbildungsprogramm eingesetzt wird?',
        a: 'Im Kern die Lehrkraft bzw. Fachgruppe gemeinsam mit der Direktion. Bei schulweitem Einsatz digitaler Programme sollten Datenschutz (DSGVO) und gegebenenfalls der Schulgemeinschaftsausschuss eingebunden werden. Browserbasierte Lösungen ohne Installation halten den Abstimmungsaufwand klein.',
      },
    ],
  },
  {
    id: 'didaktik',
    title: 'Didaktik & Einstieg',
    blurb: 'Wie der Einstieg gelingt — auch ohne Finanz-Studium und ohne große Vorbereitung.',
    items: [
      {
        q: 'Ich fühle mich bei Finanzthemen selbst unsicher — kann ich Finanzbildung trotzdem unterrichten?',
        a: 'Ja — und Sie sind damit in guter Gesellschaft. Fertig aufbereitete Programme mit Lösungen, Erklärvideos und Selbstlernmodulen nehmen die fachliche Last ab: Die Lehrkraft begleitet den Lernprozess, statt Expertin oder Experte für Steuerrecht sein zu müssen. Viele Lehrkräfte berichten, dass sie selbst mitlernen — das ist völlig legitim.',
      },
      {
        q: 'Wie starte ich ohne großen Aufwand mit Finanzbildung?',
        a: 'Klein anfangen: ein einzelnes 15-Minuten-Modul oder eine Simulation als Einstieg in einer regulären Stunde. Danach lässt sich schrittweise ausbauen — zur Modulreihe, zum Semesterschwerpunkt oder zum fächerübergreifenden Projekt. Wichtig ist der erste konkrete Schritt, nicht das perfekte Gesamtkonzept.',
      },
      {
        q: 'Welche Methoden funktionieren in der Finanzbildung am besten?',
        a: 'Handlungsorientierte: Simulationen, Fallbeispiele, Planspiele, Peer-Formate und echte Rechercheaufträge. Reine Vorträge über Zinsen bleiben erfahrungsgemäß am wenigsten hängen. Faustregel: Jede Stunde sollte mindestens eine echte Entscheidung enthalten, die Schüler:innen selbst treffen.',
      },
      {
        q: 'Warum Simulationen statt Arbeitsblätter?',
        a: 'Weil Finanzkompetenz Entscheidungskompetenz ist. In einer Simulation erleben Schüler:innen die Konsequenzen ihrer Wahl — der Ratenkauf, der sich summiert, das Depot, das schwankt — risikofrei und unmittelbar. Dieser Erfahrungsbezug erzeugt Transfer, den ein Lückentext nicht leisten kann.',
      },
      {
        q: 'Was ist Microlearning und warum passt es zur Finanzbildung?',
        a: 'Microlearning bedeutet kurze, fokussierte Lerneinheiten von etwa 5 bis 15 Minuten. Das passt zur Aufmerksamkeitsspanne, zu den Lerngewohnheiten von Jugendlichen — und in jeden Stundenrest. Skills-UP!-Module gibt es deshalb in einer 15-Minuten- und einer 50-Minuten-Version.',
      },
      {
        q: 'Ist Gamification nur Spielerei?',
        a: 'Nein — richtig eingesetzt ist sie ein Motivationsinstrument: Punkte, Quizzes und Abzeichen machen Fortschritt sichtbar und halten dran. Entscheidend ist, dass die Spielmechanik an echte Lernziele gekoppelt ist und nicht vom Inhalt ablenkt.',
      },
      {
        q: 'Wie hole ich eine unmotivierte Klasse beim Thema Geld ab?',
        a: 'Über ihre eigene Lebenswelt: das erste Gehalt, der Handyvertrag, die Sneaker auf Raten, der Fake-Shop im Feed, die In-App-Käufe. Wer mit den Beispielen der Klasse arbeitet statt mit abstrakten Musterhaushalten, hat die Aufmerksamkeit meist nach wenigen Minuten.',
      },
      {
        q: 'Sollen Schüler:innen im Unterricht auch Finanzfehler machen dürfen?',
        a: 'Unbedingt — im geschützten Rahmen. Wer in der Simulation in die Schuldenfalle tappt oder auf einen Scam hereinfällt, vergisst das nicht mehr. Der sichere Fehler heute verhindert den teuren Fehler mit 19.',
      },
      {
        q: 'Wie differenziere ich bei sehr unterschiedlichem Vorwissen?',
        a: 'Mit Selbstlernmodulen im eigenen Tempo: Wer schnell ist, geht in die Tiefe, wer Grundlagen braucht, bekommt sie ohne Bloßstellung. Zwei Modulversionen (kurz/lang) und ein Dashboard mit Lernstand pro Schüler:in machen Differenzierung praktikabel statt theoretisch.',
      },
      {
        q: 'Wie mache ich trockene Zahlen greifbar?',
        a: 'Über Alltagsanker: das Streaming-Abo auf zehn Jahre hochrechnen, die Inflation am Lieblingssnack zeigen, den Zinseszins als wachsende Kurve visualisieren. Konkrete, visuelle und persönlich relevante Zahlen schlagen jede abstrakte Formel.',
      },
    ],
  },
  {
    id: 'alltag',
    title: 'Unterrichtsthemen: Geld im Alltag',
    blurb: 'Budget, Konto, Verträge, Konsumfallen — die Themen, die Jugendliche sofort betreffen.',
    items: [
      {
        q: 'Wie unterrichte ich Budgetplanung praxisnah?',
        a: 'Mit einer realistischen Persona: Ein Lehrling mit eigenem Einkommen plant den Monat — fixe Kosten zuerst, dann variable, dann Sparziel. Faustregeln wie „50/30/20“ eignen sich als Diskussionsanlass: Wo funktionieren sie, wo nicht? Digitale Budget-Simulationen machen die Folgen einzelner Entscheidungen sofort sichtbar.',
      },
      {
        q: 'Erstes eigenes Konto — was sollten Jugendliche wissen?',
        a: 'Was ein Jugendkonto von einem Standardkonto unterscheidet, welche Spesen anfallen können, wie man einen Kontoauszug liest — und warum eine Kontoüberziehung eine der teuersten Kreditformen überhaupt ist. Wichtig: Konditionen vergleichen lehren, ohne einzelne Banken zu bewerben.',
      },
      {
        q: 'Debitkarte, Kreditkarte, Handy-Zahlung — wie erkläre ich die Unterschiede?',
        a: 'Debitkarte: Das Geld geht sofort vom Konto ab. Kreditkarte: Es wird gesammelt und später abgebucht — mit Verschuldungsrisiko. Mobile Zahlung mit Handy oder Uhr ist nur die Hülle, dahinter steckt immer eine dieser Karten. Kernbotschaft: Bezahlform ändert nichts daran, dass echtes Geld fließt.',
      },
      {
        q: 'Gehört „Was tun bei Kartenverlust?“ in den Unterricht?',
        a: 'Ja — das ist gelebter Konsumentenschutz. Sofort sperren lassen: In Österreich gibt es dafür den zentralen Sperr-Notruf 0800 204 8800, zusätzlich die eigene Bank informieren. Wer die Reaktionskette einmal geübt hat, gerät im Ernstfall nicht in Panik.',
      },
      {
        q: 'Handyvertrag oder Wertkarte — wie behandle ich das Thema?',
        a: 'Als Vertragslese-Übung: Bindungsfrist, Grundgebühr, Servicepauschalen, Kosten nach dem ersten Jahr, Roaming. Schüler:innen vergleichen reale Tarifmodelle (anonymisiert) und rechnen die echten Gesamtkosten über die Laufzeit — meist eine Überraschung.',
      },
      {
        q: 'Wie thematisiere ich Konsumfallen konkret?',
        a: 'An echten Mechanismen: künstliche Verknappung („nur noch 2 verfügbar“), Lockpreise, Abofallen, dynamische Preise, In-App-Käufe. Schüler:innen sammeln eigene Beispiele aus ihrem Alltag und dekonstruieren die psychologischen Tricks dahinter — das wirkt nachhaltiger als jede Warnung.',
      },
      {
        q: 'Warum ist „Buy now, pay later“ ein wichtiges Unterrichtsthema?',
        a: 'Weil die Hürde so niedrig ist: ein Klick, keine Bonitätsprüfung gefühlt, die Rechnung kommt später. Genau das führt bei jungen Menschen zu Mahnspesen, Inkasso und Schuldenspiralen. Im Unterricht lohnt die Rechnung: Was kostet der Kauf wirklich, wenn Raten und Verzugsspesen dazukommen?',
      },
      {
        q: 'Wie sensibilisiere ich für Abos und In-App-Käufe?',
        a: 'Mit einer Abo-Inventur: Alle zählen (anonym) ihre Abos und rechnen die Jahreskosten hoch — Streaming, Gaming, Apps, Cloud. Danach: Kündigungsfristen und automatische Verlängerungen verstehen. Die Jahressumme überrascht fast jede Klasse.',
      },
      {
        q: 'Wie behandle ich Werbung und Influencer-Marketing im Finanzkontext?',
        a: 'Analytisch: Wie verdienen Influencer:innen an Empfehlungen (Affiliate-Links, Kooperationen)? Woran erkennt man Werbekennzeichnung? Welche Rolle spielen FOMO und Ideal-Lifestyles beim Konsumdruck? Konkrete Posts aus dem Feed der Klasse zu analysieren ist die wirksamste Übung.',
      },
      {
        q: 'Rechnung, Mahnung, Inkasso — was müssen Schüler:innen können?',
        a: 'Zahlungsfristen ernst nehmen, Mahnungen nie ignorieren, Mahn- und Inkassospesen als reale Kosten verstehen — und wissen, dass man bei Zahlungsproblemen aktiv werden kann: Kontakt aufnehmen, Ratenzahlung vereinbaren. Wichtig zu wissen: Staatlich anerkannte Schuldenberatungen in Österreich helfen kostenlos.',
      },
    ],
  },
  {
    id: 'sparen',
    title: 'Unterrichtsthemen: Sparen & Investieren',
    blurb: 'Zinsen, Inflation, Aktien und Krypto — fundiert unterrichten, ohne Anlageberatung zu machen.',
    items: [
      {
        q: 'Wie erkläre ich Zinsen und Zinseszins verständlich?',
        a: 'Visuell und mit langen Zeiträumen: Ein monatlicher Sparbetrag über 10, 20, 30 Jahre als wachsende Kurve zeigt den Zinseszinseffekt eindrucksvoller als jede Formel. Die 72er-Regel (72 geteilt durch Zinssatz ≈ Verdopplungszeit) ist ein guter Merksatz für den Einstieg.',
      },
      {
        q: 'Wie mache ich Inflation für Jugendliche greifbar?',
        a: 'Über Preise aus ihrem Alltag: Was kostete der Snack, das Ticket, der Haarschnitt vor fünf Jahren — was heute? Darauf aufbauend das Konzept Warenkorb und Verbraucherpreisindex einführen. Kernfrage: Was bedeutet Inflation für Erspartes, das nur herumliegt?',
      },
      {
        q: 'Sparbuch, Bausparen, Fonds — wie vermittle ich Sparformen neutral?',
        a: 'Über Kategorien statt Produkte: Wie schnell komme ich an mein Geld (Verfügbarkeit)? Wie sicher ist es (Risiko)? Was kann es bringen (Ertrag)? Schüler:innen ordnen Sparformen in dieses Dreieck ein — ohne Markennamen, ohne Empfehlung, aber mit klarem Verständnis der Zielkonflikte.',
      },
      {
        q: 'Sollte ich die Einlagensicherung erwähnen?',
        a: 'Ja, sie gehört zum Systemverständnis: In der EU sind Einlagen bis 100.000 Euro pro Person und Bank gesetzlich gesichert. Das erklärt, warum Erspartes am Konto anders zu bewerten ist als Investments — und wo die Grenzen der Sicherheit liegen.',
      },
      {
        q: 'Darf ich über Aktien sprechen, ohne Anlageberatung zu machen?',
        a: 'Ja — Konzeptwissen ist Bildung, keine Beratung. Was eine Aktie ist (Anteil an einem Unternehmen), wie Kurse entstehen, was Dividenden sind, welche Risiken bestehen: alles legitim. Die Grenze verläuft bei konkreten Kauf-Tipps und Produktempfehlungen — die gehören nicht in den Unterricht, und genau das sollten auch Schüler:innen als Warnsignal bei „Finanz-Gurus“ erkennen.',
      },
      {
        q: 'Wie erkläre ich das ETF-Konzept didaktisch sauber?',
        a: 'Als Prinzip der Streuung: Statt auf eine Firma zu setzen, kauft man einen Korb aus vielen — fällt eine aus, tragen die anderen. Das Konzept lässt sich mit einem einfachen Kartenspiel oder einer Simulation zeigen. Auch hier gilt: Konzept ja, konkrete Produktempfehlung nein.',
      },
      {
        q: 'Risiko und Rendite — welches Bild funktioniert im Unterricht?',
        a: 'Die eiserne Regel: Kein höherer Ertrag ohne höheres Risiko. Wer „sichere 20 Prozent pro Monat“ verspricht, lügt — dieses Warnsignal zu verankern ist einer der wertvollsten Betrugsschutz-Reflexe überhaupt. Übung: Angebote nach Risiko und Seriosität sortieren lassen.',
      },
      {
        q: 'Krypto im Unterricht — ignorieren oder behandeln?',
        a: 'Behandeln, denn Jugendliche begegnen Krypto ohnehin — in Feeds, in Gruppen, in Werbung. Sinnvoll ist ein nüchterner Dreiklang: Wie funktioniert die Technologie? Warum sind die Schwankungen extrem (bis zum Totalverlust)? Und warum ist die Szene ein Magnet für Betrugsmaschen? Weder Hype noch Tabu — Einordnung.',
      },
      {
        q: 'Wie ordne ich Trading-Apps und Meme-Aktien ein?',
        a: 'Als Abgrenzungsübung: langfristiges, gestreutes Anlegen versus kurzfristiges Spekulieren mit Glücksspielcharakter. Trading-Apps nutzen gezielt Spielmechaniken (Push-Nachrichten, Konfetti, Ranglisten), die zu häufigem Handeln verleiten — das zu durchschauen ist Medien- und Finanzkompetenz zugleich.',
      },
      {
        q: 'Kann ein Börsenspiel sinnvoll sein — oder erzieht es zum Zocken?',
        a: 'Es kommt auf die Einbettung an: Mit Reflexion über Streuung, Emotionen und die Rolle des Zufalls bei kurzen Zeiträumen ist ein Börsenspiel ein starkes Lernwerkzeug. Ohne Reflexion belohnt es riskantes Verhalten. Das Skills-UP!-Aktiengame ist bewusst als Lernspiel mit Einordnung konzipiert.',
        link: { href: '/aktiengame', label: 'Zum Aktiengame' },
      },
    ],
  },
  {
    id: 'arbeit',
    title: 'Unterrichtsthemen: Arbeit, Steuern & Vorsorge',
    blurb: 'Vom ersten Lohnzettel bis zur Pension — Finanzwissen rund um das Erwerbsleben.',
    items: [
      {
        q: 'Wie bringe ich Schüler:innen bei, einen Lohnzettel zu lesen?',
        a: 'Anhand eines realistischen Beispiel-Lohnzettels: Was ist brutto, was netto, wohin gehen Sozialversicherungsbeiträge und Lohnsteuer? Die österreichische Besonderheit von 13. und 14. Gehalt gehört unbedingt dazu. Eine Gehalts-Simulation, in der man selbst „verhandelt“ und dann den Nettoeffekt sieht, verankert das nachhaltig.',
      },
      {
        q: 'Was ist beim ersten Lehrlingseinkommen wichtig?',
        a: 'Die erste eigene Budgetverantwortung: Fixkosten definieren, einen Sparanteil ab dem ersten Monat einplanen, Konsumwünsche priorisieren. Übrigens: Seit 2020 heißt es offiziell Lehrlingseinkommen, nicht mehr Lehrlingsentschädigung — die Höhe regelt der jeweilige Kollektivvertrag.',
      },
      {
        q: 'Lohnt sich die Arbeitnehmerveranlagung als Unterrichtsthema?',
        a: 'Sehr — kaum ein Thema ist so unmittelbar nützlich: Viele Berufseinsteiger:innen lassen Geld liegen, weil sie die Arbeitnehmerveranlagung („Steuerausgleich“) nicht kennen. Grundlogik vermitteln: Wann bekomme ich Geld zurück, was sind Werbungskosten und Pendlerpauschale, wie funktioniert FinanzOnline.',
      },
      {
        q: 'Wie erkläre ich die Sozialversicherung?',
        a: 'Über die e-card als Einstieg: Dahinter stehen Kranken-, Unfall-, Pensions- und Arbeitslosenversicherung — als Pflichtversicherung nach dem Solidarprinzip. Der Vergleich „Was würde ein Spitalsaufenthalt privat kosten?“ macht den Wert des Systems greifbar.',
      },
      {
        q: 'Welche Versicherungen brauchen junge Erwachsene wirklich?',
        a: 'Als Denkrahmen statt Produktliste: Existenzbedrohende Risiken zuerst absichern (etwa Haftpflicht-Schäden), kleine Risiken selbst tragen. Haushaltsversicherung mit integrierter Haftpflicht ist beim ersten eigenen Haushalt der Klassiker. Ziel ist ein Prüfraster, mit dem Schüler:innen Angebote selbst hinterfragen können.',
      },
      {
        q: 'Pension — wie mache ich das für 16-Jährige greifbar?',
        a: 'Nicht über Angst, sondern über den Zinseszins-Hebel: Wer früh auch nur kleine Beträge zurücklegt, hat einen enormen Zeitvorteil. Dazu das Drei-Säulen-Prinzip (staatlich, betrieblich, privat) und der Blick aufs Pensionskonto: Teilzeit und Lücken wirken sich langfristig aus — das wissen viele Erwachsene nicht.',
      },
      {
        q: 'Kollektivvertrag und Gehaltsverhandlung — passt das in die Schule?',
        a: 'Unbedingt, besonders an BHS, PTS und Berufsschulen: Der Kollektivvertrag als Mindeststandard, der Unterschied zwischen KV-Lohn und Ist-Lohn, und die erste Gehaltsverhandlung als Rollenspiel oder Simulation. Wer das einmal geübt hat, tritt beim echten Gespräch anders auf.',
      },
      {
        q: 'Nebenjob und geringfügige Beschäftigung — was ist zu beachten?',
        a: 'Die Geringfügigkeitsgrenze (sie wird jährlich angepasst — aktuelle Werte bei Sozialversicherung und Finanzministerium), Zuverdienstgrenzen etwa bei der Familienbeihilfe und die Frage, wann Beiträge und Steuern anfallen. Gute Übung: reale Ferialjob-Inserate durchrechnen.',
      },
      {
        q: 'Sollte ich Selbstständigkeit thematisieren?',
        a: 'Ja, zumindest die Grundlogik: Werkvertrag versus Anstellung, warum Selbstständige ihre Sozialversicherung und Steuerrücklagen selbst verantworten, was ein Honorar vom Gehalt unterscheidet. Gerade für kreative und digitale Berufsfelder ist das früh relevant.',
      },
      {
        q: 'Gender und Geld — gehört das in die Finanzbildung?',
        a: 'Ja, mit Fakten statt Parolen: Teilzeit und Karenz wirken langfristig auf Einkommen und Pension, finanzielle Eigenständigkeit ist Sicherheitsnetz in jeder Lebenslage. Das Thema betrifft alle — und gehört zu einer ehrlichen Vorsorge-Bildung dazu.',
      },
    ],
  },
  {
    id: 'sicherheit',
    title: 'Sicherheit & digitale Finanzwelt',
    blurb: 'Phishing, Fake-Shops, Finfluencer und KI — Betrugsschutz als Kernkompetenz.',
    items: [
      {
        q: 'Wie übe ich Phishing-Erkennung wirksam?',
        a: 'Mit realitätsnahen Beispielen: nachgestellte E-Mails und SMS, in denen Absenderadresse, Dringlichkeitsdruck und Link-Ziele geprüft werden. Kernregeln verankern: Banken fragen nie per Mail nach Zugangsdaten, und Links in unerwarteten Nachrichten werden nicht angeklickt — die Bank-App oder Website tippt man selbst ein.',
      },
      {
        q: 'Welche Betrugsmaschen treffen Jugendliche gerade am häufigsten?',
        a: 'Fake-Shops mit Vorkasse, gefälschte Paket- und Zahlungs-SMS, „Investment-Chancen“ über Social Media, Romance Scams — und Jobangebote, die in Wahrheit Geldwäsche sind. Die Maschen ändern sich laufend; aktuelle Fälle aus den Nachrichten sind ideales Unterrichtsmaterial.',
      },
      {
        q: 'Was sind Money Mules — und warum muss ich darüber sprechen?',
        a: 'Kriminelle werben Jugendliche mit „schnellem Nebenverdienst“ an: Das eigene Konto für fremde Überweisungen zur Verfügung stellen. Das ist Beihilfe zur Geldwäsche und strafbar — auch wenn man „nur“ das Konto verliehen hat. Diese Falle kennen viele Jugendliche nicht, bevor es zu spät ist.',
      },
      {
        q: 'Woran erkennen Schüler:innen einen Fake-Shop?',
        a: 'Prüfroutine üben: Impressum vorhanden und plausibel? Preise unrealistisch niedrig? Nur Vorkasse möglich? Gütezeichen echt oder nur als Bild kopiert? In Österreich ist die Watchlist Internet eine gute öffentliche Anlaufstelle, um gemeldete Fake-Shops nachzuschlagen.',
      },
      {
        q: 'Finfluencer — verbieten oder im Unterricht besprechen?',
        a: 'Besprechen, denn der Feed ist längst die wichtigste Finanz-Infoquelle vieler Jugendlicher. Gemeinsame Checkliste: Wer verdient hier woran (Affiliate, eigene Produkte)? Welche Qualifikation liegt vor? Werden Risiken genannt? Garantieversprechen sind das klarste Ausschlusskriterium.',
      },
      {
        q: 'Wie vermittle ich sicheres Online-Banking?',
        a: 'Grundregeln, die sitzen müssen: Zwei-Faktor-Authentifizierung nutzen, TANs und Zugangsdaten niemals weitergeben (auch nicht an angebliche Bankmitarbeiter:innen am Telefon), Banking nur über die offizielle App oder selbst eingetippte Adresse, Vorsicht in öffentlichem WLAN.',
      },
      {
        q: 'Identitätsdiebstahl — wie sensibilisiere ich dafür?',
        a: 'Über Datensparsamkeit: Ausweisfotos, Selfies mit Dokument und persönliche Daten sind Rohstoff für Betrüger — etwa für Bestellungen auf fremden Namen. Ebenso wichtig: der Handlungsplan im Ernstfall (Bank informieren, Anzeige erstatten, Passwörter ändern).',
      },
      {
        q: 'KI und Finanz-Fakes — schon ein Unterrichtsthema?',
        a: 'Ja, dringend: Deepfake-Videos lassen Prominente für Betrugs-Investments werben, KI-generierte Websites und Chatbots wirken täuschend seriös. Doppelte Kompetenz aufbauen: KI-Inhalte erkennen und Finanzinformationen grundsätzlich an unabhängigen Quellen gegenprüfen.',
      },
      {
        q: 'Glücksspiel, Lootboxen und Gaming-Ausgaben — Finanzbildung?',
        a: 'Absolut: Lootboxen nutzen dieselbe Mechanik variabler Belohnung wie Glücksspiel, und In-Game-Währungen verschleiern reale Kosten. Eine ehrliche Reflexion der eigenen Gaming-Ausgaben erreicht Jugendliche oft stärker als jedes klassische Konsumthema.',
      },
      {
        q: 'Wohin können sich Betroffene von Internetbetrug wenden?',
        a: 'Sofort die eigene Bank kontaktieren (Zahlungen stoppen bzw. Karten sperren), Anzeige bei der Polizei erstatten, Beweise sichern. Informations- und Meldestellen wie die Watchlist Internet und die Internet Ombudsstelle helfen bei der Einordnung. Diese Kette einmal durchzuspielen nimmt die Scham, im Ernstfall Hilfe zu holen.',
      },
    ],
  },
  {
    id: 'praxis',
    title: 'Unterrichtspraxis & Organisation',
    blurb: 'Zeit, Beurteilung, Elternarbeit und sensible Situationen — Finanzbildung im Schulalltag.',
    items: [
      {
        q: 'Wie viel Unterrichtszeit brauche ich mindestens?',
        a: 'Weniger als gedacht: Schon einzelne 15-Minuten-Module wirken, weil sie ein Konzept sauber abschließen. Ideal ist eine Sequenz über ein Semester — etwa ein Modul pro Woche oder alle zwei Wochen. Ein eigenes Fach ist nicht Voraussetzung.',
      },
      {
        q: 'Funktioniert Finanzbildung in nur 10 Minuten pro Stunde?',
        a: 'Ja, als wiederkehrendes Ritual: die Finanzfrage der Woche, ein Mini-Quiz, ein einzelner Simulationsschritt. Die Regelmäßigkeit schlägt die Länge — zehn Minuten pro Woche über ein Schuljahr sind mehr als ein einmaliger Projekttag.',
        link: { href: '/aktuelles/finanzbildung-10-minuten-unterricht', label: 'Artikel: Finanzbildung in 10 Minuten' },
      },
      {
        q: 'Eignet sich Finanzbildung für Vertretungsstunden (Suppplierstunden)?',
        a: 'Hervorragend: In sich geschlossene digitale Module brauchen keine Vorbereitung und keine Fachkenntnis der supplierenden Lehrkraft — die Klasse arbeitet selbstständig im Browser, der Fortschritt wird gespeichert. Aus einer verlorenen Stunde wird ein echter Lernbaustein.',
      },
      {
        q: 'Wie gestalte ich einen Projekttag oder eine Projektwoche zu Finanzen?',
        a: 'Als Stationenbetrieb oder Challenge: Budget-Wettbewerb zwischen Gruppen, Simulationsparcours (Konto, Ratenkauf, Scam, Gehaltsverhandlung), Recherche-Station zu echten Tarifen, Abschluss-Quiz mit Rangliste. Wichtig: eine Reflexionsrunde am Ende, die Erlebtes in Regeln übersetzt.',
      },
      {
        q: 'Wie kann ich Leistungen in der Finanzbildung beurteilen?',
        a: 'Kompetenzorientiert: Quiz- und Modulergebnisse, Fallanalysen („Beurteile dieses Angebot“), Portfolio-Aufgaben, Mitarbeit in Simulationen. Ein Lernstands-Dashboard liefert die objektive Grundlage; die Reflexionsleistung („Warum hast du so entschieden?“) ergänzt die Note qualitativ.',
      },
      {
        q: 'Welche Hausübungen passen zur Finanzbildung?',
        a: 'Recherche mit echtem Nutzwert: die eigene Abo-Liste erstellen, einen Handytarif durchrechnen, Werbeversprechen aus dem eigenen Feed analysieren. Selbstlernmodule eignen sich als Hausübung mit automatischer Rückmeldung — die Stunde bleibt für Diskussion frei (Flipped Classroom).',
      },
      {
        q: 'Wie gehe ich sensibel mit Armut und knappen Familienbudgets um?',
        a: 'Grundregel: Niemand muss die eigene finanzielle Situation offenlegen. Mit fiktiven Personas statt echter Daten arbeiten, unterschiedliche Lebensrealitäten selbstverständlich mitdenken und Formulierungen vermeiden, die Konsumniveau als normal voraussetzen. Finanzbildung soll stärken, nie beschämen.',
      },
      {
        q: 'Wie überwinde ich sprachliche Barrieren beim Finanzvokabular?',
        a: 'Einfache Sprache als Standard, Fachbegriffe konsequent erklären (Glossar), Videos und Visualisierungen statt Textwüsten, Peer-Erklärungen in Partnerarbeit. Finanzdeutsch ist auch für Muttersprachler:innen eine Fremdsprache — das entlastet die Runde.',
      },
      {
        q: 'Sollte ich Eltern einbeziehen — und wie?',
        a: 'Ein kurzer Hinweis am Elternabend wirkt doppelt: Eltern wissen, was die Klasse lernt, und Gespräche über Geld werden zu Hause anschlussfähig. Gesprächsimpulse mitgeben („Fragt eure Eltern, was ihr erster Lohn war“) verbindet Schule und Familie, ohne Privatsphäre zu verletzen.',
      },
      {
        q: 'Wie messe ich, ob mein Finanzbildungsunterricht wirkt?',
        a: 'Dreistufig: Wissenszuwachs über Vorher-Nachher-Quiz, Anwendungskompetenz über Fallaufgaben und Simulationsergebnisse, Verhaltensabsichten über kurze Selbsteinschätzungen („Was machst du künftig anders?“). Ein Dashboard mit Lernständen macht die Entwicklung über das Semester sichtbar.',
      },
    ],
  },
  {
    id: 'materialien',
    title: 'Materialien, Tools & Qualität',
    blurb: 'Woran man gute Finanzbildungsangebote erkennt — und welche Fallen es bei Materialien gibt.',
    items: [
      {
        q: 'Woran erkenne ich gute Finanzbildungs-Materialien?',
        a: 'An fünf Kriterien: anbieterneutral und werbefrei, fachlich aktuell, altersgerecht aufbereitet, auf österreichische Rahmenbedingungen abgestimmt (Recht, Steuern, Institutionen) und didaktisch durchdacht statt nur informativ. Bei digitalen Angeboten kommt DSGVO-Konformität dazu.',
      },
      {
        q: 'Sind kostenlose Materialien von Banken und Versicherungen problematisch?',
        a: 'Sie können es sein: Hinter Gratis-Angeboten kommerzieller Anbieter steht oft das Ziel früher Markenbindung, und Produktdarstellungen sind selten neutral. Das heißt nicht, dass alles unbrauchbar ist — aber es braucht den kritischen Blick: Wer hat welches Interesse an diesem Material? Werbefreie Alternativen verdienen den Vorzug.',
      },
      {
        q: 'Kann ich deutsche Materialien für Österreich verwenden?',
        a: 'Nur mit Vorsicht: Steuersystem, Sozialversicherung, Schulrecht, Institutionen und selbst Begriffe unterscheiden sich erheblich. Ein Material, das die Arbeitnehmerveranlagung, österreichische Kollektivverträge oder das 13./14. Gehalt nicht kennt, geht am Alltag der Schüler:innen vorbei. Österreich-spezifische Inhalte sind klar im Vorteil.',
      },
      {
        q: 'Welche öffentlichen Stellen bieten verlässliches Material?',
        a: 'Gute Ergänzungen kommen etwa von der Oesterreichischen Nationalbank (Finanzbildungsangebote), der Arbeiterkammer (Konsumentenschutz), dem Finanzbildungsportal des Finanzministeriums und den staatlich anerkannten Schuldenberatungen. Öffentliche Quellen sind naturgemäß anbieterneutral.',
      },
      {
        q: 'Wie aktuell müssen Finanzbildungsinhalte sein?',
        a: 'Aktueller als in fast jedem anderen Fach: Grenzwerte und Beträge ändern sich jährlich, Betrugsmaschen monatlich, Trends wie neue Zahlungsdienste laufend. Ein gepflegtes digitales Programm mit laufenden Updates ist einem PDF-Ordner von vor fünf Jahren deutlich überlegen.',
      },
      {
        q: 'Was muss ich bei digitalen Tools rechtlich beachten?',
        a: 'DSGVO zuerst: Welche Daten werden erhoben (Datenminimierung!), wo werden sie gehostet (EU?), gibt es eine Vereinbarung zur Auftragsverarbeitung für die Schule? Im Zweifel Schulleitung bzw. Schulerhalter einbinden. Browserbasierte Tools ohne Installation und ohne unnötige Datenerhebung machen die Prüfung einfach.',
      },
      {
        q: 'Brauchen meine Schüler:innen eigene Geräte?',
        a: 'Für browserbasierte Programme reicht, was ohnehin da ist: Smartphone, Tablet, Laptop oder der EDV-Saal. Es muss nichts installiert werden, damit funktioniert der Einsatz auch ohne 1:1-Geräteausstattung — notfalls in Partnerarbeit am geteilten Gerät.',
      },
      {
        q: 'Was bringt OER (Open Educational Resources) in der Finanzbildung?',
        a: 'Offen lizenzierte Materialien dürfen kopiert, angepasst und geteilt werden — ideal, um Inhalte auf die eigene Klasse zuzuschneiden. Die Lizenz ersetzt aber keine Qualitätsprüfung: Aktualität, Neutralität und Österreich-Bezug muss man auch bei OER selbst checken.',
      },
      {
        q: 'Externe Workshops und Finanzvorträge — worauf achten?',
        a: 'Auf die Interessenlage: Wer finanziert den Workshop, und verdient die vortragende Person an Produktabschlüssen? Seriöse externe Angebote legen das offen und verzichten auf Produktwerbung. Und: Ein Workshop wirkt erst mit Vor- und Nachbereitung im Unterricht — als Einzelereignis verpufft er.',
      },
      {
        q: 'Warum ein durchgängiges Programm statt gesammelter Einzelmaterialien?',
        a: 'Vier Gründe: ein kohärenter Lernpfad statt Themen-Flickenteppich, messbarer Fortschritt über ein Dashboard, zentrale Aktualisierung statt veralteter Kopien — und drastisch weniger Vorbereitungszeit. Die Materialsammlung bleibt als Ergänzung wertvoll, das Programm liefert das Rückgrat.',
      },
    ],
  },
  {
    id: 'skillsup',
    title: 'Skills-UP! konkret',
    blurb: 'Antworten zum Programm: Einstieg, Kosten, Datenschutz, Dashboard und Auszeichnungen.',
    items: [
      {
        q: 'Was ist Skills-UP! genau?',
        a: 'Skills-UP! ist das digitale Finanzbildungsprogramm des gemeinnützigen Vereins Digitale Zukunftsbildung für 15- bis 20-Jährige: über 12 Lernmodule, mehr als 10 Praxissimulationen, jugendnahe Videos, Gamification und ein Lehrkräfte-Dashboard — komplett im Browser, ohne Installation.',
      },
      {
        q: 'Für welche Schultypen ist Skills-UP! geeignet?',
        a: 'Für AHS-Oberstufe, HAK und HAS, HTL, HLW und Fachschulen, BAfEP und BASOP, Tourismusschulen, PTS und Berufsschulen. Die Inhalte sind auf die jeweilige Zielgruppe abgestimmt — vom Lehrling mit eigenem Einkommen bis zur Maturaklasse.',
        link: { href: '/schulen', label: 'Angebot je Schultyp ansehen' },
      },
      {
        q: 'Wie viel Vorbereitung brauche ich als Lehrkraft für Skills-UP!?',
        a: 'Keine: Alle Module, Aufgaben und Übungsblätter sind fertig aufbereitet. Sie öffnen Skills-UP! im Browser, wählen ein Modul oder eine Simulation, und die Klasse arbeitet selbstständig — während das Dashboard den Fortschritt zeigt.',
      },
      {
        q: 'Wie läuft der Einstieg mit einer Klasse konkret ab?',
        a: 'Demo anfragen, Zugang erhalten, Klasse anlegen, Modul starten — der gesamte Einstieg dauert wenige Minuten und braucht keine IT-Abteilung. Für den ersten Einsatz empfehlen wir ein 15-Minuten-Modul oder eine Simulation als Kennenlernrunde.',
        link: { href: '/demo-anfragen', label: 'Demo anfragen' },
      },
      {
        q: 'Was kostet Skills-UP! für Schulen?',
        a: 'Skills-UP! wird von einem gemeinnützigen Verein getragen — es geht um Bildungswirkung, nicht um Gewinn. Die aktuellen Konditionen für Schulen und Klassen besprechen wir am einfachsten persönlich im Rahmen einer kostenlosen Demo.',
        link: { href: '/aktuelles/finanzbildung-kosten-schule', label: 'Artikel: Was kostet Finanzbildung?' },
      },
      {
        q: 'Ist Skills-UP! DSGVO-konform?',
        a: 'Ja: EU-rechtssicher, DSGVO-konform und browserbasiert ohne Installation. Es werden nur die für den Lernbetrieb nötigen Daten verarbeitet — ein schulweiter Rollout ist dadurch in wenigen Minuten und ohne IT-Projekt möglich.',
      },
      {
        q: 'Was zeigt mir das Lehrkräfte-Dashboard?',
        a: 'Den Lernfortschritt Ihrer Klassen auf einen Blick: welche Module abgeschlossen sind, wo die Klasse gerade steht und wo es hakt. Das macht Differenzierung, Beurteilungsgrundlagen und die Planung der nächsten Stunden deutlich einfacher.',
      },
      {
        q: 'Ist Skills-UP! ausgezeichnet oder extern geprüft?',
        a: 'Ja: Skills-UP! wurde als Top-3-Projekt der MEGA Bildungsmillion 2025 ausgezeichnet und von der Hochschule Burgenland sowie der WKÖ in Qualität und Praxisrelevanz bestätigt. Das Programm wird im Rahmen der Nationalen Finanzbildungsstrategie unterstützt.',
      },
      {
        q: 'Passt Skills-UP! zum Lehrplan meines Schultyps?',
        a: 'Ja — und Sie müssen das nicht selbst zusammensuchen: Das Lehrplanmapping ordnet alle Module den Lehrplänen der einzelnen Schultypen und Fächer zu, die Lernziele-Übersicht zeigt jedes Lernziel im Detail. Beides ist öffentlich einsehbar.',
        link: { href: '/lehrplan-mapping', label: 'Lehrplanmapping öffnen' },
      },
      {
        q: 'Wie kann ich Skills-UP! unverbindlich testen?',
        a: 'Am schnellsten über die Gratis-Demo: selbst durchklicken, Module ansehen, Simulationen ausprobieren. Für Fragen und einen persönlichen Termin erreichen Sie uns telefonisch unter +43 650 215 8715 oder per E-Mail an info@digitale-zukunftsbildung.eu.',
        link: { href: '/demo', label: 'Gratis-Demo starten' },
      },
    ],
  },
]

export const faqTotalCount = faqCategories.reduce((sum, c) => sum + c.items.length, 0)
