import type { Messages } from './en'

/** Português (Brasil). */
export const pt: Messages = {
  meta: {
    title: 'Falou — Fale. Ele digita.',
    description:
      'Segure uma tecla, fale em português, inglês, espanhol ou francês, solte — e o texto aparece em qualquer app do seu Mac. Grátis, privado e offline.',
  },
  nav: {
    how: 'Como funciona',
    try: 'Experimente',
    privacy: 'Privacidade',
    faq: 'Dúvidas',
    cta: 'Baixar o Falou',
    home: 'Falou, voltar ao topo',
    language: 'Idioma',
    skip: 'Pular para a demonstração',
  },
  bubble: { listening: 'Ouvindo', working: 'Transformando sua voz em texto', done: 'Pronto' },
  hero: {
    eyebrow: 'Ditado por voz para Mac · grátis · offline',
    title1: 'Fale.',
    title2: 'Ele digita.',
    body: 'Segure uma tecla, diga o que quer escrever e solte. O texto aparece no WhatsApp, no Discord, nas Notas, no navegador — onde estiver o cursor. Em português, inglês, espanhol ou francês, até misturando tudo na mesma frase.',
    download: 'Baixar para Mac',
    tryIt: 'Experimente aqui mesmo',
    privacyNote: 'Nada do que você fala sai do seu Mac.',
    keyRight: 'option',
    keyOption: 'direito',
    message: 'Mensagem',
  },
  worksIn: { label: 'Funciona em qualquer lugar onde dá para digitar:' },
  how: {
    eyebrow: 'Como funciona',
    title1: 'Três passos.',
    title2: 'Só isso.',
    steps: [
      {
        title: 'Segure a tecla',
        body: 'Option direito por padrão, ou a tecla que você preferir. O microfone já fica pronto, então a primeira palavra não se perde.',
      },
      {
        title: 'Fale',
        body: 'Fale como se estivesse conversando com um amigo. Troque entre português, inglês, espanhol e francês quando quiser.',
      },
      {
        title: 'Solte',
        body: 'Em cerca de meio segundo o texto aparece no app que você está usando, já arrumadinho. O que estava copiado volta para o lugar.',
      },
    ],
    example: 'Me manda os slides?',
  },
  tryIt: {
    eyebrow: 'Experimente',
    title1: 'Segure, fale,',
    title2: 'solte.',
    intro:
      'Isto é uma simulação com frases de exemplo, para você sentir o ritmo. O app de verdade ouve a sua voz, no seu Mac.',
    language: 'Idioma',
    mixed: 'Misturado',
    hold: 'Segure para falar',
    holdHint: 'ou selecione aqui e segure a barra de espaço',
    status: {
      idle: 'Aperte e segure o botão.',
      listening: 'Ouvindo… solte quando terminar.',
      working: 'Transformando em texto…',
      tooShort: 'Segure um pouquinho mais, como um walkie-talkie.',
      done: 'Colado onde estava o cursor.',
    },
    notes: 'Notas',
    placeholder: 'Suas palavras vão aparecer aqui',
    saidTitle: 'O que você falou → o que o Falou escreveu',
    timing: (s: string) => `${s.replace('.', ',')} s num M1`,
    explain:
      'Os vícios de linguagem somem, a pontuação e as maiúsculas aparecem, e cada idioma fica no seu próprio idioma.',
    inOneGo: (langs: string) => `${langs}, de uma vez só.`,
  },
  features: {
    eyebrow: 'Por que o Falou',
    title1: 'Mais rápido que digitar.',
    title2: 'E mais gostoso.',
    intro: 'Feito para conversas, notas, e-mails e tudo no meio disso: onde você prefere falar a digitar.',
    stats: [
      { value: '0,5', unit: 's', label: 'entre soltar a tecla e o texto aparecer no app, num M1' },
      { value: '0', unit: 'bytes', label: 'da sua voz ou do seu texto enviados para qualquer lugar' },
      { value: '4', unit: 'idiomas', label: 'misturados à vontade, até na mesma frase' },
    ],
    details: [
      {
        title: 'Mistura idiomas como você',
        body: 'Começa em português, termina em inglês. O Falou percebe onde você troca e escreve cada parte no seu idioma, em vez de traduzir.',
      },
      {
        title: 'Pergunta sai como pergunta',
        body: 'Quando só a sua voz sobe no final — “Você já chegou em casa?” — o Falou coloca o ponto de interrogação mesmo assim.',
      },
      {
        title: 'Arruma o texto sozinho',
        body: 'Tira o “tipo”, o “né”, o “hum”. Coloca maiúsculas e pontuação. Respeita o espaçamento do francês e o ¿ do espanhol.',
      },
      {
        title: 'Nenhuma palavra se perde',
        body: 'Nenhuma caixa de texto selecionada? Ele não digita no vazio. O texto fica copiado, e “Copiar o último ditado” está a um clique.',
      },
      {
        title: 'Não mexe na sua área de transferência',
        body: 'Ele cola e depois devolve o que você tinha copiado antes — imagens e arquivos inclusive.',
      },
      {
        title: 'Do seu jeito',
        body: 'Segure para falar, ou aperte uma vez para começar e outra para parar. Escolha a tecla, o microfone e o tamanho do modelo de voz.',
      },
    ],
  },
  privacy: {
    eyebrow: 'Privacidade',
    title1: 'Sua voz fica',
    title2: 'no seu Mac.',
    intro:
      'A maioria das ferramentas de ditado manda sua voz para um servidor. O Falou não tem servidor. Funciona até com o Wi-Fi desligado.',
    points: [
      'O reconhecimento de voz roda no próprio chip do seu Mac. Sem servidores.',
      'Sem conta, sem cadastro, sem métricas, sem rastreamento.',
      'As gravações não ficam guardadas, a não ser que você ative isso.',
      'Os registros guardam tempos, nunca o que você falou.',
    ],
    footnote:
      'O único download é o modelo de voz (de 148 a 539 MB, uma vez só), conferido com uma impressão digital SHA-256 fixa. Reconhecimento: whisper.cpp na GPU da Apple.',
  },
  faq: {
    eyebrow: 'Dúvidas',
    title: 'Perguntas e respostas.',
    items: [
      {
        q: 'É grátis mesmo?',
        a: 'É. Tudo o que está nesta página é grátis. Pode ser que venha uma versão Pro com extras no futuro, mas o ditado continua grátis.',
      },
      {
        q: 'Funciona sem internet?',
        a: 'Funciona. Você só precisa de internet uma vez, para baixar o modelo de voz (o recomendado tem 264 MB). Depois disso, o Falou funciona totalmente offline.',
      },
      {
        q: 'Funciona em quais apps?',
        a: 'Em qualquer lugar onde dá para digitar: conversas, navegador, notas, e-mail, documentos, editores de código. Se um campo bloqueia colar — como um de senha — o Falou copia o texto e te avisa.',
      },
      {
        q: 'Quais idiomas?',
        a: 'Português, inglês, espanhol e francês. Escolha os que você fala e o Falou reconhece sozinho, mesmo se você trocar no meio da frase. O app em si está em português e inglês.',
      },
      {
        q: 'Quais Macs?',
        a: 'Macs com Apple Silicon (M1 ou mais novo) com macOS 12 ou mais recente. Roda tranquilo com 8 GB de memória.',
      },
      {
        q: 'Por que ele pede Acessibilidade e Monitoramento de Entrada?',
        a: 'O Monitoramento de Entrada serve para perceber quando você aperta e solta o atalho. A Acessibilidade serve para colar em outros apps e conferir se há uma caixa de texto selecionada. É só para isso.',
      },
      {
        q: 'Posso usar outra tecla?',
        a: 'Pode. Escolha Command direito, Control direito, Fn, ou grave qualquer tecla ou combinação. Também dá para usar o modo apertar para começar, apertar para parar.',
      },
    ],
  },
  download: {
    title1: 'Falou.',
    title2: 'Pronto.',
    body: 'Grátis, privado e pronto em uns dois minutos — a maior parte é o download único do modelo de voz.',
    button: (version: string) => `Baixar o Falou ${version}`,
    soon: 'Download em breve',
    requirements: 'Mac com Apple Silicon · macOS 12 ou mais recente',
    firstOpen:
      'Na primeira vez que abrir: Ajustes do Sistema → Privacidade e Segurança → “Abrir Mesmo Assim”. O Falou ainda não é autenticado pela Apple.',
  },
  footer: {
    tagline: 'Para quem prefere falar.',
    rights: 'Sua voz nunca sai do seu Mac.',
  },
}
