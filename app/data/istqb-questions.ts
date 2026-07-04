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
  options: [string, string, string, string];
  answer: 0 | 1 | 2 | 3;
  explanation: string;
};

export const QUESTIONS: Question[] = [
  // ── CHAPITRE 1 : Fondamentaux du test ──────────────────────────────────────

  {
    id: "e1q01",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question:
      "Parmi les raisons suivantes, laquelle illustre le mieux pourquoi les tests sont nécessaires ?",
    options: [
      "Les tests permettent de prouver l'absence totale de défauts dans le logiciel.",
      "Les tests permettent de réduire le risque de défaillances en production en détectant les défauts.",
      "Les tests garantissent que le logiciel répond à toutes les exigences du client.",
      "Les tests remplacent la phase de vérification effectuée par l'équipe de développement.",
    ],
    answer: 1,
    explanation:
      "Selon le syllabus ISTQB FL, le test vise à réduire le risque de défaillance en production et à trouver des défauts. Il ne peut pas prouver l'absence totale de défauts (principe n°2 du test exhaustif).",
  },
  {
    id: "e1q02",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question:
      "Parmi les affirmations suivantes sur les objectifs du test, laquelle est INCORRECTE ?",
    options: [
      "Le test peut démontrer que des défauts sont présents dans le logiciel.",
      "Le test peut fournir de la confiance en la qualité du logiciel.",
      "Le test peut prouver que le logiciel est exempt de tout défaut.",
      "Le test peut prévenir les défauts en contribuant à l'amélioration du processus.",
    ],
    answer: 2,
    explanation:
      "Il est impossible de prouver qu'un logiciel est exempt de tout défaut — c'est le principe du test exhaustif. Le test peut seulement démontrer la présence de défauts, jamais leur absence totale.",
  },
  {
    id: "e1q03",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Un testeur identifie un écart entre le comportement réel d'un composant et le comportement attendu spécifié. Quel terme désigne cet écart observé lors de l'exécution ?",
    options: [
      "Défaut (defect)",
      "Erreur (error)",
      "Défaillance (failure)",
      "Faute (fault)",
    ],
    answer: 2,
    explanation:
      "Une défaillance (failure) est le comportement observable incorrect du composant ou du système lors de son exécution. Le défaut (defect/fault) est la cause interne dans le code, et l'erreur (error) est la faute humaine à l'origine du défaut.",
  },
  {
    id: "e1q04",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Un développeur fait une erreur de logique en écrivant une condition de boucle. Cette erreur introduit un problème dans le code source. Lors de l'exécution, le programme produit un résultat incorrect. Quelle est la séquence correcte de la chaîne causale ?",
    options: [
      "Défaillance → Défaut → Erreur",
      "Erreur → Défaut → Défaillance",
      "Défaut → Erreur → Défaillance",
      "Erreur → Défaillance → Défaut",
    ],
    answer: 1,
    explanation:
      "La chaîne causale ISTQB est : Erreur humaine → Défaut dans le code → Défaillance lors de l'exécution. Le développeur commet une erreur, qui crée un défaut dans le logiciel, qui peut provoquer une défaillance observable.",
  },
  {
    id: "e1q05",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question:
      "Lequel des énoncés suivants correspond au principe ISTQB selon lequel « les tests peuvent montrer la présence de défauts mais ne peuvent pas prouver leur absence » ?",
    options: [
      "Le test exhaustif est impossible.",
      "Les tests approfondis tôt permettent d'économiser du temps et de l'argent.",
      "Le test ne peut pas prouver l'absence de défauts.",
      "Les défauts se regroupent dans un petit nombre de modules.",
    ],
    answer: 2,
    explanation:
      "Le deuxième principe du test selon l'ISTQB stipule que les tests peuvent démontrer la présence de défauts mais ne peuvent jamais garantir leur absence totale.",
  },
  {
    id: "e1q06",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Quel principe ISTQB correspond à l'affirmation : « Répéter les mêmes tests sur le même logiciel finit par ne plus trouver de nouveaux défauts » ?",
    options: [
      "Le paradoxe du pesticide",
      "Le test dépend du contexte",
      "Le regroupement des défauts",
      "L'absence d'erreur est une illusion",
    ],
    answer: 0,
    explanation:
      "Le paradoxe du pesticide (5e principe) indique que si les mêmes tests sont répétés sans être révisés, ils cessent de détecter de nouveaux défauts. Il faut régulièrement réviser et compléter les cas de test.",
  },
  {
    id: "e1q07",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Une petite startup développe une application mobile simple. Son équipe décide d'adopter une stratégie de test légère, sans documentation formelle poussée. Quel principe ISTQB justifie cette approche ?",
    options: [
      "L'absence d'erreur est une illusion",
      "Le test dépend du contexte",
      "Le test exhaustif est impossible",
      "Les tests approfondis tôt sont plus rentables",
    ],
    answer: 1,
    explanation:
      "Le principe « Le test dépend du contexte » (6e principe) stipule que différents contextes exigent des approches de test différentes. Une startup avec une application simple n'a pas besoin du même niveau de rigueur qu'un système critique.",
  },
  {
    id: "e1q08",
    domain: "Fondamentaux du test",
    difficulty: "difficile",
    question:
      "Un logiciel de gestion de stock corrige avec succès 50 défauts. Pourtant, les utilisateurs se plaignent que le système ne répond toujours pas à leurs besoins métier. Quel principe ISTQB explique cette situation ?",
    options: [
      "Le paradoxe du pesticide",
      "Le test exhaustif est impossible",
      "L'absence d'erreur est une illusion",
      "Le regroupement des défauts",
    ],
    answer: 2,
    explanation:
      "Le principe « L'absence d'erreur est une illusion » (7e principe) illustre qu'un système peut être exempt de défauts connus tout en restant inutilisable ou inadapté aux besoins réels des utilisateurs. La correction des défauts ne garantit pas la satisfaction des utilisateurs.",
  },
  {
    id: "e1q09",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question:
      "Parmi les activités suivantes, laquelle fait partie du processus de test selon le syllabus ISTQB FL ?",
    options: [
      "Rédiger le code source de l'application",
      "Analyser les exigences pour identifier les conditions de test",
      "Concevoir l'architecture technique du système",
      "Déployer le logiciel en environnement de production",
    ],
    answer: 1,
    explanation:
      "L'analyse de test (identification des conditions de test à partir des bases de test) est l'une des activités du processus de test ISTQB. Les autres activités incluent la planification, la conception, l'implémentation, l'exécution et la clôture.",
  },
  {
    id: "e1q10",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Dans quelle activité du processus de test les cas de test sont-ils conçus et les données de test préparées ?",
    options: [
      "Planification du test",
      "Analyse du test",
      "Conception du test",
      "Exécution du test",
    ],
    answer: 2,
    explanation:
      "La conception du test est l'activité durant laquelle les conditions de test identifiées lors de l'analyse sont transformées en cas de test et procédures de test. Les données de test y sont également préparées.",
  },
  {
    id: "e1q11",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Lequel des éléments suivants est un exemple de testware produit lors de l'activité de planification du test ?",
    options: [
      "Les cas de test",
      "Le plan de test",
      "Les rapports de défauts",
      "Les scripts de test automatisés",
    ],
    answer: 1,
    explanation:
      "Le plan de test est le testware produit lors de la planification du test. Il décrit la portée, les objectifs, les ressources, les risques et l'approche de test. Les cas de test sont produits lors de la conception, et les rapports de défauts lors de l'exécution.",
  },
  {
    id: "e1q12",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question:
      "Qu'est-ce qu'une « base de test » dans le contexte du test logiciel ?",
    options: [
      "L'environnement matériel sur lequel les tests sont exécutés.",
      "Toute information utilisée comme référence pour identifier les conditions de test.",
      "La base de données contenant les résultats historiques des tests.",
      "L'ensemble des outils de test utilisés dans le projet.",
    ],
    answer: 1,
    explanation:
      "La base de test désigne toute information (exigences, spécifications, code source, modèles, etc.) utilisée comme référence pour dériver les conditions et cas de test. Elle peut prendre la forme de documents ou de code source.",
  },
  {
    id: "e1q13",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Parmi les compétences suivantes, laquelle est caractéristique d'un bon testeur selon l'ISTQB ?",
    options: [
      "Une pensée uniquement positive qui évite de remettre en cause le travail des développeurs.",
      "Une curiosité, une attention au détail et la capacité à penser de manière critique et créative.",
      "Une spécialisation exclusive dans l'automatisation des tests sans intérêt pour les tests manuels.",
      "La capacité à écrire du code de production en parallèle des activités de test.",
    ],
    answer: 1,
    explanation:
      "Selon le syllabus ISTQB FL, un bon testeur doit faire preuve de curiosité, d'attention aux détails, de pensée critique et créative, de bonnes compétences en communication et d'une capacité à remettre en question les hypothèses.",
  },

  // ── CHAPITRE 2 : Tests tout au long du cycle de vie ────────────────────────

  {
    id: "e1q14",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "facile",
    question:
      "Quel niveau de test vise à vérifier les interactions entre les composants ou systèmes intégrés ?",
    options: [
      "Test de composant (test unitaire)",
      "Test d'intégration",
      "Test système",
      "Test d'acceptation",
    ],
    answer: 1,
    explanation:
      "Le test d'intégration vérifie les interactions entre composants (intégration de composants) ou entre systèmes (intégration de systèmes). Il intervient après le test de composant et avant le test système.",
  },
  {
    id: "e1q15",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "facile",
    question:
      "Quel niveau de test est principalement réalisé par les utilisateurs finaux ou représentants métier pour décider si le système est prêt à être livré ?",
    options: [
      "Test de composant",
      "Test d'intégration de composants",
      "Test système",
      "Test d'acceptation",
    ],
    answer: 3,
    explanation:
      "Le test d'acceptation est réalisé par ou avec les utilisateurs finaux pour vérifier que le système répond à leurs besoins et peut être accepté. Il inclut le test d'acceptation utilisateur (TAU), le test opérationnel et le test de conformité.",
  },
  {
    id: "e1q16",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Dans un modèle de développement en V, à quel niveau de test correspond la vérification des exigences système ?",
    options: [
      "Test de composant",
      "Test d'intégration de composants",
      "Test système",
      "Test d'acceptation",
    ],
    answer: 2,
    explanation:
      "Dans le modèle en V, le test système correspond à la vérification des exigences système (spécification système). Le test d'acceptation correspond aux exigences métier, et le test de composant aux spécifications de conception détaillée.",
  },
  {
    id: "e1q17",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Parmi les affirmations suivantes sur le test dans les modèles de développement itératifs, laquelle est CORRECTE ?",
    options: [
      "Les tests ne sont réalisés qu'à la fin de chaque itération, jamais en cours de sprint.",
      "Chaque itération peut inclure des activités de test à différents niveaux, y compris des tests de régression.",
      "Les modèles itératifs ne permettent pas d'intégrer des activités de test formalisées.",
      "Le test de régression est inutile dans les modèles itératifs car le code est réécrit à chaque itération.",
    ],
    answer: 1,
    explanation:
      "Dans les modèles itératifs (Agile, Scrum), chaque itération inclut des activités de test à plusieurs niveaux. Les tests de régression sont essentiels pour s'assurer que les nouvelles fonctionnalités n'ont pas dégradé celles existantes.",
  },
  {
    id: "e1q18",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "facile",
    question:
      "Quel type de test vérifie qu'une modification du logiciel n'a pas introduit de nouveaux défauts dans les parties inchangées du système ?",
    options: [
      "Test de confirmation",
      "Test de régression",
      "Test de fumée (smoke test)",
      "Test exploratoire",
    ],
    answer: 1,
    explanation:
      "Le test de régression vérifie que les modifications (corrections, nouvelles fonctionnalités) n'ont pas affecté négativement les fonctionnalités existantes. Il est particulièrement important dans les contextes itératifs et agiles.",
  },
  {
    id: "e1q19",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Un développeur corrige un défaut signalé par le testeur. Quelle activité le testeur doit-il effectuer en premier pour valider cette correction ?",
    options: [
      "Effectuer un test de régression complet sur l'ensemble du système.",
      "Créer de nouveaux cas de test pour les fonctionnalités non testées.",
      "Effectuer un test de confirmation pour vérifier que le défaut initial a bien été corrigé.",
      "Mettre à jour le plan de test pour prendre en compte la correction.",
    ],
    answer: 2,
    explanation:
      "Le test de confirmation (re-test) consiste à exécuter à nouveau les cas de test qui ont détecté le défaut pour vérifier que la correction est effective. Il est distinct du test de régression qui vérifie l'absence d'effets de bord.",
  },
  {
    id: "e1q20",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Parmi les types de test suivants, lequel est classé comme test non fonctionnel ?",
    options: [
      "Test de fonctionnalité",
      "Test de performance",
      "Test de boîte blanche",
      "Test de régression",
    ],
    answer: 1,
    explanation:
      "Le test de performance est un test non fonctionnel qui évalue le comportement du système en termes de temps de réponse, de charge et de débit, sans vérifier une fonctionnalité spécifique. Les tests non fonctionnels évaluent des caractéristiques comme la performance, la sécurité, la fiabilité.",
  },
  {
    id: "e1q21",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "facile",
    question:
      "Quel niveau de test est le plus souvent réalisé par les développeurs pour valider leur propre code ?",
    options: [
      "Test d'acceptation utilisateur",
      "Test système",
      "Test d'intégration de systèmes",
      "Test de composant (test unitaire)",
    ],
    answer: 3,
    explanation:
      "Le test de composant (ou test unitaire) est réalisé principalement par les développeurs pour vérifier le bon fonctionnement de chaque composant ou module individuellement, de manière isolée.",
  },
  {
    id: "e1q22",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Dans le développement guidé par les tests (TDD — Test-Driven Development), dans quel ordre les activités sont-elles réalisées ?",
    options: [
      "Écrire le code → Écrire le test → Refactoriser",
      "Écrire le test → Écrire le code → Refactoriser",
      "Refactoriser → Écrire le test → Écrire le code",
      "Écrire le code → Refactoriser → Écrire le test",
    ],
    answer: 1,
    explanation:
      "En TDD, le cycle est : 1) Écrire un test qui échoue (rouge), 2) Écrire le code minimal pour faire passer le test (vert), 3) Refactoriser le code tout en maintenant le test au vert. Cette approche permet de prévenir les défauts plutôt que de les détecter.",
  },
  {
    id: "e1q23",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Quelle est la différence principale entre un test de composant et un test d'intégration de composants ?",
    options: [
      "Le test de composant est réalisé en boîte noire et le test d'intégration en boîte blanche.",
      "Le test de composant vérifie les composants individuellement, tandis que le test d'intégration vérifie les interactions entre composants.",
      "Le test de composant est réalisé par les testeurs et le test d'intégration par les développeurs.",
      "Le test de composant est automatisé et le test d'intégration est toujours manuel.",
    ],
    answer: 1,
    explanation:
      "Le test de composant vérifie chaque composant de manière isolée. Le test d'intégration de composants vérifie les interfaces et les interactions entre composants déjà testés individuellement.",
  },

  // ── CHAPITRE 3 : Tests statiques ───────────────────────────────────────────

  {
    id: "e1q24",
    domain: "Tests statiques",
    difficulty: "facile",
    question:
      "Parmi les affirmations suivantes, laquelle décrit correctement le test statique ?",
    options: [
      "Le test statique nécessite l'exécution du logiciel pour identifier des défauts.",
      "Le test statique examine les documents et le code sans exécuter le logiciel.",
      "Le test statique s'applique uniquement au code source et non à la documentation.",
      "Le test statique est toujours réalisé par des outils automatisés, jamais manuellement.",
    ],
    answer: 1,
    explanation:
      "Le test statique consiste à examiner des artefacts (code, exigences, conception, plans de test) sans les exécuter. Il peut être réalisé manuellement (révisions, inspections) ou à l'aide d'outils (analyse statique).",
  },
  {
    id: "e1q25",
    domain: "Tests statiques",
    difficulty: "moyen",
    question:
      "Parmi les types de défauts suivants, lequel est le plus facilement détectable par le test statique mais difficilement détectable par le test dynamique ?",
    options: [
      "Une défaillance intermittente liée à une condition de concurrence.",
      "Une incohérence dans les exigences ou une exigence manquante.",
      "Un temps de réponse trop long sous charge.",
      "Un résultat incorrect produit par une fonction de calcul.",
    ],
    answer: 1,
    explanation:
      "Les défauts dans les exigences (ambiguïtés, incohérences, omissions) sont difficiles à détecter par le test dynamique car ils nécessitent l'exécution du logiciel. La révision des exigences (test statique) permet de les identifier tôt, avant même que du code soit écrit.",
  },
  {
    id: "e1q26",
    domain: "Tests statiques",
    difficulty: "moyen",
    question:
      "Quel type de révision formelle requiert un processus défini avec des rôles formels, des métriques collectées et une sortie formelle ?",
    options: [
      "Relecture informelle (informal review)",
      "Revue par les pairs (peer review)",
      "Revue guidée (walkthrough)",
      "Inspection",
    ],
    answer: 3,
    explanation:
      "L'inspection est la forme la plus formelle de révision. Elle suit un processus défini avec des rôles précis (modérateur, auteur, lecteur, inspecteurs), des critères d'entrée/sortie, des métriques et une réunion structurée. Elle est la plus efficace pour trouver des défauts.",
  },
  {
    id: "e1q27",
    domain: "Tests statiques",
    difficulty: "moyen",
    question:
      "Dans le contexte des révisions, quelle est la principale responsabilité de l'auteur ?",
    options: [
      "Faciliter la réunion de révision et modérer les discussions.",
      "Fournir le document à réviser et mettre à jour les défauts trouvés après la révision.",
      "Identifier et documenter formellement tous les défauts trouvés pendant la révision.",
      "Planifier et organiser le processus de révision dans son ensemble.",
    ],
    answer: 1,
    explanation:
      "L'auteur est responsable de fournir l'artefact à réviser et, après la réunion, de corriger les défauts identifiés ou de les documenter pour traitement ultérieur. Il peut également clarifier des points pendant la révision.",
  },
  {
    id: "e1q28",
    domain: "Tests statiques",
    difficulty: "facile",
    question:
      "Laquelle des affirmations suivantes sur les avantages du test statique est CORRECTE ?",
    options: [
      "Le test statique ne peut identifier que les défauts de syntaxe dans le code.",
      "Le test statique détecte les défauts plus tôt et à moindre coût que le test dynamique.",
      "Le test statique est toujours plus efficace que le test dynamique pour tous les types de défauts.",
      "Le test statique nécessite un environnement de test complet pour être réalisé.",
    ],
    answer: 1,
    explanation:
      "Le test statique permet de détecter les défauts avant l'exécution du logiciel, souvent dès la phase de conception ou de rédaction des exigences. Corriger un défaut tôt est nettement moins coûteux que de le corriger après le déploiement.",
  },
  {
    id: "e1q29",
    domain: "Tests statiques",
    difficulty: "difficile",
    question:
      "Une équipe réalise une révision durant laquelle l'auteur présente son document à des collègues qui posent des questions et font des suggestions, sans processus formalisé ni rapport obligatoire. Quel type de révision s'agit-il ?",
    options: [
      "Inspection",
      "Revue guidée (walkthrough)",
      "Revue technique (technical review)",
      "Relecture informelle (informal review)",
    ],
    answer: 1,
    explanation:
      "La revue guidée (walkthrough) est animée par l'auteur qui guide les participants à travers le document. Elle est semi-formelle, peut ne pas produire de rapport officiel, et vise à partager la compréhension et trouver des défauts. L'inspection est plus formelle et n'est pas présentée par l'auteur.",
  },

  // ── CHAPITRE 4 : Techniques de test ────────────────────────────────────────

  {
    id: "e1q30",
    domain: "Techniques de test",
    difficulty: "facile",
    question:
      "La technique des classes d'équivalence (partitionnement en classes d'équivalence) repose sur quel principe ?",
    options: [
      "Tous les tests qui passent par le même chemin du code sont équivalents.",
      "Toutes les valeurs d'une même classe d'équivalence produiront le même résultat (succès ou échec).",
      "Il faut tester toutes les combinaisons possibles de valeurs d'entrée.",
      "Les valeurs limites sont les plus susceptibles de contenir des défauts.",
    ],
    answer: 1,
    explanation:
      "Le partitionnement en classes d'équivalence suppose que toutes les valeurs d'une même partition seront traitées de la même façon par le logiciel. Un seul représentant par classe suffit donc pour couvrir tous les cas de cette classe.",
  },
  {
    id: "e1q31",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un champ de saisie accepte les âges de 18 à 65 ans (inclus). En appliquant l'analyse des valeurs limites à 2 points, quelles valeurs doit-on tester pour la limite inférieure ?",
    options: [
      "17 et 18",
      "18 et 19",
      "17, 18 et 19",
      "16 et 17",
    ],
    answer: 0,
    explanation:
      "L'analyse des valeurs limites à 2 points (2-value BVA) teste la valeur limite elle-même et la valeur immédiatement adjacente hors de la partition. Pour la limite inférieure de 18 : on teste 17 (juste en dehors) et 18 (juste à l'intérieur).",
  },
  {
    id: "e1q32",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un champ de température accepte des valeurs entre -20°C et 50°C inclus. En appliquant l'analyse des valeurs limites à 3 points, quelles valeurs tester pour la frontière supérieure ?",
    options: [
      "49 et 50",
      "50 et 51",
      "49, 50 et 51",
      "48, 49 et 50",
    ],
    answer: 2,
    explanation:
      "L'analyse des valeurs limites à 3 points (3-value BVA) teste la valeur limite, la valeur juste en dessous et la valeur juste au-dessus. Pour la limite supérieure de 50°C : on teste 49 (en dessous), 50 (la limite) et 51 (au-dessus).",
  },
  {
    id: "e1q33",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application de remise calcule une réduction selon l'ancienneté client : 0 % si moins de 1 an, 5 % entre 1 et 3 ans, 10 % si plus de 3 ans. Combien de classes d'équivalence valides y a-t-il ?",
    options: [
      "1",
      "2",
      "3",
      "4",
    ],
    answer: 2,
    explanation:
      "Il y a 3 classes d'équivalence valides correspondant aux 3 tranches : moins de 1 an, entre 1 et 3 ans, et plus de 3 ans. À celles-ci s'ajoutent des classes invalides (valeurs négatives par exemple).",
  },
  {
    id: "e1q34",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Quelle technique de test est la plus adaptée pour tester les combinaisons de conditions qui déterminent des actions différentes du système ?",
    options: [
      "Analyse des valeurs limites",
      "Test de table de décision",
      "Test de transition d'états",
      "Test par cas d'utilisation",
    ],
    answer: 1,
    explanation:
      "Le test de table de décision est particulièrement adapté pour tester les règles métier complexes avec plusieurs conditions dont les combinaisons produisent des actions différentes. Il garantit que toutes les combinaisons pertinentes sont testées.",
  },
  {
    id: "e1q35",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un guichet automatique permet de retirer de l'argent si : (1) la carte est valide ET (2) le code PIN est correct ET (3) le solde est suffisant. Combien de règles une table de décision complète contiendrait-elle (avec toutes les combinaisons) ?",
    options: [
      "3",
      "6",
      "8",
      "9",
    ],
    answer: 2,
    explanation:
      "Avec 3 conditions booléennes (Vrai/Faux), une table de décision complète comporte 2³ = 8 colonnes de règles. Chaque combinaison de valeurs de conditions constitue une règle à tester.",
  },
  {
    id: "e1q36",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Dans le test de transition d'états, une table d'états comporte les états d'un système et les transitions possibles. Que représente une cellule vide dans cette table ?",
    options: [
      "Une transition autorisée sans condition particulière.",
      "Un état impossible à atteindre depuis l'état correspondant.",
      "Une transition invalide qui devrait produire une erreur ou être ignorée.",
      "Un état non encore implémenté dans le système.",
    ],
    answer: 2,
    explanation:
      "Dans une table de transition d'états (état × événement), une cellule vide indique que l'événement correspondant ne devrait pas pouvoir se produire depuis cet état. Tester ces transitions invalides permet de vérifier que le système gère correctement les séquences d'événements non autorisées.",
  },
  {
    id: "e1q37",
    domain: "Techniques de test",
    difficulty: "facile",
    question:
      "Quelle technique de test en boîte blanche mesure le pourcentage d'instructions du code exécutées au moins une fois par les cas de test ?",
    options: [
      "Couverture de branches",
      "Couverture d'instructions",
      "Couverture de conditions",
      "Couverture de chemins",
    ],
    answer: 1,
    explanation:
      "La couverture d'instructions (statement coverage) mesure le pourcentage d'instructions (lignes de code exécutables) couvertes par les cas de test. Une couverture de 100% signifie que chaque instruction a été exécutée au moins une fois.",
  },
  {
    id: "e1q38",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Considérons le code suivant :\n```\nif (a > 0) {\n  x = a * 2;\n} else {\n  x = a + 1;\n}\n```\nQuels cas de test sont nécessaires pour atteindre une couverture de branches à 100% ?",
    options: [
      "Un seul cas de test avec a = 5 suffit.",
      "Un cas avec a = 5 et un cas avec a = -3.",
      "Un cas avec a = 0 et un cas avec a = 5.",
      "Trois cas : a = -1, a = 0 et a = 1.",
    ],
    answer: 1,
    explanation:
      "La couverture de branches à 100% requiert que chaque branche (vraie et fausse) de chaque décision soit exécutée. Il faut donc a > 0 (branche vraie, ex : a = 5) et a ≤ 0 (branche fausse, ex : a = -3). Deux cas suffisent.",
  },
  {
    id: "e1q39",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Quelle technique basée sur l'expérience consiste pour le testeur à anticiper les défauts probables en se basant sur sa connaissance du système, des erreurs passées et des zones à risque ?",
    options: [
      "Test exploratoire",
      "Test basé sur une liste de vérification (checklist)",
      "Devinette d'erreurs (error guessing)",
      "Test de fumée (smoke test)",
    ],
    answer: 2,
    explanation:
      "La devinette d'erreurs (error guessing) est une technique basée sur l'expérience où le testeur identifie des cas de test en anticipant les erreurs les plus probables, en s'appuyant sur son expérience passée, sa connaissance du domaine et les zones connues comme problématiques.",
  },
  {
    id: "e1q40",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Dans le test exploratoire, qu'est-ce qu'une « charte de session » (test charter) ?",
    options: [
      "Un plan de test formel approuvé par le responsable qualité.",
      "Une description des objectifs et de la portée d'une session de test exploratoire.",
      "Un rapport de fin de session listant les défauts trouvés.",
      "Un ensemble de cas de test précis à exécuter dans l'ordre.",
    ],
    answer: 1,
    explanation:
      "Une charte de session en test exploratoire est un énoncé bref qui définit ce qui doit être testé (mission), comment l'aborder et ce qu'on cherche à découvrir. Elle guide le testeur sans contraindre son exploration.",
  },
  {
    id: "e1q41",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un testeur analyse une application de e-commerce. Il identifie que la fonctionnalité de calcul de frais de port est à la fois complexe et a connu plusieurs défauts en production. Quelle combinaison de techniques lui permettrait de couvrir le plus efficacement cette fonctionnalité ?",
    options: [
      "Test de table de décision pour les règles et devinette d'erreurs basée sur l'historique des défauts.",
      "Couverture d'instructions à 100% et test de performance.",
      "Test exploratoire uniquement, car les règles sont trop complexes pour être formalisées.",
      "Test de transition d'états et test de fumée.",
    ],
    answer: 0,
    explanation:
      "Le test de table de décision est idéal pour les règles métier complexes avec plusieurs conditions (différentes zones, poids, etc.). La devinette d'erreurs basée sur l'historique des défauts passés permet de cibler les zones connues comme problématiques.",
  },

  // ── CHAPITRE 5 : Gestion des activités de test ─────────────────────────────

  {
    id: "e1q42",
    domain: "Gestion des activités de test",
    difficulty: "facile",
    question:
      "Quelle est la différence entre un plan de test et une stratégie de test ?",
    options: [
      "Le plan de test est un document de haut niveau valable pour toute l'organisation, tandis que la stratégie de test est spécifique à un projet.",
      "La stratégie de test est un document de haut niveau valable pour toute l'organisation ou un programme, tandis que le plan de test est spécifique à un projet ou niveau de test.",
      "Le plan de test décrit les techniques à utiliser, tandis que la stratégie de test liste les cas de test.",
      "Il n'y a aucune différence : les deux termes sont synonymes dans le syllabus ISTQB.",
    ],
    answer: 1,
    explanation:
      "La stratégie de test est un document de haut niveau qui définit l'approche générale de test pour l'ensemble de l'organisation ou d'un programme. Le plan de test est spécifique à un projet ou niveau de test et précise comment la stratégie sera mise en œuvre.",
  },
  {
    id: "e1q43",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question:
      "Parmi les éléments suivants, lequel est typiquement inclus dans un plan de test ?",
    options: [
      "Les résultats détaillés de chaque exécution de cas de test.",
      "La portée du test, les ressources nécessaires, le calendrier et les critères d'entrée et de sortie.",
      "Le code source de l'application à tester.",
      "Les rapports de défauts trouvés lors des tests précédents.",
    ],
    answer: 1,
    explanation:
      "Un plan de test inclut typiquement : la portée et les objectifs, les ressources (personnes, environnements), le calendrier, les risques, les critères d'entrée et de sortie (ou critères de début et de fin), et l'approche de test.",
  },
  {
    id: "e1q44",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question:
      "Dans la gestion des risques liés au test, qu'est-ce qu'un « risque produit » (product risk) ?",
    options: [
      "Un risque lié au bon déroulement du projet de test (ressources, planning, outils).",
      "Un risque que le produit logiciel ne réponde pas aux besoins des parties prenantes ou ne fonctionne pas correctement.",
      "Un risque financier lié au coût trop élevé du projet.",
      "Un risque lié au choix de la mauvaise technique de test.",
    ],
    answer: 1,
    explanation:
      "Un risque produit est la probabilité qu'un aspect du logiciel provoque une défaillance ou ne réponde pas aux besoins des utilisateurs. Il est distinct du risque projet (qui concerne la livraison du projet lui-même, comme les délais ou les ressources).",
  },
  {
    id: "e1q45",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question:
      "Comment l'évaluation du risque influence-t-elle les activités de test ?",
    options: [
      "Elle permet de réduire le nombre total de cas de test nécessaires.",
      "Elle oriente l'effort de test vers les zones du logiciel présentant le risque le plus élevé.",
      "Elle garantit que tous les risques seront éliminés avant la mise en production.",
      "Elle remplace le plan de test dans les contextes agiles.",
    ],
    answer: 1,
    explanation:
      "L'analyse des risques permet de prioriser les efforts de test : les modules à haut risque (forte probabilité de défaut et fort impact) reçoivent plus d'attention et de tests. Cela optimise l'utilisation des ressources de test disponibles.",
  },
  {
    id: "e1q46",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question:
      "Qu'est-ce qu'un critère de sortie (exit criteria) dans le contexte du test ?",
    options: [
      "La liste des conditions à remplir avant de commencer les tests.",
      "Les conditions à remplir pour considérer qu'un niveau ou une activité de test est terminé.",
      "Les règles qui définissent quand un défaut doit être signalé à l'équipe de développement.",
      "La liste des fonctionnalités exclues du périmètre de test.",
    ],
    answer: 1,
    explanation:
      "Les critères de sortie (aussi appelés critères de fin ou Definition of Done) définissent les conditions à satisfaire pour qu'un niveau de test ou une activité de test soit considéré comme achevé. Ils peuvent inclure : taux de couverture atteint, nombre de défauts ouverts critiques nul, etc.",
  },
  {
    id: "e1q47",
    domain: "Gestion des activités de test",
    difficulty: "facile",
    question:
      "Parmi les informations suivantes, lesquelles doit contenir un bon rapport de défaut selon l'ISTQB ?",
    options: [
      "Uniquement la description du problème observé.",
      "Le nom du développeur responsable du défaut.",
      "Un identifiant unique, la sévérité, les étapes de reproduction, le résultat attendu et le résultat obtenu.",
      "La solution technique proposée pour corriger le défaut.",
    ],
    answer: 2,
    explanation:
      "Un bon rapport de défaut doit contenir : un identifiant unique, un titre clair, la sévérité/priorité, l'environnement, les étapes pour reproduire le défaut, le résultat obtenu, le résultat attendu, et éventuellement des captures d'écran ou logs. Il ne doit pas désigner de coupable.",
  },
  {
    id: "e1q48",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question:
      "Quelle est la différence entre la sévérité (severity) et la priorité (priority) d'un défaut ?",
    options: [
      "La sévérité est décidée par les développeurs et la priorité par les testeurs.",
      "La sévérité mesure l'impact technique du défaut sur le système ; la priorité indique l'urgence de sa correction dans le contexte du projet.",
      "La sévérité et la priorité sont des termes synonymes dans le syllabus ISTQB.",
      "La sévérité est une valeur numérique et la priorité est toujours qualitative.",
    ],
    answer: 1,
    explanation:
      "La sévérité décrit l'impact du défaut sur le fonctionnement du système (critique, majeur, mineur…). La priorité indique l'urgence de le corriger compte tenu du contexte métier. Un défaut peut être de haute sévérité mais de faible priorité (fonctionnalité rarement utilisée) et vice versa.",
  },
  {
    id: "e1q49",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question:
      "Qu'est-ce que la traçabilité dans le cadre des tests ?",
    options: [
      "La capacité à exécuter des tests dans un ordre défini et reproductible.",
      "Le lien entre les cas de test, les conditions de test, les exigences et les résultats d'exécution.",
      "La documentation des décisions prises lors des révisions de code.",
      "Le suivi du temps passé par chaque testeur sur les différentes activités.",
    ],
    answer: 1,
    explanation:
      "La traçabilité est la capacité à relier les artefacts de test (cas de test, résultats) aux exigences, aux risques et au code correspondant. Elle permet de mesurer la couverture des exigences, de comprendre l'impact des changements et de faciliter l'audit.",
  },
  {
    id: "e1q50",
    domain: "Gestion des activités de test",
    difficulty: "difficile",
    question:
      "Une équipe de test a exécuté 90% de ses cas de test. 15% des cas de test ont échoué dont 3 défauts critiques non résolus. Le chef de projet veut livrer demain. Quelle décision est la plus appropriée selon les bonnes pratiques de test ?",
    options: [
      "Livrer immédiatement car 90% des tests ont été exécutés.",
      "Attendre que 100% des cas de test soient exécutés avant toute décision.",
      "Évaluer les risques des défauts critiques et des tests non exécutés avant de prendre une décision éclairée.",
      "Fermer tous les défauts critiques comme « won't fix » pour permettre la livraison.",
    ],
    answer: 2,
    explanation:
      "La décision de livrer ne repose pas uniquement sur le taux d'exécution, mais sur l'analyse des risques. Il faut évaluer l'impact des 3 défauts critiques et des 10% de tests non exécutés. La décision finale appartient aux parties prenantes, mais le testeur doit leur fournir cette information complète.",
  },

  // ── CHAPITRE 6 : Outils de test ────────────────────────────────────────────

  {
    id: "e1q51",
    domain: "Outils de test",
    difficulty: "facile",
    question:
      "Parmi les types d'outils suivants, lequel soutient directement l'exécution des tests ?",
    options: [
      "Outil de gestion des exigences",
      "Outil d'exécution de tests (framework d'automatisation)",
      "Outil de modélisation UML",
      "Outil de gestion de la configuration",
    ],
    answer: 1,
    explanation:
      "Les frameworks d'automatisation et outils d'exécution de tests (comme Selenium, JUnit, pytest) soutiennent directement l'exécution des tests en permettant d'automatiser le lancement des cas de test et de collecter les résultats.",
  },
  {
    id: "e1q52",
    domain: "Outils de test",
    difficulty: "moyen",
    question:
      "Parmi les affirmations suivantes sur l'automatisation des tests, laquelle est CORRECTE ?",
    options: [
      "L'automatisation des tests garantit l'élimination complète des défauts dans le logiciel.",
      "Les tests automatisés remplacent entièrement les tests manuels dans tous les contextes.",
      "L'automatisation nécessite un investissement initial important mais peut réduire les coûts à long terme pour les tests de régression.",
      "Un test qui passe en exécution automatisée prouve que le logiciel est exempt de défauts dans cette fonctionnalité.",
    ],
    answer: 2,
    explanation:
      "L'automatisation des tests exige un investissement initial (mise en place du framework, écriture des scripts, maintenance). Elle est particulièrement rentable pour les tests de régression répétés fréquemment. Elle ne garantit pas l'absence de défauts et ne remplace pas totalement les tests manuels, notamment exploratoires.",
  },
  {
    id: "e1q53",
    domain: "Outils de test",
    difficulty: "moyen",
    question:
      "Quel est le principal risque lié à l'introduction d'un outil d'automatisation de tests sans préparation adéquate ?",
    options: [
      "Les tests manuels deviennent impossibles à réaliser en parallèle.",
      "L'outil peut détecter trop de défauts et ralentir les équipes de développement.",
      "Les attentes irréalistes et le manque de compétences peuvent conduire à des scripts fragiles, coûteux à maintenir, et un ROI négatif.",
      "L'automatisation rend les tests trop rapides et ne laisse pas le temps aux développeurs de corriger les défauts.",
    ],
    answer: 2,
    explanation:
      "L'un des principaux risques de l'automatisation est de sous-estimer l'effort nécessaire (compétences, maintenance, mise à jour des scripts). Sans stratégie claire et compétences adaptées, on obtient des suites de tests fragiles qui cassent à chaque modification du code, avec un coût de maintenance supérieur aux bénéfices.",
  },
  {
    id: "e1q54",
    domain: "Outils de test",
    difficulty: "moyen",
    question:
      "Qu'est-ce qu'un outil d'analyse statique du code ?",
    options: [
      "Un outil qui exécute le code et mesure ses performances en conditions réelles.",
      "Un outil qui analyse le code source sans l'exécuter pour détecter des défauts potentiels, violations de standards et complexité.",
      "Un outil qui génère automatiquement des cas de test à partir du code source.",
      "Un outil qui compare deux versions du code pour identifier les modifications apportées.",
    ],
    answer: 1,
    explanation:
      "Un outil d'analyse statique (comme SonarQube, ESLint, PMD) examine le code source sans l'exécuter. Il détecte les violations de standards de codage, les problèmes potentiels (variables non initialisées, code mort, complexité élevée) et aide à maintenir la qualité du code.",
  },
  {
    id: "e1q55",
    domain: "Outils de test",
    difficulty: "moyen",
    question:
      "Dans quel cas l'automatisation des tests apporte-t-elle le plus de valeur ?",
    options: [
      "Pour des tests exploratoires visant à découvrir de nouveaux défauts inattendus.",
      "Pour des tests de régression exécutés fréquemment sur un logiciel stable avec une interface stable.",
      "Pour tester pour la première fois une fonctionnalité complexe dont les exigences changent souvent.",
      "Pour remplacer les tests d'acceptation utilisateur réalisés par les utilisateurs finaux.",
    ],
    answer: 1,
    explanation:
      "L'automatisation des tests est la plus rentable pour les tests de régression : tests répétitifs, exécutés fréquemment (à chaque build ou sprint), sur des fonctionnalités stables avec des interfaces peu changeantes. Elle est moins adaptée aux tests exploratoires ou aux fonctionnalités à exigences instables.",
  },
  {
    id: "e1q56",
    domain: "Outils de test",
    difficulty: "difficile",
    question:
      "Une équipe envisage d'automatiser ses tests d'interface utilisateur (UI). Quel facteur est le plus susceptible de rendre cette automatisation difficile à maintenir sur le long terme ?",
    options: [
      "Le nombre trop faible de cas de test à automatiser.",
      "La fréquence élevée des changements de l'interface utilisateur qui rend les sélecteurs fragiles.",
      "L'utilisation d'un langage de programmation différent de celui de l'application.",
      "La vitesse d'exécution trop rapide des tests automatisés qui masque des problèmes intermittents.",
    ],
    answer: 1,
    explanation:
      "Les tests d'automatisation UI sont particulièrement sensibles aux changements de l'interface (id, classe CSS, position des éléments). Si l'UI évolue fréquemment, les scripts cassent et nécessitent une maintenance coûteuse. C'est le principal défi de l'automatisation des tests UI.",
  },

  // ── Questions supplémentaires mixtes ───────────────────────────────────────

  {
    id: "e2q01",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question:
      "Un collègue vous demande : « Pourquoi continuer à tester manuellement si l'on peut tout automatiser ? » Quelle réponse est la plus appropriée selon l'ISTQB ?",
    options: [
      "Il a raison : l'automatisation totale est l'objectif ultime du test logiciel.",
      "Certains types de tests (exploratoires, d'expérience utilisateur, d'accessibilité visuelle) sont difficiles à automatiser efficacement et nécessitent un jugement humain.",
      "Les tests manuels sont uniquement justifiés lorsque l'équipe ne maîtrise pas les outils d'automatisation.",
      "On ne devrait jamais mélanger tests manuels et automatisés dans un même projet.",
    ],
    answer: 1,
    explanation:
      "L'automatisation et les tests manuels sont complémentaires. Certains types de tests — comme le test exploratoire, l'évaluation de l'expérience utilisateur, ou la détection visuelle d'anomalies — requièrent la curiosité et le jugement d'un être humain et sont peu adaptés à l'automatisation pure.",
  },
  {
    id: "e2q02",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un testeur utilise son expérience et son intuition pour concevoir des tests sans suivre de technique formelle, en imaginant les erreurs que les développeurs auraient pu commettre. Quelle technique basée sur l'expérience emploie-t-il ?",
    options: [
      "Test exploratoire",
      "Test basé sur une liste de vérification (checklist)",
      "Devinette d'erreurs (error guessing)",
      "Partitionnement en classes d'équivalence",
    ],
    answer: 2,
    explanation:
      "La devinette d'erreurs (error guessing) consiste à anticiper les défauts probables à partir de l'expérience du testeur, de sa connaissance du domaine et de l'historique des défauts passés. Elle n'est pas guidée par une technique formelle mais par l'intuition experte.",
  },
  {
    id: "e2q03",
    domain: "Tests statiques",
    difficulty: "moyen",
    question:
      "Parmi les types de défauts suivants, lequel NE PEUT PAS être détecté par le test statique ?",
    options: [
      "Une variable déclarée mais jamais utilisée dans le code.",
      "Une ambiguïté dans une exigence fonctionnelle.",
      "Un temps de réponse trop lent observé lors d'une montée en charge.",
      "Un commentaire de code qui contredit la logique implémentée.",
    ],
    answer: 2,
    explanation:
      "Un problème de performance observable uniquement lors de l'exécution (comme une lenteur sous charge) ne peut être détecté par le test statique. Le test statique examine les artefacts sans exécution ; il ne peut donc pas mesurer des comportements dynamiques.",
  },
  {
    id: "e2q04",
    domain: "Gestion des activités de test",
    difficulty: "facile",
    question:
      "Quelle est la première étape recommandée lors de la découverte d'un défaut pendant l'exécution de tests ?",
    options: [
      "Corriger immédiatement le défaut si le testeur a accès au code.",
      "Ignorer le défaut s'il n'affecte pas la fonctionnalité principale.",
      "Documenter le défaut dans un rapport de défaut et le signaler à l'équipe.",
      "Clore le cas de test concerné et passer au suivant sans l'enregistrer.",
    ],
    answer: 2,
    explanation:
      "Lorsqu'un testeur découvre un défaut, il doit le documenter dans un rapport de défaut formel (avec les informations nécessaires à la reproduction et à la correction) et le signaler selon le processus de gestion des défauts en vigueur.",
  },
  {
    id: "e5q01",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question:
      "Quelle est la différence entre la surveillance du test (test monitoring) et le contrôle du test (test control) ?",
    options: [
      "La surveillance consiste à collecter des métriques sur l'avancement des tests ; le contrôle consiste à prendre des actions correctives basées sur ces métriques.",
      "La surveillance est réalisée par les testeurs et le contrôle par le chef de projet.",
      "La surveillance porte sur les tests automatisés et le contrôle sur les tests manuels.",
      "Il n'y a pas de différence : les deux termes désignent la même activité.",
    ],
    answer: 0,
    explanation:
      "La surveillance du test (monitoring) consiste à collecter des informations sur l'avancement des activités de test (cas de test exécutés, défauts trouvés, couverture). Le contrôle du test consiste à prendre des décisions et des actions correctives en réponse à ces données (réaffecter des ressources, changer les priorités, etc.).",
  },
  {
    id: "e5q03",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un enregistreur de données solaires enregistre la quantité de soleil chaque heure. La valeur peut aller de 0 à 999. Le système affiche ERREUR si la valeur est négative ou supérieure à 999. En utilisant la BVA à 3 points, combien de cas de test sont nécessaires pour couvrir toutes les frontières ?",
    options: [
      "4",
      "6",
      "8",
      "12",
    ],
    answer: 1,
    explanation:
      "Il y a 2 frontières : 0 (limite basse) et 999 (limite haute). La BVA à 3 points teste 3 valeurs par frontière : pour 0 → {-1, 0, 1} et pour 999 → {998, 999, 1000}. Cela donne 6 cas de test au total.",
  },
  {
    id: "e5q05",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Un test qui vérifie le comportement d'une application à partir de cas d'utilisation décrivant les interactions entre acteurs et système correspond à quelle technique ?",
    options: [
      "Test de table de décision",
      "Test par cas d'utilisation (use case testing)",
      "Test de transition d'états",
      "Test d'analyse des valeurs limites",
    ],
    answer: 1,
    explanation:
      "Le test par cas d'utilisation est basé sur les scénarios décrits dans les cas d'utilisation (use cases). Chaque cas d'utilisation décrit les interactions entre un acteur (utilisateur ou système externe) et le système, et peut être utilisé pour concevoir des tests de flux de bout en bout.",
  },
  {
    id: "e5q06",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question:
      "Dans un modèle de développement itératif et incrémental, comment les tests sont-ils généralement organisés ?",
    options: [
      "Tous les tests sont réalisés à la fin du dernier incrément, juste avant la livraison.",
      "Chaque incrément est testé indépendamment, et des tests de régression sont ajoutés à chaque itération pour couvrir les incréments précédents.",
      "Les tests de composants sont réalisés en début de projet et les tests système uniquement à la fin.",
      "Les tests sont uniquement automatisés car il n'y a pas de temps pour les tests manuels en mode itératif.",
    ],
    answer: 1,
    explanation:
      "Dans les modèles itératifs, chaque incrément apporte de nouvelles fonctionnalités qui sont testées dans l'itération. Pour éviter les régressions, des tests de régression s'accumulent itération après itération pour vérifier que les fonctionnalités précédentes n'ont pas été impactées.",
  },

  // ── EXAM 5 — Chapitre 1 : Fondamentaux (10 questions) ─────────────────────

  {
    id: "e5q07",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question: "Lequel des 7 principes ISTQB explique pourquoi un logiciel peut ne plus trouver de nouveaux défauts si on répète toujours les mêmes tests ?",
    options: [
      "Tests exhaustifs impossibles",
      "Regroupement des défauts",
      "Le paradoxe du pesticide",
      "L'illusion de l'absence d'erreurs",
    ],
    answer: 2,
    explanation: "Le paradoxe du pesticide : comme les insectes développent une résistance aux insecticides, les mêmes tests répétés ne trouvent plus de nouveaux défauts. Il faut régulièrement réviser et enrichir les cas de test.",
  },
  {
    id: "e5q08",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question: "Lequel des exemples suivants représente une erreur humaine (et non un défaut ou une défaillance) ?",
    options: [
      "Un analyste mal interprète une règle métier et rédige une exigence incorrecte.",
      "Une boucle infinie dans le code de traitement des commandes.",
      "Le système affiche un montant incorrect sur la facture de l'utilisateur.",
      "Une variable non initialisée dans la fonction de calcul des taxes.",
    ],
    answer: 0,
    explanation: "L'erreur humaine est la cause racine (mauvaise interprétation, oubli). Elle produit un défaut dans un livrable (B, D = défauts dans le code). Le défaut, s'il est exécuté, produit une défaillance observable (C).",
  },
  {
    id: "e5q09",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question: "Un testeur trouve 0 défaut après 500 cas de test sur un module critique. Le chef de projet conclut que le module est exempt de défauts. Quel principe ISTQB est violé ?",
    options: [
      "Tester tôt",
      "Le paradoxe du pesticide",
      "Tests exhaustifs impossibles",
      "L'illusion de l'absence d'erreurs",
    ],
    answer: 3,
    explanation: "L'illusion de l'absence d'erreurs : trouver et corriger des défauts ne garantit pas que le logiciel répond aux besoins ni qu'il est exempt de tous défauts. L'absence de défauts trouvés ne prouve pas leur absence réelle.",
  },
  {
    id: "e5q10",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question: "Lequel des objectifs suivants s'applique à la fois aux tests et à l'assurance qualité (AQ) ?",
    options: [
      "Exécuter des cas de test et comparer les résultats réels aux résultats attendus.",
      "Concevoir des processus et procédures pour améliorer la qualité de manière systématique.",
      "Réduire le niveau de risque de qualité du système et prévenir les défauts.",
      "Auditer les processus de développement pour vérifier la conformité aux standards.",
    ],
    answer: 2,
    explanation: "Les tests ET l'AQ partagent l'objectif de réduire les risques qualité et prévenir les défauts. L'AQ est plus large (processus, standards, audits) ; les tests sont une composante focalisée sur la détection et la prévention.",
  },
  {
    id: "e5q11",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question: "Dans le contexte ISTQB, qu'est-ce que la base de test ?",
    options: [
      "L'environnement de test configuré pour exécuter les cas de test.",
      "La base de données contenant les données de test utilisées lors des tests.",
      "L'ensemble des documents à partir desquels les cas de test sont dérivés.",
      "Le rapport qui sert de référence pour mesurer la progression des tests.",
    ],
    answer: 2,
    explanation: "La base de test est l'ensemble des informations à partir desquelles les exigences de test sont identifiées : exigences, user stories, spécifications de conception, code source, règles métier.",
  },
  {
    id: "e5q12",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question: "Lequel des énoncés sur le biais de confirmation en test logiciel est CORRECT ?",
    options: [
      "Le biais de confirmation pousse le testeur à tester uniquement les fonctionnalités récemment modifiées.",
      "Le biais de confirmation pousse inconsciemment à concevoir des tests qui confirment que le système fonctionne plutôt qu'à chercher des défauts.",
      "Le biais de confirmation est utile pour les tests de confirmation après correction de défauts.",
      "Le biais de confirmation affecte uniquement les testeurs débutants.",
    ],
    answer: 1,
    explanation: "Le biais de confirmation est un biais cognitif universel : on cherche inconsciemment des preuves qui confirment nos croyances. En test, cela conduit à concevoir des tests qui 'confirment' que le système fonctionne au lieu de chercher à le faire échouer.",
  },
  {
    id: "e5q13",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question: "Quel est le rôle du testeur dans la prévention des défauts, avant même que le code ne soit écrit ?",
    options: [
      "Le testeur n'a aucun rôle dans la prévention — il intervient uniquement après le développement.",
      "Le testeur prévient les défauts en automatisant les tests de régression.",
      "Le testeur prévient les défauts en participant aux revues d'exigences et de conception pour identifier les ambiguïtés tôt.",
      "Le testeur prévient les défauts en formant les développeurs aux bonnes pratiques de codage.",
    ],
    answer: 2,
    explanation: "Le testeur contribue à la prévention en participant aux revues dès les exigences : il identifie les ambiguïtés, incohérences et manques avant qu'ils ne deviennent des défauts dans le code. C'est le 'shift left' appliqué à la prévention.",
  },
  {
    id: "e5q14",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question: "Lequel des principes ISTQB justifie la nécessité d'adapter les tests au contexte du projet ?",
    options: [
      "Tests exhaustifs impossibles",
      "Regroupement des défauts",
      "Le paradoxe du pesticide",
      "Les tests dépendent du contexte",
    ],
    answer: 3,
    explanation: "\"Les tests dépendent du contexte\" est le 6e principe ISTQB : les tests d'un système de contrôle aérien (critique de sécurité) sont très différents de ceux d'un site e-commerce. L'approche, les techniques et l'intensité des tests varient selon le domaine et les risques.",
  },
  {
    id: "e5q15",
    domain: "Fondamentaux du test",
    difficulty: "facile",
    question: "Lequel des éléments suivants fait partie du testware produit pendant les activités de test ?",
    options: [
      "Le code source de l'application testée",
      "Les exigences fonctionnelles rédigées par les analystes métier",
      "Les plans de test, cas de test, données de test et rapports de test",
      "Les spécifications d'architecture logicielle",
    ],
    answer: 2,
    explanation: "Le testware désigne tous les produits d'activités créés pendant le processus de test : plans de test, conditions de test, cas de test, scripts, données de test, rapports d'anomalies, rapports de synthèse.",
  },
  {
    id: "e5q16",
    domain: "Fondamentaux du test",
    difficulty: "moyen",
    question: "Quelle est la différence entre la vérification et la validation dans le contexte du test logiciel ?",
    options: [
      "La vérification concerne les tests dynamiques ; la validation concerne les tests statiques.",
      "La vérification est réalisée par les testeurs ; la validation est réalisée par les utilisateurs.",
      "La vérification vérifie que le produit est construit correctement (conforme aux spécifications) ; la validation vérifie que le bon produit est construit (répond aux besoins réels).",
      "La vérification et la validation sont synonymes dans le syllabus ISTQB FL.",
    ],
    answer: 2,
    explanation: "Vérification = \"Construisons-nous le produit correctement ?\" (conforme aux spécifications). Validation = \"Construisons-nous le bon produit ?\" (répond aux besoins réels). Un produit peut être correct selon les specs mais inadapté aux besoins réels.",
  },

  // ── EXAM 5 — Chapitre 2 : Cycle de vie (8 questions) ──────────────────────

  {
    id: "e5q17",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question: "Dans un modèle de développement en V, à quel niveau de test correspond la phase de définition des exigences système ?",
    options: [
      "Test de composants (unitaire)",
      "Test d'intégration de composants",
      "Test système",
      "Test d'acceptation",
    ],
    answer: 3,
    explanation: "Dans le modèle en V : exigences système ↔ test d'acceptation ; conception système ↔ test système ; conception détaillée ↔ test d'intégration ; code ↔ test de composants. Chaque niveau de test correspond à une phase de développement.",
  },
  {
    id: "e5q18",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question: "Lequel des énoncés est VRAI concernant les tests de composants (tests unitaires) ?",
    options: [
      "Ils sont toujours réalisés uniquement par des testeurs indépendants.",
      "Ils testent chaque composant logiciel de manière isolée, en utilisant des stubs ou drivers pour simuler les dépendances.",
      "Ils ne peuvent pas inclure des tests boîte-blanche.",
      "Ils sont réalisés uniquement après la fin complète du développement.",
    ],
    answer: 1,
    explanation: "Les tests de composants testent chaque module en isolation. Les dépendances sont remplacées par des stubs (simulent les composants appelés) et des drivers (simulent les composants appelants).",
  },
  {
    id: "e5q19",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question: "Quelle est la principale différence entre le test d'intégration de composants et le test d'intégration système ?",
    options: [
      "Le test d'intégration de composants vérifie les interfaces entre composants d'un même système ; le test d'intégration système vérifie les interfaces entre systèmes ou sous-systèmes différents.",
      "Le test d'intégration de composants est réalisé avant le test de composants ; le test d'intégration système est réalisé avant le test système.",
      "Les deux types d'intégration sont identiques — seule la terminologie diffère.",
      "Le test d'intégration de composants est réalisé par les développeurs ; le test d'intégration système par les testeurs.",
    ],
    answer: 0,
    explanation: "Intégration de composants : interfaces entre modules/composants d'un même système. Intégration système : interfaces entre systèmes distincts (ex : notre application avec une API externe, un service de paiement).",
  },
  {
    id: "e5q20",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "facile",
    question: "Lequel des exemples décrit le mieux un test non-fonctionnel ?",
    options: [
      "Vérifier que le bouton 'Ajouter au panier' ajoute correctement un produit.",
      "Vérifier que la fonction de calcul des taxes retourne le bon montant.",
      "Vérifier que le système supporte 10 000 utilisateurs simultanés sans dégradation visible des performances.",
      "Vérifier que l'utilisateur peut se connecter avec son nom d'utilisateur et mot de passe.",
    ],
    answer: 2,
    explanation: "Les tests non-fonctionnels vérifient des caractéristiques de qualité : performance, sécurité, utilisabilité, fiabilité, portabilité. Le test de charge (10 000 utilisateurs) est un test de performance — une caractéristique non-fonctionnelle.",
  },
  {
    id: "e5q21",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "facile",
    question: "Dans un projet Agile, comment les tests s'intègrent-ils dans le cycle de développement ?",
    options: [
      "Les tests sont réalisés uniquement à la fin de chaque sprint, après que tout le code du sprint est terminé.",
      "Les tests sont réalisés par une équipe séparée après la fin du projet de développement.",
      "Les tests sont intégrés tout au long du sprint, avec les testeurs collaborant étroitement avec les développeurs dès le début.",
      "Les tests Agile remplacent entièrement les revues et inspections statiques.",
    ],
    answer: 2,
    explanation: "En Agile, les tests sont une activité continue et collaborative : les testeurs participent à la définition des critères d'acceptation dès le début du sprint et testent les fonctionnalités au fur et à mesure de leur développement.",
  },
  {
    id: "e5q22",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question: "Lequel des énoncés est VRAI concernant les tests de maintenance ?",
    options: [
      "Les tests de maintenance ne nécessitent jamais de tests de régression.",
      "Les tests de maintenance sont identiques aux tests système réalisés lors du développement initial.",
      "L'analyse d'impact est essentielle dans les tests de maintenance pour identifier les zones potentiellement affectées par un changement.",
      "Les tests de maintenance sont réalisés uniquement lorsque le système est migré vers une nouvelle plateforme.",
    ],
    answer: 2,
    explanation: "L'analyse d'impact est fondamentale pour les tests de maintenance : elle identifie quelles parties du système sont potentiellement affectées par le changement, permettant de cibler les tests de confirmation et de régression de manière efficace.",
  },
  {
    id: "e5q23",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question: "Parmi les niveaux de test suivants, lequel a pour principale base de test les cas d'utilisation et les exigences de haut niveau ?",
    options: [
      "Test de composants",
      "Test d'intégration de composants",
      "Test système",
      "Test de composants et test système",
    ],
    answer: 2,
    explanation: "Le test système utilise comme base de test : les cas d'utilisation, les exigences fonctionnelles et non-fonctionnelles de haut niveau, les processus métier. Il vérifie que le système complet répond aux exigences définies.",
  },
  {
    id: "e5q24",
    domain: "Tests tout au long du cycle de vie",
    difficulty: "moyen",
    question: "Lequel des facteurs distingue principalement les tests alpha des tests bêta ?",
    options: [
      "Les tests alpha sont réalisés dans les locaux du développeur avec des utilisateurs sélectionnés ; les tests bêta sont réalisés chez les clients en conditions réelles.",
      "Les tests alpha sont informels ; les tests bêta suivent des cas de test documentés.",
      "Les tests alpha sont moins coûteux ; les tests bêta sont plus coûteux car réalisés en conditions réelles.",
      "Les tests alpha précèdent le développement ; les tests bêta suivent le développement.",
    ],
    answer: 0,
    explanation: "Tests alpha : réalisés dans les locaux du développeur, avec des utilisateurs potentiels ou internes, sous supervision. Tests bêta : réalisés chez les clients ou utilisateurs finaux, dans leur environnement réel, sans supervision directe.",
  },

  // ── EXAM 5 — Chapitre 3 : Tests statiques (6 questions) ───────────────────

  {
    id: "e5q25",
    domain: "Tests statiques",
    difficulty: "moyen",
    question: "Lequel des types de défauts suivants est typiquement détecté par l'analyse statique automatisée mais PAS par une revue manuelle ?",
    options: [
      "Une exigence ambiguë interprétable de deux façons différentes.",
      "Une incohérence entre deux exigences contradictoires.",
      "Une variable déclarée mais jamais utilisée dans 10 000 lignes de code.",
      "Un flux d'utilisation non intuitif pour les utilisateurs seniors.",
    ],
    answer: 2,
    explanation: "L'analyse statique automatisée (linters, analyseurs de code) parcourt mécaniquement tout le code et détecte des patterns précis (variables non utilisées, code mort) sur de grandes bases de code — impossible à faire manuellement à grande échelle.",
  },
  {
    id: "e5q26",
    domain: "Tests statiques",
    difficulty: "moyen",
    question: "Lors d'une revue formelle, quel est le rôle du facilitateur (modérateur) ?",
    options: [
      "Corriger les défauts identifiés par les réviseurs.",
      "Décider si une revue doit être organisée et allouer les ressources.",
      "Animer la réunion de revue, s'assurer que les règles sont respectées et gérer les interactions entre participants.",
      "Documenter toutes les décisions et défauts identifiés pendant la réunion.",
    ],
    answer: 2,
    explanation: "Le facilitateur/modérateur anime la réunion : gère le temps, s'assure que tout le monde participe, évite les débats hors-sujet. Le scribe documente ; l'auteur corrige ; le manager décide d'organiser.",
  },
  {
    id: "e5q27",
    domain: "Tests statiques",
    difficulty: "facile",
    question: "Lequel des types de revue suivants est le MOINS formel ?",
    options: [
      "Revue informelle (ex : demander à un collègue de regarder son code)",
      "Relecture guidée (Walkthrough)",
      "Revue technique",
      "Inspection",
    ],
    answer: 0,
    explanation: "Ordre de formalisme croissant : Informelle (aucun processus défini) → Walkthrough (dirigée par l'auteur) → Revue technique (entre pairs) → Inspection (la plus formelle : critères, checklists, métriques).",
  },
  {
    id: "e5q28",
    domain: "Tests statiques",
    difficulty: "moyen",
    question: "Lequel des bénéfices suivants est EXCLUSIF aux tests statiques (impossible à obtenir avec des tests dynamiques seuls) ?",
    options: [
      "Détecter les défauts fonctionnels dans les exigences.",
      "Détecter des défauts dans des documents non exécutables comme les exigences ou les plans de projet.",
      "Mesurer la couverture des tests exécutés.",
      "Détecter les défauts de performance sous charge.",
    ],
    answer: 1,
    explanation: "Les tests statiques sont les seuls à pouvoir analyser des documents non exécutables : exigences, plans de projet, spécifications de conception, maquettes. Les tests dynamiques nécessitent un code exécutable.",
  },
  {
    id: "e5q29",
    domain: "Tests statiques",
    difficulty: "moyen",
    question: "Dans quelle phase du processus de revue formelle les critères d'entrée sont-ils vérifiés ?",
    options: [
      "Planification",
      "Lancement (Kick-off)",
      "Revue individuelle",
      "Réunion de revue",
    ],
    answer: 0,
    explanation: "Les critères d'entrée sont vérifiés lors de la Planification : le document est-il prêt ? Les bons réviseurs sont-ils disponibles ? Si les critères d'entrée ne sont pas satisfaits, la revue est reportée.",
  },
  {
    id: "e5q30",
    domain: "Tests statiques",
    difficulty: "facile",
    question: "Lequel des défauts suivants est le plus susceptible d'être trouvé par une revue plutôt que par un test dynamique ?",
    options: [
      "Une exigence contradictoire avec une autre exigence dans le même document.",
      "Une fonction qui retourne un résultat incorrect pour des données d'entrée spécifiques.",
      "Un temps de réponse trop lent sous charge maximale.",
      "Un crash du système lors d'une déconnexion réseau inattendue.",
    ],
    answer: 0,
    explanation: "Les revues détectent des problèmes dans les documents avant même que le code soit écrit : exigences contradictoires, ambiguïtés, manques. B, C, D nécessitent un système exécutable — détectables uniquement par des tests dynamiques.",
  },

  // ── EXAM 5 — Chapitre 4 : Techniques de test (8 questions) ────────────────

  {
    id: "e5q31",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Pour un système de facturation (remise 0% si < 100€ ; 5% si 100-499€ ; 10% si ≥ 500€), combien de partitions d'équivalence valides existe-t-il ?",
    options: [
      "2 partitions valides",
      "3 partitions valides (et des partitions invalides en plus)",
      "5 partitions uniquement (une par valeur limite)",
      "1 seule partition (tous les montants positifs)",
    ],
    answer: 1,
    explanation: "3 partitions valides : <100€, 100-499€, ≥500€. Il faut aussi considérer les partitions invalides (montants négatifs, non numériques). Un représentant par partition suffit : ex. 50€, 250€, 750€ pour les valides.",
  },
  {
    id: "e5q32",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Pour un champ de saisie acceptant des valeurs entières de 1 à 100, quelles valeurs tester en BVA à 2 valeurs ?",
    options: [
      "1, 50, 100",
      "0, 1, 100, 101 et 50 (milieu)",
      "0, 1, 100, 101",
      "1, 2, 99, 100",
    ],
    answer: 2,
    explanation: "BVA 2 valeurs = limite + voisin extérieur pour chaque frontière. Limite basse 1 : tester 0 (invalide, juste en dessous) et 1 (valide, limite). Limite haute 100 : tester 100 (limite) et 101 (invalide, juste au-dessus).",
  },
  {
    id: "e5q33",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Une table de décision avec 3 conditions binaires (Client fidèle, Commande > 200€, Code promo valide) génère au maximum combien de règles ?",
    options: [
      "3 règles",
      "6 règles",
      "8 règles (2³ = 8 combinaisons)",
      "12 règles",
    ],
    answer: 2,
    explanation: "Avec N conditions binaires (Oui/Non), le nombre maximum de règles = 2ᴺ. 3 conditions binaires → 2³ = 8 règles. Certaines peuvent être impossibles ou équivalentes et être éliminées.",
  },
  {
    id: "e5q34",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Lequel des énoncés sur la couverture des décisions est CORRECT ?",
    options: [
      "La couverture des décisions à 100% garantit l'absence de défauts dans le code.",
      "La couverture des décisions est moins exigeante que la couverture des instructions.",
      "La couverture des décisions exige que chaque résultat possible (vrai et faux) de chaque décision soit testé au moins une fois.",
      "La couverture des décisions à 100% est équivalente à la couverture des chemins à 100%.",
    ],
    answer: 2,
    explanation: "La couverture des décisions : pour chaque point de décision (if, while, switch…), il faut qu'au moins un test couvre le résultat VRAI et au moins un test couvre le résultat FAUX.",
  },
  {
    id: "e5q35",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Un système de prêts bancaires a les états : DEMANDE, ANALYSE, APPROUVE, REFUSE, DECAISSE, CLOTURE. Combien d'états doit couvrir un cas de test pour le flux nominal complet (succès) ?",
    options: [
      "3 états",
      "4 états",
      "5 états (DEMANDE → ANALYSE → APPROUVE → DECAISSE → CLOTURE)",
      "6 états (tous les états du système)",
    ],
    answer: 2,
    explanation: "Le flux nominal : DEMANDE → ANALYSE → APPROUVE → DECAISSE → CLOTURE = 5 états. L'état REFUSE appartient au flux alternatif. Un bon plan de test couvre à la fois le flux nominal et les flux alternatifs.",
  },
  {
    id: "e5q36",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Quelle est la principale différence entre les tests exploratoires et les tests ad-hoc ?",
    options: [
      "Les tests exploratoires sont plus rapides que les tests ad-hoc.",
      "Les tests ad-hoc suivent un plan documenté ; les tests exploratoires sont totalement libres.",
      "Les tests exploratoires ont un objectif défini (charte) et tirent les leçons de chaque exécution ; les tests ad-hoc sont purement informels et non structurés.",
      "Les tests exploratoires et ad-hoc sont identiques — seule la terminologie diffère.",
    ],
    answer: 2,
    explanation: "Les tests exploratoires ont une structure légère : une charte (mission, objectifs, durée) guide le testeur qui apprend et adapte sa stratégie en temps réel. Les tests ad-hoc sont entièrement libres, sans objectif défini.",
  },
  {
    id: "e5q37",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Pour le code `if (A && B) { action1; } else { action2; }`, combien de cas de test sont nécessaires pour 100% de couverture des décisions ?",
    options: [
      "1 cas de test",
      "2 cas de test",
      "3 cas de test",
      "4 cas de test",
    ],
    answer: 1,
    explanation: "Pour 100% de couverture des décisions : Test 1 : A=Vrai, B=Vrai → condition vraie → action1. Test 2 : A=Faux (ou B=Faux) → condition fausse → action2. Les deux résultats (vrai/faux) sont couverts en 2 tests.",
  },
  {
    id: "e5q38",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Lequel des exemples illustre le mieux l'estimation d'erreur (Error Guessing) ?",
    options: [
      "Un testeur utilise les partitions d'équivalence pour sélectionner les valeurs d'entrée.",
      "Un testeur réalise une analyse aux valeurs limites sur un champ de saisie numérique.",
      "Un testeur expérimenté teste spécifiquement la saisie de caractères spéciaux car il a souvent vu des défauts liés à ce type d'entrée.",
      "Un testeur suit une checklist de vérification fournie par son organisation.",
    ],
    answer: 2,
    explanation: "L'estimation d'erreur exploite l'expérience du testeur : il cible les zones où des défauts ont souvent été trouvés dans le passé (caractères spéciaux, valeurs null, champs vides…). C'est un instinct éduqué basé sur l'historique des défauts.",
  },

  // ── EXAM 5 — Chapitre 5 : Gestion (5 questions) ───────────────────────────

  {
    id: "e5q39",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question: "Lequel des éléments suivants fait partie des métriques de test utilisées pour le suivi et le contrôle des tests ?",
    options: [
      "Le nombre de lignes de code développées par jour.",
      "Le pourcentage de cas de test exécutés, le taux de réussite/échec et la densité de défauts par module.",
      "Le nombre de réunions d'équipe organisées pendant la phase de test.",
      "Le coût total du projet de développement logiciel.",
    ],
    answer: 1,
    explanation: "Les métriques de test mesurent l'avancement et la qualité des tests : % de cas exécutés, taux de réussite/échec, nombre de défauts ouverts/fermés, densité de défauts, couverture des exigences.",
  },
  {
    id: "e5q40",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question: "Lequel des critères suivants est un critère de SORTIE (conditions pour terminer les tests) ?",
    options: [
      "L'environnement de test est configuré et opérationnel.",
      "Les données de test sont préparées et validées.",
      "Les cas de test ont été révisés et approuvés par les parties prenantes.",
      "Tous les cas de test prioritaires ont été exécutés et aucun défaut bloquant n'est ouvert.",
    ],
    answer: 3,
    explanation: "Les critères de sortie définissent quand arrêter les tests : tous les tests prioritaires exécutés, aucun défaut bloquant ouvert, couverture d'exigences atteinte. A, B, C sont des critères d'ENTRÉE (pour démarrer).",
  },
  {
    id: "e5q41",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question: "Lequel des éléments suivants est INCLUS dans un rapport de synthèse de test ?",
    options: [
      "Les écarts constatés par rapport au plan de test et les raisons de ces écarts.",
      "La liste complète de tous les cas de test conçus pendant le projet.",
      "Les critères d'entrée et de sortie définis pour la phase de test.",
      "Le plan détaillé de correction de tous les défauts trouvés.",
    ],
    answer: 0,
    explanation: "Le rapport de synthèse contient : résumé des activités, métriques, évaluation de la qualité, écarts par rapport au plan et recommandations. Les critères (C) sont dans le plan de test ; la liste des cas (B) est dans la documentation de test.",
  },
  {
    id: "e5q42",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question: "Lequel des facteurs suivants influence directement la priorité d'exécution des cas de test ?",
    options: [
      "L'ordre alphabétique des noms des cas de test dans le référentiel.",
      "L'ordre dans lequel les cas de test ont été rédigés par les testeurs.",
      "Le niveau de risque associé aux fonctionnalités testées, les dépendances entre cas de test et les critères d'acceptation critiques.",
      "La longueur et la complexité de chaque cas de test.",
    ],
    answer: 2,
    explanation: "La priorisation des tests est guidée par : le niveau de risque (tester d'abord ce qui est le plus critique), les dépendances (un TC qui en prépare un autre) et les critères d'acceptation critiques pour la mise en production.",
  },
  {
    id: "e5q43",
    domain: "Gestion des activités de test",
    difficulty: "moyen",
    question: "Lequel des éléments suivants est un exemple de risque PROJET (et non de risque produit) ?",
    options: [
      "Une fonctionnalité de sécurité peut ne pas être correctement implémentée.",
      "Le module de paiement peut être instable sous charge élevée.",
      "L'interface utilisateur peut ne pas être intuitive pour les utilisateurs âgés.",
      "Un expert clé de l'équipe de test pourrait quitter le projet avant la fin de la phase de test.",
    ],
    answer: 3,
    explanation: "Risque projet = risque affectant le DÉROULEMENT du projet (ressources, planning, budget, compétences). A, B, C sont des risques produit (qualité du logiciel). Le départ d'un expert affecte la capacité à réaliser les tests — c'est un risque projet.",
  },

  // ── EXAM 5 — Chapitre 6 : Outils de test (3 questions) ────────────────────

  {
    id: "e5q44",
    domain: "Outils de test",
    difficulty: "moyen",
    question: "Lequel des risques suivants est le plus associé à l'introduction d'un outil d'automatisation des tests ?",
    options: [
      "Sous-estimer l'effort nécessaire pour créer, maintenir et faire évoluer les scripts automatisés.",
      "L'outil peut trouver trop de défauts, dépassant la capacité de correction de l'équipe.",
      "L'outil peut remplacer complètement les testeurs humains.",
      "L'outil peut accélérer trop les tests, ne laissant pas le temps aux développeurs de corriger.",
    ],
    answer: 0,
    explanation: "Le risque principal de l'automatisation est de sous-estimer la maintenance : chaque changement d'interface, de flux ou de logique peut invalider de nombreux scripts. Le ROI dépend directement de la stabilité du système testé.",
  },
  {
    id: "e5q45",
    domain: "Outils de test",
    difficulty: "moyen",
    question: "Lequel des outils suivants est le plus approprié pour détecter des fuites mémoire dans un code C++ ?",
    options: [
      "Outil de gestion de configuration (ex : Git)",
      "Outil de management de test (ex : TestRail)",
      "Outil d'analyse dynamique (ex : Valgrind)",
      "Outil d'analyse statique (ex : SonarQube)",
    ],
    answer: 2,
    explanation: "Les outils d'analyse dynamique analysent le comportement du programme PENDANT son exécution : fuites mémoire, accès mémoire invalides, variables non initialisées. L'analyse statique (D) ne peut pas détecter les fuites mémoire qui dépendent du comportement à l'exécution.",
  },
  {
    id: "e5q46",
    domain: "Outils de test",
    difficulty: "facile",
    question: "Lequel des bénéfices est associé à l'utilisation d'un outil de gestion de configuration dans un projet de test ?",
    options: [
      "Il permet d'exécuter automatiquement les cas de test et de comparer les résultats.",
      "Il génère automatiquement des cas de test à partir des exigences.",
      "Il assure que les tests sont toujours exécutés sur la bonne version du logiciel et permet de rejouer les tests sur des versions antérieures.",
      "Il mesure la couverture du code source atteinte par les tests automatisés.",
    ],
    answer: 2,
    explanation: "L'outil de gestion de configuration (Git, SVN) garantit la traçabilité entre versions : savoir quelle version de l'application a été testée avec quels cas de test, et pouvoir rejouer des tests sur une version précédente.",
  },
];

