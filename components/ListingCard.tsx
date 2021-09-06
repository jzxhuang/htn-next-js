import * as React from "react"
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react"
import { MdStar } from "react-icons/md"
import { Listing } from "types"

interface ListingCardProps {
  listing: Listing
}

export default function ListingCard(props: ListingCardProps) {
  const { listing } = props
  console.log("listing:", listing)

  return (
    <Box p="5" borderWidth="1px">
      <Image
        borderRadius="md"
        alt={listing.summary}
        src={listing.images.picture_url}
        w="100%"
        h="40%"
      />
      <Flex align="baseline" mt={2}>
        {listing.host.host_is_superhost && (
          <Badge colorScheme="pink" mr={2}>
            Superhost
          </Badge>
        )}
        <Text
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          {listing.host.host_identity_verified && "Verified • "}
          {listing.address.market}
          Cape Town
        </Text>
      </Flex>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {listing.name}
      </Text>
      <Text mt={2}>${listing.price.$numberDecimal}/night</Text>
      {listing.number_of_reviews > 0 && (
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>
              {(listing.review_scores.review_scores_rating / 20).toFixed(2)}
            </b>{" "}
            ({listing.number_of_reviews})
          </Text>
        </Flex>
      )}
    </Box>
  )
}
