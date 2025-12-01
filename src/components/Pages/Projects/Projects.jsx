import ProjectCard from "@/components/Ui/ProjectCard";
import SectionHeading from "@/components/Ui/SectionHeading";
import getAllProjects from "@/lib/Projects/getAllProjects";

const Projects = async () => {
  
  const projects = await getAllProjects(2);

  return (
    <div className="section sectionPadding">
      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='Latest Projects' title=<>Innovative Project For <br /> Solutions</> description='Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational'></SectionHeading>
      {/* ------------------Project-Card------------------ */}
      <ProjectCard projects={projects}></ProjectCard>
    </div>
  );
};

export default Projects;