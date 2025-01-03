// app/layout.tsx
import '@/styles/globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ThangLong Inc',
  description:
    'Frontend, backend, infrastructure, mobile apps, AI, etc. We have a broad skill sets to make various type of services.',
  icons: {
    icon: '/images/Mobile Logo.svg',
    shortcut: '/images/Mobile Logo.svg',
    apple: '/images/Mobile Logo.svg',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/images/Mobile Logo.svg',
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
