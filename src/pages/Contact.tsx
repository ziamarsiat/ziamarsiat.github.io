import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { usePageSeo, PAGES_FIXES } from "@/lib/seo";

const Contact = () => {
  usePageSeo(PAGES_FIXES.find((p) => p.chemin === "/contact")!);
  return (
    <main className="min-h-screen bg-background font-body">
      <div className="max-w-4xl mx-auto px-6 py-16">
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
          className="font-heading text-4xl md:text-5xl text-foreground mb-12"
        >
          Zia <em className="text-primary">Marsiat</em>
        </motion.h1>

        <div className="space-y-8">
          <motion.a
            href="mailto:ziamarsiat@gmail.com"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-5 hover:border-primary/40 transition-colors duration-300"
          >
            <Mail className="w-6 h-6 text-primary" />
            <span className="font-body text-foreground text-lg">ziamarsiat@gmail.com</span>
          </motion.a>

          <motion.a
            href="https://wa.me/32484784274"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 bg-card border border-border rounded-xl px-6 py-5 hover:border-primary/40 transition-colors duration-300"
          >
            <Phone className="w-6 h-6 text-primary" />
            <div>
              <span className="font-body text-foreground text-lg block">0032 484 78 42 74</span>
              <span className="font-body text-muted-foreground text-sm">SMS ou WhatsApp</span>
            </div>
          </motion.a>
        </div>
      </div>
    </main>
  );
};

export default Contact;
