"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, fadeIn } from "@/src/utils/motionVariants";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-neutral-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LADO IZQUIERDO: Imágenes */}
          <motion.div
            className="relative"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src="/images/foto-spa-editado.jpg" // Asegurate de tener esta imagen
                alt="Instalaciones Beauty Center"
                fill
                className="object-cover"
              />
            </div>
            {/* Imagen flotante pequeña */}
            <motion.div
              className="absolute -bottom-12 -right-12 hidden md:block w-64 aspect-square overflow-hidden rounded-full border-8 border-neutral-50 shadow-xl"
              variants={fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <Image
                src="/images/aboutsection-final-hd.png" // Tu imagen secundaria
                alt="Detalle"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          {/* LADO DERECHO: Texto */}
          <motion.div
            className="space-y-10"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div>
              <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs block mb-4">
                Nuestra Esencia
              </span>
              <h2
                className={`${playfair.className} text-4xl sm:text-6xl text-neutral-900 leading-tight`}
              >
                Ciencia aplicada al <br />
                <span className="italic text-rose-400">
                  arte de la belleza.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light">
              <p>
                En{" "}
                <strong className="font-medium text-neutral-900">
                  Beauty Center Rosario
                </strong>
                , creemos que la estética no es superficialidad, sino bienestar.
              </p>
              <p>
                Bajo la dirección de profesionales especializados, combinamos la
                calidez humana con protocolos médicos rigurosos. No buscamos
                transformarte en alguien más, sino revelar la versión más
                luminosa y segura de vos misma.
              </p>
            </div>

            {/* Stats Minimalistas */}
            <div className="flex gap-12 pt-8 border-t border-neutral-200">
              <div>
                <span
                  className={`${playfair.className} text-4xl text-neutral-900 block`}
                >
                  15+
                </span>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Años Experiencia
                </span>
              </div>
              <div>
                <span
                  className={`${playfair.className} text-4xl text-neutral-900 block`}
                >
                  1k+
                </span>
                <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                  Pacientes
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
