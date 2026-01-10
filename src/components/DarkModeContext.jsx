import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
// const { darkMode, setDarkMode } = useDarkMode();

  // optional: persist in localStorage
  useEffect(() => {
const saved= JSON.parse(localStorage.getItem("darkMode"));
    if (saved) {
      setDarkMode(saved);
    }
  }, []);


  useEffect(() => {
    const body = document.body;

    if (darkMode) {
      body.classList.add("bg-slate-900", "text-white");
localStorage.setItem("darkMode", JSON.stringify(darkMode));
      body.classList.remove("bg-white", "text-black");
    } else {
      body.classList.add("bg-white", "text-black");
      localStorage.removeItem("darkMode");
      body.classList.remove("bg-slate-900", "text-white");
    }
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// custom hook (VERY IMPORTANT)
export const useDarkMode = () => useContext(DarkModeContext);
