import { MetadataRoute } from "next";
import { TREATMENTS_DATA } from "@/src/data/treatments"; // Asegurate que la ruta sea correcta

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nurestetica.com.ar"; // Cambialo cuando el dominio esté activo

  // Páginas estáticas principales
  const staticRoutes = ["", "/services", "/about", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  // Generación automática basada en tus tratamientos
  const serviceRoutes = Object.keys(TREATMENTS_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
