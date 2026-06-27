const ICON_PATHS: Record<string, string> = {
  calendar: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5",
  video: "m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z",
  user: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z",
  briefcase: "M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z",
};

const ICON_COLORS = [
  { bg: "bg-blue-50", icon: "text-blue-700" },
  { bg: "bg-violet-50", icon: "text-violet-700" },
  { bg: "bg-emerald-50", icon: "text-emerald-700" },
  { bg: "bg-orange-50", icon: "text-orange-600" },
];

type ModalityItem = {
  icon: string;
  title: string;
  description: string;
};

type ModalitiesDict = {
  title: string;
  sub: string;
  items: ModalityItem[];
};

export default function Modalities({ t }: { t: ModalitiesDict }) {
  return (
    <section className="bg-gray-50 py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">{t.sub}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const color = ICON_COLORS[i % ICON_COLORS.length];
            const iconPath = ICON_PATHS[item.icon] ?? ICON_PATHS.briefcase;
            return (
              <div
                key={i}
                className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${color.bg}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className={`h-6 w-6 ${color.icon}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
                  </svg>
                </div>
                <h3 className="mb-2 text-base font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
