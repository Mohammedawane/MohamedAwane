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
    <section className="py-16 px-5 md:py-24 md:px-6 bg-white">
      <div className="mx-auto max-w-5xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 px-6 py-16 text-center shadow-2xl sm:px-8 sm:py-20 md:px-16">

          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Top edge */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          <div className="relative">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-blue-100">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-orange-400" />
              </span>
              Nexo Skills
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              {t.title1}{" "}
              <span className="text-orange-400">{t.title2}</span>
            </h2>

            <p className="mx-auto mb-10 max-w-xl text-base text-blue-100 sm:text-lg">{t.sub}</p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="#formations"
                className="w-full rounded-xl bg-orange-500 px-10 py-4 font-bold text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:-translate-y-0.5 sm:w-auto"
              >
                {t.button}
              </a>
              <a
                href="#nous-contacter"
                className="w-full rounded-xl border-2 border-white/30 px-10 py-4 font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
              >
                {t.contact}
              </a>
            </div>

            <p className="mt-8 text-xs text-blue-300">{t.trust}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
