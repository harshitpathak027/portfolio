import React, { useState } from "react";
import { useDarkMode } from "./DarkModeContext";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
const { darkMode, setDarkMode } = useDarkMode( );
  return (
    <>
    <nav
      className="
        fixed left-0 right-0 z-50 
        top-0 md:bottom-auto md:top-0
        flex items-center justify-between
        px-6 py-3 md:py-3
        shadow-md
        gap-4 md:gap-0
        bg-white/10 backdrop-blur-lg
        border-b border-white/30
      "
    >
      {/* Logo */}
      <div className="text-2xl hidden md:flex text-red-700">
        Harshit Pathak
      </div>

 
      <div className="cursor-pointer" onClick={() => setDarkMode(!darkMode)}>
        {
            darkMode ?
        
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="#ffffff" viewBox="0 0 24 24" >
<path d="M6.99 12c0 2.76 2.25 5.01 5.01 5.01s5.01-2.25 5.01-5.01S14.76 6.99 12 6.99 6.99 9.24 6.99 12M12 8.99c1.66 0 3.01 1.35 3.01 3.01s-1.35 3.01-3.01 3.01S8.99 13.66 8.99 12 10.34 8.99 12 8.99M13 19h-2v2h2zM11 5h2V3h-2zm-8 6h2v2H3zm16 0h2v2h-2zM4.93 17.66l.71.7.7.71.71-.71.71-.7-.71-.71-.71-.71-.7.71zM17.66 4.93l-.71.71-.71.7.71.71.71.71.7-.71.71-.71-.71-.7zM4.93 6.34l.71.71.7.71.71-.71.71-.71-.71-.7-.71-.71-.7.71zm12.73 12.73.7-.71.71-.7-.71-.71-.7-.71-.71.71-.71.71.71.7z"></path>
</svg>
:
<svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24"  
fill="#000000" viewBox="0 0 24 24" >
<path d="M20.71 13.51c-.78.23-1.58.35-2.38.35-4.52 0-8.2-3.68-8.2-8.2 0-.8.12-1.6.35-2.38.11-.35.01-.74-.25-1s-.64-.36-1-.25A10.17 10.17 0 0 0 2 11.8C2 17.42 6.57 22 12.2 22c4.53 0 8.45-2.91 9.76-7.24.11-.35.01-.74-.25-1s-.64-.36-1-.25M12.2 20C7.68 20 4 16.32 4 11.8a8.15 8.15 0 0 1 4.18-7.15c-.03.34-.05.68-.05 1.02 0 5.62 4.57 10.2 10.2 10.2.34 0 .68-.02 1.02-.05C17.93 18.38 15.23 20 12.2 20M16 8l.94-2.06L19 5l-2.06-.94L16 2l-.94 2.06L13 5l2.06.94zM20.25 7.5l-.55 1.2-1.2.55 1.2.55.55 1.2.55-1.2 1.2-.55-1.2-.55z"></path>

</svg>
}
      </div>
      {/* Mobile Menu Button */}
 
    </nav>
     <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 ">
        <div
          className="
            flex items-center gap-10
            px-6 py-3
            rounded-2xl
            shadow-xl
            backdrop-blur-xl
            border border-white/20
            bg-white/90 dark:bg-black/25
          "
        >
           <a href="#home" className="dock-item">
      <span className="dock-bounce">🏠</span>
    </a>

    <a href="#about" className="dock-item">
      <span className="dock-bounce">👤</span>
    </a>

    <a href="#skills" className="dock-item">
      <span className="dock-bounce">🛠</span>
    </a>

    <a href="#qualification" className="dock-item">
      <span className="dock-bounce">🎓</span>
    </a>

    <a href="#contact" className="dock-item">
      <span className="dock-bounce">✉️</span>
    </a>
        </div>
      </div>
      </>
  );
};

export default NavBar;
