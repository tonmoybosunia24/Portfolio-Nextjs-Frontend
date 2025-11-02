import getCollection from "@/lib/MongoDb/getCollection";

/* --------------Get Blogs API Route Handler-------------- */
export async function GET(req) {
  try {
    /* --------------------Get The Limit------------------ */
    const limit = parseInt(req.nextUrl.searchParams.get("limit"));
    /* --------------Get Blogs From DataBase-------------- */
    const blogsCollection = await getCollection("blogs");
    /* --------Find ALl Blogs And Convert To Array-------- */
    let blogs = await blogsCollection.find().toArray();
    /* ----------------Check IF Have Limit---------------- */
    if (limit) {
      blogs = blogs.slice(0, limit);
    }
    /* -----------------Send Data In Json----------------- */
    return Response.json(blogs);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return Response.json({ error: error.message }, { status: 500 });
  }
}
