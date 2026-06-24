import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  ...(process.env.STRIPE_ACCOUNT_ID ? { stripeAccount: process.env.STRIPE_ACCOUNT_ID } : {}),
});

type CourseKey = "qa" | "iso" | "audit" | "web" | "a11y" | "multiple" | "tutorat-francais" | "tutorat-anglais" | "tutorat-math";

const COURSES: Record<CourseKey, { name: string; description: string; amount: number; recurring?: boolean }> = {
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
};

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, experience, lang = "en", course = "qa" } = await req.json();

    const courseData = COURSES[course as CourseKey] ?? COURSES.qa;
    const origin = req.headers.get("origin") ?? "http://localhost:3000";

    const isSubscription = courseData.recurring === true;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: isSubscription ? "subscription" : "payment",
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
            currency: "usd",
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
      success_url: `${origin}/${lang}/success`,
      cancel_url: `${origin}/#contact`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("[checkout]", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
