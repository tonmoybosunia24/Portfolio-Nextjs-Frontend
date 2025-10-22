import line from '../../../../public/Images/Line/Line.png'
import Image from "next/image";
import SkillProcess from "@/components/Ui/SkillProcess";
import MotionSection from '@/components/Common/MotionSection';
import SectionHeading from '@/components/Ui/SectionHeading';

const Skills = () => {
  return (
    /* ----------------------Skills Section------------------- */
    <section className="section sectionPadding">

      {/* -------------------Section Heading----------------- */}
      <SectionHeading subtitle='Code Expertise' title=<>Grow With Modern Tech <br /> Languages</> description='A showcase of my core frontend and backend skills, reflecting my dedication to building robust and modern web applications.'></SectionHeading>

      {/* -------------Skills Section Container--------------- */}
      <div className='flex flex-col md:flex-row lg:flex-row gap-10'>

        {/* --------------FrontEnd Skills container------------ */}
        <MotionSection className='w-full space-y-2'>
          {/* ----------------Heading Container---------------- */}
          <div className='flex items-center gap-5'>
            <h2 className='font-bold text-3xl md:text-3xl lg:text-4xl'>Front-End Skills</h2>
            <Image className='h-2' src={line} alt='line'></Image>
          </div>
          {/* -----------------Skills Container---------------- */}
          <div className='space-y-2'>
            <SkillProcess skill='HTML5' value={80}></SkillProcess>
            <SkillProcess skill='Tailwind' value={90}></SkillProcess>
            <SkillProcess skill='Javascript (ES6+)' value={70}></SkillProcess>
            <SkillProcess skill='React.Js' value={80}></SkillProcess>
            {/* <SkillProcess skill='Next.Js' value={90}></SkillProcess> */}
          </div>
        </MotionSection>

        {/* --------------BackEnd Skills Container------------- */}
        <MotionSection className='w-full space-y-2'>
          {/* ----------------Heading Container---------------- */}
          <div className='flex items-center gap-5'>
            <h2 className='font-bold text-3xl md:text-3xl lg:text-4xl'>Back-End Skills</h2>
            <Image className='h-2' src={line} alt='line'></Image>
          </div>
          {/* -----------------Skills Container---------------- */}
          <div className='space-y-2'>
            <SkillProcess skill='Node.Js' value={40}></SkillProcess>
            <SkillProcess skill='Expresss.Js' value={70}></SkillProcess>
            <SkillProcess skill='MongoDB' value={65}></SkillProcess>
            <SkillProcess skill='Firebase' value={80}></SkillProcess>
            {/* <SkillProcess skill='JWT/AUTH' value={60}></SkillProcess> */}
          </div>
        </MotionSection>

      </div>

    </section>
  );
};

export default Skills;