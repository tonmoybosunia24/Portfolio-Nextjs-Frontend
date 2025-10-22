'use client'
import { motion } from "motion/react"

const MotionSection = ({ children, className, style }) => {
  return (
    /* -----------------Motion-Section---------------- */
    <motion.section
      className={className}
      style={style}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {children}
    </motion.section>
  );
};

export default MotionSection;