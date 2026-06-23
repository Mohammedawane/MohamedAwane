type CTADict = {
  title1: string;
  title2: string;
  sub: string;
  button: string;
  contact: string;
  trust: string;
};

export default function CTA({ t }: { t: CTADict }) {
  return (
    <section className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950/80 to-slate-900" />
          {/* Glows */}
          <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-blue-600/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-indigo-600/20 blur-[80px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/8 blur-[80px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Top edge highlight */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="relative px-6 py-12 text-center sm:px-8 sm:py-16 md:px-16 md:py-20">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-300">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-500" />
              </span>
              Nexo Skills
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t.title1}{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base text-slate-400 sm:text-lg">{t.sub}</p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#formations"
                className="group relative w-full overflow-hidden rounded-xl px-10 py-4 font-bold text-white shadow-2xl shadow-blue-600/30 transition-all sm:w-auto"
                style={{ background: "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)" }}
              >
                <span className="relative z-10">{t.button}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)" }} />
              </a>
              <a
                href="#contact"
                className="w-full rounded-xl border border-white/10 px-10 py-4 font-semibold text-slate-300 backdrop-blur-sm transition-all hover:border-blue-400/30 hover:bg-blue-500/5 hover:text-white sm:w-auto"
              >
                {t.contact}
              </a>
            </div>

            <p className="mt-8 text-xs text-slate-600">{t.trust}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
