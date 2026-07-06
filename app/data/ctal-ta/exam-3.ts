// ISTQB CTAL-TA (Advanced Level Test Analyst) — Examen blanc 3
import type { CTALQuestion } from "./types";

export const EXAM_3_QUESTIONS: CTALQuestion[] = [
  {
    id: "ta3q01",
    domain: "Gestion des défauts",
    difficulty: "moyen",
    question:
      "Lors de tests de performance d'une base de données santé, un ralentissement est constaté sous une charge utilisateur spécifique. Laquelle des affirmations suivantes est CORRECTE ?",
    options: [
      "La réponse lente de la base de données indique que les tests de performance sont correctement effectués.",
      "Le ralentissement identifié lors des tests de performance pourrait être dû à des insuffisances matérielles.",
      "Le ralentissement de la base de données sous une charge spécifique indique que l'analyste de test a écrit des scénarios de test défectueux.",
      "Le ralentissement identifié lors des tests de performance est causé par un défaut logiciel.",
    ],
    answer: [1],
    explanation:
      "Un ralentissement sous charge spécifique est souvent le symptôme d'une capacité matérielle insuffisante plutôt qu'un défaut logiciel avéré ou un scénario de test mal conçu — une analyse de la cause racine est nécessaire avant de conclure.",
  },
  {
    id: "ta3q02",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un cas d'utilisation « Inscription à un événement » comprend un flux principal, un comportement alternatif (annulation) et une exception (code de réduction invalide). Combien de cas de test sont nécessaires pour atteindre la couverture minimale ?",
    options: ["1", "2", "3", "4"],
    answer: [2],
    explanation:
      "La couverture minimale nécessite un cas pour le flux principal (chemin heureux), un pour l'exception (code invalide) et un pour le comportement alternatif (annulation), soit 3 cas de test au total.",
  },
  {
    id: "ta3q03",
    domain: "Techniques de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes décrit les caractéristiques typiques des techniques de test basées sur l'expérience ?",
    options: [
      "Elles nécessitent l'utilisation d'une documentation de test détaillée et de scripts de test formels.",
      "Elles reposent sur l'intuition et l'expérience préalable du testeur pour identifier les défauts.",
      "Elles sont principalement utilisées pour les tests de performance et de charge.",
      "Elles ne sont pas adaptées aux tests agiles et exploratoires.",
    ],
    answer: [1],
    explanation:
      "Les techniques basées sur l'expérience (devinette d'erreurs, tests exploratoires, checklists) tirent parti de l'intuition, de la connaissance du domaine et de l'historique des défauts du testeur — elles sont au contraire particulièrement adaptées aux contextes agiles et exploratoires.",
  },
  {
    id: "ta3q04",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une application de santé intègre gestion des patients, planification de rendez-vous et dossiers électroniques, avec de nouvelles fonctionnalités de télémédecine et de facturation développées avec un retour utilisateur minimal. Quelle caractéristique de qualité prioriser ?",
    options: ["Correctitude fonctionnelle", "Compatibilité", "Confidentialité", "Complétude fonctionnelle"],
    answer: [0],
    explanation:
      "Les nouvelles fonctionnalités critiques (télémédecine, facturation) nécessitent une validation approfondie de leur exactitude, condition préalable à la sécurité des patients et à la fiabilité de la facturation.",
  },
  {
    id: "ta3q05",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question:
      "Une application mobile doit fonctionner sur divers appareils Android avec différentes tailles d'écran et résolutions, en offrant une expérience cohérente. Quel type de test effectue-t-on ?",
    options: ["Test de performance", "Test de compatibilité", "Test fonctionnel", "Test d'utilisabilité"],
    answer: [1],
    explanation:
      "Vérifier le comportement du logiciel sur différents appareils, tailles d'écran et résolutions relève exactement du test de compatibilité.",
  },
  {
    id: "ta3q06",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Quel ensemble d'activités décrit le mieux ce sur quoi l'analyste de test doit se concentrer lors de la clôture des tests ?",
    options: [
      "Collecter les métriques de test, documenter les leçons apprises, finaliser la documentation de test, archiver les artefacts de test.",
      "Exécuter les cas de test restants, consigner les défauts finaux, finaliser la documentation, préparer le rapport de synthèse.",
      "Identifier les conditions de test, exécuter les tests finaux, préparer le rapport de synthèse, archiver les artefacts.",
      "Définir la stratégie de test, finaliser la documentation, documenter les leçons apprises, archiver les artefacts.",
    ],
    answer: [0],
    explanation:
      "La clôture des tests combine la collecte de métriques, la capitalisation des leçons apprises, la finalisation de la documentation et l'archivage du testware — un ensemble complet et cohérent pour cette phase.",
  },
  {
    id: "ta3q07",
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
      "Les cas de test sont dérivés des exigences pour les vérifier, jamais l'inverse : ils ne doivent pas remplacer une documentation d'exigences détaillée.",
  },
  {
    id: "ta3q08",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant les métriques de test et leur utilisation ?",
    options: [
      "Les métriques de test peuvent fournir des informations sur l'efficacité du processus de test et la qualité du produit.",
      "Les métriques telles que la couverture de test, la densité des défauts et le taux d'exécution sont couramment utilisées pour surveiller la progression.",
      "Les métriques de test ne doivent être collectées qu'à la fin de la phase de test pour éviter d'influencer le processus de test.",
      "Une analyse appropriée des métriques de test peut aider à identifier les domaines nécessitant des tests supplémentaires.",
    ],
    answer: [2],
    explanation:
      "Les métriques doivent au contraire être collectées en continu tout au long de la phase de test afin de surveiller la progression et de permettre des décisions éclairées en temps réel.",
  },
  {
    id: "ta3q09",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Une entreprise de services financiers lance un système de banque en ligne (connexions et vérification de solde existants, virements et paiement de factures nouveaux, à livrer avant fin d'année). Quelles techniques offriraient le meilleur équilibre couverture/efficacité ? Sélectionnez DEUX options.",
    options: [
      "Test basé sur les erreurs",
      "Tests de scénarios d'application",
      "Tableaux de décision",
      "Tests de transition d'état",
      "Analyse des valeurs limites",
    ],
    answer: [1, 3],
    explanation:
      "Les tests de scénarios d'application valident les nouveaux flux critiques (virements, paiement de factures) du point de vue utilisateur, tandis que les tests de transition d'état couvrent les nombreux changements d'état du processus de transaction — une combinaison efficace sous contrainte de délai.",
  },
  {
    id: "ta3q10",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une tâche par lots d'une application e-commerce échoue en rencontrant une commande avec zéro article, une condition inattendue. Quelle technique aurait le plus probablement détecté ce défaut ?",
    options: [
      "Analyse des valeurs limites",
      "Tests de transition d'état",
      "Partitionnement en classes d'équivalence",
      "Deviner les erreurs",
    ],
    answer: [3],
    explanation:
      "Un testeur expérimenté anticipant les conditions de bord improbables (comme une commande à zéro article) grâce à la devinette d'erreurs est le plus susceptible d'avoir envisagé ce scénario, que les autres techniques plus formelles ne ciblent pas systématiquement.",
  },
  {
    id: "ta3q11",
    domain: "Gestion des défauts",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est utilisée pour évaluer l'impact d'un défaut logiciel ?",
    options: ["Complexité et utilisabilité", "Priorité et sévérité", "Taille et portée", "Conception et mise en œuvre"],
    answer: [1],
    explanation:
      "La priorité (urgence de correction) et la sévérité (impact technique) sont les deux dimensions permettant d'évaluer et de hiérarchiser l'impact d'un défaut.",
  },
  {
    id: "ta3q12",
    domain: "Outils de test",
    difficulty: "moyen",
    question:
      "Quel est l'avantage principal de l'utilisation d'outils de préparation des données de test pour nettoyer ou anonymiser les données d'un système de production ?",
    options: [
      "Cela améliore les performances de l'environnement de test.",
      "Cela garantit que les données de test sont exemptes d'erreurs et de défauts.",
      "Cela supprime les informations personnelles, réduisant ainsi le risque de fuites de sécurité.",
      "Cela automatise la génération de cas de test basés sur les données nettoyées.",
    ],
    answer: [2],
    explanation:
      "L'anonymisation des données de production réduit avant tout le risque d'exposition de données personnelles sensibles lors des tests, un enjeu de conformité réglementaire (RGPD, HIPAA…).",
  },
  {
    id: "ta3q13",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes est correcte concernant les sous-caractéristiques de qualité et les défauts qu'elles ciblent ?",
    options: [
      "Les tests de complétude fonctionnelle identifient les fonctionnalités manquantes nécessaires pour répondre aux exigences spécifiées.",
      "Les tests de fiabilité fonctionnelle vérifient si le système fonctionne efficacement dans diverses conditions.",
      "Les tests d'utilisabilité fonctionnelle assurent que l'interface du système est cohérente et intuitive.",
      "Les tests de sécurité fonctionnelle vérifient si le système supporte des charges élevées sans dégradation.",
    ],
    answer: [0],
    explanation:
      "La complétude fonctionnelle cible spécifiquement les fonctionnalités manquantes ou incomplètes par rapport aux exigences ; les autres affirmations confondent des caractéristiques distinctes (fiabilité, utilisabilité, performance) avec des sous-caractéristiques fonctionnelles.",
  },
  {
    id: "ta3q14",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question: "Quand les tests d'utilisabilité sont-ils généralement effectués ?",
    options: [
      "Lors des tests de composants et des tests d'intégration",
      "Lors des tests d'intégration et des tests système",
      "Lors des tests système et des tests d'acceptation par les utilisateurs",
      "Lors des tests unitaires et des tests de composants",
    ],
    answer: [2],
    explanation:
      "Les tests d'utilisabilité impliquent typiquement de vrais utilisateurs ou parties prenantes, ce qui les place naturellement lors des tests système et d'acceptation utilisateur.",
  },
  {
    id: "ta3q15",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est VRAIE concernant l'implication de l'analyste de test dans le modèle en spirale ?",
    options: [
      "L'analyste de test ne doit commencer l'analyse des tests qu'après que tous les prototypes ont été développés.",
      "L'analyste de test doit être impliqué dans chaque cycle de la spirale.",
      "L'analyste de test doit uniquement se concentrer sur la phase finale des tests.",
      "L'implication de l'analyste de test n'est pas requise pendant la phase d'analyse des risques.",
    ],
    answer: [1],
    explanation:
      "Le modèle en spirale itère analyse des risques et prototypage à chaque cycle ; l'analyste de test doit donc être impliqué à chaque cycle pour planifier et exécuter les tests correspondants et affiner le produit progressivement.",
  },
  {
    id: "ta3q16",
    domain: "Revues",
    difficulty: "facile",
    question: "Parmi les activités suivantes, lesquelles un analyste de test doit-il prioriser pendant la phase d'analyse des exigences ?",
    options: [
      "Créer des scripts de test, configurer l'environnement de test, exécuter les cas de test.",
      "Examiner la documentation des exigences, identifier les exigences testables, définir les conditions de test.",
      "Concevoir des cas de test de haut niveau, finaliser le rapport de test, archiver les artefacts de test.",
      "Effectuer des tests de régression, analyser les journaux de défauts, mettre à jour le plan de test.",
    ],
    answer: [1],
    explanation:
      "Examiner les exigences, identifier celles qui sont testables et définir les conditions de test correspondantes sont les activités clés de cette phase précoce, avant même la conception des cas de test.",
  },
  {
    id: "ta3q17",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes ne décrit PAS l'utilisation des tests par tableau de décision pour soutenir les techniques de test en boîte noire ?",
    options: [
      "Les tests par tableau de décision aident à capturer des règles métier complexes.",
      "Les tests par tableau de décision sont utiles pour identifier toutes les combinaisons possibles d'entrées.",
      "Les tests par tableau de décision soutiennent l'identification des partitions d'équivalence.",
      "Les tests par tableau de décision aident à s'assurer que chaque condition est testée pour chaque règle.",
    ],
    answer: [2],
    explanation:
      "L'identification des partitions d'équivalence relève d'une technique distincte (le partitionnement d'équivalence) et n'est pas soutenue par les tables de décision, qui capturent des règles et conditions complexes.",
  },
  {
    id: "ta3q18",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Un cas d'utilisation « Acheter un livre en ligne » comprend un flux principal et trois exceptions (annulation, paiement invalide, erreur système). Combien de cas de test sont nécessaires pour la couverture minimale ?",
    options: ["3 cas de test", "4 cas de test", "5 cas de test", "6 cas de test"],
    answer: [1],
    explanation:
      "Il faut un cas pour le flux principal réussi et un cas pour chacune des trois exceptions, soit 4 cas de test au total pour la couverture minimale.",
  },
  {
    id: "ta3q19",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Un analyste de test prépare une session de test exploratoire pour une nouvelle application avec une documentation limitée. Quelle est la MEILLEURE approche pour garantir des tests efficaces ?",
    options: [
      "Planifier des sessions de test exploratoire autour des zones les plus critiques et à haut risque de l'application.",
      "Se concentrer uniquement sur les cas de test positifs pendant les tests exploratoires.",
      "Réaliser des tests exploratoires sans aucune préparation pour permettre une liberté et une créativité complètes.",
      "Compter uniquement sur les outils de test automatisés pour effectuer des tests exploratoires.",
    ],
    answer: [0],
    explanation:
      "Face à une documentation limitée, cibler les zones les plus critiques et à haut risque garantit que les parties les plus importantes de l'application sont explorées en priorité, sans pour autant exiger une préparation exhaustive.",
  },
  {
    id: "ta3q20",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question: "Une application web de shopping en ligne a été migrée depuis un ancien système qui gérait mal les volumes élevés d'utilisateurs simultanés. Sur quelle caractéristique de qualité l'analyste de test doit-il se concentrer le PLUS ?",
    options: ["Correction fonctionnelle", "Complétude fonctionnelle", "Efficacité de la performance", "Utilisabilité"],
    answer: [2],
    explanation:
      "L'amélioration majeure visée par la migration est la capacité à gérer efficacement un trafic élevé — l'efficacité de la performance est donc la priorité de test dans ce contexte.",
  },
  {
    id: "ta3q21",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question: "Un expert financier vérifie que les calendriers de paiements récurrents (US-78) sont correctement gérés par le système. Quel type de test effectue-t-on ?",
    options: ["Test de correction fonctionnelle", "Test d'accessibilité", "Test de portabilité", "Test de fiabilité"],
    answer: [0],
    explanation:
      "Vérifier que la fonctionnalité de paiements récurrents fonctionne comme spécifié relève directement du test de correction fonctionnelle.",
  },
  {
    id: "ta3q22",
    domain: "Gestion des défauts",
    difficulty: "moyen",
    question: "Pendant un sprint, plusieurs défauts ont été identifiés et corrigés. Quelles actions l'analyste de test doit-il entreprendre pour s'assurer que les correctifs sont efficaces et sans effet de bord ? Sélectionnez DEUX options.",
    options: [
      "Effectuer des tests de régression dans les zones affectées.",
      "Mener une analyse des causes profondes pour comprendre pourquoi les défauts sont survenus.",
      "Demander une révision du code par l'équipe de développement.",
      "Exécuter les cas de test liés aux défauts pour vérifier les correctifs.",
      "Mettre à jour le plan de test pour inclure les nouveaux défauts identifiés.",
    ],
    answer: [0, 3],
    explanation:
      "Les tests de régression garantissent l'absence d'effets de bord sur les fonctionnalités existantes, tandis que l'exécution des cas de test liés aux défauts confirme directement que les correctifs résolvent bien les problèmes signalés.",
  },
  {
    id: "ta3q23",
    domain: "Outils de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes n'est PAS un avantage de l'utilisation des outils de test automatisés ?",
    options: [
      "Les outils de test automatisés peuvent exécuter des tests plus rapidement et plus précisément que les tests manuels.",
      "Les outils de test automatisés peuvent éliminer complètement le besoin de tests manuels.",
      "Les outils de test automatisés peuvent être utilisés pour effectuer des tâches répétitives sans erreur humaine.",
      "Les outils de test automatisés peuvent aider à atteindre une couverture de test cohérente à travers différents cycles de test.",
    ],
    answer: [1],
    explanation:
      "L'automatisation ne remplace jamais totalement les tests manuels : certains scénarios (exploratoires, jugement humain) nécessitent toujours une intervention manuelle.",
  },
  {
    id: "ta3q24",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes doit être prise en compte lors de la conception des cas de test pour assurer l'efficacité et l'efficience des tests ?",
    options: [
      "Les cas de test doivent couvrir à la fois les scénarios positifs et négatifs.",
      "Les cas de test doivent se concentrer uniquement sur la fonctionnalité principale de l'application.",
      "Les cas de test doivent être conçus sans tenir compte de l'environnement de test.",
      "Les cas de test doivent être réutilisés dans tous les projets, indépendamment des différences dans les exigences.",
    ],
    answer: [0],
    explanation:
      "Couvrir à la fois les scénarios positifs (comportement attendu) et négatifs (gestion des erreurs, cas limites) garantit des tests complets, contrairement aux autres approches qui créent des lacunes ou ignorent le contexte.",
  },
  {
    id: "ta3q25",
    domain: "Gestion des défauts",
    difficulty: "moyen",
    question: "Un rapport de défaut pour MailClient v4.5 (le téléchargement de pièces jointes ne fonctionne pas) contient les étapes de reproduction, la gravité et la priorité. Quelle est l'information LA PLUS importante manquante ?",
    options: [
      "Type et taille du fichier à joindre",
      "Éléments de l'environnement de test et leurs numéros de version",
      "Nom du testeur et date du rapport",
      "Nombre de pièces jointes déjà ajoutées",
    ],
    answer: [0],
    explanation:
      "Le type et la taille du fichier peuvent directement expliquer le comportement défaillant de la fonctionnalité de pièce jointe ; sans cette information, il est difficile de diagnostiquer précisément le problème.",
  },
  {
    id: "ta3q26",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Une exigence de paie précise que les heures travaillées au-delà de 40 par semaine sont payées 1,5 fois le taux horaire. Quelle technique sera la PLUS utile pour concevoir des cas de test ?",
    options: [
      "Analyse des valeurs limites",
      "Partitionnement en classes d'équivalence",
      "Test des tables de décision",
      "Test de transition d'état",
    ],
    answer: [2],
    explanation:
      "Le test des tables de décision couvre systématiquement les combinaisons d'entrées (exactement 40h, moins de 40h, plus de 40h) et leurs sorties correspondantes (rémunération régulière ou majorée), garantissant une couverture complète de la règle métier.",
  },
  {
    id: "ta3q27",
    domain: "Processus de test",
    difficulty: "moyen",
    question: "Une charte de test #07.011 (« Explorer : fonctionnalité de mise à jour du profil utilisateur ; Avec : différentes combinaisons de données ; À découvrir : défauts liés ») est produite en sortie de quelle activité de test ?",
    options: ["Planification des tests", "Surveillance et contrôle des tests", "Analyse des tests", "Conception des tests"],
    answer: [3],
    explanation:
      "Une charte de test, qui planifie les scénarios et jeux de données à explorer pour un test exploratoire, est un artefact produit durant la conception des tests.",
  },
  {
    id: "ta3q28",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question: "Un système de gestion de contenu (CMS) permet de créer, éditer, supprimer et publier des articles. L'analyste évalue si ces fonctionnalités sont appropriées et suffisantes pour les tâches des utilisateurs. Quel type de test effectue-t-il ?",
    options: ["Test de correction fonctionnelle", "Test de pertinence fonctionnelle", "Test de complétude fonctionnelle", "Test non fonctionnel"],
    answer: [1],
    explanation:
      "Évaluer si les fonctionnalités fournies sont adéquates et pertinentes pour les tâches réelles des utilisateurs relève du test de pertinence (adéquation) fonctionnelle, distinct de la simple vérification de présence (complétude) ou d'exactitude (correction).",
  },
  {
    id: "ta3q29",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des réponses suivantes décrit l'ensemble d'activités le plus approprié sur lequel l'analyste de test doit se concentrer lors de la conception des tests ?",
    options: [
      "Analyser la base de tests, créer des conditions de test, concevoir des cas de test, créer des données de test, créer des scripts de test.",
      "Identifier les conditions de test, créer un plan de test, exécuter les cas de test, consigner les défauts, rapporter les résultats.",
      "Définir les objectifs de test, créer un plan de test, concevoir des cas de test, allouer les ressources, surveiller la progression.",
      "Analyser la base de tests, créer des conditions de test, déterminer les zones à risque, exécuter les cas de test, évaluer les résultats.",
    ],
    answer: [0],
    explanation:
      "Cette combinaison (analyse de la base de test, conditions de test, cas de test, données et scripts) couvre précisément et exclusivement les activités de la phase de conception des tests.",
  },
  {
    id: "ta3q30",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant les activités de planification des tests ?",
    options: [
      "Les analystes de test doivent définir des objectifs clairs et la portée de l'effort de test.",
      "Les analystes de test doivent élaborer un calendrier de test détaillé et affecter les ressources en conséquence.",
      "Les analystes de test doivent identifier les risques et développer des stratégies d'atténuation dans le plan de test.",
      "Les analystes de test doivent éviter d'impliquer les parties prenantes dans le processus de planification des tests pour maintenir l'indépendance.",
    ],
    answer: [3],
    explanation:
      "Impliquer les parties prenantes est au contraire essentiel pour comprendre leurs attentes, couvrir les exigences et établir des priorités réalistes dans le plan de test.",
  },
  {
    id: "ta3q31",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Système d'adhésion à une bibliothèque à quatre niveaux (Bronze 1–50, Argent 51–200, Or 201–400, Platine >400). Les cas de test existants couvrent 45, 200, 201, 202 et 401. Quel pourcentage de couverture des valeurs limites est déjà atteint ?",
    options: ["37,5 %", "50 %", "62,5 %", "75 %"],
    answer: [0],
    explanation:
      "Sur les 8 valeurs limites attendues (1, 50, 51, 200, 201, 400, 401 et une borne supplémentaire), seules 200, 201 et 401 sont couvertes par les tests existants, soit 3/8 = 37,5 %.",
  },
  {
    id: "ta3q32",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Une fonctionnalité de contrôle d'accès (authentification, niveau Admin/User/Guest, période autorisée) est testée par table de décision couvrant 5 règles. Laquelle des affirmations sur une suite de tests couvrant ces 5 règles est CORRECTE ?",
    options: [
      "Les cas de test devraient avoir deux entrées : statut d'authentification et niveau d'accès.",
      "Les données de test devraient contenir au moins deux utilisateurs de niveaux d'accès différents : un Admin et un User.",
      "La suite de tests devrait contenir au moins trois cas de test différents avec niveau d'accès = Guest couvrant les trois résultats possibles.",
      "Tout cas de test avec une entrée consistant en statut d'authentification, niveau d'accès et temps de demande couvrira exactement une règle du tableau de décision.",
    ],
    answer: [3],
    explanation:
      "Chaque combinaison spécifique des trois entrées (authentification, niveau d'accès, période) correspond exactement à une règle du tableau et ses actions associées.",
  },
  {
    id: "ta3q33",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Exigence R052 (« Le site web doit prendre en charge les paiements en ligne sécurisés ») évaluée avec une liste de contrôle (testabilité, identifiant, métriques de performance, traçabilité métier). Sans plus d'information, laquelle des déclarations est correcte ?",
    options: [
      "Toutes les éléments sont respectés.",
      "I et II sont respectés.",
      "Seule II est respectée.",
      "I et IV sont respectés.",
    ],
    answer: [1],
    explanation:
      "L'exigence est testable (I, la sécurité des paiements peut être vérifiée) et possède un identifiant unique (II, R052), mais elle n'inclut aucune métrique de performance ni traçabilité explicite vers des exigences commerciales.",
  },
  {
    id: "ta3q34",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Une exigence de recherche de livres (par titre, auteur ou ISBN), avec des critères de performance (< 2 s, 10 000 requêtes simultanées, tri par pertinence). Laquelle des affirmations sur la dérivation des cas de test est CORRECTE ?",
    options: [
      "Les cas de test devraient être créés pour vérifier que les résultats de recherche sont affichés correctement pour toutes les combinaisons possibles de titre, auteur et ISBN.",
      "Les cas de test devraient se concentrer uniquement sur la vérification que les résultats sont triés par pertinence.",
      "Les cas de test devraient être créés pour s'assurer que le système peut gérer 10 000 requêtes simultanées sans dégradation.",
      "Les cas de test devraient être créés pour vérifier que les résultats sont affichés en moins de 2 secondes.",
    ],
    answer: [0],
    explanation:
      "Vérifier la fonctionnalité principale de recherche pour toutes les combinaisons de critères (titre, auteur, ISBN) est la priorité de conception de test ; les autres exigences (performance, tri) sont importantes mais ne couvrent pas la fonctionnalité centrale.",
  },
  {
    id: "ta3q35",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "En révisant la stratégie de test d'un nouveau projet, l'analyste constate l'absence de plan pour les tests non fonctionnels (performance), alors que l'application doit gérer un grand nombre d'utilisateurs simultanés. Que doit-il faire ?",
    options: [
      "Ignorer le problème car les tests de performance ne relèvent généralement pas de la responsabilité de l'analyste de test.",
      "Informer le responsable des tests de l'absence du plan de tests de performance et suggérer de l'inclure dans la stratégie.",
      "Créer des cas de test de performance de manière indépendante et les ajouter au plan existant.",
      "Supposer que l'équipe de développement prendra en charge les tests de performance et procéder aux tests fonctionnels.",
    ],
    answer: [1],
    explanation:
      "L'analyste de test doit signaler toute lacune identifiée dans la stratégie de test au responsable, qui pourra décider de l'inclusion appropriée des tests de performance, plutôt que d'agir seul ou d'ignorer le problème.",
  },
  {
    id: "ta3q36",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "L'analyste de test doit communiquer la couverture des tests d'une fonctionnalité complexe à des parties prenantes ayant des connaissances techniques limitées. Quelle approche adopter ?",
    options: [
      "Présenter un rapport technique détaillé avec des détails au niveau du code et des scripts de test.",
      "Créer un résumé de haut niveau avec des diagrammes illustrant la couverture des tests pour les scénarios métier.",
      "Se concentrer sur la discussion des défis techniques rencontrés lors de la conception des tests.",
      "Fournir une liste de tous les cas de test ainsi que leurs résultats attendus.",
    ],
    answer: [1],
    explanation:
      "Un résumé visuel de haut niveau centré sur les scénarios métier communique efficacement la couverture des tests à un public non technique, contrairement à un rapport technique ou une liste exhaustive de cas de test.",
  },
  {
    id: "ta3q37",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question: "Un analyste de test doit tester l'utilisabilité d'une application mobile destinée à des utilisateurs de niveaux d'expertise technique variés. Quelle activité doit-il effectuer ?",
    options: [
      "Mener des sessions de tests d'utilisabilité avec des utilisateurs de différents horizons démographiques et techniques.",
      "Se concentrer uniquement sur les tests fonctionnels pour s'assurer que toutes les fonctionnalités fonctionnent comme prévu.",
      "Examiner les documents de conception de l'interface utilisateur et fournir des commentaires basés sur l'expérience personnelle.",
      "Effectuer des tests de charge pour s'assurer que l'application peut gérer un grand nombre d'utilisateurs simultanés.",
    ],
    answer: [0],
    explanation:
      "Impliquer de vrais utilisateurs aux profils variés fournit les informations les plus fiables sur la convivialité et l'accessibilité réelles de l'application, contrairement à une revue documentaire ou à des tests purement fonctionnels.",
  },
  {
    id: "ta3q38",
    domain: "Outils de test",
    difficulty: "moyen",
    question: "La configuration d'un environnement de test complexe impliquant plusieurs intégrations tierces est chronophage et sujette aux erreurs. Quelle action atténuerait le mieux ce risque ?",
    options: [
      "Automatiser le processus de configuration de l'environnement de test pour réduire les erreurs et gagner du temps.",
      "Confier les tâches de configuration à des testeurs juniors pour acquérir de l'expérience.",
      "Effectuer une configuration manuelle pour chaque cycle de test afin de garantir la précision.",
      "Ignorer la complexité de la configuration et se concentrer sur l'exécution des cas de test.",
    ],
    answer: [0],
    explanation:
      "Automatiser la configuration garantit un processus cohérent et efficace, réduisant fortement la probabilité d'erreurs humaines comparé à une configuration manuelle répétée ou confiée à du personnel inexpérimenté.",
  },
  {
    id: "ta3q39",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question: "Une application de santé (dossiers patients, médicaments, rendez-vous) doit se conformer à des réglementations strictes de confidentialité (type HIPAA). Quelle activité prioriser pour assurer cette conformité ?",
    options: [
      "Effectuer des tests de pénétration pour identifier et corriger les vulnérabilités de sécurité.",
      "Effectuer des tests de confidentialité des données pour s'assurer que les informations sensibles des patients sont protégées.",
      "Se concentrer sur les tests fonctionnels pour vérifier que toutes les fonctionnalités fonctionnent comme prévu.",
      "Effectuer des tests de charge pour s'assurer que l'application peut gérer un grand nombre d'utilisateurs simultanés.",
    ],
    answer: [1],
    explanation:
      "Les tests de confidentialité des données ciblent directement l'exigence réglementaire de protection des informations sensibles des patients, contrairement aux autres types de tests qui, bien qu'utiles, n'abordent pas spécifiquement la conformité.",
  },
  {
    id: "ta3q40",
    domain: "Processus de test",
    difficulty: "moyen",
    question: "Une plateforme d'apprentissage en ligne doit s'intégrer parfaitement avec des fournisseurs de contenu tiers. Quelle action prioriser pour garantir le succès de cette intégration ?",
    options: [
      "Réaliser des tests d'utilisabilité pour s'assurer que la plateforme est conviviale.",
      "Effectuer des tests de compatibilité pour vérifier que la plateforme fonctionne sur différents appareils et navigateurs.",
      "Développer et exécuter des tests d'intégration pour assurer une interaction transparente avec les fournisseurs de contenu tiers.",
      "Se concentrer sur les tests fonctionnels pour s'assurer que toutes les fonctionnalités de la plateforme fonctionnent comme prévu.",
    ],
    answer: [2],
    explanation:
      "L'enjeu explicite étant l'intégration avec des systèmes tiers, les tests d'intégration sont la priorité pour garantir un échange de données et une interaction fiables entre la plateforme et les fournisseurs externes.",
  },
];
