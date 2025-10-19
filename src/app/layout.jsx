import { Rajdhani, Rubik } from "next/font/google";
import "./globals.css";
import AppProvider from "@/provider/AppProvider";

/* ------------------Font Configuration: Rajdhani--------------- */
const rajdhani = Rajdhani({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  subsets: ["latin"],
});

/* -------------------Font Configuration: Rubik---------------- */
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-rubik",
  subsets: ["latin"],
});

/* --------------------------Metadata-------------------------- */
export const metadata = {
  title: "Tonmoy Bosunia | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. Explore my projects, skills, and experience in web development.",
};

/* ----------------------Root Layout Component----------------- */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rajdhani.variable} ${rubik.variable} antialiased`}>
        {/* -----------------App Provider Wrapper------------- */}
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
