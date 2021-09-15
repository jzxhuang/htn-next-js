// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import { connectToMongo } from "../../utils/mongo"

type Data = {
  listings: any[]
}

const AIRBNB_COLLECTION_NAME = "listingsAndReviews"

export const getAllListings = async (mongo: any) => {
  return mongo
    .collection(AIRBNB_COLLECTION_NAME)
    .find()
    .limit(100)
    .toArray() as Promise<any[]>
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { db: mongo } = await connectToMongo()

  const allListings = await getAllListings(mongo)

  res.status(200).json({ listings: allListings })
}
