import profile from '../../../public/Images/ProfileImage/ProfileImage4.png'
import bannerBackground from '../../../public/Images/Banner/BannerBackground.jpg'
import Image from 'next/image';
import Navbar from './Navbar';
import Button from '../Ui/Button';
import TypeWriter from '../Ui/TypeWriter';
import AnimatedHeading from '../Ui/AnimatedHeading';

const Hero = () => {
  return (
    <section
      className=" w-full h-screen md:h-auto lg:h-screen bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bannerBackground.src})` }}
    >

      <div className='absolute inset-x-0 w-full top-0'><Navbar></Navbar></div>

      <div className='section grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 items-center justify-between gap-0 lg:gap-10 h-screen md:h-auto lg:h-screen pt-14 lg:pt-0'>
        {/* --------------Header Left Section------------ */}
        <div className='md:col-span-6 lg:col-span-6 space-y-2'>
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
        <div className='relative md:col-span-6 lg:col-span-6 self-end flex flex-col justify-center items-center'>
          {/* ---------------Header Right Upper Text---------------- */}
          <AnimatedHeading className={'absolute top-2/5 font-bold text-4xl lg:text-6xl z-0'}>
            WEB DEVELOPER
          </AnimatedHeading>
          <Image
            width={400}
            height={550}
            className='object-contain z-30 max-w-3xs lg:max-w-sm xl:max-w-md '
            src={profile}
            alt='Profile Image'>
          </Image>
          {/* ---------------Header Right Bottom Text---------------- */}
          <AnimatedHeading className={'absolute bottom-1/12 font-bold text-transparent text-stroke text-4xl lg:text-6xl z-30'}>
            WEB DESIGNER
          </AnimatedHeading>
        </div>

      </div>

    </section>
  );
};

export default Hero;
