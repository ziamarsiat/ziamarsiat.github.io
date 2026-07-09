import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ImageIcon, X } from "lucide-react";
import paperTexture from "@/assets/paper-texture-2.webp";
import Navbar from "@/components/Navbar";
import { univers } from "@/data/univers";

const UniversDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const u = univers.find((x) => x.id === slug);
  const dark = !!u?.dark;
  const banner = u?.banner || "";

  // Retour fluide : on revient à la page précédente sans recharger.
  // Si on est arrivé directement (pas d'historique), on va au bon endroit de l'accueil.
  const retour = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate(`/#${slug}`);
  };

  // Photo affichée en plein écran (galerie cliquable)
  const [plein, setPlein] = useState<string | null>(null);
  useEffect(() => {
    if (!plein) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setPlein(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [plein]);

  // Toujours afficher la sous-page depuis le haut
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <main
      className={`min-h-screen font-body ${dark ? "bg-black text-white" : ""}`}
      style={
        dark
          ? undefined
          : { backgroundImage: `url(${paperTexture})`, backgroundRepeat: "repeat", backgroundSize: "600px auto" }
      }
    >
      {dark ? <Navbar light /> : <Navbar solid />}

      {/* Hero plein écran : image (rideau) alignée en haut + titre centré */}
      {u && banner && (
        <section className="relative h-screen w-full overflow-hidden">
          <img
            src={banner}
            alt=""
            style={{ objectPosition: u.bannerPosition || "center" }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dégradé en bas pour fondre l'image dans le fond noir, sans coupure */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-b from-transparent to-black" />
          <button
            type="button"
            onClick={retour}
            className="absolute top-20 left-6 z-20 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </button>
          {u.id === "interprete-nature" ? (
            // Titre écrit le long d'une courbe sinueuse finissant à la bouche de la grenouille (« sa langue »).
            // Le viewBox correspond aux dimensions de l'image, avec « slice » pour suivre object-cover.
            <motion.svg
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="pointer-events-none absolute inset-0 w-full h-full"
              viewBox="0 0 2345 1615"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <path
                  id="langue-grenouille"
                  fill="none"
                  d="M 1090,815 C 1230,605 1390,545 1560,575 C 1770,613 1975,700 2180,775"
                />
              </defs>
              <text
                className="fill-white font-heading"
                fontSize="108"
                style={{ filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.9))" }}
              >
                <textPath href="#langue-grenouille" startOffset="0">
                  {u.title}
                </textPath>
              </text>
            </motion.svg>
          ) : (
            <div className="absolute inset-0 flex items-start justify-center px-6 pt-24 md:pt-32">
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9 }}
                className="font-heading text-5xl md:text-7xl text-white text-center drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)]"
              >
                {u.title}
              </motion.h1>
            </div>
          )}
        </section>
      )}

      <div className={`max-w-4xl mx-auto px-6 pb-16 ${banner ? "pt-16 md:pt-24" : "pt-28"}`}>
        {!u ? (
          <p className="text-lg text-muted-foreground">Section introuvable.</p>
        ) : (
          <>
            {/* En-tête classique (sans bannière) : Retour + titre + image */}
            {!banner && (
              <>
                <button
                  type="button"
                  onClick={retour}
                  className={`inline-flex items-center gap-2 text-sm transition-colors mb-12 ${
                    dark ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retour
                </button>

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
              </>
            )}

            <p
              className={`text-lg leading-relaxed mb-8 max-w-2xl ${
                dark ? "text-white/85" : "text-muted-foreground"
              }`}
            >
              {u.text}
            </p>

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
                {u.spectacles.map((s, i) => {
                  const carteClass =
                    "bg-card rounded-2xl border border-border overflow-hidden shadow-sm flex flex-col h-full";
                  const contenu = (
                    <>
                      <div className="aspect-square bg-muted/60 flex items-center justify-center text-muted-foreground/50">
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
                    </>
                  );
                  return (
                    <motion.div
                      key={s.titre}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      {s.image ? (
                        <Link
                          to={`/spectacle/${s.slug}`}
                          className={`${carteClass} hover:border-primary/40 hover:shadow-lg transition-all duration-300`}
                        >
                          {contenu}
                        </Link>
                      ) : (
                        <div className={carteClass}>{contenu}</div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            )}

            {u.gallery.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                {u.gallery.map((img, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setPlein(img)}
                    className="group block overflow-hidden rounded-xl cursor-zoom-in"
                    aria-label={`Voir la photo ${i + 1} en plein écran`}
                  >
                    <img
                      src={img}
                      alt={`${u.title} — photo ${i + 1}`}
                      loading="lazy"
                      className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            )}
          </>
        )}
      </div>

      {/* Affichage plein écran d'une photo de la galerie */}
      {plein && (
        <div
          onClick={() => setPlein(null)}
          className="fixed inset-0 z-[80] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        >
          <button
            aria-label="Fermer"
            onClick={() => setPlein(null)}
            className="absolute top-5 right-5 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img src={plein} alt="" className="max-h-full max-w-full object-contain" />
        </div>
      )}
    </main>
  );
};

export default UniversDetail;
