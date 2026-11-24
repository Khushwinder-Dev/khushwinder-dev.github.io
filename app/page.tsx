import type { Metadata } from 'next'
import { LinktreeView } from '@/components/linktree/linktree-view'
import { SEO_CONFIG, SITE_URL } from '@/lib/seo-config'

export const metadata: Metadata = {
  title: 'Khushwinder — Web Developer & Digital Marketer | Official Links & Socials',
  description:
    'Official links for Khushwinder: Full-Stack Web Developer & Digital Marketer. Access portfolio, WhatsApp chat, resume CV, GitHub, LinkedIn & freelance profiles.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Khushwinder — Official Links, Portfolio & Profiles',
    description:
      'Full-Stack Web Developer & Software Engineer specializing in Next.js, React, Laravel, Shopify, WordPress & Custom Software.',
    url: SITE_URL,
    siteName: SEO_CONFIG.brandName,
    images: [
      {
        url: '/images/hero-portrait.png',
        width: 1200,
        height: 630,
        alt: 'Khushwinder — Full Stack Web Developer & Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khushwinder — Official Links & Portfolio',
    description:
      'Web Developer & Digital Marketer specializing in Shopify, WordPress, React, Next.js & Laravel.',
    creator: '@Er_Khushwinder',
    images: ['/images/hero-portrait.png'],
  },
}

export default function Page() {
  const profileSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: SEO_CONFIG.author,
      alternateName: SEO_CONFIG.alternateNames,
      url: SITE_URL,
      image: `${SITE_URL}/images/hero-portrait.png`,
      jobTitle: SEO_CONFIG.jobTitles,
      description: SEO_CONFIG.description,
      sameAs: SEO_CONFIG.socialProfiles,
      knowsAbout: SEO_CONFIG.skills,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }}
      />
      <LinktreeView />
    </>
  )
}
