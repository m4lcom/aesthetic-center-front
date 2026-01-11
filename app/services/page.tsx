"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { fadeInUp, staggerContainer } from "@/src/utils/motionVariants";
import { FaChevronDown } from "react-icons/fa";
import Button from "@/src/components/Button";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const allServices = [
  {
    slug: "faciales",
    title: "Estética Facial Avanzada",
    description:
      "Recuperá la frescura y juventud de tu rostro con protocolos de bioestimulación y renovación celular profunda.",
    details: ["Bioestimulación", "Efecto Glow", "Hilos Tensores"],
    image: "/images/tratamientos-faciales.webp",
  },
  {
    slug: "capilares",
    title: "Salud y Recuperación Capilar",
    description:
      "Detené la caída y estimulá el crecimiento. Combinamos ciencia y nutrición folicular para resultados reales.",
    details: ["Mesoterapia", "Terapia Exosomas", "Densidad Real"],
    image: "/images/tratamientos-capilares.jpg",
  },
  {
    slug: "depilacion-laser",
    title: "Depilación Láser Definitiva",
    description:
      "Tecnología Soprano Titanium: el estándar de oro para una piel suave, sin vello y sin dolor todo el año.",
    details: ["Sistema Indoloro", "Todo el año", "Piel Suave"],
    image: "/images/tratamiento-laser-edit.jpg",
  },
  {
    slug: "corporales",
    title: "Modelado y Armonía Corporal",
    description:
      "Esculpí tu figura y mejorá la textura de tu piel con tecnologías de reducción y tonificación muscular.",
    details: ["Reducción", "Tonificación", "Maderoterapia"],
    image: "/images/tratamientos-corporales-3-edit.png",
  },
];

export default function ServicesPage() {
  const scrollToService = (index: number) => {
    const element = document.getElementById(`service-card-${index}`);
    if (element) {
      const offset = 140;
      const elementRect = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementRect - offset, behavior: "smooth" });
    }
  };

  return (
    <main className="bg-white">
      {/* 1. HERO */}
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
              className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs"
            >
              Nuestros Tratamientos
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className={`${playfair.className} text-6xl sm:text-8xl text-neutral-900 mt-8 leading-[1.1]`}
            >
              Estética Profesional <br />
              <span className="italic font-light text-neutral-600 text-5xl sm:text-7xl">
                Avanzada.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-neutral-700 font-light text-lg sm:text-2xl max-w-2xl leading-relaxed"
            >
              En Rosario, transformamos tu cuidado personal en una experiencia
              de bienestar y resultados visibles.
            </motion.p>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 animate-bounce">
          <FaChevronDown size={24} />
        </div>
      </section>

      {/* 2. NAVEGACIÓN RÁPIDA */}
      <nav className="hidden lg:flex justify-center gap-10 py-6 border-b border-neutral-100 sticky top-20 bg-white/95 backdrop-blur-md z-40">
        {allServices.map((service, i) => (
          <button
            key={`nav-${i}`}
            onClick={() => scrollToService(i)}
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700 hover:text-rose-600 transition-colors"
          >
            {service.title}
          </button>
        ))}
      </nav>

      {/* 3. LISTADO DE SERVICIOS CON HOVER EFFECTS */}
      <section className="relative z-10 pt-20 pb-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="space-y-32 sm:space-y-48">
            {allServices.map((service, index) => (
              <motion.div
                key={`service-${index}`}
                id={`service-card-${index}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUp}
                className={`flex flex-col gap-12 lg:items-center ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Contenedor de Imagen con Efecto Hover */}
                <div className="w-full lg:w-1/2 group">
                  <Link href={`/services/${service.slug}`}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl bg-neutral-100 cursor-pointer">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Overlay sutil al hacer hover */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-1/2 space-y-8">
                  <h2
                    className={`${playfair.className} text-4xl text-neutral-900`}
                  >
                    {service.title}
                  </h2>
                  <p className="text-neutral-700 text-lg leading-relaxed font-light">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-4">
                    {service.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-sm text-neutral-700 italic"
                      >
                        <span
                          className="h-1 w-1 rounded-full bg-rose-600"
                          aria-hidden="true"
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Button
                      href={`/services/${service.slug}`}
                      variant="primary"
                      className="rounded-full px-10 bg-rose-500 text-white shadow-xl shadow-rose-200 hover:shadow-rose-300 transition-all"
                    >
                      Ver detalles
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 pb-48">
        <div className="bg-neutral-900 rounded-[3rem] py-24 px-8 text-center shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-rose-600/5 group-hover:bg-rose-600/10 transition-colors duration-700" />
          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            <h2
              className={`${playfair.className} text-4xl sm:text-6xl text-white`}
            >
              ¿No sabés qué tratamiento <br className="hidden sm:block" /> es
              ideal para vos?
            </h2>
            <p className="text-neutral-300 font-light text-xl">
              Agendá una sesión de diagnóstico con nuestras especialistas.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-rose-500 text-white px-14 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-rose-700 hover:-translate-y-1 transition-all shadow-xl shadow-rose-900/40"
              >
                Solicitar Diagnóstico
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
