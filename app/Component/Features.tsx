const ICONS: string[] = [
  // AI / sparkle
  "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
  // Person / practitioner
  "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  // Wrench / hands-on
  "M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z",
  // Certificate / star
  "M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z",
  // Career / chart up
  "M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941",
  // Shield / guarantee
  "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
];

const CARD_ACCENTS = [
  { border: "border-blue-200", iconBg: "bg-blue-700", dot: "bg-blue-700" },
  { border: "border-violet-200", iconBg: "bg-violet-700", dot: "bg-violet-700" },
  { border: "border-emerald-200", iconBg: "bg-emerald-700", dot: "bg-emerald-700" },
  { border: "border-amber-200", iconBg: "bg-amber-600", dot: "bg-amber-600" },
  { border: "border-sky-200", iconBg: "bg-sky-700", dot: "bg-sky-700" },
  { border: "border-indigo-200", iconBg: "bg-indigo-700", dot: "bg-indigo-700" },
];

type FeatureItem = { title: string; description: string };

type FeaturesDict = {
  label: string;
  title: string;
  sub: string;
  items: FeatureItem[];
};

export default function Features({ t }: { t: FeaturesDict }) {
  return (
    <section id="why" className="bg-gray-50 py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">{t.label}</p>
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">{t.sub}</p>
        </div>

        {/* All feature cards — uniform 2-column horizontal layout */}
        <div className="grid gap-4 md:grid-cols-2">
          {t.items.map((item, i) => {
            const accent = CARD_ACCENTS[i % CARD_ACCENTS.length];
            const iconPath = ICONS[i] ?? ICONS[0];
            return (
              <div
                key={item.title}
                className={`group flex gap-5 rounded-2xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${accent.border}`}
              >
                {/* Icon */}
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${accent.iconBg}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={1.8} className="h-5 w-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                  </svg>
                </div>

                {/* Text */}
                <div>
                  <h3 className="mb-1.5 text-sm font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
