'use client'
import { motion, useInView } from "motion/react"
import { useRef } from "react";
import Count from "./Count";

const SkillProcess = ({ skill, value }) => {

  /* --------------Ref For Progress Container----------------- */
  const ref = useRef(null);
  /* ---------------Animate When Screen View------------------ */
  const isInView = useInView(ref, { amount: 0.3, once: false });

  return (
    /* ----------------Skill Process Section----------------- */
    <div className="w-full">
      {/* -----------------Skill Name & Value--------------- */}
      <div style={{ width: `${value}%` }} className="flex justify-between py-2">
        <span className="font-semibold">{skill}</span>
        <span className="font-rubik"><Count start={0} end={value}></Count>%</span>
      </div>

      {/* --------------------Progress-Bar------------------ */}
      <div className="w-full h-1.5 bg-bg-white-overlay rounded-full" ref={ref}>
        <motion.div
          style={{ width: "0%" }}
          animate={{
            width: isInView ? `${value}%` : '0%',
            transition: { duration: 1, easing: "ease-out" }
          }}
          className="h-1.5 bg-pink-primary rounded-full">
        </motion.div>
      </div>

    </div >
  );
};

export default SkillProcess;