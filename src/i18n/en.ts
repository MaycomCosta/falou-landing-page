/** English texts. This file defines the shape every other language must follow. */
export const en = {
  meta: {
    title: 'Falou — Talk. It types.',
    description:
      'Hold a key, speak Portuguese, English, Spanish or French, let go — your words appear in any app on your Mac. Try it free for 7 days. Private and offline.',
  },
  nav: {
    how: 'How it works',
    try: 'Try it',
    privacy: 'Privacy',
    faq: 'FAQ',
    buy: 'Pricing',
    cta: 'Get Falou',
    home: 'Falou, back to top',
    language: 'Language',
    skip: 'Skip to the demo',
  },
  bubble: { listening: 'Listening', working: 'Turning your voice into text', done: 'Done' },
  hero: {
    eyebrow: 'Voice typing for Mac · 7 days free · offline',
    title1: 'Talk.',
    title2: 'It types.',
    body: 'Hold a key, say what you want to write, let go. Your words show up in WhatsApp, Discord, Notes, your browser — wherever the cursor is. In Portuguese, English, Spanish or French, even mixed in one sentence.',
    download: 'Download for Mac',
    tryIt: 'Try it on this page',
    privacyNote: 'Nothing you say leaves your Mac.',
    keyRight: 'right',
    keyOption: 'option',
    message: 'Message',
  },
  worksIn: { label: 'Works anywhere you can type:' },
  how: {
    eyebrow: 'How it works',
    title1: 'Three moves.',
    title2: 'That’s it.',
    steps: [
      {
        title: 'Hold the key',
        body: 'Right Option by default, or any key you choose. The mic is already warm, so your first word isn’t cut off.',
      },
      {
        title: 'Say it',
        body: 'Talk like you would to a friend. Switch between Portuguese, English, Spanish and French whenever you like.',
      },
      {
        title: 'Let go',
        body: 'Within about half a second the text is in the app you’re using, cleaned up. Whatever you had copied is put back.',
      },
    ],
    example: 'Can you send me the slides?',
  },
  tryIt: {
    eyebrow: 'Try it',
    title1: 'Hold, talk,',
    title2: 'let go.',
    intro:
      'This is a simulation with sample sentences, so you can feel the rhythm. The real app listens to your own voice, on your Mac.',
    language: 'Language',
    mixed: 'Mixed',
    hold: 'Hold to talk',
    holdHint: 'or focus here and hold Space',
    status: {
      idle: 'Press and hold the button.',
      listening: 'Listening… let go when you’re done.',
      working: 'Turning it into text…',
      tooShort: 'Hold it a little longer, like a walkie-talkie.',
      done: 'Pasted where your cursor was.',
    },
    notes: 'Notes',
    placeholder: 'Your words will land here',
    saidTitle: 'What you said → what Falou typed',
    timing: (s: string) => `${s} s on an M1`,
    explain:
      'Filler words get dropped, punctuation and capitals added, and each language stays in its own language.',
    inOneGo: (langs: string) => `${langs}, in one go.`,
  },
  features: {
    eyebrow: 'Why Falou',
    title1: 'Faster than typing.',
    title2: 'Nicer, too.',
    intro:
      'Built for chats, notes, emails and everything in between: anywhere you’d rather say it than type it.',
    stats: [
      { value: '0.5', unit: 's', label: 'from letting go to text in the app, on an M1' },
      { value: '0', unit: 'bytes', label: 'of your voice or text sent anywhere' },
      { value: '4', unit: 'languages', label: 'mixed freely, even inside one sentence' },
    ],
    details: [
      {
        title: 'Mixes languages like you do',
        body: 'Start in English, finish in Portuguese. Falou hears where you switch and writes each part in its own language instead of translating it.',
      },
      {
        title: 'Questions come out as questions',
        body: 'When only your voice goes up at the end — “Você já chegou em casa?” — Falou still adds the question mark.',
      },
      {
        title: 'Cleans up as it goes',
        body: 'Drops the “um”, “tipo”, “né”, “euh”. Adds capitals and punctuation. Keeps French spacing and the Spanish ¿.',
      },
      {
        title: 'Never loses a word',
        body: 'No text box selected? It won’t type into nothing. The text waits on your clipboard, and “Copy last dictation” is one click away.',
      },
      {
        title: 'Leaves your clipboard alone',
        body: 'It pastes and then puts back whatever you had copied before — images and files included.',
      },
      {
        title: 'Fits how you work',
        body: 'Hold to talk, or press once to start and again to stop. Pick your key, your mic, and how big the speech model is.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacy',
    title1: 'Your voice stays',
    title2: 'on your Mac.',
    intro:
      'Most dictation tools send your voice to a server. Falou doesn’t have one. It works with Wi-Fi off.',
    points: [
      'Speech recognition runs on your Mac’s own chip. No servers.',
      'No account, no sign-up, no analytics, no tracking.',
      'Recordings aren’t kept unless you turn that on.',
      'Logs keep timings, never what you said.',
    ],
    footnote:
      'The one download is the speech model (148–539 MB, once), checked against a fixed SHA-256 fingerprint. Recognition: whisper.cpp on the Apple GPU.',
  },
  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    items: [
      {
        q: 'How much does it cost?',
        a: 'Try every feature free for 7 days. Then buy it once — no subscription, no account. You pay by Pix and your license key arrives by email.',
      },
      {
        q: 'Does it work without internet?',
        a: 'Yes. You need internet once, to download the speech model (the recommended one is 264 MB). After that, Falou works completely offline.',
      },
      {
        q: 'Which apps does it work with?',
        a: 'Anything where you can type: chats, browsers, notes, email, documents, code editors. If a field blocks pasting — like a password box — Falou copies the text instead and tells you.',
      },
      {
        q: 'Which languages?',
        a: 'Portuguese, English, Spanish and French. Choose the ones you speak, and Falou recognises them automatically, even when you switch in the middle of a sentence. The app itself is in English and Portuguese.',
      },
      {
        q: 'Which Macs?',
        a: 'Macs with Apple Silicon (M1 or newer) running macOS 12 or later. It’s happy on 8 GB of memory.',
      },
      {
        q: 'Why does it ask for Accessibility and Input Monitoring?',
        a: 'Input Monitoring lets it notice when you press and release your shortcut. Accessibility lets it paste into other apps and check that a text box is selected. That’s all they’re used for.',
      },
      {
        q: 'Can I use a different key?',
        a: 'Yes. Pick Right Command, Right Control, Fn, or record any key or combination. You can also switch to press-to-start, press-to-stop.',
      },
    ],
  },
  download: {
    title1: 'Say it.',
    title2: 'Done.',
    body: 'Free for 7 days, private, and ready in about two minutes — most of it the one-time model download.',
    button: (version: string) => `Download Falou ${version}`,
    soon: 'Download coming soon',
    requirements: 'Apple Silicon Mac · macOS 12 or newer',
    firstOpen:
      'First time you open it: System Settings → Privacy & Security → “Open Anyway”. Falou isn’t notarized by Apple yet.',
  },
  buy: {
    eyebrow: 'Pricing',
    title1: 'Try it free.',
    title2: 'Buy it once.',
    intro:
      'Every feature works for 7 days. After that, one payment keeps Falou yours — no subscription, no account.',
    trial: {
      name: 'Free trial',
      price: '7 days',
      points: ['Everything included', 'No sign-up, no card'],
      cta: 'Download the trial',
    },
    full: {
      name: 'Falou',
      once: 'once',
      points: ['Yours for good, updates included', 'On all your own Macs', 'Checked offline — no account'],
    },
    how: 'How to buy',
    scan: 'Scan with your bank app, or copy the Pix code:',
    copy: 'Copy Pix code',
    copied: 'Copied',
    qrLabel: 'Pix QR code',
    send: (email: string) => `Email the receipt to ${email} from the address you want the license on.`,
    sendCta: 'Email the receipt',
    receive:
      'Your license key arrives by email, usually the same day. Paste it in Falou → Settings → License.',
    pixOnly: 'Pix needs a Brazilian bank account. Outside Brazil? Email us and we’ll sort it out.',
    soon: 'Purchases open soon. The free trial is already available.',
    mailSubject: 'Falou — Pix receipt',
  },
  footer: {
    tagline: 'For people who’d rather say it.',
    rights: 'Your voice never leaves your Mac.',
  },
}

/** Every language must provide exactly these texts. */
export type Messages = typeof en
