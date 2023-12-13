import type { Metadata } from 'next'
import { Caveat, Rowdies } from 'next/font/google'
import './globals.css'

const caveat = Caveat({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--caveat-font'
});
const rowdies = Rowdies({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  display: 'swap',
  variable: '--rowdies-font'
})


export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${rowdies.variable} ${caveat.variable}`}>


      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  )
}
