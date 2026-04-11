
 import { useState} from "react";
  import { ThemeContext } from "./ThemeContext.js";


const ThemeProvider = ({children})=> {
  const [theme, setTheme] = useState("light")
  function toggleTheme(){
   setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  return(<div>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
     
      {children}
     
    </ThemeContext.Provider>

  </div>)
}

export default ThemeProvider