import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { SendHorizontal } from 'lucide-react';
import './Join.css';


const Join = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    interest: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  const containerVariants = {
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
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://formspree.io/f/mvgabbyl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        interest: formData.interest,
        message: formData.message
      })
    });

    if (response.ok) {
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        interest: '',
        message: ''
      });

      // Optionally hide success after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      alert("There was an issue submitting the form. Please try again.");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    alert("Error submitting form. Check console for more details.");
  }
};


  
  const interestOptions = [
    "Videography",
    "Photography",
    "Film Making",
    "Video Editing",
    "Cinematography",
    "Production",
    "Other"
  ];

  return (
    <section id="join" className="join">
      <div className="container">
        <motion.div
          ref={ref}
          className="join-content"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Join Us
          </motion.h2>
          
          <motion.p className="join-description" variants={itemVariants}>
            Ready to be part of a creative community? Fill out the form below to join
            FAST Videography Society and embark on an exciting journey in visual storytelling.
          </motion.p>
          
          <div className="join-container">
            <motion.div className="join-info" variants={itemVariants}>
              <h3>Why Join Us?</h3>
              <ul className="benefits-list">
                <li>
                  <span className="benefit-icon">🎥</span>
                  <div>
                    <h4>Skill Development</h4>
                    <p>Enhance your videography and photography skills through workshops and hands-on experience</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">👥</span>
                  <div>
                    <h4>Networking</h4>
                    <p>Connect with like-minded creatives and build your professional network</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">📁</span>
                  <div>
                    <h4>Portfolio Building</h4>
                    <p>Create content for your portfolio through university projects and events</p>
                  </div>
                </li>
                <li>
                  <span className="benefit-icon">🏆</span>
                  <div>
                    <h4>Competition Exposure</h4>
                    <p>Participate in film festivals and competitions to showcase your talent</p>
                  </div>
                </li>
              </ul>
            </motion.div>
            
            <motion.div className="join-form-container glass" variants={itemVariants}>
              {submitted ? (
                <motion.div 
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="success-icon">✓</div>
                  <h3>Thank You!</h3>
                  <p>Your application has been submitted successfully. We'll get back to you soon!</p>
                </motion.div>
              ) : (
                <form className="join-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="interest">Area of Interest</label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your interest</option>
                      {interestOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">Tell us about yourself</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit" 
                    className="submit-button"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Submit Application
                    <SendHorizontal size={18} />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Join;