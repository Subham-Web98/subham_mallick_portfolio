import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SURVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message sent successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        alert("Failed to send the message, please try again");
      });
  };
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex flex-col justify-center items-center mt-20 px-4"
    >
      <h2
        data-aos="fade-up"
        className="text-4xl sm:text-5xl font-bold text-center  bg-clip-text text-transparent bg-gradient-to-r from-green-100 via-green-200 to-green-300 "
      >
        Get in Touch
      </h2>
      <div
        data-aos="fade-up"
        className="my-3 rounded-2xl w-48  h-1 bg-gradient-to-r from-green-100 via-green-200 to-green-300"
      ></div>

      <div
        data-aos="fade-up"
        className="grid grid-cols-1 sm:grid-cols-2   gap-8 max-w-6xl mt-10 justify-around  "
      >
        <div className="flex flex-col gap-y-2">
          <h4 className="md:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-300  to-purple-900">
            Let's Talk ...
          </h4>
          <p className="text-[12px] font-light max-w-2xl ">
            I am always open to discussing new projects, collaborations, or job
            opportunities. Feel free to reach out if you have any questions or
            just want to connect.
          </p>
          <p className="flex items-center gap-5">
            <MdOutlineMarkEmailRead className="text-2xl text-red-400" />
            <a href="mailto:chemsubham@gmail.com" className="italic">
              chemsubham@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-5">
            <MdPhoneInTalk className="text-2xl text-green-400" />
            <a href="tel:+917074495130" className="italic">
              +91 7074495130
            </a>
          </p>
          <p className="flex items-center gap-5">
            <FaLocationDot className="text-2xl text-blue-400" />
            <span className="italic">Kolkata - 700082</span>
          </p>
        </div>
        <div className="border-[1px] border-blue-400 p-4 rounded-2xl shadow-md shadow-blue-100/30">
          <form
            action=""
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Enter your name"
              className="border-[1px] border-blue-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700 transition-all duration-300 focus:bg-gray-800  "
              required
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Enter your email"
              className="border-[1px] border-blue-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700 transition-all duration-300 focus:bg-gray-800 "
              required
            />
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Enter your message"
              className="border-[1px] border-blue-300 p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-700 transition-all duration-300 focus:bg-gray-800 "
            ></textarea>
            <button
              type="submit"
              className=" border-2 border-blue-300 rounded-md py-1 hover:-translate-y-0.5 transition-all duration-400 hover:bg-gradient-to-b from-gray-600  to-gray-900 hover:text-green-400 font-semibold font-mono tracking-widest"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
