"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/src/components/Button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-neutral-900">
      {/* FONDO CON EFECTO ZOOM SUAVE */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "easeOut" }} // Animación muy lenta y cinematográfica
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero-bg-edit.jpg" // Asegurate que esta imagen sea de alta calidad
            alt="Beauty Center Rosario - Estética Avanzada"
            fill
            priority
            className="object-cover opacity-70"
          />
        </motion.div>
        {/* Gradiente crucial para el contraste del texto blanco (SEO 100) */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/40 to-neutral-900/60" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex justify-start items-center h-full">
        <div className="max-w-4xl text-left space-y-8 mt-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-rose-300 font-bold tracking-[0.4em] uppercase text-xs border-b border-rose-300/30 pb-2"
          >
            Medicina Estética en Rosario
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${playfair.className} text-5xl sm:text-7xl md:text-8xl text-white leading-[1.1]`}
          >
            Tu belleza, <br />
            <span className="italic font-light text-rose-100 opacity-90">
              naturalmente
            </span>{" "}
            única.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-200 font-light max-w-xl leading-relaxed"
          >
            Protocolos médicos de vanguardia diseñados para resaltar tu mejor
            versión en un entorno de seguridad y confort.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 pt-4"
          >
            <Button
              variant="primary"
              href="/contact"
              className="px-12 py-5 text-xs tracking-widest uppercase bg-rose-600 hover:bg-rose-700 text-white shadow-2xl shadow-rose-900/50 rounded-full"
            >
              Reservar Turno
            </Button>
            <Button
              variant="outline"
              href="/services"
              className="px-12 py-5 text-xs tracking-widest uppercase border-white/30 text-white hover:bg-white hover:text-neutral-900 rounded-full backdrop-blur-sm"
            >
              Ver Tratamientos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
