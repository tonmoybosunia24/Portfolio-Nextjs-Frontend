import Image from "next/image";
import logo from '../../../public/Images/Logo/Logo.png'

const Logo = () => {
  return (
    /* -----------------Logo Section------------------ */
    <div className="flex items-center">
      {/* ------------------Logo Image--------------- */}
      <Image className="w-8 h-8" src={logo} alt="logo" />
      {/* ------------------Brand Name--------------- */}
      <span className="font-bold text-2xl md:text-xl lg:text-3xl">Tonmoy</span>
    </div>
  );
};

export default Logo;