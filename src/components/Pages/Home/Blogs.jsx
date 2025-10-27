// 'use client'
import getAllBlogs from "@/lib/Blogs/GetAllBlogs";

const Blogs = async () => {

  /* -----------------Get All The Blogs---------------- */
  const blogs = await getAllBlogs();

  return (
    /* ------------------Blogs Section----------------- */
    <section>
      <h2>This Is The Blogs Section</h2>
    </section>
  );
};

export default Blogs;