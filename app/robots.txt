import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/private/'], // Rutas que no queremos en Google
    },
    sitemap: 'https://nurestetica.com.ar/sitemap.xml',
  };
}