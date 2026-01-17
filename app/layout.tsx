// app/layout.tsx
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Tipado de metadatos para mejor DX
export const metadata: Metadata = {
  metadataBase: new URL("https://nurestetica.com.ar"),
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
  verification: {
    google: "pEhSOETSfpHseZzWOQfxpxVEaD_g2sdW37ca9heF37w",
  },
  openGraph: {
    title: "Nur Estética Rosario",
    description:
      "Resaltamos tu belleza natural con tecnología de vanguardia y atención personalizada.",
    url: "https://nurestetica.com.ar",
    siteName: "Nur Estética",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nur Estética - Centro de Belleza en Rosario",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nur Estética Rosario",
    description:
      "Tratamientos estéticos avanzados con tecnología de vanguardia.",
    images: ["/og-image.jpg"],
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
  // Obtenemos el ID de Analytics desde las variables de entorno
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

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
    telephone: "+5493413304892",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <html lang="es" className={`${montserrat.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans antialiased text-neutral-900 bg-white">
        {/* Solo renderizamos el componente si la variable de entorno existe */}
        {gaId && <GoogleAnalytics gaId={gaId} />}

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

        <Footer />
      </body>
    </html>
  );
}
