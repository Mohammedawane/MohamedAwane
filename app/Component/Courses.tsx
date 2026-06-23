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
};

const COLORS = {
  blue: {
    section: "border-blue-500/20 bg-blue-500/5",
    label: "text-blue-400",
    dot: "bg-blue-500",
    border: "border-blue-500/30",
    glow: "bg-blue-600/10",
    tag: "bg-blue-600",
    check: "text-blue-400",
    pill: "bg-blue-500/10 text-blue-400",
  },
  violet: {
    section: "border-violet-500/20 bg-violet-500/5",
    label: "text-violet-400",
    dot: "bg-violet-500",
    border: "border-violet-500/30",
    glow: "bg-violet-600/10",
    tag: "bg-violet-600",
    check: "text-violet-400",
    pill: "bg-violet-500/10 text-violet-400",
  },
  emerald: {
    section: "border-emerald-500/20 bg-emerald-500/5",
    label: "text-emerald-400",
    dot: "bg-emerald-500",
    border: "border-emerald-500/30",
    glow: "bg-emerald-600/10",
    tag: "bg-emerald-600",
    check: "text-emerald-400",
    pill: "bg-emerald-500/10 text-emerald-400",
  },
};

export default function Courses({ t }: { t: CoursesDict }) {
  return (
    <section id="formations" className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">{t.label}</p>
          <h2 className="text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">{t.sub}</p>
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
                    <p className="text-xs text-gray-500">{cat.sub}</p>
                  </div>
                  <span className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold ${c.pill}`}>
                    {items.length} {items.length === 1 ? "program" : "programs"}
                  </span>
                </div>

                {/* Course cards */}
                <div className={`grid gap-5 ${items.length === 1 ? "md:grid-cols-1 max-w-md" : "md:grid-cols-2"}`}>
                  {items.map((course) => (
                    <div
                      key={course.title}
                      className={`relative flex flex-col rounded-2xl border ${c.border} bg-slate-900/80 p-7 transition-colors hover:bg-slate-900`}
                    >
                      {/* Glow */}
                      <div className={`pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-full ${c.glow} blur-[60px]`} />

                      {/* Top row */}
                      <div className="mb-5 flex flex-wrap items-start gap-2">
                        <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                          {course.badge}
                        </span>
                        <span className={`rounded-full ${c.tag} px-3 py-1 text-xs font-semibold text-white`}>
                          {course.tag}
                        </span>
                      </div>

                      <h3 className="mb-3 text-xl font-bold text-white">{course.title}</h3>
                      <p className="mb-5 flex-1 text-sm text-gray-400">{course.sub}</p>

                      <ul className="mb-7 space-y-2">
                        {course.details.map((d) => (
                          <li key={d} className="flex items-center gap-2 text-sm text-gray-400">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`h-4 w-4 shrink-0 ${c.check}`}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {d}
                          </li>
                        ))}
                      </ul>

                      <a
                        href={course.href}
                        className="block w-full rounded-xl bg-white/5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/10"
                      >
                        {course.cta} →
                      </a>
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
