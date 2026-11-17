import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { usePageSeo, PAGES_FIXES } from "@/lib/seo";

const LettreInformation = () => {
  usePageSeo(PAGES_FIXES.find((p) => p.chemin === "/lettre-information")!);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    toast({ title: "Merci !", description: "Vous êtes inscrit à la lettre d'information." });
  };

  return (
    <main className="min-h-screen bg-background font-body">
      <div className="max-w-xl mx-auto px-6 py-16">
        <Link
          to="/"
          className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-4xl md:text-5xl text-foreground mb-4"
        >
          Lettre d'information
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground text-lg mb-10 leading-relaxed"
        >
          Recevez des nouvelles de mes projets, spectacles et ateliers directement dans votre boîte mail.
        </motion.p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card border border-primary/30 rounded-xl px-6 py-8 text-center"
          >
            <Mail className="w-10 h-10 text-primary mx-auto mb-4" />
            <p className="font-heading text-xl text-foreground mb-2">Merci pour votre inscription !</p>
            <p className="font-body text-muted-foreground text-sm">
              Vous recevrez bientôt des nouvelles.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Input
              type="email"
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 rounded-full px-6 h-12"
            />
            <Button type="submit" className="rounded-full h-12 px-8">
              S'abonner
            </Button>
          </motion.form>
        )}
      </div>
    </main>
  );
};

export default LettreInformation;
