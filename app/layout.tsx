import React from "react"
import type { Metadata, Viewport } from 'next'
import { Noto_Kufi_Arabic, Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LocaleProvider } from '@/components/locale-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
})

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'أتيليه وبيوتي سنتر الملڰة | Al-Malika Atelier & Beauty Center',
    template: '%s | الملڰة',
  },
  description: 'وجهتك المثالية للجمال والأناقة - خدمات تجميل فاخرة وفساتين راقية | Your perfect destination for beauty and elegance',
  keywords: ['beauty center', 'atelier', 'bridal makeup', 'wedding dresses', 'مركز تجميل', 'أتيليه', 'ميكاب عرايس', 'فساتين زفاف'],
  openGraph: {
    title: 'أتيليه وبيوتي سنتر الملڰة',
    description: 'وجهتك المثالية للجمال والأناقة',
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${notoKufiArabic.variable} ${geist.variable} font-sans antialiased`}>
        <LocaleProvider>
          <Header />
          <main className="min-h-screen pt-16 md:pt-20">
            {children}
          </main>
          <Footer />
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
