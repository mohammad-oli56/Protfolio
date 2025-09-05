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
import Contact from '../Components/Contact';




const Home = () => {
    return (
        <div>
          
            <Banner/>
            <About/>
            <ClipPathLinks></ClipPathLinks> 

           {/* <Skills></Skills> */}
           
            <ScrollTimeline></ScrollTimeline>
            <h1 className='text-black text-center font-bold text-4xl my-5'> My Projects</h1>
             <HoverImageLinks></HoverImageLinks>

            {/* <SkillSection/> */}
            

            {/* <ProjectSection/> */}
            {/* <ContactSection/> */}

            <Contact></Contact>
        
        </div>
    );
};

export default Home;