// ISTQB CTAL-TA (Advanced Level Test Analyst) — Examen blanc 2
import type { CTALQuestion } from "./types";

export const EXAM_2_QUESTIONS: CTALQuestion[] = [
  {
    id: "ta2q01",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Un champ « revenu » d'un formulaire de demande de prêt ne devrait accepter que des valeurs numériques, mais des lettres peuvent y être saisies sans que le système ne le détecte. Laquelle des affirmations suivantes est CORRECTE ?",
    options: [
      "La validation du champ « revenu » peut être considérée comme une déficience du processus de test.",
      "La possibilité de saisir des lettres dans le champ « revenu » est une erreur de l'utilisateur.",
      "La déficience de la validation du formulaire pourrait être une lacune des exigences.",
      "L'incapacité de l'analyste de test à détecter cette erreur indique un échec du processus de test.",
    ],
    answer: [2],
    explanation:
      "Le mécanisme de validation défaillant révèle le plus souvent une règle de validation mal spécifiée dans les exigences, plutôt qu'une erreur utilisateur ou un échec du processus de test — trouver ce défaut montre au contraire que les tests ont été efficaces.",
  },
  {
    id: "ta2q02",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application logicielle de transactions financières doit garantir l'exactitude des transactions et maintenir des pistes de vérification à des fins de conformité. Quelle technique de test l'analyste doit-il utiliser pour vérifier l'exactitude et la traçabilité ?",
    options: [
      "Analyse des valeurs limites pour tester les limites des valeurs d'entrée.",
      "Partitionnement en classes d'équivalence pour tester différents groupes de valeurs d'entrée.",
      "Tests basés sur les exigences pour s'assurer que toutes les exigences de conformité et de traçabilité sont respectées.",
      "Tests de transition d'état pour vérifier différents états des transactions financières.",
    ],
    answer: [2],
    explanation:
      "Seuls les tests basés sur les exigences garantissent explicitement que chaque exigence de conformité et de traçabilité est couverte et vérifiée ; les autres techniques ciblent des aspects fonctionnels plus étroits.",
  },
  {
    id: "ta2q03",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un nouveau système de gestion de la chaîne d'approvisionnement doit gérer de gros volumes de données de transaction et fournir des mises à jour en temps réel, avec des améliorations significatives du débit par rapport à un système précédent. Quelle caractéristique de qualité prioriser ?",
    options: [
      "Efficacité de la performance",
      "Sécurité",
      "Portabilité",
      "Complétude fonctionnelle",
    ],
    answer: [0],
    explanation:
      "Le volume de données et les mises à jour en temps réel exigent une validation approfondie de l'efficacité de la performance (débit, scalabilité, absence de dégradation), condition préalable au bon fonctionnement du système.",
  },
  {
    id: "ta2q04",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un système CRM intègre les plateformes de médias sociaux pour extraire automatiquement des données clients, avec différents rôles utilisateur. Quel niveau du cycle de développement est le plus tôt approprié pour tester la conformité fonctionnelle de l'extraction des données ?",
    options: [
      "Tester si le système CRM extrait correctement les données clients des réseaux sociaux doit être effectué lors des tests de composants.",
      "Tester la pertinence des fonctions attribuées aux différents rôles utilisateur doit être effectué lors des tests d'acceptation.",
      "L'interopérabilité du système CRM avec les plateformes de médias sociaux doit être testée lors des tests système.",
      "Tester si le système CRM génère des rapports précis doit être effectué lors des tests système.",
    ],
    answer: [0],
    explanation:
      "Les tests de composants (unitaires) sont le niveau le plus précoce où l'on peut valider isolément qu'une fonctionnalité spécifique — ici l'extraction de données — fonctionne correctement, avant son intégration au reste du système.",
  },
  {
    id: "ta2q05",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question: "Quand les tests d'utilisabilité sont-ils généralement effectués ?",
    options: [
      "Pendant les tests de composants et d'intégration",
      "Pendant les tests d'intégration et de système",
      "Pendant les tests système et d'acceptation des utilisateurs",
      "Pendant les tests d'acceptation, en particulier les tests alpha et bêta",
    ],
    answer: [2],
    explanation:
      "Les tests d'utilisabilité impliquent typiquement de vrais utilisateurs ou parties prenantes évaluant la convivialité du produit — un exercice pertinent lors des tests système et d'acceptation utilisateur, quand l'interface est suffisamment complète.",
  },
  {
    id: "ta2q06",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Un système d'information de santé comprend un portail web médecins, une application mobile patients et une intégration avec des systèmes de laboratoire. L'objectif principal est de garantir l'exactitude et la fiabilité des données échangées. Quelle caractéristique tester en premier ?",
    options: ["Utilisabilité", "Intégrité des données", "Sécurité", "Performance"],
    answer: [1],
    explanation:
      "Dans un contexte de santé où plusieurs composants échangent des données critiques, l'intégrité des données (exactitude, cohérence, absence de corruption lors des transferts) est primordiale : sans elle, les autres qualités deviennent secondaires.",
  },
  {
    id: "ta2q07",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Laquelle des affirmations suivantes est VRAIE concernant l'implication de l'analyste de test dans le modèle de cycle de vie itératif ?",
    options: [
      "L'analyste de test devrait commencer l'analyse des tests après que la première itération soit terminée.",
      "L'analyste de test devrait commencer l'analyse des tests au début de chaque itération.",
      "L'analyste de test ne devrait être impliqué que dans la dernière itération.",
      "L'analyste de test devrait commencer l'analyse des tests en même temps que le codage de la première itération.",
    ],
    answer: [1],
    explanation:
      "Débuter l'analyse des tests au début de chaque itération assure une évaluation continue des risques et des exigences, offrant un retour d'information précoce tout au long du projet itératif.",
  },
  {
    id: "ta2q08",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Laquelle des réponses suivantes décrit l'ensemble d'activités le plus complet sur lequel l'analyste de test devrait se concentrer pendant l'exécution des tests et la création de rapports ?",
    options: [
      "Exécuter les cas de test, consigner les défauts, retester les défauts corrigés, préparer le rapport de synthèse des tests.",
      "Identifier les conditions de test, créer les cas de test, exécuter les cas de test, préparer le rapport de synthèse des tests.",
      "Exécuter les cas de test, consigner les défauts, analyser les résultats des tests, créer le plan de test.",
      "Définir la stratégie de test, exécuter les cas de test, consigner les défauts, analyser les résultats des tests.",
    ],
    answer: [0],
    explanation:
      "Ces quatre activités (exécution, consignation des défauts, retest, rapport de synthèse) couvrent précisément et exclusivement le périmètre de la phase d'exécution et de reporting, sans mélanger des activités de conception ou de planification.",
  },
  {
    id: "ta2q09",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant l'utilisation des stratégies de tests basés sur les risques ?",
    options: [
      "Les tests basés sur les risques aident à prioriser les efforts de test en fonction de l'impact potentiel et de la probabilité des défauts.",
      "Les tests basés sur les risques nécessitent l'identification et l'évaluation des risques tôt dans le cycle de vie du projet.",
      "Les tests basés sur les risques garantissent que tous les cas de test de faible priorité sont exécutés avant ceux de haute priorité.",
      "Les tests basés sur les risques impliquent souvent d'ajuster le focus des tests à mesure que de nouveaux risques sont identifiés.",
    ],
    answer: [2],
    explanation:
      "C'est l'inverse : dans une approche basée sur les risques, les cas de test à haute priorité (risque élevé) sont exécutés en premier afin de traiter au plus tôt les zones les plus critiques.",
  },
  {
    id: "ta2q10",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application financière calcule l'éligibilité aux prêts selon le revenu, le score de crédit et le montant demandé, avec des cas particuliers (travailleurs indépendants, revenus fluctuants), sous un calendrier serré. Quelles techniques garantiraient une couverture complète ? Sélectionnez DEUX options.",
    options: [
      "Analyse des valeurs limites",
      "Deviner les erreurs",
      "Test de transition d'état",
      "Arbre de classification",
      "Test de table de décision",
    ],
    answer: [0, 4],
    explanation:
      "L'analyse des valeurs limites cible les seuils critiques des paramètres numériques (revenu, score, montant), tandis que le test de table de décision capture systématiquement les règles métier complexes et leurs combinaisons — ensemble, elles offrent une couverture efficace sous contrainte de temps.",
  },
  {
    id: "ta2q11",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Un champ « nom de profil » accepte entre 3 et 50 caractères (précision de 1). Quel ensemble de valeurs couvre les valeurs limites à deux points pour ce champ ?",
    options: ["2, 3, 4, 49, 50, 51", "3, 4, 49, 50", "1, 3, 50, 52", "0, 25, 50"],
    answer: [0],
    explanation:
      "La BVA à deux points teste la valeur juste en dessous, la limite elle-même et la valeur juste au-dessus pour chaque frontière : 2/3/4 pour la limite basse et 49/50/51 pour la limite haute.",
  },
  {
    id: "ta2q12",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Quels sont les deux facteurs clés à prendre en compte lors d'une analyse de risque pour un projet logiciel ?",
    options: ["Coût et calendrier", "Exigences et conception", "Probabilité et gravité", "Mise en œuvre et test"],
    answer: [2],
    explanation:
      "La probabilité d'occurrence et la gravité (impact) d'un risque sont les deux dimensions qui permettent d'évaluer l'exposition globale au risque et de prioriser les actions de mitigation.",
  },
  {
    id: "ta2q13",
    domain: "Techniques de test",
    difficulty: "facile",
    question: "Laquelle des descriptions suivantes décrit le mieux un cas de test de bas niveau ?",
    options: [
      "Un cas de test qui décrit les principales fonctionnalités à tester.",
      "Un cas de test qui comprend des étapes détaillées, des entrées spécifiques et des résultats attendus.",
      "Un cas de test qui couvre plusieurs scénarios avec une vue d'ensemble de haut niveau.",
      "Un cas de test qui est principalement utilisé pendant la phase initiale des tests.",
    ],
    answer: [1],
    explanation:
      "Le niveau de détail (étapes précises, données spécifiques, résultats attendus explicites) est la caractéristique distinctive d'un cas de test de bas niveau, garantissant reproductibilité et cohérence d'exécution.",
  },
  {
    id: "ta2q14",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Projet ONLINEBANK (banque en ligne, 4 user stories similaires à un scénario HIPPOS) : laquelle des propositions suivantes soutient le mieux ce scénario ?",
    options: [
      "Tests exploratoires seuls comme technique principale ; pour US1, partition d'équivalence et analyse des valeurs limites ; une technique boîte noire supplémentaire pour US4.",
      "Tests exploratoires et tests basés sur les défauts comme techniques principales ; pour US1, tests de tables de décision ; tests d'adaptabilité pour US3 ; tests basés sur les attaques avec liste de contrôle pour US4.",
      "Tests exploratoires seuls comme technique principale ; pour US1, tests d'interopérabilité ; tests d'adaptabilité pour US3 ; tests basés sur les attaques pour US4.",
      "Techniques boîte noire comme techniques principales ; pour US1, tests de transition d'état et analyse des valeurs limites ; tests exploratoires en supplément pour US4.",
    ],
    answer: [1],
    explanation:
      "La combinaison tests exploratoires + tests basés sur les défauts, complétée par les tables de décision (règles de calcul), les tests d'adaptabilité (navigateurs) et les tests basés sur les attaques avec checklist (sécurité), offre l'approche la plus équilibrée.",
  },
  {
    id: "ta2q15",
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
      "Vérifier que chaque fonction produit le résultat correct doit démarrer au plus tôt, dès les tests unitaires et de composants, afin de détecter les défauts avant qu'ils ne se propagent.",
  },
  {
    id: "ta2q16",
    domain: "Revues",
    difficulty: "moyen",
    question:
      "Spécification des exigences 102-B (écran de connexion utilisateur, système UM-02) : en utilisant la liste de contrôle de revue standard, quels éléments NE sont PAS remplis par la spécification ?",
    options: ["2, 3, 6", "3, 6, 7", "2, 5, 7", "4, 5, 6"],
    answer: [1],
    explanation:
      "Aucun niveau de priorité n'est défini (3), aucune traçabilité vers les exigences commerciales/marketing n'est fournie (6), et la traçabilité vers les cas d'utilisation mentionnés n'est pas montrée explicitement (7).",
  },
  {
    id: "ta2q17",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est VRAIE concernant l'implication de l'analyste de test dans le cadre Scrum ?",
    options: [
      "Dans Scrum, l'analyste de test doit commencer l'analyse de test après le développement de l'incrément de produit.",
      "Dans Scrum, l'analyste de test doit faire partie de l'équipe Scrum et participer à toutes les cérémonies Scrum.",
      "Dans Scrum, l'analyste de test ne doit être impliqué que dans la réunion de révision du sprint.",
      "Dans Scrum, le rôle de l'analyste de test n'est pas défini et dépend des exigences de l'équipe de développement.",
    ],
    answer: [1],
    explanation:
      "L'analyste de test participe à toutes les cérémonies Scrum (planification, daily, revue, rétrospective) en tant que membre à part entière de l'équipe, favorisant une collaboration et une détection précoce des problèmes.",
  },
  {
    id: "ta2q18",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "SecureLife lance OPTIMIZE (mise à jour d'un système hérité, équipe expérimentée) et MOBILE (nouvelle application mobile, équipe nouvelle sur les processus métier). Quel niveau de détail des cas de test est le plus adapté ? Sélectionnez DEUX options.",
    options: [
      "Dans OPTIMIZE, les cas de test doivent être rédigés à un niveau élevé, permettant à l'équipe expérimentée une flexibilité de test.",
      "Dans MOBILE, les cas de test doivent être rédigés à un niveau élevé, car l'équipe a de l'expérience en développement mobile.",
      "Dans les deux projets, les cas de test doivent être rédigés sous forme de cas de test détaillés.",
      "Dans OPTIMIZE, les cas de test doivent être rédigés à un niveau détaillé pour couvrir tous les aspects de performance et de scalabilité.",
      "Dans MOBILE, les cas de test doivent être rédigés à un niveau détaillé avec des procédures et de la documentation pour guider la nouvelle équipe.",
    ],
    answer: [0, 4],
    explanation:
      "L'équipe expérimentée d'OPTIMIZE peut exploiter des cas de test de haut niveau pour rester flexible ; l'équipe MOBILE, novice sur les processus métier, a besoin de cas de test détaillés et documentés pour être correctement guidée.",
  },
  {
    id: "ta2q19",
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
      "Dans les environnements itératifs et agiles, l'exécution des tests peut légitimement commencer avant que tous les cas de test soient conçus et examinés, en parallèle de ces activités.",
  },
  {
    id: "ta2q20",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un tableau de décision pour les options de paiement d'un magasin en ligne a été conçu avec 5 règles. En l'examinant pour sa complétude et son exactitude, lesquelles des constatations suivantes sont CORRECTES ? Sélectionnez DEUX options.",
    options: [
      "Le tableau est incomplet car trois conditions booléennes nécessitent 2³ = 8 règles.",
      "La règle R3 n'est pas correcte car elle offre potentiellement le prélèvement automatique aux clients enregistrés avec une carte de crédit expirée.",
      "La valeur '-' pour la condition C2 dans la règle R4 devrait plutôt être 'N/A', car le système ne dispose d'aucune information sur les cartes de crédit des clients non enregistrés.",
      "La valeur '-' pour la condition C3 dans la règle R5 est incorrecte, car le prélèvement automatique devrait être proposé si le montant ≤ 500 €.",
      "Le tableau est incohérent car pour un client enregistré avec une carte expirée et un montant > 500 €, les règles R2 et R3 s'appliquent toutes deux.",
    ],
    answer: [0, 2],
    explanation:
      "Trois conditions booléennes exigent bien 8 règles pour une couverture complète (le tableau en propose 5, il est donc incomplet), et l'état de la carte de crédit est réellement inconnu — et non simplement indifférent — pour un client non enregistré, ce qui appelle 'N/A' plutôt que '-'.",
  },
  {
    id: "ta2q21",
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
      "L'identification des règles d'une table de décision relève d'une technique distincte ; les tests de transition d'état se concentrent exclusivement sur les états et leurs transitions.",
  },
  {
    id: "ta2q22",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Application mobile multilingue (4 langues), 4 appareils, 2 systèmes d'exploitation. En utilisant la technique par paires, quel est le NOMBRE MINIMUM de cas de test pour couvrir toutes les paires ?",
    options: ["6", "9", "16", "32"],
    answer: [2],
    explanation:
      "Pour des facteurs à 4, 4 et 2 niveaux, un algorithme de test par paires produit généralement 16 cas de test couvrant toutes les combinaisons de paires — bien moins que les 32 combinaisons exhaustives.",
  },
  {
    id: "ta2q23",
    domain: "Gestion des défauts",
    difficulty: "facile",
    question:
      "Un rapport de défaut pour MobileBank v2.5 (bouton de transfert ne répond pas) inclut étapes de reproduction, résultat attendu/réel, gravité et priorité. Quelle information LA PLUS importante manque ?",
    options: [
      "Nom du testeur et date du rapport",
      "Détails de l'environnement de test (modèle de l'appareil, version du système d'exploitation)",
      "Identification de l'objet de test",
      "Impact sur les intérêts des parties prenantes",
    ],
    answer: [1],
    explanation:
      "Pour une application mobile, les détails de l'environnement de test sont essentiels car le comportement peut varier fortement selon l'appareil et la version d'OS, ce qui est indispensable pour reproduire le défaut.",
  },
  {
    id: "ta2q24",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une application de demande de carte de crédit applique des règles selon l'âge (18–65), le salaire (trois tranches), la dette existante et le nombre de cartes déjà détenues. Combien de cas de test sont nécessaires pour une couverture à 100 % des partitions d'équivalence des paramètres valides ?",
    options: ["4 cas de test", "6 cas de test", "8 cas de test", "10 cas de test"],
    answer: [2],
    explanation:
      "En combinant les trois tranches de salaire, les deux tranches de dette et les deux tranches de nombre de cartes (en excluant les combinaisons redondantes ou automatiquement rejetées), 8 cas de test suffisent pour couvrir toutes les partitions valides.",
  },
  {
    id: "ta2q25",
    domain: "Test des caractéristiques de qualité",
    difficulty: "moyen",
    question:
      "Une application de médias sociaux propose des histoires éphémères (images, vidéos, texte). Un expert UX effectue un test exploratoire de l'interface. Quel type de test effectue-t-on ?",
    options: [
      "Test de l'exactitude fonctionnelle",
      "Test de convivialité",
      "Test de sécurité",
      "Test de charge",
    ],
    answer: [1],
    explanation:
      "L'implication d'un expert UX évaluant l'interface et l'expérience globale relève directement du test de convivialité (utilisabilité), et non de la correction fonctionnelle, de la sécurité ou de la charge.",
  },
  {
    id: "ta2q26",
    domain: "Techniques de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes explique le mieux l'utilisation des tests par paires ?",
    options: [
      "Les tests par paires sont utilisés pour tester toutes les combinaisons possibles de valeurs d'entrée afin d'assurer une couverture complète.",
      "Les tests par paires se concentrent sur le test de paires de valeurs d'entrée afin de réduire le nombre de cas de test tout en couvrant la plupart des défauts.",
      "Les tests par paires impliquent de tester le comportement du système dans des conditions de stress pour identifier les problèmes de performance.",
      "Les tests par paires sont utilisés pour regrouper les entrées qui sont censées produire des résultats similaires, réduisant ainsi le nombre de cas de test.",
    ],
    answer: [1],
    explanation:
      "Les tests par paires (all-pairs) couvrent systématiquement toutes les combinaisons discrètes de paires de paramètres, réduisant fortement le nombre de cas par rapport à un test exhaustif tout en conservant une bonne détection des défauts.",
  },
  {
    id: "ta2q27",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Un analyste de test travaille sur un projet aux exigences peu claires et utilise les tests exploratoires comme technique principale. Quelle action prendrait-il le plus probablement ?",
    options: [
      "Développer des cas de test détaillés avant de commencer les sessions de test exploratoire.",
      "Utiliser des sessions limitées dans le temps avec des chartes spécifiques pour guider les activités de test exploratoire.",
      "Éviter de documenter les sessions de test puisque le test exploratoire est informel.",
      "Se concentrer sur les tests de performance car ils sont plus importants que la fonctionnalité.",
    ],
    answer: [1],
    explanation:
      "Les sessions limitées dans le temps guidées par une charte apportent structure et focus au test exploratoire, sans pour autant nécessiter des cas de test détaillés préétablis.",
  },
  {
    id: "ta2q28",
    domain: "Outils de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes NE décrit PAS une responsabilité typique d'un analyste de test ?",
    options: [
      "Développer des scripts de test automatisés à utiliser dans les tests de régression.",
      "Identifier les conditions de test basées sur l'analyse de la documentation de base de test.",
      "Préparer des données de test et s'assurer qu'elles répondent aux critères nécessaires pour les tests.",
      "Exécuter des cas de test et consigner les défauts trouvés pendant les tests.",
    ],
    answer: [0],
    explanation:
      "Le développement de scripts d'automatisation relève généralement d'un ingénieur en automatisation des tests, et non des responsabilités centrales d'un analyste de test.",
  },
  {
    id: "ta2q29",
    domain: "Gestion des défauts",
    difficulty: "facile",
    question:
      "Un rapport de défaut pour MobileBank v2.3 (bouton « Transférer » ne répond pas) contient les étapes de reproduction, la gravité et la priorité. Quelle est l'information la plus importante qui manque ?",
    options: [
      "Résolution de l'écran de l'appareil mobile",
      "Identification de l'objet de test",
      "Éléments de l'environnement de test et leurs numéros de version",
      "État de la connexion réseau pendant le test",
    ],
    answer: [2],
    explanation:
      "Les versions du système d'exploitation, du navigateur ou d'autres logiciels pertinents sont essentielles pour permettre aux développeurs de reproduire fidèlement le défaut et d'en comprendre le contexte.",
  },
  {
    id: "ta2q30",
    domain: "Techniques de test",
    difficulty: "facile",
    question:
      "Une exigence bancaire précise : si le solde tombe en dessous de 500 $, une notification par e-mail est envoyée, sinon aucune notification n'est envoyée. Quelles techniques seront les plus utiles pour concevoir des cas de test ?",
    options: [
      "Techniques de test en boîte blanche",
      "Techniques de test en boîte noire",
      "Techniques de test basées sur l'expérience",
      "Techniques de test basées sur les risques",
    ],
    answer: [1],
    explanation:
      "L'exigence se formule uniquement en termes de comportement observable (entrée/sortie), sans référence à la structure interne du code — les techniques en boîte noire (partitionnement, valeurs limites) sont donc les plus adaptées.",
  },
  {
    id: "ta2q31",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un tableau de décision (niveau d'adhésion, montant d'achat, code promo → catégories A à D) a déjà des cas de test pour les catégories A, B et C. Lequel des cas de test suivants, ajouté à l'ensemble existant, augmentera la couverture ?",
    options: [
      "Membre Or, Montant d'achat > 500 $, Code promo : NON ; résultat attendu : catégorie D",
      "Membre Argent, Montant d'achat < 100 $, Code promo : OUI ; résultat attendu : catégorie B",
      "Membre Bronze, Montant d'achat 100–500 $, Code promo : NON ; résultat attendu : catégorie C",
      "Aucun cas de test supplémentaire ne peut augmenter la couverture déjà atteinte.",
    ],
    answer: [0],
    explanation:
      "Les catégories A, B et C sont déjà couvertes par TC1–TC3 ; seule la catégorie D (membre Or, achat élevé, sans code promo) reste non testée, et le cas proposé la couvre exactement.",
  },
  {
    id: "ta2q32",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Une application web (CONNECTER, VOIR les détails, METTRE À JOUR, SE DÉCONNECTER) a 5 cas de test avec priorités et dépendances logiques définies. Quel cas de test doit être exécuté en quatrième position ?",
    options: ["TC2", "TC3", "TC1", "TC5"],
    answer: [3],
    explanation:
      "En respectant l'ordre logique (connexion → affichage → mise à jour → déconnexion) et les priorités, TC1 (connexion), TC2 (affichage), TC3 (mise à jour) sont exécutés avant TC5 (déconnexion), qui vient donc en quatrième position.",
  },
  {
    id: "ta2q33",
    domain: "Processus de test",
    difficulty: "facile",
    question:
      "Un risque (probabilité élevée, impact élevé) concernant la gestion d'un volume élevé de transactions est traité par des tests de stress et la mise en œuvre d'un auto-scaling. Quelle mesure est proposée pour répondre à ce risque ?",
    options: ["Acceptation du risque", "Plan de contingence", "Atténuation du risque", "Transfert du risque"],
    answer: [2],
    explanation:
      "Les tests de stress et l'auto-scaling visent à réduire la probabilité ou l'impact du risque avant qu'il ne se matérialise : c'est la définition même de l'atténuation du risque, à distinguer d'un plan de contingence qui prépare une réponse après coup.",
  },
  {
    id: "ta2q34",
    domain: "Test des caractéristiques de qualité",
    difficulty: "facile",
    question:
      "Un testeur vérifie que l'application calcule correctement les intérêts sur les comptes d'épargne selon le solde et le taux d'intérêt. Quel type de test effectue-t-il ?",
    options: [
      "Test de correction fonctionnelle",
      "Test d'adéquation fonctionnelle",
      "Test de complétude fonctionnelle",
      "Test non fonctionnel",
    ],
    answer: [0],
    explanation:
      "Vérifier l'exactitude d'un calcul par rapport aux exigences spécifiées est l'essence même du test de correction fonctionnelle.",
  },
  {
    id: "ta2q35",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des réponses suivantes décrit l'ensemble d'activités le plus approprié lors de l'analyse des tests ?",
    options: [
      "Identifier les objectifs de test, créer un plan de test, concevoir des cas de test, exécuter des cas de test, surveiller la progression des tests.",
      "Analyser la base de test, identifier les conditions de test, déterminer les zones de risque, prioriser les conditions de test, sélectionner les techniques de test.",
      "Définir les objectifs de test, créer les conditions de test, allouer les ressources, surveiller la progression des tests, évaluer les résultats des tests.",
      "Créer un plan de test, sélectionner les outils de test, identifier les conditions de test, exécuter les cas de test, enregistrer les défauts.",
    ],
    answer: [1],
    explanation:
      "L'analyse de la base de test, l'identification et la priorisation des conditions de test, la détermination des zones de risque et la sélection des techniques constituent le cœur cohérent de la phase d'analyse des tests.",
  },
  {
    id: "ta2q36",
    domain: "Processus de test",
    difficulty: "facile",
    question: "Laquelle des affirmations suivantes est INCORRECTE concernant les activités de conception de cas de test ?",
    options: [
      "Les analystes de test doivent créer des cas de test détaillés couvrant toutes les exigences spécifiées.",
      "Les analystes de test doivent prioriser les cas de test en fonction du risque et de la criticité des fonctionnalités.",
      "Les analystes de test doivent s'assurer que les cas de test sont conçus pour être répétables et réutilisables.",
      "Les analystes de test peuvent sauter la création de cas de test pour les fonctionnalités moins critiques afin de gagner du temps.",
    ],
    answer: [3],
    explanation:
      "Même les fonctionnalités moins critiques doivent être testées pour garantir la qualité globale ; la priorisation par risque ne justifie jamais d'omettre entièrement des tests.",
  },
  {
    id: "ta2q37",
    domain: "Processus de test",
    difficulty: "moyen",
    question:
      "Un projet CRM a identifié trois risques (intégration système : probabilité moyenne/impact élevé ; migration de données : probabilité élevée/impact élevé ; difficulté d'utilisation : probabilité moyenne/impact moyen). Quelle action de mitigation prioriser en premier ?",
    options: [
      "Réaliser des tests d'intégration pour garantir la compatibilité avec les logiciels existants.",
      "Effectuer des tests de migration de données avec un sous-ensemble de données réelles.",
      "Réaliser des sessions de tests d'utilisabilité avec les utilisateurs finaux.",
      "Réviser les supports de formation des utilisateurs pour améliorer la facilité d'utilisation.",
    ],
    answer: [1],
    explanation:
      "Le risque de perte de données lors de la migration combine la probabilité la plus élevée et un impact élevé, ce qui en fait la priorité absolue par rapport aux autres risques évalués.",
  },
  {
    id: "ta2q38",
    domain: "Techniques de test",
    difficulty: "difficile",
    question:
      "Un programme de bien-être (sommeil, examen physique, séances de bien-être mental avec réductions cumulables) définit plusieurs règles. Combien de cas de test sont nécessaires pour une couverture à 100 % des partitions d'équivalence valides ?",
    options: ["3 cas de test", "4 cas de test", "5 cas de test", "6 cas de test"],
    answer: [2],
    explanation:
      "En combinant les partitions valides de chaque règle (sommeil suffisant/insuffisant, examen réalisé/non, une ou deux séances de bien-être mental), 5 cas de test couvrent l'ensemble des partitions valides sans redondance.",
  },
  {
    id: "ta2q39",
    domain: "Techniques de test",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes NE décrit PAS l'utilisation des tests de cas d'utilisation pour soutenir les techniques de test en boîte noire ?",
    options: [
      "Les tests de cas d'utilisation soutiennent l'identification des exigences fonctionnelles.",
      "Les tests de cas d'utilisation soutiennent l'identification des scénarios et des flux de travail.",
      "Les tests de cas d'utilisation soutiennent l'identification des interactions utilisateur avec le système.",
      "Les tests de cas d'utilisation soutiennent l'identification des exigences non fonctionnelles.",
    ],
    answer: [3],
    explanation:
      "Les tests de cas d'utilisation se concentrent sur les exigences fonctionnelles, les scénarios et les interactions utilisateur ; ils ne visent pas à identifier les exigences non fonctionnelles (performance, sécurité, utilisabilité).",
  },
  {
    id: "ta2q40",
    domain: "Techniques de test",
    difficulty: "moyen",
    question:
      "Une assurance auto propose des options selon le type de voiture (4), le type de carburant (3) et la région (3). En utilisant la technique par paires, combien de cas de test sont nécessaires pour couvrir toutes les paires ?",
    options: ["12", "24", "36", "48"],
    answer: [0],
    explanation:
      "Pour des facteurs à 4, 3 et 3 niveaux, un algorithme de test par paires aboutit typiquement à 12 cas de test couvrant toutes les combinaisons de paires possibles, bien en dessous des 36 combinaisons exhaustives.",
  },
];
