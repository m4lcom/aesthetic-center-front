"use client";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import AboutSection from "@/src/components/AboutSection";
import { fadeInUp, staggerContainer } from "@/src/utils/motionVariants";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const values = [
  {
    title: "Excelencia Profesional",
    desc: "Protocolos basados en formación continua y años de experiencia en estética avanzada.",
  },
  {
    title: "Sutileza Estética",
    desc: "Buscamos resultados que realcen tu belleza natural de forma armónica.",
  },
  {
    title: "Tecnología de Punta",
    desc: "Equipamiento de última generación para resultados visibles y seguros.",
  },
];

export default function NosotrosPage() {
  return (
    <main className="bg-white">
      {/* 1. HERO FULL SCREEN (Estandarizado) */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-white border-b border-neutral-50">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeInUp}
              className="text-rose-400 font-bold tracking-[0.3em] uppercase text-xs"
            >
              Conocenos
            </motion.span>

            <motion.h1
              variants={fadeInUp}
              className={`${playfair.className} text-6xl sm:text-8xl text-neutral-900 mt-8 leading-[1.1]`}
            >
              Compromiso con tu <br />
              <span className="italic font-light text-neutral-400 text-5xl sm:text-7xl">
                bienestar integral.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-8 text-neutral-500 font-light text-lg sm:text-2xl max-w-2xl leading-relaxed"
            >
              En nuestro centro, combinamos tecnología de vanguardia con un
              enfoque humano para resaltar tu mejor versión en el corazón de
              Rosario.
            </motion.p>
          </motion.div>
        </div>

        {/* Indicador de scroll sutil */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-300 animate-bounce"
        >
          <FaChevronDown size={24} />
        </motion.div>
      </section>

      {/* 2. AboutSection con Degradados (El "clima" rosa) */}
      <div className="relative">
        {/* Degradado Superior (Blanco a Rosa) */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10" />

        <AboutSection />

        {/* Degradado Inferior (Rosa a Blanco) */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
      </div>

      {/* 3. Valores: Transición suave hacia el blanco puro */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 sm:gap-24">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="h-px w-12 bg-rose-300" />
                <h3
                  className={`${playfair.className} text-2xl text-neutral-900`}
                >
                  {value.title}
                </h3>
                <p className="text-neutral-500 font-light text-lg leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Final: Estilo "Floating Card" */}
      <section className="mx-auto max-w-7xl px-6 mt-20 mb-40 sm:mb-56">
        <div className="bg-neutral-900 rounded-[3rem] py-24 px-8 text-center shadow-2xl relative overflow-hidden">
          {/* Brillo sutil de fondo */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-rose-500/10 to-transparent pointer-events-none" />

          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <h2
              className={`${playfair.className} text-4xl sm:text-6xl text-white leading-tight`}
            >
              ¿Lista para dar el <br /> primer paso?
            </h2>
            <p className="text-neutral-400 font-light text-xl">
              Agendá una sesión de diagnóstico y diseñemos juntos tu plan de
              tratamiento personalizado.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-rose-400 text-white px-14 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-rose-600 hover:-translate-y-1 transition-all shadow-xl shadow-rose-900/40"
              >
                Contactanos ahora
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
