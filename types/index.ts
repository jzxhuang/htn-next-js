export type Listing = {
  _id: string
  address: Address
  description: string
  host: Host
  images: Images
  name: string
  number_of_reviews: number
  price: { $numberDecimal: string }
  reviews: Review[]
  review_scores: ReviewScores
  summary: string
}

export type Address = {
  country: string
  country_code: string
  government_area: string
  location: any
  market: string
  street: string
}

export type Review = {
  _id: string
  date: Date
  listing_id: string
  reviewer_id: string
  reviewer_name: string
  comments: string
}

export type ReviewScores = {
  review_scores_accuracy: number
  review_scores_checkin: number
  review_scores_cleanliness: number
  review_scores_communication: number
  review_scores_location: number
  review_scores_rating: number
}

export type Images = {
  medium_url: ""
  picture_url: "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
  thumbnail_url: ""
}

export type Host = {
  host_about: string
  host_has_profile_pic: boolean
  host_id: string
  host_identity_verified: boolean
  host_is_superhost: boolean
  host_listings_count: number
  host_location: string
  host_name: string
  host_neighbourhood: string
  host_picture_url: string
  host_response_rate: number
  host_response_time: string
  host_thumbnail_url: string
  host_total_listings_count: number
}
