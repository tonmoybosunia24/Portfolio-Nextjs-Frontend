import Footer from "@/components/Common/Footer";
import PageHeader from "@/components/Common/PageHeader";
import SingleBlogCard from "@/components/Pages/Blogs/SingleBlogCard";
import getSingleBlog from "@/lib/Blog/GetSingleBlog";

const page = async ({ params }) => {

  /* -------------------Get Single Blog Id-------------------- */
  const { singleBlog } = await params;
  /* -------------------Get Single Blog Data------------------ */
  const blog = await getSingleBlog(singleBlog);

  return (
    <main>
      <PageHeader title='Blog Classic' breadcrumb='Blog Classic'></PageHeader>
      <SingleBlogCard blog={blog}></SingleBlogCard>
      <Footer></Footer>
    </main>
  );
};

export default page;