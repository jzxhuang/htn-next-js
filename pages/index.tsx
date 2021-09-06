import { Box, Flex, Heading, Icon } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import NextLink from "next/link"
import { FaGithub } from "react-icons/fa"

const Home: NextPage = () => {
  return (
    <Flex h="100vh" direction="column">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex
        as="main"
        py="5rem"
        direction="column"
        flex={1}
        justify="center"
        align="center"
      >
        <Heading as="h1" color="blue.800">
          Intro to Next.js!
        </Heading>

        <Heading as="h2" size="md" mt="1rem">
          <NextLink href="/listings">See Listings</NextLink>
        </Heading>
      </Flex>

      <Flex
        as="footer"
        borderTop="1px solid #eaeaea"
        w="100%"
        h="100px"
        justify="center"
        align="center"
      >
        <a
          href="https://github.com/jzxhuang"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by @jzxhuang
          <Icon marginLeft="0.5rem" as={FaGithub} />
        </a>
      </Flex>
    </Flex>
  )
}

export default Home
