import { SectionHead } from '../components/SectionHead'

const QA = [
  {
    q: 'Is it really free?',
    a: 'Yes. Everything on this page is free. A Pro version with extras may come later, but dictation stays free.',
  },
  {
    q: 'Does it work without internet?',
    a: 'Yes. You need internet once, to download the speech model (the recommended one is 264 MB). After that, Falou works completely offline.',
  },
  {
    q: 'Which apps does it work with?',
    a: 'Anything where you can type: chats, browsers, notes, email, documents, code editors. If a field blocks pasting (like a password box), Falou copies the text instead and tells you.',
  },
  {
    q: 'Which languages?',
    a: 'Portuguese, English, Spanish and French. Choose the ones you speak, and Falou recognises them automatically, even when you switch in the middle of a sentence. The app itself is in English and Portuguese.',
  },
  {
    q: 'Which Macs?',
    a: 'Macs with Apple Silicon (M1 or newer) running macOS 12 or later. It’s happy on 8 GB of memory.',
  },
  {
    q: 'Why does it ask for Accessibility and Input Monitoring?',
    a: 'Input Monitoring lets it notice when you press and release your shortcut. Accessibility lets it paste into other apps and check that a text box is selected. That’s all they’re used for.',
  },
  {
    q: 'Can I use a different key?',
    a: 'Yes. Pick Right Command, Right Control, Fn, or record any key or combination. You can also switch to press-to-start, press-to-stop.',
  },
]

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:py-28">
        <SectionHead eyebrow="FAQ" title="Questions, answered." />
        <div className="border-line border-t">
          {QA.map((item) => (
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
