import SingleItem from "../components/SingleItem";
import React, { useState, useEffect } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { CURRENT_USER_QUERY } from "../components/User";
import User from "../components/User";
import { ThemeProvider } from "emotion-theming";
import theme from "../components/theme";

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

const Item = (props, { id }) => (
  <ThemeProvider theme={theme}>
    <User>
      {({ data, loading }) => {
        let me = data ? data.me : null;
        let guest = me === null ? true : false;
        const [guestState, setGuestState] = useState(guest);
        return !guest ? (
          <div>
            <SingleItem id={props.query.id} />
          </div>
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
                  <SingleItem id={props.query.id} />
                </>
              );
            }}
          </Mutation>
        );
      }}
    </User>
  </ThemeProvider>
);

export default Item;
