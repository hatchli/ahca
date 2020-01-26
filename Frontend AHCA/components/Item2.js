import React, { useEffect } from "react";
import User from "./User";
import DeleteItem from "./DeleteItem";
import Link from "next/link";
import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import formatMoney from "../lib/formatMoney";
import AddToCart from "./AddToCart";
import PropTypes from "prop-types";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import { Box, Flex, Button, Card, Image, Heading, Text } from "rebass";

const Item2 = ({ item, id }) => (
  <User>
    {({ data }) => {
      let me = data ? data.me : null;
      let guest = me === null ? true : false;
      return (
        <ItemStyles>
          {item.image && (
            <Link
              href={{
                pathname: "/item",
                query: { id: item.id }
              }}
            >
              <img src={item.image} alt={item.title} />
            </Link>
          )}
          <Title>
            <Link
              href={{
                pathname: "/item",
                query: { id: item.id }
              }}
            >
              <a>{item.title}</a>
            </Link>
          </Title>
          <PriceTag>{formatMoney(item.price)}</PriceTag>
          {!guest && me.permissions.includes("ADMIN") && (
            <div className="buttonList">
              <Link
                href={{
                  pathname: "update",
                  query: { id: item.id }
                }}
              >
                <a>Edit ✏️</a>
              </Link>

              {!guest && me.permissions.includes("ADMIN") && (
                <DeleteItem id={item.id}>Delete This Item</DeleteItem>
              )}
            </div>
          )}
        </ItemStyles>
      );
    }}
  </User>
);

Item2.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item2;
