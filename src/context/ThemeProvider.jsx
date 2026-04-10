import { useState, useEffect } from "react";
import { ThemeContext } from "./ThemeContext.js";

const ThemeProvider = ({ children }) => {
  // localStorage se initial value lo
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  // toggle function
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // theme save karo
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;