import Footer from "@/components/Common/Footer";
import PageHeader from "@/components/Common/PageHeader";
import Projects from "@/components/Pages/Projects/Projects";

const page = async() => {

  return (
    <div>
      <PageHeader title='Project' breadcrumb='Projects'></PageHeader>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  );
};

export default page;