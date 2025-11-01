import ContactUs from "@/components/Common/ContactUs";
import Footer from "@/components/Common/Footer";
import Header from "@/components/Common/Header";
import Achievements from "@/components/Pages/Home/Achievements";
import EducationExperience from "@/components/Pages/Home/EducationExperience";
import MarqueeSkills from "@/components/Pages/Home/MarqueeSkills";
import Projects from "@/components/Pages/Home/Projects";
import ProjectStats from "@/components/Pages/Home/ProjectStats";
import TechStack from "@/components/Pages/Home/TechStack";
import Testimonials from "@/components/Pages/Home/Testimonials";

/* ------------------Home Page Component--------------- */
export default function Home() {
  return (
    /* ------------------Main Container---------------- */
    <main>
      <Header></Header>
      <ProjectStats></ProjectStats>
      <Achievements></Achievements>
      <MarqueeSkills></MarqueeSkills>
      <TechStack></TechStack>
      <EducationExperience></EducationExperience>
      <Projects></Projects>
      <Testimonials></Testimonials>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </main>
  );
}

export const metadata = {
  title: "Tonmoy Bosunia - Frontend Developer",
  description:
    "Portfolio of Tonmoy Bosunia - Expert in React, Next.js, and modern web development",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio"],
};
