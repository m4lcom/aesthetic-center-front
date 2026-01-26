import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Metadata } from "next";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Fundamental para evitar FOUT/FOIT
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nurestetica.com.ar"),
  title: {
    default: "Nur Estética | Tratamientos Avanzados en Rosario",
    template: "%s | Nur Estética",
  },
  description:
    "Centro de estética integral en Rosario. Especialistas en depilación láser, armonización facial y tratamientos corporales personalizados.",
  keywords: [
    "Nur Estética",
    "Estética Rosario",
    "Depilación Láser Rosario",
    "Armonización Facial",
    "Tratamientos Corporales",
  ],
  verification: {
    google: "pEhSOETSfpHseZzWOQfxpxVEaD_g2sdW37ca9heF37w",
  },
  openGraph: {
    title: "Nur Estética Rosario",
    description: "Resaltamos tu belleza natural con tecnología de vanguardia.",
    url: "https://nurestetica.com.ar",
    siteName: "Nur Estética",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "Nur Estética",
    image: "https://nurestetica.com.ar/og-image.jpg",
    description: "Centro de estética integral en Rosario.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rosario",
      addressRegion: "Santa Fe",
      addressCountry: "AR",
    },
    url: "https://nurestetica.com.ar",
    telephone: "+5493413304892",
    priceRange: "$$",
  };

  return (
    <html lang="es" className={`${montserrat.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans antialiased text-neutral-900 bg-white">
        {/* ANALYTICS OPTIMIZADO: Carga diferida (lazyOnload) para no bloquear LCP */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

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
