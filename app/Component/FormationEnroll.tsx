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
  void lang;
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

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
      {/* Price header */}
      <div className="bg-blue-700 px-8 py-6 text-center">
        <p className="text-3xl font-extrabold text-white">{price}</p>
        <p className="mt-1 text-sm text-blue-200">par participant · toutes taxes incluses</p>
      </div>

      {/* Checklist */}
      <div className="border-b border-gray-100 px-8 py-5">
        {[
          "Formateur professionnel en activité",
          "Certificat de réussite inclus",
          "Supports de cours accès à vie",
          "Remboursement sous 30 jours",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5 py-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4 shrink-0 text-blue-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* Form */}
      <div className="p-8">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            type="text"
            required
            placeholder={t.name_placeholder}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
          <input
            name="email"
            type="email"
            required
            placeholder={t.email_placeholder}
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />

          {error && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-orange-600 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0"
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

        <p className="mt-4 text-center text-xs text-gray-400">{t.trust}</p>
      </div>
    </div>
  );
}
