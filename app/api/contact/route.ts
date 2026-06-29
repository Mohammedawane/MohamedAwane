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
  "anglais-vacances-ete":  "Pack Vacances Anglais (7-14 ans)",
  "multiple":              "Plusieurs formations",
};

async function sendEmail(data: {
  name: string;
  email: string;
  phone?: string;
  course?: string;
  message: string;
}) {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;
  const notifyEmail = process.env.CONTACT_EMAIL ?? gmailUser;

  if (!gmailUser || !gmailPass) {
    console.warn("[contact] GMAIL_USER or GMAIL_APP_PASSWORD not set — email skipped");
    return;
  }

  const { createTransport } = await import("nodemailer");
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: { user: gmailUser, pass: gmailPass },
  });

  const courseLabel = data.course ? (COURSE_LABELS[data.course] ?? data.course) : null;
  const subject = courseLabel
    ? `Nexo Skills — ${courseLabel} — ${data.name}`
    : `Nexo Skills — Message de ${data.name}`;

  // Notification à l'admin
  await transporter.sendMail({
    from: `"Nexo Skills" <${gmailUser}>`,
    to: notifyEmail,
    replyTo: data.email,
    subject,
    text: [
      `Nom       : ${data.name}`,
      `Email     : ${data.email}`,
      `Téléphone : ${data.phone || "—"}`,
      courseLabel ? `Formation : ${courseLabel}` : "",
      `Message   : ${data.message || "—"}`,
    ].filter(Boolean).join("\n"),
  });

  // Réponse automatique au client
  await transporter.sendMail({
    from: `"Nexo Skills" <${gmailUser}>`,
    to: data.email,
    subject: "On a bien reçu votre message — Nexo Skills",
    text: `Bonjour ${data.name},\n\nMerci pour votre message. Notre équipe l'a bien reçu et vous répondra dans les 24h.\n\nL'équipe Nexo Skills`,
  });
}

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
    GMAIL_USER: process.env.GMAIL_USER ? `${process.env.GMAIL_USER.slice(0, 4)}...` : "NON DEFINI",
    GMAIL_APP_PASSWORD: process.env.GMAIL_APP_PASSWORD ? `${process.env.GMAIL_APP_PASSWORD.length} caracteres` : "NON DEFINI",
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

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("[contact] GMAIL_USER or GMAIL_APP_PASSWORD manquant dans les variables Vercel");
      return NextResponse.json({ error: "Email non configuré côté serveur" }, { status: 500 });
    }

    void appendToSheet({ name, email, phone, course, message });
    await sendEmail({ name, email, phone, course, message });
    console.log("[contact] email envoyé à", email);

    return NextResponse.json({ ok: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[contact] erreur:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
