import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer";
import CourseLink from "@/app/Component/CourseLink";

export async function generateMetadata({ params }: PageProps<"/[lang]/formations-pro">) {
  const { lang } = await params;
  const isFr = lang !== "en";
  return {
    title: isFr
      ? "Formations professionnelles en ligne — QA, QHSE, Digital | Nexo Skills"
      : "Online professional training — QA, QHSE, Digital | Nexo Skills",
    description: isFr
      ? "Formations certifiantes pour professionnels : QA & Tests IA, ISO 9001, Audit qualité, Création de site web avec l'IA. En ligne, weekends, animées par des praticiens en activité."
      : "Certified professional training: QA & AI Testing, ISO 9001, Quality Auditing, Build your website with AI. Online, weekends, taught by active practitioners.",
  };
}

const COURSE_IMAGES: Record<string, string> = {
  "qa":   "/coursesPics/qaIA.jpg",
  "a11y": "/coursesPics/accesbility.jpg",
  "web":  "/coursesPics/web.jpg",
  "iso":  "/coursesPics/iso9001.png",
  "audit":"/coursesPics/auditeur.jpg",
};

const CAT_COLORS: Record<string, { bg: string; text: string; badge: string; cta: string; ctaHover: string }> = {
  "digital-si": { bg: "bg-blue-50",   text: "text-blue-700",   badge: "bg-blue-100 text-blue-700",   cta: "bg-blue-700",   ctaHover: "hover:bg-blue-800"   },
  "qhse":       { bg: "bg-violet-50", text: "text-violet-700", badge: "bg-violet-100 text-violet-700", cta: "bg-violet-700", ctaHover: "hover:bg-violet-800" },
};

// Archived programs — no longer part of the language-course catalog, but this
// page and its Stripe checkout stay reachable via direct link.
type ArchivedCategory = { key: string; label: string; sub: string };
type ArchivedItem = { category: string; badge: string; title: string; sub: string; cta: string; href: string };

const PRO_CATEGORY_DATA: Record<"fr" | "en", ArchivedCategory[]> = {
  fr: [
    { key: "digital-si", label: "Compétences digitales", sub: "Accessibilité web et création de site avec l'IA" },
    { key: "qhse", label: "Qualité & HSE", sub: "ISO 9001, audit interne et sécurité au travail" },
  ],
  en: [
    { key: "digital-si", label: "Digital Skills", sub: "Web accessibility and AI-powered website building" },
    { key: "qhse", label: "Quality & HSE", sub: "ISO 9001, internal audit and workplace safety training" },
  ],
};

const PRO_ITEMS_DATA: Record<"fr" | "en", ArchivedItem[]> = {
  fr: [
    {
      category: "qhse",
      badge: "Juillet 2026 · Weekends",
      title: "ISO 9001:2015 — Management de la Qualité",
      sub: "La norme qualité la plus reconnue au monde, enfin enseignée comme les praticiens en ont besoin.",
      cta: "Réserver ma place — 200$",
      href: "#contact?course=iso",
    },
    {
      category: "digital-si",
      badge: "Août 2026 · 1 weekend",
      title: "Accessibilité web & outils de test",
      sub: "Apprenez à créer et auditer des sites inclusifs — et maîtrisez les outils professionnels.",
      cta: "Réserver ma place — 200$",
      href: "#contact?course=a11y",
    },
    {
      category: "qhse",
      badge: "Septembre 2026 · 1 weekend",
      title: "Devenir auditeur qualité ISO 9001",
      sub: "Planifiez, conduisez et clôturez des audits internes efficaces.",
      cta: "Réserver ma place — 80$",
      href: "#contact?course=audit",
    },
    {
      category: "qhse",
      badge: "18-19 juillet 2026 · 1 weekend",
      title: "HSE Officer Bootcamp",
      sub: "100% pratique : Risk Assessment, JSA, Toolbox Talk, Permit to Work, Incident Investigation.",
      cta: "Réserver ma place — 45 000 FCFA",
      href: "#contact?course=hse",
    },
    {
      category: "digital-si",
      badge: "Août 2026 · 1 weekend",
      title: "Créez votre site web avec l'IA",
      sub: "De l'idée à un site professionnel en ligne, sans une seule ligne de code.",
      cta: "Réserver ma place — 200$",
      href: "#contact?course=web",
    },
  ],
  en: [
    {
      category: "qhse",
      badge: "July 2026 · Weekends",
      title: "ISO 9001:2015 Quality Management",
      sub: "The world's most recognized quality standard, decoded for practitioners.",
      cta: "Reserve My Spot — $200",
      href: "#contact?course=iso",
    },
    {
      category: "digital-si",
      badge: "August 2026 · 1 Weekend",
      title: "Web Accessibility & Testing Tools",
      sub: "Learn to build and audit inclusive websites with professional tools.",
      cta: "Reserve My Spot — $200",
      href: "#contact?course=a11y",
    },
    {
      category: "qhse",
      badge: "September 2026 · 1 Weekend",
      title: "ISO 9001 Internal Auditor",
      sub: "Plan, conduct and close effective internal audits.",
      cta: "Reserve My Spot — $80",
      href: "#contact?course=audit",
    },
    {
      category: "qhse",
      badge: "July 18-19, 2026 · 1 Weekend",
      title: "HSE Officer Bootcamp",
      sub: "100% hands-on: Risk Assessment, JSA, Toolbox Talks, Permit to Work, Incident Investigation.",
      cta: "Reserve My Spot — 45,000 FCFA",
      href: "#contact?course=hse",
    },
    {
      category: "digital-si",
      badge: "August 2026 · 1 Weekend",
      title: "Build Your Website with AI",
      sub: "From idea to a live professional website — no code required.",
      cta: "Reserve My Spot — $200",
      href: "#contact?course=web",
    },
  ],
};

