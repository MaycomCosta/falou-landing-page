import { Waveform } from './Waveform'

export type BubbleState = 'hidden' | 'listening' | 'transcribing' | 'done'

/** The floating pill Falou shows at the bottom of the screen while you dictate. */
export function Bubble({ state, className = '' }: { state: BubbleState; className?: string }) {
  if (state === 'hidden') return null
  return (
    <div
      key={state}
      className={`pop-in inline-flex h-10 items-center gap-2.5 rounded-full bg-midnight pr-4 pl-3.5 text-[13px] font-medium text-white shadow-[0_10px_30px_-8px_rgb(14_26_51/0.55)] ${className}`}
    >
      {state === 'listening' && (
        <>
          <Waveform active bars={7} />
          <span>Listening</span>
          <kbd className="ml-0.5 rounded-[5px] border border-white/15 px-1.5 py-px font-sans text-[10px] text-white/50">
            esc
          </kbd>
        </>
      )}
      {state === 'transcribing' && (
        <>
          <span className="flex gap-1" aria-hidden>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="size-1.5 animate-pulse rounded-full bg-ember"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </span>
          <span>Transcribing</span>
        </>
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
          <span>Done</span>
        </>
      )}
    </div>
  )
}
