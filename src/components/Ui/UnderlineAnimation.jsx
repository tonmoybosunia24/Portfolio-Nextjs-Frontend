const UnderlineAnimation = ({ children, color = 'bg-pink-primary', className }) => {
  return (
    /* ------------------Underline Section---------------- */
    <h3 className={`${className} relative w-fit font-rubik hover:text-pink-primary text-base group cursor-pointer`}>
      {children}
      <div className={`absolute bottom-0 left-0 w-0 h-0.5 ${color} group-hover:w-full transition-all duration-300`}></div>
    </h3>
  );
};

export default UnderlineAnimation;