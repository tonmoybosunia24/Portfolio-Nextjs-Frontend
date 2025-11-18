import profile from '../../../public/Images/ProfileImage/ProfileImage4.png'
import bannerBackground from '../../../public/Images/Banner/BannerBackground.jpg'
import Image from 'next/image';
import Navbar from './Navbar';
import Button from '../Ui/Button';
import TypeWriter from '../Ui/TypeWriter';
import AnimatedHeading from '../Ui/AnimatedHeading';

const Hero = () => {
  return (
    /* --------------------Hero Section-------------------- */
    <section
      className="relative w-full h-screen md:h-auto lg:h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bannerBackground.src})` }}
    >

      {/* ---------------------Navbar--------------------- */}
      <div className='absolute w-full inset-x-0 top-0'><Navbar></Navbar></div>

      <div className='section h-screen md:h-auto lg:h-screen grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between gap-0 lg:gap-10 pt-14 lg:pt-0'>
        {/* ----------------Hero Left Section------------- */}
        <div className='md:col-span-6 lg:col-span-6 space-y-2'>
          <h2>
            <span className='font-bold text-2xl'>Hello</span> <br />
            <span className='font-bold text-5xl md:text-3xl lg:text-7xl'>i’m Tonmoy</span> <br />
            <span className='font-bold text-pink-primary text-4xl md:text-2xl lg:text-5xl'><TypeWriter></TypeWriter></span>
          </h2>
          <p className='font-rubik text-base md:text-sm lg:text-base'>
            I’m a passionate Front-End Developer specialized in building modern, responsive, and user-friendly web applications. I love turning ideas into real digital experiences.
          </p>
          {/* --------------Hero Left Button-------------- */}
          <Button>View Portfolio</Button>
        </div>
        {/* ---------------Hero Right Section------------- */}
        <div className='relative md:col-span-6 lg:col-span-6 self-end flex flex-col justify-center items-center'>
          {/* -----------Hero Right Upper Text------------ */}
          <AnimatedHeading className={'absolute top-2/5 font-bold text-4xl lg:text-6xl z-0'}>
            WEB DEVELOPER
          </AnimatedHeading>
          <Image
            width={400}
            height={550}
            className='object-contain z-30 max-w-3xs lg:max-w-sm xl:max-w-xl 2xl:max-w-4xl'
            src={profile}
            alt='Profile Image'>
          </Image>
          {/* ----------Hero Right Bottom Text------------ */}
          <AnimatedHeading className={'absolute bottom-1/12 font-bold text-transparent text-stroke text-4xl lg:text-6xl z-30'}>
            WEB DESIGNER
          </AnimatedHeading>
        </div>

      </div>

    </section>
  );
};

export default Hero;
