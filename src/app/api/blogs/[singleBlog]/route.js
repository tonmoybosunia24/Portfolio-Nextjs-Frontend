import getCollection from "@/lib/MongoDb/getCollection";
import { ObjectId } from "mongodb";

/* -------------Get Single-Blogs API Route Handler------------- */
export async function GET(req, { params }) {
  try {
    /* ---------------------Get Single Blog Id----------------- */
    const { singleBlog } = params;
    /* ----------------Get Blogs From DataBase----------------- */
    const blogs = await getCollection("blogs");
    /* -----------Find This Blog From BlogCollection----------- */
    const blog = await blogs.findOne({ _id: new ObjectId(singleBlog) });
    /* ---------------Check If Blog Exists--------------------- */
    if (!blog) {
      return Response.json({ error: "Blog not found" }, { status: 404 });
    }
    /* -------------------Send Data In Json-------------------- */
    return Response.json(blog);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return Response.json({ error: error.message }, { status: 500 });
  }
}
