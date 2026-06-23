type TestimonialItem = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
};

type TestimonialsDict = {
  label: string;
  title: string;
  items: TestimonialItem[];
};

const AVATAR_COLORS = [
  "from-blue-600 to-blue-400",
  "from-violet-600 to-violet-400",
  "from-emerald-600 to-emerald-400",
];

export default function Testimonials({ t }: { t: TestimonialsDict }) {
  return (
    <section className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">{t.label}</p>
          <h2 className="text-4xl font-bold md:text-5xl">{t.title}</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {t.items.map((item, i) => (
            <div
              key={item.name}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-slate-900/60 p-7 transition-colors hover:border-white/10 hover:bg-slate-900"
            >
              {/* Large quote mark */}
              <div className="absolute right-5 top-4 select-none text-8xl font-serif leading-none text-white/4 transition-colors group-hover:text-white/6">
                &ldquo;
              </div>

              {/* Stars */}
              <div className="mb-5 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-amber-400">
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="mb-7 flex-1 text-sm leading-relaxed text-gray-300">
                {item.quote}
              </p>

              {/* Divider */}
              <div className="mb-5 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_COLORS[i] ?? AVATAR_COLORS[0]} text-xs font-bold text-white shadow-lg`}>
                  {item.avatar}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{item.name}</div>
                  <div className="text-xs text-gray-500">{item.role}</div>
                  <div className="text-xs text-gray-600">{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
