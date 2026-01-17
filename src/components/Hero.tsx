"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/src/components/Button";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#1a0f0f]">
      {/* CONTENEDOR DE IMAGEN: Recuperamos la calidez */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 15, ease: "easeOut" }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/hero-bg-edit.jpg"
            alt="Interior de Nur Estética Rosario - Ambiente de estética avanzada"
            fill
            priority
            className="object-cover opacity-85 scale-x-[-1] saturate-[1.15] contrast-[1.05]"
          />
        </motion.div>

        {/* GRADIENTE CÁLIDO: Protege el texto sin ensuciar la foto */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1a0f0f] via-transparent to-transparent opacity-80"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
      </div>

      <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex justify-start items-center h-full">
        <div className="max-w-4xl text-left space-y-8 mt-20">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-block text-rose-200 font-bold tracking-[0.4em] uppercase text-[10px] sm:text-xs border-b border-rose-300/30 pb-2"
          >
            Nur Estética Rosario
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`${playfair.className} text-5xl sm:text-7xl md:text-8xl text-white leading-[1.1]`}
          >
            Tu belleza, <br />
            <span className="italic font-light text-rose-100/90">
              naturalmente
            </span>{" "}
            única.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-neutral-100 font-light max-w-xl leading-relaxed"
          >
            Protocolos estéticos de vanguardia diseñados para resaltar tu mejor
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
              aria-label="Reservar un turno en Nur Estética"
              className="px-12 py-5 text-xs tracking-widest uppercase rounded-full bg-white !text-neutral-900 hover:bg-rose-200 transition-colors duration-300 shadow-xl shadow-rose-950/40 border-none font-bold"
            >
              Reservar Turno
            </Button>

            <Button
              variant="outline"
              href="/services"
              aria-label="Ver todos los tratamientos disponibles"
              className="px-12 py-5 text-xs tracking-widest uppercase rounded-full border-white/40 text-white hover:bg-rose-200 hover:text-neutral-900 backdrop-blur-md transition-all duration-300 font-bold"
            >
              Ver Tratamientos
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
