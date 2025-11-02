import MotionSection from "@/components/Common/MotionSection";
import Count from "@/components/Ui/Count";
import SectionHeading from "@/components/Ui/SectionHeading";

const Achievements = () => {
  return (
    /* -----------------Achivements Section---------------- */
    <section className='section sectionPadding'>

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='Achievements' title=<>Celebrating Success & <br />Experience</> description='Explore key milestones and successes from my journey—highlighting growth, dedication, and impactful achievements.'></SectionHeading>

      {/* ----------Achivemnets Section Container--------- */}
      <div className="flex flex-col md:flex-col lg:flex-row gap-5">
        {/* ------------Achivemnets Section Left------------ */}
        <MotionSection style={{ background: "linear-gradient(120deg, #161415 0%, #2b1720 30%, #411727 65%, #6F0D2A 100%)" }} className="flex-4/9 rounded-xl p-10 md:p-10 lg:p-12 space-y-5">
          <div className="flex flex-col md:flex-row lg:flex-row items-start md:items-center lg:items-center gap-0 md:gap-5 lg:gap-5 font-bold">
            <h3 className="text-9xl text-pink-primary"><Count start={100} end={2}></Count></h3>
            <h3 className="text-5xl">Years Of <br /> Experience</h3>
          </div>
          <p className="font-rubik text-sm">
            Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency
          </p>
        </MotionSection>

        {/* -----------Achivemnets Section Right------------ */}
        <div className="grid grid-cols-2 gap-5 flex-5/9 text-center">
          {/* ----------------Complete Project-------------- */}
          <MotionSection className="flex flex-col justify-center items-center bg-bg-dark text-center rounded-xl py-10">
            <h3 className="font-bold text-4xl md:text-5xl lg:text-5xl"><Count start={99} end={10}></Count> +</h3>
            <p className="font-rubik text-xs md:text-sm lg:text-sm text-gray-medium">Our Project Complete</p>
          </MotionSection>
          {/* ----------------Natural Products-------------- */}
          <MotionSection className="flex flex-col justify-center items-center bg-bg-dark text-center rounded-xl py-10">
            <h3 className="font-bold text-4xl md:text-5xl lg:text-5xl"><Count start={100} end={5}></Count> +</h3>
            <p className="font-rubik text-xs md:text-sm lg:text-sm text-gray-medium">Our Natural Products</p>
          </MotionSection>
          {/* -----------------Client Reviews--------------- */}
          <MotionSection className="flex flex-col justify-center items-center bg-bg-dark text-center rounded-xl py-10">
            <h3 className="font-bold text-4xl md:text-5xl lg:text-5xl"><Count start={100} end={7}></Count> +</h3>
            <p className="font-rubik text-xs md:text-sm lg:text-sm text-gray-medium">Clients Reviews</p>
          </MotionSection>
          {/* ----------------Satisfied Client-------------- */}
          <MotionSection className="flex flex-col justify-center items-center bg-bg-dark text-center rounded-xl py-10">
            <h3 className="font-bold text-4xl md:text-5xl lg:text-5xl"><Count start={100} end={8}></Count> +</h3>
            <p className="font-rubik text-xs md:text-sm lg:text-sm text-gray-medium">Satisfied Clients</p>
          </MotionSection>
        </div>
      </div>

    </section>
  );
};

export default Achievements;