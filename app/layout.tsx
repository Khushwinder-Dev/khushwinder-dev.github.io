import { Analytics } from '@vercel/analytics/next'
import Script from 'next/script'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://khushwinder.dev'), // Replace with your actual domain!
  title: {
    default: 'Khushwinder — Web Developer & Digital Marketer',
    template: '%s | Khushwinder',
  },
  description:
    'Khushwinder is a web developer & digital marketer specializing in WordPress, Shopify, React, Laravel, and digital marketing strategies to grow your business online.',
  keywords: [
    'web developer',
    'digital marketer',
    'shopify developer',
    'wordpress developer',
    'react developer',
    'laravel developer',
    'e-commerce developer',
    'portfolio website',
    'khushwinder',
  ],
  openGraph: {
    title: 'Khushwinder — Web Developer & Digital Marketer',
    description:
      'I build professional websites, e-commerce stores (WordPress/Shopify), custom web apps (React/Laravel), and help brands grow with digital marketing.',
    url: 'https://khushwinder.dev', // Replace with your actual domain!
    siteName: 'Khushwinder Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Khushwinder — Web Developer & Digital Marketer',
    description:
      'I build professional websites, e-commerce stores (WordPress/Shopify), custom web apps (React/Laravel), and help brands grow with digital marketing.',
    creator: '@khushwinder', // Replace with your Twitter handle if you have one!
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
