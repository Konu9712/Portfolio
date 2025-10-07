import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import './EducationSection.css';

const educationData = [
  {
    title: 'Mobile Solution Development',
    institution: 'Conestoga College, ON',
    date: 'Sept 2022 - Dec 2023',
    type: 'Graduate Diploma',
  },
  {
    title: 'B.E. Information and Technology',
    institution: 'Gujarat Technological University, India',
    date: 'Aug 2016 - Aug 2020',
    type: 'Bachelor of Engineering',
  },
];

const EducationSection = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: 'spring' }}
  }
  
  return (
    <section className="education-section">
      <div className="education-container">
        <motion.h2 
          className="education-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Education & Credentials
        </motion.h2>

        <div className="education-timeline">
          <div className="timeline-line" aria-hidden="true"></div>
          <motion.ul
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="education-list"
          >
            {educationData.map((edu, index) => (
              <motion.li key={index} variants={item} className="education-item">
                <div className="education-content">
                  <div className={`education-info ${index % 2 === 0 ? 'left-side' : 'right-side'}`}>
                    <div className="timeline-dot">
                      <GraduationCap className="dot-icon"/>
                    </div>
                    <div className={`education-details mobile-view ${index % 2 !== 0 ? 'hidden-on-desktop' : ''}`}>
                      <h3 className="education-title">{edu.title}</h3>
                      <p className="education-institution">{edu.institution}</p>
                      <p className="education-date">{edu.date}</p>
                      <span className="education-type">{edu.type}</span>
                    </div>
                  </div>
                  <div className={`education-details desktop-view ${index % 2 !== 0 ? 'right-details' : 'left-details'}`}>
                    <h3 className="education-title">{edu.title}</h3>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-date">{edu.date}</p>
                    <span className="education-type">{edu.type}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;