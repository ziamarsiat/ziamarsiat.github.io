import { useState, type ReactNode } from "react";
import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
//  CONFETTIS AU SURVOL
//  Entoure un élément : quand la souris arrive dessus, une salve
//  de confettis ronds et colorés jaillit vers le haut, accompagnée
//  de paillettes scintillantes, puis tout retombe et s'efface.
//  - nombre : combien de confettis par salve
// ─────────────────────────────────────────────────────────────

// Couleurs vives des confettis ronds
const couleurs = ["#ff2d55", "#ff8a00", "#ffd600", "#2ee36b", "#00c8ff", "#b23cff", "#ff3cc7", "#ffffff"];
// Couleurs des paillettes (petits éclats scintillants)
const couleursPaillettes = ["#fff6b0", "#ffffff", "#ffe066"];

type Confetti = {
  id: number;
  dx: number; // déplacement horizontal final (px)
  hauteur: number; // hauteur du jet (px)
  chute: number; // distance de chute après le sommet (px)
  rotation: number; // rotation totale (degrés)
  couleur: string;
  taille: number; // diamètre (px)
  paillette: boolean; // petit éclat scintillant au lieu d'un confetti
  duree: number; // durée de vie (s)
  delai: number; // léger décalage de départ (s)
};

const alea = (min: number, max: number) => min + Math.random() * (max - min);
const auHasard = <T,>(liste: T[]) => liste[Math.floor(Math.random() * liste.length)];

const nouvelleSalve = (nombre: number, depart: number): Confetti[] =>
  Array.from({ length: nombre }, (_, i) => {
    const paillette = Math.random() < 0.35;
    return {
      id: depart + i,
      dx: alea(-460, 460),
      hauteur: alea(120, 340),
      chute: alea(260, 480),
      rotation: alea(-720, 720),
      paillette,
      couleur: paillette ? auHasard(couleursPaillettes) : auHasard(couleurs),
      taille: paillette ? alea(3, 6) : alea(9, 15),
      duree: alea(1.6, 2.4),
      delai: alea(0, 0.12),
    };
  });

type Props = {
  children: ReactNode;
  nombre?: number;
  className?: string;
};

const ConfettisAuSurvol = ({ children, nombre = 70, className = "" }: Props) => {
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
            className="absolute block rounded-full"
            style={{
              width: c.taille,
              height: c.taille,
              // Confetti rond avec un reflet, ou paillette lumineuse
              background: c.paillette
                ? c.couleur
                : `radial-gradient(circle at 32% 30%, rgba(255,255,255,0.95) 0%, ${c.couleur} 45%, ${c.couleur} 100%)`,
              boxShadow: c.paillette
                ? `0 0 6px 2px ${c.couleur}, 0 0 12px 4px rgba(255,230,120,0.6)`
                : "0 0 4px rgba(0,0,0,0.25)",
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
          >
            {/* Scintillement des paillettes : la lumière pulse pendant le vol */}
            {c.paillette && (
              <motion.span
                className="absolute inset-0 rounded-full bg-white"
                animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.6, 0.8] }}
                transition={{ duration: 0.35, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </motion.span>
        ))}
      </span>
    </span>
  );
};

export default ConfettisAuSurvol;
