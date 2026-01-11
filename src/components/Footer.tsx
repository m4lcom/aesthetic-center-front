"use client";
import LinkNext from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Nosotros", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-900 text-neutral-200 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        {/* Grilla Principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* 1. Brand & Bio */}
          <div className="space-y-6">
            <LinkNext
              href="/"
              className={`${playfair.className} text-2xl tracking-tight text-white uppercase`}
            >
              BEAUTY<span className="text-rose-400">CENTER</span>{" "}
              {/* Subido a rose-500 */}
            </LinkNext>
            <p className="text-neutral-300 text-sm leading-relaxed font-light">
              {" "}
              {/* neutral-400 -> 300 */}
              Profesionales en estética avanzada en Rosario. Comprometidos con
              resaltar tu armonía natural a través de ciencia y tecnología.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white hover:text-rose-500 hover:border-rose-500 transition-all shadow-lg"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/5493412524242"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white hover:text-rose-500 hover:border-rose-500 transition-all shadow-lg"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* 2. Navegación */}
          <div>
            <h2 className="font-bold text-white uppercase text-xs tracking-[0.2em] mb-8">
              Explorar
            </h2>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <LinkNext
                    href={item.href}
                    className="text-neutral-300 hover:text-rose-500 text-sm transition-colors font-light"
                  >
                    {item.name}
                  </LinkNext>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Horarios - Ajustados para Contraste 100/100 */}
          <div>
            <h2 className="font-bold text-white uppercase text-xs tracking-[0.2em] mb-8">
              Atención
            </h2>
            <ul className="space-y-4 text-sm font-light">
              <li className="flex flex-col">
                <span className="text-neutral-300 text-[11px] uppercase tracking-tighter font-medium">
                  Lunes a Viernes
                </span>
                <span className="text-white">09:00 — 20:00 hs</span>
              </li>
              <li className="flex flex-col">
                <span className="text-neutral-300 text-[11px] uppercase tracking-tighter font-medium">
                  Sábados
                </span>
                <span className="text-white">09:00 — 13:00 hs</span>
              </li>
              <li className="text-neutral-300 italic pt-2">
                {" "}
                {/* Subido a neutral-300 */}
                Domingos y Feriados: Cerrado
              </li>
            </ul>
          </div>

          {/* 4. Newsletter */}
          <div className="space-y-6">
            <h2 className="font-bold text-white uppercase text-xs tracking-[0.2em] mb-8">
              Novedades
            </h2>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                aria-label="Tu email para novedades"
                placeholder="Tu email"
                className="bg-neutral-800 border border-neutral-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-500 transition-colors placeholder:text-neutral-400 outline-none"
              />
              <button className="bg-rose-500 text-white rounded-xl py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-rose-700 active:scale-95 transition-all shadow-md">
                Unirse
              </button>
            </form>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-neutral-300 uppercase tracking-widest">
            {" "}
            {/* neutral-500 -> 300 */}© {currentYear} Beauty Center Rosario.
            Todos los derechos reservados.
          </p>
          <div className="flex gap-8 text-[11px] text-neutral-300 uppercase tracking-widest">
            {" "}
            {/* neutral-600 -> 300 */}
            <LinkNext
              href="/privacy"
              className="hover:text-rose-500 transition-colors"
            >
              Privacidad
            </LinkNext>
            <LinkNext
              href="/terms"
              className="hover:text-rose-500 transition-colors"
            >
              Términos
            </LinkNext>
          </div>
        </div>
      </div>
    </footer>
  );
}
