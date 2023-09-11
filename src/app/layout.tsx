import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google Clone Next js 13',
  description: 'Google clone created by Next js 13',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <link rel="icon" href="/favicon.svg" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
