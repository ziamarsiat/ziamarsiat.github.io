import { motion } from "framer-motion";

// Petites étincelles satellites qui scintillent autour du cœur lumineux.
const sparkles = [
  { x: -24, y: -16, size: 4, duration: 1.6, delay: 0 },
  { x: 22, y: -20, size: 3, duration: 2.1, delay: 0.5 },
  { x: 28, y: 14, size: 5, duration: 1.4, delay: 1.0 },
  { x: -20, y: 22, size: 3, duration: 1.9, delay: 0.7 },
  { x: 6, y: -28, size: 4, duration: 1.7, delay: 1.3 },
];

// Une lumière scintillante qui flotte comme un feu follet, avec des
// intensités variables pour un effet magique.
const FeuFollet = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-[5] overflow-hidden">
      <motion.div
        className="absolute"
        animate={{
          left: ["8%", "24%", "46%", "66%", "80%", "58%", "34%", "14%", "8%"],
          top: ["70%", "36%", "56%", "24%", "46%", "62%", "30%", "52%", "70%"],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Léger ballottement, indépendant du trajet */}
        <motion.div
          animate={{ x: [0, 6, -4, 3, 0], y: [0, -5, 3, -3, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Halo externe qui respire */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 90,
              height: 90,
              left: -45,
              top: -45,
              background:
                "radial-gradient(circle, rgba(255,249,220,0.55) 0%, rgba(255,222,140,0.30) 35%, rgba(255,205,110,0.10) 60%, transparent 75%)",
              filter: "blur(2px)",
            }}
            animate={{ scale: [1, 1.6, 0.85, 1.4, 1], opacity: [0.45, 0.9, 0.25, 0.8, 0.45] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Cœur brillant qui scintille */}
          <motion.div
            className="absolute rounded-full"
            style={{
              width: 16,
              height: 16,
              left: -8,
              top: -8,
              background:
                "radial-gradient(circle, #fffef7 0%, #ffeeb0 55%, rgba(255,210,120,0) 100%)",
              boxShadow:
                "0 0 12px 4px rgba(255,244,200,0.9), 0 0 26px 10px rgba(255,214,130,0.5)",
            }}
            animate={{ scale: [1, 1.35, 0.7, 1.2, 1], opacity: [1, 0.65, 1, 0.5, 1] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Étincelles satellites */}
          {sparkles.map((s, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-[#fffdf2]"
              style={{
                width: s.size,
                height: s.size,
                left: s.x - s.size / 2,
                top: s.y - s.size / 2,
                boxShadow: "0 0 6px 2px rgba(255,240,190,0.9)",
              }}
              animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 0.4] }}
              transition={{ duration: s.duration, repeat: Infinity, ease: "easeInOut", delay: s.delay }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeuFollet;
