/* =========================================
   ARCO — Données du site
   Catégories + projets (source unique)
   ========================================= */

const CATEGORIES = {
  architecture: {
    id: 'architecture',
    label: 'Architecture',
    cssClass: 'archi',
    color: '#1A7A38',
    description: "Vous êtes un particulier, une entreprise privée, une collectivité ? Vous recherchez un architecte pour votre projet ? Toute l'équipe d'Architecture Commune est à votre disposition pour discuter de votre projet et vous faire des propositions architecturales de constructions neuves, de rénovations et/ou d'extensions ainsi que d'aménagement intérieur de vos espaces existants. Convaincus de la nécessité d'adapter nos pratiques et de repenser la manière de bâtir face aux enjeux actuels d'usage raisonné des ressources, nous vous proposerons des espaces adaptés à vos souhaits. Toujours dans un état d'esprit d'évolution architecturale harmonieuse, nos projets favorisent une intégration réussie dans le tissu urbain. Très sensible à l'architecture vernaculaire de notre région Normandie, nous connaissons bien le bâti ancien et pouvons adapter les techniques de mise en œuvre aux constructions existantes. Pour les particuliers, Architecture Commune est aussi référencé sur le site France Rénov pour vous aider dans vos choix de rénovations énergétiques."
  },
  amo: {
    id: 'amo',
    label: 'AMO',
    cssClass: 'amo',
    color: '#0055B3',
    description: "Vous êtes un élu, une collectivité, une entreprise privée ? Vous recherchez un Assistant à Maîtrise d'Ouvrage (AMO) ? Nous vous accompagnons sur l'étude de faisabilité, l'élaboration des besoins, la rédaction d'un programme détaillé, l'estimation budgétaire du projet et organisons le recrutement et la passation du marché de maîtrise d'œuvre. Nous vous accompagnons également sur l'aide au montage des dossiers de subvention et pouvons vous assister sur les études de diagnostics et d'esquisse jusqu'à la phase Projet."
  },
  art: {
    id: 'art',
    label: 'Art & Espaces publics',
    cssClass: 'art',
    color: '#C04000',
    description: "Si vous souhaitez mener un projet nécessitant une intervention dans l'espace public ou un espace partagé, nous sommes à votre disposition pour échanger sur vos besoins. Nous concevons et réalisons des interventions sur mesure dans l'espace public, qu'elles soient pérennes ou éphémères. Ces projets ont pour objectif de favoriser les échanges avec les habitants d'un quartier, les membres d'une collectivité, les élèves d'une école et de sensibiliser à différentes problématiques sociales en créant des espaces d'interaction et de dialogue. Ensemble, nous pourrons définir une méthodologie et concevoir un projet adapté à vos objectifs et à votre contexte."
  },
  sensibilisation: {
    id: 'sensibilisation',
    label: 'Sensibilisation',
    cssClass: 'sensi',
    color: '#9A6E00',
    description: "Dans le but d'être en lien avec le public usager, pour mieux appréhender les enjeux territoriaux, mais aussi vulgariser l'architecture pour tous, Architecture Commune propose la mise en place de conférences, de visites thématiques ou d'ateliers pour différents publics autour de l'architecture. Notre objectif est d'intégrer au quotidien l'architecture et de la rendre accessible à tous en proposant des espaces d'échange flexibles et adaptés selon vos besoins."
  }
};

/* Ordre d'affichage des catégories dans le menu */
const CATEGORY_ORDER = ['architecture', 'amo', 'art', 'sensibilisation'];

function img(id, file) { return 'media/projets/' + id + '/' + file; }

