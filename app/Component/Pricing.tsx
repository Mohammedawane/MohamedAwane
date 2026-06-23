type PricingDict = {
  label: string;
  title: string;
  sub: string;
  price: string;
  period: string;
  installment: string;
  badge: string;
  included: string[];
  cta: string;
  guarantee: string;
};

export default function Pricing({ t }: { t: PricingDict }) {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">{t.label}</p>
          <h2 className="text-4xl font-bold md:text-5xl">{t.title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-400">{t.sub}</p>
        </div>

        <div className="mx-auto max-w-md">
          {/* Outer glow ring */}
          <div className="relative rounded-3xl p-px">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent" />

            <div className="relative rounded-3xl bg-gradient-to-b from-slate-800/80 to-slate-900 p-8">
              {/* Glow inside */}
              <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-600/15 blur-[60px]" />

              {/* Badge */}
              <div className="mb-8 flex justify-center">
                <span className="rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-md shadow-blue-600/30">
                  {t.badge}
                </span>
              </div>

              {/* Price */}
              <div className="mb-8 text-center">
                <div className="flex items-end justify-center gap-2">
                  <span className="text-7xl font-bold tracking-tight text-white">{t.price}</span>
                </div>
                <p className="mt-2 text-sm text-gray-400">{t.period}</p>
                <p className="mt-1 text-xs text-gray-600">{t.installment}</p>
              </div>

              {/* Divider */}
              <div className="mb-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Included items */}
              <ul className="mb-8 space-y-3.5">
                {t.included.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-blue-500/15">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-2.5 w-2.5 text-blue-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className="group relative block w-full overflow-hidden rounded-xl bg-blue-600 py-4 text-center font-bold text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-500 hover:shadow-blue-500/40"
              >
                <span className="relative z-10">{t.cta}</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </a>

              {/* Guarantee */}
              <div className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-500">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
                </svg>
                {t.guarantee}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
