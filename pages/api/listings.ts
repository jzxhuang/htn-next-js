// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import { getAllListings } from "services/listings"
import { Listing } from "types"
import { connectToMongo } from "utils/mongo"

type Data = {
  listings: Listing[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { db: mongo } = await connectToMongo()

  const allListings = await getAllListings(mongo)
  console.log("allListings:", allListings)

  res.status(200).json({ listings: allListings })
}
