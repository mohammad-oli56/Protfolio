import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black dark:text-gray-300 py-8 shadow-2xl">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left: Name and message */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Mohammad Oli
            </h3>
            <p className="text-sm">Frontend Developer | React | Tailwind | MERN</p>
          </div>

          {/* Center: Social Links */}
          <div className="flex gap-4 text-lg">
            <a
              href="https://www.facebook.com/mohammad.oli.560581/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-oli/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/mohammad-oli56"
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
          <div className="text-sm text-center md:text-right">
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
