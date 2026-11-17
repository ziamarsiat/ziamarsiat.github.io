import { motion } from "framer-motion";
import flecheEnseigne from "@/assets/fleche-enseigne.webp";

// ─────────────────────────────────────────────────────────────
//  FLÈCHE LUMINEUSE
//  L'image de la flèche-enseigne (détourée, fond transparent),
//  tournée pour pointer vers le bas. Elle oscille doucement et,
//  au clic, fait défiler la page vers la cible indiquée.
// ─────────────────────────────────────────────────────────────
type Props = {
  cible?: string; // identifiant de l'élément vers lequel défiler
  className?: string;
};

const FlecheLumineuse = ({ cible, className = "" }: Props) => {
  const aller = () => {
    if (!cible) return;
    document.getElementById(cible)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={aller}
      aria-label="Voir la suite"
      // La boîte a les proportions de la flèche une fois tournée (haute et étroite)
      className={`block cursor-pointer aspect-[361/694] ${className}`}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* L'image pointe vers la droite : on la tourne d'un quart de tour pour qu'elle pointe vers le bas.
          Sa largeur vaut la hauteur de la boîte (694/361 ≈ 192 % de la largeur). */}
      <img
        src={flecheEnseigne}
        alt=""
        className="absolute left-1/2 top-1/2 w-[192%] max-w-none h-auto -translate-x-1/2 -translate-y-1/2 rotate-90 drop-shadow-[0_6px_16px_rgba(0,0,0,0.7)]"
        draggable={false}
      />
    </motion.button>
  );
};

export default FlecheLumineuse;
