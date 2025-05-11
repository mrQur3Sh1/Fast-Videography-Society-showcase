import { useRef } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        when: "beforeChildren", 
        staggerChildren: 0.3 
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="video-background">
        <div className="video-overlay"></div>
        <video ref={videoRef} autoPlay muted loop playsInline className="background-video">
          <source src="/assets/daira.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      <motion.div 
        className="hero-content container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="welcome-text" variants={itemVariants}>
          <span>Welcome to</span>
        </motion.div>
        
        <motion.h1 variants={itemVariants}>
          FAST <span>Videography</span> Society
        </motion.h1>
        
        <motion.p variants={itemVariants}>
          Capturing Moments, Creating Stories
        </motion.p>
        
        <motion.div className="hero-buttons" variants={itemVariants}>
          
          

          <motion.a
           href="#team"
          className="button secondary"
            
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.4 }}
          onClick={() => setMobileMenuOpen(false)}
          >
            Meet Our Team
          </motion.a>


          
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          variants={itemVariants}
        >
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div>
            <span className="scroll-arrow"></span>
            <span className="scroll-arrow"></span>
            <span className="scroll-arrow"></span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;