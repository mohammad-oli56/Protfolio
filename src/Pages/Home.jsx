import React from 'react';
import Banner from '../Components/Banner';
import About from '../Components/About';
import SkillSection from '../Components/SkillSection';
import ProjectSection from '../Components/ProjectSection';
import ContactSection from '../Components/ContactSection';



const Home = () => {
    return (
        <div>
            <Banner/>
            <About/>
            <SkillSection/>
            
            <ProjectSection/>
            <ContactSection/>
        
        </div>
    );
};

export default Home;