const projects = [

  /* ===========================
     ARCHITECTURE
     =========================== */
  {
    id: 'archi-001', category: 'architecture', num: '001',
    title: "Construction d'une maison individuelle bioclimatique à ossature bois",
    location: 'Verrières le Buisson (91)', year: '2010',
    mission: "Mission complète de maîtrise d'œuvre",
    mo: 'Particulier', budget: null, partners: null,
    description: "Mission complète (du premier rendez-vous jusqu'à la réception des travaux) pour un particulier pour la création de sa future maison. Soucieux de mettre en œuvre des éléments biosourcés, le parti pris a été d'utiliser une ossature bois de 145 mm d'épaisseur avec une isolation en ouate de cellulose (projetée dans l'ossature) et fibre de bois en isolation par l'extérieur. Menuiseries en bois-aluminium, vitrage faible émissivité, volets roulants sur toutes les baies. Pose d'un plancher chauffant sur les 2 niveaux de la maison alimentés par une pompe à chaleur géothermique à captage vertical. Idem pour l'eau chaude sanitaire. Pose d'une VMC double flux avec by-pass. Pose d'un complexe de toiture végétalisée pour limiter le débit des eaux pluviales et réduire l'albédo de la couverture.",
    links: [],
    images: ['001.01.jpg','001.02.jpg','001.03.jpg','001.04.JPG','001.05.jpg','001.06.jpg'].map(f => img('archi-001', f))
  },
  {
    id: 'archi-002', category: 'architecture', num: '002',
    title: "Rénovation d'un hôtel — aménagement des combles, création de 14 chambres dont 2 PMR",
    location: 'Verrières le Buisson (91)', year: '2014',
    mission: 'DIAG / Esquisse, APS, APD, dépôt de PC',
    mo: "Professionnel de l'hôtellerie", budget: null, partners: null,
    description: "Le projet consiste en l'aménagement des combles de l'hôtel existant pour créer 14 chambres supplémentaires. Cet agrandissement prend en compte la mise aux normes d'accessibilité avec la création d'un ascenseur et d'un escalier de secours. L'architecture de l'hôtel a été totalement respectée en reprenant l'alignement des baies existantes, les couleurs, en créant des lucarnes à double pente et en incorporant des volets identiques à ceux déjà sur place.",
    links: [],
    images: ['002.02.JPG','002.03.png','002.04.png'].map(f => img('archi-002', f))
  },
  {
    id: 'archi-003', category: 'architecture', num: '003',
    title: "Aménagement d'un gîte dans une bâtisse en pierre",
    location: 'Feuguerolles Bully (14)', year: '2020',
    mission: "Mission complète de maîtrise d'œuvre",
    mo: 'Particulier', budget: null, partners: null,
    description: "Situé sur le domaine Les Tilleuls, une extension des années 50 laissée à l'abandon a été réhabilitée pour la création d'un gîte touristique. Le plus gros du projet s'est porté sur la faisabilité de créer les points d'eau comme la salle de bains et la cuisine et de relier les réseaux aux eaux usées. La cheminée très imposante et les poutres apparentes du plancher de l'étage ont été conservées pour garder l'esprit du lieu. Des matériaux de réemploi ont été mis en œuvre sur site (lavabo, mobilier, carrelage, garde-corps de l'escalier).",
    links: [],
    images: ['003.01.jpg','003.02.jpg','003.03.jpg','003.04.jpg','003.05.jpg','003.06.jpg'].map(f => img('archi-003', f))
  },
  {
    id: 'archi-004', category: 'architecture', num: '004',
    title: "Rénovation d'un appartement",
    location: 'Caen (14)', year: '2023',
    mission: "Mission complète de maîtrise d'œuvre",
    mo: 'Particulier', budget: null, partners: null,
    description: "Situé au 4ᵉ étage d'une petite copropriété, cet appartement des années 70 a été entièrement réhabilité en déplaçant la cuisine dans la grande pièce de vie afin de pouvoir créer un espace nuit.",
    links: [],
    images: ['004.03.jpeg'].map(f => img('archi-004', f))
  },
  {
    id: 'archi-005', category: 'architecture', num: '005',
    title: "Rénovation d'un domaine privé en Maison des Arts",
    location: 'Dordogne (24)', year: '2017 & 2025',
    mission: 'Programmation, esquisse, projet d\'aménagement, rénovation intérieure',
    mo: 'Privé', budget: null, partners: null,
    description: "Nous avons développé des propositions pour transformer un domaine privé en lieu d'accueil de résidences artistiques, avec la réalisation d'un escalier sur mesure dans la partie privée. Le projet incluait également la conception d'un aménagement urbain intégré au sein d'un parc de sculptures. Nous avons utilisé différents outils de représentation — photomontages, modélisations 3D, dessin technique, projections — et mené un travail de médiation locale à travers des réunions, une publication et une exposition des différentes propositions.",
    links: [],
    images: ['005.01.jpg','005.02.png','005.03.png','005.04.jpeg','005.05.jpeg','005.06.jpeg','005.07.jpeg'].map(f => img('archi-005', f))
  },

  /* ===========================
     AMO
     =========================== */
  {
    id: 'amo-101', category: 'amo', num: '101',
    title: "Étude pour la rénovation d'un ancien presbytère en logement",
    location: 'Annebault (14)', year: '2025',
    mission: "Programmation, estimatifs sommaires, accompagnement pour la mise en œuvre du marché de recrutement de maîtrise d'œuvre",
    mo: "Ville d'Annebault (14)", budget: '500 000 € HT', partners: 'Étude de faisabilité pour le CAUE 14',
    description: "Inoccupé depuis plusieurs années, l'ancien presbytère a fait l'objet d'une réflexion menée par les élus de la commune en vue de sa reconversion. L'accompagnement réalisé a permis de définir un programme comprenant l'aménagement de trois logements au sein du bâtiment existant. La mission s'est poursuivie aux côtés des élus lors du choix de l'équipe de maîtrise d'œuvre, puis tout au long des échanges avec les différents intervenants du projet. Le projet est actuellement en cours de réalisation par l'agence d'architecture Borey Dubois.",
    links: [],
    images: ['101.01.png','101.02.jpg','101.03.jpg'].map(f => img('amo-101', f))
  },
  {
    id: 'amo-102', category: 'amo', num: '102',
    title: "Étude pour la construction d'une nouvelle mairie",
    location: 'Juvigny sur Seulles (14)', year: '2026',
    mission: 'Programmation, estimatifs sommaires',
    mo: 'Commune de Juvigny sur Seulles (14)', budget: 'En cours de réflexion', partners: 'Étude de faisabilité pour le CAUE 14',
    description: "Les élus envisagent de vendre le bâtiment actuel de la mairie, ne répondant plus aux normes en vigueur, afin de permettre la construction d'une nouvelle mairie. L'accompagnement a consisté à mener une réflexion avec les élus sur les usages de ce futur équipement, au-delà de sa programmation initiale, afin d'anticiper les évolutions à venir et de favoriser une utilisation polyvalente du bâtiment. Une parcelle dédiée a été identifiée pour accueillir ce projet. Toutefois, plusieurs contraintes doivent être prises en compte, notamment la localisation du terrain dans un environnement à forte sensibilité patrimoniale, à proximité du pont sur la Seulles et du château de Juvigny. Cette étude a permis aux élus de poursuivre leur réflexion, de préciser leurs besoins et d'envisager un programme adapté aux enjeux actuels et futurs de la commune.",
    links: [],
    images: ['102.01.png','102.2.png','102.3.jpg'].map(f => img('amo-102', f))
  },
  {
    id: 'amo-103', category: 'amo', num: '103',
    title: "Étude pour la rénovation d'un bâtiment industriel en pôle santé",
    location: 'Subles (14)', year: '2025',
    mission: 'Programmation, estimatifs sommaires',
    mo: 'Commune de Subles (14)', budget: 'En cours de réflexion', partners: 'Étude de faisabilité pour le CAUE 14',
    description: "Dans le contexte de la cessation d'activité d'une entreprise implantée en cœur de bourg, la commune a engagé une réflexion sur la possible reconversion de ce bâtiment afin d'y accueillir différents services en complément des équipements existants à proximité (école, bibliothèque, etc.). L'objectif de cette étude était d'évaluer la faisabilité spatiale, technique et économique de la transformation de cet ancien bâtiment industriel en un équipement capable d'accueillir diverses activités, telles qu'une Maison d'Assistantes Maternelles (MAM), un pôle de santé ou encore des commerces de proximité. Cette démarche a permis d'identifier les potentialités et les contraintes du site, afin d'éclairer les choix des élus. À ce jour, le projet demeure à l'étude au sein de la commune de Subles.",
    links: [],
    images: ['103.02.png','103.03.png','103.04.png','103.05.png'].map(f => img('amo-103', f))
  },
  {
    id: 'amo-104', category: 'amo', num: '104',
    title: "Étude pour la transformation d'un réfectoire scolaire en médiathèque / fablab",
    location: 'Ablon (14)', year: '2025',
    mission: 'Choix de nouvelle affectation, programmation, estimatifs sommaires',
    mo: "Ville d'Ablon (14)", budget: null, partners: 'Étude de faisabilité pour le CAUE 14',
    description: "La commune va engager des travaux pour créer un nouveau réfectoire dans l'enceinte de l'école. Le CAUE avait mené en 2021 une étude en ce sens. Aujourd'hui, la question du devenir du bâtiment actuel est posée : doit-il être démoli ? conservé ? Et s'il est conservé, quels usages la commune peut-elle faire de ces nouveaux espaces libres ? Situé dans le bourg, proche de la mairie et de l'église, quels usages peut-il apporter à la commune ? En établissant un état des lieux de la situation et du contexte urbain, le choix s'est porté sur un établissement public accessible à tous les Ablonnais : une médiathèque-fablab. Trois hypothèses ont été proposées à la commune, en conservant la totalité ou une partie du bâtiment et en démolissant-reconstruisant l'ensemble immobilier nécessaire au nouveau programme. La commune est toujours en cours de réflexion face aux éléments proposés par cette étude de faisabilité.",
    links: [],
    images: ['104.02.JPG','104.03.jpeg','104.04.jpeg'].map(f => img('amo-104', f))
  },

  /* ===========================
     ART & ESPACES PUBLICS
     =========================== */
  {
    id: 'art-201', category: 'art', num: '201',
    title: "Aménagement d'espaces publics et jardins",
    location: 'Quartier de La Ensenada, Lima (Pérou)', year: '2012 – 2024',
    mission: "Mission complète de maîtrise d'œuvre",
    mo: 'Communes de La Ensenada', budget: "Selon l'ouvrage, environ 250 $/m² HT", partners: 'Association Mano a Mano Perú',
    description: "Pour l'ensemble des jardins réalisés entre 2012 et 2024 avec l'association Mano a Mano à Lima (Pérou), nous avons assuré l'intégralité de la mission de maîtrise d'œuvre, depuis les premières esquisses élaborées avec les élus du quartier jusqu'au suivi de chantier (phases équivalentes APS, APD, PC, coordination avec les équipes de construction et marché de travaux, élaboration du phasage des travaux ainsi que le suivi général du chantier). Ces aménagements participent à la sécurisation du site et des habitations grâce à la réalisation de murs de soutènement adaptés à la forte pente du terrain. La conception de ces ouvrages de gros œuvre a été développée en collaboration avec un bureau d'étude structure pour garantir leur adéquation aux caractéristiques du site ainsi qu'aux contraintes sismiques locales.",
    links: [
      { label: 'Vidéo', url: 'https://www.youtube.com/watch?v=Y0oyjdjKwtE' },
      { label: 'manoamanoperou.org', url: 'https://www.manoamanoperou.org' }
    ],
    images: ['201.01.png','201.02.png','201.03.png','201.04.png','201.05.png'].map(f => img('art-201', f))
  },
  {
    id: 'art-202', category: 'art', num: '202',
    title: "Construction participative d'une bibliothèque publique",
    location: 'Quartier de Barrios Altos, Lima (Pérou)', year: '2023',
    mission: 'Mission complète',
    mo: 'Ministère de la Culture du Pérou', budget: '15 000 € HT', partners: 'Octava',
    description: "Ce projet de « Contes Urbains » a été réalisé dans le cadre du programme « Renovarte » du Ministère de la Culture péruvien. Nous avons réalisé un diagnostic et la construction participative d'un personnage de grand format, utilisé comme bibliothèque publique, avec des matériaux récupérés sur place avec les habitants. Cette action a été menée avec une équipe pluridisciplinaire et avec les usagers (de toutes générations) du lieu où s'installe maintenant ce personnage. Grâce au travail de recherche sur place et à la collaboration réalisée avec les habitants, nous avons créé un personnage représentatif du lieu d'intervention ainsi qu'un conte illustré par Andréa Lertora, qui finalise le travail de diagnostic effectué en valorisant la mémoire locale recueillie auprès des habitants.",
    links: [
      { label: 'octava.pe', url: 'https://www.octava.pe' },
      { label: 'Vidéo', url: 'https://www.youtube.com/watch?v=yLwwYgfRua4' },
      { label: 'Le conte « El Zorrito Runrun »', url: 'https://cuento-el-zorrito-runrun.my.canva.site/el-zorrito-runrun' }
    ],
    images: ['202.01.png','202.02.png','202.03.png','202.04.png','202.05.png'].map(f => img('art-202', f))
  },
  {
    id: 'art-203', category: 'art', num: '203',
    title: "Constructions de sculptures monumentales dans l'espace public",
    location: 'Lima (Pérou) / Lille (France)', year: '2015 – 2019',
    mission: 'Mission complète',
    mo: 'USAID (Pérou, 2015), Festival Lille 3000 (France, 2019)', budget: "Selon l'ouvrage", partners: 'Collectif Detonador (José Luis Casanova, Miguel Ponce, José Urteaga)',
    description: "Ces sculptures ont été réalisées avec le collectif Detonador à partir de matériaux récupérés (cagettes de fruits, structures métalliques, meubles anciens en bois, skis, etc.) puis installées dans l'espace public. Ces œuvres visent à sensibiliser aux conséquences de la déforestation dans le cadre du projet Amazonía Aquí, en partenariat avec USAID, ainsi qu'à encourager la réutilisation des matériaux du quotidien et la valorisation de la mémoire collective, grâce aux meubles récupérés dans les ressourceries de Lille et de ses environs, dans le cadre du festival Lille 3000 – El Dorado (2019).",
    links: [
      { label: 'Vidéo', url: 'https://www.youtube.com/watch?v=6L75hEcbAuc' }
    ],
    images: ['203.01.png','203.02.png','203.03.png','203.04.png','203.05.png','203.06.png'].map(f => img('art-203', f))
  },
  {
    id: 'art-204', category: 'art', num: '204',
    title: 'Construction de vélos XXL',
    location: 'Lima (Pérou)', year: '2015 – 2019',
    mission: 'Mission complète',
    mo: 'Municipalité de Lima — Privé', budget: "Selon l'ouvrage", partners: 'Collectif Detonador & La Máquina (théâtre expérimental)',
    description: "Ce projet a été réalisé avec le collectif Detonador (José Luis Casanova, Miguel Ponce, José Urteaga) et la compagnie de théâtre La Máquina (teatro experimental) pour sensibiliser à la place du vélo dans la ville.",
    links: [
      { label: 'Vidéo', url: 'https://www.youtube.com/watch?v=eY6g7rumtJk' }
    ],
    images: ['204.01.png','204.02.png','204.03.png','204.04.png'].map(f => img('art-204', f))
  },
  {
    id: 'art-205', category: 'art', num: '205',
    title: 'Réalisation de fresques murales et enquêtes de terrain',
    location: 'Lima (Pérou)', year: '2015 – 2019',
    mission: 'Mission complète',
    mo: 'Municipalité de Lima — Privé', budget: "Selon l'ouvrage", partners: null,
    description: "Ce projet cherche à faire se rencontrer les personnes et/ou communautés isolées géographiquement avec d'autres ayant résolu des problématiques similaires. C'est un projet intégral qui œuvre dans les domaines urbain et artistique et travaille à la fabrication d'espaces publics avec les habitants d'un quartier, en intégrant les savoir-faire locaux et en mettant en réseau des projets similaires. Exemple réalisé dans le quartier de Mirones, logements sociaux des années 50 du centre de Lima : revalorisation des espaces par la réalisation de fresques de grand format par un groupe de voisins organisé autour d'un artiste local (Franko Domenak, Wa) et réalisation d'enquêtes auprès des habitants dans le but de définir un plan d'action de développement du quartier par ses espaces publics.",
    links: [],
    images: ['205.01.png','205.02.png','205.03.png','205.04.png','205.05.png'].map(f => img('art-205', f))
  },

  /* ===========================
     SENSIBILISATION
     =========================== */
  {
    id: 'sensi-301', category: 'sensibilisation', num: '301',
    title: 'Sensibilisation aux risques',
    location: 'Caen (14)', year: '2024',
    mission: 'Animation, par le biais du CAUE 14',
    mo: null, budget: null, partners: 'CAUE 14',
    description: "Afin de sensibiliser les services instructeurs du droit du sol aux différents risques de notre territoire, l'architecte a élaboré une demi-journée d'animation sur ce thème, en survolant différents projets calvadosiens — terminés, en cours ou en réflexion — face aux risques tels que la submersion marine, les mouvements de terrains, le radon…",
    links: [],
    images: ['301.01.png','301.02.png','301.03.png'].map(f => img('sensi-301', f))
  },
  {
    id: 'sensi-302', category: 'sensibilisation', num: '302',
    title: 'Enseignement',
    location: 'Normandie (France)', year: null,
    mission: 'Enseignement, conférences et rédaction d\'articles',
    mo: null, budget: null, partners: 'ENSA Normandie · UniCaen (Master MADURA)',
    description: "Une partie de notre pratique s'inscrit dans une démarche de transmission, menée aussi bien dans le milieu académique auprès de jeunes étudiants en architecture que d'étudiants issus d'autres disciplines (géographie, droit, etc.). Cette activité se prolonge également à travers des conférences ainsi que la rédaction de plusieurs articles.",
    links: [],
    images: ['302.01.png','302.02.png','302.03.png','302.04.png','303.05.png'].map(f => img('sensi-302', f))
  },
  {
    id: 'sensi-303', category: 'sensibilisation', num: '303',
    title: "Sensibilisation du public à l'architecture de notre territoire",
    location: 'Caen & Vire (14)', year: '2021 – 2024',
    mission: 'Visite de site, animation, création de livret — par le biais du CAUE 14',
    mo: null, budget: null, partners: 'CAUE 14',
    description: "Nous pouvons organiser des visites de tout type sur l'architecture, suivant un thème précis selon les besoins. Par exemple, dans le cadre de la journée des Enfants du Patrimoine, nous avons mené une visite ludique à destination du jeune public de la médiathèque Alexis de Tocqueville à Caen, pour expliquer les choix faits par l'architecte selon les différents espaces créés ; un livret a été spécialement réalisé à destination des jeunes scolaires pour reprendre en classe les éléments vus lors de cette visite. Autour de l'architecture de la reconstruction, nous avons également animé pour le grand public une balade urbaine dans le centre-ville de Vire, pour se plonger dans cette architecture particulière et en apprendre les codes de lecture.",
    links: [
      { label: 'Article de presse (Vire)', url: 'https://caen.maville.com/actu/actudet_-en-images.-une-balade-a-vire-pour-decouvrir-les-specificites-de-l-architecture-de-la-reconstruction-_4-6004311_actu.Htm' }
    ],
    images: ['303.01.jpg','303.03.jpg','303.04.jpg','303.05.jpg'].map(f => img('sensi-303', f))
  },
  {
    id: 'sensi-304', category: 'sensibilisation', num: '304',
    title: 'Réflexion sur les espaces scolaires avec les usagers',
    location: 'Calvados (14)', year: '2024',
    mission: 'Réflexion sur les espaces scolaires auprès des enfants dans 7 classes élémentaires et 3 écoles du Calvados — Appel à Idées par le CAUE 14',
    mo: null, budget: null, partners: 'CAUE 14 · Écoles Joliot-Curie (Blainville-sur-Orne), des 7 Collines (Blangy-le-Château), Yvonne Guégan (Thaon)',
    description: "Nous avons mis au point des livrets supports à destination des élus, des équipes pédagogiques et des élèves des différentes écoles, afin d'imaginer de nouvelles façons d'aménager et de réutiliser les espaces scolaires existants et de contribuer à l'évolution des pratiques pédagogiques et architecturales en milieu éducatif. Ils ont permis de percevoir les problématiques rencontrées au sein de l'établissement et d'engager un dialogue riche avec l'ensemble des parties prenantes. Ces temps d'échange ont posé les premières bases d'une réflexion collective sur l'avenir du bâti scolaire, dans un souci d'amélioration du bien-être des enfants et de leur réussite. La démarche s'est poursuivie avec des ateliers organisés auprès des élèves : l'occasion d'écouter et de comprendre leur perception de l'école d'aujourd'hui, et de recueillir leurs envies, leurs idées, leur vision pour l'école de demain.",
    links: [],
    images: ['304.01.jpg','304.02.jpg','304.03.jpg','304.04.jpg','304.05.jpg'].map(f => img('sensi-304', f))
  },
  {
    id: 'sensi-305', category: 'sensibilisation', num: '305',
    title: "Ateliers d'éveil à l'architecture",
    location: 'France (Verrières le Buisson) & Pérou (Lima)', year: '2012 – 2026',
    mission: null, mo: null, budget: null, partners: null,
    description: "Nous accompagnons la sensibilisation à l'architecture auprès des enfants afin de favoriser l'ouverture d'esprit et de rendre l'architecture accessible au quotidien. Cette démarche vise à permettre à chacun de développer une conscience des enjeux liés au cadre de vie, au bien-être et à la qualité des conditions d'habitat.",
    links: [],
    images: ['305.01.JPG','305.02.JPG','305.03.JPG','305.04.JPG','305.05.JPG'].map(f => img('sensi-305', f))
  },
  {
    id: 'sensi-306', category: 'sensibilisation', num: '306',
    title: 'Balades urbaines',
    location: 'Lima (Pérou)', year: null,
    mission: 'Visites thématiques ouvertes à tous',
    mo: null, budget: null, partners: null,
    description: "Dans le cadre de la mise en réseau des initiatives locales, nous travaillons à la valorisation de ces actions à travers la mise en place de visites thématiques ouvertes à tous. Nous avons, par exemple, accompagné un groupe d'habitants à Lima dans la création d'un écomusée vernaculaire, conçu comme un outil de valorisation et de transmission des savoirs locaux, à travers des parcours sur site et un site internet dédié. En rendant visibles ces initiatives et en organisant des visites du territoire, nous souhaitons sensibiliser un public plus large à l'histoire sociale et environnementale du quartier. La balade urbaine est vue comme un voyage dans le temps, pour mieux saisir l'évolution de ces paysages singuliers.",
    links: [
      { label: 'Seminario Vivencial', url: 'https://comunicaciones449.wixsite.com/seminario-vivencial' }
    ],
    images: ['306.01.jpg','306.02.jpg','306.03.jpg','306.04.jpg','306.05.jpg'].map(f => img('sensi-306', f))
  }
];

function getProject(id) {
  return projects.find(p => p.id === id) || null;
}

function getProjectsByCategory(cat) {
  return projects.filter(p => p.category === cat);
}
