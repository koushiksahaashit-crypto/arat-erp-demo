import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Uprokritoo - Inventory Management',
  description: 'Arat Wholesale Business Inventory Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
