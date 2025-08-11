import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center mt-6 sticky top-0 z-50">
      <div className="bg-white/50 backdrop-blur-md border rounded-md flex items-center space-x-6 shadow-sm">
        {/* Logo */}
        <span className="playwrite-au-qld rounded-l-md bg-orange-500 py-2 text-2xl text-white font-extrabold flex items-center px-3 border-r-1 border-gray-300">
          O L I
        </span>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-sm text-gray-700">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skil">Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#project">Projects</a></li>
        </ul>

        {/* Button */}
        <button className="bg-black text-white px-4 py-2 rounded-md text-sm border-l-1 mx-1.5 border-gray-300 hover:bg-gray-800">
          Hire me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
