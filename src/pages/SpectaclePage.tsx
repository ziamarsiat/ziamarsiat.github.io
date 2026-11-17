import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import { univers } from "@/data/univers";
import { usePageSeo, seoSpectacle } from "@/lib/seo";

type Spectacle = (typeof univers)[number]["spectacles"][number];

// Page d'un spectacle : image (affiche) en haut, texte, puis triptyque de photos.
const SpectaclePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [plein, setPlein] = useState<string | null>(null);

  // On cherche le spectacle (et l'univers auquel il appartient) d'après le slug.
  let spectacle: Spectacle | null = null;
  let universId = "";
  for (const u of univers) {
    const trouve = u.spectacles.find((s) => s.slug === slug);
    if (trouve) {
      spectacle = trouve;
      universId = u.id;
      break;
    }
  }
  usePageSeo(seoSpectacle(spectacle));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Retour fluide : page précédente sans rechargement (sinon, l'univers du spectacle).
  const retour = () => {
    if (window.history.state?.idx > 0) navigate(-1);
    else navigate(`/univers/${universId}`);
  };

  // Affichage plein écran : fermeture avec Échap + blocage du défilement de fond.
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

  if (!spectacle) {
    return (
      <main className="min-h-screen bg-black text-white font-body flex items-center justify-center">
        <Navbar light />
        <p className="text-lg text-white/70">Spectacle introuvable.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white font-body">
      <Navbar light />

      {/* L'affiche, alignée en haut */}
      <div className="pt-16 md:pt-20">
        <img
          src={spectacle.image}
          alt={spectacle.titre}
          className="mx-auto block max-h-[80vh] w-auto max-w-full object-contain"
        />
      </div>

      {/* Titre et texte */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-14">
        <button
          type="button"
          onClick={retour}
          className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </button>
        <h1 className="font-heading text-4xl md:text-5xl mb-8">{spectacle.titre}</h1>
        {spectacle.description.length > 0 && (
          <div className="space-y-6 text-lg leading-relaxed text-white/85">
            {spectacle.description.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}

        {spectacle.dossier && (
          <div className="mt-10">
            <a
              href={spectacle.dossier}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-body text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors"
            >
              Dossier du spectacle
            </a>
          </div>
        )}
      </div>

      {/* Triptyque de photos, cliquables */}
      {spectacle.photos.length > 0 && (
        <div className="max-w-6xl mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {spectacle.photos.map((p, i) => (
              <button
                key={i}
                onClick={() => setPlein(p)}
                className="group block overflow-hidden rounded-xl cursor-zoom-in"
                aria-label={`Voir la photo ${i + 1} en plein écran`}
              >
                <img
                  src={p}
                  alt={`${spectacle!.titre} — photo ${i + 1}`}
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Affichage plein écran d'une photo */}
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

export default SpectaclePage;
