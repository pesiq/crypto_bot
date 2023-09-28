import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Dashboard } from '@/components/dashboard'
import { Sidebar } from '@/components/sidebar'


const inter = Inter({ subsets: ['latin', 'cyrillic'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}




export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider 
          attribute='class'
          defaultTheme='dark'
          enableSystem
          disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
    </html>
  )
}