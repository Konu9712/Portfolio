import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Smartphone, Apple, Play, Globe } from 'lucide-react';
import './ProjectsSection.css';
import img1 from '../../Portfolio_img/TravelConnct/TravelConnect1.jpg'
import img2 from '../../Portfolio_img/LinkdinAI.png'

const projectsData = [
  {
    title: 'Salescam',
    description: 'A cutting-edge, cross-platform CRM sales suite using React Native, delivering seamless functionality across Android, iOS, and Web platforms.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/372d45814_2.jpeg',
    tech: ['React Native', 'CRM', 'Cross-Platform'],
    links: {
      appstore: "https://apps.apple.com/in/app/salescamp-crm/id1479549169",
      googleplay: "https://play.google.com/store/apps/details?id=com.salescamp&pli=1",
      web: "https://www.salescamp.app/",
    }
  },
  {
    title: 'Dreamchild',
    description: 'An innovative pregnancy education platform with 280+ resources and a robust 4Q activity reporting system, resulting in a 67% surge in course completion.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/f74d50548_2.jpeg',
    tech: ['React Native', 'Firebase', 'Education'],
    links: {
      appstore: "https://apps.apple.com/in/app/dreamchild-garbh-sanskar/id1492221776",
      googleplay: "https://play.google.com/store/apps/details?id=com.weapplinse.dreamchild",
      web: "https://www.dreamchild.in/",
    }
  },
  {
    title: 'VedPay',
    description: 'A secure, multifaceted payment platform with biometric integration, streamlining card management for quick, secure transactions via a specialized scanner.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/832aeae22_VedPay1.jpg',
    tech: ['Flutter', 'Biometric', 'Security'],
    links: {
      frontend: "https://github.com/Konu9712/VedPay",
      backend: "https://github.com/Konu9712/VedPay_BackEnd",
    }
  },
  // Blank project templates - Add your projects here
  {
    title: 'TravelConnect',
    description: 'the social travel companion app. Powers destination details, attraction recommendations, user reviews, and more.',
    image: img1,    
    tech: ['NodeJs', 'Express', 'MongoDB'],
    links: {
    
      github: "https://github.com/Konu9712/TravelApp",
    }
  },
  {
    title: 'Linkdin-AI-Helper',
    description: 'LinkedIn Email Generator – A Chrome extension that uses Google Gemini AI to turn LinkedIn profiles into clever, personalized emails. Adjust the tone from witty to professional, and let it craft messages that sound like you—only sharper.',
    image: img2,
    tech: ['Gemini AI', 'JavaScript'],
    links: {
     github: "https://github.com/Konu9712/Linkdin-AI-Helper",
    }
  },
 
];

const LinkIcon = ({ type }) => {
  switch (type) {
    case 'appstore': return <Apple className="link-icon" />;
    case 'googleplay': 
    case 'playstore': return <Play className="link-icon" />;
    case 'web': 
    case 'website': 
    case 'live': 
    case 'demo': return <Globe className="link-icon" />;
    case 'frontend': 
    case 'mobile': return <Smartphone className="link-icon" />;
    case 'backend': 
    case 'github': 
    case 'code': 
    case 'api': 
    case 'docs': return <Github className="link-icon" />;
    default: return <ExternalLink className="link-icon" />;
  }
}

const ProjectsSection = () => {
  // Horizontal scroll handler
  const scrollProjects = (direction) => {
    const scroller = document.getElementById('projectsScroller');
    if (scroller) {
      const card = scroller.querySelector('.project-card');
      const scrollAmount = card ? card.offsetWidth + 24 : 300; // 24px gap
      scroller.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }
  };
  return (
    <section className="projects-section">
      <div className="projects-background">
        <div className="projects-radial-gradient"></div>
      </div>
      
      <div className="projects-container">
        <motion.h2 
          className="projects-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-scroll-btns">
          <button className="scroll-btn left" aria-label="Scroll Left" onClick={() => scrollProjects(-1)}>
            &#8592;
          </button>
          <button className="scroll-btn right" aria-label="Scroll Right" onClick={() => scrollProjects(1)}>
            &#8594;
          </button>
        </div>
        <div className="projects-horizontal-wrapper">
          <div className="projects-horizontal-scroller" id="projectsScroller">
            {projectsData.map((project, index) => (
              <motion.div 
                key={index}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {Object.entries(project.links).map(([type, url]) => (
                      <a 
                        key={type}
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        <LinkIcon type={type} />
                        {type}
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;