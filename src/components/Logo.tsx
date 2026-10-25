/** Wordmark: the name plus the orange "recording" dot. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span
      className={`inline-flex items-baseline gap-[3px] font-semibold text-[19px] tracking-[-0.02em] ${inverted ? 'text-white' : 'text-midnight'}`}
    >
      Falou
      <span className="inline-block size-[7px] translate-y-[-1px] rounded-full bg-ember" aria-hidden />
    </span>
  )
}
