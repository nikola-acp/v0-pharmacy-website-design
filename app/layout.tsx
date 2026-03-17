import type { Metadata } from 'next'
import { Inter, Geist_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Pharmabest Supplies | Pharmacy Essentials for Ontario Pharmacies',
  description: 'Pharmabest Supplies provides high-quality labels, receipts, thermal printers, and accessories to pharmacies across Ontario. Competitive pricing, fast shipping, and free technical support.',
  keywords: ['pharmacy supplies', 'thermal printers', 'pharmacy labels', 'receipt rolls', 'Toronto', 'Ontario', 'custom labels'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
