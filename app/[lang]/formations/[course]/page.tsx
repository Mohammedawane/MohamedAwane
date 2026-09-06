import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { getDictionary, hasLocale } from "../../dictionaries";
import FormationEnroll from "@/app/Component/FormationEnroll";

const BASE = "https://www.nexo-skills.com";

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/formations/[course]">): Promise<Metadata> {
  const { lang, course } = await params;
  if (!hasLocale(lang) || !isValidCourse(course)) return {};
  const dict = await getDictionary(lang);
  const f = dict.formations.courses[course];
  const imageSrc = COURSE_IMAGES[course];
  return {
    title: `${f.title} — Nexo Skills`,
    description: f.tagline,
    openGraph: {
      title: f.title,
      description: f.tagline,
      url: `${BASE}/${lang}/formations/${course}`,
      siteName: "Nexo Skills",
      locale: lang === "fr" ? "fr_FR" : "en_US",
      type: "website",
      images: imageSrc ? [{ url: `${BASE}${imageSrc}`, width: 1200, height: 630, alt: f.title }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: f.title,
      description: f.tagline,
      images: imageSrc ? [`${BASE}${imageSrc}`] : [],
    },
    alternates: {
      canonical: `${BASE}/${lang}/formations/${course}`,
      languages: {
        fr: `${BASE}/fr/formations/${course}`,
        en: `${BASE}/en/formations/${course}`,
      },
    },
  };
}

const VALID_COURSES = ["conversational-english", "conversational-french", "conversational-arabic", "conversational-spanish", "conversational-italian", "delf", "ielts", "tef-canada", "tcf-canada", "qa", "iso", "web", "a11y", "audit", "hse", "tutorat-francais", "tutorat-anglais", "tutorat-math", "tutorat-arabe", "anglais-vacances-ete"] as const;

// Only these courses have live enrollment + payment
const ACTIVE_COURSES = new Set(["anglais-vacances-ete", "hse", "tutorat-francais", "tutorat-anglais", "tutorat-math"]);

// Open for enrollment now, but priced per learner after a free assessment —
// so they use the contact flow rather than a fixed Stripe price.
const OPEN_CONTACT_COURSES = new Set(["conversational-english", "conversational-french", "conversational-arabic", "conversational-spanish", "conversational-italian"]);
type CourseSlug = (typeof VALID_COURSES)[number];

function isValidCourse(slug: string): slug is CourseSlug {
  return VALID_COURSES.includes(slug as CourseSlug);
}

const COURSE_IMAGES: Record<string, string> = {
  "qa":                   "/coursesPics/qaIA.jpg",
  "a11y":                 "/coursesPics/accesbility.jpg",
  "web":                  "/coursesPics/web.jpg",
  "iso":                  "/coursesPics/iso9001.png",
  "audit":                "/coursesPics/auditeur.jpg",
  "tutorat-francais":     "/coursesPics/tutorat-francais.jpg",
  "tutorat-anglais":      "/coursesPics/tutorat-anglais.jpg",
  "tutorat-math":         "/coursesPics/tutorat-math.jpg",
  "anglais-vacances-ete": "/coursesPics/tutorat-anglais.jpg",
};

