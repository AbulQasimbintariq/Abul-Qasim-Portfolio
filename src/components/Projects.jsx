import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-32 px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}

      <div className="text-center mb-16">
        <h2
          className="
          text-5xl
          font-bold
          mb-4
          bg-linear-to-r
          from-blue-400
          to-purple-500
          bg-clip-text
          text-transparent
        "
        >
          Featured Projects
        </h2>

        <p className="text-slate-400 max-w-2xl mx-auto">
          A collection of projects showcasing my frontend
          development skills and passion for creating
          exceptional user experiences.
        </p>
      </div>

      {/* Grid */}

      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{
              y: -10,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              group
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              shadow-lg
            "
          >
            {/* Image */}

            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-56
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:rotate-1
                "
              />
            </div>

            {/* Content */}

            <div className="p-6">
              <h3
                className="
                  text-2xl
                  font-bold
                  mb-3
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  text-slate-400
                  mb-5
                  leading-relaxed
                "
              >
                {project.description}
              </p>

              {/* Tech Stack */}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3
                      py-1
                      rounded-full
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-3
                    rounded-xl
                    border
                    border-slate-700
                    hover:border-blue-500
                    transition
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-3
                    rounded-xl
                    bg-linear-to-r
                    from-blue-500
                    to-purple-600
                    hover:scale-105
                    transition
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;