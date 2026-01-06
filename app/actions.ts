"use server";
import { Resend } from "resend";

// 1. Instanciamos Resend con la API Key desde el proceso de entorno
// Para que esto funcione, crea un archivo llamado .env en la raíz de tu proyecto
// y poné: RESEND_API_KEY=re_tu_clave_aqui
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  // 2. Extraemos los datos y los aseguramos como strings
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const service = formData.get("service") as string; // Agregamos el select
  const message = formData.get("message") as string;

  // 3. Validación básica de seguridad en el servidor
  if (!name || !email || !message) {
    return {
      success: false,
      message: "Por favor, completa todos los campos requeridos.",
    };
  }

  try {
    // 4. Envío real a través de Resend
    const { data, error } = await resend.emails.send({
      from: "BeautyCenter <onboarding@resend.dev>", // Dominio de prueba de Resend
      to: ["soniabeatrizmachado66@gmail.com"], // <--- CAMBIÁ ESTO POR TU MAIL REAL
      subject: `Nueva Consulta: ${service} - ${name}`,
      text: `
        Has recibido una nueva consulta desde la web:
        
        Nombre: ${name}
        Email: ${email}
        Servicio: ${service}
        Mensaje: ${message}
      `,
    });

    if (error) {
      console.error("Error de Resend:", error);
      return {
        success: false,
        message: "No pudimos enviar el mail. Intentá nuevamente más tarde.",
      };
    }

    return {
      success: true,
      message: `¡Gracias ${name}! Recibimos tu consulta por ${service}.`,
    };
  } catch (error) {
    console.error("Error crítico en Server Action:", error);
    return {
      success: false,
      message: "Error de conexión con el servicio de correo.",
    };
  }
}
