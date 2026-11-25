# cspconsulting.ma

New website for CSP Consulting (Tanger): engineering and QHSE consulting, fall-protection products, RegWatch.
Static site built with [Astro](https://astro.build). It replaces the previous PHP site.

## Commands

```bash
npm install
npm run dev      # local dev server on http://localhost:4321
npm test         # production build + content checks (what CI runs)
```

`npm run check:content -- --strict` also fails on `[à compléter]` placeholders. Run it before launch.

## Where content lives

| What | File |
| --- | --- |
| Company details (address, phone, email, hours, legal info), menu, key figures, accreditations, clients, partners | `src/data/site.ts` |
| The 7 expertise pages | `src/data/expertises.ts` |
| Product catalogue (37 products, specs, images) | `src/data/products.json`, `src/data/catalog.ts`, images in `src/assets/products/` |
| Redirects from old URLs (`.php` pages, `produits.php?categoryId=…`) | `src/data/redirects.json` |
| Page layouts | `src/pages/` |
| Design tokens and base styles | `src/styles/global.css` |

Each fact lives in one place. The header, footer, contact page and legal pages all read the same company details.

## Quality checks

`scripts/check-content.mjs` runs after every build and fails when it finds:

- template leftovers or known typos from the old site (Brooklyn, Mintech, "Infrasructures"…);
- a broken internal link or a missing image;
- an image without an `alt` attribute;
- a page without exactly one `<h1>`, or with a missing or duplicate title/description;
- a page not marked `lang="fr"`.

Placeholders awaiting client input (`[à compléter]`) are listed as warnings.

## Build output

`scripts/postbuild.mjs` writes into `dist/`:

- `.htaccess`: 301 redirects, HTTPS + `www` canonicalisation, security and cache headers (Apache/LiteSpeed hosting);
- `_redirects`: the same redirects for Netlify / Cloudflare Pages;
- `sitemap.xml` and `robots.txt` (indexing is disabled on preview builds).

## Preview for the client

`.github/workflows/preview.yml` publishes `main` to GitHub Pages
(enable it in Settings → Pages → Source: GitHub Actions). Set `SITE_URL` and `BASE_PATH` to build for a sub-folder.

## Client feedback

Client questions are tracked as GitHub issues labelled `client`, written in plain French.
The client can also open an issue with the "Retour sur le site" template.

## Forms

The contact and quote forms post to `site.formEndpoint` (`src/data/site.ts`).
While it's empty, submitting opens the visitor's e-mail app with the message pre-filled.
Before launch, set an endpoint (a form service such as Formspree, or a small script on the host).
