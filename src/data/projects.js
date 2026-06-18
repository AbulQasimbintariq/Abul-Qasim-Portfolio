import currencyImg from "../assets/currency-converter.svg";
import portfolioImg from "../assets/developer-portfolio.svg";
import ecommerceImg from "../assets/e-commerce-store.svg";
import taskManagementImg from "../assets/task-management-app.svg";
import brtDashboardImg from "../assets/brt-dashboard.svg";
import movieFinderImg from "../assets/movie-finder.svg";
import fitnessTrackerImg from "../assets/fitness-tracker.svg";
import chatAppImg from "../assets/chat-application.svg";
import blogPlatformImg from "../assets/blog-platform.svg";
import socialMediaImg from "../assets/social-media-dashboard.svg";

const projects = [
  {
    id: 1,
    title: "Currency Converter",
    description:
      "Real-time currency converter supporting 50+ currencies using API integration.",
    image: currencyImg,
    tech: ["React", "Vite", "Tailwind", "API"],
    github: "https://github.com/AbulQasimbintariq/React-Currency-Converter",
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
    vercel: "https://abul-qasim-bin-tariq.vercel.app/",
  },

  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "Responsive shopping interface with cart functionality and modern UX.",
    image: ecommerceImg,
    tech: ["React", "Tailwind", "Context API"],
    github: "https://github.com/AbulQasimbintariq/bootstrap-P1",
    demo: "https://ecommerce.vercel.app",
    vercel: "https://abul-qasim-bin-tariq.vercel.app/",
  },

  {
    id: 4,
    title: "Task Management App",
    description:
      "Full-featured task management system with drag-and-drop, filters, and local storage.",
    image: taskManagementImg,
    tech: ["React", "Tailwind", "Local Storage"],
    github: "https://github.com/AbulQasimbintariq/React-OrderBYSelf",
    demo: "https://task-manager.vercel.app",
    vercel: "https://react-order-by-self.vercel.app/#",
  },

  {
    id: 5,
    title: "Brt Dashboard",
    description:
      "Real-time weather application with location search and detailed forecasts.",
    image: brtDashboardImg,
    tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com/AbulQasimbintariq/Brt-Dashboard",
      demo: "https://brt-dashboard.vercel.app",
      vercel: "https://brt-dashboard.vercel.app",
  },

  {
    id: 6,
    title: "Movie Finder",
    description:
      "Interactive movie search engine with ratings, reviews, and recommendation system.",
    image: movieFinderImg,
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
    image: fitnessTrackerImg,
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
    image: chatAppImg,
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
    image: blogPlatformImg,
    tech: ["React", "Express.js", "PostgreSQL", "JWT"],
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-platform.vercel.app",
    vercel: "https://hack2-2.vercel.app/",
  },

  {
    id: 10,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard displaying social media metrics with real-time data visualization.",
    image: socialMediaImg,
    tech: ["React", "D3.js", "REST API", "Tailwind"],
    github: "https://github.com/yourusername/social-dashboard",
    demo: "https://social-dashboard.vercel.app",
    vercel: "https://social-dashboard.vercel.app",
  },
];

export default projects;