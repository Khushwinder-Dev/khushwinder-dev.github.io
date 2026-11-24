import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { siteConfig } from '@/lib/site-config'
import { SEO_CONFIG, SITE_URL } from '@/lib/seo-config'
import { WebSiteStructuredData, PersonStructuredData } from '@/components/seo/structured-data'
import './globals.css'

// Re-export site configuration & feature flags for global access
export { siteConfig }

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_CONFIG.title,
    template: '%s | Khushwinder',
  },
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: SEO_CONFIG.author, url: SITE_URL }],
  creator: SEO_CONFIG.author,
  publisher: SEO_CONFIG.author,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    url: SITE_URL,
    siteName: SEO_CONFIG.brandName,
    locale: 'en_US',
    type: 'profile',
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
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    creator: '@Er_Khushwinder',
    images: ['/images/hero-portrait.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  category: 'technology',
  generator: 'Next.js',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0a0a14',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <WebSiteStructuredData />
        <PersonStructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
        
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-C7YG4038YC"
          strategy="afterInteractive"
        />
        
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-C7YG4038YC');
          `}
        </Script>
      </body>
    </html>
  )
}
