import { PRICE_PLAN_API } from "@/constants/api";

export default async function getAllPricePlan() {
  try {
    /* ----------------Get Price-Plan Data--------------- */
    const result = await fetch(PRICE_PLAN_API);
    /* -------------Check API Response------------------- */
    if (!result.ok) throw new Error("Failed To Fetch Price-Plan Data");
    /* ------------Return Testimonials Data-------------- */
    return result.json();
  } catch (error) {
    /* ------------------Error Handle-------------------- */
    console.error("Error Fetching Price Plan Data:", error.message);
    return [];
  }
}
