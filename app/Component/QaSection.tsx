type QaSectionDict = { label: string; title: string; sub: string };

export default function QaSection({ t }: { t: QaSectionDict }) {
  return (
    <div id="ia-qa" className="border-t border-white/5 pt-8 pb-2 text-center">
      <div className="mx-auto max-w-5xl px-6">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">{t.label}</p>
        <h2 className="text-3xl font-bold md:text-4xl">{t.title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-gray-400">{t.sub}</p>
      </div>
    </div>
  );
}
