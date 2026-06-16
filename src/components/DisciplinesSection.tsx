import { motion } from "framer-motion";
import { Flower2, Palette, Music } from "lucide-react";

const disciplines = [
  {
    icon: Flower2,
    title: "Sciences naturelles",
    subtitle: "Émerveillement",
    description:
      "Pourquoi les choses sont-elles comme elles sont ? Entre savoir et magie, il y a l'émerveillement.",
    color: "text-sage",
  },
  {
    icon: Palette,
    title: "Art plastique",
    subtitle: "Sensations",
    description:
      "Nos yeux voient, nos corps sentent et entendent. Je crée avec mes sens pour partager des sensations.",
    color: "text-terracotta",
  },
  {
    icon: Music,
    title: "Récits & musique",
    subtitle: "Rêve partagé",
    description:
      "Raconter, c'est créer un petit bout de rêve à partager. Les histoires prennent vie par le chant et le violoncelle.",
    color: "text-primary",
  },
];

const DisciplinesSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-foreground text-center mb-16"
        >
          Trois univers, <em className="text-primary">une même curiosité</em>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {disciplines.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <d.icon className={`w-10 h-10 ${d.color} mb-6`} />
              <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {d.subtitle}
              </p>
              <h3 className="font-heading text-xl text-foreground mb-4">{d.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{d.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DisciplinesSection;
