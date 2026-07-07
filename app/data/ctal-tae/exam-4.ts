// ISTQB CTAL-TAE (Test Automation Engineer) — Examen blanc 4
// 40 questions converties depuis l'examen blanc source, réparties selon les 7
// chapitres du syllabus officiel CTAL-TAE v2.0.
import type { CTALTAEQuestion } from "./types";

export const EXAM_4_QUESTIONS: CTALTAEQuestion[] = [
  {
    id: "tae4q01",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question: "Lequel des types de test suivants peut être effectué manuellement ?",
    options: ["Test de régression", "Test en temps réel", "Test à distance", "Test en parallèle"],
    answer: [0],
    explanation:
      "Le test de régression peut être exécuté manuellement ou de façon automatisée ; contrairement aux tests en temps réel ou parallèles qui nécessitent des outils spécifiques, il peut être réalisé manuellement si besoin.",
  },
  {
    id: "tae4q02",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Il existe déjà une suite de tests automatisés pour un SUT. Concernant l'ajout de nouvelles fonctionnalités au SUT, laquelle des affirmations suivantes est vraie ?",
    options: [
      "Comme le développement d'une nouvelle fonctionnalité n'a pas encore commencé, l'automatisation des cas de test pour celle-ci est généralement plus difficile",
      "Pour s'assurer que la nouvelle fonctionnalité est testable, l'ingénieur en automatisation des tests doit collaborer avec les analystes métiers",
      "L'introduction d'une nouvelle fonctionnalité n'a aucun impact sur les tests automatisés, et il est inutile de les exécuter contre le nouveau SUT",
      "Les composants de test peuvent avoir besoin d'être mis à jour ou étendus pour inclure une nouvelle fonctionnalité",
    ],
    answer: [3],
    explanation:
      "Lorsqu'une nouvelle fonctionnalité est ajoutée au SUT, il est souvent nécessaire de mettre à jour les composants de test (scripts, mots-clés) du framework d'automatisation pour inclure des vérifications spécifiques à cette fonctionnalité.",
  },
  {
    id: "tae4q03",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Que signifie l'acronyme SOLID dans les principes de conception ?",
    options: [
      "Responsabilité unique, ouvert-fermé, substitution de Liskov, substitution d'interface, inversion des versions",
      "Responsabilité unique, ouvert-fermé, substitution de Liskov, substitution d'interface, inversion des dépendances",
      "Responsabilité unique, ouvert-extension, substitution de Liskov, substitution d'interface, inversion des dépendances",
      "Responsabilité unique, ouvert-fermé, substitution de Liskov, substitution d'interface, inversion des versions",
    ],
    answer: [1],
    explanation:
      "SOLID regroupe cinq principes de conception (Responsabilité unique, Ouvert/Fermé, Substitution de Liskov, Segmentation d'interface, Inversion des dépendances) qui rendent le code plus modulaire, maintenable et extensible.",
  },
  {
    id: "tae4q04",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Laquelle des capacités suivantes est optionnelle ?",
    options: ["Adaptation des tests", "Génération de tests", "Définition des tests", "Exécution de tests"],
    answer: [1],
    explanation:
      "Selon le syllabus, la génération de tests est une capacité optionnelle d'une solution d'automatisation des tests, contrairement à l'exécution et l'adaptation des tests qui sont essentielles.",
  },
  {
    id: "tae4q05",
    domain: "Risques de déploiement et contingence",
    difficulty: "moyen",
    question:
      "Vous rencontrez des problèmes avec la fiabilité de l'environnement de test automatisé et décidez de créer une suite de tests pour vérifier l'environnement avant de lancer les scripts réels. Quelle serait la meilleure méthode pour tester rapidement l'environnement ?",
    options: [
      "Exécuter un ensemble de tests contenant à la fois des succès et des échecs, et vérifier que les résultats sont cohérents",
      "Exécuter un ensemble de tests dont vous savez qu'ils échouent et vérifier qu'ils échouent encore",
      "Exécuter l'ensemble complet des tests automatisés et vérifier les résultats, car un sous-ensemble ne sera pas représentatif",
      "Exécuter un ensemble de tests dont vous savez qu'ils réussissent et vérifier qu'ils réussissent encore",
    ],
    answer: [0],
    explanation:
      "Pour vérifier l'intégrité de l'environnement, il faut tester à la fois des cas connus pour réussir et des cas connus pour échouer, afin de confirmer que les résultats correspondent bien aux attentes dans les deux sens.",
  },
  {
    id: "tae4q06",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes décrit le mieux comment gérer les interdépendances entre les tests ?",
    options: [
      "Combiner les tests en un seul test plus complexe",
      "Passer les données d'un test à l'autre via le script de test",
      "Exécuter les tests de manière séquentielle afin qu'ils s'exécutent toujours dans l'ordre spécifié",
      "Stocker les données utilisées par plusieurs tests de manière externe",
    ],
    answer: [3],
    explanation:
      "Les tests partagent souvent des données ; il est préférable de les stocker de manière externe (fichier de configuration, base de données) pour éviter la duplication et les erreurs dues à des données non synchronisées.",
  },
  {
    id: "tae4q07",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Considérez un cadre TAS basé sur des mots-clés pour une application de bureau, utilisant un mécanisme d'attente basé sur un échantillonnage synchrone avec un délai d'expiration prédéterminé lors du chargement d'une page. Quelle suggestion feriez-vous pour améliorer le TAS ?",
    options: [
      "Passer à un script piloté par les données comme méthode de script",
      "Mettre en place une procédure de récupération en cas d'erreur pour le TAS et le SUT",
      "Passer à des attentes codées en dur explicites comme mécanisme d'attente",
      "Mettre en œuvre des mots-clés avec un niveau de granularité plus élevé",
    ],
    answer: [3],
    explanation:
      "Augmenter la granularité des mots-clés réduit la répétition des séquences et optimise les tests, rendant le TAS plus modulaire et flexible.",
  },
  {
    id: "tae4q08",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Pour la première version d'un système logiciel, vous devez automatiser des tests fonctionnels au niveau système via la CLI du SUT. Les tests doivent être rapides et peu coûteux, le coût de développement de nouveaux tests doit être bas, et un haut niveau d'indépendance vis-à-vis de l'outil est requis. Quelle technique de script serait la plus appropriée ?",
    options: [
      "Script piloté par les données",
      "Script structuré",
      "Script piloté par les mots-clés",
      "Script linéaire",
    ],
    answer: [2],
    explanation:
      "Le script piloté par les mots-clés permet de réduire les coûts de maintenance et d'ajout de nouveaux tests, tout en garantissant une indépendance vis-à-vis de l'outil d'automatisation utilisé.",
  },
  {
    id: "tae4q09",
    domain: "Transition des tests manuels vers l'automatisation",
    difficulty: "moyen",
    question:
      "Lequel des énoncés suivants décrit le moins probablement la mise en œuvre de tests de régression automatisés ?",
    options: [
      "En automatisant les tests de régression, le risque de déploiement peut être réduit en tenant compte du temps nécessaire pour effectuer chaque test",
      "Dans la mesure du possible, les activités de configuration nécessaires pour établir les préconditions de test doivent être automatisées lors de l'automatisation des tests de régression",
      "Afin de s'assurer que les tests manuels correspondants fonctionnent correctement, ils doivent avoir été exécutés avant d'automatiser les tests de régression",
      "L'automatisation des tests de régression exige que la structure du test automatisé corresponde à celle du test manuel correspondant",
    ],
    answer: [3],
    explanation:
      "L'automatisation des tests ne doit pas nécessairement suivre la même structure que les tests manuels ; les tests automatisés sont souvent structurés différemment pour maximiser l'efficacité et la maintenance.",
  },
  {
    id: "tae4q10",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Un nouveau projet d'automatisation vous a été confié : les développeurs ont ajouté des hooks de test à l'application et construit quelques tests automatisés. Les hooks offrent un accès suffisant pour un test complet. Quel est l'inconvénient le plus probable de l'utilisation des hooks de test comme principal effort d'automatisation ?",
    options: [
      "Vous pourriez ne pas être en mesure d'utiliser ce code existant, et votre outil d'automatisation préféré pourrait ne pas être compatible avec les hooks de test",
      "L'utilisation des hooks de test existants avec le code de test automatisé nécessitera un travail de développement important",
      "Il pourrait y avoir un niveau élevé d'intrusion, ce qui pourrait provoquer de fausses alertes",
      "Étant donné que les hooks de test doivent être utilisés avec des tests existants, une stratégie basée sur les risques n'est pas applicable dans ce cas",
    ],
    answer: [2],
    explanation:
      "L'utilisation de hooks de test peut modifier le comportement de l'application de manière imprévue, entraînant des résultats de tests incorrects ou de fausses alertes en raison d'un niveau d'intrusion élevé.",
  },
  {
    id: "tae4q11",
    domain: "Risques de déploiement et contingence",
    difficulty: "moyen",
    question:
      "Un TAS utilise uniquement les API d'un SUT, qui a été modifié pour introduire des interfaces de test spécialisées. Vous vérifiez que l'environnement de test automatisé et la configuration de l'outil de test sont corrects. Laquelle des actions suivantes serait la plus spécifique pour atteindre cette vérification ?",
    options: [
      "La connectivité du TAS aux interfaces de test dédiées ne fonctionnera pas",
      "Vérifier la connectivité avec les systèmes/interfaces internes et externes",
      "Vérifier qu'il y a suffisamment de points de vérification dans la suite de tests automatisés et/ou les cas de test",
      "Vérifier que la suite de tests est complète et correctement versionnée avec le framework et le SUT",
    ],
    answer: [1],
    explanation:
      "La connectivité est essentielle pour vérifier que le TAS peut correctement interagir avec les API du SUT ainsi qu'avec d'autres systèmes, garantissant que les tests peuvent s'exécuter sans problème de communication.",
  },
  {
    id: "tae4q12",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Une suite de 300 cas de test manuels doit être automatisée pour réduire le temps d'exécution de 80%. À la fin d'un projet pilote d'un mois, 25% des tests ont été automatisés, réduisant le temps d'exécution de 40%. Laquelle des affirmations suivantes est vraie ?",
    options: [
      "L'objectif du projet pilote est trop précis et ne devrait pas être quantifiable",
      "L'objectif du projet pilote semble difficile à atteindre, il devrait être plus raisonnable",
      "La durée du projet pilote était trop courte ; il aurait dû durer jusqu'à ce que tous les critères de succès soient atteints",
      "Le projet choisi pour le pilote n'aurait pas dû être choisi car il est soit trop petit, soit trop critique",
    ],
    answer: [1],
    explanation:
      "L'objectif initial de réduire le temps d'exécution de 80% est ambitieux et peu réaliste dans un délai aussi court ; il est important de fixer des objectifs raisonnables et atteignables pour évaluer un projet pilote de façon réaliste.",
  },
  {
    id: "tae4q13",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous automatisez le GUI d'une application de santé en ligne, sous contraintes de temps. Un des objectifs est d'intégrer les cas de test manuels directement dans les scripts de test automatisés. Quelle méthode doit être utilisée ?",
    options: [
      "Technique de test automatisé pilotée par les données",
      "Technique de test pilotée par les mots-clés",
      "Approche de développement piloté par le comportement (BDD)",
      "Approche d'automatisation des tests basée sur la capture/relecture",
    ],
    answer: [3],
    explanation:
      "L'approche de capture/relecture est simple à mettre en place et rapide à exécuter, ce qui est idéal dans un contexte où le temps est limité et où l'intégration des tests manuels doit être faite rapidement.",
  },
  {
    id: "tae4q14",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quel est un composant crucial pour améliorer la maintenabilité du code ?",
    options: [
      "Spécifier des fonctions génériques et inclure tous les paramètres nécessaires",
      "Les analyseurs statiques doivent être utilisés pour maintenir la propreté du code",
      "Les valeurs codées en dur doivent être faciles à comprendre",
      "Les variables de code doivent être nommées différemment par les développeurs",
    ],
    answer: [1],
    explanation:
      "L'utilisation d'analyseurs statiques permet de détecter des erreurs potentielles, des failles de sécurité et des violations de bonnes pratiques, améliorant ainsi la qualité et la maintenabilité du code.",
  },
  {
    id: "tae4q15",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quelle est la meilleure approche pour réduire le temps de maintenance requis pour le code d'automatisation des tests ?",
    options: [
      "Exploiter les modèles de conception (design patterns)",
      "Encoder toutes les données en dur",
      "Utiliser un système de gestion de configuration",
      "Stocker le code en dehors d'un système de gestion de configuration",
    ],
    answer: [0],
    explanation:
      "L'utilisation de modèles de conception (comme le Page Object) structure le code de manière à faciliter sa maintenance, en centralisant les interactions réutilisables et réduisant le temps nécessaire aux ajustements.",
  },
  {
    id: "tae4q16",
    domain: "Risques de déploiement et contingence",
    difficulty: "difficile",
    question:
      "Un SUT fonctionne sur plusieurs plateformes ; chaque exécution de test doit utiliser la même version du TAF contre la même version du SUT, avec un environnement distinct par plateforme. Considérant : A) scripts d'installation automatiques, B) logs au format XML, C) tests sur fonctionnalités TAF non utilisées, D) résultats attendus présents dans chaque scénario, E) gestion de configuration en place pour les composants du TAS — quelles sont les deux options les plus cruciales pour atteindre l'objectif avec le moins de travail manuel ?",
    options: ["A et D", "B et C", "A et E", "B et D"],
    answer: [2],
    explanation:
      "L'utilisation de scripts d'installation automatiques (A) et la gestion de configuration des composants du TAS (E) sont essentielles pour garantir la cohérence et l'automatisation à travers différents environnements de test sans intervention manuelle.",
  },
  {
    id: "tae4q17",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question:
      "Quel principe garantit que les composants d'un TAS doivent être ouverts à l'extension, mais fermés à la modification ?",
    options: [
      "Inversion des dépendances",
      "Substitution de Liskov",
      "Principe ouvert/fermé",
      "Substitution d'interface",
    ],
    answer: [2],
    explanation:
      "Le principe ouvert/fermé signifie qu'un composant doit être extensible sans nécessiter de modification du code existant, permettant d'ajouter des fonctionnalités sans compromettre la stabilité du système.",
  },
  {
    id: "tae4q18",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question: "À l'exception de certains éléments graphiques, un TAS est idéal pour votre application. Quelle action est prioritaire ?",
    options: [
      "Vérifiez auprès des fournisseurs de composants la testabilité de certains composants spécifiques",
      "Utilisez des composants graphiques et des coordonnées x",
      "Vérifiez si le navigateur web affecte le problème d'identification",
      "Vérifiez que les conventions de nommage sont respectées",
    ],
    answer: [0],
    explanation:
      "Si le TAS fonctionne bien mais rencontre des difficultés avec certains éléments graphiques, il est préférable de contacter les fournisseurs des composants pour vérifier leur testabilité et obtenir une assistance technique.",
  },
  {
    id: "tae4q19",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quels sont les quatre principaux composants de base d'une solution d'automatisation de tests qui doivent être identifiés et sélectionnés ?",
    options: [
      "Génération de tests, définition de tests, exécution de tests, adaptation des tests",
      "Génération de tests, exécution de tests, définition des tests, API de tests",
      "Adaptation des tests, exécution de tests, conception des tests, définition des tests",
      "Définition de tests, exécution de tests, rapport de tests, adaptation des tests",
    ],
    answer: [0],
    explanation:
      "Les composants clés de l'automatisation des tests sont la génération de tests, la définition de tests, l'exécution de tests et l'adaptation des tests aux nouveaux changements du SUT.",
  },
  {
    id: "tae4q20",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question: "Quel aspect de la conception technique n'aborde pas la solution globale d'automatisation des tests ?",
    options: [
      "Développer des scripts de test",
      "Identifier les exigences d'interface",
      "Utiliser un système de gestion de version",
      "Sélectionner des outils d'automatisation des tests",
    ],
    answer: [0],
    explanation:
      "Le développement de scripts de test est une étape d'exécution spécifique, mais il ne traite pas directement de la conception ou de la gestion globale de la solution d'automatisation (exigences d'interface, choix d'outils, gestion de version).",
  },
  {
    id: "tae4q21",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "moyen",
    question:
      "Dans quelles conditions l'un des indicateurs suivants peut-il indiquer que la suite de tests automatisés n'a pas été mise à jour pour refléter les nouvelles fonctionnalités ajoutées au SUT ?",
    options: [
      "La couverture du code du SUT obtenue à partir de l'exécution de la suite de tests de régression",
      "Le ratio des commandes par rapport aux instructions exécutables dans le code d'automatisation de la suite de tests de régression",
      "La proportion des instructions exécutables du code du SUT par rapport aux commentaires",
      "La densité des défauts dans le code d'automatisation de la suite de tests de régression",
    ],
    answer: [0],
    explanation:
      "Une baisse de la couverture de code peut indiquer que de nouvelles fonctionnalités ont été ajoutées au SUT sans que les tests correspondants n'aient été inclus dans la suite automatisée.",
  },
  {
    id: "tae4q22",
    domain: "Risques de déploiement et contingence",
    difficulty: "difficile",
    question: "Laquelle des affirmations suivantes est vraie concernant les tests dans un pipeline de déploiement CI/CD ?",
    options: [
      "Pour s'assurer que le SUT fonctionne, les tests dans un environnement de préproduction peuvent être réalisés",
      "Les tests ne sont pas exécutés en tant que pipeline distinct démarré une fois le déploiement réussi",
      "Étant donné que de nombreuses suites de tests automatisées seront exécutées à chaque déploiement, les cas de test ne servent pas de critère de qualité",
      "Les tests ne sont pas exécutés dans le cadre de l'étape de déploiement",
    ],
    answer: [2],
    explanation:
      "Dans un contexte CI/CD, les tests automatisés sont exécutés fréquemment et visent à identifier rapidement les défauts, sans constituer le seul critère de validation de la qualité globale du produit.",
  },
  {
    id: "tae4q23",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Un TAS testant un système de paiement doit s'exécuter en deux heures maximum par nuit, mais son temps d'exécution est passé de une à cinq heures avec l'ajout de nouveaux tests. Comment réduiriez-vous le temps d'exécution ?",
    options: [
      "Créer de nouveaux cas de tests qui respectent la limite de deux heures d'exécution",
      "Éliminer les duplications",
      "Discuter avec les développeurs et le responsable des tests pour organiser une séance de brainstorming",
      "Retirer les tests qui nécessitent cinq heures pour être exécutés",
    ],
    answer: [2],
    explanation:
      "Une collaboration entre les équipes de développement, de test et de gestion permet d'identifier des optimisations possibles (parallélisation, suppression de redondances, priorisation des tests critiques) sans compromettre la couverture de test.",
  },
  {
    id: "tae4q24",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous automatisez les tests GUI d'un site de cours en ligne dont l'assistant d'inscription est en cours d'ajustements itératifs entre développeurs et testeurs d'utilisabilité, l'automatisation étant axée sur les tests de maintenance. Quel modèle de conception est le mieux implémenté ?",
    options: [
      "Mettre en œuvre le modèle façade et fournir des interfaces pour les éléments graphiques afin de masquer le mécanisme de localisation interne utilisé",
      "Mettre en œuvre le modèle Singleton et créer un code unique pour gérer la localisation des éléments",
      "Mettre en œuvre le modèle d'objet page et stocker toutes les actions utilisateur associées aux éléments graphiques dans les modèles de page concernés",
      "Mettre en œuvre le modèle de flux, stocker tous les éléments web dans les modèles de page concernés, et stocker toutes les actions utilisateur associées aux éléments graphiques dans les modèles de flux concernés",
    ],
    answer: [3],
    explanation:
      "Le modèle de flux combine modèles de pages et modèles de flux pour séparer structure et logique de l'application, offrant une flexibilité accrue lorsque l'interface change fréquemment, comme lors d'itérations de tests d'utilisabilité.",
  },
  {
    id: "tae4q25",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Votre objectif est de vérifier la cohérence, l'exhaustivité et le bon comportement d'une suite de tests automatisés dont le TAS s'installe correctement dans l'environnement du SUT. Lequel des critères suivants n'est pas pertinent pour atteindre votre objectif ?",
    options: [
      "Vérifier si le chargement du TAS est reproductible dans l'environnement du SUT",
      "Vérifier si tous les cas de test produisent des résultats reproductibles",
      "Vérifier si tous les cas de test contiennent les résultats attendus",
      "Vérifier si les post-conditions ont été remplies pour tous les cas de test",
    ],
    answer: [0],
    explanation:
      "Le fait que le TAS se charge correctement dans l'environnement n'est pas un critère essentiel pour vérifier la cohérence et l'exhaustivité des tests eux-mêmes ; ce qui compte est la reproductibilité des résultats et la validation des pré/post-conditions.",
  },
  {
    id: "tae4q26",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous gériez un framework d'automatisation dans une équipe de développement web. Une nouvelle équipe crée une nouvelle application et l'on vous demande de créer un framework d'automatisation en réutilisant les composants existants. Dans quelle couche configure-t-on la connexion à la nouvelle application ?",
    options: [
      "Couche de la logique métier",
      "Couche des scripts de test",
      "Couche des bibliothèques de base",
      "Couche des fichiers de fonctionnalités",
    ],
    answer: [2],
    explanation:
      "La couche des bibliothèques de base contient les composants fondamentaux et réutilisables du framework, responsables de configurer les outils et connexions nécessaires pour interagir avec l'application testée (initialisation WebDriver, appels API, connexion base de données).",
  },
  {
    id: "tae4q27",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Une suite de 300 tests est exécutée pour la première fois ; les 30 premiers passent mais le 31ème échoue de manière anormale et l'exécution est interrompue. Un rapport détaillé est demandé rapidement. Quelle est l'action la plus cruciale à prendre en premier lieu après l'échec ?",
    options: [
      "Créer une copie de sauvegarde de la base de données telle qu'elle est maintenant pour une analyse ultérieure",
      "Redémarrer la suite de tests automatisés depuis le premier test",
      "Remettre la base de données dans un état cohérent pour permettre l'exécution des tests suivants",
      "Redémarrer la suite de tests automatisés, en commençant par le test numéro 31",
    ],
    answer: [2],
    explanation:
      "Après un échec anormal, il est essentiel de restaurer l'environnement (notamment la base de données) à un état stable et cohérent avant de poursuivre l'exécution des tests suivants, garantissant la fiabilité des résultats.",
  },
  {
    id: "tae4q28",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous organisez le pilote d'un système d'automatisation de test interne (TAS). Pendant la phase de planification, considérant : a) examiner les projets actuels pour déterminer le mieux adapté au pilote, b) s'assurer de l'engagement des développeurs pour les activités de déploiement, c) organiser des séminaires de formation avant utilisation, d) créer un plan de projet et allouer fonds/ressources, e) demander aux développeurs d'ajouter les fonctionnalités manquantes lors du déploiement — quelles sont les deux actions cruciales à entreprendre ?",
    options: ["b et d", "a et d", "a et e", "c et d"],
    answer: [0],
    explanation:
      "Lors de la phase de planification, il est essentiel de s'assurer que les développeurs sont disponibles et impliqués dans le projet (b) et de créer un plan de projet solide incluant ressources et budget (d).",
  },
  {
    id: "tae4q29",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question: "Lequel des énoncés suivants n'est pas vrai au sujet des couches TAF (Test Automation Framework) ?",
    options: [
      "En introduisant une couche pour chaque objectif, la conception devient plus simple",
      "Le TAF est la fondation d'une solution d'automatisation des tests (TAS)",
      "Il est recommandé de garder le nombre de couches TAF faible",
      "Les couches TAF définissent une frontière distincte entre les classes",
    ],
    answer: [0],
    explanation:
      "Ajouter trop de couches complique en réalité la conception au lieu de la simplifier ; il est recommandé de garder un nombre réduit de couches bien définies pour faciliter la gestion et la maintenance du TAF.",
  },
  {
    id: "tae4q30",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "difficile",
    question:
      "Lors du premier sprint, votre suite de régression n'a produit aucun échec. Au deuxième sprint, plusieurs tests ont échoué à cause d'un défaut dans un script de mots-clés ; certains rapports de défauts ont été renvoyés par les développeurs demandant plus de détails. Quels éléments supplémentaires dans les journaux amélioreraient le mieux l'analyse des échecs ?",
    options: [
      "Un statut d'erreur TAS pour chaque test, en plus de « réussi » et « échoué »",
      "Un compteur qui suit le nombre d'exécutions de chaque test",
      "Utilisation d'un système de codage par couleur où le « réussi » est vert et le « échoué » est rouge",
      "Informations issues de mesures dynamiques du SUT",
    ],
    answer: [3],
    explanation:
      "Les rapports de défauts manquaient d'informations sur les mesures dynamiques du SUT, essentielles pour reproduire les échecs et analyser les performances du système pendant l'exécution des tests.",
  },
  {
    id: "tae4q31",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous évaluez un outil dont le tableau de bord et la journalisation sont utiles, mais qui a ralenti le SUT lors de la preuve de concept, bien que l'environnement de test réponde aux exigences. Quelle devrait être votre prochaine étape dans le choix de cet outil ?",
    options: [
      "Désactiver la journalisation des tests pour améliorer les performances de l'outil.",
      "Déplacer le SUT vers un environnement matériel/logiciel différent où la surcharge de l'outil peut être éliminée.",
      "Suggérer de ne pas utiliser cet outil.",
      "Augmenter les ressources matérielles du SUT afin de réduire la baisse de performances.",
    ],
    answer: [2],
    explanation:
      "Si un outil ralentit significativement le SUT malgré ses autres fonctionnalités utiles, il est préférable de ne pas le retenir, car cela pourrait nuire aux performances globales pendant les tests.",
  },
  {
    id: "tae4q32",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Pour la nouvelle version d'un SUT, trois nouvelles interfaces et dix interfaces modifiées seront livrées sur cinq sprints de deux semaines. Les tests doivent être automatisés autant que possible. Quelle serait la MEILLEURE conception pour la solution d'automatisation (TAS) ?",
    options: [
      "Automatiser les tests aux niveaux système et composant. N'automatiser cette automatisation que lorsque toutes les interfaces ont été complètement développées ou modifiées et que des tests manuels réussis ont été effectués",
      "Automatiser un test uniquement au niveau du composant. Pour ce niveau, où l'interface n'a pas encore été développée ou modifiée, créer une interface/test hook personnalisé",
      "Automatiser les tests aux niveaux système et composant. Pour les interfaces qui n'ont pas encore été développées ou modifiées, créer des hooks spécifiques au niveau du composant. Pour tester au niveau du système, utiliser uniquement les interfaces récemment créées ou modifiées",
      "N'automatiser que les tests au niveau du système. Ne pas créer d'interfaces ou de hooks de tests personnalisés ; utiliser uniquement les interfaces récemment créées",
    ],
    answer: [2],
    explanation:
      "Il est important d'automatiser à la fois au niveau du composant (parties spécifiques) et du système (intégration) ; pour les interfaces pas encore prêtes, des hooks de test simulent leur comportement en attendant leur disponibilité.",
  },
  {
    id: "tae4q33",
    domain: "Transition des tests manuels vers l'automatisation",
    difficulty: "difficile",
    question:
      "Vous rejoignez une entreprise où les tests manuels sont bien établis mais l'automatisation a été mise en veille. Les testeurs utilisent 30 à 50 variations par scénario. Les cas de test nécessitent une refonte complète mais le TAF peut être corrigé facilement. Quelle stratégie choisir pour obtenir des résultats rapidement ?",
    options: [
      "Tests pilotés par les données",
      "Développement piloté par les tests d'acceptation",
      "Capture/relecture",
      "Développement piloté par le comportement",
    ],
    answer: [0],
    explanation:
      "Les tests pilotés par les données conviennent lorsque de nombreuses variations de données sont utilisées dans les scénarios ; les données déjà générées par les testeurs peuvent être réutilisées pour multiplier les cas de test sans réécrire les scripts.",
  },
  {
    id: "tae4q34",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes ne favorise pas l'évolution, le développement et la maintenance simples du TAS ?",
    options: [
      "Tous les composants du TAS doivent être fermés à la modification mais ouverts à l'extension",
      "Chaque composant du TAS doit avoir une seule responsabilité",
      "Les composants du TAS doivent reposer sur des abstractions plutôt que sur des détails concrets",
      "Chaque composant du TAS doit avoir un parent abstrait de niveau supérieur",
    ],
    answer: [3],
    explanation:
      "Imposer un parent abstrait à chaque composant complique la structure et la maintenance du TAS ; il est préférable de suivre les principes SOLID avec des responsabilités claires et des abstractions appropriées, sans sur-ingénierie.",
  },
  {
    id: "tae4q35",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question: "Laquelle des considérations suivantes est importante pour la testabilité lors de la conception d'un SUT ?",
    options: ["Maintenabilité", "Transportabilité", "Interopérabilité", "Contrôlabilité"],
    answer: [3],
    explanation:
      "La contrôlabilité est cruciale car elle permet aux testeurs d'influencer ou de manipuler l'état du SUT pendant l'exécution des tests, facilitant les tests et le diagnostic des problèmes.",
  },
  {
    id: "tae4q36",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes ne décrit pas une bonne pratique pour la maintenance du TAS ?",
    options: [
      "La suite de tests, les artefacts de test et l'environnement de test dans lequel le TAS est exécuté doivent tous être gérés par la gestion de configuration",
      "Le TAS doit être composé de composants simples à remplacer sans affecter le bon fonctionnement général du TAS",
      "Le TAS doit garder les scripts de test séparés de l'environnement dans lequel ils s'exécutent, ainsi que des harnais et artefacts associés",
      "Étant donné que des compétences en programmation et en développement sont nécessaires pour maintenir le TAS, il doit fonctionner dans un environnement de développement",
    ],
    answer: [3],
    explanation:
      "Le TAS ne doit pas être maintenu dans l'environnement de développement, car cela peut entraîner des interférences et des problèmes de compatibilité avec l'environnement de test ; il doit rester isolé.",
  },
  {
    id: "tae4q37",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question: "Laquelle des caractéristiques suivantes décrit le mieux la caractéristique d'OBSERVABILITÉ ?",
    options: [
      "La capacité du SUT à effectuer sa tâche prévue pendant une durée déterminée",
      "La capacité à utiliser le SUT en entrant des données, en provoquant des événements et en appelant des procédures",
      "La capacité du SUT à protéger ses données et composants contre un accès non autorisé",
      "La capacité à reconnaître les états du SUT, ses sorties, résultats intermédiaires, et messages d'erreur",
    ],
    answer: [3],
    explanation:
      "L'observabilité se réfère à la capacité du SUT à permettre une observation facile de ses comportements internes pendant l'exécution des tests, ce qui permet de comprendre ce qui se passe à tout moment.",
  },
  {
    id: "tae4q38",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "En tant que TAE, l'outil d'exécution de tests utilisé avec succès sur 15 applications web ne parvient pas à reconnaître un objet utilisé dans toute une nouvelle application web à l'interface conviviale. Quelle action devez-vous prendre pour résoudre ce problème en premier ?",
    options: [
      "Demandez aux développeurs si l'objet peut être modifié en un objet standard afin que l'outil puisse le reconnaître",
      "Vérifiez si l'application peut être utilisée sur un bureau et si l'outil peut identifier l'objet dans cet environnement",
      "Demandez aux développeurs de supprimer l'objet et d'ajouter des champs de texte à la place",
      "Examinez si d'autres outils d'exécution de tests disponibles sur le marché peuvent identifier l'objet",
    ],
    answer: [0],
    explanation:
      "La solution la plus simple consiste à demander aux développeurs de modifier l'objet afin qu'il soit détecté par l'outil d'automatisation actuel, évitant d'investir dans de nouveaux outils ou frameworks.",
  },
  {
    id: "tae4q39",
    domain: "Risques de déploiement et contingence",
    difficulty: "moyen",
    question:
      "Un TAS stable est déployé sur plusieurs machines exécutant la même version du système d'exploitation. L'équipe infrastructure prévoit une mise à jour du système d'exploitation, garantissant qu'il n'y aura aucun impact sur le TAS. Quelle est la meilleure approche pour confirmer le bon fonctionnement du TAS ?",
    options: [
      "Vérifiez le comportement de l'ensemble de la suite de tests automatisés en exécutant tous les tests automatisés",
      "Vérifiez le comportement des tests automatisés en exécutant un petit ensemble de tests, puis exécutez progressivement les autres tests pour confirmer le bon fonctionnement de l'ensemble de la suite de tests automatisés",
      "Assurez-vous que l'équipe infrastructure a terminé l'installation du service pack sur les machines, puis exécutez l'ensemble de la suite de tests automatisés pour vérifier son comportement",
      "Ne pas exécuter de tests car vous pouvez immédiatement confirmer le bon fonctionnement de la suite de tests automatisés",
    ],
    answer: [1],
    explanation:
      "Il est préférable de commencer par un petit ensemble de tests pour s'assurer que la mise à jour n'a pas eu d'effets inattendus, avant d'exécuter l'ensemble complet des tests.",
  },
  {
    id: "tae4q40",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Laquelle des considérations suivantes doit être prise en compte en premier lors de l'automatisation des tests pour les nouvelles fonctionnalités avec une approche basée sur les mots-clés ?",
    options: [
      "Il est important d'analyser les mots-clés actuels pour déterminer s'ils peuvent être améliorés ou modifiés pour tester les nouvelles fonctionnalités",
      "Le logiciel pourrait maintenant se comporter différemment. En conséquence, il est probable que les modèles de comportement devront être ajustés",
      "De nouveaux mots-clés doivent être créés pour toute nouvelle fonctionnalité ou fonctionnalité modifiée",
      "Le développement de nouveaux mots-clés pour les tests doit être guidé par les défauts identifiés dans l'itération précédente du SUT",
    ],
    answer: [0],
    explanation:
      "Avant de créer de nouveaux mots-clés, il est judicieux de vérifier si les mots-clés existants peuvent être modifiés ou améliorés pour prendre en charge les nouvelles fonctionnalités, évitant ainsi une duplication inutile.",
  },
];
