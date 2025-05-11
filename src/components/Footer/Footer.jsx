import { motion } from 'framer-motion';
import { Instagram, Youtube, Mail, Camera } from 'lucide-react';
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
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/fastvideographysociety?igsh=MTh3cmRmd2RuaGNldg==", name: "Instagram" },
    { icon: <Youtube size={20} />, url: "https://www.youtube.com/@fvs_cfd", name: "YouTube" },
    { icon: <Mail size={20} />, url: "mailto: fvs.cfd@nu.edu.pk", name: "Email" },
  ];

  return (
    <motion.footer 
      className="footer"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container">
        <div className="footer-content">
          <motion.div className="footer-logo" variants={itemVariants}>
            <Camera size={28} />
            <span>FAST Videography Society</span>
          </motion.div>
          
          <motion.div className="footer-links" variants={itemVariants}>
            <div className="footer-nav">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#team">Team</a></li>
                <li><a href="#join">Join Us</a></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h4>Connect</h4>
              <div className="social-icons">
                {socialLinks.map((link, index) => (
                  <motion.a 
                    key={index} 
                    href={link.url}
                    className="footer-social-icon"
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    title={link.name}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="footer-contact">
              <h4>Contact</h4>
              <p>(041) 111 128 128 </p>
              <p>Faisalabad, Pakistan</p>
              <p>fvs.cfd@nu.edu.pk</p>
            </div>
          </motion.div>
        </div>
        
        <motion.div className="footer-bottom" variants={itemVariants}>
          <p>&copy; {currentYear} qureshi © All rights reserved.</p>
          <p className="footer-credit">Designed with ❤️ by ArtbyQureshi</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;