import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import SkillSection from '../Components/SkillSection';
import ProjectSection from '../Components/ProjectSection';
import ContactSection from '../Components/ContactSection';
import { DrawCircleText } from '../Components/DrawCircleText';
import { HoverImageLinks } from '../Components/HoverImageLinks';
import Skills from '../Components/Skills';
import ClipPathLinks from '../Try/ClipPathLinks';
import ScrollTimeline from '../Components/ScrollTimeline';




const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <ClipPathLinks></ClipPathLinks>
            {/* <Skills></Skills> */}
           
            <ScrollTimeline></ScrollTimeline>
             <HoverImageLinks></HoverImageLinks>
            {/* <SkillSection/> */}
            {/* <DrawCircleText></DrawCircleText> */}
            {/* <ProjectSection/> */}
            <ContactSection/>
        
        </div>
    );
};

export default Home;