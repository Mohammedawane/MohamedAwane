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
];

export const DOMAINS: { key: Domain; chapter: string; color: string }[] = [
  { key: "Fondamentaux du test",               chapter: "Ch. 1", color: "blue"    },
  { key: "Tests tout au long du cycle de vie", chapter: "Ch. 2", color: "violet"  },
  { key: "Tests statiques",                    chapter: "Ch. 3", color: "emerald" },
  { key: "Techniques de test",                 chapter: "Ch. 4", color: "amber"   },
  { key: "Gestion des activités de test",      chapter: "Ch. 5", color: "indigo"  },
  { key: "Outils de test",                     chapter: "Ch. 6", color: "rose"    },
];
