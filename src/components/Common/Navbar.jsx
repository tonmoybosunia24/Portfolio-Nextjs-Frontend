'use client'
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import SideBars from "./SideBars";
import Logo from "../Ui/Logo";
import { useEffect, useState } from "react";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 50)
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    /* ---------------------Navber Section--------------------- */
    <nav className={`w-full ${scrolled ? 'fixed w-full top-0  bg-bg-dark shadow-md duration-300 transition-all py-3 z-50' : '!w-full bg-transparent py-3'}`}>
      {/* ------------------Navbar-Container------------------ */}
      <div className="section flex justify-between">
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
      </div>
    </nav>
  );
};

export default Navbar;