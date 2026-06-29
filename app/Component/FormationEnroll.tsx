"use client";

import { useState } from "react";

type EnrollDict = {
  enroll_label: string;
  loading: string;
  trust: string;
  name_placeholder: string;
  email_placeholder: string;
  phone_placeholder: string;
};

type Mode = "pay" | "contact";
type PayMethod = "card" | "cashplus" | null;

export default function FormationEnroll({
  t,
  course,
  lang,
  price,
  status,
  contactOnly = false,
  defaultMode,
}: {
  t: EnrollDict;
  course: string;
  lang: string;
  price?: string;
  status?: string;
  contactOnly?: boolean;
  defaultMode?: Mode;
}) {
  const resolvedDefault: Mode = defaultMode ?? (contactOnly ? "contact" : "pay");
  const [mode, setMode] = useState<Mode>(resolvedDefault);
  const [payMethod, setPayMethod] = useState<PayMethod>(null);
  const [cashplusSent, setCashplusSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [contactSent, setContactSent] = useState(false);

  const isFr = lang !== "en";

  /* ── Payment via Stripe ── */
  async function handlePay(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (contactOnly) return; // safety guard
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

  /* ── CashPlus transfer notification ── */
  async function handleCashplus(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const ref = (form.elements.namedItem("ref") as HTMLInputElement).value;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name, email, phone, course,
          message: `Paiement CashPlus — Référence de transfert : ${ref}`,
        }),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error ?? (isFr ? "Une erreur est survenue." : "An error occurred."));
        setLoading(false);
        return;
      }
      setCashplusSent(true);
    } catch {
      setError(isFr ? "Une erreur est survenue. Réessayez." : "An error occurred. Please try again.");
    } finally {
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
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, course }),
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

      {/* Price / status header */}
      {price ? (
        <div className="bg-blue-700 px-8 py-6 text-center">
          <p className="text-3xl font-extrabold text-white">{price}</p>
          <p className="mt-1 text-sm text-blue-200">
            {isFr ? "par participant · toutes taxes incluses" : "per participant · all taxes included"}
          </p>
        </div>
      ) : (
        <div className="bg-gray-800 px-8 py-6 text-center">
          <span className="inline-block rounded-full bg-amber-400/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-300">
            {isFr ? "Prochainement" : "Coming soon"}
          </span>
          <p className="mt-3 text-base font-bold text-white">
            {status ?? (isFr ? "Ouverture des inscriptions bientôt" : "Enrollment opening soon")}
          </p>
          <p className="mt-1 text-sm text-gray-400">
            {isFr ? "Laissez vos coordonnées — on vous contacte en premier." : "Leave your details — we'll reach out first."}
          </p>
        </div>
      )}

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

      {/* Mode toggle — hidden when contactOnly */}
      {!contactOnly && (
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
      )}

      {/* Forms */}
      <div className="p-8">

        {/* ── PAY MODE — method selection ── */}
        {mode === "pay" && payMethod === null && (
          <div className="space-y-3">
            <p className="mb-4 text-center text-sm font-semibold text-gray-500 uppercase tracking-wider">
              {isFr ? "Choisissez votre mode de paiement" : "Choose your payment method"}
            </p>

            {/* Card */}
            <button
              onClick={() => setPayMethod("card")}
              className="group flex w-full items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white p-5 text-left transition-all hover:border-blue-500 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-100 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">{isFr ? "Carte bancaire" : "Credit / Debit card"}</p>
                <p className="text-xs text-gray-500 mt-0.5">{isFr ? "Visa, Mastercard · Paiement sécurisé Stripe" : "Visa, Mastercard · Secured by Stripe"}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-gray-300 group-hover:text-blue-500 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>

            {/* CashPlus */}
            <button
              onClick={() => setPayMethod("cashplus")}
              className="group flex w-full items-center gap-4 rounded-2xl border-2 border-gray-200 bg-white p-5 text-left transition-all hover:border-orange-400 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 group-hover:bg-orange-100 transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="font-bold text-gray-900">Virement CashPlus</p>
                <p className="text-xs text-gray-500 mt-0.5">{isFr ? "Transfert d'argent · Confirmation manuelle" : "Money transfer · Manual confirmation"}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        )}

        {/* ── PAY MODE — carte bancaire ── */}
        {mode === "pay" && payMethod === "card" && (
          <form onSubmit={handlePay} className="space-y-4">
            <button type="button" onClick={() => setPayMethod(null)} className="mb-1 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              {isFr ? "Retour" : "Back"}
            </button>
            <input name="name" type="text" required placeholder={t.name_placeholder}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            <input name="email" type="email" required placeholder={t.email_placeholder}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
            {error && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}
            <button type="submit" disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-blue-800 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0">
              {loading ? (
                <><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>{t.loading}</>
              ) : (
                <><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" /></svg>{t.enroll_label}</>
              )}
            </button>
            <p className="mt-2 text-center text-xs text-gray-400">{t.trust}</p>
          </form>
        )}

        {/* ── PAY MODE — CashPlus ── */}
        {mode === "pay" && payMethod === "cashplus" && !cashplusSent && (
          <form onSubmit={handleCashplus} className="space-y-4">
            <button type="button" onClick={() => setPayMethod(null)} className="mb-1 flex items-center gap-1.5 text-sm text-gray-400 hover:text-gray-600 transition-colors">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
              {isFr ? "Retour" : "Back"}
            </button>

            {/* CashPlus instructions */}
            <div className="rounded-xl border border-orange-200 bg-orange-50 p-4 text-sm">
              <p className="mb-2 font-bold text-orange-800">
                {isFr ? "Comment payer via CashPlus :" : "How to pay via CashPlus:"}
              </p>
              <ol className="space-y-1.5 text-orange-700">
                <li>1. {isFr ? "Rendez-vous dans un point CashPlus" : "Go to a CashPlus location"}</li>
                <li>2. {isFr ? "Effectuez un transfert au nom de" : "Transfer to the name of"} : <strong>Mohammed Awane</strong></li>
                <li>3. {isFr ? "Montant" : "Amount"} : <strong>800 DH</strong></li>
                <li className="flex items-center gap-2">
                  <span>4. {isFr ? "Remplissez le formulaire ci-dessous et envoyez le reçu via" : "Fill in the form below and send the receipt via"} WhatsApp</span>
                  <a
                    href="https://wa.me/212641189785"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full shadow"
                    style={{ background: "linear-gradient(135deg,#25d366,#128c7e)" }}
                  >
                    <svg viewBox="0 0 24 24" fill="white" className="h-4 w-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </a>
                </li>
              </ol>
            </div>

            <input name="name" type="text" required placeholder={t.name_placeholder}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />
            <input name="email" type="email" required placeholder={t.email_placeholder}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />
            <input name="phone" type="tel" required placeholder={t.phone_placeholder}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />
            <input name="ref" type="text" required placeholder={isFr ? "Référence du transfert CashPlus" : "CashPlus transfer reference"}
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-gray-900 placeholder-gray-400 outline-none transition-all focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20" />

            {error && <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>}
            <button type="submit" disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-orange-600 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:translate-y-0">
              {loading ? (
                <><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" /></svg>{t.loading}</>
              ) : (
                isFr ? "Confirmer mon transfert" : "Confirm my transfer"
              )}
            </button>
          </form>
        )}

        {/* ── CASHPLUS SUCCESS ── */}
        {mode === "pay" && payMethod === "cashplus" && cashplusSent && (
          <div className="flex flex-col items-center py-6 text-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-orange-100">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-7 w-7 text-orange-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </div>
            <p className="text-base font-bold text-gray-900">
              {isFr ? "Transfert enregistré !" : "Transfer received!"}
            </p>
            <p className="mt-2 text-sm text-gray-500">
              {isFr ? "Nous allons vérifier votre paiement et confirmer votre inscription dans les 24h." : "We will verify your payment and confirm your enrollment within 24h."}
            </p>
          </div>
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
            <input
              name="phone"
              type="tel"
              placeholder={t.phone_placeholder}
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
