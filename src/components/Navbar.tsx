"use client";
import Button from "@/src/components/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const WHATSAPP_NUMBER = "5493413304892";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola Nur Estética! Vengo desde la web y me gustaría reservar un turno."
);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled && !open;

  const navLinks = [
    { name: "Servicios", href: "/services" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled || open
          ? "bg-white/95 backdrop-blur-md border-neutral-100 py-2 shadow-sm"
          : isTransparent
          ? "bg-transparent border-transparent py-6"
          : "bg-white border-neutral-100 py-2"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex h-16 items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="group relative z-50 flex items-center gap-1"
            onClick={() => setOpen(false)}
          >
            <span
              className={`${
                playfair.className
              } text-2xl transition-colors duration-500 ${
                isTransparent ? "text-white" : "text-neutral-900"
              }`}
            >
              <span className="font-light tracking-[0.2em] uppercase">Nur</span>
            </span>
            <span
              className={`${
                playfair.className
              } text-2xl font-bold transition-colors duration-500 ${
                isTransparent ? "text-white" : "text-rose-500"
              }`}
            >
              Estética
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${
                  pathname === link.href
                    ? "text-rose-500"
                    : isTransparent
                    ? "text-white/90 hover:text-white"
                    : "text-neutral-600 hover:text-rose-500"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${
                    isTransparent ? "bg-white" : "bg-rose-400"
                  } ${pathname === link.href ? "w-full" : ""}`}
                />
              </Link>
            ))}

            <Button
              href={whatsappUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar turno por WhatsApp"
              className={`rounded-full px-8 py-3 text-[11px] font-bold tracking-widest uppercase shadow-lg transition-all duration-500 transform hover:scale-105 border-none ${
                isTransparent
                  ? "bg-white !text-neutral-900 hover:bg-neutral-100 shadow-none"
                  : "bg-rose-500 text-white hover:bg-rose-600 shadow-rose-200/50"
              }`}
            >
              Reservar Turno
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 z-50 focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <XMarkIcon className="h-8 w-8 text-neutral-900 transition-transform duration-300 rotate-90" />
            ) : (
              <Bars3Icon
                className={`h-8 w-8 transition-colors duration-500 ${
                  isTransparent ? "text-white" : "text-neutral-900"
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl transition-all duration-500 ease-in-out ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        } md:hidden z-40 flex flex-col items-center justify-center gap-10`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`${playfair.className} text-4xl text-neutral-900 hover:text-rose-500 transition-colors`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="w-16 h-[1px] bg-neutral-200" />

        <Button
          href={whatsappUrl}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="rounded-full px-12 py-4 shadow-xl uppercase tracking-widest text-xs font-bold bg-rose-500 text-white hover:bg-rose-600 transition-colors border-none"
        >
          Reservar Turno
        </Button>
      </div>
    </header>
  );
}
