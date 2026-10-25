import type { Messages } from './en'

/** Español. Neutral Latin American Spanish, understood everywhere. */
export const es: Messages = {
  meta: {
    title: 'Falou — Habla. Él escribe.',
    description:
      'Mantén una tecla, habla en español, inglés, portugués o francés, suelta — y el texto aparece en cualquier app de tu Mac. Pruébalo gratis 7 días. Privado y sin conexión.',
  },
  nav: {
    how: 'Cómo funciona',
    try: 'Pruébalo',
    privacy: 'Privacidad',
    faq: 'Preguntas',
    buy: 'Precio',
    cta: 'Descargar Falou',
    home: 'Falou, volver arriba',
    language: 'Idioma',
    skip: 'Ir a la demostración',
  },
  bubble: { listening: 'Escuchando', working: 'Convirtiendo tu voz en texto', done: 'Listo' },
  hero: {
    eyebrow: 'Dictado por voz para Mac · 7 días gratis · sin conexión',
    title1: 'Habla.',
    title2: 'Él escribe.',
    body: 'Mantén una tecla, di lo que quieres escribir y suelta. Tus palabras aparecen en WhatsApp, Discord, Notas, tu navegador — donde esté el cursor. En español, inglés, portugués o francés, incluso mezclados en la misma frase.',
    download: 'Descargar para Mac',
    tryIt: 'Pruébalo aquí mismo',
    privacyNote: 'Nada de lo que dices sale de tu Mac.',
    keyRight: 'option',
    keyOption: 'derecha',
    message: 'Mensaje',
  },
  worksIn: { label: 'Funciona en cualquier lugar donde puedas escribir:' },
  how: {
    eyebrow: 'Cómo funciona',
    title1: 'Tres pasos.',
    title2: 'Nada más.',
    steps: [
      {
        title: 'Mantén la tecla',
        body: 'Option derecha por defecto, o la tecla que prefieras. El micrófono ya está listo, así que tu primera palabra no se pierde.',
      },
      {
        title: 'Habla',
        body: 'Habla como le hablarías a un amigo. Cambia entre español, inglés, portugués y francés cuando quieras.',
      },
      {
        title: 'Suelta',
        body: 'En medio segundo, más o menos, el texto está en la app que usas, ya limpio. Lo que tenías copiado vuelve a su lugar.',
      },
    ],
    example: '¿Me mandas las diapositivas?',
  },
  tryIt: {
    eyebrow: 'Pruébalo',
    title1: 'Mantén, habla,',
    title2: 'suelta.',
    intro:
      'Es una simulación con frases de ejemplo, para que sientas el ritmo. La app de verdad escucha tu propia voz, en tu Mac.',
    language: 'Idioma',
    mixed: 'Mezclado',
    hold: 'Mantén para hablar',
    holdHint: 'o selecciónalo y mantén la barra espaciadora',
    status: {
      idle: 'Mantén presionado el botón.',
      listening: 'Escuchando… suelta cuando termines.',
      working: 'Convirtiéndolo en texto…',
      tooShort: 'Mantenlo un poquito más, como un walkie-talkie.',
      done: 'Pegado donde estaba el cursor.',
    },
    notes: 'Notas',
    placeholder: 'Tus palabras aparecerán aquí',
    saidTitle: 'Lo que dijiste → lo que escribió Falou',
    timing: (s: string) => `${s} s en un M1`,
    explain:
      'Las muletillas desaparecen, se añaden puntuación y mayúsculas, y cada idioma se queda en su idioma.',
    inOneGo: (langs: string) => `${langs}, de una sola vez.`,
  },
  features: {
    eyebrow: 'Por qué Falou',
    title1: 'Más rápido que escribir.',
    title2: 'Y más cómodo.',
    intro: 'Hecho para chats, notas, correos y todo lo demás: donde prefieras decirlo en vez de escribirlo.',
    stats: [
      { value: '0.5', unit: 's', label: 'desde que sueltas la tecla hasta el texto en la app, en un M1' },
      { value: '0', unit: 'bytes', label: 'de tu voz o tu texto enviados a ningún sitio' },
      { value: '4', unit: 'idiomas', label: 'mezclados con libertad, incluso en la misma frase' },
    ],
    details: [
      {
        title: 'Mezcla idiomas como tú',
        body: 'Empieza en español, termina en inglés. Falou nota dónde cambias y escribe cada parte en su idioma, en lugar de traducirla.',
      },
      {
        title: 'Las preguntas salen como preguntas',
        body: 'Cuando solo tu voz sube al final — “¿Ya llegaste a casa?” — Falou igual pone los signos de interrogación.',
      },
      {
        title: 'Limpia el texto sobre la marcha',
        body: 'Quita los “eh”, “este”, “o sea”, “euh”. Añade mayúsculas y puntuación. Pone el ¿ y el ¡ que faltan.',
      },
      {
        title: 'No se pierde ni una palabra',
        body: '¿No hay un cuadro de texto seleccionado? No escribe en el vacío. El texto queda copiado, y “Copiar el último dictado” está a un clic.',
      },
      {
        title: 'No toca tu portapapeles',
        body: 'Pega y luego devuelve lo que tenías copiado antes — imágenes y archivos incluidos.',
      },
      {
        title: 'A tu manera',
        body: 'Mantén para hablar, o pulsa una vez para empezar y otra para terminar. Elige tu tecla, tu micrófono y el tamaño del modelo de voz.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacidad',
    title1: 'Tu voz se queda',
    title2: 'en tu Mac.',
    intro:
      'La mayoría de las herramientas de dictado envían tu voz a un servidor. Falou no tiene servidor. Funciona incluso con el Wi-Fi apagado.',
    points: [
      'El reconocimiento de voz funciona en el propio chip de tu Mac. Sin servidores.',
      'Sin cuenta, sin registro, sin analíticas, sin rastreo.',
      'Las grabaciones no se guardan, a menos que lo actives.',
      'Los registros guardan tiempos, nunca lo que dijiste.',
    ],
    footnote:
      'La única descarga es el modelo de voz (de 148 a 539 MB, una sola vez), verificado con una huella SHA-256 fija. Reconocimiento: whisper.cpp en la GPU de Apple.',
  },
  faq: {
    eyebrow: 'Preguntas',
    title: 'Preguntas y respuestas.',
    items: [
      {
        q: '¿Cuánto cuesta?',
        a: 'Prueba todo gratis durante 7 días. Después, cómpralo una sola vez — sin suscripción y sin cuenta. Pagas por Pix y tu licencia llega por correo.',
      },
      {
        q: '¿Funciona sin internet?',
        a: 'Sí. Solo necesitas internet una vez, para descargar el modelo de voz (el recomendado pesa 264 MB). Después, Falou funciona completamente sin conexión.',
      },
      {
        q: '¿Con qué apps funciona?',
        a: 'Con cualquiera donde puedas escribir: chats, navegadores, notas, correo, documentos, editores de código. Si un campo bloquea pegar — como uno de contraseña — Falou copia el texto y te avisa.',
      },
      {
        q: '¿Qué idiomas?',
        a: 'Español, inglés, portugués y francés. Elige los que hablas y Falou los reconoce solo, incluso si cambias a mitad de frase. La app en sí está en inglés y portugués.',
      },
      {
        q: '¿Qué Macs?',
        a: 'Macs con Apple Silicon (M1 o más reciente) con macOS 12 o posterior. Funciona bien con 8 GB de memoria.',
      },
      {
        q: '¿Por qué pide Accesibilidad y Monitoreo de entrada?',
        a: 'El Monitoreo de entrada le permite notar cuándo pulsas y sueltas tu atajo. La Accesibilidad le permite pegar en otras apps y comprobar que haya un cuadro de texto seleccionado. Solo para eso.',
      },
      {
        q: '¿Puedo usar otra tecla?',
        a: 'Sí. Elige Command derecha, Control derecha, Fn, o graba cualquier tecla o combinación. También puedes usar el modo pulsar para empezar, pulsar para terminar.',
      },
    ],
  },
  download: {
    title1: 'Dilo.',
    title2: 'Listo.',
    body: 'Gratis durante 7 días, privado y listo en unos dos minutos — casi todo es la descarga única del modelo de voz.',
    button: (version: string) => `Descargar Falou ${version}`,
    soon: 'Descarga disponible pronto',
    requirements: 'Mac con Apple Silicon · macOS 12 o posterior',
    firstOpen:
      'La primera vez que lo abras: Ajustes del Sistema → Privacidad y seguridad → “Abrir igualmente”. Falou aún no está notarizado por Apple.',
  },
  buy: {
    eyebrow: 'Precio',
    title1: 'Pruébalo gratis.',
    title2: 'Cómpralo una vez.',
    intro:
      'Todo funciona durante 7 días. Después, un solo pago de lo que te parezca justo y Falou es tuyo — sin suscripción y sin cuenta.',
    trial: {
      name: 'Prueba gratis',
      price: '7 días',
      points: ['Todo incluido', 'Sin registro y sin tarjeta'],
      cta: 'Descargar la prueba',
    },
    full: {
      name: 'Falou',
      suggested: 'sugerido',
      pwyw: 'Paga lo que quieras, una sola vez. Sin suscripción.',
      points: [
        'Tuyo para siempre, con actualizaciones',
        'En todos tus Macs',
        'Verificado sin conexión — sin cuenta',
      ],
    },
    how: 'Cómo comprar',
    scan: 'Escanéalo con la app de tu banco, o copia el código Pix, y escribe cuánto quieres pagar:',
    copy: 'Copiar código Pix',
    copied: 'Copiado',
    qrLabel: 'Código QR de Pix',
    send: (email: string) => `Envía el comprobante a ${email} desde el correo donde quieres la licencia.`,
    sendCta: 'Enviar el comprobante',
    receive: 'Tu licencia llega por correo, normalmente el mismo día. Pégala en Falou → Ajustes → Licencia.',
    pixOnly:
      'Pix necesita una cuenta en un banco brasileño. ¿Estás fuera de Brasil? Escríbenos y lo resolvemos.',
    soon: 'Las ventas abren pronto. La prueba gratis ya está disponible.',
    mailSubject: 'Falou — comprobante de Pix',
  },
  footer: {
    tagline: 'Para quienes prefieren decirlo.',
    rights: 'Tu voz nunca sale de tu Mac.',
  },
}
