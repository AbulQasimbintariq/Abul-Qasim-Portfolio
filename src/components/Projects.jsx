import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiVercel } from "react-icons/si";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Heading */}

      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <h2
          className="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
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

        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
          A collection of projects showcasing my frontend
          development skills and passion for creating
          exceptional user experiences.
        </p>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
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
                loading="lazy"
                decoding="async"
                fetchpriority="low"
                className="
                w-full
                h-40
                sm:h-48
                md:h-56
                object-cover
                transition-all
                duration-700
                group-hover:scale-110
                group-hover:rotate-1
                "
              />
            </div>

            {/* Content */}

            <div className="p-4 sm:p-5 md:p-6">
              <h3
                className="
                  text-lg
                  sm:text-xl
                  md:text-2xl
                  font-bold
                  mb-3
                "
              >
                {project.title}
              </h3>

              <p
                className="
                  text-xs
                  sm:text-sm
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
                      px-2
                      sm:px-3
                      py-1
                      rounded-full
                      bg-blue-500/10
                      border
                      border-blue-500/20
                      text-xs
                      sm:text-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} GitHub repository`}
                  className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-2
                    sm:py-3
                    px-3
                    sm:px-4
                    text-sm
                    sm:text-base
                    rounded-xl
                    border
                    border-slate-700
                    hover:border-blue-500
                    hover:shadow-lg
                    transition
                    min-h-10
                  "
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open live demo of ${project.title}`}
                  className="
                    flex-1
                    flex
                    justify-center
                    items-center
                    gap-2
                    py-2
                    sm:py-3
                    px-3
                    sm:px-4
                    text-sm
                    sm:text-base
                    rounded-xl
                    bg-linear-to-r
                    from-blue-500
                    to-purple-600
                    hover:scale-105
                    hover:shadow-lg
                    transition
                    min-h-10
                  "
                >
                  <FaExternalLinkAlt />
                  Demo
                </a>

                {project.vercel && (
                  <a
                    href={project.vercel}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open Vercel deployment of ${project.title}`}
                    className="
                      flex-1
                    flex
                    justify-center
                    items-center
                      gap-2
                      py-2
                      sm:py-3
                      px-3
                      sm:px-4
                      text-sm
                      sm:text-base
                      rounded-xl
                      bg-slate-900
                      text-white
                      border
                      border-white/10
                      hover:brightness-110
                      hover:shadow-lg
                      transition
                      min-h-10
                    "
                  >
                    <SiVercel />
                    Vercel
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;