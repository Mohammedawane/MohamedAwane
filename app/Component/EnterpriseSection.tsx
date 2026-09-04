"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white p-4 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100";

const selectClass =
  "w-full rounded-xl border border-gray-200 bg-white p-4 text-gray-900 outline-none transition-all duration-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 cursor-pointer";

const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

const FEATURED = [
  {
    id: "diagnostic",
    title_fr: "Diagnostic Linguistique",
    title_en: "Language Needs Assessment",
    desc_fr:
      "De l'évaluation du niveau de vos équipes à la définition des objectifs : nous concevons des parcours linguistiques adaptés à vos enjeux business.",
    desc_en:
      "From assessing your teams' level to defining clear goals: we design language learning paths tailored to your business needs.",
    points_fr: [
      "Test de niveau pour chaque collaborateur",
      "Objectifs alignés sur vos enjeux métier",
      "Suivi de progression individuel et collectif",
      "Bilan et rapport de progression",
    ],
    points_en: [
      "Level test for every employee",
      "Goals aligned with your business needs",
      "Individual and team progress tracking",
      "Progress report and review",
    ],
    accent: "indigo",
    iconPath:
      "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3",
  },
  {
    id: "sur-mesure",
    title_fr: "Cours Sur Mesure",
    title_en: "Custom Programs",
    desc_fr:
      "Vos collaborateurs, vos contraintes, votre planning. Nous construisons avec vos RH des cours individuels ou en petit groupe, en présentiel virtuel.",
    desc_en:
      "Your team, your constraints, your schedule. We build individual or small-group live online classes with your HR team.",
    points_fr: [
      "Co-construction avec vos RH",
      "Cours individuels ou en petit groupe",
      "Anglais, français et autres langues sur demande",
      "Groupes de 2 à 12 participants",
    ],
    points_en: [
      "Co-design with your HR team",
      "Individual or small-group classes",
      "English, French and other languages on request",
      "Groups of 2 to 12",
    ],
    accent: "violet",
    iconPath:
      "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z",
  },
];

const FORMATIONS = [
  {
    id: "business-english",
    title_fr: "Anglais des Affaires",
    title_en: "Business English",
    desc_fr: "Réunions, emails, présentations et négociations en anglais — pour des équipes opérationnelles à l'international.",
    desc_en: "Meetings, emails, presentations and negotiations in English — for teams working internationally.",
    accent: "blue",
    iconPath:
      "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
  },
  {
    id: "french-pro",
    title_fr: "Français Professionnel",
    title_en: "Professional French",
    desc_fr: "Communication écrite et orale en français pour vos équipes non-francophones ou en montée en compétences.",
    desc_en: "Written and spoken French communication for non-native or upskilling employees.",
    accent: "emerald",
    iconPath:
      "M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0H3",
  },
  {
    id: "exam-prep",
    title_fr: "Préparation aux Certifications",
    title_en: "Exam & Certification Prep",
    desc_fr: "TOEFL, IELTS, DELF/DALF — préparez vos collaborateurs aux certifications requises pour la mobilité internationale.",
    desc_en: "TOEFL, IELTS, DELF/DALF — prepare your employees for the certifications needed for international mobility.",
    accent: "amber",
    iconPath:
      "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
  },
];

const STEPS = [
  {
    num: "01",
    title_fr: "Analyse",
    title_en: "Analysis",
    desc_fr: "Recueil et analyse des besoins en formation, définition des objectifs",
    desc_en: "Training needs gathering and analysis, goal definition",
  },
  {
    num: "02",
    title_fr: "Conception",
    title_en: "Design",
    desc_fr: "Programme sur mesure co-construit avec vos équipes RH",
    desc_en: "Custom program co-designed with your HR teams",
  },
  {
    num: "03",
    title_fr: "Cours",
    title_en: "Classes",
    desc_fr: "Cours en direct en ligne, individuels ou en petit groupe, avec vos tuteurs dédiés",
    desc_en: "Live online classes, individual or small-group, with your dedicated tutors",
  },
  {
    num: "04",
    title_fr: "Bilan",
    title_en: "Review",
    desc_fr: "Évaluation des progrès, bilan de niveau et plan de montée en compétences",
    desc_en: "Progress evaluation, level review and skills development roadmap",
  },
];

