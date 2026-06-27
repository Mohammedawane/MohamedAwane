type AboutDict = {
  label: string;
  title: string;
  description: string;
  points: string[];
};

export default function AboutSection({ t }: { t: AboutDict }) {
  return (
    <section className="bg-gray-50 py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left: text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">{t.label}</p>
            <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl">{t.title}</h2>
            <p className="mb-8 text-base leading-relaxed text-gray-600">{t.description}</p>

            <ul className="space-y-3">
              {t.points.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={3} className="h-3 w-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: blue box */}
          <div className="rounded-2xl bg-gradient-to-br from-blue-800 to-blue-600 p-10 text-white shadow-xl">
            <div className="mb-6 text-4xl font-serif leading-none text-blue-300 opacity-60">&ldquo;</div>
            <p className="mb-6 text-lg font-medium leading-relaxed text-blue-50">
              Nexo Skills, c&apos;est la formation que les praticiens auraient voulu avoir — concrète, actuelle, et qui ouvre de vraies portes.
            </p>
            <div className="border-t border-white/20 pt-6">
              <div className="mb-6 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">150+</div>
                  <div className="mt-1 text-xs text-blue-200">Apprenants formés</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="mt-1 text-xs text-blue-200">Taux de satisfaction</div>
                </div>
              </div>
              <a
                href="#formations"
                className="block w-full rounded-xl bg-orange-500 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-orange-600"
              >
                Voir nos formations
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
