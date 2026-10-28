import OrderByYourselfImg from "../assets/OrderByYourself.png";
import AI_Job_PortalImg from "../assets/AI_Job_Img.png";
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
    title: "OrderByYourself",
    description:
      "Real-time currency converter supporting 50+ currencies using API integration.",
    image: OrderByYourselfImg,
    tech: ["Next.js", "Typscript", "Tailwind Css", "API","MongoDB"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://order-by-yourself-frontend.vercel.app/",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 2,
    title: "AI_Job_Portal",
    description:
      "Modern personal portfolio with animations, responsive design and professional UI.",
    image: AI_Job_PortalImg,
    tech: ["Next.js", "Tailwind Css", "Typscript", "API","MongoDB"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://ai-job-portalfrontend.vercel.app/",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 3,
    title: "E-Commerce Store",
    description:
      "Responsive shopping interface with cart functionality and modern UX.",
    image: ecommerceImg,
    tech: ["React", "Tailwind", "Context API"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://ecommerce.vercel.app",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 4,
    title: "Task Management App",
    description:
      "Full-featured task management system with drag-and-drop, filters, and local storage.",
    image: taskManagementImg,
    tech: ["React", "Tailwind", "Local Storage"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://task-manager.vercel.app",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 5,
    title: "Brt Dashboard",
    description:
      "Real-time weather application with location search and detailed forecasts.",
    image: brtDashboardImg,
    tech: ["React", "OpenWeather API", "Chart.js", "Tailwind"],
    github: "https://github.com/AbulQasimbintariq",
      demo: "https://brt-dashboard.vercel.app",
      vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 6,
    title: "Movie Finder",
    description:
      "Interactive movie search engine with ratings, reviews, and recommendation system.",
    image: movieFinderImg,
    tech: ["React", "TMDB API", "Axios", "Tailwind"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://movie-finder.vercel.app",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 7,
    title: "Fitness Tracker",
    description:
      "Complete fitness tracking app with workout logs, progress charts, and goal setting.",
    image: fitnessTrackerImg,
    tech: ["React", "Firebase", "Recharts", "Tailwind"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://fitness-tracker.vercel.app",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 8,
    title: "Chat Application",
    description:
      "Real-time messaging platform with user authentication and instant notifications.",
    image: chatAppImg,
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://chat-app.vercel.app",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 9,
    title: "Blog Platform",
    description:
      "Full-stack blogging platform with markdown support, comments, and user authentication.",
    image: blogPlatformImg,
    tech: ["React", "Express.js", "PostgreSQL", "JWT"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://blog-platform.vercel.app",
    vercel: "https://vercel.com/abul-qasim-projects",
  },

  {
    id: 10,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard displaying social media metrics with real-time data visualization.",
    image: socialMediaImg,
    tech: ["React", "D3.js", "REST API", "Tailwind"],
    github: "https://github.com/AbulQasimbintariq",
    demo: "https://social-dashboard.vercel.app",
    vercel: "https://vercel.com/abul-qasim-projects",
  },
];

export default projects;