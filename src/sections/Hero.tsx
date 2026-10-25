import { useEffect, useState } from 'react'
import { Bubble, type BubbleState } from '../components/Bubble'
import { Keycap } from '../components/Keycap'
import { MacWindow } from '../components/MacWindow'
import { useI18n } from '../i18n'
import { useReducedMotion } from '../lib/useReducedMotion'

/** A friend writes, you answer by voice. Cycles through the four languages and a mix. */
const SCRIPT = [
  { them: 'are you coming tonight?', you: 'Yes! Leaving in ten minutes, save me a seat.', lang: 'EN' },
  {
    them: 'e aí, terminou o trabalho?',
    you: 'Terminei agora. Te mando o link em cinco minutos.',
    lang: 'PT',
  },
  { them: '¿nos vemos mañana?', you: '¡Claro! Mañana a las once, en el café de siempre.', lang: 'ES' },
  { them: "tu peux m'envoyer les photos ?", you: 'Oui, je te les envoie ce soir.', lang: 'FR' },
  {
    them: 'did the client like it?',
    you: 'Loved it. Agora é só ajustar as cores e pronto.',
    lang: 'EN + PT',
  },
]

type Step = 'wait' | 'listening' | 'transcribing' | 'pasted' | 'sent'
const DURATION: Record<Step, number> = {
  wait: 1400,
  listening: 2300,
  transcribing: 650,
  pasted: 1500,
  sent: 900,
}
const NEXT: Record<Step, Step> = {
  wait: 'listening',
  listening: 'transcribing',
  transcribing: 'pasted',
  pasted: 'sent',
  sent: 'wait',
}

interface Message {
  from: 'them' | 'you'
  text: string
  lang?: string
}

export function Hero() {
  const { m } = useI18n()
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [step, setStep] = useState<Step>(reduced ? 'pasted' : 'wait')
  const [history, setHistory] = useState<Message[]>([{ from: 'them', text: SCRIPT[0].them }])

  useEffect(() => {
    if (reduced) return
    const timer = setTimeout(() => {
      const next = NEXT[step]
      if (step === 'pasted') {
        setHistory((h) =>
          [...h, { from: 'you' as const, text: SCRIPT[index].you, lang: SCRIPT[index].lang }].slice(-4),
        )
      }
      if (step === 'sent') {
        const ni = (index + 1) % SCRIPT.length
        setIndex(ni)
        setHistory((h) => [...h, { from: 'them' as const, text: SCRIPT[ni].them }].slice(-4))
      }
      setStep(next)
    }, DURATION[step])
    return () => clearTimeout(timer)
  }, [step, index, reduced])

  const current = SCRIPT[index]
  const bubble: BubbleState =
    step === 'listening'
      ? 'listening'
      : step === 'transcribing'
        ? 'transcribing'
        : step === 'pasted'
          ? 'done'
          : 'hidden'

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 pt-14 pb-20 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:pt-20 lg:pb-28">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 font-mono text-[12px] text-stone-500 uppercase tracking-[0.08em]">
            <span className="size-1.5 rounded-full bg-ember" aria-hidden />
            {m.hero.eyebrow}
          </p>
          <h1 className="font-semibold text-[clamp(2.75rem,7vw,5.25rem)] leading-[0.95] tracking-[-0.045em]">
            {m.hero.title1}
            <br />
            <span className="font-normal font-serif italic tracking-[-0.02em]">{m.hero.title2}</span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-[18px] text-stone-600 leading-relaxed">{m.hero.body}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a
              href="#download"
              className="inline-flex items-center gap-2.5 rounded-full bg-midnight px-6 py-3.5 font-medium text-[15px] text-white transition-colors hover:bg-midnight-700"
            >
              <DownloadGlyph />
              {m.hero.download}
            </a>
            <a
              href="#try"
              className="group inline-flex items-center gap-1.5 font-medium text-[15px] text-midnight"
            >
              {m.hero.tryIt}
              <span className="transition-transform group-hover:translate-y-0.5" aria-hidden>
                ↓
              </span>
            </a>
          </div>
          <p className="mt-6 text-[13px] text-stone-500">
            {m.download.requirements}. {m.hero.privacyNote}
          </p>
        </div>

        {/* Product scene */}
        <div className="relative" aria-hidden>
          <MacWindow title="Chat — Ana">
            <div className="flex h-[230px] flex-col justify-end gap-2.5 overflow-hidden bg-paper px-5 pt-5 pb-3 sm:h-[320px]">
              {history.map((m, i) => (
                <div
                  // biome-ignore lint/suspicious/noArrayIndexKey: rolling window of messages
                  key={`${i}-${m.text}`}
                  className={`pop-in max-w-[78%] rounded-2xl px-3.5 py-2 text-[14px] leading-snug ${
                    m.from === 'you'
                      ? 'self-end rounded-br-md bg-midnight text-white'
                      : 'self-start rounded-bl-md bg-fog text-midnight'
                  }`}
                >
                  {m.text}
                  {m.lang && (
                    <span className="ml-2 align-middle font-mono text-[9.5px] text-white/45">{m.lang}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="border-line border-t bg-mist p-3">
              <div
                className={`flex min-h-11 items-center rounded-full border bg-paper px-4 text-[14px] transition-colors duration-300 ${
                  step === 'pasted' ? 'border-ember/50' : 'border-line'
                }`}
              >
                {step === 'pasted' ? (
                  <span className="text-midnight">{current.you}</span>
                ) : (
                  <span className="text-stone-400">
                    {m.hero.message}
                    <span className="ml-px inline-block h-4 w-px translate-y-[3px] animate-blink bg-midnight" />
                  </span>
                )}
              </div>
            </div>
          </MacWindow>

          <div className="-bottom-5 absolute inset-x-0 flex justify-center">
            <Bubble state={bubble} />
          </div>

          <div className="-left-3 -top-5 absolute hidden rotate-[-4deg] items-center gap-2 rounded-2xl border border-line bg-paper/95 px-3 py-2.5 shadow-[0_10px_30px_-12px_rgb(14_26_51/0.3)] sm:flex">
            <Keycap size="md" label="option" pressed={step === 'listening'}>
              ⌥
            </Keycap>
            <span className="pr-1 font-mono text-[11px] text-stone-500 leading-tight">
              {m.hero.keyRight}
              <br />
              {m.hero.keyOption}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19.5h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
