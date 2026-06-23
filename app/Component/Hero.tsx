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
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-24">

      {/* Grid background */}
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="animate-float absolute left-1/2 top-1/4 h-[640px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/18 blur-[120px]"
          style={{ animationDuration: "9s" }}
        />
        <div
          className="animate-float-rev absolute right-[-5%] top-[-5%] h-[420px] w-[420px] rounded-full bg-violet-600/12 blur-[100px]"
          style={{ animationDuration: "11s" }}
        />
        <div
          className="animate-float absolute bottom-[5%] left-[-5%] h-[320px] w-[320px] rounded-full bg-indigo-500/10 blur-[90px]"
          style={{ animationDuration: "13s", animationDelay: "-4s" }}
        />
        <div
          className="animate-pulse-glow absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/8 blur-[60px]"
        />
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 h-56 bg-gradient-to-t from-[var(--background)] to-transparent" />

      <div className="mx-auto max-w-5xl text-center">

        {/* Badge */}
        <div
          className="animate-fade-up mb-8 inline-flex flex-wrap items-center justify-center gap-2.5 rounded-full border border-blue-500/25 bg-blue-500/8 px-5 py-2 text-sm text-blue-300 backdrop-blur-sm"
          style={{ animationDelay: "0ms" }}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500" />
          </span>
          {t.badge}
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up mb-6 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ animationDelay: "110ms" }}
        >
          {t.headline[0]}{" "}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-500 bg-clip-text text-transparent">
            {t.headline[1]}
          </span>
          <br />
          <span className="text-slate-300">{t.headline[2]}</span>
        </h1>

        {/* Sub */}
        <p
          className="animate-fade-up mx-auto mb-12 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl"
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
            className="group relative w-full overflow-hidden rounded-2xl px-10 py-4 font-semibold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/40 sm:w-auto"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)" }}
          >
            <span className="relative z-10">{t.cta_primary}</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)" }} />
          </a>
          <a
            href="#contact"
            className="w-full rounded-2xl border border-white/10 px-10 py-4 font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-white/25 hover:bg-white/5 hover:text-white sm:w-auto"
          >
            {t.cta_secondary}
          </a>
        </div>

        {/* Stats */}
        <div
          className="animate-fade-up mt-16 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-white/2 px-4 py-6 backdrop-blur-sm sm:mt-20 sm:flex-row sm:gap-0 sm:px-8"
          style={{ animationDelay: "520ms" }}
        >
          {[
            { value: t.stat1.value, label: t.stat1.label, icon: "M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" },
            { value: stat2Value, label: t.stat2.label, icon: "M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" },
            { value: t.stat3.value, label: t.stat3.label, icon: "M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" },
          ].map((stat, i) => (
            <div key={i} className="flex flex-1 flex-col items-center gap-1 px-8 py-2 sm:border-l sm:border-white/5 sm:first:border-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="mb-1 h-5 w-5 text-blue-400">
                <path strokeLinecap="round" strokeLinejoin="round" d={stat.icon} />
              </svg>
              <div className="text-3xl font-bold text-white">
                <Counter value={stat.value} />
              </div>
              <div className="text-xs text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
