import type { Metadata } from 'next'
import './globals.css'
import {helvetica} from "@/lib/fonts";

export const metadata: Metadata = {
  title: 'Rembrandt',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-snap-type">
      <body className={helvetica.className}>{children}</body>
    </html>
  )
}
