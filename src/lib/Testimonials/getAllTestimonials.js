import { TESTIMONIALS_API } from "@/constants/api";

export default async function () {
  try {
    /* --------------Get Testimonials Data-------------- */
    const result = await fetch(`${TESTIMONIALS_API}`);
    /* -------------Check API Response------------------ */
    if (!result.ok) throw new Error("Failed To Fetch Testimonials Data");
    /* ------------Return Testimonials Data------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle------------------- */
    return { error: error.message };
  }
}
