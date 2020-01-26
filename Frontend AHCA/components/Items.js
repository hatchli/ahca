import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item2 from "./Item2";
import Pagination from "./Pagination";
import { perPage } from "../config";
import { Flex, Image, Box, Header, Text, Link } from "rebass";
import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      price
      description
      image
      largeImage
      image1
      largeImage1
      image2
      largeImage2
    }
  }
`;

const Center = styled.div`
  text-align: center;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;
`;

export default class Items extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Center>
          <Pagination page={this.props.page} />
        </Center>

        <Query
          query={ALL_ITEMS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage
            // first: perPage
          }}
        >
          {({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <Flex flexWrap="wrap" justifyContent="center">
                {data.items.map((item, index) => (
                  <Box
                    width={[1, 1 / 2, 1 / 2, 1 / 2, 1 / 3]}
                    px={[2, 3, 4]}
                    py={3}
                  >
                    <Item2 item={item} key={item.id} index={index} />
                  </Box>
                ))}
              </Flex>
            );
          }}
        </Query>
        <Center>
          <Pagination />
        </Center>
      </ThemeProvider>
    );
  }
}

export { ALL_ITEMS_QUERY };
