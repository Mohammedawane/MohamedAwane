// ISTQB CTAL-TAE (Test Automation Engineer) — Examen blanc 2
// 40 questions converties depuis l'examen blanc source, réparties selon les 7
// chapitres du syllabus officiel CTAL-TAE v2.0.
import type { CTALTAEQuestion } from "./types";

export const EXAM_2_QUESTIONS: CTALTAEQuestion[] = [
  {
    id: "tae2q01",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous avez enfin convaincu votre manager de faire un projet pilote avec un outil d'automatisation des tests. Vous pouvez sélectionner parmi : Projet A — grand projet e-learning en phase d'élaboration des exigences ; Projet B — projet e-commerce avec API et GUI, proche de la fin de son cycle de vie ; Projet C — application RH sur bureau et mobile, projet de cinq mois ; Projet D — application simple avec les informations des collaborateurs. Quel est le meilleur projet pour un projet pilote d'outil d'automatisation des tests ?",
    options: [
      "Projet A parce que c'est un grand projet et qu'il est dans les premières phases",
      "Projet D parce que c'est un projet petit et simple",
      "Projet C parce que c'est un projet relativement court et non critique",
      "Projet B parce qu'il fournit une opportunité de démontrer les capacités de l'outil et que le SUT contient des composants représentatifs d'API et de GUI à automatiser",
    ],
    answer: [2],
    explanation:
      "Pour un projet pilote, il est recommandé de choisir un projet non critique et de portée limitée afin qu'un éventuel retard lié à l'automatisation n'ait pas d'impact majeur ; le projet C, relativement court et non critique, est idéal pour tester et affiner l'outil avant de l'appliquer à des projets plus stratégiques.",
  },
  {
    id: "tae2q02",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question:
      "Comment les captures d'écran et les vidéos issues de l'automatisation des tests peuvent-elles être utiles au-delà du simple débogage des tests échoués ?",
    options: [
      "Elles servent de sauvegarde en cas d'échec du test et peuvent être supprimées par la suite",
      "Elles peuvent aider à créer de la documentation d'utilisation réelle ou du matériel marketing pour les versions logicielles",
      "Elles peuvent ralentir le processus de test en consommant trop d'espace de stockage",
      "Elles peuvent être ignorées car elles n'apportent aucun aperçu significatif pour les parties prenantes",
    ],
    answer: [1],
    explanation:
      "Les captures d'écran et vidéos de l'automatisation sont précieuses au-delà du débogage : elles peuvent servir à créer de la documentation d'utilisation, du matériel marketing ou des supports de formation.",
  },
  {
    id: "tae2q03",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question: "Que peuvent automatiser les pipelines lors de leur exécution périodique ?",
    options: [
      "Tests de sécurité",
      "Tests de performance",
      "Uniquement des tests unitaires",
      "Différentes suites de tests, telles que les tests unitaires, les tests d'intégration et les tests UI",
    ],
    answer: [3],
    explanation:
      "Dans un pipeline CI/CD, il est possible d'automatiser l'exécution de différents types de tests (unitaires, intégration, UI, performance, sécurité) afin de vérifier en continu la stabilité de l'application à chaque changement de code.",
  },
  {
    id: "tae2q04",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Pourquoi la gestion du vieillissement des données est-elle cruciale dans l'automatisation des tests, en particulier pour les systèmes qui dépendent de données sensibles au facteur temps ?",
    options: [
      "Cela simplifie le processus de test global en réduisant le nombre de tests.",
      "Cela se concentre uniquement sur les données actuelles sans tenir compte du contexte historique.",
      "Cela permet d'éliminer toutes les données historiques de l'environnement de test.",
      "Cela aide à s'assurer que les données plus anciennes n'affectent pas négativement les performances, le comportement et la précision du système testé.",
    ],
    answer: [3],
    explanation:
      "Dans les systèmes sensibles au facteur temps (financiers, transactionnels), la gestion du vieillissement des données garantit que le système réagit correctement aux données obsolètes ou expirées, évitant erreurs et comportements inattendus.",
  },
  {
    id: "tae2q05",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quelle est la principale raison de limiter le nombre de paramètres d'entrée dans les méthodes ?",
    options: [
      "Cela permet d'ajouter plus de paramètres, ce qui améliore les capacités de la méthode",
      "Cela rend la signature de la méthode plus complexe, ce qui améliore ses fonctionnalités",
      "Cela diminue la lisibilité de la méthode, ce qui est bénéfique pour les logiques complexes",
      "Cela simplifie la signature de la méthode, la rendant plus facile à lire et à utiliser",
    ],
    answer: [3],
    explanation:
      "Limiter le nombre de paramètres d'entrée rend le code plus simple à lire, comprendre et maintenir, réduisant la complexité cognitive et le risque d'erreurs pour les développeurs et testeurs.",
  },
  {
    id: "tae2q06",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous travaillez dans une équipe de développement Android et vous maintenez un cadre d'automatisation des tests. Une autre équipe a été formée pour créer une nouvelle application. On vous demande de construire un cadre d'automatisation des tests pour cette nouvelle équipe. Dans quelle couche configurez-vous la connexion à la nouvelle application ?",
    options: [
      "La couche des scripts de test",
      "La couche de logique métier",
      "La couche des fichiers de fonctionnalités",
      "La couche des bibliothèques de base",
    ],
    answer: [1],
    explanation:
      "La couche de logique métier est celle où les connexions au système sous test sont configurées pour le framework d'automatisation, incluant les interactions spécifiques à l'application (par exemple la connexion à une API backend).",
  },
  {
    id: "tae2q07",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question:
      "Les rapports de test peuvent varier en contenu ou en détail en fonction des destinataires. Quel est le rôle qui s'intéresse le plus aux détails de bas niveau ?",
    options: [
      "Responsable opérationnel",
      "Chef de projet",
      "Responsable technique",
      "Responsable produit",
    ],
    answer: [2],
    explanation:
      "Le responsable technique s'intéresse le plus aux détails techniques de bas niveau (journaux d'erreurs, codes de statut, résultats techniques) des rapports de test automatisés.",
  },
  {
    id: "tae2q08",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Lequel des principes suivants n'est pas un principe de code propre (clean code) ?",
    options: [
      "Utiliser des journaux.",
      "Se concentrer sur les exigences.",
      "Éviter le codage en dur.",
      "Éviter trop de paramètres d'entrée pour les méthodes.",
    ],
    answer: [1],
    explanation:
      "Se concentrer sur les exigences, bien qu'important en développement logiciel, ne fait pas partie des principes de code propre, qui concernent plutôt la simplicité, l'absence de duplication, la lisibilité et la maintenabilité du code.",
  },
  {
    id: "tae2q09",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "De nouvelles fonctionnalités viennent d'être ajoutées à votre TAS. Quelles actions devez-vous entreprendre pour vous assurer qu'aucune fonctionnalité déjà existante n'a été affectée négativement par les modifications ?",
    options: [
      "Pour vérifier que les processus du nouveau et de l'ancien TAS sont identiques, effectuez une vérification statistique.",
      "Pour être sûr que le nouveau TAS fonctionnera correctement, consultez les notes de version du SUT.",
      "Examinez les différences entre les nouvelles et anciennes versions du TAS et évaluez ces différences.",
      "Vérifiez que le nouveau TAS utilise les mêmes stubs et drivers.",
    ],
    answer: [2],
    explanation:
      "Lorsqu'une nouvelle version du TAS est déployée, il est essentiel d'évaluer les différences par rapport à la version précédente afin d'identifier les zones de régression potentielle.",
  },
  {
    id: "tae2q10",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous utilisez l'outil d'automatisation habituel de votre organisation sur une nouvelle application mobile interne. La nouvelle application utilise un objet de liste que votre outil ne peut pas identifier, vous empêchant de vérifier que les options affichées sont correctes. Quelle action devez-vous entreprendre en premier pour résoudre ce problème ?",
    options: [
      "Demander aux développeurs de convertir l'objet de liste en un objet de liste standard que l'outil peut identifier.",
      "Demander que l'objet de liste soit supprimé et remplacé par des champs de boutons que l'outil peut reconnaître.",
      "Déterminer si l'application peut être utilisée sur un site web et si la liste est reconnaissable lorsque l'application est utilisée sur un site web.",
      "Réaliser un test pilote en utilisant une sélection des meilleurs outils de l'industrie pour déterminer si l'objet peut être reconnu.",
    ],
    answer: [0],
    explanation:
      "Lorsqu'un outil ne peut pas interagir avec un objet personnalisé, la première étape consiste à demander aux développeurs d'utiliser un objet standardisé compatible avec l'outil, évitant ainsi des solutions de contournement ou des tests manuels.",
  },
  {
    id: "tae2q11",
    domain: "Risques de déploiement et contingence",
    difficulty: "moyen",
    question:
      "Quelle est la principale préoccupation concernant l'utilisation des ressources lors d'un projet pilote d'automatisation des tests ?",
    options: [
      "Les tests automatisés nécessiteront moins de puissance de calcul que les tests manuels.",
      "Les tests automatisés peuvent consommer des ressources système excessives, ralentissant ou surchargeant potentiellement les environnements partagés.",
      "L'utilisation des ressources diminue dans les projets pilotes.",
      "Les tests automatisés peuvent être exécutés sans tenir compte des ressources.",
    ],
    answer: [1],
    explanation:
      "Lors d'un projet pilote, l'exécution de tests automatisés à grande échelle et fréquence peut entraîner une charge importante sur les ressources système (CPU, mémoire, réseau), notamment dans des environnements partagés.",
  },
  {
    id: "tae2q12",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Quel est l'objectif de « l'automatisation dans le sprint » (in-sprint automation) dans le développement logiciel Agile ?",
    options: [
      "Développer un cadre de test entièrement automatisé avant la construction de tout produit.",
      "Préparer tous les tests avant la première itération.",
      "S'assurer que l'automatisation des tests couvre tous les niveaux de test avec une profondeur appropriée à chaque sprint.",
      "Minimiser l'implication des clients pendant le processus de test.",
    ],
    answer: [2],
    explanation:
      "Dans un contexte Agile, l'automatisation dans le sprint vise à intégrer les tests automatisés à chaque sprint pour valider rapidement les nouvelles fonctionnalités et maintenir une couverture de test à jour.",
  },
  {
    id: "tae2q13",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "difficile",
    question:
      "Votre équipe a créé une solution d'automatisation des tests dans l'environnement de test. De nombreux problèmes sont apparus lors de l'exécution complète des tests et il était difficile de déterminer où et pourquoi cela échouait. L'échec pourrait être lié à des données générées aléatoirement, les tests n'échouant pas de manière cohérente au même moment. Dans cette situation, quelles informations devez-vous inclure dans vos journaux pour aider à diagnostiquer ce problème ? Sélectionnez-en 2.",
    options: [
      "Nombre de fois que chaque cas de test a été exécuté",
      "Tous les vidages de mémoire et les traces de pile disponibles",
      "Données utilisées par chaque cas de test",
      "Captures d'écran prises en cas d'échec du test",
      "Liste de toutes les actions effectuées par chaque cas de test pour permettre la reproduction des actions avec le même minutage",
    ],
    answer: [2, 3],
    explanation:
      "Connaître les données utilisées par chaque test (surtout si générées aléatoirement) et disposer de captures d'écran au moment de l'échec permet d'identifier plus rapidement si des données spécifiques sont à l'origine de l'échec intermittent.",
  },
  {
    id: "tae2q14",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question: "Quel est le principal objectif des identifiants d'accessibilité dans une interface utilisateur ?",
    options: [
      "Réduire la taille globale du logiciel.",
      "Améliorer les performances de l'application en minimisant le nombre d'éléments d'interface utilisateur.",
      "Améliorer la conception esthétique de l'interface utilisateur.",
      "Rendre les éléments de l'interface utilisateur identifiables pour les outils de test automatisés et les outils d'accessibilité.",
    ],
    answer: [3],
    explanation:
      "Les identifiants d'accessibilité sont des étiquettes uniques attribuées aux éléments UI, permettant aux outils de test automatisés et aux technologies d'assistance de les reconnaître et d'interagir avec eux.",
  },
  {
    id: "tae2q15",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question:
      "Lors de la mise à jour d'un framework d'automatisation des tests, quelle action peut être nécessaire concernant les scripts de test ?",
    options: [
      "Les scripts de test doivent être supprimés complètement pour éviter des problèmes de compatibilité",
      "Des modifications peuvent être nécessaires dans les scripts de test pour s'aligner avec les nouvelles fonctionnalités ou changements de la version mise à jour du framework",
      "Tous les scripts de test doivent être exécutés sans aucune vérification après la mise à jour",
      "Les scripts de test doivent rester inchangés, car la mise à jour du framework ne les affecte pas",
    ],
    answer: [1],
    explanation:
      "Lors de la mise à jour d'un framework d'automatisation, les nouvelles fonctionnalités ou changements peuvent affecter les scripts existants, nécessitant des ajustements pour maintenir leur compatibilité et leur bon fonctionnement.",
  },
  {
    id: "tae2q16",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question: "Laquelle des propositions suivantes n'est pas une technique permettant d'exécuter les tâches plus efficacement ?",
    options: [
      "Utiliser des bibliothèques de système d'exploitation plus récentes",
      "Utiliser un nouveau système de contrôle de version",
      "Optimiser les vérifications dans les fonctions",
      "Optimiser le code dans les fonctions",
    ],
    answer: [1],
    explanation:
      "Bien que les systèmes de contrôle de version modernes apportent des avantages de gestion et de collaboration, ils n'améliorent pas directement l'efficacité d'exécution des tests, contrairement à l'optimisation des fonctions de vérification ou de code.",
  },
  {
    id: "tae2q17",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous travaillez sur un projet d'automatisation des tests qui est utilisé pour automatiser les tests GUI d'un service de transport public basé sur le web. Le projet a une durée limitée. Un des objectifs est de mettre en œuvre des cas de tests directement dans les scripts de test automatisés. Quelle technique ou approche doit être utilisée pour automatiser les cas de test afin d'atteindre cet objectif ?",
    options: [
      "Utilisation de la technique d'automatisation des tests basée sur les données",
      "Utilisation de l'approche d'automatisation des tests basée sur la capture/rejeu",
      "Utilisation de la technique de test basée sur les mots-clés",
      "Utilisation de l'approche de développement piloté par le comportement",
    ],
    answer: [1],
    explanation:
      "Pour un projet à durée limitée visant à intégrer directement des cas de test manuels dans des scripts automatisés, l'approche de capture/rejeu est la plus rapide à mettre en œuvre.",
  },
  {
    id: "tae2q18",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question: "Laquelle des propositions suivantes n'est PAS un avantage de l'automatisation des tests ?",
    options: [
      "Fournir une couverture fonctionnelle plus large",
      "Réduction de la durée d'exécution des tests",
      "Temps de développement et de maintenance d'une solution d'automatisation des tests",
      "Permettre d'exécuter des tests que les testeurs manuels ne peuvent pas exécuter",
    ],
    answer: [2],
    explanation:
      "Le temps de développement et de maintenance d'une solution d'automatisation est souvent un défi et non un avantage ; l'effort pour maintenir les scripts alignés avec le SUT peut être important.",
  },
  {
    id: "tae2q19",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Pourquoi est-il important d'utiliser des méthodes de « teardown » après l'exécution des tests ?",
    options: [
      "Pour exécuter des tests supplémentaires qui n'étaient pas prévus à l'origine.",
      "Pour compiler et rapporter les résultats des tests en nettoyant l'environnement.",
      "Pour s'assurer que l'environnement de test est réinitialisé à son état initial.",
      "Pour lancer la suite de tests suivante immédiatement après l'achèvement.",
    ],
    answer: [2],
    explanation:
      "Les méthodes de teardown réinitialisent l'environnement de test à son état d'origine après l'exécution, garantissant que les tests suivants s'exécutent dans des conditions propres et cohérentes.",
  },
  {
    id: "tae2q20",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Pourquoi un niveau élevé d'intrusion dans les tests peut-il entraîner une diminution de la confiance dans les solutions de test automatisé ?",
    options: [
      "Parce que cela nécessite des configurations complexes qui peuvent désorienter les testeurs et entraîner des erreurs dans l'exécution des tests.",
      "Parce qu'un niveau élevé d'intrusion révèle des échecs peu susceptibles de se produire dans des conditions réelles, ce qui entraîne des préoccupations inutiles.",
      "Parce qu'il complique le processus de test en augmentant la nécessité de tests manuels.",
    ],
    answer: [1],
    explanation:
      "Les tests à forte intrusion peuvent générer des faux positifs car les conditions de test diffèrent trop des conditions réelles d'utilisation, ce qui réduit la confiance dans les résultats des tests automatisés.",
  },
  {
    id: "tae2q21",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question: "Sur quoi les tests de composants se concentrent-ils ?",
    options: [
      "Les parties individuelles du système en isolation",
      "Les vulnérabilités de sécurité du système",
      "La performance globale du système",
      "Les interactions avec l'interface utilisateur",
    ],
    answer: [0],
    explanation:
      "Les tests de composants (tests unitaires) se concentrent sur la vérification de chaque partie du système de manière isolée, avant son intégration dans le système global.",
  },
  {
    id: "tae2q22",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "On vous demande de fournir des conseils sur un projet impliquant l'automatisation des tests. Parmi les éléments observés figure un environnement de développement sujet à des changements réguliers de logiciels de gestion de bases de données, qui servira d'environnement d'automatisation. Lequel des éléments suivants pourrait empêcher l'automatisation à la lumière de ces informations ?",
    options: [
      "Comme l'exécution manuelle des tests est sujette à des erreurs, ils sont complexes et seront difficiles à automatiser.",
      "Les changements pourraient rendre l'environnement de test instable et entraîner un échec de l'automatisation.",
      "Il n'y a pas d'interface utilisateur à utiliser pour l'automatisation et l'automatisation via API ne suffit pas.",
      "Cette plateforme ne dispose pas d'outils commerciaux disponibles pour cette mise en œuvre.",
    ],
    answer: [1],
    explanation:
      "Automatiser des tests dans un environnement instable, soumis à des changements réguliers (par exemple des logiciels de base de données), peut entraîner des échecs de test dus à la non-conformité des données ou des schémas avec les attentes des tests automatisés.",
  },
  {
    id: "tae2q23",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Laquelle des propositions suivantes n'est PAS une étape de la vérification des composants de l'environnement de test automatisé ?",
    options: [
      "Intrusivité des outils de test automatisés",
      "Répétabilité dans la mise en place/arrêt de l'environnement de test",
      "Prise en compte de la répétabilité des tests",
      "Installation, configuration et personnalisation de l'outil de test",
    ],
    answer: [2],
    explanation:
      "La répétabilité des tests concerne la conception des suites de tests elles-mêmes, et non la vérification des composants de l'environnement de test (installation, configuration, intrusivité).",
  },
  {
    id: "tae2q24",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "Quel est le principal risque associé aux configurations de pare-feu dans un projet pilote d'automatisation des tests ?",
    options: [
      "Les pare-feu permettent automatiquement tout le trafic sans configuration",
      "Les pare-feu sont sans importance dans le contexte de l'automatisation des tests",
      "Des configurations incorrectes du pare-feu peuvent bloquer le trafic essentiel, empêchant la communication entre les outils d'automatisation des tests et d'autres systèmes",
      "Tout le trafic sera surveillé indépendamment des paramètres du pare-feu",
    ],
    answer: [2],
    explanation:
      "Un pare-feu mal configuré peut bloquer les communications nécessaires entre les outils d'automatisation, le SUT, les pipelines CI/CD ou des services tiers, entraînant retards et échecs de tests.",
  },
  {
    id: "tae2q25",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Un défaut est trouvé dans la version actuelle du logiciel. Quelle est la meilleure explication pour laquelle ce type de défaut pourrait se reproduire dans les versions ultérieures ?",
    options: [
      "Le re-test automatisé des défauts est inefficace pour vérifier que le défaut corrigé fonctionnera comme prévu dans les versions ultérieures.",
      "Le test de re-test automatisé du défaut a généralement une portée fonctionnelle plus petite que les autres tests automatisés.",
      "La synchronisation entre plusieurs archives logicielles n'est pas correctement contrôlée par le processus de gestion de la configuration.",
      "Le test de re-test automatisé du défaut n'est pas ajouté à la suite de tests de régression automatisés qui sera exécutée dans les versions futures.",
    ],
    answer: [2],
    explanation:
      "Un défaut corrigé peut réapparaître si la synchronisation des versions entre plusieurs archives logicielles n'est pas correctement gérée par le processus de gestion de la configuration.",
  },
  {
    id: "tae2q26",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous travaillez sur un prototype de produit conçu pour maintenir la part de marché jusqu'à ce que le produit final soit prêt. Le prototype devrait être en production pendant cinq mois, puis sera remplacé. Quelle est l'automatisation la plus rapide à mettre en œuvre pour le prototype ?",
    options: [
      "Script piloté par les données",
      "Script piloté par les processus",
      "Test basé sur des modèles",
      "Script linéaire",
    ],
    answer: [3],
    explanation:
      "Pour un prototype à courte durée de vie qui sera remplacé, il n'est pas nécessaire d'investir dans une solution d'automatisation complexe ; le script linéaire est simple et rapide à mettre en œuvre pour une solution temporaire.",
  },
  {
    id: "tae2q27",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "Pourquoi est-il important d'effectuer des vérifications de connectivité avec les systèmes/interfaces internes et externes avant d'utiliser une suite d'automatisation des tests (TAS) sur un SUT ?",
    options: [
      "Pour s'assurer que le TAS est correctement installé et configuré, ce qui est crucial pour des tests fiables.",
      "Pour permettre un test immédiat sans aucune configuration préalable du TAS.",
      "Pour éviter l'implication de tout système externe dans le processus de test.",
      "Pour valider que le TAS peut fonctionner de manière indépendante sans dépendre des systèmes externes.",
    ],
    answer: [0],
    explanation:
      "Les vérifications de connectivité garantissent que le TAS peut se connecter correctement aux systèmes internes et externes nécessaires ; sans cela, les tests peuvent échouer ou fournir des résultats incorrects.",
  },
  {
    id: "tae2q28",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous évaluez un outil de test fonctionnel utilisé dans des environnements distribués, devant se connecter à des outils de gestion des défauts et des tests, lesquels subiront des mises à jour programmées pouvant casser l'intégration. Lesquels des deux éléments suivants représentent les plus faibles préoccupations dans ce scénario ? Sélectionnez deux éléments.",
    options: [
      "Y a-t-il beaucoup de fonctionnalités dans l'outil d'automatisation des tests, mais seulement une partie d'entre elles sera utilisée ?",
      "L'installation de bibliothèques particulières affectant le SUT est-elle nécessaire pour l'outil d'automatisation des tests ?",
      "L'outil d'automatisation des tests peut-il lancer des processeurs et exécuter des cas de test sur plusieurs ordinateurs dans différents environnements ?",
      "Le système de licence permet-il d'accéder à différents ensembles supportés par l'outil d'automatisation des tests ?",
      "Les notes de version des changements prévus mentionnent-elles comment ils affecteront l'intégration avec les autres outils ?",
    ],
    answer: [0, 4],
    explanation:
      "Dans un scénario où l'outil doit s'intégrer à d'autres outils sujets à des mises à jour, le principal risque est que ces changements cassent l'intégration ; à l'inverse, l'utilisation partielle des fonctionnalités de l'outil et la flexibilité de la licence sont des préoccupations bien moins critiques.",
  },
  {
    id: "tae2q29",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question: "Quelle pourrait être une conséquence d'une mauvaise structuration des tests automatisés ?",
    options: [
      "Les résultats des tests seront difficiles à interpréter et à analyser",
      "Les tests s'exécuteront plus rapidement et nécessiteront moins de ressources système",
      "Les tests redondants peuvent augmenter le temps d'exécution sans fournir de valeur ajoutée",
      "Tous les cas de test réussiront, peu importe leur structure",
    ],
    answer: [2],
    explanation:
      "Une mauvaise structuration des tests automatisés peut entraîner des tests redondants qui augmentent le temps d'exécution sans améliorer la couverture ni apporter de nouvelles informations, rendant aussi les résultats plus difficiles à analyser.",
  },
  {
    id: "tae2q30",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question: "Lequel des énoncés suivants est une caractéristique du modèle en cascade (Waterfall) ?",
    options: [
      "Les exécutions de tests ont généralement lieu pendant la phase de conception",
      "Les phases peuvent se chevaucher, et les tests peuvent commencer avant la fin du développement",
      "L'automatisation des tests est toujours mise en place avant la phase d'implémentation",
      "Chaque phase doit être terminée avant que la suivante puisse commencer, sans chevauchement des phases",
    ],
    answer: [3],
    explanation:
      "Le modèle en cascade est une approche linéaire et séquentielle où chaque phase (exigences, conception, implémentation, test, déploiement) doit être entièrement complétée avant de passer à la suivante.",
  },
  {
    id: "tae2q31",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Un outil évalué dispose d'un tableau de bord utile et d'un composant de journalisation efficace, mais il a géré le SUT de manière plutôt lente lors de la preuve de concept, bien que l'environnement de test réponde aux exigences. Quelle action devez-vous prendre ensuite en ce qui concerne le choix de cet outil ?",
    options: [
      "Désactiver la journalisation des tests pour améliorer les performances de l'outil.",
      "Déplacer le SUT vers un environnement matériel/logiciel différent où la surcharge de l'outil peut être éliminée.",
      "Suggérer de ne pas utiliser cet outil.",
      "Augmenter les ressources matérielles du SUT afin de réduire la baisse de performances.",
    ],
    answer: [2],
    explanation:
      "Si un outil ralentit significativement le SUT malgré ses autres fonctionnalités utiles, il est préférable de ne pas le retenir, car cela nuirait aux performances globales pendant les tests.",
  },
  {
    id: "tae2q32",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "difficile",
    question:
      "Une suite d'automatisation des tests ne se termine pas et les journaux sont supprimés lorsque le test échoue ; le seul indice est un problème de mémoire sur le SUT. Le problème de suppression des journaux a été corrigé et vous pouvez enregistrer : (1) l'heure de début/fin de chaque test, (2) la lecture de la mémoire du SUT au début et à la fin de chaque test, (3) le cas de test en cours d'exécution, (4) le statut de chaque cas de test exécuté, (5) le nombre de cycles complétés, (6) les données aléatoires utilisées, (7) les captures d'écran de chaque test réussi. Quelles données devez-vous enregistrer pour identifier le problème ?",
    options: ["1, 2, 6, 7", "1, 2, 4, 5", "2, 3, 6, 7", "2, 3, 4, 5"],
    answer: [3],
    explanation:
      "Les informations les plus pertinentes pour diagnostiquer un problème de mémoire sont la lecture de mémoire du SUT, le cas de test en cours d'exécution, le statut de chaque test et le nombre de cycles complétés ; les données aléatoires et captures d'écran des tests réussis ne sont pas essentielles ici.",
  },
  {
    id: "tae2q33",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quel est le principal objectif des tests de contrat dans les systèmes basés sur des API ?",
    options: [
      "Garantir que les services ou composants respectent un contrat de communication préétabli.",
      "Tester les performances de l'API sous charge.",
      "Valider l'interface utilisateur des applications.",
      "Réaliser des tests de bout en bout de l'ensemble du système.",
    ],
    answer: [0],
    explanation:
      "Les tests de contrat vérifient que les services ou composants interagissent conformément à un contrat préétabli, spécifiant formats de requêtes/réponses, points d'accès et types de données — essentiel pour les architectures microservices.",
  },
  {
    id: "tae2q34",
    domain: "Risques de déploiement et contingence",
    difficulty: "moyen",
    question:
      "Quel est un avantage important de l'utilisation de scripts d'installation automatisés à partir d'un dépôt central pour une solution d'automatisation des tests (TAS) ?",
    options: [
      "Cela augmente le risque d'incohérences dans l'exécution des tests en raison de versions variables",
      "Cela complique le processus de mise à niveau des composants et des outils au sein du TAS",
      "Cela élimine le besoin de contrôle de version dans l'environnement de test",
      "Cela garantit que les tests sur différents Systèmes Sous Test (SUT) sont effectués avec la même version et configuration du TAS",
    ],
    answer: [3],
    explanation:
      "Les scripts d'installation automatisés depuis un dépôt central garantissent que tous les systèmes utilisent les mêmes versions et configurations du TAS, réduisant les risques d'incohérences et facilitant la gestion centralisée.",
  },
  {
    id: "tae2q35",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "La validation des résultats des rapports d'un projet commercial a pris beaucoup de temps pendant l'automatisation. Les développeurs souhaitent redéfinir les modules de rapport. Quelle information supplémentaire est nécessaire pour décider si ces modifications doivent être faites ?",
    options: [
      "Le ratio des échecs par rapport aux défauts",
      "Le nombre de fois que les tests seront effectués au cours de la durée de vie du logiciel de rapport",
      "La comparaison des 20 jours à l'effort de test manuel équivalent",
      "Le temps nécessaire pour examiner les échecs du SUT",
    ],
    answer: [2],
    explanation:
      "Il est essentiel d'évaluer si le temps consacré à la maintenance des scripts d'automatisation en vaut la peine par rapport au temps qu'aurait nécessité l'exécution manuelle équivalente des mêmes tests.",
  },
  {
    id: "tae2q36",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "Comment les variables de déploiement interagissent-elles avec les pipelines d'intégration et de déploiement continus (CI/CD) ?",
    options: [
      "Elles garantissent que les configurations correctes sont appliquées automatiquement pendant le processus de déploiement.",
      "Elles nécessitent une intervention manuelle avant chaque déploiement.",
      "Elles sont utilisées pour stocker le code source du SUT.",
      "Elles spécifient le nombre d'environnements de déploiement disponibles.",
    ],
    answer: [0],
    explanation:
      "Les variables de déploiement permettent d'appliquer automatiquement des configurations spécifiques à chaque environnement (dev, staging, production), évitant les erreurs humaines.",
  },
  {
    id: "tae2q37",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Pour le déploiement initial d'un nouveau système logiciel, vous devez automatiser des tests fonctionnels au niveau système via la CLI du SUT. Ces tests doivent être rapides, peu coûteux à maintenir, utilisés en régression avec une suite qui grandira, et indépendants de l'outil d'automatisation qui pourrait changer. Quelle technique de script serait la plus appropriée ?",
    options: [
      "Script piloté par les mots-clés",
      "Script piloté par les données",
      "Script structuré",
      "Script linéaire",
    ],
    answer: [0],
    explanation:
      "Pour minimiser les coûts de maintenance, faciliter l'ajout de tests à une suite de régression grandissante, et assurer l'indépendance vis-à-vis de l'outil d'automatisation, le script piloté par les mots-clés est le plus approprié.",
  },
  {
    id: "tae2q38",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous automatisez les tests GUI d'un site de commerce en ligne dont l'assistant de configuration de compte est en cours d'ajustements itératifs entre développeurs et testeurs d'utilisabilité. L'automatisation des tests est principalement axée sur le support des tests de maintenance. Quel est le modèle de conception le mieux adapté ?",
    options: [
      "Implémentez le modèle de conception façade et fournissez des interfaces pour les éléments de l'interface graphique afin de masquer le mécanisme interne de localisation utilisé.",
      "Implémentez le modèle de flux (flow model), stockez tous les éléments web dans les modèles de pages concernés, et stockez toutes les actions utilisateur associées aux éléments de l'interface graphique dans les modèles de flux correspondants.",
      "Implémentez le modèle objet-page et stockez toutes les actions utilisateur associées aux éléments de l'interface graphique dans les modèles de pages concernés.",
      "Implémentez le modèle singleton et créez une pièce de code unique pour gérer la localisation des éléments.",
    ],
    answer: [1],
    explanation:
      "Le modèle de flux combine modèles de pages et modèles de flux pour séparer structure et logique de l'application, offrant une flexibilité accrue lorsque l'interface change fréquemment, comme lors d'itérations de tests d'utilisabilité.",
  },
  {
    id: "tae2q39",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Votre direction souhaite que le système d'automatisation des tests fonctionne de manière autonome, alors qu'une mise en œuvre précédente n'a pas su gérer les scénarios d'erreurs inattendues. Comment pouvez-vous vous assurer que cela n'affectera pas l'adoption de votre implémentation ?",
    options: [
      "Créer des scripts de récupération spécialisés pour gérer les erreurs inattendues et ramener l'environnement de test à un état connu.",
      "Créer un code qui, en fermant toutes les boîtes de dialogue inattendues, continuera l'exécution.",
      "Vérifier que la base de données contient les informations nécessaires avant l'exécution.",
      "Tester manuellement le logiciel au préalable pour s'assurer qu'il n'y a pas d'erreurs inattendues.",
    ],
    answer: [0],
    explanation:
      "Pour un fonctionnement autonome fiable, le TAS doit disposer de scripts de récupération capables de rétablir l'environnement de test à un état connu après une erreur, par exemple un redémarrage du SUT.",
  },
  {
    id: "tae2q40",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question:
      "Comment appelle-t-on le fait que le SUT donne aux utilisateurs un aperçu du comportement du système en leur montrant l'état des différentes actions entreprises, afin qu'ils puissent vérifier que le comportement attendu correspond au comportement réel ?",
    options: ["La portabilité", "L'observabilité", "La contrôlabilité", "La maintenabilité"],
    answer: [1],
    explanation:
      "L'observabilité permet aux utilisateurs et testeurs de voir et comprendre le comportement du système (journaux, tableaux de bord, messages d'état) afin de vérifier que le comportement réel correspond aux attentes.",
  },
];
