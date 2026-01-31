import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("darkMode"));
    if (saved) {
      setDarkMode(saved);
    }
  }, []);

  // Apply dark mode with smooth transition
  useEffect(() => {
    const body = document.body;
    
    // Add transition class for smooth animation
    body.classList.add("transition-mode");

    if (darkMode) {
      body.classList.add("bg-slate-900", "text-white");
      body.classList.remove("bg-white", "text-black");
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
      document.documentElement.style.colorScheme = "dark";
    } else {
      body.classList.add("bg-white", "text-black");
      body.classList.remove("bg-slate-900", "text-white");
      localStorage.removeItem("darkMode");
      document.documentElement.style.colorScheme = "light";
    }
    
    // Remove transition class after animation completes
    const timer = setTimeout(() => {
      body.classList.remove("transition-mode");
    }, 300);
    
    return () => clearTimeout(timer);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// custom hook (VERY IMPORTANT)
export const useDarkMode = () => useContext(DarkModeContext);
