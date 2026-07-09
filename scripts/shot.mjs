import { chromium } from "playwright";
import { mkdirSync } from "fs";
import path from "path";
const outDir = path.resolve("screenshots");
mkdirSync(outDir, { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

// Accueil (feu follet)
await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(1200);
await page.screenshot({ path: path.join(outDir, "feu-follet.png") });

// Sous-page avec Navbar
await page.goto("http://localhost:8080/univers/actrice-conteuse", { waitUntil: "networkidle" });
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(outDir, "souspage-navbar.png") });

// Sous-page menu ouvert
await page.click('button[aria-label="Ouvrir le menu"]');
await page.waitForTimeout(800);
await page.screenshot({ path: path.join(outDir, "souspage-menu.png") });

await browser.close();
console.log("ok");
