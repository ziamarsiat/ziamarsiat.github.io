import { Link } from "react-router-dom";
import { Flower2, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import sciences1 from "@/assets/sciences-1.webp";
import sciences2 from "@/assets/sciences-2.webp";
import sciences3 from "@/assets/sciences-3.webp";

const SciencesNaturelles = () => {
  return (
    <main className="min-h-screen bg-background font-body">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <Flower2 className="w-8 h-8 text-sage" />
          <h1 className="font-heading text-4xl md:text-5xl text-foreground">
            Sciences <em className="text-sage">naturelles</em>
          </h1>
        </div>

        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
          Pourquoi les choses sont-elles comme elles sont ? Entre savoir et magie, il y a l'émerveillement.
        </p>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border"
        >
          <p className="font-body text-lg text-foreground leading-relaxed mb-8">
            À la découverte des vivants qui nous entourent, des ateliers pour tous les âges basés sur une pédagogie de l'expérimentation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <img
              src={sciences1}
              alt="Enfant en exploration dans la nature"
              className="w-full h-72 object-cover rounded-xl"
              loading="lazy"
            />
            <img
              src={sciences2}
              alt="Atelier d'observation dans une serre de cactus"
              className="w-full h-72 object-cover rounded-xl"
              loading="lazy"
            />
            <img
              src={sciences3}
              alt="Enfant dans une serre tropicale"
              className="w-full h-72 object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.section>
      </div>
    </main>
  );
};

export default SciencesNaturelles;
