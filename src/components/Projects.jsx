import React, { useEffect } from "react";
import { projects } from "../constants/projects";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <section
      id="projects"
      className="w-full min-h-screen flex flex-col justify-center items-center pt-20  px-4"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl sm:text-5xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-200 to-green-300 "
      >
        Projects
      </h2>
      <div
        data-aos="fade-up"
        className="my-4 rounded-2xl w-40  h-1 bg-gradient-to-r from-green-100 via-green-200 to-green-300"
      ></div>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mt-10 "
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className=" p-4 rounded-2xl shadow-md shadow-green-100/30 hover:-translate-y-1 transition-all duration-200 text-center"
          >
            <h3 className="text-center font-bold text-[14px] mb-5">
              {project.title}
            </h3>
            <img
              src={project.image}
              className="rounded-2xl object-cover h-40 w-full"
              width={400}
              alt="project_photo"
            />
            <p className="text-[10px] font-extralight my-5">
              {project.description}
            </p>
            <a
              href={project.view}
              target="_blank"
              className=" w-full text-center px-8 border-2 border-green-200 hover:bg-green-200 hover:text-black py-2 rounded-[50px] font-bold text-sm"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
