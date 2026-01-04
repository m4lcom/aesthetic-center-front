import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Beauty Center | Estética Avanzada en Rosario",
  description:
    "Especialistas en armonización facial, depilación láser y modelado corporal en el centro de Rosario. Agendá tu consulta de evaluación hoy.",
  keywords: [
    "estética rosario",
    "depilación láser rosario",
    "plasma rico en plaquetas rosario",
    "limpieza facial",
    "peelings rosario",
    "microdermoabrasión",
    "tratamientos corporales rosario",
    "modelado corporal",
    "rejuvenecimiento facial",
    "rellenos dérmicos",
    "hilos tensores rosario",
    "consultas estéticas rosario",
    "centro de estética avanzada",
    "belleza y bienestar rosario",
    "tratamientos personalizados rosario",
  ],
  authors: [{ name: "Malcom" }],
  metadataBase: new URL("https://aesthetic-center-front.vercel.app"),
  alternates: {
    canonical: "/",
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
  return (
    <html lang="es" className={montserrat.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
