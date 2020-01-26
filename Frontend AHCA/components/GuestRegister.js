import React, { useEffect } from "react";
import { CURRENT_USER_QUERY } from "./User";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import User from "./User";

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

const GuestRegister = (props, { id }) => {
  <User>
    {({ data }) => {
      let me = data ? data.me : null;
      let guest = me === null ? true : false;
      return !guest ? (
        props.children
      ) : (
        <Mutation
          mutation={CREATE_GUEST_MUTATION}
          variables={{ id }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(createGuest, { loading, error }) => {
            useEffect(createGuest);
            return props.children;
          }}
        </Mutation>
      );
    }}
  </User>;
};

export default GuestRegister;
