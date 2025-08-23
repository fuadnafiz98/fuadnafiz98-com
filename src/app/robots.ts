import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/api/'],
    },
    sitemap: 'https://fuadnafiz98.com/sitemap.xml',
    host: 'https://fuadnafiz98.com',
  }
}
