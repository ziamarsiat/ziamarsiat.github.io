import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FeuFollet from "@/components/FeuFollet";
import BullesSavon from "@/components/BullesSavon";
import AgendaListe from "@/components/AgendaListe";
import ConfettisAuSurvol from "@/components/ConfettisAuSurvol";

import paperTexture from "@/assets/paper-texture-2.webp";
import accueilBg from "@/assets/accueil.webp";
import collageCurieuse from "@/assets/collage-curieuse.webp";
import parcoursBoussole from "@/assets/parcours-boussole.webp";
import troisDisciplines from "@/assets/trois-disciplines.webp";
import contactImg from "@/assets/contact.webp";
import agendaCiel from "@/assets/agenda-ciel.webp";
import { universVisibles as univers } from "@/data/univers";
import { useAgenda, separerAgenda } from "@/data/agenda";
import { usePageSeo, PAGES_FIXES } from "@/lib/seo";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7 },
};

const Index = () => {
  usePageSeo(PAGES_FIXES.find((p) => p.chemin === "/")!);
  const { evenements } = useAgenda();
  const { aVenir, passees } = separerAgenda(evenements);

  // Si on arrive sur la page avec un repère (ex. /#actrice-conteuse),
  // on se positionne sur le bon bloc — même après le chargement des grandes images.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const aller = () => document.getElementById(id)?.scrollIntoView();
    if (document.readyState === "complete") aller();
    else window.addEventListener("load", aller, { once: true });
    // Plusieurs recalages : les grandes images décalent la page en se chargeant.
    const minuteurs = [200, 600, 1200, 2000].map((d) => setTimeout(aller, d));
    return () => {
      window.removeEventListener("load", aller);
      minuteurs.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main className="font-body text-foreground">
        {/* ── 1. ACCUEIL ── */}
        <section id="accueil" className="relative h-screen min-h-[600px] w-full overflow-hidden">
          {/* Sur téléphone (écran en hauteur), on cadre sur les anges à gauche ; sur ordinateur, image entière */}
          <img src={accueilBg} alt="Forêt ensoleillée avec un ours" className="absolute inset-0 w-full h-full object-cover object-[10%_center] md:object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/55" />
          <FeuFollet />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            {/* Le nom et, juste en dessous, « Actrice-conteuse » étiré sur la même largeur que le nom */}
            <div className="inline-flex flex-col items-stretch">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-lostar text-[13.5vw] sm:text-8xl md:text-9xl lg:text-[11rem] leading-none text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]"
              >
                {/* Au survol : le nom devient doré et une salve de confettis jaillit */}
                <ConfettisAuSurvol>
                  <a href="/#contact" className="texte-dore whitespace-nowrap">
                    <span>Zia</span>
                    <span className="mx-2 md:mx-4"></span>
                    <span>Marsiat</span>
                  </a>
                </ConfettisAuSurvol>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 md:mt-5 text-sm md:text-lg lg:text-xl uppercase text-white/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]"
              >
                {/* Chaque lettre est un petit bloc : réparties entre les deux bords, elles occupent toute la largeur du nom */}
                <Link to="/univers/actrice-conteuse" className="flex justify-between hover:text-primary transition-colors">
                  {"Actrice-conteuse".split("").map((lettre, i) => (
                    <span key={i}>{lettre}</span>
                  ))}
                </Link>
              </motion.p>
            </div>
          </div>
        </section>

        {/* Fond papier pour tout le reste */}
        <div
          style={{ backgroundImage: `url(${paperTexture})`, backgroundRepeat: "repeat", backgroundSize: "600px auto" }}
        >
          {/* ── 2. QUI SUIS-JE ──
              Section mise en réserve : elle n'apparaît plus sur le site.
              Pour la réafficher, remplacer « false » par « true » ci-dessous. */}
          {false && (
          <section id="qui-suis-je">
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
                  Créatrice interdisciplinaire, j'explore les pratiques pour vous proposer des expériences qui
                  réunissent savoir et imaginaire.
                </motion.p>
              </div>
            </div>
          </section>
          )}

          {/* ── 3. AGENDA ── */}
          <section
            id="agenda"
            className="py-24 md:py-32 px-6 bg-cover bg-center"
            style={{ backgroundImage: `url(${agendaCiel})` }}
          >
            <div className="max-w-3xl mx-auto">
              {/* Titre étiré sur deux tiers de la largeur, centré : chaque lettre est répartie entre les deux bords */}
              <motion.h2 {...fadeUp} className="font-heading text-6xl md:text-8xl mb-12 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                <em className="relative left-1/2 -translate-x-1/2 flex justify-between w-[66vw] text-white">
                  {"Agenda".split("").map((lettre, i) => (
                    <span key={i}>{lettre}</span>
                  ))}
                </em>
              </motion.h2>
              <motion.div {...fadeUp}>
                <AgendaListe
                  evenements={aVenir}
                  messageVide="Aucune date à venir pour le moment. Revenez bientôt !"
                  className="shadow-lg"
                />
              </motion.div>

              {passees.length > 0 && (
                <motion.div {...fadeUp} className="text-center mt-6">
                  <Link
                    to="/agenda/passees"
                    className="inline-block font-body text-sm uppercase tracking-widest bg-white/90 text-foreground px-6 py-3 rounded-full shadow hover:bg-white transition-colors"
                  >
                    Dates passées →
                  </Link>
                </motion.div>
              )}
            </div>
          </section>

          {/* ── 4. LES UNIVERS (une seule image en fond) ──
              S'il n'y a qu'un seul univers visible : sur ordinateur, on ne montre
              que le haut de l'image (la pie dans le ciel) pour éviter un bloc trop
              haut ; sur téléphone, l'image en hauteur s'affiche entière. */}
          <div className={`relative w-full ${univers.length === 1 ? "md:h-[70vh] md:min-h-[420px] md:overflow-hidden" : ""}`}>
            <img
              src={troisDisciplines}
              alt="Une pie en vol, une tortue de mer et des pivoines rouges"
              className={
                univers.length === 1
                  ? "block w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover md:object-[center_12%]"
                  : "block w-full h-auto"
              }
            />
            <div className="absolute inset-0 flex flex-col">
              {univers.map((u) => (
                <Link
                  key={u.id}
                  id={u.id}
                  to={`/univers/${u.id}`}
                  className="group relative flex-1 flex items-center justify-center text-center px-6"
                >
                  <h2 className="texte-dore relative font-heading text-6xl md:text-8xl font-bold text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:scale-110">
                    {u.title}
                  </h2>
                </Link>
              ))}
            </div>
            {/* Bulles de savon qui montent du bas (Plasticienne) vers le haut (Actrice-conteuse) */}
            <BullesSavon />
          </div>

          {/* ── 5. IMAGE « CURIEUSE » (reprise de l'ancienne section Qui suis-je) ── */}
          <motion.img
            {...fadeUp}
            src={collageCurieuse}
            alt="Zia entourée d'un écureuil, d'oiseaux, d'un crayon et d'un violoncelle"
            className="w-full h-auto md:h-[80vh] md:object-cover"
          />

          {/* ── 7. PARCOURS ──
              Sur téléphone : l'image entière, puis le titre et le bouton en dessous.
              Sur ordinateur : l'image en fond, le texte posé dessus à droite. */}
          <section id="parcours" className="relative md:min-h-[70vh] md:flex md:items-center md:py-20 md:px-6 overflow-hidden">
            <img
              src={parcoursBoussole}
              alt="Une main tenant une boussole devant un paysage de montagnes"
              className="block w-full h-auto md:absolute md:inset-0 md:h-full md:object-cover"
            />

            <div className="relative z-10 px-6 py-14 text-center md:p-0 md:ml-auto md:max-w-md">
              <motion.h2 {...fadeUp} className="font-heading text-4xl md:text-5xl mb-8 md:mb-10 text-foreground md:text-white md:[text-shadow:0_2px_10px_rgba(0,0,0,0.95),0_0_4px_rgba(0,0,0,0.8)]">
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
              <p className="text-base md:text-xl mt-3 drop-shadow-[0_1px_8px_rgba(0,0,0,0.9)]">
                46 rue Ansiaux, 4020 Liège
              </p>
            </div>
            {/* Voile sombre en bas pour la lisibilité */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent" />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="absolute inset-x-0 bottom-0 pb-10 md:pb-16 px-6 text-center font-heading text-3xl md:text-5xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
            >
              À bientôt !
            </motion.p>
          </section>

          <footer className="py-8 px-6 text-center border-t border-border">
            <p className="text-base md:text-lg text-foreground mb-2">
              Zia Marsiat · Conteuse, musicienne et plasticienne · Liège, Belgique
            </p>
            <p className="text-base md:text-lg text-muted-foreground">
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
