import type { Metadata } from 'next'
import { LinktreeView } from '@/components/linktree/linktree-view'

export const metadata: Metadata = {
  title: 'Khushwinder — Web Developer & Digital Marketer | Official Links',
  description:
    'Official links for Khushwinder: Web Developer & Digital Marketer. Access portfolio, WhatsApp chat, resume CV, freelance platforms (Upwork, Fiverr) & socials.',
  openGraph: {
    title: 'Khushwinder — Official Links & Portfolio',
    description:
      'Web Developer & Digital Marketer specializing in Shopify, WordPress, React, Next.js & Laravel.',
    url: 'https://khushwinder.dev',
    images: ['/images/hero-portrait.png'],
  },
}

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Khushwinder",
    "description":
      "Web Developer & Digital Marketer specializing in WordPress, Shopify, React, Laravel, and digital marketing strategies.",
    "url": "https://khushwinder.dev",
    "image": "https://khushwinder.dev/images/hero-portrait.png",
    "jobTitle": "Web Developer",
    "sameAs": [
      "https://www.linkedin.com/in/khushwinder-dev",
      "https://github.com/Khushwinder-Dev",
      "https://x.com/Er_Khushwinder",
      "https://www.instagram.com/khushwinder.dev",
      "https://www.upwork.com/freelancers/~01067ea901a45a6c1f?mp_source=share",
      "https://www.fiverr.com/khushwinder_",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <LinktreeView />
    </>
  )
}
