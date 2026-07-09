import { useEffect, useState } from "react";

// ─────────────────────────────────────────────────────────────
//  AGENDA — branché sur votre tableau Google Sheets
//
//  👉 Pour connecter votre tableau :
//     1. Dans Google Sheets, nommez les colonnes (1re ligne) :
//        date | titre | lieu | lien
//     2. Menu « Fichier » → « Partager » → « Publier sur le web »
//        → choisissez « Valeurs séparées par des virgules (.csv) »
//        → cliquez « Publier ».
//     3. Copiez l'adresse qui apparaît et collez-la ci-dessous,
//        entre les guillemets de SHEET_CSV_URL.
//
//  Tant que SHEET_CSV_URL est vide (""), le site affiche les
//  quelques dates d'exemple plus bas — rien ne casse.
// ─────────────────────────────────────────────────────────────
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSfDnTAKnDqOE68mK9IJWZZtCue_4gW4LsbnB728EsUxUZbKUvpjdMTnYwQwZ2cUlNDK_FUcUkivuXH/pub?output=csv";

export type Evenement = { date: string; titre: string; lieu: string; ville: string; lien: string };

// Dates d'exemple affichées tant que le tableau n'est pas connecté.
const EVENEMENTS_EXEMPLE: Evenement[] = [
  { date: "14 septembre 2026", titre: "Contes sous les étoiles", lieu: "Théâtre de la Vie", ville: "Bruxelles", lien: "https://www.theatredelavie.be" },
  { date: "3 octobre 2026", titre: "Balade musicale en forêt", lieu: "Forêt de Soignes", ville: "", lien: "https://maps.google.com/?q=Forêt+de+Soignes" },
  { date: "22 novembre 2026", titre: "Atelier création nature", lieu: "Centre culturel de Wavre", ville: "", lien: "https://www.ccwavre.be" },
  { date: "13 décembre 2026", titre: "Récital de Noël", lieu: "Église Saint-Loup", ville: "Namur", lien: "" },
];

// Petit lecteur de fichier CSV (gère les virgules à l'intérieur des guillemets).
function lireCSV(texte: string): string[][] {
  const lignes: string[][] = [];
  let ligne: string[] = [];
  let champ = "";
  let dansGuillemets = false;

  for (let i = 0; i < texte.length; i++) {
    const c = texte[i];
    if (dansGuillemets) {
      if (c === '"') {
        if (texte[i + 1] === '"') { champ += '"'; i++; }
        else dansGuillemets = false;
      } else {
        champ += c;
      }
    } else if (c === '"') {
      dansGuillemets = true;
    } else if (c === ",") {
      ligne.push(champ); champ = "";
    } else if (c === "\n") {
      ligne.push(champ); lignes.push(ligne); ligne = []; champ = "";
    } else if (c !== "\r") {
      champ += c;
    }
  }
  if (champ !== "" || ligne.length > 0) { ligne.push(champ); lignes.push(ligne); }
  return lignes;
}

// Transforme un lien du tableau en adresse cliquable :
//  - un site internet reste tel quel (https://…)
//  - une adresse e-mail devient un lien « mailto: » (ouvre la messagerie)
//  - un simple nom de domaine reçoit « https:// » devant
function normaliserLien(brut: string): string {
  const lien = brut.trim();
  if (lien === "") return "";
  if (/^https?:\/\//i.test(lien)) return lien;
  if (/^mailto:/i.test(lien)) return lien;
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lien)) return `mailto:${lien}`;
  return `https://${lien}`;
}

function convertir(texte: string): Evenement[] {
  const lignes = lireCSV(texte).filter((l) => l.some((c) => c.trim() !== ""));
  if (lignes.length < 2) return [];

  const entetes = lignes[0].map((h) => h.trim().toLowerCase());
  const col = (nom: string) => entetes.indexOf(nom);
  // Le tableau a deux colonnes « lieu » : la 1re = l'endroit, la 2e = la ville.
  const colsLieu = entetes
    .map((h, i) => (h === "lieu" ? i : -1))
    .filter((i) => i !== -1);
  const iLieu = colsLieu[0] ?? -1;
  const iDate = col("date");
  const iTitre = col("titre");
  const iLien = col("lien");

  return lignes
    .slice(1)
    .map((l) => ({
      date: (l[iDate] ?? "").trim(),
      titre: (l[iTitre] ?? "").trim(),
      lieu: (l[iLieu] ?? "").trim(),
      // Les colonnes « lieu » suivantes (la ville) — affichées en noir, sans lien.
      ville: colsLieu
        .slice(1)
        .map((i) => (l[i] ?? "").trim())
        .filter((v) => v !== "")
        .join(", "),
      lien: normaliserLien(l[iLien] ?? ""),
    }))
    .filter((e) => e.date || e.titre || e.lieu);
}

type EtatAgenda = { evenements: Evenement[]; chargement: boolean };

// Hook utilisé par la page d'accueil et la page Agenda.
export function useAgenda(): EtatAgenda {
  const [evenements, setEvenements] = useState<Evenement[]>(EVENEMENTS_EXEMPLE);
  const [chargement, setChargement] = useState(SHEET_CSV_URL !== "");

  useEffect(() => {
    if (!SHEET_CSV_URL) return;
    let annule = false;
    fetch(SHEET_CSV_URL)
      .then((r) => r.text())
      .then((texte) => {
        if (annule) return;
        const data = convertir(texte);
        if (data.length > 0) setEvenements(data);
      })
      .catch(() => {
        /* en cas de souci réseau, on garde les dates d'exemple */
      })
      .finally(() => {
        if (!annule) setChargement(false);
      });
    return () => { annule = true; };
  }, []);

  return { evenements, chargement };
}
