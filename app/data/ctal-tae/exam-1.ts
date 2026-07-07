// ISTQB CTAL-TAE (Test Automation Engineer) — Examen blanc 1
// 40 questions converties depuis l'examen blanc source, réparties selon les 7
// chapitres du syllabus officiel CTAL-TAE v2.0.
import type { CTALTAEQuestion } from "./types";

export const EXAM_1_QUESTIONS: CTALTAEQuestion[] = [
  {
    id: "tae1q01",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question:
      "Pourquoi est-il crucial d'avoir des lignes directrices et des normes de nommage pour le TAS et les suites de tests ?",
    options: [
      "Cela facilite l'analyse et la maintenance.",
      "Cela facilite le processus de contrôle du logiciel dans et hors du contrôle de version.",
      "Cela facilite le processus par lequel d'autres équipes logicielles peuvent établir leurs propres directives de nommage.",
      "Cela garantit qu'un nom déjà utilisé ne sera pas réutilisé.",
    ],
    answer: [0],
    explanation:
      "Des lignes directrices et conventions de nommage claires permettent de maintenir une cohérence dans le TAS et facilitent l'analyse et la maintenance des scripts, surtout dans les projets de grande envergure impliquant plusieurs équipes.",
  },
  {
    id: "tae1q02",
    domain: "Transition des tests manuels vers l'automatisation",
    difficulty: "moyen",
    question:
      "Quel facteur est le plus important à prendre en compte lors de la transition des tests manuels aux tests automatisés ?",
    options: [
      "Le pourcentage de couverture du SUT représenté par les tests.",
      "La structure existante des tests manuels.",
      "La disponibilité des outils dans l'environnement de test.",
      "Le nombre de testeurs manuels disponibles.",
    ],
    answer: [1],
    explanation:
      "La structure des tests manuels est déterminante : bien organisée, elle facilite la conversion vers l'automatisation, alors que des tests manuels désorganisés nécessitent souvent un remaniement complet avant automatisation.",
  },
  {
    id: "tae1q03",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Quel élément du processus de transition des tests manuels aux tests automatisés est le plus crucial pour réduire le risque de développer du code non testable ou de ne pas respecter les normes tout au long de la phase de développement ?",
    options: [
      "L'opérationnalité des outils de tests spécifiques dans l'environnement de test.",
      "L'acceptation d'un projet pilote avec une portée limitée en automatisation des tests.",
      "La collaboration entre les développeurs et les ingénieurs en automatisation des tests.",
      "L'exactitude et l'exhaustivité des cas de tests manuels et des données.",
    ],
    answer: [2],
    explanation:
      "Les ingénieurs en automatisation et les développeurs doivent collaborer étroitement dès la phase de développement pour que le code soit conçu de façon testable, en tenant compte des contraintes de l'automatisation.",
  },
  {
    id: "tae1q04",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question:
      "Laquelle des affirmations suivantes est une limitation de l'automatisation des tests ?",
    options: [
      "L'automatisation des tests ne peut vérifier que des résultats qui peuvent être vérifiés par code.",
      "Les tests d'utilisabilité peuvent être automatisés efficacement.",
      "L'automatisation des tests ne peut être exécutée qu'après la mise en œuvre et le déploiement du système sous test (SUT).",
      "L'automatisation des tests ne peut vérifier que des résultats visuellement vérifiables.",
    ],
    answer: [0],
    explanation:
      "L'automatisation est limitée aux résultats quantifiables et observables par le système (données, réponses, résultats de scripts). Les aspects subjectifs comme l'utilisabilité ne peuvent pas être évalués automatiquement.",
  },
  {
    id: "tae1q05",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Comment l'intelligence artificielle peut-elle aider dans la collecte et l'analyse des données ?",
    options: [
      "L'IA permet aux ingénieurs en automatisation de tests (TAEs) d'identifier et de sélectionner les cas de tests fragiles et de les refactorer avec des améliorations supplémentaires.",
      "L'IA peut établir un processus de récupération d'erreur pour le TAS et le SUT.",
      "L'IA peut vérifier si une réponse correspond aux spécifications commerciales réelles.",
      "L'IA peut détecter si un sélecteur donné a été modifié par rapport à celui utilisé.",
    ],
    answer: [3],
    explanation:
      "L'IA est particulièrement utile pour surveiller les modifications d'interface, comme les changements de sélecteurs d'éléments UI, ce qui permet de détecter automatiquement les changements de structure HTML et de réduire le temps de maintenance.",
  },
  {
    id: "tae1q06",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Un outil de capture-rejeu open-source bien connu pour les tests fonctionnels automatisés est un composant clé de la solution d'automatisation des tests (TAS) de votre entreprise. Pour cette TAS, quelles deux actions suivantes l'ingénieur en automatisation des tests (TAE) doit-il garantir ? Sélectionnez deux options.",
    options: [
      "Il est crucial d'obtenir les détails des mises à jour et des nouvelles versions pour maintenir l'outil tiers à jour.",
      "Vérifiez que le framework de l'outil incorpore les scripts de test TAS.",
      "Assurez-vous que l'outil n'a pas été modifié, car les produits tiers ne peuvent pas être modifiés.",
      "Le fournisseur de l'outil et l'entreprise s'entendent sur les frais annuels de support et de maintenance.",
      "La gestion de la configuration prend en charge l'outil tiers.",
    ],
    answer: [0, 4],
    explanation:
      "Avec un outil tiers, il est essentiel de suivre les mises à jour et nouvelles versions et de gérer l'outil via la gestion de configuration, afin d'éviter les incompatibilités lors des mises à jour de l'environnement.",
  },
  {
    id: "tae1q07",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question:
      "Pourquoi est-il conseillé de limiter les fausses alertes dans l'automatisation des tests ?",
    options: [
      "Pour garantir qu'il n'y ait pas de défauts",
      "Afin d'augmenter la couverture des tests",
      "Afin de réduire le temps d'exécution",
      "Pour maintenir la confiance dans le système d'automatisation des tests",
    ],
    answer: [3],
    explanation:
      "Trop de faux échecs (fausses alertes) réduisent la confiance dans le TAS ; il est donc important de limiter les fausses alertes pour préserver la crédibilité des résultats de tests automatisés.",
  },
  {
    id: "tae1q08",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Depuis deux ans, votre équipe travaille à la création d'une architecture d'automatisation des tests (TAA) qui permet à des systèmes d'automatisation des tests (TAS) de tirer parti des composants spécifiques du système d'exploitation sur des serveurs Apple. Le projet était prévu pour durer au moins cinq ans. Vous découvrez maintenant que l'entreprise prévoit de passer à des serveurs Dell l'année prochaine. Que devriez-vous faire pour la TAA ?",
    options: [
      "Examiner comment l'abstraction peut protéger la TAA contre les modifications du système d'exploitation.",
      "Ne rien faire et attendre que les nouveaux serveurs tombent en panne avant d'apporter des corrections.",
      "Modifier la TAA pour utiliser les fonctionnalités du système d'exploitation Dell au lieu des fonctionnalités du système d'exploitation Apple.",
      "Adapter progressivement le TAS à utiliser les fonctionnalités du système d'exploitation Dell au fur et à mesure que chaque projet migre.",
    ],
    answer: [0],
    explanation:
      "L'abstraction dans une architecture d'automatisation rend le TAS indépendant des changements de plateforme matérielle ou de système d'exploitation, évitant de redévelopper la totalité du TAS à chaque changement.",
  },
  {
    id: "tae1q09",
    domain: "Risques de déploiement et contingence",
    difficulty: "moyen",
    question: "Quel risque de déploiement peut être identifié à partir du pilote ?",
    options: [
      "Le système d'automatisation des tests ne peut pas capturer les objets non standard",
      "De nouveaux livrables SUT peuvent entraîner un mauvais fonctionnement du TAS",
      "L'utilisation de la mémoire vive aléatoire",
      "Retards dans l'introduction de l'automatisation",
    ],
    answer: [2],
    explanation:
      "L'utilisation de la mémoire vive peut constituer un risque de déploiement si elle n'est pas gérée correctement, les systèmes pouvant manquer de ressources et provoquer des interruptions lors de tests prolongés.",
  },
  {
    id: "tae1q10",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "Quel type de test automatisé est le plus souvent utilisé dans l'environnement de préproduction ?",
    options: [
      "Tests d'intégration.",
      "Analyse statique.",
      "Tests de composants.",
      "Tests d'acceptation utilisateur.",
    ],
    answer: [3],
    explanation:
      "L'environnement de préproduction valide le comportement de bout en bout du système, ce qui inclut généralement des tests d'acceptation utilisateur automatisés avant la mise en production.",
  },
  {
    id: "tae1q11",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question:
      "Comment la synchronisation des journaux avec des horodatages peut-elle aider à corréler ce qui s'est passé lorsqu'une erreur a été signalée ?",
    options: [
      "Cela permet d'organiser les journaux dans un ordre chronologique",
      "Cela permet d'identifier les différences dans les journaux",
      "Cela permet de lier des événements entre les journaux",
      "Cela permet de faciliter la navigation dans le contenu du journal",
    ],
    answer: [2],
    explanation:
      "Les horodatages permettent de relier les événements capturés par le TAS et par le SUT afin de déterminer ce qui s'est passé au même moment dans les deux systèmes lors d'une erreur.",
  },
  {
    id: "tae1q12",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question: "Quelle n'est pas une façon de publier les rapports d'exécution des tests ?",
    options: [
      "Les stocker dans une armoire à dossiers verrouillée.",
      "Les envoyer à un outil de gestion des tests.",
      "Les publier sur un site Web.",
      "Les envoyer à une liste de diffusion.",
    ],
    answer: [0],
    explanation:
      "Les rapports d'exécution des tests doivent être accessibles numériquement pour être consultés et partagés facilement ; les stocker physiquement dans une armoire n'est ni efficace ni une pratique courante.",
  },
  {
    id: "tae1q13",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Pour produire un jeton et se connecter au système testé, l'automatisation des tests doit utiliser des identifiants qui sont déclarés dans le script de code. Que pourrait-on faire de mieux lors de la maintenance ?",
    options: [
      "Les valeurs des identifiants stockées dans le code de test doivent être anonymisées.",
      "Exporter les identifiants du code de test vers un stockage sécurisé auquel on peut accéder à l'exécution.",
      "Supprimer les identifiants du contrôle de version pour les rendre inaccessibles.",
      "Laisser les identifiants dans le code puisque nous en avons besoin pour nous connecter au système sous test.",
    ],
    answer: [1],
    explanation:
      "Les données sensibles comme les identifiants ne doivent pas être codées en dur dans les scripts ; il est préférable de les stocker dans un espace sécurisé (type Vault) et de les récupérer dynamiquement à l'exécution.",
  },
  {
    id: "tae1q14",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question: "Quel type de test ne peut pas être effectué manuellement ?",
    options: ["Test de système", "Test en parallèle", "Test fonctionnel", "Test de régression"],
    answer: [1],
    explanation:
      "Les tests parallèles impliquent l'exécution simultanée de plusieurs tests sur différents environnements, ce qui nécessite des ressources automatisées et est pratiquement impossible à réaliser manuellement.",
  },
  {
    id: "tae1q15",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Il vous incombe de mettre en place une automatisation des tests pour un système qui effectue les tâches suivantes : recevoir des messages de périphériques matériels, utiliser un moteur de règles pour traiter les messages d'erreur, envoyer des suggestions par email pour des mises à jour ou des ajustements de configuration à l'administrateur du système. Après avoir examiné les autres options d'automatisation des tests, vous avez découvert que le moteur de règles vous permet d'automatiser la réception et le traitement des messages. Quelle approche est la meilleure à utiliser pour la définition des tests ?",
    options: [
      "Script structuré.",
      "Script de capture/rejeu.",
      "Script linéaire.",
      "Script basé sur les données.",
    ],
    answer: [3],
    explanation:
      "Les données des messages étant essentielles au fonctionnement du système, un script basé sur les données permet de couvrir efficacement différents scénarios en changeant uniquement les données d'entrée, sans modifier les scripts.",
  },
  {
    id: "tae1q16",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question:
      "Lorsqu'un système est conçu pour être testable, l'une des caractéristiques est que le framework d'automatisation des tests (TAF) peut accéder aux interfaces pour effectuer des actions sur le système. Comment appelle-t-on cette caractéristique ?",
    options: ["Maintenabilité", "Observabilité", "Contrôlabilité", "Interopérabilité"],
    answer: [2],
    explanation:
      "La contrôlabilité signifie que le framework de test peut interagir directement avec le système, par exemple en simulant des actions utilisateur ou en forçant des états spécifiques pour valider son comportement.",
  },
  {
    id: "tae1q17",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Quel est le principal problème de l'utilisation de l'abstraction dans l'architecture d'automatisation des tests (TAA) ?",
    options: [
      "Le coût des investissements initiaux.",
      "Elle améliore les performances du TAS.",
      "Elle rend le système plus polyvalent pour l'avenir.",
      "Elle ne garantit pas que toutes les approches de script seront prises en charge.",
    ],
    answer: [0],
    explanation:
      "L'abstraction dans la TAA offre une plus grande indépendance face aux changements technologiques, mais son principal inconvénient reste le coût des investissements initiaux nécessaires à sa mise en place.",
  },
  {
    id: "tae1q18",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Quelle amélioration du TAS, si elle n'est pas contrôlée, pourrait avoir le plus grand impact négatif sur la capacité de la solution à évoluer et à être maintenue ?",
    options: [
      "Les composants du TAS",
      "Les outils d'exécution du TAS",
      "Les outils de reporting du TAS",
      "La documentation du TAS",
    ],
    answer: [3],
    explanation:
      "La documentation de l'architecture, des composants et des versions du TAS est essentielle pour garantir sa maintenabilité à long terme ; son absence complique fortement l'intégration de nouveaux membres et l'évolution du système.",
  },
  {
    id: "tae1q19",
    domain: "Risques de déploiement et contingence",
    difficulty: "difficile",
    question:
      "En tant qu'ingénieur en automatisation des tests, vous travaillez sur un système sous test (SUT) qui fonctionnera sur plusieurs plateformes. Pour chacune de ces plateformes, une suite de tests automatisée doit être exécutée en utilisant la même version du framework d'automatisation des tests (TAF) contre la même version du SUT, et chaque plateforme doit disposer de son propre environnement spécifiquement conçu pour elle. Quels sont les deux éléments les plus importants pour atteindre cet objectif ? Sélectionnez deux éléments.",
    options: [
      "Le TAF stocke les logs nécessaires au débogage des erreurs au format XML",
      "Les résultats anticipés sont présents dans chaque scénario de test automatisé",
      "La configuration du TAS utilise des scripts d'installation automatisés",
      "La gestion de la configuration est en place pour les composants du TAS",
    ],
    answer: [2, 3],
    explanation:
      "Pour garantir une exécution cohérente du TAF sur plusieurs plateformes avec la même version du SUT, il faut automatiser l'installation des composants via des scripts d'installation et gérer rigoureusement leurs versions au moyen de la gestion de configuration.",
  },
  {
    id: "tae1q20",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous travaillez pour une entreprise informatique qui développe un système multimédia de santé intégré sur ordinateur de bureau. Le logiciel est constitué de plusieurs composants interconnectés. Le développement piloté par les tests est la méthodologie utilisée par les développeurs. Après sa création, le logiciel est envoyé à une autre entreprise informatique qui le combine avec des composants matériels et le commercialise auprès d'organisations de santé. Que faut-il prendre en compte lors de la définition des exigences pour l'automatisation des tests ?",
    options: [
      "La stratégie d'automatisation des tests doit-elle prendre en charge l'approbation des logiciels de bureau ?",
      "La stratégie d'automatisation des tests doit-elle soutenir les tests bêta ?",
      "Est-il crucial que la stratégie d'automatisation des tests prenne en charge les tests des composants ?",
      "La méthodologie d'automatisation des tests doit-elle faciliter les tests logiciels sur un large éventail de systèmes de santé ?",
    ],
    answer: [2],
    explanation:
      "L'objectif principal est de vérifier que chaque composant interconnecté du logiciel fonctionne correctement avant que le produit ne soit combiné avec du matériel par une autre entreprise ; la stratégie doit donc impérativement prendre en charge les tests de composants.",
  },
  {
    id: "tae1q21",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question:
      "Périodiquement, un site e-learning rencontre des problèmes de performance. Comment l'automatisation des tests devrait-elle être utilisée pour traiter ce problème ?",
    options: [
      "Exécuter en continu des scripts de tests de performance tout en surveillant la production.",
      "Pour éviter les défauts de performance, augmenter la couverture des tests unitaires.",
      "Pour éviter les défauts de performance, augmenter la couverture des tests système.",
      "Pour déterminer les limites de capacité, créer un grand nombre d'utilisateurs virtuels.",
    ],
    answer: [3],
    explanation:
      "Les tests de performance visent à simuler un grand nombre d'utilisateurs virtuels afin d'identifier les limites de capacité du système avant que les problèmes n'affectent les utilisateurs réels.",
  },
  {
    id: "tae1q22",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "En raison de problèmes urgents qui doivent être résolus, vous déployez un TAS au milieu du projet. Quel est le principal risque que ce calendrier de déploiement apporte avec lui ?",
    options: [
      "Chaque membre de l'équipe apprend à utiliser le TAS.",
      "Temps insuffisant pour des tests et ajustements",
      "Intégration transparente avec chaque autre projet immédiatement.",
      "Augmentation des coûts du TAS.",
    ],
    answer: [1],
    explanation:
      "Déployer un TAS en milieu de projet laisse peu de temps pour le tester et l'ajuster correctement, ce qui peut provoquer des interruptions et des inefficacités dans le projet en cours.",
  },
  {
    id: "tae1q23",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question:
      "Comment la couleur est-elle utilisée de la meilleure manière dans les rapports d'exécution de tests automatisés ?",
    options: [
      "Les couleurs doivent être utilisées de manière cohérente pour indiquer différents types de statut.",
      "Donner à chaque testeur une couleur pour l'aider à reconnaître son travail.",
      "Donner à chaque cas de test une couleur pour faciliter leur reconnaissance.",
      "Les couleurs doivent être utilisées de manière arbitraire pour mettre en évidence les informations.",
    ],
    answer: [0],
    explanation:
      "L'utilisation cohérente des couleurs (par exemple rouge pour échec, vert pour succès) permet une lecture rapide et intuitive des rapports d'exécution des tests.",
  },
  {
    id: "tae1q24",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question:
      "Le fournisseur de l'outil commercial d'automatisation des tests cessera bientôt de fournir du support. Comment devriez-vous aborder cette situation ?",
    options: [
      "Pour une aide personnalisée plus coûteuse, contactez le vendeur.",
      "Comme le support de l'outil touche à sa fin, arrêtez d'utiliser l'automatisation des tests.",
      "Passez à un outil open-source pour toute l'automatisation des tests.",
      "Élaborez un plan pour passer progressivement à un outil pris en charge.",
    ],
    answer: [3],
    explanation:
      "Il est essentiel d'utiliser un outil disposant d'un support actif ; en cas d'arrêt du support, il faut planifier une transition progressive vers un nouvel outil pour éviter les problèmes futurs.",
  },
  {
    id: "tae1q25",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "La solution sur laquelle vous travaillez s'appelle « Banque pour les entreprises ». Ce système est mis en place pour réduire les comportements frauduleux des entreprises lorsqu'elles soumettent leurs documents aux banques, ainsi que pour empêcher les erreurs manuelles d'entrée de données. La direction souhaite maintenant ajouter facilement des cas de test, réduire le nombre de scripts et les duplications, et réduire les coûts de maintenance. Quelle technique de script serait la plus adaptée pour répondre à ces objectifs ?",
    options: [
      "Script structuré.",
      "Script basé sur des mots-clés.",
      "Script linéaire.",
      "Script basé sur les données.",
    ],
    answer: [1],
    explanation:
      "Le script basé sur des mots-clés permet de réduire les duplications, de faciliter l'ajout de nouveaux cas de test et de diminuer les coûts de maintenance en réutilisant des composants existants.",
  },
  {
    id: "tae1q26",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "Lorsque vous exécutez pour la première fois une suite de tests entièrement automatisée contre un candidat à la version, dans quel environnement cela se fait-il généralement ?",
    options: [
      "Environnement de build.",
      "Environnement de préproduction / mise en scène.",
      "Environnement de production / opérationnel.",
      "Environnement d'intégration / de test.",
    ],
    answer: [3],
    explanation:
      "L'environnement d'intégration est conçu pour tester la totalité du système avant son déplacement vers les environnements de préproduction ou de production.",
  },
  {
    id: "tae1q27",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous êtes chargé de mettre en place l'automatisation des tests pour un système qui doit effectuer plusieurs tâches, dont l'envoi de suggestions par email. Vous découvrez que le TAS permet d'automatiser la réception et le traitement des messages, mais qu'il ne peut pas récupérer l'email du serveur et confirmer l'exactitude de la recommandation. Que devriez-vous faire pour avoir une solution d'automatisation complète ?",
    options: [
      "Rechercher un outil supplémentaire capable de gérer la validation des emails.",
      "Faire livrer les emails à votre compte email pour les vérifier manuellement.",
      "Chercher un nouvel outil capable d'effectuer toutes les tâches requises.",
      "Confirmer l'exactitude du traitement des règles et supposer que l'email sera créé correctement.",
    ],
    answer: [0],
    explanation:
      "Si le TAS actuel ne peut pas effectuer une tâche spécifique, il est préférable de trouver un outil complémentaire pour combler cette lacune plutôt que de changer toute la solution d'automatisation existante.",
  },
  {
    id: "tae1q28",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous travaillez sur un projet qui intègre un logiciel développé en interne (produit point de vente) avec un logiciel tiers de comptabilité. La communication entre les deux produits s'effectue par des fichiers batch et des API. Quelle approche automatisée est la plus adaptée pour tester les systèmes tiers ?",
    options: [
      "Les tests devraient se concentrer sur l'API utilisée pour transmettre les données au package tiers afin de garantir que les données sont correctement traitées.",
      "L'automatisation des tests n'est pas nécessaire car elle aurait dû être testée par les développeurs tiers.",
      "Les tests devraient se concentrer sur la fonctionnalité de reporting du package de comptabilité, car c'est le logiciel le plus important pour votre entreprise.",
      "Les tests devraient se limiter aux fichiers batch préparés par le produit point de vente pour s'assurer que les données correctes sont incluses.",
    ],
    answer: [0],
    explanation:
      "Les API constituent le point crucial d'échange de données entre systèmes tiers ; tester leur fonctionnement garantit l'intégrité des données échangées entre les deux logiciels.",
  },
  {
    id: "tae1q29",
    domain: "Risques de déploiement et contingence",
    difficulty: "difficile",
    question:
      "Vous êtes prêt à mettre en place un système d'automatisation des tests au sein de l'entreprise, qui a échoué à plusieurs reprises par le passé faute de temps. Votre direction vous a informé que ce serait la dernière tentative pour mettre en place un système d'automatisation des tests dans toute l'entreprise. Quelle action devez-vous entreprendre pour vous assurer que la nouvelle solution ne soit pas un échec ?",
    options: [
      "Pour éviter tout retard dans le déploiement de la solution d'automatisation des tests, fournir suffisamment de licences à l'avance pour tous les utilisateurs",
      "Choisir un projet que l'entreprise considère comme mineur et sans importance pour éviter les problèmes de livraison ou financiers en cas de retard",
      "Le système d'automatisation des tests sera déployé et tous les projets recevront une formation en une seule fois",
      "Pour garantir une utilisation cohérente, définir et publier des lignes directrices pour l'utilisation de la solution d'automatisation des tests",
    ],
    answer: [3],
    explanation:
      "Définir et publier des lignes directrices, checklists et FAQ pour l'utilisation du TAS prévient les questions de support inutiles et assure une utilisation cohérente entre les équipes, réduisant le risque d'échec du déploiement.",
  },
  {
    id: "tae1q30",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Quel contrôle de vérification de la suite de tests fournit un retour rapide sur les nouvelles fonctionnalités des outils de test ?",
    options: [
      "Vérification qu'il y a suffisamment de points de vérification dans la suite de tests automatisée.",
      "Vérification des nouveaux tests qui se concentrent sur les nouvelles fonctionnalités du framework.",
      "Vérification de l'intrusivité des outils de test automatisés.",
      "Vérification de l'exhaustivité de la suite de tests.",
    ],
    answer: [1],
    explanation:
      "Lorsque de nouvelles fonctionnalités sont ajoutées au framework, il est essentiel de les tester rapidement et spécifiquement pour s'assurer de leur bon fonctionnement avant de les intégrer à la suite complète.",
  },
  {
    id: "tae1q31",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question:
      "Laquelle des affirmations suivantes décrit le mieux la relation entre l'amélioration continue et le cycle de vie du TAS ?",
    options: [
      "L'amélioration continue n'a de sens que lors de la mise en place initiale du TAS.",
      "L'amélioration continue est une activité ponctuelle qui se déroule annuellement.",
      "L'amélioration continue n'a de sens que lorsque le TAS rencontre des lacunes.",
      "L'amélioration continue est liée au cycle de vie du TAS et nécessite des analyses et des ajustements réguliers.",
    ],
    answer: [3],
    explanation:
      "Le TAS doit évoluer en permanence en fonction des besoins changeants du projet et des nouvelles technologies, ce qui exige des analyses et des ajustements réguliers pour rester efficace.",
  },
  {
    id: "tae1q32",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question:
      "Quel mécanisme d'attente peut être à l'origine de nombreux défauts d'automatisation des tests ?",
    options: [
      "Mécanisme d'événements.",
      "Attente dynamique par sondage.",
      "Attente explicite.",
      "Attentes codées en dur.",
    ],
    answer: [3],
    explanation:
      "Les attentes codées en dur ne tiennent pas compte de la variabilité des temps de réponse du système et provoquent des échecs de tests inutiles lorsque le système met plus de temps que prévu à répondre.",
  },
  {
    id: "tae1q33",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Quelle affirmation est vraie à propos de l'automatisation des tests et du cycle de vie du développement logiciel ?",
    options: [
      "Dans le modèle en V, l'implémentation de l'automatisation des tests est effectuée tout au long du cycle de développement logiciel.",
      "Dans le développement Agile, les tests automatisés se concentrent davantage sur les tests de composants que sur les tests d'acceptation.",
      "Dans le modèle en V, l'exécution des tests automatisés doit être effectuée après les tests manuels.",
      "Dans le développement Agile, les tests automatisés se concentrent davantage sur les tests d'acceptation que sur les tests de composants.",
    ],
    answer: [1],
    explanation:
      "Dans un environnement Agile, les tests automatisés sont souvent orientés vers les tests de composants afin de valider rapidement les petites unités de code avant d'exécuter des tests plus globaux comme les tests d'acceptation.",
  },
  {
    id: "tae1q34",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "moyen",
    question:
      "Lequel des éléments suivants ne doit pas être mentionné dans un rapport d'avancement des tests pour une suite de tests automatisés ?",
    options: [
      "L'environnement dans lequel les tests sont effectués.",
      "Les grappes de défauts identifiées lors de l'exécution des tests.",
      "Un résumé des résultats de l'exécution des tests.",
      "Le système sous test (SUT) et sa version.",
    ],
    answer: [1],
    explanation:
      "Les grappes de défauts relèvent de l'analyse détaillée des défauts et ne sont pas un élément central d'un rapport d'avancement des tests automatisés, qui doit se concentrer sur l'état actuel de l'exécution.",
  },
  {
    id: "tae1q35",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "moyen",
    question: "Quelle est la meilleure définition de l'utilisation prévue d'un rapport d'exécution des tests ?",
    options: [
      "Évaluer la couverture du référentiel de tests par la suite de tests.",
      "Identifier les points problématiques du SUT en maintenant un historique des cas de tests échouant le plus fréquemment.",
      "Déterminer quelle étape de test a échoué dans un cas de test.",
      "Capturer les étapes suivies pour résoudre un échec de test.",
    ],
    answer: [1],
    explanation:
      "Un rapport d'exécution des tests sert avant tout à repérer les zones à risque du SUT en conservant un historique des cas de test échouant le plus souvent, orientant ainsi les efforts de test et de correction.",
  },
  {
    id: "tae1q36",
    domain: "Transition des tests manuels vers l'automatisation",
    difficulty: "moyen",
    question:
      "Que doit-il arriver aux testeurs manuels lorsque l'entreprise passe des tests manuels aux tests automatisés ?",
    options: [
      "Ils doivent être informés qu'à la fin de l'année, ceux qui ne sont pas capables de programmer ne seront probablement plus employés en raison du changement de paradigme.",
      "Ils doivent être informés que leurs connaissances seront toujours nécessaires tout en leur offrant des cours de programmation.",
      "Une formation à la programmation doit leur être donnée pour qu'ils puissent écrire des scripts.",
      "Ils doivent être progressivement éliminés.",
    ],
    answer: [1],
    explanation:
      "Les compétences des testeurs manuels restent précieuses même dans un environnement automatisé ; leur offrir une formation en programmation les aide à comprendre les scripts et à collaborer efficacement avec l'équipe d'automatisation.",
  },
  {
    id: "tae1q37",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Quel élément suivant n'est pas nécessaire à prendre en compte lors de la sélection des outils de test ?",
    options: [
      "La composition et l'expérience de l'équipe de test",
      "La licence et le support de l'outil de test",
      "L'architecture du SUT",
      "La qualité des exigences du SUT",
    ],
    answer: [3],
    explanation:
      "La qualité des exigences du SUT n'influence pas directement le choix d'un outil de test ; ce sont plutôt la compatibilité avec l'architecture du système et la disponibilité du support qui sont déterminantes.",
  },
  {
    id: "tae1q38",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Le système d'automatisation des tests (TAS) de votre organisation utilise des scripts basés sur des mots-clés. L'architecte d'automatisation a quitté l'entreprise. Le TAS comprend de nombreuses bibliothèques de mots-clés organisées par projet et utilisées dans plusieurs projets. Quelle approche de réduction des risques est la meilleure pour ce TAS ?",
    options: [
      "Pour réduire l'abstraction, imposer que tous les scripts de test soient créés en utilisant des données plutôt que des mots-clés.",
      "Plutôt que de laisser chaque équipe de projet gérer la maintenance des scripts, établir une équipe centrale dédiée à la maintenance des scripts.",
      "Documenter l'architecture du TAS et sa méthodologie d'abstraction pour faciliter la maintenance à l'avenir.",
      "Spécifier les normes de codage que tous les utilisateurs du TAS doivent respecter.",
    ],
    answer: [2],
    explanation:
      "Lorsque l'architecte quitte l'entreprise, documenter en détail l'architecture et la méthodologie d'abstraction du TAS est essentiel pour que les équipes futures puissent comprendre et maintenir l'infrastructure sans blocage.",
  },
  {
    id: "tae1q39",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "En raison de problèmes urgents qui doivent être résolus, vous déployez un TAS au milieu du projet. Quel est le principal risque que ce calendrier de déploiement apporte avec lui ?",
    options: [
      "Intégration transparente avec chaque autre projet immédiatement",
      "Temps insuffisant pour des tests et ajustements appropriés",
      "Augmentation des coûts du TAS",
      "Chaque membre de l'équipe apprend à utiliser le TAS",
    ],
    answer: [2],
    explanation:
      "Un nouveau TAS ou une nouvelle version déployé au milieu d'un projet, en réponse à des problèmes urgents, entraîne généralement une augmentation des coûts liés aux ajustements imprévus et aux interruptions du projet.",
  },
  {
    id: "tae1q40",
    domain: "Transition des tests manuels vers l'automatisation",
    difficulty: "facile",
    question:
      "Quelle des raisons suivantes ne justifie PAS le passage des tests manuels aux tests automatisés ?",
    options: [
      "Les tests manuels peuvent prendre plus de temps à exécuter que les tests automatisés.",
      "Il n'est pas nécessaire de maintenir les tests automatisés.",
      "Les résultats des tests automatisés peuvent être plus répétables et cohérents.",
      "Les tests de régression peuvent être plus efficaces avec l'automatisation.",
    ],
    answer: [1],
    explanation:
      "Les tests automatisés nécessitent au contraire un entretien régulier, notamment lors des évolutions du système ou de ses fonctionnalités ; prétendre le contraire ne justifie donc pas la transition vers l'automatisation.",
  },
];
