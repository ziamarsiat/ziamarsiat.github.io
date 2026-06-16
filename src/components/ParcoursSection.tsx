import { motion } from "framer-motion";

const steps = [
  {
    title: "Les arts plastiques",
    text: "Mon goût pour les arts plastiques et les images qui racontent.",
  },
  {
    title: "Les spectacles vivants",
    text: "Sources d'inspiration et d'expérimentation inépuisables.",
  },
  {
    title: "Les sciences & pédagogies",
    text: "Mon plaisir de contempler, entre savoir et magie.",
  },
  {
    title: "Les histoires & la musique",
    text: "Les récits oraux qui modifient ma manière d'être au monde. Le violoncelle et le chant, qui nous unissent.",
  },
];

const ParcoursSection = () => {
  return (
    <section id="parcours" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-foreground text-center mb-6"
        >
          Un chemin de <em className="text-primary">curiosité</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-center text-muted-foreground text-lg max-w-2xl mx-auto mb-16"
        >
          Aujourd'hui, tout se rejoint, tout s'entrecroise. Je suis plasticienne, actrice-conteuse, 
          musicienne, interprète nature et environnement. Cette pluralité fait partie de moi.
        </motion.p>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`md:flex md:items-center md:gap-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                  <h3 className="font-heading text-xl md:text-2xl text-foreground mb-2">{step.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
                <div className="hidden md:flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-center text-foreground italic text-lg mt-16"
        >
          Et je souhaite continuer à tisser tout cela encore longtemps !
        </motion.p>
      </div>
    </section>
  );
};

export default ParcoursSection;
