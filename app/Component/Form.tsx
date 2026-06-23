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
  experience: string;
  exp_placeholder: string;
  exp_none: string;
  exp_some: string;
  exp_dev: string;
  submit: string;
  submit_pay: string;
  loading: string;
  trust: string;
  error: string;
};

const inputClass =
  "w-full rounded-xl border border-white/8 bg-slate-800/80 p-4 text-slate-100 placeholder-slate-600 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-slate-800 focus:ring-2 focus:ring-blue-500/15";

const selectClass =
  "w-full appearance-none rounded-xl border border-white/8 bg-slate-800/80 p-4 pr-10 text-slate-100 outline-none transition-all duration-200 focus:border-blue-500/50 focus:bg-slate-800 focus:ring-2 focus:ring-blue-500/15 disabled:opacity-40";

export default function Form({ t, lang }: { t: FormDict; lang: string }) {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [course, setCourse] = useState("");

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

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          experience: formData.get("experience"),
          course,
          lang,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? t.error);
        setLoading(false);
        return;
      }

      window.location.href = data.url;
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : t.error);
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="relative px-5 py-16 md:px-6 md:py-24">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-transparent" />

      <div className="relative mx-auto max-w-2xl">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-blue-400">{t.label}</p>
          <h2 className="text-4xl font-bold text-slate-100">{t.title}</h2>
          <p className="mt-4 text-slate-400">{t.sub}</p>
        </div>

        <form
          action={handleSubmit}
          className="space-y-5 rounded-2xl border border-white/6 bg-slate-900/80 p-8 shadow-2xl shadow-black/30 backdrop-blur-sm"
        >
          {/* Top edge highlight */}
          <div className="-mx-8 -mt-8 mb-5 h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rounded-t-2xl" />

          {/* Course dropdown */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.course}</label>
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
              <svg className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </div>

            {selected && (
              <div className="mt-3 flex items-center gap-2 rounded-xl border border-blue-500/20 bg-gradient-to-r from-blue-500/8 to-indigo-500/5 px-4 py-2.5 text-sm">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 shrink-0 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                <span className="text-blue-300">{selected.label}</span>
                {selected.badge && (
                  <span className="ml-auto rounded-full bg-blue-600/20 px-2 py-0.5 text-xs text-blue-400">{selected.badge}</span>
                )}
              </div>
            )}
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.name}</label>
            <input name="name" type="text" required placeholder={t.name_placeholder} className={inputClass} />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.email}</label>
            <input name="email" type="email" required placeholder={t.email_placeholder} className={inputClass} />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.phone}</label>
            <input name="phone" type="tel" placeholder={t.phone_placeholder} className={inputClass} />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-slate-300">{t.experience}</label>
            <div className="relative">
              <select name="experience" className={selectClass}>
                <option value="">{t.exp_placeholder}</option>
                <option value="none">{t.exp_none}</option>
                <option value="some">{t.exp_some}</option>
                <option value="dev">{t.exp_dev}</option>
              </select>
              <svg className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
              </svg>
            </div>
          </div>

          {errorMsg && (
            <p className="rounded-xl border border-red-500/20 bg-red-500/8 px-4 py-3 text-sm text-red-400">{errorMsg}</p>
          )}

          <button
            type="submit"
            disabled={loading || !course}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl p-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:shadow-blue-600/30 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:translate-y-0"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)" }}
          >
            <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "linear-gradient(135deg, #4f46e5 0%, #6d28d9 100%)" }} />
            <span className="relative flex items-center gap-2">
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
                  {selected ? t.submit_pay.replace("{badge}", selected.badge ?? "") : t.submit}
                </>
              )}
            </span>
          </button>

          {course && (
            <p className="text-center text-xs text-slate-600">{t.trust}</p>
          )}
        </form>
      </div>
    </section>
  );
}
