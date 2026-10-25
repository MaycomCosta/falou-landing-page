import { createContext, type ReactNode, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { en, type Messages } from './en'
import { es } from './es'
import { fr } from './fr'
import { pt } from './pt'

export type Locale = 'en' | 'pt' | 'es' | 'fr'

/** Shown in the language switcher, in their own language. */
export const LOCALES: Array<{ id: Locale; label: string; short: string }> = [
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'pt', label: 'Português', short: 'PT' },
  { id: 'es', label: 'Español', short: 'ES' },
  { id: 'fr', label: 'Français', short: 'FR' },
]

const HTML_LANG: Record<Locale, string> = { en: 'en', pt: 'pt-BR', es: 'es', fr: 'fr' }
const STORAGE_KEY = 'falou.locale'

const isLocale = (v: unknown): v is Locale => LOCALES.some((l) => l.id === v)

/** French typography: narrow no-break space before ? ! : ; and inside « », so marks never wrap alone. */
function frenchSpaces<T>(value: T): T {
  if (typeof value === 'string') {
    return value.replace(/ ([?!:;»])/g, ' $1').replace(/« /g, '« ') as T
  }
  if (Array.isArray(value)) return value.map(frenchSpaces) as T
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, frenchSpaces(v)])) as T
  }
  return value
}

const MESSAGES: Record<Locale, Messages> = { en, pt, es, fr: frenchSpaces(fr) }

/** ?lang= link, then the visitor's last choice, then their browser languages, then English. */
export function detectLocale(): Locale {
  const fromUrl = new URLSearchParams(window.location.search).get('lang')
  if (isLocale(fromUrl)) return fromUrl
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (isLocale(saved)) return saved
  } catch {
    // storage blocked: fine
  }
  for (const tag of navigator.languages ?? [navigator.language]) {
    const code = tag.toLowerCase().slice(0, 2)
    if (isLocale(code)) return code
  }
  return 'en'
}

interface I18n {
  locale: Locale
  m: Messages
  setLocale: (locale: Locale) => void
}

const I18nContext = createContext<I18n | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale)
  const m = MESSAGES[locale]

  // Keep <html lang>, the tab title and the description in step with the page.
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[locale]
    document.title = m.meta.title
    document.querySelector('meta[name="description"]')?.setAttribute('content', m.meta.description)
  }, [locale, m])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // storage blocked: the choice just won't be remembered
    }
    // Shareable link for this language, without reloading or adding history entries.
    const url = new URL(window.location.href)
    if (next === 'en') url.searchParams.delete('lang')
    else url.searchParams.set('lang', next)
    window.history.replaceState(null, '', url)
  }, [])

  const value = useMemo(() => ({ locale, m, setLocale }), [locale, m, setLocale])
  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18n {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>')
  return ctx
}
