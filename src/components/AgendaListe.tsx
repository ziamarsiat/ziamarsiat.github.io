import type { Evenement } from "@/data/agenda";

// ─────────────────────────────────────────────────────────────
//  LISTE DE L'AGENDA
//  Sur ordinateur et tablette : un tableau à trois colonnes
//  (Quand ? / Quoi ? / Où ?).
//  Sur téléphone : une fiche par date, empilées, pour que toutes
//  les informations soient lisibles sans faire glisser sur le côté.
// ─────────────────────────────────────────────────────────────
type Props = {
  evenements: Evenement[];
  messageVide: string;
  className?: string;
};

const Lieu = ({ e }: { e: Evenement }) => (
  <>
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
      <span className="text-foreground">
        {e.lieu ? ", " : ""}
        {e.ville}
      </span>
    )}
  </>
);

const AgendaListe = ({ evenements, messageVide, className = "" }: Props) => {
  return (
    <div className={`border border-border rounded-xl bg-background overflow-hidden ${className}`}>
      {evenements.length === 0 && (
        <p className="px-5 py-8 text-center text-muted-foreground italic">{messageVide}</p>
      )}

      {/* Téléphone : une fiche par date */}
      {evenements.length > 0 && (
        <ul className="md:hidden divide-y divide-border">
          {evenements.map((e, i) => (
            <li key={i} className="px-5 py-4">
              <p className="font-heading text-sm text-primary font-bold">{e.date}</p>
              <p className="font-medium text-foreground mt-1">{e.titre}</p>
              {(e.lieu || e.ville) && (
                <p className="text-sm mt-1">
                  <Lieu e={e} />
                </p>
              )}
            </li>
          ))}
        </ul>
      )}

      {/* Ordinateur et tablette : tableau */}
      {evenements.length > 0 && (
        <table className="hidden md:table w-full border-collapse text-left">
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
                  <Lieu e={e} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AgendaListe;
