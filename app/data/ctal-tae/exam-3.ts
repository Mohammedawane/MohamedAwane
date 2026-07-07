// ISTQB CTAL-TAE (Test Automation Engineer) — Examen blanc 3
// 40 questions converties depuis l'examen blanc source, réparties selon les 7
// chapitres du syllabus officiel CTAL-TAE v2.0.
import type { CTALTAEQuestion } from "./types";

export const EXAM_3_QUESTIONS: CTALTAEQuestion[] = [
  {
    id: "tae3q01",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous avez développé une solution d'automatisation des tests pour le logiciel « Easy Diet » avec un outil open source. Votre manager vous demande maintenant d'étendre l'automatisation à l'ensemble du logiciel Market (remises, remboursements, identification des produits scannés). Quelle méthode fonctionne le mieux pour automatiser l'ensemble du processus de test du logiciel Market ?",
    options: [
      "Exploiter ce qui peut être récupéré du framework Easy Diet, mais créer un framework plus substantiel pour l'automatisation des tests du logiciel Market",
      "Utiliser exactement les mêmes outils open source que vous connaissez déjà et le framework actuel tel qu'il est",
      "Utiliser le framework développé pour Easy Diet mais passer à un outil commercial pour l'automatisation des tests du logiciel Market",
      "Commencer ce projet plus complexe à partir de zéro avec de nouveaux outils et un nouveau framework",
    ],
    answer: [0],
    explanation:
      "Il est souvent judicieux de réutiliser l'existant tout en construisant, pour un projet plus vaste et complexe, un framework plus robuste capitalisant sur les éléments déjà développés.",
  },
  {
    id: "tae3q02",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question:
      "Quelles fonctionnalités certaines analyses statiques fournissent-elles au-delà de l'identification des défauts dans le code ?",
    options: [
      "Elles suggèrent des corrections pour les défauts identifiés et classent les problèmes par gravité",
      "Elles se concentrent exclusivement sur l'optimisation du code, en ignorant les vulnérabilités de sécurité et les normes de codage",
      "Elles nécessitent une entrée manuelle importante des développeurs pour générer des rapports sur les problèmes de code",
      "Elles corrigent automatiquement tous les défauts identifiés",
    ],
    answer: [0],
    explanation:
      "Les outils d'analyse statique fournissent non seulement une détection des défauts, mais aussi des suggestions de correction et une catégorisation par gravité, permettant de prioriser les corrections critiques.",
  },
  {
    id: "tae3q03",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Le déploiement d'une suite d'automatisation pour une application de ressources humaines est en cours, et l'automatisation doit suivre le rythme des nouvelles fonctionnalités tout en continuant à fonctionner pour les fonctionnalités existantes. Quelle partie de l'automatisation des tests est la plus susceptible d'échouer dans ce contexte ?",
    options: [
      "Tests des nouvelles fonctionnalités : surveillez les nouveaux tests pour vous assurer que tout fonctionne comme il se doit",
      "Tests des fonctionnalités existantes : surveillez les tests actuels pour vous assurer qu'ils fonctionnent comme prévu",
      "Passes connues : assurez-vous que les tests qui devraient réussir continuent de réussir",
      "Échecs connus : assurez-vous que les tests qui devraient échouer continuent d'échouer",
    ],
    answer: [0],
    explanation:
      "Lors du déploiement de nouvelles fonctionnalités, il faut surveiller en priorité les tests associés à ces fonctionnalités récentes, plus susceptibles d'échouer en raison des changements récents dans le système.",
  },
  {
    id: "tae3q04",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous avez un TAS pour tester une application web via son interface graphique. Chaque cas de test suit exactement la même séquence d'étapes au début et à la fin, et le même ensemble de méthodes d'assertion (issues d'une bibliothèque partagée) est utilisé dans tous ces cas de test. Que proposeriez-vous pour améliorer le TAS ?",
    options: [
      "Implémenter des mots-clés avec un niveau de granularité plus élevé",
      "Mettre en place des fonctions de configuration et de nettoyage standardisées au niveau des cas de test",
      "Développer l'architecture de l'application pour augmenter sa testabilité",
      "Adopter un ensemble de méthodes de vérification standardisées pour tous les tests automatisés",
    ],
    answer: [1],
    explanation:
      "L'utilisation de fonctions de configuration (setup) et de nettoyage (teardown) standardisées améliore l'efficacité et la réutilisabilité des scripts en évitant de répéter le même code d'initialisation dans chaque cas de test.",
  },
  {
    id: "tae3q05",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Pendant l'exécution des cas de test, vous avez remarqué que la page web prend du temps à se charger, ce qui bloque les tests en indiquant que l'élément recherché n'existe pas. Quelle action devez-vous prendre ici ?",
    options: [
      "Améliorer la gestion des temps d'attente dans les scripts pour éviter les erreurs de système",
      "Compiler une collection de procédures de récupération dans une bibliothèque pour faciliter la réutilisation des scripts",
      "Passer à une stratégie basée sur les mots-clés, avec le temps d'attente comme un des mots-clés",
      "Créer une procédure de récupération d'erreur dans le TAS et l'appliquer à chaque cas de test",
    ],
    answer: [0],
    explanation:
      "Les échecs liés à des délais d'attente inadaptés se corrigent en améliorant la gestion des temps d'attente (attentes dynamiques ou explicites) plutôt qu'en se fiant à des délais fixes.",
  },
  {
    id: "tae3q06",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "Quel est le principal risque associé à la configuration des pare-feux dans un projet pilote d'automatisation des tests ?",
    options: [
      "Les pare-feux sont sans importance dans le cadre de l'automatisation des tests",
      "Tout le trafic sera surveillé, quel que soit le paramétrage du pare-feu",
      "Des configurations incorrectes du pare-feu peuvent bloquer le trafic essentiel, empêchant la communication entre les outils d'automatisation des tests et d'autres systèmes",
      "Les pare-feux permettent automatiquement tout le trafic sans configuration",
    ],
    answer: [2],
    explanation:
      "Un pare-feu mal configuré peut empêcher les outils d'automatisation de communiquer avec les API externes ou d'autres systèmes nécessaires, provoquant des échecs de tests dus à un défaut de réponse.",
  },
  {
    id: "tae3q07",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question:
      "L'une des caractéristiques d'une conception de système testable est la capacité des cas de test à accéder aux interfaces du système, permettant ainsi de vérifier que le comportement attendu s'est bien produit pendant le test. Comment appelle-t-on cette caractéristique ?",
    options: ["Maintenabilité", "Interopérabilité", "Observabilité", "Contrôlabilité"],
    answer: [2],
    explanation:
      "L'observabilité est la capacité d'un système à exposer ses états internes pour permettre aux tests de vérifier que les comportements attendus se sont bien produits, ce qui est crucial pour diagnostiquer les résultats de test.",
  },
  {
    id: "tae3q08",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "moyen",
    question:
      "Comme la suite de tests de régression automatisés est volumineuse, vous commencez souvent son exécution à la fin de la journée de travail. Même si le test doit se terminer en sept heures, il ne se termine pas avant le début du lendemain. Quelle méthode serait la plus efficace pour identifier la cause de ce problème ?",
    options: [
      "Lancer le test plus tôt dans la journée et le surveiller manuellement",
      "Ajouter un employé de nuit à votre équipe pour surveiller le test pendant son exécution",
      "Automatiser la collecte des résultats d'exécution des tests",
      "Évaluer un outil de reporting du fournisseur qui suit la progression des tests",
    ],
    answer: [2],
    explanation:
      "Automatiser la collecte des résultats d'exécution permet de surveiller la progression en temps réel et d'identifier rapidement les problèmes, sans nécessiter de surveillance manuelle constante.",
  },
  {
    id: "tae3q09",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "difficile",
    question:
      "Un TAS utilise un produit commercial pour l'automatisation des tests, et les journaux par défaut sont produits dans des formats incohérents. Plusieurs méthodes de journalisation personnalisées ont été développées, mais la grande quantité de journaux rend difficile la recherche des informations nécessaires. Quelle est la meilleure façon de mettre en œuvre les fonctions de journalisation personnalisées ?",
    options: [
      "Mettre en œuvre des fonctions de journalisation personnalisées sans conserver les horodatages",
      "Mettre en œuvre des fonctions de journalisation personnalisées pour diriger les journaux vers plusieurs fichiers",
      "Mettre en œuvre des fonctions de journalisation personnalisées sans conserver les traces de pile",
      "Mettre en place des fonctions de journalisation personnalisées pour prendre en charge divers niveaux de suivi",
    ],
    answer: [3],
    explanation:
      "L'ajout de niveaux de suivi (info, avertissement, erreur) permet de filtrer les journaux et de ne conserver que les informations critiques, réduisant la quantité de données inutiles.",
  },
  {
    id: "tae3q10",
    domain: "Transition des tests manuels vers l'automatisation",
    difficulty: "difficile",
    question:
      "Vous rejoignez une entreprise où les tests manuels sont bien établis, mais l'automatisation a été abandonnée. Les testeurs ont généré une énorme quantité de données de test (10 à 20 variations par scénario). Le cadre d'automatisation peut être facilement réparé, mais les cas de test doivent être entièrement repensés. Quelle approche d'automatisation devriez-vous choisir pour obtenir des résultats rapides ?",
    options: [
      "Développement dirigé par les tests d'acceptation",
      "Capture/relecture",
      "Tests basés sur les données (Data-driven testing)",
      "Développement dirigé par le comportement (BDD)",
    ],
    answer: [2],
    explanation:
      "Le test piloté par les données est idéal ici car les testeurs ont déjà généré de grandes quantités de données de test ; en les réutilisant avec un framework d'automatisation, on peut créer rapidement de nombreux tests sans redéfinir tous les scénarios.",
  },
  {
    id: "tae3q11",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "difficile",
    question:
      "Un projet consiste en des équipes distribuées adoptant un processus d'intégration continue ; les tests d'intégration automatisés s'exécutent plusieurs fois par jour et l'équipe projet souhaite un rapport des résultats disponible en permanence. Quelle option serait la PLUS efficace pour générer ce rapport automatiquement ?",
    options: [
      "Entrer les résultats des tests d'intégration pour la version la plus récente dans une base de données, générer automatiquement un rapport d'exécution de test pour cette version et l'envoyer par e-mail à l'équipe projet",
      "Entrer les résultats des tests d'intégration dans une base de données, en veillant à préserver les résultats des versions précédentes, puis produire automatiquement un graphique affichant la tendance de la couverture des tests et l'envoyer par e-mail à l'équipe projet",
      "Utiliser une base de données pour stocker les résultats des tests d'intégration de la version la plus récente sans écraser les résultats des versions précédentes, et mettre automatiquement à jour un tableau de bord que l'équipe projet peut consulter",
      "Générer automatiquement un rapport d'exécution de test pour cette version et l'envoyer par e-mail à l'équipe projet après avoir stocké les résultats des tests d'intégration pour la version la plus récente dans une base de données",
    ],
    answer: [2],
    explanation:
      "Le stockage des résultats en base de données (sans écraser l'historique) associé à un tableau de bord automatiquement mis à jour permet à toute l'équipe de consulter en permanence l'état des tests sans envoi manuel de rapports.",
  },
  {
    id: "tae3q12",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "La solution d'automatisation des tests que vous utilisez fonctionne depuis trois ans. Un problème identifié est l'augmentation du nombre de faux positifs. Chaque fois que de nouveaux scripts sont développés, quelques faux positifs supplémentaires apparaissent. Quel est le problème le plus probable avec le TAS qui cause l'apparition de ces faux positifs ?",
    options: [
      "Les fonctions de vérification ne sont pas standardisées ; au lieu d'utiliser une technique de vérification standard, elles sont mises en œuvre spécifiquement pour chaque script",
      "Les cas de test et les étapes de test se chevauchent, ce qui fait qu'un changement dans un endroit casse le même code utilisé ailleurs",
      "Le logiciel n'attend pas une réponse de l'action précédente, et les mécanismes d'attente sont incorrects",
      "Il y a une incompatibilité entre les techniques de récupération d'erreurs du TAS et du SUT",
    ],
    answer: [0],
    explanation:
      "L'absence de standardisation des fonctions de vérification entraîne une variabilité des résultats et des faux positifs ; standardiser ces méthodes réduit ces erreurs.",
  },
  {
    id: "tae3q13",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "difficile",
    question:
      "Une application de bureau suit un cycle de vie Agile avec des mises à jour régulières. Les tests de régression, créés via le GUI, doivent être exécutés au moins trois fois par mois. De nombreux contrôles tiers ne sont pas compatibles avec la solution d'automatisation actuelle. L'environnement d'automatisation sera isolé, stable et entièrement configurable. Quel pourrait être le problème le PLUS préoccupant pour ce TAS ?",
    options: [
      "Cycle de vie du SUT",
      "Fréquence d'exécution",
      "Durabilité de l'environnement automatisé",
      "Complexité à automatiser",
    ],
    answer: [3],
    explanation:
      "Les contrôles tiers incompatibles avec la solution d'automatisation actuelle rendent l'automatisation difficile et nécessitent des solutions techniques spécifiques ou des outils supplémentaires.",
  },
  {
    id: "tae3q14",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "facile",
    question:
      "Pourquoi la catégorisation des problèmes identifiés par les analyseurs de code statiques (gravité critique, élevée, moyenne, faible) est-elle importante pour les équipes de développement ?",
    options: [
      "Cela augmente le temps nécessaire pour résoudre les problèmes, car les développeurs doivent évaluer chaque problème individuellement avant de les prioriser",
      "Cela permet aux équipes de développement d'ignorer les problèmes de faible gravité et de se concentrer uniquement sur ceux qui sont critiques",
      "Tous les problèmes identifiés doivent être corrigés, quelle que soit leur gravité",
      "Cela permet aux équipes de prioriser leur charge de travail efficacement, en traitant en premier les problèmes les plus graves pour améliorer la qualité du code",
    ],
    answer: [3],
    explanation:
      "La catégorisation par gravité aide les équipes à se concentrer d'abord sur les défauts critiques ayant un impact majeur sur la fonctionnalité, la sécurité ou les performances, permettant une gestion plus efficace des ressources.",
  },
  {
    id: "tae3q15",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question:
      "Vous devez partager les résultats des tests automatisés quotidiennement, par e-mail. Quelle fonctionnalité cruciale du rapport d'automatisation des tests vous permet de partager ces informations ?",
    options: [
      "Il doit fournir un moyen de publier les résultats des tests",
      "Il doit s'intégrer à un outil tiers courant",
      "Il doit vous permettre d'ajouter les membres de l'équipe à une liste de distribution",
      "Il doit vous permettre d'ajouter des objets et des pièces jointes",
    ],
    answer: [1],
    explanation:
      "L'intégration avec un outil tiers (gestion de tests, gestion de projets) permet de générer et distribuer automatiquement les rapports sans effort manuel supplémentaire.",
  },
  {
    id: "tae3q16",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question:
      "Il est exigé que vous partagiez les résultats d'automatisation des tests quotidiennement en mettant à jour les rapports dans Jira Xray. Quelle fonctionnalité clé de votre rapport d'automatisation permet de partager ces informations ?",
    options: [
      "Il devrait vous permettre d'ajouter des commentaires manuels aux résultats",
      "Il devrait vous permettre d'ajouter des captures d'écran aux résultats des tests",
      "Il devrait pouvoir s'intégrer à un outil tiers largement utilisé",
      "Il devrait offrir un mécanisme pour publier la bibliothèque des journaux de test",
    ],
    answer: [2],
    explanation:
      "Jira Xray étant un outil tiers, le TAS doit pouvoir s'y intégrer pour permettre une mise à jour fluide et automatique des résultats de test.",
  },
  {
    id: "tae3q17",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Vous choisissez la stratégie d'automatisation des tests fonctionnels pour un système très complexe qui sera utilisé en production pendant longtemps. Le programme nécessitant des interfaces non standard, vous et les développeurs avez déterminé que la création d'interfaces personnalisées uniquement pour les tests sera la stratégie la plus efficace. Quelle est la principale préoccupation liée à cette stratégie ?",
    options: [
      "Les performances de l'interface de test pourraient être considérablement plus rapides que celles de l'interface réelle",
      "Un risque de sécurité peut exister si les API ne sont pas désactivées avant la distribution",
      "La longévité prévue du code en production ne justifiera pas le travail investi dans l'automatisation des tests",
      "Faux positifs en raison du niveau élevé d'intrusion",
    ],
    answer: [3],
    explanation:
      "La création d'interfaces de test spécifiques est perçue comme fortement intrusive, ne testant pas l'interface réelle utilisée par les utilisateurs finaux, ce qui peut générer des faux positifs ne reflétant pas fidèlement les conditions réelles.",
  },
  {
    id: "tae3q18",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quel est le rôle principal des variables d'environnement système dans le contexte du comportement de l'application et des tests ?",
    options: [
      "Elles sont utilisées pour stocker en toute sécurité les variables du SUT",
      "Elles fournissent un moyen de configurer le système ou l'application sans modifier le code source",
      "Elles génèrent automatiquement des éléments d'interface utilisateur pour le SUT",
      "Elles limitent le nombre de tests pouvant être exécutés dans un environnement de test automatisé",
    ],
    answer: [1],
    explanation:
      "Les variables d'environnement système permettent de configurer le comportement des applications sans toucher au code source, facilitant l'adaptation à différents environnements (développement, production).",
  },
  {
    id: "tae3q19",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question: "Lequel des énoncés suivants est VRAI concernant le modèle en V ?",
    options: [
      "Le modèle en V exclut les tests d'acceptation comme niveau de test",
      "L'automatisation des tests ne peut être appliquée qu'au niveau des tests unitaires dans le modèle en V",
      "Il existe une phase de test correspondante pour chaque étape de développement",
      "Le modèle en V permet aux phases de se chevaucher",
    ],
    answer: [2],
    explanation:
      "Dans le modèle en V, chaque phase de développement (spécifications, conception) correspond à une phase de test associée (tests unitaires, tests d'intégration, etc.), garantissant une validation systématique à chaque étape.",
  },
  {
    id: "tae3q20",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Un TAS accède à la base de données du SUT via des scripts SQL. Les équipes de développement expérimentent continuellement et n'indiquent pas toujours la base de données utilisée, ce qui provoque parfois le chargement des mauvais scripts SQL et l'échec des tests. Quelle méthode serait la plus efficace pour garantir que les bons scripts sont chargés ?",
    options: [
      "Créer une base de données pour l'activité de test afin que le TAS soit isolé des modifications des données",
      "Effectuer une série de tests avec une collection de scripts SQL, puis charger le jeu de scripts approprié en fonction de ceux qui fonctionnent",
      "Remplacer les données de la base par des données codées en dur dans les scripts",
      "Exiger que les développeurs identifient la base de données utilisée",
    ],
    answer: [1],
    explanation:
      "Les requêtes SQL n'étant pas stables et les données à récupérer changeant selon le développement, il est nécessaire de tester une collection de scripts SQL pour sélectionner dynamiquement le bon jeu selon le contexte.",
  },
  {
    id: "tae3q21",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Vous travaillez sur une solution d'automatisation des tests pour un système d'apprentissage en ligne dont les fonctionnalités vont évoluer sur plusieurs versions futures. Quelle approche de script serait la meilleure pour la première version ?",
    options: [
      "Scripting de capture/relecture",
      "Scripting basé sur les mots-clés",
      "Scripting basé sur les données",
      "Scripting linéaire",
    ],
    answer: [1],
    explanation:
      "Le scripting basé sur des mots-clés est idéal ici car le système va évoluer sur plusieurs versions ; cette approche facilite la maintenance et l'ajout de nouvelles fonctionnalités à mesure que le produit se développe.",
  },
  {
    id: "tae3q22",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "La cohérence et la fonctionnalité d'un nouveau jeu de tests automatisés pour l'interface graphique (GUI) d'une application doivent être vérifiées. Vous avez récemment vérifié que l'environnement est correctement configuré et que la suite de tests fonctionne. Comment pouvez-vous être sûr que la suite fonctionne correctement dans l'environnement donné ?",
    options: [
      "S'assurer que la connectivité avec les systèmes/interfaces internes et externes est disponible",
      "Vérifier que les tests sont reproductibles et fiables",
      "La répétabilité dans la configuration/démontage de l'environnement de test",
      "Vérifier que les systèmes GUI sont testés pour une large gamme de classes d'objets",
    ],
    answer: [1],
    explanation:
      "Les tests doivent être reproductibles pour garantir un comportement identique à chaque exécution ; des résultats variables dans le même environnement indiqueraient un problème avec l'automatisation elle-même.",
  },
  {
    id: "tae3q23",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Votre manager vous a demandé d'automatiser les tests pour un système hérité (legacy system) qui subira de nombreuses migrations d'infrastructure, sans qu'aucune modification logicielle ne soit prévue. Quelle technique de script est la plus appropriée dans ce cas ?",
    options: [
      "Scripting structuré",
      "Scripting linéaire",
      "Scripting basé sur les mots-clés",
      "Scripting basé sur les données",
    ],
    answer: [1],
    explanation:
      "Le scripting linéaire est simple et rapide à mettre en place, ce qui convient à des besoins de vérification ponctuels où la maintenabilité n'est pas une priorité, comme pour un système hérité migré sans changement logiciel prévu.",
  },
  {
    id: "tae3q24",
    domain: "Rapports et métriques d'automatisation",
    difficulty: "facile",
    question:
      "Quelle technique permet au lecteur d'évaluer rapidement l'état de l'exécution des tests lors de la création de rapports de résultats pour l'automatisation des tests ?",
    options: [
      "Les feux tricolores",
      "Des rapports complets incluant le pourcentage d'achèvement",
      "La base de données des résultats",
      "Les feuilles de calcul",
    ],
    answer: [0],
    explanation:
      "Les feux tricolores (rouge, jaune, vert) permettent d'indiquer rapidement l'état d'avancement des tests, offrant une vue immédiate et intuitive du statut d'exécution.",
  },
  {
    id: "tae3q25",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Quel principe de la Programmation Orientée Objet (POO) vous permet de créer une méthode dans un cadre d'automatisation de tests qui peut fonctionner avec différents types d'objets sans connaître leur classe spécifique au moment de la compilation ?",
    options: ["Polymorphisme", "Abstraction", "Encapsulation", "Héritage"],
    answer: [0],
    explanation:
      "Le polymorphisme permet à une méthode de fonctionner sur des objets de types différents sans connaître leur type exact à la compilation, offrant un cadre d'automatisation flexible et évolutif.",
  },
  {
    id: "tae3q26",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous développez un TAS pour une application où les candidats choisissent des examens de certification, s'inscrivent et paient en ligne, avec des règles complexes qui changent régulièrement. Quelle fonctionnalité doit être incluse dans le TAS pour s'adapter à ces changements tout en fournissant des résultats précis ?",
    options: [
      "La capacité du TAS à contrôler le résultat de la décision",
      "La capacité du TAS à accepter les saisies de l'utilisateur pour les options d'examen",
      "La capacité du TAS à déterminer la règle appropriée en fonction des données d'entrée",
      "La capacité du TAS à fournir des résultats affichant la règle choisie et les données de sortie",
    ],
    answer: [2],
    explanation:
      "Étant donné la complexité et l'évolution fréquente des règles d'inscription, le TAS doit être capable de déterminer dynamiquement la règle appropriée en fonction des données d'entrée pour rester précis malgré les changements.",
  },
  {
    id: "tae3q27",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Le TAS de votre organisation utilise un scripting basé sur les mots-clés. L'architecte du système d'automatisation a quitté l'entreprise. Le TAS comprend de nombreuses bibliothèques de mots-clés utilisées sur plusieurs projets, dont la maintenance est répartie entre plusieurs équipes. Quel est le risque le plus important pour le TAS dans cette situation ?",
    options: [
      "Si les scripts basés sur les mots-clés ne sont pas mis à jour, ils pourraient devenir obsolètes",
      "Étant donné que plusieurs équipes sont responsables de la maintenance des scripts, il est possible que les bonnes pratiques de codage ne soient pas suivies",
      "Les nouveaux projets pourraient ne pas utiliser le TAS aussi efficacement que les projets en cours",
      "Le système peut être difficile à maintenir en raison de son niveau d'abstraction et du départ de l'architecte",
    ],
    answer: [3],
    explanation:
      "Le niveau d'abstraction élevé des scripts basés sur des mots-clés, combiné au départ de l'architecte qui a conçu la structure, augmente fortement le risque que l'équipe restante peine à comprendre et maintenir le TAS.",
  },
  {
    id: "tae3q28",
    domain: "Introduction à l'automatisation des tests",
    difficulty: "facile",
    question: "Quel est l'objectif des tests systèmes ?",
    options: [
      "Vérifier la fonctionnalité de bout en bout",
      "Tester les modules individuels pour détecter des bugs internes",
      "Valider les modifications de configuration",
      "Vérifier la performance du code",
    ],
    answer: [0],
    explanation:
      "Les tests systèmes visent à valider le fonctionnement de l'ensemble du système, s'assurant que tous les composants fonctionnent correctement ensemble dans un environnement proche de la production.",
  },
  {
    id: "tae3q29",
    domain: "Préparation de l'automatisation des tests",
    difficulty: "facile",
    question: "Quel facteur est essentiel à prendre en compte lors de la sélection d'outils d'automatisation des tests ?",
    options: [
      "La popularité de l'outil parmi les testeurs dans l'industrie",
      "Les coûts associés aux outils et fonctionnalités d'automatisation des tests",
      "La disponibilité d'un support pour chaque outil",
      "Le nombre de fonctionnalités offertes par l'outil",
    ],
    answer: [1],
    explanation:
      "Le choix d'un outil d'automatisation doit tenir compte des coûts (licences, configuration, maintenance à long terme) pour s'assurer qu'il correspond au budget du projet tout en apportant une valeur ajoutée.",
  },
  {
    id: "tae3q30",
    domain: "Risques de déploiement et contingence",
    difficulty: "facile",
    question:
      "Comment les variables de déploiement interagissent-elles avec les pipelines d'intégration continue et de déploiement continu (CI/CD) ?",
    options: [
      "Elles sont utilisées pour stocker le code source de l'application",
      "Elles garantissent que les configurations correctes sont appliquées automatiquement pendant le processus de déploiement",
      "Elles limitent le nombre d'environnements de déploiement disponibles pour l'application",
      "Elles nécessitent une intervention manuelle avant chaque déploiement",
    ],
    answer: [1],
    explanation:
      "Les variables de déploiement permettent de gérer les configurations spécifiques à chaque environnement (dev, test, production) dans un pipeline CI/CD, garantissant un déploiement correct et sans erreur.",
  },
  {
    id: "tae3q31",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question: "Comment le modèle de flux (Flow Model Pattern) profite-t-il à l'automatisation des tests ?",
    options: [
      "Il modélise le flux des interactions entre différentes parties d'un système",
      "Il permet la manipulation directe de l'interface utilisateur sans abstraction",
      "Il réduit le besoin de plusieurs scripts de test",
      "Il augmente la complexité du code de test",
    ],
    answer: [0],
    explanation:
      "Le modèle de flux représente les interactions entre différentes parties d'une application, facilitant l'automatisation de scénarios complexes et améliorant la réutilisabilité des composants de test.",
  },
  {
    id: "tae3q32",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Lors de l'évaluation des mécanismes d'attente dans un contexte d'automatisation des tests, laquelle des affirmations suivantes est vraie concernant l'attente dynamique par sondage ?",
    options: [
      "Elle vérifie en continu qu'une condition spécifique est remplie, permettant au système de réagir plus efficacement à la disponibilité des éléments",
      "Elle ne nécessite pas de mécanisme de timeout dans l'attente dynamique par sondage",
      "Elle est applicable aux situations où aucun timeout n'est défini, ce qui la rend peu fiable pour les tests longs",
      "Elle est moins efficace que les attentes codées en dur, car elle force le programme à attendre un temps fixe avant de continuer",
    ],
    answer: [0],
    explanation:
      "L'attente dynamique par sondage est plus efficace que les attentes codées en dur car elle ne fait progresser le test que lorsque la condition attendue est remplie, réduisant le temps d'attente inutile.",
  },
  {
    id: "tae3q33",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous travaillez sur un projet d'automatisation de tests pour créer des scénarios métiers automatisés utilisés lors des tests d'acceptation utilisateur (UAT), également réutilisés en régression. La bibliothèque de fonctions utilisable a déjà été développée en scripting structuré. Quelle technique de scripting devrait être utilisée pour étendre le scripting structuré ?",
    options: [
      "Scripting basé sur les mots-clés",
      "Scripting linéaire",
      "Développement piloté par le comportement (BDD)",
      "Scripting basé sur les scénarios",
    ],
    answer: [2],
    explanation:
      "Le BDD permet d'automatiser des processus métier avec un langage commun aux équipes techniques et non techniques, en liant les exigences métier aux tests automatisés tout en s'appuyant sur le scripting structuré déjà en place.",
  },
  {
    id: "tae3q34",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "difficile",
    question:
      "Vous avez priorisé le développement de l'automatisation par évaluation des risques et génération de tests basée sur des scénarios, choisi un outil de génération et collaboré avec les équipes de développement et d'infrastructure sur les outils de surveillance. Quelle est la prochaine étape ?",
    options: [
      "Vous devez évaluer l'effort d'automatisation dans son ensemble, en tenant compte de la formation, de l'utilisation des ressources et de l'analyse coût/bénéfice",
      "Vous devez modifier votre stratégie de génération de tests. Un scénario pour la génération de tests ne doit pas être utilisé.",
      "Puisque votre application est basée sur des données, vous devez maintenant développer une approche basée sur les données pour définir les tests",
      "L'outil d'exécution des tests que vous utilisez doit être compatible avec la stratégie de génération de tests que vous avez choisie",
    ],
    answer: [3],
    explanation:
      "Une fois la stratégie de génération de tests définie, il faut s'assurer que l'outil d'exécution des tests peut prendre en charge cette stratégie et s'intègre avec les outils et processus déjà en place.",
  },
  {
    id: "tae3q35",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "moyen",
    question:
      "Un TAA est utilisé pour implémenter un TAS. Pendant les tests, le SUT peut communiquer avec un autre système fiable et accessible ; l'interface GUI servira d'interface de test. Quelle partie du TAA pouvez-vous retirer du TAS dans cette situation ?",
    options: [
      "La génération des tests",
      "L'exécution des tests",
      "Le simulateur",
      "L'interface GUI",
    ],
    answer: [2],
    explanation:
      "Le système externe étant déjà fiable et accessible, il n'est pas nécessaire d'utiliser un simulateur pour simuler la communication entre le SUT et ce système.",
  },
  {
    id: "tae3q36",
    domain: "Risques de déploiement et contingence",
    difficulty: "moyen",
    question:
      "Un TAS que vous avez développé sera appliqué à plusieurs projets dans votre entreprise. Chaque projet a jusqu'à présent été configuré manuellement. Votre manager vous a informé que vous devrez bientôt déployer le TAS pour d'autres SUTs. Quelle méthode est la plus efficace pour gérer cette installation ?",
    options: [
      "Installer le TAS depuis un dépôt central en utilisant des scripts d'installation pour automatiser le processus",
      "Poursuivre l'installation manuelle mais créer un test automatisé pour vérifier les résultats de l'installation",
      "Automatiser le processus d'installation en créant des scripts pour copier les fichiers entre les TAS actifs",
      "Poursuivre l'installation manuelle puisqu'elle fonctionne et vous permet de vérifier manuellement les résultats",
    ],
    answer: [0],
    explanation:
      "L'automatisation du processus d'installation via des scripts depuis un dépôt central garantit des configurations cohérentes, réduit le risque d'erreurs humaines et facilite la gestion à grande échelle pour plusieurs projets.",
  },
  {
    id: "tae3q37",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "moyen",
    question:
      "Vous développez un TAS pour une application d'inscription à des examens de certification. Les développeurs ont fourni une interface de test permettant de consulter les règles et d'obtenir les résultats des décisions. Le SUT est prêt à être publié en production. Que faire avec cette interface de test ?",
    options: [
      "Elle doit rester dans le code pour éviter les perturbations avant la mise en production",
      "Elle n'aurait pas dû être utilisée pour tester à cause du risque d'effet sonde",
      "La supprimer du code pour éliminer les problèmes de sécurité",
      "La désactiver dans le code pour la production, mais la garder facilement activable pour les tests des futures versions",
    ],
    answer: [3],
    explanation:
      "Il est recommandé de ne pas supprimer les interfaces de test avant la mise en production ; elles peuvent être désactivées et réactivées facilement pour les tests de maintenance des futures versions.",
  },
  {
    id: "tae3q38",
    domain: "Vérification et amélioration continue du TAS",
    difficulty: "difficile",
    question:
      "Une suite de tests comportant 1000 scripts a récemment commencé à échouer vers la fin de son exécution, en raison d'une défaillance du SUT non détectée par un ou plusieurs tests plus tôt dans la séquence. Pour identifier le test qui a produit un faux négatif, quelles informations de journalisation sont nécessaires parmi : (1) statut d'exécution, (2) temporisation de chaque étape, (3) compteur d'exécutions, (4) actions de chaque cas de test permettant de rejouer le test, (5) informations d'erreur ?",
    options: ["1, 4, 5", "2, 4, 5", "2, 3, 5", "1, 2, 3"],
    answer: [0],
    explanation:
      "Les informations sur le statut d'exécution, les actions de chaque cas de test et les informations d'erreur permettent d'identifier les tests ayant produit un faux négatif, c'est-à-dire n'ayant pas signalé une défaillance pourtant survenue.",
  },
  {
    id: "tae3q39",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question: "Quel principe garantit que chaque composant d'un TAS est responsable d'une seule chose ?",
    options: ["Responsabilité unique", "Remplacement", "Inversion des dépendances", "Extension"],
    answer: [0],
    explanation:
      "Le principe de responsabilité unique (SRP) stipule que chaque composant doit avoir une seule responsabilité clairement définie, améliorant la maintenabilité et permettant des modifications isolées.",
  },
  {
    id: "tae3q40",
    domain: "Architecture générique d'automatisation des tests",
    difficulty: "facile",
    question:
      "Dans le contexte du principe d'Ouverture/Fermeture (OCP) de SOLID, que signifie le fait que les classes dans un framework d'automatisation des tests soient « ouvertes à l'extension mais fermées à la modification » ?",
    options: [
      "Les classes doivent être entièrement abstraites sans aucune implémentation",
      "Les classes doivent être conçues de manière à être modifiées directement pour de nouvelles fonctionnalités",
      "Les classes doivent permettre l'ajout de nouvelles fonctionnalités en les étendant",
      "Toutes les classes doivent rester statiques et ne jamais changer",
    ],
    answer: [2],
    explanation:
      "Le principe Ouvert/Fermé (OCP) stipule que les entités logicielles doivent être ouvertes à l'extension mais fermées à la modification, permettant d'ajouter des fonctionnalités sans modifier le code existant, réduisant le risque de régressions.",
  },
];
