import MotionSection from "@/components/Common/MotionSection";
import SocialLinks from "@/components/Common/SocialLinks";
import SectionHeading from "@/components/Ui/SectionHeading";
import Image from "next/image";
import { FaTag } from "react-icons/fa6";

const SingleBlogCard = ({ blog }) => {
  return (
    /* ---------------------Single Blog Card------------------ */
    <section className="section sectionPadding">

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='Blog Details' title=<>Development & design <br /> insights</> description='Discover in-depth content covering development tips, design trends, and lessons learned.'></SectionHeading>

      {/* ----------------Section Container--------------- */}
      <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-5 md:gap-5 lg:gap-10">

        {/* ------------------Section Left---------------- */}
        <div className="md:col-span-7 lg:col-span-8 space-y-5">
          <MotionSection><Image className="w-full rounded-2xl" src={blog?.thumbnail} alt={blog.title} width={200} height={100} /></MotionSection>
          <MotionSection className="flex gap-5 font-rubik text-gray-light">
            <p>By {blog?.author?.name}</p>
            <p className="flex items-center gap-2"><FaTag /> {blog?.category} </p>
          </MotionSection>
          <MotionSection className="font-bold text-3xl md:text-4xl lg:text-4xl">{blog?.title}</MotionSection>
          <MotionSection className="font-rubik text-gray-light">{blog?.content}</MotionSection>
        </div>

        {/* -----------------Section Right---------------- */}
        <div className="md:col-span-5 lg:col-span-4 space-y-5">

          {/* --------------------About Me---------------- */}
          <MotionSection className="bg-bg-dark rounded-xl space-y-5 p-5">
            <h3 className="font-bold text-3xl">About Me</h3>
            <div className="flex items-center gap-5">
              <Image className="rounded-full" width={100} height={100} src={blog?.author?.avatar} alt=""></Image>
              <div className="space-y-1">
                <h3 className="font-bold text-xl">{blog?.author?.name}</h3>
                <p className="font-rubik text-gray-light"> {blog?.author?.role} </p>
                <SocialLinks></SocialLinks>
              </div>
            </div>
            <p className="font-rubik text-gray-light">{blog?.author?.bio}</p>
          </MotionSection>

          {/* ----------------------Tags------------------ */}
          <MotionSection className="bg-bg-dark rounded-xl space-y-5 p-5">
            <h2 className="font-bold text-3xl">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {blog?.tags.map((tag, index) => (
                <p className="font-rubik bg-black hover:bg-pink-primary rounded-full px-5 py-2" key={index}>{tag}</p>
              ))}
            </div>
          </MotionSection>

        </div>

      </div>

    </section>
  );
};

export default SingleBlogCard;