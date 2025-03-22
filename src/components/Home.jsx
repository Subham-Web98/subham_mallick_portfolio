import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Home = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease",
        })
    },[]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center flex-col justify-center relative"
    >
      <div data-aos="fade-down" className="md:mt-10 mt-20 mb-5">
        <img
          src="/Subham.png"
          width={200}
          className="rounded-full shadow-[0_0_100px_rgba(255,255,255,0.5)]"
          alt="owner_photo"
        />
      </div>
      <div data-aos="fade-up" className="text-center z-10 px-4">
        <h1 className="text-3xl md:text-7xl font-extrabold md:font-bold mb-6 bg-gradient-to-r from-green-100 via-green-200 to-green-300 bg-clip-text text-transparent  ">
          Hi , I'm Subham Mallick
        </h1>
        <p className=" text-[16px] sm:text-xl md:text-2xl font-mono md:px-8 max-w-5xl">
          I'm a beginner Web Developer, continuously learning and practicing to
          enhance my skills. My goal is to become a proficient MERN Stack
          Developer and create impactful web applications.
        </p>
        <div className="flex flex-col md:gap-4 gap-y-4 md:flex-row items-center justify-center md:space-x-4 space-x-2 my-6">
          <a
            href="#projects"
            className="bg-gradient-to-b from-green-100 via-green-200 to-green-300 text-black font-bold md:px-16 px-8 py-2 m-0 rounded-[50px] hover:-translate-y-1 transition-all duration-200 "
          >
            View Projects
          </a>
          <a
            href="/MERN STACK.pdf"
            download
            className=" text-white font-bold md:px-16 px-8 py-2 rounded-[50px] hover:-translate-y-1 transition-all duration-200  border-gray-200 border-4 opacity-60 hover:opacity-100  "
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