const SECTORS_FR = ["Banque / Finance", "Industrie", "Santé", "IT / Tech", "Retail / Commerce", "Éducation", "Services", "Autre"];
const SECTORS_EN = ["Banking / Finance", "Industry", "Healthcare", "IT / Tech", "Retail / Commerce", "Education", "Services", "Other"];
const SIZES_FR = ["1 – 10 collaborateurs", "11 – 50 collaborateurs", "51 – 200 collaborateurs", "200+ collaborateurs"];
const SIZES_EN = ["1 – 10 employees", "11 – 50 employees", "51 – 200 employees", "200+ employees"];

type AccentKey = "indigo" | "violet" | "blue" | "emerald" | "amber";
const ACCENTS: Record<AccentKey, { bg: string; border: string; icon: string; check: string; title: string }> = {
  indigo:  { bg: "bg-indigo-50",  border: "border-indigo-200 hover:border-indigo-400",   icon: "bg-indigo-700",  check: "text-indigo-600",  title: "text-indigo-900"  },
  violet:  { bg: "bg-violet-50",  border: "border-violet-200 hover:border-violet-400",   icon: "bg-violet-700",  check: "text-violet-600",  title: "text-violet-900"  },
  blue:    { bg: "bg-blue-50",    border: "border-blue-100 hover:border-blue-300",        icon: "bg-blue-700",    check: "text-blue-600",    title: "text-blue-900"    },
  emerald: { bg: "bg-emerald-50", border: "border-emerald-100 hover:border-emerald-300", icon: "bg-emerald-700", check: "text-emerald-600", title: "text-emerald-900" },
  amber:   { bg: "bg-amber-50",   border: "border-amber-100 hover:border-amber-300",     icon: "bg-amber-500",   check: "text-amber-600",   title: "text-amber-900"   },
};

