---
name: publier
description: Publie le site — enregistre (commit) et envoie (push) tous les changements sur GitHub. À utiliser dès que Zia dit "publier", "publie", "mets en ligne", ou demande d'envoyer/sauvegarder sur GitHub.
---

# Publier

Objectif : en une seule étape simple, enregistrer tous les changements du site et les envoyer sur GitHub.

Quand ce skill est lancé, faire exactement ceci :

1. Regarder ce qui change : `git status --short`.
2. Tout ajouter : `git add -A`.
3. Créer un commit avec un message clair **en français** qui résume les changements. Terminer le message par la ligne :
   `Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>`
4. Envoyer sur GitHub : `git push` (la branche courante a déjà son upstream `origin`). Si aucun upstream n'est configuré : `git push -u origin <branche-courante>`.
5. Confirmer à Zia en une phrase simple, ex. « C'est publié sur GitHub ✅ ».

Notes :
- « Publier » vaut feu vert : pas besoin de redemander confirmation avant de committer/pousser.
- S'il n'y a rien à enregistrer, le dire simplement (ne rien forcer).
- Communiquer simplement, en français (Zia n'est pas technique).
- Ne pas inclure les fichiers temporaires (captures d'écran, modules) : ils sont déjà ignorés par Git.
