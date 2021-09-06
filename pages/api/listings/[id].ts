// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

import { getListing } from "services/listings"
import { Listing } from "types"
import createError, { UNSUPPORTED_METHOD_ERROR } from "utils/errors"
import { connectToMongo } from "utils/mongo"

type Data = {
  listing: Listing
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query
  if (typeof id !== "string") {
    throw createError(400, "Invalid request, no id found")
  }

  const { db: mongo } = await connectToMongo()

  switch (req.method) {
    case "GET":
      const listing = await getListing(mongo, id)
      return res.status(200).json({ listing: listing })

    default:
      throw UNSUPPORTED_METHOD_ERROR
  }
}
