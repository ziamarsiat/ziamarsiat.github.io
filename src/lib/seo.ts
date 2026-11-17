import { useEffect } from "react";

// ─────────────────────────────────────────────────────────────
//  RÉFÉRENCEMENT (SEO)
//  Ce fichier décrit le site pour Google et pour les aperçus
//  de partage (WhatsApp, Facebook…). Il sert à deux endroits :
//  - dans le site lui-même (titre de l'onglet et description
//    mis à jour quand on change de page) ;
//  - dans le script scripts/seo-pages.mjs, qui génère une page
//    HTML par adresse au moment de la construction du site.
// ─────────────────────────────────────────────────────────────

/** Adresse publique du site (sans « / » à la fin). À changer si un nom de domaine est acheté. */
export const SITE_URL = "https://ziamarsiat.cjemine.xyz";

export const NOM = "Zia Marsiat";

/** Titre et description de la page d'accueil (les plus importants pour Google). */
export const ACCUEIL = {
  titre: "Zia Marsiat – Conteuse et musicienne à Liège | Spectacles de contes et musique",
  description:
    "Zia Marsiat, actrice-conteuse, musicienne (violoncelle, chant) et plasticienne à Liège. Spectacles de contes et musique pour enfants et tout public, balades contées et ateliers nature en Belgique.",
};

/** Image affichée quand on partage un lien du site (1200 × 630). */
export const IMAGE_PARTAGE = `${SITE_URL}/partage.jpg`;

export type InfosPage = {
  titre: string;
  description: string;
  /** Chemin de la page, ex. "/biographie". */
  chemin: string;
  /** true = demander à Google de ne pas lister la page (ex. page 404). */
  noindex?: boolean;
};

/** Pages fixes du site. Les pages des univers et des spectacles sont ajoutées automatiquement. */
export const PAGES_FIXES: InfosPage[] = [
  { chemin: "/", ...ACCUEIL },
  {
    chemin: "/biographie",
    titre: "Biographie – Zia Marsiat, conteuse, musicienne et plasticienne à Liège",
    description:
      "Parcours de Zia Marsiat : arts plastiques (Saint-Luc Liège, La Cambre), violoncelle et chant, conte et interprétation nature. Une artiste liégeoise entre récit, musique et émerveillement.",
  },
  {
    chemin: "/agenda",
    titre: "Agenda – Prochains spectacles de contes et musique de Zia Marsiat",
    description:
      "Les prochaines dates de Zia Marsiat : spectacles de contes et musique, balades contées et ateliers à Liège et en Belgique.",
  },
  {
    chemin: "/agenda/passees",
    titre: "Dates passées – Zia Marsiat, conteuse à Liège",
    description: "Les spectacles, balades contées et ateliers déjà joués par Zia Marsiat, conteuse et musicienne à Liège.",
  },
  {
    chemin: "/contact",
    titre: "Contact – Zia Marsiat, conteuse et musicienne à Liège",
    description:
      "Contacter Zia Marsiat pour un spectacle de contes et musique, une balade contée ou un atelier : e-mail, téléphone, WhatsApp. Basée à Liège (Belgique).",
  },
  {
    chemin: "/lettre-information",
    titre: "Lettre d'information – Zia Marsiat",
    description: "Recevoir les nouvelles et les prochaines dates de Zia Marsiat, conteuse et musicienne à Liège.",
  },
];

/** Titre/description d'une page « univers » (ex. Spectacles). */
export function seoUnivers(u?: { id: string; title: string; text: string } | null): InfosPage {
  if (!u) return { chemin: "/univers", titre: "Univers introuvable", description: "Cet univers n'existe pas.", noindex: true };
  const titres: Record<string, string> = {
    "actrice-conteuse": "Spectacles de contes et musique – Zia Marsiat, conteuse à Liège",
    "interprete-nature": "Interprète nature – Balades contées et ateliers nature à Liège – Zia Marsiat",
    plasticienne: "Plasticienne – Zia Marsiat, artiste à Liège",
  };
  return { chemin: `/univers/${u.id}`, titre: titres[u.id] ?? u.title, description: u.text };
}

/** Titre/description d'une page « spectacle ». */
export function seoSpectacle(s?: { slug: string; titre: string; public: string; description: string[] } | null): InfosPage {
  if (!s) return { chemin: "/spectacle", titre: "Spectacle introuvable", description: "Ce spectacle n'existe pas.", noindex: true };
  const resume = (s.description[0] ?? "").slice(0, 150).replace(/\s+\S*$/, "");
  return {
    chemin: `/spectacle/${s.slug}`,
    titre: `${s.titre} – Spectacle de contes et musique (${s.public}) – Zia Marsiat`,
    description: `${s.titre}, spectacle de contes et musique de Zia Marsiat, conteuse et musicienne à Liège. ${resume}…`,
  };
}

function titreComplet(titre: string) {
  return titre.includes(NOM) ? titre : `${titre} – ${NOM}`;
}

function majBalise(selecteur: string, attribut: string, valeur: string, creer: () => HTMLElement) {
  let el = document.head.querySelector<HTMLElement>(selecteur);
  if (!el) {
    el = creer();
    document.head.appendChild(el);
  }
  el.setAttribute(attribut, valeur);
}

/**
 * À appeler en haut de chaque page : met à jour le titre de l'onglet,
 * la description et l'adresse « officielle » (canonique) de la page.
 */
export function usePageSeo(infos: { titre: string; description: string; noindex?: boolean }) {
  const { titre, description, noindex } = infos;
  useEffect(() => {
    const t = titreComplet(titre);
    const url = SITE_URL + window.location.pathname.replace(/\/$/, "") || SITE_URL;
    document.title = t;
    const meta = (name: string) => () => Object.assign(document.createElement("meta"), { name });
    const prop = (property: string) => () => {
      const m = document.createElement("meta");
      m.setAttribute("property", property);
      return m;
    };
    majBalise('meta[name="description"]', "content", description, meta("description"));
    majBalise('meta[property="og:title"]', "content", t, prop("og:title"));
    majBalise('meta[property="og:description"]', "content", description, prop("og:description"));
    majBalise('meta[property="og:url"]', "content", url, prop("og:url"));
    majBalise('link[rel="canonical"]', "href", url, () => Object.assign(document.createElement("link"), { rel: "canonical" }));
    majBalise('meta[name="robots"]', "content", noindex ? "noindex, nofollow" : "index, follow", meta("robots"));
  }, [titre, description, noindex]);
}