export const DOMAINS: { key: Domain; chapter: string; color: string }[] = [
  { key: "Fondamentaux du test",               chapter: "Ch. 1", color: "blue"    },
  { key: "Tests tout au long du cycle de vie", chapter: "Ch. 2", color: "violet"  },
  { key: "Tests statiques",                    chapter: "Ch. 3", color: "emerald" },
  { key: "Techniques de test",                 chapter: "Ch. 4", color: "amber"   },
  { key: "Gestion des activités de test",      chapter: "Ch. 5", color: "indigo"  },
  { key: "Outils de test",                     chapter: "Ch. 6", color: "rose"    },
];

export type ExamInfo = {
  id: number;
  title: string;
  subtitle: string;
  questionCount: number;
  durationMinutes: number;
};

export const EXAM_INFO: ExamInfo[] = [
  { id: 1, title: "Examen Blanc 1", subtitle: "Fondamentaux & Techniques", questionCount: 40, durationMinutes: 60 },
  { id: 2, title: "Examen Blanc 2", subtitle: "Variations avancées · Tous chapitres", questionCount: 40, durationMinutes: 60 },
  { id: 3, title: "Examen Blanc 3", subtitle: "Session courte · Ch. 1–5", questionCount: 20, durationMinutes: 30 },
  { id: 4, title: "Examen Blanc 4", subtitle: "Session courte · Ch. 2–6", questionCount: 20, durationMinutes: 30 },
  { id: 5, title: "Examen Blanc 5", subtitle: "Questions originales · Syllabus complet", questionCount: 40, durationMinutes: 60 },
];

