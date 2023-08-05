import React, { useState, useRef, useEffect } from "react";
import { HiMenuAlt2, HiOutlineX } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [nav, setNav] = useState(true);
  const sidebarRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMenuItemClick = () => {
    setNav(true);
  };

  const closeSidebar = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setNav(true);
    }
  };

  useEffect(() => {
    if (!nav) {
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
        <h1 className="w-full font-bold  text-2xl md:text-3xl text-[#00df9a]">
          jaguar<span className="text-white italic">deva.</span>
        </h1>
        <ul className="hidden md:flex justify-end items-center w-full">
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
              About
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
        <div onClick={handleNav} className="block md:hidden z-50">
          {!nav ? <HiOutlineX size={25} /> : <HiMenuAlt2 size={25} />}
        </div>
        <aside
          ref={sidebarRef}
          className={
            !nav
              ? "fixed left-0 top-0 w-[75%] h-full bg-gray-600 ease-in-out duration-200 z-50"
              : "fixed left-[-100%]"
          }
        >
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
            <li className={`p-4 $`}>
              <Link to="/contact" onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </aside>
      </header>
    </div>
  );
}

export default Navbar;
