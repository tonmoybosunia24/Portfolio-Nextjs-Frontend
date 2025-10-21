'use client'
import { motion } from "motion/react"

const MotionSection = ({ children, className }) => {
  return (
    /* -----------------Motion-Section---------------- */
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;