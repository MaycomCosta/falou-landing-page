import { SectionHead } from '../components/SectionHead'
import { useI18n } from '../i18n'

export function Privacy() {
  const { m } = useI18n()
  return (
    <section id="privacy" className="scroll-mt-16 bg-midnight text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <SectionHead
          dark
          eyebrow={m.privacy.eyebrow}
          title={
            <>
              {m.privacy.title1} <span className="font-normal font-serif italic">{m.privacy.title2}</span>
            </>
          }
          intro={m.privacy.intro}
        />
        <div className="lg:pt-10">
          <ul className="divide-y divide-white/10 border-white/10 border-y">
            {m.privacy.points.map((p) => (
              <li key={p} className="flex gap-4 py-4 text-[16px] text-white/85">
                <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[12px] text-white/45 leading-relaxed">{m.privacy.footnote}</p>
        </div>
      </div>
    </section>
  )
}
