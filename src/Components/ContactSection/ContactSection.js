import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const EMAILJS_CONFIG = {
    SERVICE_ID : process.env.REACT_APP_SERVICE_ID,
    TEMPLATE_ID : process.env.REACT_APP_TEMPLATE_ID,
    PUBLIC_KEY: process.env.REACT_APP_PUBLIC_KEY,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'konarkdave9712@gmail.com',
          reply_to: formData.email,
          subject: `New Portfolio Message from ${formData.name}`
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      alert("🎉 Message sent successfully! I'll get back to you within 24 hours.");
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // User-friendly error messages
      if (error.text?.includes('Invalid configuration')) {
        alert("Email service not configured properly. Please check your EmailJS setup.");
      } else if (error.text?.includes('Quota exceeded')) {
        alert("Email quota exceeded. Please try again later or contact me directly at konarkdave9712@gmail.com");
      } else {
        alert("❌ Failed to send message. Please try again or contact me directly at konarkdave9712@gmail.com");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="contact-section">
      <div className="contact-background">
        <div className="contact-radial-gradient"></div>
      </div>
      
      <div className="contact-container">
        <motion.h2 
          className="contact-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Let's Build Something Great
        </motion.h2>
        
        <motion.p 
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          Have a project in mind or just want to connect? Feel free to reach out.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="contact-form"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="form-group">
            <input 
              name="name" 
              type="text" 
              placeholder="Your Name *"
              value={formData.name} 
              onChange={handleInputChange}
              className="form-input"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <input 
              name="email" 
              type="email" 
              placeholder="Your Email *"
              value={formData.email} 
              onChange={handleInputChange}
              className="form-input"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <div className="form-group">
            <textarea 
              name="message" 
              placeholder="Your Message *"
              value={formData.message} 
              onChange={handleInputChange}
              className="form-textarea"
              rows="5"
              required
              disabled={isSubmitting}
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
          >
            {isSubmitting ? (
              <>
                <div className="loading-spinner"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="button-icon" />
                Send Message
              </>
            )}
          </button>
        </motion.form>

        <div className="contact-footer">
          <div className="social-links">
            <a 
              href="https://github.com/Konu9712" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="GitHub"
            >
              <Github className="social-icon" />
            </a>
            <a 
              href="https://linkedin.com/in/konarkdave/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
              aria-label="LinkedIn"
            >
              <Linkedin className="social-icon" />
            </a>
            <a 
              href="mailto:konarkdave9712@gmail.com" 
              className="social-link"
              aria-label="Email"
            >
              <Mail className="social-icon" />
            </a>
          </div>
          
          <p className="copyright">
            © {new Date().getFullYear()} Konark Dave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;