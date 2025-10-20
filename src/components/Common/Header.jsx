import Navbar from './Navbar';
import profile from '../../../public/Images/ProfileImage/ProfileImage.png'
import bannerBackground from '../../../public/Images/Banner/BannerBackground.jpg'
import Image from 'next/image';
import Button from '../Ui/Button';
import TypeWriter from '../Ui/TypeWriter';
import AnimatedHeading from '../Ui/AnimatedHeading';

const Header = () => {
  return (
    /* -------------------Header Section------------------ */
    <header className='w-full max-h-screen flex flex-col gap-14 lg:gap-5 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bannerBackground.src})` }}>

      <div><Navbar></Navbar></div>

      {/* -----------Header Section Container------------ */}
      <div className='section flex flex-col md:flex-row lg:flex-row justify-between items-center gap-10 overflow-hidden'>

        {/* --------------Header Left Section------------ */}
        <div className='lg:flex-4/9 space-y-2 md:pb-10 lg:pb-0'>
          <h2>
            <span className='font-bold text-2xl'>Hello</span> <br />
            <span className='font-bold text-5xl md:text-3xl lg:text-7xl'>i’m Tonmoy</span> <br />
            <span className='font-bold text-pink-primary text-4xl md:text-2xl lg:text-5xl'><TypeWriter></TypeWriter></span>
          </h2>
          <p className='font-rubik text-base md:text-sm lg:text-base'>
            I’m a passionate Front-End Developer specialized in building modern, responsive, and user-friendly web applications. I love turning ideas into real digital experiences.
          </p>
          {/* -------------Header Left Button------------ */}
          <Button>View Portfolio</Button>
        </div>

        {/* --------------Header Right Section----------- */}
        <div className='relative flex flex-col justify-center items-center lg:flex-5/9'>
          {/* ---------------Header Right Upper Text---------------- */}
          <AnimatedHeading className={'absolute top-2/5 font-bold text-4xl lg:text-6xl z-0'}>
            WEB DEVELOPER
          </AnimatedHeading>
          {/* ---------------Header Right Profile Image------------- */}
          <Image src={profile} className='lg:pl-10 z-20' alt='Profile Image'></Image>
          {/* ---------------Header Right Bottom Text---------------- */}
          <AnimatedHeading className={'absolute bottom-1/12 font-bold text-transparent text-stroke text-4xl lg:text-6xl z-30'}>
            WEB DESIGNER
          </AnimatedHeading>
        </div>

      </div>

    </header>
  );
};

export default Header;