import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ages = [
  { label: "0–3 ans", letter: "A", color: "#F59E0B", description: "Parce qu'il n'est jamais trop tôt pour commencer à expérimenter le monde par les sensations." },
  { label: "3–6 ans", letter: "B", color: "#F97316", description: "À la découverte des émotions et du vivant. C'est par le jeu et l'amusement que l'on apprend le mieux." },
  { label: "6–12 ans", letter: "C", color: "#F97040", description: "La pensée abstraite se met en place et l'imaginaire est fulgurant : nourrissons leur curiosité." },
  { label: "12–18 ans", letter: "D", color: "#EF5A3C", description: "Quelle période de découverte incroyable, tant sur soi-même que sur les autres ! C'est le moment idéal pour vivre des expériences transformatrices." },
  { label: "+18 ans", letter: "E", color: "#EF4444", description: "Car en chacun de nous, il y a un enfant aux oreilles et aux yeux grands ouverts." },
  { label: "Seniors", letter: "F", color: "#DC2626", description: "Parce que s'émerveiller, ça dure toute la vie." },
];

const AgesSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="propose" className="min-h-screen flex flex-col justify-center py-24 px-6 snap-start">
      <div className="max-w-4xl mx-auto text-center border-2 border-primary/30 rounded-3xl p-8 md:p-12 shadow-sm">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-foreground mb-4"
        >
          Ce que je <em className="text-primary">propose</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground text-lg max-w-2xl mx-auto mb-6"
        >
          Spectacles, balades, créations, ateliers, cercles de conteur·ses, scénographie et autres inventions. 
          Selon le public, le lieu et la saison, le projet prend vie.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-body text-muted-foreground text-base mb-12"
        >
          Pour tous les âges — de 0 à 120 ans.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-8">
          {ages.map((age, i) => (
            <motion.div
              key={age.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex flex-col items-center cursor-default"
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  borderWidth: 3,
                  borderStyle: "solid",
                  borderColor: age.color,
                  backgroundColor: hovered === i ? `${age.color}20` : "transparent",
                }}
              >
                <span
                  className="font-heading text-2xl font-bold"
                  style={{ color: age.color }}
                >
                  {age.letter}
                </span>
              </div>
              <span className="font-body text-sm font-bold text-foreground mt-3">{age.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="h-24 flex items-start justify-center mt-6">
          <AnimatePresence mode="wait">
            {hovered !== null && (
              <motion.div
                key={hovered}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-xl px-6 py-4 max-w-md shadow-lg"
              >
                <p className="font-body text-sm text-foreground leading-relaxed">
                  {ages[hovered].description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AgesSection;
