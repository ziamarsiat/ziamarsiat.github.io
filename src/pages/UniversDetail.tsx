import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ImageIcon } from "lucide-react";
import paperTexture from "@/assets/paper-texture-2.png";
import Navbar from "@/components/Navbar";
import { univers } from "@/data/univers";

const UniversDetail = () => {
  const { slug } = useParams();
  const u = univers.find((x) => x.id === slug);

  // Toujours afficher la sous-page depuis le haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main
      className="min-h-screen font-body"
      style={{ backgroundImage: `url(${paperTexture})`, backgroundRepeat: "repeat", backgroundSize: "600px auto" }}
    >
      <Navbar solid />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        {/* Retour vers le bloc d'où l'on vient sur la page d'accueil (ex. #actrice-conteuse) */}
        <a
          href={`/#${slug}`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </a>

        {!u ? (
          <p className="text-lg text-muted-foreground">Section introuvable.</p>
        ) : (
          <>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-heading text-4xl md:text-5xl text-primary mb-8"
            >
              {u.title}
            </motion.h1>

            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src={u.image}
              alt={u.alt}
              style={{ objectPosition: u.position }}
              className="w-full h-[45vh] md:h-[55vh] object-cover rounded-2xl shadow-md mb-10"
            />

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">{u.text}</p>

            {u.items.length > 0 && (
              <ul className="space-y-2 mb-10">
                {u.items.map((it) => (
                  <li key={it} className="flex items-start gap-3 text-foreground">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Cadres des spectacles */}
            {u.spectacles.length > 0 && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                {u.spectacles.map((s, i) => (
                  <motion.div
                    key={s.titre}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm flex flex-col h-full"
                  >
                    <div className="aspect-[4/3] bg-muted/60 flex items-center justify-center text-muted-foreground/50">
                      {s.image ? (
                        <img src={s.image} alt={s.titre} className="w-full h-full object-cover" loading="lazy" />
                      ) : (
                        <ImageIcon className="w-12 h-12" />
                      )}
                    </div>
                    <div className="p-6 text-center">
                      <h3 className="font-heading text-xl text-foreground mb-3">{s.titre}</h3>
                      <p className="font-body text-xs uppercase tracking-widest text-primary">{s.public}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {u.gallery.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {u.gallery.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${u.title} — photo ${i + 1}`}
                    className="w-full h-64 object-cover rounded-xl"
                    loading="lazy"
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default UniversDetail;
