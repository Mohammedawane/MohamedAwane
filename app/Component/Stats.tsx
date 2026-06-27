type StatsDict = {
  items: Array<{ value: string; label: string }>;
};

export default function Stats({ t }: { t: StatsDict }) {
  return (
    <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-16 px-5 md:py-20 md:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center rounded-2xl bg-white/10 px-6 py-8 text-center backdrop-blur-sm border border-white/20"
            >
              <div className="mb-2 text-4xl font-extrabold text-white md:text-5xl">{item.value}</div>
              <div className="text-sm font-medium text-blue-100">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
