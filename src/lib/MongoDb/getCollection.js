import clientPromise from "./mongodb";

export default async function getCollection(collectionName) {
  /* --------------Get The MongoDB Connection------------- */
  const client = await clientPromise;
  /* ------------------Select Data-Base------------------- */
  const db = client.db("portfolio_next_js");
  /* -------------------Return Collection----------------- */
  return db.collection(collectionName);
}
