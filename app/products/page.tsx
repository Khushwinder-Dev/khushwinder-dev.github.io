import type { Metadata } from 'next'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'
import { ProductsView } from '@/components/products/products-view'
import { WhatsAppButton } from '@/components/portfolio/whatsapp-button'
import { Particles } from '@/components/ui/particles'
import { BreadcrumbsStructuredData, ProductsStructuredData } from '@/components/seo/structured-data'
import { SEO_CONFIG, SITE_URL } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Products & Software by Khushwinder — ServeLocally, Custom Apps & Platforms',
  description:
    'Official software, desktop developer utilities, and web apps built by Khushwinder. Including ServeLocally (fast local Windows server), B2B wholesale portals, and Shopify storefront applications.',
  keywords: [
    ...SEO_CONFIG.keywords,
    'ServeLocally Windows',
    'ServeLocally download',
    'local web server',
    'custom CRM software',
    'B2B wholesale portal',
    'Shopify apps developer',
    'Khushwinder products',
  ],
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products & Software by Khushwinder — ServeLocally, Custom Apps & Platforms',
    description:
      'Explore custom enterprise software, open-source developer utilities, Shopify storefront apps, and interactive 3D WebGL platforms built by full-stack developer Khushwinder.',
    url: `${SITE_URL}/products`,
    siteName: SEO_CONFIG.brandName,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/hero-portrait.png',
        width: 1200,
        height: 630,
        alt: 'Products & Software by Khushwinder',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products & Software by Khushwinder',
    description:
      'Official software, desktop utilities, and web apps built by Khushwinder. Including ServeLocally, B2B portals, and Shopify apps.',
    creator: '@Er_Khushwinder',
    images: ['/images/hero-portrait.png'],
  },
}

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
      <BreadcrumbsStructuredData
        items={[
          { name: 'Home', url: '/' },
          { name: 'Products', url: '/products' },
        ]}
      />
      <ProductsStructuredData />
      <Particles />
      <Header />
      <main className="flex-1">
        <ProductsView />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
