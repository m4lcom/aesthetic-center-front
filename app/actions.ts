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

  // 4. Envío real a través de Resend
  try {
    const { data, error } = await resend.emails.send({
      from: "Nur Estética <consultas@nurestetica.com.ar>", // Una vez verificado el dominio
      to: ["soniabeatrizmachado66@gmail.com"],
      subject: `✨ Nueva consulta: ${service}`,
      replyTo: email, // Esto permite que si le das a "Responder", le escribas directo al cliente
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333; border: 1px solid #eee; border-radius: 10px;">
          <h2 style="color: #b08d57;">Nueva solicitud de servicio</h2>
          <p>Has recibido un mensaje desde el formulario de la web:</p>
          <hr />
          <p><strong>👤 Nombre:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> ${email}</p>
          <p><strong>💆 Servicio de interés:</strong> ${service}</p>
          <p><strong>💬 Mensaje:</strong></p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px;">
            ${message}
          </div>
          <hr />
          <p style="font-size: 12px; color: #999;">Este correo fue generado automáticamente por el sistema de Nur Estética Rosario.</p>
        </div>
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
