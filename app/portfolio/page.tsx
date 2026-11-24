import type { Metadata } from 'next'
import { Header } from '@/components/portfolio/header'
import { Hero } from '@/components/portfolio/hero'
import { Skills } from '@/components/portfolio/skills'
import { Experience } from '@/components/portfolio/experience'
import { Projects } from '@/components/portfolio/projects'
import { Approach } from '@/components/portfolio/approach'
import { Testimonials } from '@/components/portfolio/testimonials'
import { Contact } from '@/components/portfolio/contact'
import { FindMe } from '@/components/portfolio/find-me'
import { Footer } from '@/components/portfolio/footer'
import { AnimatedSection } from '@/components/ui/animated-section'
import { Particles } from '@/components/ui/particles'
import { ThreeScene } from '@/components/ui/three-scene'
import { ContactButtons } from '@/components/portfolio/contact-buttons'
import { BreadcrumbsStructuredData } from '@/components/seo/structured-data'
import { SEO_CONFIG, SITE_URL } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Khushwinder Portfolio — Full Stack Web Developer & Software Engineer',
  description:
    'Explore the portfolio of Khushwinder. Showcasing custom web applications, bespoke Shopify stores, WordPress solutions, React, Next.js, and Laravel software projects.',
  keywords: SEO_CONFIG.keywords,
  alternates: {
    canonical: '/portfolio',
  },
  openGraph: {
    title: 'Khushwinder Portfolio — Full Stack Web Developer & Software Engineer',
    description:
      'Explore the verified client projects, Shopify stores, web apps, and custom software created by Khushwinder.',
    url: `${SITE_URL}/portfolio`,
    siteName: SEO_CONFIG.brandName,
    images: [
      {
        url: '/images/hero-portrait.png',
        width: 1200,
        height: 630,
        alt: 'Khushwinder Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khushwinder Portfolio — Web Developer & Software Engineer',
    description:
      'Explore verified web development projects, custom e-commerce stores, and software solutions built by Khushwinder.',
    creator: '@Er_Khushwinder',
    images: ['/images/hero-portrait.png'],
  },
}

export default function PortfolioPage() {
  // Schema.org structured data
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Khushwinder Web Development Portfolio',
    description:
      'Comprehensive showcase of web applications, e-commerce stores, custom SaaS tools, and technical skills.',
    url: `${SITE_URL}/portfolio`,
    author: {
      '@type': 'Person',
      name: SEO_CONFIG.author,
      alternateName: SEO_CONFIG.alternateNames,
      url: SITE_URL,
      sameAs: SEO_CONFIG.socialProfiles,
      jobTitle: SEO_CONFIG.jobTitles,
      knowsAbout: SEO_CONFIG.skills,
    },
  }

  return (
    <>
      <BreadcrumbsStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Portfolio', url: '/portfolio' },
        ]}
      />
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
            <Approach />
          </AnimatedSection>

          {/* Testimonials + Contact + Find Me */}
          <AnimatedSection delay={0.4}>
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
