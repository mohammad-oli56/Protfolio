import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-8 shadow-2xl"
      data-aos="fade-up"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left: Name and message */}
          <div
            className="text-center md:text-left"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1200"
            data-aos-easing="ease-in-out"
          >
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Mohammad Oli
            </h3>
            <p className="text-sm">Frontend Developer | React | Tailwind | MERN</p>
          </div>

          {/* Center: Social Links */}
          <div
            className="flex gap-4 text-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
            data-aos-duration="1200"
          >
            <a
              href="https://facebook.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:olimohammad286@gmail.com"
              className="hover:text-indigo-600 transition"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right: Made with love */}
          <div
            className="text-sm text-center md:text-right"
            data-aos="fade-left"
            data-aos-delay="900"
            data-aos-duration="1200"
          >
            <p>© {new Date().getFullYear()} Mohammad Oli. All rights reserved.</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Made with ❤️ using React & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
