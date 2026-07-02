"use client";

import { useState, useEffect, useRef } from "react";

type NavDict = {
  courses: string;
  why: string;
  contact: string;
  enroll: string;
};

type CourseNavItem = {
  category: string;
  title: string;
  href: string;
};

type CategoryNav = {
  key: string;
  label: string;
  sub: string;
  color: string;
};

type CoursesNavData = {
  categories: CategoryNav[];
  items: CourseNavItem[];
};

const CAT_COLORS: Record<string, { dot: string; label: string; item: string; icon: string }> = {
  blue:    { dot: "bg-blue-600",    label: "text-blue-700",    item: "hover:bg-blue-50 hover:text-blue-700",    icon: "text-white" },
  violet:  { dot: "bg-violet-600",  label: "text-violet-700",  item: "hover:bg-violet-50 hover:text-violet-700",  icon: "text-white" },
  emerald: { dot: "bg-emerald-600", label: "text-emerald-700", item: "hover:bg-emerald-50 hover:text-emerald-700", icon: "text-white" },
  amber:   { dot: "bg-amber-500",   label: "text-amber-700",   item: "hover:bg-amber-50 hover:text-amber-700",   icon: "text-white" },
};

function CatIcon({ catKey }: { catKey: string }) {
  if (catKey === "digital-si") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  );
  if (catKey === "qhse") return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="h-4 w-4">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
    </svg>
  );
}

