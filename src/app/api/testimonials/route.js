import getCollection from "@/lib/MongoDb/getCollection";
import { NextResponse } from "next/server";

/* --------------Get Blogs API Route Handler-------------- */
export async function GET(req) {
  try {
    /* -----------Get Testimonials From DataBase---------- */
    const testimonialsCollection = await getCollection("testimonials");
    /* ----Find ALl Testimonials And Convert To Array----- */
    const testimonials = await testimonialsCollection.find().toArray();
    /* -----------------Send Data In Json----------------- */
    return NextResponse.json(testimonials);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
