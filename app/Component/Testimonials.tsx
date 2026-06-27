type TestimonialItem = {
  name: string;
  avatar: string;
  quote: string;
};

type TestimonialsDict = {
  label: string;
  title: string;
  items: TestimonialItem[];
};

const AVATAR_COLORS = [
  "from-blue-600 to-indigo-400",
  "from-violet-600 to-purple-400",
  "from-emerald-600 to-teal-400",
  "from-rose-600 to-pink-400",
  "from-amber-600 to-orange-400",
];

function Card({ item, i }: { item: TestimonialItem; i: number }) {
  return (
    <div className="group relative flex w-80 shrink-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Quote watermark */}
      <div className="absolute right-5 top-4 select-none font-serif text-7xl leading-none text-gray-100">
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
      <p className="mb-7 flex-1 text-sm leading-relaxed text-gray-700">{item.quote}</p>

      {/* Divider */}
      <div className="mb-5 h-px bg-gray-100" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_COLORS[i % AVATAR_COLORS.length]} text-xs font-bold text-white shadow`}>
          {item.avatar}
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900">{item.name}</div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials({ t }: { t: TestimonialsDict }) {
  const doubled = [...t.items, ...t.items, ...t.items, ...t.items];

  return (
    <section className="bg-gray-50 py-16 md:py-24 overflow-hidden">
      <div className="mb-16 px-5 text-center md:px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">{t.label}</p>
        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">{t.title}</h2>
      </div>

      {/* Marquee track */}
      <div className="relative">
        {/* Fade edges */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-gray-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-gray-50 to-transparent" />

        <div className="animate-marquee flex gap-5 pb-4">
          {doubled.map((item, i) => (
            <Card key={`${item.name}-${i}`} item={item} i={i % t.items.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
