import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool, FaStar } from 'react-icons/fa';

const WorkIcon = () => <FaBriefcase />;
const SchoolIcon = () => <FaSchool />;
const StarIcon = () => <FaStar />;

const ScrollTimeline = () => {
  return (
    <>
     <div className='hidden lg:block'>
       <div className='font-bold  text-3xl flex justify-center gap-90 items-center text-center'>
        <h1>Education</h1>
        <h1>Experience</h1>
      </div>
     </div>
     <div className='font-bold text-2xl lg:hidden sm:block text-center'>
      <h1>Education & Experience</h1>
     </div>

      <VerticalTimeline>
        {/* Work Experience 1 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '4px solid  rgb(33, 150, 243)' }}
          date="2011 - present"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <div className='flex'>
            <img className='w-10 mr-2' src="https://media.licdn.com/dms/image/v2/D560BAQFYu3PeQ_FPTg/company-logo_200_200/company-logo_200_200/0/1729050195028/dhaka_international_university_logo?e=2147483647&v=beta&t=vVSnF-i_i12T7khc4gEBjXhSVQS1KPZ3bONGOprRIZw" alt="" />
            <h1 className='text-xl font-bold'>Dhaka International University: DIU</h1>
          </div>
          <h4 className="text-sm mt-2">
            Bachelor of Science in Computer Science and Engineering <br /> (CSE) — 3rd Year Student
          </h4>
          <h5 className="text-sm ">(2023–2027)</h5>
        </VerticalTimelineElement>

        {/* Hackathon Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(45, 125, 150)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(45, 125, 150)' }}
          date="2023"
          iconStyle={{ background: 'rgb(45, 125, 150)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h1 className='text-xl font-bold'>Team Leader - Web School Management System (Hackathon Project)</h1>
          <h1 className='text-xl font-bold'></h1>
          <h4 className='text-sm mt-2' >
            Led a team to develop a full-stack web-based school management system during a hackathon. Managed project tasks, coordinated team members, and contributed to frontend and backend development.
          </h4>
        </VerticalTimelineElement>


        {/* Education */}

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{ background: 'rgb(70, 130, 180)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(70, 130, 180)' }}
          date="Jan 2025 - Aug 2025"
          iconStyle={{ background: 'rgb(70, 130, 180)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <div className='flex'>
            <img className='w-12 h-12 mr-2 ' src="https://yt3.googleusercontent.com/PrG2FnV2yGOmoTXeXu6LDiaHgC9pSndBOORhGxBJnUWoRcKTuz0JGZYmGCA8OCUMkndvTdoJ3jU=s900-c-k-c0x00ffffff-no-rj" alt="" />

            <h4 className='font-bold text-xl'>Programming Hero <span className='text-sm'>(Web Development Course)</span></h4>
          </div>
          <h4 className="text-sm mt-2">Completed comprehensive web development training covering frontend and backend technologies.</h4>
        </VerticalTimelineElement>


        {/* More items এভাবে যোগ করো */}

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(34, 139, 34)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid rgb(34, 139, 34)' }}
          date="2024 (University Project)"
          iconStyle={{ background: 'rgb(34, 139, 34)', color: '#fff' }}
          icon={<WorkIcon />}
        >
          <h1 className='font-bold text-xl'>MySQL Group Project</h1>
          <h1 className='font-bold text-xl'>University of Dhaka International</h1>
          <h4 className="text-sm mt-2">
            Collaborated in a team to design and implement a database system using MySQL.
            Focused on data modeling, query optimization, and database management.
          </h4>
        </VerticalTimelineElement>


        {/* Timeline end icon */}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default ScrollTimeline;
