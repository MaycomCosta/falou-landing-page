import type { Messages } from './en'

/** Français. Uses the French space before ? ! : ; (written as a narrow no-break space). */
export const fr: Messages = {
  meta: {
    title: 'Falou — Parlez. Il écrit.',
    description:
      'Maintenez une touche, parlez en français, anglais, espagnol ou portugais, relâchez — votre texte apparaît dans n’importe quelle app de votre Mac. Gratuit, privé, hors ligne.',
  },
  nav: {
    how: 'Comment ça marche',
    try: 'Essayer',
    privacy: 'Confidentialité',
    faq: 'Questions',
    cta: 'Télécharger Falou',
    home: 'Falou, retour en haut',
    language: 'Langue',
    skip: 'Aller à la démonstration',
  },
  bubble: { listening: 'J’écoute', working: 'Votre voix devient du texte', done: 'C’est fait' },
  hero: {
    eyebrow: 'Dictée vocale pour Mac · gratuit · hors ligne',
    title1: 'Parlez.',
    title2: 'Il écrit.',
    body: 'Maintenez une touche, dites ce que vous voulez écrire, relâchez. Vos mots apparaissent dans WhatsApp, Discord, Notes, votre navigateur — là où se trouve le curseur. En français, anglais, espagnol ou portugais, même mélangés dans une seule phrase.',
    download: 'Télécharger pour Mac',
    tryIt: 'L’essayer sur cette page',
    privacyNote: 'Rien de ce que vous dites ne quitte votre Mac.',
    keyRight: 'option',
    keyOption: 'droite',
    message: 'Message',
  },
  worksIn: { label: 'Fonctionne partout où l’on peut écrire :' },
  how: {
    eyebrow: 'Comment ça marche',
    title1: 'Trois gestes.',
    title2: 'C’est tout.',
    steps: [
      {
        title: 'Maintenez la touche',
        body: 'Option droite par défaut, ou la touche de votre choix. Le micro est déjà prêt, votre premier mot n’est donc pas coupé.',
      },
      {
        title: 'Parlez',
        body: 'Parlez comme à un ami. Passez du français à l’anglais, l’espagnol ou le portugais quand vous voulez.',
      },
      {
        title: 'Relâchez',
        body: 'En une demi-seconde environ, le texte est dans l’app que vous utilisez, déjà propre. Ce que vous aviez copié est remis à sa place.',
      },
    ],
    example: 'Tu peux m’envoyer les slides ?',
  },
  tryIt: {
    eyebrow: 'Essayer',
    title1: 'Maintenez, parlez,',
    title2: 'relâchez.',
    intro:
      'C’est une simulation avec des phrases d’exemple, pour sentir le rythme. La vraie app écoute votre propre voix, sur votre Mac.',
    language: 'Langue',
    mixed: 'Mélangé',
    hold: 'Maintenir pour parler',
    holdHint: 'ou sélectionnez-le et maintenez la barre d’espace',
    status: {
      idle: 'Appuyez sur le bouton et maintenez-le.',
      listening: 'J’écoute… relâchez quand vous avez fini.',
      working: 'Transformation en texte…',
      tooShort: 'Maintenez un peu plus longtemps, comme un talkie-walkie.',
      done: 'Collé à l’emplacement du curseur.',
    },
    notes: 'Notes',
    placeholder: 'Vos mots arriveront ici',
    saidTitle: 'Ce que vous avez dit → ce que Falou a écrit',
    timing: (s: string) => `${s.replace('.', ',')} s sur un M1`,
    explain:
      'Les hésitations disparaissent, la ponctuation et les majuscules arrivent, et chaque langue reste dans sa langue.',
    inOneGo: (langs: string) => `${langs}, d’une seule traite.`,
  },
  features: {
    eyebrow: 'Pourquoi Falou',
    title1: 'Plus rapide que taper.',
    title2: 'Plus agréable aussi.',
    intro:
      'Pensé pour les messages, les notes, les e-mails et tout le reste : partout où vous préférez le dire plutôt que l’écrire.',
    stats: [
      {
        value: '0,5',
        unit: 's',
        label: 'entre le moment où vous relâchez et le texte dans l’app, sur un M1',
      },
      { value: '0', unit: 'octet', label: 'de votre voix ou de votre texte envoyé où que ce soit' },
      { value: '4', unit: 'langues', label: 'mélangées librement, même dans une seule phrase' },
    ],
    details: [
      {
        title: 'Mélange les langues comme vous',
        body: 'Commencez en français, finissez en anglais. Falou repère où vous changez et écrit chaque partie dans sa langue, au lieu de la traduire.',
      },
      {
        title: 'Les questions restent des questions',
        body: 'Quand seule votre voix monte à la fin — « Tu viens demain ? » — Falou ajoute quand même le point d’interrogation.',
      },
      {
        title: 'Fait le ménage au passage',
        body: 'Retire les « euh », « ben », « bah ». Ajoute majuscules et ponctuation. Respecte l’espace avant le point d’interrogation.',
      },
      {
        title: 'Aucun mot perdu',
        body: 'Pas de zone de texte sélectionnée ? Il n’écrit pas dans le vide. Le texte reste copié, et « Copier la dernière dictée » est à un clic.',
      },
      {
        title: 'Ne touche pas à votre presse-papiers',
        body: 'Il colle, puis remet ce que vous aviez copié avant — images et fichiers compris.',
      },
      {
        title: 'À votre façon',
        body: 'Maintenez pour parler, ou appuyez une fois pour commencer et une autre pour arrêter. Choisissez votre touche, votre micro et la taille du modèle vocal.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Confidentialité',
    title1: 'Votre voix reste',
    title2: 'sur votre Mac.',
    intro:
      'La plupart des outils de dictée envoient votre voix à un serveur. Falou n’en a pas. Il fonctionne même avec le Wi-Fi coupé.',
    points: [
      'La reconnaissance vocale tourne sur la puce de votre Mac. Aucun serveur.',
      'Pas de compte, pas d’inscription, pas de statistiques, pas de pistage.',
      'Les enregistrements ne sont pas conservés, sauf si vous l’activez.',
      'Les journaux gardent des durées, jamais ce que vous avez dit.',
    ],
    footnote:
      'Le seul téléchargement est le modèle vocal (de 148 à 539 Mo, une seule fois), vérifié avec une empreinte SHA-256 fixe. Reconnaissance : whisper.cpp sur le GPU Apple.',
  },
  faq: {
    eyebrow: 'Questions',
    title: 'Vos questions, nos réponses.',
    items: [
      {
        q: 'C’est vraiment gratuit ?',
        a: 'Oui. Tout ce qui est sur cette page est gratuit. Une version Pro avec des extras viendra peut-être plus tard, mais la dictée restera gratuite.',
      },
      {
        q: 'Ça marche sans internet ?',
        a: 'Oui. Il faut internet une seule fois, pour télécharger le modèle vocal (le modèle recommandé fait 264 Mo). Ensuite, Falou fonctionne entièrement hors ligne.',
      },
      {
        q: 'Avec quelles apps ?',
        a: 'Partout où l’on peut écrire : messageries, navigateurs, notes, e-mail, documents, éditeurs de code. Si un champ bloque le collage — comme un mot de passe — Falou copie le texte et vous prévient.',
      },
      {
        q: 'Quelles langues ?',
        a: 'Français, anglais, espagnol et portugais. Choisissez celles que vous parlez, et Falou les reconnaît tout seul, même si vous changez au milieu d’une phrase. L’app elle-même est en anglais et en portugais.',
      },
      {
        q: 'Quels Mac ?',
        a: 'Les Mac avec puce Apple (M1 ou plus récent) sous macOS 12 ou plus récent. 8 Go de mémoire suffisent.',
      },
      {
        q: 'Pourquoi demande-t-il l’Accessibilité et la Surveillance de l’entrée ?',
        a: 'La Surveillance de l’entrée lui permet de savoir quand vous appuyez sur votre raccourci et quand vous le relâchez. L’Accessibilité lui permet de coller dans les autres apps et de vérifier qu’une zone de texte est sélectionnée. C’est tout.',
      },
      {
        q: 'Puis-je utiliser une autre touche ?',
        a: 'Oui. Choisissez Commande droite, Contrôle droite, Fn, ou enregistrez n’importe quelle touche ou combinaison. Vous pouvez aussi passer en mode « appuyer pour commencer, appuyer pour arrêter ».',
      },
    ],
  },
  download: {
    title1: 'Dites-le.',
    title2: 'C’est fait.',
    body: 'Gratuit, privé et prêt en deux minutes environ — surtout le temps de télécharger le modèle vocal, une seule fois.',
    button: (version: string) => `Télécharger Falou ${version}`,
    soon: 'Téléchargement bientôt disponible',
    requirements: 'Mac avec puce Apple · macOS 12 ou plus récent',
    firstOpen:
      'À la première ouverture : Réglages Système → Confidentialité et sécurité → « Ouvrir quand même ». Falou n’est pas encore notarié par Apple.',
  },
  footer: {
    tagline: 'Pour ceux qui préfèrent le dire.',
    rights: 'Votre voix ne quitte jamais votre Mac.',
  },
}
