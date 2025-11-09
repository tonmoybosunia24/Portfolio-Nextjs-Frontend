import ContactUs from "@/components/Common/ContactUs";
import Footer from "@/components/Common/Footer";
import PageHeader from "@/components/Common/PageHeader";
import PricePlan from "@/components/Common/PricePlan";
import Achievements from "@/components/Pages/Home/Achievements";
import EducationExperience from "@/components/Pages/Home/EducationExperience";
import ProjectStats from "@/components/Pages/Home/ProjectStats";
import TechStack from "@/components/Pages/Home/TechStack";

const Page = () => {
  return (
    /* ------------------Page Main Container---------------- */
    <main>
      <PageHeader title='About Me' breadcrumb='About Me'></PageHeader>
      <ProjectStats></ProjectStats>
      <Achievements></Achievements>
      <TechStack></TechStack>
      <EducationExperience></EducationExperience>
      <PricePlan></PricePlan>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </main>
  );
};

export default Page;