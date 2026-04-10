



// const ThemeProvider = ({ children }) => {
 
//   const [theme, setTheme] = useState(
//     localStorage.getItem("theme") || "light"
//   );


//   const toggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

  
//   useEffect(() => {
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       <div className={theme}>
//         {children}
//       </div>
//     </ThemeContext.Provider>
//   );
// };

// export default ThemeProvider;

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