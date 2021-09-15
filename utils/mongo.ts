import { MongoClient } from "mongodb"

const MONGODB_URI = process.env.MONGODB_URI
const MONGODB_DB = process.env.MONGODB_DB

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  )
}

if (!MONGODB_DB) {
  throw new Error(
    "Please define the MONGODB_DB environment variable inside .env.local"
  )
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentially
 * during API Route usage.
 */
// @ts-ignore
let cached = global.mongo

if (!cached) {
  // @ts-ignore
  cached = global.mongo = { conn: null, promise: null }
}

export const connectToMongo = async () => {
  try {
    if (cached.conn) {
      return cached.conn
    }

    if (!cached.promise) {
      cached.promise = MongoClient.connect(MONGODB_URI).then((client) => {
        return {
          client,
          db: client.db(MONGODB_DB),
        }
      })
    }
    cached.conn = await cached.promise
    return cached.conn
  } catch (err) {
    console.error("Unable to get MongoDB connection:", err)
    throw "Unable to connect to DB"
  }
}
