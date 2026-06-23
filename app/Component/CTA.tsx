type CTADict = {
  title1: string;
  title2: string;
  sub: string;
  button: string;
  trust: string;
};

export default function CTA({ t }: { t: CTADict }) {
  return (
    <section className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-slate-900">
          {/* Background layers */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-900 to-slate-900" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-blue-500/10 blur-[60px]" />

          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="relative px-6 py-12 text-center sm:px-8 sm:py-16 md:px-16 md:py-20">
            {/* Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-400">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Nexo Skills
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {t.title1}{" "}
              <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">
                {t.title2}
              </span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base text-gray-400 sm:text-lg">{t.sub}</p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#formations"
                className="group relative w-full overflow-hidden rounded-xl bg-blue-600 px-10 py-4 font-bold text-white shadow-xl shadow-blue-600/25 transition-all hover:bg-blue-500 sm:w-auto"
              >
                <span className="relative z-10">{t.button}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>
              <a
                href="#contact"
                className="w-full rounded-xl border border-white/10 px-10 py-4 font-semibold text-gray-300 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white sm:w-auto"
              >
                Contact Us →
              </a>
            </div>

            <p className="mt-7 text-sm text-gray-600">{t.trust}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
