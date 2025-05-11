import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Play, Film, Video, Camera } from 'lucide-react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const imageGrid = [
  {
    url: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Professional Camera Setup"
  },
  {
    url: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "On-Set Filming"
  },
  {
    url: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Post-Production Editing"
  },
  {
    url: "https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Collaborative Teamwork"
  }
];

  const services = [
    { icon: <Camera size={40} />, title: "Coverage", description: "Professional event coverage and videography" },
    { icon: <Video size={40} />, title: "Events Videography", description: "High-quality video production for university events" },
    { icon: <Film size={40} />, title: "Film Making", description: "Creative short films and documentary production" },
    { icon: <Play size={40} />, title: "Video Editing", description: "Professional post-production and editing services" }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={sectionVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            About Us
          </motion.h2>
          
           <motion.p className="about-description" variants={itemVariants}>
           <strong>FAST Videography Society</strong> is a leading student organization at FAST CFD campus, established in 2023. We provide a creative platform for students passionate about visual storytelling, offering hands-on experience in videography, photography, and filmmaking.
           
           Our society fosters technical skills and artistic vision, empowering members to collaborate on projects that capture the essence of university life. FVS is committed to equipping students with the tools and mentorship needed to excel in the ever-evolving media landscape.
          </motion.p>

          <motion.div className="image-grid" variants={itemVariants}>
            {imageGrid.map((image, index) => (
              <motion.div 
                key={index} 
                className="image-item"
                variants={imageVariants}
                whileHover={{ y: -10, scale: 1.05 }}
              >
                <img src={image.url} alt={image.title} />
                <div className="image-overlay">
                  <h3>{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.h3 className="services-title" variants={itemVariants}>
            What We Do
          </motion.h3>
          
          <motion.div className="services-grid" variants={itemVariants}>
            {services.map((service, index) => (
              <motion.div 
                key={index} 
                className="service-card glass"
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;