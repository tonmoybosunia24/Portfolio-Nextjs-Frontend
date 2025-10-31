import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import MotionSection from "../Common/MotionSection";

const ProjectCard = ({ projects }) => {

  return (
    /* --------------------Project Card------------------- */
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
      {projects.map((project) => (
        /* -------------Project Card Container------------ */
        <MotionSection className="bg-bg-dark space-y-5 rounded-2xl p-5" key={project?._id}>

          {/* --------------Image-Container-------------- */}
          <div className="overflow-hidden rounded-xl">
            <Image width={400} height={300} className="w-full hover:scale-105 transition duration-500" src={project?.thumbnail} alt="Project Thumbnail"></Image>
          </div>

          {/* ------------Card-Body-Container------------ */}
          <div className="flex justify-between items-center space-y-3">

            {/* ---------------Title-Github-------------- */}
            <div className="space-y-2">
              {/* ----------------Card-Title------------- */}
              <h3 className="font-bold text-base md:text-base lg:text-2xl hover:text-pink-primary">{project?.title}</h3>
              {/* --------------Github-Links------------- */}
              <div className="flex gap-2">
                <Link href={project?.githubFrontEnd} target="_blank" className="font-rubik font-semibold hover:bg-pink-primary text-gray-light hover:text-white text-xs md:text-xs lg:text-sm border-2 border-bg-white-overlay rounded-full px-2 md:px-2 lg:px-5 py-1">FrontEnd</Link>
                <Link href={project?.githubBackEnd} target="_blank" className="font-rubik font-semibold hover:bg-pink-primary text-gray-light hover:text-white text-xs md:text-xs lg:text-sm border-2 border-bg-white-overlay rounded-full px-2 md:px-2 lg:px-5 py-1">BackEnd</Link>
              </div>
            </div>

            {/* ------------------Live-Link--------------- */}
            <Button><Link href={project?.liveLink} target="_blank">View Design</Link></Button>

          </div>

        </MotionSection>
      ))
      }
    </div >
  );
};

export default ProjectCard;