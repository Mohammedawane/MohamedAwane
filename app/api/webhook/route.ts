import { NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";

const COURSE_NAMES: Record<string, { fr: string; en: string }> = {
  qa:       { fr: "Ingénierie QA propulsée par l'IA",        en: "AI-Powered QA Engineering" },
  iso:      { fr: "ISO 9001:2015 — Management de la Qualité", en: "ISO 9001:2015 Quality Management" },
  audit:    { fr: "Auditeur Interne ISO 9001",                en: "ISO 9001 Internal Auditor" },
  web:      { fr: "Créez votre site web avec l'IA",          en: "Build Your Website with AI" },
  a11y:     { fr: "Accessibilité web & outils de test",      en: "Web Accessibility & Testing Tools" },
  multiple: { fr: "Plusieurs formations",                     en: "Multiple Programs" },
};

function buildEmail(name: string, courseName: string, lang: string): { subject: string; html: string } {
  const isFr = lang === "fr";

  const subject = isFr
    ? `Confirmation d'inscription — ${courseName}`
    : `Registration Confirmed — ${courseName}`;

  const html = `<!DOCTYPE html>
<html lang="${lang}">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#020817;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;color:#e2e8f0;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#020817;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#0f172a;border-radius:16px;border:1px solid rgba(255,255,255,0.06);overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1e3a5f,#1e1b4b);padding:40px 40px 32px;text-align:center;">
            <p style="margin:0 0 8px;font-size:13px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#60a5fa;">NEXO SKILLS</p>
            <h1 style="margin:0;font-size:28px;font-weight:800;color:#ffffff;line-height:1.2;">
              ${isFr ? "Votre place est confirmée ✓" : "Your spot is confirmed ✓"}
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:36px 40px;">
            <p style="margin:0 0 20px;font-size:16px;color:#94a3b8;">
              ${isFr ? `Bonjour${name ? " " + name : ""},` : `Hi${name ? " " + name : ""},`}
            </p>
            <p style="margin:0 0 24px;font-size:16px;line-height:1.7;color:#cbd5e1;">
              ${isFr
                ? "Merci pour votre inscription. Votre paiement a bien été reçu et votre place est réservée."
                : "Thank you for registering. Your payment has been received and your spot is reserved."}
            </p>

            <!-- Course box -->
            <table width="100%" cellpadding="0" cellspacing="0" style="background:rgba(59,130,246,0.08);border:1px solid rgba(59,130,246,0.2);border-radius:12px;margin-bottom:28px;">
              <tr>
                <td style="padding:20px 24px;">
                  <p style="margin:0 0 4px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:#60a5fa;">
                    ${isFr ? "Formation inscrite" : "Program enrolled"}
                  </p>
                  <p style="margin:0;font-size:18px;font-weight:700;color:#ffffff;">${courseName}</p>
                </td>
              </tr>
            </table>

            <p style="margin:0 0 12px;font-size:16px;line-height:1.7;color:#cbd5e1;">
              ${isFr
                ? "Voici ce qui se passe maintenant :"
                : "Here's what happens next:"}
            </p>
            <table cellpadding="0" cellspacing="0" style="margin-bottom:28px;">
              ${["1", "2", "3"].map((n, i) => {
                const steps = isFr
                  ? [
                      "Vous recevrez les détails de connexion et le programme complet sous 24h.",
                      "Un rappel vous sera envoyé 48h avant le début de la formation.",
                      "Pour toute question, répondez directement à cet email.",
                    ]
                  : [
                      "You'll receive login details and the full program within 24 hours.",
                      "A reminder will be sent to you 48h before the training starts.",
                      "For any questions, reply directly to this email.",
                    ];
                return `<tr>
                  <td style="padding:4px 12px 4px 0;vertical-align:top;">
                    <span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:rgba(59,130,246,0.15);color:#60a5fa;font-size:12px;font-weight:700;text-align:center;line-height:24px;">${n}</span>
                  </td>
                  <td style="padding:4px 0;font-size:15px;color:#94a3b8;line-height:1.6;">${steps[i]}</td>
                </tr>`;
              }).join("")}
            </table>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="background:linear-gradient(135deg,#3b82f6,#4f46e5);border-radius:10px;">
                  <a href="https://nexoskills.com" style="display:inline-block;padding:14px 32px;font-size:15px;font-weight:700;color:#ffffff;text-decoration:none;">
                    ${isFr ? "Retour au site →" : "Back to site →"}
                  </a>
                </td>
              </tr>
            </table>

            <p style="margin:0;font-size:14px;color:#475569;line-height:1.6;">
              ${isFr
                ? "À très bientôt,<br><strong style='color:#94a3b8;'>L'équipe Nexo Skills</strong>"
                : "See you soon,<br><strong style='color:#94a3b8;'>The Nexo Skills team</strong>"}
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid rgba(255,255,255,0.05);text-align:center;">
            <p style="margin:0;font-size:12px;color:#334155;">
              Nexo Skills · info@nexo-skills.com
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, html };
}

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  const { default: StripeLib } = await import("stripe");
  const stripe = new StripeLib(process.env.STRIPE_SECRET_KEY!);

  const body = await req.text();
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!sig || !secret) {
    return NextResponse.json({ error: "Missing signature or secret" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, secret);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Signature verification failed";
    console.error("[webhook]", message);
    return NextResponse.json({ error: message }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const email = session.customer_email;
    const name = session.metadata?.name ?? "";
    const courseKey = session.metadata?.course ?? "qa";
    const lang = session.metadata?.lang ?? "fr";
    const courseNames = COURSE_NAMES[courseKey] ?? COURSE_NAMES.qa;
    const courseName = lang === "fr" ? courseNames.fr : courseNames.en;

    console.log("[webhook] payment confirmed", { email, courseKey, name, lang });

    if (email && process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);
      const { subject, html } = buildEmail(name, courseName, lang);
      const { error } = await resend.emails.send({
        from: "Nexo Skills <info@nexo-skills.com>",
        to: email,
        subject,
        html,
      });
      if (error) console.error("[webhook] email error", error);
      else console.log("[webhook] confirmation email sent to", email);
    }
  }

  return NextResponse.json({ received: true });
}
