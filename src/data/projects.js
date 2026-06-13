import currencyImg from "../assets/react.svg";
import portfolioImg from "../assets/react.svg";
import ecommerceImg from "../assets/react.svg";

const projects = [
  {
    id: 1,
    title: "Currency Converter",
    description:
      "Real-time currency converter supporting 50+ currencies using API integration.",
    image: currencyImg,
    tech: ["React", "Vite", "Tailwind", "API"],
    github: "https://github.com/yourusername/currency-converter",
    demo: "https://currency-converter.vercel.app",
  },

  {
    id: 2,
    title: "Developer Portfolio",
    description:
      "Modern personal portfolio with animations, responsive design and professional UI.",
    image: portfolioImg,
    tech: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/yourusername/portfolio",
    demo: "https://portfolio.vercel.app",
  },

  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "Responsive shopping interface with cart functionality and modern UX.",
    image: ecommerceImg,
    tech: ["React", "Tailwind", "Context API"],
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce.vercel.app",
  },
];

export default projects;