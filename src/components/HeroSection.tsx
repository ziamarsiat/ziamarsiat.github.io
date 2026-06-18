import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, Palette, Music } from "lucide-react";
import { Link } from "react-router-dom";
import paysagePrairie from "@/assets/paysage-prairie.jpg";
import collageCurieuse from "@/assets/collage-curieuse.png";
import ziaArtPlastique from "@/assets/zia-art-plastique.jpg";
import ziaRecitsMusique from "@/assets/zia-recits-musique.jpg";
import ziaSciencesNaturelles from "@/assets/zia-sciences-naturelles.jpg";

const disciplines = [
  {
    icon: Music,
    title: "Récits & musique",
    subtitle: "Rêve partagé",
    description:
      "Raconter, c'est créer un petit bout de rêve à partager. Les histoires prennent vie par le chant et le violoncelle.",
    color: "text-primary",
    hoverBg: "bg-primary/10",
    borderColor: "border-primary",
    link: "/recits-musique",
  },
  {
    icon: Flower2,
    title: "Sciences naturelles",
    subtitle: "Émerveillement",
    description:
      "Pourquoi les choses sont-elles comme elles sont ? Entre savoir et magie, il y a l'émerveillement.",
    color: "text-sage",
    hoverBg: "bg-sage/10",
    borderColor: "border-sage",
    link: "/sciences-naturelles",
  },
  {
    icon: Palette,
    title: "Art plastique",
    subtitle: "Sensations",
    description:
      "Nos yeux voient, nos corps sentent et entendent. Je crée avec mes sens pour partager des sensations.",
    color: "text-terracotta",
    hoverBg: "bg-terracotta/10",
    borderColor: "border-terracotta",
    link: "/art-plastique",
  },
];

const HeroSection = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      {/* Accueil plein écran — inspiration Grand Matin */}
      <section id="accueil" className="relative h-screen min-h-[600px] w-full overflow-hidden snap-start">
        <img
          src={paysagePrairie}
          alt="Prairie au coucher de soleil"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Léger voile pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/50" />

        {/* Nom + rôle, au centre */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-base font-body uppercase tracking-[0.3em] text-white/90 mb-4 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
          >
            Actrice-conteuse · Interprète nature · Plasticienne
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.06em] leading-none text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]"
          >
            <span className="not-italic">Zia</span>
            <span className="mx-2 md:mx-4"></span>
            <span className="italic">Marsiat</span>
          </motion.h1>
        </div>

        {/* Coordonnées en bas à droite */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-6 right-6 z-10 text-right font-body text-lg md:text-2xl text-white/90 drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)]"
        >
          <a href="mailto:ziamarsiat@gmail.com" className="block hover:underline">
            ziamarsiat@gmail.com
          </a>
          <a href="tel:+32484784274" className="block hover:underline mt-1">
            0032 484 78 42 74
          </a>
        </motion.div>
      </section>

      {/* Présentation — Je suis une curieuse */}
      <section id="presentation" className="relative h-screen min-h-[600px] w-full overflow-hidden snap-start bg-[#e5dbc8]">
        <img
          src={collageCurieuse}
          alt="Zia entourée d'un écureuil, d'oiseaux, d'un crayon et d'un violoncelle"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dégradé sombre en bas pour la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-16 md:pb-24 text-center font-body text-xl md:text-3xl leading-relaxed text-white max-w-3xl mx-auto drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
        >
          Je suis curieuse. J'aime apprendre et essayer de nouvelles choses. Ce trait de caractère m'a menée à emprunter de nombreux sentiers.
        </motion.p>
      </section>

      {/* Disciplines */}
      <section id="disciplines" className="relative py-20 px-6 snap-start">
        <div className="max-w-4xl mx-auto">
          {/* Onglets disciplines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 flex flex-col items-center"
          >
           <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {disciplines.map((d, i) => (
              <div
                key={d.title}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  to={d.link}
                  className="flex flex-col items-center group"
                >
                  <div className="relative">
                    {/* Halo léger au survol */}
                    <div
                      className={`pointer-events-none absolute inset-0 rounded-full transition-all duration-500 blur-2xl ${
                        hovered === i
                          ? "opacity-60 scale-125"
                          : "opacity-0 scale-100"
                      } ${
                        d.title === "Récits & musique"
                          ? "bg-primary/25"
                          : d.title === "Sciences naturelles"
                            ? "bg-sage/25"
                            : "bg-terracotta/25"
                      }`}
                      aria-hidden="true"
                    />

                    <div
                      className={`relative w-44 h-44 md:w-52 md:h-52 rounded-full border-3 flex items-center justify-center overflow-hidden transition-all duration-200 ${
                        hovered === i
                          ? `${d.hoverBg} ${d.borderColor} shadow-md`
                          : "border-border bg-background/60 backdrop-blur-sm"
                      }`}
                    >
                      {d.title === "Art plastique" ? (
                        <img
                          src={ziaArtPlastique}
                          alt="Zia avec un pinceau"
                          className="w-full h-full object-cover"
                        />
                      ) : d.title === "Récits & musique" ? (
                        <img
                          src={ziaRecitsMusique}
                          alt="Zia jouant du violoncelle"
                          className="w-full h-full object-cover object-[center_18%]"
                        />
                      ) : d.title === "Sciences naturelles" ? (
                        <img
                          src={ziaSciencesNaturelles}
                          alt="Zia dans la nature"
                          className="w-full h-full object-cover object-[center_72%] scale-125"
                        />
                      ) : (
                        <span className={`font-heading text-4xl font-bold ${d.color}`}>
                          {hovered === i ? i + 2 : i + 1}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="font-heading text-lg md:text-xl font-bold text-center leading-tight mt-4 w-44 md:w-52 text-primary">
                    {d.title}
                  </span>
                </Link>
              </div>
            ))}
          </div>

          {/* Description au survol */}
          <div className="h-20 flex items-start justify-center mt-4">
            <AnimatePresence mode="wait">
              {hovered !== null && (
                <motion.div
                  key={hovered}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="bg-background/80 backdrop-blur-sm border border-border rounded-xl px-6 py-4 max-w-md shadow-lg"
                >
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {disciplines[hovered].description}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
