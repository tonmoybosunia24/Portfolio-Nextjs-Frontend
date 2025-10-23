'use client'
import { useForm } from "react-hook-form";
import Button from "../Ui/Button";
import ContactCard from "../Ui/ContactCard";
import SectionHeading from "../Ui/SectionHeading";
import MotionSection from "./MotionSection";

const ContactUs = () => {

  /* ---------------------React Hook Form------------------- */
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: 'onChange' });
  /* -----------------------Submit Data--------------------- */
  const onsubmit = (data) => {
    console.log(data)
  }

  return (
    /* -----------------Contact-Us Section------------------- */
    <section className="section sectionPadding">

      {/* -----------------Section Heading------------------ */}
      <SectionHeading subtitle='Get In Touch' title=<>Feel Free To Drop A <br /> Message</> description='Feel free to reach out anytime for collaborations, opportunities, or questions — I’m always happy to connect and help.'></SectionHeading>

      {/* -----------------Section Container----------------- */}
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-10 bg-bg-dark rounded-2xl p-5 py-10 md:p-10 lg:p-20">
        {/* -----------------Contact-Left-Side--------------- */}
        <MotionSection className="flex-2/6 w-full space-y-3">
          <h2 className="font-bold text-6xl">Get Ready To Create Great</h2>
          {/* ---------------Email-Contact------------------- */}
          <ContactCard
            rounded="rounded-full"
            labelColor="text-gray-medium"
            valueColor="bg-pink-primary"
            className='hover:text-pink-primary'
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44"></path></svg>
            }
            label='E-Mail:'
            href='mailto:mdtonmoybosunia24@gmail.com'
            value='mdtonmoybosunia24@gmail.com'
          ></ContactCard>
          {/* ---------------Address-Contact----------------- */}
          <ContactCard
            rounded="rounded-full"
            labelColor="text-gray-medium"
            valueColor="bg-pink-primary"
            className='hover:text-pink-primary'
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"></path></svg>
            }
            label='Location:'
            value='66 Broklyant, New York 3269'
          ></ContactCard>
          {/* ---------------Mobile-Contact------------------ */}
          <ContactCard
            rounded="rounded-full"
            labelColor="text-gray-medium"
            valueColor="bg-pink-primary"
            className='hover:text-pink-primary'
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path></svg>
            }
            label='Contact:'
            value='0178025-9656'
          ></ContactCard>
        </MotionSection>
        {/* ----------------Contact-Right-Side--------------- */}
        <MotionSection className="flex-4/6 w-full space-y-3">
          <h3 className="font-bold text-4xl text-white">GET IN TOUCH</h3>
          {/* ----------------Contact Form------------------- */}
          <form onSubmit={handleSubmit(onsubmit)}>
            {/* -----------------Form Container-------------- */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
              {/* ---------------------Name Input-------------------- */}
              <div className="form-control">
                <input type="text" required {...register('name', { required: true })} placeholder="Your Name" className="w-full h-12 font-rubik bg-dark-gray-2 text-white border border-bg-white-overlay input-bordered focus:outline-0 focus:border-2 focus:border-pink-primary rounded-lg px-5" />
              </div>
              {/* ----------------Phone Input---------------- */}
              <div className="form-control">
                <input type="tel" required {...register('number', { required: true })} placeholder="Your Number" className="w-full h-12 font-rubik bg-dark-gray-2 text-white border border-bg-white-overlay input-bordered focus:outline-0 focus:border-2 focus:border-pink-primary rounded-lg px-5" />
              </div>
              {/* ----------------Email Input---------------- */}
              <div className="form-control">
                <input type="email" required {...register('email', { required: true })} placeholder="Your Email" className="w-full h-12 font-rubik bg-dark-gray-2 text-white border border-bg-white-overlay input-bordered focus:outline-0 focus:border-2 focus:border-pink-primary rounded-lg px-5" />
              </div>
              {/* ----------------Subject Input-------------- */}
              <div className="form-control">
                <input type="text" required {...register('subject', { required: true })} placeholder="Subject" className="w-full h-12 font-rubik bg-dark-gray-2 text-white border border-bg-white-overlay input-bordered focus:outline-0 focus:border-2 focus:border-pink-primary rounded-lg px-5" />
              </div>
              {/* ---------------TextArea Input-------------- */}
              <div className="form-control md:col-span-2 lg:col-span-2">
                <textarea required {...register('description', { required: true })} className="textarea  w-full min-h-28 font-rubik bg-dark-gray-2 text-white border border-bg-white-overlay input-bordered focus:outline-0 focus:border-2 focus:border-pink-primary rounded-lg px-5 py-3" placeholder="Your Message"></textarea>
              </div>
              {/* ----------------Submit Button-------------- */}
              <Button className='md:col-span-2 lg:col-span-2'>Appointment Now</Button>
            </div>
          </form>
        </MotionSection>
      </div>

    </section>
  );
};

export default ContactUs;