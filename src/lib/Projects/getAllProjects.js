import { PROJECTS_API } from "@/constants/api";

export default async function getAllProjects(limit) {
  try {
    /* ------------------Create Url Link----------------- */
    const url = limit ? `${PROJECTS_API}?limit=${limit} ` : PROJECTS_API;
    /* -----------------Get Projects Data---------------- */
    const result = await fetch(url, { cache: "no-store" });
    /* -------------Check API Response------------------- */
    if (!result.ok) throw new Error("Failed To Fetch Projects Data");
    /* ------------Return Testimonials Data-------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle-------------------- */
    console.error("Error Fetching Projects Data:", error.message);
    return [];
  }
}
