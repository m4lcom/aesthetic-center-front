import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. Optimizamos imports para reducir el bundle JS (Tree Shaking)
  experimental: {
    optimizePackageImports: [
      "lucide-react",
      "framer-motion",
      "date-fns",
      "@heroicons/react",
    ],
  },
  // 2. Optimizamos imágenes para reducir el peso en móviles
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 3. Compresión Gzip/Brotli
  compress: true,
  // 4. Desactivamos header de "Powered by Next.js" por seguridad y bytes extra
  poweredByHeader: false,
};

export default nextConfig;
