
import React, { useEffect } from 'react';
import { Toaster, toast } from 'sonner'; 
import HeroSection from './Components/HeroSection/HeroSection';
import SkillsSection from './Components/SkillsSection/SkillsSection';
import ExperienceSection from './Components/ExperienceSection/ExperienceSection';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden">
      <HeroSection/>
      <SkillsSection/>
      <ExperienceSection/>
       <Toaster theme="dark" position="bottom-right" />
      </div>
  );
}

export default App;
