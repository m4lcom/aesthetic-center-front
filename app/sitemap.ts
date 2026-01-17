// app/sitemap.ts
import { MetadataRoute } from "next";
import { TREATMENTS_DATA } from "@/src/data/treatments";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://nurestetica.com.ar";

  // 1. Rutas estáticas principales
  // Quitamos la barra inicial de las rutas para unirlas limpiamente con la baseUrl
  const staticRoutes = ["", "services", "about", "contact"].map((route) => ({
    url: `${baseUrl}${route ? `/${route}` : ""}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "daily" : "monthly") as
      | "daily"
      | "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));

  // 2. Generación automática de rutas de servicios
  const serviceRoutes = Object.keys(TREATMENTS_DATA).map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...serviceRoutes];
}
