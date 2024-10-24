import type { MetadataRoute } from 'next'
//ACTUALIZAR CON LAS NUEVAS RUTAS ANTES DEL DEPLOT
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://eritissicutdei.cl'
  return {
    rules: { userAgent: '*', allow: ['/'], disallow: [] },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
