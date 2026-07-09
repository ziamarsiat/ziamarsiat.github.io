import { motion } from "framer-motion";

// ─────────────────────────────────────────────────────────────
//  BULLES DE SAVON
//  De petites bulles translucides et irisées montent depuis le bas
//  (section Plasticienne) et s'estompent en arrivant en haut
//  (section Actrice-conteuse).
//  Chaque bulle : left = position horizontale (%), size = taille (px),
//  sway = amplitude du balancement, duration = durée de la montée (s),
//  delay = décalage de départ (s).
// ─────────────────────────────────────────────────────────────
const bulles = [
  { left: 12, size: 42, sway: 16, duration: 15, delay: 0 },
  { left: 26, size: 64, sway: 22, duration: 19, delay: 3.5 },
  { left: 44, size: 30, sway: 12, duration: 13, delay: 1.5 },
  { left: 58, size: 54, sway: 20, duration: 18, delay: 6 },
  { left: 72, size: 36, sway: 14, duration: 14, delay: 2.5 },
  { left: 86, size: 48, sway: 18, duration: 17, delay: 5 },
  { left: 34, size: 24, sway: 10, duration: 12, delay: 8 },
  { left: 66, size: 72, sway: 24, duration: 21, delay: 9.5 },
  { left: 50, size: 34, sway: 13, duration: 15, delay: 11 },
  { left: 18, size: 50, sway: 19, duration: 18, delay: 7 },
  { left: 80, size: 28, sway: 11, duration: 13, delay: 12.5 },
];

// L'aspect « savon » irisé : reflet blanc, anneau arc-en-ciel sur le bord,
// et reflets colorés (vert, bleu, violet, rose, jaune) à l'intérieur.
const fondBulle =
  // Point de lumière vif en haut à gauche
  "radial-gradient(circle at 32% 26%, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.2) 14%, transparent 30%)," +
  // Large bande arc-en-ciel (vert → bleu → violet → rose → jaune)
  "radial-gradient(circle at 50% 50%, transparent 38%, rgba(120,255,205,0.45) 54%, rgba(90,190,255,0.55) 66%, rgba(190,110,255,0.65) 78%, rgba(255,110,200,0.6) 88%, rgba(255,225,120,0.55) 96%, rgba(255,255,255,0.4) 100%)," +
  // Reflets irisés diffus à l'intérieur
  "radial-gradient(circle at 70% 72%, rgba(160,100,255,0.45) 0%, transparent 50%)," +
  "radial-gradient(circle at 26% 74%, rgba(100,255,215,0.38) 0%, transparent 46%)," +
  "radial-gradient(circle at 76% 32%, rgba(255,150,210,0.35) 0%, transparent 48%)";

const BullesSavon = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[6] overflow-hidden">
      {bulles.map((b, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ left: `${b.left}%` }}
          initial={{ top: "100%", opacity: 0 }}
          animate={{
            // top est relatif à la hauteur du bloc : la bulle traverse tout
            top: ["100%", "87%", "20%", "-6%"],
            x: [0, b.sway, -b.sway * 0.7, 0],
            opacity: [0, 0.95, 0.95, 0],
          }}
          transition={{
            duration: b.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
            times: [0, 0.12, 0.75, 1],
          }}
        >
          {/* Léger tremblement de la bulle pendant la montée */}
          <motion.div
            className="rounded-full"
            style={{
              width: b.size,
              height: b.size,
              background: fondBulle,
              border: "1px solid rgba(255,255,255,0.45)",
              boxShadow: "inset 0 0 12px rgba(255,255,255,0.25), 0 0 6px rgba(255,255,255,0.15)",
            }}
            animate={{ scale: [1, 1.06, 0.96, 1.03, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BullesSavon;
