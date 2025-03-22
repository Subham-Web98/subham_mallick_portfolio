import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black/40 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Subham Mallick. All rights reserved.
        </p>

        <div className="flex gap-5 mt-4 md:mt-0">
          <a
            href="https://github.com/Subham-Web98"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/subham-mallick-10165b2a6/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 text-xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/917074495130?text=Hello%20Subham%2C%20I%20visited%20your%20portfolio!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-green-400 hover:text-green-600"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
