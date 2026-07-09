import fleurRecitsMusique from "@/assets/fleur-recits-musique.jpg";
import fleurSciences from "@/assets/fleur-sciences.jpg";
import fleurArtPlastique from "@/assets/fleur-art-plastique.jpg";
import cabaneMagique from "@/assets/cabane-magique.png";
import toursDeContes from "@/assets/tours-de-contes.png";
import histoiresVoyage from "@/assets/histoires-voyage-ete.png";
import toutSeTransforme from "@/assets/tout-se-transforme.png";
import rideauRouge from "@/assets/rideau-rouge.png";
import grenouilleMare from "@/assets/grenouille-mare.png";
import plasticienneBanner from "@/assets/plasticienne-banner.png";
import nature1 from "@/assets/nature-1.jpg";
import nature2 from "@/assets/nature-2.jpg";
import nature3 from "@/assets/nature-3.jpg";
import cabane1 from "@/assets/cabane-1.jpg";
import cabane2 from "@/assets/cabane-2.jpg";
import cabane3 from "@/assets/cabane-3.jpg";

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
    // Page à fond noir avec une bannière (rideau rouge) en haut.
    dark: true,
    banner: rideauRouge,
    bannerPosition: "center 42%",
    items: [],
    // Les spectacles affichés en cadres. Ajoutez « image » plus tard pour une photo.
    spectacles: [
      {
        titre: "Tours de contes",
        public: "Tout public",
        image: toursDeContes,
        slug: "tours-de-contes",
        description: [
          "Vous avez faim d'histoires ? Vous en voulez à vous mettre sous la dent ? En voici, pétries avec amour, cuites dans le four de ma caboche. Elles font la part belle aux courageux·ses, aux ruses, à l'aventure.",
          "Embarquez sur la route de l'imaginaire, destination le pays de Tous-les-Possibles, dans la contrée des sincères carabistouilles. Mensonge ou vérité ? Vous seul pourriez en décider.",
        ],
        photos: [],
      },
      {
        titre: "Histoires d'un voyage d'été",
        public: "18 mois +",
        image: histoiresVoyage,
        slug: "histoires-d-un-voyage-d-ete",
        description: [
          "Aujourd'hui, c'est décidé : Pixie part en voyage ! Bottes aux pieds et sac au dos, elle embarque dans le premier train pour la mer. Avec elle, plongez au cœur des flots et découvrez une ribambelle de personnages tendres et farfelu·es : un violoncelle marin, des vagues chantantes, un soleil superstar, une sirène à bulles et un monstre sympathique.",
          "Ce spectacle fait la part belle au bonheur de créer des mondes et à la fantaisie de l'imaginaire. Une grande traversée pour les petit·es et les grand·es nageur·euses, à savourer en famille.",
        ],
        photos: [],
      },
      {
        titre: "Tout se transforme",
        public: "En création",
        image: toutSeTransforme,
        slug: "tout-se-transforme",
        description: [
          "Spectacle en création.",
          "Trois histoires, trois générations, et à chacune, la matière et les êtres se transforment. Au rythme des plantes qui poussent et des mains qui sculptent, les histoires se racontent.",
          "Appelée par ma fascination pour ces histoires, j'explore leurs résonances et les remets à leur juste place : dans la vie, la mémoire vivante et collective.",
        ],
        photos: [],
      },
      {
        titre: "Cabane magique",
        public: "Espace nomade",
        image: cabaneMagique,
        slug: "cabane-magique",
        description: [
          "Les cordes se tendent, les toiles se hissent, suspendue dans les airs, la cabane magique crée un cocon. Le secret de cette construction ? Sa légèreté. Les toiles s'accrochent là où on ne les attend pas.",
          "Qui n'a jamais tendu de couverture ou empilé des coussins pour se créer un lieu à soi ? La cabane, c'est exactement ça : un espace cousu main à la mesure de mes rêves et de mon envie de rassembler.",
          "La cabane se déploie dans vos événements pour créer un lieu magique.",
        ],
        photos: [cabane1, cabane2, cabane3],
      },
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
    dark: true,
    banner: grenouilleMare,
    bannerPosition: "center 50%",
    items: [],
    spectacles: [],
    gallery: [nature1, nature2, nature3],
  },
  {
    id: "plasticienne",
    title: "Plasticienne",
    image: fleurArtPlastique,
    alt: "Pivoine rose",
    position: "center",
    text: "Nos yeux voient, nos corps sentent et entendent. Je crée avec mes sens pour partager des sensations.",
    dark: true,
    banner: plasticienneBanner,
    bannerPosition: "center top",
    items: [],
    spectacles: [],
    gallery: [],
  },
];
