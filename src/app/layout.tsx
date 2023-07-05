import { type Metadata } from 'next'

// These styles apply to every route in the application.
import '@/styles/global.css'
import type { ChildrenProp } from '@/types'

export const metadata: Metadata = {
  authors: [{ name: 'Snowball', url: 'https://snowball.xyz' }],
  description: 'PandaCSS repro',
  robots: {
    follow: true,
    index: true,
    nocache: true,
  },
  title: {
    default: 'PandaCSS repro | Snowball',
    template: '%s | PandaCSS repro | Snowball',
  },
}

export default function RootLayout({ children }: ChildrenProp) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  )
}
