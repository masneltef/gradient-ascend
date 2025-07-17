import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'GradientAscend - Your Vision. Our Code.',
  description: 'We help graduating students turn their final year project ideas into fully developed digital solutions — fast, secure, and tailored to university standards.',
  keywords: 'final year project, web development, mobile app, AI, machine learning, cybersecurity, Kigali, Rwanda',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}