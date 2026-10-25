import { SectionHead } from '../components/SectionHead'
import { useI18n } from '../i18n'

export function Features() {
  const { m } = useI18n()
  return (
    <section className="border-line border-t">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHead
          eyebrow={m.features.eyebrow}
          title={
            <>
              {m.features.title1} <span className="font-normal font-serif italic">{m.features.title2}</span>
            </>
          }
          intro={m.features.intro}
        />

        <dl className="mt-14 grid border-line border-y sm:grid-cols-3">
          {m.features.stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 sm:px-8 ${i > 0 ? 'border-line border-t sm:border-t-0 sm:border-l' : 'sm:pl-0'}`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="font-semibold text-[56px] leading-none tracking-[-0.04em]">{s.value}</span>
                <span className="ml-1.5 font-serif text-[26px] text-stone-500 italic">{s.unit}</span>
                <p className="mt-3 max-w-[16rem] text-[14px] text-stone-600 leading-snug">{s.label}</p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-16 grid gap-x-12 sm:grid-cols-2">
          {m.features.details.map((d) => (
            <div key={d.title} className="border-line border-t py-6">
              <h3 className="font-semibold text-[17px] tracking-[-0.015em]">{d.title}</h3>
              <p className="mt-2 text-[15px] text-stone-600 leading-relaxed">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
