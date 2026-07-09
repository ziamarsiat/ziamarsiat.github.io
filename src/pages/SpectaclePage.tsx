import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import { univers } from "@/data/univers";

// Page d'un spectacle : le titre et l'image affichée en plein écran.
const SpectaclePage = () => {
  const { slug } = useParams();

  // On cherche le spectacle (et l'univers auquel il appartient) d'après le slug.
  let spectacle: { titre: string; public: string; image: string; slug: string } | null = null;
  let universId = "";
  for (const u of univers) {
    const trouve = u.spectacles.find((s) => s.slug === slug);
    if (trouve) {
      spectacle = trouve;
      universId = u.id;
      break;
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!spectacle) {
    return (
      <main className="min-h-screen bg-background font-body flex items-center justify-center">
        <Navbar solid />
        <p className="text-lg text-muted-foreground">Spectacle introuvable.</p>
      </main>
    );
  }

  return (
    <main className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <Navbar />

      {/* Fond flou pour remplir tout l'écran autour de l'image */}
      <img
        src={spectacle.image}
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover blur-2xl scale-110 opacity-40"
      />

      {/* L'image nette, entière, centrée en plein écran */}
      <img
        src={spectacle.image}
        alt={spectacle.titre}
        className="absolute inset-0 z-10 w-full h-full object-contain"
      />

      {/* Bandeau haut : retour + titre */}
      <div className="absolute top-0 inset-x-0 z-20 bg-gradient-to-b from-black/55 to-transparent pt-20 md:pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            to={`/univers/${universId}`}
            className="inline-flex items-center gap-2 text-sm text-white/90 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour
          </Link>
          <h1 className="mt-4 text-center font-heading text-4xl md:text-6xl text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.7)]">
            {spectacle.titre}
          </h1>
        </div>
      </div>
    </main>
  );
};

export default SpectaclePage;
