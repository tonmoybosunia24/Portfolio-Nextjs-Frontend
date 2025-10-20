"use client";
import { motion } from "motion/react";
import { HiArrowRight } from "react-icons/hi";

const Button = ({ children, className }) => {
  return (
    /* ------------------Button Container--------------- */
    <motion.button
      whileHover="hover"
      initial="initial"
      className={`${className} flex justify-center items-center gap-1 bg-pink-primary font-rubik text-white rounded-full px-4 py-2.5 text-sm md:px-4 md:py-2.5 md:text-sm lg:px-5 lg:py-2.5 lg:text-base group`}
    >
      {/* --------------Left Button Arrow-------------- */}
      <motion.span
        variants={{
          initial: { opacity: 0, x: -3 },
          hover: { opacity: 1, x: 3 },
        }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
        className="hidden group-hover:block"
      >
        <HiArrowRight />
      </motion.span>
      {/* ----------- Button Text Content-------------- */}
      <motion.span
        variants={{
          initial: { x: 0 },
          hover: { x: 3 },
        }}
      >
        {children}
      </motion.span>
      {/* -------------Right Button Arrow-------------- */}
      <motion.span
        variants={{
          initial: { opacity: 1, x: 0 },
          hover: { opacity: 0, x: 3 },
        }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeIn" }}
        className="block group-hover:hidden"
      >
        <HiArrowRight />
      </motion.span>
    </motion.button>
  );
};

export default Button;
