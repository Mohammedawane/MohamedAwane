import Counter from "./Counter";

type HeroDict = {
  badge: string;
  headline: string[];
  sub: string;
  cta_primary: string;
  cta_secondary: string;
  stat1: { value: string; label: string };
  stat2: { value: string; label: string };
  stat3: { value: string; label: string };
};

export default function Hero({ t, coursesCount }: { t: HeroDict; coursesCount?: number }) {
  const stat2Value = coursesCount !== undefined ? String(coursesCount) : t.stat2.value;

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">

      {/* Subtle pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Light orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="animate-float absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/20 blur-[100px]"
          style={{ animationDuration: "9s" }}
        />
        <div
          className="animate-float-rev absolute right-[-5%] top-[-5%] h-[300px] w-[300px] rounded-full bg-indigo-400/15 blur-[80px]"
          style={{ animationDuration: "11s" }}
        />
      </div>

      <div className="relative mx-auto max-w-5xl text-center">

        {/* Badge */}
        <div
          className="animate-fade-up mb-8 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm text-blue-100 backdrop-blur-sm"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
          </span>
          {t.badge}
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up mb-6 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ animationDelay: "110ms" }}
        >
          {t.headline[0]}{" "}
          <span className="text-orange-400">
            {t.headline[1]}
          </span>
          <br />
          <span className="text-blue-200">{t.headline[2]}</span>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up mx-auto mb-12 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg md:text-xl"
          style={{ animationDelay: "240ms" }}
        >
          {t.sub}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "370ms" }}
        >
          <a
            href="#formations"
            className="w-full rounded-xl bg-orange-500 px-10 py-4 font-semibold text-white shadow-lg transition-all duration-200 hover:bg-orange-600 hover:-translate-y-0.5 sm:w-auto"
          >
            {t.cta_primary}
          </a>
          <a
            href="#nous-contacter"
            className="w-full rounded-xl border-2 border-white/40 px-10 py-4 font-semibold text-white transition-all duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
          >
            {t.cta_secondary}
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-16 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-6 backdrop-blur-sm sm:mt-20 sm:flex-row sm:gap-0 sm:px-8"
          style={{ animationDelay: "520ms" }}
        >
          {[
            { value: t.stat1.value, label: t.stat1.label },
            { value: stat2Value, label: t.stat2.label },
            { value: t.stat3.value, label: t.stat3.label },
          ].map((stat, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1 px-8 py-2 sm:border-l sm:border-white/15 sm:first:border-0">
              <div className="text-3xl font-bold text-white">
                <Counter value={stat.value} />
              </div>
              <div className="text-xs text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
