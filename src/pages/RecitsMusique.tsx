import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Music, ArrowLeft, ImageIcon } from "lucide-react";
import paperTexture from "@/assets/paper-texture-2.png";

const spectacles = [
  { title: "Tours de contes", audience: "Tout public", slug: "tours-de-contes" },
  { title: "Histoires d'un jardin d'été", audience: "6 mois +", slug: "histoires-d-un-jardin-d-ete" },
  { title: "Tout se transforme", audience: "6 ans +", slug: "tout-se-transforme" },
  { title: "Cabane magique", audience: "Espace nomade", slug: "cabane-magique" },
];

const RecitsMusique = () => {
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
          <Music className="w-8 h-8 text-primary" />
          <h1 className="font-heading text-4xl md:text-5xl text-foreground">
            Récits <em className="text-primary">& musique</em>
          </h1>
        </div>

        <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-2xl mb-16">
          Raconter, c'est créer un petit bout de rêve à partager. Les histoires prennent vie par le chant et le violoncelle.
        </p>

        <div className="grid md:grid-cols-4 gap-8">
          {spectacles.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={`/recits-musique/${s.slug}`}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full"
              >
                <div className="aspect-[4/3] bg-muted/60 flex items-center justify-center text-muted-foreground/50">
                  <ImageIcon className="w-12 h-12" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-heading text-xl text-foreground mb-3">{s.title}</h3>
                  <p className="font-body text-xs uppercase tracking-widest text-primary">
                    {s.audience}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default RecitsMusique;
