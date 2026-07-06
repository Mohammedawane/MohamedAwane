// ISTQB CTAL-TA (Advanced Level Test Analyst) — Examen blanc 4
import type { CTALQuestion } from "./types";

export const EXAM_4_QUESTIONS: CTALQuestion[] = [
  {
    id: "ta4q01",
    domain: "Test des caractéristiques de qualité",
    difficulty: "difficile",
    question:
      "Une plateforme de commerce électronique doit gérer 10 000 utilisateurs simultanés (US1), offrir une interface intuitive (US2), prendre en charge divers modes de paiement (US3) et garantir des transactions sécurisées (US4). Laquelle des propositions suivantes soutient le mieux ce scénario ?",
    options: [
      "Tests de performance comme technique principale ; pour US1, tests de charge ; pour US2, tests d'utilisabilité ; pour US3, tests de sécurité ; pour US4, tests de compatibilité.",
      "Tests de charge et tests de sécurité comme techniques principales ; pour US1, tests de stress ; pour US2, évaluation heuristique ; pour US3, tests de passerelle de paiement ; pour US4, tests de pénétration.",
      "Tests d'utilisabilité et tests de performance comme techniques principales ; pour US1, tests de stress ; pour US2, évaluation heuristique ; pour US3, tests de passerelle de paiement ; pour US4, tests de pénétration.",
      "Tests exploratoires comme technique principale ; pour US1, analyse des valeurs limites ; pour US2, tests d'acceptation utilisateur ; pour US3, partition équivalente ; pour US4, tests de contrôle d'accès.",
    ],
    answer: [1],
    explanation:
      "Les tests de charge/stress valident la capacité à gérer 10 000 utilisateurs (US1), l'évaluation heuristique cible l'utilisabilité de l'interface (US2), les tests de passerelle de paiement couvrent les modes de paiement (US3), et les tests de pénétration garantissent la sécurité des transactions (US4).",
  },
  {
    id: "ta4q02",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un expert en design effectue un test exploratoire d'un écran de personnalisation de produit pour vérifier si la solution permet toutes les personnalisations possibles. Quel type de test effectue-t-on ?",
    options: [
      "Tests de correction fonctionnelle",
      "Tests d'accessibilité",
      "Tests d'utilisabilité",
      "Tests d'adéquation fonctionnelle",
    ],
    answer: [2],
    explanation:
      "L'implication d'un expert en design évaluant l'expérience utilisateur et l'intuitivité de l'interface de personnalisation relève des tests d'utilisabilité.",
  },
  {
    id: "ta4q03",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes est correcte concernant les sous-caractéristiques de qualité et les défauts qu'elles ciblent ?",
    options: [
      "Les tests de sécurité fonctionnelle garantissent que l'accès non autorisé au système et aux données est empêché.",
      "Les tests d'adaptabilité fonctionnelle vérifient que le système peut être adapté à différents utilisateurs et environnements sans changements significatifs.",
      "Les tests de récupérabilité fonctionnelle évaluent la capacité du système à se remettre des pannes ou des crashs.",
      "Les tests de maintenabilité fonctionnelle impliquent la détection des défauts dans la facilité de modification du système.",
    ],
    answer: [0],
    explanation:
      "La sécurité fonctionnelle vise précisément à garantir que les fonctionnalités de sécurité empêchent l'accès non autorisé ; l'adaptabilité relève de la portabilité, la récupérabilité de la fiabilité, et la maintenabilité est une caractéristique de qualité à part entière.",
  },
  {
    id: "ta4q04",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un système de gestion des stocks prévoit la demande selon des données historiques, avec différents groupes d'utilisateurs. À quel niveau du cycle de développement les tests d'aptitude fonctionnelle doivent-ils être effectués le plus tôt ?",
    options: [
      "Tester si les calculs de prévision de la demande sont exacts doit être effectué lors des tests des composants.",
      "Tester l'adéquation des fonctions attribuées aux différents groupes d'utilisateurs doit être effectué lors des tests d'acceptation.",
      "Tester l'interopérabilité avec les systèmes de gestion des fournisseurs doit être effectué lors des tests système.",
      "Tester l'interopérabilité avec les systèmes de gestion des fournisseurs doit être effectué lors des tests système (bis).",
    ],
    answer: [0],
    explanation:
      "Les tests de composants permettent de valider isolément les calculs fondamentaux de prévision de la demande, avant leur intégration avec le reste du système de gestion des stocks.",
  },
  {
    id: "ta4q05",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une plateforme de trading financier en temps réel (application bureau, application mobile, serveur backend) doit gérer des volumes élevés de transactions sans dégradation. Quelle caractéristique tester en premier ?",
    options: ["Utilisabilité", "Interopérabilité", "Sécurité", "Performance"],
    answer: [3],
    explanation:
      "La capacité à traiter un volume élevé de transactions sans dégradation est l'exigence explicite la plus critique — la performance prime sur les autres caractéristiques dans ce contexte.",
  },
  {
    id: "ta4q06",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question: "Une application logicielle basée sur le cloud doit fonctionner correctement sur Windows, macOS et Linux. Quel type de test effectue-t-on ?",
    options: ["Test de performance", "Test d'interopérabilité", "Test fonctionnel", "Test de portabilité"],
    answer: [3],
    explanation:
      "Vérifier qu'une application fonctionne correctement lorsqu'elle est transférée d'un système d'exploitation à un autre relève exactement du test de portabilité.",
  },
  {
    id: "ta4q07",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est VRAIE concernant le moment où l'analyste de test devrait être impliqué dans le modèle en spirale ?",
    options: [
      "L'analyste de test ne devrait être impliqué que dans la phase finale de chaque cycle en spirale.",
      "L'analyste de test devrait commencer l'analyse des tests au début du premier cycle en spirale et continuer dans chaque cycle suivant.",
      "L'analyste de test ne devrait être impliqué que dans la phase d'évaluation des risques.",
      "L'analyste de test devrait commencer l'analyse des tests en même temps que la phase de codage de chaque cycle.",
    ],
    answer: [1],
    explanation:
      "Une implication continue dès le premier cycle et tout au long des cycles suivants assure une évaluation continue des risques et des exigences, cohérente avec la nature itérative du modèle en spirale.",
  },
  {
    id: "ta4q08",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes NE DONNE PAS une bonne raison pour laquelle les résultats des tests devraient être partagés avec les parties prenantes ?",
    options: [
      "Partager les résultats des tests assure la transparence sur l'état actuel de la qualité du système.",
      "Les résultats des tests aident les parties prenantes à prendre des décisions éclairées concernant la publication du logiciel.",
      "Partager les résultats des tests garantit que seuls les résultats positifs sont communiqués pour maintenir la confiance des parties prenantes.",
      "Les résultats des tests mettent en évidence les zones de risque nécessitant une attention supplémentaire avant le déploiement.",
    ],
    answer: [2],
    explanation:
      "Il est essentiel de communiquer autant les résultats négatifs que positifs pour donner une image complète et honnête de la qualité du système ; ne communiquer que les résultats positifs serait trompeur.",
  },
  {
    id: "ta4q09",
    domain: "Outils de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant l'intégration des tests automatisés dans le pipeline CI/CD ?",
    options: [
      "Les tests automatisés doivent être intégrés au pipeline CI/CD pour fournir un retour d'information immédiat sur les modifications de code.",
      "Les tests automatisés doivent inclure uniquement des tests unitaires pour assurer une exécution rapide et un retour d'information immédiat.",
      "L'intégration des tests automatisés dans le pipeline CI/CD aide à la détection précoce des défauts.",
      "Les tests automatisés dans le pipeline CI/CD peuvent inclure des tests unitaires, des tests d'intégration et des tests système.",
    ],
    answer: [1],
    explanation:
      "Un pipeline CI/CD gagne à inclure plusieurs niveaux de tests (unitaires, intégration, système) pour garantir une validation approfondie, et non uniquement des tests unitaires.",
  },
  {
    id: "ta4q10",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un système de gestion des soins de santé présente trois risques : non-conformité réglementaire (forte probabilité, impact élevé), temps de réponse lent (probabilité moyenne, impact moyen), chiffrement insuffisant (faible probabilité, impact élevé). Quelle action prioriser en premier ?",
    options: [
      "Effectuer des tests de conformité approfondis pour s'assurer que le système est conforme aux réglementations en matière de santé.",
      "Effectuer des tests de performance pour s'assurer que le temps de réponse du système est acceptable pendant les périodes de pointe.",
      "Examiner et améliorer les algorithmes de chiffrement pour garantir la sécurité des données des utilisateurs.",
      "Reporter les tests de conformité et se concentrer sur les tests fonctionnels des fonctionnalités de base.",
    ],
    answer: [0],
    explanation:
      "Le risque de non-conformité réglementaire combine la plus forte probabilité et un impact élevé (sanctions légales, blocage du déploiement), ce qui en fait la priorité absolue devant les autres risques.",
  },
  {
    id: "ta4q11",
    domain: "Techniques de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes décrit le MIEUX l'utilisation des tests exploratoires ?",
    options: [
      "Les tests exploratoires sont réalisés en suivant un plan de test détaillé et des cas de test préparés à l'avance.",
      "Les tests exploratoires impliquent un apprentissage simultané, la conception de tests et l'exécution de tests.",
      "Les tests exploratoires ne doivent être utilisés que lorsqu'il n'y a pas de spécifications formelles disponibles.",
      "Les tests exploratoires sont principalement utilisés pour les tests de régression.",
    ],
    answer: [1],
    explanation:
      "Le principe fondamental des tests exploratoires est que le testeur apprend, conçoit et exécute les tests simultanément, en s'adaptant à ses observations, plutôt que de suivre un plan préétabli ou de se limiter à la régression.",
  },
  {
    id: "ta4q12",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un processus batch calculant les intérêts mensuels des comptes d'épargne échoue en rencontrant un compte à solde négatif, résultant d'une erreur manuelle. Quelle technique aurait été la plus susceptible de détecter ce défaut ?",
    options: [
      "Tests de table de décision",
      "Analyse des valeurs limites",
      "Tests de cas d'utilisation",
      "Deviner les erreurs",
    ],
    answer: [1],
    explanation:
      "Un solde négatif constitue une valeur limite naturelle autour de zéro ; l'analyse des valeurs limites (testant -1, 0, +1) est spécifiquement conçue pour détecter ce type de défaut aux frontières des plages d'entrée.",
  },
  {
    id: "ta4q13",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Un système de réservation de billets accepte de 1 à 20 billets (précision de 1). Quel ensemble de valeurs couvre les valeurs limites à deux points pour ce champ ?",
    options: ["0, 1, 2, 19, 20, 21", "1, 2, 19, 20", "1, 10, 20", "0, 1, 20, 21"],
    answer: [0],
    explanation:
      "La BVA à deux points teste la valeur juste en dessous, la limite et la valeur juste au-dessus de chaque frontière : 0/1/2 pour la limite basse et 19/20/21 pour la limite haute.",
  },
  {
    id: "ta4q14",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Lesquels des deux facteurs principaux suivants doivent être pris en compte lors de la détermination du niveau de risque d'un changement logiciel ?",
    options: [
      "Effort de développement et de test",
      "Impact et probabilité",
      "Complexité et coût",
      "Exigences des utilisateurs et des parties prenantes",
    ],
    answer: [1],
    explanation:
      "L'impact potentiel d'un changement et la probabilité qu'il introduise un défaut sont les deux facteurs qui permettent d'évaluer le niveau de risque global d'un changement logiciel.",
  },
  {
    id: "ta4q15",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Dans quel scénario utiliseriez-vous le plus probablement des cas de test de haut niveau ?",
    options: [
      "Lors du test de l'intégration du système avec des applications externes.",
      "Lors de la réalisation de tests unitaires sur des modules individuels.",
      "Lors de la validation de la conception de l'interface utilisateur de l'application.",
      "Lors de la création de scripts de test de régression automatisés.",
    ],
    answer: [0],
    explanation:
      "Les cas de test de haut niveau, axés sur des scénarios de bout en bout, sont particulièrement adaptés pour valider l'intégration du système avec des applications externes, contrairement aux tests unitaires qui nécessitent un détail bien plus fin.",
  },
  {
    id: "ta4q16",
    domain: "Processus de test",
    difficulty: "difficile",
    question:
      "Étant données des priorités et dépendances entre 6 cas de test (TC1 à TC6), lequel des plannings d'exécution suivants prend le mieux en compte ces contraintes ?",
    options: [
      "TC2 – TC1 – TC4 – TC5 – TC3 – TC6",
      "TC2 – TC4 – TC1 – TC5 – TC6 – TC3",
      "TC2 – TC4 – TC5 – TC1 – TC6 – TC3",
      "TC2 – TC1 – TC3 – TC4 – TC5 – TC6",
    ],
    answer: [1],
    explanation:
      "Cet ordre respecte les dépendances déclarées (TC2 sans dépendance en premier, TC4 dépendant de TC2, TC1 dépendant de TC2, TC5 dépendant de TC4, TC6 dépendant de TC5, TC3 dépendant de TC1) tout en tenant compte des priorités relatives.",
  },
  {
    id: "ta4q17",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "MEDTRACK a une spécification des exigences claire et exhaustive, testée par une équipe experte du domaine mais peu formée aux tests. BILLPRO doit respecter une conformité réglementaire stricte avec audit obligatoire. Quel facteur est le MOINS susceptible d'influencer la décision de concevoir des cas de test de bas ou de haut niveau ?",
    options: [
      "La spécification des exigences pour MEDTRACK est très claire, détaillée et exhaustive.",
      "BILLPRO doit respecter une conformité réglementaire stricte et un audit obligatoire du processus de test.",
      "Les testeurs de MEDTRACK sont des experts du domaine mais manquent d'expérience formelle en test.",
      "Les phases que BILLPRO traversera, telles que la génération de factures, la validation, la soumission et le traitement des paiements.",
    ],
    answer: [3],
    explanation:
      "Connaître les phases fonctionnelles du projet n'influence pas directement le niveau de détail requis dans les cas de test — c'est une question de granularité de conception, pas de fonctionnalité couverte, contrairement à la clarté des exigences, aux exigences réglementaires ou à l'expérience de l'équipe.",
  },
  {
    id: "ta4q18",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes ne décrit PAS l'utilisation de l'analyse des valeurs limites (BVA) pour soutenir les techniques de test en boîte noire ?",
    options: [
      "L'analyse des valeurs limites aide à identifier les limites des valeurs d'entrée pour les tests.",
      "L'analyse des valeurs limites est efficace pour trouver les défauts aux extrémités des plages d'entrée.",
      "L'analyse des valeurs limites soutient l'identification des règles à utiliser dans une table de décision.",
      "L'analyse des valeurs limites est souvent utilisée en conjonction avec le partitionnement par équivalence.",
    ],
    answer: [2],
    explanation:
      "L'identification des règles d'une table de décision est indépendante de la BVA, qui se concentre spécifiquement sur les valeurs aux frontières des partitions d'équivalence.",
  },
  {
    id: "ta4q19",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application de bureau multilingue (3 langues), 4 navigateurs, 2 systèmes d'exploitation. En utilisant la technique par paires, quel est le nombre MINIMUM de cas de test pour couvrir toutes les paires ?",
    options: ["6", "9", "12", "24"],
    answer: [2],
    explanation:
      "Pour des facteurs à 3, 4 et 2 niveaux, un algorithme de test par paires produit typiquement 12 cas de test couvrant toutes les combinaisons de paires possibles.",
  },
  {
    id: "ta4q20",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un cas d'utilisation « Traiter le retour » (site e-commerce) comprend un flux principal et trois exceptions (aucune commande, article non éligible, erreur technique). Combien de cas de test sont nécessaires pour la couverture minimale ?",
    options: ["3 cas de test", "4 cas de test", "5 cas de test", "6 cas de test"],
    answer: [1],
    explanation:
      "Un cas pour le flux principal réussi et un cas pour chacune des trois exceptions donnent un total de 4 cas de test pour la couverture minimale.",
  },
  {
    id: "ta4q21",
    domain: "Gestion des défauts",
    difficulty: "facile",
    question: "Un rapport de défaut pour CRMPro v3.1 (impossible de sauvegarder de nouveaux enregistrements clients) contient les étapes de reproduction, la gravité et la priorité. Quelle est l'information la plus importante qui manque ?",
    options: [
      "Nom du testeur et date du rapport",
      "Éléments de l'environnement de test et leurs numéros de version",
      "Identification de l'objet de test",
      "Captures d'écran du message d'erreur",
    ],
    answer: [3],
    explanation:
      "Une capture d'écran du message d'erreur fournit un contexte visuel immédiat et aide les développeurs à comprendre exactement le problème rencontré, complétant utilement les étapes de reproduction déjà fournies.",
  },
  {
    id: "ta4q22",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une application de santé (dossiers patients, rendez-vous, facturation) s'intègre à plusieurs services tiers (vérification d'assurance, paiement). Il est crucial de maintenir l'intégrité des données à travers ces intégrations. Quelle caractéristique tester le plus ?",
    options: ["Interopérabilité", "Sécurité", "Fiabilité", "Maintenabilité"],
    answer: [0],
    explanation:
      "L'enjeu explicite étant l'échange correct de données entre systèmes tiers multiples, l'interopérabilité est la caractéristique prioritaire — sans elle, les autres qualités deviennent secondaires.",
  },
  {
    id: "ta4q23",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un pharmacien effectue un test exploratoire (US-91) pour vérifier si un module de prescriptions électroniques prend en charge toutes les fonctions nécessaires à la gestion des prescriptions. Quel type de test effectue-t-on ?",
    options: ["Test d'adéquation fonctionnelle", "Test de performance", "Test de sécurité", "Test d'interopérabilité"],
    answer: [0],
    explanation:
      "Évaluer si le module prend en charge toutes les fonctions nécessaires aux besoins des utilisateurs (pharmaciens) relève du test d'adéquation fonctionnelle.",
  },
  {
    id: "ta4q24",
    domain: "Outils de test",
    difficulty: "moyen",
    question:
      "Les scripts de test automatisés d'une application héritée, auparavant fiables, échouent maintenant fréquemment après des modifications. Quelles actions prioriser ? Sélectionnez DEUX options.",
    options: [
      "Effectuer un examen approfondi des scripts de test automatisés existants.",
      "Supprimer les scripts de test automatisés défaillants et en écrire de nouveaux à partir de zéro.",
      "Collaborer avec l'équipe de développement pour comprendre les récentes modifications apportées à l'application.",
      "Désactiver les scripts de test automatisés pour éviter les faux négatifs et continuer avec les tests manuels.",
      "Valider que l'environnement de test reflète l'environnement de production actuel.",
    ],
    answer: [0, 2],
    explanation:
      "Examiner les scripts existants révèle pourquoi ils échouent, tandis que la collaboration avec les développeurs éclaire la cause réelle (modifications de code ou d'interface) — des actions bien plus efficaces que réécrire ou désactiver les tests.",
  },
  {
    id: "ta4q25",
    domain: "Outils de test",
    difficulty: "facile",
    question: "Lequel des éléments suivants n'est PAS un avantage associé à l'utilisation d'un outil de gestion des tests ?",
    options: [
      "Stockage centralisé et gestion des cas de test et des données de test.",
      "Suivi en temps réel et rapport sur l'état d'exécution des tests et les métriques.",
      "Correction automatique des défauts détectés pendant l'exécution des tests.",
      "Meilleure collaboration et communication entre les membres de l'équipe de test.",
    ],
    answer: [2],
    explanation:
      "Les outils de gestion des tests aident à suivre et gérer les défauts, mais ne les corrigent jamais automatiquement — cette tâche reste toujours effectuée par les développeurs.",
  },
  {
    id: "ta4q26",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes décrit le mieux une caractéristique des cas de test efficaces ?",
    options: [
      "Les cas de test devraient être vagues pour couvrir plusieurs scénarios.",
      "Les cas de test devraient avoir des résultats attendus clairs et spécifiques.",
      "Les cas de test devraient être conçus pour être aussi longs que possible.",
      "Les cas de test devraient être écrits une fois et jamais mis à jour.",
    ],
    answer: [1],
    explanation:
      "Des résultats attendus clairs et spécifiques permettent de déterminer sans ambiguïté si un test réussit ou échoue, rendant le processus de test fiable et efficace.",
  },
  {
    id: "ta4q27",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un système de gestion de bibliothèque interdit l'emprunt de nouveaux livres tant que des livres en retard ne sont pas retournés (REQ 03-006). Quelle technique sera la plus utile pour concevoir des cas de test ?",
    options: [
      "Tests de cas d'utilisation",
      "Techniques de test boîte blanche",
      "Couverture des instructions",
      "Deviner des erreurs",
    ],
    answer: [0],
    explanation:
      "Les tests de cas d'utilisation permettent de simuler des scénarios réels d'utilisateurs avec ou sans livres en retard, vérifiant que le système applique correctement les restrictions d'emprunt selon le statut de l'utilisateur.",
  },
  {
    id: "ta4q28",
    domain: "Gestion des défauts",
    difficulty: "moyen",
    question:
      "Un rapport de défaut sur une fonctionnalité de recherche (caractères spéciaux ne renvoyant aucun résultat) a été rejeté comme non reproductible par les développeurs. Quelle information critique manque dans ce rapport ?",
    options: [
      "Étapes pour reproduire et résultat attendu",
      "Priorité et sévérité",
      "Références et statut du défaut",
      "Environnement de test et élément de test",
    ],
    answer: [0],
    explanation:
      "Sans étapes précises de reproduction et un résultat attendu clairement défini, les développeurs ne peuvent pas reproduire fiablement le problème ni vérifier une éventuelle correction.",
  },
  {
    id: "ta4q29",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Sur une plateforme de commerce électronique, l'analyste trace chaque exigence à la fonctionnalité implémentée correspondante pour s'assurer que rien ne manque. Quel type de test effectue-t-on ?",
    options: [
      "Tests de correction fonctionnelle",
      "Tests d'adéquation fonctionnelle",
      "Tests de complétude fonctionnelle",
      "Tests non fonctionnels",
    ],
    answer: [2],
    explanation:
      "Tracer les exigences vers les fonctionnalités implémentées afin de vérifier qu'aucune ne manque relève exactement du test de complétude fonctionnelle.",
  },
  {
    id: "ta4q30",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des réponses suivantes décrit l'ensemble d'activités le plus approprié lors de l'implémentation des tests ?",
    options: [
      "Identifier les conditions de test, créer un plan de test, exécuter des cas de test, enregistrer les défauts, évaluer les résultats.",
      "Analyser la base de test, créer des conditions de test, prioriser les conditions de test, créer des données de test, exécuter des cas de test.",
      "Développer des scripts de test, créer des données de test, configurer l'environnement de test, vérifier l'environnement de test, exécuter des scripts de test.",
      "Définir les objectifs de test, créer un plan de test, concevoir des cas de test, allouer des ressources, surveiller la progression des tests.",
    ],
    answer: [2],
    explanation:
      "Le développement des scripts, la préparation des données, la configuration et la vérification de l'environnement puis l'exécution des scripts sont les activités essentielles et exclusives de la phase d'implémentation des tests.",
  },
  {
    id: "ta4q31",
    domain: "Revues",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant les activités de révision des cas de test ?",
    options: [
      "Les analystes de test doivent revoir les cas de test pour en vérifier l'exactitude et l'exhaustivité avant l'exécution.",
      "Les revues par les pairs peuvent aider à identifier des problèmes dans les cas de test que l'auteur original aurait pu manquer.",
      "Les analystes de test doivent ignorer les retours des développeurs lors des révisions des cas de test pour éviter les biais.",
      "Les révisions régulières des cas de test peuvent améliorer leur qualité et leur efficacité au fil du temps.",
    ],
    answer: [2],
    explanation:
      "Les retours des développeurs sont au contraire précieux pour identifier des problèmes potentiels et assurer une couverture de test complète ; les ignorer nuirait à la qualité des cas de test.",
  },
  {
    id: "ta4q32",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Une initiative de bien-être (sommeil, examen physique annuel, séances de bien-être mental cumulables) définit plusieurs règles de réduction. Combien de cas de test sont nécessaires pour une couverture à 100 % des partitions d'équivalence valides ?",
    options: ["3 cas de test", "4 cas de test", "5 cas de test", "6 cas de test"],
    answer: [2],
    explanation:
      "En combinant les partitions valides pour chaque règle (sommeil suffisant/insuffisant, examen réalisé/non, une ou deux séances de bien-être mental), 5 cas de test couvrent l'ensemble des combinaisons valides sans redondance.",
  },
  {
    id: "ta4q33",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un programme de fidélité pour jeux vidéo (Débutant 1–30, Joueur 31–100, Pro 101–200, Légende >200) a des cas de test existants couvrant 28, 100, 101, 102 et 250. Quel pourcentage de couverture des valeurs limites est déjà atteint ?",
    options: ["25 %", "37,5 %", "50 %", "62,5 %"],
    answer: [0],
    explanation:
      "Sur les 8 valeurs limites attendues (1, 30, 31, 100, 101, 200, 201 et une borne supplémentaire), seules 100 et 101 correspondent réellement à des valeurs limites parmi les cas testés, soit 2/8 = 25 %.",
  },
  {
    id: "ta4q34",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une entreprise de logiciels propose des plans d'abonnement selon le type de plan (3), la méthode de paiement (3) et la durée (3). En utilisant la technique par paires, combien de cas de test sont nécessaires pour une couverture complète ?",
    options: ["9", "18", "27", "36"],
    answer: [0],
    explanation:
      "Pour trois facteurs à 3 niveaux chacun, un algorithme de test par paires produit typiquement 9 cas de test couvrant toutes les combinaisons de paires, bien en dessous des 27 combinaisons exhaustives.",
  },
  {
    id: "ta4q35",
    domain: "Techniques de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes décrit le mieux l'objectif des tests exploratoires ?",
    options: [
      "Les tests exploratoires sont utilisés pour vérifier que le logiciel répond à ses exigences spécifiées par le biais de cas de test formels.",
      "Les tests exploratoires sont une approche informelle où le testeur contrôle activement la conception des tests au fur et à mesure de leur exécution et utilise les informations obtenues pour concevoir de nouveaux tests.",
      "Les tests exploratoires impliquent l'exécution de tests automatisés pour s'assurer que l'application fonctionne correctement dans diverses conditions.",
      "Les tests exploratoires se concentrent sur la vérification des performances du logiciel sous des conditions de stress et de charge.",
    ],
    answer: [1],
    explanation:
      "Cette description reflète fidèlement la nature des tests exploratoires : apprentissage, conception et exécution simultanés, guidés par les observations du testeur au fil de l'exploration.",
  },
  {
    id: "ta4q36",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application financière calcule les intérêts des comptes d'épargne selon des tranches de solde (jusqu'à 1 000 $ : 1 %, 1 001–5 000 $ : 1,5 %, plus de 5 000 $ : 2 %). Comment dériver les cas de test pour cette exigence ?",
    options: [
      "Les cas de test doivent couvrir tous les soldes de compte possibles pour garantir un calcul des intérêts correct.",
      "Les cas de test doivent se concentrer sur les limites des plages de solde pour garantir un calcul des intérêts correct.",
      "Les cas de test doivent vérifier que les intérêts sont calculés et appliqués à la fin de chaque mois.",
      "Les cas de test doivent s'assurer que le système identifie et applique correctement les différents taux d'intérêt.",
    ],
    answer: [1],
    explanation:
      "Se concentrer sur les valeurs limites des plages de solde (1 000 $, 5 000 $ et leurs valeurs adjacentes) est la technique la plus efficace pour vérifier un calcul dépendant de tranches, sans avoir à tester exhaustivement chaque solde possible.",
  },
  {
    id: "ta4q37",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un projet dont les exigences changent fréquemment rend difficile le maintien des cas de test à jour. Quelle approche l'analyste devrait-il adopter pour gérer cette situation efficacement ?",
    options: [
      "Mettre à jour continuellement les cas de test après chaque changement d'exigence sans impliquer les autres membres de l'équipe.",
      "Mettre en œuvre une matrice de traçabilité des exigences pour s'assurer que tous les cas de test sont liés aux dernières exigences.",
      "Ignorer les changements mineurs dans les exigences et se concentrer uniquement sur les changements majeurs.",
      "Arrêter de créer de nouveaux cas de test jusqu'à ce que les exigences se stabilisent.",
    ],
    answer: [1],
    explanation:
      "Une matrice de traçabilité des exigences permet de vérifier systématiquement que chaque cas de test reste aligné avec les exigences actuelles, facilitant la gestion des changements fréquents.",
  },
  {
    id: "ta4q38",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Pour garantir la fiabilité d'une passerelle de paiement devant traiter les transactions avec précision et sécurité, l'analyste met en œuvre des tests d'injection de fautes. Quelle est la MEILLEURE approche ?",
    options: [
      "Introduire des fautes aléatoires pendant le fonctionnement normal de la passerelle et observer les résultats.",
      "Introduire délibérément des fautes spécifiques dans un environnement contrôlé et vérifier si la passerelle les gère correctement.",
      "Surveiller les journaux système pour détecter toute faute se produisant naturellement et tester comment le système s'en remet.",
      "Se fier aux tests unitaires effectués par les développeurs pour identifier et corriger les fautes potentielles.",
    ],
    answer: [1],
    explanation:
      "Introduire des fautes spécifiques et ciblées dans un environnement contrôlé garantit que le comportement du système sous des conditions de faute précises est systématiquement testé et vérifié, contrairement à une approche aléatoire ou passive.",
  },
  {
    id: "ta4q39",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un analyste de test se prépare à l'analyse des risques d'une application financière complexe intégrant de nombreux composants. Quelle démarche devrait-il suivre pour mener efficacement cette analyse ?",
    options: [
      "Identifier et prioriser les risques en fonction de leur impact potentiel et de leur probabilité d'occurrence.",
      "Se concentrer uniquement sur les risques techniques et ignorer les risques liés aux affaires.",
      "Supposer que l'équipe de développement a déjà identifié tous les risques pertinents et procéder aux tests.",
      "Créer des cas de test détaillés pour chaque scénario de risque possible, indépendamment de leur probabilité.",
    ],
    answer: [0],
    explanation:
      "Identifier et prioriser les risques selon leur impact et leur probabilité garantit un processus de test ciblé sur les zones les plus critiques, plutôt que de disperser l'effort de test uniformément.",
  },
  {
    id: "ta4q40",
    domain: "Revues",
    difficulty: "facile",
    question:
      "L'analyste de test est chargé de revoir la spécification des exigences pour identifier les ambiguïtés ou incohérences potentielles avant le début du développement. Quelle technique utiliser pour atteindre cet objectif ?",
    options: [
      "Organiser une réunion de révision formelle avec les parties prenantes pour discuter des exigences.",
      "Commencer immédiatement à rédiger des cas de test en se basant sur les exigences actuelles.",
      "Supposer que les exigences sont correctes et procéder à la planification des tests.",
      "Se concentrer uniquement sur les exigences non fonctionnelles, car les exigences fonctionnelles sont la responsabilité du développeur.",
    ],
    answer: [0],
    explanation:
      "Une réunion de révision formelle avec les parties prenantes permet d'identifier et de résoudre collaborativement les ambiguïtés ou incohérences avant que le développement ne commence, réduisant les risques en aval.",
  },
];
