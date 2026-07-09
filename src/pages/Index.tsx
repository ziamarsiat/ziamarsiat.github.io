import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FeuFollet from "@/components/FeuFollet";

import paperTexture from "@/assets/paper-texture-2.png";
import accueilBg from "@/assets/accueil.png";
import collageCurieuse from "@/assets/collage-curieuse.png";
import parcoursBoussole from "@/assets/parcours-boussole.png";
import troisDisciplines from "@/assets/trois-disciplines.png";
import contactImg from "@/assets/contact.png";
import { univers } from "@/data/univers";
import { useAgenda } from "@/data/agenda";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7 },
};

const Index = () => {
  const { evenements } = useAgenda();

  return (
    <>
      <Navbar />

      <main className="font-body text-foreground">
        {/* ── 1. ACCUEIL ── */}
        <section id="accueil" className="relative h-screen min-h-[600px] w-full overflow-hidden">
          <img src={accueilBg} alt="Forêt ensoleillée avec un ours" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />
          <FeuFollet />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-sm md:text-base uppercase tracking-[0.3em] text-white/90 mb-4 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
            >
              Actrice-conteuse · Interprète Nature · Plasticienne
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-lostar text-7xl md:text-8xl lg:text-9xl tracking-[0.04em] leading-none text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]"
            >
              <span>Zia</span>
              <span className="mx-2 md:mx-4"></span>
              <span>Marsiat</span>
            </motion.h1>
          </div>
        </section>

        {/* Fond papier pour tout le reste */}
        <div
          style={{ backgroundImage: `url(${paperTexture})`, backgroundRepeat: "repeat", backgroundSize: "600px auto" }}
        >
          {/* ── 2. QUI SUIS-JE ── */}
          <section id="qui-suis-je" className="pt-24 md:pt-32">
            <motion.img
              {...fadeUp}
              src={collageCurieuse}
              alt="Zia entourée d'un écureuil, d'oiseaux, d'un crayon et d'un violoncelle"
              className="w-full h-[60vh] md:h-[80vh] object-cover"
            />
            {/* Bandeau blanc sous l'image avec le titre et le texte */}
            <div className="bg-white px-6 py-14 md:py-20">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl mb-6">
                  Qui <em className="text-primary">suis-je</em> ?
                </motion.h2>
                <motion.p {...fadeUp} className="text-lg md:text-xl leading-relaxed text-muted-foreground">
                  Je suis curieuse. J'aime apprendre et essayer de nouvelles choses. Ce trait de caractère m'a menée à
                  emprunter de nombreux sentiers.
                </motion.p>
              </div>
            </div>
          </section>

          {/* ── 3. AGENDA ── */}
          <section id="agenda" className="py-24 md:py-32 px-6">
            <div className="max-w-3xl mx-auto">
              <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl text-center mb-12">
                <em className="text-primary">Agenda</em>
              </motion.h2>
              <motion.div {...fadeUp} className="overflow-x-auto border border-border rounded-xl bg-background/60">
                <table className="w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border bg-muted/40">
                      <th className="font-heading text-base text-primary font-bold px-5 py-4 whitespace-nowrap">Quand ?</th>
                      <th className="font-heading text-base text-primary font-bold px-5 py-4">Quoi ?</th>
                      <th className="font-heading text-base text-primary font-bold px-5 py-4">Où ?</th>
                    </tr>
                  </thead>
                  <tbody>
                    {evenements.map((e, i) => (
                      <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="px-5 py-4 align-top whitespace-nowrap">{e.date}</td>
                        <td className="px-5 py-4 align-top font-medium">{e.titre}</td>
                        <td className="px-5 py-4 align-top">
                          {e.lien ? (
                            <a href={e.lien} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/70 transition-colors">
                              {e.lieu}
                            </a>
                          ) : (
                            <span className="text-foreground">{e.lieu}</span>
                          )}
                          {e.ville && (
                            <span className="text-foreground">{e.lieu ? ", " : ""}{e.ville}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>

          {/* ── 4·5·6. LES TROIS UNIVERS (une seule image en fond) ── */}
          <div className="relative w-full">
            <img src={troisDisciplines} alt="Oiseaux dans le ciel" className="block w-full h-auto" />
            <div className="absolute inset-0 flex flex-col">
              {univers.map((u) => (
                <Link
                  key={u.id}
                  id={u.id}
                  to={`/univers/${u.id}`}
                  className="group relative flex-1 flex items-center justify-center text-center px-6"
                >
                  <h2 className="relative font-heading text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:scale-110">
                    {u.title}
                  </h2>
                </Link>
              ))}
            </div>
          </div>

          {/* ── 7. PARCOURS ── */}
          <section id="parcours" className="relative min-h-[60vh] md:min-h-[70vh] flex items-center py-20 px-6 overflow-hidden">
            <img
              src={parcoursBoussole}
              alt="Une main tenant une boussole devant un paysage de montagnes"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 ml-auto max-w-md text-center">
              <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl mb-10 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.95),0_0_4px_rgba(0,0,0,0.8)]">
                Un chemin de <em className="text-primary">curiosité</em>
              </motion.h2>

              <motion.div {...fadeUp}>
                <Link
                  to="/biographie"
                  className="inline-block font-body text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
                >
                  Biographie
                </Link>
              </motion.div>
            </div>
          </section>

          {/* ── 8. CONTACT ── */}
          <section id="contact" className="relative w-full overflow-hidden">
            <img
              src={contactImg}
              alt="Une mésange apporte le courrier à une boîte aux lettres"
              className="block w-full h-auto"
            />
            {/* Voile sombre en haut pour la lisibilité du texte */}
            <div className="absolute inset-x-0 top-0 h-2/3 bg-gradient-to-b from-black/60 via-black/25 to-transparent" />
            <div className="absolute inset-x-0 top-0 pt-16 md:pt-24 px-6 flex flex-col items-center text-center text-white">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="font-heading text-4xl md:text-6xl font-bold mb-6 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
              >
                Contact
              </motion.h2>
              <a
                href="mailto:ziamarsiat@gmail.com"
                className="text-lg md:text-2xl hover:underline drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)] mb-3"
              >
                ziamarsiat@gmail.com
              </a>
              <a
                href="tel:+32484784274"
                className="text-lg md:text-2xl hover:underline drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]"
              >
                0032 484 78 42 74
              </a>
            </div>
          </section>

          <footer className="py-8 px-6 text-center border-t border-border">
            <p className="text-sm text-muted-foreground">
              Photo : Tiffany's Story -{" "}
              <a href="https://objectiffb.be/" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">
                objectiffb.be
              </a>
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Index;
