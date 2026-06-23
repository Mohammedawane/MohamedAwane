import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";

export default async function SuccessPage({ params }: PageProps<"/[lang]/success">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const { success: t } = await getDictionary(lang);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 text-white">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-blue-600/15 blur-[100px]" />
      </div>

      <div className="relative text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-10 w-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
        </div>

        <h1 className="mb-3 text-4xl font-bold">{t.title}</h1>
        <p className="mx-auto mb-2 max-w-md text-lg text-gray-300">{t.sub}</p>
        <p className="mx-auto mb-10 max-w-md text-gray-500">{t.body}</p>

        <Link href={`/${lang}`} className="inline-block rounded-xl border border-white/10 px-8 py-3 text-sm font-semibold text-gray-300 transition-colors hover:border-white/20 hover:text-white">
          {t.back}
        </Link>
      </div>
    </main>
  );
}
