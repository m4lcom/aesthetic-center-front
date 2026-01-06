import { TREATMENTS_DATA } from "@/src/data/treatments";
import { notFound } from "next/navigation";
import Image from "next/image";
import Button from "@/src/components/Button";
import { Playfair_Display } from "next/font/google";
import { CheckIcon } from "@heroicons/react/24/outline";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

// 1. SEO DINÁMICO (Lado del Servidor)
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
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  };
}

// 2. SSG: Pre-renderiza todas las páginas en el build para Performance 100
export async function generateStaticParams() {
  return Object.keys(TREATMENTS_DATA).map((slug) => ({
    slug: slug,
  }));
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = TREATMENTS_DATA[slug as keyof typeof TREATMENTS_DATA];

  if (!data) notFound();

  const WHATSAPP_NUMBER = "5493412524242";
  const whatsappMsg = encodeURIComponent(
    `¡Hola Beauty Center! 👋 Me interesa el tratamiento de ${data.title}. ¿Podrían darme más información?`
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMsg}`;

  return (
    <main className="min-h-screen pt-32 pb-20 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-start">
          {/* Columna Imagen - Optimizada para Performance */}
          <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl border-8 border-neutral-50 md:sticky md:top-32 relative">
            <Image
              src={data.image}
              alt={`Tratamiento de ${data.title} en Rosario`}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Columna Contenido - Optimizada para Accesibilidad */}
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

            <div className="space-y-6">
              <p className="text-xl text-neutral-700 leading-relaxed italic border-l-4 border-rose-500 pl-6">
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

            {/* Caja de Acción / Precio con Contraste corregido */}
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <Button
                  href={whatsappUrl}
                  variant="primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-rose-600 hover:bg-rose-700 h-14 text-white font-bold"
                >
                  Consultar WhatsApp
                </Button>
                <Button
                  href="/services"
                  variant="outline"
                  className="border-neutral-700 text-white hover:bg-neutral-800 h-14"
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
