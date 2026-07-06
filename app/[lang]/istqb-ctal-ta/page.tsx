import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../dictionaries";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer";
import ISTQBCheckoutButton from "@/app/Component/ISTQBCheckoutButton";
import type { Metadata } from "next";
import { DOMAINS } from "@/app/data/istqb-ctal-ta-questions";

const BASE = "https://www.nexo-skills.com";
const PRICE_DISPLAY = "49 €";
const COURSE_KEY = "istqb-ctal-ta";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang !== "en";
  return {
    title: isFr
      ? "Préparation ISTQB CTAL-TA — Questions & Entraînement | Nexo Skills"
      : "ISTQB CTAL-TA Prep — Practice Questions | Nexo Skills",
    description: isFr
      ? "Préparez la certification ISTQB Advanced Level Test Analyst (CTAL-TA) avec 200 questions couvrant les 6 chapitres du syllabus. Mode entraînement avec explications ou simulation d'examen."
      : "Prepare for the ISTQB Advanced Level Test Analyst (CTAL-TA) certification with 200 questions covering all 6 syllabus chapters. Training mode with explanations or full exam simulation.",
    alternates: {
      canonical: `${BASE}/${lang}/istqb-ctal-ta`,
      languages: { fr: `${BASE}/fr/istqb-ctal-ta`, en: `${BASE}/en/istqb-ctal-ta` },
    },
    openGraph: {
      title: isFr ? "Préparation ISTQB CTAL-TA — Nexo Skills" : "ISTQB CTAL-TA Prep — Nexo Skills",
      description: isFr
        ? "Banque de 200 questions ISTQB CTAL-TA avec explications. Prêt pour l'examen Advanced Level Test Analyst ?"
        : "200-question ISTQB CTAL-TA bank with explanations. Ready for the Advanced Level Test Analyst exam?",
      url: `${BASE}/${lang}/istqb-ctal-ta`,
      siteName: "Nexo Skills",
      locale: isFr ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

const WHAT_IS_INCLUDED_FR = [
  { icon: "📚", label: "200 questions couvrant les 6 chapitres du syllabus officiel CTAL-TA" },
  { icon: "🎯", label: "Mode entraînement : explication détaillée après chaque réponse" },
  { icon: "⏱️", label: "Mode simulation examen : conditions réelles, score final" },
  { icon: "✅", label: "Questions à choix unique et à choix multiples, comme le vrai examen" },
  { icon: "📊", label: "Bilan par chapitre pour identifier vos points faibles" },
  { icon: "🔁", label: "Accès illimité — entraînez-vous autant que vous le souhaitez" },
];

const WHAT_IS_INCLUDED_EN = [
  { icon: "📚", label: "200 questions covering all 6 chapters of the official CTAL-TA syllabus" },
  { icon: "🎯", label: "Training mode: detailed explanation after each answer" },
  { icon: "⏱️", label: "Exam simulation mode: real conditions, final score" },
  { icon: "✅", label: "Single-choice and multiple-choice questions, just like the real exam" },
  { icon: "📊", label: "Chapter-by-chapter breakdown to identify your weak spots" },
  { icon: "🔁", label: "Unlimited access — practice as much as you need" },
];

const DOMAIN_COLORS: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  violet: "bg-violet-100 text-violet-700 border-violet-200",
  emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  rose: "bg-rose-100 text-rose-700 border-rose-200",
};

export default async function ISTQBCTALTAPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang !== "en";

  const included = isFr ? WHAT_IS_INCLUDED_FR : WHAT_IS_INCLUDED_EN;

  return (
    <main className="min-h-screen bg-white">
      <Navbar t={dict.nav} lang={lang} courses={dict.courses} />

      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-5 pb-20 pt-28 text-white md:px-6 md:pt-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-800/60 px-4 py-2 text-sm font-semibold text-blue-200 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>
            {isFr ? "Certification internationale — Niveau avancé" : "International Certification — Advanced Level"}
          </div>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {isFr ? (
              <>Préparez l&apos;examen<br /><span className="text-amber-400">ISTQB CTAL-TA</span></>
            ) : (
              <>Prepare for the<br /><span className="text-amber-400">ISTQB CTAL-TA</span></>
            )}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-blue-100">
            {isFr
              ? "200 questions d'examens blancs, des explications détaillées et un simulateur d'examen — tout ce qu'il faut pour décrocher votre certification Advanced Level Test Analyst."
              : "200 practice exam questions, detailed explanations and an exam simulator — everything you need to pass your Advanced Level Test Analyst certification."}
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm text-blue-200">
            {(isFr
              ? ["✓ 6 chapitres du syllabus", "✓ 200 questions", "✓ Simulation d'examen", "✓ Accès illimité"]
              : ["✓ 6 syllabus chapters", "✓ 200 questions", "✓ Exam simulation", "✓ Unlimited access"]
            ).map((t) => <span key={t}>{t}</span>)}
          </div>

          {/* Pricing + CTA */}
          <div className="inline-flex flex-col items-center gap-4">
            <div className="text-center">
              <span className="text-5xl font-extrabold text-white">{PRICE_DISPLAY}</span>
              <p className="mt-1 text-sm text-blue-300">
                {isFr ? "Accès à vie — une seule fois" : "Lifetime access — one-time payment"}
              </p>
            </div>
            <ISTQBCheckoutButton lang={lang} isFr={isFr} course={COURSE_KEY} priceLabel={PRICE_DISPLAY} />
          </div>
        </div>
      </section>

      {/* ── WHAT'S INCLUDED ── */}
      <section className="bg-white px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            {isFr ? "Ce qui est inclus" : "What's included"}
          </p>
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            {isFr ? "Tout pour réussir du premier coup" : "Everything to pass on your first try"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {included.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-xl border border-gray-200 bg-gray-50 p-5">
                <span className="text-2xl">{item.icon}</span>
                <p className="text-sm leading-relaxed text-gray-700">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYLLABUS CHAPTERS ── */}
      <section className="bg-gray-50 px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            {isFr ? "Chapitres couverts" : "Chapters covered"}
          </p>
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            {isFr ? "Syllabus ISTQB CTAL-TA complet" : "Full ISTQB CTAL-TA Syllabus"}
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {DOMAINS.map((d) => (
              <div key={d.key} className={`rounded-xl border p-5 ${DOMAIN_COLORS[d.color]}`}>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest opacity-70">{d.chapter}</p>
                <p className="font-semibold leading-snug">{d.key}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT IS CTAL-TA ── */}
      <section className="bg-white px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            {isFr ? "Qu'est-ce que l'ISTQB CTAL-TA ?" : "What is ISTQB CTAL-TA?"}
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              {isFr
                ? "Le CTAL-TA (Certified Tester Advanced Level — Test Analyst) est la certification avancée de l'ISTQB destinée aux analystes de test expérimentés. Elle approfondit les techniques de test, l'analyse basée sur les risques, les revues, la gestion des défauts et les outils de test."
                : "CTAL-TA (Certified Tester Advanced Level — Test Analyst) is ISTQB's advanced certification for experienced test analysts. It deepens test techniques, risk-based analysis, reviews, defect management and test tools."}
            </p>
            <p className="leading-relaxed">
              {isFr
                ? "L'examen comporte des questions à choix unique et à choix multiples, avec un seuil de réussite de 65%. Cette préparation reproduit fidèlement ce format, y compris les questions à sélection multiple."
                : "The exam includes both single-choice and multiple-choice questions, with a 65% passing threshold. This prep faithfully reproduces that format, including multi-select questions."}
            </p>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 px-5 py-16 text-center md:px-6">
        <h2 className="mb-3 text-2xl font-bold text-white md:text-3xl">
          {isFr ? "Prêt à vous certifier ?" : "Ready to get certified?"}
        </h2>
        <p className="mb-8 text-blue-200">
          {isFr
            ? "Accès immédiat après paiement. Entraînez-vous à votre rythme."
            : "Instant access after payment. Train at your own pace."}
        </p>
        <ISTQBCheckoutButton lang={lang} isFr={isFr} course={COURSE_KEY} priceLabel={PRICE_DISPLAY} />
      </section>

      <Footer t={dict.footer} lang={lang} />
    </main>
  );
}
