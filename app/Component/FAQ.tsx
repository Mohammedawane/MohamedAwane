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
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-500">{t.label}</p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">{t.title}</h2>
        </div>

        <div className="space-y-3">
          {t.items.map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/5 bg-slate-900/60 transition-colors hover:border-white/10"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-white">{item.q}</span>
                <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-transform duration-200 ${open === i ? "rotate-45" : ""}`}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </button>

              {open === i && (
                <div className="border-t border-white/5 px-6 pb-5 pt-4">
                  <p className="text-sm leading-relaxed text-gray-400">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          {/* contact link rendered by parent via dict */}
        </p>
      </div>
    </section>
  );
}