// Curated question sets for each exam (ordered by chapter)
export const EXAM_SETS: Record<number, string[]> = {
  1: [
    // Ch.1 (12Q)
    "e1q01","e1q02","e1q03","e1q04","e1q05","e1q06","e1q07","e1q08","e1q09","e1q10","e1q11","e1q12",
    // Ch.2 (8Q)
    "e1q14","e1q15","e1q16","e1q17","e1q18","e1q19","e1q20","e1q21",
    // Ch.3 (3Q)
    "e1q24","e1q25","e1q26",
    // Ch.4 (7Q)
    "e1q30","e1q31","e1q32","e1q33","e1q34","e1q35","e1q36",
    // Ch.5 (7Q)
    "e1q42","e1q43","e1q44","e1q45","e1q46","e1q47","e1q48",
    // Ch.6 (3Q)
    "e1q51","e1q52","e1q53",
  ],
  2: [
    // Ch.1 (10Q)
    "e1q13","e2q01","e1q07","e1q08","e1q09","e1q10","e1q11","e1q12","e1q04","e1q06",
    // Ch.2 (8Q)
    "e5q05","e5q06","e1q22","e1q23","e1q17","e1q18","e1q19","e1q20",
    // Ch.3 (4Q)
    "e2q03","e1q27","e1q28","e1q29",
    // Ch.4 (10Q)
    "e2q02","e5q03","e1q37","e1q38","e1q39","e1q40","e1q41","e1q32","e1q33","e1q34",
    // Ch.5 (6Q)
    "e2q04","e5q01","e1q49","e1q50","e1q43","e1q44",
    // Ch.6 (2Q)
    "e1q54","e1q55",
  ],
  3: [
    // Ch.1 (4Q)
    "e1q01","e1q06","e1q08","e1q13",
    // Ch.2 (4Q)
    "e1q14","e1q16","e1q18","e5q05",
    // Ch.3 (2Q)
    "e1q24","e1q28",
    // Ch.4 (4Q)
    "e1q30","e1q34","e1q37","e2q02",
    // Ch.5 (4Q)
    "e1q42","e1q44","e1q46","e2q04",
    // Ch.6 (2Q)
    "e1q51","e1q54",
  ],
  4: [
    // Ch.1 (4Q)
    "e1q02","e1q07","e1q09","e2q01",
    // Ch.2 (4Q)
    "e1q15","e1q17","e1q21","e5q06",
    // Ch.3 (2Q)
    "e1q25","e2q03",
    // Ch.4 (4Q)
    "e1q31","e1q35","e1q39","e5q03",
    // Ch.5 (4Q)
    "e1q43","e1q45","e1q47","e5q01",
    // Ch.6 (2Q)
    "e1q52","e1q55",
  ],
  5: [
    // Ch.1 (10Q)
    "e5q07","e5q08","e5q09","e5q10","e5q11","e5q12","e5q13","e5q14","e5q15","e5q16",
    // Ch.2 (8Q)
    "e5q17","e5q18","e5q19","e5q20","e5q21","e5q22","e5q23","e5q24",
    // Ch.3 (6Q)
    "e5q25","e5q26","e5q27","e5q28","e5q29","e5q30",
    // Ch.4 (8Q)
    "e5q31","e5q32","e5q33","e5q34","e5q35","e5q36","e5q37","e5q38",
    // Ch.5 (5Q)
    "e5q39","e5q40","e5q41","e5q42","e5q43",
    // Ch.6 (3Q)
    "e5q44","e5q45","e5q46",
  ],
};
