"use client";

import { useActionState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp } from "@/src/utils/motionVariants";
import { Playfair_Display } from "next/font/google";
import {
  Phone,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";
import { sendEmail } from "@/app/actions";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "700" });

interface ContactSectionProps {
  isHome?: boolean;
  showMap?: boolean; // Nueva prop para controlar la visibilidad del mapa
}

export default function ContactSection({
  isHome = false,
  showMap = true,
}: ContactSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  useEffect(() => {
    if (state?.success) {
      formRef.current?.reset();
    }
  }, [state]);

  return (
    <section
      className={`relative py-24 ${isHome ? "bg-white" : "bg-neutral-50"}`}
      id="contacto"
    >
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div
          className={`grid grid-cols-1 ${showMap ? "lg:grid-cols-2" : "max-w-2xl mx-auto"} gap-16 items-start`}
        >
          {/* COLUMNA IZQUIERDA: Info + Mapa (Solo si showMap es true) */}
          {showMap && (
            <motion.div
              className="space-y-10"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <span className="text-rose-500 font-bold tracking-[0.3em] uppercase text-[10px] block">
                  Ubicación
                </span>
                <h2
                  className={`${playfair.className} text-4xl text-neutral-900`}
                >
                  Te esperamos en <br />{" "}
                  <span className="italic font-light text-rose-400">
                    Rosario.
                  </span>
                </h2>
              </div>

              <div className="relative h-64 w-full rounded-3xl overflow-hidden border border-neutral-100 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.4411477142714!2d-60.669145623455985!3d-32.93933587122119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab4784a0d8d7%3A0x6295550a255018a1!2sCastellanos%201556%2C%20S2000%20Rosario%2C%20Santa%20Fe!5e0!3m2!1ses-419!2sar!4v1705600000000!5m2!1ses-419!2sar"
                  className="absolute inset-0 w-full h-full border-0 premium-map"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                  <div className="p-2 bg-rose-50 text-rose-500 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <p className="text-xs text-neutral-600 font-medium">
                    Castellanos 1556
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-neutral-100 shadow-sm">
                  <div className="p-2 bg-rose-50 text-rose-500 rounded-lg">
                    <Phone size={20} />
                  </div>
                  <p className="text-xs text-neutral-600 font-medium">
                    +54 9 341 330 4892
                  </p>
                </div>
              </div>
            </motion.div>
          )}

          {/* COLUMNA DERECHA: Formulario */}
          <motion.div
            className={`bg-white p-8 sm:p-10 rounded-[2.5rem] shadow-2xl shadow-rose-900/5 border border-neutral-100 relative ${!showMap ? "w-full" : ""}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {/* ... resto del formulario igual al que ya tenías ... */}
            <AnimatePresence mode="wait">
              {state?.success ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-6"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto text-green-500">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className={`${playfair.className} text-2xl`}>
                    ¡Consulta Recibida!
                  </h3>
                  <p className="text-neutral-500 text-sm">
                    Sonia se pondrá en contacto con vos pronto.
                  </p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-rose-500 font-bold text-[10px] uppercase tracking-widest border-b border-rose-200"
                  >
                    Enviar otro
                  </button>
                </motion.div>
              ) : (
                <form
                  key="form"
                  action={formAction}
                  ref={formRef}
                  className="space-y-5"
                >
                  {/* Inputs de nombre, email, select y mensaje aquí */}
                  <div className="space-y-4">
                    <div className="group">
                      <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
                        Nombre Completo
                      </label>
                      <input
                        name="name"
                        type="text"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-500/5 transition-all outline-none"
                        placeholder="Ej: Maria García"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
                        Email de contacto
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-rose-300 focus:ring-4 focus:ring-rose-500/5 transition-all outline-none"
                        placeholder="tu@email.com"
                      />
                    </div>
                    <div className="group">
                      <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
                        Tratamiento de interés
                      </label>
                      <select
                        name="service"
                        required
                        className="w-full px-5 py-4 rounded-xl border border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-rose-300 transition-all outline-none appearance-none cursor-pointer"
                      >
                        <option value="" disabled selected>
                          Seleccioná un servicio...
                        </option>
                        <option value="facial">Armonización Facial</option>
                        <option value="laser">Depilación Láser</option>
                        <option value="corporal">Modelado Corporal</option>
                        <option value="otro">Consulta General</option>
                      </select>
                    </div>
                    <div className="group">
                      <label className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold ml-1">
                        Tu mensaje
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        required
                        className="w-full px-5 py-4 rounded-xl border border-neutral-100 bg-neutral-50/50 focus:bg-white focus:border-rose-300 transition-all outline-none resize-none"
                        placeholder="¿En qué podemos ayudarte?"
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full py-5 rounded-xl font-bold uppercase tracking-[0.2em] text-[10px] bg-neutral-900 text-white hover:bg-rose-500 transition-all flex justify-center items-center gap-3"
                  >
                    {isPending ? (
                      <Loader2 className="animate-spin" size={16} />
                    ) : (
                      "Enviar Consulta"
                    )}
                  </button>

                  {state?.success === false && (
                    <div className="flex items-center gap-2 text-rose-500 bg-rose-50 p-3 rounded-lg text-[10px] font-bold">
                      <AlertCircle size={14} /> {state.message}
                    </div>
                  )}
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
