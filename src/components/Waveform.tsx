const BARS = [0.5, 0.8, 1, 0.7, 0.9, 0.6, 0.85, 0.55, 0.75]

/** Bars that move like a voice. CSS-only so it costs nothing when hidden. */
export function Waveform({
  active,
  bars = 7,
  className = '',
}: {
  active: boolean
  bars?: number
  className?: string
}) {
  return (
    <span className={`inline-flex h-5 items-center gap-[3px] ${className}`} aria-hidden>
      {BARS.slice(0, bars).map((h, i) => (
        <span
          // biome-ignore lint/suspicious/noArrayIndexKey: fixed decorative list
          key={i}
          className={`w-[3px] rounded-full bg-ember ${active ? 'wave-bar' : ''}`}
          style={{
            height: `${Math.round(h * 20)}px`,
            animationDelay: `${(i * 137) % 600}ms`,
            animationDuration: `${700 + ((i * 211) % 500)}ms`,
            transform: active ? undefined : 'scaleY(0.2)',
          }}
        />
      ))}
    </span>
  )
}
