"use client";

import { useState } from "react";

type EnrollDict = {
  enroll_label: string;
  loading: string;
  trust: string;
  name_placeholder: string;
  email_placeholder: string;
};

export default function FormationEnroll({
  t,
  course,
  lang,
  price,
}: {
  t: EnrollDict;
  course: string;
  lang: string;
  price: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, course, lang, experience: "" }),
      });

      const data = await res.json();

      if (!res.ok || !data.url) {
        setError(data.error ?? "Une erreur est survenue.");
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError("Une erreur est survenue. Réessayez.");
      setLoading(false);
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-slate-800/80 px-4 py-3.5 text-slate-100 placeholder-slate-500 outline-none transition-all duration-200 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/15";

  return (
    <div className="rounded-2xl border border-blue-500/20 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm">
      <div className="-mx-8 -mt-8 mb-6 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="mb-6 text-center">
        <p className="text-2xl font-bold text-white">{price}</p>
        <p className="mt-1 text-sm text-slate-400">par participant · toutes taxes incluses</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          type="text"
          required
          placeholder={t.name_placeholder}
          className={inputClass}
        />
        <input
          name="email"
          type="email"
          required
          placeholder={t.email_placeholder}
          className={inputClass}
        />

        {error && (
          <p className="rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="group flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-bold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/35 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0"
          style={{ background: "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)" }}
        >
          {loading ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
              </svg>
              {t.loading}
            </>
          ) : (
            <>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
              </svg>
              {t.enroll_label}
            </>
          )}
        </button>
      </form>

      <p className="mt-4 text-center text-xs text-slate-500">{t.trust}</p>
    </div>
  );
}
