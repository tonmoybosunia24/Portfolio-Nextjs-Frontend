import getCollection from "@/lib/MongoDb/getCollection";

/* --------------Get Blogs API Route Handler-------------- */
export async function GET(req) {
  try {
    /* -------------Get Projects From DataBase------------ */
    const projectsCollection = await getCollection("projects");
    /* ------Find ALl Projects And Convert To Array------- */
    const projects = await projectsCollection.find().toArray();
    /* -----------------Send Data In Json----------------- */
    return Response.json(projects);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return Response.json({ error: error.message }, { status: 500 });
  }
}
