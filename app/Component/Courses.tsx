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

const COLORS = {
  blue: {
    section: "border-blue-500/20 bg-gradient-to-r from-blue-500/8 to-transparent",
    label: "text-blue-400",
    dot: "bg-blue-500 shadow-blue-500/50 shadow-sm",
    border: "border-blue-500/20 hover:border-blue-500/40",
    glow: "bg-blue-600/10",
    tag: "bg-blue-600 shadow-blue-600/25 shadow-sm",
    check: "text-blue-400",
    pill: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    cta: "hover:bg-blue-500/10 hover:text-blue-300 hover:border-blue-500/20",
  },
  violet: {
    section: "border-violet-500/20 bg-gradient-to-r from-violet-500/8 to-transparent",
    label: "text-violet-400",
    dot: "bg-violet-500 shadow-violet-500/50 shadow-sm",
    border: "border-violet-500/20 hover:border-violet-500/40",
    glow: "bg-violet-600/10",
    tag: "bg-violet-600 shadow-violet-600/25 shadow-sm",
    check: "text-violet-400",
    pill: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
    cta: "hover:bg-violet-500/10 hover:text-violet-300 hover:border-violet-500/20",
  },
  emerald: {
    section: "border-emerald-500/20 bg-gradient-to-r from-emerald-500/8 to-transparent",
    label: "text-emerald-400",
    dot: "bg-emerald-500 shadow-emerald-500/50 shadow-sm",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    glow: "bg-emerald-600/10",
    tag: "bg-emerald-600 shadow-emerald-600/25 shadow-sm",
    check: "text-emerald-400",
    pill: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    cta: "hover:bg-emerald-500/10 hover:text-emerald-300 hover:border-emerald-500/20",
  },
};

export default function Courses({ t, lang }: { t: CoursesDict; lang: string }) {
  return (
    <section id="formations" className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">{t.label}</p>
          <h2 className="text-4xl font-bold text-slate-100 md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">{t.sub}</p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {t.categories.map((cat) => {
            const c = COLORS[cat.color as keyof typeof COLORS] ?? COLORS.blue;
            const items = t.items.filter((i) => i.category === cat.key);
            if (!items.length) return null;

            return (
              <div key={cat.key}>
                {/* Category header */}
                <div className={`mb-6 flex items-center gap-4 rounded-2xl border ${c.section} px-6 py-4`}>
                  <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.dot}`} />
                  <div>
                    <p className={`text-sm font-bold uppercase tracking-widest ${c.label}`}>{cat.label}</p>
                    <p className="text-xs text-slate-500">{cat.sub}</p>
                  </div>
                  <span className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${c.pill}`}>
                    {items.length} {items.length === 1 ? t.count_one : t.count_other}
                  </span>
                </div>

                {/* Course cards */}
                <div className={`grid gap-5 ${items.length === 1 ? "md:grid-cols-1 max-w-md" : "md:grid-cols-2"}`}>
                  {items.map((course) => (
                    <div
                      key={course.title}
                      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-slate-900/70 p-7 transition-all duration-300 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-2xl ${c.border}`}
                    >
                      {/* Glow */}
                      <div className={`pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-100 ${c.glow} blur-[70px]`} />

                      {/* Top row */}
                      <div className="mb-5 flex flex-wrap items-start gap-2">
                        <span className="rounded-full border border-white/8 px-3 py-1 text-xs text-slate-400">
                          {course.badge}
                        </span>
                        <span className={`rounded-full ${c.tag} px-3 py-1 text-xs font-semibold text-white`}>
                          {course.tag}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-slate-100">{course.title}</h3>
                      <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">{course.sub}</p>

                      <ul className="mb-7 space-y-2">
                        {course.details.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-slate-400">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`h-4 w-4 shrink-0 ${c.check}`}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-col gap-2">
                        <CourseLink
                          href={course.href}
                          className={`block w-full rounded-xl border border-white/5 bg-white/4 py-3 text-center text-sm font-semibold text-slate-300 transition-all duration-200 ${c.cta}`}
                        >
                          {course.cta} →
                        </CourseLink>
                        <a
                          href={`/${lang}/formations/${course.href.replace("#contact?course=", "")}`}
                          className="block w-full rounded-xl border border-white/8 bg-transparent py-2.5 text-center text-sm text-slate-500 transition-all duration-200 hover:border-white/15 hover:text-slate-300"
                        >
                          {t.detail_label}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
