import React, { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaGithub, FaJava } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiFirebase, SiExpress, SiMysql } from "react-icons/si";
import { useAnimate } from "framer-motion";
import { Tooltip } from "react-tooltip";

// Clip path shapes
const NO_CLIP = "polygon(0 0, 100% 0, 100% 100%, 0% 100%)";
const BOTTOM_RIGHT_CLIP = "polygon(0 0, 100% 0, 0 0, 0% 100%)";
const TOP_RIGHT_CLIP = "polygon(0 0, 0 100%, 100% 100%, 0% 100%)";
const BOTTOM_LEFT_CLIP = "polygon(100% 100%, 100% 0, 100% 100%, 0 100%)";
const TOP_LEFT_CLIP = "polygon(0 0, 100% 0, 100% 100%, 100% 0)";

const ENTRANCE_KEYFRAMES = {
  left: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  bottom: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  top: [BOTTOM_RIGHT_CLIP, NO_CLIP],
  right: [TOP_LEFT_CLIP, NO_CLIP],
};

const EXIT_KEYFRAMES = {
  left: [NO_CLIP, TOP_RIGHT_CLIP],
  bottom: [NO_CLIP, TOP_RIGHT_CLIP],
  top: [NO_CLIP, TOP_RIGHT_CLIP],
  right: [NO_CLIP, BOTTOM_LEFT_CLIP],
};

const LinkBox = ({ Icon, href, tooltipId, tooltipContent, innerRef }) => {
  const [scope, animate] = useAnimate();

  const getNearestSide = (e) => {
    const box = e.target.getBoundingClientRect();
    const sides = [
      { proximity: Math.abs(box.left - e.clientX), side: "left" },
      { proximity: Math.abs(box.right - e.clientX), side: "right" },
      { proximity: Math.abs(box.top - e.clientY), side: "top" },
      { proximity: Math.abs(box.bottom - e.clientY), side: "bottom" },
    ];
    return sides.sort((a, b) => a.proximity - b.proximity)[0].side;
  };

  const handleMouseEnter = (e) => {
    animate(scope.current, { clipPath: ENTRANCE_KEYFRAMES[getNearestSide(e)] });
  };

  const handleMouseLeave = (e) => {
    animate(scope.current, { clipPath: EXIT_KEYFRAMES[getNearestSide(e)] });
  };

  return (
    <a
      href={href}
      data-tooltip-id={tooltipId}
      data-tooltip-content={tooltipContent}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={innerRef}
      className="relative grid h-20 w-full place-content-center sm:h-28 md:h-36"
    >
      <Icon className="text-xl sm:text-3xl lg:text-4xl" />
      <div
        ref={scope}
        style={{ clipPath: BOTTOM_RIGHT_CLIP }}
        className="absolute inset-0 grid place-content-center bg-black text-red-600"
      >
        <Icon className="text-xl sm:text-3xl md:text-4xl" />
      </div>
    </a>
  );
};

const ClipPathLinks = () => {
  const firstLinkRef = useRef(null);

  useEffect(() => {
    if (firstLinkRef.current) {
      // Trigger mouseenter event to show tooltip on load
      const event = new MouseEvent('mouseenter', { bubbles: true });
      firstLinkRef.current.dispatchEvent(event);

      // Hide after 3 seconds (optional)
      setTimeout(() => {
        const leaveEvent = new MouseEvent('mouseleave', { bubbles: true });
        firstLinkRef.current.dispatchEvent(leaveEvent);
      }, 3000);
    }
  }, []);

  return (
   <>
   <h1 className="text-center text-3xl font-bold mt-4">My Skills </h1>
    <div className="divide-y m-8 rounded-2xl divide-neutral-900 border border-neutral-900">
        
      {/* Row 1 */}
      <div className="grid grid-cols-5 divide-x divide-neutral-900">
        <LinkBox
          Icon={FaHtml5}
          title="HTML5"
          tooltipId="skill-tooltip"
          tooltipContent="HTML5"
          innerRef={firstLinkRef}  // ref for first icon
        />
        <LinkBox Icon={FaCss3Alt} title="CSS3" tooltipId="skill-tooltip" tooltipContent="CSS3" />
        <LinkBox Icon={SiTailwindcss} title="Tailwind CSS" tooltipId="skill-tooltip" tooltipContent="Tailwind CSS" />
        <LinkBox Icon={SiJavascript} title="JavaScript" tooltipId="skill-tooltip" tooltipContent="JavaScript" />
        <LinkBox Icon={FaReact} title="React" tooltipId="skill-tooltip" tooltipContent="React" />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-2 divide-x divide-neutral-900">
        <LinkBox Icon={SiMongodb} title="MongoDB" tooltipId="skill-tooltip" tooltipContent="MongoDB" />
        <LinkBox Icon={SiMysql} title="MySQL" tooltipId="skill-tooltip" tooltipContent="MySQL" />
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-5 divide-x divide-neutral-900">
        <LinkBox Icon={FaNodeJs} title="Node.js" tooltipId="skill-tooltip" tooltipContent="Node.js" />
        <LinkBox Icon={SiExpress} title="Express.js" tooltipId="skill-tooltip" tooltipContent="Express.js" />
        <LinkBox Icon={SiFirebase} title="Firebase" tooltipId="skill-tooltip" tooltipContent="Firebase" />
        <LinkBox Icon={FaJava} title="Java" tooltipId="skill-tooltip" tooltipContent="Java" />
        <LinkBox Icon={FaGithub} title="GitHub" tooltipId="skill-tooltip" tooltipContent="GitHub" />
      </div>

      {/* Tooltip component */}
   <Tooltip
  id="skill-tooltip"
  place="center"
  effect="float"
  className="!bg-white !text-black"
  followCursor
  
  // adjust to your liking
/>
    </div>
   </>
  );
};

export default ClipPathLinks;
