import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import profile from "../assets/hero.png";

function Hero() {
  return (
    <section
      className="
      min-h-screen
      flex
      items-center
      justify-center
      px-4
      sm:px-6
      md:px-8
      relative
      overflow-hidden
      pt-20
    "
    >
      {/* Background Glow */}

      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />

      {/* Content */}

      <div
        className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-12
        items-center
      "
      >
        {/* LEFT SIDE */}

        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="
              inline-flex
              items-center
              gap-2
              bg-green-500/10
              border
              border-green-500/20
              px-4
              py-2
              rounded-full
              mb-6
            "
          >
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>

            <span className="text-green-400 text-sm">
              Available for Work
            </span>
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: -40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            className="
              text-3xl
              sm:text-4xl
              md:text-6xl
              lg:text-7xl
              font-bold
              leading-tight
            "
          >
            Hi, I'm{" "}
            <span
              className="
                bg-linear-to-r
                from-blue-400
                via-purple-500
                to-pink-500
                bg-clip-text
                text-transparent
              "
            >
              Abul Qasim Bin Tariq
            </span>
          </motion.h1>

          <motion.h2
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
              mt-4
              text-lg
              sm:text-xl
              md:text-2xl
              text-slate-300
            "
          >
            React Frontend Developer
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
            className="
              mt-6
              text-sm
              sm:text-base
              text-slate-400
              max-w-xl
              leading-relaxed
            "
          >
            I build modern, fast and responsive web applications
            using React, JavaScript, Tailwind CSS and modern frontend
            technologies.
          </motion.p>

          {/* Buttons */}

          <div className="flex flex-col sm:flex-row gap-4 mt-8 flex-wrap">
            <a
              href="#projects"
              className="
                px-4
                sm:px-6
                py-3
                sm:py-3
                text-sm
                sm:text-base
                rounded-xl
                bg-linear-to-r
                from-blue-500
                to-purple-600
                hover:scale-105
                hover:shadow-lg
                transition
                inline-flex
                items-center
                justify-center
                min-h-12
              "
            >
              View Projects
            </a>

            <a
              href="/resume_ats.pdf"
              download
              className="
                px-4
                sm:px-6
                py-3
                sm:py-3
                text-sm
                sm:text-base
                rounded-xl
                border
                border-slate-700
                hover:border-blue-500
                transition
                inline-flex
                items-center
                justify-center
              "
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}

          <div className="flex gap-5 mt-8 text-2xl">
            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center">
          {/* Floating Tech Icons */}

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
            }}
            className="
              absolute
              top-10
              left-10
              text-orange-500
              text-5xl
            "
          >
            <FaHtml5 />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
            className="
              absolute
              bottom-10
              left-0
              text-blue-500
              text-5xl
            "
          >
            <FaCss3Alt />
          </motion.div>

          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
            }}
            className="
              absolute
              top-20
              right-10
              text-yellow-400
              text-5xl
            "
          >
            <FaJs />
          </motion.div>

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 15,
              ease: "linear",
            }}
            className="
              absolute
              bottom-20
              right-0
              text-cyan-400
              text-6xl
            "
          >
            <FaReact />
          </motion.div>

          {/* Profile Image */}

          <motion.img
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            src={profile}
            alt="Umair Ali"
            className="
              w-80
              h-80
              md:w-96
              md:h-96
              object-cover
              rounded-full
              border-4
              border-blue-500/40
              shadow-2xl
            "
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;