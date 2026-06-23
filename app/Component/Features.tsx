const ICONS = [
  "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z",
  "M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z",
  "M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5",
  "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5",
  "M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z",
  "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
];

const ACCENTS = [
  {
    icon: "text-blue-400",
    iconBg: "from-blue-600/20 to-blue-500/5 border-blue-500/20",
    watermark: "group-hover:text-blue-500/10",
    glow: "group-hover:opacity-100",
    glowColor: "bg-blue-600/8",
    border: "hover:border-blue-500/25",
  },
  {
    icon: "text-violet-400",
    iconBg: "from-violet-600/20 to-violet-500/5 border-violet-500/20",
    watermark: "group-hover:text-violet-500/10",
    glow: "group-hover:opacity-100",
    glowColor: "bg-violet-600/8",
    border: "hover:border-violet-500/25",
  },
  {
    icon: "text-emerald-400",
    iconBg: "from-emerald-600/20 to-emerald-500/5 border-emerald-500/20",
    watermark: "group-hover:text-emerald-500/10",
    glow: "group-hover:opacity-100",
    glowColor: "bg-emerald-600/8",
    border: "hover:border-emerald-500/25",
  },
  {
    icon: "text-sky-400",
    iconBg: "from-sky-600/20 to-sky-500/5 border-sky-500/20",
    watermark: "group-hover:text-sky-500/10",
    glow: "group-hover:opacity-100",
    glowColor: "bg-sky-600/8",
    border: "hover:border-sky-500/25",
  },
  {
    icon: "text-indigo-400",
    iconBg: "from-indigo-600/20 to-indigo-500/5 border-indigo-500/20",
    watermark: "group-hover:text-indigo-500/10",
    glow: "group-hover:opacity-100",
    glowColor: "bg-indigo-600/8",
    border: "hover:border-indigo-500/25",
  },
  {
    icon: "text-rose-400",
    iconBg: "from-rose-600/20 to-rose-500/5 border-rose-500/20",
    watermark: "group-hover:text-rose-500/10",
    glow: "group-hover:opacity-100",
    glowColor: "bg-rose-600/8",
    border: "hover:border-rose-500/25",
  },
];

type FeaturesDict = {
  label: string;
  title: string;
  sub: string;
  items: { title: string; description: string }[];
};

export default function Features({ t }: { t: FeaturesDict }) {
  return (
    <section id="why" className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">{t.label}</p>
          <h2 className="text-4xl font-bold text-slate-100 md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-400">{t.sub}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item, i) => {
            const a = ACCENTS[i % ACCENTS.length];
            return (
              <div
                key={item.title}
                className={`group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-6 transition-all duration-300 hover:bg-slate-900/90 hover:-translate-y-0.5 hover:shadow-xl ${a.border}`}
              >
                {/* Corner glow */}
                <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 ${a.glowColor} ${a.glow}`} />

                {/* Number watermark */}
                <span className={`absolute right-5 top-4 select-none text-6xl font-bold text-white/4 transition-colors duration-300 ${a.watermark}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className={`mb-5 inline-flex rounded-xl border bg-gradient-to-br p-3 ${a.iconBg} ${a.icon}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d={ICONS[i] ?? ICONS[0]} />
                  </svg>
                </div>

                <h3 className="mb-2 text-base font-bold text-slate-100">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-400">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
