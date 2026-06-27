import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import FormationEnroll from "@/app/Component/FormationEnroll";

const VALID_COURSES = ["qa", "iso", "web", "a11y", "audit", "tutorat-francais", "tutorat-anglais", "tutorat-math"] as const;
type CourseSlug = (typeof VALID_COURSES)[number];

function isValidCourse(slug: string): slug is CourseSlug {
  return VALID_COURSES.includes(slug as CourseSlug);
}

const COURSE_IMAGES: Record<string, string> = {
  "qa":               "/coursesPics/qaIA.jpg",
  "a11y":             "/coursesPics/accesbility.jpg",
  "web":              "/coursesPics/web.jpg",
  "iso":              "/coursesPics/iso9001.png",
  "audit":            "/coursesPics/auditeur.jpg",
  "tutorat-francais": "/coursesPics/tutorat-francais.jpg",
  "tutorat-anglais":  "/coursesPics/tutorat-anglais.jpg",
  "tutorat-math":     "/coursesPics/tutorat-math.jpg",
};

export default async function FormationPage({
  params,
}: PageProps<"/[lang]/formations/[course]">) {
  const { lang, course } = await params;
  if (!hasLocale(lang)) notFound();
  if (!isValidCourse(course)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.formations;
  const f = t.courses[course];
  const imageSrc = COURSE_IMAGES[course];

  return (
    <main className="min-h-screen bg-white">

      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href={`/${lang}`} className="group flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
              </svg>
            </div>
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageSrc} alt={f.title} className="h-full w-full object-cover" />
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
              <a href={`/${lang}`} className="hover:text-blue-700">Accueil</a>
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
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600">{f.tagline}</p>

            {/* Highlights */}
            <div className="mb-12 grid gap-4 sm:grid-cols-3">
              {f.highlights.map((h) => (
                <div key={h.title} className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                  <div className="mb-3 h-1 w-8 rounded-full bg-blue-700" />
                  <p className="mb-1.5 text-sm font-bold text-gray-900">{h.title}</p>
                  <p className="text-xs leading-relaxed text-gray-600">{h.text}</p>
                </div>
              ))}
            </div>

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

            {/* Audience */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="mb-6 text-xl font-bold text-gray-900">{t.audience_title}</h2>
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
          </div>

          {/* Right column: sticky enroll card */}
          <div id="enroll" className="lg:sticky lg:top-24 lg:self-start">
            <FormationEnroll t={t} course={course} lang={lang} price={f.price} />
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-blue-700 px-5 py-16 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-3 text-3xl font-bold text-white">
            {lang === "fr" ? "Prêt à vous inscrire ?" : "Ready to enroll?"}
          </h2>
          <p className="mb-8 text-blue-200">
            {lang === "fr"
              ? "Renseignez votre nom et email — vous serez redirigé vers le paiement sécurisé."
              : "Enter your name and email — you'll be redirected to secure payment."}
          </p>
          <FormationEnroll t={t} course={course} lang={lang} price={f.price} />
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
  );
}
