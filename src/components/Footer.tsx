"use client";
import LinkNext from "next/link";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Servicios", href: "/services" },
  { name: "Nosotros", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // Recuperamos el azul profundo que te gustó
    <footer className="bg-neutral-900 text-white pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* 1. Brand & Bio */}
          <div className="space-y-6">
            <LinkNext
              href="/"
              className={`${playfair.className} text-2xl tracking-tight text-white uppercase flex items-center group`}
            >
              <span className="font-light tracking-[0.2em]">Nur</span>
              <span className="text-rose-400 font-bold ml-1 transition-colors group-hover:text-rose-300">
                Estética
              </span>
            </LinkNext>
            <p className="text-neutral-200 text-sm leading-relaxed font-light">
              Profesionales en estética avanzada en Rosario. Comprometidos con
              resaltar tu armonía natural a través de ciencia y tecnología.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-rose-500 hover:border-rose-500 transition-all shadow-lg hover:-translate-y-1"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://wa.me/5493413304892"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-green-600 hover:border-green-600 transition-all shadow-lg hover:-translate-y-1"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* 2. Navegación: Aclaramos fuentes para contraste */}
          <div>
            <h2 className="font-bold text-white uppercase text-xs tracking-[0.2em] mb-8">
              Explorar
            </h2>
            <ul className="space-y-4">
              {navigation.map((item) => (
                <li key={item.name}>
                  <LinkNext
                    href={item.href}
                    className="text-neutral-200 hover:text-rose-400 text-sm transition-colors font-medium inline-block"
                  >
                    {item.name}
                  </LinkNext>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Horarios: Labels en Rose para coherencia */}
          <div>
            <h2 className="font-bold text-white uppercase text-xs tracking-[0.2em] mb-8">
              Atención
            </h2>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-rose-300 font-bold text-[10px] uppercase tracking-widest">
                  Lunes a Viernes
                </span>
                <span className="text-white font-light">09:00 — 20:00 hs</span>
              </li>
              <li className="flex flex-col">
                <span className="text-rose-300 font-bold text-[10px] uppercase tracking-widest">
                  Sábados
                </span>
                <span className="text-white font-light">09:00 — 13:00 hs</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter: El botón "Unirse" mejorado */}
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
                required
                aria-label="Tu email"
                placeholder="Tu email"
                className="bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-rose-400 transition-colors placeholder:text-neutral-400 outline-none"
              />
              {/* BOTÓN UNIRSE: Blanco puro para máximo contraste y elegancia */}
              <button
                type="submit"
                className="bg-white text-neutral-900 rounded-xl py-3 text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-rose-500 hover:text-white transition-all duration-300 shadow-xl shadow-black/20 active:scale-95"
              >
                Unirse
              </button>
            </form>
          </div>
        </div>

        {/* Barra inferior: Textos aclarados */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-neutral-200 uppercase tracking-widest">
            © {currentYear} Nur Estética Rosario.
          </p>
          <div className="flex gap-8 text-[11px] text-neutral-200 uppercase tracking-widest font-medium">
            <LinkNext
              href="/privacy"
              className="hover:text-rose-400 transition-colors"
            >
              Privacidad
            </LinkNext>
            <LinkNext
              href="/terms"
              className="hover:text-rose-400 transition-colors"
            >
              Términos
            </LinkNext>
          </div>
        </div>
      </div>
    </footer>
  );
}
