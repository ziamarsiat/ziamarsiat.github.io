// Fabrique l'image de partage (public/partage.jpg, 1200 × 630) à partir de la page d'accueil.
// Usage : lancer « npm run dev » dans un autre terminal, puis : node scripts/image-partage.mjs
import { chromium } from "playwright";
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });
await page.waitForTimeout(2500);
// On masque la barre de navigation et le feu follet pour une image propre
await page.addStyleTag({ content: "nav, header { display: none !important; }" });
await page.waitForTimeout(300);
await page.screenshot({ path: "C:/Users/Zia/Documents/site-zia/public/partage.jpg", type: "jpeg", quality: 85, clip: { x: 0, y: 0, width: 1200, height: 630 } });
console.log("accueil :", await page.title());
for (const r of ["/biographie", "/spectacle/tours-de-contes", "/univers/actrice-conteuse", "/page-inconnue"]) {
  await page.goto("http://localhost:8080" + r, { waitUntil: "networkidle" });
  await page.waitForTimeout(500);
  const infos = await page.evaluate(() => ({
    titre: document.title,
    desc: document.querySelector('meta[name="description"]')?.content.slice(0, 70),
    canon: document.querySelector('link[rel="canonical"]')?.href,
    robots: document.querySelector('meta[name="robots"]')?.content,
  }));
  console.log(r, JSON.stringify(infos));
}
await browser.close();
