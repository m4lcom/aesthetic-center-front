"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/src/components/Button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function Hero() {
  return (
    /* Cambiamos h-[90vh] por h-screen (100vh) para asegurar cobertura total */
    <section className="relative h-screen min-h-[750px] w-full flex items-center justify-center overflow-hidden bg-white">
      {/* Fondo con movimiento suave */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero-bg-edit.jpg"
          alt="Beauty Center Rosario"
          fill
          priority
          className="object-cover -scale-x-100"
        />
        {/* Overlay con gradiente para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex justify-start">
        <div className="max-w-3xl text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-block text-rose-400 font-bold tracking-[0.3em] uppercase text-[10px] sm:text-xs mb-6"
          >
            Ciencia y Arte Estético
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${playfair.className} text-5xl md:text-8xl text-white leading-[1.1] mb-8`}
          >
            Tu belleza, <br />
            <span className="italic font-light text-rose-200">
              naturalmente
            </span>{" "}
            única.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-100/90 max-w-xl mb-12 leading-relaxed font-light"
          >
            Descubrí en Rosario tratamientos personalizados de última generación
            diseñados para resaltar tu mejor versión.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5"
          >
            <Button
              variant="primary"
              href="/contact"
              className="px-10 py-5 text-xs tracking-widest uppercase bg-rose-400 hover:bg-rose-500 shadow-xl shadow-rose-900/20 rounded-full transition-all"
            >
              Reservar Turno
            </Button>
            <Button
              variant="outline"
              href="/services"
              className="px-10 py-5 text-xs tracking-widest uppercase border-white/40 text-white hover:bg-white hover:text-neutral-900 rounded-full backdrop-blur-sm transition-all"
            >
              Ver Servicios
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll sutil para invitar a bajar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/0 via-white/50 to-white/0 animate-pulse" />
      </motion.div>
    </section>
  );
}
