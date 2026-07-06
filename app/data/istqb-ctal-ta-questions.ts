// ISTQB CTAL-TA (Advanced Level Test Analyst) — banque de questions agrégée.
// Chaque examen blanc source est conservé dans son propre fichier sous
// app/data/ctal-ta/ (exam-1.ts … exam-5.ts) ; ce module les combine pour
// alimenter le composant d'entraînement.
import { EXAM_1_QUESTIONS } from "./ctal-ta/exam-1";
import { EXAM_2_QUESTIONS } from "./ctal-ta/exam-2";
import { EXAM_3_QUESTIONS } from "./ctal-ta/exam-3";
import { EXAM_4_QUESTIONS } from "./ctal-ta/exam-4";
import { EXAM_5_QUESTIONS } from "./ctal-ta/exam-5";
import type { CTALDomain, CTALQuestion, Difficulty } from "./ctal-ta/types";

export type { CTALDomain, CTALQuestion, Difficulty };

export const QUESTIONS: CTALQuestion[] = [
  ...EXAM_1_QUESTIONS,
  ...EXAM_2_QUESTIONS,
  ...EXAM_3_QUESTIONS,
  ...EXAM_4_QUESTIONS,
  ...EXAM_5_QUESTIONS,
];

export const DOMAINS: { key: CTALDomain; chapter: string; color: string }[] = [
  { key: "Processus de test",                        chapter: "Ch. 1", color: "blue"    },
  { key: "Techniques de test",                        chapter: "Ch. 2", color: "amber"   },
  { key: "Test des caractéristiques de qualité",      chapter: "Ch. 3", color: "emerald" },
  { key: "Revues",                                    chapter: "Ch. 4", color: "violet"  },
  { key: "Gestion des défauts",                        chapter: "Ch. 5", color: "rose"    },
  { key: "Outils de test",                            chapter: "Ch. 6", color: "indigo"  },
];

export type ExamInfo = {
  id: number;
  title: string;
  subtitle: string;
  questionCount: number;
  durationMinutes: number;
};

export const EXAM_INFO: ExamInfo[] = [
  { id: 1, title: "Examen Blanc 1", subtitle: "Syllabus complet · Ch. 1–6", questionCount: 40, durationMinutes: 60 },
  { id: 2, title: "Examen Blanc 2", subtitle: "Syllabus complet · Ch. 1–6", questionCount: 40, durationMinutes: 60 },
  { id: 3, title: "Examen Blanc 3", subtitle: "Syllabus complet · Ch. 1–6", questionCount: 40, durationMinutes: 60 },
  { id: 4, title: "Examen Blanc 4", subtitle: "Syllabus complet · Ch. 1–6", questionCount: 40, durationMinutes: 60 },
  { id: 5, title: "Examen Blanc 5", subtitle: "Syllabus complet · Ch. 1–6", questionCount: 40, durationMinutes: 60 },
];

// Each source exam is a self-contained 40-question set (no reuse across exams).
export const EXAM_SETS: Record<number, string[]> = {
  1: EXAM_1_QUESTIONS.map((q) => q.id),
  2: EXAM_2_QUESTIONS.map((q) => q.id),
  3: EXAM_3_QUESTIONS.map((q) => q.id),
  4: EXAM_4_QUESTIONS.map((q) => q.id),
  5: EXAM_5_QUESTIONS.map((q) => q.id),
};
