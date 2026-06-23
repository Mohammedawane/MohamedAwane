type Module = {
  title: string;
  description: string;
  duration: string;
  tags: string[];
};

type ProgramDict = {
  label: string;
  title: string;
  sub: string;
  modules: Module[];
};

export default function Program({ t }: { t: ProgramDict }) {
  return (
    <section id="program" className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">{t.label}</p>
          <h2 className="text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">{t.sub}</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-600/60 via-blue-500/20 to-transparent md:left-8" />

          <div className="space-y-6">
            {t.modules.map((mod, i) => (
              <div key={mod.title} className="group relative flex gap-4 md:gap-10">
                {/* Step circle */}
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950 shadow-lg shadow-blue-500/10 transition-all group-hover:border-blue-500/70 group-hover:shadow-blue-500/25 md:h-16 md:w-16">
                  <span className="text-sm font-bold text-blue-400 md:text-base">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-white/5 bg-slate-900/60 p-6 pb-8 transition-colors group-hover:border-blue-500/15 group-hover:bg-slate-900/80">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-bold text-white">{mod.title}</h3>
                    <span className="rounded-full border border-blue-500/20 bg-blue-500/8 px-3 py-0.5 text-xs font-medium text-blue-400">
                      {mod.duration}
                    </span>
                  </div>
                  <p className="mb-5 text-sm leading-relaxed text-gray-400">{mod.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {mod.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-gray-400 ring-1 ring-white/8">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
