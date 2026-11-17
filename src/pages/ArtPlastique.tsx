import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Palette, ArrowLeft, ImageIcon } from "lucide-react";
import paperTexture from "@/assets/paper-texture-2.webp";
import { usePageSeo } from "@/lib/seo";

const items = [
  { title: "Future titre", subtitle: "À venir" },
  { title: "Future titre", subtitle: "À venir" },
  { title: "Future titre", subtitle: "À venir" },
  { title: "Future titre", subtitle: "À venir" },
];

const ArtPlastique = () => {
  usePageSeo({ titre: "Art plastique", description: "Travail plastique de Zia Marsiat, plasticienne à Liège.", noindex: true });
  return (
    <main
      className="min-h-screen font-body"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px auto",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <Palette className="w-8 h-8 text-terracotta" />
          <h1 className="font-heading text-4xl md:text-5xl text-foreground">
            Art <em className="text-terracotta">plastique</em>
          </h1>
        </div>

        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
          Nos yeux voient, nos corps sentent et entendent. Je crée avec mes sens pour partager des sensations.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="bg-card rounded-2xl border border-border overflow-hidden hover:border-terracotta/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="aspect-[4/3] bg-muted/60 flex items-center justify-center text-muted-foreground/50">
                  <ImageIcon className="w-12 h-12" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl text-foreground mb-3">{item.title}</h3>
                  <p className="font-body text-xs uppercase tracking-widest text-terracotta">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ArtPlastique;
