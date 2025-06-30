import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-600 text-xl" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-600 text-xl" /> },
  { name: "Tailwind CSS", level: 95, icon: <SiTailwindcss className="text-cyan-500 text-xl" /> },
  { name: "JavaScript", level: 80, icon: <SiJavascript className="text-yellow-400 text-xl" /> },
  { name: "React", level: 85, icon: <FaReact className="text-blue-400 text-xl" /> },
  { name: "Express.js", level: 75, icon: <SiExpress className="text-gray-500 text-xl" /> },
  { name: "MongoDB", level: 70, icon: <SiMongodb className="text-green-600 text-xl" /> },
];

const SkillSection = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const handleScroll = () => {
      const section = document.getElementById("skills");
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 data-aos="fade-down" className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-12">
          My Skills
        </h2>

        <div className="grid md:grid-cols-2  gap-8">
          {skills.map((skill, index) => (
            <div key={index} data-aos="fade-up">
              <div className="flex items-center  justify-between mb-1">
                <span className="flex items-center gap-2 text-base font-medium text-gray-800  dark:text-gray-200">
                  {skill.icon} {skill.name}
                </span>
                <span className="text-sm text-gray-600  dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-700 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                <div
                  className="h-4 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 transition-all duration-[2000ms]"
                  style={{
                    width: visible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
