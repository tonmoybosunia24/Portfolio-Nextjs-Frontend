import Header from "@/components/Common/Header";
import Achievements from "@/components/Pages/Home/Achievements";
import ProjectStats from "@/components/Pages/Home/ProjectStats";
import TechStack from "@/components/Pages/Home/TechStack";

/* ------------------Home Page Component--------------- */
export default function Home() {
  return (
    /* ------------------Main Container---------------- */
    <main className="pb-16">
      <Header></Header>
      <ProjectStats></ProjectStats>
      <Achievements></Achievements>
      <TechStack></TechStack>
    </main>
  );
}

export const metadata = {
  title: "Tonmoy Bosunia - Frontend Developer",
  description:
    "Portfolio of Tonmoy Bosunia - Expert in React, Next.js, and modern web development",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio"],
};
