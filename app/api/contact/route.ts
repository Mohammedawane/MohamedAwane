import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY not set");
      return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
    }

    // Notify admin
    await resend.emails.send({
      from: "Nexo Skills <contact@nexoskills.com>",
      to: "contact@nexoskills.com",
      subject: `Nouveau message de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="margin:0 0 16px;color:#1e293b;">Nouveau message de contact</h2>
          <table style="width:100%;border-collapse:collapse;">
            <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Nom</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
            <tr><td style="padding:8px 0;color:#64748b;font-size:14px;">Email</td><td style="padding:8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#f8fafc;border-radius:8px;border-left:3px solid #3b82f6;">
            <p style="margin:0;white-space:pre-wrap;color:#1e293b;">${message}</p>
          </div>
          <p style="margin-top:16px;font-size:12px;color:#94a3b8;">Répondre directement à : <a href="mailto:${email}">${email}</a></p>
        </div>
      `,
      replyTo: email,
    });

    // Auto-reply to sender
    await resend.emails.send({
      from: "Nexo Skills <contact@nexoskills.com>",
      to: email,
      subject: "On a bien reçu votre message — Nexo Skills",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#020817;color:#e2e8f0;">
          <div style="background:linear-gradient(135deg,#1e3a5f,#1e1b4b);padding:32px;border-radius:12px;text-align:center;margin-bottom:24px;">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:3px;text-transform:uppercase;color:#60a5fa;">NEXO SKILLS</p>
            <h1 style="margin:0;font-size:24px;font-weight:800;color:#fff;">Message bien reçu ✓</h1>
          </div>
          <p style="color:#94a3b8;">Bonjour ${name},</p>
          <p style="color:#cbd5e1;line-height:1.7;">Merci pour votre message. Notre équipe l'a bien reçu et vous répondra dans les <strong style="color:#fff;">24 heures</strong>.</p>
          <p style="color:#475569;font-size:14px;margin-top:32px;">L'équipe Nexo Skills<br>contact@nexoskills.com</p>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
