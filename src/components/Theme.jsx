import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
     <div className="navbar">
    <button onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
    </div>
  );
};

export default Theme;