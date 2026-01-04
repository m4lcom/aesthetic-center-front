"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer } from "@/src/utils/motionVariants";
import { Playfair_Display } from "next/font/google";
import Button from "@/src/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const treatments = [
  {
    title: "Estética\nFacial Avanzada",
    description:
      "Recuperá la firmeza y luminosidad de tu piel con resultados naturales.",
    image: "/images/tratamientos-faciales-edit.jpg",
    link: "/services",
    cta: "Explorar Faciales",
  },
  {
    title: "Depilación\nLáser Definitiva",
    description:
      "Tecnología Soprano para una piel suave y libre de vello todo el año.",
    image: "/images/tratamiento-laser-edit.jpg",
    link: "/services",
    cta: "Ver Tecnología",
  },
  {
    title: "Modelado\nCorporal Médico",
    description:
      "Esculpí tu figura y eliminá celulitis con protocolos avanzados.",
    image: "/images/tratamientos-corporales-3-edit.png",
    link: "/services",
    cta: "Ver Protocolos",
  },
];

export default function TreatmentsSection() {
  return (
    <>
      {/* ESPACIADOR SUPERIOR: Incrementado a 24vh para separar del Hero (+20%) */}
      <div className="h-[18vh] sm:h-[24vh] bg-white w-full" />

      <motion.section
        className="mx-auto max-w-7xl px-6 bg-white"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        id="tratamientos"
      >
        {/* HEADER DE SECCIÓN */}
        <motion.div className="text-center mb-32 sm:mb-40" variants={fadeInUp}>
          <h2
            className={`${playfair.className} text-4xl sm:text-6xl font-bold text-rose-400 tracking-tight`}
          >
            Especialistas en Medicina Estética
          </h2>
          <div className="mt-8 h-1.5 w-20 bg-rose-200 mx-auto rounded-full" />
          <p className="mt-10 text-lg sm:text-2xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed italic">
            Buscamos resaltar la luminosidad de la juventud de una forma segura
            y poco invasiva.
          </p>
        </motion.div>

        {/* GRILLA DE TRATAMIENTOS */}
        <div className="grid gap-16 lg:gap-24 md:grid-cols-3 mb-32 sm:mb-48">
          {treatments.map((treatment, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="group relative aspect-[4/5] w-full overflow-hidden rounded-[3.5rem] shadow-sm transition-all duration-700 hover:shadow-2xl cursor-pointer"
            >
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:blur-[2px]"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-10 pb-14">
                <div className="translate-y-24 transition-transform duration-500 ease-out group-hover:translate-y-0">
                  <div className="min-h-[100px] flex items-end mb-6">
                    <h3
                      className={`${playfair.className} text-3xl sm:text-4xl text-white whitespace-pre-line leading-tight`}
                    >
                      {treatment.title}
                    </h3>
                  </div>
                  <div className="opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
                    <p className="text-neutral-100 text-base mb-10 font-light leading-relaxed">
                      {treatment.description}
                    </p>
                    <Button
                      href={treatment.link}
                      variant="primary"
                      className="w-full justify-center bg-white !text-neutral-900 hover:bg-rose-50 border-none shadow-xl py-4 rounded-2xl font-bold"
                    >
                      {treatment.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
