import { BLOGS_API } from "@/constants/api";

export default async function getAllBlogs() {
  try {
    /* ------------------Get Blogs Data----------------- */
    const result = await fetch(`${BLOGS_API}`);
    /* -------------Check API Response------------------ */
    if (!result.ok) throw new Error("Failed To Fetch Blogs");
    /* -------------Return Blogs Data------------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle------------------- */
    return { error: error.message };
  }
}
