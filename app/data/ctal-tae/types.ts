import type { Difficulty } from "@/app/data/istqb-questions";

export type CTALTAEDomain =
  | "Introduction à l'automatisation des tests"
  | "Préparation de l'automatisation des tests"
  | "Architecture générique d'automatisation des tests"
  | "Risques de déploiement et contingence"
  | "Rapports et métriques d'automatisation"
  | "Transition des tests manuels vers l'automatisation"
  | "Vérification et amélioration continue du TAS";

export type { Difficulty };

export type CTALTAEQuestion = {
  id: string;
  domain: CTALTAEDomain;
  difficulty: Difficulty;
  question: string;
  options: string[];
  answer: number[]; // one or more correct option indices
  explanation: string;
};
