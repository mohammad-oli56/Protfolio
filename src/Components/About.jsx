/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import "aos/dist/aos.css";

const About = () => {
  return (
    <section id="about" className="py-12 bg-blue-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Text Content */}
        <div className="space-y-6" data-aos="fade-right">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            About Me
          </h2>

          <p
            className="text-3xl sm:text-5xl font-extrabold text-white"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            Hi, I’m <span className="text-orange-600">Mohammad Oli</span>
          </p>

          <p
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I'm a <span className="font-bold text-xl text-[#47edff]">MERN Stack</span> developer passionate about{" "}
            <span className="text-black bg-white font-semibold px-1">React.js, Node.js, and Next.js</span>. <br />
            Currently studying at{" "}
            <span className="text-black bg-white font-semibold px-1">Dhaka International University</span>. From a young age, I’ve been passionate about computers and gradually started learning programming. I'm interested in{" "}
            <span className="font-bold text-white">web development</span> as well as{" "}
            <span className="font-bold text-white">cloud engineering</span> and{" "}
            <span className="font-bold text-white">data science</span>.
          </p>

          <p
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Outside of coding, I enjoy playing <span className="text-xl text-white font-bold">Football</span> and online games like <span className="text-xl text-white font-bold">PUBG</span>.
          </p>

          <p
            className="text-base sm:text-lg text-gray-300 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            I’m patient and enthusiastic about learning new technologies. In the future, I aim to build a successful startup to use my skills to make people's lives easier.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;