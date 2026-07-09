import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";

const steps = [
  {
    title: "Bricoler",
    text: (
      <>
        Chipoter, triturer, gribouiller, essayer… Je le fais depuis toujours et cela m'a rendue curieuse de tout. Je suis passée par <em>Saint-Luc Liège</em> en secondaire, puis par <em>la Cambre</em> et <em>l'Académie des Beaux-Arts</em> en supérieur. Les traits et les volumes sont mes fidèles outils et amis.
      </>
    ),
  },
  {
    title: "Raconter",
    text: (
      <>
        Les histoires m'ont ouvert leurs bras et je suis tombée dedans à corps perdu. Depuis la formation longue organisée par le <em>Théâtre de la Parole</em>, je fouille dans cette matière infinie que sont les contes, et je m'en régale.
      </>
    ),
  },
  {
    title: "Observer",
    text: (
      <>
        Depuis toujours attirée par les sciences et l'observation du monde, c'est dans la formation d'<em>Interprète Nature et Environnement</em> suivie au <em>CRIé de Liège</em> que j'ai trouvé mon bonheur. Depuis, je suis dehors, le nez dans les branches, les mains dans la terre.
      </>
    ),
  },
  {
    title: "Chanter & jouer",
    text: (
      <>
        Le chant est venu avec les histoires, comme une évidence. Le violoncelle est arrivé comme un rêve… Depuis qu'il est devenu réalité, je joue, joue, joue, et il me suit partout.
      </>
    ),
  },
  {
    title: "Enseigner",
    text: (
      <>
        Avec <em>Éducation et Environnement</em> puis l'<em>Agrégation des arts plastiques et de l'espace</em>, la pédagogie fait partie de ma recherche, de mes projets, de mes envies. Elle se glisse et s'applique par la pratique au sein des collectifs et autres groupes.
      </>
    ),
  },
];

const Biographie = () => {
  // Toujours afficher la page depuis le haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background font-body">
      <Navbar solid />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <div className="flex items-center gap-3 mb-16">
          <BookOpen className="w-8 h-8 text-primary" />
          <h1 className="font-heading text-4xl md:text-5xl text-foreground">
            <em className="text-primary">Biographie</em>
          </h1>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
          
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
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
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="font-body text-center text-foreground italic text-lg mt-16"
        >
          Et je souhaite continuer à tisser tout cela encore longtemps !
        </motion.p>
      </div>
    </main>
  );
};

export default Biographie;
