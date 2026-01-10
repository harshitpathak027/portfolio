const NavBar = () => {
  return (
    <nav className=" flex  justify-around navbar sticky top-0 bg-white shadow-md ">
        <div className="flex text-center align-middle items-center text-2xl text-red-700">Harshit Pathak</div>
      <ul className="navlist">
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#projects">Projects</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
export default NavBar;