import { notFound } from "next/navigation";
import { hasLocale, getDictionary } from "../dictionaries";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer";
import ISTQBCheckoutButton from "@/app/Component/ISTQBCheckoutButton";
import type { Metadata } from "next";
import { DOMAINS } from "@/app/data/istqb-questions";

const BASE = "https://www.nexo-skills.com";
const PRICE_DISPLAY = "14 €";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const isFr = lang !== "en";
  return {
    title: isFr
      ? "Préparation ISTQB Foundation Level — Questions & Entraînement | Nexo Skills"
      : "ISTQB Foundation Level Prep — Practice Questions | Nexo Skills",
    description: isFr
      ? "Préparez la certification ISTQB Foundation Level avec une banque de questions complète couvrant les 6 chapitres du syllabus. Mode entraînement avec explications ou simulation d'examen."
      : "Prepare for ISTQB Foundation Level certification with a full question bank covering all 6 syllabus chapters. Training mode with explanations or full exam simulation.",
    alternates: {
      canonical: `${BASE}/${lang}/istqb`,
      languages: { fr: `${BASE}/fr/istqb`, en: `${BASE}/en/istqb` },
    },
    openGraph: {
      title: isFr ? "Préparation ISTQB FL — Nexo Skills" : "ISTQB FL Prep — Nexo Skills",
      description: isFr
        ? "Banque de questions ISTQB Foundation Level avec explications. Prêt pour l'examen ?"
        : "ISTQB Foundation Level question bank with explanations. Ready for the exam?",
      url: `${BASE}/${lang}/istqb`,
      siteName: "Nexo Skills",
      locale: isFr ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

const WHAT_IS_INCLUDED_FR = [
  { icon: "📚", label: "Questions couvrant les 6 chapitres du syllabus officiel ISTQB FL 4.0" },
  { icon: "🎯", label: "Mode entraînement : explication détaillée après chaque réponse" },
  { icon: "⏱️", label: "Mode simulation examen : conditions réelles, score final" },
  { icon: "📊", label: "Bilan par chapitre pour identifier vos points faibles" },
  { icon: "🔀", label: "Questions mélangées aléatoirement à chaque session" },
  { icon: "🔁", label: "Accès illimité — entraînez-vous autant que vous le souhaitez" },
];

const WHAT_IS_INCLUDED_EN = [
  { icon: "📚", label: "Questions covering all 6 chapters of the official ISTQB FL 4.0 syllabus" },
  { icon: "🎯", label: "Training mode: detailed explanation after each answer" },
  { icon: "⏱️", label: "Exam simulation mode: real conditions, final score" },
  { icon: "📊", label: "Chapter-by-chapter breakdown to identify your weak spots" },
  { icon: "🔀", label: "Questions shuffled randomly each session" },
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

export default async function ISTQBPage({
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
            {isFr ? "Certification internationale" : "International Certification"}
          </div>

          <h1 className="mb-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            {isFr ? (
              <>Préparez l&apos;examen<br /><span className="text-amber-400">ISTQB Foundation Level</span></>
            ) : (
              <>Prepare for the<br /><span className="text-amber-400">ISTQB Foundation Level</span></>
            )}
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-blue-100">
            {isFr
              ? "Une banque de questions complète, des explications claires et un simulateur d'examen — tout ce qu'il faut pour décrocher votre certification du premier coup."
              : "A complete question bank, clear explanations and an exam simulator — everything you need to pass your certification on the first try."}
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-3 text-sm text-blue-200">
            {(isFr
              ? ["✓ 6 chapitres du syllabus", "✓ Explications détaillées", "✓ Simulation d'examen", "✓ Accès illimité"]
              : ["✓ 6 syllabus chapters", "✓ Detailed explanations", "✓ Exam simulation", "✓ Unlimited access"]
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
            <ISTQBCheckoutButton lang={lang} isFr={isFr} />
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
            {isFr ? "Syllabus ISTQB FL 4.0 complet" : "Full ISTQB FL 4.0 Syllabus"}
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

      {/* ── WHAT IS ISTQB ── */}
      <section className="bg-white px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 md:text-3xl">
            {isFr ? "Qu'est-ce que l'ISTQB Foundation Level ?" : "What is ISTQB Foundation Level?"}
          </h2>
          <div className="space-y-4 text-gray-600">
            <p className="leading-relaxed">
              {isFr
                ? "L'ISTQB (International Software Testing Qualifications Board) Foundation Level est la certification de référence mondiale pour les testeurs logiciels. Elle valide les connaissances fondamentales en test : processus, techniques, gestion et outils."
                : "ISTQB (International Software Testing Qualifications Board) Foundation Level is the world's leading certification for software testers. It validates core testing knowledge: processes, techniques, management and tools."}
            </p>
            <p className="leading-relaxed">
              {isFr
                ? "L'examen comporte 40 questions à choix multiple avec un seuil de réussite de 65% (26/40 bonnes réponses). La durée est de 60 minutes."
                : "The exam consists of 40 multiple-choice questions with a passing threshold of 65% (26/40 correct answers). Duration: 60 minutes."}
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
        <ISTQBCheckoutButton lang={lang} isFr={isFr} />
      </section>

      <Footer t={dict.footer} lang={lang} />
    </main>
  );
}
