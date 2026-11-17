import { Link } from "react-router-dom";
import AgendaListe from "@/components/AgendaListe";
import { useAgenda, separerAgenda } from "@/data/agenda";
import { usePageSeo, PAGES_FIXES } from "@/lib/seo";

const DatesPassees = () => {
  usePageSeo(PAGES_FIXES.find((p) => p.chemin === "/agenda/passees")!);
  const { evenements } = useAgenda();
  const { passees } = separerAgenda(evenements);

  return (
    <main className="min-h-screen bg-background font-body">
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/#agenda"
            className="font-body text-sm uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
          >
            ← Retour à l'agenda
          </Link>

          <h1 className="font-heading text-4xl md:text-6xl text-foreground mt-8 mb-8">
            Dates <em className="text-primary">passées</em>
          </h1>

          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-12">
            Retrouvez ici les rendez-vous, spectacles et ateliers déjà passés.
          </p>

          <AgendaListe evenements={passees} messageVide="Aucune date passée pour le moment." />
        </div>
      </section>
    </main>
  );
};

export default DatesPassees;
