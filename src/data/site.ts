/**
 * Single source of truth for company details.
 * Everything here is shown in the header, footer, contact page and legal pages.
 * Values marked `confirm` are awaiting client confirmation (see the linked GitHub issue).
 */
export const site = {
  name: 'CSP Consulting',
  tagline: 'Committed to Sustainable Performance',
  description:
    "Cabinet d'ingénierie et de conseil QHSE à Tanger : systèmes de management, audits de conformité réglementaire, prévention des risques, formations et protection antichute.",
  founded: 2014,
  phone: { display: '+212 6 61 83 27 74', href: 'tel:+212661832774' },
  email: 'hatim.benomar@cspconsulting.ma',
  address: {
    lines: ['Quartier administratif, rue Sijilmassa', 'Résidence Hyatt Center 3, 3e étage, bureau 45'],
    postalCode: '90000',
    city: 'Tanger',
    country: 'Maroc',
  },
  hours: 'Du lundi au vendredi, de 9 h à 18 h',
  social: {
    facebook: 'https://www.facebook.com/CSP-Consulting-107270521514960',
  } as Record<string, string>,
  regwatchUrl: 'https://regwatch.cspconsulting.ma/',
  regwatchGuideUrl: 'https://regwatch.cspconsulting.ma/guides/regwatch-guide-utilisation.pdf',
  /** Endpoint receiving the contact / quote forms. Empty = fall back to the visitor's e-mail app. */
  formEndpoint: '',
  /** Legal details for the "Mentions légales" page. */
  legal: {
    companyName: 'CSP Consulting',
    legalForm: '[à compléter]',
    capital: '[à compléter]',
    rc: '[à compléter]',
    ice: '[à compléter]',
    if: '[à compléter]',
    publicationDirector: '[à compléter]',
    host: '[à compléter]',
  },
} as const;

export const nav = [
  { label: 'Expertises', href: '/expertises' },
  { label: 'Produits', href: '/produits' },
  { label: 'RegWatch', href: '/regwatch' },
  { label: 'À propos', href: '/a-propos' },
  { label: 'Contact', href: '/contact' },
] as const;

export const keyFigures = [
  { value: '50+', label: 'projets de construction et d’industrie' },
  { value: '100+', label: 'jours d’audit de systèmes QHSE' },
  { value: '100+', label: 'jours d’audit de conformité réglementaire' },
  { value: '400+', label: 'formations animées au Maroc et en Afrique de l’Ouest' },
  { value: '2 000 m', label: 'de lignes de vie installées' },
  { value: '20+', label: 'études de risques professionnels' },
];

export const accreditations = [
  { kind: 'Agrément', title: 'Installation des dispositifs d’ancrage horizontaux et verticaux' },
  { kind: 'Agrément', title: 'Référent pour les formations aux travaux et au sauvetage en hauteur' },
  { kind: 'Agrément', title: 'Consignation et déconsignation des énergies dangereuses' },
  { kind: 'Agrément', title: 'CNPP Incendie, CT-INSSI' },
  { kind: 'Auditeur certifié IRCA', title: 'ISO 9001 – Qualité' },
  { kind: 'Auditeur certifié IRCA', title: 'ISO 14001 – Environnement' },
  { kind: 'Auditeur certifié IRCA', title: 'ISO 45001 – Santé et sécurité au travail' },
  { kind: 'Auditeur certifié IRCA', title: 'ISO 50001 – Efficacité énergétique' },
];

export const clients = [
  { name: 'Groupe Renault Maroc', logo: 'renault' },
  { name: 'OCP – Jorf Lasfar', logo: 'ocp' },
  { name: 'Lafarge Maroc', logo: 'lafarge' },
  { name: 'OiLibya', logo: 'oilibya' },
  { name: 'Bureau Veritas', logo: 'bureau-veritas' },
  { name: 'Barid Al-Maghrib', logo: 'poste-maroc' },
  { name: 'CNEH', logo: 'cneh' },
  { name: 'SAPST', logo: 'sapst' },
  { name: 'Horizon Terminals', logo: 'horizon-terminals' },
];

export const partners = [
  { name: 'MSA The Safety Company', logo: 'msa', role: 'Lignes de vie, ancrages et antichutes Latchways' },
  { name: 'Honeywell Miller', logo: 'honeywell-miller', role: 'Équipements de protection antichute' },
  { name: 'Kratos Safety', logo: 'kratos', role: 'Antichutes, sauvetage et lignes de vie temporaires' },
  { name: 'Gamesystem', logo: 'gamesystem', role: 'Sécurité des travaux en hauteur' },
  { name: 'Brady', logo: 'brady', role: 'Consignation et signalisation' },
];
