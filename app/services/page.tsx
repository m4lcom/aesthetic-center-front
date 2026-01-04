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
  // ... tus datos se mantienen igual
  {
    title: "Armonización Facial",
    description: "Un enfoque integral...",
    details: ["Nutrición Intensa", "Efecto Glow", "Bioestimulación Cosmética"],
    image: "/images/tratamientos-faciales-edit.jpg",
  },
  // ... resto de servicios
];

export default function ServicesPage() {
  const scrollToService = (index: number) => {
    const element = document.getElementById(`service-card-${index}`);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      window.scrollTo({
        top: elementRect - bodyRect - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <main className="bg-white">
      {/* 1. HERO */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center bg-white border-b border-neutral-50">
        <div className="mx-auto max-w-7xl px-6 w-full text-left">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.span
              variants={fadeInUp}
              className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs" // Cambiado de rose-400 a 500 para contraste
            >
              Nuestros Tratamientos
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className={`${playfair.className} text-6xl sm:text-8xl text-neutral-900 mt-8 leading-[1.1]`}
            >
              Estética Profesional <br />
              <span className="italic font-light text-neutral-500 text-5xl sm:text-7xl">
                Avanzada.
              </span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-neutral-600 font-light text-lg sm:text-2xl max-w-2xl leading-relaxed" // Cambiado neutral-500 a 600
            >
              Protocolos personalizados que combinan ciencia, tecnología y arte
              para realzar tu belleza natural en Rosario.
            </motion.p>
          </motion.div>
        </div>
        <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-neutral-400 animate-bounce">
          <FaChevronDown size={24} />
        </motion.div>
      </section>

      <div className="h-[12vh] sm:h-[18vh] bg-white w-full" />

      {/* 2. NAVEGACIÓN RÁPIDA (ÍNDICE) */}
      <nav
        className="hidden lg:flex justify-center gap-10 py-6 border-b border-neutral-100 sticky top-20 bg-white/95 backdrop-blur-md z-40"
        aria-label="Navegación de servicios"
      >
        {allServices.map((service, i) => (
          <button
            key={`nav-${i}`}
            onClick={() => scrollToService(i)}
            aria-label={`Desplazarse a ${service.title}`} // Accesibilidad
            className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-600 hover:text-rose-500 transition-colors" // Cambiado de neutral-400 a 600
          >
            {service.title}
          </button>
        ))}
      </nav>

      {/* 3. LISTADO DE SERVICIOS */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "linear-gradient(to bottom, #ffffff 0%, #fef2f2 10%, #fef2f2 90%, #ffffff 100%)",
          }}
        />

        <div className="relative z-10 pt-20 pb-40 sm:pb-64">
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
                  <div className="w-full lg:w-1/2">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2.5rem] shadow-2xl bg-neutral-100">
                      <Image
                        src={service.image}
                        alt={`Tratamiento de ${service.title} en Beauty Center Rosario`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-1/2 space-y-8">
                    {/* CAMBIO CLAVE: h2 para el título del tratamiento */}
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
                          className="flex items-center gap-2 text-sm text-neutral-600 italic" // Cambiado neutral-500 a 600
                        >
                          <span
                            className="h-1 w-1 rounded-full bg-rose-500"
                            aria-hidden="true"
                          />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-4">
                      <Button
                        href="/contact"
                        variant="primary"
                        aria-label={`Consultar sobre ${service.title}`}
                        className="rounded-full px-10"
                      >
                        Consultar Ahora
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA FINAL */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-48 sm:pb-80">
        <div className="bg-neutral-900 rounded-[3rem] py-24 px-8 text-center shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-rose-500/10 to-transparent pointer-events-none" />
          <div className="max-w-3xl mx-auto space-y-10 relative z-10">
            {/* CAMBIO CLAVE: h2 para el título del CTA */}
            <h2
              className={`${playfair.className} text-4xl sm:text-6xl text-white leading-tight`}
            >
              ¿No sabés qué tratamiento <br /> es ideal para vos?
            </h2>
            <p className="text-neutral-300 font-light text-xl">
              Agendá una sesión de diagnóstico.
            </p>
            <div className="pt-6">
              <Link
                href="/contact"
                className="inline-block bg-rose-500 text-white px-14 py-5 rounded-full font-bold uppercase tracking-widest hover:bg-rose-600 hover:-translate-y-1 transition-all shadow-xl shadow-rose-900/40"
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