export default async function FormationsProPage({ params }: PageProps<"/[lang]/formations-pro">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang !== "en";
  const localeKey = isFr ? "fr" : "en";

  const proCourses = PRO_ITEMS_DATA[localeKey];
  const proCategories = PRO_CATEGORY_DATA[localeKey];

  return (
    <main className="min-h-screen bg-white">
      <Navbar t={dict.nav} lang={lang} courses={dict.courses} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-5 pb-16 pt-28 text-white md:px-6 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-300">
            {isFr ? "Nexo Skills — Formations professionnelles" : "Nexo Skills — Professional Training"}
          </p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
            {isFr
              ? "Montez en compétences avec des praticiens en activité"
              : "Level up with active practitioners"}
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-blue-100">
            {isFr
              ? "QA & Tests IA, ISO 9001, Audit qualité, Création de site web — des formations certifiantes animées par des professionnels du secteur, en ligne, les weekends."
              : "QA & AI Testing, ISO 9001, Quality Auditing, Website building — certified training led by industry professionals, online, on weekends."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-blue-200">
            {(isFr
              ? ["✓ Praticiens en activité", "✓ 100% pratique — zéro remplissage", "✓ Certificat inclus", "✓ En ligne · Weekends"]
              : ["✓ Active practitioners", "✓ 100% hands-on — zero fluff", "✓ Certificate included", "✓ Online · Weekends"]
            ).map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* Courses by category */}
      <section className="bg-gray-50 px-5 py-16 md:px-6">
        <div className="mx-auto max-w-5xl space-y-14">
          {proCategories.map((cat) => {
            const items = proCourses.filter((c) => c.category === cat.key);
            const col = CAT_COLORS[cat.key] ?? CAT_COLORS["digital-si"];
            return (
              <div key={cat.key}>
                {/* Category header */}
                <div className={`mb-6 flex items-start gap-4 rounded-2xl border border-gray-200 ${col.bg} px-6 py-4`}>
                  <div>
                    <p className={`text-sm font-bold uppercase tracking-widest ${col.text}`}>{cat.label}</p>
                    <p className="text-xs text-gray-500">{cat.sub}</p>
                  </div>
                  <span className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${col.badge}`}>
                    {items.length} {isFr ? (items.length > 1 ? "formations" : "formation") : (items.length > 1 ? "programs" : "program")}
                  </span>
                </div>

                <div className={`grid gap-6 ${items.length === 1 ? "max-w-md" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                  {items.map((course) => {
                    const slug = course.href.replace("#contact?course=", "");
                    const img = COURSE_IMAGES[slug];
                    return (
                      <div key={course.title} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                        {img && (
                          <div className="h-44 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={img} alt={course.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} className="transition-transform duration-500 group-hover:scale-105" />
                          </div>
                        )}
                        <div className="p-6">
                          <div className="mb-3 flex flex-wrap gap-2">
                            <span className={`rounded-full px-3 py-1 text-xs font-medium ${col.badge}`}>{course.badge}</span>
                          </div>
                          <h3 className="mb-2 text-base font-bold text-gray-900">{course.title}</h3>
                          <p className="mb-4 text-sm leading-relaxed text-gray-600">{course.sub}</p>
                          <div className="flex flex-col gap-2">
                            <CourseLink href={course.href} className={`block w-full rounded-xl py-3 text-center text-sm font-semibold text-white transition ${col.cta} ${col.ctaHover}`}>
                              {course.cta}
                            </CourseLink>
                            <a href={`/${lang}/formations/${slug}`} className="block w-full rounded-xl border border-gray-200 py-2.5 text-center text-sm text-gray-600 transition hover:border-blue-300 hover:text-blue-700">
                              {dict.courses.detail_label}
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why Nexo */}
      <section className="bg-white px-5 py-16 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-gray-900">
            {isFr ? "Pourquoi choisir Nexo Skills ?" : "Why choose Nexo Skills?"}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {(isFr ? [
              ["Formateurs praticiens", "Chaque formateur travaille activement dans son domaine. Des exemples réels, pas des slides vieillissants."],
              ["L'IA dès le premier jour", "L'intelligence artificielle est intégrée dans chaque programme — pas un bonus, une réalité du marché."],
              ["Certificat reconnu", "Chaque formation se conclut par un certificat officiel à intégrer sur votre CV et votre LinkedIn."],
            ] : [
              ["Practitioner instructors", "Every trainer actively works in their field. Real examples, not outdated slides."],
              ["AI from day one", "Artificial intelligence is embedded in every program — not a bonus, a market reality."],
              ["Recognized certificate", "Every training ends with an official certificate to add to your CV and LinkedIn."],
            ]).map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-gray-200 p-6">
                <div className="mb-3 h-1 w-8 rounded-full bg-blue-700" />
                <p className="mb-2 font-bold text-gray-900">{title}</p>
                <p className="text-sm leading-relaxed text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 px-5 py-14 text-center md:px-6">
        <h2 className="mb-3 text-2xl font-bold text-white">
          {isFr ? "Prêt à vous lancer ?" : "Ready to get started?"}
        </h2>
        <p className="mb-6 text-blue-200">
          {isFr ? "Choisissez votre formation et réservez votre place dès aujourd'hui." : "Choose your program and reserve your spot today."}
        </p>
        <a href={`/${lang}#formations`} className="inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-blue-50">
          {isFr ? "Voir toutes les formations" : "See all programs"}
        </a>
      </section>

      <Footer t={dict.footer} lang={lang} />
    </main>
  );
}
