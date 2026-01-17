import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

// 1. Actualizamos la Interface para incluir slug
interface ServiceCardProps {
  title: string;
  description: string;
  price: number;
  image: string;
  slug: string; // <-- Esto es lo que faltaba
}

export default function ServiceCard({
  title,
  description,
  price,
  image,
  slug,
}: ServiceCardProps) {
  return (
    // Usamos el slug para armar la URL dinámica
    <Link href={`/services/${slug}`} className="group block">
      <div className="relative h-[400px] w-full overflow-hidden rounded-2xl shadow-md transition-all duration-500 group-hover:shadow-xl">
        {/* Imagen de fondo */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

        {/* Contenido de la Card */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
            <h3 className={`${playfair.className} text-3xl text-white mb-2`}>
              {title}
            </h3>

            <div className="h-1 w-12 bg-rose-400 mb-4 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <p className="text-gray-200 text-sm line-clamp-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {description}
            </p>

            <p className="mt-4 text-rose-400 font-semibold text-lg">
              Desde ${new Intl.NumberFormat("es-AR").format(price)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
