import { NextRequest, NextResponse } from "next/server";

const ipHits = new Map<string, { count: number; reset: number }>();
function rateLimit(ip: string, max = 10, windowMs = 60_000): boolean {
  const now = Date.now();
  const rec = ipHits.get(ip);
  if (!rec || now > rec.reset) { ipHits.set(ip, { count: 1, reset: now + windowMs }); return true; }
  if (rec.count >= max) return false;
  rec.count++;
  return true;
}

type CourseKey = "qa" | "iso" | "audit" | "web" | "a11y" | "multiple" | "tutorat-francais" | "tutorat-anglais" | "tutorat-math" | "anglais-vacances-ete" | "istqb-fondation";

const COURSES: Record<CourseKey, { name: string; description: string; amount: number; currency?: string; recurring?: boolean }> = {
  qa: {
    name: "AI-Powered QA Engineering — July 2026",
    description: "4 modules across 3 weekends. Taught by a Canadian QA Expert.",
    amount: 29700, // $297
  },
  iso: {
    name: "Quality Management System ISO 9001:2015",
    description: "Understand, implement and audit a QMS. Preparation for ISO 9001 certification.",
    amount: 20000, // $200
  },
  audit: {
    name: "ISO 9001 Internal Auditor — July 4-5, 2026",
    description: "1 weekend. Plan, conduct and close internal audits. Write findings that drive real improvement.",
    amount: 8000, // $80
  },
  web: {
    name: "Build Your Website with AI — No Code Required",
    description: "100% practical weekend training. From idea to published website.",
    amount: 20000, // $200
  },
  a11y: {
    name: "Web Accessibility & Testing Tools — August 2026",
    description: "1 weekend. Build and audit inclusive websites with professional accessibility tools.",
    amount: 20000, // $200
  },
  multiple: {
    name: "Nexo Skills — Multiple Programs",
    description: "Registration for multiple training programs.",
    amount: 29700,
  },
  "tutorat-francais": {
    name: "Tutorat Français — Primaire",
    description: "Cours individuel en ligne · 1h/séance · abonnement mensuel",
    amount: 15000, // $150/mois
    recurring: true,
  },
  "tutorat-anglais": {
    name: "Tutorat Anglais — Primaire",
    description: "Cours individuel en ligne · 1h/séance · abonnement mensuel",
    amount: 15000,
    recurring: true,
  },
  "tutorat-math": {
    name: "Tutorat Mathématiques — Primaire",
    description: "Cours individuel en ligne · 1h/séance · abonnement mensuel",
    amount: 15000,
    recurring: true,
  },
  "anglais-vacances-ete": {
    name: "Pack Vacances d'Été — Anglais pour enfants",
    description: "Groupe de 4 · 2 séances/semaine · 1h30/séance · Juillet & Août 2026",
    amount: 80000, // 800 MAD
    currency: "mad",
    recurring: true,
  },
  "istqb-fondation": {
    name: "Préparation ISTQB Foundation Level — Nexo Skills",
    description: "Banque de questions complète · 6 chapitres du syllabus · Mode entraînement & simulation examen · Accès à vie",
    amount: 4900, // €49
    currency: "eur",
  },
};

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (!rateLimit(ip)) {
    return NextResponse.json({ error: "Trop de demandes. Réessayez dans une minute." }, { status: 429 });
  }
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }

  try {
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      ...(process.env.STRIPE_ACCOUNT_ID ? { stripeAccount: process.env.STRIPE_ACCOUNT_ID } : {}),
    });

    const { name, email, phone, experience, lang = "en", course = "qa" } = await req.json();

    const courseData = COURSES[course as CourseKey] ?? COURSES.qa;
    const origin = req.headers.get("origin") ?? "http://localhost:3000";

    const isSubscription = courseData.recurring === true;

    const session = await stripe.checkout.sessions.create({
      automatic_payment_methods: { enabled: true },
      mode: isSubscription ? "subscription" : "payment",
      locale: lang === "fr" ? "fr" : "en",
      customer_email: email ?? undefined,
      metadata: {
        name: name ?? "",
        phone: phone ?? "",
        experience: experience ?? "",
        course,
        lang,
      },
      line_items: [
        {
          price_data: {
            currency: courseData.currency ?? "usd",
            product_data: {
              name: courseData.name,
              description: courseData.description,
            },
            unit_amount: courseData.amount,
            ...(isSubscription ? { recurring: { interval: "month" } } : {}),
          },
          quantity: 1,
        },
      ],
      success_url: course === "istqb-fondation"
        ? `${origin}/${lang}/istqb/entrainement?session_id={CHECKOUT_SESSION_ID}`
        : `${origin}/${lang}/success`,
      cancel_url: course === "istqb-fondation"
        ? `${origin}/${lang}/istqb`
        : `${origin}/#contact`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[checkout]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
