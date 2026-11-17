import { Link } from "react-router-dom";
import AgendaListe from "@/components/AgendaListe";
import { useAgenda } from "@/data/agenda";
import { usePageSeo, PAGES_FIXES } from "@/lib/seo";

const Agenda = () => {
  usePageSeo(PAGES_FIXES.find((p) => p.chemin === "/agenda")!);
  const { evenements } = useAgenda();

  return (
    <main className="min-h-screen bg-background font-body">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/"
            className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            ← Retour
          </Link>

          <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-8 mb-8">
            <em className="text-primary">Agenda</em>
          </h1>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
            Retrouvez ici les prochaines dates de spectacles, ateliers et rencontres.
          </p>

          <AgendaListe evenements={evenements} messageVide="Aucune date programmée pour le moment. Revenez bientôt !" />
        </div>
      </section>
    </main>
  );
};

export default Agenda;
