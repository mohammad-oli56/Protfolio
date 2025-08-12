import React from "react";
import RotatingTitles from "./RotatingTitles";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="bg-gray-100 relative -mt-20 py-10 ">
            {/* Container */}
            <div className="max-w-6xl mx-auto mt-25 pb-7 flex flex-col md:flex-row items-center px-6 md:px-0">
                {/* Left Content */}
                <div className="flex-1 lg:pl-16 pl-5 space-y-5">
                    <h1 className="text-4xl font-extrabold text-black leading-tight">
                        Your <span >
                            <RotatingTitles />
                        </span>
                        <br /> developer <span className="text-white bg-black px-2 rounded"> Oli </span>
                    </h1>
                    <p className="text-gray-600 max-w-md">
                        I specialize in creating intuitive and engaging digital interfaces.
                    </p>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <a
                            href="https://docs.google.com/document/d/1DlwP2QFVmgwnC5Gn63_EX8BYwyaFrIEMCYJ6hd9VL-U/edit?usp=sharing"
                            className="bg-orange-500 text-white px-5 py-2 rounded-md font-semibold"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV
                        </a>

                        <a href="#project" className="text-gray-700 font-medium">
                            Latest Projects →
                        </a>

                    </div>

                    {/* Stats */}
                    <div className="flex space-x-6 text-2xl">
                        {/* GitHub */}
                        <a
                            href="https://github.com/mohammad-oli56"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="text-gray-600 hover:text-white hover:bg-black rounded-full p-2 transition-colors duration-300"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/mohammad-oli/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="text-gray-600 hover:text-white hover:bg-blue-700 rounded-full p-2 transition-colors duration-300"
                        >
                            <FaLinkedin />
                        </a>



                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/mohammad.oli.560581/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="text-gray-600 hover:text-white hover:bg-blue-600 rounded-full p-2 transition-colors duration-300"
                        >
                            <FaFacebook />
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative  mt-10 md:mt-0  flex justify-center">
                    <div className="relative  w-70 h-62  border-8 border-gray-400  rounded-lg object-cover">
                        <img
                            src="https://i.ibb.co.com/jvjSHp1N/Whats-App-Image-2025-08-11-at-11-07-01-d6e08cc3-removebg-preview.png"
                            alt="oli"
                            className="absolute -top-12 w-90"
                        />
                    </div>

                    {/* Tag Labels */}
                    <span className="absolute top-8 lg:left-20 -left-10 bg-white px-3 py-1 text-sm font-medium shadow rounded-md">
                        UI/UX Design
                    </span>
                    <span className="absolute top-14 lg:right-20 -right-10  bg-white px-3 py-1 text-sm font-medium shadow rounded-md">
                        Web Consulting
                    </span>
                    <span className="absolute bottom-8 lg:left-10 -left-10 bg-white px-3 py-1 text-sm font-medium shadow rounded-md">
                        Web Development
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Banner;
