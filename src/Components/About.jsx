/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const About = () => {
  return (
    <section id="about" className="py-13 bg-blue-950">
      <div className="container mx-auto px-3  ">

        {/* Text Content */}
        <div className="lg:w-full space-y-6" data-aos="fade-right">
          <h2
            className="text-4xl font-extrabold text-gray-900 dark:text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Me
          </h2>

          <p
            className="text-5xl font-extrabold text-gray-900 dark:text-white"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Hi, I’m <span className="text-orange-600">Mohammad Oli</span>
          </p>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
            data-aos="fade-up"
            data-aos-delay="200"
          > I'am  <span className="font-bold text-3xl text-[#47edff]"> Mern stack </span> developer passionate about{" "}
             {/* <span className=" ml-1 relative inline-block">
             <span className="font-bold text-3xl text-[#47edff]"> Mern stack</span>     
              <svg
                viewBox="0 0 286 80"
                fill="none"
                className="absolute -top-4 -left-3 translate-x-2 translate-y-3"
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{
                    duration: 1.25,
                    ease: "easeInOut",
                  }}
                  d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
                  stroke="#fa1515"
                  strokeWidth="4"
                />
              </svg>
            </span>{" "} developer passionate about{" "} */}
            <span className="text-black bg-white font-semibold">
              React, Tailwind CSS, and Node.js .
            </span> <br />
            Currently studying at{" "}
            <span className="text-black bg-white font-semibold">
              Dhaka International University
            </span>
            , I am striving to build a strong foundation as a professional developer.
          </p>

          <p
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Eager to learn, adapt, and take on challenges, my goal is to become a skilled developer who embraces new technologies and crafts impactful projects.
          </p>

        </div>

      </div>
    </section>
  );
};

export default About;
