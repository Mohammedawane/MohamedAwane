"use client";

import { useState, useEffect } from "react";

type NavDict = {
  courses: string;
  why: string;
  contact: string;
  enroll: string;
};

export default function Navbar({ t, lang }: { t: NavDict; lang: string }) {
  void lang;
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#formations", label: t.courses },
    { href: "#tutorat", label: "Tutorat" },
    { href: "#why", label: t.why },
    { href: "#nous-contacter", label: t.contact },
  ];

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "border-b border-gray-200 shadow-md"
          : "border-b border-gray-100"
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
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-lg bg-blue-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-800 md:block"
          >
            {t.enroll}
          </a>

          {/* Hamburger */}
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

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${open ? "max-h-80 border-t border-gray-100" : "max-h-0"}`}
      >
        <div className="bg-white px-6 py-4">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block w-full rounded-xl bg-blue-700 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-blue-800"
          >
            {t.enroll}
          </a>
        </div>
      </div>
    </header>
  );
}
