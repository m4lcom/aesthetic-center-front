import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap", // Mejora el Performance (evita el "flicker" de fuentes)
});

export const metadata = {
  title: {
    default: "Beauty Center | Estética Avanzada en Rosario",
    template: "%s | Beauty Center",
  },
  description:
    "Especialistas en armonización facial, depilación láser soprano y tratamientos corporales en Rosario.",
  keywords: [
    "Estética Rosario",
    "Depilación Láser",
    "Armonización Facial",
    "Medicina Estética",
    "Tratamientos Corporales",
    "Beauty Center",
    "Plasma Rico en Plaquetas",
    "Limpieza Facial",
    "Modelado Corporal",
    "Peeling",
  ],
  openGraph: {
    title: "Beauty Center Rosario",
    description: "Resaltamos tu belleza natural con tecnología de vanguardia.",
    url: "https://aesthetic-center-front.vercel.app/",
    siteName: "Beauty Center",
    images: [
      {
        url: "/og-image.jpg", // Deberías poner una imagen linda de 1200x630 en /public
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Aseguramos que el lang esté siempre presente (Vital para Accesibilidad)
    <html lang="es" className={`${montserrat.variable} scroll-smooth`}>
      <body className="flex min-h-screen flex-col font-sans antialiased text-neutral-900 bg-white">
        <Navbar />
        {/* Usar etiquetas semánticas ayuda a los lectores de pantalla */}
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
