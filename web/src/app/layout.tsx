import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'FSW Barber',
  description: 'Faça uma reserve nas melhores barbearias da região',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
