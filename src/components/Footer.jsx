import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 px-4 sm:px-6 py-8 sm:py-12">

      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-5">
            <a
              href="https://github.com/AbulQasimbintariq"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-slate-300 hover:text-white transition"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/abul-qasim-bin-tariq-074a41323"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-300 hover:text-blue-400 transition"
            >
              <FaLinkedin className="text-2xl" />
            </a>
            <a
              href="https://vercel.com/abul-qasim-projects"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Vercel"
              className="text-slate-300 hover:text-white transition"
            >
              <SiVercel className="text-2xl" />
            </a>
          </div>
          <p className="text-sm sm:text-base text-slate-400">
            © 2026 Abul Qasim Bin Tariq. All Rights Reserved.
          </p>
          <p className="text-xs sm:text-sm text-slate-500 mt-4">
            Full Stack Developer | React | Next.js | Tailwind CSS | Python | Streamlit
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;