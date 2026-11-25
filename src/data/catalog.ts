import products from './products.json';

export interface Spec { label: string | null; value: string }
export interface Product {
  slug: string; name: string; category: string; subcategory: string; brand: string;
  description: string; specs: Spec[]; image: string; legacyId: number;
}

export const categories = [
  {
    slug: 'dispositifs-ancrage',
    title: 'Dispositifs d’ancrage',
    summary: 'Lignes de vie horizontales et verticales, ancrages autoportants et ancrages transportables pour les travaux en hauteur et les espaces confinés.',
  },
  {
    slug: 'protection-individuelle',
    title: 'Protection individuelle',
    summary: 'Antichutes à rappel automatique, dispositifs de sauvetage et d’évacuation.',
  },
  {
    slug: 'protection-collective',
    title: 'Protection collective',
    summary: 'Filets de sécurité et passerelles de toiture pour protéger les équipes sans équipement individuel.',
  },
] as const;

export const brands: Record<string, string> = {
  msa: 'MSA The Safety Company',
  kratos: 'Kratos Safety',
  csp: 'CSP Consulting',
};

export const allProducts = products as Product[];
export const productsIn = (category: string) => allProducts.filter((p) => p.category === category);
export const subcategoriesIn = (category: string) => [...new Set(productsIn(category).map((p) => p.subcategory))];
export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
