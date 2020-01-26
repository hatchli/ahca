import React from "react";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";
import PropTypes from "prop-types";
import RemoveFromCart from "./RemoveFromCart";
import PromoCode from "./PromoCode";
import Error from "./ErrorMessage";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex, Button, Card, Image, Heading, Text } from "rebass";

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr 1fr auto;
`;

const CartItem = ({ cartItem }) => {
  if (!cartItem.item)
    return (
      <CartItemStyles>
        This item has been removed!
        <RemoveFromCart id={cartItem.id} />
      </CartItemStyles>
    );
  console.log("cartItem", cartItem);
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
      <Box
        mt={3}
        width={1}
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        <Box width={[2 / 8, 3 / 16]}>
          <Image src={cartItem.item.image} alt={cartItem.item.title} />
        </Box>
        <Box width={[5 / 8, 7 / 16]} display="flex" justifyContent="center">
          <div className="cart-item-details">
            <Heading fontSize={[1, 4]}>{cartItem.item.title}</Heading>
            {!cartItem.promotionPrice ? (
              <Text fontSize={[0, 2]}>
                {formatMoney(cartItem.item.price * cartItem.quantity)}
                {" - "}
                <em>
                  {cartItem.quantity} &times; {formatMoney(cartItem.item.price)}{" "}
                  each
                </em>{" "}
              </Text>
            ) : (
              <Text fontSize={[0, 2]}>
                {formatMoney(cartItem.promotionPrice * cartItem.quantity)}
                {" - "}
                <em>
                  {cartItem.quantity} &times;{" "}
                  {formatMoney(cartItem.promotionPrice)} each
                </em>
              </Text>
            )}
          </div>
        </Box>
        <Box
          width={[1, 5 / 16]}
          order={[3, 0]}
          display="flex"
          justifyContent="center"
        >
          <PromoCode id={cartItem.item.id} />
        </Box>
        <Box
          width={[1 / 8, 1 / 16]}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <RemoveFromCart id={cartItem.id} />
        </Box>
      </Box>
    </Flex>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
