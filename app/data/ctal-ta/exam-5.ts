// ISTQB CTAL-TA (Advanced Level Test Analyst) — Examen blanc 5
import type { CTALQuestion } from "./types";

export const EXAM_5_QUESTIONS: CTALQuestion[] = [
  {
    id: "ta5q01",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Une application de banque en ligne calcule les intérêts pour différents types de comptes (épargne, courant, dépôt à terme) selon différents taux. À quel niveau du cycle de développement les tests de conformité fonctionnelle doivent-ils être effectués le plus tôt ? Sélectionnez DEUX options.",
    options: [
      "Tester que les intérêts sont calculés correctement pour les comptes d'épargne doit être effectué lors des tests unitaires.",
      "Tester la pertinence des options de calcul des intérêts pour les utilisateurs professionnels doit être effectué lors des tests d'acceptation.",
      "Tester l'interopérabilité de la fonctionnalité de calcul des intérêts avec le système de gestion des comptes doit être effectué lors des tests système.",
      "Tester que les intérêts sont calculés correctement pour les comptes de dépôt à terme doit être effectué lors des tests d'intégration.",
      "La couverture requise de toutes les méthodes de calcul des intérêts doit être déterminée lors des tests d'intégration système.",
    ],
    answer: [0, 3],
    explanation:
      "Les tests unitaires permettent de vérifier isolément le calcul des intérêts pour les comptes d'épargne dès le plus bas niveau, tandis que les tests d'intégration valident le calcul pour les comptes de dépôt à terme une fois combinés à d'autres composants.",
  },
  {
    id: "ta5q02",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un trader expérimenté effectue un test exploratoire d'un tableau de bord de trading en temps réel, évaluant sa réactivité et l'exactitude des données en temps réel. Quel type de test effectue-t-on ?",
    options: [
      "Test de l'efficacité des performances",
      "Test d'accessibilité",
      "Test d'adaptabilité",
      "Test de l'adéquation fonctionnelle",
    ],
    answer: [0],
    explanation:
      "La réactivité du tableau de bord et l'exactitude des données en temps réel relèvent directement de l'efficacité des performances, distincte de l'accessibilité, de l'adaptabilité ou de l'adéquation fonctionnelle.",
  },
  {
    id: "ta5q03",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes est correcte concernant les sous-caractéristiques de qualité et les défauts qu'elles ciblent ?",
    options: [
      "Les tests de portabilité fonctionnelle vérifient que le système peut être facilement transféré d'un environnement à un autre.",
      "Les tests d'efficacité fonctionnelle garantissent que l'interface du système est facile à utiliser et à comprendre.",
      "Les tests de correction fonctionnelle vérifient la conformité aux normes de codage et aux meilleures pratiques.",
      "Les tests de fiabilité fonctionnelle impliquent d'évaluer les performances du système sous des charges et des conditions de stress variables.",
    ],
    answer: [0],
    explanation:
      "La portabilité est bien la sous-caractéristique qui garantit la facilité de transfert d'un environnement à un autre ; les autres affirmations confondent des caractéristiques distinctes (utilisabilité, qualité du code, performance).",
  },
  {
    id: "ta5q04",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un nouveau système de réservation hôtelière offre des prix dynamiques selon la demande, avec différents types d'utilisateurs. À quel niveau du cycle de développement les tests de conformité fonctionnelle doivent-ils être effectués le plus tôt ?",
    options: [
      "Tester que les algorithmes de tarification dynamique ajustent les tarifs selon la demande doit être effectué lors des tests des composants.",
      "Tester la pertinence des fonctions attribuées aux différents types d'utilisateurs doit être effectué lors des tests d'acceptation.",
      "Tester l'interopérabilité du système de réservation avec les passerelles de paiement doit être effectué lors des tests système.",
      "Tester que le système de réservation traite les paiements correctement doit être effectué lors des tests système.",
    ],
    answer: [0],
    explanation:
      "Les tests des composants permettent de valider isolément et au plus tôt l'exactitude des algorithmes de tarification dynamique, avant leur intégration au reste du système de réservation.",
  },
  {
    id: "ta5q05",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une plateforme collaborative d'édition de documents (application web, application de bureau hors ligne, serveur cloud) doit garantir que les modifications de documents sont correctement synchronisées sur toutes les plateformes. Quelle caractéristique tester en premier ?",
    options: ["Utilisabilité", "Interopérabilité", "Sécurité", "Cohérence des données"],
    answer: [3],
    explanation:
      "L'objectif explicite étant la synchronisation correcte des modifications entre plateformes en ligne et hors ligne, la cohérence des données est la caractéristique prioritaire à tester.",
  },
  {
    id: "ta5q06",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un produit logiciel d'entreprise doit s'intégrer à plusieurs systèmes de gestion de bases de données (MySQL, PostgreSQL, Oracle). Quel type de test effectue-t-on en vérifiant cette interaction ?",
    options: ["Test de performance", "Test de compatibilité", "Test d'intégration", "Test d'utilisabilité"],
    answer: [2],
    explanation:
      "Vérifier que le logiciel fonctionne correctement avec différents SGBD relève du test d'intégration, qui valide les interactions entre composants ou systèmes distincts.",
  },
  {
    id: "ta5q07",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est VRAIE concernant le moment où l'analyste de test doit être impliqué dans le modèle en cascade ?",
    options: [
      "Dans les projets en cascade, l'analyste de test doit commencer l'analyse des tests en même temps que le codage.",
      "Dans les projets en cascade, l'analyste de test doit commencer l'analyse des tests après la fin du codage.",
      "Dans les projets en cascade, l'analyste de test doit commencer l'analyse des tests en même temps que la spécification des exigences.",
      "Dans les projets en cascade, l'analyste de test doit commencer l'analyse des tests pendant la phase de test système.",
    ],
    answer: [2],
    explanation:
      "Commencer l'analyse des tests dès la spécification des exigences permet de comprendre les exigences, d'identifier celles qui sont testables et de préparer les cas de test en parallèle, plutôt que d'attendre le codage ou une phase ultérieure.",
  },
  {
    id: "ta5q08",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes n'explique PAS correctement pourquoi les environnements de test doivent être soigneusement gérés et maintenus ?",
    options: [
      "Une bonne gestion de l'environnement de test garantit que les résultats des tests sont fiables et peuvent être reproduits.",
      "Le maintien de l'environnement de test aide à identifier et isoler les défauts spécifiques à l'environnement.",
      "Un environnement de test soigneusement géré garantit qu'aucun défaut ne se produira dans l'environnement de production.",
      "Une gestion appropriée de l'environnement de test garantit que l'environnement est configuré pour correspondre le plus possible à l'environnement de production.",
    ],
    answer: [2],
    explanation:
      "Même avec un environnement de test parfaitement géré, il est impossible de garantir qu'aucun défaut ne surviendra en production — cette affirmation est excessive et donc incorrecte.",
  },
  {
    id: "ta5q09",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un composant logiciel de synchronisation de calendriers doit s'intégrer avec une nouvelle plateforme non prise en charge. Laquelle des affirmations suivantes NE se qualifie PAS comme un échec d'interopérabilité ?",
    options: [
      "Les événements du calendrier ne sont pas synchronisés sur toutes les plateformes qui intègrent le composant.",
      "10 % des applications de calendrier n'affichent pas correctement les événements sur la nouvelle plateforme.",
      "Les rappels de calendrier ne sont pas affichés sur certains appareils.",
      "Les utilisateurs trouvent le menu des paramètres du calendrier difficile à naviguer.",
    ],
    answer: [3],
    explanation:
      "La difficulté de navigation dans un menu relève de la convivialité et non de la capacité du composant à interagir avec d'autres systèmes ou plateformes.",
  },
  {
    id: "ta5q10",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un système de banque en ligne (application web, API tierce, serveur backend) doit garantir que les transactions sont traitées correctement et en toute sécurité. Quelle caractéristique tester en premier ?",
    options: ["Utilisabilité", "Interopérabilité", "Sécurité", "Performance"],
    answer: [2],
    explanation:
      "L'objectif explicite étant la sécurité et la fiabilité des transactions, la sécurité est la caractéristique de qualité la plus critique à tester en priorité.",
  },
  {
    id: "ta5q11",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "L'application SafeHome permet aux propriétaires d'armer/désarmer leur système de sécurité à distance et de recevoir des alertes en temps réel. Quelles conditions de test sont les plus appropriées pour vérifier ces exigences ? Sélectionnez DEUX options.",
    options: [
      "L'application est compatible avec plusieurs plateformes mobiles.",
      "L'utilisateur peut armer et désarmer le système rapidement et de manière fiable.",
      "L'interface de l'application est conviviale et facile à naviguer.",
      "L'application envoie des alertes en temps réel dans les secondes qui suivent une violation de la sécurité.",
      "L'application enregistre toutes les actions des utilisateurs pour référence future.",
    ],
    answer: [1, 3],
    explanation:
      "Ces deux conditions correspondent directement aux deux exigences énoncées : armement/désarmement fiable à distance, et alertes en temps réel en cas de violation.",
  },
  {
    id: "ta5q12",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "L'application StudyMate permet de créer des horaires d'étude et fournit des analyses de performance. Quelles conditions de test sont les plus appropriées pour vérifier ces exigences ? Sélectionnez DEUX options.",
    options: [
      "L'utilisateur peut créer et modifier facilement des horaires d'étude.",
      "L'application fournit des rappels pour les séances d'étude à venir.",
      "Les analyses de performance sont précises et mises à jour en temps réel.",
      "L'application prend en charge plusieurs langues pour les utilisateurs internationaux.",
      "L'utilisateur peut partager ses progrès d'étude sur les réseaux sociaux.",
    ],
    answer: [0, 2],
    explanation:
      "Ces deux conditions correspondent directement aux deux exigences énoncées : gestion facile des horaires d'étude et analyses de performance précises et à jour.",
  },
  {
    id: "ta5q13",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Spécification des exigences 304-D (gestion des profils utilisateurs, système SN-05) : en utilisant la liste de contrôle de revue standard, quels éléments NE sont PAS remplis par la spécification ?",
    options: ["2, 3, 6", "1, 4, 5", "3, 5, 7", "2, 6, 7"],
    answer: [3],
    explanation:
      "La spécification ne liste pas de critères d'acceptation (2), aucune traçabilité vers les exigences commerciales/marketing (6), et aucune traçabilité explicite vers les cas d'utilisation mentionnés (7).",
  },
  {
    id: "ta5q14",
    domain: "Outils de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes ne décrit PAS un avantage de l'utilisation des outils d'intégration continue ?",
    options: [
      "Les outils d'intégration continue exécutent automatiquement des tests sur les nouvelles modifications de code pour identifier les défauts tôt.",
      "Les outils d'intégration continue garantissent que seule la version finale du code est testée, réduisant ainsi le nombre de cycles de test nécessaires.",
      "Les outils d'intégration continue facilitent la collaboration en intégrant fréquemment le code de plusieurs développeurs.",
      "Les outils d'intégration continue fournissent un retour immédiat sur la qualité du code et sur les problèmes d'intégration.",
    ],
    answer: [1],
    explanation:
      "Les outils CI testent au contraire chaque modification de code, pas seulement la version finale, ce qui multiplie les cycles de test pour détecter les défauts au plus tôt et le plus souvent possible.",
  },
  {
    id: "ta5q15",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est VRAIE concernant l'implication des analystes de tests dans les pratiques DevOps ?",
    options: [
      "Dans DevOps, le rôle de l'analyste de tests se limite aux tests post-déploiement.",
      "Dans DevOps, l'analyste de tests doit être impliqué dans les processus d'intégration continue et de tests continus.",
      "Dans DevOps, l'analyste de tests ne doit être impliqué que pendant la phase de développement.",
      "Dans DevOps, l'implication de l'analyste de tests est facultative et peut être décidée par l'équipe de développement.",
    ],
    answer: [1],
    explanation:
      "DevOps met l'accent sur l'intégration continue et les tests continus ; l'analyste de test doit y être impliqué en continu pour garantir une détection précoce et fréquente des défauts.",
  },
  {
    id: "ta5q16",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes NE décrit PAS l'utilisation du test basé sur les cas d'utilisation pour soutenir les techniques de test en boîte noire ?",
    options: [
      "Le testing basé sur les cas d'utilisation aide à s'assurer que toutes les exigences fonctionnelles sont couvertes.",
      "Le testing basé sur les cas d'utilisation est utile pour identifier les interactions des utilisateurs avec le système.",
      "Le testing basé sur les cas d'utilisation soutient l'identification des valeurs limites.",
      "Le testing basé sur les cas d'utilisation aide à valider la fonctionnalité de bout en bout d'un système.",
    ],
    answer: [2],
    explanation:
      "L'identification des valeurs limites relève de l'analyse des valeurs limites, une technique distincte non soutenue par le test basé sur les cas d'utilisation.",
  },
  {
    id: "ta5q17",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "SecureLife lance AUDIT (auditeurs expérimentés, connaissance limitée des tests logiciels) et PORTAL (développeurs web/UX, doivent valider la fonctionnalité). Quels environnements de test sont les MEILLEURS pour ces projets ? Sélectionnez DEUX options.",
    options: [
      "Pour AUDIT, mettez en place un environnement de test qui imite l'environnement de production afin d'assurer des scénarios d'audit réalistes.",
      "Pour PORTAL, utilisez un environnement simulé pour tester diverses interactions utilisateur et conditions de charge.",
      "Pour AUDIT, créez un environnement sandbox où les développeurs peuvent tester librement de nouvelles fonctionnalités d'audit.",
      "Pour PORTAL, établissez un environnement de test d'acceptation utilisateur (UAT) pour recueillir les retours des utilisateurs potentiels.",
      "Pour AUDIT, mettez en place un environnement isolé pour tester la sécurité et les contrôles d'accès sans affecter les données de production.",
    ],
    answer: [0, 3],
    explanation:
      "Un environnement imitant la production assure des scénarios d'audit réalistes pour AUDIT, tandis qu'un environnement UAT permet à PORTAL de recueillir des retours d'utilisateurs réels sur la convivialité de la nouvelle interface.",
  },
  {
    id: "ta5q18",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes NE décrit PAS l'utilisation de la partition d'équivalence pour soutenir les techniques de test de boîte noire ?",
    options: [
      "La partition d'équivalence aide à réduire le nombre de cas de test en regroupant les entrées.",
      "La partition d'équivalence garantit que chaque partition est testée au moins une fois.",
      "La partition d'équivalence soutient l'identification des règles à utiliser dans une table de décision.",
      "La partition d'équivalence est utile pour tester différentes combinaisons de paramètres d'entrée.",
    ],
    answer: [3],
    explanation:
      "Tester différentes combinaisons de paramètres d'entrée relève du test par paires ou combinatoire, et non du partitionnement d'équivalence qui regroupe les entrées produisant des résultats similaires.",
  },
  {
    id: "ta5q19",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une assurance voyage propose des options selon le type de voyage (3), la destination (2) et la durée (2). En utilisant la technique par paires, combien de cas de test sont nécessaires pour une couverture complète ?",
    options: ["3", "6", "8", "12"],
    answer: [1],
    explanation:
      "Pour des facteurs à 3, 2 et 2 niveaux, un algorithme de test par paires produit typiquement 6 cas de test couvrant toutes les combinaisons de paires possibles.",
  },
  {
    id: "ta5q20",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un système de gestion des soins de santé identifie trois risques : erreurs de saisie des données patients (forte probabilité, impact élevé), lenteur du système en période de pointe (probabilité moyenne, impact moyen), non-conformité réglementaire (faible probabilité, impact élevé). Quelle action prioriser en premier ?",
    options: [
      "Mener des tests d'utilisabilité détaillés pour simplifier et améliorer les formulaires de saisie des données des patients.",
      "Mettre en œuvre des tests de résistance pour garantir que le système peut gérer efficacement les périodes de pointe.",
      "Effectuer un examen approfondi de la conformité pour garantir que le système répond à toutes les exigences réglementaires.",
      "Planifier des revues de code fréquentes pour identifier et corriger les problèmes potentiels dès leur apparition.",
    ],
    answer: [0],
    explanation:
      "Le risque d'erreurs de saisie combine la plus forte probabilité et un impact élevé sur les soins aux patients ; simplifier les formulaires via des tests d'utilisabilité est donc l'action la plus urgente.",
  },
  {
    id: "ta5q21",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un cas d'utilisation « Enregistrer un entraînement » (application de fitness) comprend un flux principal et deux exceptions (navigation hors formulaire, échec de validation). Combien de cas de test sont nécessaires pour la couverture minimale ?",
    options: ["2 cas de test", "3 cas de test", "4 cas de test", "5 cas de test"],
    answer: [1],
    explanation:
      "Un cas pour le flux principal réussi et un cas pour chacune des deux exceptions donnent un total de 3 cas de test pour la couverture minimale.",
  },
  {
    id: "ta5q22",
    domain: "Techniques de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes explique le mieux l'utilisation du partitionnement en classes d'équivalence dans les tests ?",
    options: [
      "Le partitionnement en classes d'équivalence est utilisé pour regrouper les entrées qui devraient produire des résultats similaires, réduisant ainsi le nombre de cas de test.",
      "Le partitionnement en classes d'équivalence se concentre sur les limites entre les différentes valeurs d'entrée.",
      "Le partitionnement en classes d'équivalence implique de tester le comportement du système dans différents états.",
      "Le partitionnement en classes d'équivalence est utilisé pour analyser les relations entre les différentes parties du système.",
    ],
    answer: [0],
    explanation:
      "Le partitionnement d'équivalence divise les données d'entrée en partitions censées produire des résultats similaires, réduisant le nombre de cas de test nécessaires tout en couvrant les scénarios pertinents.",
  },
  {
    id: "ta5q23",
    domain: "Gestion des défauts",
    difficulty: "facile",
    question: "Un rapport de défaut pour ShopEasy v1.2 (le processus de paiement échoue) contient les étapes de reproduction, la gravité et la priorité. Quelle est l'information la PLUS importante qui manque ?",
    options: [
      "Nom du testeur et date du rapport",
      "Éléments de l'environnement de test et leurs numéros de version",
      "Identification de l'objet de test",
      "Détails du message d'erreur et journaux",
    ],
    answer: [3],
    explanation:
      "Les détails du message d'erreur et les journaux système sont essentiels pour que les développeurs puissent diagnostiquer précisément la cause de l'échec du paiement.",
  },
  {
    id: "ta5q24",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une application bancaire mobile a été améliorée avec la détection de fraude en temps réel et les transferts de fonds instantanés. Il est essentiel que les utilisateurs fassent confiance à ces nouvelles fonctionnalités. Sur quelle caractéristique se concentrer le PLUS ?",
    options: ["Exactitude fonctionnelle", "Utilisabilité", "Sécurité", "Portabilité"],
    answer: [2],
    explanation:
      "Avec des fonctionnalités critiques comme la détection de fraude et les transferts instantanés, la sécurité devient la priorité absolue, toute faille pouvant entraîner une perte financière et de confiance.",
  },
  {
    id: "ta5q25",
    domain: "Outils de test",
    difficulty: "moyen",
    question: "Des cas de test réussissent dans un environnement mais échouent dans un autre. Quelles actions l'analyste de test doit-il entreprendre pour résoudre cette incohérence ? Sélectionnez DEUX options.",
    options: [
      "Vérifier que les deux environnements sont configurés de manière identique.",
      "Réécrire les cas de test échoués pour les rendre plus robustes.",
      "Consulter l'équipe de gestion de l'environnement pour identifier d'éventuelles divergences.",
      "Ignorer les tests échoués dans l'environnement problématique et se concentrer sur d'autres tests.",
      "Augmenter la journalisation et la surveillance dans l'environnement échoué pour recueillir plus d'informations.",
    ],
    answer: [0, 2],
    explanation:
      "Vérifier la cohérence de configuration entre les deux environnements et consulter l'équipe de gestion de l'environnement permettent d'isoler si le problème provient d'une divergence d'environnement plutôt que d'un véritable défaut.",
  },
  {
    id: "ta5q26",
    domain: "Processus de test",
    difficulty: "moyen",
    question: "Lors de la préparation des cas de test pour une nouvelle fonctionnalité, laquelle des considérations suivantes n'est généralement PAS pertinente ?",
    options: [
      "S'assurer que les cas de test sont conformes aux critères d'acceptation.",
      "Inclure des cas de test qui valident l'intégrité des données.",
      "Concevoir des cas de test pour échouer intentionnellement afin de tester la journalisation des erreurs.",
      "S'assurer que les cas de test sont indépendants et peuvent être exécutés dans n'importe quel ordre.",
    ],
    answer: [2],
    explanation:
      "Concevoir des cas de test avec pour intention principale de les faire échouer n'est pas une pratique standard ; la gestion des erreurs doit être testée via des scénarios négatifs intégrés aux cas de test réguliers.",
  },
  {
    id: "ta5q27",
    domain: "Gestion des défauts",
    difficulty: "moyen",
    question: "Un rapport de défaut pour ShopEase v1.2 (la recherche de produits renvoie des résultats incorrects) contient les étapes de reproduction, la gravité et la priorité. Quelle est l'information la PLUS importante qui manque ?",
    options: [
      "Le navigateur et sa version utilisés pour les tests",
      "Les produits non liés spécifiques affichés dans les résultats",
      "L'heure à laquelle le test a été effectué",
      "Les mots-clés utilisés dans les recherches précédentes",
    ],
    answer: [0],
    explanation:
      "Le navigateur et sa version peuvent expliquer un comportement d'affichage incorrect spécifique à un navigateur, information cruciale pour reproduire et diagnostiquer le problème.",
  },
  {
    id: "ta5q28",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Un risque de perte de données lors d'une mise à niveau système (probabilité moyenne, impact élevé) est traité par des sauvegardes régulières et un plan de restauration. Quelle mesure est proposée ?",
    options: ["Acceptation du risque", "Plan de contingence", "Atténuation des risques", "Transfert de risque"],
    answer: [1],
    explanation:
      "Prévoir des sauvegardes et un plan de restauration pour réagir si le risque se matérialise correspond à un plan de contingence, distinct d'une atténuation qui viserait à réduire la probabilité même de l'incident.",
  },
  {
    id: "ta5q29",
    domain: "Gestion des défauts",
    difficulty: "moyen",
    question: "Un rapport de défaut sur un formulaire (erreur lors de la soumission de grandes entrées de texte) a été rejeté comme non reproductible. Quelle information critique manque dans ce rapport ?",
    options: [
      "Résultat attendu et résultat réel",
      "Références et statut du défaut",
      "Environnement de test et élément de test",
      "Priorité et gravité",
    ],
    answer: [2],
    explanation:
      "Sans les détails de l'environnement de test (version, configuration) et l'élément de test précis concerné, les développeurs ne peuvent pas reproduire fidèlement le problème.",
  },
  {
    id: "ta5q30",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant les activités d'exécution des tests ?",
    options: [
      "Les analystes de test doivent s'assurer que tous les cas de test sont exécutés exactement selon le plan de test initial sans aucune déviation.",
      "Les analystes de test doivent surveiller l'avancement de l'exécution des tests et ajuster le calendrier au besoin.",
      "Les analystes de test doivent consigner les défauts pour tout problème rencontré lors de l'exécution des tests.",
      "Les analystes de test doivent réexécuter les cas de test qui ont échoué précédemment après que les défauts ont été corrigés.",
    ],
    answer: [0],
    explanation:
      "Exiger une exécution rigide sans aucune déviation est irréaliste : des ajustements sont souvent nécessaires face à l'évolution des exigences, des priorités ou des découvertes en cours de test.",
  },
  {
    id: "ta5q31",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un site e-commerce identifie trois risques : trafic élevé en période de pointe (probabilité élevée, impact moyen), échec intermittent de la passerelle de paiement (probabilité moyenne, impact élevé), inaccessibilité pour utilisateurs handicapés (probabilité moyenne, impact élevé). Quelle action prioriser en premier ?",
    options: [
      "Effectuer des tests de performance pour s'assurer que le site peut gérer les pics de trafic.",
      "Tester minutieusement l'intégration de la passerelle de paiement.",
      "Effectuer des tests d'accessibilité avec des utilisateurs handicapés.",
      "Optimiser le code du site pour améliorer la performance.",
    ],
    answer: [1],
    explanation:
      "La défaillance de la passerelle de paiement combine impact élevé et probabilité significative sur une fonctionnalité critique du commerce électronique, ce qui en fait la priorité absolue.",
  },
  {
    id: "ta5q32",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Une fonctionnalité de connexion bancaire est testée par table de décision (authentification, mot de passe correct, compte verrouillé → 5 règles). Laquelle des affirmations sur une suite de tests couvrant ces 5 règles est CORRECTE ?",
    options: [
      "Les cas de test devraient avoir deux entrées : le statut d'enregistrement de l'utilisateur et la correction du mot de passe.",
      "Les données de test devraient contenir au moins deux utilisateurs : un avec un compte verrouillé et un avec un mot de passe incorrect.",
      "La suite de tests devrait contenir au moins trois cas de test différents avec un compte verrouillé = Faux couvrant les trois résultats possibles.",
      "Tout cas de test avec une entrée consistant en le statut d'authentification, la correction du mot de passe et le statut de verrouillage du compte couvrira exactement une règle du tableau de décision.",
    ],
    answer: [3],
    explanation:
      "Chaque combinaison spécifique des trois entrées (authentification, mot de passe, verrouillage) correspond exactement à une règle du tableau et à ses actions associées.",
  },
  {
    id: "ta5q33",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Une application de réservation de voyages (vols, hôtels, voitures de location) a des exigences distinctes pour chaque type de réservation. Laquelle des affirmations décrit le mieux l'approche pour dériver les cas de test ?",
    options: [
      "Des cas de test devraient être créés pour vérifier la fonctionnalité de réservation de vols, d'hôtels et de voitures de location de manière indépendante.",
      "Des cas de test devraient se concentrer sur des scénarios de bout en bout où les utilisateurs réservent les trois services en une seule transaction.",
      "Des cas de test devraient être créés pour vérifier la validation des saisies pour tous les champs des formulaires de réservation.",
      "Des cas de test devraient s'assurer que les résultats de recherche pour les vols, les hôtels et les voitures de location sont précis et pertinents.",
    ],
    answer: [0],
    explanation:
      "Chaque fonctionnalité de réservation ayant ses propres exigences distinctes, les tester de manière indépendante garantit que chacune fonctionne correctement de façon autonome avant d'envisager des scénarios combinés.",
  },
  {
    id: "ta5q34",
    domain: "Gestion des défauts",
    difficulty: "moyen",
    question:
      "Lors de l'exécution des tests système, plusieurs défauts critiques sont trouvés dans un module développé par un nouveau membre de l'équipe, moins expérimenté. Quelle action l'analyste de test doit-il prendre ?",
    options: [
      "Signaler les défauts et recommander une formation supplémentaire pour le nouveau membre de l'équipe.",
      "Ignorer le problème et continuer à tester d'autres modules.",
      "Corriger manuellement les défauts et continuer à tester le module.",
      "Réattribuer le module à un développeur plus expérimenté sans signaler les défauts.",
    ],
    answer: [0],
    explanation:
      "Signaler formellement les défauts tout en recommandant une formation traite à la fois le problème immédiat et sa cause sous-jacente, contrairement aux autres options qui ignorent ou contournent le problème.",
  },
  {
    id: "ta5q35",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "L'environnement de test doit simuler différents emplacements géographiques pour tester les fonctionnalités de localisation d'une application web (langue et format corrects selon la localisation). Quelle étape suivre pour une vérification complète ?",
    options: [
      "Configurer l'environnement de test pour imiter différents emplacements géographiques et vérifier le contenu pour chaque emplacement.",
      "Tester uniquement l'application en utilisant la langue et le format par défaut.",
      "Utiliser un réseau privé virtuel (VPN) pour simuler différents emplacements et vérifier manuellement la langue et le format.",
      "Compter sur des tests automatisés qui vérifient la réponse de l'application aux différents paramètres de localisation sans vérification manuelle.",
    ],
    answer: [0],
    explanation:
      "Configurer directement l'environnement de test pour simuler chaque emplacement géographique et vérifier systématiquement le contenu correspondant garantit une couverture complète, plus fiable qu'un VPN ponctuel ou une automatisation sans vérification.",
  },
  {
    id: "ta5q36",
    domain: "Processus de test",
    difficulty: "moyen",
    question: "Quelle est la MEILLEURE méthode pour définir les critères d'entrée et de sortie de la phase de test système ?",
    options: [
      "Définir les critères d'entrée basés sur l'achèvement des tests unitaires et d'intégration, et les critères de sortie basés sur la réussite de tous les cas de test.",
      "Définir les critères d'entrée qui nécessitent uniquement la préparation des modules critiques, et les critères de sortie remplis lorsque l'environnement de test est stable.",
      "Spécifier les critères d'entrée incluant la disponibilité des données de test, et les critères de sortie remplis lorsque tous les défauts de haute priorité sont résolus.",
      "Établir les critères d'entrée basés sur la disponibilité des scripts de test, et les critères de sortie basés sur le nombre de défauts trouvés.",
    ],
    answer: [2],
    explanation:
      "Cette approche garantit que les tests démarrent avec les ressources nécessaires (données de test) et que le système n'est mis en production qu'après résolution des défauts critiques, un équilibre pragmatique entre couverture et risque.",
  },
  {
    id: "ta5q37",
    domain: "Outils de test",
    difficulty: "facile",
    question: "Quel critère l'analyste de test doit-il prioriser lors de l'évaluation d'un nouvel outil de gestion des défauts pour son équipe ?",
    options: [
      "La capacité de l'outil à s'intégrer aux outils de gestion des tests et de développement existants de l'équipe.",
      "Le nombre d'utilisateurs que l'outil peut prendre en charge simultanément.",
      "Le design de l'interface utilisateur et la facilité d'utilisation de l'outil.",
      "Le coût de l'outil par rapport au budget actuel.",
    ],
    answer: [0],
    explanation:
      "La capacité d'intégration avec l'écosystème d'outils existant est le facteur le plus structurant pour un suivi des défauts sans rupture et une communication fluide entre équipes.",
  },
  {
    id: "ta5q38",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question: "Une institution financière développe une plateforme de trading devant traiter les transactions en temps réel avec des données de marché précises. Quel type de test inclure en priorité ?",
    options: [
      "Tests d'utilisabilité pour s'assurer que la plateforme est facile à utiliser pour les traders.",
      "Tests de performance pour s'assurer que la plateforme peut traiter les transactions en temps réel de manière efficace.",
      "Tests exploratoires pour identifier les défauts potentiels dans la plateforme.",
      "Tests de régression pour vérifier que les nouvelles modifications n'introduisent pas de nouveaux défauts.",
    ],
    answer: [1],
    explanation:
      "Le traitement en temps réel et la précision sous charge sont les exigences les plus critiques d'une plateforme de trading ; les tests de performance sont donc la priorité.",
  },
  {
    id: "ta5q39",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application bancaire calcule les intérêts des prêts selon le montant, la durée et le type de taux, avec conformité réglementaire requise. Quelle technique de test utiliser pour garantir l'exactitude de cette fonctionnalité ?",
    options: [
      "Analyse des valeurs limites",
      "Partitionnement en classes d'équivalence",
      "Test par table de décision",
      "Test de transition d'état",
    ],
    answer: [2],
    explanation:
      "Le test par table de décision couvre systématiquement toutes les combinaisons pertinentes de paramètres (montant, durée, type de taux), garantissant l'exactitude requise par la conformité réglementaire.",
  },
  {
    id: "ta5q40",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un système de billetterie automatisé pour le transport public doit gérer différents types de billets, méthodes de paiement et mises à jour en temps réel. Quelles activités inclure dans le plan de test pour une évaluation complète ?",
    options: [
      "Effectuer des tests de bout en bout pour valider le flux complet de la sélection des billets à la confirmation de paiement.",
      "Réaliser des tests de sécurité pour s'assurer que les informations de paiement sont traitées en toute sécurité.",
      "Exécuter des tests de compatibilité pour vérifier que le système fonctionne sur différents appareils et plateformes.",
      "Toutes les réponses ci-dessus.",
    ],
    answer: [3],
    explanation:
      "Une évaluation complète nécessite de combiner tests de bout en bout, tests de sécurité et tests de compatibilité, chacun couvrant un aspect distinct et complémentaire du système.",
  },
];
