import SectionHeading from "@/components/Ui/SectionHeading";
import Image from "next/image";
import line from '../../../../public/Images/Line/Line.png'
import MotionSection from "@/components/Common/MotionSection";

const EducationExperience = () => {

  /* ----------------------Education Data-------------------- */
  const educations = [
    {
      id: 1, degree: 'Bachelor’s Degree (ENGLISH)', year: '2021 - Present', institution: 'Kader Boksha Memorial College, Dinajpur', description: 'Pursuing a Bachelor’s in English while learning web development and building projects.'
    },
    {
      id: 2, degree: 'Higher Secondary Certificate (HSC)', year: '2018-2020', institution: 'Holy Land College, Dinajpur', description: 'Completed HSC in Science, developing strong analytical and problem-solving skills.'
    },
    {
      id: 3, degree: 'Secondary School Certificate (SSC)', year: '2017-2018', institution: 'Tepriganj Adarsha B.L High Scrool, Panchagarh', description: 'Achieved SSC in Science, building a solid foundation in core subjects and discipline.'
    },
    {
      id: 4, degree: 'Junior School Certificate (JSC)', year: '2014-2015', institution: 'Tepriganj Adarsha B.L High Scrool, Panchagarh', description: 'Completed JSC, developing strong basic academic skills and a passion for learning.'
    }
  ]

  return (
    /* ---------------Eductaion & Experience----------------- */
    <section className="section sectionPadding">

      {/* -----------------Section Heading------------------ */}
      <SectionHeading subtitle='Education & Experience' title=<>Empowering Creativity <br /> Through</> description='A brief overview of my academic background and professional journey, highlighting the key milestones that have shaped my skills and expertise.'></SectionHeading>

      {/* ---------------Section Container------------------ */}
      <div className="space-y-5">
        {/* ----------------Education Heading--------------- */}
        <div className="flex items-center gap-5">
          <h3 className="font-bold text-3xl">Education</h3>
          <Image className="h-1.5" src={line} alt="Line"></Image>
        </div>
        {/* ----------------Education Contain--------------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {educations.map((education) => (
            <MotionSection key={education?.id} className="bg-bg-dark rounded-lg space-y-2 p-5">
              <div className="flex justify-between items-center gap-5">
                <h2 className="font-bold text-base md:text-base lg:text-xl">{education?.degree}</h2>
                <h4 className="font-bold text-sm md:text-sm lg:text-lg">{education?.year}</h4>
              </div>
              <p className="font-bold text-base md:text-base lg:text-xl">{education?.institution}</p>
              <p className="font-rubik text-gray-light text-sm">{education?.description}</p>
            </MotionSection>
          ))}
        </div>
      </div>

    </section>
  );
};

export default EducationExperience;