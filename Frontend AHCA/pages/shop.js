import React, { useState, useEffect } from "react";
import Items from "../components/Items";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../components/User";
import User from "../components/User";

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

const Shop = (props, { id }) => (
  <User>
    {({ data, loading }) => {
      let me = data ? data.me : null;
      let guest = me === null ? true : false;
      const [guestState, setGuestState] = useState(guest);
      return !guest ? (
        <>
          <Items page={parseFloat(props.query.page) || 1} />
        </>
      ) : loading ? (
        <div>
          <h2>Loading</h2>
        </div>
      ) : (
        <Mutation
          mutation={CREATE_GUEST_MUTATION}
          variables={{ id }}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(createGuest, { loading, error }) => {
            useEffect(() => {
              async function fetchData() {
                await createGuest();
              }
              !loading && guest && fetchData();
            }, []);
            setGuestState(false);
            return (
              <>
                <Items page={parseFloat(props.query.page) || 1} />
              </>
            );
          }}
        </Mutation>
      );
    }}
  </User>
);

export default Shop;
