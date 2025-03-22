import React, { useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <>
      <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <a href="#home" className="text-3xl font-bold italic">
              S<span className="text-green-200 font-mono text-xl">ubham</span>
            </a>

            <div
              className="w-7 h-5 relative cursor-pointer md:hidden z-40"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <RiMenu3Fill className="text-2xl" />
            </div>

            <div className="hidden md:flex items-center space-x-8 text-xl">
              <a
                href="#home"
                className="hover:text-green-200 text-gray-50 transition-colors"
              >
                Home
              </a>
              <a
                href="#projects"
                className="hover:text-green-200 text-gray-50 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-green-200 text-gray-50 transition-colors"
              >
                Skills
              </a>
              <a
                href="#about"
                className="hover:text-green-200 text-gray-50 transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="hover:text-green-200 text-gray-50 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
