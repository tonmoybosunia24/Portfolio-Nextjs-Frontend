import MotionSection from "@/components/Common/MotionSection";
import SectionHeading from "@/components/Ui/SectionHeading";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall, MdEmail } from "react-icons/md";

const ContactDetails = () => {
  return (
    /* ---------------------Contact-Info------------------- */
    <section className="section sectionPadding">

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='Contact Details' title=<>Connect Create Grow <br /> Together</> description='Have a project, question, or collaboration idea? Reach out via email or phone — I typically reply within 48 hours.'></SectionHeading>

      {/* -------------Contact-Details Container---------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {/* --------------------Loaction------------------ */}
        <MotionSection className="bg-bg-dark flex flex-col justify-center items-center gap-2 rounded-xl p-10">
          <div className="bg-pink-primary text-2xl rounded-full p-3">
            <FaLocationDot />
          </div>
          <h3 className="font-bold text-3xl">Address</h3>
          <div className="font-rubik text-gray-light text-center">
            <p>Dhaka 102, utl 1216, road 45</p>
            <p>house of street</p>
          </div>
        </MotionSection>
        {/* ----------------------Email------------------- */}
        <MotionSection className="bg-bg-dark flex flex-col justify-center items-center gap-2 rounded-xl p-10">
          <div className="bg-pink-primary text-2xl rounded-full p-3">
            <MdEmail />
          </div>
          <h3 className="font-bold text-3xl">Email</h3>
          <div className="font-rubik text-gray-light text-center">
            <p>mdtonmoybosunia24@gmail.com</p>
            <p>tonmoybosunia253@gmail.com</p>
          </div>
        </MotionSection>
        {/* ---------------------Number------------------- */}
        <MotionSection className="bg-bg-dark flex flex-col justify-center items-center gap-2 rounded-xl p-10">
          <div className="bg-pink-primary text-2xl rounded-full p-3">
            <MdCall />
          </div>
          <h3 className="font-bold text-3xl">Call Me</h3>
          <div className="font-rubik text-gray-light text-center">
            <p>+880-1780-259656</p>
            <p>+880-1943-599036</p>
          </div>
        </MotionSection>
      </div>

    </section>
  );
};

export default ContactDetails;