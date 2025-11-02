import BlogCard from "@/components/Ui/BlogCard";
import SectionHeading from "@/components/Ui/SectionHeading";
import getAllBlogs from "@/lib/Blogs/GetAllBlogs";

const Blogs = async () => {

  /* -----------------Get All The Blogs---------------- */
  const blogs = await getAllBlogs(3);

  return (
    /* -------------------Blogs Section-------------------- */
    <section className="section sectionPadding">

      {/* ------------------Section Heading--------------- */}
      <SectionHeading subtitle='My Blogs' title=<>Development & Design <br /> Stories</> description='Explore articles and tutorials on web development, design trends, and helpful tips from my experience.'></SectionHeading>

      {/* -------------Blog-Card-Section------------------ */}
      <BlogCard blogs={blogs}></BlogCard>

    </section>
  );
};

export default Blogs;