import React, { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav
      className="
        fixed left-0 right-0 z-50
        top-0 md:bottom-auto md:top-0
        flex items-center justify-between
        px-6 py-0 md:py-3
        shadow-md
        bg-white/10 backdrop-blur-lg
        border-b border-white/30
      "
    >
      {/* Logo */}
      <div className="text-2xl hidden md:flex text-red-700">
        Harshit Pathak
      </div>

      {/* NAV ITEMS */}
  <ul
  className={`
    md:static
    flex-row
    gap-4 md:gap-6
    text-center
    md:p-0
flex
    transition-all duration-300 ease-out

    ${menuOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 translate-y-4 pointer-events-none"}

    md:flex md:opacity-100 md:translate-y-0 md:pointer-events-auto
  `}
>

        <li className="nav-item">
          <a href="#home" >Home</a>
        </li>
        <li className="nav-item">
          <a href="#about" >About</a>
        </li>
        <li className="nav-item">
          <a href="#skills" >Skills</a>
        </li>
        <li className="nav-item">
          <a href="#contact" >Contact</a>
        </li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="ml-auto right-0 md:hidden  text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
};

export default NavBar;
