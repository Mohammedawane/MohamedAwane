type IsoModule = { title: string; description: string; tags: string[] };

type IsoDict = {
  label: string;
  title: string;
  sub: string;
  description: string;
  modules: IsoModule[];
  audience_label: string;
  audience: string[];
  cta: string;
  badge: string;
};

export default function IsoSection({ t }: { t: IsoDict }) {
  return (
    <section id="iso-9001" className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-400">{t.label}</p>
          <div className="mb-4 inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1 text-xs text-violet-400">
            {t.badge}
          </div>
          <h2 className="text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">{t.sub}</p>
        </div>

        <p className="mb-12 text-center text-gray-300 leading-relaxed max-w-3xl mx-auto">{t.description}</p>

        {/* Modules */}
        <div className="mb-16 grid gap-4 md:grid-cols-2">
          {t.modules.map((mod, i) => (
            <div key={mod.title} className="group rounded-2xl border border-white/5 bg-slate-900/50 p-6 transition-colors hover:border-violet-500/20">
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-xs font-bold text-violet-400">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-semibold text-white">{mod.title}</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-400">{mod.description}</p>
              <div className="flex flex-wrap gap-2">
                {mod.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-violet-500/10 px-3 py-1 text-xs text-violet-400">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Audience + CTA */}
        <div className="rounded-2xl border border-violet-500/20 bg-violet-600/5 p-6 md:flex md:items-start md:gap-12 md:p-8">
          <div className="flex-1 mb-6 md:mb-0">
            <h3 className="mb-4 font-semibold text-white">{t.audience_label}</h3>
            <ul className="space-y-2">
              {t.audience.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="mt-0.5 h-4 w-4 shrink-0 text-violet-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <a
              href="#contact"
              className="block w-full rounded-xl bg-violet-600 px-8 py-4 text-center font-semibold text-white transition-colors hover:bg-violet-700 md:w-auto"
            >
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
