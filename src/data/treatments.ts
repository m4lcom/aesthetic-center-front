export interface Treatment {
  slug: string;
  title: string;
  description: string;
  fullContent: string;
  image: string;
  price: number;
  items: string[];
}

export const TREATMENTS_DATA: Record<string, Treatment> = {
  faciales: {
    slug: "faciales",
    title: "Estética Facial Avanzada",
    description:
      "Recuperá la frescura y juventud de tu rostro sin pasar por el quirófano.",
    fullContent:
      "Buscamos resaltar tu belleza natural mediante técnicas mínimamente invasivas. Nos especializamos en devolverle al rostro la estructura, firmeza y luminosidad perdida por el paso del tiempo, utilizando productos de alta gama y resultados sutiles pero impactantes.",
    image: "/images/tratamientos-faciales.webp",
    price: 15000,
    items: [
      "Bioestimulación (Skinboosters)",
      "Peelings químicos renovadores",
      "Mesoterapia Francesa",
      "Plasma Rico en plaquetas (PRP)",
      "Exosomas (Regeneración celular)",
      "Hilos Tensores",
      "Limpieza Facial Profunda con Hidratación",
      "Radiofrecuencia reafirmante",
    ],
  },
  "depilacion-laser": {
    slug: "depilacion-laser",
    title: "Depilación Láser Definitiva",
    description:
      "Libertad y suavidad total en tu piel con tecnología de punta.",
    fullContent:
      "Utilizamos el estándar de oro en depilación láser: Soprano Titanium. Un sistema eficaz, seguro y virtualmente indoloro que permite tratar todo tipo de pieles, incluso bronceadas, en cualquier época del año.",
    image: "/images/tratamiento-laser-edit.jpg",
    price: 9000,
    items: [
      "Tecnología Soprano Titanium",
      "Sesiones rápidas y confortables",
      "Efectivo en vello fino y grueso",
      "Resultados visibles desde la 1° sesión",
    ],
  },
  corporales: {
    slug: "corporales",
    title: "Modelado y Armonía Corporal",
    description:
      "Esculpí tu figura y tratá la celulitis con protocolos personalizados.",
    fullContent:
      "Combinamos la potencia de la aparatología médica con técnicas manuales exclusivas. Nuestros protocolos están diseñados para reducir medidas, tonificar tejidos y mejorar drásticamente la apariencia de la piel desde la primera sesión.",
    image: "/images/tratamientos-corporales-3-edit.png",
    price: 18000,
    items: [
      "Ultrasonido de alta potencia",
      "Masajes Modeladores y Reductores",
      "Radiofrecuencia para flacidez",
      "Drenaje Linfático Manual",
      "Ondas Rusas (Tonificación muscular)",
      "Fangoterapia desintoxicante",
      "Maderoterapia (Drenaje profundo)",
      "Mesoterapia reductora",
    ],
  },
  capilares: {
    slug: "capilares",
    title: "Salud y Recuperación Capilar",
    description:
      "Detené la caída y estimulá el crecimiento de un cabello sano y fuerte.",
    fullContent:
      "Abordamos la salud capilar de forma integral. Mediante la bioestimulación folicular y el aporte de nutrientes específicos, logramos frenar el debilitamiento y potenciar la densidad del cabello.",
    image: "/images/tratamientos-capilares.jpg",
    price: 12000,
    items: [
      "Bioestimulación Capilar con PRP",
      "Mesoterapia (Nutrición folicular)",
      "Terapia con Exosomas",
      "Fototerapia LED (Estimulación biológica)",
      "Altafrecuencia bactericida",
      "Masajes de reactivación circulatoria",
    ],
  },
};
