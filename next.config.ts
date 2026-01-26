import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Optimización de librerías pesadas para reducir JS inicial
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "date-fns"],
  },
  // 2. Optimización de imágenes para WebP/AVIF (Mejora LCP)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
  },
  // 3. Compresión para reducir transferencia de red
  compress: true,
  // 4. Headers de seguridad y caché
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
