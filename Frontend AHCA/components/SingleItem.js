import React from "react";
import AddToCart from "./AddToCart";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import { Box, Flex, Heading, Text, Link, Image } from "rebass";

const SingleItemStyles = styled.div`
  box-shadow: ${props => props.theme.bs};
  min-height: 800px;
  display: flex;
  /* img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  .details {
    margin: 3rem;
    font-size: 2rem;
  }
  .gallery {
    /* background-color: red; 
    width: 100%;
    height: 100%;
    max-width: 600px;
  } */
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      price
      description
      sale
      features
      highlights
      largeImage
      largeImage1
      largeImage2
    }
  }
`;

const pad = [3, 4];
const Divider = props => (
  <Box
    {...props}
    as="hr"
    sx={{
      bg: "dark-gray",
      border: 0,
      height: 2,
      width: ["100%", "80%"],
      marginBottom: ["2", "3"]
    }}
  />
);
const SingleItem = (props, { item, index }) => {
  return (
    <Query query={SINGLE_ITEM_QUERY} variables={{ id: props.id }}>
      {({ error, loading, data }) => {
        if (error) return <Error error={error} />;
        if (loading) return <p>Loading...</p>;
        if (!data.item) return <p>No Item found for {props.id}</p>;
        const item = data.item;
        console.log("item within return", item);
        return (
          <SingleItemStyles>
            <Flex flexWrap="wrap" justifyContent="center">
              <Box
                display="flex"
                flexWrap="wrap"
                maxWidth={["90%", "70%"]}
                justifyContent="center"
              >
                <Head>
                  <title>AHCA | {item.title}</title>
                </Head>
                <Heading fontSize={[6, 7, 8]}>{item.title}</Heading>
                <Divider />
                <Box width={[1, 1 / 2]}>
                  <Image src={item.largeImage} />
                </Box>
                <Box pl={pad} width={[1, 1 / 2]}>
                  <Text pl={[0, 3]} fontSize={[2, 3]} lineHeight={1.5}>
                    {item.description}
                  </Text>
                  <Box display="flex" mt={[2, 3]}>
                    <Box
                      display="flex"
                      flexDirection="column"
                      width={1 / 2}
                      alignItems="flex-end"
                    >
                      <Text fontSize={[3, 4]} fontWeight="bold">
                        {formatMoney(item.price)}
                      </Text>
                      <Text fontSize={[1, 2]} fontWeight="body">
                        Installation included
                      </Text>
                    </Box>
                    <Box pl={[2, 4]} width={1 / 2} display="flex">
                      <AddToCart id={item.id} />
                    </Box>
                  </Box>
                </Box>
                {/* Second */}
                <Flex flexWrap="wrap-reverse">
                  <Box width={[1, 1 / 2]} py={[3, 5]}>
                    <Heading fontSize={[4, 5, 6]}>Features</Heading>

                    <ul>
                      {item.features
                        .filter((feature, i) => i <= 2)
                        .map((feature, i) => (
                          <Text
                            pl={[0, 3]}
                            fontSize={[2, 3]}
                            lineHeight={1.25}
                            pr={[0, 3]}
                            mb={[2, 3]}
                          >
                            <li>{feature}</li>
                          </Text>
                        ))}
                    </ul>
                  </Box>
                  <Box width={[1, 1 / 2]} py={[3, 5]}>
                    <Image src={item.largeImage1} />
                  </Box>
                </Flex>
                {/* // Third */}
                <Box width={[1, 1 / 2]}>
                  <Image src={item.largeImage2} />
                </Box>
                <Box pl={pad} width={[1, 1 / 2]}>
                  <Heading fontSize={[4, 5, 6]}>Specifications</Heading>

                  <ul>
                    {item.highlights
                      .filter((highlight, i) => i <= 2)
                      .map((highlight, i) => (
                        <Text
                          pl={[0, 3]}
                          fontSize={[2, 3]}
                          lineHeight={1.25}
                          pr={[0, 3]}
                          mb={[2, 3]}
                        >
                          <li>{highlight}</li>
                        </Text>
                      ))}
                  </ul>
                </Box>
              </Box>
            </Flex>
          </SingleItemStyles>
        );
      }}
    </Query>
  );
};
export default SingleItem;
export { SINGLE_ITEM_QUERY };
