"use client";

import { useState, useMemo } from "react";
import { QUESTIONS, DOMAINS, type Question, type Domain, type Difficulty } from "@/app/data/istqb-questions";

// ─── Types ───────────────────────────────────────────────────────────────────
type Mode     = "entrainement" | "examen";
type Screen   = "config" | "quiz" | "results";
type Answer   = { questionId: string; chosen: number; correct: boolean };

// ─── Helpers ─────────────────────────────────────────────────────────────────
const PASSING_SCORE = 65; // ISTQB passing threshold (%)

const DOMAIN_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  blue:    { bg: "bg-blue-100",    text: "text-blue-700",    border: "border-blue-200"    },
  violet:  { bg: "bg-violet-100",  text: "text-violet-700",  border: "border-violet-200"  },
  emerald: { bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-200" },
  amber:   { bg: "bg-amber-100",   text: "text-amber-700",   border: "border-amber-200"   },
  indigo:  { bg: "bg-indigo-100",  text: "text-indigo-700",  border: "border-indigo-200"  },
  rose:    { bg: "bg-rose-100",    text: "text-rose-700",    border: "border-rose-200"    },
};

function domainColor(domain: Domain) {
  const meta = DOMAINS.find((d) => d.key === domain);
  return DOMAIN_COLORS[meta?.color ?? "blue"];
}

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ─── Sub-components ───────────────────────────────────────────────────────────
function DifficultyDots({ level }: { level: Difficulty }) {
  const filled = level === "facile" ? 1 : level === "moyen" ? 2 : 3;
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3].map((i) => (
        <span
          key={i}
          className={`h-2 w-2 rounded-full ${i <= filled ? "bg-blue-600" : "bg-gray-200"}`}
        />
      ))}
    </span>
  );
}

