import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import "./HeroSection.css"; // Import CSS file

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section className="hero-section">
      <div className="hero-bg-overlay">
        <div className="hero-gradient-overlay"></div>
        <div className="hero-radial-gradient"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-heading">
          Konark Dave
        </motion.h1>
        <motion.p variants={itemVariants} className="hero-subtitle">
          Software Developer crafting high-impact apps and elegant experiences.
        </motion.p>
      </motion.div>

      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="hero-scroll-content">
          <span className="hero-scroll-text">Explore</span>
          <ArrowDown className="hero-scroll-icon" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;