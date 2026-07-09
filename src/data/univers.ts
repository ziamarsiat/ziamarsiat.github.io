import fleurRecitsMusique from "@/assets/fleur-recits-musique.jpg";
import fleurSciences from "@/assets/fleur-sciences.jpg";
import fleurArtPlastique from "@/assets/fleur-art-plastique.jpg";
import sciences1 from "@/assets/sciences-1.jpg";
import sciences2 from "@/assets/sciences-2.jpg";
import sciences3 from "@/assets/sciences-3.jpg";

// ─────────────────────────────────────────────────────────────
//  LES TROIS UNIVERS
//  Ces informations servent à la fois pour les grandes photos de
//  la page d'accueil ET pour la page de détail de chaque univers.
//  - title    : le titre affiché
//  - image    : la grande photo
//  - position : cadrage de la photo (ex. "center 25%")
//  - text     : le texte de présentation
//  - items    : liste à puces (ex. les spectacles) — [] si vide
//  - gallery  : photos supplémentaires sur la page de détail — [] si vide
// ─────────────────────────────────────────────────────────────
export const univers = [
  {
    id: "actrice-conteuse",
    title: "Actrice-conteuse",
    image: fleurRecitsMusique,
    alt: "Pivoine rouge",
    position: "center",
    text: "Raconter, c'est créer un petit bout de rêve à partager. Les histoires prennent vie par le chant et le violoncelle.",
    items: [],
    // Les spectacles affichés en cadres. Ajoutez « image » plus tard pour une photo.
    spectacles: [
      { titre: "Tours de contes", public: "Tout public", image: "" },
      { titre: "Histoires d'un jardin d'été", public: "6 mois +", image: "" },
      { titre: "Tout se transforme", public: "6 ans +", image: "" },
      { titre: "Cabane magique", public: "Espace nomade", image: "" },
    ],
    gallery: [],
  },
  {
    id: "interprete-nature",
    title: "Interprète Nature",
    image: fleurSciences,
    alt: "Fleur corail",
    position: "center",
    text: "Pourquoi les choses sont-elles comme elles sont ? Entre savoir et magie, il y a l'émerveillement. À la découverte des vivants qui nous entourent : des ateliers pour tous les âges, basés sur une pédagogie de l'expérimentation.",
    items: [],
    spectacles: [],
    gallery: [sciences1, sciences2, sciences3],
  },
  {
    id: "plasticienne",
    title: "Plasticienne",
    image: fleurArtPlastique,
    alt: "Pivoine rose",
    position: "center",
    text: "Nos yeux voient, nos corps sentent et entendent. Je crée avec mes sens pour partager des sensations.",
    items: [],
    spectacles: [],
    gallery: [],
  },
];
