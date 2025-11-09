import Image from "next/image";
import UnderlineAnimation from "./UnderlineAnimation";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
import MotionSection from "../Common/MotionSection";
import { FaCalendarDays } from "react-icons/fa6";


const BlogCard = ({ blogs }) => {
  return (
    /* ----------------Blog-Card-Container---------------- */
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {blogs.map((blog) => (
        /* --------------------Blog-Card------------------ */
        <MotionSection className="border-2 border-bg-white-overlay rounded-2xl" key={blog?._id}>
          {/* --------------Image-Container-------------- */}
          <div className="relative overflow-hidden">
            {/* -------------------Image----------------- */}
            <Image className="w-full rounded-xl hover:scale-105 transition duration-500" width={300} height={200} src={blog?.thumbnail} alt="Blog Thumbnail"></Image>
            {/* ----------------Name & Date-------------- */}
            <div className="absolute top-2 left-2 bg-bg-dark rounded-full px-3 py-1.5">
              <p className="flex items-center gap-2 font-bold text-sm"><FaCalendarDays />{blog?.publishDate}</p>
            </div>
          </div>
          {/* -------------Content-Container------------- */}
          <div className="space-y-2 p-5">
            <h2 className="font-rubik text-2xl hover:text-pink-primary">{blog?.title}</h2>
            <UnderlineAnimation><Link className="flex items-center" href={`/blogs/${blog?._id}`}>READ MORE <MdKeyboardArrowRight className="text-xl" /></Link></UnderlineAnimation>
          </div>
        </MotionSection>
      ))}
    </div>
  );
};

export default BlogCard;