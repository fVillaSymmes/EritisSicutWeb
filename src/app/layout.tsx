import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { body, heading } from './utils/fonts'
import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: 'Eritis Sicut Dei',
  //Revisar metadata con nickVayolence
  description:
    'Fundación Eritis Sicut Dei para rescate y promoción de la cultura y las artes',
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
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
