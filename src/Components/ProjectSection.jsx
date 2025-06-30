import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    name: "MovieVerse",
    description:
      "A full-stack web app to create, browse, and book athletic events. Includes authentication and user dashboard.",
    image: "https://i.ibb.co/KzSDsG84/Whats-App-Image-2025-06-30-at-17-35-32-386cd865.jpg",
    liveLink: "https://dainty-clafoutis-c0645b.netlify.app/",
    codeLink: "https://github.com/mohammad-oli56/MovieVerse",
    tech: ["React", "Tailwind", "Firebase", "MongoDB", "Express"],
  },
  {
    id: 2,
    name: "Plant-World",
    description:
      "A responsive frontend gallery showcasing dynamic plant cards using React and Framer Motion.",
    image: "https://i.ibb.co/MxMHr0Nb/Whats-App-Image-2025-06-30-at-17-37-10-cad75598.jpg",
    liveLink: "https://assingment-10-9c374.web.app/",
    codeLink: "https://github.com/mohammad-oli56/Plant-World?tab=readme-ov-file",
    tech: ["React", "Tailwind", "Mongodb","Firebase","Express","Node.js"],
  },
  {
    id: 3,
    name: "AthleticHub",
    description:
      "A CRUD-based task manager with user auth, status tracking, and dynamic filters.",
    image: "https://i.ibb.co/LYyRWs6/project3.png",
    liveLink: "https://mellow-dragon-cd5b39.netlify.app/",
    codeLink: "https://github.com/mohammad-oli56/AthleticHub",
    tech: ["React", "Tailwind", "Firebase", "Node.js","Express"],
  },
];

const ProjectSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 dark:text-indigo-400 mb-12">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos="fade-up"
             className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:border-indigo-500 hover:shadow-[0_0_15px_2px_rgba(99,102,241,0.6)]"

            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-52 w-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-300">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-indigo-100 dark:bg-indigo-600 text-indigo-700 dark:text-white px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-indigo-600 hover:bg-indigo-700 text-white rounded px-4 py-1 transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm border border-indigo-600 text-indigo-700 hover:bg-indigo-700 hover:text-white rounded px-4 py-1 transition"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
