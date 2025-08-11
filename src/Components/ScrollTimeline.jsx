import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaSchool, FaStar } from 'react-icons/fa';

const WorkIcon = () => <FaBriefcase />;
const SchoolIcon = () => <FaSchool />;
const StarIcon = () => <FaStar />;

const ScrollTimeline = () => {
  return (
    <VerticalTimeline>
      {/* Work Experience 1 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
        date="2011 - present"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <img src="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww" alt="" />
        <h3>my name is oli</h3>
        <h4>Miami, FL</h4>
        <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
      </VerticalTimelineElement>

      {/* Work Experience 2 */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(45, 125, 150)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(45, 125, 150)' }}
        date="2010 - 2011"
        iconStyle={{ background: 'rgb(45, 125, 150)', color: '#fff' }}
        icon={<WorkIcon />}
      >
        <h3>Art Director</h3>
        <h4>San Francisco, CA</h4>
        <p>Creative Direction, User Experience, Visual Design, SEO, Online Marketing</p>
      </VerticalTimelineElement>

      {/* Education */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
        date="April 2013"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
        icon={<SchoolIcon />}
      >
        <h3>Content Marketing for Web, Mobile and Social Media</h3>
        <h4>Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>

      {/* More items এভাবে যোগ করো */}

      {/* Timeline end icon */}
      <VerticalTimelineElement
        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default ScrollTimeline;
