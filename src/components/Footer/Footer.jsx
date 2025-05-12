import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, Camera, MapPin, Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const socialLinks = [
    { 
      icon: <Instagram size={20} />, 
      url: "https://www.instagram.com/fastvideographysociety", 
      name: "Instagram" 
    },
    { 
      icon: <Youtube size={20} />, 
      url: "https://www.youtube.com/@fvs_cfd", 
      name: "YouTube" 
    },
    { 
      icon: <Mail size={20} />, 
      url: "mailto:fvs.cfd@nu.edu.pk", 
      name: "Email" 
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
  
  ];

  return (
    <motion.footer 
      className="professional-footer"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="footer-container">
        <div className="footer-grid">
          <motion.div className="footer-branding" variants={itemVariants}>
            <div className="footer-logo">
          
              <img src="/assets/fvs.png" alt="Logo" height={50} width={50}/>
              <span>FAST Videography Society</span>
            </div>
            <p className="footer-tagline">Capturing Moments, Creating Memories</p>
          </motion.div>
          
          <motion.div className="footer-quick-links" variants={itemVariants}>
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div className="footer-contact-info" variants={itemVariants}>
            <h4>Contact Us</h4>
            <div className="contact-details">
              <p>
                <Phone size={16} strokeWidth={1.5} />
                <span>(041) 111 128 128</span>
              </p>
              <p>
                <Mail size={16} strokeWidth={1.5} />
                <span>fvs.cfd@nu.edu.pk</span>
              </p>
              <p>
                <MapPin size={16} strokeWidth={1.5} />
                <span>FAST University, Faisalabad, Pakistan</span>
              </p>
            </div>
          </motion.div>
          
          <motion.div className="footer-social-links" variants={itemVariants}>
            <h4>Connect With Us</h4>
            <div className="social-icons">
              {socialLinks.map((link, index) => (
                <motion.a 
                  key={index} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        <motion.div className="footer-bottom" variants={itemVariants}>
          <div className="copyright">
            &copy; {currentYear} FAST Videography Society. All Rights Reserved.
          </div>
          <div className="footer-credits">
            Designed with ❤️ by FVS Creative Team
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;