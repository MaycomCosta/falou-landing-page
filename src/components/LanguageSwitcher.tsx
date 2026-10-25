import { LOCALES, useI18n } from '../i18n'

/** Compact language picker: a native select, so it's accessible and works the same everywhere. */
export function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { locale, setLocale, m } = useI18n()
  return (
    <label className={`relative inline-flex items-center ${className}`}>
      <span className="sr-only">{m.nav.language}</span>
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        className="pointer-events-none absolute left-2.5 text-stone-500"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
      </svg>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as typeof locale)}
        className="cursor-pointer appearance-none rounded-full border border-line bg-paper py-1.5 pr-3 pl-8 font-medium text-[13px] text-stone-600 transition-colors hover:border-stone-300 hover:text-midnight"
      >
        {LOCALES.map((l) => (
          <option key={l.id} value={l.id}>
            {l.short} · {l.label}
          </option>
        ))}
      </select>
    </label>
  )
}
