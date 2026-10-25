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
    <>
      <a
        href="#try"
        className="sr-only z-50 rounded-full bg-midnight px-4 py-2 text-[13px] text-white focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
      >
        Skip to the demo
      </a>
      <Header />
      <main>
        <Hero />
        <WorksIn />
        <HowItWorks />
        <TryIt />
        <Features />
        <Privacy />
        <Faq />
        <Download />
      </main>
      <Footer />
    </>
  )
}
