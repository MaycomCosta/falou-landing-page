import type { ReactNode } from 'react'

/** Eyebrow + title + intro used at the top of every section. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string
  title: ReactNode
  intro?: string
  dark?: boolean
}) {
  return (
    <div className="max-w-2xl">
      <p
        className={`font-mono text-[12px] uppercase tracking-[0.08em] ${dark ? 'text-ember' : 'text-ember-600'}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 font-semibold text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.02] tracking-[-0.035em] ${dark ? 'text-white' : ''}`}
      >
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-[17px] leading-relaxed ${dark ? 'text-white/65' : 'text-stone-600'}`}>
          {intro}
        </p>
      )}
    </div>
  )
}
