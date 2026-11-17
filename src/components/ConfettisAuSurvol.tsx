import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
//  CONFETTIS AU SURVOL
//  Entoure un élément : quand la souris arrive dessus, une salve
//  de confettis colorés jaillit vers le haut, puis retombe en
//  tournoyant avant de s'effacer.
//  - nombre   : combien de confettis par salve
//  - couleurs : les couleurs possibles
// ─────────────────────────────────────────────────────────────
const couleurs = ["#f3cf6a", "#ffd166", "#e8656f", "#6fc3df", "#a7d96c", "#ff9ecb", "#ffffff", "#b78bff"];

type Confetti = {
  id: number;
  dx: number; // déplacement horizontal final (px)
  hauteur: number; // hauteur du jet (px)
  chute: number; // distance de chute après le sommet (px)
  rotation: number; // rotation totale (degrés)
  couleur: string;
  largeur: number;
  hauteurPiece: number;
  rond: boolean;
  duree: number; // durée de vie (s)
  delai: number; // léger décalage de départ (s)
};

const alea = (min: number, max: number) => min + Math.random() * (max - min);

const nouvelleSalve = (nombre: number, depart: number): Confetti[] =>
  Array.from({ length: nombre }, (_, i) => ({
    id: depart + i,
    dx: alea(-460, 460),
    hauteur: alea(120, 340),
    chute: alea(260, 480),
    rotation: alea(-720, 720),
    couleur: couleurs[Math.floor(Math.random() * couleurs.length)],
    largeur: alea(7, 13),
    hauteurPiece: alea(12, 22),
    rond: Math.random() < 0.25,
    duree: alea(1.6, 2.4),
    delai: alea(0, 0.12),
  }));

type Props = {
  children: ReactNode;
  nombre?: number;
  className?: string;
};

const ConfettisAuSurvol = ({ children, nombre = 60, className = "" }: Props) => {
  const [confettis, setConfettis] = useState<Confetti[]>([]);

  const lancer = () => {
    const salve = nouvelleSalve(nombre, Date.now());
    setConfettis((anciens) => [...anciens, ...salve]);
    // On retire la salve une fois les confettis retombés
    const ids = new Set(salve.map((c) => c.id));
    setTimeout(() => setConfettis((anciens) => anciens.filter((c) => !ids.has(c.id))), 2700);
  };

  return (
    <span className={`relative inline-block ${className}`} onMouseEnter={lancer}>
      {children}

      {/* Les confettis partent du centre de l'élément */}
      <span className="pointer-events-none absolute left-1/2 top-1/2 z-20" aria-hidden="true">
        {confettis.map((c) => (
          <motion.span
            key={c.id}
            className="absolute block"
            style={{
              width: c.largeur,
              height: c.rond ? c.largeur : c.hauteurPiece,
              backgroundColor: c.couleur,
              borderRadius: c.rond ? "9999px" : "2px",
              boxShadow: "0 0 4px rgba(0,0,0,0.25)",
            }}
            initial={{ x: 0, y: 0, opacity: 1, rotate: 0, scale: 0.6 }}
            animate={{
              x: [0, c.dx * 0.65, c.dx],
              y: [0, -c.hauteur, -c.hauteur + c.chute],
              rotate: [0, c.rotation * 0.5, c.rotation],
              opacity: [1, 1, 0],
              scale: [0.6, 1, 1],
            }}
            transition={{
              duration: c.duree,
              delay: c.delai,
              times: [0, 0.4, 1],
              ease: ["easeOut", "easeIn"],
            }}
          />
        ))}
      </span>
    </span>
  );
};

export default ConfettisAuSurvol;
