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
  { left: 12, size: 26, sway: 16, duration: 15, delay: 0 },
  { left: 26, size: 40, sway: 22, duration: 19, delay: 3.5 },
  { left: 44, size: 18, sway: 12, duration: 13, delay: 1.5 },
  { left: 58, size: 34, sway: 20, duration: 18, delay: 6 },
  { left: 72, size: 22, sway: 14, duration: 14, delay: 2.5 },
  { left: 86, size: 30, sway: 18, duration: 17, delay: 5 },
  { left: 34, size: 14, sway: 10, duration: 12, delay: 8 },
  { left: 66, size: 46, sway: 24, duration: 21, delay: 9.5 },
  { left: 50, size: 20, sway: 13, duration: 15, delay: 11 },
  { left: 18, size: 32, sway: 19, duration: 18, delay: 7 },
  { left: 80, size: 16, sway: 11, duration: 13, delay: 12.5 },
];

// L'aspect « savon » : reflets blancs, légers reflets bleutés et rosés.
const fondBulle =
  "radial-gradient(circle at 32% 28%, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.12) 22%, transparent 46%)," +
  "radial-gradient(circle at 70% 74%, rgba(180,220,255,0.35) 0%, transparent 55%)," +
  "radial-gradient(circle at 50% 50%, rgba(255,205,235,0.18) 0%, rgba(200,240,255,0.12) 55%, transparent 76%)";

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
            opacity: [0, 0.85, 0.85, 0],
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
