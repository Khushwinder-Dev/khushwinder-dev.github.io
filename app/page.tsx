import { Header } from '@/components/portfolio/header'
import { Hero } from '@/components/portfolio/hero'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Plans } from '@/components/portfolio/plans'
import { Approach } from '@/components/portfolio/approach'
import { Testimonials } from '@/components/portfolio/testimonials'
import { Contact } from '@/components/portfolio/contact'
import { FindMe } from '@/components/portfolio/find-me'
import { Footer } from '@/components/portfolio/footer'
import { WhatsAppButton } from '@/components/portfolio/whatsapp-button'

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />

        {/* Skills + Experience */}
        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2">
          <Skills />
          <Experience />
        </section>

        <Projects />
        <Plans />
        <Approach />

        {/* Testimonials + Contact + Find Me */}
        <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-3">
          <Testimonials />
          <Contact />
          <FindMe />
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
