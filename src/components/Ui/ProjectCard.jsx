"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import MotionSection from "../Common/MotionSection";
import UnderlineAnimation from "./UnderlineAnimation";
import { MdArrowOutward } from "react-icons/md";

const ProjectCard = ({ projects }) => {

  return (
    /* --------------------Project Card------------------- */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
      {projects.map((project) => (
        /* -------------Project Card Container------------ */
        <MotionSection className="space-y-3 md:space-y-5 lg:space-y-5 rounded-2xl" key={project?._id}>

          {/* --------------Image-Container-------------- */}
          <div className="bg-bg-dark border-2 border-bg-white-overlay rounded-xl p-5">
            <div className="overflow-hidden rounded-lg">
              <Image width={600} height={400} className="w-full h-full aspect-[4/3] hover:scale-105 transition duration-500" src={project?.thumbnail} alt="Project Thumbnail"></Image>
            </div>
          </div>

          {/* ------------Card-Body-Container------------ */}
          <div className="flex justify-between items-center">

            <div className="space-y-1.5">
              <UnderlineAnimation className="font-bold text-xl md:text-2xl lg:text-2xl">{project?.title}</UnderlineAnimation>
              <p className="font-rubik text-gray-light">{project?.category}</p>
            </div>
            {/* --------------LiveLink-Container---------- */}
            <Link href={project?.liveLink} target="_blank" rel="noopener noreferrer">

              {/* --------------Icon Container----------- */}
              <motion.div
                className="w-12 h-12 relative flex justify-center items-center hover:bg-pink-primary transition-colors border-2 border-bg-white-overlay rounded-lg overflow-hidden p-5 duration-500"
                whileHover="hover"
                initial="initial"
              >

                {/* --------------First Arrow------------ */}
                <motion.div
                  className="absolute"
                  variants={{
                    initial: { x: 0, y: 0, opacity: 1 },
                    hover: { x: 30, y: -30, opacity: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                >
                  <MdArrowOutward className="text-2xl" />
                </motion.div>
                {/* --------------Second Arrow------------ */}
                <motion.div
                  className="absolute"
                  variants={{
                    initial: { x: -30, y: 30, opacity: 0 },
                    hover: { x: 0, y: 0, opacity: 1 },
                  }}
                  transition={{ duration: 0.3, ease: "easeIn" }}
                >
                  <MdArrowOutward className="text-2xl" />
                </motion.div>

              </motion.div>
            </Link>

          </div>

        </MotionSection>
      ))
      }
    </div >
  );
};

export default ProjectCard;