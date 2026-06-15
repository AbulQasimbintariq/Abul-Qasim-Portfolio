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
    vercel: "https://currency-converter.vercel.app",
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
    vercel: "https://portfolio.vercel.app",
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
    vercel: "https://ecommerce.vercel.app",
  },

  {
    id: 4,
    title: "Task Management App",
    description:
      "Full-featured task management system with drag-and-drop, filters, and local storage.",
    image: ecommerceImg,
    tech: ["React", "Tailwind", "Local Storage"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager.vercel.app",
    vercel: "https://task-manager.vercel.app",
  },

  {
    id: 5,
    title: "Weather Dashboard",
    description:
      "Real-time weather application with location search and detailed forecasts.",
    image: ecommerceImg,
    tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-dashboard.vercel.app",
    vercel: "https://weather-dashboard.vercel.app",
  },

  {
    id: 6,
    title: "Movie Finder",
    description:
      "Interactive movie search engine with ratings, reviews, and recommendation system.",
    image: ecommerceImg,
    tech: ["React", "TMDB API", "Axios", "Tailwind"],
    github: "https://github.com/yourusername/movie-finder",
    demo: "https://movie-finder.vercel.app",
    vercel: "https://movie-finder.vercel.app",
  },

  {
    id: 7,
    title: "Fitness Tracker",
    description:
      "Complete fitness tracking app with workout logs, progress charts, and goal setting.",
    image: ecommerceImg,
    tech: ["React", "Firebase", "Recharts", "Tailwind"],
    github: "https://github.com/yourusername/fitness-tracker",
    demo: "https://fitness-tracker.vercel.app",
    vercel: "https://fitness-tracker.vercel.app",
  },

  {
    id: 8,
    title: "Chat Application",
    description:
      "Real-time messaging platform with user authentication and instant notifications.",
    image: ecommerceImg,
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app.vercel.app",
    vercel: "https://chat-app.vercel.app",
  },

  {
    id: 9,
    title: "Blog Platform",
    description:
      "Full-stack blogging platform with markdown support, comments, and user authentication.",
    image: ecommerceImg,
    tech: ["React", "Express.js", "PostgreSQL", "JWT"],
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-platform.vercel.app",
    vercel: "https://blog-platform.vercel.app",
  },

  {
    id: 10,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard displaying social media metrics with real-time data visualization.",
    image: ecommerceImg,
    tech: ["React", "D3.js", "REST API", "Tailwind"],
    github: "https://github.com/yourusername/social-dashboard",
    demo: "https://social-dashboard.vercel.app",
    vercel: "https://social-dashboard.vercel.app",
  },
];

export default projects;