// ─── Config Screen ────────────────────────────────────────────────────────────
function ConfigScreen({
  onStart,
}: {
  onStart: (mode: Mode, domains: Domain[], difficulty: Difficulty | "tous", count: number) => void;
}) {
  const [mode, setMode]       = useState<Mode>("entrainement");
  const [diff, setDiff]       = useState<Difficulty | "tous">("tous");
  const [count, setCount]     = useState(20);
  const [domains, setDomains] = useState<Domain[]>(DOMAINS.map((d) => d.key));

  function toggleDomain(d: Domain) {
    setDomains((prev) =>
      prev.includes(d) ? (prev.length > 1 ? prev.filter((x) => x !== d) : prev) : [...prev, d]
    );
  }

  const available = QUESTIONS.filter(
    (q) => domains.includes(q.domain) && (diff === "tous" || q.difficulty === diff)
  ).length;

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      <div className="mb-8 text-center">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-700">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.905 59.905 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
          </svg>
          ISTQB Foundation Level
        </div>
        <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">Configurer votre session</h1>
        <p className="mt-2 text-gray-500">{available} questions disponibles avec les filtres actuels</p>
      </div>

      <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">

        {/* Mode */}
        <div>
          <p className="mb-3 text-sm font-semibold text-gray-700">Mode d&apos;entraînement</p>
          <div className="grid grid-cols-2 gap-3">
            {([
              { val: "entrainement", label: "Entraînement", desc: "Correction + explication après chaque réponse" },
              { val: "examen",       label: "Simulation examen", desc: "Score global à la fin, comme le vrai examen" },
            ] as const).map((m) => (
              <button
                key={m.val}
                onClick={() => setMode(m.val)}
                className={`rounded-xl border-2 p-4 text-left transition-all ${
                  mode === m.val
                    ? "border-blue-600 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <p className={`font-semibold ${mode === m.val ? "text-blue-700" : "text-gray-800"}`}>{m.label}</p>
                <p className="mt-1 text-xs text-gray-500">{m.desc}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Domains */}
        <div>
          <p className="mb-3 text-sm font-semibold text-gray-700">Chapitres du syllabus</p>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            {DOMAINS.map((d) => {
              const c   = DOMAIN_COLORS[d.color];
              const sel = domains.includes(d.key);
              return (
                <button
                  key={d.key}
                  onClick={() => toggleDomain(d.key)}
                  className={`rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition-all ${
                    sel ? `${c.bg} ${c.text} ${c.border} border` : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"
                  }`}
                >
                  <span className="block font-bold">{d.chapter}</span>
                  <span className="leading-tight">{d.key}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <p className="mb-3 text-sm font-semibold text-gray-700">Niveau de difficulté</p>
          <div className="flex flex-wrap gap-2">
            {(["tous", "facile", "moyen", "difficile"] as const).map((d) => (
              <button
                key={d}
                onClick={() => setDiff(d)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all capitalize ${
                  diff === d
                    ? "bg-blue-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {d === "tous" ? "Tous niveaux" : d}
              </button>
            ))}
          </div>
        </div>

        {/* Count */}
        <div>
          <p className="mb-3 text-sm font-semibold text-gray-700">
            Nombre de questions : <span className="text-blue-700">{Math.min(count, available)}</span>
          </p>
          <input
            type="range"
            min={5}
            max={Math.max(5, Math.min(100, available))}
            value={Math.min(count, available)}
            onChange={(e) => setCount(Number(e.target.value))}
            className="w-full accent-blue-700"
          />
          <div className="mt-1 flex justify-between text-xs text-gray-400">
            <span>5</span>
            <span>{Math.min(100, available)}</span>
          </div>
        </div>

        <button
          onClick={() => onStart(mode, domains, diff, Math.min(count, available))}
          disabled={available === 0}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 p-4 font-bold text-white shadow transition-all hover:-translate-y-0.5 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {available === 0
            ? "Aucune question disponible — questions bientôt ajoutées"
            : `Démarrer (${Math.min(count, available)} questions)`}
        </button>
      </div>
    </div>
  );
}

// ─── Quiz Screen ──────────────────────────────────────────────────────────────
function QuizScreen({
  questions,
  mode,
  onFinish,
}: {
  questions: Question[];
  mode: Mode;
  onFinish: (answers: Answer[]) => void;
}) {
  const [idx, setIdx]       = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [revealed, setReveal] = useState(false);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const q       = questions[idx];
  const isLast  = idx === questions.length - 1;
  const dc      = domainColor(q.domain);
  const correct = q.answer;
  const progress = ((idx + 1) / questions.length) * 100;

  function handleChoose(i: number) {
    if (revealed) return;
    setChosen(i);
    if (mode === "examen") {
      // In exam mode, auto-confirm without explanation
      registerAndNext(i);
    }
  }

  function registerAndNext(choice: number) {
    const newAnswers = [...answers, { questionId: q.id, chosen: choice, correct: choice === q.answer }];
    setAnswers(newAnswers);
    if (isLast) {
      onFinish(newAnswers);
    } else {
      setIdx((i) => i + 1);
      setChosen(null);
      setReveal(false);
    }
  }

  function handleValidate() {
    if (chosen === null) return;
    setReveal(true);
  }

  function handleNext() {
    if (chosen === null) return;
    registerAndNext(chosen);
  }

  return (
    <div className="mx-auto max-w-2xl px-5 py-8">
      {/* Progress */}
      <div className="mb-6">
        <div className="mb-2 flex justify-between text-sm text-gray-500">
          <span>Question {idx + 1} / {questions.length}</span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">
        {/* Meta */}
        <div className="mb-5 flex items-center gap-3">
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${dc.bg} ${dc.text} ${dc.border}`}>
            {q.domain}
          </span>
          <DifficultyDots level={q.difficulty} />
        </div>

        {/* Question */}
        <p className="mb-6 text-base font-semibold leading-relaxed text-gray-900 md:text-lg">{q.question}</p>

        {/* Options */}
        <div className="space-y-3">
          {q.options.map((opt, i) => {
            let cls = "rounded-xl border-2 p-4 text-left text-sm transition-all w-full font-medium";
            if (!revealed && mode === "entrainement") {
              cls += chosen === i
                ? " border-blue-500 bg-blue-50 text-blue-900"
                : " border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50";
            } else if (revealed) {
              if (i === correct)  cls += " border-emerald-500 bg-emerald-50 text-emerald-800";
              else if (i === chosen && chosen !== correct) cls += " border-red-400 bg-red-50 text-red-700";
              else cls += " border-gray-200 text-gray-400";
            } else {
              // exam mode, no reveal
              cls += chosen === i
                ? " border-blue-500 bg-blue-50 text-blue-900"
                : " border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50";
            }
            return (
              <button key={i} onClick={() => handleChoose(i)} className={cls}>
                <span className="mr-3 font-bold text-gray-400">{["A", "B", "C", "D"][i]}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {/* Explanation (training mode only) */}
        {revealed && mode === "entrainement" && (
          <div className={`mt-5 rounded-xl border p-4 text-sm leading-relaxed ${chosen === correct ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-red-200 bg-red-50 text-red-800"}`}>
            <p className="mb-1 font-bold">{chosen === correct ? "✓ Bonne réponse !" : "✗ Réponse incorrecte"}</p>
            <p>{q.explanation}</p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          {mode === "entrainement" && !revealed && (
            <button
              onClick={handleValidate}
              disabled={chosen === null}
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800 disabled:opacity-40"
            >
              Valider
            </button>
          )}
          {mode === "entrainement" && revealed && (
            <button
              onClick={handleNext}
              className="rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
            >
              {isLast ? "Voir les résultats" : "Question suivante →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Results Screen ───────────────────────────────────────────────────────────
function ResultsScreen({
  answers,
  questions,
  onRestart,
}: {
  answers: Answer[];
  questions: Question[];
  onRestart: () => void;
}) {
  const total   = answers.length;
  const correct = answers.filter((a) => a.correct).length;
  const pct     = Math.round((correct / total) * 100);
  const passed  = pct >= PASSING_SCORE;

  // Domain breakdown
  const breakdown = DOMAINS.map((d) => {
    const qs = questions.filter((q) => q.domain === d.key);
    const ans = answers.filter((a) => qs.find((q) => q.id === a.questionId));
    const ok  = ans.filter((a) => a.correct).length;
    return { ...d, total: qs.length, correct: ok, pct: qs.length ? Math.round((ok / qs.length) * 100) : null };
  }).filter((d) => d.total > 0);

  return (
    <div className="mx-auto max-w-2xl px-5 py-12">
      {/* Score */}
      <div className="mb-8 rounded-2xl bg-gradient-to-br from-slate-900 to-blue-900 p-8 text-center text-white shadow-xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-300">Résultat</p>
        <div className={`mx-auto mb-3 flex h-28 w-28 items-center justify-center rounded-full border-4 text-4xl font-bold ${passed ? "border-emerald-400 text-emerald-400" : "border-red-400 text-red-400"}`}>
          {pct}%
        </div>
        <p className={`text-xl font-bold ${passed ? "text-emerald-400" : "text-red-400"}`}>
          {passed ? "Réussi ✓" : "Échec — continuez à vous entraîner"}
        </p>
        <p className="mt-2 text-blue-200">
          {correct} / {total} bonnes réponses · Seuil ISTQB : {PASSING_SCORE}%
        </p>
      </div>

      {/* Domain breakdown */}
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h3 className="mb-4 font-bold text-gray-900">Résultats par chapitre</h3>
        <div className="space-y-3">
          {breakdown.map((d) => {
            const c = DOMAIN_COLORS[d.color];
            return (
              <div key={d.key}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className={`font-medium ${c.text}`}>{d.chapter} — {d.key}</span>
                  <span className="text-gray-500">{d.correct}/{d.total}</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                  <div
                    className={`h-full rounded-full transition-all ${d.pct! >= PASSING_SCORE ? "bg-emerald-500" : "bg-red-400"}`}
                    style={{ width: `${d.pct ?? 0}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={onRestart}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 p-4 font-bold text-white shadow transition hover:-translate-y-0.5 hover:bg-blue-800"
      >
        Recommencer une session
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ISTQBTraining() {
  const [screen, setScreen]   = useState<Screen>("config");
  const [mode, setMode]       = useState<Mode>("entrainement");
  const [session, setSession] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);

  function handleStart(m: Mode, domains: Domain[], difficulty: Difficulty | "tous", count: number) {
    const pool = QUESTIONS.filter(
      (q) => domains.includes(q.domain) && (difficulty === "tous" || q.difficulty === difficulty)
    );
    setSession(shuffle(pool).slice(0, count));
    setMode(m);
    setScreen("quiz");
  }

  function handleFinish(ans: Answer[]) {
    setAnswers(ans);
    setScreen("results");
  }

  function handleRestart() {
    setAnswers([]);
    setSession([]);
    setScreen("config");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-5 py-3 shadow-sm">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-lg bg-blue-700 px-2.5 py-1 text-xs font-bold text-white">ISTQB FL</span>
            <span className="text-sm font-semibold text-gray-700">Préparation à la certification</span>
          </div>
          {screen !== "config" && (
            <button onClick={handleRestart} className="text-sm text-gray-400 hover:text-gray-600">
              ← Nouvelle session
            </button>
          )}
        </div>
      </div>

      {screen === "config"  && <ConfigScreen onStart={handleStart} />}
      {screen === "quiz"    && <QuizScreen questions={session} mode={mode} onFinish={handleFinish} />}
      {screen === "results" && <ResultsScreen answers={answers} questions={session} onRestart={handleRestart} />}
    </div>
  );
}
