import { useState, useEffect } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setIsDark(savedTheme === "dark");
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;

    setIsDark(newTheme);

    document.documentElement.classList.toggle("dark", newTheme);

    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="
          flex
          items-center
          justify-between
          rounded-2xl
          border border-white/10
          bg-white/5
          backdrop-blur-xl
          px-4 sm:px-6
          py-3 sm:py-4
          shadow-lg
        "
        >
          {/* Logo */}
          <h1
            className="
            text-lg
            sm:text-xl
            md:text-2xl
            font-bold
            bg-linear-to-r
            from-blue-400
            to-purple-500
            bg-clip-text
            text-transparent
          "
          >
            Abul Qasim Bin Tariq
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  aria-label={`Navigate to ${link.name}`}
                  className="
                    text-sm
                    text-slate-300
                    relative
                    transition-all
                    duration-300
                    hover:text-white
                    after:absolute
                    after:-bottom-1
                    after:left-0
                    after:h-0.5
                    after:w-0
                    after:bg-blue-500
                    after:transition-all
                    hover:after:w-full
                  "
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              title="Toggle Theme"
              className="
                hidden md:flex
                items-center
                justify-center
                w-10 h-10
                rounded-xl
                border border-white/20
                hover:border-blue-500/50
                hover:bg-white/5
                transition
              "
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-3xl"
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="
                md:hidden
                mt-3
                rounded-2xl
                border border-white/10
                bg-slate-900/90
                backdrop-blur-xl
                overflow-hidden
              "
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    block
                    px-6
                    py-4
                    text-base
                    border-b border-white/10
                    hover:bg-white/5
                    transition
                  "
                >
                  {link.name}
                </a>
              ))}

              <button
                onClick={() => {
                  toggleTheme();
                  setIsOpen(false);
                }}
                className="
                  w-full
                  py-4
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:bg-white/5
                  transition
                "
              >
                {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                {isDark ? "Light Mode" : "Dark Mode"}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;