import type { Metadata } from 'next'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'
import { AppsView } from '@/components/apps/apps-view'
import { WhatsAppButton } from '@/components/portfolio/whatsapp-button'
import { Particles } from '@/components/ui/particles'
import { BreadcrumbsStructuredData } from '@/components/seo/structured-data'
import { SEO_CONFIG, SITE_URL } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Interactive Web & Shopify Apps | Khushwinder — App Developer',
  description:
    'Discover custom Shopify apps, interactive 3D WebGL configurators, mobile PWAs, and high-performance web applications built by Khushwinder.',
  keywords: [
    ...SEO_CONFIG.keywords,
    'shopify app developer',
    'web app developer',
    'react pwa developer',
    'interactive product customizer',
    'three.js 3d configurator',
    'custom web applications',
    'khushwinder apps',
  ],
  alternates: {
    canonical: '/apps',
  },
  openGraph: {
    title: 'Interactive Web & Shopify Apps | Khushwinder',
    description:
      'Discover custom Shopify apps, interactive 3D WebGL configurators, mobile PWAs, and high-performance web applications built by Khushwinder.',
    url: `${SITE_URL}/apps`,
    siteName: SEO_CONFIG.brandName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-portrait.png',
        width: 1200,
        height: 630,
        alt: 'Interactive Web & Shopify Apps by Khushwinder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Web & Shopify Apps | Khushwinder',
    description:
      'Discover custom Shopify apps, interactive 3D WebGL configurators, and web apps built by Khushwinder.',
    creator: '@Er_Khushwinder',
    images: ['/images/hero-portrait.png'],
  },
}

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
      <BreadcrumbsStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
          { name: 'Apps', url: '/apps' },
        ]}
      />
      <Particles />
      <Header />
      <main className="flex-1">
        <AppsView />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

