export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 40, // Bajamos un poco el 50 para que el recorrido sea más sutil
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1] as const, // Un 'cubic-bezier' que frena suavemente al final
    },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2 }, // El fade puro debe ser lento para ser elegante
  },
};

export const zoomIn = {
  hidden: { opacity: 0, scale: 0.95 }, // 0.8 es mucho, 0.95 es un 'pop' sutil de lujo
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Los 200ms que hablamos antes
      delayChildren: 0.1, // Pequeño respiro antes de empezar
    },
  },
};
