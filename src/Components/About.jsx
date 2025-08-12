/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const About = () => {
  return (
    <section id="about" className="py-13  bg-blue-950">
      <div className="container mx-auto px-10  ">

        {/* Text Content */}
        <div className="container mx-auto px-6 lg:w-full space-y-6" data-aos="fade-right">
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
        >
          I'am <span className="font-bold text-3xl text-[#47edff]">Mern stack</span> developer passionate about{" "}
          <span className="text-black bg-white font-semibold"> React.js, Node.js and Next.js .</span> <br />
          Currently studying at{" "}
          <span className="text-black bg-white font-semibold">Dhaka International University</span>, From a young age, I have been passionate about computers and gradually started learning programming . I am interested in <span className="font-bold text-white underline decoration-red-500">web development</span> as well as <br /> <span className="font-bold underline decoration-red-500 text-white">Cloud engineering</span> and <span className="font-bold underline decoration-red-500 text-white">Data science</span>.
        </p>

        <p  className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          data-aos="fade-up"
          data-aos-delay="300">
          Outside of coding, I enjoy playing <span className=" text-2xl  text-white font-bold">Football</span> and Online Game Like <span className=" text-white text-2xl font-bold">(PUBG)</span>.
        </p>

        <p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
         I am patient and very enthusiastic about learning new technologies. In the future, I aim to build a successful startup so that I can use my skills to make people's lives easier.
        </p>
      </div>

      </div>
    </section>
  );
};

export default About;
