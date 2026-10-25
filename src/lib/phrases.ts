export type Lang = 'pt' | 'en' | 'es' | 'fr'

export interface Part {
  lang: Lang
  /** What the person actually said, fillers and all. */
  said: string
  /** What Falou types. */
  typed: string
}

export interface Phrase {
  parts: Part[]
  /** Release-to-text time shown in the demo (measured ranges on an M1). */
  ms: number
}

export const LANG_NAMES: Record<Lang, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
  fr: 'Français',
}

/** Sample dictations for the "Try it" demo, by language. */
export const PHRASES: Record<Lang | 'mix', Phrase[]> = {
  en: [
    {
      ms: 480,
      parts: [
        {
          lang: 'en',
          said: 'um so I think we should uh move the meeting to friday',
          typed: 'So I think we should move the meeting to Friday.',
        },
      ],
    },
    {
      ms: 430,
      parts: [
        {
          lang: 'en',
          said: 'can you send me the slides before lunch',
          typed: 'Can you send me the slides before lunch?',
        },
      ],
    },
  ],
  pt: [
    {
      ms: 510,
      parts: [
        {
          lang: 'pt',
          said: 'tipo, eu acho que a gente pode, né, sair mais cedo hoje',
          typed: 'Eu acho que a gente pode sair mais cedo hoje.',
        },
      ],
    },
    { ms: 470, parts: [{ lang: 'pt', said: 'você já chegou em casa', typed: 'Você já chegou em casa?' }] },
  ],
  es: [
    {
      ms: 490,
      parts: [
        {
          lang: 'es',
          said: 'eh, te parece si lo vemos mañana por la tarde',
          typed: '¿Te parece si lo vemos mañana por la tarde?',
        },
      ],
    },
    {
      ms: 450,
      parts: [
        {
          lang: 'es',
          said: 'o sea, ya terminé el informe, te lo mando ahora',
          typed: 'Ya terminé el informe, te lo mando ahora.',
        },
      ],
    },
  ],
  fr: [
    {
      ms: 470,
      parts: [
        {
          lang: 'fr',
          said: "euh, tu peux m'envoyer le document avant midi",
          typed: "Tu peux m'envoyer le document avant midi ?",
        },
      ],
    },
    {
      ms: 440,
      parts: [
        {
          lang: 'fr',
          said: 'ben, on se retrouve devant la gare à huit heures',
          typed: 'On se retrouve devant la gare à huit heures.',
        },
      ],
    },
  ],
  mix: [
    {
      ms: 820,
      parts: [
        {
          lang: 'en',
          said: 'okay so the presentation is ready',
          typed: 'Okay, so the presentation is ready.',
        },
        { lang: 'pt', said: 'só falta revisar os números', typed: 'Só falta revisar os números.' },
      ],
    },
    {
      ms: 1050,
      parts: [
        { lang: 'es', said: 'eh, mañana no puedo', typed: 'Mañana no puedo.' },
        { lang: 'fr', said: 'mais on peut se voir samedi', typed: 'Mais on peut se voir samedi ?' },
        { lang: 'en', said: 'let me know what works', typed: 'Let me know what works.' },
      ],
    },
  ],
}

/** Filler words to strike through in "what you said". */
export const FILLERS = /\b(?:um|uh|tipo,|né,|eh,|ehm|o sea,|euh,|ben,|bah)\s?/gi
