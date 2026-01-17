"use client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

// Utilidad para combinar clases sin conflictos (Standard de la industria)
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type ButtonVariant = "primary" | "secondary" | "outline" | "accent" | "neutral";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    // Definimos los estilos base por variante
    primary:
      "bg-rose-600 text-white shadow-sm hover:bg-rose-700 focus:ring-rose-500",
    secondary:
      "bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 focus:ring-neutral-500",
    outline:
      "border border-neutral-300 text-neutral-700 hover:border-rose-600 hover:text-rose-600 focus:ring-rose-400",
    accent:
      "bg-rose-100 text-rose-800 shadow-sm hover:bg-rose-200 focus:ring-rose-300",
    neutral:
      "bg-neutral-200 text-neutral-900 shadow-sm hover:bg-neutral-300 focus:ring-neutral-400",
  };

  // cn() ahora permite que el 'className' que mandás desde la Navbar
  // sobreescriba a 'variants[variant]' sin usar el signo '!' (important)
  const styles = cn(baseStyles, variants[variant], className);

  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={styles}
      type="button" // Buena práctica: evita submits accidentales
      {...(props as any)}
    >
      {children}
    </button>
  );
}
