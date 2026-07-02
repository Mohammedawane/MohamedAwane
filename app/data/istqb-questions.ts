// ─── ISTQB Foundation Level — Question Bank ────────────────────────────────
// Fill the QUESTIONS array below with your question objects.
// Each question must follow the Question type exactly.

export type Domain =
  | "Fondamentaux du test"
  | "Tests tout au long du cycle de vie"
  | "Tests statiques"
  | "Techniques de test"
  | "Gestion des activités de test"
  | "Outils de test";

export type Difficulty = "facile" | "moyen" | "difficile";

export type Question = {
  id: string;
  domain: Domain;
  difficulty: Difficulty;
  question: string;
  options: [string, string, string, string]; // exactly 4 choices, like the real exam
  answer: 0 | 1 | 2 | 3;                    // index of the correct option
  explanation: string;                       // shown after answering (training mode)
};

// ─── Add your questions here ────────────────────────────────────────────────
export const QUESTIONS: Question[] = [
  // Example — delete or replace:
  // {
  //   id: "q001",
  //   domain: "Fondamentaux du test",
  //   difficulty: "facile",
  //   question: "Quel est l'objectif principal du test logiciel ?",
  //   options: [
  //     "Démontrer que le logiciel ne contient aucun défaut",
  //     "Réduire le risque de défaillance en production et trouver des défauts",
  //     "Prouver que le logiciel répond à toutes les exigences",
  //     "Automatiser l'ensemble des vérifications du produit",
  //   ],
  //   answer: 1,
  //   explanation:
  //     "Selon le syllabus ISTQB FL, le test vise à réduire le risque de défaillance et à trouver des défauts, et non à prouver l'absence totale de défauts.",
  // },
];

// ─── Domain metadata ────────────────────────────────────────────────────────
export const DOMAINS: { key: Domain; chapter: string; color: string }[] = [
  { key: "Fondamentaux du test",                 chapter: "Ch. 1", color: "blue"    },
  { key: "Tests tout au long du cycle de vie",   chapter: "Ch. 2", color: "violet"  },
  { key: "Tests statiques",                      chapter: "Ch. 3", color: "emerald" },
  { key: "Techniques de test",                   chapter: "Ch. 4", color: "amber"   },
  { key: "Gestion des activités de test",        chapter: "Ch. 5", color: "indigo"  },
  { key: "Outils de test",                       chapter: "Ch. 6", color: "rose"    },
];
