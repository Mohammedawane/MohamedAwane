import type { Difficulty } from "@/app/data/istqb-questions";

export type CTALDomain =
  | "Processus de test"
  | "Techniques de test"
  | "Test des caractéristiques de qualité"
  | "Revues"
  | "Gestion des défauts"
  | "Outils de test";

export type { Difficulty };

export type CTALQuestion = {
  id: string;
  domain: CTALDomain;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: number[]; // one or more correct option indices
  explanation: string;
};
