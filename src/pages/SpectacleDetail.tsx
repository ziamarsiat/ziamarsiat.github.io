import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ImageIcon } from "lucide-react";
import paperTexture from "@/assets/paper-texture-2.png";

const spectacles: Record<string, { title: string; audience: string; description: string }> = {
  "tours-de-contes": {
    title: "Tours de contes",
    audience: "Tout public",
    description:
      "Un voyage en histoires, porté par la voix et le violoncelle. Des récits choisis pour tisser un moment hors du temps, à partager en famille ou entre amis.",
  },
  "histoires-d-un-jardin-d-ete": {
    title: "Histoires d'un jardin d'été",
    audience: "6 mois +",
    description:
      "Un spectacle tout-petits où les fleurs, les insectes et le vent deviennent personnages. Comptines, sons et tendresse pour les plus jeunes oreilles.",
  },
  "tout-se-transforme": {
    title: "Tout se transforme",
    audience: "6 ans +",
    description:
      "Au fil des saisons et des métamorphoses, un récit poétique qui invite à observer le monde vivant et ses incessantes transformations.",
  },
  "cabane-magique": {
    title: "Cabane magique",
    audience: "Espace nomade",
    description:
      "Une cabane qui voyage et accueille petits et grands pour des histoires chuchotées, un espace intime et merveilleux à installer partout.",
  },
};

const SpectacleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const spectacle = slug ? spectacles[slug] : undefined;

  return (
    <main
      className="min-h-screen font-body"
      style={{
        backgroundImage: `url(${paperTexture})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px auto",
      }}
    >
      <div className="max-w-4xl mx-auto px-6 py-16">
        <Link
          to="/recits-musique"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux spectacles
        </Link>

        {spectacle ? (
          <>
            <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-3">
              {spectacle.title}
            </h1>
            <p className="font-body text-xs uppercase tracking-widest text-primary mb-10">
              {spectacle.audience}
            </p>

            <div className="aspect-[16/9] bg-muted/60 rounded-2xl flex items-center justify-center text-muted-foreground/50 mb-10">
              <ImageIcon className="w-16 h-16" />
            </div>

            <p className="font-body text-lg text-muted-foreground leading-relaxed">
              {spectacle.description}
            </p>
          </>
        ) : (
          <p className="font-body text-lg text-muted-foreground">Spectacle introuvable.</p>
        )}
      </div>
    </main>
  );
};

export default SpectacleDetail;
