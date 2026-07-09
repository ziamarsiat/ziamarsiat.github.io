import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import paperTexture from "@/assets/paper-texture-2.png";
import Navbar from "@/components/Navbar";
import { univers } from "@/data/univers";

const UniversDetail = () => {
  const { slug } = useParams();
  const u = univers.find((x) => x.id === slug);

  return (
    <main
      className="min-h-screen font-body"
      style={{ backgroundImage: `url(${paperTexture})`, backgroundRepeat: "repeat", backgroundSize: "600px auto" }}
    >
      <Navbar solid />
      <div className="max-w-4xl mx-auto px-6 pt-28 pb-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

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
