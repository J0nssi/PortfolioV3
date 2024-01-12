import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Nav from "@/components/Nav"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Joonas Vaija',
  description: 'Portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <body className={inter.className}>
        <ThemeProvider attribute='class' defaultTheme="system">
          {children}
        </ThemeProvider>
        <Toaster/>
        </body>
    </html>
  )
}
