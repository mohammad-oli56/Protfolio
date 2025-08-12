import { useState, useEffect } from "react";

const RotatingTitles = () => {
    const titles = ["Mern stack", "Web Developer", "Frontend Developer"];
    const [index, setIndex] = useState(0);
    const [animate, setAnimate] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setAnimate(false); // fade out animation শুরু
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % titles.length); // পরের টেক্সট
                setAnimate(true); // fade in animation শুরু
            }, 500); // fade out এর সময় (ms)
        }, 2000); // মোট প্রতিটি টেক্সটের শো টাইম (fade সহ)

        return () => clearInterval(interval);
    }, []);

    return (
        <span
            className={`
        bg-gradient-to-bl from-violet-500 to-fuchsia-500 bg-clip-text text-transparent font-bold text-5xl 
        transition-opacity duration-500 ease-in-out
        ${animate ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
      `}
        >
            {titles[index]}
        </span>
    );
};

export default RotatingTitles;
