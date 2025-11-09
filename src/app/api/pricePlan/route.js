import getCollection from "@/lib/MongoDb/getCollection";
import { NextResponse } from "next/server";

/* ------------Get Price-Plan API Route Handler----------- */
export async function GET(req) {
  try {
    /* ------------Get Price-Plan From DataBase----------- */
    const pricePlanCollection = await getCollection("pricePlan");
    /* -----Find ALl Price-Plan And Convert To Array------ */
    const pricePlan = await pricePlanCollection.find().toArray();
    /* -----------------Send Data In Json----------------- */
    return NextResponse.json(pricePlan);
  } catch (error) {
    /* -------------Error Handle With Status-------------- */
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
