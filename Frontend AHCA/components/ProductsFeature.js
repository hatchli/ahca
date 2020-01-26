import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
// import FrontPageItem from "./FrontPageItem";
import { ProductCard } from "./ProductCard";
import { Flex } from "rebass";
import ItemsFrontPage from "./ItemsFrontPage";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = 3) {
    items(first: $first, skip: $skip, orderBy: createdAt_DESC) {
      id
      title
      categories
      features
      highlights
      sale
      price
      description
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  /* display: flex; */
  /* align-items: center;
  flex-direction: row;
  flex-wrap: wrap; */
`;

export default class ProductsFeature extends Component {
  render() {
    return (
      <Query
        query={ALL_ITEMS_QUERY}
        variables={
          {
            // skip: this.props.page * perPage - perPage
            // first: perPage
          }
        }
      >
        {({ data, error, loading }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error: {error.message}</p>;
          return (
            <Flex
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              {data.items.map((item, index) => (
                <ItemsFrontPage key={item.id} item={item} index={index} />
              ))}
            </Flex>
          );
        }}
      </Query>
    );
  }
}

export { ALL_ITEMS_QUERY };
