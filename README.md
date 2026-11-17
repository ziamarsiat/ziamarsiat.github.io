# Site de Zia Marsiat

Site vitrine de Zia Marsiat, actrice-conteuse, musicienne et plasticienne à Liège.

- Adresse en ligne : https://ziamarsiat.cjemine.xyz/ (hébergé par Corentin, mis à jour automatiquement depuis GitHub)
- Adresse de secours : https://ziamarsiat.github.io/ (renvoie vers l'adresse principale)
- Voir le site sur l'ordinateur : `npm run dev` puis ouvrir http://localhost:8080/
- Publier : chaque envoi sur GitHub (branche `main`) met le site en ligne automatiquement.

## Référencement (Google)

- Les titres et descriptions des pages sont dans `src/lib/seo.ts`.
- À la construction (`npm run build`), le script `scripts/seo-pages.mjs` crée une page HTML
  par adresse et le plan du site `sitemap.xml`.
- L'image affichée quand on partage un lien est `public/partage.jpg`.
