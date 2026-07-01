"use client";

import { useState, useEffect } from "react";
import EnterpriseSection from "./EnterpriseSection";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const AUDIENCES = [
  {
    id: "pro",
    targetId: "digital-si",
    title_fr: "Je suis un professionnel",
    desc_fr: "En reconversion, en montée en compétences ou en préparation d'une certification ISO, QA ou digital — nos formations sont conçues pour les adultes actifs.",
    tags_fr: ["QA & Tests IA", "ISO 9001 / QHSE", "Création de site web"],
    cta_fr: "Voir les formations →",
    title_en: "I'm a professional",
    desc_en: "Reskilling, upskilling or preparing a QA, ISO or digital certification — our programs are designed for working adults.",
    tags_en: ["QA & AI Testing", "ISO 9001 / QHSE", "Build your website"],
    cta_en: "See programs →",
    iconPath: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
    accent: "blue",
  },
  {
    id: "parent",
    targetId: "tutorat-langue",
    title_fr: "Je cherche un tutorat pour mon enfant",
    desc_fr: "Séances individuelles en ligne en français, anglais et maths — ou notre pack vacances d'été pour progresser deux fois par semaine en groupe de 4.",
    tags_fr: ["Tutorat Français", "Tutorat Anglais", "Pack vacances d'été"],
    cta_fr: "Voir les cours de tutorat →",
    title_en: "I'm looking for tutoring for my child",
    desc_en: "Individual online sessions in French, English and math — or our summer pack to improve in a small group of 4, twice a week.",
    tags_en: ["French tutoring", "English tutoring", "Summer pack"],
    cta_en: "See tutoring programs →",
    iconPath: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
    accent: "amber",
  },
];

export default function AudienceSelector({ lang }: { lang: string }) {
  const isFr = lang !== "en";
  const [showEnterprise, setShowEnterprise] = useState(false);

  useEffect(() => {
    if (showEnterprise) {
      const timer = setTimeout(() => {
        document.getElementById("entreprise")?.scrollIntoView({ behavior: "smooth" });
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [showEnterprise]);

  function handleEnterpriseClick() {
    if (!showEnterprise) {
      setShowEnterprise(true);
    } else {
      scrollTo("entreprise");
    }
  }

  return (
    <>
      <section className="relative bg-white py-14 px-5 md:px-6">
        {/* Top border accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-700 via-indigo-500 to-amber-400" />

        <div className="mx-auto max-w-5xl">
          <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            {isFr ? "Pour commencer — qui êtes-vous ?" : "To get started — who are you?"}
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {/* Professionnel & Parent cards */}
            {AUDIENCES.map((a) => {
              const isBlue = a.accent === "blue";
              return (
                <button
                  key={a.id}
                  onClick={() => scrollTo(a.targetId)}
                  className={`group flex flex-col items-start rounded-2xl border-2 p-5 md:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                    isBlue
                      ? "border-blue-100 bg-blue-50 hover:border-blue-300 hover:bg-blue-50"
                      : "border-amber-100 bg-amber-50 hover:border-amber-300 hover:bg-amber-50"
                  }`}
                >
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${isBlue ? "bg-blue-700" : "bg-amber-500"}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d={a.iconPath} />
                    </svg>
                  </div>

                  <h3 className={`mb-2 text-lg font-bold ${isBlue ? "text-blue-900" : "text-amber-900"}`}>
                    {isFr ? a.title_fr : a.title_en}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    {isFr ? a.desc_fr : a.desc_en}
                  </p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {(isFr ? a.tags_fr : a.tags_en).map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isBlue ? "bg-blue-100 text-blue-700" : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <span className={`mt-auto flex items-center gap-1.5 text-sm font-semibold ${isBlue ? "text-blue-700" : "text-amber-700"}`}>
                    {isFr ? a.cta_fr : a.cta_en}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
              );
            })}

            {/* Entreprise card */}
            <button
              onClick={handleEnterpriseClick}
              className={`group flex flex-col items-start rounded-2xl border-2 p-5 md:p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                showEnterprise
                  ? "border-indigo-400 bg-indigo-50 shadow-lg"
                  : "border-indigo-100 bg-indigo-50 hover:border-indigo-300"
              }`}
            >
              {/* Badge "Nouveau" */}
              <div className="mb-3 self-end">
                <span className="rounded-full bg-indigo-700 px-2.5 py-0.5 text-xs font-bold text-white">
                  {isFr ? "Nouveau" : "New"}
                </span>
              </div>

              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-700">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                </svg>
              </div>

              <h3 className="mb-2 text-lg font-bold text-indigo-900">
                {isFr ? "Je représente une entreprise" : "I represent a company"}
              </h3>

              <p className="mb-5 text-sm leading-relaxed text-gray-600">
                {isFr
                  ? "Montez en compétences vos collaborateurs avec des programmes sur mesure — de l'ingénierie de formation à la certification."
                  : "Upskill your workforce with custom programs — from training engineering to certification."}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {(isFr
                  ? ["Ingénierie de formation", "Sur mesure", "ROI mesurable"]
                  : ["Training engineering", "Custom programs", "Measurable ROI"]
                ).map((tag) => (
                  <span key={tag} className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-indigo-700">
                {isFr
                  ? showEnterprise ? "Voir les solutions ↓" : "Découvrir les solutions →"
                  : showEnterprise ? "See solutions ↓" : "Discover solutions →"}
                {!showEnterprise && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                )}
              </span>
            </button>
          </div>
        </div>
      </section>

      {showEnterprise && <EnterpriseSection lang={lang} />}
    </>
  );
}
