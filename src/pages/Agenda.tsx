import { Link } from "react-router-dom";
import { useAgenda } from "@/data/agenda";

const Agenda = () => {
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

          {evenements.length === 0 ? (
            <div className="border border-border rounded-xl p-8 text-center">
              <p className="font-body text-muted-foreground italic">
                Aucune date programmée pour le moment. Revenez bientôt !
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto border border-border rounded-xl">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border bg-muted/40">
                    <th className="font-heading text-base text-primary font-bold px-5 py-4 whitespace-nowrap">
                      Quand ?
                    </th>
                    <th className="font-heading text-base text-primary font-bold px-5 py-4">
                      Quoi ?
                    </th>
                    <th className="font-heading text-base text-primary font-bold px-5 py-4">
                      Où ?
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {evenements.map((e, i) => (
                    <tr
                      key={i}
                      className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors"
                    >
                      <td className="font-body text-foreground px-5 py-4 align-top whitespace-nowrap">
                        {e.date}
                      </td>
                      <td className="font-body text-foreground px-5 py-4 align-top font-medium">
                        {e.titre}
                      </td>
                      <td className="font-body px-5 py-4 align-top">
                        {e.lien ? (
                          <a
                            href={e.lien}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline underline-offset-2 hover:text-primary/70 transition-colors"
                          >
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
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Agenda;
