'use client'

import BunnyVideoSektion, { type BunnyVideo } from '@/components/BunnyVideoSektion'

type Anrede = 'sie' | 'du'

// Startseite siezt, die Schultyp-Seiten duzen durchgehend — beide Fassungen
// nutzen dasselbe Bauteil, also muss die Anrede mitwandern.
const anredeTexte = (a: Anrede) =>
  a === 'du'
    ? {
        lead: 'eines für dich als Lehrkraft, eines für deine Klasse',
        badgeKlasse: 'Für deine Klasse',
        fuerKlasse: 'für deine Klasse',
        hoeren: 'Das hören deine Schüler:innen zum Start',
      }
    : {
        lead: 'eines für Sie als Lehrkraft, eines für Ihre Klasse',
        badgeKlasse: 'Für Ihre Klasse',
        fuerKlasse: 'für Ihre Klasse',
        hoeren: 'Das hören Ihre Schüler:innen zum Start',
      }

// Bunny-Library 722507, Collection 16_VORSTELLUNG (7c06221f-c1ce-451b-9d53-2744f62ef67d).
// 16.2 steht nicht hier, sondern auf /demo-anfragen (VorstellungVideo.tsx): es endet mit
// einem Bestellappell und gehört damit dorthin, wo bestellt wird.
const videoListe = (a: Anrede): BunnyVideo[] => {
  const t = anredeTexte(a)
  return [
    {
      guid: '507846d7-3838-4e35-96e6-cb18f6d1b3d2',
      badge: 'Für Lehrkräfte',
      titel: 'Willkommen bei Skills-UP!',
      beschreibung: `15 Module, fix und fertig, flexibel über das ganze Jahr. Dazu didaktische Materialien und Simulationen ${t.fuerKlasse}.`,
      sekunden: 23,
      akzent: '#4a2d8a',
      poster: '/willkommen/lehrkraft.jpg',
    },
    {
      guid: 'a214e3cf-15b9-4aa2-979b-7b84d18ded51',
      badge: t.badgeKlasse,
      titel: 'Finanzbildung ist ein Life-Skill',
      beschreibung: `${t.hoeren}: warum uns beiden in der Schule niemand Geld erklärt hat — und was in den Modulen wirklich vorkommt.`,
      sekunden: 54,
      akzent: '#1a5c4e',
      poster: '/willkommen/schueler.jpg',
    },
  ]
}

export default function WillkommenVideos({ anrede = 'sie' }: { anrede?: Anrede }) {
  return (
    <BunnyVideoSektion
      eyebrow="Persönlich vorgestellt"
      headline="Marina und Stefan sagen kurz Hallo."
      lead={`Zwei Begrüßungsvideos aus der Plattform: ${anredeTexte(anrede).lead}. Zusammen keine 80 Sekunden.`}
      videos={videoListe(anrede)}
    />
  )
}
