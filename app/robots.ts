import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/'], // If you have private pages
    },
    sitemap: 'https://khushwinder.dev/sitemap.xml', // Replace with your domain!
  }
}
