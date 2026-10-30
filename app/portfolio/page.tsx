import type { Metadata } from 'next'
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
import { AnimatedSection } from '@/components/ui/animated-section'
import { Particles } from '@/components/ui/particles'
import { ThreeScene } from '@/components/ui/three-scene'
import { ContactButtons } from '@/components/portfolio/contact-buttons'

export const metadata: Metadata = {
  title: 'Portfolio | Khushwinder — Web Developer & Digital Marketer',
  description:
    'Explore the portfolio of Khushwinder, featuring custom web development, Shopify stores, WordPress solutions, React & Laravel applications.',
}

export default function PortfolioPage() {
  // Schema.org structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Khushwinder",
    "description": "Web Developer & Digital Marketer specializing in WordPress, Shopify, React, Laravel, and digital marketing strategies to grow businesses online.",
    "url": "https://khushwinder.dev/portfolio",
    "image": "https://khushwinder.dev/images/hero-portrait.png",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Khushwinder Freelance Services"
    },
    "sameAs": [
      "https://www.linkedin.com/in/khushwinder-dev",
      "https://github.com/Khushwinder-Dev",
      "https://x.com/Er_Khushwinder",
      "https://www.instagram.com/khushwinder.dev"
    ],
    "knowsAbout": [
      "Web Development",
      "WordPress",
      "Shopify",
      "React",
      "Laravel",
      "Digital Marketing",
      "E-commerce"
    ]
  }

  return (
    <>
      {/* Add structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-background text-foreground relative">
        <ThreeScene />
        <Particles />
        <Header />
        <main>
          <AnimatedSection>
            <Hero />
          </AnimatedSection>

          {/* Skills + Experience */}
          <AnimatedSection delay={0.1}>
            <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-2">
              <Skills />
              <Experience />
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Projects />
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <Plans />
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <Approach />
          </AnimatedSection>

          {/* Testimonials + Contact + Find Me */}
          <AnimatedSection delay={0.5}>
            <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-3">
              <Testimonials />
              <Contact />
              <FindMe />
            </section>
          </AnimatedSection>
        </main>
        <Footer />
        <ContactButtons />
      </div>
    </>
  )
}

