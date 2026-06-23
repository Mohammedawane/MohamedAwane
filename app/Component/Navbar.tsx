"use client";

import { useState } from "react";

type NavDict = {
  courses: string;
  why: string;
  contact: string;
  enroll: string;
};

export default function Navbar({ t, lang }: { t: NavDict; lang: string }) {
  const other = lang === "fr" ? "en" : "fr";
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#formations", label: t.courses },
    { href: "#why", label: t.why },
    { href: "#contact", label: t.contact },
  ];

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">

        {/* Logo */}
        <a href={`/${lang}`} className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-600/30">
            <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
              <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
            </svg>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-tight text-white">
              Nexo <span className="text-blue-400">Skills</span>
            </span>
            <span className="hidden text-[9px] tracking-widest text-gray-600 sm:block">
              CONNECT TO YOUR NEXT LEVEL
            </span>
          </div>
        </a>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href={`/${other}`}
            className="rounded-lg border border-white/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-500 transition-colors hover:border-white/20 hover:text-gray-300"
          >
            {other}
          </a>
          <a
            href="#contact"
            className="hidden rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-all hover:bg-blue-500 hover:shadow-blue-500/30 md:block"
          >
            {t.enroll}
          </a>

          {/* Hamburger button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-gray-400 transition-colors hover:border-white/20 hover:text-white md:hidden"
            aria-label="Menu"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 bg-slate-950/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full rounded-xl bg-blue-600 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-500"
          >
            {t.enroll}
          </a>
        </div>
      )}
    </header>
  );
}