export default function Navbar({ t, lang, courses }: { t: NavDict; lang: string; courses?: CoursesNavData }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMega = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  };
  const closeMega = () => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 120);
  };

  const otherLinks = [
    { href: "#why", label: t.why },
    { href: "#nous-contacter", label: t.contact },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "border-b border-gray-200 shadow-md" : "border-b border-gray-100"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">

        {/* Logo */}
        <a href={`/${lang}`} className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-gray-900">
              Nexo <span className="text-blue-700">Skills</span>
            </span>
            <span className="hidden text-[9px] tracking-widest text-gray-400 sm:block">
              CONNECT TO YOUR NEXT LEVEL
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {/* Formations mega-menu trigger */}
          <div onMouseEnter={openMega} onMouseLeave={closeMega}>
            <button
              className={`flex items-center gap-1.5 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                megaOpen ? "bg-blue-50 text-blue-700" : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              {t.courses}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className={`h-3.5 w-3.5 transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

          {otherLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA + hamburger */}
        <div className="flex items-center gap-2">
          <a
            href="#nous-contacter"
            className="hidden rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-800 md:block"
          >
            {t.enroll}
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-all duration-200 hover:bg-gray-50 hover:text-gray-900 md:hidden"
            aria-label="Menu"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={`h-5 w-5 transition-transform duration-300 ${open ? "rotate-45" : ""}`}>
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mega-menu panel — full width, attached to header bottom */}
      {courses && (
        <div
          onMouseEnter={openMega}
          onMouseLeave={closeMega}
          className={`absolute left-0 right-0 top-full hidden overflow-hidden border-t border-gray-100 bg-white shadow-xl transition-all duration-200 md:block ${
            megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <div className="mx-auto max-w-6xl px-6 py-8">
            <div className="grid grid-cols-4 gap-6">
              {courses.categories.map((cat) => {
                const items = courses.items.filter((i) => i.category === cat.key);
                const c = CAT_COLORS[cat.color] ?? CAT_COLORS.blue;
                return (
                  <div key={cat.key}>
                    {/* Category header — clickable */}
                    <a
                      href={`#${cat.key}`}
                      onClick={() => setMegaOpen(false)}
                      className="mb-4 flex items-center gap-2.5 group/cat"
                    >
                      <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${c.dot} transition-opacity group-hover/cat:opacity-80`}>
                        <CatIcon catKey={cat.key} />
                      </span>
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wider ${c.label} group-hover/cat:underline underline-offset-2`}>{cat.label}</p>
                        <p className="text-[11px] text-gray-400">{cat.sub}</p>
                      </div>
                    </a>

                    {/* Course links */}
                    <ul className="space-y-0.5">
                      {items.map((course) => {
                        const slug = course.href.replace("#contact?course=", "");
                        return (
                          <li key={course.title}>
                            <a
                              href={`/${lang}/formations/${slug}`}
                              onClick={() => setMegaOpen(false)}
                              className={`flex items-start gap-2 rounded-lg px-2.5 py-2 text-sm text-gray-700 transition-all duration-150 ${c.item}`}
                            >
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                              <span className="leading-snug">{course.title}</span>
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* ISTQB highlight banner */}
            <a
              href={`/${lang}/istqb`}
              onClick={() => setMegaOpen(false)}
              className="mt-5 flex items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3 transition-colors hover:bg-blue-100"
            >
              <span className="shrink-0 rounded-lg bg-blue-700 px-2.5 py-1 text-xs font-bold text-white">ISTQB FL</span>
              <p className="text-sm text-gray-700">Préparez la certification <span className="font-semibold text-blue-700">ISTQB Foundation Level</span> avec notre banque de questions</p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="ml-auto h-4 w-4 shrink-0 text-blue-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </a>

            {/* Bottom bar */}
            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
              <p className="text-sm text-gray-500">
                <span className="font-semibold text-gray-700">{courses.items.length} formations</span> disponibles · en ligne · certificat inclus
              </p>
              <a
                href="#formations"
                onClick={() => setMegaOpen(false)}
                className="flex items-center gap-1.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-800"
              >
                Voir tous les programmes
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-3.5 w-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ${open ? "border-t border-gray-100" : "hidden"}`}>
        <div className="max-h-[calc(100dvh-60px)] overflow-y-auto bg-white">

          {/* CTA principal */}
          <div className="px-4 pt-4 pb-2">
            <a
              href="#nous-contacter"
              onClick={() => setOpen(false)}
              className="block w-full rounded-xl bg-blue-700 py-3.5 text-center text-sm font-bold text-white shadow-sm"
            >
              {t.enroll}
            </a>
          </div>

          {/* Liens rapides */}
          <div className="px-4 py-2">
            {otherLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100"
              >
                {link.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 text-gray-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            ))}
          </div>

          {/* Formations par catégorie */}
          {courses && (
            <div className="px-4 pb-6">
              <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                {t.courses}
              </p>
              <div className="space-y-2">
                {courses.categories.map((cat) => {
                  const items = courses.items.filter((i) => i.category === cat.key);
                  const c = CAT_COLORS[cat.color] ?? CAT_COLORS.blue;
                  return (
                    <div key={cat.key} className="overflow-hidden rounded-2xl border border-gray-100">
                      {/* En-tête catégorie */}
                      <a
                        href={`#${cat.key}`}
                        onClick={() => setOpen(false)}
                        className="flex items-center gap-3 bg-gray-50 px-4 py-3"
                      >
                        <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${c.dot}`}>
                          <CatIcon catKey={cat.key} />
                        </span>
                        <span className={`text-xs font-bold uppercase tracking-wider ${c.label}`}>{cat.label}</span>
                      </a>
                      {/* Cours */}
                      <div className="divide-y divide-gray-50">
                        {items.map((course) => {
                          const slug = course.href.replace("#contact?course=", "");
                          return (
                            <a
                              key={course.title}
                              href={`/${lang}/formations/${slug}`}
                              onClick={() => setOpen(false)}
                              className="flex items-center justify-between px-4 py-3.5 text-sm text-gray-700 hover:bg-gray-50 active:bg-gray-100"
                            >
                              <span>{course.title}</span>
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4 shrink-0 text-gray-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                              </svg>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ISTQB card */}
              <a
                href={`/${lang}/istqb`}
                onClick={() => setOpen(false)}
                className="mt-1 flex items-center gap-3 rounded-2xl border border-blue-100 bg-blue-50 px-4 py-4"
              >
                <span className="shrink-0 rounded-lg bg-blue-700 px-2.5 py-1 text-xs font-bold text-white">ISTQB FL</span>
                <div>
                  <p className="text-sm font-semibold text-blue-900">Préparation ISTQB Foundation Level</p>
                  <p className="text-xs text-gray-500">Banque de questions · Simulation examen</p>
                </div>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="ml-auto h-4 w-4 shrink-0 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
