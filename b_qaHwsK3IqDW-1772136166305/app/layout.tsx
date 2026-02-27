import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Andrew Hewitt | Data Scientist & GIS Analyst',
  description:
    'Portfolio of Andrew Hewitt — Data Science student at Arizona State University specializing in atmospheric sciences, aerospace, and public transportation data.',
  generator: 'v0.app',
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
  openGraph: {
    title: 'Andrew Hewitt | Data Scientist & GIS Analyst',
    description:
      'Portfolio of Andrew Hewitt — Data Science student at Arizona State University specializing in atmospheric sciences, aerospace, and public transportation data.',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://your-domain.com',
    siteName: 'Andrew Hewitt Portfolio',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Andrew Hewitt | Data Scientist & GIS Analyst',
    description:
      'Portfolio of Andrew Hewitt — Data Science student at Arizona State University specializing in atmospheric sciences, aerospace, and public transportation data.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1a',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
