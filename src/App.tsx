import { I18nProvider, useI18n } from './i18n'
import { Buy } from './sections/Buy'
import { Download, Footer } from './sections/Download'
import { Faq } from './sections/Faq'
import { Features } from './sections/Features'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { HowItWorks } from './sections/HowItWorks'
import { Privacy } from './sections/Privacy'
import { TryIt } from './sections/TryIt'
import { WorksIn } from './sections/WorksIn'

export function App() {
  return (
    <I18nProvider>
      <Page />
    </I18nProvider>
  )
}

function Page() {
  const { m } = useI18n()
  return (
    <>
      <a
        href="#try"
        className="sr-only z-50 rounded-full bg-midnight px-4 py-2 text-[13px] text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        {m.nav.skip}
      </a>
      <Header />
      <main>
        <Hero />
        <WorksIn />
        <HowItWorks />
        <TryIt />
        <Features />
        <Privacy />
        <Buy />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  )
}
