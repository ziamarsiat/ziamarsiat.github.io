// Après la construction du site (npm run build), ce script prépare le dossier
// « dist » pour Google et pour les réseaux sociaux :
//   1. une page HTML par adresse du site (/biographie, /agenda, /spectacle/…),
//      chacune avec son propre titre et sa propre description ;
//   2. un plan du site (sitemap.xml) qui liste toutes les adresses ;
//   3. une page 404.html pour les adresses inconnues.
//
// Les titres et descriptions viennent de src/lib/seo.ts et src/data/univers.ts.
// Il est lancé automatiquement par « npm run build ».
import { createServer } from "vite";
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "fs";
import path from "path";

const dist = path.resolve("dist");
if (!existsSync(path.join(dist, "index.html"))) {
  console.error("Le dossier dist est vide : lancez d'abord « vite build ».");
  process.exit(1);
}

// On charge les fichiers du site via Vite (il sait lire les images et le TypeScript).
const vite = await createServer({ server: { middlewareMode: true }, appType: "custom", logLevel: "error" });
const seo = await vite.ssrLoadModule("/src/lib/seo.ts");
const { univers } = await vite.ssrLoadModule("/src/data/univers.ts");
await vite.close();

const { SITE_URL, IMAGE_PARTAGE, PAGES_FIXES, seoUnivers, seoSpectacle, NOM } = seo;

// ── Liste de toutes les pages ──
const pages = [...PAGES_FIXES];
for (const u of univers) {
  if (!u.visible) continue;
  pages.push(seoUnivers(u));
  for (const s of u.spectacles ?? []) pages.push(seoSpectacle(s));
}

// ── Génération des fichiers HTML ──
const modele = readFileSync(path.join(dist, "index.html"), "utf8");
const echapper = (t) => t.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

function html(page) {
  const titre = page.titre.includes(NOM) ? page.titre : `${page.titre} – ${NOM}`;
  const url = SITE_URL + (page.chemin === "/" ? "/" : page.chemin);
  let h = modele;
  const remplacer = (regex, valeur) => {
    if (!regex.test(h)) throw new Error(`Balise introuvable dans index.html : ${regex}`);
    h = h.replace(regex, valeur);
  };
  remplacer(/<title>[^<]*<\/title>/, `<title>${echapper(titre)}</title>`);
  remplacer(/<meta name="description" content="[^"]*"/, `<meta name="description" content="${echapper(page.description)}"`);
  remplacer(/<meta name="robots" content="[^"]*"/, `<meta name="robots" content="${page.noindex ? "noindex, nofollow" : "index, follow"}"`);
  remplacer(/<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${url}"`);
  remplacer(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${url}"`);
  remplacer(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${echapper(titre)}"`);
  remplacer(/<meta property="og:description" content="[^"]*"/, `<meta property="og:description" content="${echapper(page.description)}"`);
  remplacer(/<meta name="twitter:title" content="[^"]*"/, `<meta name="twitter:title" content="${echapper(titre)}"`);
  remplacer(/<meta name="twitter:description" content="[^"]*"/, `<meta name="twitter:description" content="${echapper(page.description)}"`);
  return h;
}

// Chaque adresse devient un fichier « adresse.html » (ex. /biographie -> biographie.html) :
// GitHub Pages le sert directement, sans redirection.
for (const page of pages) {
  const fichier = page.chemin === "/" ? path.join(dist, "index.html") : path.join(dist, page.chemin + ".html");
  mkdirSync(path.dirname(fichier), { recursive: true });
  writeFileSync(fichier, html(page));
}

// Page pour les adresses inconnues (GitHub Pages l'affiche automatiquement).
writeFileSync(
  path.join(dist, "404.html"),
  html({ chemin: "/404", titre: "Page introuvable", description: "Cette page n'existe pas.", noindex: true })
);

// ── Plan du site ──
const aujourdhui = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .filter((p) => !p.noindex)
  .map((p) => {
    const url = SITE_URL + (p.chemin === "/" ? "/" : p.chemin);
    const priorite = p.chemin === "/" ? "1.0" : p.chemin.startsWith("/agenda") ? "0.6" : "0.8";
    return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${aujourdhui}</lastmod>\n    <priority>${priorite}</priority>\n  </url>`;
  })
  .join("\n")}
</urlset>
`.replace('xmlns="http://www.w3.org/1999/xhtml" xmlns:xhtml="http://www.w3.org/1999/xhtml"', 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
writeFileSync(path.join(dist, "sitemap.xml"), sitemap);

console.log(`SEO : ${pages.length} pages générées + sitemap.xml (${SITE_URL}, image de partage : ${IMAGE_PARTAGE})`);
