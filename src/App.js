
import React, { useEffect } from 'react';
import { Toaster } from 'sonner'; 
import HeroSection from './Components/HeroSection/HeroSection';
import SkillsSection from './Components/SkillsSection/SkillsSection';
import ExperienceSection from './Components/ExperienceSection/ExperienceSection';
import ProjectsSection from './Components/ProjectsSection/ProjectsSection';
import EducationSection from './Components/EducationSection/EducationSection';
import ContactSection from './Components/ContactSection/ContactSection';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeroSection/>
      <SkillsSection/>
      <ExperienceSection/>
      <ProjectsSection/>
      <EducationSection/>
      <ContactSection/>
       <Toaster theme="dark" position="bottom-right" />
      </div>
  );
}

export default App;
