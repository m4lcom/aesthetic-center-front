import { TREATMENTS_DATA } from "@/src/data/treatments";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/src/components/Button";
import { Playfair_Display } from "next/font/google";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// 1. SEO DINÁMICO OPTIMIZADO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = TREATMENTS_DATA[slug as keyof typeof TREATMENTS_DATA];
  if (!data) return { title: "Servicio no encontrado" };

  return {
    title: `${data.title} | Nur Estética Rosario`,
    description: `${data.description} Especialistas en estética avanzada en Rosario.`,
    alternates: {
      canonical: `https://nurestetica.com.ar/services/${slug}`,
    },
    openGraph: {
      title: `${data.title} | Nur Estética`,
      images: [data.image],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(TREATMENTS_DATA).map((slug) => ({ slug }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = TREATMENTS_DATA[slug as keyof typeof TREATMENTS_DATA];

  if (!data) notFound();

  const otherServices = Object.values(TREATMENTS_DATA).filter(
    (s) => s.slug !== slug
  );

  // Configuración de contacto
  const WHATSAPP_NUMBER = "5493413304892";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola Nur Estética! Me interesa info sobre el tratamiento: ${data.title}`
  )}`;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white selection:bg-rose-100">
      <div className="mx-auto max-w-6xl px-6">
        {/* SECCIÓN PRINCIPAL */}
        <div className="grid gap-12 lg:gap-20 md:grid-cols-2 items-start mb-32">
          {/* Lado Izquierdo: Imagen con efecto de profundidad */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-neutral-100 shadow-2xl md:sticky md:top-32">
            <Image
              src={data.image}
              alt={`${data.title} - Nur Estética Rosario`}
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority // Crucial para el 99/100 de Lighthouse
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Lado Derecho: Contenido */}
          <div className="flex flex-col space-y-12">
            <div>
              <nav className="flex items-center gap-2 mb-4 text-[10px] uppercase tracking-[0.3em] text-rose-500 font-bold">
                <span>Servicios</span>
                <span className="text-neutral-300">/</span>
                <span>{data.title}</span>
              </nav>
              <h1
                className={`${playfair.className} text-5xl lg:text-7xl text-neutral-900 leading-[1.1]`}
              >
                {data.title}
              </h1>
            </div>

            {/* Quote con diseño editorial */}
            <blockquote className="relative">
              <span className="absolute -top-4 -left-2 text-7xl text-rose-100 font-serif">
                “
              </span>
              <p className="relative text-2xl text-neutral-800 leading-relaxed font-light">
                {data.description}
              </p>
            </blockquote>

            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-600 text-lg leading-relaxed whitespace-pre-line border-t border-neutral-100 pt-8">
                {data.fullContent}
              </p>
            </div>

            {/* Lista de beneficios con mejor espaciado */}
            <div className="space-y-8">
              <h2 className={`${playfair.className} text-3xl text-neutral-900`}>
                Detalles del servicio
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {data.items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 bg-neutral-50/50 p-4 rounded-2xl border border-neutral-100 transition-colors hover:bg-white hover:border-rose-200"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center">
                      <CheckIcon className="h-5 w-5 text-rose-500" />
                    </div>
                    <span className="text-neutral-700 text-sm font-medium leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Card de CTA Premium */}
            <div className="bg-neutral-900 p-10 rounded-[3rem] shadow-2xl space-y-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-3xl -mr-10 -mt-10" />

              <div className="flex flex-col gap-2 relative z-10">
                <span className="text-rose-400 font-semibold text-xs uppercase tracking-widest">
                  Precio del tratamiento
                </span>
                <span className="text-5xl font-light">
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0,
                  }).format(data.price)}
                </span>
              </div>

              <Button
                href={whatsappUrl}
                variant="primary"
                target="_blank"
                className="w-full h-16 text-lg tracking-wide rounded-2xl group-hover:scale-[1.02] transition-transform"
              >
                Agendar Turno
              </Button>
            </div>
          </div>
        </div>

        {/* OTROS TRATAMIENTOS - Diseño más minimalista */}
        <section className="border-t border-neutral-100 pt-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className={`${playfair.className} text-4xl text-neutral-900`}>
                Seguí explorando
              </h2>
              <p className="text-neutral-500 mt-2">
                Otros tratamientos que podrían interesarte
              </p>
            </div>
            <Link
              href="/services"
              className="text-rose-600 font-bold text-sm uppercase tracking-widest hover:text-rose-700 transition-colors border-b-2 border-rose-100 pb-1"
            >
              Ver todos los servicios
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] bg-neutral-100 mb-6 shadow-sm group-hover:shadow-xl transition-all duration-500">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/20 transition-colors duration-500" />
                </div>
                <h3
                  className={`${playfair.className} text-xl text-neutral-900 group-hover:text-rose-600 transition-colors`}
                >
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-sm mt-2 line-clamp-2">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
