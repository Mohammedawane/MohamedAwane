"use client";

import { useState } from "react";

type EnrollDict = {
  enroll_label: string;
  loading: string;
  trust: string;
  name_placeholder: string;
  email_placeholder: string;
};

type Mode = "pay" | "contact";

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
  const [mode, setMode] = useState<Mode>("pay");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contactSent, setContactSent] = useState(false);

  const isFr = lang !== "en";

  /* ── Payment via Stripe ── */
  async function handlePay(e: React.SubmitEvent<HTMLFormElement>) {
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
        setError(data.error ?? (isFr ? "Une erreur est survenue." : "An error occurred."));
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setError(isFr ? "Une erreur est survenue. Réessayez." : "An error occurred. Please try again.");
      setLoading(false);
    }
  }

  /* ── Contact request ── */
  async function handleContact(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, course }),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? (isFr ? "Une erreur est survenue." : "An error occurred."));
        setLoading(false);
        return;
      }

      setContactSent(true);
    } catch {
      setError(isFr ? "Une erreur est survenue. Réessayez." : "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">

      {/* Price header */}
      <div className="bg-blue-700 px-8 py-6 text-center">
        <p className="text-3xl font-extrabold text-white">{price}</p>
        <p className="mt-1 text-sm text-blue-200">
          {isFr ? "par participant · toutes taxes incluses" : "per participant · all taxes included"}
        </p>
      </div>

      {/* Checklist */}
      <div className="border-b border-gray-100 px-8 py-5">
        {(isFr
          ? ["Formateur professionnel en activité", "Certificat de réussite inclus", "Supports de cours accès à vie", "Satisfaction garantie"]
          : ["Taught by an active professional", "Certificate of completion included", "Lifetime access to course materials", "Satisfaction guaranteed"]
        ).map((item) => (
          <div key={item} className="flex items-center gap-2.5 py-1.5">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4 shrink-0 text-blue-700">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            <span className="text-sm text-gray-700">{item}</span>
          </div>
        ))}
      </div>

      {/* Mode toggle */}
      <div className="grid grid-cols-2 border-b border-gray-100">
        <button
          onClick={() => { setMode("pay"); setError(null); setContactSent(false); }}
          className={`flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-all ${
            mode === "pay"
              ? "bg-blue-50 text-blue-700 border-b-2 border-blue-700"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
          </svg>
          {isFr ? "Payer en ligne" : "Pay online"}
        </button>
        <button
          onClick={() => { setMode("contact"); setError(null); }}
          className={`flex items-center justify-center gap-2 py-3.5 text-sm font-semibold transition-all ${
            mode === "contact"
              ? "bg-blue-50 text-blue-700 border-b-2 border-blue-700"
              : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
          }`}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
          </svg>
          {isFr ? "Prendre contact" : "Contact us"}
        </button>
      </div>

      {/* Forms */}
      <div className="p-8">

        {/* ── PAY MODE ── */}
        {mode === "pay" && (
          <form onSubmit={handlePay} className="space-y-4">
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
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
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
            <p className="mt-2 text-center text-xs text-gray-400">{t.trust}</p>
          </form>
        )}

        {/* ── CONTACT MODE ── */}
        {mode === "contact" && !contactSent && (
          <form onSubmit={handleContact} className="space-y-4">
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
            <textarea
              name="message"
              required
              rows={4}
              placeholder={isFr ? "Votre question ou commentaire…" : "Your question or comment…"}
              defaultValue={isFr ? `Bonjour, je suis intéressé(e) par cette formation et j'aimerais avoir plus d'informations.` : `Hello, I'm interested in this program and would like more information.`}
              className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
            />
            {error && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-blue-800 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  {isFr ? "Envoi en cours…" : "Sending…"}
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                  {isFr ? "Envoyer ma demande" : "Send my request"}
                </>
              )}
            </button>
          </form>
        )}

        {/* ── CONTACT SUCCESS ── */}
        {mode === "contact" && contactSent && (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-base font-bold text-gray-900">
              {isFr ? "Message envoyé !" : "Message sent!"}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {isFr
                ? "Nous vous répondrons dans les 24 heures."
                : "We'll get back to you within 24 hours."}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
