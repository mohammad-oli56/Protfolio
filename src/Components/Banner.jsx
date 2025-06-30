import React from 'react';
import BlurText from './BlurText';
import animationdata from '../assets/Animation - 1751278481270.json';
import Lottie from 'lottie-react';

const Banner = () => {
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };

    return (
        <div id="home"
            className="min-h-[90vh] flex flex-col-reverse md:flex-row items-center justify-center md:justify-between px-6 md:px-20 py-10 bg-gradient-to-br from-base-100 to-base-200 gap-10 md:gap-16"
            
        >
            {/* Text Section */}
            <div
                className="w-full md:w-1/2 text-center md:text-left space-y-5"
                data-aos="fade-right"
            >
                {/* Animated Heading */}
                <div data-aos="fade-up" data-aos-delay="100">
                    <BlurText
                        text="Hi, I'm Mohammad Oli"
                        delay={100}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary"
                    />
                </div>

                {/* Paragraph */}
                <p
                    className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    I'm a passionate <span className="text-primary font-semibold">Frontend Developer</span> specialized in building clean, responsive, and interactive websites using React, Tailwind CSS, and modern web tools.
                </p>

                {/* Buttons */}
                <div
                    className="flex flex-wrap justify-center md:justify-start gap-4 pt-4"
                    data-aos="fade-up"
                    data-aos-delay="500"
                >
                    <a
                        href="#projects"
                        className="btn btn-primary px-6 text-white hover:scale-105 transition duration-300"
                    >
                        View Projects
                    </a>
                    <a
                        href="/cv.pdf"
                        download
                        className="btn btn-outline border-primary text-primary hover:bg-primary hover:text-white px-6 transition duration-300"
                    >
                        Download CV
                    </a>
                </div>
            </div>

            {/* Animation Section */}
            <div
                className="w-full md:w-1/2 flex justify-center"
                data-aos="zoom-in"
                data-aos-delay="400"
            >
                <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
                    <Lottie animationData={animationdata} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Banner;
