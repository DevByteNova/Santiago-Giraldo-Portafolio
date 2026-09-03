/* global process */

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    // Validación
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    // Validación básica del email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address.",
      });
    }

    // Limitar tamaño de los datos
    if (
      name.length > 100 ||
      email.length > 150 ||
      message.length > 5000
    ) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["bytenovax@gmail.com"],
      replyTo: email,
      subject: `New transmission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <hr />

          <p><strong>Message:</strong></p>

          <p>${message.replace(/\n/g, "<br>")}</p>

          <hr />

          <p style="color: #666;">
            Sent from your personal portfolio.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send message.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Message sent successfully.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
}