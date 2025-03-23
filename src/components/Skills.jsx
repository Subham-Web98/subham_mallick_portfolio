import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { TiHtml5 } from "react-icons/ti";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <section
      id="skills"
      className="w-full min-h-screen flex flex-col justify-center items-center pt-20   px-4"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl sm:text-5xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-200 to-green-300 "
      >
        Skills
      </h2>
      <div
        data-aos="fade-up"
        className="my-4 rounded-2xl w-28  h-1 bg-gradient-to-r from-green-100 via-green-200 to-green-300"
      ></div>

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2   gap-8 max-w-6xl mt-10 justify-around items-center "
      >
        <div className="border-[1px] border-gray-200 p-4 rounded-2xl hover:-translate-y-1 transition-all duration-200">
          <h3 className="text-center font-bold text-3xl mb-7 tracking-wider">
            Frontend
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span>
              <TiHtml5 className="text-7xl text-orange-400" />
            </span>
            <span>
              <TbBrandCss3 className="text-7xl text-sky-300" />
            </span>
            <span>
              <TbBrandJavascript className="text-7xl text-yellow-300" />
            </span>
            <span>
              <RiReactjsLine className="text-7xl text-blue-400" />
            </span>
          </div>
        </div>
        <div className="border-[1px] border-gray-200 p-4 rounded-2xl hover:-translate-y-1 transition-all duration-200">
          <h3 className="text-center font-bold text-3xl mb-7 tracking-wider">
            Backend
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span>
              <RiNodejsLine className="text-7xl text-green-700" />
            </span>
            <span>
              <SiExpress className="text-6xl text-gray-600 border-amber-200 border-1 rounded-2xl p-1 " />
            </span>
            <span>
              <SiMongodb className="text-7xl text-green-400" />
            </span>
            <span>
              <SiMysql className="text-7xl text-blue-400" />
            </span>
          </div>
        </div>
        <div className="border-[1px] border-gray-200 p-4 rounded-2xl hover:-translate-y-1 transition-all duration-200">
          <h3 className="text-center font-bold text-3xl mb-7 tracking-wider">
            Frameworks
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <span>
              <SiTailwindcss className="text-7xl text-cyan-400" />
            </span>
            <span>
              <FaBootstrap className="text-7xl text-purple-400" />
            </span>
          </div>
        </div>
        <div className="border-[1px] border-gray-200 p-4 rounded-2xl hover:-translate-y-1 transition-all duration-200">
          <h3 className="text-center font-bold text-3xl mb-7 tracking-wider">
            Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <span>
              <FaGitAlt className="text-7xl text-orange-400" />
            </span>
            <span>
              <FaGithub className="text-7xl text-black bg-white rounded-full" />
            </span>
            <span>
              <SiPostman className="text-7xl text-orange-400" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
