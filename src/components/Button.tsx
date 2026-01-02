"use client";

import clsx from "clsx";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

// 1. Definimos las variantes permitidas
type ButtonVariant = "primary" | "secondary" | "outline" | "accent" | "neutral";

// 2. Extendemos de "a" para que herede todas las propiedades de un link (target, rel, etc.)
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
  ...props // 3. Capturamos todas las demás props (target, rel, etc.)
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-rose-400 text-white shadow-sm hover:bg-rose-500 focus:ring-rose-500",
    secondary:
      "bg-neutral-900 text-white shadow-sm hover:bg-neutral-800 focus:ring-neutral-500",
    outline:
      "border border-neutral-200 text-neutral-600 hover:border-rose-300 hover:text-rose-500 focus:ring-rose-400",
    accent:
      "bg-rose-100 text-rose-700 shadow-sm hover:bg-rose-200 focus:ring-rose-300",
    neutral:
      "bg-neutral-200 text-neutral-900 shadow-sm hover:bg-neutral-300 focus:ring-neutral-400",
  };

  const styles = clsx(baseStyles, variants[variant], className);

  // Si hay href, renderizamos un Link de Next.js
  if (href) {
    return (
      <Link href={href} className={styles} {...props}>
        {children}
      </Link>
    );
  }

  // Si no hay href, renderizamos un botón común
  return (
    <button
      onClick={onClick}
      className={styles}
      {...(props as any)} // Cast temporal para evitar conflictos de tipos entre 'a' y 'button'
    >
      {children}
    </button>
  );
}
