import React from 'react'
import { SEO_CONFIG, SITE_URL } from '@/lib/seo-config'

/**
 * Schema.org WebSite Structured Data
 * Informs search engines of official site name, alternative names, and search authority.
 */
export function WebSiteStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SEO_CONFIG.brandName,
    alternateName: SEO_CONFIG.alternateNames,
    url: SITE_URL,
    description: SEO_CONFIG.description,
    author: {
      '@type': 'Person',
      name: SEO_CONFIG.author,
      url: SITE_URL,
    },
    inLanguage: 'en-US',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Schema.org Person & Professional Structured Data
 * Establishes Google Knowledge Graph entity linking for "Khushwinder".
 */
export function PersonStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SEO_CONFIG.author,
    alternateName: SEO_CONFIG.alternateNames,
    url: SITE_URL,
    image: `${SITE_URL}/images/hero-portrait.png`,
    jobTitle: SEO_CONFIG.jobTitles,
    description: SEO_CONFIG.description,
    sameAs: SEO_CONFIG.socialProfiles,
    knowsAbout: SEO_CONFIG.skills,
    knowsLanguage: ['English', 'Punjabi', 'Hindi'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web & Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Shopify E-Commerce Store Development',
            description:
              'Custom Shopify store creation, theme development, app integrations, and conversion rate optimization.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Stack Web Application Development',
            description:
              'End-to-end custom web applications built with Next.js, React, TypeScript, and Laravel.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'WordPress & WooCommerce Development',
            description:
              'High-speed, custom-coded WordPress themes, WooCommerce stores, and plugin development.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Desktop & SaaS Software Engineering',
            description:
              'Lightweight native Windows software (Tauri v2 + Rust), B2B wholesale portals, and CRM systems.',
          },
        },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Schema.org BreadcrumbList Structured Data
 * Shows breadcrumb navigation trails in Google Search Results.
 */
export function BreadcrumbsStructuredData({
  items,
}: {
  items: Array<{ name: string; url: string }>
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

/**
 * Schema.org Software & Apps Catalog Structured Data
 * Displays rich snippets for ServeLocally and software products.
 */
export function ProductsStructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Software & Web Applications Built by Khushwinder',
    description:
      'Curated catalog of software platforms, developer utilities, and web apps created by Khushwinder.',
    itemListElement: [
      {
        '@type': 'SoftwareApplication',
        name: 'ServeLocally',
        operatingSystem: 'Windows 11, Windows 10 (64-bit)',
        applicationCategory: 'DeveloperApplication',
        description:
          'Ultra-fast, lightweight local PHP, Nginx, MariaDB & Mailpit development server for Windows built with Tauri v2 and Rust.',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://servelocally.github.io/',
        author: {
          '@type': 'Person',
          name: 'Khushwinder',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'B2B Wholesale Portal',
        operatingSystem: 'Web-based Cloud Application',
        applicationCategory: 'BusinessApplication',
        description:
          'Enterprise multi-tier pricing, bulk ordering, and custom invoicing portal built with Next.js & Laravel.',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
        url: `${SITE_URL}/software`,
        author: {
          '@type': 'Person',
          name: 'Khushwinder',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Interactive 3D Product Configurator',
        operatingSystem: 'Web-based WebGL',
        applicationCategory: 'MultimediaApplication',
        description:
          'Real-time 3D WebGL material and texture customizer for e-commerce storefronts built with Three.js & React.',
        offers: {
          '@type': 'Offer',
          price: '0.00',
          priceCurrency: 'USD',
        },
        url: `${SITE_URL}/apps`,
        author: {
          '@type': 'Person',
          name: 'Khushwinder',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
