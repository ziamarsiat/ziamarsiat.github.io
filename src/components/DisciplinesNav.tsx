import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flower2, Palette, Music } from "lucide-react";
import { Link } from "react-router-dom";

const BirdIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={{ overflow: 'visible' }}
  >
    <path d="M2 11c2-1 4-1 6 0 2-2 5-3 8-2 1 0 2 1 3 2-1 2-3 3-5 4-2 1-4 2-6 1-2-1-4-2-6-5z" />
    <path d="M11 9c1-2 3-3 5-3" />
    <path d="M16 6c1-1 2-1 3 0" />
    <path d="M13 12c1 1 2 2 4 2" />
    <circle cx="19" cy="5" r="0.5" fill="currentColor" stroke="none" />
    <path d="M7 14c-1 2-1 4 0 5" />
    <path d="M9 15c0 2 1 3 2 4" />
  </svg>
);


const disciplines = [
  {
    icon: Flower2,
    title: "Sciences naturelles",
    subtitle: "Émerveillement",
    description:
      "Pourquoi les choses sont-elles comme elles sont ? Entre savoir et magie, il y a l'émerveillement.",
    color: "text-sage",
    hoverBg: "bg-sage/10",
    href: "/sciences-naturelles",
  },
  {
    icon: Palette,
    title: "Art plastique",
    subtitle: "Sensations",
    description:
      "Nos yeux voient, nos corps sentent et entendent. Je crée avec mes sens pour partager des sensations.",
    color: "text-terracotta",
    hoverBg: "bg-terracotta/10",
    href: "/art-plastique",
  },
  {
    icon: Music,
    title: "Récits & musique",
    subtitle: "Rêve partagé",
    description:
      "Raconter, c'est créer un petit bout de rêve à partager. Les histoires prennent vie par le chant et le violoncelle.",
    color: "text-primary",
    hoverBg: "bg-primary/10",
    href: "/recits-musique",
  },
  {
    icon: BirdIcon,
    title: "Lettre d'information",
    subtitle: "Restons en lien",
    description:
      "Recevez des nouvelles de mes projets, spectacles et ateliers directement dans votre boîte mail.",
    color: "text-amber-600",
    hoverBg: "bg-amber-500/10",
    href: "/lettre-information",
  },
];

const DisciplinesNav = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-stretch justify-center">
          {disciplines.map((d, i) => {
            const content = (
              <>
                <div className={`flex items-center justify-center gap-2 px-4 py-4 transition-colors duration-200 ${hovered === i ? d.hoverBg : ""}`}>
                  <d.icon className={`w-5 h-5 ${d.color}`} />
                  <span className="font-heading text-sm md:text-base text-foreground">{d.title}</span>
                </div>

                <AnimatePresence>
                  {hovered === i && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 right-0 bg-background border border-border border-t-0 rounded-b-xl shadow-lg p-5 z-50"
                    >
                      <p className="font-body text-xs uppercase tracking-widest text-muted-foreground mb-1">
                        {d.subtitle}
                      </p>
                      <p className="font-body text-sm text-foreground leading-relaxed">
                        {d.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            );

            return (
              <div
                key={d.title}
                className="relative flex-1"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {d.href ? (
                  <Link to={d.href} className="block cursor-pointer">
                    {content}
                  </Link>
                ) : (
                  <div className="cursor-default">
                    {content}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default DisciplinesNav;
