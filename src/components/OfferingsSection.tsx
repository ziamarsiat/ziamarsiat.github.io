import { motion } from "framer-motion";

const offerings = [
  {
    title: "Contes & spectacles",
    description:
      "Éveil aux histoires par la musique, le chant et la manipulation d'objets pour les plus jeunes. Pour les plus grands, la parole fait la part belle à la tradition orale — chaque spectateur·ice crée les images dans son imaginaire. Soutenu par le chant et le violoncelle.",
  },
  {
    title: "Tout se transforme",
    description:
      "Spectacle en création. Trois histoires en résonance : une vieille racontant l'histoire du fond des temps, une femme tombant du ciel, une jeune femme sculptant l'argile et un enfant fort comme un rock. Première forme fixe, jouable en intérieur comme en extérieur.",
    badge: "En création",
  },
  {
    title: "Éveil",
    description:
      "Quelques minutes de rêverie pour danser, raconter, animer l'inanimé et créer le lien entre regard et création plastique.",
  },
  {
    title: "ASBL Réalisme",
    description:
      "En duo avec Aline, nous allons dans les collectifs (écoles, maisons de retraite, etc.) et créons des ateliers conte et émotions. Les participant·es sont invité·es à explorer ces matières et s'emparer d'outils concrets.",
    badge: "Duo",
  },
];

const OfferingsSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          {offerings.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-8 border border-border relative overflow-hidden group hover:border-primary/30 transition-colors duration-300"
            >
              {o.badge && (
                <span className="absolute top-4 right-4 bg-primary/10 text-primary font-body text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                  {o.badge}
                </span>
              )}
              <h3 className="font-heading text-xl text-foreground mb-3">{o.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">{o.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
