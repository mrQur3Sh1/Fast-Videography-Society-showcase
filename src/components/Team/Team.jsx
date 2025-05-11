import { useState, useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';
import './Team.css';

const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <img
      className={`${className || ''} ${isLoaded ? 'loaded' : 'loading'}`}
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setIsLoaded(true)}
    />
  );
};

const TeamCard = ({ member, variants }) => {
  return (
    <motion.div
      className="team-card"
      variants={variants}
      whileHover={{
        y: -10,
        transition: { duration: 0.2 },
      }}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="member-image">
            <LazyImage src={member.image} alt={member.name} />
          </div>
          <div className="member-info">
            <h3>{member.name}</h3>
            <p className="member-role">{member.role}</p>
          </div>
        </div>

        <div className="card-back glass">
          <h3>{member.name}</h3>
          <p className="member-role">{member.role}</p>
          <p className="member-bio">{member.bio}</p>
          <div className="social-links">
            {member.social.map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });
  const controls = useAnimation();
  
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const itemsPerPage = 6;

  const teamMembers = [
    {
      name: "Muiz Qadir",
      role: "Mentor",
      image: "assets/muiz.jpg",
      bio: "Mentor with a passion for guiding and inspiring others through documentary storytelling",
      social: [{ icon: <Instagram size={18} />, url: "#" }]
    },
    {
      name: "Muhammad Bilal Qureshi",
      role: "President",
      image: "/assets/bilal.jpg",
      bio: "Visionary leader driving the organization's success and fostering growth",
      social: [
        { icon: <Instagram size={18} />, url: "https://www.instagram.com/artbyqureshii/" },
        { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/muhammad-bilal-qureshi-52236528a" }
      ]
    },
    {
      name: "Abdul Rehman",
      role: "Vice President",
      image: "/assets/mani.jpg",
      bio: "Strategic planner, assisting in leadership and decision-making processes.",
      social: [
        { icon: <Instagram size={18} />, url: "https://www.instagram.com/abdulrehman2" },
        { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/abdulrehman377/" }
      ]
    },
    {
      name: "Usman Ifty",
      role: "General Secretary",
      image: "/assets/ifty.jpg",
      bio: "Organized and detail-oriented, ensuring smooth communication and operations.",
      social: [
        { icon: <Instagram size={18} />, url: "https://www.instagram.com/ifty.reels" },
        { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/usman-awan-a85877359/" }
      ]
    },
    {
      name: "Tahmeed Ahmad",
      role: "Post Production Lead",
      image: "/assets/tahmeed.jpg",
      bio: "Expert in finalizing and polishing multimedia content for impactful results.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/tahmeedahmed16" }]
    },
    {
      name: "Isfar Probot",
      role: "Creative Director",
      image: "/assets/probot.jpg",
      bio: "Inspires innovation and creative direction to bring ideas to life.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/isfar_probot" }]
    },
    {
      name: "Abubakar Sohail",
      role: "Logistics Manager",
      image: "/assets/kachra.jpg",
      bio: "Efficiently coordinates resources and ensures seamless execution of operations.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/abubakar.sohail.7" }]
    },
    {
      name: "Hamna Alim",
      role: "Social Media Head",
      image: "/assets/hamna.jpg",
      bio: "Strategizes and manages social media presence to engage and grow audiences.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/pictronaa" }]
    },
    {
      name: "Maidah Nasir",
      role: "Social Media Co-Head",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
      bio: "Supports and collaborates on managing social media strategies and campaigns.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/maidahhh_906" }]
    },
    {
      name: "Mariam Fatima",
      role: "Testimonial Head",
      image: "/assets/mariam.jpg",
      bio: "Responsible for gathering and showcasing impactful testimonials",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/mariamffatima" }]
    },
    {
      name: "Sardar Sameer",
      role: "Reels Head",
      image: "/assets/sameer.png",
      bio: "Leads the production and strategy of captivating social media reels.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/i.sameerrr__" }]
    },
    {
      name: "Aima Rashid",
      role: "Reels Co-Head",
      image: "/assets/aima.jpg",
      bio: "Oversees the creation and management of engaging social media reels.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/_whyaimaaa" }]
    },
    {
      name: "UmeAiman",
      role: "Logistics Head",
      image: "/assets/aimen.jpg",
      bio: "Manages and oversees all logistics operations for smooth functioning.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/8.8.4004" }]
    },
    {
      name: "Noorulain",
      role: "Design Head",
      image: "/assets/noor.jpg",
      bio: "Leads design efforts, ensuring creative and visually appealing outcomes.",
      social: [{ icon: <Instagram size={18} />, url: "https://www.instagram.com/nooremonn" }]
    },
  ];

  const totalPages = Math.ceil(teamMembers.length / itemsPerPage);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const getDisplayedMembers = () => {
    const start = (currentPage - 1) * itemsPerPage;
    return teamMembers.slice(start, start + itemsPerPage);
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  // When the page changes, update the animation state
  useEffect(() => {
    // Start with visible animation when component mounts or page changes
    controls.start('visible')
      .then(() => {
        setIsAnimating(false);
      });
  }, [currentPage, controls]);

  const handlePageChange = (pageNumber) => {
    // Prevent changing page during animation
    if (isAnimating || currentPage === pageNumber) return;
    
    setIsAnimating(true);
    
    // First fade out
    controls.start('hidden').then(() => {
      // Then change page
      setCurrentPage(pageNumber);
      // Animation to visible will be triggered by the useEffect above
    });
  };

  return (
    <section id="team" className="team">
      <div className="container">
        <motion.div
          ref={ref}
          className="team-content"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2 className="section-title" variants={itemVariants}>
            Meet Our Team
          </motion.h2>

          <motion.p className="team-description" variants={itemVariants}>
            Our executive body consists of passionate creatives who lead our society with vision and expertise.
            Each member brings unique skills that contribute to our collective success.
          </motion.p>

          <motion.div className="team-grid" variants={containerVariants}>
            {getDisplayedMembers().map((member, index) => (
              <TeamCard
                key={`member-${currentPage}-${index}`}
                member={member}
                variants={cardVariants}
              />
            ))}
          </motion.div>

          {totalPages > 1 && (
            <motion.div className="pagination" variants={itemVariants}>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`pagination-button ${currentPage === i + 1 ? 'active' : ''} ${isAnimating ? 'disabled' : ''}`}
                  disabled={isAnimating}
                >
                  {i + 1}
                </button>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Team;