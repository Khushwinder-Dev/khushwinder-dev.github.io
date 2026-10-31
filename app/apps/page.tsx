import type { Metadata } from 'next'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'
import { AppsView } from '@/components/apps/apps-view'
import { WhatsAppButton } from '@/components/portfolio/whatsapp-button'
import { Particles } from '@/components/ui/particles'

export const metadata: Metadata = {
  title: 'Interactive Web & Shopify Apps | Khushwinder',
  description:
    'Discover custom Shopify apps, interactive 3D WebGL configurators, mobile PWAs, and high-performance web applications built by Khushwinder.',
  keywords: [
    'shopify app developer',
    'web app developer',
    'react pwa developer',
    'interactive product customizer',
    'three.js 3d configurator',
    'custom web applications',
    'khushwinder apps',
  ],
  openGraph: {
    title: 'Interactive Web & Shopify Apps | Khushwinder',
    description:
      'Discover custom Shopify apps, interactive 3D WebGL configurators, mobile PWAs, and high-performance web applications built by Khushwinder.',
    url: 'https://khushwinder.dev/apps',
    siteName: 'Khushwinder Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function AppsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
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

