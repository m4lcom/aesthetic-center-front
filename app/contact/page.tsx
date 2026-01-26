"use client";

import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import { fadeInUp, staggerContainer } from "@/src/utils/motionVariants";
import ContactSection from "@/src/components/ContactSection";
import { FaMapMarkerAlt, FaChevronDown } from "react-icons/fa";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* 1. HERO FULL SCREEN - Optimizado para LCP */}
      <section className="relative h-screen min-h-[700px] flex items-center bg-white border-b border-neutral-50">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-4xl">
            {/* El span puede mantener la animación porque es pequeño */}
            <motion.span
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="text-rose-400 font-bold tracking-[0.3em] uppercase text-xs block"
            >
              Comenzá tu transformación
            </motion.span>

            {/* H1 OPTIMIZADO: Sin motion.h1 para que Google lo detecte como LCP instantáneo */}
            <h1
              className={`${playfair.className} text-6xl sm:text-8xl text-neutral-900 mt-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-1000`}
            >
              Estamos para <br />
              <span className="italic font-light text-neutral-400 text-5xl sm:text-7xl">
                asesorarte.
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-8 text-neutral-500 font-light text-lg sm:text-2xl max-w-2xl leading-relaxed"
            >
              Te invitamos a nuestro espacio en Rosario para diseñar juntos un
              plan de estética avanzada adaptado a tus necesidades.
            </motion.p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-300 animate-bounce"
        >
          <FaChevronDown size={24} />
        </motion.div>
      </section>

      {/* Espaciador mínimo de transición */}
      <div className="h-4 sm:h-8 bg-white w-full" />

      {/* 2. ZONA DE FORMULARIO - Con mapa interno desactivado */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, #ffffff 0%, #fef2f2 10%, #fef2f2 90%, #ffffff 100%)",
          }}
        />

        <div className="relative z-10 py-16 sm:py-24">
          {/* showMap={false} evita la duplicidad de mapas en la misma página */}
          <ContactSection isHome={false} showMap={false} />
        </div>
      </section>

      <div className="h-[5vh] sm:h-[8vh] bg-white w-full" />

      {/* 3. MAPA DE UBICACIÓN - Optimizado para Accesibilidad */}
      <section className="mx-auto max-w-7xl px-6 mb-32 sm:mb-48">
        <div className="space-y-10 text-left">
          <div className="space-y-4">
            <h2
              className={`${playfair.className} text-4xl sm:text-5xl text-neutral-900 tracking-tight`}
            >
              Nuestra Ubicación
            </h2>
            <div className="flex items-center gap-3 text-neutral-500 text-lg font-light">
              <FaMapMarkerAlt className="text-rose-400 shrink-0" />
              <p>Castellanos 1556, Rosario, Santa Fe.</p>
            </div>
          </div>

          <div className="w-full h-[550px] bg-neutral-100 rounded-[3.5rem] overflow-hidden shadow-2xl relative border border-neutral-100 grayscale hover:grayscale-0 transition-all duration-1000 group">
            <iframe
              title="Mapa de ubicación detallado de Nur Estética Rosario" // Requisito de Accesibilidad
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.513425442526!2d-60.6724395!3d-32.9374163!2m3!1f0!2f0!3f0!3m2!1i1024!2i268!4f13.1!3m3!1m2!1s0x95b7aca939e072b9%3A0xc62261906a23746d!2sCastellanos%201556%2C%20S2002%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1700000000000!5m2!1ses-419!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-70 group-hover:opacity-100 transition-opacity duration-700"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
