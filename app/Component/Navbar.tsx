"use client";

import { useState, useEffect } from "react";

type NavDict = {
  courses: string;
  why: string;
  contact: string;
  enroll: string;
};

export default function Navbar({ t, lang }: { t: NavDict; lang: string }) {
  const other = lang === "fr" ? "en" : "fr";
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#formations", label: t.courses },
    { href: "#why", label: t.why },
    { href: "#nous-contacter", label: t.contact },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-[#020817]/92 shadow-xl shadow-black/30 backdrop-blur-2xl"
          : "border-b border-white/5 bg-[#020817]/60 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">

        {/* Logo */}
        <a href={`/${lang}`} className="group flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-600/30 transition-transform duration-300 group-hover:scale-110">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-white">
              Nexo <span className="text-blue-400">Skills</span>
            </span>
            <span className="hidden text-[9px] tracking-widest text-slate-600 sm:block">
              CONNECT TO YOUR NEXT LEVEL
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative rounded-lg px-4 py-2 text-sm text-slate-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href={`/${other}`}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 transition-all duration-200 hover:border-white/20 hover:text-slate-300"
          >
            {other}
          </a>
          <a
            href="#contact"
            className="hidden rounded-lg px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-blue-500/30 md:block"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)" }}
          >
            {t.enroll}
          </a>

          {/* Hamburger — uses + path rotated 45° → becomes × */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-all duration-200 hover:border-white/20 hover:bg-white/5 hover:text-white md:hidden"
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

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-80 border-t border-white/5" : "max-h-0"}`}
      >
        <div className="bg-[#020817]/95 px-6 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full rounded-xl py-3 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #3b82f6 0%, #4f46e5 100%)" }}
          >
            {t.enroll}
          </a>
        </div>
      </div>
    </header>
  );
}
