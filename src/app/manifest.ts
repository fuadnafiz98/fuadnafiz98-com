import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Muhtasim Fuad | Full Stack Software Engineer',
    short_name: 'Muhtasim Fuad',
    description:
      'Full-stack developer with 3+ years of experience in Django, Python, React, Typescript, PostgreSQL and Containarization.',
    start_url: '/',
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/assets/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/assets/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    orientation: 'portrait',
    categories: ['technology', 'development', 'portfolio'],
    shortcuts: [],
    prefer_related_applications: false,
    screenshots: [
      {
        src: '/opengraph-image',
        sizes: '1200x630',
        type: 'image/png',
        label: 'Muhtasim Fuad - Full Stack Software Engineer',
      },
    ],
  };
}
