import getCollection from "@/lib/MongoDb/getCollection";
import { NextResponse } from "next/server";

/* --------------Get Blogs API Route Handler-------------- */
export async function GET(req) {
  try {
    /* --------------------Get The Limit------------------ */
    const limit = parseInt(req.nextUrl.searchParams.get("limit"));
    /* -------------Get Projects From DataBase------------ */
    const projectsCollection = await getCollection("projects");
    /* ------Check Limit And Convert Data To Array-------- */
    if (limit) {
      const projects = await projectsCollection.find().limit(limit).toArray();
      return NextResponse.json(projects);
    } else {
      const projects = await projectsCollection.find().toArray();
      return NextResponse.json(projects);
    }
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
