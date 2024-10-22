import { Libre_Baskerville, Source_Sans_3 } from 'next/font/google'

const libre_Baskerville_init = Libre_Baskerville({
  subsets: ['latin'],
  variable: '--font-headings',
  weight: '400',
})

const source_Sans_3_init = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-body',
})

export const heading = libre_Baskerville_init.variable
export const body = source_Sans_3_init.variable

// Headings: Playfair Display / Body: Raleway

// Headings: Montserrat / Body: Merriweather
// Mejor que la anterior

// Headings: Oswald / Body: Lato

// Headings: Cormorant Garamond / Body: Open Sans

// Headings: Libre Baskerville / Body: Source Sans Pro
