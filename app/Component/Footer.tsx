type FooterDict = {
  copyright: string;
  email?: string;
  contact_label?: string;
  legal_label?: string;
  privacy?: string;
  terms?: string;
  refund?: string;
};

export default function Footer({ t, lang }: { t: FooterDict; lang: string }) {
  const other = lang === "fr" ? "en" : "fr";
  const isFr = lang === "fr";

  const links = [
    { label: isFr ? "Formations" : "Courses", href: "#formations" },
    { label: "IA & QA", href: "#ia-qa" },
    { label: "ISO 9001", href: "#iso-9001" },
    { label: isFr ? "Site web IA" : "Web with AI", href: "#web-ia" },
    { label: isFr ? "Pourquoi nous" : "Why Us", href: "#why" },
    { label: "Contact", href: "#contact" },
  ];

  const legalLinks = [
    { label: t.privacy ?? (isFr ? "Politique de confidentialité" : "Privacy Policy"), href: `/${lang}/legal/privacy` },
    { label: t.terms ?? (isFr ? "Conditions générales" : "Terms & Conditions"), href: `/${lang}/legal/terms` },
    { label: t.refund ?? (isFr ? "Politique de remboursement" : "Refund Policy"), href: `/${lang}/legal/refund` },
  ];

  return (
    <footer className="border-t border-white/5 bg-slate-950">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-10 grid gap-8 md:grid-cols-4 md:items-start">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 shadow-lg shadow-blue-600/30">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-white">
                  Nexo <span className="text-blue-400">Skills</span>
                </span>
                <span className="text-[9px] tracking-widest text-gray-600">CONNECT TO YOUR NEXT LEVEL</span>
              </div>
            </div>
            <p className="mb-4 text-sm text-gray-500">
              {isFr
                ? "Cabinet de formation pratique en IA, qualité et compétences digitales."
                : "Practical training center in AI, quality management and digital skills."}
            </p>
            {t.email && (
              <a
                href={`mailto:${t.email}`}
                className="inline-flex items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {t.email}
              </a>
            )}
          </div>

          {/* Nav */}
          <div className="md:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
              {isFr ? "Navigation" : "Navigation"}
            </p>
            <nav className="grid grid-cols-2 gap-x-8 gap-y-2.5 md:grid-cols-1">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-500 transition-colors hover:text-gray-300">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div className="md:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-600">
              {t.legal_label ?? (isFr ? "Mentions légales" : "Legal")}
            </p>
            <nav className="flex flex-col gap-2.5">
              {legalLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-500 transition-colors hover:text-gray-300">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Language & CTA */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-600">
              {isFr ? "Langue" : "Language"}
            </p>
            <a
              href={`/${other}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-gray-400 transition-colors hover:border-white/20 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
              </svg>
              {other === "fr" ? "Français" : "English"}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
            >
              {t.contact_label ?? (isFr ? "Nous contacter" : "Contact us")}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 text-xs text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} {t.copyright} — {isFr ? "Tous droits réservés" : "All rights reserved"}</p>
          <p className="italic">Connect to your next level.</p>
        </div>
      </div>
    </footer>
  );
}
