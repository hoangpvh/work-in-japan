// app/layout.tsx
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
// import Footer from '@/components/Footer'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        {/* <Footer /> */}
      </body>
    </html>
  )
}