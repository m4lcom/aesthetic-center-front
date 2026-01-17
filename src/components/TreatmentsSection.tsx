"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { fadeInUp, staggerContainer } from "@/src/utils/motionVariants";
import { Playfair_Display } from "next/font/google";
import Button from "@/src/components/Button";
import { TREATMENTS_DATA } from "@/src/data/treatments"; // Importamos los datos reales

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

export default function TreatmentsSection() {
  // Elegimos qué tratamientos mostrar en la home y en qué orden
  const featuredKeys = ["faciales", "depilacion-laser", "corporales"];

  return (
    <>
      <div className="h-[15vh] bg-white w-full" />
      <section
        className="mx-auto max-w-7xl px-6 bg-white mb-32"
        id="tratamientos"
      >
        {/* HEADER */}
        <motion.div
          className="text-center mb-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
            Nuestros Pilares
          </span>
          <h2
            className={`${playfair.className} text-4xl sm:text-6xl text-neutral-900 mb-6`}
          >
            Especialistas en Estética
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            Resultados visibles desde la primera sesión con tecnología de punta.
          </p>
        </motion.div>

        {/* GRILLA DINÁMICA */}
        <motion.div
          className="grid gap-10 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {featuredKeys.map((key) => {
            const item = TREATMENTS_DATA[key];
            return (
              <motion.div
                key={key}
                variants={fadeInUp}
                className="group relative h-[600px] w-full overflow-hidden rounded-[2.5rem] shadow-lg transition-all duration-500 hover:shadow-2xl"
              >
                <Link
                  href={`/services/${item.slug}`}
                  className="block h-full w-full"
                >
                  {/* Imagen con Zoom */}
                  <div className="absolute inset-0 h-full w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                  </div>

                  {/* Contenido */}
                  <div className="absolute inset-0 flex flex-col justify-end p-10">
                    <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                      <span className="text-rose-400 text-xs font-bold uppercase tracking-widest mb-2 block">
                        Tratamiento
                      </span>
                      <h3
                        className={`${playfair.className} text-3xl text-white mb-4 leading-tight`}
                      >
                        {item.title}
                      </h3>
                      {/* Descripción que aparece en hover */}
                      <p className="text-neutral-200 text-sm font-light mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">
                        {item.description}
                      </p>
                      <div className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest border-b border-rose-500 pb-1">
                        Ver Detalles
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="flex justify-center mt-16">
          <Button
            href="/services"
            variant="outline"
            className="border-neutral-300 text-neutral-600 hover:border-rose-600 hover:text-rose-600 px-10 rounded-full"
          >
            Ver todos los servicios
          </Button>
        </div>
      </section>
    </>
  );
}
