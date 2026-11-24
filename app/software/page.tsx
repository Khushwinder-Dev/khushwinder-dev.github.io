import type { Metadata } from 'next'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'
import { SoftwareView } from '@/components/software/software-view'
import { WhatsAppButton } from '@/components/portfolio/whatsapp-button'
import { Particles } from '@/components/ui/particles'
import { BreadcrumbsStructuredData } from '@/components/seo/structured-data'
import { SEO_CONFIG, SITE_URL } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Custom Software & SaaS Platforms | Khushwinder — Full Stack Engineer',
  description:
    'Explore custom enterprise software, ServeLocally desktop server, B2B wholesale portals, CRMs, and cloud automation platforms engineered by full-stack developer Khushwinder.',
  keywords: [
    ...SEO_CONFIG.keywords,
    'custom software developer',
    'saas developer',
    'b2b wholesale portal',
    'custom crm developer',
    'laravel developer',
    'react developer',
    'enterprise web software',
    'servelocally windows',
  ],
  alternates: {
    canonical: '/software',
  },
  openGraph: {
    title: 'Custom Software & SaaS Platforms | Khushwinder',
    description:
      'Explore custom enterprise software, B2B wholesale portals, CRMs, and cloud automation platforms engineered by full-stack developer Khushwinder.',
    url: `${SITE_URL}/software`,
    siteName: SEO_CONFIG.brandName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-portrait.png',
        width: 1200,
        height: 630,
        alt: 'Custom Software & SaaS Platforms by Khushwinder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Software & SaaS Platforms | Khushwinder',
    description:
      'Explore custom enterprise software, B2B wholesale portals, CRMs, and cloud platforms engineered by Khushwinder.',
    creator: '@Er_Khushwinder',
    images: ['/images/hero-portrait.png'],
  },
}

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
      <BreadcrumbsStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Software', url: '/software' },
        ]}
      />
      <Particles />
      <Header />
      <main className="flex-1">
        <SoftwareView />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