export default async function FormationPage({
  params,
}: PageProps<"/[lang]/formations/[course]">) {
  const { lang, course } = await params;
  if (!hasLocale(lang)) notFound();
  if (!isValidCourse(course)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.formations;
  const f = t.courses[course] as (typeof t.courses)[CourseSlug] & {
    idealPace?: string;
    audienceTitle?: string;
    checklist?: string[];
    defaultContactMessage?: string;
    testimonials?: { quote: string; name: string }[];
  };
  const imageSrc = COURSE_IMAGES[course];
  const isActive = ACTIVE_COURSES.has(course);
  // These take leads now (open enrollment) but have no fixed public price yet —
  // individual language classes priced per learner after the free assessment.
  const isOpenContact = OPEN_CONTACT_COURSES.has(course);
  // CashPlus (Morocco-only transfer) doesn't make sense for this Canada-facing offer
  const hideCashplus = course === "tutorat-francais";
  // HSE is now priced in FCFA — swap the Morocco-only CashPlus transfer for Ria
  const altTransfer = course === "hse" ? { name: "Ria", locationFr: "une agence Ria", locationEn: "a Ria agency" } : undefined;
  const isFr = lang !== "en";
  const comingSoonStatus = isFr ? "Ouverture des inscriptions — Automne 2026" : "Enrollment opening — Fall 2026";
  const openLabel = isFr ? "Cours individuel" : "Individual course";
  const openStatus = isFr ? "Bilan de niveau gratuit inclus" : "Free level assessment included";
  const enrollCard = isActive
    ? <FormationEnroll t={t} course={course} lang={lang} price={f.price} hideCashplus={hideCashplus} checklist={f.checklist} defaultContactMessage={f.defaultContactMessage} altTransfer={altTransfer} />
    : isOpenContact
    ? <FormationEnroll t={t} course={course} lang={lang} contactOnly openLabel={openLabel} status={openStatus} checklist={f.checklist} defaultContactMessage={f.defaultContactMessage} />
    : <FormationEnroll t={t} course={course} lang={lang} status={comingSoonStatus} contactOnly />;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": f.title,
    "description": f.tagline,
    "provider": {
      "@type": "Organization",
      "name": "Nexo Skills",
      "sameAs": "https://www.nexo-skills.com",
    },
    "url": `https://www.nexo-skills.com/${lang}/formations/${course}`,
    "image": imageSrc ? `https://www.nexo-skills.com${imageSrc}` : undefined,
    "inLanguage": lang === "fr" ? "fr-FR" : "en-US",
    "courseMode": ["online"],
    "offers": f.price ? {
      "@type": "Offer",
      "price": f.price.replace(/[^0-9.]/g, ""),
      "priceCurrency": f.price.includes("MAD") ? "MAD" : f.price.includes("FCFA") ? "XOF" : f.price.includes("CA") ? "CAD" : "USD",
      "availability": "https://schema.org/InStock",
      "url": `https://www.nexo-skills.com/${lang}/formations/${course}`,
    } : undefined,
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "startDate": f.date,
      "courseWorkload": f.duration,
      "instructor": {
        "@type": "Person",
        "name": "Mohammed Awane",
      },
    },
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <main className="min-h-screen bg-white">

      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href={`/${lang}`} className="group flex items-center gap-3">
            <Image
              src="/logo-icon.png"
              alt="Nexo Skills"
              width={44}
              height={32}
              className="h-8 w-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-tight text-gray-900">
                Nexo <span className="text-blue-700">Skills</span>
              </span>
              <span className="hidden text-[9px] tracking-widest text-gray-400 sm:block">
                CONNECT TO YOUR NEXT LEVEL
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={`/${lang}#formations`}
              className="hidden items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900 sm:flex"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              {t.back}
            </a>
            <a
              href="#enroll"
              className="rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-blue-800"
            >
              {t.enroll_label}
            </a>
          </div>
        </div>
      </header>

      {/* Hero image banner */}
      {imageSrc && (
        <div className="relative h-64 overflow-hidden md:h-80">
          <Image
            src={imageSrc}
            alt={f.title}
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/75 via-gray-900/30 to-transparent" />
          <div className="absolute bottom-6 left-5 flex flex-wrap gap-2 md:left-10">
            <span className="rounded-full bg-blue-700 px-4 py-1.5 text-sm font-semibold text-white">{f.date}</span>
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">{f.duration}</span>
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">{f.cert}</span>
          </div>
        </div>
      )}

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

          {/* Left column */}
          <div>
            {/* Breadcrumb */}
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <a href={`/${lang}`} className="hover:text-blue-700">{isFr ? "Accueil" : "Home"}</a>
              <span>/</span>
              <a href={`/${lang}#formations`} className="hover:text-blue-700">Formations</a>
              <span>/</span>
              <span className="font-medium text-gray-900">{f.title}</span>
            </nav>

            {/* Badges (only if no image banner) */}
            {!imageSrc && (
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">{f.date}</span>
                <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600">{f.duration}</span>
                <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600">{f.cert}</span>
              </div>
            )}

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              {f.title}
            </h1>
            <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">{f.tagline}</p>

            {/* Mobile only: enroll card right after tagline — visitors from Facebook ads see CTA immediately */}
            <div className="mb-10 lg:hidden">
              {enrollCard}
            </div>

            {/* Ideal pace callout */}
            {f.idealPace && (
              <div className="mb-8 flex items-start gap-3 rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5" />
                  </svg>
                </span>
                <p className="text-base font-semibold text-gray-900">{f.idealPace}</p>
              </div>
            )}

            {/* Highlights */}
            <div className={`mb-12 grid gap-4 ${f.highlights.length === 4 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
              {f.highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-3 h-1 w-8 rounded-full bg-blue-700" />
                  <p className="mb-1.5 text-sm font-bold text-gray-900">{h.title}</p>
                  <p className="text-xs leading-relaxed text-gray-600">{h.text}</p>
                </div>
              ))}
            </div>

            {/* Expert tutors — language courses only */}
            {isOpenContact && (
              <div className="mb-12 flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                </span>
                <div>
                  <h2 className="mb-1.5 text-lg font-bold text-gray-900">
                    {isFr ? "Progressez avec des tuteurs experts" : "Practice with Expert Tutors"}
                  </h2>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {isFr
                      ? "Chaque tuteur Nexo Skills est un locuteur natif ou de niveau très avancé, sélectionné à la fois pour sa maîtrise de la langue et sa pédagogie — pour de vraies explications claires et une vraie pratique de conversation, pas un script."
                      : "Every Nexo Skills tutor is a highly proficient or native speaker, carefully selected for both language mastery and teaching skill — so you get clear explanations and real conversation practice, not a script."}
                  </p>
                </div>
              </div>
            )}

            {/* Modules */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">{t.modules_title}</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {f.modules.map((mod) => (
                  <div
                    key={mod.num}
                    className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-blue-200 hover:shadow-md"
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-700 text-sm font-bold text-white">
                        {mod.num}
                      </span>
                      <h3 className="text-sm font-bold text-gray-900">{mod.title}</h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">{mod.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CEFR level assessment — language courses only */}
            {isOpenContact && (
              <div className="mb-12 rounded-2xl border border-blue-200 bg-blue-50 p-8">
                <h2 className="mb-2 text-xl font-bold text-gray-900">
                  {isFr ? "Vous ne savez pas par où commencer ?" : "Not Sure Where to Start?"}
                </h2>
                <p className="mb-6 max-w-2xl text-sm leading-relaxed text-gray-600">
                  {isFr
                    ? "Faites notre bilan gratuit et démarrez au bon niveau — du grand débutant (A1) à l'avancé (C2). On vous associe au bon tuteur et à un programme construit autour de vos objectifs."
                    : "Take our free assessment and get placed at the right level — from complete beginner (A1) to advanced (C2). We'll match you with the right tutor and a plan built around your goals."}
                </p>
                <div className="flex overflow-hidden rounded-xl shadow-sm">
                  {[
                    { label: "A1", color: "bg-blue-200" },
                    { label: "A2", color: "bg-blue-300" },
                    { label: "B1", color: "bg-blue-400" },
                    { label: "B2", color: "bg-blue-500" },
                    { label: "C1", color: "bg-blue-600" },
                    { label: "C2", color: "bg-blue-700" },
                  ].map((level) => (
                    <div key={level.label} className={`flex-1 py-3 text-center text-xs font-bold text-white ${level.color}`}>
                      {level.label}
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-xs text-gray-500">
                  <span>{isFr ? "Débutant" : "Beginner"}</span>
                  <span>{isFr ? "Avancé" : "Advanced"}</span>
                </div>
              </div>
            )}

            {/* Audience */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="mb-6 text-xl font-bold text-gray-900">{f.audienceTitle ?? t.audience_title}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {f.audience.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cross-links to other formats — language courses only */}
            {isOpenContact && (
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                <a
                  href={`/${lang}/entreprise`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
                >
                  <p className="mb-1.5 text-sm font-bold text-gray-900">
                    {isFr ? "Formation linguistique pour vos équipes" : "Language Training for Teams"}
                  </p>
                  <p className="mb-3 text-xs leading-relaxed text-gray-600">
                    {isFr
                      ? "Formez vos collaborateurs avec des programmes sur mesure — anglais des affaires, français professionnel, et plus."
                      : "Upskill your workforce with custom business language programs — business English, professional French, and more."}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
                    {isFr ? "Voir les solutions entreprise" : "See business solutions"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </a>
                <a
                  href={`/${lang}#formations`}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-md"
                >
                  <p className="mb-1.5 text-sm font-bold text-gray-900">
                    {isFr ? "Cours pour enfants & tutorat primaire" : "Kids' Classes & Primary Tutoring"}
                  </p>
                  <p className="mb-3 text-xs leading-relaxed text-gray-600">
                    {isFr
                      ? "Séances individuelles ou pack vacances en petit groupe, pensés pour les enfants du primaire."
                      : "Individual sessions or a small-group summer pack, designed for primary school children."}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-700">
                    {isFr ? "Voir les cours pour enfants" : "See kids' courses"}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </a>
              </div>
            )}

            {/* Testimonials */}
            {f.testimonials && f.testimonials.length > 0 && (
              <div className="mt-12">
                <h2 className="mb-6 text-xl font-bold text-gray-900">
                  {isFr ? "Ce que nos familles nous disent" : "What our families tell us"}
                </h2>
                <div className="grid gap-4 sm:grid-cols-3">
                  {f.testimonials.map((tst) => (
                    <div key={tst.name} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="mb-3 h-6 w-6 text-blue-200">
                        <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H4.5a2.67 2.67 0 0 1 2.67-2.67V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H14.5a2.67 2.67 0 0 1 2.67-2.67V6Z" />
                      </svg>
                      <p className="mb-4 text-sm italic leading-relaxed text-gray-700">"{tst.quote}"</p>
                      <p className="text-sm font-semibold text-gray-900">— {tst.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right column: sticky enroll card — desktop only, mobile version is above */}
          <div id="enroll" className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
            {enrollCard}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-blue-700 px-5 py-16 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-white">
            {isActive
              ? (isFr ? "Prêt à vous inscrire ?" : "Ready to enroll?")
              : isOpenContact
              ? (isFr ? "Prêt à commencer ?" : "Ready to start?")
              : (isFr ? "Intéressé(e) par cette formation ?" : "Interested in this program?")}
          </h2>
          <p className="mb-8 text-blue-200">
            {isActive
              ? (isFr ? "Renseignez votre nom et email — vous serez redirigé vers le paiement sécurisé." : "Enter your name and email — you'll be redirected to secure payment.")
              : isOpenContact
              ? (isFr ? "Laissez vos coordonnées — on vous recontacte sous 24h pour planifier votre bilan de niveau gratuit." : "Leave your details — we'll reach out within 24h to schedule your free level assessment.")
              : (isFr ? "Laissez vos coordonnées et nous vous préviendrons dès l'ouverture des inscriptions." : "Leave your details and we'll notify you as soon as enrollment opens.")}
          </p>
          {/* Mobile: simple anchor to the form above to avoid duplication */}
          <a
            href="#enroll"
            className="lg:hidden inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5"
          >
            {isActive
              ? (isFr ? "Réserver ma place" : "Book my spot")
              : isOpenContact
              ? (isFr ? "Réserver mon bilan gratuit" : "Book my free assessment")
              : (isFr ? "Me prévenir à l'ouverture" : "Notify me when open")}
          </a>
          {/* Desktop: show form inline */}
          <div className="hidden lg:block">
            {enrollCard}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nexo Skills —{" "}
          <a href="mailto:info@nexo-skills.com" className="hover:text-blue-700">
            info@nexo-skills.com
          </a>
        </p>
      </footer>
    </main>
    </>
  );
}
