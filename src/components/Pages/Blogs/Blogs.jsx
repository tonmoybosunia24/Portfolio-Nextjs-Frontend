import BlogCard from "@/components/Ui/BlogCard";
import Button from "@/components/Ui/Button";
import SectionHeading from "@/components/Ui/SectionHeading";
import getAllBlogs from "@/lib/Blogs/GetAllBlogs";

const Blogs = async () => {

  /* --------------------Blags-Limit------------------- */
  const limit = 4;
  /* -----------------Get All The Blogs---------------- */
  const blogs = await getAllBlogs(limit);

  return (
    /* -------------------Blogs Section-------------------- */
    <section className="section sectionPadding">

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='My Blogs' title=<>Development & Design <br /> Stories</> description='Explore articles and tutorials on web development, design trends, and helpful tips from my experience.'></SectionHeading>

      {/* -------------Blog-Card-Section------------------ */}
      <BlogCard blogs={blogs}></BlogCard>
      <Button className={`mx-auto mt-5 md:mt-10 lg:mt-10 ${blogs?.length > limit ? '' : 'hidden'}`}>See More</Button>

    </section>
  );
};

export default Blogs;