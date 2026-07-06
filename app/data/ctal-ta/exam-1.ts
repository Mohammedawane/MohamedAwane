// ISTQB CTAL-TA (Advanced Level Test Analyst) — Examen blanc 1
// 40 questions converties depuis l'examen blanc source, réparties selon les 6
// chapitres du syllabus officiel CTAL-TA.
import type { CTALQuestion } from "./types";

export const EXAM_1_QUESTIONS: CTALQuestion[] = [
  {
    id: "ta1q01",
    domain: "Techniques de test",
    difficulty: "facile",
    question:
      "Laquelle des affirmations suivantes est VRAIE concernant l'utilisation de différentes techniques de test en boîte noire ?",
    options: [
      "Le partitionnement par équivalence est principalement utilisé pour s'assurer que toutes les valeurs possibles dans la plage d'entrée sont testées.",
      "L'analyse des valeurs limites est plus efficace lorsqu'elle est combinée avec les tests de tableau de décision.",
      "Le test de tableau de décision est le plus adapté pour tester des règles métier qui impliquent des combinaisons de conditions.",
      "Les tests de transition d'état ne peuvent pas être utilisés pour les systèmes où le logiciel peut être dans différents états.",
    ],
    answer: [2],
    explanation:
      "Le test de tableau de décision est la technique la plus adaptée pour couvrir systématiquement des règles métier complexes impliquant plusieurs conditions. Le partitionnement d'équivalence ne vise pas à tester toutes les valeurs mais des représentants par classe, et les tests de transition d'état sont au contraire conçus pour les systèmes multi-états.",
  },
  {
    id: "ta1q02",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un analyste de test travaille sur un projet aux exigences ambiguës et adopte les tests exploratoires comme approche principale. Lesquelles des options suivantes définissent ce dont il aura besoin pour mener ces sessions ? Sélectionnez DEUX options.",
    options: [
      "Mener des sessions de débriefing avec le responsable des tests ou un chef de test pour documenter les informations et les résultats des sessions de tests exploratoires.",
      "Enregistrer tous les défauts trouvés dans le système de gestion des défauts sans attribuer un statut de réussite/échec pour la session exploratoire afin d'éviter la duplication des résultats.",
      "Impliquer les utilisateurs finaux dans la réalisation des tests exploratoires et documenter leurs actions et retours pour les futurs cas de test.",
      "Acquérir des connaissances spécifiques au domaine pour guider efficacement les sessions de tests exploratoires.",
      "Enregistrer les résultats dans un e-mail et les transmettre au responsable des tests et au chef de test à des fins de documentation.",
    ],
    answer: [0, 3],
    explanation:
      "Les sessions de débriefing permettent de documenter précisément les découvertes et résultats d'une session exploratoire, tandis que la connaissance du domaine guide efficacement le testeur pour identifier des problèmes pertinents. Impliquer systématiquement les utilisateurs finaux ou se contenter d'un e-mail informel ne sont pas des pratiques recommandées pour structurer l'exploration.",
  },
  {
    id: "ta1q03",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Projet HIPPOS chez SecureLife (calculateur de primes d'assurance santé) : l'équipe Agile doit proposer une approche de test pour 4 user stories (calcul de primes, cohérence de l'UI, support de 4 navigateurs, sécurité au niveau des autres applications). Laquelle des propositions suivantes soutient le mieux ce scénario ?",
    options: [
      "Tests exploratoires comme technique principale ; pour US1, partition d'équivalence et analyse des valeurs limites ; une technique boîte noire supplémentaire pour US4.",
      "Tests exploratoires et tests basés sur les défauts comme techniques principales ; pour US1, tests de tables de décision ; tests d'adaptabilité pour US3 ; tests basés sur les attaques avec liste de contrôle pour US4.",
      "Tests exploratoires seuls comme technique principale ; pour US1, tests d'interopérabilité ; tests d'adaptabilité pour US3 ; tests basés sur les attaques pour US4.",
      "Techniques de test en boîte noire comme techniques principales ; pour US1, tests de transition d'état et analyse des valeurs limites ; tests exploratoires en supplément pour US4.",
    ],
    answer: [1],
    explanation:
      "La combinaison tests exploratoires + tests basés sur les défauts exploite l'historique des défauts pour cibler les zones à risque. Les tests de tables de décision couvrent les règles de calcul complexes (US1), les tests d'adaptabilité valident la compatibilité navigateurs (US3), et les tests basés sur les attaques avec liste de contrôle structurent la validation de sécurité (US4).",
  },
  {
    id: "ta1q04",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une application de santé réutilise des modules hérités et ajoute de nouvelles fonctionnalités de télémédecine et de facturation automatisée, développées avec un retour utilisateur minimal. Sur quelle caractéristique de qualité l'analyste de test doit-il se concentrer le PLUS ?",
    options: [
      "Correctitude fonctionnelle",
      "Compatibilité",
      "Confidentialité",
      "Complétude fonctionnelle",
    ],
    answer: [0],
    explanation:
      "Les nouvelles fonctionnalités critiques (télémédecine, facturation) nécessitent une validation approfondie de leur exactitude, car une erreur de calcul ou de logique aurait des conséquences directes sur les soins et la facturation des patients — la correctitude fonctionnelle prime avant même la compatibilité ou la confidentialité, supposées déjà couvertes par les modules hérités.",
  },
  {
    id: "ta1q05",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question:
      "Une application mobile doit fonctionner sur divers appareils Android avec différentes tailles d'écran et résolutions, en offrant une expérience utilisateur cohérente. Quel type de test effectue-t-on en vérifiant cela ?",
    options: [
      "Test de performance",
      "Test de compatibilité",
      "Test fonctionnel",
      "Test d'utilisabilité",
    ],
    answer: [1],
    explanation:
      "Le test de compatibilité vérifie que l'application fonctionne correctement sur différents appareils, résolutions et configurations matérielles — exactement le périmètre décrit ici, distinct des tests de performance ou d'utilisabilité.",
  },
  {
    id: "ta1q06",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Quel ensemble d'activités décrit le mieux ce sur quoi l'analyste de test doit se concentrer lors de la clôture des tests ?",
    options: [
      "Collecter les métriques de test, documenter les leçons apprises, finaliser la documentation de test, archiver les artefacts de test.",
      "Exécuter les cas de test restants, consigner les défauts finaux, finaliser la documentation de test, préparer le rapport de synthèse.",
      "Identifier les conditions de test, exécuter les tests finaux, préparer le rapport de synthèse, archiver les artefacts.",
      "Définir la stratégie de test, finaliser la documentation, documenter les leçons apprises, archiver les artefacts.",
    ],
    answer: [0],
    explanation:
      "La clôture des tests regroupe la collecte de métriques (efficacité du processus), la capitalisation des leçons apprises pour les projets futurs, la finalisation de la documentation et l'archivage du testware — ces quatre activités forment un ensemble complet et cohérent pour cette phase.",
  },
  {
    id: "ta1q07",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Laquelle des affirmations suivantes NE donne PAS une bonne raison pour laquelle les cas de test devraient être documentés et maintenus par l'analyste de test ?",
    options: [
      "Les cas de test fournissent une base pour évaluer le système par rapport à ses exigences et garantissent que toutes les fonctionnalités sont couvertes.",
      "Les cas de test documentés garantissent que les tests sont reproductibles et que les testeurs futurs peuvent comprendre et exécuter les tests.",
      "La maintenance des cas de test permet une identification facile des cas de test qui doivent être mis à jour lorsque les exigences changent.",
      "Les cas de test documentés servent de remplacement aux exigences détaillées et peuvent être utilisés pour définir la fonctionnalité du système.",
    ],
    answer: [3],
    explanation:
      "Les cas de test sont dérivés des exigences pour les vérifier ; ils ne doivent jamais remplacer une documentation d'exigences détaillée ni servir à définir la fonctionnalité du système. Les trois autres affirmations décrivent des bénéfices réels de la documentation des cas de test.",
  },
  {
    id: "ta1q08",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Laquelle des affirmations suivantes est INCORRECTE concernant les activités de planification des tests ?",
    options: [
      "Les analystes de test doivent définir des objectifs clairs et la portée de l'effort de test.",
      "Les analystes de test doivent élaborer un calendrier de test détaillé et affecter les ressources en conséquence.",
      "Les analystes de test doivent identifier les risques et développer des stratégies d'atténuation dans le cadre du plan de test.",
      "Les analystes de test doivent éviter d'impliquer les parties prenantes dans le processus de planification des tests pour maintenir l'indépendance.",
    ],
    answer: [3],
    explanation:
      "Impliquer les parties prenantes dans la planification des tests est au contraire crucial pour comprendre leurs attentes, couvrir toutes les exigences et prioriser correctement les risques. Éviter cette collaboration nuit à la qualité du plan de test.",
  },
  {
    id: "ta1q09",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Système d'adhésion à une bibliothèque à quatre niveaux basés sur des points accumulés (Bronze 1–50, Argent 51–200, Or 201–400, Platine >400). Les cas de test existants couvrent 45, 200, 201, 202 et 401. Quel est le pourcentage de couverture des valeurs limites déjà atteint ?",
    options: ["37,5 %", "50 %", "62,5 %", "75 %"],
    answer: [0],
    explanation:
      "Les 8 valeurs limites attendues sont 1, 50, 51, 200, 201, 400, 401 et une borne au-delà de 400. Parmi les valeurs testées (45, 200, 201, 202, 401), seules 200, 201 et 401 correspondent à des valeurs limites, soit 3 sur 8 = 37,5 %.",
  },
  {
    id: "ta1q10",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Une table de décision pour un contrôle d'accès (authentification, niveau d'accès Admin/User/Guest, période autorisée) a été conçue et validée pour couvrir 5 règles. Laquelle des affirmations suivantes sur la suite de tests couvrant ces 5 règles est CORRECTE ?",
    options: [
      "Les cas de test devraient avoir deux entrées : statut d'authentification et niveau d'accès.",
      "Les données de test devraient contenir au moins deux utilisateurs de niveaux d'accès différents : un Admin et un User.",
      "La suite de tests devrait contenir au moins trois cas de test différents avec niveau d'accès = Guest couvrant les trois résultats possibles.",
      "Tout cas de test avec une entrée consistant en statut d'authentification, niveau d'accès et temps de demande couvrira exactement une règle du tableau de décision.",
    ],
    answer: [3],
    explanation:
      "La table comporte trois conditions (authentification, niveau d'accès, période autorisée) ; chaque combinaison spécifique de ces trois entrées correspond à exactement une règle et ses actions associées. Les autres options sous-estiment le nombre d'entrées nécessaires ou mal répartissent les scénarios Guest.",
  },
  {
    id: "ta1q11",
    domain: "Gestion des défauts",
    difficulty: "facile",
    question:
      "Lesquels des facteurs suivants sont utilisés pour évaluer l'impact d'un défaut logiciel ?",
    options: [
      "Coût et calendrier",
      "Exigences et conception",
      "Probabilité et gravité",
      "Mise en œuvre et test",
    ],
    answer: [2],
    explanation:
      "La probabilité (risque d'occurrence) et la gravité (impact/sévérité) sont les deux facteurs qui permettent d'évaluer l'exposition au risque d'un défaut et de prioriser les efforts de correction.",
  },
  {
    id: "ta1q12",
    domain: "Techniques de test",
    difficulty: "facile",
    question:
      "Laquelle des descriptions suivantes décrit le mieux un cas de test de bas niveau ?",
    options: [
      "Un cas de test qui décrit les principales fonctionnalités à tester.",
      "Un cas de test qui comprend des étapes détaillées, des entrées spécifiques et des résultats attendus.",
      "Un cas de test qui couvre plusieurs scénarios avec une vue d'ensemble de haut niveau.",
      "Un cas de test qui est principalement utilisé pendant la phase initiale des tests.",
    ],
    answer: [1],
    explanation:
      "Les cas de test de bas niveau sont détaillés, précis et reproductibles : ils spécifient les étapes exactes, les données d'entrée et les résultats attendus, ce qui garantit une exécution cohérente quel que soit le testeur.",
  },
  {
    id: "ta1q13",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Projet ONLINEBANK (banque en ligne) chez une banque : quatre user stories (consultation de solde/historique, cohérence UI, support de 4 navigateurs, sécurité équivalente aux autres applications). Laquelle des propositions suivantes soutient le mieux ce scénario ?",
    options: [
      "Tests exploratoires seuls comme technique principale ; pour US1, partition d'équivalence et analyse des valeurs limites ; une technique boîte noire supplémentaire pour US4.",
      "Tests exploratoires et tests basés sur les défauts comme techniques principales ; pour US1, tests de tables de décision ; tests d'adaptabilité pour US3 ; tests basés sur les attaques avec liste de contrôle pour US4.",
      "Tests exploratoires seuls comme technique principale ; pour US1, tests d'interopérabilité ; tests d'adaptabilité pour US3 ; tests basés sur les attaques pour US4.",
      "Techniques boîte noire comme techniques principales ; pour US1, tests de transition d'état et analyse des valeurs limites ; tests exploratoires en supplément pour US4.",
    ],
    answer: [1],
    explanation:
      "Comme pour un scénario similaire, la combinaison tests exploratoires + tests basés sur les défauts, associée aux tables de décision (règles de calcul), aux tests d'adaptabilité (navigateurs) et aux tests basés sur les attaques avec checklist (sécurité), offre la couverture la plus équilibrée.",
  },
  {
    id: "ta1q14",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question: "Quand les tests de correction fonctionnelle sont-ils généralement effectués ?",
    options: [
      "Pendant les tests unitaires et les tests de composants",
      "Pendant les tests d'intégration et les tests système",
      "Pendant les tests système et les tests d'acceptation utilisateur",
      "Pendant les tests d'acceptation utilisateur et les tests bêta",
    ],
    answer: [0],
    explanation:
      "Les tests de correction fonctionnelle vérifient que chaque fonction produit le résultat attendu ; ils sont réalisés dès les tests unitaires et de composants pour détecter les défauts au plus tôt, avant l'intégration.",
  },
  {
    id: "ta1q15",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Spécification des exigences 102-B (écran de connexion utilisateur, système UM-02) : en utilisant la liste de contrôle de revue standard (testabilité, critères d'acceptation, priorité, identification unique, versionnage, traçabilité métier, traçabilité cas d'utilisation), quels éléments de la liste NE sont PAS remplis par la spécification ?",
    options: ["2, 3, 6", "3, 6, 7", "2, 5, 7", "4, 5, 6"],
    answer: [1],
    explanation:
      "La spécification ne mentionne aucun niveau de priorité (3), aucune traçabilité vers les exigences commerciales/marketing (6), et aucune traçabilité explicite vers les cas d'utilisation bien qu'ils soient mentionnés comme applicables (7).",
  },
  {
    id: "ta1q16",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Laquelle des affirmations suivantes est VRAIE concernant l'implication de l'analyste de test dans le cadre Scrum ?",
    options: [
      "Dans Scrum, l'analyste de test doit commencer l'analyse de test après le développement de l'incrément de produit.",
      "Dans Scrum, l'analyste de test doit faire partie de l'équipe Scrum et participer à toutes les cérémonies Scrum.",
      "Dans Scrum, l'analyste de test ne doit être impliqué que dans la réunion de révision du sprint.",
      "Dans Scrum, le rôle de l'analyste de test n'est pas défini et dépend des exigences de l'équipe de développement.",
    ],
    answer: [1],
    explanation:
      "L'analyste de test est un membre à part entière de l'équipe Scrum et participe à toutes les cérémonies (planification, daily, revue, rétrospective), ce qui favorise une identification précoce des problèmes et une collaboration continue.",
  },
  {
    id: "ta1q17",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "SecureLife lance les projets OPTIMIZE (mise à jour d'un système hérité, équipe expérimentée) et MOBILE (nouvelle application mobile, équipe nouvelle sur les processus métier). Quel niveau de détail des cas de test est le plus adapté à chaque projet ? Sélectionnez DEUX options.",
    options: [
      "Dans OPTIMIZE, les cas de test doivent être rédigés à un niveau élevé, permettant à l'équipe expérimentée une flexibilité de test.",
      "Dans MOBILE, les cas de test doivent être rédigés à un niveau élevé, car l'équipe a de l'expérience en développement mobile.",
      "Dans les deux projets, les cas de test doivent être rédigés sous forme de cas de test détaillés pour garantir des tests approfondis.",
      "Dans OPTIMIZE, les cas de test doivent être rédigés à un niveau détaillé pour couvrir tous les aspects de performance et de scalabilité.",
      "Dans MOBILE, les cas de test doivent être rédigés à un niveau détaillé avec des procédures et de la documentation pour guider la nouvelle équipe.",
    ],
    answer: [0, 4],
    explanation:
      "L'équipe expérimentée d'OPTIMIZE peut exploiter son expertise avec des cas de test de haut niveau, sans procédures trop contraignantes. L'équipe MOBILE, nouvelle sur les processus métier de SecureLife, a besoin de cas de test détaillés et documentés pour être guidée efficacement.",
  },
  {
    id: "ta1q18",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant les activités d'exécution des tests ?",
    options: [
      "L'exécution des tests consiste à exécuter les cas de test et à enregistrer les résultats.",
      "L'exécution des tests ne doit commencer qu'après que tous les cas de test ont été conçus et examinés.",
      "Pendant l'exécution des tests, les testeurs comparent les résultats réels aux résultats attendus pour identifier les écarts.",
      "Les résultats des tests doivent être documentés et communiqués aux parties prenantes concernées.",
    ],
    answer: [1],
    explanation:
      "En pratique, notamment dans les environnements itératifs et agiles, l'exécution des tests peut commencer en parallèle de la conception et de la révision d'autres cas de test — attendre l'achèvement complet de la conception n'est pas une exigence stricte.",
  },
  {
    id: "ta1q19",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un tableau de décision pour les options de paiement d'un magasin en ligne (carte de crédit, virement instantané, prélèvement automatique ≤ 500 €, virement seul pour non-enregistrés) a été conçu avec 5 règles (R1–R5). En l'examinant pour sa complétude, exactitude et cohérence, lesquelles des constatations suivantes sont CORRECTES ? Sélectionnez DEUX options.",
    options: [
      "Le tableau est incomplet car trois conditions booléennes nécessitent 2³ = 8 règles.",
      "La règle R3 n'est pas correcte car elle offre potentiellement le prélèvement automatique aux clients enregistrés avec une carte de crédit expirée.",
      "La valeur '-' pour la condition C2 dans la règle R4 devrait plutôt être 'N/A', car le système ne dispose d'aucune information sur les cartes de crédit des clients non enregistrés.",
      "La valeur '-' pour la condition C3 dans la règle R5 est incorrecte, car si le montant ≤ 500 € est vrai, le prélèvement automatique devrait être proposé.",
      "Le tableau est incohérent car pour un client enregistré avec une carte expirée et un montant > 500 €, les règles R2 et R3 s'appliquent toutes deux.",
    ],
    answer: [0, 2],
    explanation:
      "Avec 3 conditions booléennes, une table complète nécessite bien 8 règles (2³), alors que seules 5 sont présentes — le tableau est donc incomplet. Pour la règle R4 (client non enregistré), l'état de la carte de crédit n'est pas simplement « indifférent » mais réellement inconnu du système, ce qui appelle 'N/A' plutôt que '-'.",
  },
  {
    id: "ta1q20",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Laquelle des affirmations suivantes NE décrit PAS l'utilisation des tests de transition d'état pour soutenir les techniques de test en boîte noire ?",
    options: [
      "Les tests de transition d'état aident à identifier les transitions d'état valides et invalides.",
      "Les tests de transition d'état sont utiles pour tester différentes séquences d'événements.",
      "Les tests de transition d'état soutiennent l'identification des règles à utiliser dans une table de décision.",
      "Les tests de transition d'état sont utilisés pour tester les conditions qui déclenchent un changement d'état.",
    ],
    answer: [2],
    explanation:
      "L'identification des règles d'une table de décision est une technique distincte (capture de règles métier sous forme tabulaire) et n'est pas soutenue par les tests de transition d'état, qui se concentrent sur les états et leurs transitions.",
  },
  {
    id: "ta1q21",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Application multilingue (4 langues), fonctionnant sur 4 appareils et 2 systèmes d'exploitation. En utilisant la technique par paires, quel est le nombre MINIMUM de cas de test pour couvrir toutes les paires ?",
    options: ["4", "8", "16", "32"],
    answer: [2],
    explanation:
      "Avec des facteurs à 4, 4 et 2 niveaux, un algorithme de test par paires génère typiquement 16 cas de test pour couvrir toutes les combinaisons de paires, bien inférieur aux 32 combinaisons exhaustives (4×4×2).",
  },
  {
    id: "ta1q22",
    domain: "Gestion des défauts",
    difficulty: "facile",
    question:
      "Un rapport de défaut pour une application bancaire mobile (bouton de transfert non réactif) inclut l'application, les étapes de reproduction, le résultat attendu/réel, la gravité et la priorité. Quelle est l'information LA PLUS importante qui manque ?",
    options: [
      "Nom du testeur et date du rapport",
      "Détails de l'environnement de test (modèle de l'appareil, version du système d'exploitation)",
      "Identification de l'objet de test",
      "Impact sur les intérêts des parties prenantes",
    ],
    answer: [1],
    explanation:
      "Pour une application mobile, le comportement peut varier fortement d'un appareil ou d'une version d'OS à l'autre — sans ces détails, les développeurs ne peuvent pas reproduire fiablement le défaut.",
  },
  {
    id: "ta1q23",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un composant logiciel de synchronisation de calendriers doit s'intégrer avec une nouvelle plateforme non encore prise en charge. Laquelle des affirmations suivantes NE SE QUALIFIE PAS comme un échec d'interopérabilité ?",
    options: [
      "Les événements du calendrier ne sont pas synchronisés sur toutes les plateformes qui intègrent le composant.",
      "10 % des applications de calendrier n'affichent pas correctement les événements sur la nouvelle plateforme.",
      "Les rappels de calendrier ne sont pas affichés sur certains appareils.",
      "Les utilisateurs trouvent le menu des paramètres du calendrier difficile à naviguer.",
    ],
    answer: [3],
    explanation:
      "La difficulté de navigation dans un menu relève de la convivialité (utilisabilité) et non de la capacité du composant à interagir avec d'autres systèmes ou plateformes, qui est le périmètre des échecs d'interopérabilité.",
  },
  {
    id: "ta1q24",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une plateforme de trading en temps réel (application bureau, application mobile, serveur backend) doit avant tout gérer des volumes élevés de transactions sans dégradation. Quelle caractéristique de qualité doit être testée en premier ?",
    options: ["Utilisabilité", "Interopérabilité", "Sécurité", "Performance"],
    answer: [3],
    explanation:
      "L'exigence prioritaire explicite est la capacité du système à traiter un volume élevé de transactions sans dégradation — cela relève directement de la performance, condition préalable à la confiance des utilisateurs dans une plateforme de trading en temps réel.",
  },
  {
    id: "ta1q25",
    domain: "Outils de test",
    difficulty: "difficile",
    question:
      "Une application héritée modifiée pour inclure de nouvelles fonctionnalités voit ses scripts de test automatisés, auparavant fiables, échouer fréquemment. Quelles actions l'analyste de test devrait-il prioriser ? Sélectionnez DEUX options.",
    options: [
      "Effectuer un examen approfondi des scripts de test automatisés existants.",
      "Supprimer les scripts de test automatisés défaillants et en écrire de nouveaux à partir de zéro.",
      "Collaborer avec l'équipe de développement pour comprendre les récentes modifications apportées à l'application.",
      "Désactiver les scripts de test automatisés pour éviter les faux négatifs et continuer avec les tests manuels.",
      "Valider que l'environnement de test reflète l'environnement de production actuel.",
    ],
    answer: [0, 2],
    explanation:
      "Examiner les scripts existants permet d'identifier précisément pourquoi ils échouent, tandis que la collaboration avec les développeurs éclaire les causes réelles (modifications d'interface, de logique). Réécrire tout à zéro ou désactiver les tests sont des solutions de dernier recours, inefficaces à ce stade.",
  },
  {
    id: "ta1q26",
    domain: "Outils de test",
    difficulty: "moyen",
    question:
      "Un analyste de test évalue un nouvel outil de gestion des défauts pour son équipe. Quel critère doit-il prioriser lors de cette évaluation ?",
    options: [
      "La capacité de l'outil à s'intégrer aux outils de gestion des tests et de développement existants de l'équipe.",
      "Le nombre d'utilisateurs que l'outil peut prendre en charge simultanément.",
      "Le design de l'interface utilisateur et la facilité d'utilisation de l'outil.",
      "Le coût de l'outil par rapport au budget actuel.",
    ],
    answer: [0],
    explanation:
      "La capacité d'intégration avec l'écosystème existant est cruciale pour un suivi des défauts sans rupture et une communication fluide entre outils ; les autres critères, bien qu'importants, sont secondaires par rapport à ce facteur structurant.",
  },
  {
    id: "ta1q27",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une institution financière développe une plateforme de trading devant traiter les transactions en temps réel et fournir des données de marché précises. Quel type de test l'analyste de test doit-il inclure en priorité dans le plan de test ?",
    options: [
      "Tests d'utilisabilité pour s'assurer que la plateforme est facile à utiliser pour les traders.",
      "Tests de performance pour s'assurer que la plateforme peut traiter les transactions en temps réel de manière efficace.",
      "Tests exploratoires pour identifier les défauts potentiels dans la plateforme.",
      "Tests de régression pour vérifier que les nouvelles modifications n'introduisent pas de nouveaux défauts.",
    ],
    answer: [1],
    explanation:
      "Le traitement en temps réel et la charge de transactions sont les exigences les plus critiques ici ; les tests de performance sont donc la priorité, les autres types de test restant importants mais secondaires par rapport à cet enjeu.",
  },
  {
    id: "ta1q28",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application bancaire calcule les intérêts des prêts selon plusieurs paramètres (montant, durée, type de taux) et doit être conforme aux normes réglementaires. Quelle technique de test l'analyste devrait-il utiliser pour garantir l'exactitude de cette fonctionnalité ?",
    options: [
      "Analyse des valeurs limites pour tester les limites des valeurs d'entrée.",
      "Partitionnement en classes d'équivalence pour tester différents groupes de valeurs d'entrée.",
      "Test par table de décision pour couvrir toutes les combinaisons possibles de paramètres d'entrée.",
      "Test de transition d'état pour vérifier les différents états du processus de demande de prêt.",
    ],
    answer: [2],
    explanation:
      "Le test par table de décision est le plus efficace pour garantir que toutes les combinaisons pertinentes de paramètres (montant, durée, type de taux) sont couvertes systématiquement, ce qui est essentiel pour la conformité réglementaire d'un calcul financier.",
  },
  {
    id: "ta1q29",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un système de billetterie automatisé pour le transport public doit gérer différents types de billets, méthodes de paiement et mises à jour en temps réel. Quelles activités l'analyste de test devrait-il inclure dans le plan de test pour une évaluation complète ?",
    options: [
      "Effectuer des tests de bout en bout pour valider le flux complet de la sélection des billets à la confirmation de paiement.",
      "Réaliser des tests de sécurité pour s'assurer que les informations de paiement sont traitées en toute sécurité.",
      "Exécuter des tests de compatibilité pour vérifier que le système fonctionne sur différents appareils et plateformes.",
      "Toutes les réponses ci-dessus.",
    ],
    answer: [3],
    explanation:
      "Une évaluation complète d'un système aussi critique nécessite de combiner tests de bout en bout, tests de sécurité et tests de compatibilité : chacun couvre un aspect distinct (flux fonctionnel, protection des données, portabilité) qu'aucun seul type de test ne peut couvrir intégralement.",
  },
  {
    id: "ta1q30",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un système de réservation de chambres d'hôtel (recherche par dates/type/prix, réservation, reçu) doit être développé rapidement, en remplaçant un système existant plus limité. Quelles techniques de test offriraient la meilleure couverture dans ce délai ? Sélectionnez DEUX options.",
    options: [
      "Test des tables de décision",
      "Test des cas d'utilisation",
      "Analyse des valeurs limites",
      "Test de transition d'état",
      "Partitionnement d'équivalence",
    ],
    answer: [1, 4],
    explanation:
      "Le test des cas d'utilisation couvre efficacement les parcours utilisateurs critiques (recherche, réservation, confirmation), tandis que le partitionnement d'équivalence permet de couvrir les différentes catégories de données (dates, types de chambre, gammes de prix) sans tester exhaustivement chaque valeur — une combinaison rapide et efficace.",
  },
  {
    id: "ta1q31",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un tableau de décision pour un système de réduction en ligne comporte une condition « Code de réduction valide » avec deux partitions invalides (expiré, invalide) et une partition valide. Pour couvrir ces partitions d'équivalence et la portion correspondante du tableau, quel est le nombre minimum de tests requis ?",
    options: ["2", "3", "4", "5"],
    answer: [2],
    explanation:
      "Il faut un cas par combinaison distincte de « Code de réduction » (expiré, invalide, valide) croisée avec « Achat minimum > 50 $ » selon les règles du tableau, ce qui aboutit à 4 cas de test couvrant toutes les partitions sans redondance.",
  },
  {
    id: "ta1q32",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un tableau de décision pour un système de remise e-commerce (règles R1 à R4 selon statut « premier client » et montant d'achat) a déjà des cas de test pour R1 et R4. Parmi DT1 à DT4, lesquels permettraient d'atteindre une couverture complète du tableau ?",
    options: ["DT1, DT2", "DT2, DT3", "DT1, DT3", "DT3, DT4"],
    answer: [1],
    explanation:
      "R1 et R4 étant déjà couverts, il reste à couvrir R2 (premier client, montant ≤ 100 $) et R3 (non premier client, montant > 100 $) : DT2 correspond exactement à R2 et DT3 à R3.",
  },
  {
    id: "ta1q33",
    domain: "Processus de test",
    difficulty: "difficile",
    question:
      "Étant données des priorités (haute/moyenne/basse) et des dépendances techniques/logiques entre 6 cas de test (TC1 à TC6), lequel des calendriers d'exécution suivants respecte le mieux ces contraintes ?",
    options: [
      "TC1 – TC3 – TC4 – TC6 – TC2",
      "TC3 – TC1 – TC5 – TC4 – TC6 – TC2",
      "TC5 – TC3 – TC1 – TC4 – TC6 – TC2",
      "TC3 – TC5 – TC2 – TC4 – TC6",
    ],
    answer: [2],
    explanation:
      "Cet ordre respecte toutes les dépendances déclarées (TC5 sans dépendance en premier, TC3 dépendant de TC5, TC1 dépendant de TC3/TC5, TC4 dépendant de TC3, TC6 dépendant de TC4, TC2 dépendant de TC1) tout en respectant les priorités relatives de chaque cas.",
  },
  {
    id: "ta1q34",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Sur un projet aux spécifications de très haut niveau, les tests exploratoires sont la technique principale. Lesquelles des options suivantes définissent ce dont l'analyste aura besoin pour spécifier, exécuter et enregistrer les sessions ? Sélectionnez DEUX options.",
    options: [
      "Utilisez des sessions de débriefing avec le responsable des tests ou un chef de test pour enregistrer les résultats des sessions de test.",
      "Enregistrez les défauts dans le système de gestion des défauts, mais ne notez pas de résultats de réussite/échec pour la session exploratoire.",
      "Demandez aux utilisateurs finaux d'exécuter des tests ad hoc et notez leurs actions en tant que sessions exploratoires.",
      "Acquérez des connaissances du domaine à appliquer lors de la session exploratoire.",
      "Enregistrez les résultats dans un e-mail et envoyez-le au responsable des tests et au chef de test.",
    ],
    answer: [0, 3],
    explanation:
      "Les sessions de débriefing structurent et documentent formellement les découvertes des sessions exploratoires, tandis que les connaissances du domaine permettent au testeur d'orienter efficacement son exploration vers les zones à risque.",
  },
  {
    id: "ta1q35",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question: "Laquelle des déclarations suivantes décrit correctement les tests d'adéquation fonctionnelle ?",
    options: [
      "Il garantit que le système fonctionne de manière optimale sous des conditions de charge élevée.",
      "Il valide que le système fournit les bonnes fonctions pour soutenir les cas d'affaires de haut niveau.",
      "Il vérifie la présence de toutes les fonctions spécifiées.",
      "Il implique de tester le temps de réponse et le débit du système.",
    ],
    answer: [1],
    explanation:
      "L'adéquation fonctionnelle cible les défauts où les fonctions implémentées, bien que présentes, ne sont pas alignées avec les besoins métier réels — c'est différent de la complétude fonctionnelle (présence des fonctions) ou de la performance (charge, débit).",
  },
  {
    id: "ta1q36",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Un site de commerce électronique a cinq exigences (R101 compatibilité navigateurs, R102 temps de chargement, R103 chiffrement SSL, R104 accessibilité WCAG, R105 10 000 utilisateurs simultanés). Lesquelles devraient être considérées en priorité pour la conception de test, selon les responsabilités de l'analyste de test ?",
    options: ["R101, R102, R105", "R102, R103, R105", "R101, R104, R105", "R103, R104, R105"],
    answer: [0],
    explanation:
      "Compatibilité (R101), performance de chargement (R102) et scalabilité (R105) couvrent des aspects transverses de l'expérience utilisateur et de la fiabilité du site, formant un socle cohérent pour la conception de test dans ce scénario.",
  },
  {
    id: "ta1q37",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Laquelle des réponses suivantes décrit l'ensemble d'activités le plus approprié pour l'analyste de test pendant la phase d'exécution des tests ?",
    options: [
      "Exécuter les cas de test, signaler les défauts, retester les corrections de défauts, mettre à jour les cas de test, finaliser le rapport de test.",
      "Concevoir les cas de test, préparer l'environnement de test, exécuter les cas de test, examiner le plan de test, finaliser le rapport de test.",
      "Analyser la base de test, concevoir les cas de test, créer des données de test, exécuter les cas de test, analyser les défauts.",
      "Exécuter les cas de test, analyser les résultats des tests, créer des données de test, retester les corrections de défauts, concevoir de nouveaux cas de test.",
    ],
    answer: [0],
    explanation:
      "L'exécution, le signalement des défauts, le retest après correction, la mise à jour des cas de test et la finalisation du rapport forment le cœur cohérent des activités de la phase d'exécution, sans mélanger des activités de conception ou de planification.",
  },
  {
    id: "ta1q38",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "SecureLife lance BILLING (système de facturation automatisé, équipe nouvelle en automatisation mais experte en facturation) et SUPPORT (amélioration d'une plateforme de support, équipe familière avec la plateforme mais nouvelle sur les fonctionnalités). Quels types de test sont les MEILLEURS pour ces projets ? Sélectionnez DEUX options.",
    options: [
      "Pour BILLING, effectuez des tests de charge pour garantir que le système peut gérer les périodes de facturation de pointe.",
      "Pour SUPPORT, effectuez des tests d'utilisabilité pour garantir que les nouvelles fonctionnalités améliorent l'expérience utilisateur.",
      "Pour BILLING, utilisez des tests de régression pour vérifier que les nouvelles modifications n'affectent pas la fonctionnalité existante.",
      "Pour SUPPORT, appliquez des tests de sécurité pour garantir que la plateforme est protégée contre les vulnérabilités.",
      "Pour BILLING, utilisez des tests de compatibilité pour garantir que le système fonctionne avec différents logiciels financiers.",
    ],
    answer: [0, 1],
    explanation:
      "Les tests de charge sont critiques pour un système de facturation automatisé lors des pics de volume, tandis que les tests d'utilisabilité valident que les nouvelles fonctionnalités de support répondent réellement aux attentes des utilisateurs — ces deux choix répondent directement aux enjeux spécifiques énoncés pour chaque projet.",
  },
  {
    id: "ta1q39",
    domain: "Techniques de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant les techniques de conception des cas de test ?",
    options: [
      "La partition d'équivalence peut être utilisée pour réduire le nombre de cas de test en divisant les données d'entrée en classes équivalentes.",
      "L'analyse des valeurs limites est particulièrement efficace pour tester les systèmes avec des champs de saisie numériques.",
      "Les tests de tables de décision sont utiles pour les systèmes où différentes combinaisons d'entrées entraînent des actions différentes.",
      "Les tests exploratoires reposent fortement sur des cas de test prédéterminés et une documentation détaillée.",
    ],
    answer: [3],
    explanation:
      "Les tests exploratoires sont, au contraire, caractérisés par une approche peu structurée où le testeur conçoit et exécute les tests simultanément, sans cas de test prédéterminés ni documentation exhaustive — l'affirmation inverse est donc fausse.",
  },
  {
    id: "ta1q40",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Programme de récompenses par carte de crédit à quatre niveaux (Basique 1–100, Plus 101–500, Premium 501–1000, Élite >1000). Les cas de test existants couvrent 100, 101, 500, 501 et 1001. Quel pourcentage de couverture des valeurs limites est déjà atteint ?",
    options: ["37,5 %", "50 %", "62,5 %", "75 %"],
    answer: [2],
    explanation:
      "Les 8 valeurs limites attendues sont 1, 100, 101, 500, 501, 1000, 1001 et une borne juste en dessous de 1. Sur les 5 valeurs testées, 100, 101, 500, 501 et 1001 correspondent toutes à des valeurs limites, soit 5 sur 8 = 62,5 %.",
  },
];
