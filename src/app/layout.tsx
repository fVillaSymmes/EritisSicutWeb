import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { body, heading } from './utils/fonts'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: {
    default: 'Eritis Sicut Dei',
    template: '%s - Eritis Sicut Dei  ',
  },
  //Revisar metadata con nickVayolence
  description:
    'Fundación Eritis Sicut Dei para el rescate y promoción de la cultura y las artes',
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${heading} ${body}`}>
        <Navbar />
        {children}
        <Toaster />
        <Footer />
      </body>
    </html>
  )
}
