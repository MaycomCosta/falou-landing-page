import { useEffect, useState } from 'react'
import { LanguageSwitcher } from '../components/LanguageSwitcher'
import { Logo } from '../components/Logo'
import { useI18n } from '../i18n'

export function Header() {
  const { m } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#how', label: m.nav.how },
    { href: '#try', label: m.nav.try },
    { href: '#privacy', label: m.nav.privacy },
    { href: '#buy', label: m.nav.buy },
    { href: '#faq', label: m.nav.faq },
  ]

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'border-line border-b bg-paper/90 backdrop-blur-md'
          : 'border-transparent border-b bg-paper'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" aria-label={m.nav.home}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-stone-600 transition-colors hover:text-midnight"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <LanguageSwitcher />
          <a
            href="#download"
            className="hidden rounded-full bg-midnight px-4 py-2 font-medium text-[13.5px] text-white transition-colors hover:bg-midnight-700 sm:inline-flex"
          >
            {m.nav.cta}
          </a>
        </div>
      </div>
    </header>
  )
}
