/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion"; // Correct import

export const DrawCircleText = () => {
  return (
    <div className="grid place-content-center bg-emerald-950 px-4 py-24 text-yellow-50">
      <h1 className="max-w-2xl text-center text-5xl leading-snug">
        my name is{" "}
        <span className="relative inline-block">
          oli ullah
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute top-0 left-0 -translate-x-2 translate-y-3"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}

        
        with Simple AI Tools
      </h1>

      <div>
        i am from{" "}
        <span className="relative inline-block">
          muktagacha
          <svg
            viewBox="0 0 286 73"
            fill="none"
            className="absolute -top-3 left-0 -translate-x-2 translate-y-3"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{
                duration: 1.25,
                ease: "easeInOut",
              }}
              d="M142.293 1C106.854 16.8908 6.08202 7.17705 1.23654 43.3756C-2.10604 68.3466 29.5633 73.2652 122.688 71.7518C215.814 70.2384 316.298 70.689 275.761 38.0785C230.14 1.37835 97.0503 24.4575 52.9384 1"
              stroke="#FACC15"
              strokeWidth="3"
            />
          </svg>
        </span>{" "}
        mymensing
      </div>
    </div>
  );
};
