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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-xs text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
            {t.badge}
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">{t.sub}</p>
        </div>

        {/* 100% practical banner */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-600/5 px-5 py-6 sm:flex-row sm:px-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl">
              🛠️
            </div>
            <p className="font-semibold text-white">{t.practical}</p>
          </div>
          {/* Tools */}
          <div className="flex flex-wrap justify-center gap-2 sm:justify-end">
            {t.tools.map((tool) => (
              <span key={tool} className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Modules */}
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">{t.tools_label}</p>
        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {t.modules.map((mod, i) => (
            <div key={mod.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-colors hover:border-emerald-500/20">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-bold text-emerald-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-white">{mod.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">{mod.description}</p>
              <div className="flex flex-wrap gap-2">
                {mod.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Outcome + Audience + CTA */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Audience */}
          <div className="rounded-2xl border border-white/5 bg-slate-900/50 p-6">
            <h3 className="mb-4 font-semibold text-white">{t.audience_label}</h3>
            <ul className="space-y-2">
              {t.audience.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome + CTA */}
          <div className="flex flex-col justify-between rounded-2xl border border-emerald-500/20 bg-emerald-600/5 p-6">
            <p className="mb-6 text-sm leading-relaxed text-gray-300">{t.outcome}</p>
            <a
              href="#contact"
              className="block w-full rounded-xl bg-emerald-600 py-4 text-center font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
