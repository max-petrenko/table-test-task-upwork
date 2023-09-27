import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import type { ReactNode } from 'react'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'], style: ['normal'] })

export const metadata: Metadata = {
  title: 'Maksym\'s Upwork d\'n\'d table assignment',
  description: 'A site that displays my, Maksym Petrenko\'s capabilities in developing using the required stack of Next.js and Tailwind',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={'bg-gradient-to-br from-orange-300 to-amber-300 to-100% ' + poppins.className}>
      <header className='p-5 text-2xl font-bold text-center md:text-left'>
        <h1>Maksym&apos;s test assignment</h1>
      </header>
      <main className='min-h-screen md:p-20 p-10'>
        {children}
      </main>
      </body>
    </html>
  )
}
