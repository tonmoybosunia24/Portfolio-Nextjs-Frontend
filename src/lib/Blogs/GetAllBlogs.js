import { BLOGS_API } from "@/constants/api";

export default async function getAllBlogs(limit) {
  try {
    /* ------------------Create Url Link---------------- */
    const url = limit ? `${BLOGS_API}?limit=${limit}` : BLOGS_API;
    /* ------------------Get Blogs Data----------------- */
    const result = await fetch(url, { cache: "no-store" });
    /* -------------Check API Response------------------ */
    if (!result.ok) throw new Error("Failed To Fetch Blogs Data");
    /* -------------Return Blogs Data------------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle------------------- */
    console.error("Error Fetching Blogs Data:", error.message);
    return [];
  }
}
