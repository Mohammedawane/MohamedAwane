type WebModule = { title: string; description: string; tags: string[] };

type WebDict = {
  label: string;
  title: string;
  sub: string;
  practical: string;
  tools_label: string;
  tools: string[];
  modules: WebModule[];
  audience_label: string;
  audience: string[];
  cta: string;
  badge: string;
  outcome: string;
};

export default function WebSection({ t }: { t: WebDict }) {
  return (
    <section id="web-ia" className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-emerald-400">{t.label}</p>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-gradient-to-r from-emerald-500/10 to-teal-500/5 px-4 py-1.5 text-xs text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
            </span>
            {t.badge}
          </div>
          <h2 className="text-4xl font-bold text-slate-100 md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-400">{t.sub}</p>
        </div>

        {/* 100% practical banner */}
        <div className="mb-12 flex flex-col gap-4 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-600/8 to-teal-600/4 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl ring-1 ring-emerald-500/20">
              🛠️
            </div>
            <p className="font-semibold text-slate-100">{t.practical}</p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">{t.tools_label}</p>
            <div className="flex flex-wrap gap-2">
              {t.tools.map((tool) => (
                <span key={tool} className="rounded-full border border-emerald-500/20 bg-emerald-500/8 px-3 py-1 text-xs font-medium text-emerald-400 transition-colors hover:bg-emerald-500/15">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modules */}
        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {t.modules.map((mod, i) => (
            <div
              key={mod.title}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-6 transition-all duration-300 hover:border-emerald-500/25 hover:bg-slate-900/80 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/5"
            >
              {/* Corner glow */}
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-600/8 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/5 text-xs font-bold text-emerald-400 ring-1 ring-emerald-500/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-slate-100">{mod.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-slate-400">{mod.description}</p>
              <div className="flex flex-wrap gap-2">
                {mod.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-emerald-500/8 px-3 py-1 text-xs text-emerald-400 ring-1 ring-emerald-500/15">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome + Audience + CTA */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Audience */}
          <div className="rounded-2xl border border-white/5 bg-slate-900/60 p-6">
            <h3 className="mb-4 font-semibold text-slate-100">{t.audience_label}</h3>
            <ul className="space-y-2.5">
              {t.audience.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome + CTA */}
          <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-emerald-600/8 to-slate-900 p-6">
            <p className="mb-6 text-sm leading-relaxed text-slate-300">{t.outcome}</p>
            <a
              href="#contact"
              className="group relative block w-full overflow-hidden rounded-xl bg-emerald-600 py-4 text-center font-semibold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/30"
            >
              <span className="relative z-10">{t.cta}</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
