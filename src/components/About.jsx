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
          I'm a professional with a strong educational background in commerce and expertise in front-end development.
            Having completed his FSC from Fazaiya College Karachi and an Associated Degree in Commerce from Karachi University,
            I have gained valuable experience as a Front End Developer specializing in React, Next.js, bootstrap, and Streamlit.
            Currently, I serve as a Fair Collection Manager at Greenline BRT Project Karachi, where I oversee cash handling, public dealing, team supervision, and equipment safety.
            With skills in Word, Excel, and PowerPoint, I am a versatile and dynamic professional. 💻
        </p>

      </motion.div>

    </section>
  );
}

export default About;