export type Listing = {
  id: string
  name: string
  summary: string
  description: string
  images: any
  host: any
  reviews: Review[]
}

export type Review = {
  id: string
  date: Date
  listing_id: string
  reviewer_id: string
  reviewr_name: string
  comments: string
}
