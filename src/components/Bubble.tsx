import { useI18n } from '../i18n'
import { Waveform } from './Waveform'

export type BubbleState = 'hidden' | 'listening' | 'transcribing' | 'done'

/** The floating pill Falou shows at the bottom of the screen while you dictate. */
export function Bubble({ state, className = '' }: { state: BubbleState; className?: string }) {
  const { m } = useI18n()
  if (state === 'hidden') return null
  const compact = state === 'transcribing'
  return (
    <div
      key={state === 'done' ? 'done' : 'live'}
      className={`pop-in inline-flex h-10 items-center gap-2.5 rounded-full bg-midnight font-medium text-[13px] text-white shadow-[0_10px_30px_-8px_rgb(14_26_51/0.55)] transition-[padding] duration-200 ${
        compact ? 'px-4' : 'pr-4 pl-3.5'
      } ${className}`}
    >
      {state === 'listening' && (
        <>
          <Waveform active bars={7} />
          <span>{m.bubble.listening}</span>
          <kbd className="ml-0.5 rounded-[5px] border border-white/15 px-1.5 py-px font-sans text-[10px] text-white/50">
            esc
          </kbd>
        </>
      )}
      {state === 'transcribing' && (
        // No words: the bars that were listening become a wave sweeping left to right.
        <span className="flex h-5 items-center gap-[3px]" role="img" aria-label={m.bubble.working}>
          {Array.from({ length: 7 }, (_, i) => (
            <span
              // biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative list
              key={i}
              className="sweep-bar h-5 w-[3px] rounded-full bg-ember"
              style={{ animationDelay: `${i * 70}ms` }}
            />
          ))}
        </span>
      )}
      {state === 'done' && (
        <>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M5 12.5l4.5 4.5L19 7.5"
              stroke="#5ee0a0"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{m.bubble.done}</span>
        </>
      )}
    </div>
  )
}
