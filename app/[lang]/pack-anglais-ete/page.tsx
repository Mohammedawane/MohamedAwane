import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "../dictionaries";
import FormationEnroll from "@/app/Component/FormationEnroll";

export async function generateMetadata({ params }: PageProps<"/[lang]/pack-anglais-ete">) {
  const { lang } = await params;
  const isFr = lang !== "en";
  return {
    title: isFr
      ? "Pack Vacances d'Été — Communication Anglais 7-14 ans | Nexo Skills"
      : "Summer Pack — English Communication Ages 7-14 | Nexo Skills",
    description: isFr
      ? "Juillet & Août 2026. 2 séances de 1h30 par semaine en petit groupe de 4. Votre enfant gagne confiance en anglais oral dès cet été — en ligne."
      : "July & August 2026. 2 sessions of 1h30 per week in a small group of 4. Your child gains confidence in spoken English this summer — online.",
  };
}

const PROGRAMME_FR = [
  { num: "01", title: "Se présenter & parler de soi", desc: "Prénom, âge, famille, loisirs. Jeux de rôle et dialogues pour créer les premiers automatismes à l'oral.", tags: ["Introduction", "Oral", "Jeux de rôle"] },
  { num: "02", title: "Mon quotidien en anglais", desc: "Activités de vacances, préférences, sport, musique. Vocabulaire du quotidien avec mise en pratique immédiate.", tags: ["Vocabulaire", "Quotidien", "Expression"] },
  { num: "03", title: "Raconter & expliquer", desc: "Comment raconter un événement ou expliquer une idée simplement. Travail sur la fluidité et les mots de liaison.", tags: ["Narration", "Fluidité", "Connecteurs"] },
  { num: "04", title: "Mini-présentation devant le groupe", desc: "Chaque enfant présente un sujet de son choix en 2-3 minutes. Retour bienveillant du tuteur et des camarades.", tags: ["Présentation", "Confiance", "Feedback"] },
];

const PROGRAMME_EN = [
  { num: "01", title: "Introducing yourself & talking about yourself", desc: "Name, age, family, hobbies. Role-plays and dialogues to build first speaking habits.", tags: ["Introduction", "Speaking", "Role-play"] },
  { num: "02", title: "My daily life in English", desc: "Summer activities, preferences, sport, music. Everyday vocabulary with immediate practice.", tags: ["Vocabulary", "Daily life", "Expression"] },
  { num: "03", title: "Telling stories & explaining ideas", desc: "How to tell an event or explain an idea simply in English. Work on fluency and connectors.", tags: ["Narration", "Fluency", "Connectors"] },
  { num: "04", title: "Presenting in front of the group", desc: "Each child presents a topic of their choice for 2-3 minutes. Kind feedback from tutor and peers.", tags: ["Presentation", "Confidence", "Feedback"] },
];

