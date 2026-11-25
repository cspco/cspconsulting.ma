// @ts-check
import { defineConfig } from 'astro/config';

// SITE_URL / BASE_PATH let the same build run on the production domain
// and on a preview host served from a sub-folder (e.g. GitHub Pages).
const site = process.env.SITE_URL ?? 'https://www.cspconsulting.ma';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  image: { layout: 'constrained' },
});
