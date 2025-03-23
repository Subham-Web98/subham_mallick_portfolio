import React, { useEffect } from "react";
import { CgCloseO } from "react-icons/cg";

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {});
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col gap-y-6 items-center justify-center bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg transition-all duration-300 ease-in-out ${
        menuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className=" absolute top-4 right-4 text-3xl text-white focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <CgCloseO />
      </button>
      <a
        href="#home"
        onClick={() => setMenuOpen(false)}
        className="hover:text-green-200 text-gray-50 transition-colors text-2xl"
      >
        Home
      </a>
      <a
        href="#skills"
        onClick={() => setMenuOpen(false)}
        className="hover:text-green-200 text-gray-50 transition-colors text-2xl"
      >
        Skills
      </a>
      <a
        href="#projects"
        onClick={() => setMenuOpen(false)}
        className="hover:text-green-200 text-gray-50 transition-colors text-2xl"
      >
        Projects
      </a>
      <a
        href="#about"
        onClick={() => setMenuOpen(false)}
        className="hover:text-green-200 text-gray-50 transition-colors text-2xl"
      >
        About
      </a>
      <a
        href="#contact"
        onClick={() => setMenuOpen(false)}
        className="hover:text-green-200 text-gray-50 transition-colors text-2xl"
      >
        Contact
      </a>
    </div>
  );
};

export default MobileMenu;
