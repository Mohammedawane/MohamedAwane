import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../../dictionaries";
import FormationEnroll from "@/app/Component/FormationEnroll";

const VALID_COURSES = ["qa", "iso", "web", "a11y", "audit", "tutorat-francais", "tutorat-anglais", "tutorat-math"] as const;
type CourseSlug = (typeof VALID_COURSES)[number];

function isValidCourse(slug: string): slug is CourseSlug {
  return VALID_COURSES.includes(slug as CourseSlug);
}

export default async function FormationPage({
  params,
}: PageProps<"/[lang]/formations/[course]">) {
  const { lang, course } = await params;
  if (!hasLocale(lang)) notFound();
  if (!isValidCourse(course)) notFound();

  const dict = await getDictionary(lang);
  const t = dict.formations;
  const f = t.courses[course];

  const other = lang === "fr" ? "en" : "fr";

  return (
    <main className="min-h-screen bg-[#020817] text-white">
      {/* Minimal header */}
      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#020817]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href={`/${lang}`} className="group flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-bold tracking-tight text-white">
                Nexo <span className="text-blue-400">Skills</span>
              </span>
              <span className="hidden text-[9px] tracking-widest text-slate-600 sm:block">
                CONNECT TO YOUR NEXT LEVEL
              </span>
            </div>
          </a>

          <div className="flex items-center gap-3">
            <a
              href={`/${other}/formations/${course}`}
              className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 transition-all hover:border-white/20 hover:text-slate-300"
            >
              {other}
            </a>
            <a
              href={`/${lang}#formations`}
              className="hidden text-sm text-slate-400 transition-colors hover:text-white sm:block"
            >
              {t.back}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-20 md:px-6 md:pt-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
            {/* Left: content */}
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-semibold text-blue-400">
                  {f.date}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-400">
                  {f.duration}
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-slate-400">
                  {f.cert}
                </span>
              </div>

              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
                {f.title}
              </h1>
              <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-400">
                {f.tagline}
              </p>

              {/* Highlights */}
              <div className="grid gap-4 sm:grid-cols-3">
                {f.highlights.map((h) => (
                  <div
                    key={h.title}
                    className="rounded-xl border border-white/8 bg-slate-900/60 p-5"
                  >
                    <div className="mb-2 h-1 w-8 rounded-full bg-blue-500" />
                    <p className="mb-1.5 text-sm font-bold text-white">{h.title}</p>
                    <p className="text-xs leading-relaxed text-slate-400">{h.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: enroll card (sticky) */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <FormationEnroll
                t={t}
                course={course}
                lang={lang}
                price={f.price}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="px-5 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-3xl font-bold text-white">{t.modules_title}</h2>
          <div className="grid gap-5 md:grid-cols-2">
            {f.modules.map((mod) => (
              <div
                key={mod.num}
                className="group relative overflow-hidden rounded-2xl border border-white/8 bg-slate-900/60 p-7 transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-900"
              >
                <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full bg-blue-600/5 blur-[60px] transition-opacity duration-500 group-hover:bg-blue-600/10" />
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-sm font-bold text-blue-400">
                    {mod.num}
                  </span>
                  <h3 className="text-base font-bold text-white">{mod.title}</h3>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-slate-400">{mod.description}</p>
                <div className="flex flex-wrap gap-2">
                  {mod.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-500/15 bg-blue-500/8 px-3 py-1 text-xs font-medium text-blue-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="px-5 py-16 md:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-2xl border border-white/8 bg-slate-900/40 p-10">
            <h2 className="mb-8 text-3xl font-bold text-white">{t.audience_title}</h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {f.audience.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3 w-3 text-blue-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="mb-8 text-center">
            <h2 className="mb-3 text-3xl font-bold text-white">
              {lang === "fr" ? "Prêt à vous inscrire ?" : "Ready to enroll?"}
            </h2>
            <p className="text-slate-400">
              {lang === "fr"
                ? "Renseignez votre nom et email — vous serez redirigé vers le paiement sécurisé."
                : "Enter your name and email — you'll be redirected to secure payment."}
            </p>
          </div>
          <FormationEnroll t={t} course={course} lang={lang} price={f.price} />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8 text-center text-xs text-slate-600">
        <p>© {new Date().getFullYear()} Nexo Skills — contact@nexoskills.com</p>
      </footer>
    </main>
  );
}
