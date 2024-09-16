import { Oswald, Lato } from 'next/font/google'

const oswald_init = Oswald({
  subsets: ['latin'],
  variable: '--font-headings',
})

const lato_init = Lato({
  subsets: ['latin'],
  variable: '--font-body',
  weight: '300',
})

export const heading = oswald_init.variable
export const body = lato_init.variable

// Headings: Playfair Display / Body: Raleway

// Headings: Montserrat / Body: Merriweather
// Mejor que la anterior

// Headings: Oswald / Body: Lato

// Headings: Cormorant Garamond / Body: Open Sans

// Headings: Libre Baskerville / Body: Source Sans Pro
