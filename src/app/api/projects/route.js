import getCollection from "@/lib/MongoDb/getCollection";
import { NextResponse } from "next/server";

/* --------------Get Blogs API Route Handler-------------- */
export async function GET(req) {
  try {
    const limit = parseInt(req.nextUrl.searchParams.get("limit"));
    console.log('projects',limit)
    /* -------------Get Projects From DataBase------------ */
    const projectsCollection = await getCollection("projects");
    /* ------Find ALl Projects And Convert To Array------- */
    if (limit) {
      const projects = await projectsCollection.find().limit(limit).toArray();
      return NextResponse.json(projects);
    }
    else{
      const projects = await projectsCollection.find().toArray();
      return NextResponse.json(projects);
    }
    // const projects = await projectsCollection.find().toArray();
    /* -----------------Send Data In Json----------------- */
    // return NextResponse.json(projects);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
