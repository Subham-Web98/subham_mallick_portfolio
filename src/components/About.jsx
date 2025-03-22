import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease",
        });
        
    },[]);
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center items-center pt-20  px-4"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl sm:text-5xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-200 to-green-300 "
      >
        About Me
      </h2>
      <div
        data-aos="fade-up"
        className="my-4 rounded-2xl w-40  h-1 bg-gradient-to-r from-green-100 via-green-200 to-green-300"
      ></div>

      <div
        data-aos="fade-up"
        className=" mt-6 flex flex-col lg:flex-row items-center justify-center gap-10 w-full max-w-6xl"
      >
        {/* Text Section */}
        <p className="text-base sm:text-lg md:text-xl font-mono max-w-xl text-center leading-relaxed">
          I am a passionate beginner in Web Development, currently learning the
          MERN Stack{" "}
          <span className="font-bold text-green-200">
            MongoDB, Express.js, React, Node.js
          </span>
          . With a background in Marketing and a keen interest in programming, I
          aim to combine my creative and technical skills to develop
          user-friendly and impactful web applications.
          <br />
          <br />I believe in continuous learning and growth, and I am working
          hard to improve my skills every day. My dream is to become a
          professional Full Stack Developer and contribute to building
          innovative digital solutions that solve real-world problems.
        </p>

        {/* Certificate Section */}
        <div className="flex flex-col items-center">
          <p className="text-2xl  sm:text-3xl font-bold mb-5 tracking-wider font-serif">
            Certificate
          </p>
          <a
            href="https://verify.letsupgrade.in/certificate/LUFS220190"
            target="_blank"
            rel="noopener noreferrer"
            title="View Certificate"
          >
            <img
              src="/LUFS220190.png"
              className="rounded-2xl border-4 md:w-xl border-gray-600 shadow-lg hover:scale-105 duration-300"
              width={350}
              alt="certificate_photo"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
