"use client";
import Button from "@/src/components/Button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Playfair_Display } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion"; // Import motion from framer-motion

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const WHATSAPP_NUMBER = "5493413304892";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola Nur Estética! Vengo desde la web y me gustaría reservar un turno.",
);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);

    // Bloqueo de scroll cuando el menú está abierto
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [open]); // Escuchamos cambios en 'open'

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled && !open;

  const navLinks = [
    { name: "Servicios", href: "/services" },
    { name: "Nosotros", href: "/about" },
    { name: "Contacto", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
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
            className="group relative z-[110] flex items-center gap-1"
            onClick={() => setOpen(false)}
          >
            <span
              className={`${playfair.className} text-2xl transition-colors duration-500 ${isTransparent ? "text-white" : "text-neutral-900"}`}
            >
              <span className="font-light tracking-[0.2em] uppercase">Nur</span>
            </span>
            <span
              className={`${playfair.className} text-2xl font-bold transition-colors duration-500 ${isTransparent ? "text-white" : "text-rose-500"}`}
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
                className={`text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 relative group ${pathname === link.href ? "text-rose-500" : isTransparent ? "text-white/90 hover:text-white" : "text-neutral-600 hover:text-rose-500"}`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full ${isTransparent ? "bg-white" : "bg-rose-400"} ${pathname === link.href ? "w-full" : ""}`}
                />
              </Link>
            ))}
            <Button
              href={whatsappUrl}
              variant="primary"
              target="_blank"
              className={`rounded-full px-8 py-3 text-[11px] font-bold tracking-widest uppercase transition-all duration-500 ${isTransparent ? "bg-white !text-neutral-900" : "bg-rose-500 text-white"}`}
            >
              Reservar Turno
            </Button>
          </div>

          {/* Mobile Menu Button - Aumentamos Z-INDEX para que siempre esté arriba */}
          <button
            className="md:hidden p-2 z-[110] focus:outline-none relative"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <XMarkIcon className="h-8 w-8 text-neutral-900 transition-transform duration-300" />
            ) : (
              <Bars3Icon
                className={`h-8 w-8 transition-colors duration-500 ${isTransparent ? "text-white" : "text-neutral-900"}`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out md:hidden z-[100] ${
          open
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
        style={{ height: "100vh", width: "100vw" }} // Forzamos medidas por estilo
      >
        <div className="flex flex-col h-full w-full bg-white px-8 pt-28 pb-10">
          {/* Links de Navegación con espacio entre ellos */}
          <nav className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={false}
                animate={open ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${playfair.className} text-5xl text-neutral-900 active:text-rose-500`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="my-10 w-12 h-[2px] bg-rose-200" />

          {/* Botón y contacto en la parte baja */}
          <div className="space-y-8">
            <Button
              href={whatsappUrl}
              variant="primary"
              target="_blank"
              onClick={() => setOpen(false)}
              className="w-full rounded-full py-5 text-sm font-bold bg-rose-500 text-white shadow-xl shadow-rose-200"
            >
              RESERVAR TURNO
            </Button>

            <div className="space-y-1">
              <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-bold">
                Rosario, Santa Fe
              </p>
              <p className="text-neutral-600 font-light">Castellanos 1556</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
