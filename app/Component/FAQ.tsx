"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };
type FaqDict = { label: string; title: string; items: FaqItem[] };

export default function FAQ({ t }: { t: FaqDict }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-5 md:py-24 md:px-6">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">{t.label}</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">{t.title}</h2>
        </div>

        <div className="space-y-3">
          {t.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 bg-blue-50 shadow-sm"
                    : "border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-medium transition-colors duration-200 ${isOpen ? "text-blue-700" : "text-gray-800"}`}>
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-blue-200 bg-blue-100 text-blue-700"
                        : "border-gray-200 bg-white text-gray-400"
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
                    <div className="border-t border-blue-100 px-6 pb-5 pt-4">
                      <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
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
