/**
 * The seven areas of expertise. Text taken from the previous site, proofread and restructured.
 * `photo` refers to a file in src/assets/photos, `icon` to a Lucide icon name.
 */
export interface Block {
  title: string;
  text?: string;
  items?: string[];
  terms?: { term: string; definition: string }[];
}
export interface Expertise {
  slug: string;
  title: string;
  short: string;
  summary: string;
  icon: string;
  photo: string;
  intro: string;
  sectionsTitle: string;
  blocks: Block[];
  related: string[];
}

export const expertises: Expertise[] = [
  {
    slug: 'systemes-de-management',
    title: 'Mise en place des systèmes de management',
    short: 'Systèmes de management',
    summary: 'Accompagnement à la mise en place et à la certification ISO 9001, 14001, 45001 et 50001.',
    icon: 'clipboard-check',
    photo: 'systemes-management',
    intro:
      'Nous accompagnons nos clients dans leurs démarches de mise en place de systèmes de management, de l’état des lieux jusqu’à la certification. Une entreprise certifiée est une entreprise qui répond aux exigences du référentiel de certification concerné.',
    sectionsTitle: 'Notre accompagnement',
    blocks: [
      {
        title: 'Accompagnement à la certification',
        items: [
          'Qualité – ISO 9001:2015',
          'Environnement – ISO 14001:2015',
          'Santé et sécurité au travail – ISO 45001:2018',
          'Efficacité énergétique – ISO 50001:2018',
        ],
      },
      {
        title: 'Formations managériales',
        text: 'Développement des compétences de vos collaborateurs :',
        items: [
          'pour la maîtrise des référentiels cités ;',
          'sur les outils, méthodes et techniques ;',
          'pour l’amélioration des performances.',
        ],
      },
      {
        title: 'Formations opérationnelles liées au référentiel visé',
        text: 'Animation de formations pour renforcer les compétences des personnes concernées dans la maîtrise opérationnelle :',
        items: ['habilitations ;', 'qualifications ;', 'sensibilisations.'],
      },
      {
        title: 'Amélioration et optimisation de vos processus',
        items: ['Revue des processus.', 'Audits internes spécifiques pour mesurer l’efficience de vos processus.'],
      },
      {
        title: 'Interventions ponctuelles',
        text: 'Résolution de problèmes spécifiques : choix des actions appropriées, organisation dans un plan d’actions et accompagnement de leur mise en œuvre.',
      },
    ],
    related: ['formations-qhse', 'audits-conformite'],
  },
  {
    slug: 'audits-conformite',
    title: 'Audits de conformité réglementaire SST et environnement',
    short: 'Audits de conformité réglementaire',
    summary: 'Évaluation de votre conformité légale et réglementaire en santé, sécurité au travail et environnement.',
    icon: 'scale',
    photo: 'audits-conformite',
    intro:
      'La mission d’évaluation de la conformité légale et réglementaire, pour les aspects environnement et santé et sécurité au travail, permet à votre organisme de connaître ses obligations et d’éviter infractions et sanctions.',
    sectionsTitle: 'Ce que l’audit vous apporte',
    blocks: [
      {
        title: 'Respecter vos obligations légales et réglementaires',
        items: [
          'Mesures et organisation à prévoir dans le cadre du programme de suivi et de surveillance environnementale.',
          'Atténuation de l’impact de vos produits et activités sur l’environnement.',
          'Aménagement des lieux de travail.',
          'Mise en sécurité de vos installations et équipements.',
          'Prévention et protection des travailleurs contre les dangers liés aux activités exercées.',
          'Affichage et signalisation à mettre en place.',
          'Information et formation des travailleurs sur les dangers auxquels ils sont exposés.',
          'Documents obligatoires environnement et SST à établir et à conserver.',
        ],
      },
      {
        title: 'Éviter les infractions et les poursuites',
        text: 'Prévenir les infractions et les poursuites liées à un manquement, de la part des autorités compétentes, des salariés ou des partenaires.',
      },
      {
        title: 'Améliorer votre image de marque',
        text: 'Une conformité démontrée renforce la confiance de vos parties prenantes.',
      },
      {
        title: 'Intégrer la réglementation à vos processus',
        text: 'Intégrer vos exigences réglementaires à vos modes de gestion et, en amont, à l’ensemble de vos processus internes ou externalisés : achats, sous-traitance, intérim, etc.',
      },
      {
        title: 'Réduire l’impact des accidents',
        text: 'Réduire le coût et la désorganisation liés aux accidents du travail, et limiter la recherche systématique des responsabilités après chaque accident grave.',
      },
    ],
    related: ['risques-industriels', 'systemes-de-management'],
  },
  {
    slug: 'ingenierie',
    title: 'Services d’ingénierie',
    short: 'Ingénierie',
    summary: 'Project management, supervision QA/QC et assistance technique pour vos installations industrielles.',
    icon: 'cog',
    photo: 'ingenierie',
    intro:
      'Études, assistance technique et supervision des projets de construction et de modification des installations industrielles.',
    sectionsTitle: 'Nos prestations',
    blocks: [
      {
        title: 'Project management',
        text: 'Pour tous types de projets d’installations industrielles :',
        items: [
          'stockage et manutention des produits en vrac : trémies, convoyeurs, élévateurs, vis d’Archimède, sas, transport pneumatique ;',
          'utilités : circuits d’eau (brute, chaude, industrielle…), air comprimé, fuel ;',
          'levage et manutention ;',
          'métallurgie et constructions métalliques ;',
          'filtration et dépoussiérage ;',
          'installations process spécifiques.',
        ],
      },
      {
        title: 'Supervision QA / QC',
        text: 'Assurance qualité et contrôle qualité de vos projets (Quality Assurance / Quality Control).',
      },
      {
        title: 'Assistance technique en régie',
        text: 'Mise à disposition de techniciens et d’ingénieurs chez nos clients, pour renforcer ponctuellement leurs équipes projets ou répondre à un besoin de profil spécifique.',
      },
    ],
    related: ['construction-infrastructures', 'risques-industriels'],
  },
  {
    slug: 'construction-infrastructures',
    title: 'Construction, bâtiment et infrastructures',
    short: 'Construction et infrastructures',
    summary: 'Missions AMO/MOE, coordination sécurité et protection de la santé (CSPS) et assistance technique.',
    icon: 'hard-hat',
    photo: 'construction',
    intro: 'Nous mobilisons nos compétences pour la réussite de vos projets de construction, de bâtiment et d’infrastructures.',
    sectionsTitle: 'Nos missions',
    blocks: [
      {
        title: 'Missions AMO / MOE',
        text: 'Assistance à maîtrise d’ouvrage et maîtrise d’œuvre, à toutes les phases du projet :',
        terms: [
          { term: 'APS', definition: 'Avant-projet sommaire' },
          { term: 'APD', definition: 'Avant-projet détaillé' },
          { term: 'DCE', definition: 'Dossier de consultation des entreprises' },
          { term: 'ACT', definition: 'Assistance à la passation des contrats de travaux' },
          { term: 'OPC', definition: 'Ordonnancement, pilotage et coordination' },
          { term: 'DET', definition: 'Direction de l’exécution des travaux' },
          { term: 'AOR', definition: 'Assistance aux opérations de réception' },
          { term: 'PAR', definition: 'Parachèvement' },
        ],
      },
      { title: 'Mission CSPS', text: 'Coordination sécurité et protection de la santé sur vos chantiers.' },
      {
        title: 'Assistance technique en régie',
        text: 'Mise à disposition de techniciens et d’ingénieurs pour renforcer ponctuellement vos équipes projets.',
      },
    ],
    related: ['ingenierie', 'prevention-incendie'],
  },
  {
    slug: 'prevention-incendie',
    title: 'Prévention incendie',
    short: 'Prévention incendie',
    summary: 'Notice de sécurité incendie, audits des installations, études ATEX, exercices d’évacuation et formations.',
    icon: 'flame',
    photo: 'prevention-incendie',
    intro:
      'Protéger vos installations contre les risques d’incendie et d’explosion, à partir d’une analyse de risques qui définit les mesures de mise en sécurité.',
    sectionsTitle: 'Nos prestations',
    blocks: [
      { title: 'Notice de sécurité incendie', text: 'Réalisation de la notice de sécurité incendie de vos bâtiments et installations.' },
      { title: 'Audit des installations et équipements', text: 'Audit des installations et équipements de prévention et de protection incendie.' },
      { title: 'Organisation de la prévention', text: 'Accompagnement pour la mise en place d’une organisation de prévention et de lutte contre l’incendie.' },
      { title: 'Évacuation', text: 'Organisation de simulations et d’exercices d’évacuation incendie.' },
      { title: 'Étude ATEX', text: 'Évaluation des risques liés aux atmosphères explosives.' },
      {
        title: 'Formations opérationnelles',
        items: ['Permis de feu.', 'Équipier de première intervention.', 'Exercices d’évacuation.'],
      },
    ],
    related: ['risques-industriels', 'formations-qhse'],
  },
  {
    slug: 'risques-industriels',
    title: 'Risques industriels',
    short: 'Risques industriels',
    summary: 'Études d’impact, analyses des risques SST, installations classées, consignation et formations HSE.',
    icon: 'factory',
    photo: 'risques-industriels',
    intro:
      'Identifier les dangers professionnels, environnementaux et industriels, définir les mesures de prévention et de protection, et bâtir le plan d’actions pour en atténuer les conséquences.',
    sectionsTitle: 'Nos prestations',
    blocks: [
      { title: 'Étude d’impact environnemental', text: 'Pour les nouveaux projets, les extensions ou les modifications de sites existants.' },
      {
        title: 'Analyse environnementale',
        items: [
          'Inspection environnementale réglementaire des sites existants assujettis.',
          'Détermination des aspects environnementaux significatifs.',
        ],
      },
      { title: 'Analyse des risques SST', text: 'Identification des dangers et analyse des risques pour la santé et la sécurité au travail.' },
      {
        title: 'Installations classées',
        text: 'Assistance pour connaître ou réduire votre classement (établissements insalubres, incommodes ou dangereux – EIID), dispositions constructives et règles d’aménagement.',
      },
      { title: 'Coordination CSPS et animation QHSE', text: 'Coordination sécurité et protection de la santé, animation QHSE de vos sites et chantiers.' },
      {
        title: 'Assistance documentaire',
        text: 'Élaboration des PGC, PPSPS, PHS, POI, plans d’urgence, dimensionnement des dispositifs de sécurité, etc.',
      },
      {
        title: 'Formations opérationnelles HSE',
        text: 'Travaux en hauteur, échafaudages, espaces confinés, consignation, CACES (chariots automoteurs, grues, ponts roulants), transport de matières dangereuses, etc.',
      },
      { title: 'Études de consignation et déconsignation', text: 'Études de consignation et de déconsignation des énergies dangereuses.' },
    ],
    related: ['prevention-incendie', 'audits-conformite'],
  },
  {
    slug: 'formations-qhse',
    title: 'Formations QHSE',
    short: 'Formations QHSE',
    summary: 'Formations managériales et opérationnelles en sécurité, environnement, qualité et hygiène au travail.',
    icon: 'graduation-cap',
    photo: 'formations-qhse',
    intro:
      'Face aux aléas de l’environnement actuel, le changement, l’évolution et la compétitivité revêtent une importance particulière. Le développement des compétences et la formation viennent renforcer cette réalité.',
    sectionsTitle: 'Thèmes de formation',
    blocks: [
      {
        title: 'Sécurité',
        items: [
          'Exigences légales et réglementaires SST',
          'Levage et manutention',
          'Travaux en hauteur',
          'Consignation des énergies',
          'Incendie et explosion',
          'Métiers QHSE',
          'Risques chantiers BTP et industrie',
          'Sécurité des machines',
          'Auditeurs internes',
        ],
      },
      {
        title: 'Environnement',
        items: [
          'Exigences légales et réglementaires environnementales',
          'Management des déchets',
          'Analyse environnementale',
          'Protection de l’air, de l’eau et du sol',
          'Auditeurs internes',
        ],
      },
      { title: 'Qualité', items: ['Approche processus', 'Norme ISO 9001:2015', 'Auditeurs internes'] },
      {
        title: 'Hygiène dans les locaux de travail',
        items: ['Exposition aux poussières industrielles', 'Exposition aux substances dangereuses', 'Conduite à tenir face aux risques sanitaires'],
      },
      {
        title: 'Méthodologie',
        items: [
          'Exposés théoriques',
          'Échanges sur la base d’exemples concrets des participants',
          'Ateliers d’exercices pratiques',
          'Vidéos et animations',
          'Documentation de synthèse remise à chaque participant',
          'Évaluation des connaissances acquises',
        ],
      },
    ],
    related: ['systemes-de-management', 'risques-industriels'],
  },
];

export const getExpertise = (slug: string) => expertises.find((e) => e.slug === slug);
