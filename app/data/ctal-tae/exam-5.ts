// ISTQB CTAL-TAE (Test Automation Engineer) — Examen blanc 5
// 39 questions converties depuis l'examen blanc source (le document source ne
// fournissait que 39 questions numérotées malgré son titre annonçant 40),
// réparties selon les 7 chapitres du syllabus officiel CTAL-TAE v2.0.
import type { CTALTAEQuestion } from "./types";

export const EXAM_5_QUESTIONS: CTALTAEQuestion[] = [
  {
    id: "tae5q01",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "En tant qu'ingénieur en automatisation des tests (TAE), vous évaluez de nouvelles versions des bibliothèques principales. Quel est l'ordre correct pour accomplir cela ?",
    options: [
      "Effectuer un pilote ; déterminer l'impact ; créer un plan d'adoption ; mettre à jour les dépendances",
      "Créer un plan d'adoption ; déterminer l'impact ; mettre à jour les dépendances ; effectuer un pilote",
      "Mettre à jour les dépendances ; déterminer l'impact ; effectuer un pilote ; créer un plan d'adoption",
      "Déterminer l'impact ; mettre à jour les dépendances ; créer un plan d'adoption ; effectuer un pilote",
    ],
    answer: [1],
    explanation:
      "Le processus recommandé consiste à créer d'abord un plan d'adoption, puis déterminer l'impact des changements, mettre à jour les dépendances, et enfin réaliser un pilote pour valider que les nouvelles versions n'ont pas d'effets négatifs avant un déploiement complet.",
  },
  {
    id: "tae5q02",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "L'interface graphique de l'application « SIZEM » est fournie via Google Chrome, avec des fonctionnalités riches du client. Des outils commerciaux sont requis pour automatiser les cas de test fonctionnels au niveau du GUI. Quelle technique de script serait la PLUS appropriée ?",
    options: [
      "Scripting basé sur des mots-clés (Keyword-driven scripting)",
      "Scripting basé sur les données (Data-driven scripting)",
      "Scripting structuré",
      "Scripting linéaire",
    ],
    answer: [0],
    explanation:
      "Le scripting basé sur des mots-clés est particulièrement adapté pour automatiser des cas de test fonctionnels dans des applications à interface graphique riche, en réutilisant des actions définies sous forme de mots-clés.",
  },
  {
    id: "tae5q03",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous avez été chargé de configurer un TAS pour un SUT récemment publié. Les tests doivent couvrir toutes les API, mais les contraintes de temps peuvent empêcher une couverture complète. Quelle assertion serait correcte dans ce scénario ?",
    options: [
      "En raison du degré d'intrusion, vous devez prévoir une faible probabilité de faux positifs lors de l'exécution des tests automatisés",
      "Les cas de test liés à l'ensemble d'API « SAMOR et TELLY » doivent être les premiers à être automatisés",
      "Vous devez planifier la création de nouvelles API uniquement pour les tests",
      "Vous devez choisir une solution d'automatisation différente pour chaque sous-ensemble d'API",
    ],
    answer: [1],
    explanation:
      "Il est recommandé de commencer par automatiser les cas de test pour les API présentant la plus forte probabilité d'échec et le plus grand impact sur le SUT, afin de maximiser l'efficacité des tests dans les délais impartis.",
  },
  {
    id: "tae5q04",
    domain: "Risques de déploiement et contingence",
    difficulty: "difficile",
    question:
      "Une société de logiciels propose des versions trimestrielles évaluées simultanément par plusieurs équipes de test. Quelle est la MEILLEURE technique pour garantir que chaque équipe utilise la même version du TAS dans chaque environnement SUT ?",
    options: [
      "Créer une documentation complète du TAS, des directives d'installation et d'utilisation, et former chaque membre de l'équipe",
      "Installer le TAS en utilisant un dépôt central, et le configurer et l'installer automatiquement dans chaque environnement SUT depuis ce dépôt",
      "Créer un outil pour surveiller les résultats des tests précédents dans divers environnements et rechercher des schémas",
      "En raison de la complexité et des risques élevés associés à ces versions, il serait conseillé de revenir aux tests manuels",
    ],
    answer: [1],
    explanation:
      "Un dépôt central pour installer et configurer automatiquement le TAS dans chaque environnement garantit que toutes les équipes utilisent la même version, éliminant les risques de divergence entre configurations.",
  },
  {
    id: "tae5q05",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question: "Lequel des éléments suivants n'est pas un point d'amélioration continue du TAS ?",
    options: ["Scripting", "Rapports de test", "TAA (Test Automation Architecture)", "Vérification"],
    answer: [2],
    explanation:
      "Contrairement au scripting, aux rapports de test et à la vérification qui nécessitent une amélioration continue, la TAA constitue une structure sous-jacente relativement stable ne nécessitant pas de modifications aussi fréquentes.",
  },
  {
    id: "tae5q06",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Plusieurs profils de clients basés sur diverses entrées de données sont nécessaires comme données de test pour un test de performance automatisé d'un système de gestion de clients. Comment doit-on procéder pour mettre en œuvre un tel plan ?",
    options: [
      "Utiliser la base de données de production, qui contient le volume et le type de données réels",
      "Utiliser un outil d'automatisation de tests pour appeler un point de terminaison de service web qui enregistre ces utilisateurs et leur fournit des données",
      "Mettre en œuvre un script d'automatisation des tests pour anonymiser les données des clients avant de les utiliser lors du test de performance",
      "Enregistrer manuellement ces utilisateurs via l'interface graphique (GUI)",
    ],
    answer: [1],
    explanation:
      "Utiliser un outil d'automatisation pour appeler un service web afin d'enregistrer des utilisateurs est une solution rapide et contrôlée pour générer des profils de test, sans recourir à la saisie manuelle via l'interface graphique.",
  },
  {
    id: "tae5q07",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question: "Lequel des énoncés suivants décrit un facteur clé de succès d'un projet d'automatisation des tests ?",
    options: [
      "Les tests automatisés qui ont échoué parce que les critères du SUT ont changé doivent être immédiatement corrigés plutôt que mis en commentaire",
      "Le nombre de fois qu'un test peut être exécuté doit toujours être pris en compte lors du choix des cas de test à automatiser en premier",
      "Seules les données strictement nécessaires pour comparer les résultats attendus et obtenus doivent être capturées par les tests automatisés",
      "L'automatisation des tests permet de créer des tests qui s'exécutent plus rapidement et sont moins sujets aux erreurs manuelles",
    ],
    answer: [0],
    explanation:
      "Lorsque les critères du SUT changent, il est essentiel de corriger immédiatement les tests automatisés défaillants plutôt que de les désactiver, afin de garantir une couverture fiable et à jour des fonctionnalités testées.",
  },
  {
    id: "tae5q08",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question: "Quels sont deux des aspects les plus importants à considérer lors de la conception d'un SUT pour le rendre testable ?",
    options: [
      "Contrôlabilité et changeabilité",
      "Changeabilité et maintenabilité",
      "Observabilité et contrôlabilité",
      "Maintenabilité et observabilité",
    ],
    answer: [2],
    explanation:
      "Pour rendre un SUT testable, il est crucial qu'il soit à la fois observable (pour vérifier les résultats des tests) et contrôlable (pour influencer et forcer certains états du système), ces deux caractéristiques permettant un diagnostic efficace.",
  },
  {
    id: "tae5q09",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question: "Laquelle des affirmations suivantes sur le niveau d'intrusion des outils de test automatisés n'est pas vraie ?",
    options: [
      "Les tests GUI ont un niveau d'intrusion plus élevé que les tests API",
      "Un niveau d'intrusion élevé peut révéler des échecs pendant les tests qui ne sont pas évidents en production",
      "Avec un haut niveau d'intrusion, la confiance dans le TAS peut diminuer de manière significative",
      "Les tests API ont un niveau d'intrusion plus élevé que les tests GUI",
    ],
    answer: [3],
    explanation:
      "C'est l'inverse qui est vrai : les tests GUI ont généralement un niveau d'intrusion plus élevé que les tests API, car ils nécessitent de simuler des interactions complexes avec l'interface, alors que les tests API interagissent directement et de façon moins intrusive.",
  },
  {
    id: "tae5q10",
    domain: "Risques de déploiement et contingence",
    difficulty: "difficile",
    question:
      "Bien que l'automatisation des tests soit nouvelle dans votre organisation, votre TAS prend en charge efficacement le SUT du projet en cours. L'organisation exige que l'automatisation soit mise en œuvre pour les SUT actuels et futurs, en mettant l'accent sur la cohérence. Quelle est la MEILLEURE approche pour atteindre cet objectif ?",
    options: [
      "Installer le TAS dans un dépôt central pour s'assurer que la même version est utilisée pour les tests sur différents SUT",
      "Vérifier que le TAS est installé et configuré correctement pour chaque SUT, et qu'il est bien connecté aux systèmes internes et externes",
      "Créer un système qui génère des rapports réguliers pour les parties prenantes et suit les échecs d'automatisation pour les différents SUT",
      "Créer un nouveau TAS pour chaque SUT et les superviser tous avec une équipe de support automatisée dédiée",
    ],
    answer: [0],
    explanation:
      "Un dépôt central garantit que la même version du TAS est utilisée pour tous les SUT, ce qui améliore la cohérence et simplifie la gestion des tests automatisés pour plusieurs projets.",
  },
  {
    id: "tae5q11",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quel est le principal inconvénient de l'approche capture/relecture (capture/playback) pour l'automatisation des tests ?",
    options: [
      "Étant donné que les scripts sont dans un langage de programmation plutôt qu'un langage naturel, les non-programmeurs peuvent avoir du mal à les comprendre",
      "Elle ne suit pas les paradigmes de réutilisabilité et de modularité des logiciels",
      "Le SUT doit reproduire toutes les sorties système qui ont été capturées lors de la capture",
      "Le SUT doit être disponible pendant la capture d'un cas de test",
    ],
    answer: [1],
    explanation:
      "L'approche capture/relecture génère des scripts non réutilisables ni modulaires, chaque interaction enregistrée étant spécifique à un scénario particulier, ce qui la rend inefficace pour des projets de grande envergure.",
  },
  {
    id: "tae5q12",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Vous avez développé une version stable d'un TAS fonctionnel. Tous les nouveaux TAS pour les projets seront créés en utilisant cette version. Quelle est la méthode la plus efficace pour confirmer que tout fonctionne correctement avant de mettre en œuvre ce TAS ?",
    options: [
      "Exécuter une série de tests et s'assurer qu'ils se terminent sans aucun problème",
      "Exécuter une série de tests pour une nouvelle fonctionnalité du framework et vérifier qu'ils se terminent correctement",
      "Exécuter un script connu pour échouer et vérifier qu'il réussit",
      "Exécuter une série de tests et confirmer que les résultats correspondent à ceux des exécutions précédentes",
    ],
    answer: [3],
    explanation:
      "Il est important de vérifier que les résultats des tests automatisés restent cohérents avec ceux des exécutions précédentes, confirmant que la nouvelle version du TAS fonctionne correctement sans introduire de régressions.",
  },
  {
    id: "tae5q13",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Comment l'automatisation des tests applique-t-elle la gestion de la configuration ?",
    options: [
      "Elle permet de stocker et de supprimer facilement la configuration du SUT",
      "Elle gère les données de test et les configurations de l'environnement de test",
      "L'analyse des résultats des tests automatisés est simple",
      "Elle permet de contrôler qui a accès à l'automatisation des tests",
    ],
    answer: [1],
    explanation:
      "La gestion de configuration en automatisation des tests concerne la gestion des données de test et des configurations de l'environnement, garantissant des exécutions reproductibles et fiables.",
  },
  {
    id: "tae5q14",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "difficile",
    question:
      "Vous avez été chargé de mettre en place l'automatisation des tests pour un projet qui prend du retard. Les tests de régression prennent 60% du temps des testeurs manuels, qui n'arrivent pas à suivre les tests des nouvelles fonctionnalités. Quelle mesure devriez-vous utiliser pour démontrer les avantages de l'automatisation dans ce projet ?",
    options: [
      "La proportion de builds que les tests automatisés ont acceptée ou rejetée",
      "L'effort de test manuel équivalent pour les tests automatisés",
      "La quantité de défauts détectés par l'automatisation des tests",
      "La proportion de code soumise à l'automatisation des tests",
    ],
    answer: [1],
    explanation:
      "Mesurer l'effort de test manuel équivalent permet de quantifier le temps économisé par l'automatisation par rapport à une exécution manuelle, démontrant clairement les gains d'efficacité du projet.",
  },
  {
    id: "tae5q15",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Pour générer un TAS pour un projet, vous utilisez une architecture générale d'automatisation des tests (gTAA) basée sur UML et une technique de modélisation de cas d'utilisation. Il n'y aura que des interactions au niveau du GUI entre le TAS et le SUT. Quel composant deviez-vous EXCLURE du TAS ?",
    options: [
      "L'interface en ligne de commande (CLI)",
      "Le moteur d'exécution des tests",
      "Le composant d'exécution des tests",
      "Le composant de rapport de test",
    ],
    answer: [0],
    explanation:
      "Puisque seules les interactions au niveau de l'interface graphique sont concernées dans ce scénario, l'interface en ligne de commande n'est pas nécessaire et peut être exclue du TAS.",
  },
  {
    id: "tae5q16",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous avez proposé des tests automatisés pour un SUT stable. Le SUT sera mis à jour avec de nouvelles fonctionnalités et des plug-ins communiquant via des API. Comment mettre à jour le TAS ?",
    options: [
      "Améliorer la journalisation pour enregistrer l'augmentation prévue des défauts dus aux pannes des API",
      "Réviser la documentation du TAS en prenant en compte le support des API",
      "Améliorer la récupération du TAS pour le rendre plus résilient aux échecs de requêtes API",
      "Modifier la TAA pour permettre au TAS de tester via les API",
    ],
    answer: [3],
    explanation:
      "La TAA doit être adaptée pour fournir des adaptateurs permettant au TAS de se connecter et de tester les nouveaux composants ou interfaces du SUT via des API.",
  },
  {
    id: "tae5q17",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question: "Lequel des éléments suivants n'est PAS un composant de la configuration de l'environnement de test ?",
    options: ["Bibliothèque de base commune", "Identifiants", "Condition de test", "URLs (Uniform Resource Locators)"],
    answer: [2],
    explanation:
      "La configuration de l'environnement de test comprend des éléments comme les URLs et les identifiants d'accès, mais la « condition de test » relève des critères spécifiques d'un cas de test et n'en fait pas partie.",
  },
  {
    id: "tae5q18",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question: "Que faut-il faire lorsque des cas de test réussissent alors qu'ils devraient échouer ?",
    options: [
      "Il est nécessaire de déplacer les cas de test vers une nouvelle suite de tests",
      "Il est préférable de classer les cas de test comme basse priorité",
      "Il est important de déterminer quel composant dysfonctionnait",
      "Il est préférable de supprimer les cas de test",
    ],
    answer: [2],
    explanation:
      "Un faux succès signale une défaillance du SUT non détectée par l'automatisation ; il faut alors déterminer quel composant a mal fonctionné, souvent à cause d'une vérification incorrecte ou d'un oracle de test invalide.",
  },
  {
    id: "tae5q19",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "moyen",
    question:
      "Il y a plusieurs séries d'exécution de tests. Entre les séries, la direction souhaite savoir si le taux de réussite des tests s'améliore. Quelle est une bonne méthode pour répondre à cette exigence ?",
    options: [
      "Fournir des rapports complets incluant des pourcentages de tests terminés",
      "Introduire une fonctionnalité d'analyse qui prend les résultats de test précédents et met en évidence les tendances",
      "Examiner les différences entre les résultats des tests et les résultats attendus",
      "Les feux tricolores doivent montrer comment le test est exécuté",
    ],
    answer: [1],
    explanation:
      "Une fonctionnalité d'analyse examinant les résultats passés et mettant en évidence les tendances permet de suivre l'évolution du taux de réussite des tests au fil des exécutions, répondant directement au besoin de la direction.",
  },
  {
    id: "tae5q20",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Vingt tests automatisés confirment que la page principale de l'application permet aux utilisateurs de se connecter. Cinq de ces vingt cas de test peuvent occasionnellement aboutir à une condition de concurrence ou une erreur aléatoire. Comment devez-vous réagir à ces cinq cas de test ?",
    options: [
      "Remplacer les cinq cas de test par d'autres qui réussissent systématiquement pour que la suite de tests ait toujours 20 cas automatisés",
      "Réduire le nombre de cas de test dans la suite de 20 à 10 et voir si la suite réussit toujours avec moins de cas",
      "Ne rien faire car ils réussissent occasionnellement",
      "Retirer les cinq cas de test de la suite de tests active et les analyser séparément pour trouver la cause première",
    ],
    answer: [3],
    explanation:
      "Des tests échouant de manière intermittente indiquent souvent un problème sous-jacent (synchronisation, condition de concurrence) ; les retirer temporairement pour les analyser séparément permet d'en identifier et corriger la cause sans affecter la suite active.",
  },
  {
    id: "tae5q21",
    domain: "Risques de déploiement et contingence",
    difficulty: "difficile",
    question:
      "Vous testez une mise à jour majeure de l'interface utilisateur pour le contrôle de navigation terrestre. Vous pensez que la suite de tests de régression pourrait ne pas se terminer avant la fin de la nuit en raison des dernières modifications du SUT. Quelle serait l'approche la PLUS rentable pour atténuer ce risque ?",
    options: [
      "Diviser la suite de tests de régression en plusieurs parties et les exécuter sur plusieurs nuits consécutives",
      "Introduire de meilleures pratiques de codage pour les scripts d'automatisation, y compris des lignes directrices, des révisions et une meilleure analyse statique",
      "Créer un miroir de l'environnement de test de pré-production et diviser la suite de tests de régression pour qu'elle s'exécute en parallèle sur les différents environnements",
      "Analyser la suite de tests de régression et supprimer la duplication de la couverture des tests et les redondances",
    ],
    answer: [2],
    explanation:
      "Dupliquer l'environnement de préproduction et exécuter la suite de régression en parallèle sur plusieurs environnements permet d'accélérer considérablement le processus sans réduire la couverture ni la qualité des résultats.",
  },
  {
    id: "tae5q22",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question: "Concernant la TAA (Test Automation Architecture), laquelle des affirmations suivantes est vraie ?",
    options: [
      "Les interfaces de test internes doivent être supprimées avant la mise en production d'un produit",
      "La TAA doit avoir le contrôle de toutes les interfaces SUT qui pourraient être affectées par les tests",
      "Toujours enregistrer autant de détails que possible sur les interactions entre le SUT et le TAS",
      "Les interfaces de test externes doivent être supprimées avant la mise en production d'un produit",
    ],
    answer: [1],
    explanation:
      "La TAA doit être capable de contrôler et de surveiller toutes les interfaces du SUT susceptibles d'être impactées par les tests automatisés, qu'elles soient internes ou externes.",
  },
  {
    id: "tae5q23",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Les fonctions que l'équipe d'automatisation a développées au fil de plusieurs projets ont été vérifiées et ajoutées à la bibliothèque de fonctions. En recherchant une fonction qui gère les listes GUI, vous découvrez que dix fonctions distinctes ont été créées pour manipuler les données dans les listes. Que devez-vous faire ?",
    options: [
      "Collaborer avec d'autres ingénieurs en automatisation des tests pour voir si une consolidation est possible et revoir les conventions de nommage pour s'assurer que chaque contrôle est nommé de manière appropriée",
      "Réutiliser ou modifier un contrôle de liste existant pour répondre à vos besoins",
      "Consolider la liste des contrôles en un seul, en veillant à ne pas compromettre leurs capacités individuelles",
      "Créer votre propre contrôle de liste car vous savez qu'il fonctionnera pour votre application",
    ],
    answer: [0],
    explanation:
      "Collaborer avec l'équipe pour déterminer si des fonctions similaires peuvent être consolidées, avec des conventions de nommage cohérentes, permet d'éviter la duplication et de simplifier la maintenance de la bibliothèque de fonctions.",
  },
  {
    id: "tae5q24",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Pour la dernière version du SUT, de nouvelles fonctionnalités ont été ajoutées. Lors de l'évaluation de l'impact sur le TAS, quelle action NE serait PAS appropriée pour un ingénieur en automatisation des tests (TAE) ?",
    options: [
      "Évaluer la compatibilité avec les outils de test actuels et, si nécessaire, trouver des alternatives",
      "Exécuter les tests automatisés actuels sur le SUT révisé pour confirmer et documenter les modifications",
      "Demander l'avis des analystes métier pour savoir si le TAS actuel est adéquat pour les nouvelles fonctionnalités",
      "Examiner les mots-clés actuels pour déterminer si des modifications sont nécessaires",
    ],
    answer: [2],
    explanation:
      "Les analystes métier ne sont pas les mieux placés pour évaluer si le TAS actuel est adéquat pour tester les nouvelles fonctionnalités ; cette évaluation relève de la responsabilité de l'ingénieur en automatisation des tests, qui doit vérifier la compatibilité des outils et la couverture des tests.",
  },
  {
    id: "tae5q25",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Pour améliorer l'interaction entre les contrôles dans l'interface graphique (GUI) d'une application, vous effectuez une évaluation de la qualité du TAS. Plusieurs fonctions dans les scripts de test agissent sur différents types de contrôles pour collecter et définir des données. Quelle action devriez-vous envisager pour améliorer l'efficacité du TAS ?",
    options: [
      "Créer des suites de tests distinctes pour chaque type de contrôle et les tester séparément",
      "Identifier des fonctions capables de fonctionner avec plusieurs types de contrôles et consolider les scripts de test en utilisant ces fonctions",
      "Dans les scripts de test, gérer les contrôles de l'interface graphique en utilisant les nouvelles capacités du système d'exploitation",
      "Rechercher des outils d'automatisation de tests qui peuvent remplacer la solution actuelle",
    ],
    answer: [1],
    explanation:
      "Identifier des fonctions génériques capables de gérer plusieurs types de contrôles graphiques permet de consolider les scripts de test, réduisant la duplication et améliorant la maintenabilité du TAS.",
  },
  {
    id: "tae5q26",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Votre projet implique l'automatisation d'une suite de tests de régression. La dernière fois que la suite a été exécutée manuellement, tous les tests ont réussi. Cependant, certains tests échouent lorsque vous les exécutez avec le TAS. Comment devez-vous réagir à cette situation ?",
    options: [
      "Examinez les fichiers journaux pour trouver la source du problème",
      "C'est normal, car les tests automatisés se comportent différemment des tests manuels",
      "Comme les tests échoués indiquent un problème dans le SUT, ouvrez un défaut pour le SUT",
      "Retirez ces cas de test de la suite automatisée pour que les autres tests réussissent",
    ],
    answer: [0],
    explanation:
      "Les fichiers journaux fournissent des informations cruciales pour déterminer si l'échec provient de l'automatisation ou du SUT lui-même ; il est essentiel de les analyser avant toute autre action.",
  },
  {
    id: "tae5q27",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "difficile",
    question:
      "Le Test Automation Manager vous a confié la tâche d'établir une méthode pour recueillir des métriques de couverture de code à partir du TAS à chaque exécution des tests de régression. Les métriques doivent être basées sur des tendances et ne doivent pas diminuer au fil du temps. Quelle méthode serait la plus efficace ?",
    options: [
      "L'automatisation des tests suivrait le taux de réussite/échec de chaque cas de test de régression et mettrait à jour automatiquement un graphique de tendance de la réussite",
      "L'automatisation des tests suivrait la couverture totale du code à chaque exécution, exporterait ces données dans un fichier Excel et mettrait à jour un graphique de tendance",
      "Chaque exécution enregistrerait la couverture totale du code, ajoutant les chiffres à une nouvelle ligne dans un fichier Excel structuré",
      "Il est nécessaire d'exécuter manuellement les cas de test automatisés tout en gardant un outil de couverture de code en arrière-plan",
    ],
    answer: [1],
    explanation:
      "L'approche la plus efficace consiste à automatiser le suivi de la couverture de code, exporter ces données dans un format structuré, et mettre à jour automatiquement un graphique de tendance, minimisant les erreurs humaines.",
  },
  {
    id: "tae5q28",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous évaluez des outils d'automatisation des tests fonctionnels. L'outil que vous préférez offre un bon rapport coût-avantage et répond mieux à vos exigences techniques, mais la majorité de ses fonctionnalités ne sont pas utilisées, ce qui ajoute une complexité inutile. Quelle devrait être votre prochaine étape ?",
    options: [
      "Prévoir des sessions de formation approfondies pour accompagner votre choix de cet outil",
      "Examiner la possibilité de configurer l'outil pour désactiver les fonctionnalités supplémentaires",
      "Considérer un autre outil plus facile à utiliser",
      "Envisager d'acquérir un autre outil offrant une interface plus conviviale avec l'outil préféré",
    ],
    answer: [1],
    explanation:
      "Si l'outil répond aux besoins techniques et financiers, il est préférable de vérifier s'il est possible de désactiver les fonctionnalités inutiles pour réduire la complexité, plutôt que de changer d'outil.",
  },
  {
    id: "tae5q29",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous avez mis en place un TAS pour automatiser les tests de services web. Un problème que vous rencontrez est que parfois les services sont indisponibles, ce qui provoque l'échec des scripts. Quel est le moyen le plus approprié de traiter cette situation lorsque les scripts identifient un service indisponible ?",
    options: [
      "Relancer le test une fois que l'interruption du service est détectée",
      "Utiliser le script pour redémarrer le service, attendre qu'il soit complètement initialisé, puis exécuter les étapes suivantes",
      "Arrêter le test pour éviter des erreurs supplémentaires et le temps passé à déboguer",
      "Depuis le script, redémarrer le système, attendre que le système soit entièrement initialisé, puis exécuter les étapes restantes",
    ],
    answer: [1],
    explanation:
      "Lorsqu'un test échoue en raison d'un service indisponible, il est préférable de remettre le service dans un état connu (redémarrage puis attente de la réinitialisation complète) avant de poursuivre les tests, réduisant les faux échecs dus à des interruptions temporaires.",
  },
  {
    id: "tae5q30",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous créez une TAA pour un SUT piloté par des événements et basé sur des états, avec une API exposant ses capacités. La fiabilité des lignes de communication et du matériel affecte le comportement du SUT. Quel facteur est LE PLUS crucial pour développer la TAA dans ce contexte ?",
    options: [
      "Rechercher des outils qui permettent l'indication claire des exceptions et des actions basées sur les événements du SUT",
      "Rechercher des outils qui permettent la configuration et la désinstallation automatiques du SUT et de la suite de tests",
      "Rechercher des outils qui permettent une vérification automatique",
      "Utiliser la couverture des arbres de classification comme base pour la technique de définition de la couche de test",
    ],
    answer: [0],
    explanation:
      "Le SUT étant piloté par des événements, il est essentiel d'utiliser des outils capables d'indiquer clairement quand ces événements se produisent et quelles actions doivent être prises en réponse, afin de modéliser et tester correctement son comportement.",
  },
  {
    id: "tae5q31",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "moyen",
    question:
      "Comment devez-vous signaler les informations si votre TAS rencontre plusieurs échecs d'exécution de tests en raison d'erreurs dans les scripts d'automatisation ?",
    options: [
      "Il ne doit pas être signalé en dehors de l'équipe de test, mais doit être rapporté en interne à la direction de l'équipe",
      "Il doit être noté comme un problème non lié au SUT dans le rapport d'exécution des tests",
      "Comme il ne s'agit pas de problèmes liés au SUT, il n'est pas nécessaire de les signaler",
      "Le rapport doit être envoyé uniquement à l'équipe de développement, pas aux autres parties prenantes",
    ],
    answer: [1],
    explanation:
      "Les erreurs de script d'automatisation ne sont pas des défauts du SUT, mais doivent tout de même être consignées dans le rapport d'exécution des tests comme des problèmes liés à l'infrastructure d'automatisation, afin d'éviter toute confusion sur la fiabilité des tests.",
  },
  {
    id: "tae5q32",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Concernant le test des contrats, lequel des énoncés suivants n'est PAS vrai ?",
    options: [
      "C'est une méthode simple pour tester des API",
      "Il examine si un système est conforme à ses obligations contractuelles",
      "Il vérifie que deux systèmes différents sont compatibles",
      "Il peut être utilisé pour tester la connectivité des microservices",
    ],
    answer: [1],
    explanation:
      "Le test de contrat ne porte pas sur des obligations contractuelles légales, mais vérifie que les services ou composants respectent un contrat de communication technique préétabli (formats de requêtes/réponses, points d'accès), notamment dans les architectures microservices.",
  },
  {
    id: "tae5q33",
    domain: "Transition des tests manuels vers l'automatisation",
    difficulty: "moyen",
    question:
      "Vous avez développé l'automatisation des tests dans un processus itératif. Soixante-cinq pour cent des tests fonctionnels ont pu être automatisés, le programme commence à se stabiliser et peu d'erreurs sont trouvées par vos tests fonctionnels. Comment ces tests devraient-ils être gérés ?",
    options: [
      "Les retirer du TAS et les remplacer par de nouveaux tests à haut rendement",
      "Les transférer dans la suite de tests de pré-production et les exécuter juste avant la mise en production",
      "Continuer à ajouter des tests à la suite de tests fonctionnels et en ajouter davantage si nécessaire",
      "Les déplacer dans la suite de tests de régression et les exécuter au moins une fois par itération",
    ],
    answer: [3],
    explanation:
      "Lorsque des tests fonctionnels automatisés se stabilisent et détectent peu d'erreurs, ils peuvent être réutilisés comme tests de régression dans les cycles futurs, vérifiant que les nouvelles modifications n'introduisent pas de régressions.",
  },
  {
    id: "tae5q34",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Vous avez développé un produit fiable pendant plusieurs années ; vos tests automatisés fonctionnent sans problème. L'équipe d'infrastructure prévoit de mettre en place un nouveau réseau de stockage et de remplacer le serveur de base de données. Comment devriez-vous planifier la mise à jour de votre TAS pour identifier et corriger tout problème ?",
    options: [
      "Tester chaque ensemble de scripts séparément, puis concentrer vos tests de régression sur les parties du code qui impliquent l'accès à la base de données",
      "Vous assurer que le nouveau réseau de stockage ne perturbe pas les appels à la base de données et tester le reste de votre code.",
      "Modifier votre code en conséquence et exécuter tous les tests pour vérifier que tout fonctionne",
      "Tester uniquement le code de vérification/création des données, car les développeurs affirment qu'il n'y aura pas de problème",
    ],
    answer: [0],
    explanation:
      "Tester chaque ensemble de scripts séparément permet d'isoler les problèmes potentiels et de concentrer l'effort sur les parties du code dépendant de la base de données, garantissant que le TAS fonctionne correctement avec les nouveaux changements d'infrastructure.",
  },
  {
    id: "tae5q35",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous souhaitez générer automatiquement des cas de test avec des combinaisons de données d'entrée, puis convertir ces cas dans un fichier CSV chargeable dans un outil d'exécution de tests fonctionnels. Un outil possède toutes les fonctionnalités essentielles sauf la fonction d'exportation. Que devriez-vous faire ensuite ?",
    options: [
      "Communiquer avec le fournisseur et vérifier sur les forums si une solution est disponible ou le sera bientôt",
      "Voir si vous pouvez créer votre propre plan d'exportation",
      "Investir dans cet outil et créer manuellement le fichier CSV",
      "Envisager un autre outil qui est mieux adapté et possède toutes les fonctionnalités nécessaires",
    ],
    answer: [0],
    explanation:
      "Il est préférable de contacter le fournisseur pour savoir si la fonctionnalité manquante est en cours de développement ou si une solution alternative existe déjà, ce qui peut faire gagner du temps et des ressources.",
  },
  {
    id: "tae5q36",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Que devez-vous faire si vous avez utilisé une stratégie basée sur des mots-clés pour rédiger les scripts d'automatisation et que vous devez maintenant tester de nouvelles fonctionnalités ajoutées au SUT ?",
    options: [
      "Examiner la stratégie basée sur les mots-clés pour déterminer si elle est toujours le meilleur choix",
      "Ajouter de nouveaux mots-clés pour les nouvelles fonctionnalités si possible",
      "Envisager d'utiliser un nouvel outil de test qui vous permet de tester via l'API plutôt que l'interface graphique",
      "Si possible, intégrer de nouveaux scripts basés sur les données pour les nouvelles fonctionnalités",
    ],
    answer: [1],
    explanation:
      "Lorsque de nouvelles fonctionnalités sont introduites, la meilleure pratique consiste à ajouter de nouveaux mots-clés pour les tester, si la stratégie basée sur les mots-clés reste pertinente, afin de maintenir la cohérence de l'automatisation existante.",
  },
  {
    id: "tae5q37",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Vous vous préparez à exécuter une suite de tests automatisés pour une application hautement sécurisée. Quelle méthode devez-vous utiliser pour confirmer le code d'automatisation des tests ?",
    options: [
      "Utiliser des données sensibles et supprimer les cas de test",
      "Exécuter la suite de tests de manière délibérément lente pour détecter des failles de sécurité",
      "Rechercher des informations d'identification potentielles dans les durées des tests",
      "Utiliser un programme d'analyse statique pour identifier les vulnérabilités de sécurité",
    ],
    answer: [3],
    explanation:
      "Les outils d'analyse statique permettent d'identifier les vulnérabilités de sécurité dans le code source avant même l'exécution des tests, ce qui est essentiel pour confirmer la sécurité du code d'automatisation d'une application hautement sécurisée.",
  },
  {
    id: "tae5q38",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question: "Parmi les méthodes suivantes, laquelle n'est pas recommandée lors de la vérification de la composition d'une suite de tests ?",
    options: [
      "Vérifier que tous les cas de test ont des résultats obtenus",
      "Vérifier que tous les cas de test ont des résultats attendus",
      "Vérifier que les données de test sont présentes",
      "Vérifier que les conditions préalables aux tests sont présentes",
    ],
    answer: [0],
    explanation:
      "Les cas de test doivent avoir des résultats attendus définis, mais les résultats obtenus ne peuvent être vérifiés qu'après l'exécution des tests ; ce n'est donc pas une étape de vérification de la composition de la suite de tests.",
  },
  {
    id: "tae5q39",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Vous êtes sur le point de vérifier une suite de tests automatisés. Vous remarquez que certains scripts de test réussissent parfois et échouent à d'autres moments, ce qui entraîne des résultats de tests peu fiables. Comment pouvez-vous confirmer que vos scripts de test sont valides ?",
    options: [
      "Retirer les scripts de test de la suite automatisée et les analyser séparément",
      "Cela se produit parce que plusieurs scripts de test utilisent les mêmes données de test ; séparer les données de test pour chaque script résoudrait le problème",
      "Réexécuter la suite de tests automatisée et analyser les résultats des tests",
      "Cela résulte de l'exécution parallèle des scripts de test ; la synchronisation résoudrait le problème",
    ],
    answer: [0],
    explanation:
      "Pour comprendre pourquoi certains scripts donnent des résultats incohérents, il faut les isoler du reste de la suite afin d'analyser leurs performances indépendamment et d'identifier la cause spécifique du problème.",
  },
];
