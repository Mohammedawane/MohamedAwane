// ISTQB CTAL-TAE (Test Automation Engineer) — banque de questions agrégée.
// Chaque examen blanc source est conservé dans son propre fichier sous
// app/data/ctal-tae/ (exam-1.ts … exam-5.ts) ; ce module les combine pour
// alimenter le composant d'entraînement.
import { EXAM_1_QUESTIONS } from "./ctal-tae/exam-1";
import { EXAM_2_QUESTIONS } from "./ctal-tae/exam-2";
import { EXAM_3_QUESTIONS } from "./ctal-tae/exam-3";
import { EXAM_4_QUESTIONS } from "./ctal-tae/exam-4";
import { EXAM_5_QUESTIONS } from "./ctal-tae/exam-5";
import type { CTALTAEDomain, CTALTAEQuestion, Difficulty } from "./ctal-tae/types";

export type { CTALTAEDomain, CTALTAEQuestion, Difficulty };

export const QUESTIONS: CTALTAEQuestion[] = [
  ...EXAM_1_QUESTIONS,
  ...EXAM_2_QUESTIONS,
  ...EXAM_3_QUESTIONS,
  ...EXAM_4_QUESTIONS,
  ...EXAM_5_QUESTIONS,
];

export const DOMAINS: { key: CTALTAEDomain; chapter: string; color: string }[] = [
  { key: "Introduction à l'automatisation des tests",                  chapter: "Ch. 1", color: "blue"    },
  { key: "Préparation de l'automatisation des tests",                  chapter: "Ch. 2", color: "amber"   },
  { key: "Architecture générique d'automatisation des tests",          chapter: "Ch. 3", color: "emerald" },
  { key: "Risques de déploiement et contingence",                      chapter: "Ch. 4", color: "rose"    },
  { key: "Rapports et métriques d'automatisation",                     chapter: "Ch. 5", color: "violet"  },
  { key: "Transition des tests manuels vers l'automatisation",         chapter: "Ch. 6", color: "cyan"    },
  { key: "Vérification et amélioration continue du TAS",               chapter: "Ch. 7", color: "indigo"  },
];

export type ExamInfo = {
  id: number;
  title: string;
  subtitle: string;
  questionCount: number;
  durationMinutes: number;
};

export const EXAM_INFO: ExamInfo[] = [
  { id: 1, title: "Examen Blanc 1", subtitle: "Syllabus complet · Ch. 1–7", questionCount: EXAM_1_QUESTIONS.length, durationMinutes: 60 },
  { id: 2, title: "Examen Blanc 2", subtitle: "Syllabus complet · Ch. 1–7", questionCount: EXAM_2_QUESTIONS.length, durationMinutes: 60 },
  { id: 3, title: "Examen Blanc 3", subtitle: "Syllabus complet · Ch. 1–7", questionCount: EXAM_3_QUESTIONS.length, durationMinutes: 60 },
  { id: 4, title: "Examen Blanc 4", subtitle: "Syllabus complet · Ch. 1–7", questionCount: EXAM_4_QUESTIONS.length, durationMinutes: 60 },
  { id: 5, title: "Examen Blanc 5", subtitle: "Syllabus complet · Ch. 1–7", questionCount: EXAM_5_QUESTIONS.length, durationMinutes: 60 },
];

// Each source exam is a self-contained question set (no reuse across exams).
export const EXAM_SETS: Record<number, string[]> = {
  1: EXAM_1_QUESTIONS.map((q) => q.id),
  2: EXAM_2_QUESTIONS.map((q) => q.id),
  3: EXAM_3_QUESTIONS.map((q) => q.id),
  4: EXAM_4_QUESTIONS.map((q) => q.id),
  5: EXAM_5_QUESTIONS.map((q) => q.id),
};
