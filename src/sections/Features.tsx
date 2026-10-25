import { SectionHead } from '../components/SectionHead'

const STATS = [
  { value: '0.5', unit: 's', label: 'from letting go to text in the app, on an M1' },
  { value: '0', unit: 'bytes', label: 'of your voice or text sent anywhere' },
  { value: '4', unit: 'languages', label: 'mixed freely, even inside one sentence' },
]

const DETAILS = [
  {
    title: 'Mixes languages like you do',
    body: 'Start in English, finish in Portuguese. Falou hears where you switch and writes each part in its own language instead of translating it.',
  },
  {
    title: 'Questions come out as questions',
    body: 'When only your voice goes up at the end, “Você já chegou em casa?”, Falou still adds the question mark.',
  },
  {
    title: 'Cleans up as it goes',
    body: 'Drops the “um”, “tipo”, “né”, “euh”. Adds capitals and punctuation. Keeps French spacing and the Spanish ¿.',
  },
  {
    title: 'Never loses a word',
    body: 'No text box selected? It won’t type into nothing. The text waits on your clipboard, and “Copy last dictation” is one click away.',
  },
  {
    title: 'Leaves your clipboard alone',
    body: 'It pastes and then puts back whatever you had copied before, images and files included.',
  },
  {
    title: 'Fits how you work',
    body: 'Hold to talk, or press once to start and again to stop. Pick your key, your mic, and how big the speech model is.',
  },
]

export function Features() {
  return (
    <section className="border-line border-t">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHead
          eyebrow="Why Falou"
          title={
            <>
              Faster than typing. <span className="font-normal font-serif italic">Nicer, too.</span>
            </>
          }
          intro="Built for chats, notes, emails and everything in between: anywhere you’d rather say it than type it."
        />

        <dl className="mt-14 grid border-line border-y sm:grid-cols-3">
          {STATS.map((s, i) => (
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
          {DETAILS.map((d) => (
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
