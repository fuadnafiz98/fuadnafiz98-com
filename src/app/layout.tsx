import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { generatePersonSchema } from '@/lib/jsonld';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Header } from './header';
import { Footer } from './footer';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://fuadnafiz98.com'),
  title: {
    default: 'Muhtasim Fuad | Full Stack Software Engineer',
    template: '%s | Muhtasim Fuad',
  },
  description:
    'Full-stack developer with 3+ years of experience in Django, Python, React, Typescript, PostgreSQL and Containarization. Specializing in scalable web applications and business process automation.',
  applicationName: 'Muhtasim Fuad Portfolio',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'React',
    'TypeScript',
    'Django',
    'Python',
    'PostgreSQL',
    'Web Development',
    'Software Development',
  ],
  authors: [{ name: 'Muhtasim Fuad', url: 'https://fuadnafiz98.com' }],
  creator: 'Muhtasim Fuad',
  publisher: 'Muhtasim Fuad',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://fuadnafiz98.com',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fuadnafiz98.com',
    title: 'Muhtasim Fuad | Full Stack Software Engineer',
    description:
      'Full-stack developer with 3+ years of experience in Django, Python, React, Typescript, PostgreSQL and Containarization.',
    siteName: 'Muhtasim Fuad',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Muhtasim Fuad - Full Stack Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhtasim Fuad | Full Stack Software Engineer',
    description:
      'Full-stack developer with 3+ years of experience in Django, Python, React, Typescript, PostgreSQL and Containarization.',
    site: '@fuadnafiz98',
    creator: '@fuadnafiz98',
    images: ['/opengraph-image'],
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      me: ['@fuadnafiz98'],
    },
  },
  appleWebApp: {
    capable: true,
    title: 'Muhtasim Fuad',
    statusBarStyle: 'black-translucent',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      {
        url: '/assets/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        url: '/assets/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    shortcut: '/favicon.ico',
    apple: '/assets/apple-touch-icon.png',
  },
  other: {
    'dc.creator': 'Muhtasim Fuad',
    'dc.description': 'Personal portfolio and blog of Muhtasim Fuad',
    'dc.publisher': 'Muhtasim Fuad',
    'dc.title': 'Muhtasim Fuad Portfolio',
    'dc.type': 'website',
    'dc.language': 'en',
    'dc.coverage': 'Global',
    'dc.rights': '© 2025 Muhtasim Fuad',
    google: 'notranslate', // Prevent Google from offering translations
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'msapplication-TileColor': '#09090b',
  },
  assets: ['/assets/logo.jpg'],
  classification: 'Personal Portfolio and Blog',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Add JSON-LD to your page */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generatePersonSchema()).replace(
              /</g,
              '\\u003c',
            ),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geist bg-white tracking-tight antialiased dark:bg-zinc-950`}
      >
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen w-full flex-col font-[family-name:var(--font-inter-tight)]">
            <div className="relative mx-auto w-full max-w-screen-sm flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
