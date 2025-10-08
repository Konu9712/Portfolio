import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './ExperienceSection.css';
import CoverFlowCarousel from '../../Widgets/Carousel/Carousel';
import img11 from '../../Portfolio_img/Voysn/1.png'
import img12 from '../../Portfolio_img/Voysn/2.png'
import img13 from '../../Portfolio_img/Voysn/3.png'
import img14 from '../../Portfolio_img/Voysn/4.png'
import img21 from '../../Portfolio_img/Flair/1.png'
import img22 from '../../Portfolio_img/Flair/2.png'
import img23 from '../../Portfolio_img/Flair/3.png'
import img24 from '../../Portfolio_img/Flair/4.png'
import img31 from '../../Portfolio_img/Salescamp/1.jpeg'
import img32 from '../../Portfolio_img/Salescamp/2.jpeg'
import img33 from '../../Portfolio_img/Salescamp/3.png'
import img34 from '../../Portfolio_img/Salescamp/4.png'
import img41 from '../../Portfolio_img/DreamChild/1.jpeg'
import img42 from '../../Portfolio_img/DreamChild/2.jpeg'
import img43 from '../../Portfolio_img/DreamChild/3.jpeg'


const experienceData = [
  {
    company: 'Voysn',
    role: 'Frontend Developer',
    duration: 'Feb 2024 - Oct 2024',
    points: [
      'Implemented video player suggestions, boosting user engagement by extending average viewing duration by 20 minutes.',
      'Developed encryption-decryption features, reducing streaming start times by 30% for a more secure experience.'
    ],
    images: [
      img11,
      img13,
      img12,
      img14,
    ],
  },
  {
    company: 'Flair Airlines',
    role: 'Software Engineer',
    duration: 'May 2023 - Dec 2023',
    points: [
      'Designed CI/CD pipelines with Jenkins/GitHub, cutting deployment time by 30% and increasing release frequency 9x.',
      'Migrated 5 on-premise applications to AWS, saving 20% in costs and improving performance.',
      'Reduced critical issue resolution time from 2 hours to 30 minutes with new monitoring tools.'
    ],
    images: [
      img21,
      img22,
      img23,
      img24
    ],
  },
  {
    company: 'Pixer Digital',
    role: 'Full Stack Developer',
    duration: 'Dec 2021 - Aug 2022',
    points: [
      'Developed email integration and project management modules, increasing sales by 70%.',
      'Built scalable REST APIs for CRM serving 23k requests/hour.',
      'Crafted modules with ReactDND & React Table, boosting customer engagement by 70%.',
    ],
    images: [
      img31,
      img32,
      img33,
      img34
    ],
  },
  {
    company: 'Dynamic Dreamz',
    role: 'Junior Developer',
    duration: 'Sept 2020 - Nov 2021',
    points: [
      'Created an ERP from scratch, acquiring 3.2 million users.',
      'Led design of microservices generating $1.3M in annual revenue.',
      'Built a MERN e-commerce platform with $1.6M in sales and 88% increased retention.'
    ],
    images: [
      img41,
      img42,
      img43
    ],
  },
];

const ExperienceSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="experience-section">
      <div className="experience-container">
        <motion.h2 
          className="experience-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          My Career Journey
        </motion.h2>

        <div className="experience-layout">
          <div className="company-selector">
            {experienceData.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={`company-tab ${activeTab === index ? 'active' : ''}`}
              >
                <p className="company-name">{exp.company}</p>
                <p className="company-duration">{exp.duration}</p>
              </button>
            ))}
          </div>

          <div className="experience-details">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="experience-card"
              >
                <h3 className="experience-role">{experienceData[activeTab].role}</h3>
                <p className="experience-company">
                  at <span className="highlight">{experienceData[activeTab].company}</span>
                </p>
                
                <ul className="experience-points">
                  {experienceData[activeTab].points.map((point, i) => (
                    <li key={i} className="experience-point">
                      <CheckCircle className="point-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                  <CoverFlowCarousel payload ={experienceData[activeTab]}  />
                {/* <div className="experience-image-container">
                  <img 
                    src={experienceData[activeTab].images[currentImageIndex]} 
                    alt={experienceData[activeTab].company} 
                    className="experience-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="image-fallback">
                    <span>{experienceData[activeTab].company}</span>
                  </div>
                </div>

                <div className="carousel-controls">
                  <button onClick={handlePrevImage} className="carousel-button prev-button">
                    &lt;
                  </button>
                  <span className="current-image-count">
                    {currentImageIndex + 1} / {experienceData[activeTab].images.length}
                  </span>
                  <button onClick={handleNextImage} className="carousel-button next-button">
                    &gt;
                  </button>
                </div> */}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;