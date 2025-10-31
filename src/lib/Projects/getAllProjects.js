import { PROJECTS_API } from "@/constants/api";

export default async function () {
  try {
    /* -----------------Get Projects Data---------------- */
    const result = await fetch(PROJECTS_API);
    /* -------------Check API Response------------------- */
    if (!result.ok) throw new Error("Failed To Fetch Projects Data");
    /* ------------Return Testimonials Data-------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle-------------------- */
    return { error: error.message };
  }
}
