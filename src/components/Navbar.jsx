import { useState, useRef, useEffect } from "react";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import propTypes from "prop-types";

function Navbar({ children }) {
  const location = useLocation();
  const [nav, setNav] = useState(false);
  const sidebarRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMenuItemClick = () => {
    setNav(false);
  };

  const closeSidebar = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", closeSidebar);
    } else {
      document.removeEventListener("mousedown", closeSidebar);
    }

    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, [nav]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="w-full z-20 relative">
      <header className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
        <Link to="/">
          <h1 className="w-full font-bold  text-2xl md:text-3xl lg:text-4xl text-[#00df9a]">
            jaguar<span className="text-white italic">deva.</span>
          </h1>
        </Link>

        <ul className="hidden lg:flex justify-end items-center w-full">
          <li>
            <Link
              to="/"
              className={`px-5 py-2  mr-5 ease-in-out cursor-pointer  font-normal  rounded-sm  ${
                isActive("/")
                  ? "text-[#000300] bg-[#00df9a]"
                  : "hover:text-[#000300]  hover:bg-[#00df9a]"
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`px-5 py-2 mr-5 ease-in-out cursor-pointer  font-normal  rounded-sm  ${
                isActive("/about")
                  ? "text-[#000300] bg-[#00df9a]"
                  : "hover:text-[#000300]  hover:bg-[#00df9a]"
              }`}
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="/project"
              className={`px-5 py-2  mr-5 ease-in-out cursor-pointer  font-normal  rounded-sm  ${
                isActive("/project")
                  ? "text-[#000300] bg-[#00df9a]"
                  : "hover:text-[#000300]  hover:bg-[#00df9a]"
              }`}
            >
              My Project
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`px-5 py-2  ease-in-out cursor-pointer  font-normal  rounded-sm  ${
                isActive("/contact")
                  ? "text-[#000300] bg-[#00df9a]"
                  : "hover:text-[#000300]  hover:bg-[#00df9a]"
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div onClick={handleNav} className="block lg:hidden z-50">
          {nav ? <HiOutlineX size={30} /> : <HiMenuAlt2 size={30} />}
        </div>
        <aside
          ref={sidebarRef}
          className={
            nav
              ? "fixed left-0 top-0 w-[80%] h-full bg-gray-600 transition-all ease-in-out duration-300 z-50"
              : "fixed left-[-100%] h-full top-0 w-[80%] transition-all ease-in-out duration-300 z-50"
          }
        >
          <div className="h-24 flex items-center px-4">
            <Link to="/" onClick={handleMenuItemClick}>
              <h1 className="w-full font-bold  text-2xl md:text-3xl lg:text-4xl text-[#00df9a] ">
                jaguar<span className="text-white italic">deva.</span>
              </h1>
            </Link>
          </div>

          <ul className="p-4 uppercase">
            <li className={`p-4 border-b border-gray-400 `}>
              <Link to="/" onClick={handleMenuItemClick}>
                Home
              </Link>
            </li>
            <li className={`p-4 border-b border-gray-400 `}>
              <Link to="/about" onClick={handleMenuItemClick}>
                About
              </Link>
            </li>
            <li className={`p-4 border-b border-gray-400 `}>
              <Link to="/project" onClick={handleMenuItemClick}>
                Portofolio
              </Link>
            </li>
            <li className={`p-4 border-b border-gray-400 `}>
              <Link to="/contact" onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </aside>
      </header>
      <main>{children}</main>
    </div>
  );
}

Navbar.propTypes = {
  children: propTypes.string.isRequired,
};

export default Navbar;
