import { SectionHead } from '../components/SectionHead'
import { useI18n } from '../i18n'

export function Faq() {
  const { m } = useI18n()
  return (
    <section id="faq" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <SectionHead eyebrow={m.faq.eyebrow} title={m.faq.title} />
        <div className="border-line border-t">
          {m.faq.items.map((item) => (
            <details key={item.q} className="group border-line border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-medium text-[16.5px] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  className="relative size-4 shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-45"
                  aria-hidden
                >
                  <span className="absolute top-1/2 left-0 h-px w-4 bg-current" />
                  <span className="absolute top-0 left-1/2 h-4 w-px bg-current" />
                </span>
              </summary>
              <p className="max-w-2xl pb-6 text-[15.5px] text-stone-600 leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
