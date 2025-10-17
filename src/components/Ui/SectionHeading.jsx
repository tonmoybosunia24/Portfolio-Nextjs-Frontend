const SectionHeading = ({ subtitle, title, description }) => {
  return (
    /* ---------------Section Heading Container------------- */
    <div className="space-y-1">
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
        <p className="w-sm md:w-xl lg:w-2xl font-rubik text-sm text-gray-light text-center">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
