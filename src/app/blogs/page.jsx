import Footer from "@/components/Common/Footer";
import PageHeader from "@/components/Common/PageHeader";
import Blogs from "@/components/Pages/Blogs/Blogs";

const page = () => {
  return (
    <div>
      <PageHeader title='Blog Classic' breadcrumb='Blog Classic'></PageHeader>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default page;