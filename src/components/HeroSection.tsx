import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, Palette, Music } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import ziaPortrait from "@/assets/zia-portrait.png";
import ziaArtPlastique from "@/assets/zia-art-plastique.jpg";
import ziaRecitsMusique from "@/assets/zia-recits-musique.jpg";
import ziaSciencesNaturelles from "@/assets/zia-sciences-naturelles.jpg";
import feuillageBanner from "@/assets/feuillage-banner.jpg.asset.json";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/20 to-background/80" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
        <motion.img
          src={ziaPortrait}
          alt="Portrait de Zia Marsiat"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mb-6 h-72 md:h-96 lg:h-[32rem] w-auto object-contain"
        />
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm font-body uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          Actrice-conteuse · Interprète nature · Plasticienne
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-2 w-fit mx-auto"
        >
          <span
            className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] bg-clip-text text-transparent block leading-none"
            style={{
              backgroundImage: `url(${feuillageBanner.url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <span className="not-italic">Zia</span>
            <span className="mx-2 md:mx-4"></span>
            <span className="italic">Marsiat</span>
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
        >
          Je suis une curieuse. J'aime apprendre et essayer de nouvelles choses. 
          Ce trait de caractère m'a menée à emprunter de nombreux sentiers.
        </motion.p>

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
                          className="w-full h-full object-cover"
                        />
                      ) : d.title === "Sciences naturelles" ? (
                        <img
                          src={ziaSciencesNaturelles}
                          alt="Zia dans la nature"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className={`font-heading text-4xl font-bold ${d.color}`}>
                          {hovered === i ? i + 2 : i + 1}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className={`font-heading text-sm md:text-base font-bold text-center leading-tight mt-4 w-44 md:w-52 ${d.color}`}>
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
  );
};

export default HeroSection;
