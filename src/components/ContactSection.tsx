"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/src/utils/motionVariants";
import { Playfair_Display } from "next/font/google";
import { Phone, MapPin, MessageCircle, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "../../app/actions";
import Button from "@/src/components/Button"; // Importamos tu componente Button corregido

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

// --- CONFIGURACIÓN DE CONTACTO ---
const WHATSAPP_NUMBER = "5493413304892";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola! Me gustaría agendar una consulta de evaluación en Beauty Center Rosario."
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
      if (result.success) {
        setStatus("success");
        setServerMsg("¡Consulta enviada con éxito!");
      } else {
        setStatus("error");
        setServerMsg("Hubo un error al enviar. Reintentá.");
      }
    } catch (error) {
      setStatus("error");
      setServerMsg("Error de conexión.");
    }
  }

  return (
    <section
      className={`relative py-24 sm:py-32 transition-colors duration-500 ${
        isHome ? "bg-white mb-24 sm:mb-40" : "bg-transparent"
      }`}
      id="contacto"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* COLUMNA IZQUIERDA: Info de Contacto */}
          <motion.div
            className="space-y-12"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="space-y-4">
              <h2
                className={`${playfair.className} text-4xl sm:text-5xl text-neutral-900`}
              >
                Comenzá tu{" "}
                <span className="italic font-light text-rose-400">
                  transformación.
                </span>
              </h2>
              <p className="text-neutral-500 text-lg font-light max-w-md leading-relaxed">
                Estamos en el centro de Rosario. Agendá tu consulta de
                evaluación y despejá todas tus dudas.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-rose-400 shadow-sm border border-rose-100">
                  <MapPin size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-neutral-900">Ubicación</h2>
                  <p className="text-neutral-500 font-light text-sm">
                    Castellanos 1556, Rosario.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-full text-rose-400 shadow-sm border border-rose-100">
                  <Phone size={24} />
                </div>
                <div>
                  <h2 className="font-bold text-neutral-900">Teléfono</h2>
                  <p className="text-neutral-500 font-light text-sm">
                    +54 341 330 4892
                  </p>
                </div>
              </div>
            </div>

            {/* BOTÓN WHATSAPP CORREGIDO */}
            <Button
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              className="inline-flex items-center gap-3 px-10 py-5 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-sm tracking-widest uppercase border-none"
            >
              <MessageCircle size={22} />
              Agendar por WhatsApp
            </Button>
          </motion.div>

          {/* COLUMNA DERECHA: Formulario */}
          <motion.div
            className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-2xl shadow-rose-900/5 border border-rose-100"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-6"
              >
                <div className="flex justify-center">
                  <CheckCircle2
                    size={64}
                    className="text-rose-400 animate-bounce"
                  />
                </div>
                <h3
                  className={`${playfair.className} text-3xl text-neutral-900`}
                >
                  {serverMsg}
                </h3>
                <p className="text-neutral-500 italic">
                  Te responderemos a la brevedad.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="text-rose-400 font-bold uppercase text-[10px] tracking-widest border-b-2 border-rose-100 hover:border-rose-400 transition-all"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
                      Nombre
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-rose-300 outline-none transition-all bg-white text-neutral-800 shadow-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-rose-300 outline-none transition-all bg-white text-neutral-800 shadow-sm"
                      placeholder="Tu email"
                    />
                  </div>
                </div>

                <div className="space-y-2 relative">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold ml-1">
                    Tratamiento de interés
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-rose-300 outline-none transition-all bg-white appearance-none text-neutral-600 shadow-sm cursor-pointer"
                  >
                    <option value="">Seleccioná una opción</option>
                    <option value="facial">Armonización Facial</option>
                    <option value="laser">Depilación Láser</option>
                    <option value="corporal">Modelado Corporal</option>
                    <option value="limpieza">Limpieza Profunda</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    className="w-full px-6 py-4 rounded-2xl border border-neutral-200 focus:border-rose-300 outline-none transition-all bg-white text-neutral-800 shadow-sm"
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full py-5 rounded-2xl font-bold uppercase tracking-widest transition-all shadow-lg active:scale-[0.98] ${
                    status === "loading"
                      ? "bg-neutral-400 cursor-not-allowed"
                      : "bg-neutral-900 text-white hover:bg-neutral-800"
                  }`}
                >
                  {status === "loading" ? "Procesando..." : "Enviar Mensaje"}
                </button>

                {status === "error" && (
                  <p className="text-center text-rose-400 text-xs font-bold">
                    {serverMsg}
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
