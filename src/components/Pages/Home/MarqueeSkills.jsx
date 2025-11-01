import SectionHeading from "@/components/Ui/SectionHeading";
import { FaBootstrap, FaChartLine, FaCss3, FaGitAlt, FaGithub, FaGlobeAmericas, FaHtml5, FaNode, FaReact, } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApi, TbBrandFramerMotion, TbBrandRedux, TbBrandThreejs, TbBrandVercel, TbTransform } from "react-icons/tb";
import { MdDevices, MdOutlineAccessibilityNew } from "react-icons/md";
import { GiFishingHook } from "react-icons/gi";
import { RiNextjsLine } from "react-icons/ri";
import { SiExpress, SiFirebase, SiMongodb, SiPostman, SiTailwindcss, SiVite } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { IoLogoFirebase } from "react-icons/io5";
import SkillsMarquee from "@/components/Ui/SkillsMarquee";
import MotionSection from "@/components/Common/MotionSection";

const MarqueeSkills = () => {

  /* --------------------Core-Skills-------------------- */
  const coreSkills = [
    { icon: <FaHtml5 />, label: "Html" },
    { icon: <FaCss3 />, label: "Css" },
    { icon: <IoLogoJavascript />, label: "JavaScript (Es6+)" },
    { icon: <BiLogoTypescript />, label: "TypeScript" },
    { icon: <FaNode />, label: "Node.js" },
    { icon: <TbTransform />, label: "DOM Manipulation" },
    { icon: <MdDevices />, label: "Responsive Design" },
    { icon: <MdOutlineAccessibilityNew />, label: "Accessibility (a11y)" },
    { icon: <FaGlobeAmericas />, label: "Cross-Browser Compatibility" },
  ];
  /* -------------FrameWorks-Libaries Skills------------- */
  const frameworksSkills = [
    { icon: <FaReact />, label: "React.js" },
    { icon: <GiFishingHook />, label: "React Hooks" },
    { icon: <RiNextjsLine />, label: "Next.js" },
    { icon: <SiExpress />, label: "Express.js" },
    { icon: <SiTailwindcss />, label: "Tailwind CSS" },
    { icon: <FaBootstrap />, label: "Bootstrap" },
    { icon: <TbBrandRedux />, label: "Redux" },
    { icon: <TbBrandFramerMotion />, label: "Framer Motion" },
    { icon: <FaChartLine />, label: "Rechart" },
    { icon: <TbBrandThreejs />, label: "Three.js" },
  ];
  /* ----------Tools & Technologies Skills--------------- */
  const toolsSkills = [
    { icon: <FaGitAlt />, label: "Git" },
    { icon: <FaGithub />, label: "Github" },
    { icon: <SiMongodb />, label: "MongoDB" },
    { icon: <SiFirebase />, label: "Firebase" },
    { icon: <TbApi />, label: "Rest-Api" },
    { icon: <SiPostman />, label: "Postman" },
    { icon: <SiVite />, label: "Vite" },
    { icon: <VscVscode />, label: "Vs-Code" },
    { icon: <TbBrandVercel />, label: "Vercel" },
    { icon: <IoLogoFirebase />, label: "Firebase" },
  ];

  return (
    /* -------------------Marquee-Skills----------------- */
    <section className="section sectionPadding">

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='My Skills' title=<>Celebrating Success & <br />Experience</> description='Explore key milestones and successes from my journey—highlighting growth, dedication, and impactful achievements.'></SectionHeading>

      {/* -----------------Marquee-Container--------------- */}
      <div className="space-y-3">

        {/* --------------------Core-Skills---------------- */}
        <MotionSection><SkillsMarquee skills={coreSkills}></SkillsMarquee></MotionSection>
        {/* ---------------FrameWorks-Skills--------------- */}
        <MotionSection><SkillsMarquee direction="right" skills={frameworksSkills}></SkillsMarquee></MotionSection>
        {/* ------------------Tools-Skills----------------- */}
        <MotionSection><SkillsMarquee skills={toolsSkills}></SkillsMarquee></MotionSection>

      </div>

    </section>
  );
};

export default MarqueeSkills;