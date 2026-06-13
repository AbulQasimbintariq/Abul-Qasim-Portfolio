import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

function About() {
  return (
    <section id="about" className="py-24 px-6">

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-center mb-10">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto text-center text-slate-400">
          Passionate Frontend Developer focused on building
          modern and user-friendly web applications.
        </p>

      </motion.div>

    </section>
  );
}

export default About;