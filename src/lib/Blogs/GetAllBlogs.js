import { BLOGS_API } from "@/constants/api";

export default async function getAllBlogs(limit) {
  try {
    /* ------------------Get Blogs Data----------------- */
    const result = await fetch(
      limit ? `${BLOGS_API}?limit=${limit}` : BLOGS_API
    );
    /* -------------Check API Response------------------ */
    if (!result.ok) throw new Error("Failed To Fetch Blogs");
    /* -------------Return Blogs Data------------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle------------------- */
    console.error("Error Fetching Blogs Data:", error.message);
    return [];
  }
}
