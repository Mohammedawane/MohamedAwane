"use client";

import { useState } from "react";

type ContactDict = {
  label: string;
  title: string;
  sub: string;
  name: string;
  name_placeholder: string;
  email: string;
  email_placeholder: string;
  message: string;
  message_placeholder: string;
  submit: string;
  success_title: string;
  success_sub: string;
  error: string;
};

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white p-4 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

export default function ContactForm({ t }: { t: ContactDict }) {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error ?? t.error);
        setLoading(false);
        return;
      }

      setSent(true);
    } catch {
      setErrorMsg(t.error);
      setLoading(false);
    }
  }

  return (
    <section id="nous-contacter" className="bg-gray-50 px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">{t.label}</p>
          <h2 className="text-4xl font-bold text-gray-900">{t.title}</h2>
          <p className="mt-4 text-gray-600">{t.sub}</p>
        </div>

        {sent ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-12 text-center">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7 text-emerald-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-bold text-gray-900">{t.success_title}</h3>
            <p className="text-gray-600">{t.success_sub}</p>
          </div>
        ) : (
          <form
            action={handleSubmit}
            className="space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-md"
          >
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">{t.name}</label>
              <input name="name" type="text" required placeholder={t.name_placeholder} className={inputClass} />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">{t.email}</label>
              <input name="email" type="email" required placeholder={t.email_placeholder} className={inputClass} />
            </div>

            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">{t.message}</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder={t.message_placeholder}
                className={inputClass + " resize-none"}
              />
            </div>

            {errorMsg && (
              <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{errorMsg}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 p-4 font-bold text-white shadow transition-all duration-200 hover:bg-blue-800 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0"
            >
              {loading ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Envoi…
                </>
              ) : (
                <>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                  </svg>
                  {t.submit}
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
