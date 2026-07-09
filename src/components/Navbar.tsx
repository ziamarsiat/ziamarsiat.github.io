import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import papillon from "@/assets/papillon.png";

const links = [
  { label: "Accueil", href: "/#accueil" },
  { label: "Qui suis-je", href: "/#qui-suis-je" },
  { label: "Agenda", href: "/#agenda" },
  { label: "Actrice-conteuse", href: "/univers/actrice-conteuse" },
  { label: "Interprète Nature", href: "/univers/interprete-nature" },
  { label: "Plasticienne", href: "/univers/plasticienne" },
  { label: "Parcours", href: "/#parcours" },
  { label: "Contact", href: "/#contact" },
];

// `solid` force le texte foncé (utile sur les sous-pages au fond clair).
const Navbar = ({ solid = false }) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Empêcher le défilement de la page quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Texte clair sur le visuel d'accueil ; foncé une fois la page défilée ou le menu ouvert
  const textColor = solid || scrolled || open ? "text-foreground" : "text-white";

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-[60] bg-transparent">
        <nav className="max-w-6xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <a
            href="/#accueil"
            onClick={() => setOpen(false)}
            className="flex items-center"
            aria-label="Zia Marsiat — Accueil"
          >
            <img src={papillon} alt="Zia Marsiat" className="h-12 md:h-14 w-auto object-contain" />
          </a>

          {/* Bouton à deux barres qui se croisent en croix */}
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className={`relative w-10 h-10 flex items-center justify-center transition-colors ${textColor}`}
          >
            <span
              className="absolute h-[2px] w-7 bg-current transition-transform duration-300 ease-in-out"
              style={{ transform: open ? "rotate(45deg)" : "translateY(-5px)" }}
            />
            <span
              className="absolute h-[2px] w-7 bg-current transition-transform duration-300 ease-in-out"
              style={{ transform: open ? "rotate(-45deg)" : "translateY(5px)" }}
            />
          </button>
        </nav>
      </header>

      {/* Menu plein écran */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-background"
          >
            <nav className="h-full flex flex-col justify-center items-end px-10 md:px-20">
              <ul className="space-y-4 md:space-y-6 text-right">
                {links.map((l, i) => {
                  const isSection = l.href.includes("#");
                  const className =
                    "font-heading text-3xl md:text-5xl text-foreground hover:text-primary transition-colors";
                  return (
                    <motion.li
                      key={l.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + i * 0.05, duration: 0.4 }}
                    >
                      {isSection ? (
                        <a href={l.href} onClick={() => setOpen(false)} className={className}>
                          {l.label}
                        </a>
                      ) : (
                        <Link to={l.href} onClick={() => setOpen(false)} className={className}>
                          {l.label}
                        </Link>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
