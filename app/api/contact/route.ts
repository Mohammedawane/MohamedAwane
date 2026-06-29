import { NextRequest, NextResponse } from "next/server";

const COURSE_LABELS: Record<string, string> = {
  "qa":                    "QA & Tests IA",
  "a11y":                  "Accessibilité web",
  "web":                   "Créer son site web avec l'IA",
  "iso":                   "ISO 9001 Management Qualité",
  "audit":                 "Auditeur qualité ISO 9001",
  "tutorat-francais":      "Tutorat Français",
  "tutorat-anglais":       "Tutorat Anglais",
  "tutorat-math":          "Tutorat Mathématiques",
  "anglais-vacances-ete":  "Pack Vacances — Anglais pour enfants",
  "multiple":              "Plusieurs formations",
};

async function appendToSheet(data: {
  name: string;
  email: string;
  phone?: string;
  course?: string;
  message: string;
}) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (!webhookUrl) return;
  try {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        courseLabel: data.course ? (COURSE_LABELS[data.course] ?? data.course) : "Contact général",
      }),
    });
  } catch (err) {
    console.error("[contact] Google Sheets webhook failed:", err);
  }
}

export async function GET() {
  return NextResponse.json({
    RESEND_API_KEY: process.env.RESEND_API_KEY ? "defini" : "NON DEFINI",
    CONTACT_EMAIL: process.env.CONTACT_EMAIL ?? "NON DEFINI",
  });
}

export async function POST(req: NextRequest) {
  console.log("[contact] POST received");
  try {
    const { name, email, phone, message, course } = await req.json();
    console.log("[contact] data:", { name, email, course });

    if (!name || !email) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("[contact] RESEND_API_KEY manquant");
      return NextResponse.json({ error: "Email non configuré" }, { status: 500 });
    }

    void appendToSheet({ name, email, phone, course, message });

    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    const notifyEmail = process.env.CONTACT_EMAIL ?? "awanemohammed@gmail.com";
    const courseLabel = course ? (COURSE_LABELS[course] ?? course) : null;

    await resend.emails.send({
      from: "Nexo Skills <onboarding@resend.dev>",
      to: notifyEmail,
      replyTo: email,
      subject: courseLabel
        ? `Nexo Skills — ${courseLabel} — ${name}`
        : `Nexo Skills — Message de ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#1e293b;">Nouvelle demande — Nexo Skills</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ""}
          ${courseLabel ? `<p><strong>Formation :</strong> ${courseLabel}</p>` : ""}
          ${message ? `<p><strong>Message :</strong></p><p style="white-space:pre-wrap;background:#f8fafc;padding:12px;border-radius:8px;">${message}</p>` : ""}
        </div>
      `,
    });

    await resend.emails.send({
      from: "Nexo Skills <onboarding@resend.dev>",
      to: email,
      subject: "On a bien reçu votre message — Nexo Skills",
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <h2 style="color:#1e293b;">Message bien reçu ✓</h2>
          <p>Bonjour ${name},</p>
          <p>Merci pour votre message. Notre équipe l'a bien reçu et vous répondra dans les <strong>24 heures</strong>.</p>
          <p style="color:#64748b;">L'équipe Nexo Skills</p>
        </div>
      `,
    });

    console.log("[contact] emails envoyés");
    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] erreur:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
