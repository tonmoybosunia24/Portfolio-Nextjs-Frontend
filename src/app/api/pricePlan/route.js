import getCollection from "@/lib/MongoDb/getCollection";

/* ------------Get Price-Plan API Route Handler----------- */
export async function GET(req) {
  try {
    /* ------------Get Price-Plan From DataBase----------- */
    const pricePlanCollection = await getCollection("pricePlan");
    /* -----Find ALl Price-Plan And Convert To Array------ */
    const pricePlan = await pricePlanCollection.find().toArray();
    /* -----------------Send Data In Json----------------- */
    return Response.json(pricePlan);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return Response.json({ error: error.message }, { status: 500 });
  }
}
