"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  QUESTIONS, DOMAINS, EXAM_SETS, EXAM_INFO,
  type CTALQuestion as Question, type CTALDomain as Domain, type Difficulty, type ExamInfo,
} from "@/app/data/istqb-ctal-ta-questions";

// ─── Types ────────────────────────────────────────────────────────────────────

type Mode   = "entrainement" | "examen";
type Screen = "home" | "config" | "quiz" | "results";

type CompletedAnswer = {
  questionId: string;
  chosen: number[]; // empty array = unanswered
  correct: boolean;
};

type ExamResult = {
  score: number;       // 0–100
  completedAt: number; // timestamp
  attempts: number;
};

type Progress = Record<number, ExamResult>;

// ─── Constants ────────────────────────────────────────────────────────────────

const PASSING_SCORE = 65;
const LS_KEY = "ctalta_v1_progress";
const LETTERS = ["A", "B", "C", "D", "E", "F"];

const DOMAIN_COLORS: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  blue:    { bg: "bg-blue-50",    text: "text-blue-700",    border: "border-blue-200",    dot: "bg-blue-500"    },
  violet:  { bg: "bg-violet-50",  text: "text-violet-700",  border: "border-violet-200",  dot: "bg-violet-500"  },
  emerald: { bg: "bg-emerald-50", text: "text-emerald-700", border: "border-emerald-200", dot: "bg-emerald-500" },
  amber:   { bg: "bg-amber-50",   text: "text-amber-700",   border: "border-amber-200",   dot: "bg-amber-500"   },
  indigo:  { bg: "bg-indigo-50",  text: "text-indigo-700",  border: "border-indigo-200",  dot: "bg-indigo-500"  },
  rose:    { bg: "bg-rose-50",    text: "text-rose-700",    border: "border-rose-200",    dot: "bg-rose-500"    },
};

// ─── Utilities ────────────────────────────────────────────────────────────────

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function formatTime(s: number): string {
  const m = Math.floor(s / 60);
  const sec = s % 60;
  return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

function domainMeta(domain: Domain) {
  return DOMAINS.find((d) => d.key === domain)!;
}

function isCorrectSelection(chosen: number[], correct: number[]) {
  if (chosen.length !== correct.length) return false;
  const s = new Set(chosen);
  return correct.every((i) => s.has(i));
}

function loadProgress(): Progress {
  if (typeof window === "undefined") return {};
  try { return JSON.parse(localStorage.getItem(LS_KEY) ?? "{}"); } catch { return {}; }
}

function saveProgress(p: Progress) {
  if (typeof window === "undefined") return;
  localStorage.setItem(LS_KEY, JSON.stringify(p));
}

// ─── Score Ring SVG ───────────────────────────────────────────────────────────

function ScoreRing({ score, size = 120 }: { score: number; size?: number }) {
  const r   = (size / 2) * 0.8;
  const c   = 2 * Math.PI * r;
  const off = c - (score / 100) * c;
  const passed = score >= PASSING_SCORE;
  const color  = passed ? "#10b981" : score >= 50 ? "#f59e0b" : "#ef4444";
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} style={{ transform: "rotate(-90deg)" }}>
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#e2e8f0" strokeWidth={size * 0.07} />
      <circle
        cx={size / 2} cy={size / 2} r={r} fill="none"
        stroke={color} strokeWidth={size * 0.07}
        strokeDasharray={`${c}`} strokeDashoffset={`${off}`}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)" }}
      />
      <text
        x={size / 2} y={size / 2}
        textAnchor="middle" dominantBaseline="central"
        style={{ transform: `rotate(90deg) translate(0px, -${size}px)`, transformOrigin: `${size/2}px ${size/2}px`, fill: color, fontSize: size * 0.22, fontWeight: 800 }}
      >
        {score}%
      </text>
    </svg>
  );
}

// ─── HOME SCREEN ──────────────────────────────────────────────────────────────

