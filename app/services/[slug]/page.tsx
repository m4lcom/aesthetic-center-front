"use client";
import { TREATMENTS_DATA } from "@/src/data/treatments";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/src/components/Button";
import { Playfair_Display } from "next/font/google";
import { CheckIcon } from "@heroicons/react/24/outline";
import { use } from "react";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

// Configuración de contacto centralizada
const WHATSAPP_NUMBER = "5493412524242";

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // En Next.js 15, params es una promesa
  const { slug } = use(params);
  const data = TREATMENTS_DATA[slug as keyof typeof TREATMENTS_DATA];

  if (!data) notFound();

  // Generamos el mensaje dinámico para WhatsApp
  const whatsappMsg = encodeURIComponent(
    `¡Hola Beauty Center! 👋 Me interesa el tratamiento de ${data.title}. ¿Podrían darme más información sobre turnos y asesoramiento?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-start">
          {/* Columna Imagen con Borde de Marca */}
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-8 border-white md:sticky md:top-32 relative">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Columna Contenido */}
          <div className="flex flex-col space-y-10">
            <div>
              <span className="text-rose-400 font-bold tracking-widest uppercase text-xs">
                Tratamiento Especializado
              </span>
              <h1
                className={`${playfair.className} text-4xl lg:text-5xl text-neutral-900 mt-2 leading-tight`}
              >
                {data.title}
              </h1>
            </div>

            <div className="space-y-6">
              {/* Ajustamos el borde a rose-400 para consistencia */}
              <p className="text-xl text-neutral-600 leading-relaxed italic border-l-4 border-rose-400 pl-6">
                "{data.description}"
              </p>

              <div className="prose prose-neutral max-w-none">
                <p className="text-neutral-600 text-lg leading-relaxed whitespace-pre-line">
                  {data.fullContent}
                </p>
              </div>
            </div>

            {/* LISTA DE PROCEDIMIENTOS */}
            <div className="space-y-6">
              <h3 className={`${playfair.className} text-2xl text-neutral-800`}>
                ¿Qué incluye este servicio?
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-neutral-100 transition-all hover:border-rose-200"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-rose-400 stroke-[3]" />
                    </div>
                    <span className="text-neutral-700 text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Caja de Acción / Precio */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-neutral-100 space-y-6">
              <div className="flex items-baseline justify-between">
                <span className="text-neutral-500 font-medium text-sm uppercase tracking-wider">
                  Inversión desde
                </span>
                <span className="text-3xl font-bold text-neutral-900">
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                  }).format(data.price)}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Button
                  href={whatsappUrl}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="justify-center h-14 text-base shadow-rose-200 shadow-xl bg-rose-400 hover:bg-rose-500"
                >
                  Consultar WhatsApp
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  className="justify-center h-14 text-base border-neutral-200 text-neutral-600 hover:border-rose-400 hover:text-rose-500"
                >
                  Ver otros servicios
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
