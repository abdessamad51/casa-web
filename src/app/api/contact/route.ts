import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, service, budget, message, honeypot } = body;

    // Spam check — honeypot field must be empty
    if (honeypot) {
      return NextResponse.json({ ok: true });
    }

    // Basic validation
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (message.length < 20) {
      return NextResponse.json({ error: "Message too short" }, { status: 400 });
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "no-reply@casa-web.ma";
    const toEmail = process.env.CONTACT_EMAIL || "contact@casa-web.ma";
    const apiKey = process.env.RESEND_API_KEY;

    const htmlBody = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #4f46e5; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">Nouvelle demande de contact</h1>
        </div>
        <div style="background: white; padding: 24px; border: 1px solid #e2e8f0; border-top: 0; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Nom</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Téléphone</td><td style="padding: 8px 0;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Service</td><td style="padding: 8px 0;">${service}</td></tr>
            ${budget ? `<tr><td style="padding: 8px 0; color: #64748b; font-size: 14px;">Budget</td><td style="padding: 8px 0;">${budget}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <h3 style="color: #1e293b; margin-bottom: 8px;">Message</h3>
          <p style="color: #475569; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
      </div>
    `;

    // If no Resend API key, log the submission (useful in dev)
    if (!apiKey) {
      console.log("[Contact Form] No RESEND_API_KEY set. Submission would be:", {
        name, email, phone, service, budget, message,
      });
      return NextResponse.json({ ok: true });
    }

    // Lazy-import Resend so it's never instantiated at build time
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Casa Web <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `Nouvelle demande de ${name} — ${service}`,
      html: htmlBody,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Email send failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
