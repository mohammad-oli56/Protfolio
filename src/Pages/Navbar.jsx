import React from 'react';

const Navbar = () => {
    return (
        <div
            className="fixed top-0 left-0 right-0 z-50 bg-transparent"
            data-aos="fade-down"
        >
            <div className="flex justify-center items-center px-4 py-3">
                <ul className="flex flex-wrap justify-center md:px-15 px-6 py-4 rounded-2xl backdrop-blur bg-green-400/10 text-white gap-5 md:gap-10">
                    <li>
                        <a href="#home" className="hover:text-primary transition-all duration-200">Home</a>
                    </li>
                    <li>
                        <a href="#projects" className="hover:text-primary transition-all duration-200">Projects</a>
                    </li>
                    <li>
                        <a href="#about" className="hover:text-primary transition-all duration-200">About</a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-primary transition-all duration-200">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
