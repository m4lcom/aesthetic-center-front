"use client";
import Button from "@/src/components/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

const WHATSAPP_NUMBER = "5493413304892";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola! Vengo desde la web y me gustaría reservar un turno en Beauty Center."
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
  const isTransparent = isHome && !isScrolled;

  const navLinks = [
    { name: "Servicios", href: "/services" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-0"
          : isTransparent
          ? "bg-transparent py-4"
          : "bg-white py-0"
      }`}
    >
      <nav
        className="mx-auto max-w-7xl px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex h-20 items-center justify-between">
          {/* Logo con contraste rose-600 sobre blanco */}
          <Link href="/" className="group relative z-50">
            <span
              className={`${
                playfair.className
              } text-2xl tracking-tight transition-colors duration-500 ${
                isTransparent ? "text-white" : "text-neutral-900"
              }`}
            >
              Beauty
              <span className={isTransparent ? "text-white" : "text-rose-400"}>
                Center
              </span>
            </span>
          </Link>

          {/* Desktop Links - Usamos neutral-700 y rose-600 */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[12px] font-bold tracking-[0.15em] uppercase transition-colors duration-500 ${
                  pathname === link.href
                    ? "text-rose-400"
                    : isTransparent
                    ? "text-white/90 hover:text-rose-300"
                    : "text-neutral-700 hover:text-rose-600"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Button
              href={whatsappUrl}
              variant="primary"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Reservar turno por WhatsApp"
              className={`rounded-full px-8 py-2.5 text-[11px] tracking-widest uppercase shadow-lg transition-all duration-500 ${
                isTransparent
                  ? "bg-white !text-neutral-900 hover:bg-neutral-100 shadow-none"
                  : "bg-rose-400 hover:bg-rose-700 shadow-rose-200"
              }`}
            >
              Reservar Turno
            </Button>
          </div>

          <button
            className="md:hidden p-2 z-50"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <XMarkIcon className="h-8 w-8 text-neutral-900" />
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform duration-500 ease-in-out ${
          open ? "translate-y-0" : "-translate-y-full"
        } md:hidden z-40 flex flex-col items-center justify-center gap-8`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`${playfair.className} text-4xl text-neutral-900`}
          >
            {link.name}
          </Link>
        ))}
        <Button
          href={whatsappUrl}
          variant="primary"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          aria-label="Reservar turno por WhatsApp"
          className="mt-4 rounded-full px-12 py-4 shadow-xl uppercase tracking-widest text-[11px] font-bold bg-rose-400 text-white"
        >
          Reservar Turno
        </Button>
      </div>
    </header>
  );
}
