import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
    
  );
};

export default Theme;