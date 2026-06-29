import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

import paperTexture from "@/assets/paper-texture-2.png";
import paysagePrairie from "@/assets/paysage-prairie.jpg";
import collageCurieuse from "@/assets/collage-curieuse.png";
import parcoursForet from "@/assets/parcours-foret.jpg";
import { univers } from "@/data/univers";

// ─────────────────────────────────────────────────────────────
//  AGENDA — vos dates
//  👉 Pour ajouter une date : copiez un bloc { ... }, collez-le
//     et modifiez le texte. Laissez lien: "" s'il n'y a pas de lien.
// ─────────────────────────────────────────────────────────────
const evenements = [
  { date: "14 septembre 2026", titre: "Contes sous les étoiles", lieu: "Théâtre de la Vie, Bruxelles", lien: "https://www.theatredelavie.be" },
  { date: "3 octobre 2026", titre: "Balade musicale en forêt", lieu: "Forêt de Soignes", lien: "https://maps.google.com/?q=Forêt+de+Soignes" },
  { date: "22 novembre 2026", titre: "Atelier création nature", lieu: "Centre culturel de Wavre", lien: "https://www.ccwavre.be" },
  { date: "13 décembre 2026", titre: "Récital de Noël", lieu: "Église Saint-Loup, Namur", lien: "" },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7 },
};

const Index = () => {
  return (
    <>
      <Navbar />

      <main className="font-body text-foreground">
        {/* ── 1. ACCUEIL ── */}
        <section id="accueil" className="relative h-screen min-h-[600px] w-full overflow-hidden">
          <img src={paysagePrairie} alt="Prairie au coucher de soleil" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />
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
              className="font-heading text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.04em] leading-none text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]"
            >
              <span className="not-italic">Zia</span>
              <span className="mx-2 md:mx-4"></span>
              <span className="italic">Marsiat</span>
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
                            <span className="text-muted-foreground">{e.lieu}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>
          </section>

          {/* ── 4·5·6. LES TROIS UNIVERS ── */}
          {univers.map((u) => (
            <section key={u.id} id={u.id} className="relative h-[60vh] md:h-[85vh] w-full overflow-hidden">
              <Link to={`/univers/${u.id}`} className="group block w-full h-full">
                <img
                  src={u.image}
                  alt={u.alt}
                  style={{ objectPosition: u.position }}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/45" />
                <motion.h2
                  {...fadeUp}
                  className="absolute inset-0 flex items-center justify-center text-center px-6 font-heading text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]"
                >
                  {u.title}
                </motion.h2>
              </Link>
            </section>
          ))}

          {/* ── 7. PARCOURS ── */}
          <section id="parcours" className="relative py-24 md:py-32 px-6 overflow-hidden">
            <img
              src={parcoursForet}
              alt="Sentier en forêt"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl text-center mb-6 text-white [text-shadow:0_2px_10px_rgba(0,0,0,0.95),0_0_4px_rgba(0,0,0,0.8)]">
                Un chemin de <em className="text-primary">curiosité</em>
              </motion.h2>
              <motion.p {...fadeUp} className="text-center text-lg text-white mb-16 max-w-2xl mx-auto [text-shadow:0_2px_8px_rgba(0,0,0,0.95),0_0_4px_rgba(0,0,0,0.8)]">
                Je suis curieuse. J'aime apprendre et expérimenter. Ces traits de caractère m'ont menée à emprunter de
                nombreux sentiers. Aujourd'hui, tout se rejoint, tout s'entrecroise. Et je souhaite continuer à tisser
                tout cela encore longtemps !
              </motion.p>

              <motion.div {...fadeUp} className="text-center">
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
          <section id="contact" className="py-24 md:py-32 px-6">
            <div className="max-w-2xl mx-auto text-center">
              <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl mb-4">
                Tissons <em className="text-primary">ensemble</em>
              </motion.h2>
              <motion.p {...fadeUp} className="text-lg text-muted-foreground mb-12">
                Une envie de projet, une question ? N'hésitez pas à me contacter.
              </motion.p>
              <div className="space-y-5 text-left">
                <motion.a
                  {...fadeUp}
                  href="mailto:ziamarsiat@gmail.com"
                  className="flex items-center gap-4 bg-background/70 border border-border rounded-xl px-6 py-5 hover:border-primary/40 transition-colors"
                >
                  <Mail className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-lg">ziamarsiat@gmail.com</span>
                </motion.a>
                <motion.a
                  {...fadeUp}
                  href="https://wa.me/32484784274"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-background/70 border border-border rounded-xl px-6 py-5 hover:border-primary/40 transition-colors"
                >
                  <Phone className="w-6 h-6 text-primary shrink-0" />
                  <span>
                    <span className="text-lg block">0032 484 78 42 74</span>
                    <span className="text-muted-foreground text-sm">SMS ou WhatsApp</span>
                  </span>
                </motion.a>
              </div>
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
