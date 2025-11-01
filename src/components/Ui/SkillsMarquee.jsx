import Marquee from "react-fast-marquee";

const SkillsMarquee = ({ skills = [], speed = 20, gradient = true, gradientColor = "#060606", gradientWidth = 100, direction = 'left' }) => {

  return (
    /* ------------------Marquee-Section------------------ */
    <Marquee
      pauseOnHover
      speed={speed}
      gradient={gradient}
      direction={direction}
      gradientWidth={gradientWidth}
      gradientColor={gradientColor}
    >
      {/* ---------------Marquee-Container--------------- */}
      <div className="flex gap-5 ">
        {/* ------------------Map-Skills----------------- */}
        {skills.map((skill, index) => (

          /* -----------------Marquee Line---------------- */
          <div className="flex items-center gap-2 bg-bg-dark font-semibold text-sm md:text-base lg:text-xl rounded-md px-3 py-2" key={index}>
            <span className="text-pink-primary">{skill?.icon}</span>
            <p>{skill?.label}</p>
          </div>

        ))}
      </div>
    </Marquee>
  );
};

export default SkillsMarquee;