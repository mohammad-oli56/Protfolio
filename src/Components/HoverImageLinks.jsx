/* eslint-disable no-unused-vars */
import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";

export const HoverImageLinks = () => {
  return (
    <section className="bg-neutral-950 p-4 md:p-8">
      <div className="mx-auto max-w-5xl space-y-6">
        {/* AthleticHub */}
        <LinkItem
          heading="AthleticHub"
          title="A full-stack platform connecting athletes with sports."
          subheading="Discover, register, and manage events — organizers can easily create and oversee them."
          tech={["React", "Tailwind", "Firebase", "MongoDB", "Express"]}
          imgSrc="https://i.ibb.co/N2sYMqx6/Whats-App-Image-2025-08-11-at-19-57-57-00e3d32a.jpg"
          href="https://mellow-dragon-cd5b39.netlify.app/"
          projectcode="https://github.com/mohammad-oli56/AthleticHub2?tab=readme-ov-file"
        />

        {/* Other Demo Links */}
        <LinkItem
          heading="Plant-World"
          title="Plant Care Tracker Manage watering,and health monitoring with ease"
          subheading="Responsive app for managing watering and plant health with a fresh succulent-inspired design."
          tech={["React", "Tailwind", "Firebase", "MongoDB", "Express"]}
          imgSrc="https://i.ibb.co.com/v61d7Yh4/Whats-App-Image-2025-08-11-at-20-47-28-a608c702.jpg"
          href="https://assingment-10-9c374.web.app/"
          projectcode="https://github.com/mohammad-oli56/Plant-World"
        />
        <LinkItem
          heading="MovieVerse"
          title="Movieverse Seamless Movie Streaming & Subscription Platform"
          subheading="Discover, subscribe, and stream movies effortlessly and download favorites all in one React app."
          imgSrc="https://i.ibb.co.com/FLKtsNQr/Whats-App-Image-2025-08-11-at-20-59-33-a24c7433.jpg"
          href="https://dainty-clafoutis-c0645b.netlify.app/"
          projectcode="https://github.com/mohammad-oli56/MovieVerse"
        />
        
        
      </div>
    </section>
  );
};

const LinkItem = ({ heading, title, imgSrc, subheading, href, tech, projectcode }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 });

  const top = useTransform(mouseYSpring, [-0.5, 0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [-0.5, 0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-6 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        {/* Heading */}
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.05,
            delayChildren: 0.15,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
            >
              {l}
            </motion.span>
          ))}
        </motion.span>

        {/* Title */}
        <motion.span
          variants={{
            initial: { opacity: 0 },
            whileHover: { opacity: 1 },
          }}
          transition={{ type: "spring" }}
          className="relative z-10 mt-2 block text-xl text-neutral-500 group-hover:text-neutral-50"
        >
          {title}
        </motion.span>

        {/* Subheading */}
        <span className="relative z-10 mt-2 block text-base text-neutral-500 group-hover:text-neutral-50">
          {subheading}
        </span>

        {/* Tech Stack Badges */}
        {tech && (
          <div className="relative z-10 mt-3 flex flex-wrap gap-2">
            {tech.map((t, index) => (
              <span
                key={index}
                className="bg-neutral-800 text-neutral-300 px-3 py-1 rounded-full text-xs border border-neutral-700"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Buttons */}
        <div className="relative z-10 mt-4 flex gap-3">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
          >
            View Project
          </a>
          {projectcode && (
            <a
              href={projectcode}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
            >
              View Code
            </a>
          )}
        </div>
      </div>

      {/* Hover Image */}
      <motion.img
        style={{
          top,
          left,
          translateX: "-0%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing ${heading}`}
      />

      {/* Arrow */}
      <motion.div
        variants={{
          initial: { x: "25%", opacity: 0 },
          whileHover: { x: "0%", opacity: 1 },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.div>
  );
};