export default function EnterpriseSection({ lang }: { lang: string }) {
  const isFr = lang !== "en";
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setErrorMsg(null);

    const company  = formData.get("company");
    const name     = formData.get("name");
    const email    = formData.get("email");
    const phone    = formData.get("phone");
    const sector   = formData.get("sector");
    const teamSize = formData.get("teamSize");
    const message  = formData.get("message");

    const fullMessage = `[Demande Entreprise]\nEntreprise: ${company}\nSecteur: ${sector}\nCollaborateurs: ${teamSize}\n\nBesoins:\n${message}`;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: `${name} — ${company}`, email, phone, message: fullMessage }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? (isFr ? "Une erreur est survenue." : "An error occurred."));
        setLoading(false);
        return;
      }
      setSent(true);
    } catch {
      setErrorMsg(isFr ? "Une erreur est survenue. Veuillez réessayer." : "An error occurred. Please try again.");
      setLoading(false);
    }
  }

  return (
    <div id="entreprise" className="animate-fade-in">

      {/* ── HEADER ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-indigo-900 px-5 py-16 md:px-6 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-900/50 px-4 py-2 text-sm font-semibold text-indigo-300 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
              </span>
              {isFr ? "Solutions Entreprise" : "Enterprise Solutions"}
            </div>
          </div>

          <h2 className="mb-5 text-center text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            {isFr ? (
              <>{`Formez vos équipes en langues,`}<br /><span className="text-amber-400">boostez leur performance</span></>
            ) : (
              <>{`Train your teams in languages,`}<br /><span className="text-amber-400">boost their performance</span></>
            )}
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-indigo-200">
            {isFr
              ? "Du diagnostic linguistique à l'évaluation des progrès, Nexo Skills conçoit et déploie des cours de langue sur mesure pour vos collaborateurs."
              : "From language assessment to progress tracking, Nexo Skills designs and delivers custom language classes for your workforce."}
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {[
              { val: "+50",  label_fr: "Entreprises partenaires", label_en: "Partner companies"    },
              { val: "100%", label_fr: "Cours en direct",         label_en: "Live classes"          },
              { val: "+200", label_fr: "Apprenants formés",       label_en: "Employees trained"     },
            ].map((s) => (
              <div key={s.val} className="rounded-2xl border border-indigo-500/20 bg-white/5 p-5 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold text-white md:text-4xl">{s.val}</div>
                <div className="mt-1 text-sm text-indigo-300">{isFr ? s.label_fr : s.label_en}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFERINGS ──────────────────────────────────────────── */}
      <section className="bg-white px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            {isFr ? "Nos solutions" : "Our solutions"}
          </p>

          <div className="mb-6 grid gap-6 md:grid-cols-2">
            {FEATURED.map((item) => {
              const c = ACCENTS[item.accent as AccentKey];
              return (
                <div key={item.id} className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:p-8 ${c.bg} ${c.border}`}>
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${c.icon}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-6 w-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                    </svg>
                  </div>
                  <h3 className={`mb-3 text-xl font-bold ${c.title}`}>{isFr ? item.title_fr : item.title_en}</h3>
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">{isFr ? item.desc_fr : item.desc_en}</p>
                  <ul className="space-y-2.5">
                    {(isFr ? item.points_fr : item.points_en).map((pt) => (
                      <li key={pt} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={`h-4 w-4 shrink-0 ${c.check}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {FORMATIONS.map((f) => {
              const c = ACCENTS[f.accent as AccentKey];
              return (
                <div key={f.id} className={`rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${c.bg} ${c.border}`}>
                  <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl ${c.icon}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d={f.iconPath} />
                    </svg>
                  </div>
                  <h4 className={`mb-2 font-bold ${c.title}`}>{isFr ? f.title_fr : f.title_en}</h4>
                  <p className="text-sm leading-relaxed text-gray-600">{isFr ? f.desc_fr : f.desc_en}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className="bg-slate-50 px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-center text-sm font-semibold uppercase tracking-widest text-gray-400">
            {isFr ? "Comment ça marche" : "How it works"}
          </p>
          <h3 className="mb-14 text-center text-2xl font-bold text-gray-900 md:text-3xl">
            {isFr ? "Un accompagnement de A à Z" : "End-to-end support"}
          </h3>

          <div className="relative">
            <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-indigo-100 md:block" />
            <div className="grid gap-8 md:grid-cols-4">
              {STEPS.map((step) => (
                <div key={step.num} className="flex flex-col items-center text-center">
                  <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold text-indigo-700 ring-4 ring-white">
                    {step.num}
                  </div>
                  <h4 className="mb-2 font-bold text-gray-900">{isFr ? step.title_fr : step.title_en}</h4>
                  <p className="text-sm leading-relaxed text-gray-500">{isFr ? step.desc_fr : step.desc_en}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FORM ───────────────────────────────────────────────── */}
      <section className="bg-white px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-700">
              {isFr ? "Prenez contact" : "Get in touch"}
            </p>
            <h3 className="text-3xl font-bold text-gray-900 md:text-4xl">
              {isFr ? "Demandez une consultation gratuite" : "Request a free consultation"}
            </h3>
            <p className="mt-4 text-gray-600">
              {isFr
                ? "Un expert Nexo Skills vous recontacte sous 24h pour comprendre vos besoins et co-construire votre programme."
                : "A Nexo Skills expert will reach out within 24h to understand your needs and co-design your program."}
            </p>
          </div>

          {sent ? (
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7 text-emerald-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold text-gray-900">
                {isFr ? "Demande envoyée !" : "Request sent!"}
              </h3>
              <p className="text-gray-600">
                {isFr
                  ? "Nous vous recontacterons sous 24h pour organiser votre consultation."
                  : "We'll reach out within 24h to schedule your consultation."}
              </p>
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass}>{isFr ? "Nom de l'entreprise" : "Company name"}</label>
                  <input name="company" type="text" required placeholder="Acme Corp" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isFr ? "Votre nom" : "Your name"}</label>
                  <input name="name" type="text" required placeholder={isFr ? "Marie Dupont" : "Jane Smith"} className={inputClass} />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass}>{isFr ? "Email professionnel" : "Work email"}</label>
                  <input name="email" type="email" required placeholder={isFr ? "marie@acme.com" : "jane@acme.com"} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{isFr ? "Téléphone" : "Phone"}</label>
                  <input name="phone" type="tel" placeholder="+33 6 00 00 00 00" className={inputClass} />
                </div>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className={labelClass}>{isFr ? "Secteur d'activité" : "Industry"}</label>
                  <select name="sector" className={selectClass}>
                    {(isFr ? SECTORS_FR : SECTORS_EN).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{isFr ? "Nombre de collaborateurs" : "Number of employees"}</label>
                  <select name="teamSize" className={selectClass}>
                    {(isFr ? SIZES_FR : SIZES_EN).map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass}>{isFr ? "Vos besoins en formation" : "Your training needs"}</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder={isFr ? "Décrivez vos objectifs, contraintes et attentes..." : "Describe your goals, constraints and expectations..."}
                  className={inputClass + " resize-none"}
                />
              </div>

              {errorMsg && (
                <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-700 p-4 font-bold text-white shadow transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-800 disabled:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    {isFr ? "Envoi…" : "Sending…"}
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                    {isFr ? "Demander une consultation gratuite" : "Request a free consultation"}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
