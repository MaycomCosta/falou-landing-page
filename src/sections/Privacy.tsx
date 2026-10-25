import { SectionHead } from '../components/SectionHead'

const POINTS = [
  'Speech recognition runs on your Mac’s own chip. No servers.',
  'No account, no sign-up, no analytics, no tracking.',
  'Recordings aren’t kept unless you turn that on.',
  'Logs keep timings, never what you said.',
]

export function Privacy() {
  return (
    <section id="privacy" className="scroll-mt-16 bg-midnight text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <SectionHead
          dark
          eyebrow="Privacy"
          title={
            <>
              Your voice stays <span className="font-normal font-serif italic">on your Mac.</span>
            </>
          }
          intro="Most dictation tools send your voice to a server. Falou doesn’t have one. It works with Wi-Fi off."
        />
        <div className="lg:pt-10">
          <ul className="divide-y divide-white/10 border-white/10 border-y">
            {POINTS.map((p) => (
              <li key={p} className="flex gap-4 py-4 text-[16px] text-white/85">
                <span className="mt-[9px] size-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-mono text-[12px] text-white/45 leading-relaxed">
            The one download is the speech model (148–539 MB, once), checked against a fixed SHA-256
            fingerprint. Recognition: whisper.cpp on the Apple GPU.
          </p>
        </div>
      </div>
    </section>
  )
}
