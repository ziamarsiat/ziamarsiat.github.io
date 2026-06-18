import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen flex flex-col justify-center py-24 px-6 snap-start">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-5xl text-foreground mb-6"
        >
          Tissons <em className="text-primary">ensemble</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-muted-foreground text-lg mb-8 leading-relaxed"
        >
          Selon les projets et les demandes, les trois disciplines sont distinctes ou croisées. 
          N'hésitez pas à me contacter pour imaginer un projet sur mesure.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="inline-block font-body text-sm uppercase tracking-widest bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-colors duration-300"
          >
            Me contacter
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          className="mt-4"
        >
          <Link
            to="/agenda"
            className="inline-block font-body text-sm uppercase tracking-widest border border-border text-foreground px-8 py-4 rounded-full hover:border-primary/40 transition-colors duration-300"
          >
            Agenda
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-4"
        >
          <Link
            to="/biographie"
            className="inline-block font-body text-sm uppercase tracking-widest border border-border text-foreground px-8 py-4 rounded-full hover:border-primary/40 transition-colors duration-300"
          >
            Biographie
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-4"
        >
          <Link
            to="/lettre-information"
            className="inline-block font-body text-sm uppercase tracking-widest border border-border text-foreground px-8 py-4 rounded-full hover:border-primary/40 transition-colors duration-300"
          >
            Je m'abonne à la lettre d'information !
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
