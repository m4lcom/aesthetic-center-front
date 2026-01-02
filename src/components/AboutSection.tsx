"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, fadeIn } from "@/src/utils/motionVariants";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function AboutSection() {
  return (
    <section className="relative py-32 sm:py-40 overflow-hidden">
      {/* 1. FONDO CON DEGRADADO INTEGRADO: Blanco -> Rosa -> Blanco */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, #ffffff 0%, #fef2f2 15%, #fef2f2 85%, #ffffff 100%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LADO IZQUIERDO: Fotografía y Composición */}
          <motion.div
            className="relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* CUADRADO DECORATIVO */}
            <div className="absolute -top-12 -left-12 w-72 h-72 bg-white rounded-[3rem] -z-10 shadow-sm opacity-80 blur-[2px]" />

            {/* IMAGEN PRINCIPAL */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/30">
              <Image
                src="/images/interior.jpg"
                alt="Nuestra Clínica"
                fill
                className="object-cover"
              />
            </div>

            {/* IMAGEN DE LA PROFESIONAL */}
            <motion.div
              className="absolute -bottom-10 -right-8 hidden sm:block w-80 aspect-video overflow-hidden rounded-2xl shadow-2xl border-[12px] border-white"
              variants={fadeInUp}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <Image
                src="/images/aboutsection-final-hd.png"
                alt="Atención personalizada"
                fill
                className="object-cover object-[center_20%]"
              />
            </motion.div>
          </motion.div>

          {/* LADO DERECHO: Texto Editorial */}
          <motion.div
            className="space-y-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <span className="text-rose-400 font-bold tracking-[0.3em] uppercase text-xs block">
                Nuestra Filosofía
              </span>
              <h2
                className={`${playfair.className} text-4xl sm:text-5xl text-neutral-900 leading-tight`}
              >
                Ciencia avanzada aplicada al{" "}
                <span className="italic font-light text-rose-500/80">
                  arte de la belleza.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light">
              <p>
                En{" "}
                <span className="text-neutral-900 font-medium italic">
                  Beauty Center Rosario
                </span>
                , entendemos que cada tratamiento es un camino hacia la
                confianza personal. No buscamos cambiar quién sos, sino
                potenciar tu mejor versión.
              </p>
              <p>
                Bajo la dirección de profesionales formados en la excelencia,
                combinamos protocolos de vanguardia con un trato humano y
                detallista. En nuestro espacio, la seguridad y la armonía
                estética van de la mano.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-rose-300/40">
              <div>
                <p
                  className={`${playfair.className} text-4xl text-rose-500 mb-1`}
                >
                  10+
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold">
                  Años de Trayectoria
                </p>
              </div>
              <div>
                <p
                  className={`${playfair.className} text-4xl text-rose-500 mb-1`}
                >
                  5k+
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-bold">
                  Pacientes Felices
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
