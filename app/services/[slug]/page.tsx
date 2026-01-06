import { TREATMENTS_DATA } from "@/src/data/treatments";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/src/components/Button";
import { Playfair_Display } from "next/font/google";
import { CheckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

// 1. SEO DINÁMICO
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = TREATMENTS_DATA[slug as keyof typeof TREATMENTS_DATA];
  if (!data) return { title: "Servicio no encontrado" };

  return {
    title: `${data.title} | Beauty Center Rosario`,
    description: data.description,
    alternates: {
      canonical: `https://aesthetic-center-front.vercel.app/services/${slug}`,
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

  // Filtrar otros servicios para la navegación inferior
  const otherServices = Object.values(TREATMENTS_DATA).filter(
    (s) => s.slug !== slug
  );

  const WHATSAPP_NUMBER = "5493412524242";
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hola! Me interesa info sobre ${data.title}`
  )}`;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* SECCIÓN PRINCIPAL: DETALLE */}
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-start mb-32">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-8 border-neutral-50 md:sticky md:top-32 relative">
            <Image
              src={data.image}
              alt={data.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          <div className="flex flex-col space-y-10">
            <div>
              <span className="text-rose-600 font-bold tracking-widest uppercase text-xs">
                Tratamiento Especializado
              </span>
              <h1
                className={`${playfair.className} text-4xl lg:text-6xl text-neutral-900 mt-2 leading-tight`}
              >
                {data.title}
              </h1>
            </div>

            <p className="text-xl text-neutral-700 leading-relaxed italic border-l-4 border-rose-500 pl-6">
              "{data.description}"
            </p>

            <div className="prose prose-neutral max-w-none">
              <p className="text-neutral-600 text-lg leading-relaxed whitespace-pre-line">
                {data.fullContent}
              </p>
            </div>

            <div className="space-y-6">
              <h2 className={`${playfair.className} text-2xl text-neutral-900`}>
                ¿Qué incluye este servicio?
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 bg-neutral-50 p-4 rounded-xl border border-neutral-100 transition-all hover:border-rose-200"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-rose-100 flex items-center justify-center">
                      <CheckIcon className="h-4 w-4 text-rose-600 stroke-[3]" />
                    </div>
                    <span className="text-neutral-800 text-sm font-medium">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-neutral-900 p-8 rounded-[2rem] shadow-2xl space-y-6 text-white">
              <div className="flex items-baseline justify-between">
                <span className="text-neutral-400 font-medium text-sm uppercase tracking-wider">
                  Inversión desde
                </span>
                <span className="text-3xl font-bold">
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
                rel="noopener noreferrer"
                className="w-full bg-rose-600 hover:bg-rose-700 h-14 text-white font-bold"
              >
                Consultar WhatsApp
              </Button>
            </div>
          </div>
        </div>

        {/* NUEVA SECCIÓN: OTROS TRATAMIENTOS */}
        <section className="border-t border-neutral-100 pt-20">
          <h2
            className={`${playfair.className} text-3xl text-neutral-900 mb-12 text-center`}
          >
            Explorá otros tratamientos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {otherServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block space-y-4"
              >
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-100 shadow-md transition-all duration-500 group-hover:shadow-xl">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-500">
                      Ver Detalles
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-medium text-neutral-900 group-hover:text-rose-600 transition-colors">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
