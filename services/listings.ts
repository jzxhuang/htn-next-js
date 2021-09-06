import { Listing } from "types"

const AIRBNB_COLLECTION_NAME = "listingsAndReviews"

export const getAllListings = async (mongo: any) => {
  return mongo
    .collection(AIRBNB_COLLECTION_NAME)
    .find()
    .limit(100)
    .toArray() as Promise<Listing[]>
}

export const getListing = async (mongo: any, listingId: string) => {
  return mongo.collection(AIRBNB_COLLECTION_NAME).findOne({ _id: listingId })
}
