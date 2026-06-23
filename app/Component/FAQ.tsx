"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };
type FaqDict = { label: string; title: string; items: FaqItem[] };

export default function FAQ({ t }: { t: FaqDict }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">{t.label}</p>
          <h2 className="text-3xl font-bold text-slate-100 sm:text-4xl md:text-5xl">{t.title}</h2>
        </div>

        <div className="space-y-2">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-500/30 bg-slate-900 shadow-lg shadow-blue-600/5"
                    : "border-white/5 bg-slate-900/50 hover:border-white/10 hover:bg-slate-900/70"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-medium transition-colors duration-200 ${isOpen ? "text-blue-300" : "text-slate-200 group-hover:text-white"}`}>
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-blue-500/40 bg-blue-500/15 text-blue-400"
                        : "border-white/10 text-slate-500"
                    }`}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-white/5 px-6 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-slate-400">{item.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
