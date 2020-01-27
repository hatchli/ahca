import React, { useState } from "react";
import wait from "waait";
import { Query, Mutation } from "react-apollo";
import User from "./User";
import gql from "graphql-tag";
import CartStyles from "./styles/CartStyles";
import Supreme from "./styles/Supreme";
import CloseButton from "./styles/CloseButton";
import SickButton from "./styles/SickButton";
import CartItem from "./CartItem";
import calcTotalPrice from "../lib/calcTotalPrice";
import formatMoney from "../lib/formatMoney";
import { adopt } from "react-adopt";
import TakeMyMoney from "./TakeMyMoney";
import UpdatePhoneAddress from "./UpdatePhoneAddress";

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  // cartItem: ({ render }) => <CartItem>{render}</CartItem>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
});

const Cart = (props, { item }) => {
  const [cartState, setCartState] = useState(true);
  const flipCart = () => {
    return setCartState(!cartState);
  };
  return (
    <Composed>
      {({ user, toggleCart, localState }) => {
        const me = user.data ? user.data.me : null;
        if (!me) return null;

        return (
          <CartStyles open={localState.data.cartOpen}>
            <header>
              <CloseButton onClick={toggleCart} title="close">
                &times;
              </CloseButton>
              {me.permissions.includes("GUEST") ? (
                <Supreme>Guest Cart</Supreme>
              ) : (
                <Supreme>{me.name}'s Cart</Supreme>
              )}
              <p>
                You have {me.cart.length} item
                {me.cart.length === 1 ? "" : "s"} in your cart
              </p>
            </header>
            <ul>
              {cartState &&
                me.cart.map(cartItem => (
                  <>
                    <CartItem key={cartItem.id} cartItem={cartItem} />
                  </>
                ))}
              {!cartState && me.permissions.includes("GUEST") && (
                <UpdatePhoneAddress />
              )}
            </ul>
            <footer>
              <p>{formatMoney(calcTotalPrice(me.cart))}</p>

              {me.cart.length && !cartState ? (
                <TakeMyMoney>
                  <SickButton disabled={false}>Checkout</SickButton>
                </TakeMyMoney>
              ) : me.permissions.includes("GUEST") ? (
                <SickButton onClick={() => flipCart()} disabled={false}>
                  Checkout
                </SickButton>
              ) : (
                <TakeMyMoney>
                  <SickButton disabled={true}>Checkout</SickButton>
                </TakeMyMoney>
              )}
            </footer>
          </CartStyles>
        );
      }}
    </Composed>
  );
};

export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
