import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google'
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Pharmabest Supplies | Pharmacy Thermal Labels, Receipts & Printers — Ontario',
  description: 'Pharmabest Supplies provides high-quality thermal labels, receipt rolls, thermal printers, and accessories to pharmacies across Ontario. Best price guaranteed, fast shipping, free tech support.',
  keywords: ['pharmacy supplies', 'thermal labels', 'thermal printers', 'thermal receipt rolls', 'custom pharmacy labels', 'IDA labels', 'Pharmasave labels', 'Toronto', 'Ontario'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${plusJakartaSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
