import qrcode from 'qrcode-generator'
import { useMemo, useState } from 'react'
import { SectionHead } from '../components/SectionHead'
import { useI18n } from '../i18n'
import { pixCode } from '../lib/pix'
import { canBuy, site } from '../lib/site'

export function Buy() {
  const { m } = useI18n()
  return (
    <section id="buy" className="scroll-mt-16 border-line border-t">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
        <SectionHead
          eyebrow={m.buy.eyebrow}
          title={
            <>
              {m.buy.title1} <span className="font-normal font-serif italic">{m.buy.title2}</span>
            </>
          }
          intro={m.buy.intro}
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div className="flex flex-col rounded-3xl border border-line bg-paper p-7">
            <p className="font-medium text-[15px] text-stone-600">{m.buy.trial.name}</p>
            <p className="mt-3 font-semibold text-[40px] leading-none tracking-[-0.03em]">
              {m.buy.trial.price}
            </p>
            <Points items={m.buy.trial.points} />
            <div className="mt-auto pt-8">
              {site.downloadUrl ? (
                <a
                  href={site.downloadUrl}
                  className="inline-flex rounded-full border border-line px-5 py-3 font-medium text-[14px] transition-colors hover:border-stone-300"
                >
                  {m.buy.trial.cta}
                </a>
              ) : (
                <span className="text-[14px] text-stone-500">{m.download.soon}</span>
              )}
            </div>
          </div>

          <div className="rounded-3xl bg-midnight p-7 text-white">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <p className="font-medium text-[15px] text-white/70">{m.buy.full.name}</p>
              {canBuy() && (
                <p className="font-semibold text-[40px] leading-none tracking-[-0.03em]">
                  {site.price.label}{' '}
                  <span className="font-normal font-serif text-[22px] text-white/60 italic tracking-normal">
                    {m.buy.full.once}
                  </span>
                </p>
              )}
            </div>
            <Points items={m.buy.full.points} dark />
            <div className="mt-8 border-white/10 border-t pt-6">
              {canBuy() ? <HowToBuy /> : <p className="text-[14.5px] text-white/70">{m.buy.soon}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Points({ items, dark = false }: { items: readonly string[]; dark?: boolean }) {
  return (
    <ul className="mt-6 space-y-2.5">
      {items.map((p) => (
        <li key={p} className={`flex gap-3 text-[15px] ${dark ? 'text-white/85' : 'text-stone-700'}`}>
          <span className="mt-[8px] size-1.5 shrink-0 rounded-full bg-ember" aria-hidden />
          {p}
        </li>
      ))}
    </ul>
  )
}

function HowToBuy() {
  const { m } = useI18n()
  const [copied, setCopied] = useState(false)
  const code = useMemo(
    () =>
      pixCode({
        key: site.pix.key,
        name: site.pix.name,
        city: site.pix.city,
        amount: site.price.amount,
        reference: 'FALOU',
      }),
    [],
  )
  const qr = useMemo(() => {
    const q = qrcode(0, 'M')
    q.addData(code)
    q.make()
    const n = q.getModuleCount()
    let path = ''
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) if (q.isDark(r, c)) path += `M${c} ${r}h1v1h-1z`
    return { n, path }
  }, [code])

  const copy = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      // Clipboard blocked: the code is still selectable below.
    }
  }
  const mail = `mailto:${site.email}?subject=${encodeURIComponent(m.buy.mailSubject)}`

  return (
    <div>
      <h3 className="font-medium text-[15px]">{m.buy.how}</h3>
      <ol className="mt-4 space-y-5 text-[14.5px] text-white/80">
        <li className="grid gap-4 sm:grid-cols-[auto_1fr]">
          <svg
            viewBox={`-2 -2 ${qr.n + 4} ${qr.n + 4}`}
            className="size-40 rounded-xl bg-white"
            role="img"
            aria-label={m.buy.qrLabel}
            shapeRendering="crispEdges"
          >
            <path d={qr.path} fill="#0e1a33" />
          </svg>
          <div className="min-w-0">
            <p>
              <Step n={1} />
              {m.buy.scan}
            </p>
            <code className="mt-3 block select-all break-all rounded-xl bg-white/5 px-3 py-2 font-mono text-[11.5px] text-white/60 leading-relaxed">
              {code}
            </code>
            <button
              type="button"
              onClick={() => void copy()}
              className="mt-3 rounded-full bg-ember px-4 py-2 font-medium text-[13.5px] text-white transition-colors hover:bg-ember-600"
            >
              {copied ? m.buy.copied : m.buy.copy}
            </button>
          </div>
        </li>
        <li>
          <Step n={2} />
          {m.buy.send(site.email)}{' '}
          <a
            href={mail}
            className="text-white underline decoration-white/30 underline-offset-4 hover:decoration-white"
          >
            {m.buy.sendCta}
          </a>
        </li>
        <li>
          <Step n={3} />
          {m.buy.receive}
        </li>
      </ol>
      <p className="mt-6 text-[12.5px] text-white/45">{m.buy.pixOnly}</p>
    </div>
  )
}

function Step({ n }: { n: number }) {
  return <span className="mr-2 font-mono text-[12px] text-ember">{`0${n}`}</span>
}
