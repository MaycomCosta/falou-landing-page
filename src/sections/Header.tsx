import { useEffect, useState } from 'react'
import { Logo } from '../components/Logo'

const LINKS = [
  { href: '#how', label: 'How it works' },
  { href: '#try', label: 'Try it' },
  { href: '#privacy', label: 'Privacy' },
  { href: '#faq', label: 'FAQ' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        scrolled
          ? 'border-line border-b bg-paper/90 backdrop-blur-md'
          : 'border-transparent border-b bg-paper'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" aria-label="Falou, back to top">
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] text-stone-600 transition-colors hover:text-midnight"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="rounded-full bg-midnight px-4 py-2 font-medium text-[13.5px] text-white transition-colors hover:bg-midnight-700"
        >
          Get Falou
        </a>
      </div>
    </header>
  )
}
