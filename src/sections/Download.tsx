import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { Logo } from '../components/Logo'
import { useI18n } from '../i18n'
import { site } from '../lib/site'

export function Download() {
  const { m } = useI18n()
  const ready = site.downloadUrl !== ''
  return (
    <section id="download" className="scroll-mt-16 border-line border-t bg-mist">
      <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <h2 className="font-normal font-serif text-[clamp(3rem,8vw,6rem)] italic leading-[0.95] tracking-[-0.02em]">
          {m.download.title1}{' '}
          <span className="font-sans font-semibold not-italic tracking-[-0.045em]">{m.download.title2}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-md text-[17px] text-stone-600">{m.download.body}</p>
        <div className="mt-10 flex flex-col items-center gap-3">
          {ready ? (
            <a
              href={site.downloadUrl}
              className="rounded-full bg-midnight px-7 py-4 font-medium text-[15px] text-white transition-colors hover:bg-midnight-700"
            >
              {m.download.button(site.version)}
            </a>
          ) : (
            <span className="rounded-full border border-line bg-paper px-7 py-4 font-medium text-[15px] text-stone-600">
              {m.download.soon}
            </span>
          )}
          <span className="text-[13px] text-stone-500">{m.download.requirements}</span>
          {ready && (
            <p className="mt-4 max-w-md text-[12.5px] text-stone-500 leading-relaxed">
              {m.download.firstOpen}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const { m } = useI18n()
  return (
    <footer className="border-line border-t">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <Logo />
          <span className="text-[13px] text-stone-500">{m.footer.tagline}</span>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-[13px] text-stone-500">© 2026 Falou · {m.footer.rights}</p>
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  )
}
