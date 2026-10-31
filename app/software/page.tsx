import type { Metadata } from 'next'
import { Header } from '@/components/portfolio/header'
import { Footer } from '@/components/portfolio/footer'
import { SoftwareView } from '@/components/software/software-view'
import { WhatsAppButton } from '@/components/portfolio/whatsapp-button'
import { Particles } from '@/components/ui/particles'

export const metadata: Metadata = {
  title: 'Custom Software & SaaS Platforms | Khushwinder',
  description:
    'Explore custom enterprise software, B2B wholesale portals, CRMs, and cloud automation platforms engineered by full-stack developer Khushwinder.',
  keywords: [
    'custom software developer',
    'saas developer',
    'b2b wholesale portal',
    'custom crm developer',
    'laravel developer',
    'react developer',
    'enterprise web software',
    'khushwinder software',
  ],
  openGraph: {
    title: 'Custom Software & SaaS Platforms | Khushwinder',
    description:
      'Explore custom enterprise software, B2B wholesale portals, CRMs, and cloud automation platforms engineered by full-stack developer Khushwinder.',
    url: 'https://khushwinder.dev/software',
    siteName: 'Khushwinder Portfolio',
    locale: 'en_US',
    type: 'website',
  },
}

export default function SoftwarePage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative flex flex-col">
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
