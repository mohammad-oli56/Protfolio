import React from "react";

const Banner = () => {
    return (
        <div className="bg-gray-50 relative -mt-20 py-10 ">
            {/* Container */}
            <div className="max-w-6xl mx-auto mt-25 pb-7 flex flex-col md:flex-row items-center px-6 md:px-0">
                {/* Left Content */}
                <div className="flex-1 pl-16 space-y-5">
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                        Your Design <br /> Partner Bruce
                    </h1>
                    <p className="text-gray-600 max-w-md">
                        I specialize in creating intuitive and engaging digital interfaces.
                    </p>

                    {/* Buttons */}
                    <div className="flex space-x-4">
                        <button className="bg-black text-white px-5 py-2 rounded-md font-semibold">
                            Hire me
                        </button>
                        <button className="text-gray-700 font-medium">
                            Latest Projects →
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="flex space-x-8 pt-4">
                        <div>
                            <p className="text-2xl font-bold">5 Years</p>
                            <p className="text-gray-500 text-sm">Experience</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">110+</p>
                            <p className="text-gray-500 text-sm">Clients</p>
                        </div>
                        <div>
                            <p className="text-2xl font-bold">99.8%</p>
                            <p className="text-gray-500 text-sm">Satisfaction</p>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex-1 relative  mt-10 md:mt-0 flex justify-center">
                    <div className="relative  w-70 h-62  border-8 border-gray-400  rounded-lg object-cover">
                        <img
                        src="https://i.ibb.co.com/jvjSHp1N/Whats-App-Image-2025-08-11-at-11-07-01-d6e08cc3-removebg-preview.png"
                        alt="oli"
                        className="absolute -top-12 w-90"
                    />
                    </div>

                    {/* Tag Labels */}
                    <span className="absolute top-8 left-[6.25rem] bg-white px-3 py-1 text-sm font-medium shadow rounded-md">
                        UI/UX Design
                    </span>
                    <span className="absolute top-14 right-20 bg-white px-3 py-1 text-sm font-medium shadow rounded-md">
                        Web Consulting
                    </span>
                    <span className="absolute bottom-8 left-20 bg-white px-3 py-1 text-sm font-medium shadow rounded-md">
                        Web Development
                    </span>
                </div>

            </div>
        </div>
    );
};

export default Banner;
