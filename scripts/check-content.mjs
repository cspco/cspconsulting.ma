// Quality gate run after every build (npm test, and in CI).
// Fails on: template leftovers, broken internal links/images, missing alt text,
// pages without exactly one <h1>, duplicate or missing titles/descriptions, wrong lang.
// Reports (without failing) placeholders still waiting for client input: "[à compléter]".
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const base = (process.env.BASE_PATH ?? '/').replace(/\/$/, '');
const strict = process.argv.includes('--strict'); // use before launch: placeholders become errors

// Words that must never appear on the site (template leftovers and known typos from the old site).
const BANNED = [
  'Brooklyn', 'Beverley', 'Mintech', '7oroof', 'wgency', 'lorem ipsum', 'IT business', 'It services',
  'support@cspconsulting.com', 'Infrasructures', 'Demmander', 'REGELEMNTAIRES', 'Assitance', 'qui somme nous',
  'EVIRONNEMENT', 'cspconulting', 'comformément', 'horisontaux', 'desente', 'assujetis', 'optionel', 'protectio ',
  'cértification', 'réferentiel', 'concérné', 'Play Video',
];
const PLACEHOLDER = '[à compléter]';

const files = [];
(function walk(dir) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('.html')) files.push(p);
  }
})(DIST);

const errors = [];
const warnings = [];
const titles = new Map();
const descriptions = new Map();

const resolve = (href) => {
  let path = href.split('#')[0].split('?')[0];
  if (!path) return true;
  if (base && path.startsWith(base)) path = path.slice(base.length) || '/';
  const candidates = [join(DIST, path), join(DIST, path, 'index.html'), join(DIST, `${path}.html`)];
  return candidates.some((c) => existsSync(c) && (statSync(c).isFile() || existsSync(join(c, 'index.html'))));
};

for (const file of files) {
  const page = file.slice(DIST.length).replace(/index\.html$/, '') || '/';
  const html = readFileSync(file, 'utf8');
  const text = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  const err = (m) => errors.push(`${page}: ${m}`);

  if (!/<html lang="fr"/.test(html)) err('missing lang="fr"');
  const h1 = (text.match(/<h1[\s>]/g) || []).length;
  if (h1 !== 1) err(`expected exactly one <h1>, found ${h1}`);

  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  if (!title) err('missing <title>');
  if (!desc) err('missing meta description');
  if (!page.startsWith('/404')) {
    if (title) titles.set(title, [...(titles.get(title) ?? []), page]);
    if (desc) descriptions.set(desc, [...(descriptions.get(desc) ?? []), page]);
  }

  for (const word of BANNED) if (text.toLowerCase().includes(word.toLowerCase())) err(`banned text "${word}"`);
  if (text.includes(PLACEHOLDER)) (strict ? errors : warnings).push(`${page}: placeholder "${PLACEHOLDER}" still present`);

  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\salt(="|[\s>/])/.test(m[0])) err(`image without alt attribute: ${m[0].slice(0, 80)}`);
    const src = m[0].match(/\ssrc="([^"]+)"/)?.[1];
    if (src && src.startsWith('/') && !resolve(src)) err(`missing image ${src}`);
  }
  for (const m of html.matchAll(/<a\b[^>]*\shref="([^"]+)"/g)) {
    const href = m[1];
    if (href.startsWith('/') && !href.startsWith('//') && !resolve(href)) err(`broken link ${href}`);
  }
}

for (const [t, pages] of titles) if (pages.length > 1) errors.push(`duplicate <title> "${t}" on ${pages.join(', ')}`);
for (const [d, pages] of descriptions) if (pages.length > 1) errors.push(`duplicate description on ${pages.join(', ')}`);

console.log(`Checked ${files.length} pages.`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s) – content awaiting client input:`);
  for (const w of warnings) console.log(`  ⚠ ${w}`);
}
if (errors.length) {
  console.error(`\n${errors.length} error(s):`);
  for (const e of errors) console.error(`  ✗ ${e}`);
  process.exit(1);
}
console.log('\nAll content checks passed.');
