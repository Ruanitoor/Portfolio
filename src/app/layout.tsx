import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './styles/globals.css'

const inter = Poppins({ subsets: ['latin'], weight: ['400','500','600','700','800'] })

export const metadata: Metadata = {
  title: 'Ruanitoor',
  description: 'Ruan Pardim do Nascimento',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
