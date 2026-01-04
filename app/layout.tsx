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
  metadataBase: new URL("https://aesthetic-center-front.vercel.app"),
  title: {
    default: "Beauty Center | Estética Avanzada en Rosario",
    template: "%s | Beauty Center Rosario", // Esto hace que tus subpáginas se vean pro en Google
  },
  description:
    "Especialistas en armonización facial, depilación láser y modelado corporal en el centro de Rosario. Agendá tu consulta de evaluación hoy.",
  keywords: [
    "estética rosario",
    "depilación láser rosario",
    "tratamientos faciales rosario",
    "Beauty Center Rosario",
  ],
  authors: [{ name: "Malcom" }],
  alternates: {
    canonical: "./", // Usar ruta relativa ayuda a evitar problemas de trailing slashes
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