function HomeScreen({
  progress,
  onStartExam,
  onOpenConfig,
}: {
  progress: Progress;
  onStartExam: (examId: number) => void;
  onOpenConfig: () => void;
}) {
  const totalQ   = QUESTIONS.length;
  const done     = Object.keys(progress).length;
  const bestPct  = done ? Math.max(...Object.values(progress).map((r) => r.score)) : null;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 px-6 py-10 text-white">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-amber-400" />
            ISTQB CTAL-TA — Advanced Level Test Analyst
          </div>
          <h1 className="text-2xl font-bold leading-tight md:text-3xl">Préparation à la certification</h1>
          <p className="mt-2 text-sm text-blue-200">5 examens blancs · {totalQ} questions · Correction détaillée</p>

          {/* Stats */}
          <div className="mt-6 flex flex-wrap gap-3">
            {[
              { label: "Questions", value: totalQ },
              { label: "Examens complétés", value: `${done}/5` },
              { label: "Meilleur score", value: bestPct !== null ? `${bestPct}%` : "—" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-white/10 px-4 py-2 backdrop-blur-sm">
                <p className="text-xs text-blue-200">{s.label}</p>
                <p className="text-lg font-bold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-5 py-8 space-y-8">
        {/* Examens Blancs */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500">
            <span className="h-px flex-1 bg-gray-200" />
            Examens Blancs
            <span className="h-px flex-1 bg-gray-200" />
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {EXAM_INFO.map((exam) => {
              const result  = progress[exam.id];
              const passed  = result && result.score >= PASSING_SCORE;
              return (
                <ExamCard
                  key={exam.id}
                  exam={exam}
                  result={result ?? null}
                  passed={!!passed}
                  onStart={() => onStartExam(exam.id)}
                />
              );
            })}
          </div>
        </section>

        {/* Entraînement libre */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500">
            <span className="h-px flex-1 bg-gray-200" />
            Entraînement Personnalisé
            <span className="h-px flex-1 bg-gray-200" />
          </h2>
          <button
            onClick={onOpenConfig}
            className="group w-full rounded-2xl border-2 border-dashed border-gray-300 bg-white p-6 text-left transition-all hover:border-blue-400 hover:bg-blue-50"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 transition-colors group-hover:bg-blue-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">Session configurable</p>
                <p className="text-sm text-gray-500">Choisissez les chapitres, la difficulté et le mode — correction immédiate ou simulation</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="ml-auto h-5 w-5 flex-shrink-0 text-gray-400 transition-transform group-hover:translate-x-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </button>
        </section>

        {/* Révision par chapitre */}
        <section>
          <h2 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gray-500">
            <span className="h-px flex-1 bg-gray-200" />
            Révision par Chapitre
            <span className="h-px flex-1 bg-gray-200" />
          </h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {DOMAINS.map((d) => {
              const c     = DOMAIN_COLORS[d.color];
              const count = QUESTIONS.filter((q) => q.domain === d.key).length;
              return (
                <button
                  key={d.key}
                  onClick={() => onOpenConfig()}
                  className={`group rounded-xl border p-4 text-left transition-all hover:-translate-y-0.5 hover:shadow-sm ${c.bg} ${c.border}`}
                >
                  <span className={`mb-1 block text-xs font-bold ${c.text}`}>{d.chapter}</span>
                  <span className="block text-xs leading-tight text-gray-700">{d.key}</span>
                  <span className={`mt-2 block text-xs font-semibold ${c.text}`}>{count} questions</span>
                </button>
              );
            })}
          </div>
        </section>

        <div className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm text-blue-700">
          <strong>Rappel CTAL-TA :</strong> 40 questions · 60 minutes · Seuil de réussite : 65% · certaines questions demandent de sélectionner plusieurs réponses
        </div>
      </div>
    </div>
  );
}

function ExamCard({ exam, result, passed, onStart }: { exam: ExamInfo; result: ExamResult | null; passed: boolean; onStart: () => void }) {
  const statusColor = !result ? "border-gray-200" : passed ? "border-emerald-300" : "border-amber-300";
  const numBg = !result ? "bg-blue-700 text-white" : passed ? "bg-emerald-500 text-white" : "bg-amber-500 text-white";

  return (
    <div className={`flex flex-col rounded-2xl border-2 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${statusColor}`}>
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl text-lg font-bold ${numBg}`}>
          {exam.id}
        </div>
        {result && (
          <span className={`rounded-full px-2.5 py-0.5 text-xs font-bold ${passed ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
            {result.score}% {passed ? "✓" : "✗"}
          </span>
        )}
      </div>

      <div className="flex-1">
        <h3 className="font-bold text-gray-900">{exam.title}</h3>
        <p className="mt-0.5 text-xs text-gray-500">{exam.subtitle}</p>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
          <span>{exam.questionCount} questions</span>
          <span>{exam.durationMinutes} min</span>
          {result && <span>{result.attempts} essai{result.attempts > 1 ? "s" : ""}</span>}
        </div>
      </div>

      <button
        onClick={onStart}
        className={`mt-4 w-full rounded-xl py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
          result
            ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
            : "bg-blue-700 text-white hover:bg-blue-800"
        }`}
      >
        {result ? "Recommencer" : "Démarrer →"}
      </button>
    </div>
  );
}

// ─── CONFIG SCREEN ────────────────────────────────────────────────────────────

function ConfigScreen({
  onStart,
  onBack,
}: {
  onStart: (mode: Mode, domains: Domain[], difficulty: Difficulty | "tous", count: number) => void;
  onBack: () => void;
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
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-5 py-3 shadow-sm">
        <div className="mx-auto flex max-w-2xl items-center gap-3">
          <button onClick={onBack} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            Accueil
          </button>
          <span className="text-gray-300">/</span>
          <span className="text-sm font-semibold text-gray-700">Entraînement libre</span>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-5 py-8">
        <div className="mb-6">
          <h1 className="text-xl font-bold text-gray-900">Configurer votre session</h1>
          <p className="mt-1 text-sm text-gray-500">{available} questions disponibles</p>
        </div>

        <div className="space-y-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          {/* Mode */}
          <div>
            <p className="mb-3 text-sm font-semibold text-gray-700">Mode</p>
            <div className="grid grid-cols-2 gap-3">
              {([
                { val: "entrainement", label: "Entraînement", desc: "Correction + explication après chaque réponse" },
                { val: "examen",       label: "Simulation examen", desc: "Score global à la fin, comme le vrai examen" },
              ] as const).map((m) => (
                <button key={m.val} onClick={() => setMode(m.val)}
                  className={`rounded-xl border-2 p-4 text-left transition-all ${mode === m.val ? "border-blue-600 bg-blue-50" : "border-gray-200 hover:border-gray-300"}`}>
                  <p className={`font-semibold text-sm ${mode === m.val ? "text-blue-700" : "text-gray-800"}`}>{m.label}</p>
                  <p className="mt-1 text-xs text-gray-500">{m.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Domains */}
          <div>
            <p className="mb-3 text-sm font-semibold text-gray-700">Chapitres</p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {DOMAINS.map((d) => {
                const c   = DOMAIN_COLORS[d.color];
                const sel = domains.includes(d.key);
                return (
                  <button key={d.key} onClick={() => toggleDomain(d.key)}
                    className={`rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition-all ${sel ? `${c.bg} ${c.text} ${c.border} border` : "border-gray-200 bg-white text-gray-500 hover:border-gray-300"}`}>
                    <span className="block font-bold">{d.chapter}</span>
                    <span className="leading-tight">{d.key}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Difficulty */}
          <div>
            <p className="mb-3 text-sm font-semibold text-gray-700">Difficulté</p>
            <div className="flex flex-wrap gap-2">
              {(["tous", "facile", "moyen", "difficile"] as const).map((d) => (
                <button key={d} onClick={() => setDiff(d)}
                  className={`rounded-full px-4 py-1.5 text-sm font-medium transition-all ${diff === d ? "bg-blue-700 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                  {d === "tous" ? "Tous niveaux" : d.charAt(0).toUpperCase() + d.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <div>
            <p className="mb-3 text-sm font-semibold text-gray-700">
              Nombre de questions : <span className="text-blue-700 font-bold">{Math.min(count, available)}</span>
            </p>
            <input type="range" min={5} max={Math.max(5, Math.min(100, available))}
              value={Math.min(count, available)} onChange={(e) => setCount(Number(e.target.value))}
              className="w-full accent-blue-700" />
            <div className="mt-1 flex justify-between text-xs text-gray-400"><span>5</span><span>{Math.min(100, available)}</span></div>
          </div>

          <button
            onClick={() => onStart(mode, domains, diff, Math.min(count, available))}
            disabled={available === 0}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 p-4 font-bold text-white shadow transition-all hover:-translate-y-0.5 hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {available === 0 ? "Aucune question disponible" : `Démarrer (${Math.min(count, available)} questions)`}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── QUIZ SCREEN ──────────────────────────────────────────────────────────────

function QuizScreen({
  questions,
  mode,
  durationSeconds,
  examTitle,
  onFinish,
  onHome,
}: {
  questions: Question[];
  mode: Mode;
  durationSeconds: number | null;
  examTitle: string;
  onFinish: (answers: CompletedAnswer[]) => void;
  onHome: () => void;
}) {
  const isExam = mode === "examen";

  // ── State
  const [idx, setIdx]                 = useState(0);
  const [selected, setSelected]       = useState<number[][]>(() => questions.map(() => []));
  const [flagged, setFlagged]         = useState<boolean[]>(Array(questions.length).fill(false));
  const [revealed, setRevealed]       = useState(false);  // training: show explanation
  const [submitted, setSubmitted]     = useState(false);
  const [timeLeft, setTimeLeft]       = useState(durationSeconds ?? 0);
  const [timedOut, setTimedOut]       = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const q             = questions[idx];
  const dc            = DOMAIN_COLORS[domainMeta(q.domain).color];
  const progress      = ((idx + 1) / questions.length) * 100;
  const answered      = selected.filter((s) => s.length > 0).length;
  const requiredCount = q.answer.length;
  const isMulti       = requiredCount > 1;
  const canValidate   = selected[idx].length === requiredCount;

  // ── Timer (exam mode only)
  useEffect(() => {
    if (!isExam || durationSeconds === null || submitted) return;
    if (timeLeft <= 0) { setTimedOut(true); return; }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [isExam, durationSeconds, submitted, timeLeft]);

  // ── Auto-submit on timeout
  const handleSubmit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);
    const answers: CompletedAnswer[] = questions.map((qq, i) => ({
      questionId: qq.id,
      chosen: selected[i],
      correct: isCorrectSelection(selected[i], qq.answer),
    }));
    onFinish(answers);
  }, [submitted, questions, selected, onFinish]);

  useEffect(() => {
    if (timedOut && !submitted) handleSubmit();
  }, [timedOut, submitted, handleSubmit]);

  function handleSelect(i: number) {
    if (revealed) return;
    setSelected((prev) => {
      const a = [...prev];
      const current = a[idx];
      if (!isMulti) {
        a[idx] = [i];
        return a;
      }
      if (current.includes(i)) {
        a[idx] = current.filter((x) => x !== i);
      } else if (current.length < requiredCount) {
        a[idx] = [...current, i];
      }
      return a;
    });
  }

  // ── Keyboard shortcuts
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const letters = LETTERS.slice(0, q.options.length).map((l) => l.toLowerCase());
      if (letters.includes(e.key.toLowerCase())) {
        handleSelect(letters.indexOf(e.key.toLowerCase()));
      }
      if (e.key === "Enter") {
        if (isExam) {
          if (idx < questions.length - 1) next();
        } else {
          if (!revealed && canValidate) setRevealed(true);
          else if (revealed) next();
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function toggleFlag() {
    setFlagged((prev) => { const a = [...prev]; a[idx] = !a[idx]; return a; });
  }

  function next() {
    if (idx < questions.length - 1) {
      setIdx(idx + 1);
      setRevealed(false);
      // scroll nav
      setTimeout(() => {
        const btn = navRef.current?.querySelector(`[data-qi="${idx + 1}"]`);
        btn?.scrollIntoView({ block: "nearest", inline: "center" });
      }, 50);
    } else if (isExam) {
      handleSubmit();
    } else {
      // training: finish when last question is answered and revealed
      if (revealed) {
        const answers: CompletedAnswer[] = questions.map((qq, i) => ({
          questionId: qq.id,
          chosen: selected[i],
          correct: isCorrectSelection(selected[i], qq.answer),
        }));
        onFinish(answers);
      }
    }
  }

  function prev() {
    if (idx > 0) { setIdx(idx - 1); setRevealed(false); }
  }

  const timerColor = timeLeft > 300 ? "text-gray-700" : timeLeft > 60 ? "text-amber-600" : "text-red-600";

  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-20 border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <button onClick={onHome} className="flex items-center gap-1 text-sm text-gray-400 hover:text-gray-700 flex-shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" /></svg>
            <span className="hidden sm:inline">Accueil</span>
          </button>
          <span className="flex-1 text-center text-sm font-semibold text-gray-700 truncate">{examTitle}</span>
          {isExam && durationSeconds !== null && (
            <span className={`flex-shrink-0 font-mono text-sm font-bold tabular-nums ${timerColor}`}>
              {formatTime(timeLeft)}
            </span>
          )}
        </div>
        {/* Progress bar */}
        <div className="h-1 w-full bg-gray-100">
          <div className="h-full bg-blue-600 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Question */}
      <div className="mx-auto w-full max-w-3xl flex-1 px-4 py-6">
        {/* Meta */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${dc.bg} ${dc.text} ${dc.border}`}>
            {domainMeta(q.domain).chapter} · {q.domain}
          </span>
          <DifficultyPill level={q.difficulty} />
          {isMulti && (
            <span className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
              Sélectionnez {requiredCount} réponses ({selected[idx].length}/{requiredCount})
            </span>
          )}
          <span className="ml-auto text-xs text-gray-400 tabular-nums">
            {idx + 1}/{questions.length}
            {isExam && ` · ${answered} répondues`}
          </span>
        </div>

        {/* Question card */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <p className="mb-6 whitespace-pre-line text-base font-semibold leading-relaxed text-gray-900 md:text-lg">
            {q.question}
          </p>

          <div className="space-y-3">
            {q.options.map((opt, i) => {
              const isSel   = selected[idx].includes(i);
              const isRight = q.answer.includes(i);
              let cls = "w-full rounded-xl border-2 p-4 text-left text-sm font-medium transition-all flex items-start gap-3 cursor-pointer";

              if (!revealed) {
                cls += isSel
                  ? " border-blue-500 bg-blue-50 text-blue-900"
                  : " border-gray-200 text-gray-700 hover:border-blue-300 hover:bg-blue-50/50";
              } else {
                if (isRight)                  cls += " border-emerald-400 bg-emerald-50 text-emerald-900";
                else if (isSel && !isRight)   cls += " border-red-400 bg-red-50 text-red-800";
                else                          cls += " border-gray-200 text-gray-400";
              }

              return (
                <button key={i} onClick={() => handleSelect(i)} disabled={revealed} className={cls}>
                  <span className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                    revealed && isRight ? "bg-emerald-500 text-white" :
                    revealed && isSel && !isRight ? "bg-red-400 text-white" :
                    isSel ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-500"
                  }`}>
                    {LETTERS[i]}
                  </span>
                  <span className="leading-relaxed">{opt}</span>
                  {revealed && isRight && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="ml-auto h-5 w-5 flex-shrink-0 text-emerald-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation (training only) */}
          {revealed && mode === "entrainement" && (
            <div className={`mt-5 rounded-xl border p-4 text-sm leading-relaxed ${isCorrectSelection(selected[idx], q.answer) ? "border-emerald-200 bg-emerald-50 text-emerald-800" : "border-amber-200 bg-amber-50 text-amber-900"}`}>
              <p className="mb-1.5 font-bold">
                {isCorrectSelection(selected[idx], q.answer) ? "✓ Bonne réponse !" : "✗ Mauvaise réponse — voici l'explication :"}
              </p>
              <p className="whitespace-pre-line">{q.explanation}</p>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          {isExam && (
            <button onClick={toggleFlag}
              className={`flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all ${flagged[idx] ? "border-amber-400 bg-amber-50 text-amber-700" : "border-gray-200 text-gray-500 hover:border-gray-300"}`}>
              <svg viewBox="0 0 24 24" fill={flagged[idx] ? "currentColor" : "none"} stroke="currentColor" strokeWidth={2} className="h-4 w-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18m0-16.5 6-1.5 6 1.5 6-1.5V18l-6 1.5-6-1.5-6 1.5" />
              </svg>
              {flagged[idx] ? "Marquée" : "Marquer"}
            </button>
          )}

          <div className="flex flex-1 justify-end gap-2">
            {idx > 0 && (
              <button onClick={prev} className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-600 hover:bg-gray-100">
                ← Précédente
              </button>
            )}
            {/* Training: Valider then Suivant */}
            {!isExam && !revealed && (
              <button onClick={() => setRevealed(true)} disabled={!canValidate}
                className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800 disabled:opacity-40">
                Valider
              </button>
            )}
            {!isExam && revealed && (
              <button onClick={next}
                className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">
                {idx === questions.length - 1 ? "Voir les résultats →" : "Suivante →"}
              </button>
            )}
            {/* Exam: always show Suivante / Terminer */}
            {isExam && idx < questions.length - 1 && (
              <button onClick={next}
                className="rounded-xl bg-blue-700 px-5 py-2 text-sm font-bold text-white hover:bg-blue-800">
                Suivante →
              </button>
            )}
            {isExam && idx === questions.length - 1 && (
              <button onClick={handleSubmit}
                className="rounded-xl bg-emerald-600 px-5 py-2 text-sm font-bold text-white hover:bg-emerald-700">
                Terminer l&apos;examen ✓
              </button>
            )}
          </div>
        </div>

        {/* Question navigator (exam mode) */}
        {isExam && (
          <div className="mt-6">
            <p className="mb-2 text-xs font-semibold text-gray-400">Navigateur de questions</p>
            <div ref={navRef} className="flex flex-wrap gap-1.5">
              {questions.map((_, i) => {
                const isCurrent  = i === idx;
                const isAnswered = selected[i].length > 0;
                const isFlagged  = flagged[i];
                return (
                  <button
                    key={i}
                    data-qi={i}
                    onClick={() => { setIdx(i); setRevealed(false); }}
                    className={`h-7 w-7 rounded-lg text-xs font-bold transition-all ${
                      isCurrent  ? "bg-blue-700 text-white ring-2 ring-blue-300 ring-offset-1" :
                      isFlagged  ? "border-2 border-amber-400 bg-amber-50 text-amber-700" :
                      isAnswered ? "bg-blue-100 text-blue-700" :
                                   "bg-gray-100 text-gray-400 hover:bg-gray-200"
                    }`}
                  >
                    {i + 1}
                  </button>
                );
              })}
            </div>
            {flagged.some(Boolean) && (
              <p className="mt-2 text-xs text-amber-600">
                {flagged.filter(Boolean).length} question{flagged.filter(Boolean).length > 1 ? "s" : ""} marquée{flagged.filter(Boolean).length > 1 ? "s" : ""} pour révision
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DifficultyPill({ level }: { level: Difficulty }) {
  const map = { facile: "bg-emerald-100 text-emerald-700", moyen: "bg-amber-100 text-amber-700", difficile: "bg-red-100 text-red-700" };
  return (
    <span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${map[level]}`}>
      {level.charAt(0).toUpperCase() + level.slice(1)}
    </span>
  );
}

// ─── RESULTS SCREEN ───────────────────────────────────────────────────────────

function ResultsScreen({
  answers,
  questions,
  examId,
  onRetry,
  onHome,
}: {
  answers: CompletedAnswer[];
  questions: Question[];
  examId: number | null;
  onRetry: () => void;
  onHome: () => void;
}) {
  const [showWrong, setShowWrong] = useState(false);
  const total   = answers.length;
  const correct = answers.filter((a) => a.correct).length;
  const skipped = answers.filter((a) => a.chosen.length === 0).length;
  const score   = Math.round((correct / total) * 100);
  const passed  = score >= PASSING_SCORE;

  const breakdown = useMemo(() => DOMAINS.map((d) => {
    const qs  = questions.filter((q) => q.domain === d.key);
    const ans = answers.filter((a) => qs.find((q) => q.id === a.questionId));
    const ok  = ans.filter((a) => a.correct).length;
    return { ...d, total: qs.length, correct: ok, pct: qs.length ? Math.round((ok / qs.length) * 100) : null };
  }).filter((d) => d.total > 0), [answers, questions]);

  const wrongAnswers = useMemo(() =>
    answers
      .filter((a) => !a.correct)
      .map((a) => ({ answer: a, question: questions.find((q) => q.id === a.questionId)! }))
      .filter((x) => x.question),
    [answers, questions]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-3 shadow-sm">
        <div className="mx-auto flex max-w-2xl items-center justify-between">
          <button onClick={onHome} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-800">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4"><path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 12l6-6m-6 6 6 6" /></svg>
            Accueil
          </button>
          <span className="text-sm font-semibold text-gray-700">Résultats</span>
          <button onClick={onRetry} className="text-sm font-semibold text-blue-700 hover:text-blue-800">Recommencer</button>
        </div>
      </div>

      <div className="mx-auto max-w-2xl space-y-5 px-4 py-8">
        {/* Score hero */}
        <div className={`rounded-2xl p-8 text-center shadow-lg ${passed ? "bg-gradient-to-br from-emerald-600 to-teal-700" : "bg-gradient-to-br from-slate-800 to-blue-900"} text-white`}>
          <p className="mb-4 text-xs font-bold uppercase tracking-widest opacity-70">
            {examId ? `Examen Blanc ${examId}` : "Entraînement"}
          </p>
          <div className="mx-auto mb-5 w-fit">
            <ScoreRing score={score} size={140} />
          </div>
          <p className={`text-2xl font-bold ${passed ? "text-emerald-200" : "text-red-300"}`}>
            {passed ? "Félicitations — Réussi ✓" : "Continuez à vous entraîner"}
          </p>
          <p className="mt-2 opacity-80">
            {correct}/{total} bonnes réponses · Seuil ISTQB : {PASSING_SCORE}%
            {skipped > 0 && ` · ${skipped} non répondues`}
          </p>
        </div>

        {/* Per-chapter breakdown */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-4 font-bold text-gray-900">Résultats par chapitre</h3>
          <div className="space-y-4">
            {breakdown.map((d) => {
              const c    = DOMAIN_COLORS[d.color];
              const pass = (d.pct ?? 0) >= PASSING_SCORE;
              return (
                <div key={d.key}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className={`h-2 w-2 rounded-full ${c.dot}`} />
                      <span className="font-medium text-gray-700">{d.chapter} — {d.key}</span>
                    </div>
                    <span className={`text-xs font-bold ${pass ? "text-emerald-600" : "text-red-500"}`}>
                      {d.correct}/{d.total} ({d.pct}%)
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ${pass ? "bg-emerald-500" : "bg-red-400"}`}
                      style={{ width: `${d.pct ?? 0}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Wrong answers review */}
        {wrongAnswers.length > 0 && (
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <button
              onClick={() => setShowWrong(!showWrong)}
              className="flex w-full items-center justify-between p-5 text-left"
            >
              <div>
                <h3 className="font-bold text-gray-900">Révision des erreurs</h3>
                <p className="text-sm text-gray-500">{wrongAnswers.length} question{wrongAnswers.length > 1 ? "s" : ""} incorrecte{wrongAnswers.length > 1 ? "s" : ""}</p>
              </div>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                className={`h-5 w-5 text-gray-400 transition-transform ${showWrong ? "rotate-180" : ""}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </svg>
            </button>

            {showWrong && (
              <div className="border-t border-gray-100 divide-y divide-gray-100">
                {wrongAnswers.map(({ answer: a, question: q }, wi) => {
                  const c  = DOMAIN_COLORS[domainMeta(q.domain).color];
                  return (
                    <div key={wi} className="p-5">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <span className={`rounded-full border px-2 py-0.5 text-xs font-semibold ${c.bg} ${c.text} ${c.border}`}>
                          {domainMeta(q.domain).chapter}
                        </span>
                        <DifficultyPill level={q.difficulty} />
                      </div>
                      <p className="mb-3 whitespace-pre-line text-sm font-semibold text-gray-900">{q.question}</p>
                      <div className="space-y-1.5">
                        {q.options.map((opt, i) => {
                          const isRight = q.answer.includes(i);
                          const isChosen = a.chosen.includes(i);
                          if (!isRight && !isChosen) return null;
                          return (
                            <div key={i} className={`flex items-start gap-2 rounded-lg p-2.5 text-sm ${isRight ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"}`}>
                              <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded text-xs font-bold ${isRight ? "bg-emerald-500 text-white" : "bg-red-400 text-white"}`}>
                                {LETTERS[i]}
                              </span>
                              <span className="flex-1">{opt}</span>
                              <span className="flex-shrink-0 text-xs font-semibold">{isRight ? "✓ Correcte" : "✗ Votre réponse"}</span>
                            </div>
                          );
                        })}
                      </div>
                      <div className="mt-3 rounded-lg bg-blue-50 p-3 text-xs text-blue-800 leading-relaxed border border-blue-100">
                        <strong>Explication :</strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3">
          <button onClick={onRetry}
            className="rounded-xl border-2 border-blue-700 py-3 text-sm font-bold text-blue-700 transition hover:bg-blue-50">
            Recommencer
          </button>
          <button onClick={onHome}
            className="rounded-xl bg-blue-700 py-3 text-sm font-bold text-white transition hover:bg-blue-800">
            Accueil →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function CTALTATraining() {
  const [screen, setScreen]         = useState<Screen>("home");
  const [mode, setMode]             = useState<Mode>("examen");
  const [session, setSession]       = useState<Question[]>([]);
  const [answers, setAnswers]       = useState<CompletedAnswer[]>([]);
  const [progress, setProgress]     = useState<Progress>({});
  const [currentExamId, setCurrentExamId] = useState<number | null>(null);
  const [examTitle, setExamTitle]   = useState("ISTQB CTAL-TA");
  const [duration, setDuration]     = useState<number | null>(null);
  const sessionRef = useRef<Question[]>([]);

  useEffect(() => { setProgress(loadProgress()); }, []);

  function startExam(examId: number) {
    const info = EXAM_INFO.find((e) => e.id === examId)!;
    const ids  = EXAM_SETS[examId];
    const qs   = ids.map((id) => QUESTIONS.find((q) => q.id === id)).filter(Boolean) as Question[];
    setSession(qs);
    sessionRef.current = qs;
    setMode("examen");
    setCurrentExamId(examId);
    setExamTitle(info.title);
    setDuration(info.durationMinutes * 60);
    setAnswers([]);
    setScreen("quiz");
  }

  function startFreeTraining(m: Mode, domains: Domain[], difficulty: Difficulty | "tous", count: number) {
    const pool = QUESTIONS.filter(
      (q) => domains.includes(q.domain) && (difficulty === "tous" || q.difficulty === difficulty)
    );
    const qs = shuffle(pool).slice(0, count);
    setSession(qs);
    sessionRef.current = qs;
    setMode(m);
    setCurrentExamId(null);
    setExamTitle("Entraînement libre");
    setDuration(m === "examen" ? count * 90 : null); // ~90s per question in free exam mode
    setAnswers([]);
    setScreen("quiz");
  }

  function handleFinish(ans: CompletedAnswer[]) {
    setAnswers(ans);

    // Save progress if it was an official exam
    if (currentExamId !== null) {
      const correct = ans.filter((a) => a.correct).length;
      const score   = Math.round((correct / ans.length) * 100);
      const prev    = loadProgress();
      const updated: Progress = {
        ...prev,
        [currentExamId]: {
          score: Math.max(score, prev[currentExamId]?.score ?? 0),
          completedAt: Date.now(),
          attempts: (prev[currentExamId]?.attempts ?? 0) + 1,
        },
      };
      saveProgress(updated);
      setProgress(updated);
    }

    setScreen("results");
  }

  function handleRetry() {
    if (currentExamId !== null) {
      startExam(currentExamId);
    } else {
      // re-shuffle same pool
      const qs = shuffle([...sessionRef.current]);
      setSession(qs);
      sessionRef.current = qs;
      setAnswers([]);
      setScreen("quiz");
    }
  }

  function goHome() {
    setScreen("home");
    setAnswers([]);
    setSession([]);
  }

  return (
    <>
      {screen === "home" && (
        <HomeScreen
          progress={progress}
          onStartExam={startExam}
          onOpenConfig={() => setScreen("config")}
        />
      )}
      {screen === "config" && (
        <ConfigScreen
          onStart={startFreeTraining}
          onBack={() => setScreen("home")}
        />
      )}
      {screen === "quiz" && (
        <QuizScreen
          key={session[0]?.id ?? "quiz"}
          questions={session}
          mode={mode}
          durationSeconds={duration}
          examTitle={examTitle}
          onFinish={handleFinish}
          onHome={goHome}
        />
      )}
      {screen === "results" && (
        <ResultsScreen
          answers={answers}
          questions={session}
          examId={currentExamId}
          onRetry={handleRetry}
          onHome={goHome}
        />
      )}
    </>
  );
}
