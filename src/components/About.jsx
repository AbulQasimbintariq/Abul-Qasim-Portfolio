import { motion } from "framer-motion";
import { fadeInUp } from "../utils/animations";

function About() {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">

      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-10">
          About Me
        </h2>

        <p className="max-w-4xl mx-auto text-center text-sm sm:text-base text-slate-400 leading-relaxed">
          Passionate Frontend Developer focused on building
          modern and user-friendly web applications. I specialize in
          creating responsive designs and optimized user experiences
          across all devices.
        </p>

      </motion.div>

    </section>
  );
}

export default About;