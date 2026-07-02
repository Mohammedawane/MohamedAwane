"use client";

import { useState } from "react";

export default function ISTQBCheckoutButton({ lang, isFr }: { lang: string; isFr: boolean }) {
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ course: "istqb-fondation", lang }),
      });
      const data = await res.json();
      if (!res.ok) { setError(data.error ?? "Erreur"); setLoading(false); return; }
      window.location.href = data.url;
    } catch {
      setError(isFr ? "Une erreur est survenue." : "An error occurred.");
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center gap-2">
      <button
        onClick={handleClick}
        disabled={loading}
        className="flex items-center gap-2 rounded-xl bg-amber-400 px-8 py-4 text-base font-bold text-gray-900 shadow-lg transition-all hover:-translate-y-0.5 hover:bg-amber-300 hover:shadow-amber-400/30 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            {isFr ? "Redirection…" : "Redirecting…"}
          </>
        ) : (
          <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
            </svg>
            {isFr ? "Commencer la préparation — 49 €" : "Start preparing — €49"}
          </>
        )}
      </button>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <p className="text-xs text-blue-300">
        {isFr ? "Paiement sécurisé via Stripe · Accès immédiat" : "Secure payment via Stripe · Instant access"}
      </p>
    </div>
  );
}
