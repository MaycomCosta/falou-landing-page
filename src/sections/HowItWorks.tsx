import type { ReactNode } from 'react'
import { Keycap } from '../components/Keycap'
import { SectionHead } from '../components/SectionHead'
import { Waveform } from '../components/Waveform'
import { useI18n } from '../i18n'

export function HowItWorks() {
  const { m } = useI18n()
  const visuals: ReactNode[] = [
    <div key="key" className="flex items-end gap-2">
      <Keycap size="lg" label="option" pressed>
        ⌥
      </Keycap>
      <Keycap size="md">⌘</Keycap>
    </div>,
    <div
      key="listen"
      className="flex items-center gap-3 rounded-full bg-midnight py-2.5 pr-5 pl-4 text-[13px] text-white"
    >
      <Waveform active bars={9} />
      <span>{m.bubble.listening}</span>
    </div>,
    <div
      key="text"
      className="w-full max-w-[15rem] rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[13.5px] text-midnight shadow-[0_1px_2px_rgb(14_26_51/0.06)]"
    >
      {m.how.example}
      <span className="ml-px inline-block h-3.5 w-px translate-y-[2px] animate-blink bg-midnight" />
    </div>,
  ]

  return (
    <section id="how" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHead
          eyebrow={m.how.eyebrow}
          title={
            <>
              {m.how.title1} <span className="font-normal font-serif italic">{m.how.title2}</span>
            </>
          }
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {m.how.steps.map((s, i) => (
            <li key={s.title} className="flex flex-col bg-paper p-7">
              <div className="flex h-28 items-center">{visuals[i]}</div>
              <p className="mt-6 font-mono text-[12px] text-ember-600">0{i + 1}</p>
              <h3 className="mt-2 font-semibold text-[20px] tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 text-[15px] text-stone-600 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
