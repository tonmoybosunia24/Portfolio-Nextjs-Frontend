'use client'
import { useState } from "react";
import Logo from "../Ui/Logo";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";
import Image from "next/image";
import sidebarBanner from '../../../public/Images/Banner/SubBanner.png'
import ContactInfo from "./ContactInfo";

const SideBars = () => {
  /* --------------------State Management------------------- */
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  /* ------------------Mobile Sidebar Content--------------- */
  const MobileContent = () => (
    <div className="space-y-5">
      {/* -------------------Header Section---------------- */}
      <div className="flex justify-between items-center">
        <Logo />
        <div onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="bg-bg-white-overlay hover:bg-pink-primary rounded-full transition-colors duration-500 cursor-pointer p-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 7l10 10M7 17L17 7"></path></svg>
        </div>
      </div>
      {/* ------------------Navigation Links--------------- */}
      <NavLinks layoutStyle="sm" />
      {/* ---------------Social-Media Section-------------- */}
      <div className="space-y-2">
        <h2 className="font-bold">FIND WITH ME</h2>
        <SocialLinks />
      </div>
    </div>
  );

  /* ------------------Desktop Sidebar Content--------------- */
  const DesktopContent = () => (
    <div className="space-y-5">
      {/* ------------------Header Section--------------- */}
      <div className="flex justify-between items-center">
        <Logo />
        <div onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="bg-bg-white-overlay hover:bg-pink-primary rounded-full transition-colors duration-500 cursor-pointer p-2.5">
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m7 7l10 10M7 17L17 7"></path></svg>
        </div>
      </div>

      {/* -------------------Banner Image---------------- */}
      <Image className="rounded-lg" src={sidebarBanner} alt="Sidebar Banner" />

      {/* ------------------About Section---------------- */}
      <h2 className="font-rubik font-bold">Frontend Developer building modern web solutions with React & Next.js.</h2>
      <p className="font-rubik text-sm "> I am a skilled frontend developer with expertise in React.js, Next.js, TypeScript, and Tailwind CSS. I deliver pixel-perfect, responsive designs and scalable web applications.</p>

      {/* ---------------Contact-Information------------- */}
      <ContactInfo />

      {/* --------------Social Media Section------------- */}
      <div className="space-y-2">
        <h2 className="font-bold">FIND WITH ME</h2>
        <SocialLinks />
      </div>
    </div>
  );

  return (
    <div>
      {/* -------------Sidebar Toggle Button-------------- */}
      <div onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="bg-pink-primary hover:bg-transparent border-2 border-pink-primary hover:text-pink-primary rounded-full p-2 cursor-pointer transition-colors duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 32 32"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 8h15M5 16h22M5 24h22M5 11l3-3l-3-3"></path></svg>
      </div>
      {/* ------------------Sidebar Overlay---------------- */}
      {isSideBarOpen && (
        <div onClick={() => setIsSideBarOpen(!isSideBarOpen)} className="fixed inset-0 bg-black-light/40 backdrop-blur-md z-40 transition-opacity duration-300 cursor-crosshair" />
      )}
      {/* ------------------Sidebar Container--------------- */}
      <div className={`fixed top-0 h-screen bg-black-soft w-60 md:w-80 lg:w-80 z-50 transform transition-transform duration-300 ease-in-out shadow-lg flex flex-col p-5 overflow-y-auto left-0 lg:left-auto lg:right-0 ${isSideBarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-full'}`}>
        {/* ------------------Mobile Content---------------- */}
        <div className="lg:hidden">
          <MobileContent />
        </div>
        {/* ------------------Desktop Content--------------- */}
        <div className="hidden lg:block">
          <DesktopContent />
        </div>
      </div>
    </div>
  );
};

export default SideBars;