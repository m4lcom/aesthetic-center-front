import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nurestetica.com.ar"), // Define la base para todas las imágenes y links
  title: {
    default: "Nur Estética | Tratamientos Avanzados en Rosario",
    template: "%s | Nur Estética",
  },
  description:
    "Centro de estética integral en Rosario. Especialistas en depilación láser, armonización facial y tratamientos corporales personalizados. Tecnología de vanguardia.",
  keywords: [
    "Nur Estética",
    "Estética Rosario",
    "Depilación Láser Rosario",
    "Armonización Facial",
    "Tratamientos Corporales",
    "Limpieza Facial Profunda",
    "Medicina Estética",
  ],
  openGraph: {
    title: "Nur Estética Rosario",
    description:
      "Resaltamos tu belleza natural con tecnología de vanguardia y atención personalizada.",
    url: "https://nurestetica.com.ar",
    siteName: "Nur Estética",
    images: [
      {
        url: "/og-image.jpg", // Asegurate de tener esta foto en la carpeta public
        width: 1200,
        height: 630,
        alt: "Nur Estética - Centro de Belleza en Rosario",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema para SEO Local (Google Maps y Rich Snippets)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Nur Estética",
    image: "https://nurestetica.com.ar/og-image.jpg",
    description:
      "Centro de estética integral en Rosario especializado en tratamientos faciales y corporales.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    url: "https://nurestetica.com.ar",
    telephone: "+5493413304892", // Tu número de WhatsApp
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <html lang="es" className={`${montserrat.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans antialiased text-neutral-900 bg-white">
        {/* Inyección del Schema JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
          <SpeedInsights />
        </main>

        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
