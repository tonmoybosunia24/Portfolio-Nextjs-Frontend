import getCollection from "@/lib/MongoDb/getCollection";
import { NextResponse } from "next/server";

/* --------------Get Blogs API Route Handler-------------- */
export async function GET(req) {
  try {
    /* --------------------Get The Limit------------------ */
    const limit = parseInt(req.nextUrl.searchParams.get("limit"));
    /* --------------Get Blogs From DataBase-------------- */
    const blogsCollection = await getCollection("blogs");
    /* ------Check Limit And Convert Data To Array-------- */
    if (limit) {
      const blogs = await blogsCollection.find().limit(limit).toArray();
      return NextResponse.json(blogs);
    } else {
      const blogs = await blogsCollection.find().toArray();
      return NextResponse.json(blogs);
    }
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
