import { type KeyboardEvent, useCallback, useEffect, useRef, useState } from 'react'
import { Bubble, type BubbleState } from '../components/Bubble'
import { MacWindow } from '../components/MacWindow'
import { SectionHead } from '../components/SectionHead'
import { Waveform } from '../components/Waveform'
import { useI18n } from '../i18n'
import { FILLERS, LANG_NAMES, type Lang, PHRASES, type Phrase } from '../lib/phrases'

type Choice = Lang | 'mix'
type Phase = 'idle' | 'listening' | 'transcribing' | 'done' | 'tooShort'

/** The order of the language pills; "mix" is labelled per language, the rest by their own names. */
const CHOICES: Choice[] = ['mix', 'pt', 'en', 'es', 'fr']

/** Presses shorter than this are treated as accidental, like in the app. */
const MIN_HOLD_MS = 350

export function TryIt() {
  const { m } = useI18n()
  const [choice, setChoice] = useState<Choice>('mix')
  const [phase, setPhase] = useState<Phase>('idle')
  const [elapsed, setElapsed] = useState(0)
  const [result, setResult] = useState<Phrase | null>(null)
  const [notes, setNotes] = useState<string[]>([])
  const holdStart = useRef(0)
  const counters = useRef<Record<Choice, number>>({ mix: 0, pt: 0, en: 0, es: 0, fr: 0 })
  const timers = useRef<number[]>([])

  const clearTimers = useCallback((): void => {
    for (const t of timers.current) clearTimeout(t)
    timers.current = []
  }, [])
  useEffect(() => clearTimers, [clearTimers])

  // Timer while listening.
  useEffect(() => {
    if (phase !== 'listening') return
    const id = window.setInterval(() => setElapsed(performance.now() - holdStart.current), 100)
    return () => clearInterval(id)
  }, [phase])

  const start = useCallback(() => {
    if (phase === 'listening' || phase === 'transcribing') return
    clearTimers()
    holdStart.current = performance.now()
    setElapsed(0)
    setPhase('listening')
  }, [phase, clearTimers])

  const stop = useCallback(() => {
    if (phase !== 'listening') return
    const held = performance.now() - holdStart.current
    if (held < MIN_HOLD_MS) {
      setPhase('tooShort')
      timers.current.push(window.setTimeout(() => setPhase('idle'), 1800))
      return
    }
    const list = PHRASES[choice]
    const phrase = list[counters.current[choice] % list.length]
    counters.current[choice]++
    setPhase('transcribing')
    timers.current.push(
      window.setTimeout(() => {
        setResult(phrase)
        setNotes((n) => [...n, phrase.parts.map((p) => p.typed).join(' ')].slice(-3))
        setPhase('done')
        timers.current.push(window.setTimeout(() => setPhase('idle'), 1100))
      }, phrase.ms),
    )
  }, [phase, choice])

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>): void => {
    if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
      e.preventDefault()
      start()
    }
  }
  const onKeyUp = (e: KeyboardEvent<HTMLButtonElement>): void => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      stop()
    }
  }

  const listening = phase === 'listening'
  const bubble: BubbleState =
    phase === 'listening'
      ? 'listening'
      : phase === 'transcribing'
        ? 'transcribing'
        : phase === 'done'
          ? 'done'
          : 'hidden'
  const status =
    phase === 'listening'
      ? m.tryIt.status.listening
      : phase === 'transcribing'
        ? m.tryIt.status.working
        : phase === 'tooShort'
          ? m.tryIt.status.tooShort
          : phase === 'done'
            ? m.tryIt.status.done
            : m.tryIt.status.idle

  return (
    <section id="try" className="scroll-mt-16 border-line border-y bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHead
          eyebrow={m.tryIt.eyebrow}
          title={
            <>
              {m.tryIt.title1} <span className="font-normal font-serif italic">{m.tryIt.title2}</span>
            </>
          }
          intro={m.tryIt.intro}
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-12">
          {/* Controls */}
          <div className="flex flex-col">
            <fieldset>
              <legend className="mb-3 font-medium text-[13px] text-stone-600">{m.tryIt.language}</legend>
              <div className="flex flex-wrap gap-2">
                {CHOICES.map((id) => ({ id, label: id === 'mix' ? m.tryIt.mixed : LANG_NAMES[id] })).map(
                  (c) => (
                    <label
                      key={c.id}
                      className={`cursor-pointer rounded-full border px-3.5 py-1.5 text-[13.5px] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ember has-[:focus-visible]:outline-offset-2 ${
                        choice === c.id
                          ? 'border-midnight bg-midnight text-white'
                          : 'border-line bg-paper text-stone-600 hover:border-stone-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="demo-language"
                        value={c.id}
                        checked={choice === c.id}
                        onChange={() => setChoice(c.id)}
                        className="sr-only"
                      />
                      {c.label}
                    </label>
                  ),
                )}
              </div>
            </fieldset>

            <button
              type="button"
              onPointerDown={(e) => {
                // Keep receiving the "up" even if the pointer slides off the button.
                try {
                  e.currentTarget.setPointerCapture(e.pointerId)
                } catch {
                  // not an active pointer (e.g. synthetic events); fine without capture
                }
                start()
              }}
              onPointerUp={stop}
              onPointerCancel={stop}
              onKeyDown={onKeyDown}
              onKeyUp={onKeyUp}
              onContextMenu={(e) => e.preventDefault()}
              aria-label={m.tryIt.hold}
              className={`mt-8 flex h-40 w-full touch-none select-none flex-col [-webkit-touch-callout:none] items-center justify-center gap-3 rounded-3xl border transition-all duration-150 ${
                listening
                  ? 'scale-[0.985] border-ember bg-midnight text-white shadow-[0_0_0_6px_var(--color-ember-50)]'
                  : 'border-line bg-paper text-midnight shadow-[0_2px_0_0_var(--color-line)] hover:border-stone-300'
              }`}
            >
              {listening ? (
                <>
                  <Waveform active bars={9} className="h-6" />
                  <span className="font-mono text-[13px] text-white/70 tabular-nums">
                    {(elapsed / 1000).toFixed(1)} s
                  </span>
                </>
              ) : (
                <>
                  <MicGlyph />
                  <span className="font-medium text-[16px]">{m.tryIt.hold}</span>
                  <span className="text-[12.5px] text-stone-500 pointer-coarse:hidden">
                    {m.tryIt.holdHint}
                  </span>
                </>
              )}
            </button>
            <p className="mt-4 min-h-6 text-[14px] text-stone-600" aria-live="polite">
              {status}
            </p>
          </div>

          {/* Result */}
          <div>
            <div className="relative">
              <MacWindow title={m.tryIt.notes}>
                <div className="min-h-[180px] space-y-3 px-6 py-5 text-[15px] leading-relaxed">
                  {notes.length === 0 ? (
                    <p className="text-stone-400">
                      {m.tryIt.placeholder}
                      <span className="ml-px inline-block h-4 w-px translate-y-[3px] animate-blink bg-midnight" />
                    </p>
                  ) : (
                    notes.map((n, i) => (
                      <p
                        // biome-ignore lint/suspicious/noArrayIndexKey: append-only list
                        key={`${i}-${n}`}
                        className={i === notes.length - 1 ? 'pop-in text-midnight' : 'text-stone-500'}
                      >
                        {n}
                      </p>
                    ))
                  )}
                </div>
              </MacWindow>
              <div className="-bottom-5 pointer-events-none absolute inset-x-0 flex justify-center">
                <Bubble state={bubble} />
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-line bg-paper p-5">
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium text-[13px] text-stone-600">{m.tryIt.saidTitle}</h3>
                {result && (
                  <span className="font-mono text-[12px] text-stone-500 tabular-nums">
                    {m.tryIt.timing((result.ms / 1000).toFixed(2))}
                  </span>
                )}
              </div>
              {result ? (
                <ul className="mt-4 space-y-4">
                  {result.parts.map((p) => (
                    <li key={p.typed} className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1">
                      <span className="row-span-2 mt-0.5 rounded-md bg-fog px-1.5 py-0.5 font-mono text-[10.5px] text-stone-600 uppercase">
                        {p.lang}
                      </span>
                      <span className="text-[14px] text-stone-400">
                        <Said text={p.said} />
                      </span>
                      <span className="text-[15px] text-midnight">{p.typed}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-[14px] text-stone-400">{m.tryIt.explain}</p>
              )}
              {result && result.parts.length > 1 && (
                <p className="mt-4 border-line border-t pt-3 text-[12.5px] text-stone-500">
                  {m.tryIt.inOneGo(result.parts.map((p) => LANG_NAMES[p.lang]).join(' → '))}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/** "What you said", with filler words struck through. */
function Said({ text }: { text: string }) {
  const pieces = text.split(FILLERS)
  const matches = text.match(FILLERS) ?? []
  return (
    <>
      “
      {pieces.map((piece, i) => (
        // biome-ignore lint/suspicious/noArrayIndexKey: derived from a fixed string
        <span key={i}>
          {piece}
          {matches[i] && <s className="text-stone-300 decoration-ember/60">{matches[i]}</s>}
        </span>
      ))}
      ”
    </>
  )
}

function MicGlyph() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="9" y="3" width="6" height="11" rx="3" stroke="currentColor" strokeWidth="1.7" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}
