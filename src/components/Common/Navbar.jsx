import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import SideBars from "./SideBars";
import Logo from "../Ui/Logo";

const Navbar = () => {
  /* ---------------------Navber Section--------------------- */
  return (
    <nav className="flex justify-between items-center">
      {/* --------------------Logo Section------------------ */}
      <div>
        <Logo></Logo>
      </div>
      {/* ------------------Navigation Links --------------- */}
      <div className="hidden md:hidden lg:block">
        <NavLinks></NavLinks>
      </div>
      {/* ---------------Social Links & Sidebar------------- */}
      <div className="flex items-center gap-5">
        {/* -----------------Social Links------------------  */}
        <SocialLinks className="hidden lg:flex"></SocialLinks>
        {/* ---------------------SideBars------------------- */}
        <SideBars></SideBars>
      </div>
    </nav>
  );
};

export default Navbar;