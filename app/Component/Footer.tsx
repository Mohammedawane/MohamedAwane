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
  void lang;

  const formationLinks = [
    { label: "IA & QA", href: "#formations" },
    { label: "ISO 9001", href: "#formations" },
    { label: "Accessibilité web", href: "#formations" },
    { label: "Site web avec IA", href: "#formations" },
    { label: "Tutorat primaire", href: "#tutorat" },
  ];

  const infoLinks = [
    { label: "Pourquoi Nexo", href: "#why" },
    { label: "Comment ça marche", href: "#modalities" },
    { label: "Témoignages", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  const legalLinks = [
    { label: t.privacy ?? "Politique de confidentialité", href: `/${lang}/legal/privacy` },
    { label: t.terms ?? "Conditions générales", href: `/${lang}/legal/terms` },
    { label: t.refund ?? "Politique de remboursement", href: `/${lang}/legal/refund` },
  ];

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="mb-12 grid gap-10 md:grid-cols-4 md:items-start">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700">
                <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                  <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
                </svg>
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-gray-900">
                  Nexo <span className="text-blue-700">Skills</span>
                </span>
                <span className="text-[9px] tracking-widest text-gray-400">{lang === "fr" ? "PASSEZ AU NIVEAU SUPÉRIEUR" : "CONNECT TO YOUR NEXT LEVEL"}</span>
              </div>
            </div>
            <p className="mb-4 text-sm leading-relaxed text-gray-500">
              Cabinet de formation pratique en IA, qualité et compétences digitales. Formateurs professionnels en activité.
            </p>
            {t.email && (
              <a
                href={`mailto:${t.email}`}
                className="inline-flex items-center gap-2 text-sm text-blue-700 transition-colors hover:text-blue-800"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-4 w-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                {t.email}
              </a>
            )}
          </div>

          {/* Formations */}
          <div className="md:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Formations
            </p>
            <nav className="flex flex-col gap-2.5">
              {formationLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Infos utiles */}
          <div className="md:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Infos utiles
            </p>
            <nav className="flex flex-col gap-2.5">
              {infoLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  {l.label}
                </a>
              ))}
              {legalLinks.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-gray-500 transition-colors hover:text-gray-900">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Nous contacter */}
          <div className="md:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Nous contacter
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#nous-contacter"
                className="inline-flex items-center justify-center rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:text-gray-900 shadow-sm"
              >
                Envoyer un message
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              >
                {t.contact_label ?? "S'inscrire à une formation"}
              </a>
              {t.email && (
                <p className="text-xs text-gray-400">
                  Ou par email :{" "}
                  <a href={`mailto:${t.email}`} className="text-blue-700 hover:underline">{t.email}</a>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-gray-200 pt-8 text-xs text-gray-400 sm:flex-row">
          <p>© {new Date().getFullYear()} {t.copyright} — Tous droits réservés</p>
          <p className="italic text-gray-400">{lang === "fr" ? "Passez au niveau supérieur." : "Connect to your next level."}</p>
        </div>
      </div>
    </footer>
  );
}
