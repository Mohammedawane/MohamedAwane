type CourseItem = {
  category: string;
  badge: string;
  tag: string;
  title: string;
  sub: string;
  details: string[];
  cta: string;
  href: string;
};

type Category = {
  key: string;
  label: string;
  sub: string;
  color: string;
};

type CoursesDict = {
  label: string;
  title: string;
  sub: string;
  categories: Category[];
  items: CourseItem[];
  count_one: string;
  count_other: string;
  detail_label: string;
};

import CourseLink from "./CourseLink";

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

const COLORS = {
  blue: {
    header: "bg-gradient-to-r from-blue-700 to-blue-500",
    badge: "bg-blue-100 text-blue-700",
    tag: "bg-blue-700 text-white",
    check: "text-blue-600",
    pill: "bg-blue-50 text-blue-700 border border-blue-200",
    categoryDot: "bg-blue-600",
    categoryLabel: "text-blue-700",
    ctaPrimary: "bg-blue-700 text-white hover:bg-blue-800",
    ctaSecondary: "border-gray-200 text-gray-600 hover:border-blue-300 hover:text-blue-700",
  },
  violet: {
    header: "bg-gradient-to-r from-violet-700 to-violet-500",
    badge: "bg-violet-100 text-violet-700",
    tag: "bg-violet-700 text-white",
    check: "text-violet-600",
    pill: "bg-violet-50 text-violet-700 border border-violet-200",
    categoryDot: "bg-violet-600",
    categoryLabel: "text-violet-700",
    ctaPrimary: "bg-violet-700 text-white hover:bg-violet-800",
    ctaSecondary: "border-gray-200 text-gray-600 hover:border-violet-300 hover:text-violet-700",
  },
  emerald: {
    header: "bg-gradient-to-r from-emerald-700 to-emerald-500",
    badge: "bg-emerald-100 text-emerald-700",
    tag: "bg-emerald-700 text-white",
    check: "text-emerald-600",
    pill: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    categoryDot: "bg-emerald-600",
    categoryLabel: "text-emerald-700",
    ctaPrimary: "bg-emerald-700 text-white hover:bg-emerald-800",
    ctaSecondary: "border-gray-200 text-gray-600 hover:border-emerald-300 hover:text-emerald-700",
  },
  amber: {
    header: "bg-gradient-to-r from-amber-600 to-amber-400",
    badge: "bg-amber-100 text-amber-700",
    tag: "bg-amber-600 text-white",
    check: "text-amber-600",
    pill: "bg-amber-50 text-amber-700 border border-amber-200",
    categoryDot: "bg-amber-500",
    categoryLabel: "text-amber-700",
    ctaPrimary: "bg-amber-600 text-white hover:bg-amber-700",
    ctaSecondary: "border-gray-200 text-gray-600 hover:border-amber-300 hover:text-amber-700",
  },
};

const ACTIVE_COURSES = new Set(["anglais-vacances-ete", "hse"]);

export default function Courses({ t, lang }: { t: CoursesDict; lang: string }) {
  const isFr = lang !== "en";
  return (
    <section id="formations" className="bg-white py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">{t.label}</p>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">{t.sub}</p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {t.categories.map((cat) => {
            const c = COLORS[cat.color as keyof typeof COLORS] ?? COLORS.blue;
            const items = t.items.filter((i) => i.category === cat.key);
            if (!items.length) return null;

            return (
              <div key={cat.key} id={cat.key}>
                {/* Category header */}
                <div className="mb-6 flex items-center gap-4 rounded-2xl border border-gray-200 bg-gray-50 px-6 py-4">
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.categoryDot}`} />
                  <div>
                    <p className={`text-sm font-bold uppercase tracking-widest ${c.categoryLabel}`}>{cat.label}</p>
                    <p className="text-xs text-gray-500">{cat.sub}</p>
                  </div>
                  <span className={`ml-auto shrink-0 whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${c.pill}`}>
                    {items.length} {items.length === 1 ? t.count_one : t.count_other}
                  </span>
                </div>

                {/* Course cards */}
                <div className={`grid gap-6 ${items.length === 1 ? "md:grid-cols-1 max-w-md" : "md:grid-cols-2 lg:grid-cols-3"}`}>
                  {items.map((course) => {
                    const slug = course.href.replace("#contact?course=", "");
                    const imageSrc = COURSE_IMAGES[slug];
                    const isActive = ACTIVE_COURSES.has(slug);
                    return (
                    <div
                      key={course.title}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      {/* Course image / fallback gradient */}
                      <div className="relative h-52 overflow-hidden">
                        {imageSrc ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={imageSrc}
                            alt={course.title}
                            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }}
                            className="transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className={`h-full ${c.header} flex items-center justify-center`}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.5} className="h-12 w-12 opacity-60">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                            </svg>
                          </div>
                        )}
                        {/* Prochainement overlay badge */}
                        {!isActive && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                            <span className="rounded-full bg-white/95 px-5 py-2 text-sm font-bold tracking-wide text-gray-800 shadow-lg">
                              {isFr ? "Prochainement" : "Coming soon"}
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col p-6">
                        {/* Top chips */}
                        <div className="mb-4 flex flex-wrap items-center gap-2">
                          <span className={`rounded-full px-3 py-1 text-xs font-medium ${c.badge}`}>
                            {course.badge}
                          </span>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold ${c.tag}`}>
                            {course.tag}
                          </span>
                        </div>

                        <h3 className="mb-2 text-lg font-bold text-gray-900">{course.title}</h3>
                        <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">{course.sub}</p>

                        <ul className="mb-6 space-y-2">
                          {course.details.filter((d) => !d.includes("$") && !d.includes("MAD") && !d.includes("€") && !/\d+\s*DH/.test(d)).map((d) => (
                            <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={`h-4 w-4 shrink-0 ${c.check}`}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                              </svg>
                              {d}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-col gap-2 mt-auto">
                          {isActive ? (
                            <CourseLink
                              href={course.href}
                              className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition-all duration-200 ${c.ctaPrimary}`}
                            >
                              {course.cta}
                            </CourseLink>
                          ) : (
                            <CourseLink
                              href={course.href}
                              className="block w-full rounded-xl border-2 border-gray-300 py-3 text-center text-sm font-semibold text-gray-600 transition-all duration-200 hover:border-gray-400 hover:text-gray-800"
                            >
                              {isFr ? "Me prévenir à l'ouverture" : "Notify me when open"}
                            </CourseLink>
                          )}
                          <a
                            href={`/${lang}/formations/${slug}`}
                            className={`block w-full rounded-xl border py-2.5 text-center text-sm transition-all duration-200 ${c.ctaSecondary}`}
                          >
                            {t.detail_label}
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
      </div>
    </section>
  );
}
