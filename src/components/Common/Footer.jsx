import ContactCard from "../Ui/ContactCard";
import Logo from "../Ui/Logo";
import UnderlineAnimation from "../Ui/UnderlineAnimation";
import MotionSection from "./MotionSection";
import SocialLinks from "./SocialLinks";

const Footer = () => {

  const currentYear = new Date().getFullYear();

  return (
    /* --------------------Footer Section------------------ */
    <footer className="sectionPadding bg-bg-dark">

      {/* ----------------Footer-Container-------------- */}
      <div className="section grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-7 md:gap-7 lg:gap-10 py-10 md:py-10 lg:py-20">

        {/* -----------------Logo Section--------------- */}
        <MotionSection className="lg:flex-2 lg:col-span-2 space-y-5">
          <Logo></Logo>
          <p className="text-4xl md:text-4xl lg:text-5xl"><span className="font-bold">Get Ready</span> To Create <br /> Great</p>
          <div className="w-full lg:w-2/3 flex justify-between items-center gap-5 border-b-2 border-bg-white-overlay pb-3">
            <input className="w-full font-rubik focus:outline-0 text-white" placeholder="Email Addresss" type="email" name="email" />
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"></path></svg>
            </span>
          </div>
        </MotionSection>

        {/* -------------Quick-Links Section------------ */}
        <MotionSection className="space-y-5">
          <h3 className="font-bold text-2xl md:3xl lg:text-3xl">Quick Link</h3>
          <div className="space-y-2.5">
            <UnderlineAnimation>About Me</UnderlineAnimation>
            <UnderlineAnimation>Service</UnderlineAnimation>
            <UnderlineAnimation>Contact Us</UnderlineAnimation>
            <UnderlineAnimation>Blog Post</UnderlineAnimation>
            <UnderlineAnimation>Pricing</UnderlineAnimation>
          </div>
        </MotionSection>

        {/* --------------Contact Section-------------- */}
        <MotionSection className="space-y-5">
          <h3 className="font-bold text-2xl md:text-3xl lg:text-3xl">Contact</h3>
          {/* ---------------Contact-Info-------------- */}
          <div className="space-y-2.5">
            {/* --------------Mobile-Contact------------- */}
            <ContactCard
              rounded="rounded-full"
              labelColor="text-gray-medium"
              valueColor="bg-pink-primary"
              className='text-lg hover:text-pink-primary'
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path></svg>
              }
              value='01780259656'
            ></ContactCard>
            {/* --------------Address-Contact------------ */}
            <ContactCard
              rounded="rounded-full"
              labelColor="text-gray-medium"
              valueColor="bg-pink-primary"
              className='text-lg hover:text-pink-primary'
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"></path></svg>
              }
              value='66 Broklyant, New York 3269'
            ></ContactCard>
            {/* --------------Email-Contact-------------- */}
            <ContactCard
              rounded="rounded-full"
              labelColor="text-gray-medium"
              valueColor="bg-pink-primary"
              className='text-lg hover:text-pink-primary'
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"></path></svg>
              }
              href='mailto:mdtonmoybosunia24@gmail.com'
              value='mdtonmoybosunia24@gmail.com'
            ></ContactCard>
          </div>
          <SocialLinks></SocialLinks>
        </MotionSection>

      </div>

      {/* -----------------Footer Bottom---------------- */}
      <MotionSection
        className="section flex flex-col md:flex-col lg:flex-row justify-between items-center gap-2 border-t border-bg-white-overlay py-5"
      >
        <p className="font-rubik text-gray-light text-sm"><span className="text-white">©Tonmoy</span> <span>{currentYear}</span> | All Rights Reserved</p>
        <ul className="flex gap-5">
          <li><UnderlineAnimation className="text-sm">Terms & Condition</UnderlineAnimation></li>
          <li><UnderlineAnimation className="text-sm">Privacy Policy</UnderlineAnimation></li>
          <li><UnderlineAnimation className="text-sm">Contact Us</UnderlineAnimation></li>
        </ul>
      </MotionSection>

    </footer>
  );
};

export default Footer;