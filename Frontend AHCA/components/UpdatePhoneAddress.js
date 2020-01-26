import React, { Component } from "react";
import { Query, Mutation } from "react-apollo";
import { CURRENT_USER_QUERY } from "./User";
import gql from "graphql-tag";
import { Label, Input, Select, Textarea, Radio, Checkbox } from "@rebass/forms";
import { Box, Flex, Button, Card, Image, Heading, Text } from "rebass";
import Head from "next/head";
import TakeMyMoney from "./TakeMyMoney";

const UPDATE_PHONE_ADDRESS = gql`
  mutation UPDATE_PHONE_ADDRESS(
    $name: String!
    $address: String!
    $postal: String!
    $phone: String!
    $email: String!
  ) {
    updatePhoneAddress(
      name: $name
      address: $address
      postal: $postal
      phone: $phone
      email: $email
    ) {
      id
    }
  }
`;

class updatePhoneAddress extends Component {
  state = {
    name: "",
    address: "",
    postal: "",
    email: "",
    phone: "",
    checkout: false
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
    if (
      this.state.name !== "" &&
      this.state.address !== "" &&
      this.state.postal !== "" &&
      this.state.email !== "" &&
      this.state.phone !== ""
    ) {
      this.setState({ checkout: true });
    }
    if (
      this.state.name == "" ||
      this.state.address == "" ||
      this.state.postal == "" ||
      this.state.email == "" ||
      this.state.phone == ""
    ) {
      this.setState({ checkout: false });
    }
  };

  render() {
    const maround = 0;
    const pleft = 0;
    const wconst = [1, 3 / 4];
    const fconst = [1, 2];
    const myconst = [2];
    // const hconst = [7, 2];

    // const [county] = this.props;
    return (
      <>
        <Query query={CURRENT_USER_QUERY}>
          {({ data, loading }) => {
            return (
              <Mutation mutation={UPDATE_PHONE_ADDRESS} variables={this.state}>
                {(updatePhoneAddress, { loading, error }) => {
                  return (
                    <Box
                      as="form"
                      onSubmit={async e => {
                        e.preventDefault();
                        const res = await updatePhoneAddress();
                        console.log(res);
                      }}
                      pl={pleft}
                      py={3}
                      fontSize={fconst}
                    >
                      <Flex alignItems="center" justifyContent="center">
                        <Box
                          alignItems="center"
                          display="flex"
                          flexDirection="column"
                          width="100%"
                        >
                          <Heading fontSize={[3, 5]}></Heading>
                          <Box
                            width={wconst}
                            mx={maround}
                            pl={pleft}
                            my={myconst}
                          >
                            <Input
                              required
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Name"
                              value={this.state.name}
                              onChange={async e => {
                                this.handleChange(e);
                              }}
                            />
                          </Box>
                          <Box width={wconst} mx={maround} my={myconst}>
                            <Input
                              required
                              id="phone"
                              name="phone"
                              type="text"
                              placeholder="Phone"
                              value={this.state.phone}
                              onChange={async e => {
                                this.handleChange(e);
                              }}
                            />
                          </Box>
                          <Box width={wconst} mx={maround} my={myconst}>
                            <Input
                              required
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Email"
                              value={this.state.email}
                              onChange={async e => {
                                this.handleChange(e);
                              }}
                            />
                          </Box>
                          <Box width={wconst} mx={maround} my={myconst}>
                            <Input
                              required
                              id="address"
                              name="address"
                              type="text"
                              placeholder="Address"
                              value={this.state.address}
                              onChange={async e => {
                                this.handleChange(e);
                              }}
                            />
                          </Box>
                          <Box width={wconst} mx={maround} my={myconst}>
                            <Input
                              required
                              id="postal"
                              name="postal"
                              type="text"
                              placeholder="Zip Code"
                              value={this.state.postal}
                              onChange={async e => {
                                this.handleChange(e);
                              }}
                            />
                          </Box>
                          {this.state.checkout ? (
                            <Button
                              type="submit"
                              bg="dark-green"
                              width={wconst}
                              mx={maround}
                              my={myconst}
                            >
                              <TakeMyMoney>Proceed to Checkout</TakeMyMoney>
                            </Button>
                          ) : (
                            <Button
                              disabled
                              type="submit"
                              bg="dark-gray"
                              width={wconst}
                              mx={maround}
                              my={myconst}
                            >
                              Proceed to Checkout
                            </Button>
                          )}
                        </Box>
                      </Flex>
                    </Box>
                  );
                }}
              </Mutation>
            );
          }}
        </Query>
      </>
    );
  }
}

export default updatePhoneAddress;
