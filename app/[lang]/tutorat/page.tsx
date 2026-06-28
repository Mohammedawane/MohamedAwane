import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import Navbar from "@/app/Component/Navbar";
import Footer from "@/app/Component/Footer";
import CourseLink from "@/app/Component/CourseLink";

export async function generateMetadata({ params }: PageProps<"/[lang]/tutorat">) {
  const { lang } = await params;
  const isFr = lang !== "en";
  return {
    title: isFr
      ? "Tutorat en ligne pour enfants — Français, Anglais, Maths | Nexo Skills"
      : "Online tutoring for children — French, English, Maths | Nexo Skills",
    description: isFr
      ? "Séances individuelles en ligne adaptées à chaque enfant du primaire. Tutorat en français, anglais et mathématiques. Pack vacances d'été disponible."
      : "Individual online sessions tailored to each primary school child. Tutoring in French, English and Mathematics. Summer pack available.",
  };
}

const COURSE_IMAGES: Record<string, string> = {
  "tutorat-francais":     "/coursesPics/tutorat-francais.jpg",
  "tutorat-anglais":      "/coursesPics/tutorat-anglais.jpg",
  "tutorat-math":         "/coursesPics/tutorat-math.jpg",
  "anglais-vacances-ete": "/coursesPics/tutorat-anglais.jpg",
};

export default async function TutoratPage({ params }: PageProps<"/[lang]/tutorat">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang !== "en";

  const tutoratCourses = dict.courses.items.filter(
    (c) => c.category === "tutorat-langue"
  );

  return (
    <main className="min-h-screen bg-white">
      <Navbar t={dict.nav} lang={lang} courses={dict.courses} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 to-amber-500 px-5 pb-16 pt-28 text-white md:px-6 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-100">
            {isFr ? "Nexo Skills — Tutorat en ligne" : "Nexo Skills — Online Tutoring"}
          </p>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight md:text-5xl">
            {isFr
              ? "Un tuteur pour votre enfant — où que vous soyez"
              : "A tutor for your child — wherever you are"}
          </h1>
          <p className="mx-auto mb-8 max-w-xl text-lg text-amber-100">
            {isFr
              ? "Séances individuelles en ligne en français, anglais et mathématiques. Adaptées au niveau de votre enfant, animées par un tuteur qualifié et bienveillant."
              : "Individual online sessions in French, English and Mathematics. Tailored to your child's level, led by a qualified and caring tutor."}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-amber-100">
            {(isFr
              ? ["✓ Primaire · 6-14 ans", "✓ En ligne sans déplacement", "✓ Suivi de progression inclus", "✓ Séances individuelles ou groupe de 4"]
              : ["✓ Primary school · Ages 6-14", "✓ Online, no travel needed", "✓ Progress tracking included", "✓ Individual sessions or group of 4"]
            ).map((t) => <span key={t}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* Course cards */}
      <section className="bg-gray-50 px-5 py-16 md:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-2 text-center text-3xl font-bold text-gray-900">
            {isFr ? "Nos cours de tutorat" : "Our tutoring programs"}
          </h2>
          <p className="mb-10 text-center text-gray-500">
            {isFr ? "Tous les cours se déroulent en ligne, sur ordinateur ou tablette." : "All sessions take place online, on computer or tablet."}
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            {tutoratCourses.map((course) => {
              const slug = course.href.replace("#contact?course=", "");
              const img = COURSE_IMAGES[slug];
              return (
                <div key={course.title} className="group overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  {img && (
                    <div className="h-48 overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={img} alt={course.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} className="transition-transform duration-500 group-hover:scale-105" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">{course.badge}</span>
                      <span className="rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">{course.tag}</span>
                    </div>
                    <h3 className="mb-2 text-lg font-bold text-gray-900">{course.title}</h3>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">{course.sub}</p>
                    <ul className="mb-5 space-y-1.5">
                      {course.details.map((d) => (
                        <li key={d} className="flex items-center gap-2 text-sm text-gray-600">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="h-4 w-4 shrink-0 text-amber-600">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-2">
                      <CourseLink href={course.href} className="block w-full rounded-xl bg-amber-500 py-3 text-center text-sm font-semibold text-white transition hover:bg-amber-600">
                        {course.cta}
                      </CourseLink>
                      <a href={`/${lang}/formations/${slug}`} className="block w-full rounded-xl border border-gray-200 py-2.5 text-center text-sm text-gray-600 transition hover:border-amber-300 hover:text-amber-700">
                        {dict.courses.detail_label}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ rapide */}
      <section className="bg-white px-5 py-16 md:px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-gray-900">
            {isFr ? "Questions fréquentes" : "Frequently asked questions"}
          </h2>
          <div className="space-y-4">
            {(isFr ? [
              ["Quel âge pour commencer ?", "Nos cours de tutorat s'adressent aux enfants de 6 à 14 ans environ (primaire et début collège)."],
              ["Comment se déroule une séance ?", "En visioconférence, avec tableau blanc interactif et exercices partagés. Votre enfant a besoin d'un ordinateur ou d'une tablette et d'une connexion internet."],
              ["À quelle fréquence ?", "La plupart des familles choisissent 1 à 2 séances par semaine. Le pack vacances d'été propose 2 séances par semaine en groupe de 4."],
              ["Comment suivre les progrès ?", "Après chaque mois, un rapport de progression est envoyé aux parents avec les points forts, les axes d'amélioration et les objectifs pour la période suivante."],
            ] : [
              ["What age can they start?", "Our tutoring is designed for children aged 6 to 14 (primary school and early secondary)."],
              ["How does a session work?", "Via video call, with interactive whiteboard and shared exercises. Your child needs a computer or tablet and an internet connection."],
              ["How often?", "Most families choose 1 to 2 sessions per week. The summer pack includes 2 sessions per week in a group of 4."],
              ["How do we track progress?", "After each month, a progress report is sent to parents covering strengths, areas to improve, and goals for the next period."],
            ]).map(([q, a]) => (
              <div key={q} className="rounded-xl border border-gray-200 p-5">
                <p className="mb-1.5 font-semibold text-gray-900">{q}</p>
                <p className="text-sm leading-relaxed text-gray-600">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA bottom */}
      <section className="bg-amber-500 px-5 py-14 text-center md:px-6">
        <h2 className="mb-3 text-2xl font-bold text-white">
          {isFr ? "Prêt à commencer ?" : "Ready to start?"}
        </h2>
        <p className="mb-6 text-amber-100">
          {isFr ? "Contactez-nous pour choisir le bon programme pour votre enfant." : "Contact us to choose the right program for your child."}
        </p>
        <a href={`/${lang}#nous-contacter`} className="inline-block rounded-xl bg-white px-8 py-3 font-semibold text-amber-700 transition hover:bg-amber-50">
          {isFr ? "Nous contacter" : "Contact us"}
        </a>
      </section>

      <Footer t={dict.footer} lang={lang} />
    </main>
  );
}
