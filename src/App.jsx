import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      document.body.classList.add("light");
      document.documentElement.classList.remove("dark");
    } else {
      document.body.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;