import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "./User";
import User from "./User";
import { Button } from "rebass";

const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;
const pleft = [3, 4, 5, 6];

const CREATE_GUEST_MUTATION = gql`
  mutation CREATE_GUEST_MUTATION(
    $email: String
    $name: String
    $password: String
  ) {
    createGuest(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

const AddToCart = (props, { id }) => (
  <User>
    {({ data }) => {
      const { id } = props;
      let me = data ? data.me : null;
      let guest = me === null ? true : false;
      return !guest ? (
        <Mutation
          mutation={ADD_TO_CART_MUTATION}
          variables={{ id }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(addToCart, { loading, error }) => {
            return (
              <Button
                {...props}
                width={[256, 512]}
                sx={{
                  bg: "dark-green",
                  color: "white",
                  borderRadius: [2, 3],
                  cursor: "pointer"
                  // m: [3, 4]
                }}
                // ml={pleft}
                onClick={addToCart}
              >
                Add{loading && `ing`} to Cart 🛒{" "}
              </Button>
            );
          }}
        </Mutation>
      ) : (
        <Mutation
          mutation={CREATE_GUEST_MUTATION}
          variables={{ id }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(createGuest, { loading, error }) => {
            return (
              <Button
                {...props}
                sx={{
                  bg: "dark-green",
                  color: "white",
                  borderRadius: "1"
                }}
                ml={pleft}
                onClick={createGuest}
              >
                Add{loading && `ing`} to Cart 🛒{" "}
              </Button>
            );
          }}
        </Mutation>
      );
    }}
  </User>
);
export default AddToCart;
export { ADD_TO_CART_MUTATION };
