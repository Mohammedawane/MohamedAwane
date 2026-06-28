"use client";

import { useState, useEffect } from "react";

type CourseOption = { group?: string; value: string; label: string; badge?: string; stripe?: boolean };

type FormDict = {
  label: string;
  title: string;
  sub: string;
  course: string;
  course_placeholder: string;
  courses: CourseOption[];
  name: string;
  name_placeholder: string;
  email: string;
  email_placeholder: string;
  phone: string;
  phone_placeholder: string;
  submit: string;
  submit_pay: string;
  loading: string;
  trust: string;
  error: string;
};

const inputClass =
  "w-full rounded-xl border border-gray-200 bg-white p-4 text-gray-900 placeholder-gray-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const selectClass =
  "w-full appearance-none rounded-xl border border-gray-200 bg-white p-4 pr-10 text-gray-900 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:opacity-40";

const ACTIVE_COURSES = new Set(["anglais-vacances-ete"]);

export default function Form({ t, lang }: { t: FormDict; lang: string }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [course, setCourse] = useState("");
  const [contactSent, setContactSent] = useState(false);
  const isFr = lang !== "en";

  useEffect(() => {
    function parseHash() {
      const hash = window.location.hash;
      if (hash.startsWith("#contact?course=")) {
        const val = hash.replace("#contact?course=", "");
        if (t.courses.some((c) => c.value === val)) setCourse(val);
      }
    }
    parseHash();
    window.addEventListener("hashchange", parseHash);
    return () => window.removeEventListener("hashchange", parseHash);
  }, [t.courses]);

  const selected = t.courses.find((c) => c.value === course);

  async function handleSubmit(formData: FormData) {
    if (!course) return;
    setLoading(true);
    setErrorMsg(null);

    const isActive = ACTIVE_COURSES.has(course);

    try {
      if (isActive) {
        // Active course → Stripe checkout
        const res = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            phone: formData.get("phone"),
            course,
            lang,
          }),
        });
        const data = await res.json();
        if (!res.ok) { setErrorMsg(data.error ?? t.error); setLoading(false); return; }
        window.location.href = data.url;
      } else {
        // Coming-soon course → contact email
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.get("name"),
            email: formData.get("email"),
            message: isFr
              ? `Je souhaite être prévenu(e) dès l'ouverture des inscriptions pour : ${selected?.label ?? course}`
              : `I'd like to be notified when enrollment opens for: ${selected?.label ?? course}`,
            course,
          }),
        });
        if (!res.ok) {
          const data = await res.json();
          setErrorMsg(data.error ?? t.error);
          setLoading(false);
          return;
        }
        setContactSent(true);
      }
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : t.error);
      setLoading(false);
    }
  }

  const isActiveSelected = ACTIVE_COURSES.has(course);

  return (
    <section id="contact" className="bg-white px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-700">{t.label}</p>
          <h2 className="text-4xl font-bold text-gray-900">{t.title}</h2>
          <p className="mt-4 text-gray-600">{t.sub}</p>
        </div>

        {contactSent ? (
          <div className="flex flex-col items-center rounded-2xl border border-green-200 bg-green-50 p-12 text-center shadow-md">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-lg font-bold text-gray-900">
              {isFr ? "Demande enregistrée !" : "Request received!"}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {isFr
                ? "Vous serez parmi les premiers prévenus dès l'ouverture des inscriptions."
                : "You'll be among the first to know when enrollment opens."}
            </p>
          </div>
        ) : (
        <form
          action={handleSubmit}
          className="space-y-5 rounded-2xl border border-gray-200 bg-white p-8 shadow-md"
        >
          {/* Top accent line */}
          <div className="-mx-8 -mt-8 mb-5 h-1 rounded-t-2xl bg-gradient-to-r from-blue-700 to-blue-500" />

          {/* Course dropdown */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{t.course}</label>
            <div className="relative">
              <select
                name="course"
                required
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className={selectClass}
              >
                <option value="" disabled>{t.course_placeholder}</option>
                {(() => {
                  const grouped: Record<string, CourseOption[]> = {};
                  const ungrouped: CourseOption[] = [];
                  t.courses.forEach((opt) => {
                    if (opt.group) {
                      (grouped[opt.group] ??= []).push(opt);
                    } else {
                      ungrouped.push(opt);
                    }
                  });
                  return [
                    ...Object.entries(grouped).map(([group, opts]) => (
                      <optgroup key={group} label={`— ${group} —`}>
                        {opts.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}{opt.badge ? ` · ${opt.badge}` : ""}
                          </option>
                        ))}
                      </optgroup>
                    )),
                    ...ungrouped.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    )),
                  ];
                })()}
              </select>
              <svg className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </div>

            {selected && (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-4 py-2.5 text-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 shrink-0 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="text-blue-700 font-medium">{selected.label}</span>
                {selected.badge && (
                  <span className="ml-auto rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-700">{selected.badge}</span>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{t.name}</label>
            <input name="name" type="text" required placeholder={t.name_placeholder} className={inputClass} />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{t.email}</label>
            <input name="email" type="email" required placeholder={t.email_placeholder} className={inputClass} />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">{t.phone}</label>
            <input name="phone" type="tel" placeholder={t.phone_placeholder} className={inputClass} />
          </div>

          {errorMsg && (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading || !course}
            className={`flex w-full items-center justify-center gap-2 rounded-xl p-4 font-bold text-white shadow transition-all duration-200 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0 ${
              isActiveSelected ? "bg-orange-500 hover:bg-orange-600" : "bg-blue-700 hover:bg-blue-800"
            }`}
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                </svg>
                {t.loading}
              </>
            ) : isActiveSelected ? (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
                {selected ? t.submit_pay.replace("{badge}", selected.badge ?? "") : t.submit}
              </>
            ) : (
              <>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
                {isFr ? "M'inscrire sur la liste d'attente" : "Join the waiting list"}
              </>
            )}
          </button>

          {course && (
            <p className="text-center text-xs text-gray-400">
              {isActiveSelected ? t.trust : (isFr ? "Aucun paiement — nous vous contactons à l'ouverture." : "No payment — we'll reach out when enrollment opens.")}
            </p>
          )}
        </form>
        )}
      </div>
    </section>
  );
}
