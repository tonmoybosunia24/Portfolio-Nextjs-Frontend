import getCollection from "@/lib/MongoDb/getCollection";

/* --------------Get Blogs API Route Handler-------------- */
export async function GET(req) {
  try {
    /* --------------Get Blogs From DataBase-------------- */
    const blogsCollection = await getCollection("blogs");
    /* --------Find ALl Blogs And Convert To Array-------- */
    const blogs = await blogsCollection.find().toArray();
    /* -----------------Send Data In Json----------------- */
    return Response.json(blogs);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return Response.json({ error: error.message }, { status: 500 });
  }
}
