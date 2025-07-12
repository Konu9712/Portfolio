import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Wrench } from 'lucide-react';
import './SkillsSection.css';

const skillsData = {
  frameworks: {
    icon: <Code className="skill-icon skill-icon-cyan" />,
    title: 'Frameworks',
    skills: ['React.js', 'React Native', 'Node.js', 'Express', 'TensorFlow','Next.js'],
  },
  databases: {
    icon: <Database className="skill-icon skill-icon-lime" />,
    title: 'Databases & Libraries',
    skills: ['MongoDB', 'MySQL', 'GraphQL','Amazon RDS'],
  },
  tools: {
    icon: <Wrench className="skill-icon skill-icon-amber" />,
    title: 'Tools & Technology',
    skills: ['Socket.IO', 'Git', 'Jira', 'Figma', 'CI/CD', 'REST API', 'AWS', 'Redux','WebRTC' ],
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 100,
    },
  }),
};

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <div className="skills-background">
        <div className="skills-radial-gradient"></div>
      </div>
      
      <div className="skills-container">
        <motion.h2 
          className="skills-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Technologies Master
        </motion.h2>

        <div className="skills-grid">
          {Object.values(skillsData).map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-card"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
            >
              {category.icon}
              <h3 className="skill-card-title">{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;