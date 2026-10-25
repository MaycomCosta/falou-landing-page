import type { ReactNode } from 'react'
import { Keycap } from '../components/Keycap'
import { SectionHead } from '../components/SectionHead'
import { Waveform } from '../components/Waveform'

const STEPS: Array<{ n: string; title: string; body: string; visual: ReactNode }> = [
  {
    n: '01',
    title: 'Hold the key',
    body: 'Right Option by default, or any key you choose. The mic is already warm, so your first word isn’t cut off.',
    visual: (
      <div className="flex items-end gap-2">
        <Keycap size="lg" label="option" pressed>
          ⌥
        </Keycap>
        <Keycap size="md">⌘</Keycap>
      </div>
    ),
  },
  {
    n: '02',
    title: 'Say it',
    body: 'Talk like you would to a friend. Switch between Portuguese, English, Spanish and French whenever you like.',
    visual: (
      <div className="flex items-center gap-3 rounded-full bg-midnight py-2.5 pr-5 pl-4 text-[13px] text-white">
        <Waveform active bars={9} />
        <span>Listening</span>
      </div>
    ),
  },
  {
    n: '03',
    title: 'Let go',
    body: 'About half a second later the text is in the app you’re using, cleaned up. Whatever you had copied is put back.',
    visual: (
      <div className="w-full max-w-[15rem] rounded-xl border border-line bg-paper px-3.5 py-2.5 text-[13.5px] text-midnight shadow-[0_1px_2px_rgb(14_26_51/0.06)]">
        Can you send me the slides?
        <span className="ml-px inline-block h-3.5 w-px translate-y-[2px] animate-blink bg-midnight" />
      </div>
    ),
  },
]

export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-16">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHead
          eyebrow="How it works"
          title={
            <>
              Three moves. <span className="font-normal font-serif italic">That’s it.</span>
            </>
          }
        />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-line bg-line md:grid-cols-3">
          {STEPS.map((s) => (
            <li key={s.n} className="flex flex-col bg-paper p-7">
              <div className="flex h-28 items-center">{s.visual}</div>
              <p className="mt-6 font-mono text-[12px] text-ember-600">{s.n}</p>
              <h3 className="mt-2 font-semibold text-[20px] tracking-[-0.02em]">{s.title}</h3>
              <p className="mt-2 text-[15px] text-stone-600 leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
