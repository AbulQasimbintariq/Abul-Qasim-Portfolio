import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Tailwind",
  "Git",
  "GitHub",
  "Vite",
  "Python",
  "Streamlit",
  "Bootstrap",
  "Next.js",
  "Word",
  "Excel",
  "PowerPoint",
  "Obsidian",
  "Framer Motion",
  
];

function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6">

      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 sm:mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-5">

        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -5,
              scale: 1.05,
            }}
            className="bg-slate-800 px-4 sm:px-6 py-2 sm:py-4 text-sm sm:text-base rounded-lg cursor-pointer transition-all hover:scale-105 hover:shadow-lg"
          >
            {skill}
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;