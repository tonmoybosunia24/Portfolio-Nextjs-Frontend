'use client'
import { easeInOut, motion } from "motion/react"

const AnimatedHeading = ({ className, children }) => {
  /* ----------------Animated-Heading Section------------------ */
  return (
    /* ------------------ Animated-Heading -------------------- */
    <motion.h3
      initial={{ x: 5 }}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: easeInOut }} className={`${className}`}>{children}</motion.h3>
  );
};

export default AnimatedHeading;