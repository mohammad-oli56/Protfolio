import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"; // ✅ correct import
import "aos/dist/aos.css";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col-reverse lg:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="lg:w-1/2 space-y-6" data-aos="fade-right">
          <h2
            className="text-4xl font-extrabold text-gray-900 dark:text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Me
          </h2>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm a passionate Frontend Developer skilled in{" "}
            <span className="text-indigo-600 font-semibold">
              HTML, CSS, Tailwind CSS, React, MongoDB, and Express
            </span>. I build performant, responsive, and accessible web
            applications that solve real-world problems.
          </p>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Currently, I am a student at{" "}
            <span className="text-indigo-600 font-semibold">
              Dhaka International University
            </span>{" "}
            pursuing my 5th semester. I’m enthusiastic about learning and eager
            to contribute to a professional team as I take my first step in the
            software development industry.
          </p>

          <p
            className="text-indigo-700 dark:text-indigo-400 font-semibold text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Always ready to learn, adapt, and grow!
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center" data-aos="zoom-in">
          <img
            src="https://i.ibb.co/QjT5bNqy/Whats-App-Image-2025-06-30-at-16-01-28-32ac3aba.jpg"
            alt="Profile"
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl shadow-lg object-cover border-4 border-indigo-600"
          />
        </div>
      </div>

      {/* Framer Motion Hover Animation */}
      <div className="text-center mt-10" data-aos="fade-up" data-aos-delay="500">
      
      </div>
    </section>
  );
};

export default About;
