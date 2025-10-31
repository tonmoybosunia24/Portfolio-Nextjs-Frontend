import MotionSection from "../Common/MotionSection";

const SectionHeading = ({ subtitle, title, description }) => {
  return (
    /* ---------------Section Heading Container------------- */
    <MotionSection className={`space-y-1 text-center pb-16`}>
      {/* ----------------Section Subtitle----------------- */}
      {subtitle && (
        <h3 className="font-rubik font-medium uppercase text-pink-primary">
          {subtitle}
        </h3>
      )}
      {/* ------------------Section Title------------------ */}
      {title && <h2 className="font-bold text-4xl">{title}</h2>}
      {/* ---------------Section Description--------------- */}
      {description && (
        <p className="w-xs md:w-xl lg:w-xl font-rubik text-sm text-gray-light text-center mx-auto">
          {description}
        </p>
      )}
    </MotionSection>
  );
};

export default SectionHeading;
