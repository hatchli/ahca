import React, { Component } from "react";
import styled from "styled-components";
import Raise from "./Raise";
import { Box, Flex, Button, Card, Image, Heading, Text } from "rebass";
import Link from "next/link";

const pleft = [3, 4, 5];
const ptop = [3, 4, 5];

const Divider = props => (
  <Box
    {...props}
    as="hr"
    sx={{
      bg: "dark-gray",
      border: 0,
      height: 2
    }}
  />
);

const ItemsFrontPage = props => {
  const { item } = props;
  // const limitedFeatures =
  const { index } = props;
  return (index + 3) % 2 === 0 ? (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap">
      <Box width={[1, 1 / 2]} pt={ptop} pr={pleft}>
        <Heading color="near-black" fontSize={[4, 6]} pl={pleft}>
          {item.categories}
        </Heading>
        <Raise distance="50%">
          <Heading pl={pleft} fontSize={[5, 7]} color="near-black">
            {item.title}
          </Heading>
        </Raise>

        <Text fontSize={[1, 2]} pl={pleft} fontWeight="bold">
          {item.description}
        </Text>
        <Text fontSize={[1, 2]} pl={pleft}>
          <ul>
            {item.features
              .filter((feature, i) => i <= 1)
              .map((feature, i) => (
                <li>{feature}</li>
              ))}
          </ul>
        </Text>
        <Button ml={pleft} bg="dark-green" color="white">
          <Link
            href={{
              pathname: "/item",
              query: { id: item.id }
            }}
          >
            <a>
              <Text fontWeight="bold" color="white">
                Shop Now
              </Text>
            </a>
          </Link>
        </Button>
      </Box>
      <Box
        width={[1, 1 / 2]}
        // my={[4, 5]}
        alignItems="center"
        justifyContent="center"
        pt={ptop}
        pl={[0, 4, 5]}
      >
        <Image src={item.image} />
      </Box>
    </Flex>
  ) : (
    <Flex alignItems="center" justifyContent="center" flexWrap="wrap-reverse">
      <Box
        pl={[0, 4, 5]}
        width={[1, 1 / 2]}
        // my={[4, 5]}
        alignItems="center"
        justifyContent="center"
        pt={ptop}
      >
        <Image src={item.image} />
      </Box>
      <Box
        width={[1, 1 / 2]}
        maxWidth="900px"
        pt={ptop}
        alignItems="flex-start"
        pr={pleft}
        pl={pleft}
      >
        <Heading color="near-black" fontSize={[4, 6]}>
          {item.categories}
        </Heading>
        <Raise distance="50%">
          <Heading fontSize={[5, 7]} color="near-black">
            {item.title}
          </Heading>
        </Raise>

        <Text fontSize={[1, 2]} fontWeight="bold">
          {item.description}
        </Text>
        <Text fontSize={[1, 2]}>
          <ul>
            {item.features
              .filter((feature, i) => i <= 1)
              .map((feature, i) => (
                <li>{feature}</li>
              ))}
          </ul>
        </Text>
        <Button bg="dark-green" color="white">
          <Link
            href={{
              pathname: "/item",
              query: { id: item.id }
            }}
          >
            <a>
              <Text fontWeight="bold" color="white">
                Shop Now
              </Text>
            </a>
          </Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default ItemsFrontPage;
