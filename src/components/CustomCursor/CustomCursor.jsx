import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './CustomCursor.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState('default');
  
  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const mouseDown = () => setCursorVariant('click');
    const mouseUp = () => setCursorVariant('default');
    const mouseEnterLink = () => setCursorVariant('hover');
    const mouseLeaveLink = () => setCursorVariant('default');
    
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mousedown', mouseDown);
    window.addEventListener('mouseup', mouseUp);
    
    const links = document.querySelectorAll('a, button, .button, .team-card, .image-item');
    
    links.forEach(link => {
      link.addEventListener('mouseenter', mouseEnterLink);
      link.addEventListener('mouseleave', mouseLeaveLink);
    });
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mousedown', mouseDown);
      window.removeEventListener('mouseup', mouseUp);
      
      links.forEach(link => {
        link.removeEventListener('mouseenter', mouseEnterLink);
        link.removeEventListener('mouseleave', mouseLeaveLink);
      });
    };
  }, []);
  
  const variants = {
    default: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 15,
      y: mousePosition.y - 15,
      scale: 1.5,
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference"
    },
    click: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      scale: 0.8
    }
  };
  
  const cursorOuterVariants = {
    default: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1
    },
    hover: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      opacity: 0.5
    },
    click: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.2
    }
  };

  return (
    <>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5
        }}
      />
      <motion.div
        className="cursor-outer"
        variants={cursorOuterVariants}
        animate={cursorVariant}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 24,
          mass: 0.8
        }}
      />
    </>
  );
};

export default CustomCursor;