export default async function PackAnglaiseEtePage({ params }: PageProps<"/[lang]/pack-anglais-ete">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const isFr = lang !== "en";
  const programme = isFr ? PROGRAMME_FR : PROGRAMME_EN;
  const t = dict.formations;

  return (
    <main className="min-h-screen bg-white">

      {/* Sticky header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
          <a href={`/${lang}`} className="group flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-700 transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
                <path d="M4 5h3l5 7 5-7h3L14 13l6 6h-3l-5-7-5 7H4l6-6L4 5Z" fill="white" />
              </svg>
            </div>
            <span className="text-sm font-bold text-gray-900">Nexo <span className="text-blue-700">Skills</span></span>
          </a>
          <a href="#enroll" className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-600">
            {isFr ? "S'inscrire — 800 DH/mois" : "Enroll — 800 MAD/month"}
          </a>
        </div>
      </header>

      {/* Hero banner */}
      <div className="relative h-64 overflow-hidden md:h-80">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/coursesPics/tutorat-anglais.jpg" alt="Pack Vacances Anglais" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
        <div className="absolute bottom-6 left-5 md:left-10">
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-amber-500 px-4 py-1.5 text-sm font-semibold text-white">
              {isFr ? "Juillet & Août 2026" : "July & August 2026"}
            </span>
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              {isFr ? "Groupe de 4 · En ligne" : "Group of 4 · Online"}
            </span>
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-sm text-white backdrop-blur-sm">
              {isFr ? "2x/semaine · 1h30" : "2x/week · 1h30"}
            </span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="mx-auto max-w-6xl px-5 py-12 md:px-6 md:py-16">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">

          {/* Left column */}
          <div>
            <nav className="mb-6 flex items-center gap-2 text-sm text-gray-500">
              <a href={`/${lang}`} className="hover:text-blue-700">{isFr ? "Accueil" : "Home"}</a>
              <span>/</span>
              <a href={`/${lang}/tutorat`} className="hover:text-blue-700">{isFr ? "Tutorat" : "Tutoring"}</a>
              <span>/</span>
              <span className="font-medium text-gray-900">{isFr ? "Pack Vacances Anglais" : "English Summer Pack"}</span>
            </nav>

            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl">
              {isFr
                ? "Pack Vacances d'Été — Communication Anglais (7-14 ans)"
                : "Summer Pack — English Communication (Ages 7-14)"}
            </h1>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600">
              {isFr
                ? "8 semaines pour que votre enfant ose parler, sache se présenter et gagne confiance en anglais — en petit groupe de 4, en ligne, deux fois par semaine."
                : "8 weeks for your child to speak up, present confidently, and gain real fluency in English — in a small group of 4, online, twice a week."}
            </p>

            {/* Highlights */}
            <div className="mb-12 grid gap-4 sm:grid-cols-3">
              {(isFr ? [
                { title: "Petit groupe de 4", text: "Chaque enfant parle à chaque séance. 1 parmi 4, pas 1 parmi 30." },
                { title: "Communication avant tout", text: "Se présenter, raconter, expliquer — des compétences orales concrètes." },
                { title: "Format vacances idéal", text: "2 séances de 1h30 par semaine — assez pour progresser sans surcharger l'été." },
              ] : [
                { title: "Small group of 4", text: "Every child speaks every session. 1 in 4, not 1 in 30." },
                { title: "Communication first", text: "Introduce yourself, tell a story, explain ideas — real spoken skills." },
                { title: "Perfect summer format", text: "2 sessions of 1h30 per week — enough to make real progress without overwhelming the summer." },
              ]).map((h) => (
                <div key={h.title} className="rounded-xl border border-amber-100 bg-amber-50 p-5">
                  <div className="mb-3 h-1 w-8 rounded-full bg-amber-500" />
                  <p className="mb-1.5 text-sm font-bold text-gray-900">{h.title}</p>
                  <p className="text-xs leading-relaxed text-gray-600">{h.text}</p>
                </div>
              ))}
            </div>

            {/* Programme */}
            <div className="mb-12">
              <h2 className="mb-6 text-2xl font-bold text-gray-900">
                {isFr ? "Programme de la session" : "Session curriculum"}
              </h2>
              <div className="grid gap-4 md:grid-cols-2">
                {programme.map((mod) => (
                  <div key={mod.num} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:border-amber-200 hover:shadow-md">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-500 text-sm font-bold text-white">{mod.num}</span>
                      <h3 className="text-sm font-bold text-gray-900">{mod.title}</h3>
                    </div>
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">{mod.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {mod.tags.map((tag) => (
                        <span key={tag} className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pour qui */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
              <h2 className="mb-6 text-xl font-bold text-gray-900">
                {isFr ? "Ce programme est fait pour votre enfant si…" : "This program is right for your child if…"}
              </h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {(isFr ? [
                  "Il a entre 7 et 14 ans et veut améliorer son anglais oral",
                  "Il comprend un peu mais hésite à parler",
                  "Vous cherchez une activité enrichissante pour l'été",
                  "Vous voulez qu'il reparte en septembre plus confiant en anglais",
                  "Vous préférez un petit groupe bienveillant à une grande classe",
                ] : [
                  "They are between 7 and 14 and want to improve their spoken English",
                  "They understand a little but hesitate to speak",
                  "You're looking for an enriching summer activity",
                  "You want them to go back in September more confident in English",
                  "You prefer a warm small group over a large classroom",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth={2.5} className="h-3 w-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right column — enrollment card */}
          <div id="enroll" className="lg:sticky lg:top-24 lg:self-start">
            <FormationEnroll t={t} course="anglais-vacances-ete" lang={lang} price="800 DH/mois" />
          </div>
        </div>
      </div>

      {/* Footer minimal */}
      <footer className="border-t border-gray-200 bg-white px-6 py-8 text-center">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Nexo Skills —{" "}
          <a href="mailto:info@nexo-skills.com" className="hover:text-blue-700">info@nexo-skills.com</a>
          {" · "}
          <a href={`/${lang}/tutorat`} className="hover:text-blue-700">{isFr ? "Voir tous nos cours de tutorat" : "See all tutoring programs"}</a>
        </p>
      </footer>
    </main>
  );
}
