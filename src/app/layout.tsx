import type { Metadata } from 'next'
import { Abel, Alfa_Slab_One } from 'next/font/google'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import './globals.css'

const abel = Abel({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--abel-font'
});
const alfaSlabOne = Alfa_Slab_One({
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
  variable: '--alfa-slab-one-font'
})


export const metadata: Metadata = {
  title: 'Architecture',
  description: 'Architecture page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${abel.variable} ${alfaSlabOne.variable}`}>
      <body>{children}</body>
    </html>
  )
}
