import './styles/globals.scss'
import type { Metadata } from 'next'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import CursorEffect from '@/components/CursorEffect/CursorEffect'

export const metadata: Metadata = {
  title: 'Ahmadjon | Portfolio',
  description: 'Frontend Developer Portfolio',
  metadataBase: new URL('https://ahmadjon-dev.vercel.app'),
  keywords: ['Frontend Developer', 'React Developer', 'Next.js Developer', 'Web Developer', 'Tashkent'],
  authors: [{ name: 'Ahmadjon Karimov' }],
  openGraph: {
    title: 'Ahmadjon | Portfolio',
    description: 'Frontend Developer Portfolio',
    url: 'https://ahmadjon-dev.vercel.app',
    siteName: 'Ahmadjon.dev',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ahmadjon Portfolio'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmadjon | Portfolio',
    description: 'Frontend Developer Portfolio',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <CursorEffect />
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
