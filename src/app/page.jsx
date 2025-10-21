import Header from "@/components/Common/Header";
import ProjectStats from "@/components/Pages/Home/ProjectStats";

/* ------------------Home Page Component--------------- */
export default function Home() {
  return (
    /* ------------------Main Container---------------- */
    <main className="pb-16">
      <Header></Header>
      <ProjectStats></ProjectStats>
    </main>
  );
}

export const metadata = {
  title: "Tonmoy Bosunia - Frontend Developer",
  description:
    "Portfolio of Tonmoy Bosunia - Expert in React, Next.js, and modern web development",
  keywords: ["Frontend Developer", "React", "Next.js", "Portfolio"],
};
