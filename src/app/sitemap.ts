import { MetadataRoute } from 'next'
//ACTUALIZAR CON LAS NUEVAS RUTAS ANTES DEL DEPLOT
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://eritissicutdei.cl'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
    },
  ]
}
