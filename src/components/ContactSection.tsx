"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/src/utils/motionVariants";
import { Playfair_Display } from "next/font/google";
import {
  Phone,
  MapPin,
  MessageCircle,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { sendEmail } from "@/app/actions";
import Button from "@/src/components/Button";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

// --- CONFIGURACIÓN DE CONTACTO ---
const WHATSAPP_NUMBER = "5493413304892";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola! Me gustaría agendar una consulta de evaluación en Nur Estética Rosario."
);
const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`;

interface ContactSectionProps {
  isHome?: boolean;
}

export default function ContactSection({
  isHome = false,
}: ContactSectionProps) {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [serverMsg, setServerMsg] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    try {
      const result = await sendEmail(formData);

      if (result?.success) {
        setStatus("success");
        setServerMsg("¡Mensaje enviado! Nos pondremos en contacto pronto.");
      } else {
        setStatus("error");
        setServerMsg("Hubo un problema al enviar. Por favor reintentá.");
      }
    } catch (error) {
      setStatus("error");
      setServerMsg("Error de conexión. Probá enviarnos un WhatsApp.");
    }
  }

  return (
    <section
      className={`relative py-24 sm:py-32 transition-colors duration-500 ${
        isHome ? "bg-white mb-0" : "bg-neutral-50"
      }`}
      id="contacto"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* COLUMNA IZQUIERDA: Info de Contacto */}
          <motion.div
            className="space-y-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-xs block">
                Contacto
              </span>
              <h2
                className={`${playfair.className} text-4xl sm:text-5xl text-neutral-900 leading-tight`}
              >
                Comenzá tu <br />
                <span className="italic font-light text-rose-400">
                  transformación.
                </span>
              </h2>
              <p className="text-neutral-600 text-lg font-light max-w-md leading-relaxed pt-4">
                Estamos en el centro de Rosario. Agendá tu consulta de
                evaluación y despejá todas tus dudas con nuestras especialistas.
              </p>
            </div>

            <div className="space-y-8 bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-full text-rose-600">
                  <MapPin size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">Ubicación</h3>
                  <p className="text-neutral-600 font-light text-sm mt-1">
                    Castellanos 1556, Rosario, Santa Fe.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-rose-50 rounded-full text-rose-600">
                  <Phone size={24} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral-900">Teléfono</h3>
                  <p className="text-neutral-600 font-light text-sm mt-1">
                    +54 9 341 330 4892
                  </p>
                </div>
              </div>
            </div>

            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="w-full sm:w-auto inline-flex justify-center items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-xs tracking-widest uppercase border-none"
            >
              <MessageCircle size={20} aria-hidden="true" />
              Agendar por WhatsApp
            </Button>
          </motion.div>

          {/* COLUMNA DERECHA: Formulario */}
          <motion.div
            className="bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-rose-900/10 border border-neutral-100 relative overflow-hidden"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-200 to-rose-500" />

            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-20 space-y-6 flex flex-col items-center justify-center h-full"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle2 size={40} className="text-green-600" />
                </div>
                <h3
                  className={`${playfair.className} text-3xl text-neutral-900`}
                >
                  ¡Mensaje Recibido!
                </h3>
                <p className="text-neutral-500 max-w-xs mx-auto">
                  Gracias por escribirnos. Te vamos a responder a la brevedad
                  para coordinar tu turno.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-rose-600 font-bold uppercase text-xs tracking-widest border-b-2 border-rose-100 hover:border-rose-600 transition-all"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <h3
                  className={`${playfair.className} text-2xl text-neutral-900 mb-6`}
                >
                  Envianos un mensaje
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* CAMPO NOMBRE */}
                  <div className="space-y-2">
                    <label
                      htmlFor="full-name"
                      className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1 cursor-pointer"
                    >
                      Nombre
                    </label>
                    <input
                      id="full-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Tu nombre"
                      className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all bg-neutral-50/50 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>

                  {/* CAMPO EMAIL */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email-address"
                      className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1 cursor-pointer"
                    >
                      Email
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      required
                      placeholder="tu@email.com"
                      className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all bg-neutral-50/50 text-neutral-900 placeholder:text-neutral-400"
                    />
                  </div>
                </div>

                {/* CAMPO TRATAMIENTO (SELECT) */}
                <div className="space-y-2">
                  <label
                    htmlFor="service-select"
                    className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1 cursor-pointer"
                  >
                    Tratamiento de interés
                  </label>
                  <div className="relative">
                    <select
                      id="service-select"
                      name="service"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all bg-neutral-50/50 text-neutral-900 cursor-pointer appearance-none"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Seleccioná una opción...
                      </option>
                      <option value="facial">Armonización Facial</option>
                      <option value="laser">Depilación Láser</option>
                      <option value="corporal">Modelado Corporal</option>
                      <option value="plasma">Plasma Rico En Plaquetas</option>
                      <option value="capilar">Tratamiento Capilar</option>
                      <option value="otro">Otro / Consulta General</option>
                    </select>
                    {/* Icono de flecha custom para el select */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400">
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* CAMPO MENSAJE */}
                <div className="space-y-2">
                  <label
                    htmlFor="form-message"
                    className="text-[10px] uppercase tracking-widest text-neutral-500 font-bold ml-1 cursor-pointer"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="form-message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Contanos qué estás buscando..."
                    className="w-full px-5 py-4 rounded-xl border border-neutral-200 focus:border-rose-500 focus:ring-1 focus:ring-rose-500 outline-none transition-all bg-neutral-50/50 text-neutral-900 placeholder:text-neutral-400 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg active:scale-[0.99] flex justify-center items-center gap-2 ${
                      status === "loading"
                        ? "bg-neutral-400 cursor-not-allowed"
                        : "bg-neutral-900 text-white hover:bg-neutral-800 hover:shadow-xl"
                    }`}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Enviando...
                      </span>
                    ) : (
                      "Enviar Consulta"
                    )}
                  </button>
                </div>

                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-center gap-2 text-rose-600 bg-rose-50 p-3 rounded-lg text-xs font-bold"
                  >
                    <AlertCircle size={16} />
                    {serverMsg}
                  </motion.div>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
