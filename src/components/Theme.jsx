import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    //  <div className="navbar">
    <button onClick={toggleTheme} className="theme-switcher">
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
    // </div>
  );
};

export default Theme;