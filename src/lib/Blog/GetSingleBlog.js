import { BLOGS_API } from "@/constants/api";

export default async function getSingleBlog(id) {
  try {
    /* -------------Get Single Blog Data---------------- */
    const result = await fetch(BLOGS_API + `/${id}`);
    /* -------------Check API Response------------------ */
    if (!result.ok) throw new Error("Failed To Fetch Blog");
    /* -------------Return Blogs Data------------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle------------------- */
    return [];
  }
}
