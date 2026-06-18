// Script de capture d'écran du site.
// Usage : node scripts/screenshot.mjs [chemin] [nom]
//   node scripts/screenshot.mjs /                -> capture la page d'accueil
//   node scripts/screenshot.mjs /art-plastique  -> capture une autre page
// Les images sont enregistrées dans le dossier .screenshots/
import { chromium } from "playwright";
import { mkdirSync } from "fs";
import path from "path";

const route = process.argv[2] || "/";
const name = process.argv[3] || route.replace(/[^a-z0-9]/gi, "_").replace(/^_+|_+$/g, "") || "accueil";
const baseURL = "http://localhost:8080";
const outDir = path.resolve("screenshots");

mkdirSync(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

await page.goto(baseURL + route, { waitUntil: "networkidle" });
await page.waitForTimeout(800); // laisser les animations/images se charger

const file = path.join(outDir, `${name}.png`);
await page.screenshot({ path: file, fullPage: true });

await browser.close();
console.log(`Capture enregistree : ${file}`);
