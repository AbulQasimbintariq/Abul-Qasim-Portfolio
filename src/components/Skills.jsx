import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Git",
  "GitHub",
  "Vite",
];

function Skills() {
  return (
    <section id="skills" className="py-24">

      <h2 className="text-center text-4xl font-bold mb-10">
        Skills
      </h2>

      <div className="flex flex-wrap justify-center gap-5">

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
            className="bg-slate-800 px-6 py-4 rounded-lg cursor-pointer"
          >
            {skill}
          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default Skills;